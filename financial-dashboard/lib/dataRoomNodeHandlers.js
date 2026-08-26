import {
  DECISION_TTL_SEC,
  LOGIN_PATH,
  MAGIC_TTL_SEC,
  ROLE_LABELS,
  SESSION_MAX_AGE_SEC,
  buildSessionCookie,
  cleanField,
  clearSessionCookie,
  isAdminEmail,
  isLikelyEmail,
  newNonce,
  normalizeEmail,
  readSession,
  safeNextPath,
  signPayload,
  unixIn,
  verifyPayload,
  wantsJson,
} from './dataRoomAuth.js'
import {
  consumeTicket,
  ensureAdmins,
  getUser,
  listUsers,
  publicUser,
  putTicket,
  upsertUser,
} from './dataRoomStore.js'

const ALLOWED_ROLES = new Set(['staff', 'advisor', 'other'])

function header(req, name) {
  const headers = req.headers || {}
  return headers[name] || headers[name.toLowerCase()] || ''
}

function isSecureRequest(req) {
  const proto = String(header(req, 'x-forwarded-proto') || '').split(',')[0].trim()
  return proto === 'https'
}

function readStream(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function parseBodyString(raw, contentType) {
  const type = String(contentType || '')
  if (type.includes('application/json')) {
    try {
      const parsed = JSON.parse(raw || '{}')
      return parsed && typeof parsed === 'object' ? parsed : {}
    } catch {
      return {}
    }
  }
  const params = new URLSearchParams(raw || '')
  const out = {}
  for (const [key, value] of params.entries()) {
    out[key] = value
  }
  return out
}

export async function readRequestBody(req) {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    return req.body
  }
  if (typeof req.body === 'string') {
    return parseBodyString(req.body, header(req, 'content-type'))
  }
  const raw = await readStream(req)
  return parseBodyString(raw, header(req, 'content-type'))
}

export function requestUrl(req) {
  try {
    return new URL(req.url || '/', 'http://local.invalid')
  } catch {
    return new URL('http://local.invalid/')
  }
}

function sendJson(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(payload))
}

function sendRedirect(res, location) {
  res.statusCode = 302
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Location', location)
  res.end()
}

function loginRedirect(query) {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(query)) {
    if (value) params.set(key, String(value))
  }
  const qs = params.toString()
  return qs ? `${LOGIN_PATH}?${qs}` : LOGIN_PATH
}

export function publicOrigin(req, env) {
  if (env.publicUrl) return env.publicUrl
  const proto = String(header(req, 'x-forwarded-proto') || '').split(',')[0].trim() || 'http'
  const host = header(req, 'x-forwarded-host') || header(req, 'host') || 'localhost:5173'
  return `${proto}://${host}`
}

async function sendEmail(env, { to, subject, text }) {
  if (!env.resendKey) {
    console.log(`\n[data-room email → ${to}]\n${subject}\n\n${text}\n`)
    return { emailed: false, logged: true }
  }
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.resendFrom,
      to: [to],
      subject,
      text,
    }),
  })
  if (!response.ok) {
    console.error('Resend rejected email', await response.text())
    return { emailed: false, logged: false }
  }
  return { emailed: true, logged: false }
}

async function createMagicLink(env, { email, next = '/' }) {
  const nonce = newNonce()
  const exp = unixIn(MAGIC_TTL_SEC)
  await putTicket(env, nonce, { typ: 'magic', email: normalizeEmail(email), exp, used: false })
  const token = await signPayload(
    { typ: 'magic', email: normalizeEmail(email), nonce, next: safeNextPath(next), exp },
    env.cookieSecret
  )
  return token
}

async function sessionCookieFor(user, env, req) {
  const token = await signPayload(
    {
      typ: 'session',
      email: user.email,
      name: user.name || '',
      role: user.role || 'other',
      admin: Boolean(user.admin || isAdminEmail(user.email, env)),
      exp: unixIn(SESSION_MAX_AGE_SEC),
    },
    env.cookieSecret
  )
  return buildSessionCookie(token, { secure: isSecureRequest(req) })
}

