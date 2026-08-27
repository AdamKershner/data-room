export const KAHANA_SITE_URL = 'https://kahana.io'
export const KAHANA_LIBRARY_URL = 'https://kahana.io/library'
export const KAHANA_CONTACT_EMAIL = 'adam@kahana.io'

/**
 * Product / platform name.
 * Primary: Kahana. Also known as “The Aura Library.”
 * “Aura” alone remains the discovery signal (up to 5/day) — not the product name.
 */
export const PRODUCT_NAME = 'Kahana'
/** Alternate / legacy product name. */
export const PRODUCT_AKA = 'The Aura Library'
/** First-mention / hero form. */
export const PRODUCT_NAME_WITH_AKA = 'Kahana (AKA "The Aura Library")'
/** Legal / parent company entity. */
export const LEGAL_ENTITY = 'Kahana Group Inc.'

/** Kahana Group Slack workspace invite (shared onboarding link). */
export const SLACK_INVITE_URL =
  'https://join.slack.com/t/kahanaworkspace/shared_invite/zt-1pdah6gwn-W6HaRPH2iy~juLOlafO2HA'

/** Linear workspace — product backlog, bugs, feature requests, sprint prioritization. */
export const LINEAR_WORKSPACE_URL = 'https://linear.app/kahana'

/** Linear all-issues view for picking engineering work. Do not invent extra Linear board URLs. */
export const LINEAR_ALL_ISSUES_URL =
  'https://linear.app/kahana/view/all-issues-03adf5375cb9'

/** Security-related Linear cards. Confirm status on the card; do not invent extra issue URLs. */
export const LINEAR_KAH_66_URL =
  'https://linear.app/kahana/issue/KAH-66/address-potential-issues-common-with-vibe-coded-apps'
export const LINEAR_KAH_84_URL =
  'https://linear.app/kahana/issue/KAH-84/content-moderation-hugging-face-open-source-models-review-queue'
export const LINEAR_KAH_85_URL =
  'https://linear.app/kahana/issue/KAH-85/platform-governance-access-audit-and-operating-ownership'
export const LINEAR_KAH_86_URL =
  'https://linear.app/kahana/issue/KAH-86/pii-handling-inventory-minimization-access-and-deletion'
export const LINEAR_KAH_87_URL =
  'https://linear.app/kahana/issue/KAH-87/pci-dss-and-stripe-gateway-stay-out-of-cardholder-scope'
export const LINEAR_KAH_88_URL =
  'https://linear.app/kahana/issue/KAH-88/compliance-mapping-obligations-vs-what-we-actually-do'

/** Mixpanel — Kahana project home (userbase analytics). */
export const MIXPANEL_URL =
  'https://mixpanel.com/project/4042294/view/4538547/app/home'

/** Mixpanel CS boards for lifecycle email delivery and landing. Do not invent extra board URLs. */
export const MIXPANEL_LIFECYCLE_BOARD_A_URL =
  'https://mixpanel.com/project/4042294/view/4538547/app/boards#id=11358694'
export const MIXPANEL_LIFECYCLE_BOARD_B_URL =
  'https://mixpanel.com/project/4042294/view/4538547/app/boards#id=11358702'
export const MIXPANEL_LIFECYCLE_BOARD_C_URL =
  'https://mixpanel.com/project/4042294/view/4538547/app/boards#id=11358761'

/** Mixpanel board shared with engineering onboarding. Do not invent extra board names. */
export const MIXPANEL_ENGINEERING_BOARD_URL =
  'https://mixpanel.com/project/4042294/view/4538547/app/boards#id=11355238'

/** Resend send log. CS access: ask a Manager on Slack. */
export const RESEND_EMAILS_URL = 'https://resend.com/emails'

/** Live PMF+NPS output sheet (same source as /nps). */
export const PMF_NPS_OUTPUT_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1v8cJu1f9UXC1JY6XBTtSBlu8rGqVqpEVl6zlB8-pfoA/edit?usp=sharing'

/** Public marketing site repo (kahana.io / about.kahana.io). Not kahana-web. */
export const MARKETING_SITE_REPO_URL =
  'https://github.com/Kahana-LLC/kahana-homepage-public'

/** Product frontend (library app). Not the marketing site. */
export const KAHANA_WEB_REPO_URL = 'https://github.com/Kahana-LLC/kahana-web'

/** Product backend (Cloud Functions). */
export const FIREBASE_FUNCTIONS_REPO_URL =
  'https://github.com/Kahana-LLC/firebase-functions'

/** Canonical data-room repo (Vercel deploys from this). */
export const DATA_ROOM_REPO_URL = 'https://github.com/AdamKershner/data-room'

