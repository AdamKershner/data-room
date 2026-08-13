/** How We Work — Linear + Slack + Mixpanel workflows for Kahana team (new-hire friendly). */

import {
  LINEAR_WORKSPACE_URL,
  MIXPANEL_URL,
  SLACK_INVITE_URL,
} from '../constants/kahanaSite'

export { LINEAR_WORKSPACE_URL, MIXPANEL_URL, SLACK_INVITE_URL }

export const HOW_WE_WORK_PATH = '/how-we-work'
/** @deprecated Prefer HOW_WE_WORK_PATH */
export const OPERATING_SYSTEM_PATH = HOW_WE_WORK_PATH

export const OPERATING_SYSTEM_PAGE = {
  title: 'How We Work',
  subtitle:
    'For new teammates: the tools we use every day — Linear for tasks, Slack for chat, Mixpanel for product analytics — and how they fit together.',
}

export const TOOL_OVERVIEW = {
  linear:
    'System of record for feature requests, bugs, and sprint work. Prioritized and assigned to engineers daily/weekly.',
  slack:
    'Async communication, quick questions, and escalations. Decisions that need tracking become Linear issues.',
  mixpanel:
    'Kahana PROD analytics — ~20 dashboards across the user lifecycle (activity, acquisition, discovery, retention, monetization, email). Filter to environment = production unless debugging.',
}

export const FUNCTION_TOOLS = [
  {
    function: 'Product / PM',
    linear: 'Create and prioritize issues; own backlog; assign engineers',
    slack: 'Cross-functional sync, stakeholder updates',
    mixpanel: 'CURR, retention, activation, search success; prioritize from live boards',
  },
  {
    function: 'Engineering',
    linear: 'Pull assigned issues; update status; log bugs and tech debt',
    slack: 'Standups, blockers, code review discussion',
    mixpanel: 'Funnel drop-offs, event health; validate instrumentation after ship',
  },
  {
    function: 'Marketing',
    linear: 'Content and campaign tasks when trackable; link to Linear from narrative checklist',
    slack: 'Campaign coordination, approvals',
    mixpanel: 'Acquisition channels, signup methods, lifecycle email impact',
  },
  {
    function: 'Sales',
    linear: 'Customer-driven feature requests and bugs filed for triage',
    slack: 'Deal threads, customer context',
    mixpanel: 'Monetization funnels and intent → conversion signals',
  },
  {
    function: 'Customer success',
    linear: 'User-reported issues escalated as bugs or requests',
    slack: 'Support coordination with product',
    mixpanel: 'Retention / resurrection and collection attachment signals',
  },
  {
    function: 'Leadership',
    linear: 'Review priorities; unblock resourcing',
    slack: 'Company-wide announcements',
    mixpanel: 'Strategy / north-star boards (CURR, delight, GMV, liquidity)',
  },
]

