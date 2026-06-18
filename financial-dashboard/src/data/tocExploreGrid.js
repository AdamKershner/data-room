/**
 * Primary nav order and labels (single source for Navigation + Executive Summary explore grid).
 * Keep in sync when adding/removing TOC entries.
 */
export const PRIMARY_NAV_LINKS = [
  { path: '/', id: 'executive-summary', label: 'Executive Summary' },
  { path: '/team-execution', id: 'team-execution', label: 'Team Directory' },
  { path: '/weekly-reports', id: 'weekly-reports', label: 'Weekly Reports' },
  { path: '/sprints', id: 'sprints', label: 'Sprints' },
  { path: '/project-charter', id: 'project-charter', label: 'Project Charter' },
  { path: '/nps', id: 'nps', label: 'PMF+NPS data' },
  { path: '/hitl', id: 'hitl', label: 'User Feedback Trends (training data)' },
  { path: '/onboarding', id: 'onboarding', label: 'Onboarding' },
  {
    path: '/marketing-narrative-checklist',
    id: 'marketing-narrative-checklist',
    label: 'Marketing Narrative Checklist',
  },
  {
    id: 'time-log-tally',
    label: 'Time Log (Tally form)',
    href: 'https://tally.so/r/w2YdzL',
  },
  { path: '/knowledge-base', id: 'knowledge-base', label: 'Knowledge base' },
]

/** Cards for the Executive Summary “explore” grid (excludes this page; includes Archive hub). */
export const TOC_EXPLORE_ITEMS = [
  {
    path: '/team-execution',
    title: 'Team Directory',
    description:
      'Link out to the live Notion directory for who is on the team and how to reach them.',
  },
  {
    path: '/weekly-reports',
    title: 'Weekly Reports',
    description: 'Rolling written updates on what the company shipped, learned, and decided each week.',
  },
  {
    path: '/sprints',
    title: 'Sprints',
    description:
      'Engineering backlog: active B2B/B2C sprint themes, archived sprint history, and acceptance-style detail.',
  },
  {
    path: '/project-charter',
    title: 'Project Charter',
    description: 'Customer journey analytics charter—scope, metrics, and how we measure product usage.',
  },
  {
    path: '/nps',
    title: 'PMF+NPS data',
    description:
      'Survey program guidance plus PMF/NPS scores, cohort views, and links to the live response sheet.',
  },
  {
    path: '/hitl',
    title: 'User Feedback Trends (training data)',
    description:
      'Human-in-the-loop themes from in-app ratings, schema notes, Supabase table link, and roadmap for richer capture.',
  },
  {
    path: '/onboarding',
    title: 'Onboarding',
    description: 'New-hire checklist with day-by-day instructions and links into deeper steps.',
  },
  {
    path: '/marketing-narrative-checklist',
    title: 'Marketing Narrative Checklist',
    description:
      'Story-framework checklist: change, winners/losers, Promised Land, magic gifts, and evidence—trackable content ideas.',
  },
  {
    path: '/knowledge-base',
    title: 'Knowledge base',
    description:
      'Searchable hub for GTM, finance, product depth, OTA, SOC2 checklist, and other reference pages.',
  },
  {
    path: '/curio-store',
    title: 'Curio Store',
    description:
      'Business plan for Curio — creator marketplace, Explore discovery, Stripe monetization, and growth roadmap.',
  },
  {
    path: '/archive',
    title: 'Archive',
    description: 'Point-in-time pages: Q1 updates, events, SOC2 gap analysis, and the archive index.',
  },
]
