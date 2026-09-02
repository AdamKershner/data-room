/**
 * Standard Operating Procedures — team-facing product ops guides.
 * /sops is a searchable gallery; long-form SOPs at /sops/:sopId;
 * checklist SOPs at /sops/:sopId with /sops/:sopId/:stepId subpages.
 *
 * SOP 1 Product Hunt Launch. SOP 2 Community Building (clubs + Keeper’s Codex).
 * SOP 3 Product Quality. SOP 4 Product Management Playbook. SOP 5 Blogs.
 * SOP 6 Brand Guidelines. SOP 7 Merch. SOP 8 Official Social Media.
 * SOP 9 Author Outreach. SOP 10 Writing a Project Charter.
 * SOP 11 Creating YouTube Videos. SOP 12 SEO. SOP 13 Updating the Marketing Website. SOP 14 Third-Party News and PR. SOP 15 Creator Prospecting. SOP 16 Creator Outreach. SOP 17 Creator Collab Calls. SOP 18 Post-Collab Follow-ups. SOP 19 Lifecycle Emails and Tickets. SOP 20 Time Log. SOP 21 Analytics. SOP 22 Getting Set Up with Kahana Code. SOP 23 Penetration Testing. SOP 24 PII Handling. SOP 25 Platform Governance. SOP 26 Content Moderation. SOP 27 Reporting Cybersecurity Threats. SOP 28 Onboarding as a Manager. SOP 29 Adding and Updating SOPs. SOP 30 Search Console and branded search.
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
  PRODUCT_HUNT_LAUNCH_SOP,
} from './functionSops'
import { COMMUNITY_BUILDING_ALIASES, COMMUNITY_BUILDING_SOP } from './communityBuildingSop'
import {
  PRODUCT_MANAGEMENT_PLAYBOOK_ALIASES,
  PRODUCT_MANAGEMENT_PLAYBOOK_SOP,
} from './productManagementPlaybookSop'
import {
  MANAGER_ONBOARDING_ALIASES,
  MANAGER_ONBOARDING_SOP,
} from './managerOnboardingSop'
import {
  UPDATING_DATA_ROOM_ALIASES,
  UPDATING_DATA_ROOM_SOP,
} from './updatingDataRoomSop'
import {
  SEARCH_CONSOLE_SEO_ALIASES,
  SEARCH_CONSOLE_SEO_SOP,
} from './searchConsoleSeoSop'
import { flattenSopSteps, normalizeSopDoc } from './sopStepUtils'

export const SOP_PAGE = {
  title: 'Standard Operating Procedures',
}

/** SOPs 1 through this number are ready for review. */
export const SOP_READY_THROUGH = 30

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

/** Folded operating-task URLs that now live inside a named SOP. */
const FOLDED_SOP_ALIASES = {
  'content-guidelines-quality': 'brand-guidelines',
  'marketing-inputs': 'blog-publishing',
  'mood-board-collaboration': 'merch',
  'instagram-publishing': 'official-social-media',
  'book-club-management': 'community-building',
  'sending-project-charters': 'writing-a-project-charter',
  'customer-support-operations': 'lifecycle-emails-and-tickets',
  'time-attendance-pto': 'time-log',
  'mixpanel-metric-automation': 'analytics',
  'creating-mixpanel-dashboards': 'analytics',
  'selecting-tasks-from-backlog': 'kahana-code-setup',
  'security-rules-rotating-keys': 'reporting-cyber-threats',
}

/** @typedef {{ id?: string, label?: string, doneWhen?: string, text: string, note?: string, href?: string, hrefLabel?: string, template?: string, code?: boolean }} SopStep */

/**
 * @typedef {object} SopDoc
 * @property {string} id
 * @property {number} number
 * @property {string} title
 * @property {string} category
 * @property {string} [owner] - Function owner / accountable role
 * @property {string} description
 * @property {string} [excerpt] - Gallery + What this is callout (what it is, why we do it)
 * @property {string[]} [keywords]
 * @property {string} who
 * @property {string} when
 * @property {string} [cadence] - Daily, Weekly, Monthly, Quarterly, Annually
 * @property {string} [trigger] - Event that starts this SOP
 * @property {string} [format] - 'checklist' for onboarding-style SOP pages
 * @property {string} [href] - Override gallery link (checklist index)
 * @property {string[]} [notes] - Callouts shown under Who/When
 * @property {string} [updatedAt] - Last updated stamp shown on the SOP
 * @property {{ id: string, title: string, intro?: string, steps: SopStep[] }[]} sections
 * @property {string[]} doneWhen
 */