export const MIXPANEL_OVERVIEW = {
  intro:
    'Kahana PROD has ~20 dashboards covering the full user lifecycle. Use them to answer the questions below — not as a forecast, but as the live scoreboard for product and GTM.',
  projectUrl: MIXPANEL_URL,
  clusters: [
    {
      id: 'activity',
      title: 'Activity & pulse',
      question: 'Is the library busy?',
      boards: [
        {
          name: 'Daily sign-in / sign-up',
          learns:
            'Daily sign-in and sign-up counts — simplest health check for whether people are showing up.',
        },
        {
          name: 'User activity overview',
          learns:
            'Search, saves, shares, and hub creation in one view — quick daily/weekly pulse across behaviors.',
        },
        {
          name: 'Activity & retention overview',
          learns: 'High-level user activity and retention — a starting point for anyone new to the data.',
        },
      ],
    },
    {
      id: 'acquisition',
      title: 'Acquisition & onboarding',
      question: 'Where are users coming from and are they activating?',
      boards: [
        {
          name: 'Signup & onboarding',
          learns:
            'Signup volume, methods (email, social, etc.), and onboarding conversion — which signup paths work.',
        },
        {
          name: 'Acquisition channels',
          learns:
            'First-touch channel (organic, paid, referral) through signup and role conversion — channel quality for marketing spend.',
        },
      ],
    },
    {
      id: 'discovery',
      title: 'Discovery & search',
      question: 'Can library-goers find what they are looking for?',
      boards: [
        {
          name: 'Search activity',
          learns: 'Daily search volume, tab usage, filter and sort — how actively users explore the library.',
        },
        {
          name: 'Search-to-Action Conversion',
          learns: 'Conversion from search → save, purchase, share, preview — do searches lead anywhere?',
        },
        {
          name: 'Library Search → Action',
          learns:
            'Funnel with explore_result_clicked, by discovery_source and entity_type — which surfaces and types drive action.',
        },
      ],
    },
    {
      id: 'retention',
      title: 'Retention & habit',
      question: 'Do users come back? Is the library becoming a habit?',
      boards: [
        {
          name: 'CURR / retention hub',
          learns:
            'Primary CURR board — D1 retention, DAU, stickiness, new vs returning, resurrection. North-star retention view.',
        },
        {
          name: 'Login retention baseline',
          learns: 'Login-based retention and stickiness — useful for PMF-stage benchmarking.',
        },
        {
          name: 'Weekly return & resurrection',
          learns: 'Weekly return and resurrection patterns — whether lapsed users come back.',
        },
        {
          name: 'Early behaviors → retention',
          learns:
            'Which early behaviors (search, save, hub open) correlate with D7/D30 return — activation moments that predict retention.',
        },
      ],
    },
    {
      id: 'monetization',
      title: 'Monetization & revenue',
      question: 'Is the marketplace working?',
      boards: [
        {
          name: 'Seller / Stripe onboarding',
          learns: 'Stripe verification funnel and seller onboarding — are creators listing hubs?',
        },
        {
          name: 'Checkout journeys',
          learns: 'Growth billing and hub purchase checkout — where buyers drop off.',
        },
        {
          name: 'Intent → monetization',
          learns:
            'Intent signals (search, paywall view) → buyer/seller/Growth conversion — behaviors that predict monetization.',
        },
        {
          name: 'Pricing & paywall',
          learns: 'Hub list price vs paywall conversion and purchase volume by category — pricing signal.',
        },
        {
          name: 'Marketplace by niche',
          learns:
            'Hub creation, monetization, and purchase by marketplace category — which niches have liquidity.',
        },
      ],
    },
    {
      id: 'collections',
      title: 'Collections & social',
      question: 'Are users building their library?',
      boards: [
        {
          name: 'Saves & follows',
          learns:
            'Daily save and creator-follow activity — curating personal collections as library attachment.',
        },
      ],
    },
    {
      id: 'email',
      title: 'Lifecycle emails',
      question: 'Are lifecycle emails moving the needle?',
      boards: [
        {
          name: 'Email → product outcomes',
          learns:
            'Downstream actions from lifecycle emails (welcome, activation nudge → hub created, D7/D30 return) — impact beyond opens.',
        },
        {
          name: 'Lifecycle Email Deliverability',
          learns: 'Send volume, bounce/complaint, open/click by trigger — email operations health check.',
        },
      ],
    },
    {
      id: 'strategy',
      title: 'Strategy & north star',
      question: 'How is the business doing overall?',
      boards: [
        {
          name: 'Six-pillar health',
          learns:
            'CURR, customer delight, search success, liquidity by niche, retention × revenue, GMV — exec-level summary.',
        },
        {
          name: 'Behaviors to Value',
          learns:
            'Early user behaviors vs buyer/seller/Growth outcomes — connects product activity to business results.',
        },
      ],
    },
  ],
  coverage: {
    strong: [
      'Acquisition → onboarding → monetization funnel is well-instrumented',
      'Search / discovery is deeply tracked (including search-to-action boards)',
      'CURR is the primary live retention metric',
    ],
    gaps: [
      'Content engagement depth — time-on-hub, files read, reading session depth (pending reading events)',
      'Creator health — views, subscriber growth, revenue per hub',
      'Churn analysis — who leaves and what their last session looked like',
    ],
  },
}

