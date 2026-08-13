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

/** Mixpanel — Kahana project home (userbase analytics). */
export const MIXPANEL_URL =
  'https://mixpanel.com/project/4042294/view/4538547/app/home'

/** Creator & influencer outreach pipeline — profiles, links, and outreach notes. */
export const CREATOR_OUTREACH_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1_QF9SAQR-P0VU78MmVg1XjVpGhltqfWqRlANc4W8sXE/edit?gid=0#gid=0'

/** Weekly time log — Tally form submitted every Friday EOD by all teammates. */
export const TIME_LOG_TALLY_URL = 'https://tally.so/r/w2YdzL'

/** Get access to tools & data — preferred emails + whether you contribute to code. */
export const TOOLS_ACCESS_TALLY_URL = 'https://tally.so/r/2EgxRV'
export const TOOLS_ACCESS_TALLY_EMBED_URL = 'https://tally.so/embed/2EgxRV'

/** Adam Kershner OnceHub — schedule weekly 1-on-1. */
export const ADAM_ONCEHUB_URL = 'https://go.oncehub.com/AdamKershner'

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
