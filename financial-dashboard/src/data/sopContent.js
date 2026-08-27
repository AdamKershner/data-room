/**
 * Standard Operating Procedures — team-facing product ops guides.
 * /sops is a searchable gallery; long-form SOPs at /sops/:sopId;
 * checklist SOPs at /sops/:sopId with /sops/:sopId/:stepId subpages.
 *
 * SOP 1 Product Hunt Launch. SOP 2 Community Building (clubs + Keeper’s Codex).
 * SOP 3 Product Quality. SOP 4 Product Management Playbook. SOP 5 Blogs.
 * SOP 6 Brand Guidelines. SOP 7 Merch. SOP 8 Official Social Media.
 * SOP 9 Author Outreach. SOP 10 Writing a Project Charter.
 * SOP 11 Creating YouTube Videos. SOP 12 SEO. SOP 13 Updating the Marketing Website. SOP 14 Third-Party News and PR. SOP 15 Creator Prospecting. SOP 16 Creator Outreach. SOP 17 Creator Collab Calls. SOP 18 Post-Collab Follow-ups. SOP 19 Lifecycle Emails and Tickets. SOP 20 Time Log. SOP 21 Analytics. SOP 22 Getting Set Up with Kahana Code. SOP 23 Penetration Testing. SOP 24 PII Handling. SOP 25 Platform Governance. SOP 26 Content Moderation. SOP 27 Reporting Cybersecurity Threats. SOP 28+ function playbooks and operating tasks.
 */

import { keepersCodexSearchBlob } from './keepersCodexSteps'
import { FINDING_WHATS_BROKEN_STEPS, findingWhatsBrokenSearchBlob } from './findingWhatsBrokenSteps'
import {
  BLOG_PUBLISHING_SOP,
  BRAND_GUIDELINES_SOP,
  MERCH_SOP,
  SOCIAL_MEDIA_ACCESS_SOP,
  AUTHOR_OUTREACH_SOP,
  WRITING_PROJECT_CHARTER_SOP,
  WRITING_PROJECT_CHARTER_ALIASES,
  CREATING_YOUTUBE_VIDEOS_SOP,
  CREATING_YOUTUBE_VIDEOS_ALIASES,
  SEO_SOP,
  SEO_ALIASES,
  MARKETING_WEBSITE_SOP,
  PR_NEWS_SOP,
  CREATOR_PROSPECTING_SOP,
  CREATOR_PROSPECTING_ALIASES,
  CREATOR_OUTREACH_SOP,
  CREATOR_COLLAB_CALLS_SOP,
  CREATOR_COLLAB_CALLS_ALIASES,
  POST_COLLAB_FOLLOWUPS_SOP,
  LIFECYCLE_EMAILS_AND_TICKETS_SOP,
  LIFECYCLE_EMAILS_AND_TICKETS_ALIASES,
  TIME_LOG_SOP,
  TIME_LOG_ALIASES,
  ANALYTICS_SOP,
  ANALYTICS_ALIASES,
  KAHANA_CODE_SETUP_SOP,
  KAHANA_CODE_SETUP_ALIASES,
  PENETRATION_TESTING_SOP,
  PII_HANDLING_SOP,
  PLATFORM_GOVERNANCE_SOP,
  CONTENT_MODERATION_SOP,
  REPORTING_CYBER_THREATS_SOP,
  SECURITY_SOP_ALIASES,
  FUNCTION_SOP_CATEGORIES,
  FUNCTION_SOPS,
  PRODUCT_HUNT_LAUNCH_SOP,
} from './functionSops'
import { COMMUNITY_BUILDING_ALIASES, COMMUNITY_BUILDING_SOP } from './communityBuildingSop'
import {
  PRODUCT_MANAGEMENT_PLAYBOOK_ALIASES,
  PRODUCT_MANAGEMENT_PLAYBOOK_SOP,
} from './productManagementPlaybookSop'

