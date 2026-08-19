import { timingSafeEqual } from './dataRoomAuth.js'

export const KAHANA_EMBED_TYP = 'kahana_embed'
export const KAHANA_EMBED_QUERY = 'kahana_embed'

function base64UrlToBytes(str) {
  const pad = str.replace(/-/g, '+').replace(/_/g, '/')
  const padded = pad + '='.repeat((4 - (pad.length % 4)) % 4)
  const bin = atob(padded)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i)
  return bytes
}

function bytesToBase64Url(bytes) {
  let bin = ''
  for (const byte of bytes) bin += String.fromCharCode(byte)
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

async function hmacSha256Base64Url(secret, data) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data))
  return bytesToBase64Url(new Uint8Array(sig))
}

/**
 * Verify an HS256 JWT minted by Kahana (`typ: kahana_embed`).
 * Matches jsonwebtoken's default encoding.
 */
export async function verifyKahanaEmbedJwt(token, secret) {
  if (!secret || typeof token !== 'string' || !token.includes('.')) return null
  const parts = token.split('.')
  if (parts.length !== 3) return null
  const [headerB64, payloadB64, sig] = parts
  if (!headerB64 || !payloadB64 || !sig) return null

  const expected = await hmacSha256Base64Url(secret, `${headerB64}.${payloadB64}`)
  if (!timingSafeEqual(sig, expected)) return null

  try {
    const header = JSON.parse(new TextDecoder().decode(base64UrlToBytes(headerB64)))
    if (header.alg !== 'HS256') return null
    const payload = JSON.parse(new TextDecoder().decode(base64UrlToBytes(payloadB64)))
    if (!payload || payload.typ !== KAHANA_EMBED_TYP) return null
    if (payload.exp && Date.now() / 1000 > payload.exp) return null
    if (!payload.uid || !payload.hubId) return null
    return payload
  } catch {
    return null
  }
}
