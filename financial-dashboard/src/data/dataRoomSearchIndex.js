/**
 * Unified search index for the data room: KB, TOC, archive routes, onboarding steps.
 * Dedupes by path; merges keywords and descriptions when combining sources.
 */

import { KNOWLEDGE_BASE_ENTRIES } from './knowledgeBaseEntries'
import { TOC_EXPLORE_ITEMS, PRIMARY_NAV_LINKS } from './tocExploreGrid'
import { ONBOARDING_STEPS } from '../pages/onboardingSteps'
import { OASIS_ARCHIVE_PATHS } from './archivePages'

/** Display order for Executive Summary business-function grid */
export const BUSINESS_FUNCTIONS = ['Marketing', 'Sales', 'Product', 'HR', 'Technical', 'Finance']

const EXTRA_SEARCH_ENTRIES = [
  {
    path: '/',
    title: 'Executive Summary',
    businessFunction: 'Product',
    description:
      'Kahana Group Inc. overview — Wan Shi Tong library vision, 6,500+ users, women-first GTM.',
    keywords: ['overview', 'home', 'kahana', 'summary', 'wan shi tong', 'library', '6500 users', 'app.kahana.io'],
    nlHints: ['what is kahana', 'library vision', 'executive overview', 'wan shi tong'],
  },
  {
    path: '/kahana',
    title: 'Kahana Platform Overview',
    businessFunction: 'Product',
    description:
      'Business plan hub — Wan Shi Tong vision, platform architecture, women-first GTM, revenue, roadmap.',
    keywords: [
      'kahana',
      'wan shi tong',
      'library',
      'women experts',
      '6500 users',
      'marketplace',
      'creator',
      'gmv',
      'app.kahana.io',
      'business plan',
      'explore',
      'hubs',
      'stripe',
      'formerly curio',
    ],
    nlHints: [
      'kahana business plan',
      'wan shi tong library',
      'women first gtm',
      'creator marketplace',
      'what is kahana',
    ],
  },
  {
    path: '/oasis-browser',
    title: 'Oasis Browser Executive Summary',
    businessFunction: 'Product',
    description: 'Archived Oasis Browser pitch — consumer and enterprise browser product.',
    keywords: ['oasis', 'browser', 'archive', 'enterprise', 'consumer'],
    nlHints: ['oasis browser archive', 'old executive summary'],
  },
  {
    path: '/Q1-executive-report',
    title: 'Q1 Executive Update',
    businessFunction: 'Finance',
    description: 'Archived Q1 executive report and financial narrative.',
    keywords: ['q1', 'quarterly', 'report', 'archive'],
    nlHints: ['quarter one update', 'past quarter'],
  },
  {
    path: '/q1-midpoint',
    title: 'Q1 Midpoint Update',
    businessFunction: 'Finance',
    description: 'Mid-quarter checkpoint and metrics snapshot.',
    keywords: ['q1', 'midpoint', 'archive'],
    nlHints: ['how is the quarter going'],
  },
  {
    path: '/events',
    title: 'Events',
    businessFunction: 'Marketing',
    description: 'Company events, conferences, and field marketing references.',
    keywords: ['events', 'conference', 'archive'],
    nlHints: ['where are we presenting', 'conferences'],
  },
  {
    path: '/soc2-gap-analysis',
    title: 'SOC2 Gap Analysis',
    businessFunction: 'Technical',
    description: 'Security and compliance gap assessment (archived).',
    keywords: ['soc2', 'compliance', 'security', 'gap', 'archive'],
    nlHints: ['audit readiness', 'security gaps'],
  },
  {
    path: '/kahana-narrative',
    title: 'Kahana Story',
    businessFunction: 'Marketing',
    description: 'Strategic narrative — why Kahana, hub model, magical gifts, promised land.',
    keywords: ['narrative', 'story', 'positioning', 'ai slop', 'wan shi tong', 'strategic narrative'],
    nlHints: ['why kahana', 'high level story', 'what is our pitch', 'promised land'],
  },
  {
    path: '/kahana-competitors',
    title: 'Kahana Competitive Landscape',
    businessFunction: 'Marketing',
    description: 'Market map — Gumroad, Patreon, Kajabi, Substack, Udemy vs Kahana thesis dimensions.',
    keywords: ['gumroad', 'patreon', 'kajabi', 'substack', 'competitors', 'positioning', 'marketplace', 'creator economy'],
    nlHints: ['who are kahana competitors', 'how is kahana different from gumroad', 'competitive landscape'],
  },
  {
    path: '/technical-roadmap',
    title: 'Technical Roadmap',
    businessFunction: 'Technical',
    description: 'Security, Trust, Algorithm — internal technical focus from security audit and product gaps.',
    keywords: ['security', 'trust', 'algorithm', 'search', 'audit', 'roadmap', 'technical', 'linear'],
    nlHints: ['what are we building', 'security audit', 'discovery algorithm', 'technical focus'],
  },
  {
    path: '/operating-system',
    title: 'Operating System',
    businessFunction: 'Technical',
    description: 'Linear + Slack — backlog intake, triage, prioritization, and team norms.',
    keywords: ['linear', 'slack', 'backlog', 'bugs', 'feature requests', 'sprints', 'operating system'],
    nlHints: ['how do we track work', 'where are bugs filed', 'linear workspace'],
  },
  {
    path: '/archive/oasis-sprints',
    title: 'Oasis Engineering Sprints (archived)',
    businessFunction: 'Technical',
    description: 'Historical Oasis Browser sprint boards from the data room era.',
    keywords: ['oasis', 'sprints', 'archive', 'engineering', 'browser'],
    nlHints: ['old sprint board', 'oasis sprints archive'],
  },
  {
    path: '/onboarding/growth-content-konika',
    title: 'Growth content onboarding (Konika)',
    businessFunction: 'HR',
    description: 'Specialized onboarding track for growth content contributors.',
    keywords: ['onboarding', 'growth', 'konika', 'contractor'],
    nlHints: ['new contractor', 'content onboarding'],
  },
]

