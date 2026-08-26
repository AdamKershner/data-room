/**
 * Function-tagged SOPs: department playbooks from SOPS.txt plus the
 * operating-task checklist (Marketing through Legal).
 * Numbered from SOP 21 onward in sopContent.js (SOP 1 Product Hunt, SOP 2 Community Building,
 * SOP 3 Product Quality, SOP 4 Product Management Playbook, SOP 5 Blogs, SOP 6 Brand Guidelines,
 * SOP 7 Merch, SOP 8 Official Social Media, SOP 9 Author Outreach, SOP 10 Writing a Project Charter,
 * SOP 11 Creating YouTube Videos, SOP 12 SEO, SOP 13 Updating the Marketing Website,
 * SOP 14 Third-Party News and PR, SOP 15 Creator Prospecting, SOP 16 Creator Outreach,
 * SOP 17 Creator Collab Calls, SOP 18 Post-Collab Follow-ups, SOP 19 Lifecycle Emails and Tickets,
 * SOP 20 Time Log).
 */

import {
  ADAM_CALENDLY_URL,
  AMY_WANG_HUB_URL,
  AMY_WANG_YOUTUBE_URL,
  CREATOR_OUTREACH_DEMO_VIDEO_URL,
  CREATOR_OUTREACH_SHEET_URL,
  GOOGLE_CHAT_URL,
  GOOGLE_SEARCH_CONSOLE_URL,
  KAHANA_HQ_HUB_URL,
  KAHANA_LIBRARY_URL,
  KAHANA_SITE_URL,
  LINEAR_WORKSPACE_URL,
  MARKETING_SITE_REPO_URL,
  MIXPANEL_LIFECYCLE_BOARD_A_URL,
  MIXPANEL_LIFECYCLE_BOARD_B_URL,
  MIXPANEL_LIFECYCLE_BOARD_C_URL,
  MIXPANEL_URL,
  PMF_NPS_OUTPUT_SHEET_URL,
  RESEND_EMAILS_URL,
  TIME_LOG_OUTPUT_SHEET_URL,
  TIME_LOG_TALLY_URL,
  TOOLS_ACCESS_TALLY_URL,
} from '../constants/kahanaSite'
import { NOTION_TEAM_DIRECTORY_APP_URL } from '../constants/notionTeamDirectory'
import { CREATOR_OUTREACH_APPS_SCRIPT } from './creatorOutreachAppsScript'

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
const SCREEN_STUDIO_URL = 'https://www.screen.studio/'
const KAHANA_YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@kahanaHQ'
const FEATURE_VIDEO_EXAMPLE_URL = 'https://youtu.be/YUKRcYzdAm4'
const KAHANA_ABOUT_BLOG_URL = 'https://about.kahana.io/blog'
const KAHANA_HELP_CENTER_URL = 'https://help.kahana.io'
const YOUTUBE_DESCRIPTION_TEMPLATE = `What this video is for (one sentence).

Chapters
0:00 Intro
0:20 [First beat]
1:10 [Second beat]

Try it on Kahana: https://kahana.io/?utm_source=youtube&utm_medium=video&utm_campaign=[slug]

Help: https://kahana.io/support
Blog: https://about.kahana.io/blog

#Kahana #AuraLibrary`
const EXPLODING_TOPICS_URL = 'https://explodingtopics.com/'
const GOOGLE_TRENDS_URL = 'https://trends.google.com/trends/'
const UTM_LINK_TEMPLATE = `https://kahana.io/?utm_source=[channel]&utm_medium=[medium]&utm_campaign=[slug]

Examples
YouTube: utm_source=youtube&utm_medium=video&utm_campaign=[slug]
Instagram: utm_source=instagram&utm_medium=social&utm_campaign=[slug]
LinkedIn: utm_source=linkedin&utm_medium=social&utm_campaign=[slug]
X: utm_source=x&utm_medium=social&utm_campaign=[slug]
TikTok: utm_source=tiktok&utm_medium=social&utm_campaign=[slug]
Blog CTA: utm_source=blog&utm_medium=content&utm_campaign=[slug]
Press / coverage CTA: utm_source=press&utm_medium=referral&utm_campaign=[outlet-slug]`
const PR_PITCH_TEMPLATE = `Hi [Name],

I'm [YOUR NAME] at Kahana (AKA "The Aura Library"), a digital library and book/video club platform.

[One-sentence scoop: what happened, why it matters now, who it is for.]

You recently covered [their article or beat]. This is a fit because [one specific reason tied to that beat].

Happy to share a short demo, a founder quote, or product screens if useful: https://kahana.io/?utm_source=press&utm_medium=referral&utm_campaign=[outlet-slug]

Best,
[YOUR NAME]`
const CREATOR_OUTREACH_EMAIL_TEMPLATE = `Hi [First Name],

[One or two sentences that are only true of this creator's work. Name a video, series, or post. Do not write "I love your content."]

I'm [YOUR NAME] at Kahana (AKA "The Aura Library"), a digital library and book/video club platform. Creators host hubs of their work, run clubs around them, and get discovered through Aura (a daily recognition signal). Kahana sits alongside the platforms you already post on; it is not a replacement for TikTok, Instagram, or YouTube.

What Kahana is: https://about.kahana.io/?utm_source=email&utm_medium=creator_outreach&utm_campaign=collab
The product: https://kahana.io/?utm_source=email&utm_medium=creator_outreach&utm_campaign=collab

Creators already have hubs live on Kahana, including Amy Wang’s The Ultimate Guide to getting Internship/Research Opportunities (https://kahana.io/hub/UMKtgp76MN1MvZuD6p7W) [and a second live hub if Marketing Lead named one].

Here is a short demo of how a hub looks: [current YouTube demo URL]

If we collaborate, we white-glove the hub with you. You tell us your vision. You create a Kahana account, start a hub, and invite our team as collaborators. We migrate your content and build the hub privately. You review it. When it matches what you wanted, you publish it to the library. Then you can add it to your link in bio or Linktree and let your audience know.

As part of the collab we also give you a complimentary Growth plan (large files and unlimited hubs), a success story on our blog and official social (only with your say-so), and featured placement in the library, including featured collections.

If you are open to it, grab a time here: [calendar URL]

Best,
[YOUR NAME]`
const CREATOR_OUTREACH_DM_TEMPLATE = `Collab?

[One or two sentences only true of this creator's work.]

I'm [YOUR NAME] at Kahana (AKA "The Aura Library"): a digital library and book/video club platform. Aura is how work gets discovered. We sit alongside TikTok, Instagram, and YouTube; we are not a replacement.

Story: https://about.kahana.io/?utm_source=[instagram/tiktok/youtube]&utm_medium=dm&utm_campaign=collab
Product: https://kahana.io/?utm_source=[instagram/tiktok/youtube]&utm_medium=dm&utm_campaign=collab
Live hubs: Amy Wang — The Ultimate Guide to getting Internship/Research Opportunities (https://kahana.io/hub/UMKtgp76MN1MvZuD6p7W)
Demo: [current YouTube demo URL]

If we collab: you share the vision, make a Kahana account, start a hub, and invite us as collaborators. We migrate content and build it privately. You review, then publish it to the library and put it in your link in bio / Linktree.

Collab partners also get a complimentary Growth plan (large files, unlimited hubs), a success story on our blog and social if you want it, and featured library placement (including featured collections).

If you are open: [calendar URL]`
const POST_COLLAB_FOLLOWUP_TEMPLATE = `Hi [First Name],

Your hub [Title] has been live on Kahana for [N days / weeks]. Here is what we see on the hub today: [views] views, [purchasers] purchases (or “free hub / no purchases yet”), and [anything else true: Aura, files, Linktree traffic you can actually source].

If those numbers look off, or you want help with another hub, a club, a bio link, or a featured placement we can actually give, reply and we will help.

We are always ready and happy to collaborate this way again: add content, brainstorm, and build hubs with you. If you ever want to do it again, we would love to.

We also run a small Kahana club for creators we collaborate with, so people can meet each other. Opt in and we will invite you. We will not CC your email to anyone else without asking.

Best,
[YOUR NAME]`
const POST_COLLAB_INTRO_TEMPLATE = `Hi [Name A] and [Name B],

You both have hubs on Kahana and asked to meet other collab creators. [One sentence on why this intro: same beat, complementary audience, or a club they both opted into.]

[Name A]: [hub title + URL]
[Name B]: [hub title + URL]

I will leave you two to it. If a three-way call would help, grab a time here: [calendar URL]

Best,
[YOUR NAME]`
const CREATOR_COLLAB_CALL_TALKING_POINTS = `Before you join
- Open their row. Know the Acknowledgment you sent and what they replied.
- Have the current demo and Amy Wang’s hub ready to screen-share.
- Know the offer: white-glove hub, complimentary Growth plan, permissioned success story, featured placement.

On the call
1. Listen first. What is point A: what they make, who it is for, what they want a hub to do.
2. Share what we can do. Kahana (AKA "The Aura Library") sits alongside TikTok, Instagram, and YouTube. Aura is how work gets discovered. We white-glove the hub: they create an account, start a hub, invite us as collaborators. We build privately. They review, then publish to the library.
3. If they only do paid collabs or want upfront payment: ask their rates and what they have in mind for a collab in general, paid or not. Write it on the row. If they require payment, we do not proceed now. We may revisit later.
4. If they are in without a creator fee: help them sign up, create the hub, and invite Kahana as collaborators. Stay with them from point A to point B (a hub on the library, free or paid). Listen. Be helpful. Do not rush publish if the hub is not ready.
5. Why we do not pay a collab fee: we are helping them create a revenue-generating asset that can live on the library. Creators have earned money this way, including over $20K at times. Do not promise that number to this person.

After
- Same-day Notes: vision, paid-collab screen (rates / parked / in), account, hub URL even if private, next step.
- If the hub is public: SOP 18.`

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
          'Scope includes strategy, market and competitor research, content and blogs, SEO, campaigns, creator partnerships, third-party PR, retargeting, analytics, and campaign reporting.',
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
          {
            text: 'For search topics, run keyword research in SOP 12 (Exploding Topics, Google Trends, suggested and related searches). File a primary keyword plus secondaries in the brief before you draft.',
            href: '/sops/seo',
            hrefLabel: 'SOP 12: SEO',
          },
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
          {
            text: 'Prospecting (TikTok, Instagram, YouTube → creator database → contact) is SOP 15. The collab email (Apps Script from the same sheet) is SOP 16. Do not pitch a creator who is not in the database.',
            href: '/sops/creator-prospecting',
            hrefLabel: 'SOP 15: Creator Prospecting',
          },
          {
            text: 'Send Collab? from the creator database (email via Apps Script, or Instagram / TikTok / YouTube DM when that is the path they published). First Name and Acknowledgment still required.',
            href: '/sops/creator-outreach',
            hrefLabel: 'SOP 16: Creator Outreach',
          },
          {
            text: 'The booked call is SOP 17 (share the offer, listen, help them to a hub on the library). We do not pay a collab fee up front.',
            href: '/sops/creator-collab-calls',
            hrefLabel: 'SOP 17: Creator Collab Calls',
          },
          {
            text: 'After the hub is public, monitor results and check in on SOP 18 (hub views and payments, how else we can help, opt-in intros into a collab-creators club).',
            href: '/sops/post-collab-followups',
            hrefLabel: 'SOP 18: Post-Collab Follow-ups',
          },
        ],
      },
      {
        id: 'measure',
        title: 'Step 6 — Measure performance',
        steps: [
          'Track new and returning users, traffic, engagement, conversion, campaign performance, acquisition source, and content performance. Prefer Mixpanel product events over vanity impressions.',
          {
            text: 'Measure search in Google Search Console (impressions and clicks), social in each platform’s analytics section, and sign-up source in Mixpanel (UTMs plus initial referring domain). SOP 12 is the playbook.',
            href: '/sops/seo',
            hrefLabel: 'SOP 12: SEO',
          },
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
          'Then Deploy → Monitor → Validate → Document. Staging (heroku-beta / curio-beta) before product prod (heroku-alpha) unless the change is docs-only. Marketing site (kahana-public) is SOP 13: Adam or an engineering manager deploys after Linear In Review and quality review. Never push kahana-web to kahana-public.',
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
          {
            text: 'Day-to-day inbox, lifecycle mail, NPS/PMF, and Resend / Mixpanel checks are SOP 19. This playbook is priority and escalation language.',
            href: '/sops/lifecycle-emails-and-tickets',
            hrefLabel: 'SOP 19: Lifecycle Emails and Tickets',
          },
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
            href: '/sops/lifecycle-emails-and-tickets',
            hrefLabel: 'SOP 19: Lifecycle Emails and Tickets',
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
  when: 'Per content calendar, after a ship on the Linear board, after a success story, or when a landscape comparison would help a creator or viewer choose a stack.',
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
    'linear',
    'shipped',
  ],
  notes: [
    'Completed Linear issues (Done) are inputs for new posts, same as for YouTube and official social.',
    'Ideal blogs compare and educate. Show how Kahana works with YouTube, Discord, Substack, Patreon, Teachable, Goodreads, and the rest of the landscape, not as a silent replacement.',
    'SEO bar: no em dashes, proofread before anyone else sees it, and include source links. A YouTube video embedded in the post is a plus.',
    'The live blog URL should appear in the sitemap. Update the sitemap and request indexing in Google Search Console (SOP 12) if you want to expedite SEO.',
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
        {
          text: 'Check the Linear board for features and updates that are completed (Done). Those ships are inputs for new blogs, YouTube videos (SOP 11), and official social posts (SOP 8). Walk the live product before you write.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
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
          text: 'File raw inputs so blogs are not invented from memory: Linear Done issues, ships, testimonials, CS stories. Customer-named stories need permission before they go public.',
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
        'End with a tandem flow the reader can copy this week, plus a CTA to kahana.io (Library, a relevant hub, or sign-up) with UTM parameters so Mixpanel can attribute sign-ups (SOP 12).',
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
          text: 'Form a keyword cluster before you lock the title: one primary keyword plus secondaries from Exploding Topics, Google Trends, and Google/YouTube suggested and related searches. SOP 12 is the research playbook. Put the primary in the title and H1; cover secondaries in headings and body. Do not stuff.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          text: 'The live blog URL should appear in the sitemap. After publish, update the sitemap and request indexing in Google Search Console if you want to expedite SEO.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
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
          href: '/sops/creating-youtube-videos',
          hrefLabel: 'SOP 11: Creating YouTube Videos',
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
          text: 'Path A: contribute directly. Request tools access and say you will contribute to website/code (GitHub email). Edit kahana-homepage-public, not kahana-web, and never deploy to kahana-public from the product app. SOP 13 is the ship path (Linear card, local test, In Review, Adam or EM deploys).',
          href: TOOLS_ACCESS_TALLY_URL,
          hrefLabel: 'Get access to tools and data',
        },
        {
          text: 'Follow SOP 13 for the homepage/blog repo, Linear tracking, local preview, quality review, and Heroku deploy.',
          href: '/sops/marketing-website',
          hrefLabel: 'SOP 13: Updating the Marketing Website',
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
          text: 'Confirm the new post is in the sitemap. Update the sitemap if it is missing, then submit the sitemap and request indexing in Google Search Console (SOP 12).',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          text: 'Promote on LinkedIn, Instagram, newsletter, and Slack for teammate engagement. Category 2 LinkedIn posters can reshare from personal profiles. Official Kahana-account posts go through SOP 8 first.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          text: 'Measure search in Google Search Console (impressions and clicks on the post URL) and sign-ups in Mixpanel (UTM campaign plus initial referring domain). Note what to reuse in the monthly marketing report.',
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
    'The live URL is in the sitemap. Sitemap was updated and indexing was requested in Google Search Console (SOP 12) when you wanted to expedite SEO.',
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
    'linear board',
    'shipped',
  ],
  notes: [
    'Login and password live only in a restricted Google Doc. Request access before opening it. Do not paste credentials into Slack, Linear, email, screenshots, or this data room.',
    'Completed Linear issues (Done) are inputs for what to post. Access is not a topic list.',
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
      id: 'inputs',
      title: 'Choose what to post',
      intro:
        'Official posts should come from something that actually shipped or a real audience question, not a blank calendar slot.',
      steps: [
        {
          id: 'social-linear',
          text: 'Check the Linear board for features and updates that are completed (Done). Those ships are inputs for new official posts, blogs (SOP 5), and YouTube videos (SOP 11). Confirm the UI is live before you announce it.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'social-keywords',
          text: 'If the post is built around a topic (not only a ship), pull a keyword cluster from SOP 12 so the caption and on-screen text match how people search.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
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
          id: 'social-utm',
          text: 'Any kahana.io link in the caption, bio, or sticker gets UTM parameters (source = this channel, medium = social, campaign = post slug) so Mixpanel can attribute new sign-ups. SOP 12 has the template.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
          template: UTM_LINK_TEMPLATE,
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
          text: 'YouTube uploads to @kahanaHQ still follow SOP 11 after this gate (Screen Studio, thumbnail, title/description/timestamps, then this SOP for channel access).',
          href: '/sops/creating-youtube-videos',
          hrefLabel: 'SOP 11: Creating YouTube Videos',
        },
        {
          id: 'social-blogs',
          text: 'If the post is promoting a blog, the article itself still ships through SOP 5. This SOP is only the official social post.',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
        {
          id: 'social-pr',
          text: 'If the post is amplifying third-party coverage, the pitch and logging still follow SOP 14. This SOP is only the official social post.',
          href: '/sops/pr-news',
          hrefLabel: 'SOP 14: Third-Party News and PR',
        },
      ],
    },
    {
      id: 'measure',
      title: 'Measure after you post',
      intro:
        'Channel analytics tell you if the post was seen. Mixpanel tells you if anyone signed up.',
      steps: [
        {
          id: 'social-native-analytics',
          text: 'Open the analytics section of the platform you posted on (YouTube Studio, Instagram Insights, LinkedIn Page analytics, X Analytics, TikTok Analytics). Note impressions, clicks or profile visits, and anything worth repeating.',
        },
        {
          id: 'social-mixpanel',
          text: 'In Mixpanel, check new sign-ups against this campaign’s UTM and the initial referring domain. A spike in youtube.com or linkedin.com with no matching UTM means a link went out untagged.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
      ],
    },
  ],
  doneWhen: [
    'Access was requested and granted; credentials were used from the restricted doc only (never pasted elsewhere).',
    'The post was brand-checked (SOP 6), proofread, and not raw AI output.',
    'A marketing design was attached in Linear and a marketing manager approved quality review.',
    'Only then was the post scheduled or published from the official Kahana account.',
    'kahana.io links in the post used UTM parameters. Native analytics and Mixpanel (referring domain / UTM) were checked after publish.',
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
          href: '/sops/creating-youtube-videos',
          hrefLabel: 'SOP 11: Creating YouTube Videos',
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

export const CREATING_YOUTUBE_VIDEOS_ALIASES = {
  'use-case-feature-videos': 'creating-youtube-videos',
  'youtube-publishing': 'creating-youtube-videos',
}

export const CREATING_YOUTUBE_VIDEOS_SOP = playbook({
  id: 'creating-youtube-videos',
  title: 'Creating YouTube Videos',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Anyone recording Kahana product videos (Marketing, Product, or a teammate with Screen Studio)',
  when: 'After a ship on the Linear board, when a use case or feature needs a walkthrough, when the same question keeps arriving through contact or support, or when a blog or Help Center article has no video.',
  format: 'checklist',
  description:
    'Record Kahana use-case, feature, and tutorial videos in Screen Studio. Cut pauses, add music, make a demo thumbnail, then package title, description, tags, hashtags, and timestamps for YouTube.',
  keywords: [
    'youtube',
    'video',
    'screen studio',
    'use case',
    'feature',
    'tutorial',
    'thumbnail',
    'demo',
    'rashmi',
    'kahana hq',
    'linear',
    'shipped',
  ],
  notes: [
    'Screen Studio is the capture tool. Slack Adam Kershner to request access. Do not buy a license on your own.',
    'Write an outline of the points you must cover. Do not read a script on camera. The outline is a checklist, not a teleprompter.',
    'YouTube titles, descriptions, tags, and on-screen text follow the same public-copy bar as blogs: no em dashes, proofread, Kahana AKA “The Aura Library,” Aura is the discovery signal.',
    'Official @kahanaHQ login is restricted (SOP 8). If you do not have channel access, zip the finished file and send it to Adam on Slack.',
  ],
  sections: [
    {
      id: 'inputs',
      title: '1. Pick the job from a real input',
      intro:
        'A video earns a slot when it answers a question, walks a use case, or shows a feature that is Done on the Linear board. Do not start from a blank “we should make content” list.',
      steps: [
        {
          id: 'yt-linear',
          text: 'Check the Linear board for features and updates that are completed (Done). Those ships are inputs for new YouTube videos, blogs (SOP 5), and official social posts (SOP 8). Confirm the UI path still exists on production before you record.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'yt-questions',
          text: 'Scan questions from users and customers. Contact and support forms are the first input. Repeat questions (how do I start a club, where does Aura show up, how do I add a YouTube video) are better topics than a feature dump.',
          href: CONTACT_PAGE,
          hrefLabel: 'kahana.io/contact',
        },
        {
          id: 'yt-support',
          text: 'Read open tickets and support threads for the same patterns. If several people asked it, the video should answer it on screen.',
          href: SUPPORT_PAGE,
          hrefLabel: 'kahana.io/support',
        },
        {
          id: 'yt-use-cases',
          text: 'Overview a key use case we are introducing (book club, video club, hub as library, Aura as discovery). Name the user and the job in one sentence before you open Screen Studio.',
        },
        {
          id: 'yt-features',
          text: 'Overview a key feature from a completed Linear issue. Product confirms the UI path still exists. Record on production or a clean staging hub. No secrets, no other users’ PII on screen.',
        },
        {
          id: 'yt-blog-gaps',
          text: 'Scan the blog. Any post without a video is a candidate for an accompanying walkthrough. Embed it after publish (SOP 5).',
          href: KAHANA_ABOUT_BLOG_URL,
          hrefLabel: 'Kahana Blog',
        },
        {
          id: 'yt-help-gaps',
          text: 'Scan the Help Center. Any article without a video is the same opportunity: record the steps in the product, then attach or embed the YouTube link on that doc.',
          href: KAHANA_HELP_CENTER_URL,
          hrefLabel: 'Kahana Help Center',
        },
      ],
    },
    {
      id: 'outline',
      title: '2. Outline the beats (do not read a script)',
      steps: [
        {
          id: 'yt-outline',
          text: 'Write a short outline: hook, the job, the clicks you will show, what success looks like, CTA. Keep it to the points you must cover so you do not ramble or skip the important ones.',
        },
        {
          id: 'yt-no-script',
          text: 'Do not read the outline on camera. Talk to the viewer while you drive the product. If you freeze, pause, then pick up. Pauses get cut in Screen Studio.',
        },
        {
          id: 'yt-together',
          text: 'If another platform is on screen (YouTube, Discord, Substack), say how Kahana is used with it, not instead of it. Kahana is the club and library layer.',
        },
      ],
    },
    {
      id: 'record',
      title: '3. Record in Screen Studio',
      steps: [
        {
          id: 'yt-access',
          text: 'If you do not have Screen Studio, Slack Adam Kershner and request access. Wait for the license. Do not screenshot a teammate’s install or share a login.',
          href: SCREEN_STUDIO_URL,
          hrefLabel: 'Screen Studio',
        },
        {
          id: 'yt-example',
          text: 'Watch a short Kahana example before your first recording so the pacing is clear: product on screen, tight cuts, demo not a slide deck. Rashmi Kadwani’s walkthrough is the bar for a quick feature video.',
          href: FEATURE_VIDEO_EXAMPLE_URL,
          hrefLabel: 'Example (Rashmi Kadwani)',
        },
        {
          id: 'yt-capture',
          text: 'Record the real product. Zoom to the control the viewer must click. Cursor and face cam are fine; slides-only is not. Follow the outline so every promised beat is on tape.',
        },
      ],
    },
    {
      id: 'edit',
      title: '4. Edit: cut pauses, overlay music',
      steps: [
        {
          id: 'yt-pauses',
          text: 'In Screen Studio, remove the dead air: long pauses, “um,” retries, and the stretch while a page loads. The cut should feel like one clean pass.',
        },
        {
          id: 'yt-music',
          text: 'Overlay music in Screen Studio. Keep it under the voice. No lyric bed that fights the walkthrough. Export the master you will upload.',
        },
      ],
    },
    {
      id: 'thumbnail',
      title: '5. Make a demo thumbnail',
      intro:
        'The thumbnail has to say “this is a product demo” before the title loads. A text-only card or a stock photo fails that test.',
      steps: [
        {
          id: 'yt-thumb',
          text: 'Use a person overlay (you, a teammate, or an approved still) or a product screenshot/visual of Kahana. Viewers should recognize the app, not a generic talking-head template.',
        },
        {
          id: 'yt-thumb-brand',
          text: 'Check SOP 6 against type, logo clearspace, and naming. Readable at small size. No em dashes on the thumbnail text.',
          href: '/sops/brand-guidelines',
          hrefLabel: 'SOP 6: Brand Guidelines',
        },
      ],
    },
    {
      id: 'metadata',
      title: '6. Title, description, tags, hashtags, timestamps',
      intro: 'A file is not ready to upload until the YouTube package is written.',
      steps: [
        {
          id: 'yt-title',
          text: 'Write a proper title: the job or feature in plain language (tutorial, use case, or what’s new). No em dashes. Kahana spelled correctly. The viewer should know what they will be able to do.',
        },
        {
          id: 'yt-description',
          text: 'Write the description from the template: one-sentence job, chapter timestamps, kahana.io CTA with UTM (SOP 12), Help and Blog links, hashtags. Proofread. Do not paste raw AI.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
          template: YOUTUBE_DESCRIPTION_TEMPLATE,
        },
        {
          id: 'yt-tags',
          text: 'Add tags and hashtags from a SOP 12 keyword cluster (primary plus secondaries). Match the video. Do not keyword-stuff unrelated terms.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'yt-chapters',
          text: 'Timestamps must match the cut. First chapter at 0:00. Each later stamp is a real beat from the outline, not filler.',
        },
      ],
    },
    {
      id: 'publish',
      title: '7. Review, then upload or hand off',
      steps: [
        {
          id: 'yt-sop8',
          text: 'Official @kahanaHQ access is restricted. Request it through SOP 8 if you will schedule the upload yourself. Brand-check, proofread, and attach the cut plus title/description in Linear for marketing-manager review before you go Public or schedule.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'yt-channel',
          text: 'After approval, schedule or publish on the Kahana HQ channel. Share the link in Slack.',
          href: KAHANA_YOUTUBE_CHANNEL_URL,
          hrefLabel: 'YouTube @kahanaHQ',
        },
        {
          id: 'yt-zip',
          text: 'If you do not have channel access, zip the video (and thumbnail if separate) and send it to Adam Kershner on Slack with the title, description, tags, hashtags, and timestamps. Do not upload to a personal channel as a stand-in for @kahanaHQ.',
        },
        {
          id: 'yt-blog',
          text: 'When the video teaches a workflow, embed it in the matching blog (SOP 5) so watch time stays on YouTube.',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
        {
          id: 'yt-ig',
          text: 'Clip 15–30s for Instagram or LinkedIn if the beat stands alone. Those official posts still go through SOP 8.',
          href: '/sops/instagram-publishing',
          hrefLabel: 'Instagram SOP',
        },
        {
          id: 'yt-measure',
          text: 'After the video is live, check YouTube Studio analytics and Mixpanel (this campaign’s UTM and initial referring domain on new sign-ups). SOP 12 is the measurement playbook.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
      ],
    },
  ],
  doneWhen: [
    'The video came from a real input (a completed Linear issue, support/contact question, use case, feature, or a blog/help article with no video).',
    'It was recorded in Screen Studio, pauses were cut, music was overlaid, and the thumbnail shows a person or a Kahana product visual.',
    'Title, description, tags, hashtags, and timestamps are written and proofread.',
    'SOP 8 gate passed, or Adam has the zip and the metadata to upload on @kahanaHQ.',
  ],
})

export const SEO_ALIASES = {
  'seo-sitemap': 'seo',
  'ai-seo': 'seo',
}

export const SEO_SOP = playbook({
  id: 'seo',
  title: 'SEO',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Marketing, plus Product and Engineering when indexable product pages (hubs, profiles, clubs) change',
  when: 'Before drafting a blog, video, or campaign; after every public website or sitemap change; and on a regular Search Console and Mixpanel pass.',
  format: 'checklist',
  description:
    'Find keyword clusters, ship tagged content, submit sitemaps in Google Search Console, and measure search, social, and Mixpanel sign-up source. Product SEO for hubs, profiles, and clubs is an ongoing effort.',
  keywords: [
    'seo',
    'search console',
    'sitemap',
    'indexing',
    'impressions',
    'clicks',
    'utm',
    'mixpanel',
    'referring domain',
    'exploding topics',
    'google trends',
    'keywords',
    'keyword cluster',
    'ai search',
    'hubs',
    'profiles',
    'clubs',
  ],
  notes: [
    'Google Search Console is the kahana.io domain property. Request access (your Google account invited) from Marketing Lead or Adam. Do not assume you already have it.',
    'UTM parameters on marketing links are how Mixpanel attributes new sign-ups to a video, post, or blog. Untagged links still show a referring domain, but not which asset.',
    'Product SEO (hubs, user profiles, clubs in Google and AI search) is in progress with Product and Engineering. A blog sitemap submit does not finish that work.',
  ],
  sections: [
    {
      id: 'access',
      title: '1. Get Search Console access',
      intro:
        'Search Console is where we see how Google sees kahana.io: queries, impressions, clicks, coverage, and indexing requests.',
      steps: [
        {
          id: 'seo-gsc-access',
          text: 'Open Google Search Console on the kahana.io domain property (sc-domain:kahana.io). If you cannot see the property, ask Marketing Lead or Adam to invite your Google account. Use the tools form first if you still lack Kahana analytics access.',
          href: GOOGLE_SEARCH_CONSOLE_URL,
          hrefLabel: 'Google Search Console (kahana.io)',
        },
        {
          id: 'seo-tools',
          text: 'Confirm Mixpanel access as well. Search Console is discovery. Mixpanel is whether those visitors signed up.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
      ],
    },
    {
      id: 'keywords',
      title: '2. Build a keyword cluster',
      intro:
        'Pick topics people already search, with enough traffic and room to rank. Then group them: one primary keyword for the page or video, plus secondaries you actually cover.',
      steps: [
        {
          id: 'seo-exploding',
          text: 'In Exploding Topics, look for Kahana-relevant topics (book clubs, digital libraries, creator communities, memberships) with high search volume and lower competition or still-rising growth. Skip random consumer fads that we do not serve.',
          href: EXPLODING_TOPICS_URL,
          hrefLabel: 'Exploding Topics',
        },
        {
          id: 'seo-trends',
          text: 'Confirm interest in Google Trends. Check the time range, related queries, and whether the topic is seasonal or steadily rising. A one-week spike is not a cluster.',
          href: GOOGLE_TRENDS_URL,
          hrefLabel: 'Google Trends',
        },
        {
          id: 'seo-suggested',
          text: 'Type the seed into Google and YouTube search. Capture autocomplete (suggested searches) and the related-searches block. Those phrases are how people actually query, not how we nickname the feature internally.',
        },
        {
          id: 'seo-cluster',
          text: 'Form the cluster: one primary keyword (the job of the page or video) and a short list of secondaries (related searches you will cover in headings, description, tags, or body). File primary + secondaries in the content brief before draft.',
        },
        {
          id: 'seo-use-cluster',
          text: 'Use the cluster on the live asset. Primary goes in the title and H1 (or YouTube title). Secondaries go in headings, description, tags, and body. No stuffing, no unrelated terms. Public copy still follows SOP 6 (no em dashes, Kahana AKA “The Aura Library”).',
          href: '/sops/brand-guidelines',
          hrefLabel: 'SOP 6: Brand Guidelines',
        },
      ],
    },
    {
      id: 'utm',
      title: '3. Put UTM parameters on marketing links',
      intro:
        'Every public kahana.io CTA from content should be tagged so Mixpanel can attribute new signed-up users to the source.',
      steps: [
        {
          id: 'seo-utm',
          text: 'Add utm_source (channel), utm_medium (video, social, content, email), and utm_campaign (slug for this asset). Use the same campaign slug in the Linear issue and the monthly report.',
          template: UTM_LINK_TEMPLATE,
        },
        {
          id: 'seo-utm-channels',
          text: 'YouTube descriptions, blog CTAs, official social captions, link stickers, and creator/PR links we control all get UTMs. SOP 5, SOP 8, SOP 11, and SOP 14 call this out at publish time.',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
      ],
    },
    {
      id: 'sitemap',
      title: '4. After a website update: sitemap and request indexing',
      intro:
        'Google will not guess that a new or changed URL is live. Tell it with the sitemap, then request indexing for the URLs that matter.',
      steps: [
        {
          id: 'seo-site-repo',
          text: 'Marketing-site and blog changes ship from kahana-homepage-public, not kahana-web. Follow SOP 13 so the live URL is actually the one you are indexing.',
          href: '/sops/marketing-website',
          hrefLabel: 'SOP 13: Updating the Marketing Website',
        },
        {
          id: 'seo-sitemap-update',
          text: 'Regenerate or update the sitemap so every live public URL is listed (including new blog posts). Titles and meta descriptions must match the live page. No keyword stuffing.',
        },
        {
          id: 'seo-gsc-sitemap',
          text: 'In Google Search Console, add or resubmit the sitemap for the kahana.io property. Then open URL Inspection on the new or changed URLs and request indexing (Google’s review of those pages).',
          href: GOOGLE_SEARCH_CONSOLE_URL,
          hrefLabel: 'Google Search Console (kahana.io)',
        },
        {
          id: 'seo-coverage',
          text: 'On a regular pass, check coverage and Performance. Unexplained drops on pages we still publish are a bug: fix the URL or the sitemap, then request indexing again. Do not ignore “Excluded” URLs we meant to rank.',
        },
      ],
    },
    {
      id: 'measure',
      title: '5. Measure search, social, and sign-ups',
      intro:
        'Impressions are not sign-ups. Use each tool for what it actually sees.',
      steps: [
        {
          id: 'seo-gsc-perf',
          text: 'In Search Console Performance, track impressions and clicks (and queries) for kahana.io and for the URLs you shipped. This is how search is working, not how social is working.',
          href: GOOGLE_SEARCH_CONSOLE_URL,
          hrefLabel: 'Google Search Console (kahana.io)',
        },
        {
          id: 'seo-social-analytics',
          text: 'Track social in each platform’s own analytics section: YouTube Studio, Instagram Insights, LinkedIn Page analytics, X Analytics, TikTok Analytics. Note reach, clicks or profile visits, and what to repeat. Official posts still go through SOP 8.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'seo-mixpanel-ref',
          text: 'In Mixpanel, look at new users who sign up and their initial referring domain (where the browser came from: google.com, youtube.com, linkedin.com, and so on). Pair that with UTM source / medium / campaign when the link was tagged. Acquisition boards on How We Work list the signup and channel views.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
        {
          id: 'seo-how-we-work',
          text: 'If you are new to Mixpanel boards, start with Acquisition & onboarding on How We Work, then filter to production.',
          href: '/how-we-work#mixpanel-acquisition',
          hrefLabel: 'How We Work — Mixpanel acquisition',
        },
      ],
    },
    {
      id: 'product-seo',
      title: '6. Product SEO (ongoing)',
      intro:
        'Marketing-site SEO is not the whole job. Hubs, user profiles, and clubs should be discoverable in search rankings and in AI search. That work is in progress.',
      steps: [
        {
          id: 'seo-product-surfaces',
          text: 'Treat public hubs, user profiles, and clubs as indexable product surfaces: real titles, descriptions, and URLs a crawler and an answer engine can cite. Private or Restricted clubs stay out of search on purpose (SOP 2 visibility).',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
        },
        {
          id: 'seo-ai',
          text: 'For AI search and answer engines, keep durable facts in plain language on About and Story (what Kahana is, who it is for, what Aura is). Names stay consistent: Kahana, Aura Library. Do not invent a third product name. After a flagship change, search a few answer surfaces for “Kahana library” and fix hallucinations with page updates, not comment spam.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        {
          id: 'seo-product-linear',
          text: 'Product SEO is an ongoing Product + Engineering effort (crawlable pages, metadata, sitemap coverage for app URLs). File Linear issues for gaps. Do not mark this SOP done because a blog was indexed.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
      ],
    },
  ],
  doneWhen: [
    'You can open the kahana.io property in Google Search Console.',
    'The asset has a filed keyword cluster (primary plus secondaries) from Exploding Topics, Google Trends, and Google/YouTube suggested and related searches.',
    'Public kahana.io CTAs use UTM parameters.',
    'After a website update, the sitemap was updated and indexing was requested in Search Console.',
    'Measurement used Search Console (impressions and clicks), native social analytics, and Mixpanel (UTM plus initial referring domain on new sign-ups).',
    'Product SEO gaps on hubs, profiles, or clubs were filed in Linear rather than assumed finished.',
  ],
})

export const MARKETING_WEBSITE_SOP = playbook({
  id: 'marketing-website',
  title: 'Updating the Marketing Website',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Anyone changing kahana.io / about.kahana.io copy, layout, blogs, or landing pages (Marketing, plus Engineering when they deploy)',
  when: 'Any marketing-site enhancement, bug fix, blog publish, or campaign landing change. File the Linear card before you start the work.',
  format: 'checklist',
  description:
    'Change the public marketing site in kahana-homepage-public, track it on a Linear card, test locally, move In Review for quality review, then Adam or an engineering manager deploys to Heroku. Verify on production and mark Complete.',
  keywords: [
    'marketing website',
    'kahana.io',
    'homepage',
    'kahana-homepage-public',
    'kahana-public',
    'github',
    'heroku',
    'linear',
    'in review',
    'deploy',
    'blog',
  ],
  notes: [
    'The marketing site lives in kahana-homepage-public. The product app is kahana-web. Never push kahana-web to the Heroku app kahana-public. That took the marketing site down in July 2026.',
    'You do not deploy to production. Adam or an engineering manager deploys on Heroku after quality review.',
    'Every update needs a Linear card. Ideas and bugs can sit in the Backlog until someone picks them up.',
  ],
  sections: [
    {
      id: 'access',
      title: '1. Get GitHub access and open the repo',
      intro:
        'You cannot edit the live site from Slack or a Google Doc. The source is GitHub.',
      steps: [
        {
          id: 'mw-tools',
          text: 'Request GitHub access on the tools form. Say you will contribute to website/code and give the GitHub email you use. Do not assume you have access until the Kahana-LLC invite arrives.',
          href: TOOLS_ACCESS_TALLY_URL,
          hrefLabel: 'Get access to tools and data',
        },
        {
          id: 'mw-repo',
          text: 'Open and clone kahana-homepage-public. This is the marketing website (kahana.io / about.kahana.io). Do not clone kahana-web for this work.',
          href: MARKETING_SITE_REPO_URL,
          hrefLabel: 'github.com/Kahana-LLC/kahana-homepage-public',
        },
        {
          id: 'mw-not-product',
          text: 'Product frontend changes stay in kahana-web and follow the Website Code SOP. Mixing the two repos, or deploying the product app to kahana-public, is how the marketing site goes down.',
          href: '/sops/website-code',
          hrefLabel: 'Website Code (product app)',
        },
      ],
    },
    {
      id: 'linear',
      title: '2. File a Linear card',
      intro:
        'If it is not on the board, it is not tracked. Do not ship a silent GitHub commit.',
      steps: [
        {
          id: 'mw-backlog',
          text: 'Log initial website enhancements and bug fixes in the Linear backlog when you notice them. A backlog card is enough until someone starts the work. Do not wait for a campaign brief to file a broken link or a copy error.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'mw-card',
          text: 'Before you edit code, create or pick up a Linear card for this update. Name the page, the change, and the intended live URL. Link the GitHub branch or PR on the card when you have one.',
        },
        {
          id: 'mw-brand',
          text: 'Public copy still follows SOP 6 (Kahana AKA “The Aura Library,” no em dashes, together-not-instead). Blog posts still follow SOP 5. UTMs and sitemaps still follow SOP 12 after the URL is live.',
          href: '/sops/brand-guidelines',
          hrefLabel: 'SOP 6: Brand Guidelines',
        },
      ],
    },
    {
      id: 'local',
      title: '3. Build and test locally',
      intro:
        'Local preview is the quality gate before anyone looks at production.',
      steps: [
        {
          id: 'mw-edit',
          text: 'Make the change on a branch in kahana-homepage-public. Keep the product app untouched unless the brief required both.',
        },
        {
          id: 'mw-local',
          text: 'Run the site locally and walk the changed pages the way a visitor would: home, the updated landing or blog, links, mobile width, and any CTA to kahana.io or the library. Confirm UTM’d links if this is a campaign (SOP 12).',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'mw-push-github',
          text: 'Push the branch to GitHub so the reviewer can see the diff. Pushing to GitHub is not a production deploy. Do not push to Heroku yourself.',
          href: MARKETING_SITE_REPO_URL,
          hrefLabel: 'kahana-homepage-public on GitHub',
        },
      ],
    },
    {
      id: 'review',
      title: '4. In Review, then quality review',
      intro:
        'Production is closed until the card is In Review and quality review has passed.',
      steps: [
        {
          id: 'mw-in-review',
          text: 'After local testing passes, move the Linear card to In Review. Attach what to check (URLs, screenshots, the GitHub PR). Do not ask for a Heroku deploy while the card is still In Progress or Backlog.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'mw-qr',
          text: 'Wait for quality review on that card (copy, brand, links, and that the change is in the marketing repo). If the reviewer requests fixes, update locally, re-test, and re-attach. Do not skip this step to “just get it live.”',
        },
      ],
    },
    {
      id: 'deploy',
      title: '5. Production deploy (Adam or engineering manager)',
      intro:
        'Heroku production is a restricted step. Contributors stop at In Review.',
      steps: [
        {
          id: 'mw-heroku',
          text: 'After quality review passes, Adam or an engineering manager deploys the update to production on Heroku (marketing app kahana-public). Only they run that deploy. Do not deploy from kahana-web.',
        },
        {
          id: 'mw-prod-verify',
          text: 'When the deploy is done, verify on the live site: the changed URLs, CTAs, and that the product app is untouched. Hard-refresh. Check mobile. If something is wrong, the deployer rolls back or hotfixes. Do not mark Complete on a broken page.',
          href: KAHANA_SITE_URL,
          hrefLabel: 'kahana.io',
        },
        {
          id: 'mw-complete',
          text: 'After it is tested and verified in production, move the Linear card to Complete. Drop the live URL in Slack if teammates need to see it.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'mw-seo',
          text: 'If URLs, titles, or indexable pages changed, update the sitemap and request indexing in Google Search Console (SOP 12).',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
      ],
    },
  ],
  doneWhen: [
    'The work was tracked on a Linear card (backlog for ideas and bugs; a card before code for the change you shipped).',
    'Edits were in kahana-homepage-public, tested locally, and never pushed from kahana-web to kahana-public.',
    'The card was In Review and passed quality review before production.',
    'Adam or an engineering manager deployed to Heroku. Production was verified. The card is Complete.',
  ],
})

export const PR_NEWS_SOP = playbook({
  id: 'pr-news',
  title: 'Third-Party News and PR',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Anyone pitching Kahana to journalists, tech blogs, or news outlets',
  when: 'When there is a real scoop (a ship, launch, or permissioned story) worth offering for coverage, and when inbound press arrives.',
  format: 'checklist',
  description:
    'Work the media-member database. Prepare a scoop or story, pitch the journalists whose beat actually matches, log every send, and archive coverage. This is third-party outlets, not Kahana-owned channels.',
  keywords: [
    'pr',
    'press',
    'news',
    'journalist',
    'media',
    'scoop',
    'pitch',
    'coverage',
    'tech blog',
    'outlet',
  ],
  notes: [
    'The PR / News spreadsheet is the database of media members who write for tech blogs and news outlets. Do not keep a private shadow list.',
    'We prepare scoops and stories for their consideration. We do not buy the article, and we do not blast the whole sheet with the same paste.',
    'This is not SOP 8 (official Kahana accounts), SOP 5 (our blog), SOP 9 (authors), or SOP 15–16 (creators). Those people are different lists.',
  ],
  sections: [
    {
      id: 'database',
      title: '1. Open the media database',
      intro:
        'If you cannot see the sheet, you do not pitch yet. Access first, then a named row.',
      steps: [
        {
          id: 'pr-sheet',
          text: 'Open the PR / News spreadsheet. This is the living database: outlet, journalist or writer, beat, contact, what we sent, status, and coverage URL. Request access from Marketing Lead or Adam if the link is closed to you.',
          href: PR_NEWS_SHEET,
          hrefLabel: 'PR / News spreadsheet',
        },
        {
          id: 'pr-claim',
          text: 'Claim or add the row before you send. If someone already has that journalist as Pending, do not double-pitch the same scoop. Fill the sheet’s columns (outlet, contact, scoop, date, status) rather than inventing a second tracker.',
        },
      ],
    },
    {
      id: 'scoop',
      title: '2. Prepare the scoop',
      intro:
        'A pitch is “here is a story you might want to cover,” not “please write about Kahana.”',
      steps: [
        {
          id: 'pr-linear',
          text: 'Start from something real. Completed Linear issues (Done), a launch, or a permissioned customer/club story are inputs. Confirm the product or fact is live before you offer it as news.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'pr-story',
          text: 'Write the scoop in one sentence: what happened, why it matters now, who it is for. Then two or three proof points a reporter can check (product URL, quote, metric Legal will stand behind). Kahana AKA “The Aura Library.” Aura is the discovery signal, not the product name.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        {
          id: 'pr-legal',
          text: 'Legal reviews claims, fundraising, user counts, and named customers before the pitch goes out. If you cannot source the number, cut it. Customer-named stories need permission, same as blogs.',
        },
      ],
    },
    {
      id: 'match',
      title: '3. Match journalists to the beat',
      intro:
        'The database is for targeting, not a CC list.',
      steps: [
        {
          id: 'pr-beat',
          text: 'Pick people who actually write about this topic (libraries, book clubs, creator tools, startups, the specific launch). Read one recent piece. If the beat is a mismatch, skip them.',
          href: PR_NEWS_SHEET,
          hrefLabel: 'PR / News spreadsheet',
        },
        {
          id: 'pr-not-authors',
          text: 'Authors and publishers we want on Kahana as a paid book go through SOP 9. Creators for collabs go through SOP 15 (database) then SOP 16 (Collab? email). Do not mix those rows into this pitch.',
          href: '/sops/creator-outreach',
          hrefLabel: 'SOP 16: Creator Outreach',
        },
      ],
    },
    {
      id: 'pitch',
      title: '4. Personalize and send',
      intro:
        'Use the template. Do not send it raw. A mail-merge with leftover brackets does not go out.',
      steps: [
        {
          id: 'pr-template',
          text: 'Tailor the pitch: their name, their beat or a recent article, the one-sentence scoop, and a kahana.io CTA with press UTM (SOP 12). No em dashes. Proofread as a human. AI can draft a portion; you rewrite the why-this-beat line.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
          template: PR_PITCH_TEMPLATE,
        },
        {
          id: 'pr-send-log',
          text: 'Send from a real Kahana person, not a no-reply. Log date, channel, which scoop, and status on the sheet the same day. One journalist, one thread. Do not attach a 20-page deck unless they asked.',
          href: PR_NEWS_SHEET,
          hrefLabel: 'PR / News spreadsheet',
        },
        {
          id: 'pr-followup',
          text: 'If there is no reply, one short follow-up is enough. Then mark Pending or No. Do not chase. Inbound press: log the request, get Legal/founder on facts, answer on their deadline.',
        },
      ],
    },
    {
      id: 'coverage',
      title: '5. When they cover Kahana',
      intro:
        'Coverage is theirs. We archive it, share it, and measure what we can control.',
      steps: [
        {
          id: 'pr-archive',
          text: 'Archive the live URL on the spreadsheet row. Share it internally in Slack. Add it to the monthly marketing report. Thank the journalist once. Do not argue in the comments.',
          href: PR_NEWS_SHEET,
          hrefLabel: 'PR / News spreadsheet',
        },
        {
          id: 'pr-utm',
          text: 'Where we control a CTA (our quote follow-up, a link we give them, or how we share the piece), use UTM parameters so Mixpanel can attribute sign-ups. SOP 12 is the playbook. Do not demand they use our UTM in their article.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'pr-social',
          text: 'Official Kahana posts that amplify the article still go through SOP 8 (access, brand, Linear review). Personal teammate shares can go out after the URL is logged.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
      ],
    },
  ],
  doneWhen: [
    'The scoop was real (live product or permissioned story), Legal-cleared where it needed to be, and matched to journalists on the PR / News sheet.',
    'Every send is logged (who, outlet, date, status). No shadow list.',
    'Live coverage has an archived URL, an internal share, a monthly-report note, and UTM’d CTAs where we control the link.',
  ],
})

export const CREATOR_PROSPECTING_ALIASES = {
  'creator-collaborations-outreach': 'creator-prospecting',
}

export const CREATOR_PROSPECTING_SOP = playbook({
  id: 'creator-prospecting',
  title: 'Creator Prospecting',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Anyone building the creator pipeline (profiles and contact, before SOP 16 sends)',
  when: 'Ongoing. Log the profile in the creator database before you hunt email. Do not pitch a creator who has no row.',
  format: 'checklist',
  description:
    'Find creators on TikTok, Instagram, YouTube, and similar platforms. Add the profile to the creator database (Influencer & Creator Profiles), then find a brand-ready contact (email, form, link, or a published DM path). A handle plus @gmail.com can be checked in Google Chat. The Collab? pitch (email or DM) is SOP 16 on the same row.',
  keywords: [
    'creator',
    'prospecting',
    'influencer',
    'database',
    'tiktok',
    'instagram',
    'youtube',
    'email',
    'gmail',
    'google chat',
    'outreach',
    'brands',
  ],
  notes: [
    'The creator database is the Google Sheet Influencer & Creator Profiles. Columns: Instagram Link, YouTube Link, TikTok Link, Other Link, Email, Notes. Put each URL in the matching column. Do not dump everything into column A.',
    'Creators usually want brand outreach through a published contact (email for brands, business inbox, media kit, or Linktree). That beats a guessed Gmail.',
    'handle@gmail.com is a fallback. Google Chat only tells you the address might be a real Google account. It is not permission to pitch in Chat, and it is not proof it is their brand inbox.',
    'Authors and publishers (paid book + club) are SOP 9. Journalists are SOP 14. Do not mix lists.',
  ],
  sections: [
    {
      id: 'find',
      title: '1. Find creators on the platforms',
      intro:
        'Prospect where they already post. Kahana-relevant beats first: reading, book clubs, learning, creator community, memberships. Skip vanity follower counts.',
      steps: [
        {
          id: 'cp-platforms',
          text: 'Search TikTok, Instagram, YouTube, and similar platforms for creators whose audience overlaps Kahana (BookTok / Bookstagram, learning clubs, creator-ops). Watch enough to know the beat. Note the profile URL and handle.',
        },
        {
          id: 'cp-qualify',
          text: 'Qualify before you add a pile of rows: real posts, comments that look human, and a topic we might actually collaborate on. A huge following with no overlap is not a prospect.',
        },
      ],
    },
    {
      id: 'sheet',
      title: '2. Add the profile to the creator database',
      intro:
        'If it is not in the database, it is not in the pipeline.',
      steps: [
        {
          id: 'cp-sheet',
          text: 'Open the creator database (Influencer & Creator Profiles). Add a new row. Put profile URLs in the matching columns: Instagram Link, YouTube Link, TikTok Link. Linktree, media kit, or a form goes in Other Link. Beat and why they fit go in Notes. Request access from Marketing Lead or Adam if the link is closed to you. Do not keep a private shadow list.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'cp-not-authors',
          text: 'If the person is an author or publisher you want on Kahana as a paid book and club title, use SOP 9 instead of this database. Journalists and outlets are SOP 14.',
          href: '/sops/author-outreach',
          hrefLabel: 'SOP 9: Author Outreach',
        },
      ],
    },
    {
      id: 'contact',
      title: '3. Get email, contact, or a link',
      intro:
        'Most creators want brands to use the channel they published for that purpose.',
      steps: [
        {
          id: 'cp-bio',
          text: 'Look for a published contact: “email for brands,” business email, media kit, press page, or a link in bio (Linktree, Stan, Beacons). Put the address in Email. Put a form or Linktree in Other Link. Prefer that over any guess.',
        },
        {
          id: 'cp-link',
          text: 'If the only public path is a site or form, use that. Log it in Other Link. Do not scrape private data or buy email lists.',
        },
      ],
    },
    {
      id: 'gmail-chat',
      title: '4. Guess Gmail only if nothing is published, then check Google Chat',
      intro:
        'Sometimes the public handle is also their Gmail. Check it. Do not turn this into a guessing game.',
      steps: [
        {
          id: 'cp-gmail-guess',
          text: 'If there is no published brand contact, take the Instagram, TikTok, or YouTube handle (no @, lowercase) and try handle@gmail.com. One extra try is enough if the handle has extra punctuation you can drop. Then stop. Do not generate a list of variants.',
        },
        {
          id: 'cp-chat',
          text: 'Open Google Chat (Kahana Google account). Start a new chat and paste the guessed email. If Chat finds a person (a valid chat target appears), put the address in Email and note “Gmail guess, Chat match” in Notes. If Chat finds nobody, the guess is probably wrong. Go back to the bio or note Needs research.',
          href: GOOGLE_CHAT_URL,
          hrefLabel: 'Google Chat',
        },
        {
          id: 'cp-chat-not-pitch',
          text: 'Chat is only a check that the address might exist. Do not send the Kahana pitch as a Google Chat message. Do not treat a Chat match as confirmed brand inbox. If a published “email for brands” exists, use that instead of the guess.',
        },
      ],
    },
    {
      id: 'handoff',
      title: '5. Hand off to outreach',
      intro:
        'Prospecting is done when Email or a social/DM path is filled. Sending Collab? (email or DM) is SOP 16 on the same row, not a new list.',
      steps: [
        {
          id: 'cp-log-contact',
          text: 'Confirm Email, a published “DM for collabs” path, or Other Link is filled. Do not put emails in the Instagram or YouTube columns.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'cp-sop16',
          text: 'Open SOP 16. Email rows: First Name, Acknowledgment, Channel = Email, Outreach Status = Ready, then Apps Script. No email, or they asked for DMs: same pitch by hand on Instagram, TikTok, or YouTube from the official Kahana account.',
          href: '/sops/creator-outreach',
          hrefLabel: 'SOP 16: Creator Outreach',
        },
      ],
    },
  ],
  doneWhen: [
    'The creator is a row in the creator database with platform URLs in the right columns. No shadow list.',
    'Contact is in Email or Other Link: a published brand path, or a Gmail guess checked in Google Chat and labeled in Notes. Chat was not used to send the pitch.',
    'Rows with Email or a named social/DM path are handed to SOP 16. Form-only rows (no DM, no Email) stay parked in Notes until there is a channel.',
  ],
})

export const CREATOR_OUTREACH_SOP = playbook({
  id: 'creator-outreach',
  title: 'Creator Outreach',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Anyone sending the Kahana collab pitch (email or official social DM) to creators already in the database',
  when: 'After SOP 15 has Email or a named social/DM path on the row. Batch email when those rows are Ready. Send DMs by hand the same day you would have emailed.',
  format: 'checklist',
  description:
    'Send Collab? from the creator database: Apps Script for email rows, the same pitch by hand for Instagram / TikTok / YouTube DMs when that is the path they published. Offer white-glove hub build, a complimentary Growth plan, a permissioned success story, and featured library placement.',
  keywords: [
    'creator',
    'outreach',
    'collab',
    'email',
    'dm',
    'instagram',
    'tiktok',
    'apps script',
    'gmail',
    'growth plan',
    'white-glove',
    'featured',
    'amy wang',
    'hub',
  ],
  notes: [
    'Same sheet as SOP 15. Channel = Email goes through Apps Script. Channel = Instagram DM, TikTok DM, or YouTube uses the DM template from the official Kahana account (SOP 8 access). Do not DM from a personal intern account unless Marketing Lead named you.',
    'Named proof of a past creator collab: Amy Wang’s hub The Ultimate Guide to getting Internship/Research Opportunities (https://kahana.io/hub/UMKtgp76MN1MvZuD6p7W). YouTube: https://www.youtube.com/@wamyy5. Lead HUB_PROOF with her. Add a second live hub only if Marketing Lead named one you are allowed to cite.',
    'Authors and publishers (paid book + club) are SOP 9. Journalists are SOP 14. A Linktree or form with no DM and no Email is not Ready; pitch that form by hand and log it.',
  ],
  sections: [
    {
      id: 'channel',
      title: '1. Pick email or social/DM',
      intro:
        'Use the channel they published for brands. Email first when they gave one. DMs when they said so, or when there is no Email.',
      steps: [
        {
          id: 'co-sheet',
          text: 'Open the creator database. Confirm this is a creator collab (not an author, not a journalist). Put the address in Email. Put Instagram, TikTok, and YouTube URLs in those columns. Linktree or a form stays in Other Link.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'co-columns',
          text: 'Add outreach columns if they are missing (Kahana menu → Set up): First Name, Acknowledgment, Channel, Outreach Status, Sent At. Channel is Email, Instagram DM, TikTok DM, YouTube, or Form.',
        },
        {
          id: 'co-pick',
          text: 'Channel = Email if Email is filled, unless their bio says “collabs via IG/TikTok DM only.” Then use that DM and leave Email for later. If there is no Email, pick the platform they actually use for brand messages. Do not email and DM the same person on the same day.',
        },
        {
          id: 'co-ready',
          text: 'First Name as they would expect, Acknowledgment of 20+ characters that names a real video, series, or post, Outreach Status = Ready. Skip the row if you cannot write that sentence. Do not mark Ready on Sent, bounced, or unsubscribed rows.',
        },
      ],
    },
    {
      id: 'config',
      title: '2. Fill the Config tab',
      intro:
        'Shared links are edited once per batch, not once per row. DMs use the same demo, hubs, and calendar.',
      steps: [
        {
          id: 'co-sender',
          text: 'On Config, set SENDER_NAME to the person sending. TEST_EMAIL is that inbox for the email preview. REPLY_TO is optional (for example adam@kahana.io). Email sends from Kahana Workspace, not a personal Gmail.',
        },
        {
          id: 'co-demo',
          text: 'Set DEMO_VIDEO to the latest product demo on @kahanaHQ. If nothing newer has shipped, use the current default. Record a new cut in SOP 11 when the walkthrough is stale.',
          href: CREATOR_OUTREACH_DEMO_VIDEO_URL,
          hrefLabel: 'Current demo video',
        },
        {
          id: 'co-youtube',
          text: 'Confirm that URL is still the right cut by checking the channel. Swap Config the same day you upload a newer demo.',
          href: KAHANA_YOUTUBE_CHANNEL_URL,
          hrefLabel: 'Kahana YouTube (@kahanaHQ)',
        },
        {
          id: 'co-calendar',
          text: 'Set CALENDAR_URL to the booking link for this collab conversation (Adam’s Calendly unless Marketing Lead names a different event).',
          href: ADAM_CALENDLY_URL,
          hrefLabel: 'Adam’s Calendly',
        },
        {
          id: 'co-links',
          text: 'Keep ABOUT_URL and SITE_URL with creator_outreach UTMs (SOP 12). For DMs, change utm_source to instagram, tiktok, or youtube and utm_medium=dm.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'co-hubs',
          text: 'Lead HUB_PROOF with Amy Wang (past collab): The Ultimate Guide to getting Internship/Research Opportunities. Add a second public hub only if Marketing Lead named one. The email script will not send while HUB_PROOF still says “replace this”.',
          href: AMY_WANG_HUB_URL,
          hrefLabel: 'Amy Wang’s hub',
        },
        {
          id: 'co-amy-yt',
          text: 'Her YouTube is @wamyy5. Use that if you need a public creator channel next to the hub URL. Do not invent a second named collab.',
          href: AMY_WANG_YOUTUBE_URL,
          hrefLabel: 'Amy Wang on YouTube (@wamyy5)',
        },
      ],
    },
    {
      id: 'script',
      title: '3. Email: install Apps Script and send Ready Email rows',
      intro:
        'The script only emails rows where Channel is Email (or blank) and Outreach Status is Ready. DM rows stay for section 4.',
      steps: [
        {
          id: 'co-install',
          text: 'In the creator database: Extensions → Apps Script. Delete any stub code. Paste the script below. Save (title: Kahana creator outreach). Reload the sheet. You should see a Kahana menu.',
          code: true,
          template: CREATOR_OUTREACH_APPS_SCRIPT,
        },
        {
          id: 'co-setup',
          text: 'Kahana → Set up Config and outreach columns. Authorize Gmail and Sheets when Google asks. Scopes: send email as you, and edit this spreadsheet. Do not add extra APIs.',
        },
        {
          id: 'co-template',
          text: 'This is the email the script sends. Row fields fill First Name and the acknowledgment. Config fills links, hubs, demo, and calendar. A leftover bracket in Acknowledgment blocks that row.',
          template: CREATOR_OUTREACH_EMAIL_TEMPLATE,
        },
        {
          id: 'co-test',
          text: 'Kahana → Send test to me. It uses the first Ready Email row but delivers to TEST_EMAIL. Read it. The creator is not marked Sent.',
        },
        {
          id: 'co-quota',
          text: 'Kahana → Check remaining email quota. About 100/day on consumer Gmail, about 1,500 on Kahana Workspace. Do not run this from a personal account.',
        },
        {
          id: 'co-send',
          text: 'Kahana → Send all Ready rows. Confirm the count. It sends from the signed-in Kahana user, sets Sent, stamps Sent At, and notes the date. Failed rows stay Ready. Do not re-run until you have read the alert.',
        },
      ],
    },
    {
      id: 'dm',
      title: '4. Social/DM: same pitch, official account',
      intro:
        'No Email, or they asked for DMs. Copy the DM template. Do not paste leftover brackets. Do not buy a DM blaster.',
      steps: [
        {
          id: 'co-dm-access',
          text: 'Send from the official Kahana account for that platform (@kahanahq / @KahanaHQ). Get access through SOP 8. Do not DM collab pitches from a personal intern login unless Marketing Lead named that account.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'co-dm-template',
          text: 'Paste the DM template, then fill First Name context, Acknowledgment, hub proof, demo, calendar, and the matching UTM source. Opener is Collab? Keep it one message, not a five-bubble drip.',
          template: CREATOR_OUTREACH_DM_TEMPLATE,
        },
        {
          id: 'co-dm-send',
          text: 'Send on the Channel you logged. If message requests sit unread, try the next platform they actually use, once. Same day, set Outreach Status = Sent, stamp Sent At, and note the platform in Notes. Do not also fire Apps Script on that row.',
        },
      ],
    },
    {
      id: 'yes',
      title: '5. If they say yes or book time',
      intro:
        'The pitch is done. The meeting (and the white-glove) is SOP 17. Do not promise a creator fee in this thread.',
      steps: [
        {
          id: 'co-replies',
          text: 'Watch the sending inbox, REPLY_TO, and the official DMs. Log yes / no / parked / booked and the next step in Notes. One short follow-up is enough unless they asked you to wait.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'co-book',
          text: 'If they said yes but did not book, send Adam’s Calendly (unless Marketing Lead named a different event). If they already booked, put the date on the row.',
          href: ADAM_CALENDLY_URL,
          hrefLabel: 'Adam’s Calendly',
        },
        {
          id: 'co-paid-thread',
          text: 'If they say they only do paid collabs or want upfront payment in the thread, do not agree to pay. Still invite them to the call (or take rates here) and follow SOP 17. Do not ghost the row.',
          href: '/sops/creator-collab-calls',
          hrefLabel: 'SOP 17: Creator Collab Calls',
        },
        {
          id: 'co-sop17',
          text: 'Open SOP 17 for the call itself: listen, share the offer, help them set up an account and a hub, invite us as collaborators. White-glove, Growth plan, story, and featured live there, not in this pitch.',
          href: '/sops/creator-collab-calls',
          hrefLabel: 'SOP 17: Creator Collab Calls',
        },
      ],
    },
  ],
  doneWhen: [
    'Every pitched creator was a Ready row with First Name, a specific Acknowledgment, and a Channel (Email via script, or official DM). Sent At is filled. No shadow list.',
    'The pitch included Kahana links, Amy Wang’s live hub (and a second hub only if named), the current demo, the white-glove hub path, complimentary Growth plan, permissioned story, featured placement, and a calendar link.',
    'A yes or booked call is logged on the row and handed to SOP 17. Do not treat the send as the last step.',
  ],
})

export const CREATOR_COLLAB_CALLS_ALIASES = {
  'collab-calls': 'creator-collab-calls',
  'creator-calls': 'creator-collab-calls',
}

export const CREATOR_COLLAB_CALLS_SOP = playbook({
  id: 'creator-collab-calls',
  title: 'Creator Collab Calls',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Anyone on the booked collab call (usually Marketing Lead or Adam; intern only if named on the calendar)',
  when: 'When they book time from SOP 16 (Adam’s Calendly unless Marketing Lead named a different event). Prep the same day. Log the same day.',
  format: 'checklist',
  description:
    'Run the virtual meeting after they book. Share what we can do and the offer, listen, and help them from point A to a hub on the library (free or paid). Screen paid-collab / upfront-payment requests: get rates, document, do not proceed now. Prioritize creators who want to collab without a creator fee.',
  keywords: [
    'creator',
    'collab',
    'call',
    'calendly',
    'meeting',
    'white-glove',
    'hub',
    'account',
    'collaborator',
    'paid collab',
    'rates',
    'pro bono',
    'growth plan',
  ],
  notes: [
    'Same creator database as SOP 15 and SOP 16. The call lives on the row, not a new list.',
    'Point B is a hub on the library, free or paid. The call is for getting them there. It is not a talent-booking negotiation.',
    'We do not pay creators a collab fee to start. We prioritize people who like Kahana for what it is and see the value in our pro bono hub build. The hub is a revenue-generating asset that can live on the library. Creators have earned money this way, including over $20K at times. Do not promise that number to this person.',
    'If they require upfront payment, log rates and what they had in mind, park the row, and do not proceed now. We may revisit later. Authors stay SOP 9.',
  ],
  sections: [
    {
      id: 'prep',
      title: '1. Prep the same row',
      intro:
        'Walk in knowing who they are and what we already offered. If they skipped the calendar and said yes in the thread, still run this SOP there.',
      steps: [
        {
          id: 'cc-sheet',
          text: 'Open the creator database. Confirm this is a SOP 16 yes or booked call (not an author, not a journalist). Read Acknowledgment, their reply, and any rates already in Notes.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'cc-offer',
          text: 'Have the talking points, current demo, and Amy Wang’s hub ready to screen-share. The offer is still white-glove hub, complimentary Growth plan, permissioned success story, and featured placement.',
          href: AMY_WANG_HUB_URL,
          hrefLabel: 'Amy Wang’s hub',
        },
        {
          id: 'cc-demo',
          text: 'Use the latest product demo on @kahanaHQ. If nothing newer has shipped, use the current default.',
          href: CREATOR_OUTREACH_DEMO_VIDEO_URL,
          hrefLabel: 'Current demo video',
        },
        {
          id: 'cc-calendar',
          text: 'Join on time from the booking link they used (Adam’s Calendly unless Marketing Lead named a different event). Do not move them to a personal Zoom they cannot find.',
          href: ADAM_CALENDLY_URL,
          hrefLabel: 'Adam’s Calendly',
        },
      ],
    },
    {
      id: 'listen',
      title: '2. Listen, then share the offer',
      intro:
        'This is usually where we share what we can do. Listen first. Then be clear about the collab.',
      steps: [
        {
          id: 'cc-talking',
          text: 'Keep the talking points next to the call. Fill them with what this creator actually said. No leftover brackets in anything you paste later.',
          template: CREATOR_COLLAB_CALL_TALKING_POINTS,
        },
        {
          id: 'cc-point-a',
          text: 'Ask what they make, who it is for, and what they want a hub to hold (and what should stay off it). Write that vision in Notes. Do not invent a hub they did not describe.',
        },
        {
          id: 'cc-alongside',
          text: 'Kahana (AKA "The Aura Library") sits alongside TikTok, Instagram, and YouTube. We are not a replacement. Aura is the discovery signal, not the product name.',
          href: KAHANA_SITE_URL,
          hrefLabel: 'kahana.io',
        },
        {
          id: 'cc-share-offer',
          text: 'Share the offer in plain language: they create a Kahana account, start a hub, and invite our team as collaborators. We migrate content and build it privately. They review. When it matches, they publish it to the library (free or paid). Then they can put the hub in their link in bio or Linktree.',
          href: KAHANA_LIBRARY_URL,
          hrefLabel: 'Kahana library',
        },
      ],
    },
    {
      id: 'paid',
      title: '3. If they require payment or “only do paid collabs”',
      intro:
        'Get the facts. Do not agree to a creator fee on the call. We prioritize people who want to collab without one.',
      steps: [
        {
          id: 'cc-ask-once',
          text: 'If they have not said how they work with brands, ask once: are they open to this collab as offered, or do they only do paid / upfront work? If they are in without a fee, skip the rest of this section and go to section 4.',
        },
        {
          id: 'cc-rates',
          text: 'Ask their rates and what they have in mind for a collab in general, paid or not. One honest answer is enough. Do not haggle them down on the call.',
        },
        {
          id: 'cc-log-rates',
          text: 'Same day, put rates, what they wanted, and Paid collab = parked (or similar) in Notes. Leave Outreach Status as parked, not yes. Next person should not have to guess.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'cc-no-fee',
          text: 'If they require upfront payment, we do not proceed right now. Say we may revisit later. Be warm. Do not imply we will pay next quarter unless Marketing Lead said so.',
        },
        {
          id: 'cc-why',
          text: 'If it comes up: we believe the offer is valuable as it is. We are helping them create a revenue-generating asset that can live on the library. Creators have earned money from hubs they built with us, including over $20K at times. That is why we do not prioritize paying creators up front. Do not promise this person $20K. Do not put that number in a public story without permission and Legal (SOP 5).',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
        {
          id: 'cc-still-in',
          text: 'If they hear that and still want to collab without a creator fee, continue to section 4. If they do not, thank them, park the row, and stop. Do not keep pitching a paid talent deal.',
        },
      ],
    },
    {
      id: 'point-b',
      title: '4. Help them from point A to point B',
      intro:
        'Point B is a hub on the library, free or paid. Stay helpful. The hub stays theirs.',
      steps: [
        {
          id: 'cc-account',
          text: 'On the call, help them create their own Kahana account and start the hub. They invite our team as collaborators (Marketing + CS owners, emails from the Kahana HQ hub collaborator list). Do not create the hub under a Kahana employee login and pretend it is theirs.',
          href: KAHANA_SITE_URL,
          hrefLabel: 'kahana.io',
        },
        {
          id: 'cc-build',
          text: 'White-glove: migrate the content they pointed us at, structure the hub, and optimize it while it is still private. They review. When it matches their expectations, they make it public on the library. If the call runs out of time, keep building after. Do not rush publish.',
          href: KAHANA_LIBRARY_URL,
          hrefLabel: 'Kahana library',
        },
        {
          id: 'cc-growth',
          text: 'Complimentary Growth plan (large files, unlimited hubs) is part of this collab. Adam (or whoever can grant a comped Growth plan) turns it on after they have an account. Do not send a public coupon or promise a dollar amount we cannot support.',
        },
        {
          id: 'cc-story',
          text: 'If they agree to be a success story: blog via SOP 5, official social via SOP 8. Get permission on name, quotes, and screens before anything public. Legal if the story includes numbers or a named brand.',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
        {
          id: 'cc-featured',
          text: 'Ask Product / Marketing to place the live hub in featured collections (and any other featured library placement we are actually running). Do not promise a homepage slot we cannot give. Log the collection name on the row once it is live.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
      ],
    },
    {
      id: 'after',
      title: '5. Log the call and hand off',
      intro:
        'If it is not on the row, the next person will repeat the call.',
      steps: [
        {
          id: 'cc-notes',
          text: 'Same day, log: date of call, vision, paid-collab screen (in / parked + rates), account created yes/no, hub URL even if private, Growth granted yes/no/pending, next step.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'cc-sop18',
          text: 'Once the hub is public, open SOP 18. Put the live hub URL on the same row. Do not treat publish as the last step.',
          href: '/sops/post-collab-followups',
          hrefLabel: 'SOP 18: Post-Collab Follow-ups',
        },
      ],
    },
  ],
  doneWhen: [
    'The call (or the async yes) is logged on the same creator-database row with vision notes and a paid-collab screen (in, or parked with rates).',
    'If they required payment, we did not proceed. If they did not, they have (or are getting) their own account, a hub they own, Kahana as collaborators, and a path to a public hub (free or paid). Growth, story, and featured only with the usual rules.',
    'A public hub hands off to SOP 18. A parked paid-collab row is not marked yes.',
  ],
})

export const POST_COLLAB_FOLLOWUPS_SOP = playbook({
  id: 'post-collab-followups',
  title: 'Post-Collab Follow-ups',
  category: 'Marketing',
  owner: 'Marketing Lead',
  who: 'Anyone who white-gloved a SOP 17 collab, plus Community when the collab-creators club is live',
  when: 'The day the hub goes public, then 7 days, 30 days, and quarterly. Sooner if views or payments jump or drop.',
  format: 'checklist',
  description:
    'After a creator collab is live, monitor hub views and payments, send a results check-in, leave the door open to collab again (add content, brainstorm, build hubs), and (with opt-in) introduce collab creators to each other in a Kahana club.',
  keywords: [
    'creator',
    'collab',
    'follow-up',
    'hub',
    'views',
    'payments',
    'purchasers',
    'mixpanel',
    'community',
    'intro',
    'club',
  ],
  notes: [
    'Same creator database as SOP 15, SOP 16, and SOP 17. Follow-up lives on the row, not a new list. Outreach Status should already be a yes with a public hub URL.',
    'Read numbers from the live hub first (views, purchasers, files). Mixpanel and Stripe only if they add something the hub page does not show. Honest counts only. Do not send purchaser PII to the creator.',
    'A collab-creators club is SOP 2 mechanics (create, invite, monitor). Intros are opt-in. Do not CC a partner’s email to another creator without asking.',
  ],
  sections: [
    {
      id: 'row',
      title: '1. Keep the same row',
      intro:
        'If it is not on the sheet, it will not get a check-in.',
      steps: [
        {
          id: 'pc-sheet',
          text: 'Open the creator database. Confirm Outreach Status is a yes and the hub is public on the library. Put the live hub URL in Notes (or a Hub URL column if you added one). Request access from Marketing Lead or Adam if the sheet is closed to you.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'pc-not-authors',
          text: 'Authors and publishers hosting a paid book for a club stay on SOP 9, then SOP 2 for the club. This SOP is creator collabs from SOP 16 outreach and SOP 17 calls (white-glove hub, Growth plan, featured).',
          href: '/sops/creator-collab-calls',
          hrefLabel: 'SOP 17: Creator Collab Calls',
        },
        {
          id: 'pc-amy',
          text: 'Use Amy Wang’s live hub as the example of what “public” looks like when you are unsure: views and purchasers show on the hub page.',
          href: AMY_WANG_HUB_URL,
          hrefLabel: 'Amy Wang’s hub',
        },
      ],
    },
    {
      id: 'metrics',
      title: '2. Read hub results',
      intro:
        'Kahana’s hub page is the source of truth for views and purchases. Write the snapshot on the row the same day.',
      steps: [
        {
          id: 'pc-hub-page',
          text: 'Open the live hub while signed in as a collaborator or on the public page. Record views, purchasers (or that it is free), file count, and Aura if it is shown. Date the snapshot in Notes (for example “2026-08-26: 1200 views, 8 purchasers”).',
        },
        {
          id: 'pc-mixpanel',
          text: 'In Mixpanel, look for hub or purchase events tied to this hub if Analytics has a board. Prefer those events over a random explore. If nothing exists yet, ask Analytics to pin a collab-hub board rather than guessing.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
        {
          id: 'pc-stripe',
          text: 'If the hub is paid, confirm Kahana’s take (5%) with Finance / Stripe for that period. Do not export purchaser names or emails to Slack or to the creator. SOP 12 UTMs only matter if the creator used our tracked links.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'pc-cadence',
          text: 'Cadence: day the hub goes public (baseline), day 7, day 30, then quarterly. If views or purchases jump or stall hard, check that week. One dated line on the row each time.',
        },
      ],
    },
    {
      id: 'checkin',
      title: '3. Send the results check-in',
      intro:
        'The first follow-up after publish is a results note, an open door to collab again, and “how else can we help,” not a second Collab? pitch.',
      steps: [
        {
          id: 'pc-template',
          text: 'Use the template. Fill real numbers from this snapshot. Same channel as SOP 16 (email or official DM). No leftover brackets. Do not inflate views or invent Mixpanel stats.',
          template: POST_COLLAB_FOLLOWUP_TEMPLATE,
        },
        {
          id: 'pc-help',
          text: 'Say we are always ready and happy to collaborate this way again: add content, brainstorm, and build hubs. If they ever want to do it again, we would love to. Then ask what would help now: another hub, a club, bio / Linktree copy, a featured collection we can give, a Growth plan snag, or a product bug. Route product gaps to Linear. Do not promise a placement or rate we cannot support.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'pc-log',
          text: 'Same day, log the send date, channel, numbers you shared, and their reply (or Pending) in Notes. Next check-in date on the row so the next person is not guessing.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
      ],
    },
    {
      id: 'community',
      title: '4. Collab-creators community and intros',
      intro:
        'The community is a Kahana club of people who already said yes. Intros are one-to-one and opt-in.',
      steps: [
        {
          id: 'pc-club',
          text: 'Stand up (or use) a Restricted or invite-link Kahana club for collab creators. Create, invite, and monitor it with SOP 2. Keep it small and active, not a silent dump of every past pitch. Name the club clearly so members know it is partners, not a public book club.',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
        },
        {
          id: 'pc-invite',
          text: 'Invite only people who opted in on the check-in (or on the original collab call). Do not add them because they have a hub. Log Club = yes / no / pending on the row.',
        },
        {
          id: 'pc-intro',
          text: 'When two opted-in creators share a beat or ask to meet people, ask each of them first. Then send one intro with why, both hub URLs, and an optional calendar link. Do not make a group thread of everyone.',
          template: POST_COLLAB_INTRO_TEMPLATE,
          href: ADAM_CALENDLY_URL,
          hrefLabel: 'Adam’s Calendly',
        },
        {
          id: 'pc-monitor-club',
          text: 'Treat the collab club like any other hall: Members count, Feed, events, living vs silent. If it goes quiet, invite or pick a shared topic. Do not use it as a second outreach list for SOP 16.',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
        },
      ],
    },
  ],
  doneWhen: [
    'Every live SOP 17 collab has a hub URL and a dated views / purchasers snapshot on the creator database row.',
    'A check-in went out with honest numbers, an open invitation to collab again, and a real “how else can we help,” logged with next date. Product asks went to Linear.',
    'Club invites and intros were opt-in only. No partner emails were shared without asking. The collab club is run with SOP 2.',
  ],
})

export const LIFECYCLE_EMAILS_AND_TICKETS_ALIASES = {
  'lifecycle-emails-resurrection': 'lifecycle-emails-and-tickets',
  'handling-user-tickets': 'lifecycle-emails-and-tickets',
}

export const LIFECYCLE_EMAILS_AND_TICKETS_SOP = playbook({
  id: 'lifecycle-emails-and-tickets',
  title: 'Lifecycle Emails and Tickets',
  category: 'Customer Success',
  owner: 'Customer Success',
  who: 'Customer Success and anyone covering lifecycle mail, kahana.io/support, /contact, NPS/PMF replies, or feedback',
  when: 'Daily while sequences are live (Resend + Mixpanel boards). Same day on every inbound ticket, contact form, support request, or survey reply.',
  format: 'checklist',
  description:
    'Monitor Kahana lifecycle and resurrection mail in Mixpanel and Resend so it is actually delivering and landing. Handle PMF, NPS, contact-form fillouts, support requests, suggestions, and feedback. Escalate to Linear. Do not spam suppressed users.',
  keywords: [
    'customer success',
    'lifecycle',
    'resurrection',
    'resend',
    'mixpanel',
    'nps',
    'pmf',
    'ticket',
    'support',
    'contact',
    'feedback',
    'suggestion',
  ],
  notes: [
    'If you are in Customer Success and need Resend, ask Adam Kershner on Slack. Do not open a personal Resend account for Kahana mail. Do not paste API keys in Slack.',
    'Customer Success team members are added to the list of people who get email notifications when there is a PMF reply, NPS reply, support request, or contact-form fillout. If you are on CS and those emails are not arriving, ask Adam Kershner on Slack.',
    'We aim to respond to user and customer requests quickly. They already receive an email receipt that we got their message or request. That receipt is not the reply. CS still writes back.',
    'Mixpanel source of truth for delivery and landing is the three CS lifecycle boards below, plus a spot-check in Resend. Filter Mixpanel to production unless you are debugging.',
    'Do not change lifecycle copy or triggers without Engineering and whoever owns Resend. Never re-enable users who bounced or complained.',
    'Club-host logging of bugs and ideas in the app stays SOP 2. This SOP is CS inbox and mail.',
  ],
  sections: [
    {
      id: 'access',
      title: '1. Get Resend and Mixpanel access',
      intro:
        'You cannot monitor mail you cannot see.',
      steps: [
        {
          id: 'cs-resend-access',
          text: 'If you are in Customer Success and do not have Resend, ask Adam Kershner on Slack. Wait until he adds you. Do not share login screenshots in a public channel.',
        },
        {
          id: 'cs-notify-list',
          text: 'CS members are also added to the email-notification list for PMF replies, NPS replies, support requests, and contact-form fillouts. Confirm those emails reach your Kahana inbox. If they do not, ask Adam Kershner on Slack.',
        },
        {
          id: 'cs-resend',
          text: 'Open Resend Emails. This is the send log (delivered, bounced, complained, delayed). Bookmark it.',
          href: RESEND_EMAILS_URL,
          hrefLabel: 'Resend Emails',
        },
        {
          id: 'cs-mixpanel-home',
          text: 'Confirm Mixpanel Kahana project access (tools tally / How We Work). Same project as the rest of the company.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
        {
          id: 'cs-how-we-work',
          text: 'How We Work explains Mixpanel clusters, including lifecycle email. Use it if you are new. Do not create a new Mixpanel board for this SOP.',
          href: '/how-we-work',
          hrefLabel: 'How We Work',
        },
      ],
    },
    {
      id: 'monitor',
      title: '2. Monitor delivery and landing',
      intro:
        'Lifecycle mail is not done when someone hit send. Check Mixpanel and Resend the same day sequences run.',
      steps: [
        {
          id: 'cs-board-a',
          text: 'Open Mixpanel board 11358694. Confirm volume looks like a real send (not zero, not a sudden spike of bounces). Note anything off.',
          href: MIXPANEL_LIFECYCLE_BOARD_A_URL,
          hrefLabel: 'Mixpanel board 11358694',
        },
        {
          id: 'cs-board-b',
          text: 'Open Mixpanel board 11358702. Same check: delivering and landing, not just queued.',
          href: MIXPANEL_LIFECYCLE_BOARD_B_URL,
          hrefLabel: 'Mixpanel board 11358702',
        },
        {
          id: 'cs-board-c',
          text: 'Open Mixpanel board 11358761. Same check. If one board 404s or is empty, ask Analytics before assuming the sequence is dead.',
          href: MIXPANEL_LIFECYCLE_BOARD_C_URL,
          hrefLabel: 'Mixpanel board 11358761',
        },
        {
          id: 'cs-resend-spot',
          text: 'Spot-check the same window in Resend Emails: delivered vs bounced vs complained. If Resend and Mixpanel disagree, write both in Slack to Adam / Engineering. Do not guess which is right.',
          href: RESEND_EMAILS_URL,
          hrefLabel: 'Resend Emails',
        },
        {
          id: 'cs-escalate-mail',
          text: 'If sends stop, bounce or complaint rates jump, or nothing is landing, ping Engineering (and Adam if Resend is the issue) the same day. File Linear if it is a product or functions bug.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
      ],
    },
    {
      id: 'lifecycle',
      title: '3. Lifecycle and resurrection',
      intro:
        'NPS, PMF, welcome, activation, and resurrection sequences all count as lifecycle mail.',
      steps: [
        {
          id: 'cs-trigger',
          text: 'Before anyone changes copy or audience, confirm the trigger and Mixpanel events with Engineering. Do not edit firebase-functions from this SOP.',
        },
        {
          id: 'cs-suppress',
          text: 'Never re-enable users who bounced or complained. Check suppression flags in Resend before a resurrection pass.',
          href: RESEND_EMAILS_URL,
          hrefLabel: 'Resend Emails',
        },
        {
          id: 'cs-resurrect',
          text: 'Resurrection: inactive is defined, there is a real offer, and there is a stop rule. Measure opens, clicks, and whether they came back in Mixpanel (platform=email where that exists). One pass is enough until they act or the stop rule hits.',
        },
        {
          id: 'cs-no-spam',
          text: 'Do not stack extra “just checking in” mail on top of the sequence. Do not use lifecycle mail as a second SOP 16 creator pitch list.',
        },
      ],
    },
    {
      id: 'surveys',
      title: '4. PMF, NPS, and survey replies',
      intro:
        'The surveys ride lifecycle mail. CS is on the notification list when a PMF or NPS reply comes in. CS reads what came back and routes it. Product owns whether the score is a launch decision.',
      steps: [
        {
          id: 'cs-nps-page',
          text: 'Read current PMF and NPS in the data room. Sample size matters. Do not treat a handful of replies as a company-wide score.',
          href: '/nps',
          hrefLabel: 'PMF + NPS (data room)',
        },
        {
          id: 'cs-nps-sheet',
          text: 'If you need the live output sheet (same source as that page), open it and request access if it is closed to you.',
          href: PMF_NPS_OUTPUT_SHEET_URL,
          hrefLabel: 'PMF+NPS output sheet',
        },
        {
          id: 'cs-nps-route',
          text: 'Route detractors, “very disappointed,” bugs, and feature asks to Linear with the quote and context. Close the loop with the person if they left a way to reply. Legal if a public story will use a quote or a number (SOP 5).',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'cs-nps-copy',
          text: 'Do not change NPS/PMF questions, timing, or who gets the email without Product. CS monitors that the mail sent and that replies were handled.',
        },
      ],
    },
    {
      id: 'tickets',
      title: '5. Suggestions, contacts, support, and feedback',
      intro:
        'Every inbound gets a record, a priority, and a reply or an owned Linear issue. Support and contact fillouts also notify the CS list by email. The user already got an email receipt that we received it. Aim to respond quickly. Use the Customer Support playbook for Critical / High / Medium / Low.',
      steps: [
        {
          id: 'cs-support',
          text: 'Intake via kahana.io/support. Record, categorize, prioritize, investigate, respond. Same day if it is Critical or High. They already got an email receipt that we received the request. Aim to reply quickly anyway. The receipt is not the answer.',
          href: SUPPORT_PAGE,
          hrefLabel: 'kahana.io/support',
        },
        {
          id: 'cs-contact',
          text: 'Contact-form fillouts (kahana.io/contact) are tickets too. They also get an email receipt. Do not leave them unread because they did not arrive as “support.” Reply quickly.',
          href: CONTACT_PAGE,
          hrefLabel: 'kahana.io/contact',
        },
        {
          id: 'cs-feedback',
          text: 'In-app / improve-survey feedback (bugs, feature ideas, other) is intake. Teammates and hosts can file there. Turn it into Linear when it is a product gap.',
          href: IMPROVE_SURVEY,
          hrefLabel: 'Improvement survey',
        },
        {
          id: 'cs-playbook',
          text: 'Priority and engineering escalation language live in the Customer Support playbook. Reproduce, document expected vs actual, screenshots, severity, impact. Feature requests need the problem and how often it shows up, then Product prioritizes.',
          href: '/sops/customer-support-operations',
          hrefLabel: 'Customer Support Operations',
        },
        {
          id: 'cs-clubs',
          text: 'Club-related logging by a host (What can we improve in the app) is SOP 2. Do not make the host file twice. CS still closes the loop if it landed in this inbox.',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
        },
        {
          id: 'cs-close',
          text: 'Close the loop with the user quickly. The ticket is not done when it is in Linear, and it is not done because they got a receipt. Reply if they expected one. Recurring questions become help copy or a SOP 11 video / SOP 5 post, not another silent Slack thread.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
      ],
    },
  ],
  doneWhen: [
    'Resend and the three Mixpanel lifecycle boards were checked for the period sequences ran. Delivery or landing issues were escalated the same day.',
    'NPS/PMF replies and inbound tickets (support, contact, suggestions, feedback) are closed or owned in Linear, and the user got a real reply quickly (the receipt is automatic; it is not the CS response).',
    'Suppressions were honored. No extra resurrection mail after the stop rule. Resend access and the PMF / NPS / support / contact notification list for CS went through Adam on Slack.',
  ],
})

export const TIME_LOG_ALIASES = {
  'pm-time-log': 'time-log',
  'hr-time-log': 'time-log',
  'checking-time-log-fillouts': 'time-log',
}

export const TIME_LOG_SOP = playbook({
  id: 'time-log',
  title: 'Time Log',
  category: 'HR & Talent',
  owner: 'HR + Project Management',
  who: 'HR and Project Management check fillouts. Every internal teammate on the Kahana HQ hub submits Friday EOD.',
  when: 'Friday: reminder email goes out, everyone fills the Tally form by EOD. HR and PM check the output sheet Friday EOD or Monday morning.',
  format: 'checklist',
  description:
    'Kahana HQ hub members get a Friday email reminder to fill the time log. HR and Project Management check the output sheet, then Slack anyone missing to see if there was an emergency, illness, or another reason.',
  keywords: [
    'time log',
    'tally',
    'friday',
    'hr',
    'attendance',
    'pto',
    'kahana hq',
    'slack',
    'sheet',
  ],
  notes: [
    'The Friday reminder email goes to internal team members who are members of the Kahana HQ hub. Filling the Tally form Friday EOD is still required even if the reminder is late or missed.',
    'HR and Project Management should have access to the time log output sheet. Request access from HR or Adam if it is closed to you. Do not download a private copy and treat that as the roster.',
    'If someone has not filled it out, Slack them (DM, not a public call-out). Ask if there has been an emergency, illness, or another reason. Do not assume they are slacking.',
    'How to write a useful entry is the onboarding Time Log step. This SOP is checking fillouts.',
  ],
  sections: [
    {
      id: 'who',
      title: '1. Who fills it and who gets the reminder',
      intro:
        'Internal teammates on Kahana HQ get the Friday reminder. The form is still Friday EOD for that roster.',
      steps: [
        {
          id: 'tl-hq',
          text: 'The reminder list is members of the Kahana HQ hub. Confirm someone is on that hub before you chase them as “internal.” Contractors or guests who are not HQ members are not on this reminder.',
          href: KAHANA_HQ_HUB_URL,
          hrefLabel: 'Kahana HQ hub',
        },
        {
          id: 'tl-form',
          text: 'Everyone on that roster submits the weekly Time Log Tally form Friday EOD. Link the onboarding step if they ask how to write it.',
          href: TIME_LOG_TALLY_URL,
          hrefLabel: 'Time Log (Tally form)',
        },
        {
          id: 'tl-onboarding',
          text: 'New hires learn the Friday ritual in onboarding. Point them there instead of rewriting the examples in Slack.',
          href: '/onboarding/time-log',
          hrefLabel: 'Onboarding: Time Log',
        },
      ],
    },
    {
      id: 'sheet',
      title: '2. Get the output sheet',
      intro:
        'HR and Project Management check fillouts on the sheet, not by guessing from Slack.',
      steps: [
        {
          id: 'tl-access',
          text: 'Open the time log output sheet. HR and PM should already have access. If you are on HR or PM and cannot open it, request access from HR or Adam. Do not chase people from a stale export.',
          href: TIME_LOG_OUTPUT_SHEET_URL,
          hrefLabel: 'Time log output sheet',
        },
        {
          id: 'tl-week',
          text: 'Filter or read the current Friday’s week. Match names to Kahana HQ members. One missing row is a person to Slack, not a “participation %” slide.',
          href: KAHANA_HQ_HUB_URL,
          hrefLabel: 'Kahana HQ hub',
        },
      ],
    },
    {
      id: 'chase',
      title: '3. Slack anyone who has not filled it out',
      intro:
        'The first question is whether they are okay, not whether they forgot the process.',
      steps: [
        {
          id: 'tl-slack',
          text: 'If they do not appear on the sheet for this Friday, reach out on Slack (DM). Ask if there has been an emergency, illness, or another reason. Give them a chance to fill it or to say they were out.',
        },
        {
          id: 'tl-note',
          text: 'If they were out (emergency, illness, PTO, or another reason), note that next to the week so payroll and planning are not guessing. Do not put medical detail in a public channel.',
          href: TIME_LOG_OUTPUT_SHEET_URL,
          hrefLabel: 'Time log output sheet',
        },
        {
          id: 'tl-still-missing',
          text: 'If they are working and still have not submitted, remind them of the Tally form and Friday EOD. Chase Monday morning if Friday EOD passed, not in the next retro as a surprise.',
          href: TIME_LOG_TALLY_URL,
          hrefLabel: 'Time Log (Tally form)',
        },
      ],
    },
    {
      id: 'use',
      title: '4. Use the log (HR and PM)',
      intro:
        'The sheet is for attendance context and for planning against real hours.',
      steps: [
        {
          id: 'tl-hr',
          text: 'HR: when pay or attendance is in question, reconcile PTO or sick against this week’s log. Do not invent hours. The attendance SOP still owns the PTO register.',
          href: '/sops/time-attendance-pto',
          hrefLabel: 'Track Time, Attendance, Sick Days, and Vacation',
        },
        {
          id: 'tl-pm',
          text: 'PM: roll submitted hours into planning (what actually moved vs what we hoped). Missing logs without a reason are not “they were busy.”',
        },
      ],
    },
  ],
  doneWhen: [
    'This Friday’s Kahana HQ roster is on the output sheet or has an explicit note (emergency, illness, PTO, or other reason).',
    'Anyone still missing was DMed on Slack. No public call-out. Medical detail stayed private.',
    'HR and PM who need the sheet have access. Hours used for planning or payroll match the log plus those notes.',
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
      {
        text: 'Category 2: before you draft a post, check the Linear board for completed features and updates. Same ships feed blogs (SOP 5) and YouTube (SOP 11). Official company-page posts still go through SOP 8.',
        href: LINEAR_WORKSPACE_URL,
        hrefLabel: 'Linear (Kahana workspace)',
      },
      {
        text: 'Category 2: any kahana.io link in a personal post gets UTM parameters (utm_source=linkedin) so Mixpanel can attribute sign-ups. SOP 12 has the template.',
        href: '/sops/seo',
        hrefLabel: 'SOP 12: SEO',
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
      {
        text: 'Check the Linear board for features and updates that are completed (Done). Those ships are inputs for new Instagram posts, blogs (SOP 5), and YouTube videos (SOP 11). Confirm the UI is live before you post.',
        href: LINEAR_WORKSPACE_URL,
        hrefLabel: 'Linear (Kahana workspace)',
      },
      'Pull the rest of this week’s inputs: backlog teasers (only if approved), testimonials, cognitive-challenge stories, and trends.',
      {
        text: 'Draft caption + visual against SOP 6 Brand Guidelines. Short-form product video follows SOP 11. Do not paste raw AI output.',
        href: '/sops/brand-guidelines',
        hrefLabel: 'SOP 6: Brand Guidelines',
      },
      {
        text: 'If you are cutting a Reel from a Kahana demo, record and edit in Screen Studio per SOP 11, then come back here for the caption and SOP 8 gate.',
        href: '/sops/creating-youtube-videos',
        hrefLabel: 'SOP 11: Creating YouTube Videos',
      },
      'After marketing-manager approval in Linear: publish, then share the link in Slack for teammate engagement where appropriate.',
      {
        text: 'Put UTM parameters on kahana.io links (caption, sticker, or bio when that post is the CTA). SOP 12 has the template.',
        href: '/sops/seo',
        hrefLabel: 'SOP 12: SEO',
      },
      'In Instagram Insights, log reach, saves, and profile visits. In Mixpanel, check this campaign’s UTM and the initial referring domain on new sign-ups. Note anything that should become a blog or YouTube cut.',
    ],
    doneWhen: [
      'SOP 8 gate passed (access, brand, proofread, Linear approval). Post is live with UTM’d kahana.io links, Insights are logged, and a one-line performance note exists.',
    ],
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
    id: 'content-from-shipped-features',
    title: 'Creating Content Based on Shipped Features',
    category: 'Marketing',
    owner: 'Marketing Lead',
    who: 'Marketing, pinged by Product on ship',
    when: 'Same week as a user-visible ship.',
    description: 'Turn shipped work into social, blog, or changelog content while it is still true.',
    keywords: ['changelog', 'shipped', 'launch content'],
    steps: [
      {
        text: 'Check the Linear board for features and updates that are completed (Done). Do not wait only on a Slack ping. Those ships are inputs for social, blogs (SOP 5), and YouTube (SOP 11).',
        href: LINEAR_WORKSPACE_URL,
        hrefLabel: 'Linear (Kahana workspace)',
      },
      'Product posts ship notes in Slack (what, who it’s for, Mixpanel event if any).',
      'Marketing picks format (post, blog, or SOP 11 video) using content guidelines.',
      {
        text: 'If the ship needs a walkthrough, record it in Screen Studio per SOP 11 the same week.',
        href: '/sops/creating-youtube-videos',
        hrefLabel: 'SOP 11: Creating YouTube Videos',
      },
      {
        text: 'If the ship includes a marketing-site or public URL change, ship it through SOP 13 (Linear card, local test, In Review, Heroku). Then update the sitemap and request indexing (SOP 12). Put UTM on the announcement links.',
        href: '/sops/marketing-website',
        hrefLabel: 'SOP 13: Updating the Marketing Website',
      },
      {
        text: 'If the ship is news-worthy (first-of, launch, or a permissioned customer story), prepare a scoop and pitch from the media database (SOP 14) the same week. Do not wait for a blog to exist first.',
        href: '/sops/pr-news',
        hrefLabel: 'SOP 14: Third-Party News and PR',
      },
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
    keywords: ['inputs', 'testimonials', 'trends', 'backlog', 'linear'],
    steps: [
      {
        text: 'Check the Linear board for features and updates that are completed (Done). File those ships as inputs for blogs (SOP 5), YouTube (SOP 11), official social (SOP 8), and PR scoops (SOP 14).',
        href: LINEAR_WORKSPACE_URL,
        hrefLabel: 'Linear (Kahana workspace)',
      },
      {
        text: 'Add search-demand inputs from SOP 12: Exploding Topics, Google Trends, and Google/YouTube suggested and related searches. File primary + secondary keyword clusters next to the ships.',
        href: '/sops/seo',
        hrefLabel: 'SOP 12: SEO',
      },
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
      'Send a short custom note. Creator collabs use SOP 16. Do not spray a generic paste.',
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
      'Marketing website changes are SOP 13 (kahana-homepage-public, Linear In Review, Adam or EM deploys Heroku). Do not treat this product-app SOP as the marketing-site path.',
    ],
    steps: [
      'Branch from an up-to-date main. Name it after the Linear issue or a short intent.',
      'Push to origin. Open a PR. Do not force-push main. Do not skip hooks unless explicitly asked.',
      'Deploy staging before product prod when the change is user-facing.',
      {
        text: 'If the change is kahana.io / about.kahana.io, stop here and follow SOP 13 instead of heroku-alpha.',
        href: '/sops/marketing-website',
        hrefLabel: 'SOP 13: Updating the Marketing Website',
      },
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
      {
        text: 'Never deploy this repo to kahana-public. Marketing site updates are SOP 13 (kahana-homepage-public).',
        href: '/sops/marketing-website',
        hrefLabel: 'SOP 13: Updating the Marketing Website',
      },
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
      {
        text: 'Before payroll, reconcile requests vs the time log vs calendar. Checking Friday fillouts is SOP 20.',
        href: '/sops/time-log',
        hrefLabel: 'SOP 20: Time Log',
      },
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
  number: 21 + index,
}))