async function requireConfigured(req, res, env, json) {
  if (env.cookieSecret) return true
  if (json) {
    sendJson(res, 503, { ok: false, error: 'unconfigured' })
    return false
  }
  sendRedirect(res, loginRedirect({ error: 'unconfigured' }))
  return false
}

export async function currentSession(req, env) {
  const session = await readSession(header(req, 'cookie'), env.cookieSecret)
  if (!session) return null
  const user = await getUser(env, session.email)
  if (!user || user.status !== 'approved') return null
  return {
    ...session,
    name: user.name || session.name,
    role: user.role || session.role,
    admin: Boolean(user.admin || isAdminEmail(user.email, env)),
  }
}

export async function handleLogin(req, res, env) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end('Method Not Allowed')
    return
  }

  const json = wantsJson(req)
  if (!(await requireConfigured(req, res, env, json))) return

  const body = await readRequestBody(req)
  const next = safeNextPath(body.next)
  const submittedPassword = String(body.password || '')
  const email = normalizeEmail(body.email)

  if (submittedPassword && env.password && submittedPassword === env.password) {
    await ensureAdmins(env)
    const adminEmail = env.admins[0]
    const user = await getUser(env, adminEmail)
    if (!user) {
      if (json) {
        sendJson(res, 503, { ok: false, error: 'unconfigured' })
        return
      }
      sendRedirect(res, loginRedirect({ error: 'unconfigured', next }))
      return
    }
    res.setHeader('Set-Cookie', await sessionCookieFor(user, env, req))
    if (json) {
      sendJson(res, 200, { ok: true, next })
      return
    }
    sendRedirect(res, next)
    return
  }

  if (!isLikelyEmail(email)) {
    if (json) {
      sendJson(res, 400, { ok: false, error: 'invalid_email' })
      return
    }
    sendRedirect(res, loginRedirect({ error: 'invalid_email', next }))
    return
  }

  await ensureAdmins(env)
  const user = await getUser(env, email)

  if (!user) {
    if (json) {
      sendJson(res, 403, { ok: false, error: 'unknown' })
      return
    }
    sendRedirect(res, loginRedirect({ error: 'unknown', next }))
    return
  }

  if (user.status === 'pending') {
    if (json) {
      sendJson(res, 403, { ok: false, error: 'pending' })
      return
    }
    sendRedirect(res, loginRedirect({ error: 'pending', next }))
    return
  }

  if (user.status !== 'approved') {
    if (json) {
      sendJson(res, 403, { ok: false, error: 'denied' })
      return
    }
    sendRedirect(res, loginRedirect({ error: 'denied', next }))
    return
  }

  const lastSent = user.lastMagicAt ? Date.parse(user.lastMagicAt) : 0
  if (lastSent && Date.now() - lastSent < 45 * 1000) {
    if (json) {
      sendJson(res, 429, { ok: false, error: 'slow_down' })
      return
    }
    sendRedirect(res, loginRedirect({ error: 'slow_down', next }))
    return
  }

  const token = await createMagicLink(env, { email, next })
  const link = `${publicOrigin(req, env)}/api/magic?token=${encodeURIComponent(token)}`
  await upsertUser(env, { ...user, lastMagicAt: new Date().toISOString() })
  const sent = await sendEmail(env, {
    to: email,
    subject: 'Your Kahana data room sign-in link',
    text: [
      `Hi${user.name ? ` ${user.name}` : ''},`,
      '',
      'Use this link to open the Kahana data room. It expires in 20 minutes and can be used once.',
      '',
      link,
      '',
      'If you did not ask for this, ignore the email.',
    ].join('\n'),
  })

  const query = { sent: sent.emailed ? '1' : 'logged', next }
  if (env.devLinks && !sent.emailed) query.dev = token

  if (json) {
    sendJson(res, 200, { ok: true, emailed: sent.emailed, ...(env.devLinks && !sent.emailed ? { link } : {}) })
    return
  }
  sendRedirect(res, loginRedirect(query))
}

