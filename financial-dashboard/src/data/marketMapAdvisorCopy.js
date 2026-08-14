/**
 * Advisor-facing copy for Market Map — glossary + how the map was built.
 * Kept separate from sizing math in fragmentCaptureData.js.
 */

export const MARKET_MAP_SUBTITLE_LEAD =
  'Directional view of content modalities and how creators operate (community, memberships, storefronts, marketplaces), sized by mid-point category TAM.'

/** Compact layer labels shown under the intro (definitions live in the glossary). */
export const MARKET_MAP_LAYER_LABELS = [
  'Content & Audience',
  'Community & Messaging',
  'Memberships',
  'Storefronts',
  'Marketplaces',
]

/**
 * @typedef {{ term: string, definition: string }} MarketMapGlossaryTerm
 */

/** @type {MarketMapGlossaryTerm[]} */
export const MARKET_MAP_GLOSSARY = [
  {
    term: 'Category (fragment)',
    definition:
      'A market slice on this map — e.g. Ebook, Short-form video, Community & Messaging. Area is proportional to that category’s mid TAM.',
  },
  {
    term: 'TAM (mid)',
    definition:
      'Total addressable market for the category. We store a low–high range where available and plot the midpoint so slices are comparable. Figures are directional strategy estimates, not audited financials.',
  },
  {
    term: 'Placeholder TAM',
    definition:
      'Used when published ranges are too variable to pin down (notably Courses and Newsletters). A conservative mid keeps the category visible on the board without pretending precision.',
  },
  {
    term: 'Modeled company revenue',
    definition:
      'Directional annual revenue (or fragment-relevant slice) assigned to a named player for the company pie and treemap tiles. Many values are estimates or proxies called out in notes.',
  },
  {
    term: 'Unmodeled share',
    definition:
      'Category TAM minus the sum of modeled companies. Shown on the board so the map does not imply that listed players equal the whole market.',
  },
  {
    term: 'Content & Audience',
    definition:
      'Front-of-house — where content lives and audience is built (discovery & attention). Includes ebook, video, audio, courses, newsletters, and streaming categories.',
  },
  {
    term: 'Community & Messaging',
    definition:
      'Where creators host communities and run ongoing engagement — “where the group hangs out” (Discord, Circle, Slack, etc.).',
  },
  {
    term: 'Memberships / Storefronts / Marketplaces',
    definition:
      'Monetization layers: ongoing fan support and paywalls; creator-owned storefronts that can replace a personal website (Linktree, Kajabi); and multi-seller marketplaces where buyers search and shop (Udemy for courses, Etsy, Gumroad, Kindle Store).',
  },
  {
    term: 'Creator stack layers',
    definition:
      'How the pie is grouped for GTM: Content & Audience, Community & Messaging, Memberships, Storefronts, and Marketplaces. Kahana sits between content and community and ties into monetization.',
  },
  {
    term: 'Primary vs secondary category',
    definition:
      'A company can span modalities; the map assigns one primary category for area and may note secondary roles. Full multi-category coverage lives on Company Landscape.',
  },
  {
    term: 'Company Landscape',
    definition:
      'Searchable peer database aligned to these same categories — taglines, scale facts, benefits, weaknesses, and Kahana tandem framing. This map sizes markets; Landscape holds company research.',
  },
]

/**
 * @typedef {{ title: string, body: string }} MarketMapMethodBlock
 */

/** @type {MarketMapMethodBlock[]} */
export const MARKET_MAP_METHOD_BLOCKS = [
  {
    title: 'Purpose',
    body: 'Give advisors and the team a shared picture of where money and attention sit across content and creator-ops markets — orientation for product and GTM bets, not a forecast or fundraising model.',
  },
  {
    title: 'Process',
    body: '1) Segment the landscape into content modalities (ebook, video, audio, courses, newsletters, streaming) plus creator-ops layers (community, memberships, storefronts, marketplaces). 2) Attach a directional TAM range per category from industry research (Statista / Mordor-class reports, platform disclosures, trade estimates) and record the source note on each fragment. 3) List representative companies per category with directional revenue or a fragment-relevant proxy where public numbers exist. 4) Render category midpoints as pie and treemap area; company tiles use modeled revenue; remainder is unmodeled share.',
  },
  {
    title: 'Assumptions',
    body: 'Ranges and company figures are directional midpoints for strategy — not audited, not GAAP, and not year-locked to a single vintage. Categories overlap in the real world; primary assignment is for map readability. The “By company” pie sums modeled players only (unmodeled share omitted). Courses and Newsletters use placeholder mids when published scopes diverge wildly. Expanded / 2030-style ceilings may appear in notes but are not what sizes the board.',
  },
  {
    title: 'What this is not',
    body: 'Not a bottom-up company build of every player. Not Kahana’s SAM/SOM. Not advice to enter the largest slice first — GTM phase order is separate from market size.',
  },
  {
    title: 'Where to go deeper',
    body: 'Category TAM notes and player lists: content fragment definitions in the product narrative data. Company research and tandem positioning: Company Landscape. Kahana vs the creator stack: Glossary.',
  },
]
