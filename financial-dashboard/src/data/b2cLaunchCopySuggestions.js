/**
 * Adam's shared launch descriptions and taglines for B2C narrative checklist.
 * Alternate launch-ready copy (names Oasis explicitly); does not replace B2C_REFUGE_SECTION_INTRO.
 */

/** @typedef {'change'|'chrome-villain'|'winners-losers'|'promised-land'|'magic-gifts'|'evidence'} B2cNarrativeBeatId */

const TAGLINES_BODY = `A browser learning how you flow!

Your web. Your data. Your Oasis.

A browser that works for you, not against you.

No selling. No profiling. No compromise.

Oasis - Where Privacy isn't a Feature but a Foundation

Your Oasis - Sync with your habits, Tuned to your rhythms`

/**
 * @typedef {object} B2cLaunchCopySuggestion
 * @property {string} id
 * @property {number} number
 * @property {string} title
 * @property {B2cNarrativeBeatId} sectionId
 * @property {string} body
 */

/** @type {B2cLaunchCopySuggestion[]} */
export const B2C_LAUNCH_COPY_SUGGESTIONS = [
  {
    id: 'launch-desc-01',
    number: 1,
    title: 'Launch description — paragraph 1',
    sectionId: 'promised-land',
    body: `Oasis is built for people exhausted by noisy tabs, distracting feeds, and software that constantly demands attention. It's a calmer way to browse — private by default, elegant by design, and powered by AI that helps without getting in the way. The more you use Oasis, the more it understands what matters to YOU!`,
  },
  {
    id: 'launch-desc-02',
    number: 2,
    title: 'Launch description — paragraph 2',
    sectionId: 'promised-land',
    body: `Most browsers compete for your attention. Oasis protects it. Designed around privacy first, Oasis cuts through the noise with an experience that feels clean, focused, and intelligently adaptive. AI helps you move faster without overwhelming you, while your data remains fully yours — always.`,
  },
  {
    id: 'launch-desc-03',
    number: 3,
    title: 'Launch description — paragraph 3',
    sectionId: 'promised-land',
    body: `We believe browsers should feel like places of clarity, not chaos. Oasis combines privacy, elegant design, and personal AI into a browsing experience that adapts to YOU over time. It remembers what matters, removes friction, and helps you stay in flow — without compromising ownership of your data.`,
  },
  {
    id: 'launch-taglines-promised',
    number: 4,
    title: 'Taglines',
    sectionId: 'promised-land',
    body: TAGLINES_BODY,
  },
  {
    id: 'launch-taglines-evidence',
    number: 1,
    title: 'Taglines',
    sectionId: 'evidence',
    body: TAGLINES_BODY,
  },
]

/**
 * @param {B2cNarrativeBeatId | string} sectionId
 * @returns {B2cLaunchCopySuggestion[]}
 */
export function getLaunchCopyForBeat(sectionId) {
  return B2C_LAUNCH_COPY_SUGGESTIONS.filter((item) => item.sectionId === sectionId).sort(
    (a, b) => a.number - b.number
  )
}
