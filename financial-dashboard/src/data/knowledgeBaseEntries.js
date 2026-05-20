/**
 * Pages discoverable from the Knowledge base hub (not top-level TOC).
 * Used by KnowledgeBase.jsx and Navigation isActive for /knowledge-base.
 */

export const KNOWLEDGE_BASE_CATEGORIES = ['Marketing', 'Sales', 'Product', 'HR', 'Technical', 'Finance']

export const KNOWLEDGE_BASE_ENTRIES = [
  {
    path: '/market-size',
    title: 'Market Size',
    category: 'Marketing',
    description: 'TAM, SAM, SOM and market sizing assumptions.',
    keywords: ['tam', 'sam', 'som', 'market'],
  },
  {
    path: '/b2c-strategic-narrative',
    title: 'B2C Strategic Narrative',
    category: 'Marketing',
    description: 'Consumer positioning and story.',
    keywords: ['b2c', 'consumer', 'narrative'],
  },
  {
    path: '/b2b-strategic-narrative',
    title: 'B2B Strategic Narrative',
    category: 'Marketing',
    description: 'Enterprise positioning and story.',
    keywords: ['b2b', 'enterprise', 'narrative'],
  },
  {
    path: '/competitors',
    title: 'Competitors',
    category: 'Marketing',
    description: 'Competitor database and browser comparison.',
    keywords: ['competition', 'browsers', 'island', 'surf'],
  },
  {
    path: '/linkedin-guide',
    title: 'LinkedIn Guide',
    category: 'Marketing',
    description: 'LinkedIn guide and participation categories.',
    keywords: ['linkedin', 'social'],
  },
  {
    path: '/linkedin-connections-guide',
    title: 'LinkedIn Connections Guide',
    category: 'Marketing',
    description: 'How to grow connections and engagement.',
    keywords: ['linkedin', 'connections'],
  },
  {
    path: '/producthunt-tasks',
    title: 'ProductHunt Tasks',
    category: 'Marketing',
    description: 'Product Hunt prep and team tasks.',
    keywords: ['product hunt', 'launch'],
  },
  {
    path: '/content-pipeline',
    title: 'Content Pipeline',
    category: 'Marketing',
    description: 'Blog and content planning pipeline.',
    keywords: ['content', 'blog', 'pipeline'],
  },
  {
    path: '/marketing-narrative-checklist',
    title: 'Marketing Narrative Checklist',
    category: 'Marketing',
    description: 'Story-framework checklist for blogs, decks, and sales narrative content ideas.',
    keywords: ['narrative', 'story', 'framework', 'content', 'pitch', 'promised land'],
  },
  {
    path: '/oasis-waitlist',
    title: 'Oasis waitlist',
    category: 'Marketing',
    description: 'Google Sheet for Oasis interest signups and waitlist tracking.',
    keywords: ['waitlist', 'signup', 'leads', 'sheet', 'oasis', 'marketing'],
  },
  {
    path: '/go-to-market',
    title: 'Go-to-Market & Growth',
    category: 'Sales',
    description: 'GTM strategy, ICPs, and growth motions.',
    keywords: ['gtm', 'icp', 'sales', 'growth'],
  },
  {
    path: '/letter-of-engagement',
    title: 'Letter of Engagement template',
    category: 'Sales',
    description: 'Google Doc template for client or pilot engagement letters.',
    keywords: ['letter of engagement', 'loe', 'template', 'contract', 'pilot', 'b2b', 'sales'],
  },
  {
    path: '/oasis-rfp',
    title: 'Oasis RFP',
    category: 'Sales',
    description: 'Kahana Oasis request-for-proposal template (Google Doc) for enterprise deals.',
    keywords: ['rfp', 'request for proposal', 'enterprise', 'procurement', 'oasis', 'b2b', 'sales'],
  },
  {
    path: '/onboarding',
    title: 'Onboarding',
    category: 'HR',
    description: 'New-hire checklist with day-by-day instructions and links into deeper steps.',
    keywords: ['onboarding', 'new hire', 'checklist', 'hr', 'people'],
  },
  {
    path: '/team-execution',
    title: 'Team Directory',
    category: 'HR',
    description: 'Who is on the team and how to reach them (links to live directory).',
    keywords: ['team', 'directory', 'people', 'notion', 'org'],
  },
  {
    path: '/financial-plan',
    title: 'Financial Plan & Sensitivity',
    category: 'Finance',
    description: 'Burn, runway, projections, and scenarios.',
    keywords: ['runway', 'burn', 'finance', 'projections'],
  },
  {
    path: '/business-model',
    title: 'Business Model & Unit Economics',
    category: 'Finance',
    description: 'Unit economics and business model detail.',
    keywords: ['unit economics', 'pricing', 'revenue'],
  },
  {
    path: '/product-technology',
    title: 'Product & Technology',
    category: 'Product',
    description: 'Product vision, architecture, and tech stack.',
    keywords: ['product', 'technology', 'architecture'],
  },
  {
    path: '/problem-market',
    title: 'Problem, Market & Users',
    category: 'Product',
    description: 'Problem statement, users, and market context.',
    keywords: ['users', 'problem', 'market', 'journey'],
  },
  {
    path: '/project-charter',
    title: 'Project Charter',
    category: 'Product',
    description: 'Project charter and analytics scope.',
    keywords: ['charter', 'mixpanel', 'analytics'],
  },
  {
    path: '/ota-guide',
    title: 'OTA & Updates Guide',
    category: 'Technical',
    description: 'Over-the-air updates and release mechanics.',
    keywords: ['ota', 'updates', 'releases'],
  },
  {
    path: '/sprints',
    title: 'Sprints',
    category: 'Technical',
    description: 'Engineering sprint backlog and archive.',
    keywords: ['engineering', 'backlog', 'roadmap'],
  },
  {
    path: '/soc2-type1-checklist',
    title: 'SOC2 Type 1 Checklist',
    category: 'Technical',
    description: 'SOC 2 Type 1 readiness checklist.',
    keywords: ['soc2', 'compliance', 'security', 'checklist'],
  },
]

export const KNOWLEDGE_BASE_PATHS = KNOWLEDGE_BASE_ENTRIES.map((e) => e.path)
