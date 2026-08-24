/**
 * Canonical Kahana company landscape database.
 * Merges Battlecards + Synergy + Competitive Landscape into one staff-facing record set.
 * Market categories align with Market Map (CONTENT_FRAGMENTS / fragment players).
 */

import { COMPETITIVE_CATEGORIES, PLATFORM_POOLS } from './kahanaCompetitivePools'
import {
  CONTENT_FRAGMENTS,
  VIRTUAL_PARTY_SOCIAL,
  VIRTUAL_PARTY_STREAMING,
} from './libraryAuraNarrative'
import { BATTLECARD_OVERRIDES } from './kahanaBattlecardOverrides'
import { SYNERGY_CARDS } from './kahanaSynergyCards'
import {
  FRAGMENT_CAPTURE_PLAYERS,
  FRAGMENT_SHORT_NAMES,
  getFragmentShortName,
} from './fragmentCaptureData'
import {
  COMPETITOR_CATEGORIES,
  CUSTOMER_STACK_REPLACED,
  KAHANA_COMPETITORS,
  KAHANA_REFERENCE,
  MATRIX_COMPETITOR_IDS,
  THESIS_LEGEND,
  getCategoryLabel as getCompetitorCategoryLabel,
} from './kahanaCompetitorsData'
import {
  LANDSCAPE_CATEGORY_OVERRIDES,
  LANDSCAPE_EXTRA_COMPANIES,
  LANDSCAPE_INCLUDE_IDS,
  ROLE_TAG_LABELS,
  SIZE_TIER_LABELS,
  getRoleTag,
  getSizeTier,
} from './companyLandscapeMeta'
import { getCompanyResearch } from './companyLandscapeResearch'
import {
  formatRevenueLabel,
  formatScaleFacts,
  formatUsersLabel,
  getCompanyScale,
} from './companyLandscapeScale'

const TBD = 'TBD — fill in'

/** Normalize legacy IDs so Synergy / Battlecards / Competitors / Market Map share one key. */
const ID_ALIASES = {
  'etsy-ebooks': 'etsy',
  'youtube-long': 'youtube',
  'instagram-reels': 'instagram',
  'stan-store': 'stan',
  'disney-plus': 'disney',
  'ko-fi': 'kofi',
  buymeacoffee: 'kofi',
  'paramount+': 'paramount-plus',
  'apple-tv-plus': 'apple-tv',
  convertkit: 'kit',
  'kit-convertkit': 'kit',
  twitter: 'x',
  'twitter-x': 'x',
}

/**
 * Manual primary/secondary Market Map categories when fragment membership alone is incomplete.
 * Example: Crunchyroll is primarily series/films (anime) but also manga (ebooks).
 */
