/**
 * Primary nav order and labels (single source for Navigation + Executive Summary explore grid).
 * Keep in sync when adding/removing TOC entries.
 */
import { TIME_LOG_TALLY_URL } from '../constants/kahanaSite'

export const PRIMARY_NAV_LINKS = [
  { path: '/', id: 'executive-summary', label: 'Executive Summary' },
  { path: '/kahana', id: 'kahana-platform', label: 'Kahana Platform' },
  { path: '/team-execution', id: 'team-execution', label: 'Team Directory' },
  { path: '/weekly-reports', id: 'weekly-reports', label: 'Weekly Reports' },
  { path: '/operating-system', id: 'operating-system', label: 'Operating System' },
  { path: '/technical-roadmap', id: 'technical-roadmap', label: 'Technical Roadmap' },
  { path: '/sprints', id: 'sprints', label: 'Product Lifecycle' },
  { path: '/project-charter', id: 'project-charter', label: 'Scaling Kahana Charter' },
  { path: '/onboarding', id: 'onboarding', label: 'Onboarding' },
  {
    path: '/knowledge-base',
    id: 'knowledge-base',
    label: 'Knowledge base',
  },
  {
    id: 'time-log-tally',
    label: 'Time Log (Tally form)',
    href: TIME_LOG_TALLY_URL,
  },
]

/** Cards for the Executive Summary “explore” grid (excludes this page; includes Archive hub). */
export const TOC_EXPLORE_ITEMS = [
  {
    path: '/kahana',
    title: 'Kahana Platform Overview',
    description:
      'Wan Shi Tong library vision, women-first GTM, platform architecture, revenue, and roadmap at app.kahana.io.',
  },
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
    path: '/technical-roadmap',
    title: 'Technical Roadmap',
    description:
      'Internal focus — Security, Trust, and Algorithm pillars for the next wave of Kahana improvements.',
  },
  {
    path: '/operating-system',
    title: 'Operating System',
    description:
      'Linear + Slack workflows — backlog intake, triage, prioritization, and who uses what.',
  },
  {
    path: '/sprints',
    title: 'Product Lifecycle',
    description:
      'How NPS, PMF, and user feedback become prioritized work in Linear (active backlog).',
  },
  {
    path: '/onboarding',
    title: 'Onboarding',
    description: 'New-hire checklist with day-by-day instructions and links into deeper steps.',
  },
  {
    path: '/knowledge-base',
    title: 'Knowledge base',
    description:
      'Searchable hub for GTM, finance, product depth, SOC2 checklist, and other reference pages.',
  },
  {
    path: '/archive',
    title: 'Archive',
    description:
      'Oasis Browser product pages (archived) plus Q1 updates, events, and SOC2 gap analysis.',
  },
]