export const LINEAR_WORKFLOW_STEPS = [
  {
    step: 'Intake',
    detail:
      'Work enters from NPS/PMF insights, user feedback (HITL), Mixpanel signals, internal requests, or bugs found in production.',
  },
  {
    step: 'Log',
    detail:
      'Every feature request, bug fix, and sprint item is created in Linear — not only discussed in Slack.',
  },
  {
    step: 'Triage',
    detail: 'PM or designated owner reviews new issues; adds labels, project, and severity.',
  },
  {
    step: 'Prioritize',
    detail: 'Backlog ordered daily/weekly. Top items reflect Kahana roadmap and creator/buyer impact.',
  },
  {
    step: 'Assign',
    detail: 'Engineers receive assigned issues with clear acceptance criteria.',
  },
  {
    step: 'Ship',
    detail: 'Status updated in Linear through completion; linked PRs in GitHub where applicable.',
  },
]

export const SLACK_NORMS = [
  'Use Slack for conversation; use Linear when work needs an owner, priority, or deadline.',
  'If a Slack thread produces actionable work, create a Linear issue and link the thread.',
  'Engineering blockers: post in Slack for speed, then ensure a Linear issue exists if not resolved same day.',
  'Product managers and engineers must have Linear access from onboarding (Day 1).',
  'Mixpanel is the product scoreboard — check relevant boards before arguing about what users do.',
]

export const TEAM_RHYTHMS = [
  'Friday EOD — every teammate submits the Time Log (feeds Weekly Reports). See /onboarding/time-log.',
]

/** PM & product lifecycle resources — linked from Linear onboarding step. */
export const PM_LIFECYCLE_RESOURCES = {
  methodology: [
    {
      path: HOW_WE_WORK_PATH,
      title: 'How We Work',
      description: 'Linear + Slack + Mixpanel — tools, triage, and team rhythms (including Friday Time Log).',
    },
    {
      path: '/',
      title: 'Executive Summary',
      description: 'Kahana traction, GTM, and strategic context — what we are scaling toward.',
    },
    {
      path: '/weekly-reports',
      title: 'Weekly Reports',
      description: 'Cross-team progress synthesized from time logs.',
    },
    {
      path: '/glossary',
      title: 'Glossary',
      description: 'How Kahana (AKA "The Aura Library") relates to the creator stack and Market Map categories.',
    },
  ],
  customerData: [
    {
      path: '/nps',
      title: 'PMF + NPS Data',
      description: 'Survey scores and methodology — primary voice-of-customer signal for prioritization.',
    },
    {
      path: '/hitl',
      title: 'User Feedback Trends',
      description: 'In-product feedback themes — bugs and improvements to log in Linear.',
    },
    {
      path: '/company-landscape',
      title: 'Company Landscape',
      description: 'Peer research cards aligned to Market Map — glossary and build notes for advisors.',
    },
    {
      path: '/fragment-capture',
      title: 'Market Map',
      description: 'Content categories and companies sized by directional market $.',
    },
  ],
}

export const PM_LIFECYCLE_STEPS = [
  {
    step: '1. Know the scoreboard',
    detail:
      'Read Executive Summary and Mixpanel north-star boards. Every backlog item should connect to retention, engagement, revenue, creators onboarded, hubs created, or customer delight.',
  },
  {
    step: '2. Listen to customers',
    detail:
      'Review NPS/PMF data, user feedback trends, and Mixpanel funnels weekly. Capture themes before sprint planning.',
  },
  {
    step: '3. Log in Linear',
    detail:
      'Create issues for bugs, features, and improvements — with links to feedback sources. No Slack-only work.',
  },
  {
    step: '4. Prioritize against KPIs',
    detail: 'Order backlog by impact on north-star metrics. PM assigns top items to engineering.',
  },
  {
    step: '5. Ship & report',
    detail: 'Track status in Linear through release. Reference KPI impact in your weekly Time Log.',
  },
]

export const LIFECYCLE_LINKS = [
  {
    path: '/nps',
    title: 'PMF + NPS data',
    description: 'Survey program and scores — signals for what to prioritize in Linear.',
  },
  {
    path: '/hitl',
    title: 'User feedback trends',
    description: 'Human-in-the-loop themes from in-app ratings — feed into bug and improvement backlog.',
  },
  {
    path: '/glossary',
    title: 'Glossary',
    description: 'How Kahana (AKA "The Aura Library") relates to the creator stack.',
  },
  {
    path: HOW_WE_WORK_PATH,
    title: 'This page',
    description: 'Linear + Slack + Mixpanel — how we get work done.',
  },
]
