import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { isAdminEmail, normalizeEmail } from './dataRoomAuth.js'

const STORE_KEY = 'data_room_access'
const FILE_NAME = 'access-store.json'

function emptyStore() {
  return { users: {}, tickets: {} }
}

function nowIso() {
  return new Date().toISOString()
}

function filePath() {
  return path.join(process.cwd(), 'data', FILE_NAME)
}

async function kvGet(env) {
  const response = await fetch(`${env.kvUrl}/get/${STORE_KEY}`, {
    headers: { Authorization: `Bearer ${env.kvToken}` },
  })
  if (!response.ok) return emptyStore()
  const body = await response.json()
  const raw = body?.result
  if (!raw) return emptyStore()
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw)
    } catch {
      return emptyStore()
    }
  }
  if (typeof raw === 'object') return raw
  return emptyStore()
}

async function kvSet(env, store) {
  const response = await fetch(`${env.kvUrl}/set/${STORE_KEY}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.kvToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(store),
  })
  if (!response.ok) {
    throw new Error(`KV set failed (${response.status})`)
  }
}

async function fileGet() {
  try {
    const raw = await readFile(filePath(), 'utf8')
    return JSON.parse(raw)
  } catch (error) {
    if (error && error.code === 'ENOENT') return emptyStore()
    throw error
  }
}

async function fileSet(store) {
  const dir = path.dirname(filePath())
  await mkdir(dir, { recursive: true })
  await writeFile(filePath(), JSON.stringify(store, null, 2) + '\n', 'utf8')
}

function useKv(env) {
  return Boolean(env?.kvUrl && env?.kvToken)
}

export async function loadStore(env) {
  const store = useKv(env) ? await kvGet(env) : await fileGet()
  if (!store.users) store.users = {}
  if (!store.tickets) store.tickets = {}
  return store
}

export async function saveStore(env, store) {
  pruneTickets(store)
  if (useKv(env)) {
    await kvSet(env, store)
    return
  }
  await fileSet(store)
}

function pruneTickets(store) {
  const now = Math.floor(Date.now() / 1000)
  for (const [nonce, ticket] of Object.entries(store.tickets || {})) {
    if (!ticket || ticket.used || ticket.exp < now) delete store.tickets[nonce]
  }
}

export async function ensureAdmins(env) {
  const store = await loadStore(env)
  let changed = false
  for (const email of env.admins || []) {
    const existing = store.users[email]
    if (!existing) {
      store.users[email] = {
        email,
        name: email === 'adam@kahana.io' ? 'Adam Kershner' : '',
        role: 'staff',
        status: 'approved',
        admin: true,
        reason: 'Directory admin',
        createdAt: nowIso(),
        updatedAt: nowIso(),
        approvedBy: 'system',
      }
      changed = true
      continue
    }
    if (!existing.admin || existing.status !== 'approved') {
      existing.admin = true
      existing.status = 'approved'
      existing.updatedAt = nowIso()
      changed = true
    }
  }
  if (changed) await saveStore(env, store)
  return store
}

export async function getUser(env, email) {
  const store = await ensureAdmins(env)
  return store.users[normalizeEmail(email)] || null
}

export async function upsertUser(env, patch) {
  const store = await ensureAdmins(env)
  const email = normalizeEmail(patch.email)
  const existing = store.users[email] || {
    email,
    name: '',
    role: 'other',
    status: 'pending',
    admin: false,
    reason: '',
    createdAt: nowIso(),
  }
  const next = {
    ...existing,
    ...patch,
    email,
    admin: isAdminEmail(email, env) ? true : Boolean(patch.admin ?? existing.admin),
    updatedAt: nowIso(),
  }
  store.users[email] = next
  await saveStore(env, store)
  return next
}

export async function listUsers(env) {
  const store = await ensureAdmins(env)
  return Object.values(store.users).sort((a, b) => {
    const rank = { pending: 0, approved: 1, denied: 2, revoked: 3 }
    const delta = (rank[a.status] ?? 9) - (rank[b.status] ?? 9)
    if (delta !== 0) return delta
    return String(a.email).localeCompare(String(b.email))
  })
}

export async function putTicket(env, nonce, ticket) {
  const store = await ensureAdmins(env)
  store.tickets[nonce] = ticket
  await saveStore(env, store)
}

export async function consumeTicket(env, nonce) {
  const store = await ensureAdmins(env)
  const ticket = store.tickets[nonce]
  if (!ticket) return null
  if (ticket.used) return null
  if (ticket.exp < Math.floor(Date.now() / 1000)) return null
  ticket.used = true
  await saveStore(env, store)
  return ticket
}

export function publicUser(user) {
  if (!user) return null
  return {
    email: user.email,
    name: user.name || '',
    role: user.role || 'other',
    status: user.status,
    admin: Boolean(user.admin),
    reason: user.reason || '',
    createdAt: user.createdAt || '',
    updatedAt: user.updatedAt || '',
    lastLoginAt: user.lastLoginAt || '',
  }
}
