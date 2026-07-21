export const KAHANA_SITE_URL = 'https://kahana.io'
export const KAHANA_CONTACT_EMAIL = 'adam@kahana.io'

/** Kahana Slack workspace invite (shared onboarding link). */
export const SLACK_INVITE_URL =
  'https://join.slack.com/t/kahanaworkspace/shared_invite/zt-1pdah6gwn-W6HaRPH2iy~juLOlafO2HA'

/** Linear workspace — product backlog, bugs, feature requests, sprint prioritization. */
export const LINEAR_WORKSPACE_URL = 'https://linear.app/kahana'

/** Mixpanel — userbase analytics (funnels, retention, product usage). */
export const MIXPANEL_URL = 'https://mixpanel.com/'

/** Creator & influencer outreach pipeline — profiles, links, and outreach notes. */
export const CREATOR_OUTREACH_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1_QF9SAQR-P0VU78MmVg1XjVpGhltqfWqRlANc4W8sXE/edit?gid=0#gid=0'

/** Weekly time log — Tally form submitted every Friday EOD by all teammates. */
export const TIME_LOG_TALLY_URL = 'https://tally.so/r/w2YdzL'

/** Adam Kershner — personal socials hub (founder-led brand). */
export const ADAM_SOCIALS_URL = 'https://about.kahana.io/adam-kershner'

/** Public marketing site / landing page — what Kahana is and how people benefit. */
export const KAHANA_ABOUT_URL = 'https://about.kahana.io/'

/** In-product support and feedback. */
export const KAHANA_SUPPORT_URL = 'https://kahana.io/support'
export const KAHANA_FEEDBACK_URL = 'https://kahana.io/survey/improve?source=support_panel'

/** @param {string} [path] */
export function kahanaUrl(path = '') {
  if (!path) return KAHANA_SITE_URL
  return `${KAHANA_SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