export async function handleLogout(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'GET, POST')
    res.end('Method Not Allowed')
    return
  }

  res.setHeader('Set-Cookie', clearSessionCookie({ secure: isSecureRequest(req) }))
  if (wantsJson(req)) {
    sendJson(res, 200, { ok: true })
    return
  }
  sendRedirect(res, LOGIN_PATH)
}

export async function handleMagic(req, res, env) {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.setHeader('Allow', 'GET')
    res.end('Method Not Allowed')
    return
  }

  const token = requestUrl(req).searchParams.get('token') || ''
  const payload = await verifyPayload(token, env.cookieSecret)
  if (!payload || payload.typ !== 'magic' || !payload.nonce) {
    sendRedirect(res, loginRedirect({ error: 'expired' }))
    return
  }

  const ticket = await consumeTicket(env, payload.nonce)
  if (!ticket || ticket.email !== payload.email) {
    sendRedirect(res, loginRedirect({ error: 'expired' }))
    return
  }

  const user = await getUser(env, payload.email)
  if (!user || user.status !== 'approved') {
    sendRedirect(res, loginRedirect({ error: 'denied' }))
    return
  }

  await upsertUser(env, { ...user, lastLoginAt: new Date().toISOString() })
  res.setHeader('Set-Cookie', await sessionCookieFor(user, env, req))
  sendRedirect(res, safeNextPath(payload.next))
}

export async function handleRequestAccess(req, res, env) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end('Method Not Allowed')
    return
  }

  const json = wantsJson(req)
  if (!(await requireConfigured(req, res, env, json))) return

  const body = await readRequestBody(req)
  const name = cleanField(body.name, 120)
  const email = normalizeEmail(body.email)
  const role = cleanField(body.role, 40)
  const reason = cleanField(body.reason, 2000)

  if (!name || !isLikelyEmail(email) || !ALLOWED_ROLES.has(role) || reason.length < 8) {
    if (json) {
      sendJson(res, 400, { ok: false, error: 'invalid_request' })
      return
    }
    sendRedirect(res, loginRedirect({ requestError: 'invalid' }))
    return
  }

  const existing = await getUser(env, email)
  if (existing?.status === 'approved') {
    if (json) {
      sendJson(res, 200, { ok: true, alreadyApproved: true })
      return
    }
    sendRedirect(res, loginRedirect({ error: 'use_email' }))
    return
  }

  const user = await upsertUser(env, {
    email,
    name,
    role,
    reason,
    status: 'pending',
    admin: isAdminEmail(email, env),
  })

  const origin = publicOrigin(req, env)
  const exp = unixIn(DECISION_TTL_SEC)
  const approveToken = await signPayload({ typ: 'approve', email, exp }, env.cookieSecret)
  const denyToken = await signPayload({ typ: 'deny', email, exp }, env.cookieSecret)
  const approveUrl = `${origin}/api/access/decision?token=${encodeURIComponent(approveToken)}`
  const denyUrl = `${origin}/api/access/decision?token=${encodeURIComponent(denyToken)}`
  const roleLabel = ROLE_LABELS[role] || role

  const text = [
    `${name} requested access to the Kahana data room.`,
    '',
    `Email: ${email}`,
    `Role: ${roleLabel}`,
    '',
    'Why they need access:',
    reason,
    '',
    `Approve: ${approveUrl}`,
    `Deny: ${denyUrl}`,
    '',
    'You can also manage people at /access after signing in.',
  ].join('\n')

  const sent = await sendEmail(env, {
    to: env.accessTo,
    subject: `Data room access request: ${name} (${roleLabel})`,
    text,
  })

  if (env.devLinks && !sent.emailed) {
    console.log('\n[data-room approve/deny links]\n' + text + '\n')
  }

  if (json) {
    sendJson(res, 200, {
      ok: true,
      emailed: sent.emailed,
      status: user.status,
      ...(env.devLinks && !sent.emailed ? { approveUrl, denyUrl } : {}),
    })
    return
  }
  sendRedirect(res, loginRedirect({ requested: sent.emailed ? '1' : 'logged' }))
}