const MARKET_CATEGORY_OVERRIDES = {
  crunchyroll: {
    primaryFragmentId: 'series-films-streaming',
    secondaryFragmentIds: ['ebook-reading'],
  },
  youtube: {
    primaryFragmentId: 'long-form-video',
    secondaryFragmentIds: ['short-form-video', 'audio-listening'],
  },
  amazon: {
    primaryFragmentId: 'ebook-reading',
    secondaryFragmentIds: ['audio-listening', 'series-films-streaming', 'digital-marketplaces'],
  },
  discord: { primaryFragmentId: 'messaging-community' },
  telegram: { primaryFragmentId: 'messaging-community' },
  whatsapp: { primaryFragmentId: 'messaging-community' },
  signal: { primaryFragmentId: 'messaging-community' },
  slack: { primaryFragmentId: 'messaging-community' },
  'facebook-groups': { primaryFragmentId: 'messaging-community' },
  groupme: { primaryFragmentId: 'messaging-community' },
  circle: {
    primaryFragmentId: 'messaging-community',
    secondaryFragmentIds: ['courses-learning', 'creator-monetization'],
  },
  'mighty-networks': {
    primaryFragmentId: 'messaging-community',
    secondaryFragmentIds: ['courses-learning'],
  },
  guild: { primaryFragmentId: 'messaging-community' },
  hivebrite: { primaryFragmentId: 'messaging-community' },
  disciple: { primaryFragmentId: 'messaging-community' },
  bettermode: { primaryFragmentId: 'messaging-community' },
  kajabi: {
    primaryFragmentId: 'courses-learning',
    secondaryFragmentIds: ['messaging-community', 'online-storefront'],
  },
  teachable: {
    primaryFragmentId: 'courses-learning',
    secondaryFragmentIds: ['online-storefront'],
  },
  thinkific: {
    primaryFragmentId: 'courses-learning',
    secondaryFragmentIds: ['messaging-community', 'online-storefront'],
  },
  skool: {
    primaryFragmentId: 'courses-learning',
    secondaryFragmentIds: ['messaging-community'],
  },
  linktree: { primaryFragmentId: 'online-storefront' },
  beacons: { primaryFragmentId: 'online-storefront' },
  pensight: { primaryFragmentId: 'online-storefront' },
  stan: { primaryFragmentId: 'online-storefront' },
  gumroad: { primaryFragmentId: 'digital-marketplaces' },
  hypage: { primaryFragmentId: 'online-storefront' },
  shopify: {
    primaryFragmentId: 'digital-marketplaces',
    secondaryFragmentIds: ['online-storefront'],
  },
  etsy: {
    primaryFragmentId: 'digital-marketplaces',
    secondaryFragmentIds: ['ebook-reading'],
  },
  podia: {
    primaryFragmentId: 'courses-learning',
    secondaryFragmentIds: ['online-storefront'],
  },
  patreon: { primaryFragmentId: 'creator-monetization' },
  onlyfans: { primaryFragmentId: 'creator-monetization' },
  kofi: {
    primaryFragmentId: 'creator-monetization',
    secondaryFragmentIds: ['online-storefront'],
  },
  memberful: { primaryFragmentId: 'creator-monetization' },
  ...LANDSCAPE_CATEGORY_OVERRIDES,
}

export function normalizeCompanyId(id) {
  return ID_ALIASES[id] ?? id
}

/** Market Map categories (same ids/labels as Market Map). */
export const MARKET_MAP_CATEGORIES = CONTENT_FRAGMENTS.map((f) => ({
  id: f.id,
  label: FRAGMENT_SHORT_NAMES[f.id] || f.name,
  name: f.name,
  covers: f.covers,
}))

export {
  COMPETITOR_CATEGORIES,
  CUSTOMER_STACK_REPLACED,
  KAHANA_REFERENCE,
  THESIS_LEGEND,
  getCompetitorCategoryLabel,
  getFragmentShortName,
  SIZE_TIER_LABELS,
  ROLE_TAG_LABELS,
}

export const COMPANY_GROUPS = [
  { id: 'all', label: 'All platforms' },
  { id: 'creator-knowledge', label: 'Creator / knowledge' },
  { id: 'virtual-party', label: 'Virtual party' },
]

export const FEATURED_COMPANY_IDS = ['discord', 'youtube', 'patreon', 'substack']

/** Matrix subset — aliases normalized. */
export const MATRIX_COMPANY_IDS = MATRIX_COMPETITOR_IDS.map(normalizeCompanyId)

function poolCategoryName(categoryId) {
  return COMPETITIVE_CATEGORIES.find((c) => c.id === categoryId)?.name ?? categoryId
}

function fragmentLabel(fragmentId) {
  return FRAGMENT_SHORT_NAMES[fragmentId] || getFragmentShortName(fragmentId) || fragmentId
}

/**
 * Company id → Market Map fragment ids (from FRAGMENT_CAPTURE_PLAYERS membership).
 * First appearance becomes default primary unless MARKET_CATEGORY_OVERRIDES says otherwise.
 */
function buildMarketFragmentMembership() {
  /** @type {Map<string, string[]>} */
  const map = new Map()
  for (const [fragmentId, players] of Object.entries(FRAGMENT_CAPTURE_PLAYERS)) {
    for (const player of players) {
      const id = normalizeCompanyId(player.id)
      const list = map.get(id) ?? []
      if (!list.includes(fragmentId)) list.push(fragmentId)
      map.set(id, list)
    }
  }
  return map
}

/**
 * @param {string} companyId
 * @param {Map<string, string[]>} membership
 */
