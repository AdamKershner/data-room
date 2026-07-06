/** Archive index — Oasis Browser product pages and historical point-in-time pages. */

export const OASIS_ARCHIVE_PAGES = [
  {
    path: '/archive/oasis-sprints',
    title: 'Oasis Engineering Sprints (archived)',
    description: 'Historical Oasis Browser sprint boards — feedback-driven backlog from when sprints lived in the data room.',
  },
  {
    path: '/oasis-browser',
    title: 'Oasis Browser Executive Summary',
    description: 'Former home page — Oasis consumer and enterprise browser pitch, goals, and financial snapshot.',
  },
  {
    path: '/problem-market',
    title: 'Problem, Market & Users',
    description: 'Tab chaos, context switching, B2C personas, and B2B champions.',
  },
  {
    path: '/product-technology',
    title: 'Product & Technology',
    description: 'Oasis product vision, architecture, and tech stack.',
  },
  {
    path: '/business-model',
    title: 'Business Model & Unit Economics',
    description: 'B2C subscription and B2B pilot pricing for Oasis Browser.',
  },
  {
    path: '/go-to-market',
    title: 'Go-to-Market & Growth',
    description: 'Oasis GTM strategy, ICPs, and growth motions.',
  },
  {
    path: '/market-size',
    title: 'Market Size',
    description: 'TAM, SAM, SOM and enterprise browser category sizing.',
  },
  {
    path: '/b2b-strategic-narrative',
    title: 'B2B Strategic Narrative',
    description: 'Enterprise positioning and buying-champion story.',
  },
  {
    path: '/b2c-strategic-narrative',
    title: 'B2C Strategic Narrative',
    description: 'Consumer positioning and privacy narrative.',
  },
  {
    path: '/competitors',
    title: 'Competitors',
    description: 'Browser competitor database and comparison.',
  },
  {
    path: '/content-pipeline',
    title: 'Content Pipeline',
    description: 'Oasis blog and content planning pipeline.',
  },
  {
    path: '/oasis-rfp',
    title: 'Oasis RFP',
    description: 'Enterprise request-for-proposal template.',
  },
  {
    path: '/oasis-waitlist',
    title: 'Oasis Waitlist',
    description: 'Interest signups and waitlist tracking.',
  },
  {
    path: '/ota-guide',
    title: 'OTA & Updates Guide',
    description: 'Over-the-air updates and release mechanics.',
  },
  {
    path: '/letter-of-engagement',
    title: 'Letter of Engagement',
    description: 'Client or pilot engagement letter template.',
  },
  {
    path: '/marketing-narrative-checklist',
    title: 'Marketing Narrative Checklist',
    description: 'Story-framework checklist for Oasis marketing content.',
  },
  {
    path: '/producthunt-tasks',
    title: 'ProductHunt Tasks',
    description: 'Product Hunt launch prep and team tasks.',
  },
  {
    path: '/nps',
    title: 'PMF + NPS Data',
    description: 'Oasis product-market fit and NPS survey program.',
  },
  {
    path: '/hitl',
    title: 'User Feedback Trends',
    description: 'Human-in-the-loop themes from Oasis assistant ratings.',
  },
  {
    path: '/project-charter',
    title: 'Project Charter',
    description: 'Oasis customer journey analytics charter.',
  },
  {
    path: '/financial-plan',
    title: 'Financial Plan & Sensitivity',
    description: 'Oasis 2026 projections, scenarios, and sensitivity analysis.',
  },
]

export const HISTORICAL_ARCHIVE_PAGES = [
  {
    path: '/Q1-executive-report',
    title: 'Q1 Executive Update',
    description: 'Quarterly executive narrative, metrics, and strategic context.',
  },
  {
    path: '/q1-midpoint',
    title: 'Q1 Midpoint Update',
    description: 'Mid-quarter checkpoint across product, GTM, and operations.',
  },
  {
    path: '/events',
    title: 'Events',
    description: 'Community-led events survey, landing themes, and related notes.',
  },
  {
    path: '/soc2-gap-analysis',
    title: 'SOC2 Gap Analysis',
    description: 'Control-area gaps and readiness notes for SOC 2.',
  },
]

export const OASIS_ARCHIVE_PATHS = OASIS_ARCHIVE_PAGES.map((p) => p.path)
export const HISTORICAL_ARCHIVE_PATHS = HISTORICAL_ARCHIVE_PAGES.map((p) => p.path)
export const ALL_ARCHIVE_PATHS = [...OASIS_ARCHIVE_PATHS, '/archive', '/archive/oasis-sprints', ...HISTORICAL_ARCHIVE_PATHS]
