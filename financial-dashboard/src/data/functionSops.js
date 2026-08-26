/**
 * Function-tagged SOPs: department playbooks from SOPS.txt plus the
 * operating-task checklist (Marketing through Legal).
 * Numbered from SOP 11 onward in sopContent.js (SOP 1 Product Hunt, SOP 2 Community Building,
 * SOP 3 Product Quality, SOP 4 Product Management Playbook, SOP 5 Blogs, SOP 6 Brand Guidelines,
 * SOP 7 Merch, SOP 8 Official Social Media, SOP 9 Author Outreach, SOP 10 Writing a Project Charter).
 */

import {
  CREATOR_OUTREACH_SHEET_URL,
  KAHANA_SITE_URL,
  LINEAR_WORKSPACE_URL,
  MIXPANEL_URL,
  TIME_LOG_TALLY_URL,
  TOOLS_ACCESS_TALLY_URL,
} from '../constants/kahanaSite'
import { NOTION_TEAM_DIRECTORY_APP_URL } from '../constants/notionTeamDirectory'

export const FUNCTION_SOP_CATEGORIES = [
  'Marketing',
  'Community',
  'Operations',
  'Sales',
  'Customer Success',
  'Project Management',
  'Product',
  'Analytics',
  'Engineering',
  'Finance',
  'HR & Talent',
  'Security',
  'IT',
  'Legal',
]

const AUTHOR_CONTACT_LIST_URL =
  'https://docs.google.com/spreadsheets/d/1VGc8dwCdZDJ9H04yjaMeCoskNRp8mruCzjJfMUesa6k/edit?gid=0#gid=0'
const AUTHOR_OUTREACH_TRACKER_URL =
  'https://docs.google.com/spreadsheets/d/1PVmuq5rv9Ef--KSECCzoCFybkyftI3k6KFpifq5IkfQ/edit?pli=1&gid=197662251#gid=197662251'
const AUTHOR_OUTREACH_EMAIL_TEMPLATE = `Hi [Author/Publisher],

I'm [YOUR NAME].

I am running a book club on Kahana.io, [a startup / an early-stage startup], a digital library and book club platform for teams and communities. Our internal book clubs are starting up, and your book [Title] came up as something multiple people want to read and discuss together.

For context, on Kahana, authors can set a price for access to their book. Readers pay to unlock the book inside Kahana, where they can read, take notes, and participate in guided discussions. It is a combination of ebook access and structured book club space.

We'd love you to:

Host [Title] on Kahana as a paid book (at a price you choose), and

Use it as the core of one of our upcoming book clubs.

Initially this would be our team reading it, but you can also feature the book publicly and drive more readers your way if you're interested. Here's a quick demo of how this would look: [YouTube demo link]

Would you be open to exploring this?

Best,
[YOUR NAME]`
const PR_NEWS_SHEET =
  'https://docs.google.com/spreadsheets/d/1za1CWQzqrcSG9-WED4HLdoW9YX9LrWwk/edit?gid=1774411181#gid=1774411181'
const PRODUCT_HUNT_ACCOUNTS_SHEET =
  'https://docs.google.com/spreadsheets/d/1gSMDizFLvRliMZgYNyQND4lipZ3Dde6FPn2EWDRZolM/edit?pli=1&gid=0#gid=0'
const PRODUCT_HUNT_CHARTER =
  'https://docs.google.com/document/d/1fbnq13Uj8n3qaCCg1BOdiQD-awjl5c2sswxWaX6oyU8/edit'
const PRODUCT_HUNT_LAUNCH_GUIDE = 'https://www.producthunt.com/launch'
const PRODUCT_HUNT_OASIS_LAUNCH =
  'https://www.producthunt.com/products/kahana/launches/oasis-browser-for-mac'
const SALES_HERO_JOURNEY_URL =
  'https://storytellingedge.substack.com/p/a-6-step-framework-for-incredible'
const KAHANA_BRAND_GUIDE_URL =
  'https://drive.google.com/file/d/1t0m-qmNqf-BdnrA6ytxyYPkRh5EdaDEI/view?usp=sharing'
const PRINTIFY_PRODUCTS_URL = 'https://printify.com/app/products'
const CANVA_URL = 'https://www.canva.com/'
const SOCIAL_ACCOUNTS_CREDENTIALS_DOC =
  'https://docs.google.com/document/d/1Livnd-dsmFV33N_XZXP2kLf15JYd2TVxz1Duz-8RrWg/edit?tab=t.0'
const IMPROVE_SURVEY = 'https://kahana.io/survey/improve?source=support_panel'
const SUPPORT_PAGE = 'https://kahana.io/support'
const CONTACT_PAGE = 'https://kahana.io/contact'

function stepsFrom(items) {
  return items.map((item) => (typeof item === 'string' ? { text: item } : item))
}

function playbook({
  id,
  title,
  category,
  owner,
  who,
  when,
  description,
  keywords = [],
  notes,
  format = 'playbook',
  sections,
  doneWhen,
}) {
  return {
    id,
    title,
    category,
    owner,
    who,
    when,
    description,
    keywords,
    notes,
    format,
    sections: sections.map((section) => ({
      ...section,
      steps: stepsFrom(section.steps),
    })),
    doneWhen,
  }
}

function task({
  id,
  title,
  category,
  owner,
  who,
  when,
  description,
  keywords = [],
  notes,
  steps,
  doneWhen,
}) {
  return {
    id,
    title,
    category,
    owner,
    who,
    when,
    description,
    keywords,
    notes,
    sections: [{ id: 'process', title: 'Process', steps: stepsFrom(steps) }],
    doneWhen,
  }
}

const PLAYBOOKS = [
  playbook({
    id: 'marketing-operations',
    title: 'Marketing Operations',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Marketing Lead and anyone running a campaign or content drop',
    when: 'Each planning cycle, then weekly while a campaign is live, and at month-end review.',
    description:
      'Repeatable marketing process for acquisition, brand, content, creator relationships, and reporting.',
    keywords: ['marketing plan', 'campaign', 'seo', 'content calendar', 'creator partnership'],
    sections: [
      {
        id: 'purpose-scope',
        title: 'Purpose and scope',
        steps: [
          'Purpose: identify opportunities, execute campaigns, measure results, and decide what to continue, change, or stop.',
          'Scope includes strategy, market and competitor research, content and blogs, SEO, campaigns, creator partnerships, retargeting, analytics, and campaign reporting.',
        ],
      },
      {
        id: 'objective',
        title: 'Step 1 — Define the marketing objective',
        steps: [
          'At the start of each cycle write: primary business objective, target audience, user problem or opportunity, desired user behavior, acquisition goal, engagement goal, and conversion goal.',
        ],
      },
      {
        id: 'research',
        title: 'Step 2 — Conduct market research',
        steps: [
          'Cover competitors, similar platforms, industry and content trends, user behavior, creator trends, relevant communities, and emerging opportunities. File notes in the campaign brief.',
        ],
      },
      {
        id: 'content',
        title: 'Step 3 — Develop marketing content',
        steps: [
          'Produce blog, educational, product, social, comparison, creator-focused, or industry insight pieces as needed.',
          'Every piece follows Topic → Audience → Objective → Draft → Review → Publish → Promote → Measure.',
        ],
      },
      {
        id: 'campaign',
        title: 'Step 4 — Execute the campaign',
        steps: [
          'Define objective and audience, select channel, write messaging, prepare assets, set a timeline, assign owners, launch, monitor, and record results.',
        ],
      },
      {
        id: 'creators',
        title: 'Step 5 — Creator and influencer partnerships',
        steps: [
          'Identify the creator, check audience relevance and engagement, define the opportunity, outreach, agree deliverables, get required approvals, execute, track results, and document learning.',
        ],
      },
      {
        id: 'measure',
        title: 'Step 6 — Measure performance',
        steps: [
          'Track new and returning users, traffic, engagement, conversion, campaign performance, acquisition source, and content performance. Prefer Mixpanel product events over vanity impressions.',
        ],
      },
      {
        id: 'monthly',
        title: 'Step 7 — Monthly review',
        steps: [
          'Identify what worked and what did not, review acquisition trends and campaign ROI where available, list opportunities, and update next month’s plan.',
        ],
      },
    ],
    doneWhen: [
      'A marketing plan, campaign brief, and content calendar exist for the cycle.',
      'Results are recorded and the monthly review names continue / change / stop.',
    ],
  }),
  playbook({
    id: 'sales-operations',
    title: 'Sales Operations',
    category: 'Sales',
    owner: 'Sales Lead / Business Development',
    who: 'Sales Lead, BD, and anyone doing outreach or partnership conversations',
    when: 'Weekly pipeline review; every new lead from first touch through follow-up.',
    description:
      'Consistent process for prospects, Kahana pitch, conversion, and strategic relationships.',
    keywords: ['prospecting', 'outreach', 'pitch', 'partnership', 'discovery', 'follow-up'],
    sections: [
      {
        id: 'scope',
        title: 'Purpose and scope',
        steps: [
          'Purpose: identify prospects, communicate value, convert opportunities, and keep strategic relationships alive.',
          'Scope: lead generation and qualification, outreach, Kahana pitch, demos, follow-up, partnerships, creator acquisition, advisors, investors, and sales reporting.',
        ],
      },
      {
        id: 'generate',
        title: 'Lead generation and qualification',
        steps: [
          'Sources include creators, partners, organizations, influencers, advisors, strategic relationships, and potential investors.',
          'For each lead ask: Are they relevant to Kahana? Do they align with the mission? Can they contribute users, content, revenue, or expertise? Is there a realistic partnership? What is the potential value?',
        ],
      },
      {
        id: 'pitch',
        title: 'Kahana pitch',
        steps: [
          'The content landscape is fragmented. Users move between platforms for different types of content. Kahana brings those types together.',
          'Aura lets people express what they value. The job is better discovery and human connection — the long-term mission is larger than another content platform.',
        ],
      },
      {
        id: 'outreach',
        title: 'Outreach and follow-up',
        steps: [
          'Research the person or company, find a relevant connection, customize outreach, explain why Kahana is relevant, request a conversation, record the response, and schedule follow-up.',
          'After a call: document discussion points, interest level, questions, next action, owner, and follow-up date.',
        ],
      },
      {
        id: 'partners',
        title: 'Partnerships and advisors',
        steps: [
          'Partnerships: Identify → Research → Contact → Pitch → Discuss → Evaluate → Agree → Execute → Measure.',
          'Advisors and investors: understand expertise, identify where they can help, set a communication cadence, share relevant information, document advice, and track resulting actions.',
        ],
      },
      {
        id: 'review',
        title: 'Weekly sales review',
        steps: [
          'Review new prospects, conversations, follow-ups, partnerships, creator opportunities, strategic relationships, conversion, and outstanding actions. Monthly is acceptable if the pipeline is quiet.',
        ],
      },
    ],
    doneWhen: [
      'Every live lead has a next action, owner, and date.',
      'Weekly (or monthly) review is written down, not only discussed.',
    ],
  }),
  playbook({
    id: 'finance-operations',
    title: 'Finance Operations',
    category: 'Finance',
    owner: 'Financial Analyst',
    who: 'Finance owner and anyone submitting expenses or forecasts',
    when: 'Continuous transaction recording; monthly projection vs actual; as needed for investors.',
    description:
      'Monitor financial position, expenses, revenue, projections, and investment needs.',
    keywords: ['forecast', 'cash flow', 'wave', 'p&l', 'investor reporting', 'budget'],
    sections: [
      {
        id: 'planning',
        title: 'Financial planning',
        steps: [
          'Keep projections on Users → Active users → Conversion → Transactions → Revenue.',
          'Include operating, marketing, engineering, and other planned investments.',
        ],
      },
      {
        id: 'revenue-expense',
        title: 'Revenue and expenses',
        steps: [
          'Track transaction count and value, platform revenue, conversion, and trends.',
          'For each expense: business purpose, owner, budget, required approval, payment, record, reconcile.',
        ],
      },
      {
        id: 'cash',
        title: 'Cash flow and monthly projection review',
        steps: [
          'Review current cash, monthly expenses, expected revenue, upcoming obligations, hiring, marketing, and technology investment.',
          'Monthly: compare actuals to projections, name the variance and cause, update assumptions, revise the forecast, and communicate significant changes.',
        ],
      },
      {
        id: 'investors',
        title: 'Investor reporting',
        steps: [
          'Be ready to report revenue, expenses, users, growth, conversion, transactions, cash, and planned investment.',
        ],
      },
    ],
    doneWhen: [
      'Anyone can answer: where is the company financially today, where is it expected to be, and which assumptions drive the projection?',
    ],
  }),
  playbook({
    id: 'engineering-operations',
    title: 'Engineering Operations',
    category: 'Engineering',
    owner: 'Engineering Lead',
    who: 'Engineers and anyone deploying or holding production access',
    when: 'On hire, on every production deploy, on incidents, and on monthly security testing.',
    description:
      'Keep Kahana’s systems secure, available, recoverable, and maintainable without depending on one person.',
    keywords: ['deploy', 'incident', 'access', 'github', 'heroku', 'rollback', 'monitoring'],
    notes: [
      'Never push kahana-web to Heroku app kahana-public (marketing site). Product frontend is heroku-alpha / heroku-beta.',
    ],
    sections: [
      {
        id: 'onboard',
        title: 'Engineering onboarding and access',
        steps: [
          'Cover company and product, architecture, local environment, repos, tools, security, deploy, incidents, docs, and role-specific recurring work.',
          'Access: Request → Approve → Provision → Verify → Review. Offboard: identify access → disable → remove permissions → recover assets → confirm.',
        ],
      },
      {
        id: 'deploy',
        title: 'Deployment',
        steps: [
          'Before production: code reviewed, tests and QA done, dependencies known, deploy owner assigned, rollback confirmed.',
          'Then Deploy → Monitor → Validate → Document. Staging (heroku-beta / curio-beta) before product prod (heroku-alpha) unless the change is docs-only.',
        ],
      },
      {
        id: 'incident',
        title: 'Incident response and monitoring',
        steps: [
          'Detect, assess severity, assign owner, contain, restore, communicate internally, RCA, document, corrective action, verify.',
          'Monitor availability, performance, errors, infrastructure, security, database, and integrations.',
        ],
      },
      {
        id: 'backup-security',
        title: 'Backup, recovery, and monthly security testing',
        steps: [
          'Know backup schedule, owner, verification, recovery procedure, and recovery testing.',
          'Monthly: pick systems, test, document vulnerabilities, severity, owner, deadline, retest, close.',
        ],
      },
      {
        id: 'docs',
        title: 'Technical documentation',
        steps: [
          'Keep architecture, infrastructure, deployments, integrations, dependencies, security, recovery, and troubleshooting current in the data room or repo docs.',
        ],
      },
    ],
    doneWhen: [
      'A second person can deploy and roll back without the original author.',
      'The last incident or deploy has a written record.',
    ],
  }),
  playbook({
    id: 'people-operations',
    title: 'People Operations',
    category: 'HR & Talent',
    owner: 'HR manager / HRIS Analyst',
    who: 'Hiring managers and HR',
    when: 'Every hire, every offboard, and whenever a role’s recurring work changes.',
    description:
      'Employee lifecycle so everyone knows their role, processes, tools, and expectations.',
    keywords: ['onboarding', 'offboarding', 'hiring', 'process training', 'responsibility calendar'],
    sections: [
      {
        id: 'hire',
        title: 'Hiring',
        steps: [
          'Define responsibilities, required skills, associated processes, tools and access, recurring responsibilities, then create the onboarding plan.',
        ],
      },
      {
        id: 'onboard',
        title: 'Employee onboarding',
        steps: [
          'Day 1: company overview, mission, culture, team structure, tools, accounts, security, role overview. Use the data-room Onboarding path.',
          'Role onboarding must include responsibilities, required processes and docs, weekly / monthly / quarterly / annual work, and escalation contacts.',
        ],
      },
      {
        id: 'training',
        title: 'Process training and validation',
        steps: [
          'For every critical process: Read/Watch → Understand → Execute → Review → Validate. The person must know what, why, when, where, how, and who if blocked.',
          'Manager validation: employee reviews and completes processes, meets the owner, explains the process, shows where it lives, demonstrates execution, gaps are trained again if needed.',
        ],
      },
      {
        id: 'calendar-offboard',
        title: 'Responsibility calendar and offboarding',
        steps: [
          'Every employee has written weekly, monthly, quarterly, and annual recurring work.',
          'Offboard: Notification → Access review → Knowledge transfer → Asset recovery → Access removal → Final confirmation.',
        ],
      },
    ],
    doneWhen: [
      'The new hire can find and execute their critical processes without Slack archaeology.',
      'Offboarding closes every account and recovers assets.',
    ],
  }),
  playbook({
    id: 'customer-support-operations',
    title: 'Customer Support Operations',
    category: 'Customer Success',
    owner: 'Customer Support Associate / Lead',
    who: 'Anyone triaging kahana.io/support, /contact, or in-app tickets',
    when: 'Every inbound inquiry; monthly review of volume and themes.',
    description:
      'Receive, resolve, escalate, document, and learn from customer issues.',
    keywords: ['ticket', 'support', 'escalation', 'feature request', 'sla'],
    sections: [
      {
        id: 'intake',
        title: 'Inquiry process',
        steps: [
          'Receive → Record → Categorize → Priority → Investigate → Respond → Resolve or escalate → Document → Close.',
          'Categories: question, bug, account, payment, content, feature request, security, complaint.',
        ],
      },
      {
        id: 'priority',
        title: 'Priority',
        steps: [
          'Critical: availability, security, payments, or large numbers of users. High: core functionality for an individual. Medium: non-critical bugs. Low: general questions and suggestions.',
        ],
      },
      {
        id: 'escalate',
        title: 'Engineering escalation and feature requests',
        steps: [
          'Support → Reproduce → Document → Linear ticket → Priority → Track → Communicate → Resolve → Close.',
          'Include user issue, repro steps, expected vs actual, screenshots, severity, and impact.',
          'Feature requests: user request, problem, frequency, business value, supporting feedback — then Product prioritizes.',
        ],
      },
      {
        id: 'kb-review',
        title: 'Knowledge base and monthly review',
        steps: [
          'Turn recurring questions into FAQ, help article, troubleshooting, or an internal process.',
          'Monthly: ticket count, common issues, resolution time, escalations, recurring bugs, feature requests, sentiment — share with Product and Engineering.',
        ],
      },
    ],
    doneWhen: [
      'The ticket is closed with a documented resolution or an owned Linear issue.',
      'Monthly themes are visible to Product.',
    ],
  }),
  playbook({
    id: 'legal-and-compliance',
    title: 'Legal and Compliance',
    category: 'Legal',
    owner: 'Legal (owner TBD — assign before the next contract)',
    who: 'Anyone signing, launching, or changing terms, IP, or creator agreements',
    when: 'Every new contract, policy change, major launch, and quarterly review.',
    description:
      'Review contracts, content relationships, user policies, and initiatives so legal risk stays managed.',
    keywords: ['contract', 'tos', 'privacy', 'ip', 'copyright', 'trademark'],
    notes: ['SOPS.txt left Legal owner as unknown. Name a reviewer in the next quarterly legal review.'],
    sections: [
      {
        id: 'contracts',
        title: 'Contracts and creator agreements',
        steps: [
          'New contract: Request → Business review → Legal review → Revision → Approval → Signature → Storage → Renewal tracking.',
          'Before onboarding a creator or partner: define relationship, responsibilities, payment/revenue split, IP rights, confidentiality, legal review, execute, store.',
        ],
      },
      {
        id: 'policies-ip',
        title: 'Terms, IP, and complaints',
        steps: [
          'Keep Terms of Service and Privacy Policy current. Review when product, business model, markets, data practices, or law changes.',
          'Document ownership, licenses, usage, creator vs platform rights, and restrictions.',
          'Copyright/content complaints: Receive → Record → Review → Action → Escalate if needed → Resolve → Document.',
        ],
      },
      {
        id: 'initiatives',
        title: 'Major initiatives and quarterly review',
        steps: [
          'Legal review before significant product launches, marketing campaigns, partnerships, new monetization, creator programs, or data initiatives.',
          'Repository fields: contract, parties, effective/expiration/renewal dates, owner, status, notes.',
          'Quarterly: active contracts, upcoming renewals, policies, open issues, IP, compliance risk, new initiatives.',
        ],
      },
    ],
    doneWhen: [
      'Every live contract is in the repository with a renewal date.',
      'ToS/Privacy match current product behavior.',
    ],
  }),
]

