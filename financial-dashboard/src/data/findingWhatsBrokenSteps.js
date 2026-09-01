/**
 * Product Quality — checklist SOP (formerly Finding What's Broken).
 * Gallery: /sops/finding-whats-broken · steps: /sops/finding-whats-broken/:stepId
 */

import { SOP_LAST_UPDATED } from './sopStepUtils'

export const FINDING_WHATS_BROKEN_META = {
  title: 'Product Quality',
  sopNumber: 3,
  category: 'Product',
  subtitle:
    'A working playbook for noticing broken, confusing, or absurd product moments, deciding what to fix first, and closing the loop. Open a heading for the full checklist.',
  edition: 'v1.0 — working playbook',
  standing:
    'Use the Section V checklist whenever you sit down to do a review. Quality improves every week instead of getting rediscovered by accident.',
  excerpt:
    'Find broken, confusing, or absurd product moments, then log, prioritize, and verify the fix. We do it so quality improves every week instead of getting rediscovered by accident.',
  updatedAt: SOP_LAST_UPDATED,
  metaRows: [
    ['Playbook', 'Product — find, log, prioritize, and verify fixes'],
    ['Written for', 'Product Managers on a small, fast-moving Kahana team'],
    ['Edition', 'v1.0 — working playbook'],
    ['Standing', 'Open Section V during every review session'],
  ],
}

export const FINDING_WHATS_BROKEN_GROUPS = [
  {
    id: 'standing',
    title: 'I. Standing orders',
    intro: 'Why this matters at Kahana, and the five principles that keep a review honest.',
  },
  {
    id: 'finding',
    title: 'II. Six ways to find what’s broken',
    intro: 'Do not rely on one method. Data shows where to look; users show why it hurts.',
  },
  {
    id: 'calling-out',
    title: 'III. Calling it out',
    intro: 'Name the pattern, write one finding, then sort it on impact vs effort.',
  },
  {
    id: 'loop',
    title: 'IV. Close the loop',
    intro: 'A finding that never gets verified as fixed is not done — it has only moved to a spreadsheet.',
  },
  {
    id: 'session',
    title: 'V. Review session',
    intro: 'Keep this section open during a review. Check Done as you complete each pass.',
  },
]

