import { loadEnv } from 'vite'
import {
  GATE_PATH,
  getAuthEnv,
  isPublicPath,
  isStaticAssetPath,
  LOGIN_PATH,
  readSession,
  safeNextPath,
} from './dataRoomAuth.js'
import { verifyKahanaEmbedJwt } from './kahanaEmbedJwt.js'
import {
  handleAccessRoute,
  handleLogin,
  handleLogout,
  handleMagic,
  handleRequestAccess,
  handleSession,
} from './dataRoomNodeHandlers.js'
import { getUser } from './dataRoomStore.js'

function pathnameOf(req) {
  try {
    return new URL(req.url || '/', 'http://local.invalid').pathname
  } catch {
    return '/'
  }
}

function isViteInternal(pathname) {
  return (
    pathname.startsWith('/@')
    || pathname.startsWith('/src/')
    || pathname.startsWith('/node_modules/')
    || pathname.startsWith('/__vite')
  )
}

export function dataRoomAuthPlugin() {
  let env = getAuthEnv()

  function attach(server) {
    server.middlewares.use(async (req, res, next) => {
      const pathname = pathnameOf(req)

      try {
        if (pathname === '/api/login') {
          await handleLogin(req, res, env)
          return
        }
        if (pathname === '/api/logout') {
          await handleLogout(req, res)
          return
        }
        if (pathname === '/api/request-access') {
          await handleRequestAccess(req, res, env)
          return
        }
        if (pathname === '/api/magic') {
          await handleMagic(req, res, env)
          return
        }
        if (pathname === '/api/session') {
          await handleSession(req, res, env)
          return
        }
        if (pathname.startsWith('/api/access/')) {
          await handleAccessRoute(req, res, env, pathname)
          return
        }

        if (isPublicPath(pathname) || isStaticAssetPath(pathname) || isViteInternal(pathname)) {
          next()
          return
        }

        if (env.kahanaEmbedJwtSecret) {
          let embedToken = ''
          try {
            embedToken = new URL(req.url || '/', 'http://local.invalid').searchParams.get('kahana_embed') || ''
          } catch {
            embedToken = ''
          }
          if (embedToken) {
            const payload = await verifyKahanaEmbedJwt(embedToken, env.kahanaEmbedJwtSecret)
            if (payload) {
              next()
              return
            }
          }
        }

        if (env.cookieSecret) {
          const session = await readSession(req.headers.cookie || '', env.cookieSecret)
          const user = session ? await getUser(env, session.email) : null
          if (user && user.status === 'approved') {
            next()
            return
          }
        }

        if (env.kahanaEmbedJwtSecret) {
          res.statusCode = 302
          res.setHeader('Cache-Control', 'no-store')
          res.setHeader('Location', GATE_PATH)
          res.end()
          return
        }

        if (!env.cookieSecret) {
          res.statusCode = 302
          res.setHeader('Location', `${LOGIN_PATH}?error=unconfigured`)
          res.end()
          return
        }

        const current = pathname + (req.url?.includes('?') ? req.url.slice(req.url.indexOf('?')) : '')
        const nextPath = safeNextPath(current)
        const login = new URL(LOGIN_PATH, 'http://local.invalid')
        if (nextPath !== '/') login.searchParams.set('next', nextPath)
        res.statusCode = 302
        res.setHeader('Cache-Control', 'no-store')
        res.setHeader('Location', login.pathname + login.search)
        res.end()
      } catch (error) {
        console.error('Data room auth middleware error', error)
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    })
  }

  return {
    name: 'data-room-auth',
    enforce: 'pre',
    configResolved(config) {
      const loaded = loadEnv(config.mode, config.envDir || process.cwd(), '')
      env = getAuthEnv({ ...process.env, ...loaded })
    },
    configureServer: attach,
    configurePreviewServer: attach,
  }
}