/** Two-sentence what + why for gallery cards and the SOP intro callout. */
const SOP_EXCERPTS = {
  'product-hunt-launch':
    'Run the Product Hunt launch as a three-phase checklist: community and town halls first, 3 AM EST posts on the day, then Mixpanel and support. We do it so a #1 day is earned with real testimonials, not a last-minute upvote dump.',
  'community-building':
    'Stand up and run Kahana clubs: publish, invite, pick titles, reach creators, and watch whether the hall is living. We do it so Aura (the discovery signal) and honest member counts grow a real community, not a silent list.',
  'finding-whats-broken':
    'Find broken, confusing, or absurd product moments, then log, prioritize, and verify the fix. We do it so quality improves every week instead of getting rediscovered by accident.',
  'product-management-playbook':
    'This is how Kahana PMs observe, frame, ship, and learn, including the 90-day launchpad. Incoming PMs run the days 1–10 first loop before week 3. We do it so product work makes a customer workflow better and we can prove that it did.',
  'blog-publishing':
    'Write comparison, success-story, and how-to posts so creators and viewers can see how Kahana sits next to tools they already use. We do it so the library shows up in search and in someone’s stack, not as a silent replacement.',
  'brand-guidelines':
    'Check every public piece against Kahana brand, naming, and the Aura Library overlay. We do it so the company looks like one product, not a pile of intern drafts.',
  'merch':
    'Design on-brand merch and list it on Printify so community members can buy it. We do it so Kahana earns from merch without stocking a warehouse, and custom pieces are purchased only for named creator collabs.',
  'official-social-media':
    'Request official-account access, then post only after Linear quality review. We do it so Kahana HQ speaks with one voice and Mixpanel can see which posts actually bring people in.',
  'author-outreach':
    'Research an author, send a personal ask, and log every touch on the tracker. We do it so clubs get titles people actually want, with one honest sender per creator.',
  'writing-a-project-charter':
    'Turn a verbal brief into a charter a Manager can circulate: capture, draft, question, amend, hand off. We do it so work starts with a shared problem, not a Slack thread nobody owns.',
  'creating-youtube-videos':
    'Record Kahana how-tos in Screen Studio, then package title, description, and thumbnail for YouTube. We do it so someone can watch a job get done, then try it on Kahana (AKA “The Aura Library”).',
  'seo':
    'Build keyword clusters, UTM links, and blog indexing for kahana.io. We do it so people find the library for the job they already have. Library and hub Search Console checks are in this SOP.',
  'search-console-seo':
    'Inspect Library and one hub in Search Console, run Test live URL, ping the product sitemap, and save a monthly kahana query readout. We do it so Googlebot sees Library HTML and branded rank is a tracked number.',
  'marketing-website':
    'Ship kahana.io changes from a Linear card through local test, review, and Heroku deploy. We do it so the public site stays accurate without taking production down.',
  'pr-news':
    'Pitch Kahana to third-party writers with a fair, sourced story, then amplify what actually runs. We do it so coverage is earned and true, not a press dump we wrote about ourselves.',
  'creator-prospecting':
    'Find creators who already make work our members would board, then add them to the outreach sheet. We do it so SOP 16 starts with a real list, not a guess.',
  'creator-outreach':
    'Send a personal collab ask from the official account and log every reply on the row. We do it so creators hear one Kahana, with honest numbers and no duplicate DMs.',
  'creator-collab-calls':
    'Run the collab call: listen, show the hub, help them sign up, write notes the same day. We do it so a yes becomes a hub on the library, not a calendar invite that dies.',
  'post-collab-followups':
    'After a public hub, thank them, offer intros, and keep the door open without a second pitch. We do it so collab creators stay in the Kahana club and we learn what else they need.',
  'lifecycle-emails-and-tickets':
    'Watch Resend and Mixpanel so lifecycle mail actually lands, and reply to every inbound ticket. We do it so users hear from a person, not only an auto-receipt, and suppressions stay honored.',
  'time-log':
    'Submit the Friday time log and chase anyone missing before the week closes. We do it so intern hours are honest, billable, and visible without a spreadsheet chase on Monday.',
  'analytics':
    'Read Mixpanel boards first, then ship a small cut or escalate a real gap. We do it so decisions use production data, not a new dashboard invented for the slide.',
  'kahana-code-setup':
    'Get GitHub, .env.development, and local runs of kahana-web, functions, and the marketing site. We do it so you can take a Linear card without breaking production on day one.',
  'penetration-testing':
    'Name the environment, run the agreed test, log findings, and retest closures. We do it so we find holes before someone else does, without testing production as a surprise.',
  'pii-handling':
    'Minimize, lock down, and report personal data the same way every time. We do it so a screenshot dump or Slack paste does not become a PII incident.',
  'platform-governance':
    'Document who holds admin power and what changes after an incident. We do it so access is granted on purpose, not inherited from a shared login.',
  'content-moderation':
    'Decide leave-up, limit, or take down, then log the call. We do it so the library stays safe without turning keepers into an unaccountable delete squad.',
  'reporting-cyber-threats':
    'Report the threat the same day, rotate what leaked, and loop Legal when PII is involved. We do it so an attack is a record and a fix, not a rumor in Slack.',
}