export const PRODUCT_HUNT_LAUNCH_SOP = playbook({
    id: 'product-hunt-launch',
    title: 'Product Hunt Launch',
    category: 'Marketing',
    owner: 'Marketing Lead',
    format: 'checklist',
    who: 'The entire team, plus every community member who agrees to support; Marketing coordinates; CS and Product own post-launch',
    when: 'Work the pre-launch checklist to 40 confirmed testimonials and three town halls, then the day-of list starting 3 AM EST, then post-launch Mixpanel and support.',
    description:
      'Three-phase checklist: pre-launch (community, honest testimonials, hype, town halls), day of (3 AM EST posts and 300-upvote push), and post-launch (Mixpanel, support, retention, revenue).',
    keywords: [
      'product hunt',
      'upvote',
      'launch',
      'oasis',
      'aura library',
      'hype campaign',
      '3am',
      'testimonial',
      'town hall',
      'checklist',
      'pre-launch',
      'retention',
    ],
    notes: [
      'Do not lock a launch date until at least 40 confirmed testimonials and people are on the tally. Missing that count means slip the date.',
      'A #1 Product Hunt launch needs at least 300 upvotes on average. Plan outreach to that bar, not to a handful of friends.',
      'The algorithm rewards genuine early comments when the launch opens (3 AM EST) — not a late-day dump of upvotes. Launch day is posting work already written, not drafting.',
      'Before launch, run three consecutive 30-minute town halls (Tuesday, Wednesday, Thursday). Every teammate must attend at least one.',
    ],
    sections: [
      {
        id: 'pre-launch',
        title: 'Pre-launch',
        intro:
          'Nothing on this list is optional. Do not lock a date until the 40-testimonial tally is confirmed and the Tuesday–Thursday town halls are on the calendar with attendance tracking.',
        steps: [
          {
            id: 'pre-charter',
            text: 'Charter conditions are met (NPS target and critical technical blockers). Date is not locked yet.',
            href: PRODUCT_HUNT_CHARTER,
            hrefLabel: 'Product Hunt Launch Charter',
          },
          {
            id: 'pre-ph-guide',
            text: 'Read Product Hunt’s launch guide for current rules, assets, and hunter/maker mechanics.',
            href: PRODUCT_HUNT_LAUNCH_GUIDE,
            hrefLabel: 'Product Hunt launch guide',
          },
          {
            id: 'pre-oasis',
            text: 'Study the previous Oasis Browser for Mac launch. Reuse what worked; do not start from a blank page.',
            href: PRODUCT_HUNT_OASIS_LAUNCH,
            hrefLabel: 'Oasis Browser for Mac — Product Hunt launch',
          },
          {
            id: 'pre-sheet-profiles',
            text: 'Community sheet is current: every teammate and recruited supporter has a live Product Hunt profile. Track used-the-product / draft in / confirmed / 3 AM EST committed on the same sheet.',
            href: PRODUCT_HUNT_ACCOUNTS_SHEET,
            hrefLabel: 'Product Hunt community / accounts sheet',
          },
          {
            id: 'pre-recruit-300',
            text: 'Recruit friends and colleagues toward at least 300 upvotes (the #1 bar). The ship gate is 40 confirmed testimonials and people, not the calendar.',
            href: '/producthunt-tasks',
            hrefLabel: 'Product Hunt tasks (data room)',
          },
          {
            id: 'pre-team-use',
            text: 'Entire team used Kahana (AKA The Aura Library) for real — hubs, club, Aura, a new-user path. No invented reviews.',
          },
          {
            id: 'pre-team-testimonials',
            text: 'Every teammate wrote a true four-part testimonial days in advance: what they like, what they do not like, what to improve, and what they are most hopeful to do next. Hype-only blurbs do not count.',
          },
          {
            id: 'pre-community-testimonials',
            text: 'Same four-part testimonials collected from every community member who agreed to support, as completely as we can. Chase until confirmed or they drop off.',
          },
          {
            id: 'pre-tally-40',
            text: 'Tally is at least 40 confirmed people. Confirmed = used the product + four-part draft + Product Hunt login + committed to post at 3 AM EST. Under 40: slip the date.',
            href: PRODUCT_HUNT_ACCOUNTS_SHEET,
            hrefLabel: 'Product Hunt community / accounts sheet',
          },
          {
            id: 'pre-brief-community',
            text: 'Community is briefed before launch morning: use the product, write the testimonial, upvote, and paste that testimonial when it opens — not “Congrats.”',
          },
          {
            id: 'pre-reminder',
            text: 'Each person has a reminder: 3 AM EST, Kahana (AKA The Aura Library), paste the testimonial already written.',
          },
          {
            id: 'pre-chase-profiles',
            text: 'Missing Product Hunt profile links chased before T-minus 48 hours.',
          },
          {
            id: 'pre-hype-framework',
            text: 'Social hype campaign written to the Sales Hero’s Journey, tailored to Kahana: Aura Library — not a feature dump. Founding-story beat under 90 seconds if spoken or video.',
            href: SALES_HERO_JOURNEY_URL,
            hrefLabel: 'Sales Hero’s Journey (Storytelling Edge)',
            note: '1) Prologue / trust. 2) Force of change (AI slop, feeds for dopamine). 3) Stakes (winners vs learners). 4) Magical guide: Kahana (AKA The Aura Library). 5) Three-step plan (club, hub, Aura). 6) Promised land + Oasis proof + CTA when live.',
          },
          {
            id: 'pre-hype-kahana-story',
            text: 'Hype copy is aligned to the Kahana Story. Scheduled on LinkedIn, Instagram, and other live channels so the story is already circulating before 3 AM EST.',
            href: '/kahana-narrative',
            hrefLabel: 'Kahana Story',
          },
          {
            id: 'pre-townhall-booked',
            text: 'Three consecutive 30-minute town halls booked: Tuesday, Wednesday, Thursday (week before launch, or the three days immediately before). Same agenda each day.',
          },
          {
            id: 'pre-townhall-rsvp',
            text: 'Every teammate is signed up for at least one town hall. Chase anyone without a slot before Tuesday. Missing all three is not allowed.',
          },
          {
            id: 'pre-townhall-ran',
            text: 'All three town halls ran. Drill: 3 AM EST login → paste four-part testimonial on the launch discussion → upvote → makers reply → share socials and text chats all day. Rehearse the first-15-minute ping list.',
          },
          {
            id: 'pre-townhall-roles',
            text: 'Each attendee knows their launch-day job (testimonial, upvote, which chats/socials, 3 AM EST shift). Unfinished testimonials finished on the call.',
          },
          {
            id: 'pre-townhall-hype',
            text: 'Every town hall ended hyped — why this is worth 3 AM EST, what a #1 day means, “see you at 3 AM.” Not logistics-only.',
          },
          {
            id: 'pre-lock-date',
            text: 'Date locked only after 40 confirmed testimonials and people, a named 3 AM EST shift list, and the three town halls complete with attendance tracked.',
          },
        ],
      },
      {
        id: 'day-of-launch',
        title: 'Day of launch',
        intro:
          'Launch day is execution. Testimonials are already written. The 40 confirmed people are the first wave at 3 AM EST. Upvotes still have to reach 300.',
        steps: [
          {
            id: 'day-3am-login',
            text: 'At 3 AM EST, when Product Hunt opens, everyone on the confirmed tally logs in.',
          },
          {
            id: 'day-post-testimonials',
            text: 'Each person posts the testimonial they already wrote on the launch-page discussion (like / don’t like / improve / hope next). Do not draft in the moment.',
          },
          {
            id: 'day-ping-15',
            text: 'Run the 3 AM EST shift list. Ping anyone who has not posted within 15 minutes.',
          },
          {
            id: 'day-makers-reply',
            text: 'Makers reply to every comment within minutes. First hour of the thread is not empty.',
          },
          {
            id: 'day-share-all-day',
            text: 'Throughout the day: share the live launch on all socials, Slack (#linkedin-focus-group and team channels), and text group chats. Not a one-and-done morning blast. Official Kahana-account posts still go through SOP 8 (access + Linear review); personal shares do not.',
            href: '/sops/official-social-media',
            hrefLabel: 'SOP 8: Official Social Media',
          },
          {
            id: 'day-upvotes-300',
            text: 'Upvote from prepared accounts. Watch ranking. If comments or votes stall, ping the next wave — a #1 launch needs at least 300 upvotes on average.',
            href: PRODUCT_HUNT_ACCOUNTS_SHEET,
            hrefLabel: 'Product Hunt community / accounts sheet',
          },
        ],
      },
      {
        id: 'post-launch',
        title: 'Post-launch',
        intro:
          'A spike that does not come back, get support, or pay is not a win. Track the Product Hunt cohort until the retro is written.',
        steps: [
          {
            id: 'post-mixpanel',
            text: 'Monitor Mixpanel for the Product Hunt cohort: sign-ups with UTM/source, activation, and drop-off. Do not wait for a weekly report.',
            href: MIXPANEL_URL,
            hrefLabel: 'Mixpanel Kahana project',
          },
          {
            id: 'post-support',
            text: 'Customer support is staffed for new users (kahana.io/support and /contact). Reply fast.',
            href: '/sops/handling-user-tickets',
            hrefLabel: 'SOP: Handling Suggestions, Contacts, and Tickets',
          },
          {
            id: 'post-retention',
            text: 'Retention of newly signed-up users tracked as its own cohort (D1 / D7, return to a hub or club).',
          },
          {
            id: 'post-revenue',
            text: 'Paid-plan upgrades and revenue from that cohort recorded next to sign-up count.',
          },
          {
            id: 'post-retro',
            text: 'Within 24–48 hours, short retro: ranking, comment quality, Mixpanel sign-ups, support load, retention, paid conversion. File what to reuse next time.',
          },
        ],
      },
    ],
    doneWhen: [
      'At least 40 confirmed testimonials and people were on the tally before the date was locked — each from real product use, covering like / dislike / improve / hope next.',
      'Every teammate (and as many supporting community members as we could get) had a draft days in advance and posted it on the launch discussion at 3 AM EST.',
      'Three consecutive 30-minute town halls ran Tuesday, Wednesday, and Thursday; every teammate attended at least one; each meeting drilled launch-day steps and ended hyped.',
      'Hype posts followed the Aura Library story arc. Upvote plan targeted at least 300 (the #1 bar).',
      'Launch-day comments were answered and the link was shared on socials and in group chats.',
      'A retro names Product Hunt sign-ups, new-user retention, paid upgrades, and revenue — not just upvotes.',
    ],
  })