const OASIS_ARCHIVE_SEARCH_ENTRIES = OASIS_ARCHIVE_PATHS.filter((p) => p !== '/oasis-browser').map((path) => ({
  path,
  title: path.replace(/^\//, '').replace(/-/g, ' '),
  businessFunction: 'Product',
  description: 'Archived Oasis Browser page — preserved for future return.',
  keywords: ['oasis', 'browser', 'archive'],
  nlHints: ['oasis archive'],
  source: 'archive',
}))

function uniqKeywords(arr) {
  const seen = new Set()
  const out = []
  for (const k of arr) {
    const t = String(k).trim().toLowerCase()
    if (!t || seen.has(t)) continue
    seen.add(t)
    out.push(String(k).trim())
  }
  return out
}

function mergeEntry(prev, next) {
  const kb = prev.source === 'kb' ? prev : next.source === 'kb' ? next : null
  const desc =
    (next.description?.length || 0) > (prev.description?.length || 0)
      ? next.description
      : prev.description
  return {
    path: prev.path,
    title: prev.title || next.title,
    businessFunction: kb
      ? kb.businessFunction
      : prev.businessFunction || next.businessFunction,
    description: desc || prev.description || next.description,
    keywords: uniqKeywords([...(prev.keywords || []), ...(next.keywords || [])]),
    nlHints: uniqKeywords([...(prev.nlHints || []), ...(next.nlHints || [])]),
    source: prev.source === 'kb' || next.source === 'kb' ? 'kb' : 'merged',
  }
}

function stepToBusinessFunction(step) {
  const c = step.category
  if (c === 'External Presence') return 'Marketing'
  if (c === 'Product') return 'Product'
  if (c === 'Company & Culture' || c === 'Admin & Setup' || c === 'Communication' || c === 'Wrap-up')
    return 'HR'
  return 'HR'
}

function buildOnboardingStepEntries() {
  return ONBOARDING_STEPS.filter((s) => !s.comingSoon).map((step) => {
    const bf = stepToBusinessFunction(step)
    return {
      path: `/onboarding/${step.id}`,
      title: step.label,
      businessFunction: bf,
      description: `Onboarding step (day ${step.day}) — ${step.category}.`,
      keywords: [
        'onboarding',
        'new hire',
        step.category,
        String(step.day),
        step.id.replace(/-/g, ' '),
      ],
      nlHints: ['getting started', 'first week', 'new employee'],
      source: 'onboarding',
    }
  })
}

function primaryNavExtras() {
  const tocPaths = new Set(TOC_EXPLORE_ITEMS.map((i) => i.path))
  return PRIMARY_NAV_LINKS.filter(
    (l) => l.path && !tocPaths.has(l.path) && l.path !== '/',
  ).map((l) => ({
    path: l.path,
    title: l.label,
    businessFunction: inferBusinessFunctionFromPath(l.path),
    description: `Table of contents: ${l.label}.`,
    keywords: ['navigation', 'toc', l.label.toLowerCase()],
    nlHints: [],
    source: 'nav',
  }))
}

function inferBusinessFunctionFromPath(path) {
  if (path === '/archive') return 'Finance'
  if (path === '/sprints' || path === '/project-charter' || path === '/operating-system' || path === '/technical-roadmap') return 'Technical'
  if (path === '/nps' || path === '/hitl') return 'Product'
  if (path === '/onboarding') return 'HR'
  if (path === '/knowledge-base') return 'Product'
  if (path === '/team-execution') return 'HR'
  if (path === '/weekly-reports') return 'Product'
  return 'Product'
}

function normalizeTocItem(item) {
  return {
    path: item.path,
    title: item.title,
    businessFunction: inferBusinessFunctionFromPath(item.path),
    description: item.description,
    keywords: ['data room', item.title.toLowerCase()],
    nlHints: [],
    source: 'toc',
  }
}

function buildRawList() {
  const raw = []

  for (const e of KNOWLEDGE_BASE_ENTRIES) {
    raw.push({
      path: e.path,
      title: e.title,
      businessFunction: e.category,
      description: e.description,
      keywords: [...(e.keywords || [])],
      nlHints: [],
      source: 'kb',
    })
  }

  for (const item of TOC_EXPLORE_ITEMS) {
    raw.push(normalizeTocItem(item))
  }

  for (const e of primaryNavExtras()) {
    raw.push(e)
  }

  for (const e of EXTRA_SEARCH_ENTRIES) {
    raw.push({ ...e, source: 'extra' })
  }

  for (const e of OASIS_ARCHIVE_SEARCH_ENTRIES) {
    raw.push(e)
  }

  for (const e of buildOnboardingStepEntries()) {
    raw.push(e)
  }

  return raw
}

function dedupeAndMerge(entries) {
  const map = new Map()
  for (const e of entries) {
    const prev = map.get(e.path)
    if (!prev) {
      map.set(e.path, { ...e })
      continue
    }
    map.set(e.path, mergeEntry(prev, e))
  }
  return [...map.values()].sort((a, b) => a.title.localeCompare(b.title))
}

export const DATA_ROOM_SEARCH_ENTRIES = dedupeAndMerge(buildRawList())

/**
 * @param {object} entry
 * @param {string} q
 * @returns {boolean}
 */
export function dataRoomEntryMatchesQuery(entry, q) {
  if (!q || !String(q).trim()) return true
  const s = String(q).trim().toLowerCase()
  const blob = [
    entry.title,
    entry.description,
    entry.businessFunction,
    ...(entry.keywords || []),
    ...(entry.nlHints || []),
  ]
    .join(' ')
    .toLowerCase()
  return blob.includes(s)
}

/**
 * @param {string} query
 * @param {{ businessFunction?: string }} [opts]
 * @returns {typeof DATA_ROOM_SEARCH_ENTRIES}
 */
export function searchDataRoomEntries(query, opts = {}) {
  const { businessFunction } = opts
  return DATA_ROOM_SEARCH_ENTRIES.filter((e) => {
    if (businessFunction && e.businessFunction !== businessFunction) return false
    return dataRoomEntryMatchesQuery(e, query)
  })
}