function resolveMarketCategories(companyId, membership) {
  const override = MARKET_CATEGORY_OVERRIDES[companyId]
  const fromMap = membership.get(companyId) ?? []

  const hasPrimaryOverride = override && Object.prototype.hasOwnProperty.call(override, 'primaryFragmentId')
  const primaryFragmentId = hasPrimaryOverride
    ? override.primaryFragmentId
    : fromMap[0] ?? null

  let secondaryFragmentIds
  if (override?.secondaryFragmentIds) {
    secondaryFragmentIds = override.secondaryFragmentIds.filter((fid) => fid && fid !== primaryFragmentId)
  } else if (hasPrimaryOverride && override.primaryFragmentId == null) {
    secondaryFragmentIds = []
  } else {
    secondaryFragmentIds = fromMap.filter((fid) => fid !== primaryFragmentId)
  }

  const marketFragmentIds = [
    ...(primaryFragmentId ? [primaryFragmentId] : []),
    ...secondaryFragmentIds,
  ]

  return {
    primaryFragmentId,
    secondaryFragmentIds,
    marketFragmentIds,
    primaryMarketLabel: primaryFragmentId ? fragmentLabel(primaryFragmentId) : null,
    secondaryMarketLabels: secondaryFragmentIds.map(fragmentLabel),
    marketCategoryLabels: marketFragmentIds.map(fragmentLabel),
  }
}

function competitorByNormalizedId() {
  /** @type {Map<string, (typeof KAHANA_COMPETITORS)[number]>} */
  const map = new Map()
  for (const c of KAHANA_COMPETITORS) {
    const id = normalizeCompanyId(c.id)
    const existing = map.get(id)
    if (!existing) {
      map.set(id, { ...c, id })
      continue
    }
    // Prefer richer description / website when merging aliases
    map.set(id, {
      ...existing,
      ...c,
      id,
      name: existing.name.length >= c.name.length ? existing.name : c.name,
      description: c.description || existing.description,
      website: c.website || existing.website,
      thesis: c.thesis || existing.thesis,
      kahanaAngle: c.kahanaAngle || existing.kahanaAngle,
      stackRole: c.stackRole || existing.stackRole,
      category: c.category || existing.category,
    })
  }
  return map
}

function synergyById() {
  /** @type {Map<string, (typeof SYNERGY_CARDS)[number]>} */
  const map = new Map()
  for (const s of SYNERGY_CARDS) {
    map.set(normalizeCompanyId(s.id), s)
  }
  return map
}

function fragmentPlayersById() {
  /** @type {Map<string, { id: string, name: string, revenueNote?: string }>} */
  const map = new Map()
  for (const players of Object.values(FRAGMENT_CAPTURE_PLAYERS)) {
    for (const player of players) {
      const id = normalizeCompanyId(player.id)
      if (!map.has(id)) map.set(id, { ...player, id })
    }
  }
  return map
}

function applyLandscapeEnrichment(company) {
  const sizeTier = getSizeTier(company.id)
  const roleTag = getRoleTag(company.id)
  const research = getCompanyResearch(company.id)
  const scale = getCompanyScale(company.id)
  const displayNames = {
    youtube: 'YouTube',
    'amazon-kindle': 'Amazon Kindle',
    scribd: 'Scribd / Everand',
  }
  const overlayFacts = scale ? formatScaleFacts(scale) : []
  const researchFacts = research?.scaleFacts ?? []
  const scaleFacts = overlayFacts.length
    ? [...overlayFacts, ...researchFacts.filter((fact) => !overlayFacts.includes(fact))]
    : researchFacts.length
      ? researchFacts
      : null
  const sources = [...(research?.sources ?? [])]
  if (scale?.sourceUrl && !sources.includes(scale.sourceUrl)) {
    sources.unshift(scale.sourceUrl)
  }
  return {
    ...company,
    sizeTier: sizeTier ?? null,
    sizeTierLabel: sizeTier ? SIZE_TIER_LABELS[sizeTier] : null,
    roleTag: roleTag ?? null,
    roleTagLabel: roleTag ? ROLE_TAG_LABELS[roleTag] : null,
    name: displayNames[company.id] ?? company.name,
    research: research ?? null,
    // Prefer researched tagline when present
    description: research?.tagline ?? company.description,
    usersLabel: scale ? formatUsersLabel(scale) : company.usersLabel,
    revenueLabel: scale ? formatRevenueLabel(scale) : company.revenueLabel,
    scaleFacts,
    scaleCaution: scale?.caution ?? null,
    benefits: research?.benefits ?? null,
    weaknesses: research?.weaknesses ?? null,
    researchSources: sources.length ? sources : null,
  }
}

