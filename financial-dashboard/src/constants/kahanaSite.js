export const KAHANA_SITE_URL = 'https://kahana.io'
export const KAHANA_CONTACT_EMAIL = 'adam@kahana.io'

/** @param {string} [path] */
export function kahanaUrl(path = '') {
  if (!path) return KAHANA_SITE_URL
  return `${KAHANA_SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
