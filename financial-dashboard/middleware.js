import {
  GATE_PATH,
  getAuthEnv,
  isPublicPath,
  isStaticAssetPath,
  readSession,
} from './lib/dataRoomAuth.js'
import { verifyKahanaEmbedJwt } from './lib/kahanaEmbedJwt.js'

export const config = {
  matcher: [
    '/((?!login\\.html|open-from-kahana\\.html|api/|assets/|logos/|robots\\.txt|favicon\\.ico).*)',
  ],
}

export default async function middleware(request) {
  const url = new URL(request.url)
  const env = getAuthEnv()

  if (isPublicPath(url.pathname) || isStaticAssetPath(url.pathname)) {
    return
  }

  if (env.kahanaEmbedJwtSecret) {
    const embedToken = url.searchParams.get('kahana_embed')
    if (embedToken) {
      const payload = await verifyKahanaEmbedJwt(embedToken, env.kahanaEmbedJwtSecret)
      if (payload) return
    }
  }

  if (env.cookieSecret) {
    const session = await readSession(request.headers.get('cookie') || '', env.cookieSecret)
    if (session) return
  }

  return Response.redirect(new URL(GATE_PATH, request.url), 302)
}
