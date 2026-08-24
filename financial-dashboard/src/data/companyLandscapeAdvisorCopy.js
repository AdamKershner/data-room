/**
 * Advisor-facing copy for Company Landscape — glossary + how research was built.
 */

export const COMPANY_LANDSCAPE_SUBTITLE_LEAD =
  'Searchable peer platforms aligned to Market Map categories — what each company is, scale signals, strengths, and gaps.'

/**
 * @typedef {{ term: string, definition: string }} LandscapeGlossaryTerm
 */

/** @type {LandscapeGlossaryTerm[]} */
export const COMPANY_LANDSCAPE_GLOSSARY = [
  {
    term: 'Research card',
    definition:
      'Enhanced company entry: positioning tagline, scale facts, benefits, weaknesses, and sources. Open a card for the full research block plus the Kahana vs … coverage chart.',
  },
  {
    term: 'Size tier',
    definition:
      'Relative market position for orientation: Incumbent (category leaders / large share of mind), Challenger (credible alternatives with meaningful traction), Niche / Emerging (specialized or earlier-stage). Not a valuation or funding label.',
  },
  {
    term: 'Role tag',
    definition:
      'Primary product job for filtering and GTM (e.g. Ebook / Reading, Community / Messaging, Course / Learning). Complements Market Map category when a company’s job is clearer than a single modality.',
  },
  {
    term: 'Primary / secondary category',
    definition:
      'Market Map fragment assignment. Primary drives default filter placement; secondary notes dual roles (e.g. Literal = ebook + community). Companies can appear under more than one chip when secondary is set.',
  },
  {
    term: 'Kahana vs … chart',
    definition:
      'Per-card modality coverage: which library modalities Kahana targets vs what the peer ships as a first-class, easy product job. Yes means a typical person can consume or shop that modality without hunting (Kindle/Goodreads for ebooks; not Discord). Definitions live under Coverage column definitions. Hover a column name on the chart for the rule.',
  },
  {
    term: 'Marketplaces vs Storefronts',
    definition:
      'Marketplaces: search and shop a catalog from many sellers (Udemy for courses, Etsy, Gumroad, Kindle Store). Storefronts: a creator-owned page or site that can replace building your own website (Linktree, Kajabi, Stan, Shopify). Memberships: the creator can accept payments and earn on the platform (YouTube, Instagram, Patreon, Udemy) — not only a Patreon-style membership product.',
  },
  {
    term: 'Conversation guide',
    definition:
      'Optional Kahana vs peer framing on a card — when to use both (tandem), when we win, landmines, and proof points. Optimized for sales/GTM conversations, not a full battlecard teardown.',
  },
  {
    term: 'Scale facts',
    definition:
      'Verified Aug 2026 overlay: users and revenue with the metric named explicitly (MAU, subscribers, creators, etc.) and one source URL per company. Desk-research bullets below that remain directional (catalog size, geography, product notes) and are not audited metrics.',
  },
  {
    term: 'Market Map',
    definition:
      'Sized view of the same category set (mid TAM pie + board). Landscape holds company research; the map holds market $ orientation.',
  },
]

/**
 * @typedef {{ title: string, body: string }} LandscapeMethodBlock
 */

/** @type {LandscapeMethodBlock[]} */
export const COMPANY_LANDSCAPE_METHOD_BLOCKS = [
  {
    title: 'Purpose',
    body: 'Give advisors and the team a shared, searchable picture of peer platforms — who they are, what they do well, where they are weak, and how Kahana can sit beside or against them. Orientation for product and GTM, not a competitive ranking or investment memo.',
  },
  {
    title: 'Process',
    body: '1) Pull companies from Market Map fragment players plus explicit landscape extras (gaps and dual-role platforms). 2) Assign primary/secondary Market Map categories and a size tier / role tag. 3) Research each company into a standard card: tagline, scale facts, benefits, weaknesses, sources (desk research from public sites, stores, filings, and secondary reports). 4) Overlay verified users/revenue from the Aug 2026 spreadsheet pass as the scale source of truth (metric + period + one source URL); keep older desk-research bullets below for product context. 5) Attach modality coverage (reviewed Yes/No where available) and, where useful, tandem conversation-guide overrides for Kahana.',
  },
  {
    title: 'Assumptions',
    body: 'Users/revenue on each card come from the Aug 21–22 2026 verification pass (MAU/DAU only when disclosed as active users; standalone product revenue only). A few cells needed unit inference or were withheld (called out on the card). Other facts are directional and dated to when researched — products and metrics change. Benefits/weaknesses synthesize common public claims and criticisms, not primary user research. Size tiers are judgment calls for map readability. Coverage charts use explicit Yes/No lists scored as first-class product jobs (easy to consume or shop that modality). Conversation guides favor “use both” when peers are adjacent, not always “switch.”',
  },
  {
    title: 'What this is not',
    body: 'Not a complete census of every app in each category. Not legal diligence or partnership clearance. Not Market Map TAM sizing (see Market Map for mid-point category $). Not the Glossary creator-stack positioning essay.',
  },
  {
    title: 'Where to go deeper',
    body: 'Sized categories and build notes: Market Map. Kahana vs the creator stack: Glossary. Synergy / tandem flows used on the product overview: Kahana platform GTM cards. Expand a landscape card for sources on that company.',
  },
]