export const SOP_PAGE = {
  title: 'Standard Operating Procedures',
  subtitle:
    'Searchable guides tagged by business function. Club and product quality checklists sit alongside department playbooks and day-to-day operating tasks.',
  freshnessNote:
    'SOP 1–27 are Ready for review. SOP 28+ are labeled Updates in progress (function playbooks from SOPS.txt plus operating tasks, Marketing through Legal). SOP 1 is Product Hunt Launch. SOP 2 Community Building covers clubs (as of August 12, 2026) and The Keeper’s Codex (v1.0 draft). SOP 3 Product Quality is the product quality checklist. SOP 4 is the Product Management Playbook (v1.0). SOP 5 is Blogs. SOP 6 is Brand Guidelines (original PDF plus Aura Library overlay; revamp in progress). SOP 7 is Merch (Canva, Printify, living mood board). SOP 8 is Official Social Media (restricted credentials, brand/proofread, Linear marketing-manager review before schedule or post). SOP 9 is Author Outreach (contact list, tracker, personalized template). SOP 10 is Writing a Project Charter (brief from Adam, draft before every answer, product-verified steps, he circulates). SOP 11 is Creating YouTube Videos (Screen Studio, pauses and music, demo thumbnail, YouTube package, SOP 8 or zip to Adam). SOP 12 is SEO (Search Console, keyword clusters, UTMs, Mixpanel referring domain, product SEO for hubs/profiles/clubs ongoing). SOP 13 is Updating the Marketing Website (kahana-homepage-public, Linear card, local test, In Review, Adam or EM deploys Heroku, then Complete). SOP 14 is Third-Party News and PR (media database, scoops, personalized pitches, legal on claims, archive coverage). SOP 15 is Creator Prospecting (TikTok/Instagram/YouTube → sheet, brand contact, handle@gmail.com checked in Google Chat). SOP 16 is Creator Outreach (email or official DM, white-glove hub, complimentary Growth plan, featured placement). SOP 17 is Creator Collab Calls (booked meeting, listen, offer, paid-collab screen, help them to a hub on the library). SOP 18 is Post-Collab Follow-ups (hub views and payments, how else we can help, opt-in collab-creators club). SOP 19 is Lifecycle Emails and Tickets (Resend + Mixpanel delivery/landing, NPS/PMF, contact, support, feedback). SOP 20 is Time Log (Kahana HQ Friday reminder, HR and PM check the output sheet, Slack missing people). SOP 21 is Analytics (proactive outreach to other functions, reporting insights, measurement innovation, teach them to reuse the answer). SOP 22 is Getting Set Up with Kahana Code (tools form, .env.development from Adam, run kahana-web / firebase-functions / kahana-homepage-public locally, then take Linear cards). SOP 23 is Penetration Testing (scoped tests, no dedicated Linear card; KAH-66 In Review is related hygiene). SOP 24 is PII Handling (today’s practice; KAH-86 Backlog). SOP 25 is Platform Governance (KAH-85 Backlog). SOP 26 is Content Moderation (reports now; KAH-84 In Progress). SOP 27 is Reporting Cybersecurity Threats (same-day ping; no dedicated Linear card). Re-check steps if the product UI has moved on.',
}

/** SOPs 1 through this number are ready for review; later numbers are still being updated. */
export const SOP_READY_THROUGH = 27

export const SOP_REVIEW_STATUS = {
  ready: 'ready-for-review',
  inProgress: 'updates-in-progress',
}

export const SOP_REVIEW_STATUS_LABEL = {
  'ready-for-review': 'Ready for review',
  'updates-in-progress': 'Updates in progress',
}

export function getSopReviewStatus(sopOrNumber) {
  const n = typeof sopOrNumber === 'number' ? sopOrNumber : sopOrNumber?.number
  return n <= SOP_READY_THROUGH ? SOP_REVIEW_STATUS.ready : SOP_REVIEW_STATUS.inProgress
}

export function getSopReviewStatusLabel(sopOrNumber) {
  return SOP_REVIEW_STATUS_LABEL[getSopReviewStatus(sopOrNumber)]
}

/** Categories used for gallery filters (order matters). */
export const SOP_CATEGORIES = [...FUNCTION_SOP_CATEGORIES]

/** @typedef {{ id?: string, text: string, note?: string, href?: string, hrefLabel?: string, template?: string, code?: boolean }} SopStep */

/**
 * @typedef {object} SopDoc
 * @property {string} id
 * @property {number} number
 * @property {string} title
 * @property {string} category
 * @property {string} [owner] - Function owner / accountable role
 * @property {string} description
 * @property {string[]} [keywords]
 * @property {string} who
 * @property {string} when
 * @property {string} [format] - 'checklist' for onboarding-style SOP pages
 * @property {string} [href] - Override gallery link (checklist index)
 * @property {string[]} [notes] - Callouts shown under Who/When
 * @property {{ id: string, title: string, intro?: string, steps: SopStep[] }[]} sections
 * @property {string[]} doneWhen
 */