export async function handleDecision(req, res, env) {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.setHeader('Allow', 'GET')
    res.end('Method Not Allowed')
    return
  }

  const token = requestUrl(req).searchParams.get('token') || ''
  const payload = await verifyPayload(token, env.cookieSecret)
  if (!payload || (payload.typ !== 'approve' && payload.typ !== 'deny')) {
    sendRedirect(res, loginRedirect({ error: 'expired' }))
    return
  }

  const user = await getUser(env, payload.email)
  if (!user) {
    sendRedirect(res, loginRedirect({ error: 'unknown' }))
    return
  }

  if (payload.typ === 'deny') {
    await upsertUser(env, { ...user, status: 'denied', decidedBy: 'email-link' })
    sendRedirect(res, loginRedirect({ decided: 'denied' }))
    return
  }

  const approved = await upsertUser(env, {
    ...user,
    status: 'approved',
    admin: Boolean(user.admin || isAdminEmail(user.email, env)),
    decidedBy: 'email-link',
    approvedBy: 'email-link',
  })
  const magic = await createMagicLink(env, { email: approved.email })
  const link = `${publicOrigin(req, env)}/api/magic?token=${encodeURIComponent(magic)}`
  await sendEmail(env, {
    to: approved.email,
    subject: 'You have access to the Kahana data room',
    text: [
      `Hi${approved.name ? ` ${approved.name}` : ''},`,
      '',
      'Your request was approved. Open the data room with this link (expires in 20 minutes):',
      '',
      link,
      '',
      'Next time, enter your email on the sign-in page and we will send a new link.',
    ].join('\n'),
  })
  const session = await currentSession(req, env)
  if (session?.admin) {
    sendRedirect(res, '/access?flash=approved')
    return
  }
  sendRedirect(res, loginRedirect({ decided: 'approved' }))
}

export async function handleSession(req, res, env) {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.setHeader('Allow', 'GET')
    res.end('Method Not Allowed')
    return
  }
  const session = await currentSession(req, env)
  if (!session) {
    sendJson(res, 401, { ok: false })
    return
  }
  sendJson(res, 200, { ok: true, ...session })
}

async function requireAdmin(req, res, env) {
  const session = await currentSession(req, env)
  if (!session?.admin) {
    sendJson(res, 403, { ok: false, error: 'admin_only' })
    return null
  }
  return session
}

export async function handlePeople(req, res, env) {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.setHeader('Allow', 'GET')
    res.end('Method Not Allowed')
    return
  }
  if (!(await requireAdmin(req, res, env))) return
  const people = (await listUsers(env)).map(publicUser)
  sendJson(res, 200, { ok: true, people })
}

