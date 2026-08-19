export const COOKIE_NAME = 'dr_session'
export const LOGIN_PATH = '/login.html'
export const GATE_PATH = '/open-from-kahana.html'
export const SESSION_MAX_AGE_SEC = 60 * 60 * 24 * 7
export const MAGIC_TTL_SEC = 60 * 20
export const DECISION_TTL_SEC = 60 * 60 * 24 * 7
export const ROLE_LABELS = {
  staff: 'Staff / onboarding',
  advisor: 'Advisor',
  other: 'Other',
}

const PUBLIC_PATHS = new Set([
  LOGIN_PATH,
  GATE_PATH,
  '/robots.txt',
  '/favicon.ico',
  '/api/login',
  '/api/logout',
  '/api/request-access',
  '/api/magic',
  '/api/access/decision',
])

export function getAuthEnv(source = process.env) {
  const password = String(source.DATA_ROOM_PASSWORD || '').trim()
  const cookieSecret = String(source.DATA_ROOM_COOKIE_SECRET || password).trim()
  const admins = String(source.DATA_ROOM_ADMINS || source.DATA_ROOM_ACCESS_TO || 'adam@kahana.io')
    .split(',')
    .map((email) => normalizeEmail(email))
    .filter(Boolean)
  const accessTo = String(source.DATA_ROOM_ACCESS_TO || admins[0] || 'adam@kahana.io').trim()
  const resendKey = String(source.RESEND_API_KEY || '').trim()
  const resendFrom = String(
    source.RESEND_FROM || 'Kahana Data Room <noreply@kahana.io>'
  ).trim()
  const publicUrl = String(source.DATA_ROOM_PUBLIC_URL || '').trim().replace(/\/$/, '')
  const devLinks = String(source.DATA_ROOM_DEV_LINKS || '').toLowerCase() === 'true'
  const kvUrl = String(source.KV_REST_API_URL || '').trim().replace(/\/$/, '')
  const kvToken = String(source.KV_REST_API_TOKEN || '').trim()
  const kahanaEmbedJwtSecret = String(source.KNOWLEDGE_BASE_EMBED_JWT_SECRET || '').trim()

  return {
    password,
    cookieSecret,
    admins,
    accessTo,
    resendKey,
    resendFrom,
    publicUrl,
    devLinks,
    kvUrl,
    kvToken,
    kahanaEmbedJwtSecret,
  }
}

export function isAdminEmail(email, env) {
  return (env.admins || []).includes(normalizeEmail(email))
}

export function isPublicPath(pathname) {
  if (!pathname) return false
  return PUBLIC_PATHS.has(pathname)
}

export function isStaticAssetPath(pathname) {
  if (!pathname) return false
  return pathname.startsWith('/assets/') || pathname.startsWith('/logos/')
}

export function parseCookies(header) {
  const out = {}
  if (!header) return out
  for (const part of String(header).split(';')) {
    const idx = part.indexOf('=')
    if (idx === -1) continue
    const key = part.slice(0, idx).trim()
    const value = part.slice(idx + 1).trim()
    if (!key) continue
    try {
      out[key] = decodeURIComponent(value)
    } catch {
      out[key] = value
    }
  }
  return out
}

export function safeNextPath(next) {
  if (typeof next !== 'string' || !next.startsWith('/') || next.startsWith('//')) {
    return '/'
  }
  if (next.includes('\\') || next.includes('://')) return '/'
  if (next.startsWith(LOGIN_PATH)) return '/'
  return next
}

export function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false
  const max = Math.max(a.length, b.length)
  let mismatch = a.length ^ b.length
  for (let i = 0; i < max; i += 1) {
    mismatch |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0)
  }
  return mismatch === 0
}

export function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase()
}

export function isLikelyEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 200
}

export function cleanField(value, max = 500) {
  return String(value || '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max)
}

export function wantsJson(req) {
  const accept = String(req.headers?.accept || req.headers?.get?.('accept') || '')
  const contentType = String(
    req.headers?.['content-type'] || req.headers?.get?.('content-type') || ''
  )
  return accept.includes('application/json') || contentType.includes('application/json')
}

function base64UrlEncode(str) {
  const bytes = new TextEncoder().encode(str)
  let bin = ''
  for (const byte of bytes) bin += String.fromCharCode(byte)
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

function base64UrlDecode(str) {
  const pad = str.replace(/-/g, '+').replace(/_/g, '/')
  const padded = pad + '='.repeat((4 - (pad.length % 4)) % 4)
  const bin = atob(padded)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i)
  return new TextDecoder().decode(bytes)
}

async function hmacHex(secret, data) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data))
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function signPayload(payload, secret) {
  const data = base64UrlEncode(JSON.stringify(payload))
  const sig = await hmacHex(secret, data)
  return `${data}.${sig}`
}

export async function verifyPayload(token, secret) {
  if (!secret || typeof token !== 'string' || !token.includes('.')) return null
  const [data, sig] = token.split('.')
  if (!data || !sig) return null
  const expected = await hmacHex(secret, data)
  if (!timingSafeEqual(sig, expected)) return null
  try {
    const payload = JSON.parse(base64UrlDecode(data))
    if (!payload || typeof payload !== 'object') return null
    if (payload.exp && Date.now() / 1000 > payload.exp) return null
    return payload
  } catch {
    return null
  }
}

export async function readSession(cookieHeader, cookieSecret) {
  const token = parseCookies(cookieHeader)[COOKIE_NAME]
  if (!token) return null
  const payload = await verifyPayload(token, cookieSecret)
  if (!payload || payload.typ !== 'session' || !payload.email) return null
  return {
    email: normalizeEmail(payload.email),
    name: payload.name || '',
    role: payload.role || 'other',
    admin: Boolean(payload.admin),
  }
}

export function buildSessionCookie(token, { secure = false, maxAge = SESSION_MAX_AGE_SEC } = {}) {
  const parts = [
    `${COOKIE_NAME}=${token}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${maxAge}`,
  ]
  if (secure) parts.push('Secure')
  return parts.join('; ')
}

export function clearSessionCookie({ secure = false } = {}) {
  const parts = [
    `${COOKIE_NAME}=`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Max-Age=0',
  ]
  if (secure) parts.push('Secure')
  return parts.join('; ')
}

export function newNonce() {
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  return [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export function unixIn(seconds) {
  return Math.floor(Date.now() / 1000) + seconds
}