/** Company copy of the data-room repo. Keep in sync with DATA_ROOM_REPO_URL after every ship. */
export const DATA_ROOM_COMPANY_REPO_URL = 'https://github.com/Kahana-LLC/data-room'

/** Live internal data room (Vercel, financial-dashboard root). */
export const DATA_ROOM_LIVE_URL = 'https://data-room-two.vercel.app'

/** Firebase consoles. DEV for local/debug; PROD is production. */
export const FIREBASE_PROD_CONSOLE_URL =
  'https://console.firebase.google.com/u/0/project/kahana-15c2a/overview'
export const FIREBASE_DEV_CONSOLE_URL =
  'https://console.firebase.google.com/u/0/project/kahana-dev/overview'

/** Google Search Console — kahana.io domain property (impressions, clicks, sitemaps, indexing). */
export const GOOGLE_SEARCH_CONSOLE_URL =
  'https://search.google.com/search-console?utm_source=about-page&resource_id=sc-domain:kahana.io'

/** Creator database — Influencer & Creator Profiles (Instagram, YouTube, TikTok, Other Link, Email, Notes, plus SOP 16 outreach columns). */
export const CREATOR_OUTREACH_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1_QF9SAQR-P0VU78MmVg1XjVpGhltqfWqRlANc4W8sXE/edit?gid=0#gid=0'

/** Latest product demo linked in creator outreach (SOP 16). Swap when SOP 11 ships a newer cut. */
export const CREATOR_OUTREACH_DEMO_VIDEO_URL = 'https://youtu.be/YUKRcYzdAm4'

/** Past creator collab used as outreach proof (SOP 16). */
export const AMY_WANG_HUB_URL = 'https://kahana.io/hub/UMKtgp76MN1MvZuD6p7W'
export const AMY_WANG_YOUTUBE_URL = 'https://www.youtube.com/@wamyy5'
export const AMY_WANG_HUB_TITLE =
  'The Ultimate Guide to getting Internship/Research Opportunities'
export const CREATOR_OUTREACH_HUB_PROOF_DEFAULT =
  'Amy Wang’s hub The Ultimate Guide to getting Internship/Research Opportunities (https://kahana.io/hub/UMKtgp76MN1MvZuD6p7W)'

/** Google Chat — used to check whether a guessed Gmail is a real Google account. */
export const GOOGLE_CHAT_URL = 'https://chat.google.com/app/home'

/** Weekly time log — Tally form submitted every Friday EOD by all teammates. */
export const TIME_LOG_TALLY_URL = 'https://tally.so/r/w2YdzL'

/** Time log output sheet — HR and PM check Friday fillouts here. */
export const TIME_LOG_OUTPUT_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1xbnItlOXwcaCzoS5EgAhy4CA7QREXm7ATNQgtTnhgt4/edit?gid=0#gid=0'

/** Internal Kahana HQ hub. Members get the Friday time-log reminder email. */
export const KAHANA_HQ_HUB_URL = 'https://kahana.io/hub/Rzl4UEbzVeym5xqtQ4ZS'

/** Get access to tools & data — preferred emails + whether you contribute to code. */
export const TOOLS_ACCESS_TALLY_URL = 'https://tally.so/r/2EgxRV'
export const TOOLS_ACCESS_TALLY_EMBED_URL = 'https://tally.so/embed/2EgxRV'

/** Adam Kershner Calendly — schedule weekly 1-on-1. */
export const ADAM_CALENDLY_URL = 'https://calendly.com/adam-kahana-s5hl/30min'
/** @deprecated Use ADAM_CALENDLY_URL */
export const ADAM_ONCEHUB_URL = ADAM_CALENDLY_URL

/** Adam Kershner — personal socials hub (founder-led brand). */
export const ADAM_SOCIALS_URL = 'https://about.kahana.io/adam-kershner'

/** Public marketing site / landing page — what Kahana is and how people benefit. */
export const KAHANA_ABOUT_URL = 'https://about.kahana.io/'

/** Example Kahana product profile (for onboarding recognition). */
export const KAHANA_PROFILE_EXAMPLE_URL =
  'https://kahana.io/profile/lxZb9mrcMROsWZhigOBfTwbUGfB3'

/** In-product support and feedback. */
export const KAHANA_SUPPORT_URL = 'https://kahana.io/support'
export const KAHANA_FEEDBACK_URL = 'https://kahana.io/survey/improve?source=support_panel'

/** @param {string} [path] */
export function kahanaUrl(path = '') {
  if (!path) return KAHANA_SITE_URL
  return `${KAHANA_SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