export const FINDING_WHATS_BROKEN_STEPS = [
  {
    id: 'why-it-matters',
    label: 'Why this matters at Kahana',
    icon: 'lock',
    group: 'standing',
    badge: '3 min',
    doneWhen:
      'You can say, in one sentence, what a broken first impression costs a creator or a buyer at this stage.',
  },
  {
    id: 'core-principles',
    label: 'Core principles',
    icon: 'book',
    group: 'standing',
    badge: '4 min',
    doneWhen:
      'You review like a stranger, name the so-what, prefer small shipped fixes, pair data with users, and close the loop.',
  },
  {
    id: 'dogfood',
    label: 'Dogfood it like a brand-new user',
    icon: 'user',
    group: 'finding',
    badge: '30 min',
    doneWhen:
      'You completed one real task in incognito or a throwaway account and wrote down every hesitation.',
  },
  {
    id: 'walk-journeys',
    label: 'Walk every core user journey',
    icon: 'map',
    group: 'finding',
    badge: '45 min',
    doneWhen:
      'You listed the 5–8 journeys that matter most and walked each on desktop and mobile, in at least two browsers.',
  },
  {
    id: 'read-the-data',
    label: 'Read the data, don’t guess',
    icon: 'chart',
    group: 'finding',
    badge: '20 min',
    doneWhen:
      'You checked funnel drop-off, dead/rage clicks, zero-result search, and error logs instead of relying on gut feel.',
  },
  {
    id: 'mine-feedback',
    label: 'Mine feedback you already have',
    icon: 'message',
    group: 'finding',
    badge: '15 min',
    doneWhen:
      'You scanned tickets, reviews, founder-call notes, and social mentions for the same complaint showing up twice.',
  },
  {
    id: 'heuristic-eval',
    label: 'Run a heuristic evaluation',
    icon: 'clipboard',
    group: 'finding',
    badge: '30 min',
    doneWhen:
      'You scored key screens against Nielsen’s 10 heuristics instead of personal taste.',
  },
  {
    id: 'benchmark',
    label: 'Benchmark comparable products',
    icon: 'globe',
    group: 'finding',
    badge: '25 min',
    doneWhen:
      'You did the same core task on 2–3 products users already know and noted where theirs is obviously better.',
  },
  {
    id: 'absurd-patterns',
    label: 'Spot what absurd usually looks like',
    icon: 'sparkles',
    group: 'calling-out',
    badge: '5 min',
    doneWhen:
      'You can name the ten patterns (dead controls, unclosable UI, hidden price, inconsistent words) without looking them up.',
  },
  {
    id: 'document-a-finding',
    label: 'Document each finding in one log entry',
    icon: 'clipboard',
    group: 'calling-out',
    badge: '5 min',
    doneWhen:
      'One finding is one log entry with title, screenshot, issue, impact, proposed fix, and High/Medium/Low.',
  },
  {
    id: 'prioritize',
    label: 'Place the finding on Impact vs Effort',
    icon: 'trend',
    group: 'calling-out',
    badge: '5 min',
    doneWhen:
      'You can place a finding on the Impact vs Effort grid and name the KPI or user moment it costs.',
  },
  {
    id: 'finding-to-fix',
    label: 'Take the finding to a verified fix',
    icon: 'key',
    group: 'loop',
    badge: '10 min',
    doneWhen:
      'You know the seven steps from log → triage → ticket → build → QA yourself → verify metric → close the log.',
  },
  {
    id: 'cadence',
    label: 'Run the review on a weekly cadence',
    icon: 'calendar',
    group: 'loop',
    badge: '3 min',
    doneWhen:
      'You know what happens daily, weekly, bi-weekly, monthly, and before a major launch.',
  },
  {
    id: 'session-first-time',
    label: 'Use it like a first-time user',
    icon: 'user',
    group: 'session',
    badge: '5 min',
    doneWhen: 'This review was done as a stranger, not as an insider who already knows every button.',
  },
  {
    id: 'session-devices',
    label: 'Same flow on mobile and desktop',
    icon: 'globe',
    group: 'session',
    badge: '5 min',
    doneWhen: 'The same flow was tested on mobile and desktop.',
  },
  {
    id: 'session-data',
    label: 'Check funnel drop-off and error logs',
    icon: 'chart',
    group: 'session',
    badge: '5 min',
    doneWhen: 'Funnel drop-off and error logs were checked — not only click-around.',
  },
  {
    id: 'session-tickets',
    label: 'Check tickets and reviews',
    icon: 'message',
    group: 'session',
    badge: '5 min',
    doneWhen: 'Recent support tickets and reviews were scanned for repeat complaints.',
  },
  {
    id: 'session-evidence',
    label: 'Attach evidence to every finding',
    icon: 'clipboard',
    group: 'session',
    badge: '5 min',
    doneWhen: 'Every finding has a screenshot, an issue, and a named impact.',
  },
  {
    id: 'session-grid',
    label: 'Sort into Impact / Effort',
    icon: 'trend',
    group: 'session',
    badge: '5 min',
    doneWhen: 'New findings are on the Impact vs Effort grid.',
  },
  {
    id: 'session-schedule',
    label: 'Schedule high-impact / low-effort',
    icon: 'calendar',
    group: 'session',
    badge: '5 min',
    doneWhen: 'High Impact / Low Effort items are scheduled this week.',
  },
  {
    id: 'session-retest',
    label: 'Re-test anything marked fixed',
    icon: 'lock',
    group: 'session',
    badge: '5 min',
    doneWhen: 'Anything marked “fixed” was re-run with the original repro steps before closing.',
  },
]

export function getFindingWhatsBrokenStep(id) {
  return FINDING_WHATS_BROKEN_STEPS.find((s) => s.id === id)
}

export function getFindingWhatsBrokenGroup(id) {
  return FINDING_WHATS_BROKEN_GROUPS.find((g) => g.id === id) ?? null
}

export function getFindingWhatsBrokenParam(param) {
  const group = getFindingWhatsBrokenGroup(param)
  if (group) return { group, stepId: null }
  const step = getFindingWhatsBrokenStep(param)
  if (step) return { group: getFindingWhatsBrokenGroup(step.group), stepId: step.id }
  return { group: null, stepId: null }
}

export function getAdjacentFindingWhatsBrokenGroups(groupId) {
  const i = FINDING_WHATS_BROKEN_GROUPS.findIndex((g) => g.id === groupId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? FINDING_WHATS_BROKEN_GROUPS[i - 1] : null,
    next: i < FINDING_WHATS_BROKEN_GROUPS.length - 1 ? FINDING_WHATS_BROKEN_GROUPS[i + 1] : null,
  }
}

export function getAdjacentFindingWhatsBrokenSteps(id) {
  const i = FINDING_WHATS_BROKEN_STEPS.findIndex((s) => s.id === id)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? FINDING_WHATS_BROKEN_STEPS[i - 1] : null,
    next: i < FINDING_WHATS_BROKEN_STEPS.length - 1 ? FINDING_WHATS_BROKEN_STEPS[i + 1] : null,
  }
}

export function findingWhatsBrokenSearchBlob() {
  return [
    FINDING_WHATS_BROKEN_META.title,
    FINDING_WHATS_BROKEN_META.subtitle,
    ...FINDING_WHATS_BROKEN_GROUPS.map((g) => `${g.title} ${g.intro}`),
    ...FINDING_WHATS_BROKEN_STEPS.flatMap((s) => [s.label, s.doneWhen, s.id.replace(/-/g, ' ')]),
    'product sop',
    'quality',
    'dogfood',
    'heuristic',
    'usability',
    'bug',
    'ux',
    'nielsen',
    'srujana',
  ].join(' ')
}
