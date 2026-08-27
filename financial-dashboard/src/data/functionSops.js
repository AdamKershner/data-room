/**
 * Named SOPs 1–27 (gallery numbering lives in sopContent.js).
 * SOP 1 Product Hunt Launch. SOP 2 Community Building. SOP 3 Product Quality.
 * SOP 4 Product Management Playbook. SOP 5 Blogs. SOP 6 Brand Guidelines.
 * SOP 7 Merch. SOP 8 Official Social Media. SOP 9 Author Outreach.
 * SOP 10 Writing a Project Charter. SOP 11 Creating YouTube Videos. SOP 12 SEO.
 * SOP 13 Updating the Marketing Website. SOP 14 Third-Party News and PR.
 * SOP 15 Creator Prospecting. SOP 16 Creator Outreach. SOP 17 Creator Collab Calls.
 * SOP 18 Post-Collab Follow-ups. SOP 19 Lifecycle Emails and Tickets. SOP 20 Time Log.
 * SOP 21 Analytics. SOP 22 Getting Set Up with Kahana Code. SOP 23 Penetration Testing.
 * SOP 24 PII Handling. SOP 25 Platform Governance. SOP 26 Content Moderation.
 * SOP 27 Reporting Cybersecurity Threats.
 */

import {
  ADAM_CALENDLY_URL,
  AMY_WANG_HUB_URL,
  AMY_WANG_YOUTUBE_URL,
  CREATOR_OUTREACH_DEMO_VIDEO_URL,
  CREATOR_OUTREACH_SHEET_URL,
  GOOGLE_CHAT_URL,
  FIREBASE_DEV_CONSOLE_URL,
  FIREBASE_FUNCTIONS_REPO_URL,
  FIREBASE_PROD_CONSOLE_URL,
  GOOGLE_SEARCH_CONSOLE_URL,
  KAHANA_HQ_HUB_URL,
  KAHANA_WEB_REPO_URL,
  KAHANA_LIBRARY_URL,
  KAHANA_SITE_URL,
  LINEAR_ALL_ISSUES_URL,
  LINEAR_KAH_66_URL,
  LINEAR_KAH_84_URL,
  LINEAR_KAH_85_URL,
  LINEAR_KAH_86_URL,
  LINEAR_KAH_87_URL,
  LINEAR_KAH_88_URL,
  LINEAR_WORKSPACE_URL,
  MARKETING_SITE_REPO_URL,
  MIXPANEL_ENGINEERING_BOARD_URL,
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
import { normalizeSopStep } from './sopStepUtils'

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

function stepsFrom(items, sectionId) {
  return items.map((item, index) => normalizeSopStep(item, sectionId, index))
}

function playbook({
  id,
  title,
  category,
  owner,
  who,
  when,
  description,
  excerpt,
  keywords = [],
  notes,
  format = 'checklist',
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
    excerpt,
    keywords,
    notes,
    format,
    sections: sections.map((section) => ({
      ...section,
      steps: stepsFrom(section.steps, section.id),
    })),
    doneWhen,
  }
}

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
            label: 'Confirm charter conditions are met',
            doneWhen: 'Confirm charter conditions are met (NPS target and critical technical blockers).',
            text: 'Charter conditions are met (NPS target and critical technical blockers). Date is not locked yet.',
            href: PRODUCT_HUNT_CHARTER,
            hrefLabel: 'Product Hunt Launch Charter',
          },
          {
            id: 'pre-ph-guide',
            label: 'Read Product Hunt’s launch guide for current rules, assets, and hunter/maker mechanics',
            doneWhen: 'Read Product Hunt’s launch guide for current rules, assets, and hunter/maker mechanics.',
            text: 'Read Product Hunt’s launch guide for current rules, assets, and hunter/maker mechanics.',
            href: PRODUCT_HUNT_LAUNCH_GUIDE,
            hrefLabel: 'Product Hunt launch guide',
          },
          {
            id: 'pre-oasis',
            label: 'Study the previous Oasis Browser for Mac launch',
            doneWhen: 'Study the previous Oasis Browser for Mac launch.',
            text: 'Study the previous Oasis Browser for Mac launch. Reuse what worked; do not start from a blank page.',
            href: PRODUCT_HUNT_OASIS_LAUNCH,
            hrefLabel: 'Oasis Browser for Mac — Product Hunt launch',
          },
          {
            id: 'pre-sheet-profiles',
            label: 'Confirm every supporter has a live Product Hunt profile',
            doneWhen: 'Confirm the community sheet is current: every teammate and recruited supporter has a live Product Hunt profile.',
            text: 'Community sheet is current: every teammate and recruited supporter has a live Product Hunt profile. Track used-the-product / draft in / confirmed / 3 AM EST committed on the same sheet.',
            href: PRODUCT_HUNT_ACCOUNTS_SHEET,
            hrefLabel: 'Product Hunt community / accounts sheet',
          },
          {
            id: 'pre-recruit-300',
            label: 'Recruit friends and colleagues toward at least 300 upvotes (the #1 bar)',
            doneWhen: 'Recruit friends and colleagues toward at least 300 upvotes (the #1 bar).',
            text: 'Recruit friends and colleagues toward at least 300 upvotes (the #1 bar). The ship gate is 40 confirmed testimonials and people, not the calendar.',
            href: '/producthunt-tasks',
            hrefLabel: 'Product Hunt tasks (data room)',
          },
          {
            id: 'pre-team-use',
            label: 'Confirm the whole team used Kahana for real',
            doneWhen: 'Confirm the whole team used Kahana (AKA The Aura Library) for real: hubs, club, Aura, a new-user path.',
            text: 'Entire team used Kahana (AKA The Aura Library) for real — hubs, club, Aura, a new-user path. No invented reviews.',
          },
          {
            id: 'pre-team-testimonials',
            label: 'Collect four-part testimonials from every teammate',
            doneWhen: 'Collect a true four-part testimonial from every teammate days in advance.',
            text: 'Every teammate wrote a true four-part testimonial days in advance: what they like, what they do not like, what to improve, and what they are most hopeful to do next. Hype-only blurbs do not count.',
          },
          {
            id: 'pre-community-testimonials',
            label: 'Collect four-part testimonials from community supporters',
            doneWhen: 'Collect the same four-part testimonials from every community member who agreed to support.',
            text: 'Same four-part testimonials collected from every community member who agreed to support, as completely as we can. Chase until confirmed or they drop off.',
          },
          {
            id: 'pre-tally-40',
            label: 'Confirm the tally is at least 40 people',
            doneWhen: 'Confirm the tally is at least 40 confirmed people.',
            text: 'Tally is at least 40 confirmed people. Confirmed = used the product + four-part draft + Product Hunt login + committed to post at 3 AM EST. Under 40: slip the date.',
            href: PRODUCT_HUNT_ACCOUNTS_SHEET,
            hrefLabel: 'Product Hunt community / accounts sheet',
          },
          {
            id: 'pre-brief-community',
            label: 'Brief the community before launch morning',
            doneWhen: 'Brief the community before launch morning: use the product, write the testimonial, upvote, and paste that testimonial when it opens.',
            text: 'Community is briefed before launch morning: use the product, write the testimonial, upvote, and paste that testimonial when it opens — not “Congrats.”',
          },
          {
            id: 'pre-reminder',
            label: 'Set a 3 AM EST reminder for every person',
            doneWhen: 'Set a reminder for each person: 3 AM EST, Kahana (AKA The Aura Library), paste the testimonial already written.',
            text: 'Each person has a reminder: 3 AM EST, Kahana (AKA The Aura Library), paste the testimonial already written.',
          },
          {
            id: 'pre-chase-profiles',
            label: 'Chase missing Product Hunt profile links',
            doneWhen: 'Chase missing Product Hunt profile links before T-minus 48 hours.',
            text: 'Missing Product Hunt profile links chased before T-minus 48 hours.',
          },
          {
            id: 'pre-hype-framework',
            label: 'Write the social hype campaign to the Sales Hero’s Journey',
            doneWhen: 'Write the social hype campaign to the Sales Hero’s Journey, tailored to Kahana.',
            text: 'Social hype campaign written to the Sales Hero’s Journey, tailored to Kahana: Aura Library — not a feature dump. Founding-story beat under 90 seconds if spoken or video.',
            href: SALES_HERO_JOURNEY_URL,
            hrefLabel: 'Sales Hero’s Journey (Storytelling Edge)',
            note: '1) Prologue / trust. 2) Force of change (AI slop, feeds for dopamine). 3) Stakes (winners vs learners). 4) Magical guide: Kahana (AKA The Aura Library). 5) Three-step plan (club, hub, Aura). 6) Promised land + Oasis proof + CTA when live.',
          },
          {
            id: 'pre-hype-kahana-story',
            label: 'Align hype copy to the Kahana Story',
            doneWhen: 'Align hype copy to the Kahana Story.',
            text: 'Hype copy is aligned to the Kahana Story. Scheduled on LinkedIn, Instagram, and other live channels so the story is already circulating before 3 AM EST.',
            href: '/kahana-narrative',
            hrefLabel: 'Kahana Story',
          },
          {
            id: 'pre-townhall-booked',
            label: 'Book three consecutive town halls before launch',
            doneWhen: 'Book three consecutive 30-minute town halls: Tuesday, Wednesday, Thursday.',
            text: 'Three consecutive 30-minute town halls booked: Tuesday, Wednesday, Thursday (week before launch, or the three days immediately before). Same agenda each day.',
          },
          {
            id: 'pre-townhall-rsvp',
            label: 'Confirm every teammate signed up for a town hall',
            doneWhen: 'Confirm every teammate is signed up for at least one town hall.',
            text: 'Every teammate is signed up for at least one town hall. Chase anyone without a slot before Tuesday. Missing all three is not allowed.',
          },
          {
            id: 'pre-townhall-ran',
            label: 'Run all three town halls',
            doneWhen: 'Run all three town halls.',
            text: 'All three town halls ran. Drill: 3 AM EST login → paste four-part testimonial on the launch discussion → upvote → makers reply → share socials and text chats all day. Rehearse the first-15-minute ping list.',
          },
          {
            id: 'pre-townhall-roles',
            label: 'Confirm each attendee knows their launch-day job',
            doneWhen: 'Confirm each attendee knows their launch-day job (testimonial, upvote, chats/socials, 3 AM EST shift).',
            text: 'Each attendee knows their launch-day job (testimonial, upvote, which chats/socials, 3 AM EST shift). Unfinished testimonials finished on the call.',
          },
          {
            id: 'pre-townhall-hype',
            label: 'Close every town hall hyped about 3 AM',
            doneWhen: 'Close every town hall hyped about why 3 AM EST is worth it.',
            text: 'Every town hall ended hyped — why this is worth 3 AM EST, what a #1 day means, “see you at 3 AM.” Not logistics-only.',
          },
          {
            id: 'pre-lock-date',
            label: 'Lock the date only after the 40-person tally',
            doneWhen: 'Lock the date only after 40 confirmed testimonials and people, a named 3 AM EST shift list, and the three town halls complete.',
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
            label: 'Log in at 3 AM EST when Product Hunt opens',
            doneWhen: 'Log in at 3 AM EST when Product Hunt opens.',
            text: 'At 3 AM EST, when Product Hunt opens, everyone on the confirmed tally logs in.',
          },
          {
            id: 'day-post-testimonials',
            label: 'Post the testimonial already written on the launch discussion',
            doneWhen: 'Post the testimonial already written on the launch-page discussion.',
            text: 'Each person posts the testimonial they already wrote on the launch-page discussion (like / don’t like / improve / hope next). Do not draft in the moment.',
          },
          {
            id: 'day-ping-15',
            label: 'Run the 3 AM EST shift list',
            doneWhen: 'Run the 3 AM EST shift list.',
            text: 'Run the 3 AM EST shift list. Ping anyone who has not posted within 15 minutes.',
          },
          {
            id: 'day-makers-reply',
            label: 'Makers reply to every comment within minutes',
            doneWhen: 'Makers reply to every comment within minutes.',
            text: 'Makers reply to every comment within minutes. First hour of the thread is not empty.',
          },
          {
            id: 'day-share-all-day',
            label: 'Share the live launch on socials and chats all day',
            doneWhen: 'Throughout the day: share the live launch on all socials, Slack (#linkedin-focus-group and team channels), and text group chats.',
            text: 'Throughout the day: share the live launch on all socials, Slack (#linkedin-focus-group and team channels), and text group chats. Not a one-and-done morning blast. Official Kahana-account posts still go through SOP 8 (access + Linear review); personal shares do not.',
            href: '/sops/official-social-media',
            hrefLabel: 'SOP 8: Official Social Media',
          },
          {
            id: 'day-upvotes-300',
            label: 'Upvote from prepared accounts',
            doneWhen: 'Upvote from prepared accounts.',
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
            label: 'Monitor Mixpanel for the Product Hunt cohort',
            doneWhen: 'Monitor Mixpanel for the Product Hunt cohort: sign-ups with UTM/source, activation, and retention.',
            text: 'Monitor Mixpanel for the Product Hunt cohort: sign-ups with UTM/source, activation, and drop-off. Do not wait for a weekly report.',
            href: MIXPANEL_URL,
            hrefLabel: 'Mixpanel Kahana project',
          },
          {
            id: 'post-support',
            label: 'Staff support for new users on kahana.io/support',
            doneWhen: 'Customer support is staffed for new users (kahana.io/support and /contact).',
            text: 'Customer support is staffed for new users (kahana.io/support and /contact). Reply fast.',
            href: '/sops/lifecycle-emails-and-tickets',
            hrefLabel: 'SOP 19: Lifecycle Emails and Tickets',
          },
          {
            id: 'post-retention',
            label: 'Track Product Hunt sign-ups as their own retention cohort',
            doneWhen: 'Retention of newly signed-up users tracked as its own cohort (D1 / D7, return to a hub or club).',
            text: 'Retention of newly signed-up users tracked as its own cohort (D1 / D7, return to a hub or club).',
          },
          {
            id: 'post-revenue',
            label: 'Record paid-plan upgrades next to the sign-up count',
            doneWhen: 'Record paid-plan upgrades and revenue from that cohort next to sign-up count.',
            text: 'Paid-plan upgrades and revenue from that cohort recorded next to sign-up count.',
          },
          {
            id: 'post-retro',
            label: 'Run a short retro within 48 hours',
            doneWhen: 'Run a short retro within 24–48 hours: ranking, comment quality, Mixpanel sign-ups, support load.',
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
    'Write blogs that compare and educate: Kahana with the platforms creators, content, and viewers already use, plus success stories, use-case guides, and practical help. Research on Company Landscape and Market Map. Ship via marketing-site code, Slack to Manager, or the KahanaHQ hub.',
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
        {
          id: 'write-topic-audience-and-objective-befor',
          label: 'Write Topic, Audience, and Objective before the draft',
          doneWhen: 'Write Topic, Audience, and Objective before the draft.',
          text: 'Write Topic, Audience, and Objective before the draft. Audience is usually creators, club hosts, or people who already watch/read/listen somewhere else.',
        },
        {
          id: 'check-the-linear-board-for-features-and-updates-',
          label: 'Check the Linear board for features and updates that are completed (Done)',
          doneWhen: 'Check the Linear board for features and updates that are completed (Done).',
          text: 'Check the Linear board for features and updates that are completed (Done). Those ships are inputs for new blogs, YouTube videos (SOP 11), and official social posts (SOP 8). Walk the live product before you write.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'check-the-quality-bar-before-you-draft',
          label: 'Check the quality bar before you draft',
          doneWhen: 'Check the quality bar before you draft.',
          text: 'Check the quality bar before you draft. Level A (accurate, no PII, working links) is the floor. Level B needs a point of view plus one proof. Level C is flagship narrative.',
        },
        {
          id: 'open-sop-6-if-you-are-unsure-whether-this-is-pub',
          label: 'Open SOP 6 if you are unsure the piece is public',
          doneWhen: 'Open SOP 6 if you are unsure whether this is public, draft, or internal.',
          text: 'Open SOP 6 if you are unsure whether this is public, draft, or internal-only. Level A (accurate product, no PII, working links, Kahana spelled correctly) is the floor.',
          href: '/sops/brand-guidelines',
          hrefLabel: 'SOP 6: Brand Guidelines',
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
          id: 'start-on-market-map',
          label: 'Start on Market Map',
          doneWhen: 'Start on Market Map.',
          text: 'Start on Market Map. Pick the category your reader already lives in: Ebook, Short-form or Long-form video, Courses, Newsletters, Audio, Community & Messaging, Memberships, Storefronts, or Marketplaces.',
          href: '/fragment-capture',
          hrefLabel: 'Market Map',
        },
        {
          id: 'open-company-landscape-and-filter-that-same-mark',
          label: 'Open Company Landscape and filter that same Market Map category',
          doneWhen: 'Open Company Landscape and filter that same Market Map category.',
          text: 'Open Company Landscape and filter that same Market Map category. Read the cards for platforms creators, content, and viewers actually use. Note what each does well, where it is weak, scale signals, and the listed sources.',
          href: '/company-landscape',
          hrefLabel: 'Company Landscape',
        },
        {
          id: 'read-how-kahana-sits-in-the-creator-stack-conten',
          label: 'Read how Kahana sits in the creator stack',
          doneWhen: 'Read how Kahana sits in the creator stack (content, community, memberships, storefronts).',
          text: 'Read how Kahana sits in the creator stack (content, community, memberships, storefronts, marketplaces) so the blog does not invent a new category story.',
          href: '/glossary',
          hrefLabel: 'Glossary — Kahana vs the creator stack',
        },
        {
          id: 'for-each-platform-you-name',
          label: 'Write two sentences for each platform you name',
          doneWhen: 'Write two sentences for each platform you name.',
          text: 'For each platform you name, write two sentences: what people use it for today, and how Kahana is used with it (library, Clubs, Aura) rather than instead of it. Pull together-positioning from the landscape card or synergy notes (Discord as the living room, Kahana as the shelf; YouTube keeps the video and ads, Kahana is the club layer).',
        },
        {
          id: 'cite-the-landscape-sources-and-any-publi',
          label: 'Cite the landscape sources and any public pages you used',
          doneWhen: 'Cite the landscape sources and any public pages you used.',
          text: 'Cite the landscape sources and any public pages you used. Do not invent user counts, revenue, or “we replace X.”',
        },
      ],
    },
    {
      id: 'types',
      title: 'Pick a blog type',
      intro: 'Most posts should be one of these. Mix only when the reader still gets a single job.',
      steps: [
        {
          id: 'compare-and-educate-kahana-and-another-p',
          label: 'Compare and educate: Kahana and another platform (or a small set)',
          doneWhen: 'Compare and educate: Kahana and another platform (or a small set) in the same Market Map space.',
          text: 'Compare and educate: Kahana and another platform (or a small set) in the same Market Map space. Teach the jobs each one is good at, then the tandem workflow. Example: “How a YouTube educator runs a Kahana video club without leaving YouTube.”',
        },
        {
          id: 'success-story-a-real-club',
          label: 'Write a success story from a real club or hub',
          doneWhen: 'Write a success story from a real club, hub, creator, or team.',
          text: 'Success story: a real club, hub, creator, or team. What they were doing, what they set up on Kahana, what changed. Named people and brands need permission.',
        },
        {
          id: 'use-case-guide-a-click-by-click-or-week-',
          label: 'Use-case guide: a click-by-click or week-by-week workflow (start a book club, add',
          doneWhen: 'Use-case guide: a click-by-click or week-by-week workflow (start a book club, add a YouTube curriculum, pin a hub in Discord, run a course discussion alongside Teachable).',
          text: 'Use-case guide: a click-by-click or week-by-week workflow (start a book club, add a YouTube curriculum, pin a hub in Discord, run a course discussion alongside Teachable).',
        },
        {
          id: 'tips-recommendations-and-help-practical-',
          label: 'Write practical tips the reader can use this week',
          doneWhen: 'Write practical tips, recommendations, and help the reader can use this week.',
          text: 'Tips, recommendations, and help: practical answers (wishlist vs focus title, Aura vs a like, invite links, how to talk about Kahana next to Patreon or Substack). Point at in-app help when it already exists.',
        },
        {
          id: 'file-raw-inputs-so-blogs-are-not-invented-from-m',
          label: 'File raw inputs so blogs are not invented from memory: Linear Done',
          doneWhen: 'File raw inputs so blogs are not invented from memory: Linear Done issues, ships, testimonials, CS stories.',
          text: 'File raw inputs so blogs are not invented from memory: Linear Done issues, ships, testimonials, CS stories. Customer-named stories need permission before they go public.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
      ],
    },
    {
      id: 'together',
      title: 'Comparison blogs: used together, not against',
      intro:
        'Creators and viewers already have a stack. The useful blog shows how Kahana plugs into it.',
      steps: [
        {
          id: 'name-the-reader-s-current-tools-from-com',
          label: 'Name the reader’s current tools from Company Landscape',
          doneWhen: 'Name the reader’s current tools from Company Landscape.',
          text: 'Name the reader’s current tools from Company Landscape. Typical pairs: YouTube + Kahana video club; Discord or Circle + Kahana library and Clubs; Substack, Beehiiv, or Medium + a reading club; Patreon or Memberful + Kahana as the membership destination; Teachable, Thinkific, Kajabi, or Udemy + Kahana discussion; Goodreads, Fable, or Literal + Kahana book clubs; Spotify or Audible + a listening club.',
        },
        {
          id: 'be-explicit-about-what-kahana-does-not-r',
          label: 'Say what Kahana does not replace',
          doneWhen: 'Say what Kahana does not replace: YouTube hosting and ads, Discord as a chat home.',
          text: 'Be explicit about what Kahana does not replace: YouTube hosting and ads, Discord chat, Teachable checkout, Kindle storefronts. Kahana is the club + library layer and Aura is the discovery signal.',
        },
        {
          id: 'keep-the-kahana-story-in-view-so-the-comparison-',
          label: 'Keep the Kahana Story in view so the comparison stays on mission',
          doneWhen: 'Keep the Kahana Story in view so the comparison stays on mission (hubs as library, clubs as the room, Aura as the signal).',
          text: 'Keep the Kahana Story in view so the comparison stays on mission (hubs as library, clubs as the room, Aura as the signal).',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        {
          id: 'end-with-a-tandem-flow-the-reader-can-co',
          label: 'End with a tandem flow the reader can copy this week, plus',
          doneWhen: 'End with a tandem flow the reader can copy this week, plus a CTA to kahana.',
          text: 'End with a tandem flow the reader can copy this week, plus a CTA to kahana.io (Library, a relevant hub, or sign-up) with UTM parameters so Mixpanel can attribute sign-ups (SOP 12).',
        },
      ],
    },
    {
      id: 'seo-bar',
      title: 'Drafting and SEO bar',
      steps: [
        {
          id: 'proofread-the-full-draft-yourself-before',
          label: 'Proofread the full draft yourself before Slack, hub upload, or a PR',
          doneWhen: 'Proofread the full draft yourself before Slack, hub upload, or a PR.',
          text: 'Proofread the full draft yourself before Slack, hub upload, or a PR. Do not send a first pass that still reads like a transcript.',
        },
        {
          id: 'do-not-use-em-dashes-in-the-title',
          label: 'Do not use em dashes (-) in the title, meta, or body',
          doneWhen: 'Do not use em dashes (—) in the title, meta, or body.',
          text: 'Do not use em dashes (—) in the title, meta, or body. Readers treat them as a tell that a robot wrote the post. Use a period, a comma, a colon, or a hyphen instead. Same rule as LinkedIn.',
        },
        {
          id: 'include-source-links-company-landscape-r',
          label: 'Include source links: Company Landscape research sources, the platform’s own docs',
          doneWhen: 'Include source links: Company Landscape research sources, the platform’s own docs or pricing page, and Kahana product pages you mention.',
          text: 'Include source links: Company Landscape research sources, the platform’s own docs or pricing page, and Kahana product pages you mention. Make claims checkable.',
        },
        {
          id: 'title-and-meta-description-match-the-liv',
          label: 'Match title and meta description to the live page',
          doneWhen: 'Match title and meta description to the live page.',
          text: 'Title and meta description match the live page. No keyword stuffing. First screen states who it is for and the job.',
        },
        {
          id: 'form-a-keyword-cluster-before-you-lock-the-title',
          label: 'Form a keyword cluster before you lock the title: one primary keyword',
          doneWhen: 'Form a keyword cluster before you lock the title: one primary keyword plus secondaries from Exploding Topics, Google Trends, and Google/YouTube suggested and related searches.',
          text: 'Form a keyword cluster before you lock the title: one primary keyword plus secondaries from Exploding Topics, Google Trends, and Google/YouTube suggested and related searches. SOP 12 is the research playbook. Put the primary in the title and H1; cover secondaries in headings and body. Do not stuff.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'the-live-blog-url-should-appear-in-the-sitemap',
          label: 'Confirm the live blog URL appears in the sitemap after publish',
          doneWhen: 'Confirm the live blog URL appears in the sitemap after publish.',
          text: 'Confirm the live blog URL appears in the sitemap. After publish, update the sitemap and request indexing in Google Search Console if you want to expedite SEO.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'legal-review-if-you-mention-pricing',
          label: 'Send pricing or legal claims to Legal before publish',
          doneWhen: 'Send pricing, user counts, fundraising, medical/financial claims, or someone else’s IP to Legal before publish.',
          text: 'Send pricing, user counts, fundraising, medical/financial claims, or someone else’s IP or likeness to Legal before publish.',
        },
      ],
    },
    {
      id: 'video',
      title: 'YouTube and embeds',
      steps: [
        {
          id: 'when-the-post-teaches-a-workflow',
          label: 'Record a YouTube video and embed it in the blog',
          doneWhen: 'Record a YouTube video for the workflow and embed it near the top of the blog.',
          text: 'Record a YouTube video (job-to-be-done, product on screen, chapters, UTM in the description) and embed it near the top of the blog when the post teaches a workflow.',
          href: '/sops/creating-youtube-videos',
          hrefLabel: 'SOP 11: Creating YouTube Videos',
        },
        {
          id: 'publish-on-the-kahana-hq-youtube-channel',
          label: 'Publish on the Kahana HQ YouTube channel, then paste the embed so',
          doneWhen: 'Publish on the Kahana HQ YouTube channel, then paste the embed so watch time stays on YouTube.',
          text: 'Publish on the Kahana HQ YouTube channel, then paste the embed so watch time stays on YouTube.',
          href: 'https://www.youtube.com/@kahanaHQ',
          hrefLabel: 'YouTube @kahanaHQ',
        },
        {
          id: 'if-a-video-is-not-ready',
          label: 'Publish the post without a video and note the follow-up',
          doneWhen: 'Ship the written guide with screenshots and file a follow-up to add the embed.',
          text: 'Ship the written guide with screenshots rather than delaying the post forever. File a follow-up to add the embed.',
        },
      ],
    },
    {
      id: 'ship',
      title: 'How to ship the draft',
      intro: 'Pick one path. Do not leave a finished draft only on your laptop.',
      steps: [
        {
          id: 'path-a-contribute-directly',
          label: 'Ship the draft yourself in the marketing-site repo',
          doneWhen: 'Request tools access, edit kahana-homepage-public, and follow SOP 13 to ship.',
          text: 'Request tools access and say you will contribute to website/code (GitHub email). Edit kahana-homepage-public, not kahana-web, and never deploy to kahana-public from the product app. SOP 13 is the ship path (Linear card, local test, In Review, a Manager or EM deploys).',
          href: TOOLS_ACCESS_TALLY_URL,
          hrefLabel: 'Get access to tools and data',
        },
        {
          id: 'follow-sop-13-for-the-homepage-blog-repo',
          label: 'Follow SOP 13 for the homepage/blog repo, Linear tracking, local preview, quality',
          doneWhen: 'Follow SOP 13 for the homepage/blog repo, Linear tracking, local preview, quality review, and Heroku deploy.',
          text: 'Follow SOP 13 for the homepage/blog repo, Linear tracking, local preview, quality review, and Heroku deploy.',
          href: '/sops/marketing-website',
          hrefLabel: 'SOP 13: Updating the Marketing Website',
        },
        {
          id: 'path-b-send-the-draft-to-adam-kershner-o',
          label: 'Send the finished draft to Manager on Slack',
          doneWhen: 'Send the draft to Manager on Slack (title, audience, live outline or Google Doc, sources, and any video).',
          text: 'Send the draft to Manager on Slack (title, audience, live outline or Google Doc, sources, and any video).',
        },
        {
          id: 'path-c-upload-the-draft-into-the-kahanah',
          label: 'Upload the draft into the KahanaHQ hub, section Marketing > Blogs (blog',
          doneWhen: 'Upload the draft into the KahanaHQ hub, section Marketing > Blogs (blog drafts).',
          text: 'Upload the draft into the KahanaHQ hub, section Marketing > Blogs (blog drafts). Keep filename or title clear: date, topic, status (draft / review / ready).',
        },
        {
          id: 'internal-review-before-publish',
          label: 'Get internal review before you publish',
          doneWhen: 'Get internal review before you publish.',
          text: 'Get internal review before you publish. The reviewer checks landscape accuracy, together-not-instead framing, em dashes, sources, and the CTA.',
        },
      ],
    },
    {
      id: 'publish-promote',
      title: 'Publish, promote, measure',
      steps: [
        {
          id: 'publish-on-kahana',
          label: 'Publish on kahana.io/blog with title, meta, and links',
          doneWhen: 'Publish on kahana.io/blog with title, meta description, internal links, and the YouTube embed when you have one.',
          text: 'Publish on kahana.io/blog with title, meta description, internal links (Library, About, relevant hub), and the YouTube embed when you have one.',
          href: `${KAHANA_SITE_URL}/blog`,
          hrefLabel: 'kahana.io/blog',
        },
        {
          id: 'confirm-the-new-post-is-in-the-sitemap',
          label: 'Confirm the new post is in the sitemap',
          doneWhen: 'Confirm the new post is in the sitemap.',
          text: 'Confirm the new post is in the sitemap. Update the sitemap if it is missing, then submit the sitemap and request indexing in Google Search Console (SOP 12).',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'promote-on-linkedin-instagram-newsletter-and-sla',
          label: 'Promote on LinkedIn, Instagram, newsletter, and Slack for teammate engagement',
          doneWhen: 'Promote on LinkedIn, Instagram, newsletter, and Slack for teammate engagement.',
          text: 'Promote on LinkedIn, Instagram, newsletter, and Slack for teammate engagement. Category 2 LinkedIn posters can reshare from personal profiles. Official Kahana-account posts go through SOP 8 first.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'measure-search-in-google-search-console-impressi',
          label: 'Measure search in Google Search Console (impressions and clicks on the post',
          doneWhen: 'Measure search in Google Search Console (impressions and clicks on the post URL) and sign-ups in Mixpanel (UTM campaign plus initial referring domain).',
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
    'The draft left the laptop: marketing-site PR, Slack to Manager, or KahanaHQ hub Marketing > Blogs.',
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
          label: 'Run this checklist on marketing campaigns, ads, landing pages, newsletters, and PR',
          doneWhen: 'Run this checklist on marketing campaigns, ads, landing pages, newsletters, and PR visuals before spend or publish.',
          text: 'Run this checklist on marketing campaigns, ads, landing pages, newsletters, and PR visuals before spend or publish.',
        },
        {
          id: 'bg-when-social',
          label: 'Run it on LinkedIn, Instagram, YouTube thumbnails and descriptions, TikTok, and X',
          doneWhen: 'Run it on LinkedIn, Instagram, YouTube thumbnails and descriptions, TikTok, and X.',
          text: 'Run it on LinkedIn, Instagram, YouTube thumbnails and descriptions, TikTok, and X. Same bar as a campaign, even if the post is short. Official-account posts also need SOP 8 (access + Linear marketing-manager review) before schedule or publish.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'bg-when-blog',
          label: 'Run the guidelines on kahana.io/blog drafts',
          doneWhen: 'Run it on kahana.io/blog drafts (title, body, images, embed cards) alongside SOP 5 Blogs.',
          text: 'Run it on kahana.io/blog drafts (title, body, images, embed cards) alongside SOP 5 Blogs.',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
        {
          id: 'bg-when-merch',
          label: 'Run it on merch and mood boards before a vendor quote',
          doneWhen: 'Run it on merch and mood boards before a vendor quote.',
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
          label: 'Open the original Kahana brand guide',
          doneWhen: 'Open the original Kahana brand guide (17 pages).',
          text: 'Open the original Kahana brand guide (17 pages): About, core values, manifesto, brand personality, logo, clearspace, logo usage, color, typography, iconography, patterns and shapes, imagery, digital, print, merchandise.',
          href: KAHANA_BRAND_GUIDE_URL,
          hrefLabel: 'Original brand guide (PDF)',
        },
        {
          id: 'bg-revamp',
          label: 'Overlay current product truth on the original brand guide',
          doneWhen: 'Know a revamped guide is being written. Until then, overlay current product truth from the Kahana Story.',
          text: 'Know that a revamped guide is being written for the Aura Library era. Use it when it exists. Until then, overlay current product truth from the Kahana Story on top of the original visual and voice system.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        {
          id: 'bg-quality',
          label: 'Hold the piece to Level A before it ships',
          doneWhen: 'Do not ship if Level A fails: accurate product, no PII, working links, Kahana spelled correctly.',
          text: 'Do not ship if the piece fails Level A (accurate product, no PII, working links, Kahana spelled correctly), even if it looks on-brand.',
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
          label: 'Keep the manifesto in earshot: “If I was imprisoned alone between four',
          doneWhen: 'Keep the manifesto in earshot: “If I was imprisoned alone between four blank walls with nothing but time, I would sing.',
          text: 'Keep the manifesto in earshot: “If I was imprisoned alone between four blank walls with nothing but time, I would sing.” Creation gives meaning. The goal is a seamless, immersive creative experience, not a lecture.',
          href: KAHANA_BRAND_GUIDE_URL,
          hrefLabel: 'Original brand guide (PDF)',
        },
        {
          id: 'bg-who-creators',
          label: 'Never forget who creators are',
          doneWhen: 'Never forget who creators are.',
          text: 'Never Forget Who Creators Are: minds never slow down, challenge the status quo, create in cycles, need time and space, focus intensely, feel deeply, battle resistance, struggle to believe in themselves, procrastinate, connect the dots, never grow old.',
        },
        {
          id: 'bg-what-creation',
          label: 'Never forget what creation is',
          doneWhen: 'Never forget what creation is.',
          text: 'Never Forget What Creation Is: ceaseless absorption of experience that connects disparate dots. Active, as long as willpower exists. Copy should respect that process, not flatten it into “content.”',
        },
        {
          id: 'bg-tone-to-audience',
          label: 'Speak as a library and club for learners and creators',
          doneWhen: 'Speak as a library and club for learners and creators.',
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
          label: 'Keep the four principles in public copy',
          doneWhen: 'Keep eagerness to learn, accountability, problem-solving, and a strong work ethic in public copy.',
          text: 'Keep the four principles in public copy: eagerness to learn, accountability, problem-solving skills, strong work ethic. Public copy should not mock learning, dodge ownership, or sound lazy.',
          href: '/onboarding/company-rules',
          hrefLabel: 'Onboarding — values',
        },
        {
          id: 'bg-personality',
          label: 'Check the six personality notes from the original guide: Exhilarating Exploration, Killer',
          doneWhen: 'Check the six personality notes from the original guide: Exhilarating Exploration, Killer Cuteness, Comic Spontaneity, Nighttime Intelligence, Aesthetic Appreciation, Power & Activism.',
          text: 'Check the six personality notes from the original guide: Exhilarating Exploration, Killer Cuteness, Comic Spontaneity, Nighttime Intelligence, Aesthetic Appreciation, Power & Activism. A piece can lean on two or three. It should not feel like generic SaaS beige or rage-bait.',
        },
        {
          id: 'bg-no-emdash',
          label: 'Ban em dashes in public marketing copy',
          doneWhen: 'Ban em dashes in public marketing copy (same rule as LinkedIn).',
          text: 'No em dashes in public marketing copy (same rule as LinkedIn and blogs). Proofread before anyone else sees it.',
        },
        {
          id: 'bg-naming',
          label: 'Write Kahana AKA The Aura Library on first mention',
          doneWhen: 'Write first mention as Kahana (AKA “The Aura Library”).',
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
          label: 'Use only the given logo files: stacked, wide, or icon',
          doneWhen: 'Use only the given logo files: stacked, wide, or icon.',
          text: 'Use only the given logo files: stacked, wide, or icon. Do not skew, squash, outline, drop-shadow, swap fonts, move the icon, or place the logo on a background that hides it. Keep minimum clearspace.',
          href: KAHANA_BRAND_GUIDE_URL,
          hrefLabel: 'Original brand guide (PDF) — logo pages',
        },
        {
          id: 'bg-color',
          label: 'Stay in the original palette',
          doneWhen: 'Stay in the original palette.',
          text: 'Stay in the original palette. Primary: #3B4041, #3B675E, #000000. Secondary: #6EA487, #879C98, #FFFFFF, #E9F4E9, #E6CA61, #FEE3EC. Do not introduce a random accent because a template had it.',
        },
        {
          id: 'bg-type',
          label: 'Use Mazzard Soft H and Nunito',
          doneWhen: 'Use Mazzard Soft H (primary) and Nunito (secondary).',
          text: 'Typography: Mazzard Soft H (primary), Nunito (secondary). Do not substitute a lookalike without Marketing Lead approval.',
        },
        {
          id: 'bg-shapes',
          label: 'Use soft lines, curves, and rounded corners',
          doneWhen: 'Use soft lines, curves, circles, and rounded corners.',
          text: 'Patterns and shapes: soft lines, curves, circles, rounded corners. Smooth, fun, approachable, ergonomic. Avoid harsh corporate grids and clip-art.',
        },
        {
          id: 'bg-imagery',
          label: 'Match imagery to the brand guide’s people and libraries',
          doneWhen: 'Match imagery to the guide’s digital/print/merch pages: people and libraries in focus.',
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
          label: 'Describe Kahana as the club and library layer',
          doneWhen: 'Describe current product as Kahana, the club + library layer.',
          text: 'Current product: Kahana is the club + library layer. Hubs hold ebooks, video, audio, newsletters, courses. Clubs are the room. Aura (up to 5/day) is the discovery signal for what people genuinely endorse.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        {
          id: 'bg-no-obsolete',
          label: 'Do not ship obsolete claims as if they are current: “start research',
          doneWhen: 'Do not ship obsolete claims as if they are current: “start research here instead of Google,” “open source verification” as the headline, or kahana.',
          text: 'Do not ship obsolete claims as if they are current: “start research here instead of Google,” “open source verification” as the headline, or kahana.co in CTAs. If you quote the original About for history, label it as heritage, not as today’s product.',
        },
        {
          id: 'bg-together',
          label: 'Use Company Landscape and Market Map the same way SOP 5 does',
          doneWhen: 'Use Company Landscape and Market Map the same way SOP 5 does when you name other platforms.',
          text: 'Use Company Landscape and Market Map the same way SOP 5 does when you name other platforms: together, not against.',
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
          label: 'Stock onboarding kits for the team',
          doneWhen: 'Stock onboarding kits for the team.',
          text: 'Team: onboarding kits, offsites, all-hands, and everyday wear so Kahana shows up in the room.',
        },
        {
          id: 'merch-customers',
          label: 'Pack thank-you merch for customers',
          doneWhen: 'Pack thank-you packs, paid drops, or membership gifts for customers.',
          text: 'Customers: thank-you packs, paid drops, or membership gifts. Confirm we have permission to ship to them and that sizing/address collection is planned.',
        },
        {
          id: 'merch-campaigns',
          label: 'Stage merch for launches and events',
          doneWhen: 'Stage merch for Product Hunt, launches, events, and photo/video props.',
          text: 'Marketing campaigns: Product Hunt, launches, events, photo/video props. Tie the piece to a named campaign and a CTA (kahana.io, a club, a hub).',
        },
        {
          id: 'merch-community',
          label: 'Give merch to club hosts through SOP 2',
          doneWhen: 'Give merch to club hosts through SOP 2.',
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
          label: 'Maintain an ongoing merch mood board (Canva, FigJam, or Figma) for ideas',
          doneWhen: 'Maintain an ongoing merch mood board (Canva, FigJam, or Figma) for ideas and concepts: phrases, colorways, mockups, references, and “not this.',
          text: 'Maintain an ongoing merch mood board (Canva, FigJam, or Figma) for ideas and concepts: phrases, colorways, mockups, references, and “not this.” Tag each idea with audience (team / customer / campaign / community).',
        },
        {
          id: 'merch-board-cadence',
          label: 'Add spotted merch concepts to the mood board',
          doneWhen: 'Add to the board whenever someone spots a concept.',
          text: 'Add to the board whenever someone spots a concept (Slack screenshot is fine). Monthly, Marketing Lead reviews the board and marks explore / later / no.',
        },
        {
          id: 'merch-board-lock',
          label: 'Before production, lock a subset of the board into the drop brief:',
          doneWhen: 'Before production, lock a subset of the board into the drop brief: audience, emotion, must-include marks, off-limits, quantity, budget, and in-hand date.',
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
          label: 'Design (or refine) the artwork in Canva',
          doneWhen: 'Design (or refine) the artwork in Canva.',
          text: 'Design (or refine) the artwork in Canva. Export print-ready files at the vendor’s required DPI and color mode. Keep a source file on the board.',
          href: CANVA_URL,
          hrefLabel: 'Canva',
        },
        {
          id: 'merch-brand',
          label: 'Run SOP 6 on the merch mock',
          doneWhen: 'Run SOP 6 Brand Guidelines on the mock: logo lockup, clearspace, palette.',
          text: 'Run SOP 6 Brand Guidelines on the mock: logo lockup, clearspace, palette, type, naming (Kahana / Aura Library), no em dashes on printed copy, no obsolete kahana.co story.',
          href: '/sops/brand-guidelines',
          hrefLabel: 'SOP 6: Brand Guidelines',
        },
        {
          id: 'merch-legal',
          label: 'Legal check: Kahana wordmarks only as approved',
          doneWhen: 'Legal check: Kahana wordmarks only as approved.',
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
          label: 'Pick the product from Printify’s catalog (t-shirts, bags, bottles, and other SKUs)',
          doneWhen: 'Pick the product from Printify’s catalog (t-shirts, bags, bottles, and other SKUs).',
          text: 'Pick the product from Printify’s catalog (t-shirts, bags, bottles, and other SKUs). Match fabric, print area, and color to the locked mood-board references.',
          href: PRINTIFY_PRODUCTS_URL,
          hrefLabel: 'Printify product catalog',
        },
        {
          id: 'merch-printify-mock',
          label: 'Upload the Canva export, generate mocks, and sanity-check print size',
          doneWhen: 'Upload the Canva export, generate mocks, and sanity-check print size on the actual SKU (chest, tote face, bottle wrap).',
          text: 'Upload the Canva export, generate mocks, and sanity-check print size on the actual SKU (chest, tote face, bottle wrap). Save mocks back to the merch mood board.',
        },
        {
          id: 'merch-sample',
          label: 'Order a sample before a bulk run or campaign giveaway',
          doneWhen: 'Order a sample before a bulk run or campaign giveaway.',
          text: 'Order a sample before a bulk run or campaign giveaway. Photograph it in daylight. If the sample fails brand or quality, fix the file before anyone else gets one.',
        },
        {
          id: 'merch-order',
          label: 'Place the production order with a named fulfillment owner',
          doneWhen: 'Place the production order with a named fulfillment owner and ship-to list.',
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
          label: 'Log inventory, unit cost, and who received what (team, customer, campaign, community)',
          doneWhen: 'Log inventory, unit cost, and who received what (team, customer, campaign, community).',
          text: 'Log inventory, unit cost, and who received what (team, customer, campaign, community). Restocks start from this log, not memory.',
        },
        {
          id: 'merch-photo',
          label: 'Photograph the drop for LinkedIn, Instagram, and the campaign folder',
          doneWhen: 'Photograph the drop for LinkedIn, Instagram, and the campaign folder.',
          text: 'Photograph the drop for LinkedIn, Instagram, and the campaign folder. People wearing it beat flat mocks. File the photos next to the Canva source. Official-account posts of those photos go through SOP 8.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'merch-community-hand',
          label: 'Hand club merch off through SOP 2',
          doneWhen: 'Hand club or keeper merch off with SOP 2 (who gets it, when, honest member counts).',
          text: 'Hand club or keeper merch off with SOP 2 (who gets it, when, honest member counts only). Do not use merch to inflate a club’s story.',
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
    'Personal teammate LinkedIn (Category 1 / 2) is the LinkedIn Guide. This SOP is official Kahana-owned accounts only.',
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
          label: 'Confirm you actually need an official account (you will post or schedule',
          doneWhen: 'Confirm you actually need an official account (you will post or schedule as Kahana, not only engage from your personal profile).',
          text: 'Confirm you actually need an official account (you will post or schedule as Kahana, not only engage from your personal profile). Personal LinkedIn engagement stays on the LinkedIn Guide.',
          href: '/linkedin-guide',
          hrefLabel: 'LinkedIn Guide',
        },
        {
          id: 'social-request',
          label: 'Request access',
          doneWhen: 'Request access.',
          text: 'Request access. Use the tools form if you are still missing Linear or Slack, then ask Marketing Lead (or a Manager) for the credentials doc. Do not share logins sideways with a teammate who was not granted access.',
          href: TOOLS_ACCESS_TALLY_URL,
          hrefLabel: 'Get Access to Tools & Data',
        },
        {
          id: 'social-credentials',
          label: 'Open the restricted credentials doc only after you are granted access',
          doneWhen: 'Open the restricted credentials doc only after you are granted access.',
          text: 'Open the restricted credentials doc only after you are granted access. Use those logins. Never copy passwords into Slack, Linear, a ticket, a screenshot dump, or this data room.',
          href: SOCIAL_ACCOUNTS_CREDENTIALS_DOC,
          hrefLabel: 'Official social logins (restricted — request access)',
        },
        {
          id: 'social-channels',
          label: 'Name which handle you are using',
          doneWhen: 'Name which handle you are using.',
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
          label: 'Check the Linear board for features and updates that are completed (Done)',
          doneWhen: 'Check the Linear board for features and updates that are completed (Done).',
          text: 'Check the Linear board for features and updates that are completed (Done). Those ships are inputs for new official posts, blogs (SOP 5), and YouTube videos (SOP 11). Confirm the UI is live before you announce it.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'social-keywords',
          label: 'Pull a keyword cluster from SOP 12 for topic posts',
          doneWhen: 'Pull a keyword cluster from SOP 12 so the caption and on-screen text match the cluster.',
          text: 'Pull a keyword cluster from SOP 12 so the caption and on-screen text match how people search when the post is built around a topic, not only a ship.',
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
          label: 'Check SOP 6 Brand Guidelines against the caption, visual, and handle',
          doneWhen: 'Check SOP 6 Brand Guidelines against the caption, visual, and handle.',
          text: 'Check SOP 6 Brand Guidelines against the caption, visual, and handle. Colors, type, logo clearspace, voice (together-not-instead), and naming (Kahana AKA “The Aura Library”; Aura is the signal, not the product name).',
          href: '/sops/brand-guidelines',
          hrefLabel: 'SOP 6: Brand Guidelines',
        },
        {
          id: 'social-proofread',
          label: 'Proofread the full post as a human',
          doneWhen: 'Proofread the full post as a human.',
          text: 'Proofread the full post as a human. No typos, leftover placeholder text, or ugly issues (cropped faces, low-res exports, stretched logos, unreadable type, broken line breaks, wrong crop for Stories vs feed vs Reel).',
        },
        {
          id: 'social-no-raw-ai',
          label: 'Do not paste AI-generated copy or images straight to an official account',
          doneWhen: 'Do not paste AI-generated copy or images straight to an official account.',
          text: 'Do not paste AI-generated copy or images straight to an official account. People notice. AI is fine for a portion (outline, alt-text draft, crop ideas) if a human rewrites, fact-checks, and brand-checks before review.',
        },
        {
          id: 'social-utm',
          label: 'Add UTM parameters to every kahana.io link',
          doneWhen: 'Any kahana.io link in the caption, bio, or sticker gets UTM parameters so Mixpanel can attribute new sign-ups.',
          text: 'Any kahana.io link in the caption, bio, or sticker gets UTM parameters (source = this channel, medium = social, campaign = post slug) so Mixpanel can attribute new sign-ups. SOP 12 has the template.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
          template: UTM_LINK_TEMPLATE,
        },
        {
          id: 'social-linear-review',
          label: 'Create a Linear issue for this post',
          doneWhen: 'Create a Linear issue for this post.',
          text: 'Create a Linear issue for this post. Attach the marketing design (Canva export, mock, or video cut) plus caption and intended channel/time. Assign a marketing manager. They run quality review. Do not schedule or post until they approve.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'social-wait',
          label: 'Wait for the marketing manager’s quality review',
          doneWhen: 'Wait for the marketing manager’s quality review.',
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
          label: 'Run Instagram posts through this SOP’s quality gate',
          doneWhen: 'Run Instagram caption, Reel, or Story from @kahanahq through this SOP’s quality gate.',
          text: 'Instagram caption, Reel, or Story from @kahanahq still goes through this SOP’s quality gate (brand, proofread, Linear marketing-manager review) before you schedule or post.',
        },
        {
          id: 'social-yt',
          label: 'Follow SOP 11 after this gate for YouTube uploads',
          doneWhen: 'Follow SOP 11 after this gate for YouTube uploads to @kahanaHQ.',
          text: 'YouTube uploads to @kahanaHQ still follow SOP 11 after this gate (Screen Studio, thumbnail, title/description/timestamps, then this SOP for channel access).',
          href: '/sops/creating-youtube-videos',
          hrefLabel: 'SOP 11: Creating YouTube Videos',
        },
        {
          id: 'social-blogs',
          label: 'Promote the blog after SOP 5 has shipped it',
          doneWhen: 'Promote the blog only after the article itself has shipped through SOP 5.',
          text: 'Promote the blog only after the article itself has shipped through SOP 5. This SOP is only the official social post.',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
        {
          id: 'social-pr',
          label: 'Amplify coverage that already followed SOP 14',
          doneWhen: 'Amplify third-party coverage only after the pitch and logging followed SOP 14.',
          text: 'Amplify third-party coverage only after the pitch and logging followed SOP 14. This SOP is only the official social post.',
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
          label: 'Open native analytics on the platform you posted',
          doneWhen: 'Open native analytics on the platform you posted (YouTube Studio, Instagram Insights).',
          text: 'Open the analytics section of the platform you posted on (YouTube Studio, Instagram Insights, LinkedIn Page analytics, X Analytics, TikTok Analytics). Note impressions, clicks or profile visits, and anything worth repeating.',
        },
        {
          id: 'social-mixpanel',
          label: 'Check Mixpanel sign-ups against this campaign’s UTM',
          doneWhen: 'Check Mixpanel new sign-ups against this campaign’s UTM.',
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
          label: 'Open the author contact list (Authors Contact Details)',
          doneWhen: 'Open the author contact list (Authors Contact Details).',
          text: 'Open the author contact list (Authors Contact Details). This is the candidate shelf: Founders & Builders, product/engineering, Money, Mind & Growth, Myths & Fantasy, Thrills, Literary picks. Confirm the current title and year before you name the book in email.',
          href: AUTHOR_CONTACT_LIST_URL,
          hrefLabel: 'Author contact list',
        },
        {
          id: 'ao-tracker',
          label: 'Open the Author Outreach Tracker (Outreach Log tab)',
          doneWhen: 'Open the Author Outreach Tracker (Outreach Log tab).',
          text: 'Open the Author Outreach Tracker (Outreach Log tab). Columns to fill: Author Name, Book Title, Segment, Source Found, Contact Info, Contact Channel Used, Date Touch 1 / 2 / 3, Message/Template Used, Response (Y/N/Pending), Time to Respond (days), Outcome / Status, What Worked / Didn\'t, Owner. Use Legend & Instructions and Summary when you are unsure.',
          href: AUTHOR_OUTREACH_TRACKER_URL,
          hrefLabel: 'Author outreach tracker',
        },
        {
          id: 'ao-claim',
          label: 'Claim the row before sending',
          doneWhen: 'Claim the row (Owner = you) before sending.',
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
          label: 'Verify the live title',
          doneWhen: 'Verify the live title.',
          text: 'Verify the live title. Tracker rows often say “title TBD” or “see Curios/Goodreads.” Confirm the book exists, is still theirs, and is a realistic rights ask (indie/self-published is usually easier than a celebrity biography via a big house).',
        },
        {
          id: 'ao-contact',
          label: 'Find a real channel: author site contact, publisher, agent, or a public',
          doneWhen: 'Find a real channel: author site contact, publisher, agent, or a public email they invite.',
          text: 'Find a real channel: author site contact, publisher, agent, or a public email they invite. Put it in Contact Info and name the channel (email, form, Instagram DM). One named person, not a blast list.',
        },
        {
          id: 'ao-why-this-book',
          label: 'Write one sentence that is only true of this book (what multiple',
          doneWhen: 'Write one sentence that is only true of this book (what multiple teammates want to discuss).',
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
          label: 'Replace every bracket in the template',
          doneWhen: 'Replace every bracket in the template.',
          text: 'Replace every bracket. Greeting: pick Hi or Hello, and Author or Publisher (not both stacked). Name: your real name in the intro and the sign-off. Title: the verified book title, twice. A/B the company line: “a startup” or “an early-stage startup” (pick one).',
        },
        {
          id: 'ao-demo',
          label: 'Use the recorded product demo in the outreach',
          doneWhen: 'Use the recorded product demo (elevator pitch + screenshare) in the outreach.',
          text: 'A Manager records the product demo (elevator pitch + screenshare). Get a real YouTube URL before you send. Do not leave “[INSERT YOUTUBE VIDEO LINK]” or “[YouTube demo link]” in the email. If the video is not ready, ask Manager and wait, or send without a demo line rather than a broken placeholder.',
          href: '/sops/creating-youtube-videos',
          hrefLabel: 'SOP 11: Creating YouTube Videos',
        },
        {
          id: 'ao-proofread',
          label: 'Proofread as a human',
          doneWhen: 'Proofread as a human.',
          text: 'Proofread as a human. No leftover placeholders, no em dashes, no “Kahana.io” typos, no wrong title. Official social posts about a yes still go through SOP 8.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'ao-template',
          label: 'Copy the template, then rewrite it for this author',
          doneWhen: 'Copy the template, then rewrite it for this author.',
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
          label: 'Send Touch 1',
          doneWhen: 'Send Touch 1.',
          text: 'Send Touch 1. Same day, fill Date - Touch 1, Contact Channel Used, Message/Template Used, Response = Pending, Owner.',
          href: AUTHOR_OUTREACH_TRACKER_URL,
          hrefLabel: 'Author outreach tracker',
        },
        {
          id: 'ao-touch23',
          label: 'Send Touch 2 and Touch 3 on a humane cadence if there',
          doneWhen: 'Send Touch 2 and Touch 3 on a humane cadence if there is no reply.',
          text: 'Send Touch 2 and Touch 3 on a humane cadence (about a week apart unless they asked you to wait) if there is no reply. Log each date. Do not nag past Touch 3 without a new angle (different title, publisher instead of author, or park the row).',
        },
        {
          id: 'ao-response',
          label: 'Log the reply outcome the same day',
          doneWhen: 'Log Response Y/N/Pending, Time to Respond, Outcome / Status, and What Worked / Didn’t.',
          text: 'Log Response Y/N/Pending, Time to Respond (days), Outcome / Status, and What Worked / Didn’t when they reply or you give up, so the next sender is not guessing.',
        },
      ],
    },
    {
      id: 'yes-path',
      title: 'If they say yes',
      steps: [
        {
          id: 'ao-paid-book',
          label: 'Route hub setup (account, paid book at their price, rights/import) to Product',
          doneWhen: 'Route hub setup (account, paid book at their price, rights/import) to Product / Customer Success.',
          text: 'Route hub setup (account, paid book at their price, rights/import) to Product / Customer Success. Put that owner on the tracker row. Authors set the price. Do not promise a rate we cannot support.',
        },
        {
          id: 'ao-club',
          label: 'Stand up the book club around that title',
          doneWhen: 'Stand up the book club around that title (team read first, then public).',
          text: 'Stand up the book club around that title (team read first, public feature only if they want it). Run the club with SOP 2 (wishlist, cycle, Keeper’s Codex).',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
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
    'Write the charter at the start and revise it as decisions land. Most of the work is establishing facts with the person commissioning the project (today: a Manager), not polishing prose.',
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
    'The commissioning stakeholder is a Manager. When another manager commissions a project, the same steps apply with that person in their place.',
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
          label: 'Capture new projects a Manager raises in the weekly 1:1',
          doneWhen: 'Capture new projects a Manager raises in the weekly 1:1.',
          text: 'New projects are generally raised by a Manager in the weekly 1:1 or over Slack. Treat that first conversation as the main chance to establish what the project involves. Written follow-up is slower and less complete than asking while you have their attention.',
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
          label: 'Keep vivid lines when they are a real test of success',
          doneWhen: 'Keep a vivid line when it is a real test of whether the project worked.',
          text: 'Where a vivid line appears (for example a test of whether the company could absorb fifty new joiners tomorrow), record it verbatim. Lines like that carry more weight in the finished charter than a paragraph of reasoning.',
        },
        {
          id: 'pc-listen',
          label: 'Listen while the project is explained',
          doneWhen: 'Listen while the project is explained.',
          text: 'Listen while the project is explained. Ask about anything you cannot picture clearly. Do not work through a questionnaire. More questions will surface once you start drafting.',
        },
        {
          id: 'pc-checklist',
          label: 'Restate the project in your own words before you leave',
          doneWhen: 'Restate the project so you can write the charter without guessing.',
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
          label: 'Do not wait for complete information',
          doneWhen: 'Do not wait for complete information.',
          text: 'Do not wait for complete information. A partial draft shows what is missing better than a list of questions, and stakeholders correct a draft faster than they fill a blank. Write the full document, including the sections you are uncertain about.',
        },
        {
          id: 'pc-example',
          label: 'Use the data-room Project Charter as structure (problem, scope, KPIs, risks)',
          doneWhen: 'Use the data-room Project Charter as structure (problem, scope, KPIs, risks) and as an example of a live Kahana charter, not as a fill-in-the-blank that replaces the conversation.',
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
          label: 'Work through the relevant areas of Kahana as a participant would',
          doneWhen: 'Work through the relevant areas of Kahana as a participant would.',
          text: 'Work through the relevant areas of Kahana as a participant would. Record each question as it occurs, with a proposed answer. Many questions only appear once drafting has started.',
        },
        {
          id: 'pc-verify',
          label: 'Verify every procedure against the product',
          doneWhen: 'Verify every procedure against the product.',
          text: 'Verify every procedure against the product. If the charter asks people to follow a sequence, go to the site and follow that sequence yourself before writing it. Confirm each step exists and behaves as described. A procedure from memory will go stale; the reader cannot tell which part is wrong.',
        },
        {
          id: 'pc-screenshots',
          label: 'Take screenshots as you go and put them in the charter',
          doneWhen: 'Take screenshots as you go and put them in the charter.',
          text: 'Take screenshots as you go and put them in the charter. An image of the button someone should click beats a paragraph of description. If order matters, annotate the screenshot so numbering matches the written steps.',
        },
      ],
    },
    {
      id: 'questions',
      title: '5. Put questions to Manager with proposed solutions',
      steps: [
        {
          id: 'pc-batch',
          label: 'Compile questions into one Slack message',
          doneWhen: 'Compile questions into one Slack message.',
          text: 'Compile questions into one Slack message. Do not send them one by one. Group by decision and include your recommendation for each. A stakeholder answers a proposal faster than an open question. Where the decision is genuinely theirs, set out the options, then state your preference.',
        },
      ],
    },
    {
      id: 'amend',
      title: '6. Amend the charter and reread it in full',
      steps: [
        {
          id: 'pc-reread',
          label: 'Reread answers that move the timeline',
          doneWhen: 'Reread answers that move the timeline, sometimes a lot.',
          text: 'Answers often move the timeline, sometimes a lot. When one element changes, reread the entire charter. Do not patch only the paragraph that was asked about. A phase that made sense in the original sequence may now overlap another; put that overlap in risks rather than leaving participants to discover it.',
        },
      ],
    },
    {
      id: 'risks',
      title: '7. Set out assumptions, risks, and responsibilities',
      intro:
        'Resolve open questions with Manager before the draft goes for review. What belongs at the end of the charter is different: what the project depends on, what could go wrong, and who is answerable.',
      steps: [
        {
          id: 'pc-assumptions',
          label: 'Write assumptions and risks',
          doneWhen: 'Write assumptions and risks.',
          text: 'Assumptions and risks: record anything the project relies on that is not confirmed, plus anything foreseeable that could go wrong (optional participation leaving a function uncovered, overlapping phases, a window too short for the work). Stating a risk plainly is not pessimism. It stops someone discovering it halfway through.',
        },
        {
          id: 'pc-raci',
          label: 'Name the owner for who does what',
          doneWhen: 'Name the owner for who does what.',
          text: 'Who does what: name the owner. State who is responsible for which part. If several people are involved, say who leads, how tasks split, and how often the group meets. A charter that names a phase but not a person leaves everyone assuming somebody else has it.',
        },
        {
          id: 'pc-allocate',
          label: 'Propose owners instead of leaving RACI blanks',
          doneWhen: 'Propose an allocation rather than leaving blanks when tasks need owners.',
          text: 'Propose an allocation rather than leaving blanks when tasks need owners and the stakeholder has not named them. Open the Kahana HQ hub on Kahana, open the collaborator list, and use the names and emails shown there. Open a collaborator’s profile when you need more contact information. A Manager can correct the allocation at review. A proposal they amend is more useful than a blank they have to fill.',
        },
        {
          id: 'pc-directory',
          label: 'Open the roster for function and job title',
          doneWhen: 'Open the roster for a more complete view of function and job title.',
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
          label: 'Submit the complete draft to Manager for review',
          doneWhen: 'Submit the complete draft to Manager for review.',
          text: 'Submit the complete draft to Manager for review. Note anything you assumed and anything still outstanding so they are reviewing with the same information you have.',
        },
        {
          id: 'pc-revise',
          label: 'Act on review comments',
          doneWhen: 'Act on review comments.',
          text: 'Act on review comments. Make the changes and return the revised version. Expect more than one pass on a substantial project. Each round should shrink the open-items list, not leave it unchanged.',
        },
        {
          id: 'pc-circulate',
          label: 'Hand the charter to Manager for circulation',
          doneWhen: 'Hand the charter to Manager for circulation.',
          text: 'Hand the charter to Manager for circulation. They send it to the team. Before they do, confirm the document states how participants should raise changes and by when. If the project begins the next day, say so plainly so nobody assumes a review period that does not exist.',
        },
        {
          id: 'pc-linear',
          label: 'Link the approved charter from the Linear project',
          doneWhen: 'Link the approved charter from the Linear project.',
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
    'A Manager has reviewed and approved it, and it has gone out to everyone taking part.',
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
    'Screen Studio is the capture tool. Slack Manager to request access. Do not buy a license on your own.',
    'Write an outline of the points you must cover. Do not read a script on camera. The outline is a checklist, not a teleprompter.',
    'YouTube titles, descriptions, tags, and on-screen text follow the same public-copy bar as blogs: no em dashes, proofread, Kahana AKA “The Aura Library,” Aura is the discovery signal.',
    'Official @kahanaHQ login is restricted (SOP 8). If you do not have channel access, zip the finished file and send it to Manager on Slack.',
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
          label: 'Check the Linear board for features and updates that are completed (Done)',
          doneWhen: 'Check the Linear board for features and updates that are completed (Done).',
          text: 'Check the Linear board for features and updates that are completed (Done). Those ships are inputs for new YouTube videos, blogs (SOP 5), and official social posts (SOP 8). Confirm the UI path still exists on production before you record.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'yt-questions',
          label: 'Scan questions from users and customers',
          doneWhen: 'Scan questions from users and customers.',
          text: 'Scan questions from users and customers. Contact and support forms are the first input. Repeat questions (how do I start a club, where does Aura show up, how do I add a YouTube video) are better topics than a feature dump.',
          href: CONTACT_PAGE,
          hrefLabel: 'kahana.io/contact',
        },
        {
          id: 'yt-support',
          label: 'Read open tickets and support threads for the same patterns',
          doneWhen: 'Read open tickets and support threads for the same patterns.',
          text: 'Read open tickets and support threads for the same patterns. If several people asked it, the video should answer it on screen.',
          href: SUPPORT_PAGE,
          hrefLabel: 'kahana.io/support',
        },
        {
          id: 'yt-use-cases',
          label: 'Overview a key use case you are introducing',
          doneWhen: 'Overview a key use case we are introducing (book club, video club, or hub).',
          text: 'Overview a key use case we are introducing (book club, video club, hub as library, Aura as discovery). Name the user and the job in one sentence before you open Screen Studio.',
        },
        {
          id: 'yt-features',
          label: 'Overview a key feature from a completed Linear issue',
          doneWhen: 'Overview a key feature from a completed Linear issue.',
          text: 'Overview a key feature from a completed Linear issue. Product confirms the UI path still exists. Record on production or a clean staging hub. No secrets, no other users’ PII on screen.',
        },
        {
          id: 'yt-blog-gaps',
          label: 'Scan the blog',
          doneWhen: 'Scan the blog.',
          text: 'Scan the blog. Any post without a video is a candidate for an accompanying walkthrough. Embed it after publish (SOP 5).',
          href: KAHANA_ABOUT_BLOG_URL,
          hrefLabel: 'Kahana Blog',
        },
        {
          id: 'yt-help-gaps',
          label: 'Scan the Help Center',
          doneWhen: 'Scan the Help Center.',
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
          label: 'Write a short outline: hook, job, and clicks',
          doneWhen: 'Write a short outline: hook, the job, and the clicks you will show.',
          text: 'Write a short outline: hook, the job, the clicks you will show, what success looks like, CTA. Keep it to the points you must cover so you do not ramble or skip the important ones.',
        },
        {
          id: 'yt-no-script',
          label: 'Do not read the outline on camera',
          doneWhen: 'Do not read the outline on camera.',
          text: 'Do not read the outline on camera. Talk to the viewer while you drive the product. If you freeze, pause, then pick up. Pauses get cut in Screen Studio.',
        },
        {
          id: 'yt-together',
          label: 'Say how Kahana is used with YouTube, Discord, or Substack when they',
          doneWhen: 'Say how Kahana is used with YouTube, Discord, or Substack when they are on screen, not instead of them.',
          text: 'Say how Kahana is used with another platform on screen (YouTube, Discord, Substack), not instead of it. Kahana is the club and library layer.',
        },
      ],
    },
    {
      id: 'record',
      title: '3. Record in Screen Studio',
      steps: [
        {
          id: 'yt-access',
          label: 'Ask Manager on Slack for Screen Studio access',
          doneWhen: 'Slack Manager and request Screen Studio access. Wait for the license.',
          text: 'Slack Manager and request Screen Studio access if you do not have it. Wait for the license. Do not screenshot a teammate’s install or share a login.',
          href: SCREEN_STUDIO_URL,
          hrefLabel: 'Screen Studio',
        },
        {
          id: 'yt-example',
          label: 'Watch a short Kahana example before your first recording',
          doneWhen: 'Watch a short Kahana example before your first recording so the pacing is clear.',
          text: 'Watch a short Kahana example before your first recording so the pacing is clear: product on screen, tight cuts, demo not a slide deck. Rashmi Kadwani’s walkthrough is the bar for a quick feature video.',
          href: FEATURE_VIDEO_EXAMPLE_URL,
          hrefLabel: 'Example (Rashmi Kadwani)',
        },
        {
          id: 'yt-capture',
          label: 'Record the real product',
          doneWhen: 'Record the real product.',
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
          label: 'Cut dead air in Screen Studio',
          doneWhen: 'Cut dead air in Screen Studio: long pauses, ums, retries.',
          text: 'In Screen Studio, remove the dead air: long pauses, “um,” retries, and the stretch while a page loads. The cut should feel like one clean pass.',
        },
        {
          id: 'yt-music',
          label: 'Overlay music in Screen Studio',
          doneWhen: 'Overlay music in Screen Studio.',
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
          label: 'Use a person overlay (you, a teammate, or an approved still)',
          doneWhen: 'Use a person overlay (you, a teammate, or an approved still) or a product screenshot/visual of Kahana.',
          text: 'Use a person overlay (you, a teammate, or an approved still) or a product screenshot/visual of Kahana. Viewers should recognize the app, not a generic talking-head template.',
        },
        {
          id: 'yt-thumb-brand',
          label: 'Check SOP 6 against type, logo clearspace, and naming',
          doneWhen: 'Check SOP 6 against type, logo clearspace, and naming.',
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
          label: 'Write a proper title in the job’s plain language',
          doneWhen: 'Write a proper title: the job or feature in plain language.',
          text: 'Write a proper title: the job or feature in plain language (tutorial, use case, or what’s new). No em dashes. Kahana spelled correctly. The viewer should know what they will be able to do.',
        },
        {
          id: 'yt-description',
          label: 'Write the YouTube description from the template',
          doneWhen: 'Write the description from the template: one-sentence job, chapter timestamps, kahana.io CTA with UTM, Help and Blog links, hashtags.',
          text: 'Write the description from the template: one-sentence job, chapter timestamps, kahana.io CTA with UTM (SOP 12), Help and Blog links, hashtags. Proofread. Do not paste raw AI.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
          template: YOUTUBE_DESCRIPTION_TEMPLATE,
        },
        {
          id: 'yt-tags',
          label: 'Add tags and hashtags from a SOP 12 keyword cluster (primary plus',
          doneWhen: 'Add tags and hashtags from a SOP 12 keyword cluster (primary plus secondaries).',
          text: 'Add tags and hashtags from a SOP 12 keyword cluster (primary plus secondaries). Match the video. Do not keyword-stuff unrelated terms.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'yt-chapters',
          label: 'Match timestamps to the cut',
          doneWhen: 'Match timestamps to the cut.',
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
          label: 'Confirm official @kahanaHQ access before you upload',
          doneWhen: 'Confirm official @kahanaHQ access is restricted and you have it, or send the zip to Manager.',
          text: 'Official @kahanaHQ access is restricted. Request it through SOP 8 if you will schedule the upload yourself. Brand-check, proofread, and attach the cut plus title/description in Linear for marketing-manager review before you go Public or schedule.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'yt-channel',
          label: 'Schedule or publish on the Kahana HQ channel after approval',
          doneWhen: 'Schedule or publish on the Kahana HQ channel after approval.',
          text: 'After approval, schedule or publish on the Kahana HQ channel. Share the link in Slack.',
          href: KAHANA_YOUTUBE_CHANNEL_URL,
          hrefLabel: 'YouTube @kahanaHQ',
        },
        {
          id: 'yt-zip',
          label: 'Zip the video and send it to Manager for upload',
          doneWhen: 'Zip the video (and thumbnail if separate) and send it to Manager if you do not have channel access.',
          text: 'Zip the video (and thumbnail if separate) and send it to Manager on Slack with the title, description, tags, hashtags, and timestamps if you do not have channel access. Do not upload to a personal channel as a stand-in for @kahanaHQ.',
        },
        {
          id: 'yt-blog',
          label: 'Embed the video in the matching SOP 5 blog',
          doneWhen: 'Embed the video in the matching blog (SOP 5) so watch time stays on YouTube.',
          text: 'Embed the video in the matching blog (SOP 5) so watch time stays on YouTube when the video teaches a workflow.',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
        {
          id: 'yt-ig',
          label: 'Clip 15–30s for Instagram or LinkedIn if the beat stands alone',
          doneWhen: 'Clip 15–30s for Instagram or LinkedIn if the beat stands alone.',
          text: 'Clip 15–30s for Instagram or LinkedIn if the beat stands alone. Those official posts still go through SOP 8.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'yt-measure',
          label: 'Measure the video after it is live',
          doneWhen: 'Measure the video after it is live.',
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
    'SOP 8 gate passed, or a Manager has the zip and the metadata to upload on @kahanaHQ.',
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
    'Google Search Console is the kahana.io domain property. Request access (your Google account invited) from Marketing Lead or a Manager. Do not assume you already have it.',
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
          label: 'Open Google Search Console on the kahana.io property',
          doneWhen: 'Open Google Search Console on the kahana.io domain property.',
          text: 'Open Google Search Console on the kahana.io domain property (sc-domain:kahana.io). If you cannot see the property, ask Marketing Lead or a Manager to invite your Google account. Use the tools form first if you still lack Kahana analytics access.',
          href: GOOGLE_SEARCH_CONSOLE_URL,
          hrefLabel: 'Google Search Console (kahana.io)',
        },
        {
          id: 'seo-tools',
          label: 'Confirm Mixpanel access as well',
          doneWhen: 'Confirm Mixpanel access as well.',
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
          label: 'Pull a seed cluster from Exploding Topics',
          doneWhen: 'Pull a seed cluster from Exploding Topics.',
          text: 'In Exploding Topics, look for Kahana-relevant topics (book clubs, digital libraries, creator communities, memberships) with high search volume and lower competition or still-rising growth. Skip random consumer fads that we do not serve.',
          href: EXPLODING_TOPICS_URL,
          hrefLabel: 'Exploding Topics',
        },
        {
          id: 'seo-trends',
          label: 'Confirm interest in Google Trends',
          doneWhen: 'Confirm interest in Google Trends.',
          text: 'Confirm interest in Google Trends. Check the time range, related queries, and whether the topic is seasonal or steadily rising. A one-week spike is not a cluster.',
          href: GOOGLE_TRENDS_URL,
          hrefLabel: 'Google Trends',
        },
        {
          id: 'seo-suggested',
          label: 'Type the seed into Google and YouTube search',
          doneWhen: 'Type the seed into Google and YouTube search.',
          text: 'Type the seed into Google and YouTube search. Capture autocomplete (suggested searches) and the related-searches block. Those phrases are how people actually query, not how we nickname the feature internally.',
        },
        {
          id: 'seo-cluster',
          label: 'Form the cluster: one primary keyword (the job of the page',
          doneWhen: 'Form the cluster: one primary keyword (the job of the page or video) and a short list of secondaries (related searches you will cover in headings, description, tags, or body).',
          text: 'Form the cluster: one primary keyword (the job of the page or video) and a short list of secondaries (related searches you will cover in headings, description, tags, or body). File primary + secondaries in the content brief before draft.',
        },
        {
          id: 'seo-use-cluster',
          label: 'Use the cluster on the live asset',
          doneWhen: 'Use the cluster on the live asset.',
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
          label: 'Add utm_source (channel), utm_medium (video, social, content, email), and utm_campaign (slug',
          doneWhen: 'Add utm_source (channel), utm_medium (video, social, content, email), and utm_campaign (slug for this asset).',
          text: 'Add utm_source (channel), utm_medium (video, social, content, email), and utm_campaign (slug for this asset). Use the same campaign slug in the Linear issue and the monthly report.',
          template: UTM_LINK_TEMPLATE,
        },
        {
          id: 'seo-utm-channels',
          label: 'Put UTMs on YouTube, blogs, social, and creator/PR links',
          doneWhen: 'Put UTMs on YouTube descriptions, blog CTAs, official social captions, and creator/PR links.',
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
          label: 'Ship marketing-site and blog changes from kahana-homepage-public',
          doneWhen: 'Ship marketing-site and blog changes from kahana-homepage-public, not kahana-web.',
          text: 'Marketing-site and blog changes ship from kahana-homepage-public, not kahana-web. Follow SOP 13 so the live URL is actually the one you are indexing.',
          href: '/sops/marketing-website',
          hrefLabel: 'SOP 13: Updating the Marketing Website',
        },
        {
          id: 'seo-sitemap-update',
          label: 'Update the sitemap so every live public URL is listed',
          doneWhen: 'Update the sitemap so every live public URL is listed.',
          text: 'Regenerate or update the sitemap so every live public URL is listed (including new blog posts). Titles and meta descriptions must match the live page. No keyword stuffing.',
        },
        {
          id: 'seo-gsc-sitemap',
          label: 'Resubmit the kahana.io sitemap in Search Console',
          doneWhen: 'Resubmit the kahana.io sitemap in Search Console.',
          text: 'In Google Search Console, add or resubmit the sitemap for the kahana.io property. Then open URL Inspection on the new or changed URLs and request indexing (Google’s review of those pages).',
          href: GOOGLE_SEARCH_CONSOLE_URL,
          hrefLabel: 'Google Search Console (kahana.io)',
        },
        {
          id: 'seo-coverage',
          label: 'Check coverage and Performance on a regular pass',
          doneWhen: 'Check coverage and Performance on a regular pass.',
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
          label: 'Track Search Console impressions and clicks for kahana.io',
          doneWhen: 'In Search Console Performance, track impressions and clicks (and queries) for kahana.io and for the URLs you shipped.',
          text: 'In Search Console Performance, track impressions and clicks (and queries) for kahana.io and for the URLs you shipped. This is how search is working, not how social is working.',
          href: GOOGLE_SEARCH_CONSOLE_URL,
          hrefLabel: 'Google Search Console (kahana.io)',
        },
        {
          id: 'seo-social-analytics',
          label: 'Track social in each platform’s own analytics',
          doneWhen: 'Track social in each platform’s own analytics section.',
          text: 'Track social in each platform’s own analytics section: YouTube Studio, Instagram Insights, LinkedIn Page analytics, X Analytics, TikTok Analytics. Note reach, clicks or profile visits, and what to repeat. Official posts still go through SOP 8.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'seo-mixpanel-ref',
          label: 'Check Mixpanel new users and their initial referrer',
          doneWhen: 'Check Mixpanel new users and their initial referrer.',
          text: 'In Mixpanel, look at new users who sign up and their initial referring domain (where the browser came from: google.com, youtube.com, linkedin.com, and so on). Pair that with UTM source / medium / campaign when the link was tagged. Acquisition boards on How We Work list the signup and channel views.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
        {
          id: 'seo-how-we-work',
          label: 'Start Mixpanel from How We Work, then filter',
          doneWhen: 'Start with Acquisition and onboarding on How We Work, then filter to the board you need.',
          text: 'Start with Acquisition & onboarding on How We Work, then filter to production if you are new to Mixpanel boards.',
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
          label: 'Treat public hubs, user profiles, and clubs as indexable product surfaces: real',
          doneWhen: 'Treat public hubs, user profiles, and clubs as indexable product surfaces: real titles, descriptions, and URLs a crawler and an answer engine can cite.',
          text: 'Treat public hubs, user profiles, and clubs as indexable product surfaces: real titles, descriptions, and URLs a crawler and an answer engine can cite. Private or Restricted clubs stay out of search on purpose (SOP 2 visibility).',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
        },
        {
          id: 'seo-ai',
          label: 'Track AI search and answer-engine mentions',
          doneWhen: 'Track AI search and answer-engine mentions.',
          text: 'For AI search and answer engines, keep durable facts in plain language on About and Story (what Kahana is, who it is for, what Aura is). Names stay consistent: Kahana, Aura Library. Do not invent a third product name. After a flagship change, search a few answer surfaces for “Kahana library” and fix hallucinations with page updates, not comment spam.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        {
          id: 'seo-product-linear',
          label: 'Treat product SEO as an ongoing Product and Engineering effort',
          doneWhen: 'Treat product SEO as an ongoing Product + Engineering effort (crawlable pages, metadata).',
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
    'Change the public marketing site in kahana-homepage-public, track it on a Linear card, test locally, move In Review for quality review, then a Manager or an engineering manager deploys to Heroku. Verify on production and mark Complete.',
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
    'You do not deploy to production. A Manager or an engineering manager deploys on Heroku after quality review.',
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
          label: 'Request GitHub access on the tools form',
          doneWhen: 'Request GitHub access on the tools form.',
          text: 'Request GitHub access on the tools form. Say you will contribute to website/code and give the GitHub email you use. Do not assume you have access until the Kahana-LLC invite arrives.',
          href: TOOLS_ACCESS_TALLY_URL,
          hrefLabel: 'Get access to tools and data',
        },
        {
          id: 'mw-repo',
          label: 'Open and clone kahana-homepage-public',
          doneWhen: 'Open and clone kahana-homepage-public.',
          text: 'Open and clone kahana-homepage-public. This is the marketing website (kahana.io / about.kahana.io). Do not clone kahana-web for this work.',
          href: MARKETING_SITE_REPO_URL,
          hrefLabel: 'github.com/Kahana-LLC/kahana-homepage-public',
        },
        {
          id: 'mw-not-product',
          label: 'Keep product frontend changes in kahana-web',
          doneWhen: 'Keep product frontend changes in kahana-web.',
          text: 'Product frontend changes stay in kahana-web. New engineers set up kahana-web, firebase-functions, and this marketing repo in SOP 22. Mixing the two product/marketing repos, or deploying kahana-web to kahana-public, is how the marketing site goes down.',
          href: '/sops/kahana-code-setup',
          hrefLabel: 'SOP 22: Getting Set Up with Kahana Code',
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
          label: 'Log initial website enhancements and bug fixes in the Linear backlog when',
          doneWhen: 'Log initial website enhancements and bug fixes in the Linear backlog when you notice them.',
          text: 'Log initial website enhancements and bug fixes in the Linear backlog when you notice them. A backlog card is enough until someone starts the work. Do not wait for a campaign brief to file a broken link or a copy error.',
          href: LINEAR_ALL_ISSUES_URL,
          hrefLabel: 'Linear all issues',
        },
        {
          id: 'mw-card',
          label: 'Open a Linear card before you edit code',
          doneWhen: 'Open a Linear card before you edit code.',
          text: 'Before you edit code, create or pick up a Linear card for this update. Name the page, the change, and the intended live URL. Link the GitHub branch or PR on the card when you have one.',
        },
        {
          id: 'mw-brand',
          label: 'Follow SOP 6 on public copy',
          doneWhen: 'Follow SOP 6 on public copy (Kahana AKA “The Aura Library,” no em dashes).',
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
          label: 'Make the change on a branch in kahana-homepage-public',
          doneWhen: 'Make the change on a branch in kahana-homepage-public.',
          text: 'Make the change on a branch in kahana-homepage-public. Keep the product app untouched unless the brief required both.',
        },
        {
          id: 'mw-local',
          label: 'Run the site locally and walk the changed pages the way',
          doneWhen: 'Run the site locally and walk the changed pages the way a visitor would: home, the updated landing or blog, links, mobile width, and any CTA to kahana.',
          text: 'Run the site locally and walk the changed pages the way a visitor would: home, the updated landing or blog, links, mobile width, and any CTA to kahana.io or the library. Confirm UTM’d links if this is a campaign (SOP 12).',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'mw-push-github',
          label: 'Push the branch to GitHub so the reviewer can see the diff',
          doneWhen: 'Push the branch to GitHub so the reviewer can see the diff.',
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
          label: 'Move the Linear card to In Review after local testing',
          doneWhen: 'Move the Linear card to In Review after local testing passes.',
          text: 'After local testing passes, move the Linear card to In Review. Attach what to check (URLs, screenshots, the GitHub PR). Do not ask for a Heroku deploy while the card is still In Progress or Backlog.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'mw-qr',
          label: 'Wait for quality review on that card',
          doneWhen: 'Wait for quality review on that card (copy, brand, links).',
          text: 'Wait for quality review on that card (copy, brand, links, and that the change is in the marketing repo). If the reviewer requests fixes, update locally, re-test, and re-attach. Do not skip this step to “just get it live.”',
        },
      ],
    },
    {
      id: 'deploy',
      title: '5. Production deploy (a Manager or engineering manager)',
      intro:
        'Heroku production is a restricted step. Contributors stop at In Review.',
      steps: [
        {
          id: 'mw-heroku',
          label: 'Deploy to Heroku after quality review passes',
          doneWhen: 'Deploy to Heroku after quality review passes.',
          text: 'After quality review passes, a Manager or an engineering manager deploys the update to production on Heroku (marketing app kahana-public). Only they run that deploy. Do not deploy from kahana-web.',
        },
        {
          id: 'mw-prod-verify',
          label: 'Verify the live URLs and CTAs after deploy',
          doneWhen: 'Verify the changed URLs and CTAs on the live site after deploy.',
          text: 'Verify the changed URLs, CTAs, and that the product app is untouched on the live site after deploy. Hard-refresh. Check mobile. If something is wrong, the deployer rolls back or hotfixes. Do not mark Complete on a broken page.',
          href: KAHANA_SITE_URL,
          hrefLabel: 'kahana.io',
        },
        {
          id: 'mw-complete',
          label: 'Mark Complete only after production verify',
          doneWhen: 'Mark Complete only after it is tested and verified in production.',
          text: 'After it is tested and verified in production, move the Linear card to Complete. Drop the live URL in Slack if teammates need to see it.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'mw-seo',
          label: 'Update the sitemap and request indexing after URL changes',
          doneWhen: 'Update the sitemap and request indexing in Search Console when URLs, titles, or indexable pages changed.',
          text: 'Update the sitemap and request indexing in Google Search Console (SOP 12) when URLs, titles, or indexable pages changed.',
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
    'A Manager or an engineering manager deployed to Heroku. Production was verified. The card is Complete.',
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
          label: 'Open the PR / News spreadsheet',
          doneWhen: 'Open the PR / News spreadsheet.',
          text: 'Open the PR / News spreadsheet. This is the living database: outlet, journalist or writer, beat, contact, what we sent, status, and coverage URL. Request access from Marketing Lead or a Manager if the link is closed to you.',
          href: PR_NEWS_SHEET,
          hrefLabel: 'PR / News spreadsheet',
        },
        {
          id: 'pr-claim',
          label: 'Claim or add the row before you send',
          doneWhen: 'Claim or add the row before you send.',
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
          label: 'Start from something real',
          doneWhen: 'Start from something real.',
          text: 'Start from something real. Completed Linear issues (Done), a launch, or a permissioned customer/club story are inputs. Confirm the product or fact is live before you offer it as news.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'pr-story',
          label: 'Write the scoop in one sentence',
          doneWhen: 'Write the scoop in one sentence: what happened and why it matters now.',
          text: 'Write the scoop in one sentence: what happened, why it matters now, who it is for. Then two or three proof points a reporter can check (product URL, quote, metric Legal will stand behind). Kahana AKA “The Aura Library.” Aura is the discovery signal, not the product name.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        {
          id: 'pr-legal',
          label: 'Send claims to Legal before they go public',
          doneWhen: 'Send claims to Legal before they go public.',
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
          label: 'Pick people who actually write about this topic (libraries, book clubs, creator',
          doneWhen: 'Pick people who actually write about this topic (libraries, book clubs, creator tools, startups, the specific launch).',
          text: 'Pick people who actually write about this topic (libraries, book clubs, creator tools, startups, the specific launch). Read one recent piece. If the beat is a mismatch, skip them.',
          href: PR_NEWS_SHEET,
          hrefLabel: 'PR / News spreadsheet',
        },
        {
          id: 'pr-not-authors',
          label: 'Use SOP 9 for authors, not this PR list',
          doneWhen: 'Use SOP 9 for authors and publishers we want as a paid book. This SOP is journalists and outlets.',
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
          label: 'Tailor the pitch to their name and beat',
          doneWhen: 'Tailor the pitch: their name, their beat, or a recent article.',
          text: 'Tailor the pitch: their name, their beat or a recent article, the one-sentence scoop, and a kahana.io CTA with press UTM (SOP 12). No em dashes. Proofread as a human. AI can draft a portion; you rewrite the why-this-beat line.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
          template: PR_PITCH_TEMPLATE,
        },
        {
          id: 'pr-send-log',
          label: 'Send from a real Kahana person, not a no-reply',
          doneWhen: 'Send from a real Kahana person, not a no-reply.',
          text: 'Send from a real Kahana person, not a no-reply. Log date, channel, which scoop, and status on the sheet the same day. One journalist, one thread. Do not attach a 20-page deck unless they asked.',
          href: PR_NEWS_SHEET,
          hrefLabel: 'PR / News spreadsheet',
        },
        {
          id: 'pr-followup',
          label: 'Send one short follow-up, then stop',
          doneWhen: 'Send one short follow-up if there is no reply, then stop.',
          text: 'Send one short follow-up if there is no reply. Then mark Pending or No. Do not chase. Inbound press: log the request, get Legal/founder on facts, answer on their deadline.',
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
          label: 'Archive the live URL on the spreadsheet row',
          doneWhen: 'Archive the live URL on the spreadsheet row.',
          text: 'Archive the live URL on the spreadsheet row. Share it internally in Slack. Add it to the monthly marketing report. Thank the journalist once. Do not argue in the comments.',
          href: PR_NEWS_SHEET,
          hrefLabel: 'PR / News spreadsheet',
        },
        {
          id: 'pr-utm',
          label: 'Add a UTM on every CTA we control',
          doneWhen: 'Add a UTM where we control a CTA.',
          text: 'Where we control a CTA (our quote follow-up, a link we give them, or how we share the piece), use UTM parameters so Mixpanel can attribute sign-ups. SOP 12 is the playbook. Do not demand they use our UTM in their article.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'pr-social',
          label: 'Amplify the article through SOP 8',
          doneWhen: 'Amplify the article through SOP 8.',
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
          label: 'Search TikTok, Instagram, and YouTube for overlapping creators',
          doneWhen: 'Search TikTok, Instagram, YouTube, and similar platforms for creators whose audience overlaps.',
          text: 'Search TikTok, Instagram, YouTube, and similar platforms for creators whose audience overlaps Kahana (BookTok / Bookstagram, learning clubs, creator-ops). Watch enough to know the beat. Note the profile URL and handle.',
        },
        {
          id: 'cp-qualify',
          label: 'Qualify before you add a pile of rows',
          doneWhen: 'Qualify before you add a pile of rows.',
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
          label: 'Open the creator database (Influencer & Creator Profiles)',
          doneWhen: 'Open the creator database (Influencer & Creator Profiles).',
          text: 'Open the creator database (Influencer & Creator Profiles). Add a new row. Put profile URLs in the matching columns: Instagram Link, YouTube Link, TikTok Link. Linktree, media kit, or a form goes in Other Link. Beat and why they fit go in Notes. Request access from Marketing Lead or a Manager if the link is closed to you. Do not keep a private shadow list.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'cp-not-authors',
          label: 'Use SOP 9 for authors instead of this database',
          doneWhen: 'Use SOP 9 instead of this database when the person is an author or publisher you want as a paid book and club title.',
          text: 'Use SOP 9 instead of this database when the person is an author or publisher you want on Kahana as a paid book and club title. Journalists and outlets are SOP 14.',
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
          label: 'Look for a published brand contact',
          doneWhen: 'Look for a published contact: email for brands, business email, media kit.',
          text: 'Look for a published contact: “email for brands,” business email, media kit, press page, or a link in bio (Linktree, Stan, Beacons). Put the address in Email. Put a form or Linktree in Other Link. Prefer that over any guess.',
        },
        {
          id: 'cp-link',
          label: 'Log the public site or form in Other Link when',
          doneWhen: 'Log the public site or form in Other Link when that is the only path.',
          text: 'Log the public site or form in Other Link when that is the only public path. Do not scrape private data or buy email lists.',
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
          label: 'Guess handle@gmail only if nothing is published',
          doneWhen: 'Try handle@gmail.com from the Instagram, TikTok, or YouTube handle when no brand contact is published.',
          text: 'Take the Instagram, TikTok, or YouTube handle (no @, lowercase) and try handle@gmail.com when there is no published brand contact. One extra try is enough if the handle has extra punctuation you can drop. Then stop. Do not generate a list of variants.',
        },
        {
          id: 'cp-chat',
          label: 'Open Google Chat (Kahana Google account)',
          doneWhen: 'Open Google Chat (Kahana Google account).',
          text: 'Open Google Chat (Kahana Google account). Start a new chat and paste the guessed email. If Chat finds a person (a valid chat target appears), put the address in Email and note “Gmail guess, Chat match” in Notes. If Chat finds nobody, the guess is probably wrong. Go back to the bio or note Needs research.',
          href: GOOGLE_CHAT_URL,
          hrefLabel: 'Google Chat',
        },
        {
          id: 'cp-chat-not-pitch',
          label: 'Use Chat only to check the address, not to pitch',
          doneWhen: 'Confirm Chat is only a check that the address might exist. Do not send the Kahana pitch as a Google Chat message.',
          text: 'Use Chat only as a check that the address might exist. Do not send the Kahana pitch as a Google Chat message. Do not treat a Chat match as confirmed brand inbox. If a published “email for brands” exists, use that instead of the guess.',
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
          label: 'Confirm Email or a DM path is filled',
          doneWhen: 'Confirm Email, a published DM-for-collabs path, or Other Link is filled.',
          text: 'Confirm Email, a published “DM for collabs” path, or Other Link is filled. Do not put emails in the Instagram or YouTube columns.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'cp-sop16',
          label: 'Open SOP 16',
          doneWhen: 'Open SOP 16.',
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
          label: 'Open the creator database',
          doneWhen: 'Open the creator database.',
          text: 'Open the creator database. Confirm this is a creator collab (not an author, not a journalist). Put the address in Email. Put Instagram, TikTok, and YouTube URLs in those columns. Linktree or a form stays in Other Link.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'co-columns',
          label: 'Add outreach columns if they are missing (Kahana menu → Set up):',
          doneWhen: 'Add outreach columns if they are missing (Kahana menu → Set up): First Name, Acknowledgment, Channel, Outreach Status, Sent At.',
          text: 'Add outreach columns if they are missing (Kahana menu → Set up): First Name, Acknowledgment, Channel, Outreach Status, Sent At. Channel is Email, Instagram DM, TikTok DM, YouTube, or Form.',
        },
        {
          id: 'co-pick',
          label: 'Set Channel to Email if Email is filled',
          doneWhen: 'Set Channel to Email if Email is filled.',
          text: 'Channel = Email if Email is filled, unless their bio says “collabs via IG/TikTok DM only.” Then use that DM and leave Email for later. If there is no Email, pick the platform they actually use for brand messages. Do not email and DM the same person on the same day.',
        },
        {
          id: 'co-ready',
          label: 'Fill First Name as they would expect',
          doneWhen: 'Fill First Name as they would expect.',
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
          label: 'Set SENDER_NAME to the person sending',
          doneWhen: 'Set SENDER_NAME to the person sending.',
          text: 'On Config, set SENDER_NAME to the person sending. TEST_EMAIL is that inbox for the email preview. REPLY_TO is optional (for example adam@kahana.io). Email sends from Kahana Workspace, not a personal Gmail.',
        },
        {
          id: 'co-demo',
          label: 'Set DEMO_VIDEO to the latest product demo on @kahanaHQ',
          doneWhen: 'Set DEMO_VIDEO to the latest product demo on @kahanaHQ.',
          text: 'Set DEMO_VIDEO to the latest product demo on @kahanaHQ. If nothing newer has shipped, use the current default. Record a new cut in SOP 11 when the walkthrough is stale.',
          href: CREATOR_OUTREACH_DEMO_VIDEO_URL,
          hrefLabel: 'Current demo video',
        },
        {
          id: 'co-youtube',
          label: 'Confirm that URL is still the right cut by checking the channel',
          doneWhen: 'Confirm that URL is still the right cut by checking the channel.',
          text: 'Confirm that URL is still the right cut by checking the channel. Swap Config the same day you upload a newer demo.',
          href: KAHANA_YOUTUBE_CHANNEL_URL,
          hrefLabel: 'Kahana YouTube (@kahanaHQ)',
        },
        {
          id: 'co-calendar',
          label: 'Set CALENDAR_URL to the booking link for this collab conversation (the Manager’s Calendly',
          doneWhen: 'Set CALENDAR_URL to the booking link for this collab conversation (the Manager’s Calendly unless Marketing Lead names a different event).',
          text: 'Set CALENDAR_URL to the booking link for this collab conversation (the Manager’s Calendly unless Marketing Lead names a different event).',
          href: ADAM_CALENDLY_URL,
          hrefLabel: 'Manager’s Calendly',
        },
        {
          id: 'co-links',
          label: 'Keep ABOUT_URL and SITE_URL with creator_outreach UTMs (SOP 12)',
          doneWhen: 'Keep ABOUT_URL and SITE_URL with creator_outreach UTMs (SOP 12).',
          text: 'Keep ABOUT_URL and SITE_URL with creator_outreach UTMs (SOP 12). For DMs, change utm_source to instagram, tiktok, or youtube and utm_medium=dm.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'co-hubs',
          label: 'Lead HUB_PROOF with Amy Wang (past collab): The Ultimate Guide to getting',
          doneWhen: 'Lead HUB_PROOF with Amy Wang (past collab): The Ultimate Guide to getting Internship/Research Opportunities.',
          text: 'Lead HUB_PROOF with Amy Wang (past collab): The Ultimate Guide to getting Internship/Research Opportunities. Add a second public hub only if Marketing Lead named one. The email script will not send while HUB_PROOF still says “replace this”.',
          href: AMY_WANG_HUB_URL,
          hrefLabel: 'Amy Wang’s hub',
        },
        {
          id: 'co-amy-yt',
          label: 'Link Amy Wang’s YouTube as @wamyy5',
          doneWhen: 'Link Amy Wang’s YouTube as @wamyy5.',
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
          label: 'Open Apps Script from the creator database',
          doneWhen: 'Open Apps Script from the creator database: Extensions → Apps Script.',
          text: 'In the creator database: Extensions → Apps Script. Delete any stub code. Paste the script below. Save (title: Kahana creator outreach). Reload the sheet. You should see a Kahana menu.',
          code: true,
          template: CREATOR_OUTREACH_APPS_SCRIPT,
        },
        {
          id: 'co-setup',
          label: 'Run Kahana Set up Config and outreach columns',
          doneWhen: 'Run Kahana → Set up Config and outreach columns.',
          text: 'Kahana → Set up Config and outreach columns. Authorize Gmail and Sheets when Google asks. Scopes: send email as you, and edit this spreadsheet. Do not add extra APIs.',
        },
        {
          id: 'co-template',
          label: 'Confirm this is the email the script sends',
          doneWhen: 'Confirm this is the email the script sends.',
          text: 'This is the email the script sends. Row fields fill First Name and the acknowledgment. Config fills links, hubs, demo, and calendar. A leftover bracket in Acknowledgment blocks that row.',
          template: CREATOR_OUTREACH_EMAIL_TEMPLATE,
        },
        {
          id: 'co-test',
          label: 'Send a test to yourself first',
          doneWhen: 'Run Kahana → Send test to me.',
          text: 'Kahana → Send test to me. It uses the first Ready Email row but delivers to TEST_EMAIL. Read it. The creator is not marked Sent.',
        },
        {
          id: 'co-quota',
          label: 'Check remaining email quota before a bulk send',
          doneWhen: 'Run Kahana → Check remaining email quota.',
          text: 'Kahana → Check remaining email quota. About 100/day on consumer Gmail, about 1,500 on Kahana Workspace. Do not run this from a personal account.',
        },
        {
          id: 'co-send',
          label: 'Send all Ready rows',
          doneWhen: 'Run Kahana → Send all Ready rows.',
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
          label: 'Send from the official Kahana account for that platform (@kahanahq / @KahanaHQ)',
          doneWhen: 'Send from the official Kahana account for that platform (@kahanahq / @KahanaHQ).',
          text: 'Send from the official Kahana account for that platform (@kahanahq / @KahanaHQ). Get access through SOP 8. Do not DM collab pitches from a personal intern login unless Marketing Lead named that account.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'co-dm-template',
          label: 'Paste the DM template, then fill First Name and Acknowledgment',
          doneWhen: 'Paste the DM template, then fill First Name context, Acknowledgment, and hub proof.',
          text: 'Paste the DM template, then fill First Name context, Acknowledgment, hub proof, demo, calendar, and the matching UTM source. Opener is Collab? Keep it one message, not a five-bubble drip.',
          template: CREATOR_OUTREACH_DM_TEMPLATE,
        },
        {
          id: 'co-dm-send',
          label: 'Send on the Channel you logged',
          doneWhen: 'Send on the Channel you logged.',
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
          label: 'Watch the sending inbox, REPLY_TO, and the official DMs',
          doneWhen: 'Watch the sending inbox, REPLY_TO, and the official DMs.',
          text: 'Watch the sending inbox, REPLY_TO, and the official DMs. Log yes / no / parked / booked and the next step in Notes. One short follow-up is enough unless they asked you to wait.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'co-book',
          label: 'Send the Manager’s Calendly if they said yes but did not book',
          doneWhen: 'Send the Manager’s Calendly (unless Marketing Lead named a different event) if they said yes but did not book.',
          text: 'Send the Manager’s Calendly (unless Marketing Lead named a different event) if they said yes but did not book. If they already booked, put the date on the row.',
          href: ADAM_CALENDLY_URL,
          hrefLabel: 'Manager’s Calendly',
        },
        {
          id: 'co-paid-thread',
          label: 'Do not agree to pay in the outreach thread',
          doneWhen: 'Do not agree to pay. Still invite them to the call and follow SOP 17.',
          text: 'Do not agree to pay if they say they only do paid collabs or want upfront payment in the thread. Still invite them to the call (or take rates here) and follow SOP 17. Do not ghost the row.',
          href: '/sops/creator-collab-calls',
          hrefLabel: 'SOP 17: Creator Collab Calls',
        },
        {
          id: 'co-sop17',
          label: 'Open SOP 17 for the call itself: listen, share the offer, help',
          doneWhen: 'Open SOP 17 for the call itself: listen, share the offer, help them set up an account and a hub, invite us as collaborators.',
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
  who: 'Anyone on the booked collab call (usually Marketing Lead or a Manager; intern only if named on the calendar)',
  when: 'When they book time from SOP 16 (the Manager’s Calendly unless Marketing Lead named a different event). Prep the same day. Log the same day.',
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
          label: 'Open the creator database',
          doneWhen: 'Open the creator database.',
          text: 'Open the creator database. Confirm this is a SOP 16 yes or booked call (not an author, not a journalist). Read Acknowledgment, their reply, and any rates already in Notes.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'cc-offer',
          label: 'Have the talking points before the call',
          doneWhen: 'Have the talking points before the call.',
          text: 'Have the talking points, current demo, and Amy Wang’s hub ready to screen-share. The offer is still white-glove hub, complimentary Growth plan, permissioned success story, and featured placement.',
          href: AMY_WANG_HUB_URL,
          hrefLabel: 'Amy Wang’s hub',
        },
        {
          id: 'cc-demo',
          label: 'Use the latest product demo on @kahanaHQ',
          doneWhen: 'Use the latest product demo on @kahanaHQ.',
          text: 'Use the latest product demo on @kahanaHQ. If nothing newer has shipped, use the current default.',
          href: CREATOR_OUTREACH_DEMO_VIDEO_URL,
          hrefLabel: 'Current demo video',
        },
        {
          id: 'cc-calendar',
          label: 'Join on time from the booking link they used (the Manager’s Calendly unless',
          doneWhen: 'Join on time from the booking link they used (the Manager’s Calendly unless Marketing Lead named a different event).',
          text: 'Join on time from the booking link they used (the Manager’s Calendly unless Marketing Lead named a different event). Do not move them to a personal Zoom they cannot find.',
          href: ADAM_CALENDLY_URL,
          hrefLabel: 'Manager’s Calendly',
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
          label: 'Keep the talking points next to the call',
          doneWhen: 'Keep the talking points next to the call.',
          text: 'Keep the talking points next to the call. Fill them with what this creator actually said. No leftover brackets in anything you paste later.',
          template: CREATOR_COLLAB_CALL_TALKING_POINTS,
        },
        {
          id: 'cc-point-a',
          label: 'Ask what they make, who it is for, and what they want',
          doneWhen: 'Ask what they make, who it is for, and what they want a hub to hold (and what should stay off it).',
          text: 'Ask what they make, who it is for, and what they want a hub to hold (and what should stay off it). Write that vision in Notes. Do not invent a hub they did not describe.',
        },
        {
          id: 'cc-alongside',
          label: 'Describe Kahana as sitting alongside TikTok, Instagram, and YouTube',
          doneWhen: 'Describe Kahana (AKA The Aura Library) as sitting alongside TikTok, Instagram, and YouTube.',
          text: 'Kahana (AKA "The Aura Library") sits alongside TikTok, Instagram, and YouTube. We are not a replacement. Aura is the discovery signal, not the product name.',
          href: KAHANA_SITE_URL,
          hrefLabel: 'kahana.io',
        },
        {
          id: 'cc-share-offer',
          label: 'Share the offer in plain language: they create a Kahana account, start',
          doneWhen: 'Share the offer in plain language: they create a Kahana account, start a hub, and invite our team as collaborators.',
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
          label: 'Ask once whether they collab as offered or paid-only',
          doneWhen: 'Ask once: are they open to this collab as offered, or do they only do paid / upfront work.',
          text: 'Ask once whether they are open to this collab as offered, or only do paid / upfront work, if they have not said how they work with brands. If they are in without a fee, skip the rest of this section and go to section 4.',
        },
        {
          id: 'cc-rates',
          label: 'Ask their rates and what they have in mind for a collab',
          doneWhen: 'Ask their rates and what they have in mind for a collab in general, paid or not.',
          text: 'Ask their rates and what they have in mind for a collab in general, paid or not. One honest answer is enough. Do not haggle them down on the call.',
        },
        {
          id: 'cc-log-rates',
          label: 'Log rates and park paid collabs the same day',
          doneWhen: 'Log rates, what they wanted, and Paid collab = parked the same day.',
          text: 'Same day, put rates, what they wanted, and Paid collab = parked (or similar) in Notes. Leave Outreach Status as parked, not yes. Next person should not have to guess.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'cc-no-fee',
          label: 'Park the row if they require upfront payment',
          doneWhen: 'Park the row and say we may revisit later if they require upfront payment.',
          text: 'Park the row and say we may revisit later if they require upfront payment. Be warm. Do not imply we will pay next quarter unless Marketing Lead said so.',
        },
        {
          id: 'cc-why',
          label: 'Explain the unpaid offer without promising $20K',
          doneWhen: 'Explain that the hub is a revenue-generating asset and we do not prioritize paying creators up front.',
          text: 'Explain that we believe the offer is valuable as it is: we help them create a revenue-generating asset that can live on the library. Creators have earned money from hubs they built with us, including over $20K at times. That is why we do not prioritize paying creators up front. Do not promise this person $20K. Do not put that number in a public story without permission and Legal (SOP 5).',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
        {
          id: 'cc-still-in',
          label: 'Continue to section 4 if they collab without a fee',
          doneWhen: 'Continue to section 4 if they still want to collab without a creator fee. Otherwise thank them and park the row.',
          text: 'Continue to section 4 if they hear that and still want to collab without a creator fee. If they do not, thank them, park the row, and stop. Do not keep pitching a paid talent deal.',
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
          label: 'Help them create their Kahana account on the call',
          doneWhen: 'Help them create their own Kahana account and start the hub on the call.',
          text: 'Help them create their own Kahana account and start the hub on the call. They invite our team as collaborators (Marketing + CS owners, emails from the Kahana HQ hub collaborator list). Do not create the hub under a Kahana employee login and pretend it is theirs.',
          href: KAHANA_SITE_URL,
          hrefLabel: 'kahana.io',
        },
        {
          id: 'cc-build',
          label: 'White-glove the hub while it is still private',
          doneWhen: 'Migrate the content they pointed us at, structure the hub, and keep it private until they review.',
          text: 'Migrate the content they pointed us at, structure the hub, and optimize it while it is still private. They review. When it matches their expectations, they make it public on the library. If the call runs out of time, keep building after. Do not rush publish.',
          href: KAHANA_LIBRARY_URL,
          hrefLabel: 'Kahana library',
        },
        {
          id: 'cc-growth',
          label: 'Turn on the complimentary Growth plan after they have an account',
          doneWhen: 'Ask Manager (or whoever can grant a comped Growth plan) to turn it on after they have an account.',
          text: 'Ask Manager (or whoever can grant a comped Growth plan) to turn on the complimentary Growth plan (large files, unlimited hubs) after they have an account. Do not send a public coupon or promise a dollar amount we cannot support.',
        },
        {
          id: 'cc-story',
          label: 'Ship the success story through SOP 5 and SOP 8',
          doneWhen: 'Ship the success story via SOP 5 (blog) and SOP 8 (official social) after they agree.',
          text: 'Ship the success story via SOP 5 (blog) and SOP 8 (official social) after they agree. Get permission on name, quotes, and screens before anything public. Legal if the story includes numbers or a named brand.',
          href: '/sops/blog-publishing',
          hrefLabel: 'SOP 5: Blogs',
        },
        {
          id: 'cc-featured',
          label: 'Ask Product / Marketing to place the live hub in featured collections',
          doneWhen: 'Ask Product / Marketing to place the live hub in featured collections (and any other featured library placement we are actually running).',
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
          label: 'Log the call notes the same day',
          doneWhen: 'Log the call notes the same day.',
          text: 'Same day, log: date of call, vision, paid-collab screen (in / parked + rates), account created yes/no, hub URL even if private, Growth granted yes/no/pending, next step.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'cc-sop18',
          label: 'Open SOP 18 once the hub is public',
          doneWhen: 'Open SOP 18 once the hub is public.',
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
          label: 'Open the creator database',
          doneWhen: 'Open the creator database.',
          text: 'Open the creator database. Confirm Outreach Status is a yes and the hub is public on the library. Put the live hub URL in Notes (or a Hub URL column if you added one). Request access from Marketing Lead or a Manager if the sheet is closed to you.',
          href: CREATOR_OUTREACH_SHEET_URL,
          hrefLabel: 'Creator database (Influencer & Creator Profiles)',
        },
        {
          id: 'pc-not-authors',
          label: 'Keep paid-book authors on SOP 9',
          doneWhen: 'Keep authors and publishers hosting a paid book for a club on SOP 9.',
          text: 'Authors and publishers hosting a paid book for a club stay on SOP 9, then SOP 2 for the club. This SOP is creator collabs from SOP 16 outreach and SOP 17 calls (white-glove hub, Growth plan, featured).',
          href: '/sops/creator-collab-calls',
          hrefLabel: 'SOP 17: Creator Collab Calls',
        },
        {
          id: 'pc-amy',
          label: 'Use Amy Wang’s live hub as the example of what “public” looks',
          doneWhen: 'Use Amy Wang’s live hub as the example of what “public” looks like when you are unsure: views and purchasers show on the hub page.',
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
          label: 'Open the live hub while signed in as a collaborator',
          doneWhen: 'Open the live hub while signed in as a collaborator or on the public page.',
          text: 'Open the live hub while signed in as a collaborator or on the public page. Record views, purchasers (or that it is free), file count, and Aura if it is shown. Date the snapshot in Notes (for example “2026-08-26: 1200 views, 8 purchasers”).',
        },
        {
          id: 'pc-mixpanel',
          label: 'Check Mixpanel for hub or purchase events',
          doneWhen: 'Check Mixpanel for hub or purchase events tied to this hub.',
          text: 'In Mixpanel, look for hub or purchase events tied to this hub if Analytics has a board. Prefer those events over a random explore. If nothing exists yet, ask Analytics to pin a collab-hub board rather than guessing.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
        {
          id: 'pc-stripe',
          label: 'Confirm Kahana’s 5% take with Finance for paid hubs',
          doneWhen: 'Confirm Kahana’s take (5%) with Finance / Stripe for that period if the hub is paid.',
          text: 'Confirm Kahana’s take (5%) with Finance / Stripe for that period if the hub is paid. Do not export purchaser names or emails to Slack or to the creator. SOP 12 UTMs only matter if the creator used our tracked links.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
        {
          id: 'pc-cadence',
          label: 'Check collab-hub results on day 0, 7, 30, then quarterly',
          doneWhen: 'Log a dated line on the row at public, day 7, day 30, then quarterly.',
          text: 'Log a dated line on the row the day the hub goes public (baseline), day 7, day 30, then quarterly. If views or purchases jump or stall hard, check that week.',
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
          label: 'Use the template',
          doneWhen: 'Use the template.',
          text: 'Use the template. Fill real numbers from this snapshot. Same channel as SOP 16 (email or official DM). No leftover brackets. Do not inflate views or invent Mixpanel stats.',
          template: POST_COLLAB_FOLLOWUP_TEMPLATE,
        },
        {
          id: 'pc-help',
          label: 'Say we are ready to collab this way again',
          doneWhen: 'Say we are always ready and happy to collaborate this way again.',
          text: 'Say we are always ready and happy to collaborate this way again: add content, brainstorm, and build hubs. If they ever want to do it again, we would love to. Then ask what would help now: another hub, a club, bio / Linktree copy, a featured collection we can give, a Growth plan snag, or a product bug. Route product gaps to Linear. Do not promise a placement or rate we cannot support.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'pc-log',
          label: 'Log the send date, channel, and numbers the same day',
          doneWhen: 'Log the send date, channel, numbers you shared, and their reply the same day.',
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
          label: 'Stand up a Restricted club for collab creators',
          doneWhen: 'Stand up (or use) a Restricted or invite-link Kahana club for collab creators.',
          text: 'Stand up (or use) a Restricted or invite-link Kahana club for collab creators. Create, invite, and monitor it with SOP 2. Keep it small and active, not a silent dump of every past pitch. Name the club clearly so members know it is partners, not a public book club.',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
        },
        {
          id: 'pc-invite',
          label: 'Invite only people who opted in on the check-in',
          doneWhen: 'Invite only people who opted in on the check-in.',
          text: 'Invite only people who opted in on the check-in (or on the original collab call). Do not add them because they have a hub. Log Club = yes / no / pending on the row.',
        },
        {
          id: 'pc-intro',
          label: 'Ask each creator before sending a warm intro',
          doneWhen: 'Ask each of them first, then send one intro with why and both hub URLs.',
          text: 'Ask each of them first when two opted-in creators share a beat or ask to meet people. Then send one intro with why, both hub URLs, and an optional calendar link. Do not make a group thread of everyone.',
          template: POST_COLLAB_INTRO_TEMPLATE,
          href: ADAM_CALENDLY_URL,
          hrefLabel: 'Manager’s Calendly',
        },
        {
          id: 'pc-monitor-club',
          label: 'Treat the collab club like any other hall',
          doneWhen: 'Treat the collab club like any other hall: Members count, Feed, events.',
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
    'If you are in Customer Success and need Resend, ask Manager on Slack. Do not open a personal Resend account for Kahana mail. Do not paste API keys in Slack.',
    'Customer Success team members are added to the list of people who get email notifications when there is a PMF reply, NPS reply, support request, or contact-form fillout. If you are on CS and those emails are not arriving, ask Manager on Slack.',
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
          label: 'Ask Manager on Slack for Resend access',
          doneWhen: 'Ask Manager on Slack for Resend access and wait until they add you.',
          text: 'Ask Manager on Slack for Resend access if you are in Customer Success and do not have it. Wait until they add you. Do not share login screenshots in a public channel.',
        },
        {
          id: 'cs-notify-list',
          label: 'Add CS to the email-notification list for PMF and NPS',
          doneWhen: 'Confirm CS members are on the email-notification list for PMF replies, NPS replies, support requests, and contact-form fillouts.',
          text: 'Add CS members to the email-notification list for PMF replies, NPS replies, support requests, and contact-form fillouts. Confirm those emails reach your Kahana inbox. If they do not, ask Manager on Slack.',
        },
        {
          id: 'cs-resend',
          label: 'Open Resend Emails',
          doneWhen: 'Open Resend Emails.',
          text: 'Open Resend Emails. This is the send log (delivered, bounced, complained, delayed). Bookmark it.',
          href: RESEND_EMAILS_URL,
          hrefLabel: 'Resend Emails',
        },
        {
          id: 'cs-mixpanel-home',
          label: 'Confirm Mixpanel Kahana project access (tools tally / How We Work)',
          doneWhen: 'Confirm Mixpanel Kahana project access (tools tally / How We Work).',
          text: 'Confirm Mixpanel Kahana project access (tools tally / How We Work). Same project as the rest of the company.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
        {
          id: 'cs-how-we-work',
          label: 'Read How We Work for lifecycle email Mixpanel clusters',
          doneWhen: 'Read How We Work for Mixpanel clusters, including lifecycle email.',
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
          label: 'Open Mixpanel board 11358694',
          doneWhen: 'Open Mixpanel board 11358694.',
          text: 'Open Mixpanel board 11358694. Confirm volume looks like a real send (not zero, not a sudden spike of bounces). Note anything off.',
          href: MIXPANEL_LIFECYCLE_BOARD_A_URL,
          hrefLabel: 'Mixpanel board 11358694',
        },
        {
          id: 'cs-board-b',
          label: 'Open Mixpanel board 11358702',
          doneWhen: 'Open Mixpanel board 11358702.',
          text: 'Open Mixpanel board 11358702. Same check: delivering and landing, not just queued.',
          href: MIXPANEL_LIFECYCLE_BOARD_B_URL,
          hrefLabel: 'Mixpanel board 11358702',
        },
        {
          id: 'cs-board-c',
          label: 'Open Mixpanel board 11358761',
          doneWhen: 'Open Mixpanel board 11358761.',
          text: 'Open Mixpanel board 11358761. Same check. If one board 404s or is empty, ask Analytics before assuming the sequence is dead.',
          href: MIXPANEL_LIFECYCLE_BOARD_C_URL,
          hrefLabel: 'Mixpanel board 11358761',
        },
        {
          id: 'cs-resend-spot',
          label: 'Spot-check delivered vs bounced vs complained in Resend',
          doneWhen: 'Spot-check the same window in Resend Emails: delivered vs bounced vs complained.',
          text: 'Spot-check the same window in Resend Emails: delivered vs bounced vs complained. If Resend and Mixpanel disagree, write both in Slack to Manager / Engineering. Do not guess which is right.',
          href: RESEND_EMAILS_URL,
          hrefLabel: 'Resend Emails',
        },
        {
          id: 'cs-escalate-mail',
          label: 'Escalate a send stop to Engineering the same day',
          doneWhen: 'Ping Engineering (and a Manager if Resend is the issue) the same day if sends stop or bounce rates jump.',
          text: 'Ping Engineering (and a Manager if Resend is the issue) the same day if sends stop, bounce or complaint rates jump, or nothing is landing. File Linear if it is a product or functions bug.',
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
          label: 'Check with Engineering before anyone changes copy or audience',
          doneWhen: 'Check with Engineering before anyone changes copy or audience.',
          text: 'Before anyone changes copy or audience, confirm the trigger and Mixpanel events with Engineering. Do not edit firebase-functions from this SOP.',
        },
        {
          id: 'cs-suppress',
          label: 'Never re-enable users who bounced or complained',
          doneWhen: 'Never re-enable users who bounced or complained.',
          text: 'Never re-enable users who bounced or complained. Check suppression flags in Resend before a resurrection pass.',
          href: RESEND_EMAILS_URL,
          hrefLabel: 'Resend Emails',
        },
        {
          id: 'cs-resurrect',
          label: 'Define inactive before you run a resurrection send',
          doneWhen: 'Define inactive before you run a resurrection send.',
          text: 'Resurrection: inactive is defined, there is a real offer, and there is a stop rule. Measure opens, clicks, and whether they came back in Mixpanel (platform=email where that exists). One pass is enough until they act or the stop rule hits.',
        },
        {
          id: 'cs-no-spam',
          label: 'Do not stack extra “just checking in” mail on top',
          doneWhen: 'Do not stack extra “just checking in” mail on top of the sequence.',
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
          label: 'Read current PMF and NPS in the data room',
          doneWhen: 'Read current PMF and NPS in the data room.',
          text: 'Read current PMF and NPS in the data room. Sample size matters. Do not treat a handful of replies as a company-wide score.',
          href: '/nps',
          hrefLabel: 'PMF + NPS (data room)',
        },
        {
          id: 'cs-nps-sheet',
          label: 'Open the PMF+NPS sheet and request access if needed',
          doneWhen: 'Open the live output sheet and request access if it is closed to you.',
          text: 'Open the live output sheet (same source as the data-room page) and request access if it is closed to you.',
          href: PMF_NPS_OUTPUT_SHEET_URL,
          hrefLabel: 'PMF+NPS output sheet',
        },
        {
          id: 'cs-nps-route',
          label: 'Route detractors, “very disappointed,” bugs, and feature asks to Linear',
          doneWhen: 'Route detractors, “very disappointed,” bugs, and feature asks to Linear with the quote and context.',
          text: 'Route detractors, “very disappointed,” bugs, and feature asks to Linear with the quote and context. Close the loop with the person if they left a way to reply. Legal if a public story will use a quote or a number (SOP 5).',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'cs-nps-copy',
          label: 'Do not change NPS/PMF questions, timing, or who gets the email without',
          doneWhen: 'Do not change NPS/PMF questions, timing, or who gets the email without Product.',
          text: 'Do not change NPS/PMF questions, timing, or who gets the email without Product. CS monitors that the mail sent and that replies were handled.',
        },
      ],
    },
    {
      id: 'tickets',
      title: '5. Suggestions, contacts, support, and feedback',
      intro:
        'Every inbound gets a record, a priority, and a reply or an owned Linear issue. Support and contact fillouts also notify the CS list by email. The user already got an email receipt that we received it. Aim to respond quickly.',
      steps: [
        {
          id: 'cs-support',
          label: 'Intake tickets via kahana.io/support',
          doneWhen: 'Intake via kahana.io/support. Record, categorize, prioritize, investigate, respond.',
          text: 'Intake via kahana.io/support. Record, categorize, prioritize, investigate, respond. Same day if it is Critical or High. They already got an email receipt that we received the request. Aim to reply quickly anyway. The receipt is not the answer.',
          href: SUPPORT_PAGE,
          hrefLabel: 'kahana.io/support',
        },
        {
          id: 'cs-contact',
          label: 'Treat kahana.io/contact fillouts as tickets too',
          doneWhen: 'Contact-form fillouts (kahana.io/contact) are tickets too.',
          text: 'Contact-form fillouts (kahana.io/contact) are tickets too. They also get an email receipt. Do not leave them unread because they did not arrive as “support.” Reply quickly.',
          href: CONTACT_PAGE,
          hrefLabel: 'kahana.io/contact',
        },
        {
          id: 'cs-feedback',
          label: 'Intake in-app feedback as bugs, ideas, or other',
          doneWhen: 'Intake in-app / improve-survey feedback as bugs, feature ideas, or other.',
          text: 'In-app / improve-survey feedback (bugs, feature ideas, other) is intake. Teammates and hosts can file there. Turn it into Linear when it is a product gap.',
          href: IMPROVE_SURVEY,
          hrefLabel: 'Improvement survey',
        },
        {
          id: 'cs-priority',
          label: 'Treat Critical as availability, security, payments, or large user impact',
          doneWhen: 'Treat Critical as availability, security, payments, or large numbers of users.',
          text: 'Priority: Critical is availability, security, payments, or large numbers of users. High is core functionality for an individual. Medium is a non-critical bug. Low is a general question or suggestion. Same day if it is Critical or High.',
        },
        {
          id: 'cs-escalate',
          label: 'Reproduce before you escalate to Engineering',
          doneWhen: 'Reproduce before you escalate to Engineering.',
          text: 'Engineering escalation: reproduce, document expected vs actual, screenshots, severity, and impact, then file Linear. Feature requests need the problem and how often it shows up, then Product prioritizes.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'cs-clubs',
          label: 'File club-host logging in Kahana feedback',
          doneWhen: 'File club-related logging by a host in What can we improve in the app.',
          text: 'Club-related logging by a host (What can we improve in the app) is SOP 2. Do not make the host file twice. CS still closes the loop if it landed in this inbox.',
          href: '/sops/community-building',
          hrefLabel: 'SOP 2: Community Building',
        },
        {
          id: 'cs-close',
          label: 'Close the loop with the user quickly',
          doneWhen: 'Close the loop with the user quickly.',
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
    'Suppressions were honored. No extra resurrection mail after the stop rule. Resend access and the PMF / NPS / support / contact notification list for CS went through Manager on Slack.',
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
    'HR and Project Management should have access to the time log output sheet. Request access from HR or a Manager if it is closed to you. Do not download a private copy and treat that as the roster.',
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
          label: 'Confirm the reminder list is Kahana HQ hub members',
          doneWhen: 'Confirm the reminder list is members of the Kahana HQ hub.',
          text: 'Confirm the reminder list is members of the Kahana HQ hub. Confirm someone is on that hub before you chase them as “internal.” Contractors or guests who are not HQ members are not on this reminder.',
          href: KAHANA_HQ_HUB_URL,
          hrefLabel: 'Kahana HQ hub',
        },
        {
          id: 'tl-form',
          label: 'Submit the weekly Time Log Tally form Friday EOD',
          doneWhen: 'Submit the weekly Time Log Tally form Friday EOD if you are on that roster.',
          text: 'Everyone on that roster submits the weekly Time Log Tally form Friday EOD. Link the onboarding step if they ask how to write it.',
          href: TIME_LOG_TALLY_URL,
          hrefLabel: 'Time Log (Tally form)',
        },
        {
          id: 'tl-onboarding',
          label: 'Point new hires at the Friday time-log ritual',
          doneWhen: 'Point new hires at the Friday ritual in onboarding.',
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
          label: 'Open the time log output sheet',
          doneWhen: 'Open the time log output sheet.',
          text: 'Open the time log output sheet. HR and PM should already have access. If you are on HR or PM and cannot open it, request access from HR or a Manager. Do not chase people from a stale export.',
          href: TIME_LOG_OUTPUT_SHEET_URL,
          hrefLabel: 'Time log output sheet',
        },
        {
          id: 'tl-week',
          label: 'Filter the sheet to the current Friday’s week',
          doneWhen: 'Filter or read the current Friday’s week.',
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
          label: 'DM anyone missing from this Friday’s time log',
          doneWhen: 'Reach out on Slack (DM) if they do not appear on the sheet for this Friday.',
          text: 'Reach out on Slack (DM) if they do not appear on the sheet for this Friday. Ask if there has been an emergency, illness, or another reason. Give them a chance to fill it or to say they were out.',
        },
        {
          id: 'tl-note',
          label: 'Note PTO or illness next to the week, not medical detail',
          doneWhen: 'Note that they were out next to the week so payroll is not guessing.',
          text: 'Note that they were out next to the week so payroll and planning are not guessing if they were out (emergency, illness, PTO, or another reason). Do not put medical detail in a public channel.',
          href: TIME_LOG_OUTPUT_SHEET_URL,
          hrefLabel: 'Time log output sheet',
        },
        {
          id: 'tl-still-missing',
          label: 'Remind them of the Tally form and Friday EOD if they',
          doneWhen: 'Remind them of the Tally form and Friday EOD if they are working and still have not submitted.',
          text: 'Remind them of the Tally form and Friday EOD if they are working and still have not submitted. Chase Monday morning if Friday EOD passed, not in the next retro as a surprise.',
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
          label: 'Use the time log when pay or attendance is in question',
          doneWhen: 'Use the time log when pay or attendance is in question.',
          text: 'HR: when pay or attendance is in question, reconcile PTO or sick against this week’s log. Do not invent hours. Keep medical detail private.',
        },
        {
          id: 'tl-pm',
          label: 'Roll submitted hours into planning',
          doneWhen: 'Roll submitted hours into planning (what actually moved vs what we planned).',
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

export const ANALYTICS_ALIASES = {
  'reporting-insights': 'analytics',
  'analytics-innovation': 'analytics',
  'supporting-functions-with-insights': 'analytics',
  'analytics-insights': 'analytics',
}

export const ANALYTICS_SOP = playbook({
  id: 'analytics',
  title: 'Analytics',
  category: 'Analytics',
  owner: 'Analytics',
  who: 'Analytics team members. Every other function is a customer of this SOP.',
  when: 'Weekly: reach out to other functions, then report. Deeper monthly. Same week when a function asks, and when a recurring question is still answered by hand.',
  format: 'checklist',
  description:
    'Analytics supports every other function at Kahana. Reach out first: ask if they need help analyzing data or gaining insights. Then work with them on reporting insights, innovation in how we measure, and teaching them to reuse the answer.',
  keywords: [
    'analytics',
    'insights',
    'mixpanel',
    'reporting',
    'innovation',
    'support',
    'outreach',
    'dashboard',
  ],
  notes: [
    'Analytics is not a ticket queue. Do not wait for someone to file a request. Slack people in other functions and ask if they can use help analyzing data or gaining insights to improve their work.',
    'An insight is one paragraph plus a Mixpanel (or sheet) link, and either a next action or an explicit “no change yet.” Chart dumps are not the job.',
    'Product Mixpanel events and new boards still need Product and Engineering agreement. Do not invent events or private dashboards. Filter Mixpanel to production unless you are debugging.',
    'Lifecycle mail delivery and landing is SOP 19. Analytics can help interpret those boards; CS still owns the inbox and Resend.',
  ],
  sections: [
    {
      id: 'outreach',
      title: '1. Reach out first',
      intro:
        'Analytics exists to improve other functions. The week starts with a question to them, not a dashboard you already like.',
      steps: [
        {
          id: 'an-who',
          label: 'Pick the functions you will cover this week',
          doneWhen: 'Pick the functions you will cover this week (Marketing, Product, Customer Success).',
          text: 'Pick the functions you will cover this week (Marketing, Product, Customer Success, Sales, Engineering, Finance, Community, HR, and anyone else shipping). You do not need to ping every person every week, but you do need to rotate so no function goes quiet.',
        },
        {
          id: 'an-slack',
          label: 'Slack them (DM or the smallest relevant thread)',
          doneWhen: 'Slack them (DM or the smallest relevant thread).',
          text: 'Slack them (DM or the smallest relevant thread). Ask if they can use help analyzing data or gaining insights to improve. Offer reporting, a better measurement path, or sitting with them on an existing board. Do not wait for them to invent a ticket.',
        },
        {
          id: 'an-decision',
          label: 'Write the decision they need and the deadline',
          doneWhen: 'Write down the decision they are trying to make and the deadline if they say yes.',
          text: 'Write down the decision they are trying to make and the deadline if they say yes. If they say not this week, note it and come back on the next rotation. “We are fine” is a valid answer.',
        },
        {
          id: 'an-mixpanel',
          label: 'Open Mixpanel Kahana (production unless debugging)',
          doneWhen: 'Open Mixpanel Kahana (production unless debugging).',
          text: 'Open Mixpanel Kahana (production unless debugging). How We Work lists the board clusters. Reuse those boards. Do not create a new Mixpanel board for this SOP unless Product agrees it is a named, shared board.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
        {
          id: 'an-hww',
          label: 'Read How We Work for Mixpanel clusters first',
          doneWhen: 'Read How We Work for Mixpanel clusters, then go back to the function’s question.',
          text: 'Read How We Work for Mixpanel clusters (activity, acquisition, discovery, retention, monetization, email) if you are new. Then go back to the function’s question.',
          href: '/how-we-work',
          hrefLabel: 'How We Work',
        },
      ],
    },
    {
      id: 'reporting',
      title: '2. Reporting insights',
      intro:
        'Turn Mixpanel (and other sources) into a decision, not a screenshot pack.',
      steps: [
        {
          id: 'an-question',
          label: 'Start from a question a function actually has',
          doneWhen: 'Start from a question a function actually has: growth, clubs, paywall, retention.',
          text: 'Start from a question a function actually has: growth, clubs, paywall, retention, campaign, support volume, or whatever they named in outreach. If there is no decision attached, do not spend the week on a vanity chart.',
        },
        {
          id: 'an-pull',
          label: 'Pull Mixpanel first',
          doneWhen: 'Pull Mixpanel first.',
          text: 'Pull Mixpanel first. Add finance, CS, or a sheet only if that source answers the same decision. Prefer a named board URL over an export.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
        {
          id: 'an-write',
          label: 'Write the insight in one paragraph plus the chart or board link',
          doneWhen: 'Write the insight in one paragraph plus the chart or board link.',
          text: 'Write the insight in one paragraph plus the chart or board link. Say what we should do differently, or that the data cannot support a change yet. Send it to the function that asked (or that you reached out to), not only into a private note.',
        },
      ],
    },
    {
      id: 'innovation',
      title: '3. Innovation',
      intro:
        'Improve how Kahana measures, not only how we screenshot Mixpanel.',
      steps: [
        {
          id: 'an-pain',
          label: 'Name the painful manual step with that function',
          doneWhen: 'Name the painful manual step with that function: CSV, screenshot, tribal filter.',
          text: 'Name the painful manual step with that function: CSV, screenshot, tribal filter, or a question that still takes a person every Friday. That is the innovation candidate.',
        },
        {
          id: 'an-propose',
          label: 'Propose a shared board, saved cohort, or event change',
          doneWhen: 'Propose a shared board, saved cohort, or event change.',
          text: 'Propose a shared board, saved cohort, or event change. Product and Engineering must agree before new tracking. Do not add ad-hoc Mixpanel track() calls or PascalCase events.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel project',
        },
        {
          id: 'an-ship',
          label: 'Ship a small version, document the board or event on How We',
          doneWhen: 'Ship a small version, document the board or event on How We Work, and retire the manual path.',
          text: 'Ship a small version, document the board or event on How We Work, and retire the manual path. If it is not worth shipping, write off the experiment with a reason and stop repeating the screenshot ritual as if it were a process.',
          href: '/how-we-work',
          hrefLabel: 'How We Work',
        },
      ],
    },
    {
      id: 'support',
      title: '4. Supporting functions with insights',
      intro:
        'The goal is that they can re-open the answer next week. Analytics sitting in every meeting is a failure mode.',
      steps: [
        {
          id: 'an-clarify',
          label: 'Clarify the decision and the deadline',
          doneWhen: 'Clarify the decision and the deadline.',
          text: 'Clarify the decision and the deadline. Push back on fishing expeditions (“just show me everything”). Same quality bar as reporting: one insight, one next action or no-change.',
        },
        {
          id: 'an-teach',
          label: 'Teach the function to open the existing Mixpanel board',
          doneWhen: 'Teach the function to open the existing Mixpanel board rather than building a snowflake chart.',
          text: 'Prefer teaching the function to open the existing Mixpanel board over building a snowflake chart. Sit with them once. Bookmark How We Work or the board URL in their Slack thread.',
          href: '/how-we-work',
          hrefLabel: 'How We Work',
        },
        {
          id: 'an-shared',
          label: 'Add a new cut to a shared, named Mixpanel board',
          doneWhen: 'Add it to a shared, named board, not a private explore, if a new cut is needed.',
          text: 'Add it to a shared, named board, not a private explore, if a new cut is needed. Product still owns whether a charter KPI gets a new board.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel project',
        },
        {
          id: 'an-cs',
          label: 'Point lifecycle-mail questions at SOP 19',
          doneWhen: 'Point them at SOP 19 and help interpret if the question is mail, NPS/PMF, or the CS inbox.',
          text: 'Point them at SOP 19 and help interpret if the question is lifecycle mail delivery, landing, NPS/PMF replies, or the CS inbox. Do not take over Resend or the ticket queue.',
          href: '/sops/lifecycle-emails-and-tickets',
          hrefLabel: 'SOP 19: Lifecycle Emails and Tickets',
        },
      ],
    },
  ],
  doneWhen: [
    'This week’s outreach happened: named people in other functions were asked if they need help analyzing data or gaining insights.',
    'Each insight they (or you) took on has a written paragraph, a Mixpanel or sheet link, and a next action or an explicit “no change.”',
    'A painful manual path was replaced, scheduled, or written off. New events or boards went through Product/Engineering.',
    'The function can re-open the answer next week without Analytics in the room, or a follow-up is on the calendar.',
  ],
})

export const KAHANA_CODE_SETUP_ALIASES = {
  'product-code-access-setup': 'kahana-code-setup',
  'getting-set-up-with-kahana-code': 'kahana-code-setup',
  'engineering-setup': 'kahana-code-setup',
  'kahana-codebases': 'kahana-code-setup',
}

export const KAHANA_CODE_SETUP_SOP = playbook({
  id: 'kahana-code-setup',
  title: 'Getting Set Up with Kahana Code',
  category: 'Engineering',
  owner: 'Engineering Lead',
  who: 'New engineers (and anyone who has never run the product app or marketing site locally)',
  when: 'First week, after you submit the tools form. Finish this before you take a Linear card.',
  format: 'checklist',
  description:
    'Introductory setup: get GitHub access, request .env.development from Manager, clone and run the product app, backend, and marketing website locally. Then you can take cards on Linear.',
  keywords: [
    'github',
    'onboarding',
    'env',
    'setup',
    'kahana-web',
    'firebase-functions',
    'kahana-homepage-public',
    'linear',
    'local',
  ],
  notes: [
    'This SOP is setup, not shipping. Product frontend work stays in kahana-web. Marketing-site shipping is SOP 13. Never push kahana-web to the Heroku app kahana-public.',
    'Request the .env.development file from Manager on Slack. Do not paste it back into Slack, a ticket, or an AI prompt. Do not commit it.',
    'You are not ready to take a Linear card until the product app and the marketing site both load locally.',
  ],
  sections: [
    {
      id: 'access',
      title: '1. Get GitHub and tools access',
      intro:
        'Fill the form. Do not DM Manager for GitHub until you have submitted it.',
      steps: [
        {
          id: 'csu-form',
          label: 'Submit the Get Access to Tools & Data form',
          doneWhen: 'Submit the Get Access to Tools & Data form.',
          text: 'Submit the Get Access to Tools & Data form. Say you will contribute to code and give the GitHub email you use. Watch that inbox (and spam) for the Kahana-LLC invite, Linear, and Mixpanel. Access usually arrives within 24 hours.',
          href: TOOLS_ACCESS_TALLY_URL,
          hrefLabel: 'Get Access to Tools & Data',
        },
        {
          id: 'csu-onboarding',
          label: 'Submit the tools-access form once during onboarding',
          doneWhen: 'Submit the same tools-access form once. Do not open a second GitHub account for Kahana.',
          text: 'Submit the same tools-access form once if you are still in onboarding. Do not open a second GitHub account for Kahana.',
          href: '/onboarding/tools-access',
          hrefLabel: 'Onboarding: tools access',
        },
        {
          id: 'csu-linear-invite',
          label: 'Confirm you can open the Kahana Linear workspace after the invite',
          doneWhen: 'Confirm you can open the Kahana Linear workspace after the invite.',
          text: 'Confirm you can open the Kahana Linear workspace after the invite. You will pick work here after local setup, not before.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
        {
          id: 'csu-mixpanel',
          label: 'Confirm Mixpanel access',
          doneWhen: 'Confirm Mixpanel access.',
          text: 'Confirm Mixpanel access. This is the board shared with engineering onboarding. Filter to production unless you are debugging. Do not invent extra Mixpanel boards.',
          href: MIXPANEL_ENGINEERING_BOARD_URL,
          hrefLabel: 'Mixpanel board 11355238',
        },
      ],
    },
    {
      id: 'env',
      title: '2. Get .env.development from Manager',
      intro:
        'The product app will not run locally without this file.',
      steps: [
        {
          id: 'csu-env-ask',
          label: 'Slack Manager and ask for the .env.development file',
          doneWhen: 'Slack Manager and ask for the .env.development file so you can run Kahana locally.',
          text: 'Slack Manager and ask for the .env.development file so you can run Kahana locally. Wait until they send it. Do not copy someone else’s file from a laptop or a chat archive.',
        },
        {
          id: 'csu-env-place',
          label: 'Put .env.development in kahana-web; never commit it',
          doneWhen: 'Put .env.development in the product frontend repo where local-dev says it belongs. Never commit it.',
          text: 'Put .env.development in the product frontend repo (kahana-web) where the README / scripts/local-dev.md say it belongs. Never commit it. Never paste the contents into Slack, Linear, or an AI prompt.',
          href: KAHANA_WEB_REPO_URL,
          hrefLabel: 'kahana-web on GitHub',
        },
      ],
    },
    {
      id: 'product',
      title: '3. Run the product app (kahana-web)',
      intro:
        'This is the Kahana library application, not kahana.io marketing pages.',
      steps: [
        {
          id: 'csu-web-clone',
          label: 'Clone the product frontend',
          doneWhen: 'Clone the product frontend.',
          text: 'Clone the product frontend. This is kahana-web.',
          href: KAHANA_WEB_REPO_URL,
          hrefLabel: 'github.com/Kahana-LLC/kahana-web',
        },
        {
          id: 'csu-web-run',
          label: 'Follow scripts/local-dev.md and confirm the app loads',
          doneWhen: 'Follow scripts/local-dev.md in that repo and confirm the app loaded locally.',
          text: 'Follow scripts/local-dev.md in that repo. With .env.development in place, run the app locally (npm start) and open a known page so you know it actually loaded.',
        },
        {
          id: 'csu-web-not-marketing',
          label: 'Do not use kahana-web for kahana.io marketing',
          doneWhen: 'Do not use this repo for kahana.io / about.kahana.io. Do not deploy it to Heroku app kahana-public.',
          text: 'Do not use this repo for kahana.io / about.kahana.io. Do not deploy it to Heroku app kahana-public. That took the marketing site down in July 2026.',
          href: '/sops/marketing-website',
          hrefLabel: 'SOP 13: Updating the Marketing Website',
        },
      ],
    },
    {
      id: 'backend',
      title: '4. Clone the backend (firebase-functions)',
      intro:
        'Product API and functions live here. You need the repo even if you are mostly frontend this week.',
      steps: [
        {
          id: 'csu-fn-clone',
          label: 'Clone the backend',
          doneWhen: 'Clone the backend.',
          text: 'Clone the backend.',
          href: FIREBASE_FUNCTIONS_REPO_URL,
          hrefLabel: 'github.com/Kahana-LLC/firebase-functions',
        },
        {
          id: 'csu-fn-dev',
          label: 'Bookmark Firebase DEV',
          doneWhen: 'Bookmark Firebase DEV.',
          text: 'Bookmark Firebase DEV. Use it when you are debugging local or non-prod behavior.',
          href: FIREBASE_DEV_CONSOLE_URL,
          hrefLabel: 'Firebase DEV (kahana-dev)',
        },
        {
          id: 'csu-fn-prod',
          label: 'Bookmark Firebase PROD so you can tell the two projects apart',
          doneWhen: 'Bookmark Firebase PROD so you can tell the two projects apart.',
          text: 'Bookmark Firebase PROD so you can tell the two projects apart. Opening the console is not permission to ship unreviewed functions to production.',
          href: FIREBASE_PROD_CONSOLE_URL,
          hrefLabel: 'Firebase PROD (kahana-15c2a)',
        },
      ],
    },
    {
      id: 'marketing',
      title: '5. Run the marketing website (kahana-homepage-public)',
      intro:
        'kahana.io / about.kahana.io is a different repo from the product app.',
      steps: [
        {
          id: 'csu-mkt-clone',
          label: 'Clone the marketing website',
          doneWhen: 'Clone the marketing website.',
          text: 'Clone the marketing website. This is kahana-homepage-public. You need it so you can take marketing-site Linear cards later, and so you never mix it up with kahana-web.',
          href: MARKETING_SITE_REPO_URL,
          hrefLabel: 'github.com/Kahana-LLC/kahana-homepage-public',
        },
        {
          id: 'csu-mkt-run',
          label: 'Install dependencies, then run npm run dev (or yarn dev)',
          doneWhen: 'Install dependencies, then run npm run dev (or yarn dev).',
          text: 'Install dependencies, then run npm run dev (or yarn dev). Open http://localhost:3000 and confirm the homepage loads. Follow SETUP.md in that repo if the README is not enough.',
          href: MARKETING_SITE_REPO_URL,
          hrefLabel: 'kahana-homepage-public on GitHub',
        },
        {
          id: 'csu-mkt-ship',
          label: 'Use SOP 13 to ship marketing-site changes',
          doneWhen: 'Use SOP 13 to ship. Local marketing-site run is setup only.',
          text: 'Local run is setup. Shipping a marketing-site change is SOP 13 (Linear card, local test, In Review, a Manager or an engineering manager deploys Heroku). You do not deploy kahana-public yourself on day one.',
          href: '/sops/marketing-website',
          hrefLabel: 'SOP 13: Updating the Marketing Website',
        },
      ],
    },
    {
      id: 'linear',
      title: '6. Take Linear cards only after local is running',
      intro:
        'Setup is done so you can pull real work, not so you can sit on access.',
      steps: [
        {
          id: 'csu-issues',
          label: 'Open the Linear all-issues view',
          doneWhen: 'Open the Linear all-issues view.',
          text: 'Open the Linear all-issues view. This is the backlog engineers pick from. Take the highest unassigned ready issue you can actually finish. Assign yourself and move it to In Progress.',
          href: LINEAR_ALL_ISSUES_URL,
          hrefLabel: 'Linear all issues',
        },
        {
          id: 'csu-select',
          label: 'Pick one Linear card at a time',
          doneWhen: 'Pick one Linear card at a time. Split it if it is too big.',
          text: 'Day-to-day: one card at a time, split if it is too big, comment on Linear when blocked. Do not start a side quest that is not on this view.',
          href: LINEAR_ALL_ISSUES_URL,
          hrefLabel: 'Linear all issues',
        },
        {
          id: 'csu-which-repo',
          label: 'Read the card before you branch: product UI is kahana-web, backend',
          doneWhen: 'Read the card before you branch: product UI is kahana-web, backend is firebase-functions, marketing pages are kahana-homepage-public.',
          text: 'Read the card before you branch: product UI is kahana-web, backend is firebase-functions, marketing pages are kahana-homepage-public. If it is unclear, comment on the Linear issue before you clone the wrong repo again.',
        },
      ],
    },
  ],
  doneWhen: [
    'GitHub org invite accepted. kahana-web, firebase-functions, and kahana-homepage-public are cloned.',
    '.env.development is in place from Manager. It is not in git, Slack, or a prompt.',
    'The product app loads locally (kahana-web). The marketing site loads at http://localhost:3000 (kahana-homepage-public).',
    'You can open Linear all issues and take a card in the matching repo.',
  ],
})

export const SECURITY_SOP_ALIASES = {
  pentest: 'penetration-testing',
  'pen-testing': 'penetration-testing',
  'pii': 'pii-handling',
  governance: 'platform-governance',
  moderation: 'content-moderation',
  'reporting-cybersecurity-threats': 'reporting-cyber-threats',
  'reporting-cybersecurity-threats-attacks': 'reporting-cyber-threats',
  'cybersecurity-threats': 'reporting-cyber-threats',
}

export const PENETRATION_TESTING_SOP = playbook({
  id: 'penetration-testing',
  title: 'Penetration Testing',
  category: 'Security',
  owner: 'Engineering Lead / Security',
  who: 'Security owner plus contracted testers. Engineers file and close findings.',
  when: 'On a planned cadence, and before a launch that adds a lot of new surface (auth, payments, admin, uploads).',
  format: 'checklist',
  description:
    'Scoped tests with written findings. Not surprise attacks on production. There is no dedicated Linear pentest card yet; related vibe-coded hygiene is KAH-66 (In Review).',
  keywords: ['pentest', 'security', 'vulnerability', 'staging'],
  notes: [
    'There is no Linear card titled penetration testing. Do not invent one in this SOP. If Engineering wants the next test tracked, file it from Linear all issues and link it here later.',
    'KAH-66 (In Review) is related engineering hygiene (secrets, IDOR, webhooks, backups). It is not a pentest. Confirm status on the card.',
    'This SOP does not include exploit steps, payloads, or how to attack Kahana. Scope, rules of engagement, and a written report only.',
  ],
  sections: [
    {
      id: 'scope',
      title: '1. Write scope and rules of engagement',
      intro: 'No test starts until this is written down.',
      steps: [
        {
          id: 'pt-env',
          label: 'Name the environment',
          doneWhen: 'Name the environment.',
          text: 'Name the environment. Prefer staging over production. If production is required, Manager and the Engineering Lead sign that in writing first.',
        },
        {
          id: 'pt-scope',
          label: 'Write what is in scope (apps, APIs, accounts) and what is out',
          doneWhen: 'Write what is in scope (apps, APIs, accounts) and what is out (other customers, denial-of-service, social engineering of staff unless named).',
          text: 'Write what is in scope (apps, APIs, accounts) and what is out (other customers, denial-of-service, social engineering of staff unless named). Name the tester and the Kahana owner.',
        },
        {
          id: 'pt-kah66',
          label: 'Read KAH-66 before you spend a tester on holes we already know',
          doneWhen: 'Read KAH-66 before you spend a tester on holes we already know.',
          text: 'Read KAH-66 before you spend a tester on holes we already know. Confirm it is still In Review or Done. Do not duplicate that card as a pentest.',
          href: LINEAR_KAH_66_URL,
          hrefLabel: 'KAH-66 (vibe-coded hygiene)',
        },
      ],
    },
    {
      id: 'run',
      title: '2. Run the test and file findings',
      intro: 'Findings go to Linear, not a private Slack thread.',
      steps: [
        {
          id: 'pt-run',
          label: 'Run only what the rules of engagement allow',
          doneWhen: 'Run only what the rules of engagement allow. Do not retry findings on prod.',
          text: 'Run only what the rules of engagement allow. Kahana staff do not “try the same thing on prod” to see if it works.',
        },
        {
          id: 'pt-file',
          label: 'File each finding on Linear with severity, owner, deadline, and enough context',
          doneWhen: 'File each finding on Linear with severity, owner, deadline, and enough context to reproduce without an exploit write-up in a public channel.',
          text: 'File each finding on Linear with severity, owner, deadline, and enough context to reproduce without an exploit write-up in a public channel.',
          href: LINEAR_ALL_ISSUES_URL,
          hrefLabel: 'Linear all issues',
        },
        {
          id: 'pt-keys',
          label: 'Rotate leaked keys before you finish the pentest report',
          doneWhen: 'Rotate first (Firebase, GitHub, Mixpanel, or whatever leaked), then come back to this report.',
          text: 'Rotate first (Firebase, GitHub, Mixpanel, or whatever leaked), then come back to this report if the test found committed or leaked keys. Do not paste the old key into Slack.',
        },
      ],
    },
    {
      id: 'close',
      title: '3. Close or risk-accept',
      steps: [
        {
          id: 'pt-retest',
          label: 'Retest closures',
          doneWhen: 'Retest closures.',
          text: 'Retest closures. Do not argue severity only in Slack. The write-up stays with the Linear issue.',
        },
        {
          id: 'pt-store',
          label: 'Store the pentest report where Engineering Lead and a Manager can open it',
          doneWhen: 'Store the report where Engineering Lead and a Manager can open it.',
          text: 'Store the report where Engineering Lead and a Manager can open it. Risk-accept only with a named person and a date. “We will get to it” is not acceptance.',
        },
      ],
    },
  ],
  doneWhen: [
    'Scope and rules of engagement were written before the test.',
    'Every finding is a Linear issue that is closed or risk-accepted with a name and date.',
    'The report is stored. KAH-66 was checked so we did not redo known hygiene as a pentest.',
  ],
})

export const PII_HANDLING_SOP = playbook({
  id: 'pii-handling',
  title: 'PII Handling',
  category: 'Security',
  owner: 'Engineering Lead / Security',
  who: 'Everyone who touches user data (Engineering, CS, Analytics, Marketing screenshots).',
  when: 'Always. Extra care on exports, admin tools, Mixpanel, support tickets, and recordings.',
  format: 'checklist',
  description:
    'Minimum necessary PII, no Slack dumps, extra copies deleted. Inventory, deletion path, and log hygiene are on Linear KAH-86 (Backlog), not finished.',
  keywords: ['pii', 'privacy', 'gdpr', 'data', 'mixpanel'],
  notes: [
    'KAH-86 is Backlog: inventory, minimization, access, and deletion. Confirm on the card. Until it ships, this SOP is today’s practice, not the finished map.',
    'PCI card data is KAH-87 (Backlog). We should never have PAN. Do not treat billing fields as “just PII.”',
    'Legal owns policy text. Security owns practice. KAH-88 (Backlog) is the compliance map, not this SOP.',
  ],
  sections: [
    {
      id: 'today',
      title: '1. What you do today',
      intro: 'Do not wait for KAH-86 to stop dumping user lists.',
      steps: [
        {
          id: 'pii-no-export',
          label: 'Do not export production user lists to laptops or group chats',
          doneWhen: 'Do not export production user lists to laptops or group chats.',
          text: 'Do not export production user lists to laptops or group chats. Use admin tools with a ticket. If you needed a list, delete the extra copy when the task is done.',
        },
        {
          id: 'pii-screens',
          label: 'Keep other people’s emails and messages out of screenshots',
          doneWhen: 'Keep other people’s emails, messages, and PII out of screenshots, SOP videos, and marketing.',
          text: 'Screenshots, SOP videos, and marketing must not show other people’s emails, messages, payment data, or age-verification flags.',
        },
        {
          id: 'pii-mixpanel',
          label: 'Do not put free-text support or survey answers in Mixpanel event properties',
          doneWhen: 'Do not put free-text support or survey answers in Mixpanel event properties.',
          text: 'Do not put free-text support or survey answers in Mixpanel event properties. That pattern already lives in Firestore. Filter Mixpanel to production unless you are debugging.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
      ],
    },
    {
      id: 'linear',
      title: '2. What is still on Linear',
      intro: 'The backlog card is the map. This SOP does not pretend it is done.',
      steps: [
        {
          id: 'pii-kah86',
          label: 'Open KAH-86',
          doneWhen: 'Open KAH-86.',
          text: 'Open KAH-86. If it is still Backlog, the inventory (Firestore, logs, Resend, Mixpanel, Stripe, localStorage, backups) is not a finished document. Do not invent a second inventory in a spreadsheet of your own and treat that as source of truth.',
          href: LINEAR_KAH_86_URL,
          hrefLabel: 'KAH-86 (PII handling, Backlog)',
        },
        {
          id: 'pii-kah87',
          label: 'Keep card data on Stripe',
          doneWhen: 'Keep card data on Stripe.',
          text: 'Card data stays on Stripe. If you think we are storing PAN, stop and open KAH-87. That is not this SOP.',
          href: LINEAR_KAH_87_URL,
          hrefLabel: 'KAH-87 (PCI-DSS / Stripe)',
        },
        {
          id: 'pii-kah88',
          label: 'Read GDPR/CCPA status on KAH-88, not Slack',
          doneWhen: 'Read GDPR/CCPA “do we apply” on KAH-88, not in a Slack opinion.',
          text: 'GDPR/CCPA “do we apply” lives on KAH-88, not in a Slack opinion. Link evidence to that card if you find a gap.',
          href: LINEAR_KAH_88_URL,
          hrefLabel: 'KAH-88 (compliance mapping, Backlog)',
        },
      ],
    },
    {
      id: 'access',
      title: '3. Access and offboarding',
      steps: [
        {
          id: 'pii-access',
          label: 'Log and ticket production PII access',
          doneWhen: 'Log and ticket production PII access.',
          text: 'Production PII access is logged and ticketed. Joiners get access through SOP 22 and the tools form, not a shared password.',
          href: '/sops/kahana-code-setup',
          hrefLabel: 'SOP 22: Getting Set Up with Kahana Code',
        },
        {
          id: 'pii-gov',
          label: 'Follow platform governance for who may see admin dumps',
          doneWhen: 'Follow platform governance for who may see admin dumps.',
          text: 'Who may see admin dumps is platform governance. If you are adding a new admin power, follow SOP 25 and KAH-85.',
          href: '/sops/platform-governance',
          hrefLabel: 'SOP 25: Platform Governance',
        },
      ],
    },
  ],
  doneWhen: [
    'The task that needed PII is done and extra copies are deleted.',
    'No user list or payment data landed in Slack, a laptop dump, or a marketing screenshot.',
    'KAH-86 was checked so you did not treat a Backlog inventory as already shipped.',
  ],
})

export const PLATFORM_GOVERNANCE_SOP = playbook({
  id: 'platform-governance',
  title: 'Platform Governance',
  category: 'Security',
  owner: 'Engineering Lead / Security',
  who: 'Security + Product. Anyone adding admin powers, webhooks, or a new data store.',
  when: 'When adding admin capabilities, vendors, or after an incident. Quarterly review once KAH-85 exists.',
  format: 'checklist',
  description:
    'Who can do what on Kahana, and how that is reviewed. The governance pack (inventory, access cadence, audit of sensitive actions) is Linear KAH-85 (Backlog).',
  keywords: ['governance', 'admin', 'rbac', 'access', 'audit'],
  notes: [
    'KAH-85 is Backlog: access, audit, and operating ownership. Confirm on the card. Until it ships, document each new admin capability here and remove leftover accounts. Do not wait for the pack to use least privilege.',
    'This is not KAH-66 (code hygiene) and not the full SOC 2 program (KAH-88).',
  ],
  sections: [
    {
      id: 'now',
      title: '1. Before you add a power',
      steps: [
        {
          id: 'pg-doc',
          label: 'Document the new admin capability and who holds it',
          doneWhen: 'Document the new admin capability and who holds it (Firebase, Heroku, Stripe).',
          text: 'Document the new admin capability and who holds it (Firebase, Heroku, Stripe, Mixpanel, email, in-product admin). Shared logins are not a plan.',
        },
        {
          id: 'pg-least',
          label: 'Prefer least privilege',
          doneWhen: 'Prefer least privilege.',
          text: 'Prefer least privilege. Contractors and AI tools get the minimum. Offboard uses the same list as joiners (SOP 22).',
          href: '/sops/kahana-code-setup',
          hrefLabel: 'SOP 22: Getting Set Up with Kahana Code',
        },
        {
          id: 'pg-prod',
          label: 'Keep prod shippers named',
          doneWhen: 'Keep who can ship to product prod / kahana-alpha named.',
          text: 'Who can ship to product prod / kahana-alpha stays named. Marketing Heroku kahana-public is still SOP 13 (a Manager or EM only).',
          href: '/sops/marketing-website',
          hrefLabel: 'SOP 13: Updating the Marketing Website',
        },
      ],
    },
    {
      id: 'linear',
      title: '2. The Linear pack (not shipped)',
      steps: [
        {
          id: 'pg-kah85',
          label: 'Open KAH-85',
          doneWhen: 'Open KAH-85.',
          text: 'Open KAH-85. If it is still Backlog, there is no finished inventory of privileged systems, no written quarterly access review, and no complete sensitive-action audit list. Do not invent a shadow spreadsheet as source of truth.',
          href: LINEAR_KAH_85_URL,
          hrefLabel: 'KAH-85 (platform governance, Backlog)',
        },
        {
          id: 'pg-related',
          label: 'Overlap content takedowns with SOP 26',
          doneWhen: 'Overlap content takedowns with SOP 26.',
          text: 'Content takedowns overlap SOP 26. Security incidents overlap SOP 27. PII admin dumps overlap SOP 24. Link those SOPs on the Linear card rather than copying policy into three places.',
          href: '/sops/content-moderation',
          hrefLabel: 'SOP 26: Content Moderation',
        },
      ],
    },
    {
      id: 'review',
      title: '3. After incidents and leftover accounts',
      steps: [
        {
          id: 'pg-review',
          label: 'Review leftover admin power after an incident',
          doneWhen: 'Review leftover admin power after an incident.',
          text: 'After an incident, review who still has the power that was abused or unused. Remove leftover admin accounts the same week.',
          href: '/sops/reporting-cyber-threats',
          hrefLabel: 'SOP 27: Reporting Cybersecurity Threats',
        },
        {
          id: 'pg-legal',
          label: 'Loop Legal when user rights or terms change',
          doneWhen: 'Loop Legal if user rights, terms, or age policy change.',
          text: 'Loop Legal if user rights, terms, or age policy change. KAH-88 is the obligations map (Backlog), not a substitute for counsel.',
          href: LINEAR_KAH_88_URL,
          hrefLabel: 'KAH-88 (compliance mapping)',
        },
      ],
    },
  ],
  doneWhen: [
    'The new capability is listed with named owners. Leftover admin accounts are removed.',
    'KAH-85 was checked so you did not treat the Backlog governance pack as already written.',
  ],
})

export const CONTENT_MODERATION_SOP = playbook({
  id: 'content-moderation',
  title: 'Content Moderation',
  category: 'Security',
  owner: 'Security / Trust & Safety',
  who: 'Moderation owner and Customer Success. Engineering on the Linear build.',
  when: 'On every content report, and as a sampled review of public hubs. Automation is In Progress on Linear, not the live path yet.',
  format: 'checklist',
  description:
    'Act on in-app content reports with a consistent reason taxonomy. Hugging Face / open-source models plus a review queue are Linear KAH-84 (In Progress). Handle reports now; do not wait for the model.',
  keywords: ['moderation', 'report', 'trust', 'safety', 'adult', 'ugc'],
  notes: [
    'KAH-84 is In Progress (Hugging Face / open-source models + review queue). Confirm on the card. Until it ships, intake is still user reports. Models will assist; they do not replace 18+ declaration or a human decision.',
    'Club-host logging of bugs and ideas stays SOP 2. CS inbox and lifecycle mail stay SOP 19. This SOP is trust and safety on hubs, files, profiles, and club posts.',
    'Do not send private hub text to a third-party API without a PII review (SOP 24 / KAH-86).',
  ],
  sections: [
    {
      id: 'today',
      title: '1. Handle reports now',
      intro: 'Do not leave a report unread because automation is In Progress.',
      steps: [
        {
          id: 'cm-intake',
          label: 'Intake content_report tickets',
          doneWhen: 'Intake content_report tickets.',
          text: 'Intake content_report tickets. Reasons: adult, graphic violence, hate/harassment, harmful, spam/scam, copyright, other. Record, then decide.',
        },
        {
          id: 'cm-decide',
          label: 'Decide: leave up, restrict (including Not for All Audiences / hide',
          doneWhen: 'Decide: leave up, restrict (including Not for All Audiences / hide from Library), remove, or escalate to Legal / law enforcement when required.',
          text: 'Decide: leave up, restrict (including Not for All Audiences / hide from Library), remove, or escalate to Legal / law enforcement when required. Adult-rated hubs already have a policy path; keep the 18+ declaration.',
        },
        {
          id: 'cm-close',
          label: 'Record the decision code',
          doneWhen: 'Record the decision code.',
          text: 'Record the decision code. Tell the reporter only what you can tell them. Repeat offenders get a named policy path, not a silent skip.',
        },
        {
          id: 'cm-cs',
          label: 'Route support and contact forms to SOP 19',
          doneWhen: 'Route the inbound to SOP 19 if it is a support or contact form rather than a content report.',
          text: 'Route the inbound to SOP 19 if it is a support or contact form rather than a content report. Do not lose it between queues.',
          href: '/sops/lifecycle-emails-and-tickets',
          hrefLabel: 'SOP 19: Lifecycle Emails and Tickets',
        },
      ],
    },
    {
      id: 'linear',
      title: '2. What KAH-84 is building',
      intro: 'In Progress means work is happening. It is not live until the card says so.',
      steps: [
        {
          id: 'cm-kah84',
          label: 'Open KAH-84',
          doneWhen: 'Open KAH-84.',
          text: 'Open KAH-84. Confirm it is still In Progress (or moved). The build is automated checks plus a human review queue (ShieldGemma / classifiers on public hub text and covers, then club posts and profiles).',
          href: LINEAR_KAH_84_URL,
          hrefLabel: 'KAH-84 (content moderation, In Progress)',
        },
        {
          id: 'cm-assist',
          label: 'Keep humans deciding after models flag content',
          doneWhen: 'Keep humans deciding. Do not turn the queue off because a score looked confident.',
          text: 'Keep humans deciding when models flag. Do not turn the queue off because a score looked confident. Do not send all private UGC to a closed vendor by default.',
        },
        {
          id: 'cm-pii',
          label: 'Run SOP 24 before private hub content hits a vendor',
          doneWhen: 'Run SOP 24 / KAH-86 before private hub content goes to a third-party model.',
          text: 'Private hub content in a third-party model needs SOP 24 / KAH-86 first. KAH-84 already lists that as out of scope without a privacy review.',
          href: '/sops/pii-handling',
          hrefLabel: 'SOP 24: PII Handling',
        },
      ],
    },
  ],
  doneWhen: [
    'The report is closed with a decision code, not only “looked at it.”',
    'KAH-84 was checked so you did not wait on In Progress automation instead of handling the report, and you did not pretend the model is already live.',
  ],
})

export const REPORTING_CYBER_THREATS_SOP = playbook({
  id: 'reporting-cyber-threats',
  title: 'Reporting Cybersecurity Threats / Attacks',
  category: 'Security',
  owner: 'Engineering Lead / Security',
  who: 'Anyone who notices (phishing, intrusion, ransomware, suspicious admin activity).',
  when: 'Immediately.',
  format: 'checklist',
  description:
    'Incident-style reporting. There is no dedicated Linear threat-reporting card. Tell Engineering Lead and a Manager the same day. Do not poke the attacker.',
  keywords: ['incident', 'phishing', 'attack', 'threat', 'ransomware'],
  notes: [
    'There is no Linear card for this SOP. Do not wait to file one before you tell people. File Linear after containment so the record exists.',
    'This SOP is the human reporting path: detect, contain, restore, then RCA on the Linear issue.',
    'If user PII may be involved, loop Legal and follow SOP 24. Rotate keys if credentials could have leaked.',
  ],
  sections: [
    {
      id: 'now',
      title: '1. Same day',
      intro: 'Speed first. Curiosity later.',
      steps: [
        {
          id: 'ct-dont',
          label: 'Do not poke the attacker, click the payload again, or “test if',
          doneWhen: 'Do not poke the attacker, click the payload again, or “test if it still works” on production.',
          text: 'Do not poke the attacker, click the payload again, or “test if it still works” on production.',
        },
        {
          id: 'ct-evidence',
          label: 'Capture evidence you already have: headers, URLs, screenshots, account names, timestamps',
          doneWhen: 'Capture evidence you already have: headers, URLs, screenshots, account names, timestamps.',
          text: 'Capture evidence you already have: headers, URLs, screenshots, account names, timestamps. Do not paste secrets into a public Slack channel.',
        },
        {
          id: 'ct-tell',
          label: 'Tell the Engineering Lead and a Manager the same day',
          doneWhen: 'Tell the Engineering Lead and a Manager the same day.',
          text: 'Tell the Engineering Lead and a Manager the same day. Then contain (lock the account, rotate the key, take the surface offline if that is the instruction). Do not paste the old secret into Slack.',
        },
      ],
    },
    {
      id: 'record',
      title: '2. Record and follow up',
      steps: [
        {
          id: 'ct-linear',
          label: 'File Linear after the immediate ping',
          doneWhen: 'File Linear after the immediate ping.',
          text: 'After the immediate ping, file a Linear issue so the incident is not only a DM. Use the all-issues view. Severity, timeline, containment, owner.',
          href: LINEAR_ALL_ISSUES_URL,
          hrefLabel: 'Linear all issues',
        },
        {
          id: 'ct-rca',
          label: 'Write a short RCA after containment',
          doneWhen: 'Write a short RCA after containment: restore, communicate internally, timeline, what failed, what we change.',
          text: 'After containment: restore, communicate internally, write a short RCA (timeline, what failed, what we change), and verify the fix. A second person should be able to read the timeline on the Linear issue.',
          href: LINEAR_ALL_ISSUES_URL,
          hrefLabel: 'Linear all issues',
        },
        {
          id: 'ct-pii',
          label: 'Loop Legal and SOP 24 if user PII may be involved',
          doneWhen: 'Loop Legal and SOP 24 if user PII may be involved.',
          text: 'Loop Legal and SOP 24 if user PII may be involved. If admin powers were the hole, SOP 25 / KAH-85 is the follow-up, not a silent revert.',
          href: '/sops/pii-handling',
          hrefLabel: 'SOP 24: PII Handling',
        },
      ],
    },
  ],
  doneWhen: [
    'Engineering Lead and a Manager were told the same day. The attacker was not poked.',
    'An incident record exists (Linear) with timeline, containment, and follow-up owners.',
    'Keys rotated if credentials could have leaked. Legal looped if user PII may be involved.',
  ],
})

