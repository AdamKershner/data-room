/**
 * Unified search index for the data room: KB, TOC, archive routes, onboarding steps.
 * Dedupes by path; merges keywords and descriptions when combining sources.
 */

import { KNOWLEDGE_BASE_ENTRIES } from './knowledgeBaseEntries'
import { TOC_EXPLORE_ITEMS, PRIMARY_NAV_LINKS } from './tocExploreGrid'
import { ONBOARDING_STEPS } from '../pages/onboardingSteps'

/** Display order for Executive Summary business-function grid */
export const BUSINESS_FUNCTIONS = ['Marketing', 'Sales', 'Product', 'HR', 'Technical', 'Finance']

const EXTRA_SEARCH_ENTRIES = [
  {
    path: '/',
    title: 'Executive Summary',
    businessFunction: 'Product',
    description:
      'Kahana Group Inc. overview — Wan Shi Tong library vision, 6,500+ users, women-first GTM.',
    keywords: ['overview', 'home', 'kahana', 'summary', 'wan shi tong', 'library', '6500 users', 'kahana.io'],
    nlHints: ['what is kahana', 'library vision', 'executive overview', 'wan shi tong'],
  },
  {
    path: '/company-landscape',
    title: 'Company Landscape',
    businessFunction: 'Marketing',
    description:
      'Searchable peer platforms aligned with Market Map categories — facts on what each company is and does.',
    keywords: [
      'company landscape',
      'battlecards',
      'competitors',
      'competitive',
      'market map categories',
      'gumroad',
      'kajabi',
      'udemy',
      'wattpad',
      'patreon',
      'substack',
      'instagram',
      'tiktok',
      'netflix',
      'crunchyroll',
      'onboarding',
    ],
    nlHints: [
      'who are peer platforms',
      'company landscape',
      'what does discord do',
      'what is linktree',
    ],
  },
  {
    path: '/glossary',
    title: 'Glossary',
    businessFunction: 'Marketing',
    description:
      'How Kahana relates to the creator stack — Content & Audience, Community & Messaging, Memberships, Storefronts, Marketplaces.',
    keywords: [
      'glossary',
      'kahana positioning',
      'creator stack',
      'community messaging',
      'memberships',
      'storefronts',
      'marketplaces',
      'how kahana fits',
    ],
    nlHints: [
      'how does kahana fit the creator stack',
      'kahana vs discord',
      'where does kahana sit',
    ],
  },
  {
    path: '/fragment-capture',
    title: 'Market Map',
    businessFunction: 'Marketing',
    description:
      'Lay of the land — market pie plus one board of categories and companies. Start here, then Company Landscape.',
    keywords: [
      'market map',
      'fragment',
      'capture',
      'map',
      'gtm',
      'phase',
      'youtube',
      'video groups',
      'book clubs',
      'market share',
      'pathway',
      'strategy',
      'substack',
      'tiktok',
    ],
    nlHints: [
      'market map',
      'lay of the land',
      'what markets are we in',
      'content categories',
      'fragment map',
      'fragment capture',
    ],
  },
  {
    path: '/oasis-browser',
    title: 'Oasis Browser Executive Summary',
    businessFunction: 'Product',
    description: 'Privacy-first AI browser — optional for internal work. No paid users yet; not part of onboarding.',
    keywords: ['oasis', 'browser', 'archive', 'enterprise', 'consumer'],
    nlHints: ['oasis browser archive', 'old executive summary'],
    hidden: true,
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
    path: '/how-we-work',
    title: 'How We Work',
    businessFunction: 'Technical',
    description: 'Linear, Slack, and Mixpanel — backlog, chat, and product analytics for day-to-day work.',
    keywords: [
      'how we work',
      'linear',
      'slack',
      'mixpanel',
      'backlog',
      'bugs',
      'feature requests',
      'sprints',
      'operating system',
    ],
    nlHints: [
      'how do we track work',
      'where are bugs filed',
      'linear workspace',
      'mixpanel dashboards',
      'how we work',
    ],
  },
  {
    path: '/sops',
    title: 'SOPs',
    businessFunction: 'SOPs',
    description:
      'Standard operating procedures for hosting book and video clubs — searchable gallery with full procedure pages.',
    keywords: [
      'sop',
      'sops',
      'standard operating procedures',
      'book club',
      'video club',
      'create club',
      'reading list',
      'my clubs',
      'join mode',
      'visibility',
      'aura',
      'feed',
      'events',
    ],
    nlHints: [
      'how do I start a book club',
      'how to run a video club',
      'club setup on kahana',
      'standard operating procedures',
    ],
  },
  {
    path: '/project-charter',
    title: 'Project Charter',
    businessFunction: 'Product',
    description:
      'Library Supply and Search Satisfaction — checklist reader for vision, KPIs, workstreams, team, and risks.',
    keywords: [
      'project charter',
      'library supply',
      'search satisfaction',
      'seeding',
      'creator acquisition',
      'reader demand',
      'aura',
      'kpis',
      'curr',
      'pods',
    ],
    nlHints: [
      'what is the project charter',
      'library supply charter',
      'search success rate',
      'seeding playbook',
    ],
  },
  {
    path: '/weekly-reports',
    title: 'Weekly Reports',
    businessFunction: 'Product',
    description:
      'Cross-team progress synthesized from weekly Time Log submissions — read against Scaling Kahana charter KPIs.',
    keywords: [
      'weekly reports',
      'time log',
      'progress',
      'team updates',
      'charter',
      'compliance',
      'curr',
      'daus',
      'retention',
    ],
    nlHints: ['what did the team ship this week', 'weekly update', 'time log reports'],
  },
  {
    path: '/archive/oasis-sprints',
    title: 'Oasis Engineering Sprints (archived)',
    businessFunction: 'Technical',
    description: 'Historical Oasis Browser sprint boards from the data room era.',
    keywords: ['oasis', 'sprints', 'archive', 'engineering', 'browser'],
    nlHints: ['old sprint board', 'oasis sprints archive'],
    hidden: true,
  },
]

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
    const extraKeywords =
      step.id === 'time-log'
        ? ['time log', 'weekly', 'compliance', 'friday', 'tally', 'reports', 'charter', 'curr', 'kpis']
        : step.id === 'tools-access'
          ? ['tools', 'access', 'tally', 'mixpanel', 'linear', 'github', 'developer', 'email']
          : step.id === 'weekly-1on1'
            ? ['1-on-1', 'oncehub', 'weekly', 'adam', 'meeting']
            : []
    const extraDescription =
      step.id === 'time-log'
        ? 'Establish weekly Time Log habit — Friday EOD, compliance, Weekly Reports, charter KPIs.'
        : step.id === 'tools-access'
          ? 'Submit the Get Access to Tools & Data form for Linear, Mixpanel, and (if coding) GitHub email.'
          : step.id === 'weekly-1on1'
            ? 'Schedule a recurring weekly 1-on-1 with Adam via OnceHub.'
            : `Onboarding step (Day 1) — ${step.category}.`
    return {
      path: `/onboarding/${step.id}`,
      title: step.label,
      businessFunction: bf,
      description: extraDescription,
      keywords: [
        'onboarding',
        'new hire',
        step.category,
        String(step.day),
        step.id.replace(/-/g, ' '),
        ...extraKeywords,
      ],
      nlHints:
        step.id === 'time-log'
          ? ['weekly time log', 'friday time log', 'compliance time tracking']
          : ['getting started', 'first week', 'new employee'],
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
  if (path === '/how-we-work' || path === '/operating-system') return 'Technical'
  if (path === '/sops') return 'SOPs'
  if (path === '/project-charter') return 'Product'
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
    if (e.archive) continue
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
    if (e.hidden) continue
    raw.push({ ...e, source: 'extra' })
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
    if (e.hidden) return false
    if (businessFunction && e.businessFunction !== businessFunction) return false
    return dataRoomEntryMatchesQuery(e, query)
  })
}
