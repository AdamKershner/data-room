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
      'Per-card modality coverage: which library modalities Kahana targets vs what the peer ships (reviewed Yes/No where filled in, else inferred from primary/secondary Market Map membership). Includes Aura discovery as a distinct signal from content types.',
  },
  {
    term: 'Conversation guide',
    definition:
      'Optional Kahana vs peer framing on a card — when to use both (tandem), when we win, landmines, and proof points. Optimized for sales/GTM conversations, not a full battlecard teardown.',
  },
  {
    term: 'Scale facts',
    definition:
      'Directional public signals (users, catalog size, revenue proxies, geography). Sourced from company sites, app stores, filings, press, and research notes — not audited metrics.',
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
    body: '1) Pull companies from Market Map fragment players plus explicit landscape extras (gaps and dual-role platforms). 2) Assign primary/secondary Market Map categories and a size tier / role tag. 3) Research each company into a standard card: tagline, scale facts, benefits, weaknesses, sources (desk research from public sites, stores, filings, and secondary reports). 4) Attach modality coverage (reviewed Yes/No where available) and, where useful, tandem conversation-guide overrides for Kahana.',
  },
  {
    title: 'Assumptions',
    body: 'Facts are directional and dated to when researched — products and metrics change. Benefits/weaknesses synthesize common public claims and criticisms, not primary user research. Size tiers are judgment calls for map readability. Coverage charts prefer explicit reviews; otherwise they fall back to Market Map category membership. Conversation guides favor “use both” when peers are adjacent, not always “switch.”',
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