export async function handleInvite(req, res, env) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end('Method Not Allowed')
    return
  }
  const admin = await requireAdmin(req, res, env)
  if (!admin) return

  const body = await readRequestBody(req)
  const name = cleanField(body.name, 120)
  const email = normalizeEmail(body.email)
  const role = cleanField(body.role, 40) || 'staff'
  const makeAdmin = body.admin === true || body.admin === 'true'

  if (!isLikelyEmail(email) || !ALLOWED_ROLES.has(role)) {
    sendJson(res, 400, { ok: false, error: 'invalid_request' })
    return
  }

  const user = await upsertUser(env, {
    email,
    name,
    role,
    status: 'approved',
    admin: makeAdmin || isAdminEmail(email, env),
    reason: cleanField(body.reason, 500) || `Invited by ${admin.email}`,
    approvedBy: admin.email,
  })

  const magic = await createMagicLink(env, { email })
  const link = `${publicOrigin(req, env)}/api/magic?token=${encodeURIComponent(magic)}`
  const sent = await sendEmail(env, {
    to: email,
    subject: 'You are invited to the Kahana data room',
    text: [
      `Hi${name ? ` ${name}` : ''},`,
      '',
      `${admin.name || admin.email} invited you to the Kahana internal data room.`,
      'Open this link to sign in (expires in 20 minutes):',
      '',
      link,
      '',
      'Later, enter this email on the sign-in page to get a new link.',
    ].join('\n'),
  })

  sendJson(res, 200, {
    ok: true,
    person: publicUser(user),
    emailed: sent.emailed,
    ...(env.devLinks && !sent.emailed ? { link } : {}),
  })
}

export async function handleRevoke(req, res, env) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end('Method Not Allowed')
    return
  }
  const admin = await requireAdmin(req, res, env)
  if (!admin) return

  const body = await readRequestBody(req)
  const email = normalizeEmail(body.email)
  if (!isLikelyEmail(email)) {
    sendJson(res, 400, { ok: false, error: 'invalid_email' })
    return
  }
  if (isAdminEmail(email, env)) {
    sendJson(res, 400, { ok: false, error: 'cannot_revoke_directory_admin' })
    return
  }
  const user = await getUser(env, email)
  if (!user) {
    sendJson(res, 404, { ok: false, error: 'unknown' })
    return
  }
  const next = await upsertUser(env, {
    ...user,
    status: 'revoked',
    admin: false,
    revokedBy: admin.email,
  })
  sendJson(res, 200, { ok: true, person: publicUser(next) })
}

export async function handleApproveFromAdmin(req, res, env) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end('Method Not Allowed')
    return
  }
  const admin = await requireAdmin(req, res, env)
  if (!admin) return

  const body = await readRequestBody(req)
  const email = normalizeEmail(body.email)
  const decision = cleanField(body.decision, 20)
  const user = await getUser(env, email)
  if (!user) {
    sendJson(res, 404, { ok: false, error: 'unknown' })
    return
  }

  if (decision === 'deny') {
    const next = await upsertUser(env, { ...user, status: 'denied', decidedBy: admin.email })
    sendJson(res, 200, { ok: true, person: publicUser(next) })
    return
  }

  const approved = await upsertUser(env, {
    ...user,
    status: 'approved',
    admin: Boolean(user.admin || isAdminEmail(user.email, env)),
    approvedBy: admin.email,
  })
  const magic = await createMagicLink(env, { email })
  const link = `${publicOrigin(req, env)}/api/magic?token=${encodeURIComponent(magic)}`
  const sent = await sendEmail(env, {
    to: email,
    subject: 'You have access to the Kahana data room',
    text: [
      `Hi${approved.name ? ` ${approved.name}` : ''},`,
      '',
      'Your request was approved. Open the data room with this link (expires in 20 minutes):',
      '',
      link,
      '',
      'Next time, enter your email on the sign-in page and we will send a new link.',
    ].join('\n'),
  })
  sendJson(res, 200, {
    ok: true,
    person: publicUser(approved),
    emailed: sent.emailed,
    ...(env.devLinks && !sent.emailed ? { link } : {}),
  })
}

export async function handleAccessRoute(req, res, env, pathname) {
  if (pathname === '/api/access/people') return handlePeople(req, res, env)
  if (pathname === '/api/access/invite') return handleInvite(req, res, env)
  if (pathname === '/api/access/revoke') return handleRevoke(req, res, env)
  if (pathname === '/api/access/decision') return handleDecision(req, res, env)
  if (pathname === '/api/access/approve') return handleApproveFromAdmin(req, res, env)
  sendJson(res, 404, { ok: false, error: 'not_found' })
}