/**
 * @returns {object[]}
 */
export function getCompanies() {
  const competitors = competitorByNormalizedId()
  const synergy = synergyById()
  const membership = buildMarketFragmentMembership()
  /** @type {Map<string, object>} */
  const byId = new Map()

  const upsert = (partial) => {
    const id = normalizeCompanyId(partial.id)
    const prev = byId.get(id) ?? { id }
    byId.set(id, { ...prev, ...partial, id })
  }

  // 1) Creator / knowledge pools
  for (const p of PLATFORM_POOLS) {
    const id = normalizeCompanyId(p.id)
    const o = BATTLECARD_OVERRIDES[p.id] ?? BATTLECARD_OVERRIDES[id] ?? {}
    const syn = synergy.get(id)
    const comp = competitors.get(id)
    upsert({
      id,
      name: comp?.name ?? p.name,
      website: comp?.website,
      description: comp?.description,
      group: 'creator-knowledge',
      groupLabel: 'Creator / knowledge platforms',
      categoryId: comp?.category ?? p.categoryId,
      category: comp ? getCompetitorCategoryLabel(comp.category) : poolCategoryName(p.categoryId),
      usersLabel: p.usersLabel,
      revenueLabel: p.revenueLabel,
      demandLabel: p.demandLabel,
      supplyLabel: p.supplyLabel,
      kahanaAngle: comp?.kahanaAngle ?? p.kahanaAngle,
      stackRole: comp?.stackRole,
      thesis: comp?.thesis,
      switchReason: o.switchReason ?? TBD,
      useWithReason: o.useWithReason ?? syn?.together ?? TBD,
      competitiveAngle: o.competitiveAngle ?? TBD,
      whenWeWin: o.whenWeWin ?? TBD,
      whenTheyWin: o.whenTheyWin ?? TBD,
      landmines: o.landmines ?? TBD,
      proofPoints: o.proofPoints ?? TBD,
      kahanaOneLiner: o.kahanaOneLiner ?? syn?.together ?? TBD,
      theyDo: syn?.theyDo,
      weDo: syn?.weDo,
      together: syn?.together ?? o.useWithReason,
      exampleFlow: syn?.exampleFlow,
      stance: syn?.stance,
    })
  }

  // 2) Virtual party (social / streaming)
  for (const p of [...VIRTUAL_PARTY_SOCIAL, ...VIRTUAL_PARTY_STREAMING]) {
    const id = normalizeCompanyId(p.id)
    const o = BATTLECARD_OVERRIDES[p.id] ?? BATTLECARD_OVERRIDES[id] ?? {}
    const syn = synergy.get(id)
    const comp = competitors.get(id)
    const categoryId =
      comp?.category ?? (p.tier === 'social-short' ? 'social-native' : 'social-native')
    upsert({
      id,
      name: comp?.name ?? p.name,
      website: comp?.website,
      description: comp?.description,
      group: 'virtual-party',
      groupLabel: 'Virtual party (social / streaming)',
      categoryId,
      category: comp
        ? getCompetitorCategoryLabel(comp.category)
        : p.tier === 'social-short'
          ? 'Social / short-form'
          : 'TV / film streaming',
      usersLabel: p.demandLabel,
      revenueLabel: p.revenueLabel ?? 'See notes',
      demandLabel: p.demandLabel,
      supplyLabel: p.supplyLabel,
      kahanaAngle: comp?.kahanaAngle ?? p.note,
      stackRole: comp?.stackRole,
      thesis: comp?.thesis,
      switchReason: o.switchReason ?? TBD,
      useWithReason: o.useWithReason ?? syn?.together ?? TBD,
      competitiveAngle: o.competitiveAngle ?? TBD,
      whenWeWin: o.whenWeWin ?? TBD,
      whenTheyWin: o.whenTheyWin ?? TBD,
      landmines: o.landmines ?? TBD,
      proofPoints: o.proofPoints ?? TBD,
      kahanaOneLiner: o.kahanaOneLiner ?? syn?.together ?? TBD,
      theyDo: syn?.theyDo,
      weDo: syn?.weDo,
      together: syn?.together ?? o.useWithReason,
      exampleFlow: syn?.exampleFlow,
      stance: syn?.stance,
    })
  }

  // 3) Competitors not already present (e.g. Fansly, Ko-fi, Wikipedia)
  for (const [id, comp] of competitors) {
    if (byId.has(id)) continue
    const syn = synergy.get(id)
    const o = BATTLECARD_OVERRIDES[id] ?? {}
    upsert({
      id,
      name: comp.name,
      website: comp.website,
      description: comp.description,
      group: 'creator-knowledge',
      groupLabel: 'Creator / knowledge platforms',
      categoryId: comp.category,
      category: getCompetitorCategoryLabel(comp.category),
      usersLabel: TBD,
      revenueLabel: TBD,
      demandLabel: TBD,
      supplyLabel: TBD,
      kahanaAngle: comp.kahanaAngle,
      stackRole: comp.stackRole,
      thesis: comp.thesis,
      switchReason: o.switchReason ?? TBD,
      useWithReason: o.useWithReason ?? syn?.together ?? TBD,
      competitiveAngle: o.competitiveAngle ?? comp.kahanaAngle ?? TBD,
      whenWeWin: o.whenWeWin ?? TBD,
      whenTheyWin: o.whenTheyWin ?? TBD,
      landmines: o.landmines ?? TBD,
      proofPoints: o.proofPoints ?? TBD,
      kahanaOneLiner: o.kahanaOneLiner ?? syn?.together ?? comp.kahanaAngle ?? TBD,
      theyDo: syn?.theyDo,
      weDo: syn?.weDo,
      together: syn?.together ?? o.useWithReason,
      exampleFlow: syn?.exampleFlow,
      stance: syn?.stance,
    })
  }

  // 4) Synergy-only partners missing from pools/party/competitors
  for (const [id, syn] of synergy) {
    if (byId.has(id)) continue
    upsert({
      id,
      name: syn.partner,
      group: 'creator-knowledge',
      groupLabel: 'Creator / knowledge platforms',
      categoryId: 'community',
      category: 'Synergy partner',
      usersLabel: TBD,
      revenueLabel: TBD,
      demandLabel: TBD,
      supplyLabel: TBD,
      kahanaOneLiner: syn.together,
      theyDo: syn.theyDo,
      weDo: syn.weDo,
      together: syn.together,
      exampleFlow: syn.exampleFlow,
      stance: syn.stance,
      useWithReason: syn.together,
      competitiveAngle: TBD,
      whenWeWin: TBD,
      whenTheyWin: TBD,
      landmines: TBD,
      proofPoints: TBD,
      switchReason: TBD,
    })
  }

  // 5) Landscape additions from Market Map fragments + explicit extras
  const fragmentPlayers = fragmentPlayersById()
  const extrasById = new Map(LANDSCAPE_EXTRA_COMPANIES.map((c) => [normalizeCompanyId(c.id), c]))

  for (const rawId of LANDSCAPE_INCLUDE_IDS) {
    const id = normalizeCompanyId(rawId)
    if (byId.has(id)) continue
    const extra = extrasById.get(id)
    const frag = fragmentPlayers.get(id)
    if (!extra && !frag) continue
    upsert({
      id,
      name: extra?.name ?? frag?.name ?? id,
      website: extra?.website,
      description:
        extra?.description ??
        (frag?.revenueNote ? String(frag.revenueNote) : undefined),
      group: 'creator-knowledge',
      groupLabel: 'Creator / knowledge platforms',
      categoryId: 'landscape-addition',
      category: 'Landscape addition',
      usersLabel: TBD,
      revenueLabel: TBD,
      demandLabel: TBD,
      supplyLabel: TBD,
      kahanaAngle: TBD,
      switchReason: TBD,
      useWithReason: TBD,
      competitiveAngle: TBD,
      whenWeWin: TBD,
      whenTheyWin: TBD,
      landmines: TBD,
      proofPoints: TBD,
      kahanaOneLiner: TBD,
    })
  }

  for (const extra of LANDSCAPE_EXTRA_COMPANIES) {
    const id = normalizeCompanyId(extra.id)
    if (byId.has(id)) {
      const prev = byId.get(id)
      upsert({
        ...prev,
        name: prev.name || extra.name,
        website: prev.website || extra.website,
        description: prev.description || extra.description,
      })
      continue
    }
    upsert({
      id,
      name: extra.name,
      website: extra.website,
      description: extra.description,
      group: 'creator-knowledge',
      groupLabel: 'Creator / knowledge platforms',
      categoryId: 'landscape-addition',
      category: 'Landscape addition',
      usersLabel: TBD,
      revenueLabel: TBD,
      demandLabel: TBD,
      supplyLabel: TBD,
      kahanaAngle: TBD,
      switchReason: TBD,
      useWithReason: TBD,
      competitiveAngle: TBD,
      whenWeWin: TBD,
      whenTheyWin: TBD,
      landmines: TBD,
      proofPoints: TBD,
      kahanaOneLiner: TBD,
    })
  }

  // Attach Market Map categories + size/role enrichment
  return [...byId.values()]
    .map((c) => ({ ...c, ...resolveMarketCategories(c.id, membership) }))
    .map(applyLandscapeEnrichment)
    .sort((a, b) => a.name.localeCompare(b.name))
}

