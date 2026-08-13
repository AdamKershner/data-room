/**
 * Primary nav order and labels (single source for Navigation + Executive Summary explore grid).
 * Keep in sync when adding/removing TOC entries.
 */
import { TIME_LOG_TALLY_URL } from '../constants/kahanaSite'

export const PRIMARY_NAV_LINKS = [
  { path: '/', id: 'executive-summary', label: 'Executive Summary' },
  { path: '/company-landscape', id: 'company-landscape', label: 'Company Landscape' },
  { path: '/glossary', id: 'glossary', label: 'Glossary' },
  { path: '/fragment-capture', id: 'fragment-capture', label: 'Market Map' },
  { path: '/team-execution', id: 'team-execution', label: 'Team Directory' },
  { path: '/weekly-reports', id: 'weekly-reports', label: 'Weekly Reports' },
  { path: '/how-we-work', id: 'how-we-work', label: 'How We Work' },
  { path: '/sops', id: 'sops', label: 'SOPs' },
  { path: '/project-charter', id: 'project-charter', label: 'Project Charter' },
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
    path: '/company-landscape',
    title: 'Company Landscape',
    description:
      'Searchable peer research cards aligned to Market Map — glossary and build notes for advisors.',
  },
  {
    path: '/glossary',
    title: 'Glossary',
    description:
      'How Kahana (AKA "The Aura Library") relates to the creator stack — Content & Audience, Community & Messaging, Memberships, Storefronts, Marketplaces.',
  },
  {
    path: '/fragment-capture',
    title: 'Market Map',
    description:
      'Directional content and creator-ops categories sized by mid TAM — glossary and build notes included. Company facts on Company Landscape.',
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
    path: '/how-we-work',
    title: 'How We Work',
    description:
      'Linear, Slack, and Mixpanel — how new teammates get work done day to day.',
  },
  {
    path: '/sops',
    title: 'SOPs',
    description:
      'Five Club SOPs: create & run clubs, invite members, choose titles, creator outreach, and logging feedback.',
  },
  {
    path: '/project-charter',
    title: 'Project Charter',
    description:
      'Library Supply and Search Satisfaction — read the charter section by section like a checklist.',
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