/** @type {SopDoc[]} */
export const SOPS = [
  { ...PRODUCT_HUNT_LAUNCH_SOP, number: 1 },
  { ...COMMUNITY_BUILDING_SOP, number: 2 },
  {
    id: 'finding-whats-broken',
    number: 3,
    title: 'Product Quality',
    category: 'Product',
    format: 'checklist',
    href: '/sops/finding-whats-broken',
    owner: 'Product Manager',
    description:
      'Product quality checklist: dogfood like a stranger, walk core journeys, read the data, log findings, prioritize on impact vs effort, and verify the fix.',
    keywords: [
      'finding what\'s broken',
      'product quality',
      'bug',
      'ux',
      'usability',
      'heuristic',
      'nielsen',
      'dogfood',
      'funnel',
      'rage click',
      'empty state',
      'checkout',
      'srujana',
    ],
    who: 'Product Managers',
    when: 'Daily notes, weekly dogfood, bi-weekly triage, monthly journey pass, and before every major launch.',
    notes: [
      'Working playbook from Srujana Divya Emmadi. Open Section V during every review session.',
    ],
    sections: FINDING_WHATS_BROKEN_STEPS.map((step) => ({
      id: step.id,
      title: step.label,
      steps: [{ text: step.doneWhen }],
    })),
    doneWhen: [
      'A weekly dogfood session is on the calendar.',
      'Findings are logged with screenshot, issue, and named impact.',
      'High impact / low effort items ship the same week.',
      'Fixes are re-tested before the log is closed.',
    ],
  },
  { ...PRODUCT_MANAGEMENT_PLAYBOOK_SOP, number: 4 },
  { ...BLOG_PUBLISHING_SOP, number: 5 },
  { ...BRAND_GUIDELINES_SOP, number: 6 },
  { ...MERCH_SOP, number: 7 },
  { ...SOCIAL_MEDIA_ACCESS_SOP, number: 8 },
  { ...AUTHOR_OUTREACH_SOP, number: 9 },
  { ...WRITING_PROJECT_CHARTER_SOP, number: 10 },
  { ...CREATING_YOUTUBE_VIDEOS_SOP, number: 11 },
  { ...SEO_SOP, number: 12 },
  { ...MARKETING_WEBSITE_SOP, number: 13 },
  { ...PR_NEWS_SOP, number: 14 },
  { ...CREATOR_PROSPECTING_SOP, number: 15 },
  { ...CREATOR_OUTREACH_SOP, number: 16 },
  { ...CREATOR_COLLAB_CALLS_SOP, number: 17 },
  { ...POST_COLLAB_FOLLOWUPS_SOP, number: 18 },
  { ...LIFECYCLE_EMAILS_AND_TICKETS_SOP, number: 19 },
  { ...TIME_LOG_SOP, number: 20 },
  { ...ANALYTICS_SOP, number: 21 },
  { ...KAHANA_CODE_SETUP_SOP, number: 22 },
  { ...PENETRATION_TESTING_SOP, number: 23 },
  { ...PII_HANDLING_SOP, number: 24 },
  { ...PLATFORM_GOVERNANCE_SOP, number: 25 },
  { ...CONTENT_MODERATION_SOP, number: 26 },
  { ...REPORTING_CYBER_THREATS_SOP, number: 27 },
  ...FUNCTION_SOPS,
]

export function resolveSopId(sopId) {
  return (
    COMMUNITY_BUILDING_ALIASES[sopId] ||
    PRODUCT_MANAGEMENT_PLAYBOOK_ALIASES[sopId] ||
    WRITING_PROJECT_CHARTER_ALIASES[sopId] ||
    CREATING_YOUTUBE_VIDEOS_ALIASES[sopId] ||
    SEO_ALIASES[sopId] ||
    CREATOR_PROSPECTING_ALIASES[sopId] ||
    CREATOR_COLLAB_CALLS_ALIASES[sopId] ||
    LIFECYCLE_EMAILS_AND_TICKETS_ALIASES[sopId] ||
    TIME_LOG_ALIASES[sopId] ||
    ANALYTICS_ALIASES[sopId] ||
    KAHANA_CODE_SETUP_ALIASES[sopId] ||
    SECURITY_SOP_ALIASES[sopId] ||
    sopId
  )
}

export function getSopById(sopId) {
  return SOPS.find((s) => s.id === resolveSopId(sopId)) ?? null
}

export function getAdjacentSops(sopId) {
  const index = SOPS.findIndex((s) => s.id === resolveSopId(sopId))
  if (index < 0) return { prev: null, next: null }
  return {
    prev: index > 0 ? SOPS[index - 1] : null,
    next: index < SOPS.length - 1 ? SOPS[index + 1] : null,
  }
}

export function sopMatchesQuery(sop, query) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const hay = [
    sop.title,
    `SOP ${sop.number}`,
    sop.category,
    sop.owner ?? '',
    sop.format ?? '',
    getSopReviewStatusLabel(sop),
    sop.description,
    sop.who,
    sop.when,
    ...(sop.keywords ?? []),
    ...(sop.notes ?? []),
    ...sop.sections.flatMap((section) => [
      section.title,
      section.intro ?? '',
      ...section.steps.map((step) => `${step.text} ${step.note ?? ''} ${step.template ?? ''} ${step.href ?? ''}`),
    ]),
    ...sop.doneWhen,
    sop.id === 'community-building' ? keepersCodexSearchBlob() : '',
    sop.id === 'finding-whats-broken' ? findingWhatsBrokenSearchBlob() : '',
  ]
    .join(' ')
    .toLowerCase()
  return hay.includes(q)
}
