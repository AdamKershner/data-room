/** Max characters before card / list titles are shortened with an ellipsis. */
export const CARD_TITLE_MAX_LENGTH = 52

/**
 * Shortens long titles for dense card layouts. Full text should be exposed via `title` / `aria-label`.
 * @param {string} title
 * @param {number} [maxLength]
 * @returns {string}
 */
export function formatCardTitle(title, maxLength = CARD_TITLE_MAX_LENGTH) {
  if (title == null || typeof title !== 'string') return ''
  const t = title.trim()
  if (t.length <= maxLength) return t
  const sliceEnd = Math.max(1, maxLength - 1)
  return `${t.slice(0, sliceEnd).trimEnd()}…`
}
