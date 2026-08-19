/**
 * localStorage throws in sandboxed iframes without allow-same-origin
 * (SecurityError) and in some private-browsing modes.
 */
export function readLocalJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function writeLocalJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Checklist still works for the session; persistence is best-effort.
  }
}
