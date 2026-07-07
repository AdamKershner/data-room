/** Operating system — Linear + Slack workflows for Kahana team. */

import { LINEAR_WORKSPACE_URL, SLACK_INVITE_URL } from '../constants/kahanaSite'

export { LINEAR_WORKSPACE_URL, SLACK_INVITE_URL }

export const OPERATING_SYSTEM_PAGE = {
  title: 'Operating System',
  subtitle:
    'How Kahana uses Linear for backlog and delivery, and Slack for communication — across product, engineering, and GTM.',
}

export const TOOL_OVERVIEW = {
  linear:
    'System of record for feature requests, bugs, and sprint work. Prioritized and assigned to engineers daily/weekly.',
  slack:
    'Async communication, quick questions, and escalations. Decisions that need tracking become Linear issues.',
}

export const FUNCTION_TOOLS = [
  {
    function: 'Product / PM',
    linear: 'Create and prioritize issues; own backlog; assign engineers',
    slack: 'Cross-functional sync, stakeholder updates',
  },
  {
    function: 'Engineering',
    linear: 'Pull assigned issues; update status; log bugs and tech debt',
    slack: 'Standups, blockers, code review discussion',
  },
  {
    function: 'Marketing',
    linear: 'Content and campaign tasks when trackable; link to Linear from narrative checklist',
    slack: 'Campaign coordination, approvals',
  },
  {
    function: 'Sales',
    linear: 'Customer-driven feature requests and bugs filed for triage',
    slack: 'Deal threads, customer context',
  },
  {
    function: 'Customer success',
    linear: 'User-reported issues escalated as bugs or requests',
    slack: 'Support coordination with product',
  },
  {
    function: 'Leadership',
    linear: 'Review priorities; unblock resourcing',
    slack: 'Company-wide announcements',
  },
]

export const LINEAR_WORKFLOW_STEPS = [
  {
    step: 'Intake',
    detail:
      'Work enters from NPS/PMF insights, user feedback (HITL), internal requests, or bugs found in production.',
  },
  {
    step: 'Log',
    detail: 'Every feature request, bug fix, and sprint item is created in Linear — not only discussed in Slack.',
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
]

export const TEAM_RHYTHMS = [
  'Friday EOD — every teammate submits the Time Log (feeds Weekly Reports and charter KPI tracking). See /onboarding/time-log.',
]

/** PM & product lifecycle resources — linked from Linear onboarding step. */
export const PM_LIFECYCLE_RESOURCES = {
  methodology: [
    {
      path: '/sprints',
      title: 'Product Lifecycle',
      description: 'Listen → Log → Prioritize → Ship. How customer signals become Linear work.',
    },
    {
      path: '/operating-system',
      title: 'Operating System',
      description: 'Linear + Slack norms, triage, and team rhythms (including Friday Time Log).',
    },
    {
      path: '/project-charter',
      title: 'Scaling Kahana Charter',
      description: 'Org KPIs (CURR, DAUs, MRR, ARR, experts, hubs) and creator pipeline.',
    },
    {
      path: '/',
      title: 'Executive Summary',
      description: 'Kahana traction, GTM, and strategic context — what we are scaling toward.',
    },
    {
      path: '/weekly-reports',
      title: 'Weekly Reports',
      description: 'Cross-team progress synthesized from time logs — read against charter KPIs.',
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
      path: '/kahana',
      title: 'Kahana Platform Overview',
      description: 'Product surfaces, monetization, roadmap — context for backlog decisions.',
    },
    {
      path: '/kahana-competitors',
      title: 'Competitive Landscape',
      description: 'Positioning vs. creator platforms — informs GTM and product bets.',
    },
  ],
}

export const PM_LIFECYCLE_STEPS = [
  {
    step: '1. Know the scoreboard',
    detail: 'Read Executive Summary and Project Charter KPIs. Every backlog item should connect to CURR, DAUs, retention, MRR, ARR, experts onboarded, hubs created, or customer delight.',
  },
  {
    step: '2. Listen to customers',
    detail: 'Review NPS/PMF data and user feedback trends weekly. Capture themes before sprint planning.',
  },
  {
    step: '3. Log in Linear',
    detail: 'Create issues for bugs, features, and improvements — with links to feedback sources. No Slack-only work.',
  },
  {
    step: '4. Prioritize against KPIs',
    detail: 'Order backlog by impact on charter metrics. PM assigns top items to engineering.',
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
    path: '/kahana#roadmap-snapshot',
    title: 'Kahana roadmap',
    description: 'Horizon themes; execution tracked in Linear.',
  },
  {
    path: '/technical-roadmap',
    title: 'Technical Roadmap',
    description: 'Security, Trust, Algorithm — internal technical focus for team onboarding.',
  },
  {
    path: '/operating-system',
    title: 'This page',
    description: 'Linear + Slack operating model.',
  },
]