/**
 * @param {object[]} companies
 * @param {{ groupId?: string, marketFragmentId?: string, categoryId?: string, query?: string }} opts
 * marketFragmentId — Market Map category (matches primary or secondary)
 * categoryId — legacy competitor taxonomy (optional; prefer marketFragmentId)
 */
export function filterCompanies(
  companies,
  { groupId = 'all', marketFragmentId = 'all', categoryId = 'all', query = '' } = {},
) {
  const q = query.trim().toLowerCase()
  return companies.filter((c) => {
    if (groupId !== 'all' && c.group !== groupId) return false
    if (marketFragmentId !== 'all') {
      const ids = c.marketFragmentIds ?? []
      if (!ids.includes(marketFragmentId)) return false
    }
    if (categoryId !== 'all' && c.categoryId !== categoryId) return false
    if (!q) return true
    const hay = [
      c.name,
      c.category,
      c.primaryMarketLabel,
      ...(c.secondaryMarketLabels ?? []),
      ...(c.marketCategoryLabels ?? []),
      c.sizeTierLabel,
      c.roleTagLabel,
      c.description,
      c.usersLabel,
      c.revenueLabel,
      c.scaleCaution,
      ...(c.scaleFacts ?? []),
      ...(c.benefits ?? []).map((b) => `${b.title} ${b.detail}`),
      ...(c.weaknesses ?? []).map((w) => `${w.title} ${w.detail}`),
      c.kahanaOneLiner,
      c.competitiveAngle,
      c.useWithReason,
      c.together,
      c.theyDo,
      c.weDo,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
    return hay.includes(q)
  })
}

/** Counts for Market Map category chips (primary or secondary membership). */
export function countByMarketFragment(companies) {
  /** @type {Record<string, number>} */
  const counts = { all: companies.length }
  for (const cat of MARKET_MAP_CATEGORIES) counts[cat.id] = 0
  for (const c of companies) {
    for (const fid of c.marketFragmentIds ?? []) {
      if (counts[fid] != null) counts[fid] += 1
    }
  }
  return counts
}

export function getFeaturedCompanies(limit = 4) {
  const all = getCompanies()
  const byId = new Map(all.map((c) => [c.id, c]))
  const featured = FEATURED_COMPANY_IDS.map((id) => byId.get(id)).filter(Boolean)
  if (featured.length >= limit) return featured.slice(0, limit)
  for (const c of all) {
    if (featured.some((f) => f.id === c.id)) continue
    featured.push(c)
    if (featured.length >= limit) break
  }
  return featured
}

export function getMatrixRows() {
  const all = getCompanies()
  const byId = new Map(all.map((c) => [c.id, c]))
  return MATRIX_COMPANY_IDS.map((id) => {
    if (id === 'kahana') return KAHANA_REFERENCE
    return byId.get(id)
  }).filter(Boolean)
}

/** @deprecated Prefer getCompanies — kept for callers expecting battlecard shape. */
export function getBattlecardsFromCompanyDb() {
  return getCompanies()
}