export const BLOG_PUBLISHING_SOP = playbook({
  id: 'blog-publishing',
  title: 'Blogs',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Anyone writing for kahana.io/blog (Marketing, plus Product or Community when they have a story)',
  when: 'Per content calendar, after a ship or success story, or when a landscape comparison would help a creator or viewer choose a stack.',
  description:
    'Write blogs that compare and educate: Kahana with the platforms creators, content, and viewers already use, plus success stories, use-case guides, and practical help. Research on Company Landscape and Market Map. Ship via marketing-site code, Slack to Adam, or the KahanaHQ hub.',
  keywords: [
    'blog',
    'content',
    'seo',
    'comparison',
    'company landscape',
    'market map',
    'success story',
    'use case',
    'youtube embed',
    'em dash',
    'kahana hq',
    'sitemap',
    'search console',
  ],
  notes: [
    'Ideal blogs compare and educate. Show how Kahana works with YouTube, Discord, Substack, Patreon, Teachable, Goodreads, and the rest of the landscape, not as a silent replacement.',
    'SEO bar: no em dashes, proofread before anyone else sees it, and include source links. A YouTube video embedded in the post is a plus.',
    'The live blog URL should appear in the sitemap. Update the sitemap and submit it in Google Search Console if you want to expedite SEO.',
    'Kahana (AKA "The Aura Library"). Aura is the discovery signal, not the product name.',
  ],
  sections: [
    {
      id: 'purpose',
      title: 'What a Kahana blog is for',
      intro:
        'A blog earns a publish when a creator, club host, or viewer can do something clearer afterward: pick a stack, try a workflow, or trust a story.',
      steps: [
        'Write Topic, Audience, and Objective before the draft. Audience is usually creators, club hosts, or people who already watch/read/listen somewhere else.',
        'Check the quality bar before you draft. Level A (accurate, no PII, working links) is the floor. Level B needs a point of view plus one proof. Level C is flagship narrative.',
        {
          text: 'Open Content Guidelines if you are unsure whether this is public, draft, or internal-only.',
          href: '/sops/content-guidelines-quality',
          hrefLabel: 'Content Guidelines — Quality Levels',
        },
      ],
    },
    {
      id: 'research',
      title: 'Research the landscape before you write',
      intro:
        'Company Landscape and Market Map are the source of truth for who sits in the same space as Kahana. Use them so comparisons are specific, sourced, and fair.',
      steps: [
        {
          text: 'Start on Market Map. Pick the category your reader already lives in: Ebook, Short-form or Long-form video, Courses, Newsletters, Audio, Community & Messaging, Memberships, Storefronts, or Marketplaces.',
          href: '/fragment-capture',
          hrefLabel: 'Market Map',
        },
        {
          text: 'Open Company Landscape and filter that same Market Map category. Read the cards for platforms creators, content, and viewers actually use. Note what each does well, where it is weak, scale signals, and the listed sources.',
          href: '/company-landscape',
          hrefLabel: 'Company Landscape',
        },
        {
          text: 'Read how Kahana sits in the creator stack (content, community, memberships, storefronts, marketplaces) so the blog does not invent a new category story.',
          href: '/glossary',
          hrefLabel: 'Glossary — Kahana vs the creator stack',
        },
        'For each platform you name, write two sentences: what people use it for today, and how Kahana is used with it (library, Clubs, Aura) rather than instead of it. Pull together-positioning from the landscape card or synergy notes (Discord as the living room, Kahana as the shelf; YouTube keeps the video and ads, Kahana is the club layer).',
        'Cite the landscape sources and any public pages you used. Do not invent user counts, revenue, or “we replace X.”',
      ],
    },
    {
      id: 'types',
      title: 'Pick a blog type',
      intro: 'Most posts should be one of these. Mix only when the reader still gets a single job.',
      steps: [
        'Compare and educate: Kahana and another platform (or a small set) in the same Market Map space. Teach the jobs each one is good at, then the tandem workflow. Example: “How a YouTube educator runs a Kahana video club without leaving YouTube.”',
        'Success story: a real club, hub, creator, or team. What they were doing, what they set up on Kahana, what changed. Named people and brands need permission.',
        'Use-case guide: a click-by-click or week-by-week workflow (start a book club, add a YouTube curriculum, pin a hub in Discord, run a course discussion alongside Teachable).',
        'Tips, recommendations, and help: practical answers (wishlist vs focus title, Aura vs a like, invite links, how to talk about Kahana next to Patreon or Substack). Point at in-app help when it already exists.',
        {
          text: 'File raw inputs (ships, testimonials, CS stories) so blogs are not invented from memory. Customer-named stories need permission before they go public.',
          href: '/sops/marketing-inputs',
          hrefLabel: 'Inputs for Marketing',
        },
      ],
    },
    {
      id: 'together',
      title: 'Comparison blogs: used together, not against',
      intro:
        'Creators and viewers already have a stack. The useful blog shows how Kahana plugs into it.',
      steps: [
        'Name the reader’s current tools from Company Landscape. Typical pairs: YouTube + Kahana video club; Discord or Circle + Kahana library and Clubs; Substack, Beehiiv, or Medium + a reading club; Patreon or Memberful + Kahana as the membership destination; Teachable, Thinkific, Kajabi, or Udemy + Kahana discussion; Goodreads, Fable, or Literal + Kahana book clubs; Spotify or Audible + a listening club.',
        'Be explicit about what Kahana does not replace: YouTube hosting and ads, Discord chat, Teachable checkout, Kindle storefronts. Kahana is the club + library layer and Aura is the discovery signal.',
        {
          text: 'Keep the Kahana Story in view so the comparison stays on mission (hubs as library, clubs as the room, Aura as the signal).',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        'End with a tandem flow the reader can copy this week, plus a CTA to kahana.io (Library, a relevant hub, or sign-up) with UTM if this is a campaign.',
      ],
    },
    {
      id: 'seo-bar',
      title: 'Drafting and SEO bar',
      steps: [
        'Proofread the full draft yourself before Slack, hub upload, or a PR. Do not send a first pass that still reads like a transcript.',
        'Do not use em dashes (—) in the title, meta, or body. Readers treat them as a tell that a robot wrote the post. Use a period, a comma, a colon, or a hyphen instead. Same rule as LinkedIn.',
        'Include source links: Company Landscape research sources, the platform’s own docs or pricing page, and Kahana product pages you mention. Make claims checkable.',
        'Title and meta description match the live page. No keyword stuffing. First screen states who it is for and the job.',
        {
          text: 'The live blog URL should appear in the sitemap. After publish, update the sitemap and submit it in Google Search Console if you want to expedite SEO.',
          href: '/sops/seo-sitemap',
          hrefLabel: 'SEO / Sitemap',
        },
        'Legal review if you mention pricing, user counts, fundraising, medical/financial claims, or someone else’s IP or likeness.',
      ],
    },
    {
      id: 'video',
      title: 'YouTube and embeds',
      steps: [
        {
          text: 'When the post teaches a workflow, record a YouTube video (job-to-be-done, product on screen, chapters, UTM in the description) and embed it near the top of the blog.',
          href: '/sops/youtube-publishing',
          hrefLabel: 'YouTube SOP',
        },
        {
          text: 'Publish on the Kahana HQ YouTube channel, then paste the embed so watch time stays on YouTube.',
          href: 'https://www.youtube.com/@kahanaHQ',
          hrefLabel: 'YouTube @kahanaHQ',
        },
        'If a video is not ready, ship the written guide with screenshots rather than delaying the post forever. File a follow-up to add the embed.',
      ],
    },
    {
      id: 'ship',
      title: 'How to ship the draft',
      intro: 'Pick one path. Do not leave a finished draft only on your laptop.',
      steps: [
        {
          text: 'Path A: contribute directly. Request tools access and say you will contribute to website/code (GitHub email). Edit the marketing site repo, not kahana-web, and never deploy to kahana-public from the product app.',
          href: TOOLS_ACCESS_TALLY_URL,
          hrefLabel: 'Get access to tools and data',
        },
        {
          text: 'Follow the Marketing Website SOP for the homepage/blog repo, local preview, and deploy.',
          href: '/sops/marketing-website',
          hrefLabel: 'Marketing Website',
        },
        'Path B: send the draft to Adam Kershner on Slack (title, audience, live outline or Google Doc, sources, and any video).',
        'Path C: upload the draft into the KahanaHQ hub, section Marketing > Blogs (blog drafts). Keep filename or title clear: date, topic, status (draft / review / ready).',
        'Internal review before publish. The reviewer checks landscape accuracy, together-not-instead framing, em dashes, sources, and the CTA.',
      ],
    },
    {
      id: 'publish-promote',
      title: 'Publish, promote, measure',
      steps: [
        {
          text: 'Publish on kahana.io/blog with title, meta description, internal links (Library, About, relevant hub), and the YouTube embed when you have one.',
          href: `${KAHANA_SITE_URL}/blog`,
          hrefLabel: 'kahana.io/blog',
        },
        {
          text: 'Confirm the new post is in the sitemap. Update the sitemap if it is missing, then submit the sitemap in Google Search Console to expedite indexing.',
          href: '/sops/seo-sitemap',
          hrefLabel: 'SEO / Sitemap',
        },
        {
          text: 'Promote on LinkedIn, Instagram, newsletter, and Slack for teammate engagement. Category 2 LinkedIn posters can reshare from personal profiles. Official Kahana-account posts go through SOP 8 first.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          text: 'Measure traffic and sign-ups (Mixpanel where the CTA hits the product). Note what to reuse in the monthly marketing report.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
      ],
    },
  ],
  doneWhen: [
    'The post has a named audience, a type (comparison, success story, use-case, or tips), and landscape research behind any platform names.',
    'A reader can see how Kahana is used with at least one real platform, not only instead of one.',
    'The draft was proofread, has no em dashes, and includes source links. A YouTube embed is live or explicitly deferred.',
    'The draft left the laptop: marketing-site PR, Slack to Adam, or KahanaHQ hub Marketing > Blogs.',
    'The live URL is in the sitemap. Sitemap was updated and submitted in Google Search Console when you wanted to expedite SEO.',
    'Live URL, promotion, and a measurement note exist in the monthly marketing report.',
  ],
})

export const BRAND_GUIDELINES_SOP = playbook({
  id: 'brand-guidelines',
  title: 'Brand Guidelines',
  category: 'Marketing',
  owner: 'Marketing Lead',
  format: 'checklist',
  who: 'Anyone creating marketing campaigns, social posts, blogs, videos, merch, ads, or landing pages',
  when: 'Before every public piece of content. Recheck if copy, visuals, or the product story changed after the first draft.',
  description:
    'Check Kahana brand before you publish: original guide (values, manifesto, personality, color, type, logo) plus current Aura Library naming and story. A revamped guide for the Aura Library focus is in progress.',
  keywords: [
    'brand',
    'guidelines',
    'logo',
    'voice',
    'color',
    'typography',
    'manifesto',
    'personality',
    'aura library',
    'campaign',
    'social',
    'mazzard',
    'nunito',
  ],
  notes: [
    'Open the original brand guide for values, manifesto, how we feel about the people we serve, personality, color, type, and logo. Check this SOP against it on every campaign and social post.',
    'A revamped brand guide is in progress, geared to Kahana’s current focus as the Aura Library (hubs, Clubs, Aura as the discovery signal). Until that ships, do not treat old About copy (split-screen research workspace, kahana.co) as current campaign language.',
    'Kahana (AKA "The Aura Library"). Aura is the discovery signal, not the product name.',
  ],
  sections: [
    {
      id: 'when',
      title: 'When to run this check',
      intro: 'Brand is not a quarterly document pass. It is a gate before content goes public.',
      steps: [
        {
          id: 'bg-when-campaign',
          text: 'Run this checklist on marketing campaigns, ads, landing pages, newsletters, and PR visuals before spend or publish.',
        },
        {
          id: 'bg-when-social',
          text: 'Run it on LinkedIn, Instagram, YouTube thumbnails and descriptions, TikTok, and X. Same bar as a campaign, even if the post is short. Official-account posts also need SOP 8 (access + Linear marketing-manager review) before schedule or publish.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'bg-when-blog',
          text: 'Run it on kahana.io/blog drafts (title, body, images, embed cards) alongside SOP 5 Blogs.',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
        {
          id: 'bg-when-merch',
          text: 'Run it on merch and mood boards before a vendor quote.',
          href: '/sops/merch',
          hrefLabel: 'SOP 7: Merch',
        },
      ],
    },
    {
      id: 'guides',
      title: 'Which guide to open',
      steps: [
        {
          id: 'bg-open-original',
          text: 'Open the original Kahana brand guide (17 pages): About, core values, manifesto, brand personality, logo, clearspace, logo usage, color, typography, iconography, patterns and shapes, imagery, digital, print, merchandise.',
          href: KAHANA_BRAND_GUIDE_URL,
          hrefLabel: 'Original brand guide (PDF)',
        },
        {
          id: 'bg-revamp',
          text: 'Know that a revamped guide is being written for the Aura Library era. Use it when it exists. Until then, overlay current product truth from the Kahana Story on top of the original visual and voice system.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        {
          id: 'bg-quality',
          text: 'If the piece fails Content Guidelines Level A (accurate product, no PII, working links, Kahana spelled correctly), it does not ship even if it looks on-brand.',
          href: '/sops/content-guidelines-quality',
          hrefLabel: 'Content Guidelines — Quality Levels',
        },
      ],
    },
    {
      id: 'people',
      title: 'How we feel about the people we serve',
      intro:
        'From the original manifesto: we listen with care to creators’ problems and pain points, and we build in hope of helping them. We do not fixate on why people create. We revere that they create to answer the why.',
      steps: [
        {
          id: 'bg-manifesto',
          text: 'Keep the manifesto in earshot: “If I was imprisoned alone between four blank walls with nothing but time, I would sing.” Creation gives meaning. The goal is a seamless, immersive creative experience, not a lecture.',
          href: KAHANA_BRAND_GUIDE_URL,
          hrefLabel: 'Original brand guide (PDF)',
        },
        {
          id: 'bg-who-creators',
          text: 'Never Forget Who Creators Are: minds never slow down, challenge the status quo, create in cycles, need time and space, focus intensely, feel deeply, battle resistance, struggle to believe in themselves, procrastinate, connect the dots, never grow old.',
        },
        {
          id: 'bg-what-creation',
          text: 'Never Forget What Creation Is: ceaseless absorption of experience that connects disparate dots. Active, as long as willpower exists. Copy should respect that process, not flatten it into “content.”',
        },
        {
          id: 'bg-tone-to-audience',
          text: 'Speak as a library and club for learners and creators, not as a growth hacker dunking on them. Comparison blogs (SOP 5) show how Kahana is used with YouTube, Discord, Substack, and the rest, not as a silent replacement.',
        },
      ],
    },
    {
      id: 'values-voice',
      title: 'Values, personality, and voice',
      steps: [
        {
          id: 'bg-values',
          text: 'The four principles still hold: eagerness to learn, accountability, problem-solving skills, strong work ethic. Public copy should not mock learning, dodge ownership, or sound lazy.',
          href: '/onboarding/company-rules',
          hrefLabel: 'Onboarding — values',
        },
        {
          id: 'bg-personality',
          text: 'Check the six personality notes from the original guide: Exhilarating Exploration, Killer Cuteness, Comic Spontaneity, Nighttime Intelligence, Aesthetic Appreciation, Power & Activism. A piece can lean on two or three. It should not feel like generic SaaS beige or rage-bait.',
        },
        {
          id: 'bg-no-emdash',
          text: 'No em dashes in public marketing copy (same rule as LinkedIn and blogs). Proofread before anyone else sees it.',
        },
        {
          id: 'bg-naming',
          text: 'First mention: Kahana (AKA “The Aura Library”). After that, Kahana or the Aura Library. Do not call the product Aura. Do not invent a third name. Do not use kahana.co; the live site is kahana.io.',
        },
      ],
    },
    {
      id: 'visual',
      title: 'Visual system (original guide)',
      intro: 'Until the Aura Library guide publishes new tokens, use these original specs. Product UI has its own tokens; do not casually mix product chrome into campaign art.',
      steps: [
        {
          id: 'bg-logo-files',
          text: 'Use only the given logo files: stacked, wide, or icon. Do not skew, squash, outline, drop-shadow, swap fonts, move the icon, or place the logo on a background that hides it. Keep minimum clearspace.',
          href: KAHANA_BRAND_GUIDE_URL,
          hrefLabel: 'Original brand guide (PDF) — logo pages',
        },
        {
          id: 'bg-color',
          text: 'Stay in the original palette. Primary: #3B4041, #3B675E, #000000. Secondary: #6EA487, #879C98, #FFFFFF, #E9F4E9, #E6CA61, #FEE3EC. Do not introduce a random accent because a template had it.',
        },
        {
          id: 'bg-type',
          text: 'Typography: Mazzard Soft H (primary), Nunito (secondary). Do not substitute a lookalike without Marketing Lead approval.',
        },
        {
          id: 'bg-shapes',
          text: 'Patterns and shapes: soft lines, curves, circles, rounded corners. Smooth, fun, approachable, ergonomic. Avoid harsh corporate grids and clip-art.',
        },
        {
          id: 'bg-imagery',
          text: 'Imagery should match the guide’s digital/print/merch pages: people and libraries in focus, not stock-handshake or engagement-farm faces.',
        },
      ],
    },
    {
      id: 'aura-overlay',
      title: 'Aura Library overlay (until the revamp ships)',
      intro:
        'The original About page described a split-screen research workspace and kahana.co. That is not the campaign story now.',
      steps: [
        {
          id: 'bg-current-job',
          text: 'Current product: Kahana is the club + library layer. Hubs hold ebooks, video, audio, newsletters, courses. Clubs are the room. Aura (up to 5/day) is the discovery signal for what people genuinely endorse.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        {
          id: 'bg-no-obsolete',
          text: 'Do not ship obsolete claims as if they are current: “start research here instead of Google,” “open source verification” as the headline, or kahana.co in CTAs. If you quote the original About for history, label it as heritage, not as today’s product.',
        },
        {
          id: 'bg-together',
          text: 'When you name other platforms, use Company Landscape and Market Map the same way SOP 5 does: together, not against.',
          href: '/company-landscape',
          hrefLabel: 'Company Landscape',
        },
      ],
    },
  ],
  doneWhen: [
    'The original brand guide was opened for this piece (values, manifesto, personality, logo, color, type).',
    'Voice treats creators as the manifesto describes, and naming is Kahana / Aura Library (Aura is the signal).',
    'Logo, color, type, and shapes match the original specs (or an approved exception is written down).',
    'Copy matches the current Aura Library story, not the old split-screen / kahana.co About.',
    'The piece is a campaign, social post, blog, video, merch, or landing page that passed this check before publish.',
  ],
})

export const MERCH_SOP = playbook({
  id: 'merch',
  title: 'Merch',
  category: 'Marketing',
  owner: 'Marketing Lead',
  format: 'checklist',
  who: 'Anyone designing merch for the team, customers, marketing campaigns, or community building',
  when: 'On an ongoing mood board, then before each drop, restock, giveaway, or campaign kit.',
  description:
    'Design Kahana merch in Canva, produce through Printify (or another POD/vendor), and keep a living mood board of ideas. Brand-check every design. Use merch for team, customers, campaigns, and clubs.',
  keywords: [
    'merch',
    'swag',
    'printify',
    'canva',
    'mood board',
    'print on demand',
    't-shirt',
    'campaign',
    'community',
  ],
  notes: [
    'Printify is the default ecommerce / print-on-demand catalog (tees, bags, bottles, and the rest of their product list). Canva is the default design tool. Other vendors are fine if brand and legal still pass.',
    'Keep a merch mood board of ideas and concepts on an ongoing basis, not only when a drop is already approved.',
    'Every design runs SOP 6 Brand Guidelines before a sample is ordered. Kahana (AKA "The Aura Library"); Aura is the signal, not the product name.',
  ],
  sections: [
    {
      id: 'who-for',
      title: 'Who the merch is for',
      intro: 'Name the audience before you pick a SKU. The same logo on a tote is a different job for a keeper vs a campaign shoot.',
      steps: [
        {
          id: 'merch-team',
          text: 'Team: onboarding kits, offsites, all-hands, and everyday wear so Kahana shows up in the room.',
        },
        {
          id: 'merch-customers',
          text: 'Customers: thank-you packs, paid drops, or membership gifts. Confirm we have permission to ship to them and that sizing/address collection is planned.',
        },
        {
          id: 'merch-campaigns',
          text: 'Marketing campaigns: Product Hunt, launches, events, photo/video props. Tie the piece to a named campaign and a CTA (kahana.io, a club, a hub).',
        },
        {
          id: 'merch-community',
          text: 'Community building: club hosts, keepers, hall merch, and event swag that makes a club feel like a place. Coordinate with SOP 2 so we do not surprise a host with branding they did not ask for.',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
        },
      ],
    },
    {
      id: 'mood-board',
      title: 'Keep the merch mood board going',
      intro: 'Ideas land all year. Capture them on a living board so drops are pulled from a pile, not invented the week of.',
      steps: [
        {
          id: 'merch-board-live',
          text: 'Maintain an ongoing merch mood board (Canva, FigJam, or Figma) for ideas and concepts: phrases, colorways, mockups, references, and “not this.” Tag each idea with audience (team / customer / campaign / community).',
          href: '/sops/mood-board-collaboration',
          hrefLabel: 'Mood Board — Collaboration',
        },
        {
          id: 'merch-board-cadence',
          text: 'Add to the board whenever someone spots a concept (Slack screenshot is fine). Monthly, Marketing Lead reviews the board and marks explore / later / no.',
        },
        {
          id: 'merch-board-lock',
          text: 'Before production, lock a subset of the board into the drop brief: audience, emotion, must-include marks, off-limits, quantity, budget, and in-hand date.',
        },
      ],
    },
    {
      id: 'design',
      title: 'Design in Canva, check brand',
      steps: [
        {
          id: 'merch-canva',
          text: 'Design (or refine) the artwork in Canva. Export print-ready files at the vendor’s required DPI and color mode. Keep a source file on the board.',
          href: CANVA_URL,
          hrefLabel: 'Canva',
        },
        {
          id: 'merch-brand',
          text: 'Run SOP 6 Brand Guidelines on the mock: logo lockup, clearspace, palette, type, naming (Kahana / Aura Library), no em dashes on printed copy, no obsolete kahana.co story.',
          href: '/sops/brand-guidelines',
          hrefLabel: 'SOP 6: Brand Guidelines',
        },
        {
          id: 'merch-legal',
          text: 'Legal check: Kahana wordmarks only as approved. No third-party IP (other platforms’ logos, book covers, creator faces) without written rights. No user photos without permission.',
        },
      ],
    },
    {
      id: 'printify',
      title: 'Produce on Printify (or an approved vendor)',
      steps: [
        {
          id: 'merch-printify-catalog',
          text: 'Pick the product from Printify’s catalog (t-shirts, bags, bottles, and other SKUs). Match fabric, print area, and color to the locked mood-board references.',
          href: PRINTIFY_PRODUCTS_URL,
          hrefLabel: 'Printify product catalog',
        },
        {
          id: 'merch-printify-mock',
          text: 'Upload the Canva export, generate mocks, and sanity-check print size on the actual SKU (chest, tote face, bottle wrap). Save mocks back to the merch mood board.',
        },
        {
          id: 'merch-sample',
          text: 'Order a sample before a bulk run or campaign giveaway. Photograph it in daylight. If the sample fails brand or quality, fix the file before anyone else gets one.',
        },
        {
          id: 'merch-order',
          text: 'Place the production order with a named fulfillment owner, ship-to list, and in-hand date. For ecommerce, confirm the Printify storefront or campaign checkout is branded Kahana, not a raw Printify URL in customer-facing copy.',
          href: PRINTIFY_PRODUCTS_URL,
          hrefLabel: 'Printify',
        },
      ],
    },
    {
      id: 'ship-show',
      title: 'Fulfill, show, and account',
      steps: [
        {
          id: 'merch-inventory',
          text: 'Log inventory, unit cost, and who received what (team, customer, campaign, community). Restocks start from this log, not memory.',
        },
        {
          id: 'merch-photo',
          text: 'Photograph the drop for LinkedIn, Instagram, and the campaign folder. People wearing it beat flat mocks. File the photos next to the Canva source. Official-account posts of those photos go through SOP 8.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'merch-community-hand',
          text: 'If this is club or keeper merch, hand it off with SOP 2 (who gets it, when, honest member counts only). Do not use merch to inflate a club’s story.',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
        },
      ],
    },
  ],
  doneWhen: [
    'Audience is named (team, customer, campaign, or community) and the idea lived on the merch mood board first.',
    'Artwork was designed in Canva, brand-checked (SOP 6), and legally cleared.',
    'Product was set up in Printify (or an approved vendor), a sample was seen, then production ordered.',
    'Inventory, cost, and a photo of the real piece are filed. Recipients are recorded.',
  ],
})

export const SOCIAL_MEDIA_ACCESS_SOP = playbook({
  id: 'official-social-media',
  title: 'Official Social Media',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Anyone posting from a Kahana-owned account (company LinkedIn, Instagram, YouTube, X, TikTok). Personal LinkedIn (Category 1 / 2) is a different SOP.',
  when: 'Before first login to an official account, and before every official post or scheduled slot.',
  format: 'checklist',
  description:
    'Get access to official Kahana social accounts (restricted credentials), then pass brand, proofread, and marketing-manager review in Linear before you schedule or post.',
  keywords: [
    'social media',
    'instagram',
    'linkedin company',
    'youtube',
    'tiktok',
    'twitter',
    'x',
    'credentials',
    'access request',
    'linear review',
    'marketing manager',
    'brand check',
  ],
  notes: [
    'Login and password live only in a restricted Google Doc. Request access before opening it. Do not paste credentials into Slack, Linear, email, screenshots, or this data room.',
    'Personal teammate LinkedIn (Category 1 / 2) is a different SOP. This SOP is official Kahana-owned accounts only.',
  ],
  sections: [
    {
      id: 'access',
      title: 'Get access (restricted)',
      intro:
        'Official logins are not in Slack and not in this SOP. You request them, then use the restricted doc. Access is granted, not assumed.',
      steps: [
        {
          id: 'social-need',
          text: 'Confirm you actually need an official account (you will post or schedule as Kahana, not only engage from your personal profile). Personal LinkedIn engagement stays on the LinkedIn SOP.',
          href: '/sops/linkedin-operating-rhythm',
          hrefLabel: 'LinkedIn SOP (personal)',
        },
        {
          id: 'social-request',
          text: 'Request access. Use the tools form if you are still missing Linear or Slack, then ask Marketing Lead (or Adam) for the credentials doc. Do not share logins sideways with a teammate who was not granted access.',
          href: TOOLS_ACCESS_TALLY_URL,
          hrefLabel: 'Get Access to Tools & Data',
        },
        {
          id: 'social-credentials',
          text: 'Open the restricted credentials doc only after you are granted access. Use those logins. Never copy passwords into Slack, Linear, a ticket, a screenshot dump, or this data room.',
          href: SOCIAL_ACCOUNTS_CREDENTIALS_DOC,
          hrefLabel: 'Official social logins (restricted — request access)',
        },
        {
          id: 'social-channels',
          text: 'Know which handle you are using. Official channels: LinkedIn company (kahana-co), X (@KahanaHQ), Instagram (@kahanahq), YouTube (@kahanaHQ), TikTok (@kahanahq). Post only from the account the calendar named.',
          href: 'https://www.linkedin.com/company/kahana-co',
          hrefLabel: 'LinkedIn company page',
        },
      ],
    },
    {
      id: 'quality-gate',
      title: 'Before you post (quality gate)',
      intro:
        'Access is not permission to hit Publish. Brand, proofread, and a marketing manager’s Linear review all happen first.',
      steps: [
        {
          id: 'social-brand',
          text: 'Check SOP 6 Brand Guidelines against the caption, visual, and handle. Colors, type, logo clearspace, voice (together-not-instead), and naming (Kahana AKA “The Aura Library”; Aura is the signal, not the product name).',
          href: '/sops/brand-guidelines',
          hrefLabel: 'SOP 6: Brand Guidelines',
        },
        {
          id: 'social-proofread',
          text: 'Proofread the full post as a human. No typos, leftover placeholder text, or ugly issues (cropped faces, low-res exports, stretched logos, unreadable type, broken line breaks, wrong crop for Stories vs feed vs Reel).',
        },
        {
          id: 'social-no-raw-ai',
          text: 'Do not paste AI-generated copy or images straight to an official account. People notice. AI is fine for a portion (outline, alt-text draft, crop ideas) if a human rewrites, fact-checks, and brand-checks before review.',
        },
        {
          id: 'social-linear-review',
          text: 'Create a Linear issue for this post. Attach the marketing design (Canva export, mock, or video cut) plus caption and intended channel/time. Assign a marketing manager. They run quality review. Do not schedule or post until they approve.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'social-wait',
          text: 'Wait for the marketing manager’s quality review. If they request changes, fix and re-attach. Only after approval: schedule in the native tool or post directly. Then drop the live link in Slack for teammate engagement.',
        },
      ],
    },
    {
      id: 'handoffs',
      title: 'Channel handoffs',
      steps: [
        {
          id: 'social-ig',
          text: 'Instagram caption, Reel, or Story from @kahanahq still follows the Instagram SOP after this gate.',
          href: '/sops/instagram-publishing',
          hrefLabel: 'Instagram SOP',
        },
        {
          id: 'social-yt',
          text: 'YouTube uploads to @kahanaHQ still follow the YouTube SOP after this gate.',
          href: '/sops/youtube-publishing',
          hrefLabel: 'YouTube SOP',
        },
        {
          id: 'social-blogs',
          text: 'If the post is promoting a blog, the article itself still ships through SOP 5. This SOP is only the official social post.',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
      ],
    },
  ],
  doneWhen: [
    'Access was requested and granted; credentials were used from the restricted doc only (never pasted elsewhere).',
    'The post was brand-checked (SOP 6), proofread, and not raw AI output.',
    'A marketing design was attached in Linear and a marketing manager approved quality review.',
    'Only then was the post scheduled or published from the official Kahana account.',
  ],
})

export const AUTHOR_OUTREACH_SOP = playbook({
  id: 'author-outreach',
  title: 'Author Outreach',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Anyone recruiting authors or publishers to host a paid book on Kahana and seed a book club',
  when: 'In batches from the contact list and tracker. Log the row before you send. Follow up on Touch 2 and Touch 3.',
  format: 'checklist',
  description:
    'Recruit authors to host a paid book on Kahana and use it as the core of a book club. Work the contact list and tracker. Personalize the outreach template. Do not send a generic paste.',
  keywords: [
    'author',
    'outreach',
    'publisher',
    'ebook',
    'book club',
    'hub',
    'tracker',
    'contact list',
    'indie',
    'self-published',
  ],
  notes: [
    'Two sheets, two jobs. The contact list is candidate titles (what the team wants to read). The tracker is the pipeline (who you contacted, when, and what happened). Do not keep a private shadow list.',
    'The email below is a starting template. Tailor and personalize it. A paste that still has brackets, a placeholder demo link, or zero proof you read the book does not go out.',
    'Ask is two parts: host [Title] as a paid book at a price they choose, and use it as the core of an upcoming book club. Team read first; public feature is optional.',
  ],
  sections: [
    {
      id: 'sheets',
      title: 'The two sheets',
      intro:
        'Open both. Pick from the contact list (or add a sourced indie to the tracker). Every send gets a tracker row first.',
      steps: [
        {
          id: 'ao-contact-list',
          text: 'Open the author contact list (Authors Contact Details). This is the candidate shelf: Founders & Builders, product/engineering, Money, Mind & Growth, Myths & Fantasy, Thrills, Literary picks. Confirm the current title and year before you name the book in email.',
          href: AUTHOR_CONTACT_LIST_URL,
          hrefLabel: 'Author contact list',
        },
        {
          id: 'ao-tracker',
          text: 'Open the Author Outreach Tracker (Outreach Log tab). Columns to fill: Author Name, Book Title, Segment, Source Found, Contact Info, Contact Channel Used, Date Touch 1 / 2 / 3, Message/Template Used, Response (Y/N/Pending), Time to Respond (days), Outcome / Status, What Worked / Didn\'t, Owner. Use Legend & Instructions and Summary when you are unsure.',
          href: AUTHOR_OUTREACH_TRACKER_URL,
          hrefLabel: 'Author outreach tracker',
        },
        {
          id: 'ao-claim',
          text: 'Claim the row (Owner = you) before sending. If the author is already Pending or Yes, do not double-email. If they are a sourced indie (Curios, Goodreads, etc.) with Contact Info = Needs research, research first. Do not send to a blank channel.',
        },
      ],
    },
    {
      id: 'research',
      title: 'Research before you write',
      steps: [
        {
          id: 'ao-verify-title',
          text: 'Verify the live title. Tracker rows often say “title TBD” or “see Curios/Goodreads.” Confirm the book exists, is still theirs, and is a realistic rights ask (indie/self-published is usually easier than a celebrity biography via a big house).',
        },
        {
          id: 'ao-contact',
          text: 'Find a real channel: author site contact, publisher, agent, or a public email they invite. Put it in Contact Info and name the channel (email, form, Instagram DM). One named person, not a blast list.',
        },
        {
          id: 'ao-why-this-book',
          text: 'Write one sentence that is only true of this book (what multiple teammates want to discuss). That sentence goes into the email. If you cannot write it, pick a different title.',
        },
      ],
    },
    {
      id: 'personalize',
      title: 'Personalize the template',
      intro:
        'Use the template. Do not send it raw. People notice a mail-merge. AI can draft a portion; a human rewrites name, title, the why-this-book line, and the demo link.',
      steps: [
        {
          id: 'ao-fill-brackets',
          text: 'Replace every bracket. Greeting: pick Hi or Hello, and Author or Publisher (not both stacked). Name: your real name in the intro and the sign-off. Title: the verified book title, twice. A/B the company line: “a startup” or “an early-stage startup” (pick one).',
        },
        {
          id: 'ao-demo',
          text: 'Adam records the product demo (elevator pitch + screenshare). Get a real YouTube URL before you send. Do not leave “[INSERT YOUTUBE VIDEO LINK]” or “[YouTube demo link]” in the email. If the video is not ready, ask Adam and wait, or send without a demo line rather than a broken placeholder.',
          href: '/sops/youtube-publishing',
          hrefLabel: 'YouTube SOP',
        },
        {
          id: 'ao-proofread',
          text: 'Proofread as a human. No leftover placeholders, no em dashes, no “Kahana.io” typos, no wrong title. Official social posts about a yes still go through SOP 8.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'ao-template',
          text: 'Copy the template, then rewrite it for this author. Log which version you sent in Message/Template Used.',
          template: AUTHOR_OUTREACH_EMAIL_TEMPLATE,
        },
      ],
    },
    {
      id: 'send-followup',
      title: 'Send, follow up, log',
      steps: [
        {
          id: 'ao-touch1',
          text: 'Send Touch 1. Same day, fill Date - Touch 1, Contact Channel Used, Message/Template Used, Response = Pending, Owner.',
          href: AUTHOR_OUTREACH_TRACKER_URL,
          hrefLabel: 'Author outreach tracker',
        },
        {
          id: 'ao-touch23',
          text: 'If no reply, send Touch 2 and Touch 3 on a humane cadence (about a week apart unless they asked you to wait). Log each date. Do not nag past Touch 3 without a new angle (different title, publisher instead of author, or park the row).',
        },
        {
          id: 'ao-response',
          text: 'When they reply (or you give up): Response Y/N/Pending, Time to Respond (days), Outcome / Status, and What Worked / Didn’t so the next sender is not guessing.',
        },
      ],
    },
    {
      id: 'yes-path',
      title: 'If they say yes',
      steps: [
        {
          id: 'ao-paid-book',
          text: 'Route hub setup (account, paid book at their price, rights/import) to Product / Customer Success. Put that owner on the tracker row. Authors set the price. Do not promise a rate we cannot support.',
        },
        {
          id: 'ao-club',
          text: 'Stand up the book club around that title (team read first, public feature only if they want it). Run the club with SOP 2 and Book Club Management.',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
        },
        {
          id: 'ao-club-ops',
          text: 'Hand the live club to hosts using Book Club Management (wishlist, cycle, Keeper’s Codex).',
          href: '/sops/book-club-management',
          hrefLabel: 'Book Club Management',
        },
      ],
    },
  ],
  doneWhen: [
    'The author is on the tracker with Owner, verified title, and a real contact channel (not “Needs research” if you already sent).',
    'The email was personalized (no leftover brackets, real demo link or a deliberate omit, one sentence only true of this book).',
    'Touch dates, template used, response, and outcome are logged.',
    'A yes has a Product/CS owner for the paid book and a club path via SOP 2.',
  ],
})

export const WRITING_PROJECT_CHARTER_ALIASES = {
  'creating-project-charters': 'writing-a-project-charter',
}

export const WRITING_PROJECT_CHARTER_SOP = playbook({
  id: 'writing-a-project-charter',
  title: 'Writing a Project Charter',
  category: 'Project Management',
  owner: 'Project Manager',
  who: 'Whoever is running the project (project manager, intern, or team lead)',
  when: 'At the outset of any project involving more than two or three people, before work begins.',
  format: 'checklist',
  description:
    'Write the charter at the start and revise it as decisions land. Most of the work is establishing facts with the person commissioning the project (today: Adam), not polishing prose.',
  keywords: [
    'project charter',
    'charter',
    'project management',
    'nithila',
    'scope',
    'sponsor',
    'adam',
    'brief',
    'collaborators',
    'kahana hq',
    'directory',
  ],
  notes: [
    'Aim for three to six pages. Write the full document, including sections you are still uncertain about.',
    'Keep assumptions and risks in the final document. Removing them to look more confident hides problems participants could plan around.',
    'Anticipate one or two review rounds. The first draft exists to be corrected. A project’s shape commonly changes once the stakeholder sees it written down; that is the charter working.',
    'Complete the summary block last (owner, dates, participation). Those details change most.',
    'As of August 26, 2026, Adam is the commissioning stakeholder. When another manager commissions a project, the same steps apply with that person in his place.',
  ],
  sections: [
    {
      id: 'brief',
      title: '1. Receive the brief',
      intro:
        'A charter records what the project is, why it exists, what is expected of those taking part, and by when. It is produced at the start and revised as decisions are confirmed.',
      steps: [
        {
          id: 'pc-receive',
          text: 'New projects are generally raised by Adam in the weekly 1:1 or over Slack. Treat that first conversation as the main chance to establish what the project involves. Written follow-up is slower and less complete than asking while you have his attention.',
        },
      ],
    },
    {
      id: 'capture',
      title: '2. Capture what is said',
      intro:
        'Take notes as the project is described and leave them messy: incomplete sentences and fragments. Tidying during the conversation loses details. The stakeholder’s own account of why it matters is usually stronger than a rewritten version.',
      steps: [
        {
          id: 'pc-verbatim',
          text: 'Where a vivid line appears (for example a test of whether the company could absorb fifty new joiners tomorrow), record it verbatim. Lines like that carry more weight in the finished charter than a paragraph of reasoning.',
        },
        {
          id: 'pc-listen',
          text: 'Listen while the project is explained. Ask about anything you cannot picture clearly. Do not work through a questionnaire. More questions will surface once you start drafting.',
        },
        {
          id: 'pc-checklist',
          text: 'By the end of the conversation you should be able to state: purpose and what is in/out of scope; which teammates are involved and whether participation is expected or optional; timeline; deadline for the draft charter; when the final version is expected and when it goes out; what follows the project and how completion will be judged. Anything missing is a question for step 5, not something you invent.',
        },
      ],
    },
    {
      id: 'first-draft',
      title: '3. Draft before you have every answer',
      steps: [
        {
          id: 'pc-partial',
          text: 'Do not wait for complete information. A partial draft shows what is missing better than a list of questions, and stakeholders correct a draft faster than they fill a blank. Write the full document, including the sections you are uncertain about.',
        },
        {
          id: 'pc-example',
          text: 'Use the data-room Project Charter as structure (problem, scope, KPIs, risks) and as an example of a live Kahana charter, not as a fill-in-the-blank that replaces the conversation.',
          href: '/project-charter',
          hrefLabel: 'Project Charter (example)',
        },
      ],
    },
    {
      id: 'product',
      title: '4. Work the product and log questions',
      steps: [
        {
          id: 'pc-walk',
          text: 'Work through the relevant areas of Kahana as a participant would. Record each question as it occurs, with a proposed answer. Many questions only appear once drafting has started.',
        },
        {
          id: 'pc-verify',
          text: 'Verify every procedure against the product. If the charter asks people to follow a sequence, go to the site and follow that sequence yourself before writing it. Confirm each step exists and behaves as described. A procedure from memory will go stale; the reader cannot tell which part is wrong.',
        },
        {
          id: 'pc-screenshots',
          text: 'Take screenshots as you go and put them in the charter. An image of the button someone should click beats a paragraph of description. If order matters, annotate the screenshot so numbering matches the written steps.',
        },
      ],
    },
    {
      id: 'questions',
      title: '5. Put questions to Adam with proposed solutions',
      steps: [
        {
          id: 'pc-batch',
          text: 'Compile questions into one Slack message. Do not send them one by one. Group by decision and include your recommendation for each. A stakeholder answers a proposal faster than an open question. Where the decision is genuinely his, set out the options, then state your preference.',
        },
      ],
    },
    {
      id: 'amend',
      title: '6. Amend the charter and reread it in full',
      steps: [
        {
          id: 'pc-reread',
          text: 'Answers often move the timeline, sometimes a lot. When one element changes, reread the entire charter. Do not patch only the paragraph that was asked about. A phase that made sense in the original sequence may now overlap another; put that overlap in risks rather than leaving participants to discover it.',
        },
      ],
    },
    {
      id: 'risks',
      title: '7. Set out assumptions, risks, and responsibilities',
      intro:
        'Resolve open questions with Adam before the draft goes for review. What belongs at the end of the charter is different: what the project depends on, what could go wrong, and who is answerable.',
      steps: [
        {
          id: 'pc-assumptions',
          text: 'Assumptions and risks: record anything the project relies on that is not confirmed, plus anything foreseeable that could go wrong (optional participation leaving a function uncovered, overlapping phases, a window too short for the work). Stating a risk plainly is not pessimism. It stops someone discovering it halfway through.',
        },
        {
          id: 'pc-raci',
          text: 'Who does what: name the owner. State who is responsible for which part. If several people are involved, say who leads, how tasks split, and how often the group meets. A charter that names a phase but not a person leaves everyone assuming somebody else has it.',
        },
        {
          id: 'pc-allocate',
          text: 'If tasks need owners and the stakeholder has not named them, propose an allocation rather than leaving blanks. Open the Kahana HQ hub on Kahana, open the collaborator list, and use the names and emails shown there. Open a collaborator’s profile when you need more contact information. Adam can correct the allocation at review. A proposal he amends is more useful than a blank he has to fill.',
        },
        {
          id: 'pc-directory',
          text: 'For a more complete roster (function and job title), use the Notion team directory. Treat it as the fuller directory when the hub list is not enough to assign work.',
          href: NOTION_TEAM_DIRECTORY_APP_URL,
          hrefLabel: 'Notion team directory',
        },
      ],
    },
    {
      id: 'submit',
      title: '8–10. Review, revise, hand off for circulation',
      steps: [
        {
          id: 'pc-submit',
          text: 'Submit the complete draft to Adam for review. Note anything you assumed and anything still outstanding so he is reviewing with the same information you have.',
        },
        {
          id: 'pc-revise',
          text: 'Act on review comments. Make the changes and return the revised version. Expect more than one pass on a substantial project. Each round should shrink the open-items list, not leave it unchanged.',
        },
        {
          id: 'pc-circulate',
          text: 'Hand the charter to Adam for circulation. He sends it to the team. Before he does, confirm the document states how participants should raise changes and by when. If the project begins the next day, say so plainly so nobody assumes a review period that does not exist.',
          href: '/sops/sending-project-charters',
          hrefLabel: 'Sending Project Charters',
        },
        {
          id: 'pc-linear',
          text: 'Once approved, link the charter from the Linear project (description or first comment) so the work and the document stay in one place.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
      ],
    },
  ],
  doneWhen: [
    'The charter names an owner, dates for every phase, a purpose a reader outside the project can follow, what success looks like, and an accurate list of what remains unknown.',
    'Assumptions and risks are still in the document. The summary block (owner, dates, participation) was filled last.',
    'Adam has reviewed and approved it, and it has gone out to everyone taking part.',
  ],
})

const TASKS = [
  task({
    id: 'linkedin-operating-rhythm',
    title: 'LinkedIn',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Every teammate (Category 1 or 2)',
    when: 'Every business day (15-minute block) and weekly for Category 2 posters.',
    description: 'Mandatory LinkedIn participation: engage in #linkedin-focus-group; Category 2 also posts.',
    keywords: ['linkedin', 'social', 'category 1', 'category 2'],
    steps: [
      {
        text: 'Read the LinkedIn Guide, join #linkedin-focus-group, and pick Category 1 (engage) or Category 2 (engage + 3 posts/week). This SOP is personal profiles. Official company-page posts go through SOP 8.',
        href: '/linkedin-guide',
        hrefLabel: 'LinkedIn Guide',
      },
      {
        text: 'If you will post from the Kahana company page (not your personal profile), get access and pass Linear marketing-manager review first.',
        href: '/sops/official-social-media',
        hrefLabel: 'SOP 8: Official Social Media',
      },
      'Block 15 minutes each business day to like and comment on every link in the Slack channel — early engagement matters.',
      {
        text: 'Category 2: send connection requests using the Connections Guide; share each post link in Slack.',
        href: '/linkedin-connections-guide',
        hrefLabel: 'LinkedIn Connections Guide',
      },
      'Managers track reactions/comments. Missed weeks get a Slack or email warning.',
    ],
    doneWhen: ['Daily engagement is done; Category 2 has three post links in Slack this week.'],
  }),
  task({
    id: 'instagram-publishing',
    title: 'Instagram',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Social owner',
    when: 'Per content calendar; after every notable ship.',
    description: 'Plan, publish, and measure Instagram posts that match brand and shipped product.',
    keywords: ['instagram', 'reels', 'social'],
    steps: [
      {
        text: 'Official @kahanahq access is restricted. Get credentials via SOP 8, then run brand, proofread, and Linear marketing-manager review before you schedule or post.',
        href: '/sops/official-social-media',
        hrefLabel: 'SOP 8: Official Social Media',
      },
      'Pull this week’s inputs: shipped features, backlog teasers (only if approved), testimonials, cognitive-challenge stories, and trends.',
      {
        text: 'Draft caption + visual against SOP 6 Brand Guidelines. Short-form video follows the use-case SOP. Do not paste raw AI output.',
        href: '/sops/brand-guidelines',
        hrefLabel: 'SOP 6: Brand Guidelines',
      },
      'After marketing-manager approval in Linear: publish, then share the link in Slack for teammate engagement where appropriate.',
      'Log reach, saves, and profile visits; note anything that should become a blog or YouTube cut.',
    ],
    doneWhen: [
      'SOP 8 gate passed (access, brand, proofread, Linear approval). Post is live, assets are filed, and a one-line performance note exists.',
    ],
  }),
  task({
    id: 'youtube-publishing',
    title: 'YouTube',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Video owner',
    when: 'When a use-case, feature, or narrative film is ready.',
    description: 'Script, record, publish, and point viewers at Kahana with UTMs.',
    keywords: ['youtube', 'video', 'use case'],
    steps: [
      'Script the job-to-be-done (not a feature dump). Show the product, not slides-only.',
      'Record, edit to brand, add chapters and a description with kahana.io UTM links.',
      {
        text: 'Official @kahanaHQ access is restricted. Get credentials via SOP 8. Attach the cut in Linear for marketing-manager quality review before you go Public or schedule.',
        href: '/sops/official-social-media',
        hrefLabel: 'SOP 8: Official Social Media',
      },
      'Publish Unlisted for review, then Public after approval; share in Slack and socials.',
      {
        text: 'When the video teaches a workflow, embed it in a kahana.io blog (no em dashes, sources, landscape comparisons where relevant).',
        href: '/sops/blog-publishing',
        hrefLabel: 'SOP 5: Blogs',
      },
      'Watch retention and click-through; clip a 15–30s cut for Instagram/LinkedIn (those official posts also go through SOP 8).',
    ],
    doneWhen: ['SOP 8 gate passed. Video is public with UTMs and a short-form cut is scheduled or posted.'],
  }),
  task({
    id: 'creator-collaborations-outreach',
    title: 'Creator Collaborations Outreach',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Creator partnerships owner',
    when: 'Ongoing pipeline; never cold-pitch without a logged row.',
    description: 'Find, qualify, outreach, and track creator collaborations.',
    keywords: ['creator', 'influencer', 'partnership', 'outreach'],
    steps: [
      {
        text: 'Log the creator on the outreach sheet (profile, relevance, status). Authors and publishers are a different SOP (paid book + book club).',
        href: CREATOR_OUTREACH_SHEET_URL,
        hrefLabel: 'Creator outreach sheet',
      },
      {
        text: 'If the person is an author or publisher you want on Kahana as a paid book and club title, use SOP 9 instead of this sheet.',
        href: '/sops/author-outreach',
        hrefLabel: 'SOP 9: Author Outreach',
      },
      'Qualify audience overlap with Kahana (reading, learning, clubs, Aura). Skip vanity follower counts.',
      'Customize outreach. Agree deliverables, legal/IP, and tracking links before anything goes live.',
      'Execute, measure, and write the learning back on the sheet.',
    ],
    doneWhen: ['Sheet row is updated through outcome (yes / no / parked) with a result note.'],
  }),
  task({
    id: 'narrative-creation',
    title: 'Narrative Creation',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Narrative owner with Product review',
    when: 'When positioning shifts, a major launch lands, or the Kahana Story page is stale.',
    description: 'Write and socialize the Kahana story so channels do not drift.',
    keywords: ['narrative', 'positioning', 'kahana story'],
    steps: [
      {
        text: 'Start from the data-room Kahana Story (AI slop, creator-stack gaps, hubs as library).',
        href: '/kahana-narrative',
        hrefLabel: 'Kahana Story',
      },
      'Draft the change (one-pager). Product and founder review before it hits the marketing site or ads.',
      'Update About, social bios, pitch SOP, and sales talk track in the same week.',
    ],
    doneWhen: ['Approved narrative is live in data room + public surfaces, and Sales has the new pitch.'],
  }),
  task({
    id: 'mood-board-collaboration',
    title: 'Mood Board — Collaboration',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Designer + requesting function',
    when: 'Ongoing for merch ideas; also before a campaign, merch drop, or video series.',
    description: 'Shared visual direction so makers are not guessing. Merch keeps a living ideas board, then locks a subset before production.',
    keywords: ['mood board', 'collaboration', 'design', 'merch'],
    steps: [
      'Requester writes the job (audience, emotion, must-include product shots, off-limits).',
      {
        text: 'For merch, add ideas to the ongoing merch mood board in Canva, FigJam, or Figma whenever they appear. Do not wait for a drop to be approved.',
        href: '/sops/merch',
        hrefLabel: 'SOP 7: Merch',
      },
      'Designer posts a board (FigJam/Figma/Canva/slides) tagged to the campaign or drop.',
      'One review round with Marketing + requester; lock references before production starts.',
    ],
    doneWhen: ['Locked board is linked from the campaign brief.'],
  }),
  task({
    id: 'use-case-feature-videos',
    title: 'Creating Videos of Use Cases and Features',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Video owner with Product demo help',
    when: 'After a ship that changes a user job, or when Sales needs a clip.',
    description: 'Show a real job on Kahana, not a feature laundry list.',
    keywords: ['video', 'use case', 'demo', 'feature'],
    steps: [
      'Name the user, the job, and the 60–90s storyboard. Product confirms the UI path still exists.',
      'Record on production or a clean staging hub. No secrets, no other users’ PII on screen.',
      'Edit, captions, end card with UTM. Publish per YouTube/Instagram SOPs.',
    ],
    doneWhen: ['Video is live and linked from the ship announcement or Sales deck.'],
  }),
  task({
    id: 'content-from-shipped-features',
    title: 'Creating Content Based on Shipped Features',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Marketing, pinged by Product on ship',
    when: 'Same week as a user-visible ship.',
    description: 'Turn shipped work into social, blog, or changelog content while it is still true.',
    keywords: ['changelog', 'shipped', 'launch content'],
    steps: [
      'Product posts ship notes in Slack (what, who it’s for, Mixpanel event if any).',
      'Marketing picks format (post, blog, clip) using content guidelines.',
      'Publish within five business days unless Legal is blocking.',
    ],
    doneWhen: ['At least one public artifact exists for the ship, or a written deferral.'],
  }),
  task({
    id: 'marketing-inputs',
    title: 'Inputs for Marketing',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Product, CS, Analytics, and Marketing',
    when: 'Weekly intake; monthly planning.',
    description:
      'Collect trends, ships, backlog teasers, success stories, testimonials, and cognitive-challenge stories.',
    keywords: ['inputs', 'testimonials', 'trends', 'backlog'],
    steps: [
      'Weekly: Product lists shipped + soon-to-ship; CS lists testimonials and tickets that are really stories; Analytics lists one insight.',
      'Marketing files them in the content calendar as raw inputs, not as automatic posts.',
      'Anything customer-named needs permission before public use.',
    ],
    doneWhen: ['The next content calendar cycle is fed by a dated input list, not memory.'],
  }),
  task({
    id: 'content-guidelines-quality',
    title: 'Content Guidelines — Quality Levels for Publishing',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Anyone publishing as Kahana',
    when: 'Before every public post, blog, or video.',
    description: 'Define what is good enough to ship publicly vs draft vs internal-only.',
    keywords: ['quality', 'guidelines', 'editorial', 'bar'],
    steps: [
      'Level A (always): accurate product, no PII, brand voice, working links, spelled Kahana correctly.',
      'Level B (default public): original point of view, one proof (screenshot, quote, metric), CTA.',
      'Level C (flagship): narrative aligned to Kahana Story, legal pass, designed assets.',
      'If it fails A, do not publish. If it is B without a proof, mark as draft.',
    ],
    doneWhen: ['The piece has an explicit A/B/C mark in the calendar.'],
  }),
  task({
    id: 'seo-sitemap',
    title: 'SEO / Sitemap',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Web + Marketing',
    when: 'On marketing-site or app SEO changes; quarterly Search Console pass.',
    description: 'Keep sitemaps and indexable URLs honest for kahana.io.',
    keywords: ['seo', 'sitemap', 'search console'],
    steps: [
      'Marketing site and product app have separate deploy targets — do not treat kahana-public as the React app.',
      'After nav, public page, or blog publishes, regenerate the sitemap so every live URL (including new posts) is listed. Submit the sitemap in Google Search Console when you want to expedite SEO.',
      'No keyword stuffing; titles and descriptions match the live page.',
    ],
    doneWhen: ['Search Console has no unexplained coverage drops on pages we still publish.'],
  }),
  task({
    id: 'ai-seo',
    title: 'AI SEO',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Marketing + web',
    when: 'When publishing flagship pages or changing the Kahana Story.',
    description: 'Make Kahana easy for answer engines to cite accurately (clear facts, not spam).',
    keywords: ['ai seo', 'llmo', 'schema', 'citations'],
    steps: [
      'Put durable facts (what Kahana is, who it is for, what Aura is) in plain language on About and Story pages.',
      'Keep organization/product names consistent (Kahana, Aura Library) — do not invent third names.',
      'After publish, search a few model/answer surfaces for “Kahana library” and correct hallucinations with page updates, not with comment spam.',
    ],
    doneWhen: ['Flagship pages state name, job, and differentiator in the first screen of copy.'],
  }),
  task({
    id: 'marketing-website',
    title: 'Marketing Website',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Homepage maintainers',
    when: 'Copy, SEO, or campaign landing changes.',
    description: 'Ship marketing-site changes in the homepage repo — never from kahana-web.',
    keywords: ['kahana.io', 'homepage', 'kahana-public', 'marketing site'],
    notes: [
      'kahana-web must never be pushed to Heroku app kahana-public. That took the marketing site down in July 2026.',
    ],
    steps: [
      'Edit kahana-homepage-public (or the current marketing repo), not the product frontend.',
      'Preview locally, then deploy the marketing app only.',
      'UTM links into app.kahana.io / kahana.io library as specified by the campaign brief.',
    ],
    doneWhen: ['Change is live on kahana.io and product app is untouched unless the brief required both.'],
  }),
  task({
    id: 'pr-news',
    title: 'PR / News',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'PR owner',
    when: 'Proactive pitches and inbound press.',
    description: 'Track journalists, pitches, and coverage in the PR spreadsheet.',
    keywords: ['pr', 'press', 'news'],
    steps: [
      {
        text: 'Log every outlet, contact, and status in the PR/News spreadsheet.',
        href: PR_NEWS_SHEET,
        hrefLabel: 'PR / News spreadsheet',
      },
      'Legal reviews claims, fundraising, and user numbers before a pitch goes out.',
      'After coverage, archive the URL, share internally, and add UTM’d links where we control the CTA.',
    ],
    doneWhen: ['Sheet row is current and any live coverage is linked from the monthly marketing report.'],
  }),
  task({
    id: 'book-club-management',
    title: 'Book Club Management',
    category: 'Community',
    owner: 'Community',
    who: 'Club hosts and community ops',
    when: 'Each club cycle (setup, wishlist, event, retro).',
    description: 'Operate Kahana book/video clubs using the club SOPs and Keeper’s Codex.',
    keywords: ['book club', 'clubs', 'keeper', 'wishlist'],
    steps: [
      {
        text: 'Create and run the club with SOP 2 Community Building (builder, visibility, wishlist, Feed, Events, Aura, invites, outreach). If the title is not on Kahana yet, recruit the author with SOP 9 first.',
        href: '/sops/community-building',
        hrefLabel: 'SOP 2: Community Building',
      },
      {
        text: 'Author not onboarded: work the contact list and tracker, personalize the template, log touches. Then come back to this SOP for the club cycle.',
        href: '/sops/author-outreach',
        hrefLabel: 'SOP 9: Author Outreach',
      },
      {
        text: 'Use The Keeper’s Codex checklist (inside SOP 2) for founding through first cycle.',
        href: '/sops/keepers-codex',
        hrefLabel: 'The Keeper’s Codex',
      },
      'Log blockers through the feedback SOP rather than only Slack.',
    ],
    doneWhen: ['The club’s current cycle has focus, a next event, and a logged wishlist state.'],
  }),
  task({
    id: 'learning-pod-management',
    title: 'Learning Pod Management',
    category: 'Community',
    owner: 'Community',
    who: 'Pod hosts',
    when: 'Each pod cohort or ongoing pod week.',
    description: 'Run a learning pod: members, material, cadence, and accountability.',
    keywords: ['learning pod', 'cohort', 'community'],
    steps: [
      'Define theme, size cap, cadence, and whether it is a Kahana club, hub, or both.',
      'Invite with a clear first-week job (what to open, what to discuss).',
      'Each session: attendance, what was covered, next assignment, and who is stuck.',
      'After the cohort, write what to reuse and file feedback for Product if the product blocked the pod.',
    ],
    doneWhen: ['Cadence is on the calendar and the last session has notes.'],
  }),
  task({
    id: 'process-audits',
    title: 'Process Audits',
    category: 'Operations',
    owner: 'Operations',
    who: 'Ops with the process owner',
    when: 'Quarterly per critical process, or after a miss.',
    description: 'Check whether the written SOP is what people actually do.',
    keywords: ['audit', 'process', 'ops'],
    steps: [
      'Pick the SOP, watch one real execution, and list gaps (missing step, extra tribal knowledge, broken link).',
      'Agree owner and date for each gap.',
      'Re-audit after the fix date.',
    ],
    doneWhen: ['Gap list is in writing with owners; the SOP is updated or explicitly deferred.'],
  }),
  task({
    id: 'updating-sops',
    title: 'Updating SOPs',
    category: 'Operations',
    owner: 'Operations',
    who: 'Process owner + Ops',
    when: 'When the product UI or policy changes, or an audit finds drift.',
    description: 'Edit data-room SOP content, review, and ship so /sops stays true.',
    keywords: ['sop', 'documentation', 'data room'],
    steps: [
      'Edit the SOP in the data-room repo (sopContent / functionSops). Keep function tags accurate.',
      'Have someone who does the job read the steps once.',
      'Push data-room main so the hub embed updates. Note the date in the SOP freshness line if the change is large.',
    ],
    doneWhen: ['Live /sops page matches current product and the owner knows it shipped.'],
  }),
  task({
    id: 'operations-reporting',
    title: 'Operations Reporting',
    category: 'Operations',
    owner: 'Operations',
    who: 'Ops',
    when: 'Weekly snapshot; monthly deeper.',
    description: 'Report whether functions are running their SOPs, not only whether they are busy.',
    keywords: ['ops reporting', 'weekly'],
    steps: [
      'Collect: open critical incidents, SOP audit gaps, CS ticket themes, and any process that missed its cadence.',
      'Share a short written snapshot (Slack or weekly reports page) with owners tagged.',
      'Escalate repeats to the function lead, not only to the intern who happened to be on the thread.',
    ],
    doneWhen: ['The snapshot exists for the week and every red item has an owner.'],
  }),
  task({
    id: 'sales-prospecting',
    title: 'Prospecting',
    category: 'Sales',
    owner: 'Sales Lead',
    who: 'BD / Sales',
    when: 'Ongoing; reviewed in the weekly sales SOP.',
    description: 'Build a relevant Kahana pipeline, not a generic lead dump.',
    keywords: ['prospecting', 'leads', 'pipeline'],
    steps: [
      'Source from creators, orgs, partners, advisors — see Sales Operations playbook.',
      'Qualify before outreach (mission fit, realistic partnership, potential value).',
      'Log name, source, hypothesis, and next action. No spreadsheet-of-one.',
    ],
    doneWhen: ['New names this week are qualified or explicitly discarded with a reason.'],
  }),
  task({
    id: 'sales-outreach',
    title: 'Outreach',
    category: 'Sales',
    owner: 'Sales Lead',
    who: 'BD / Sales',
    when: 'After qualification.',
    description: 'Personalized first touch and a recorded response.',
    keywords: ['outreach', 'email', 'linkedin'],
    steps: [
      'Research a specific connection to Kahana (their content, community, or learners).',
      'Send a short custom note. Use the Kahana pitch SOP — no spray templates.',
      'Record response or non-response and the follow-up date.',
    ],
    doneWhen: ['The CRM/sheet shows sent date, channel, and next date.'],
  }),
  task({
    id: 'discovery-call',
    title: 'Discovery Call',
    category: 'Sales',
    owner: 'Sales Lead',
    who: 'Whoever is on the call',
    when: 'Every first live conversation.',
    description: 'Learn their job-to-be-done before demoing every feature.',
    keywords: ['discovery', 'demo', 'call'],
    steps: [
      'Open with their world (how they publish, teach, or gather people) for at least half the time.',
      'Pitch fragmentation → one library → Aura → connection. Demo only the path that matches what they said.',
      'Write interest level, questions, next action, owner, date before the day ends.',
    ],
    doneWhen: ['Notes and next action are logged the same day.'],
  }),
  task({
    id: 'sales-followups',
    title: 'Follow-ups',
    category: 'Sales',
    owner: 'Sales Lead',
    who: 'BD / Sales',
    when: 'On the date you promised; do not ghost.',
    description: 'Keep the thread alive with a useful next step.',
    keywords: ['follow-up', 'pipeline'],
    steps: [
      'Hit the promised date. If blocked, send a status anyway.',
      'Include one useful artifact (hub example, club SOP, pricing) — not “just checking in.”',
      'Update interest and next date; close lost with a reason.',
    ],
    doneWhen: ['No open lead is past its follow-up date without a new date or a closed reason.'],
  }),
  task({
    id: 'distribution-partners-revenue-splits',
    title: 'Distribution Partners / Revenue Splits',
    category: 'Sales',
    owner: 'Sales Lead',
    who: 'BD + Finance + Legal',
    when: 'Before promising a split or listing a partner.',
    description: 'Agree economics and IP in writing before anyone promotes Kahana.',
    keywords: ['revenue share', 'partner', 'distribution'],
    steps: [
      'Write the split, what “revenue” means, payout timing, and who owns the customer relationship.',
      'Legal reviews the agreement (Legal playbook). Finance sets how it will be tracked (Stripe/Wave).',
      'Only then: public mention, tracking links, and a named operator on both sides.',
    ],
    doneWhen: ['Signed (or explicitly declined) terms exist; Finance can explain how money will move.'],
  }),
  task({
    id: 'lifecycle-emails-resurrection',
    title: 'Lifecycle Emails / Resurrection',
    category: 'Customer Success',
    owner: 'Customer Success',
    who: 'CS + whoever owns Resend/lifecycle in functions',
    when: 'Ongoing sequences; after suppression events.',
    description: 'Run Kahana lifecycle mail (NPS/PMF and later sequences) without spamming suppressed users.',
    keywords: ['lifecycle', 'resend', 'nps', 'resurrection', 'email'],
    steps: [
      'Confirm trigger, audience, and Mixpanel/lifecycle events in firebase-functions docs before changing copy.',
      'Never re-enable users who bounced or complained. Check suppression flags.',
      'Resurrection: define inactive, the offer, and a stop rule. Measure opens/clicks in Mixpanel with platform=email.',
      'After a send, spot-check Resend logs and the Mixpanel lifecycle board.',
    ],
    doneWhen: ['The sequence is documented (trigger, copy, stop) and suppressions are honored.'],
  }),
  task({
    id: 'handling-user-tickets',
    title: 'Handling Suggestions, Contacts, and Tickets',
    category: 'Customer Success',
    owner: 'Customer Success',
    who: 'CS and anyone covering the inbox',
    when: 'Every inbound from /support, /contact, hub ideas, or content reports.',
    description: 'Triage Kahana in-app and site tickets into reply, Linear, or Product.',
    keywords: ['support', 'ticket', 'contact', 'suggestion'],
    steps: [
      {
        text: 'Intake via kahana.io/support or /contact. Use the Customer Support playbook for priority.',
        href: SUPPORT_PAGE,
        hrefLabel: 'kahana.io/support',
      },
      {
        text: 'Product bugs and rough edges also go through the improve survey when the reporter is a teammate or host.',
        href: IMPROVE_SURVEY,
        hrefLabel: 'Improvement survey',
      },
      {
        text: 'Club-related logging: SOP 2 Community Building (logging section).',
        href: '/sops/community-building',
        hrefLabel: 'SOP 2: Community Building',
      },
      'Close the loop with the user. Feature requests go to Product with problem + frequency.',
    ],
    doneWhen: ['Ticket is closed or owned in Linear, and the user has a reply if they expected one.'],
  }),
  task({
    id: 'sending-project-charters',
    title: 'Sending Project Charters to Team Members',
    category: 'Project Management',
    owner: 'Nithila',
    who: 'Project Manager',
    when: 'When the charter is approved to start.',
    description: 'Make sure the people doing the work actually received the charter (Adam circulates; you confirm).',
    keywords: ['charter', 'kickoff', 'slack'],
    steps: [
      {
        text: 'Write and get approval through SOP 10 first. Adam circulates the charter. Do not send it yourself unless he asked you to.',
        href: '/sops/writing-a-project-charter',
        hrefLabel: 'SOP 10: Writing a Project Charter',
      },
      'After he sends it: confirm the link is in the relevant Slack channel and @ the owners.',
      'Add it to the project’s Linear description or first comment.',
      'Confirm in the kickoff that everyone can open it (data-room gate / Kahana hub).',
    ],
    doneWhen: ['Owners have acknowledged (emoji or reply) and the link lives on the Linear project.'],
  }),
  task({
    id: 'pm-time-log',
    title: 'Time Log (Project Management)',
    category: 'Project Management',
    owner: 'Nithila',
    who: 'All teammates (PM reminds)',
    when: 'Every Friday EOD.',
    description: 'Friday time log via Tally so planning is based on actual hours.',
    keywords: ['time log', 'tally', 'friday'],
    steps: [
      {
        text: 'Submit the weekly time log form Friday EOD (a reminder email goes to every Kahana HQ hub member Friday afternoon).',
        href: TIME_LOG_TALLY_URL,
        hrefLabel: 'Time log (Tally)',
      },
      'PM chases missing submissions Monday morning, not in the next retro as a surprise.',
      'Roll hours into planning (what actually moved vs what we hoped).',
    ],
    doneWhen: ['The week’s roster has a submission or an explicit PTO/exception note.'],
  }),
  task({
    id: 'identifying-cringey-gaps',
    title: 'Identifying “Cringey” Gaps',
    category: 'Product',
    owner: 'Product Manager',
    who: 'Product (everyone dogfoods)',
    when: 'Weekly dogfood; any time you flinch as a new user.',
    description: 'Catch embarrassing UX before users do. Full playbook is SOP 3.',
    keywords: ['cringey', 'dogfood', 'ux', 'quality'],
    steps: [
      {
        text: 'Follow SOP 3 Product Quality: stranger dogfood, journeys, heuristics, log with screenshot and impact.',
        href: '/sops/finding-whats-broken',
        hrefLabel: 'SOP 3: Product Quality',
      },
      'If it is high impact / low effort, it should be in Linear the same day.',
    ],
    doneWhen: ['The flinch is logged with screenshot, expected vs actual, and a named impact.'],
  }),
  task({
    id: 'documenting-gaps',
    title: 'Documenting Gaps',
    category: 'Product',
    owner: 'Product Manager',
    who: 'Product',
    when: 'Same day as the finding.',
    description: 'Write gaps so Engineering can reproduce without a meeting.',
    keywords: ['linear', 'bug', 'repro'],
    steps: [
      'Linear issue: steps, expected, actual, environment, screenshot/video, Mixpanel or URL if relevant.',
      'Tag impact vs effort. Link the dogfood log or survey submission.',
      'Do not bury gaps only in Slack threads.',
    ],
    doneWhen: ['A Linear URL exists that a new engineer can act on.'],
  }),
  task({
    id: 'creating-new-ux-ui',
    title: 'Creating New UX/UI',
    category: 'Product',
    owner: 'Product Manager',
    who: 'Product + design (and Engineering for feasibility)',
    when: 'After the problem is written, before build.',
    description: 'Design against a job-to-be-done and existing Kahana tokens, not a new visual system each time.',
    keywords: ['figma', 'ux', 'ui', 'design'],
    steps: [
      'Restate the user job and acceptance criteria from the Product playbook.',
      'Design in existing product patterns (dark UI, form tokens, contrast rules). Flag new components explicitly.',
      'Walk the flow with one person who was not in the design session before Linear “ready.”',
    ],
    doneWhen: ['Mock or spec is linked on the Linear issue and acceptance criteria match the UI.'],
  }),
  task({
    id: 'adding-to-backlog',
    title: 'Adding to Backlog',
    category: 'Product',
    owner: 'Product Manager',
    who: 'Product',
    when: 'When a request survives “is this the problem?”',
    description: 'Put work in Linear with enough shape to prioritize.',
    keywords: ['linear', 'backlog'],
    steps: [
      {
        text: 'Create the issue in the Kahana Linear workspace.',
        href: LINEAR_WORKSPACE_URL,
        hrefLabel: 'Linear',
      },
      'Include problem, user, acceptance criteria, and links. No title-only tickets.',
      'Place it in the triage/backlog state, not silently in someone’s DMs.',
    ],
    doneWhen: ['Issue is in Linear and discoverable in the team backlog view.'],
  }),
  task({
    id: 'prioritizing-backlog',
    title: 'Prioritizing Backlog',
    category: 'Product',
    owner: 'Product Manager',
    who: 'Product + Engineering lead',
    when: 'Weekly ranking; whenever a P0 appears.',
    description: 'Rank with mission, impact, effort, and evidence — then say no out loud.',
    keywords: ['prioritization', 'linear', 'sprint'],
    steps: [
      'Score using the Product playbook (impact, mission, effort, risk, evidence).',
      'Engineering confirms effort before a date is promised externally.',
      'Publish the ordered Now / Next / Later. Move the rest out of “Now.”',
    ],
    doneWhen: ['The top of Linear matches what Engineering will actually pull this week.'],
  }),
  task({
    id: 'mixpanel-metric-automation',
    title: 'Metric Reporting Automation with Mixpanel',
    category: 'Product',
    owner: 'Product Manager',
    who: 'Product + Engineering',
    when: 'When a new user-visible behavior ships, or a weekly report is still manual.',
    description: 'Instrument snake_case events via mixpanel helpers; do not invent ad-hoc track() calls.',
    keywords: ['mixpanel', 'analytics', 'events', 'lexicon'],
    notes: [
      'kahana-web: add MIXPANEL_EVENTS, a typed helper in mixpanelAnalytics.js, document in AGENTS.md. No new PascalCase events.',
    ],
    steps: [
      'Name the decision the metric should inform. If it cannot change a decision, do not instrument it.',
      'Implement through the web mixpanel helpers (or server helpers for email). Include hub_categories as a list when relevant.',
      'Verify in Mixpanel Live View on Kahana Dev before relying on PROD.',
    ],
    doneWhen: ['Event fires in Live View with the documented properties and a Lexicon note exists.'],
  }),
  task({
    id: 'creating-mixpanel-dashboards',
    title: 'Creating Dashboards in Mixpanel',
    category: 'Product',
    owner: 'Product Manager',
    who: 'Product (Analytics supports)',
    when: 'When a charter KPI has no board, or a function keeps exporting CSVs.',
    description: 'Build Kahana PROD (or Dev) boards that match the charter, not one-off explores.',
    keywords: ['mixpanel', 'dashboard', 'kpi'],
    steps: [
      {
        text: 'Open the Kahana Mixpanel project and reuse existing boards where possible.',
        href: MIXPANEL_URL,
        hrefLabel: 'Mixpanel Kahana project',
      },
      'Name the board after the decision (e.g. hub pricing conversion), not after a person.',
      'Pin the same property definitions as AGENTS.md / Mixpanel Lexicon. Share the link in How We Work or the charter.',
    ],
    doneWhen: ['A named board URL is in the charter or How We Work, and a second person can open it.'],
  }),
  task({
    id: 'reporting-insights',
    title: 'Reporting Insights',
    category: 'Analytics',
    owner: 'Khushmeet',
    who: 'Analytics',
    when: 'Weekly pulse; deeper monthly; ad hoc when a function asks.',
    description: 'Turn Mixpanel (and other sources) into decisions, not chart dumps.',
    keywords: ['insights', 'khushmeet', 'mixpanel'],
    steps: [
      'Start from a question a function actually has (growth, clubs, paywall, retention).',
      'Pull Mixpanel (and finance/CS if needed). Write the insight in one paragraph plus the chart link.',
      'Say what we should do differently — or that the data cannot support a change yet.',
    ],
    doneWhen: ['The requesting function has a written insight with a next action or an explicit “no change.”'],
  }),
  task({
    id: 'analytics-innovation',
    title: 'Analytics Innovation',
    category: 'Analytics',
    owner: 'Khushmeet',
    who: 'Analytics',
    when: 'When a recurring question is still answered by hand, or a new data source appears.',
    description: 'Improve how Kahana measures, not only how we screenshot Mixpanel.',
    keywords: ['innovation', 'measurement', 'experiment'],
    steps: [
      'Name the painful manual step (CSV, screenshot, tribal filter).',
      'Propose a board, saved cohort, or event change. Product/Engineering must agree before new tracking.',
      'Ship a small version, document it, retire the manual path.',
    ],
    doneWhen: ['The old manual path is unused, or the experiment is written off with a reason.'],
  }),
  task({
    id: 'supporting-functions-with-insights',
    title: 'Supporting Functions with Insights',
    category: 'Analytics',
    owner: 'Khushmeet',
    who: 'Analytics',
    when: 'On request and during planning.',
    description: 'Office hours for Marketing, Sales, CS, Product — same quality bar as reporting.',
    keywords: ['support', 'self-serve', 'mixpanel'],
    steps: [
      'Clarify the decision and the deadline. Push back on fishing expeditions.',
      'Prefer teaching the function to open the existing board over building a snowflake chart.',
      'If a new cut is needed, add it to a shared board, not a private explore.',
    ],
    doneWhen: ['The function can re-open the answer next week without Analytics in the room, or a follow-up is scheduled.'],
  }),
  task({
    id: 'checking-backlog',
    title: 'Checking Backlog',
    category: 'Engineering',
    owner: 'Engineering Lead',
    who: 'Engineers',
    when: 'Start of day / start of pairing; before picking new work.',
    description: 'Look at Linear before inventing work.',
    keywords: ['linear', 'backlog'],
    steps: [
      {
        text: 'Open Kahana Linear. Read P0/P1 and the current cycle.',
        href: LINEAR_WORKSPACE_URL,
        hrefLabel: 'Linear',
      },
      'If blocked, comment on the issue — do not go silent.',
      'Do not start a side quest that is not on the prioritized backlog without Product.',
    ],
    doneWhen: ['You can name the issue you are on and why it is the next one.'],
  }),
  task({
    id: 'ios-android-development',
    title: 'iOS and Android Development',
    category: 'Engineering',
    owner: 'Engineering Lead',
    who: 'Mobile engineers',
    when: 'When mobile work is on the cycle; otherwise keep the repo buildable.',
    description: 'Treat native apps as production software: store rules, secrets, and Mixpanel parity.',
    keywords: ['ios', 'android', 'mobile'],
    notes: ['Priority may be 0 in the current cycle — still follow this if you touch the apps.'],
    steps: [
      'Confirm the Linear issue and acceptance criteria before opening Xcode/Android Studio.',
      'Match web analytics property names where the event exists on both platforms.',
      'Never commit signing keys or store credentials. TestFlight/Play tracks follow the deploy SOP.',
    ],
    doneWhen: ['The issue is in review with a build the PM can install, or it is explicitly parked.'],
  }),
  task({
    id: 'selecting-tasks-from-backlog',
    title: 'Selecting Tasks/Cards from Backlog',
    category: 'Engineering',
    owner: 'Engineering Lead',
    who: 'Engineers',
    when: 'When you finish a card or start a day.',
    description: 'Pull from the ordered backlog, assign yourself, and set status.',
    keywords: ['linear', 'wip'],
    steps: [
      'Take the highest unassigned ready issue you can actually finish, not the most fun one.',
      'Assign yourself, move to In Progress, and keep WIP low (one active shippable card).',
      'If it is bigger than ~2 days, split or flag Product before disappearing.',
    ],
    doneWhen: ['Linear shows you as assignee on exactly the work you are doing.'],
  }),
  task({
    id: 'product-code-access-setup',
    title: 'Product Code Access & Setup',
    category: 'Engineering',
    owner: 'Engineering Lead',
    who: 'New engineers',
    when: 'First week, after tools access form.',
    description: 'Get GitHub, env, and local app running without sharing secrets in Slack.',
    keywords: ['github', 'onboarding', 'env', 'setup'],
    steps: [
      {
        text: 'Submit the tools access form (GitHub email, Linear, Mixpanel).',
        href: TOOLS_ACCESS_TALLY_URL,
        hrefLabel: 'Tools access form',
      },
      'Clone kahana-web and firebase-functions as needed. Use .env.development.local — never commit secrets.',
      'Follow scripts/local-dev.md. Confirm npm start and a known page load.',
    ],
    doneWhen: ['You can run the app locally and open a PR against a feature branch.'],
  }),
  task({
    id: 'creating-branches-and-pushing',
    title: 'Creating Branches and Pushing to Remote',
    category: 'Engineering',
    owner: 'Engineering Lead',
    who: 'Anyone committing product code',
    when: 'Every change.',
    description: 'Branch, PR, and remotes — including the Heroku rules.',
    keywords: ['git', 'branch', 'heroku', 'pr'],
    notes: [
      'Never push kahana-web to kahana-public. Staging: git push heroku-beta <branch>:main. Prod: heroku-alpha.',
    ],
    steps: [
      'Branch from an up-to-date main. Name it after the Linear issue or a short intent.',
      'Push to origin. Open a PR. Do not force-push main. Do not skip hooks unless explicitly asked.',
      'Deploy staging before product prod when the change is user-facing.',
    ],
    doneWhen: ['Remote branch exists and the PR (or agreed direct deploy) is the source of truth.'],
  }),
  task({
    id: 'security-rules-rotating-keys',
    title: 'Security Rules — Rotating Keys',
    category: 'Engineering',
    owner: 'Engineering Lead',
    who: 'Engineering + whoever holds cloud secrets',
    when: 'On suspicion of leak, on offboarding, and on a planned rotation cadence.',
    description: 'Rotate leaked or stale keys without leaving old ones in git history unchecked.',
    keywords: ['secrets', 'rotation', 'api keys', 'heroku config'],
    steps: [
      'If a key was committed or pasted in Slack, treat it as leaked: rotate first, then clean up docs.',
      'Update Heroku config / Firebase secrets / Mixpanel as applicable. Do not put prod tokens in the repo.',
      'Remove the old key, confirm the app still boots, and note who was notified.',
    ],
    doneWhen: ['Old key is disabled and the new one works in the intended environment only.'],
  }),
  task({
    id: 'vibe-coding-rules',
    title: 'Vibe Coding Rules',
    category: 'Engineering',
    owner: 'Engineering Lead',
    who: 'Anyone using AI to write Kahana code',
    when: 'Every AI-assisted change.',
    description: 'AI is allowed; skipping review, analytics helpers, and deploy rules is not.',
    keywords: ['ai', 'cursor', 'copilot', 'agents.md'],
    steps: [
      'Read repo AGENTS.md / Cursor rules for the files you touch (Mixpanel, Heroku targets, contrast).',
      'Do not dump secrets into the prompt. Do not ask models for exploit PoCs against our systems.',
      'You still run tests, use the browser for UI, and own the PR. “The model wrote it” is not a review.',
    ],
    doneWhen: ['The PR would pass the same bar as a fully human-written change.'],
  }),
  task({
    id: 'website-code',
    title: 'Website Code',
    category: 'Engineering',
    owner: 'Engineering Lead',
    who: 'Web engineers',
    when: 'Product frontend changes.',
    description: 'kahana-web is the product app (curio.store / kahana-alpha). Marketing site is a different repo.',
    keywords: ['kahana-web', 'heroku-alpha', 'frontend'],
    steps: [
      'Work in kahana-web. Staging curio-beta, production kahana-alpha.',
      'Never deploy this repo to kahana-public.',
      'UI changes: verify in the browser, including empty/error states.',
    ],
    doneWhen: ['The intended Heroku app has the commit and the marketing site is unaffected.'],
  }),
  task({
    id: 'accounting-in-wave',
    title: 'Accounting in Wave',
    category: 'Finance',
    owner: 'Financial Analyst',
    who: 'Finance',
    when: 'As transactions happen; reconcile at least monthly.',
    description: 'Record Kahana books in Wave so P&L is not a surprise.',
    keywords: ['wave', 'bookkeeping', 'ledger'],
    steps: [
      'Enter or import transactions with a business purpose and category.',
      'Reconcile bank/Stripe-adjacent accounts. Flag anything that looks like a personal or duplicate charge.',
      'Close the month with a short note: anomalies, unpaid invoices, questions for the next forecast.',
    ],
    doneWhen: ['Wave matches source systems for the period, or variances are listed.'],
  }),
  task({
    id: 'settling-stripe-disputes',
    title: 'Settling Disputes in Stripe',
    category: 'Finance',
    owner: 'Financial Analyst',
    who: 'Finance (+ CS if the user is still active)',
    when: 'When Stripe notifies a dispute or inquiry.',
    description: 'Respond on time with evidence; tell CS if the user should be contacted.',
    keywords: ['stripe', 'dispute', 'chargeback'],
    steps: [
      'Open the Stripe dispute, note deadline, and gather invoice, product access logs, and comms.',
      'Submit evidence before the deadline. Do not ignore “inquiry” stages.',
      'Record outcome in Wave/notes. If fraud or a product bug caused it, file Linear/CS.',
    ],
    doneWhen: ['Evidence submitted or accepted loss is recorded with a reason.'],
  }),
  task({
    id: 'modeling-and-pro-forma',
    title: 'Modeling & Pro Forma',
    category: 'Finance',
    owner: 'Financial Analyst',
    who: 'Finance',
    when: 'Monthly, and before fundraising or a large spend.',
    description: 'Keep the Kahana model tied to explicit assumptions.',
    keywords: ['pro forma', 'model', 'forecast'],
    steps: [
      {
        text: 'Update the data-room Pro Forma cases from actuals, not from hope.',
        href: '/pro-forma',
        hrefLabel: 'Pro Forma',
      },
      'Change one assumption at a time and write why. Share material swings with leadership.',
    ],
    doneWhen: ['The live model date-stamps actuals vs forecast and lists assumption changes.'],
  }),
  task({
    id: 'filing-taxes',
    title: 'Filing Taxes',
    category: 'Finance',
    owner: 'Financial Analyst',
    who: 'Finance + tax preparer',
    when: 'Per jurisdiction calendar; do not wait for the week of the deadline.',
    description: 'File complete, on-time returns from reconciled books.',
    keywords: ['tax', 'irs', 'filing'],
    steps: [
      'Confirm books are closed for the period. Gather payroll, 1099s, and Stripe summaries.',
      'Work with the preparer. Leadership signs. Store the packet in the finance archive.',
      'Calendar the next estimated payment or filing.',
    ],
    doneWhen: ['Filed (or extension documented) and the next date is on the calendar.'],
  }),
  task({
    id: 'forecasting',
    title: 'Forecasting',
    category: 'Finance',
    owner: 'Financial Analyst',
    who: 'Finance',
    when: 'Monthly after actuals land.',
    description: 'Roll the forecast using the Finance playbook variance process.',
    keywords: ['forecast', 'variance'],
    steps: [
      'Compare actuals to last forecast. Name variance and cause.',
      'Update assumptions (users, conversion, spend). Communicate significant changes.',
    ],
    doneWhen: ['A dated forecast exists and leadership has seen material deltas.'],
  }),
  task({
    id: 'financial-planning',
    title: 'Financial Planning',
    category: 'Finance',
    owner: 'Financial Analyst',
    who: 'Finance + leadership',
    when: 'Annual plan; revisit when hiring or marketing spend jumps.',
    description: 'Connect hiring, marketing, and engineering spend to runway.',
    keywords: ['planning', 'runway', 'budget'],
    steps: [
      'Start from cash, burn, and the user→revenue chain in the Finance playbook.',
      'Scenario the hire/spend. Do not approve spend that the model cannot absorb without a named bet.',
    ],
    doneWhen: ['The plan names cash runway under the base case and the spend that would break it.'],
  }),
  task({
    id: 'payroll-run',
    title: 'Payroll',
    category: 'Finance',
    owner: 'Financial Analyst',
    who: 'Finance with HR inputs',
    when: 'Each pay cycle.',
    description: 'Calculate, pay, file, and reconcile payroll.',
    keywords: ['payroll', 'direct deposit', 'gross pay'],
    steps: [
      'Calculate gross pay, tax, and other deductions from HR-approved hours/salary.',
      'Send direct deposits or print checks. Confirm exceptions (new hire, termination, bonus).',
      'File government tax forms and wage reports on the calendar.',
      'Balance payroll accounts and audit a sample of pay records.',
    ],
    doneWhen: ['People are paid, filings are dated, and Wave (or payroll system) matches.'],
  }),
  task({
    id: 'p-and-l',
    title: 'P&L',
    category: 'Finance',
    owner: 'Financial Analyst',
    who: 'Finance',
    when: 'Monthly after close.',
    description: 'Produce a profit and loss that leadership can read without a decoder ring.',
    keywords: ['p&l', 'income statement'],
    steps: [
      'Close books in Wave. Generate P&L vs prior month and vs forecast.',
      'Annotate large lines (contractors, Stripe fees, marketing). Share with leadership.',
    ],
    doneWhen: ['A dated P&L is in the finance folder and variances over the agreed threshold are explained.'],
  }),
  task({
    id: 'hr-onboarding',
    title: 'Onboarding',
    category: 'HR & Talent',
    owner: 'HR manager',
    who: 'Hiring manager + HR',
    when: 'Every new hire, starting before day 1.',
    description: 'Run data-room Onboarding so access and culture are not accidental.',
    keywords: ['onboarding', 'new hire'],
    steps: [
      {
        text: 'Walk the new hire through data-room Onboarding (mission, tools, Product Hunt, Mixpanel).',
        href: '/onboarding',
        hrefLabel: 'Onboarding',
      },
      'Provision accounts only after the tools form. Pair with the People playbook Day 1 + role calendar.',
    ],
    doneWhen: ['The hire has completed the onboarding path items for their role and knows their escalation contact.'],
  }),
  task({
    id: 'talent-development',
    title: 'Talent Development',
    category: 'HR & Talent',
    owner: 'HR manager',
    who: 'Managers',
    when: 'Quarterly conversations; after a missed responsibility.',
    description: 'Grow people against written responsibilities, not vibes.',
    keywords: ['development', '1:1', 'growth'],
    steps: [
      'Review the role’s weekly/monthly calendar with the person.',
      'Pick one skill to grow and one process they must validate (People playbook).',
      'Write it down. Revisit next quarter.',
    ],
    doneWhen: ['Each teammate has a dated development note their manager can find.'],
  }),
  task({
    id: 'hr-time-log',
    title: 'Time Log (HR)',
    category: 'HR & Talent',
    owner: 'HR manager',
    who: 'All staff',
    when: 'Friday EOD; HR uses it for attendance and PTO context.',
    description: 'Same Tally log as Project Management — HR owns exceptions and PTO intersection.',
    keywords: ['time log', 'attendance', 'pto'],
    steps: [
      {
        text: 'Everyone submits Friday’s time log (Kahana HQ members also get the Friday reminder email).',
        href: TIME_LOG_TALLY_URL,
        hrefLabel: 'Time log (Tally)',
      },
      'HR reconciles PTO/sick against the log when pay or attendance is in question.',
    ],
    doneWhen: ['Missing logs are chased; PTO and the log do not contradict without a note.'],
  }),
  task({
    id: 'offboarding',
    title: 'Offboarding',
    category: 'HR & Talent',
    owner: 'HR manager',
    who: 'HR + Engineering/IT for access',
    when: 'As soon as notice is given or a termination is decided.',
    description: 'People playbook offboard: knowledge, assets, access.',
    keywords: ['offboarding', 'access', 'termination'],
    steps: [
      'Notification → access review → knowledge transfer → asset recovery → access removal → confirmation.',
      'Engineering rotates any keys that person could have known (keys SOP).',
      'Final pay per Finance payroll SOP.',
    ],
    doneWhen: ['Access matrix is checked off and assets are recovered or written off.'],
  }),
  task({
    id: 'reporting-hr-issues',
    title: 'Reporting Issues (People)',
    category: 'HR & Talent',
    owner: 'HR manager',
    who: 'Any staff',
    when: 'When something is unsafe, unfair, or against policy.',
    description: 'Raise people issues to HR without requiring the person to DM the whole company.',
    keywords: ['hr', 'complaint', 'escalation'],
    steps: [
      'Tell your manager or HR directly. If the manager is the problem, skip to HR/founder.',
      'HR records date, people involved, and next step. Do not gossip the case in Slack channels.',
      'Close or escalate with a dated note.',
    ],
    doneWhen: ['The report has an owner and a next date, or a documented close.'],
  }),
  task({
    id: 'time-attendance-pto',
    title: 'Track Time, Attendance, Sick Days, and Vacation',
    category: 'HR & Talent',
    owner: 'HR manager',
    who: 'HR',
    when: 'Ongoing; before each payroll.',
    description: 'Single source of truth for time away and attendance.',
    keywords: ['pto', 'sick', 'attendance'],
    steps: [
      'People request PTO/sick in the agreed channel. HR records it.',
      'Before payroll, reconcile requests vs time log vs calendar.',
      'Answer staff questions from that record, not from memory.',
    ],
    doneWhen: ['Payroll’s hours/PTO match HR’s register for the period.'],
  }),
  task({
    id: 'starting-pay-rates',
    title: 'Set Starting Pay Rates for New Hires',
    category: 'HR & Talent',
    owner: 'HR manager',
    who: 'HR + hiring manager + Finance',
    when: 'Before the offer goes out.',
    description: 'Offer pay that Finance can actually run on payday.',
    keywords: ['offer', 'salary', 'comp'],
    steps: [
      'Hiring manager proposes rate. HR checks band/equity. Finance confirms cash timing.',
      'Put rate, currency, contractor vs employee, and start date in the offer.',
      'Hand the same numbers to payroll setup.',
    ],
    doneWhen: ['Signed offer and payroll setup use the same numbers.'],
  }),
  task({
    id: 'benefits-and-direct-deposit',
    title: 'Manage Benefits and Direct Deposit Forms',
    category: 'HR & Talent',
    owner: 'HR manager',
    who: 'HR',
    when: 'On hire, on life-event, on request.',
    description: 'Collect and store benefits and bank details securely.',
    keywords: ['benefits', 'direct deposit', 'bank'],
    steps: [
      'Collect forms. Store in the HR system, not in a public Drive folder.',
      'Send bank details to payroll only. Never paste full account numbers in Slack.',
      'Confirm the first payday landed. Fix errors before the next cycle.',
    ],
    doneWhen: ['Forms are on file and the first payment succeeded or a ticket is open with Finance.'],
  }),
  task({
    id: 'pay-check-questions',
    title: 'Answer Staff Questions About Paychecks',
    category: 'HR & Talent',
    owner: 'HR manager',
    who: 'HR (Finance for tax math)',
    when: 'When someone asks.',
    description: 'Explain gross, deductions, and timing without making people wait until “later.”',
    keywords: ['paycheck', 'questions', 'gross'],
    steps: [
      'Pull the pay stub and HR register. Walk through gross, taxes, other deductions.',
      'If the number is wrong, own the correction with Finance on this cycle if possible.',
      'If it is a tax-law question, route to Finance/preparer rather than guessing.',
    ],
    doneWhen: ['The person has an explanation or a dated fix, not a shrug.'],
  }),
  task({
    id: 'penetration-testing',
    title: 'Penetration Testing',
    category: 'Security',
    owner: 'Engineering Lead / Security',
    who: 'Security owner + contracted testers',
    when: 'On a planned cadence and before major surface-area launches.',
    description: 'Scoped tests with written findings — not surprise attacks on prod by interns.',
    keywords: ['pentest', 'security', 'vulnerability'],
    steps: [
      'Define scope, environment (prefer staging), and rules of engagement in writing.',
      'Run the test. File vulnerabilities with severity, owner, and deadline (Engineering playbook).',
      'Retest closures. Do not argue severity in Slack without the write-up.',
    ],
    doneWhen: ['Report is stored, every finding is closed or risk-accepted with a name and date.'],
  }),
  task({
    id: 'pii-handling',
    title: 'PII Handling',
    category: 'Security',
    owner: 'Engineering Lead / Security',
    who: 'Everyone who touches user data',
    when: 'Always.',
    description: 'Minimum necessary PII, no Slack dumps, production access is logged.',
    keywords: ['pii', 'privacy', 'gdpr', 'data'],
    steps: [
      'Do not export production user lists to laptops or group chats. Use admin tools with a ticket.',
      'Screenshots and videos for SOPs/marketing must not show other people’s emails, messages, or payment data.',
      'Access reviews follow Engineering offboarding. Legal owns policy text; Security owns practice.',
    ],
    doneWhen: ['The task that needed PII is done and extra copies are deleted.'],
  }),
  task({
    id: 'platform-governance',
    title: 'Platform Governance',
    category: 'Security',
    owner: 'Engineering Lead / Security',
    who: 'Security + Product',
    when: 'When adding admin powers, webhooks, or new data stores.',
    description: 'Who can do what on Kahana, and how that is reviewed.',
    keywords: ['governance', 'admin', 'rbac'],
    steps: [
      'Document new admin capabilities and who holds them.',
      'Prefer least privilege. Shared logins are not a plan.',
      'Review after incidents and quarterly with Legal if user rights change.',
    ],
    doneWhen: ['The capability is listed with owners; leftover admin accounts are removed.'],
  }),
  task({
    id: 'content-moderation',
    title: 'Content Moderation',
    category: 'Security',
    owner: 'Security / Trust & Safety',
    who: 'Moderation owner and CS',
    when: 'On report, and as a sampled review.',
    description: 'Act on in-app content reports with a consistent reason taxonomy.',
    keywords: ['moderation', 'report', 'trust', 'safety'],
    steps: [
      'Intake content_report tickets (adult, violence, hate, harmful, spam, other).',
      'Decide: leave up, restrict, remove, or escalate to Legal/law enforcement when required.',
      'Record the decision and tell the reporter what you can tell them. Repeat offenders get a named policy path.',
    ],
    doneWhen: ['The report is closed with a decision code, not only “looked at it.”'],
  }),
  task({
    id: 'reporting-cyber-threats',
    title: 'Reporting Cybersecurity Threats / Attacks',
    category: 'Security',
    owner: 'Engineering Lead / Security',
    who: 'Anyone who notices',
    when: 'Immediately.',
    description: 'Incident-style reporting for phishing, intrusion, ransomware, or suspicious admin activity.',
    keywords: ['incident', 'phishing', 'attack', 'threat'],
    steps: [
      'Do not poke the attacker. Capture evidence (headers, URLs, screenshots) and tell Engineering Lead + founder.',
      'Follow the Engineering incident steps: contain, restore, RCA.',
      'If user PII may be involved, loop Legal. Rotate keys if credentials could have leaked.',
    ],
    doneWhen: ['Incident doc exists with timeline, containment, and follow-up owners.'],
  }),
  task({
    id: 'it-staff-tickets',
    title: 'Handling IT Tickets / Requests from Staff',
    category: 'IT',
    owner: 'IT',
    who: 'IT',
    when: 'Every staff request for access, hardware, or tools.',
    description: 'Queue staff IT work so it is not random DMs.',
    keywords: ['it', 'tickets', 'access', 'laptop'],
    steps: [
      'Log the request (person, need, urgency). Approve via the function owner if it is a paid tool.',
      'Provision, verify, and write down the account name. Offboard uses the same list.',
      'Close with the requester. Recurring requests become a process, not a heroics loop.',
    ],
    doneWhen: ['Request is closed or waiting on a named approver, not lost in chat.'],
  }),
  task({
    id: 'researching-new-technologies',
    title: 'Researching New Technologies',
    category: 'IT',
    owner: 'IT',
    who: 'IT',
    when: 'When a function asks, or the IT roadmap is due for an update.',
    description: 'Evaluate tools against a real Kahana job, not a blog post.',
    keywords: ['research', 'tools', 'vendor'],
    steps: [
      'Interview the requesting function (see Interviewing Staff SOP). Write the job-to-be-done.',
      'Compare 2–3 options on security, cost, admin burden, and whether we already have something.',
      'Recommend adopt / trial / reject with a date to revisit.',
    ],
    doneWhen: ['A one-pager exists and the roadmap is updated or explicitly unchanged.'],
  }),
  task({
    id: 'updating-it-roadmap',
    title: 'Updating IT Roadmap',
    category: 'IT',
    owner: 'IT',
    who: 'IT',
    when: 'Quarterly, and after a major tool decision.',
    description: 'Keep a public-to-the-company list of IT bets and dates.',
    keywords: ['roadmap', 'it'],
    steps: [
      'List current systems, known pain, and next three changes.',
      'Align with Security (DLP, access) and Engineering (product vs internal tools).',
      'Publish in the data room or operating system docs.',
    ],
    doneWhen: ['The dated roadmap is findable and last quarter’s items are marked done/deferred.'],
  }),
  task({
    id: 'interviewing-staff-other-functions',
    title: 'Interviewing Staff in Other Functions',
    category: 'IT',
    owner: 'IT',
    who: 'IT',
    when: 'Before buying tools or changing access patterns.',
    description: 'Learn how people actually work before imposing software.',
    keywords: ['interview', 'discovery', 'internal'],
    steps: [
      'Ask: what they do weekly, where they get stuck, what they already pay for, what would break if IT changed it.',
      'Write quotes and jobs, not a solution in the first meeting.',
      'Feed the IT roadmap and any Security concerns.',
    ],
    doneWhen: ['Notes are filed and the interviewee sees the summary.'],
  }),
  task({
    id: 'enterprise-browser-dlp',
    title: 'Enterprise Browser (DLP Prevention)',
    category: 'IT',
    owner: 'IT',
    who: 'IT + Security',
    when: 'When policy, browser, or DLP controls change; after a data-handling incident.',
    description: 'Control how staff browsers handle Kahana and customer data (Oasis/enterprise-browser archive is context, not a free-for-all).',
    keywords: ['dlp', 'enterprise browser', 'oasis', 'data loss'],
    steps: [
      'Define which data must not leave Kahana admin tools (exports, screenshots, extensions).',
      'Choose controls (policy, browser, training) that staff can actually follow.',
      'Test one workflow (support ticket with PII, finance CSV). Train, then sample compliance.',
    ],
    doneWhen: ['A written DLP policy exists and one real workflow was tested this quarter.'],
  }),
  task({
    id: 'trademarks-copyrights',
    title: 'Trademarks and Copyrights',
    category: 'Legal',
    owner: 'Legal',
    who: 'Legal + whoever is shipping a name, logo, or catalog content',
    when: 'Before a new brand element, catalog ingest, or takedown.',
    description: 'Protect Kahana marks and respect others’ copyright — including Library imports.',
    keywords: ['trademark', 'copyright', 'ip', 'archive.org'],
    steps: [
      'New names/logos: search, then file/maintain marks with counsel. Do not DIY a confusingly similar mark.',
      'Content: follow the Legal playbook for creator agreements and complaints. Archive.org / PD imports still need a rights hint and the import SOP — not “it was on the internet.”',
      'Takedowns use the copyright complaint path in the Legal playbook.',
    ],
    doneWhen: ['The asset has a documented rights basis, or it is not published.'],
  }),
  task({
    id: 'legal-training-kahana',
    title: 'Legal Training Tailored to Kahana',
    category: 'Legal',
    owner: 'Legal',
    who: 'Legal + function leads',
    when: 'On hire for relevant roles; when ToS, copyright, or employment rules change.',
    description: 'Teach Kahana-specific legal: user content, Aura, clubs, payments, employment — not generic law school.',
    keywords: ['training', 'tos', 'compliance'],
    steps: [
      'Pick the audience (eng, marketing, CS, everyone) and the three mistakes they actually make.',
      'Use Kahana examples (hub import, club adult policies, testimonials, Mixpanel PII).',
      'Record who attended. Refresh when product or policy changes.',
    ],
    doneWhen: ['The last training date and audience are written down, and materials live next to the Legal SOP.'],
  }),
]

export const FUNCTION_SOPS = [...PLAYBOOKS, ...TASKS].map((sop, index) => ({
  ...sop,
  number: 11 + index,
}))