/** @type {SopDoc[]} */
const SOPS_RAW = [
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
      'quality',
      'heuristic',
      'nielsen',
      'dogfood',
      'funnel',
      'rage click',
      'empty state',
      'checkout',
    ],
    who: 'Product Managers',
    when: 'Daily notes, weekly dogfood, bi-weekly triage, monthly journey pass, and before every major launch.',
    notes: [
      'Working playbook for Product Managers. Open Section V during every review session.',
    ],
    sections: FINDING_WHATS_BROKEN_STEPS.map((step) => ({
      id: step.id,
      title: step.label,
      steps: [{ ...step, text: step.doneWhen }],
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
  { ...MANAGER_ONBOARDING_SOP, number: 28 },
  { ...UPDATING_DATA_ROOM_SOP, number: 29 },
  { ...SEARCH_CONSOLE_SEO_SOP, number: 30 },
]

const SOP_SCHEDULE = {
  'product-hunt-launch': {
    trigger: 'A Product Hunt launch is scheduled. Day-of work starts at 3 AM EST.',
  },
  'community-building': {
    cadence: 'Weekly',
    trigger: 'Founding a club, then every cycle after.',
  },
  'finding-whats-broken': {
    cadence: 'Daily, Weekly, Monthly',
    trigger: 'Before every major launch.',
  },
  'product-management-playbook': {
    cadence: 'Quarterly',
    trigger: 'First 90 days for a new PM, and after each PM onboarding cycle.',
  },
  'blog-publishing': {
    cadence: 'Weekly',
    trigger: 'A ship, success story, or landscape comparison is ready to teach.',
  },
  'brand-guidelines': {
    trigger: 'Before every public piece, and again if copy, visuals, or the story changed.',
  },
  'merch': {
    trigger: 'Before each Printify listing. Custom merch when a named creator collab needs it.',
  },
  'official-social-media': {
    trigger: 'Before first login to an official account, and before every official post.',
  },
  'author-outreach': {
    cadence: 'Weekly',
    trigger: 'Working a batch from the contact list and tracker.',
  },
  'writing-a-project-charter': {
    trigger: 'At the outset of a project with more than two or three people, before work begins.',
  },
  'creating-youtube-videos': {
    trigger: 'After a ship, a repeating question, a use case, or a blog or Help article with no video.',
  },
  'seo': {
    cadence: 'Weekly, Monthly',
    trigger: 'Before drafting a blog, video, or campaign, and after every public URL or sitemap change.',
  },
  'marketing-website': {
    trigger: 'Any marketing-site enhancement, bug fix, blog publish, or campaign landing change.',
  },
  'pr-news': {
    trigger: 'There is a real scoop worth offering, or inbound press arrives.',
  },
  'creator-prospecting': {
    cadence: 'Weekly',
    trigger: 'Before hunting email, log the profile in the creator database.',
  },
  'creator-outreach': {
    trigger: 'SOP 15 has Email or a named social or DM path on the row.',
  },
  'creator-collab-calls': {
    trigger: 'They book time from SOP 16. Prep the same day. Log the same day.',
  },
  'post-collab-followups': {
    cadence: 'Weekly, Monthly, Quarterly',
    trigger: 'The day the hub goes public, then 7 days and 30 days.',
  },
  'lifecycle-emails-and-tickets': {
    cadence: 'Daily',
    trigger: 'Every inbound ticket, contact form, support request, or survey reply.',
  },
  'time-log': {
    cadence: 'Weekly',
    trigger: 'Friday EOD. HR and PM check the sheet Friday EOD or Monday morning.',
  },
  'analytics': {
    cadence: 'Weekly, Monthly',
    trigger: 'A function asks, or a recurring question is still answered by hand.',
  },
  'kahana-code-setup': {
    trigger: 'First week, after the tools form. Finish before you take a Linear card.',
  },
  'penetration-testing': {
    cadence: 'Quarterly',
    trigger: 'Before a launch that adds a lot of new surface (auth, payments, admin, uploads).',
  },
  'pii-handling': {
    cadence: 'Daily',
    trigger: 'Exports, admin tools, Mixpanel, support tickets, and recordings.',
  },
  'platform-governance': {
    cadence: 'Quarterly, Annually',
    trigger: 'Adding admin capabilities or vendors, or after an incident.',
  },
  'content-moderation': {
    cadence: 'Daily',
    trigger: 'On every content report, and as a sampled review of public hubs.',
  },
  'reporting-cyber-threats': {
    trigger: 'Immediately: phishing, intrusion, or suspicious admin activity.',
  },
  'onboarding-as-a-manager': {
    cadence: 'Weekly',
    trigger: 'An Executive assigns you a new teammate. Finish in 1 month, ideally 1-2 weeks.',
  },
  'updating-the-data-room': {
    trigger: 'A new SOP, a SOP rewrite, or any other data-room page change.',
  },
  'search-console-seo': {
    cadence: 'Monthly',
    trigger: 'After a product SEO, sitemap, robots, or nginx bot-proxy ship.',
  },
}

export const SOPS = SOPS_RAW.map((sop) => {
  const schedule = SOP_SCHEDULE[sop.id] || {}
  return normalizeSopDoc({
    ...sop,
    excerpt: sop.excerpt || SOP_EXCERPTS[sop.id],
    cadence: sop.cadence || schedule.cadence,
    trigger: sop.trigger || schedule.trigger,
  })
})

/** Categories used for gallery filters (order matters). Empty categories are omitted. */
export const SOP_CATEGORIES = FUNCTION_SOP_CATEGORIES.filter((c) =>
  SOPS.some((s) => s.category === c)
)

export function resolveSopId(sopId) {
  return (
    FOLDED_SOP_ALIASES[sopId] ||
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
    MANAGER_ONBOARDING_ALIASES[sopId] ||
    UPDATING_DATA_ROOM_ALIASES[sopId] ||
    SEARCH_CONSOLE_SEO_ALIASES[sopId] ||
    sopId
  )
}

export function getSopById(sopId) {
  return SOPS.find((s) => s.id === resolveSopId(sopId)) ?? null
}

export function getSopStep(sopId, stepId) {
  const sop = getSopById(sopId)
  if (!sop || sop.href) return { sop, step: null, steps: [] }
  const steps = flattenSopSteps(sop)
  const step = steps.find((s) => s.key === stepId || s.id === stepId) ?? null
  return { sop, step, steps }
}

export function getSopSectionByParam(sopId, param) {
  const sop = getSopById(sopId)
  if (!sop?.sections?.length) return { sop, section: null, sectionIndex: -1, stepKey: null }
  const bySection = sop.sections.findIndex((section) => section.id === param)
  if (bySection >= 0) {
    return { sop, section: sop.sections[bySection], sectionIndex: bySection, stepKey: null }
  }
  const steps = flattenSopSteps(sop)
  const step = steps.find((s) => s.key === param || s.id === param)
  if (!step) return { sop, section: null, sectionIndex: -1, stepKey: null }
  const sectionIndex = sop.sections.findIndex((section) => section.id === step.sectionId)
  return {
    sop,
    section: sop.sections[sectionIndex] ?? null,
    sectionIndex,
    stepKey: step.key,
  }
}

export function getAdjacentSopSections(sopId, sectionId) {
  const sop = getSopById(sopId)
  if (!sop?.sections?.length) return { prev: null, next: null }
  const index = sop.sections.findIndex((section) => section.id === sectionId)
  if (index < 0) return { prev: null, next: null }
  return {
    prev: index > 0 ? sop.sections[index - 1] : null,
    next: index < sop.sections.length - 1 ? sop.sections[index + 1] : null,
  }
}

export function getAdjacentSopSteps(sopId, stepId) {
  const { steps } = getSopStep(sopId, stepId)
  const index = steps.findIndex((s) => s.key === stepId || s.id === stepId)
  if (index < 0) return { prev: null, next: null }
  return {
    prev: index > 0 ? steps[index - 1] : null,
    next: index < steps.length - 1 ? steps[index + 1] : null,
  }
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
    sop.excerpt ?? '',
    sop.who,
    sop.when,
    sop.cadence ?? '',
    sop.trigger ?? '',
    ...(sop.keywords ?? []),
    ...(sop.notes ?? []),
    ...sop.sections.flatMap((section) => [
      section.title,
      section.intro ?? '',
      ...section.steps.map(
        (step) =>
          `${step.label ?? ''} ${step.doneWhen ?? ''} ${step.text} ${step.note ?? ''} ${step.template ?? ''} ${step.href ?? ''}`
      ),
    ]),
    ...sop.doneWhen,
    sop.id === 'community-building' ? keepersCodexSearchBlob() : '',
    sop.id === 'finding-whats-broken' ? findingWhatsBrokenSearchBlob() : '',
  ]
    .join(' ')
    .toLowerCase()
  return hay.includes(q)
}
