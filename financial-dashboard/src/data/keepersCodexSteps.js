/**
 * The Keeper’s Codex — checklist SOP for hosting a book or video club.
 * Gallery card: /sops/keepers-codex · step pages: /sops/keepers-codex/:stepId
 */

export const KEEPERS_CODEX_META = {
  title: 'The Keeper’s Codex',
  sopNumber: 6,
  category: 'Clubs',
  subtitle:
    'Standard procedures for founding, tending, and growing a hall on Kahana. Check Done as you complete each labour; open a row for the exact clicks.',
  edition: 'v1.0 — draft for review',
  standing: 'Awaiting the Keeper’s word (Appendix III). Section VI is proposed, not standing.',
  metaRows: [
    ['Codex', 'Clubs — creation, care, invitation, and supply'],
    ['Keeper of this codex', 'Sriram Reddy Kamatham — Project Management Intern'],
    ['To be read and approved by', 'Adam Kershner (Sponsor) · Nithila (Project Manager)'],
    ['Edition', 'v1.0 — draft for review'],
    ['Standing', 'Awaiting the Keeper’s word (see Open decisions)'],
  ],
}

export const KEEPERS_CODEX_GROUPS = [
  {
    id: 'before',
    title: 'Before you enter',
    intro: 'The three names on the buttons — hubs, clubs, Wish list — and the book vs video convention.',
  },
  {
    id: 'founding',
    title: 'I. Founding a hall',
    intro: 'Name it, furnish it, publish it. Do not invite anyone until the threshold is true.',
  },
  {
    id: 'tending',
    title: 'II. Tending the hall',
    intro: 'Feed, Events, and the rhythm that keeps both alive.',
  },
  {
    id: 'inviting',
    title: 'III. Summoning readers',
    intro: 'Three doors in, chosen deliberately. Test yours before thirty people arrive.',
  },
  {
    id: 'feedback',
    title: 'IV. Word to the keepers',
    intro: 'Nothing is mended that is not reported. The form is the record; Slack is for urgency.',
  },
  {
    id: 'shelf',
    title: 'V. Setting the shelf',
    intro: 'Stock the Wish list from the Library first. External links are placeholders, not a home.',
  },
  {
    id: 'gap',
    title: 'VI. The missing volume',
    intro: 'Proposed workflow for titles the library does not yet hold. Not standing until Appendix III is decided.',
  },
  {
    id: 'appendix',
    title: 'Appendices',
    intro: 'Templates, the Ledger of Missing Volumes, and matters still awaiting a decision. Optional — not counted in progress.',
  },
]

export const KEEPERS_CODEX_STEPS = [
  {
    id: 'halls-and-shelves',
    label: 'Halls and shelves',
    icon: 'book',
    group: 'before',
    badge: '5 min',
    doneWhen: 'You can tell a hub from a club from a Wish list, and name a club so a stranger knows book or video.',
  },
  {
    id: 'create-club',
    label: 'Create and publish a club',
    icon: 'sparkles',
    group: 'founding',
    badge: '15 min',
    doneWhen: 'The club exists with name, description, visibility, and join mode set deliberately.',
  },
  {
    id: 'launch-threshold',
    label: 'Meet the launch threshold',
    icon: 'lock',
    group: 'founding',
    badge: '5 min',
    doneWhen: 'You would not be ashamed to send the invite link — cover, three Wish list items, first post or event, door tested.',
  },
  {
    id: 'feed',
    label: 'Seed the Feed',
    icon: 'message',
    group: 'tending',
    badge: '5 min',
    doneWhen: 'The empty club has a first post before anyone is invited.',
  },
  {
    id: 'events',
    label: 'Schedule a discussion',
    icon: 'meeting',
    group: 'tending',
    badge: '10 min',
    doneWhen: 'An event is published with a real title, timezone, meeting link, and prep notes.',
  },
  {
    id: 'rhythm',
    label: 'Keep the rhythm',
    icon: 'calendar',
    group: 'tending',
    badge: '5 min',
    doneWhen: 'You know the weekly/biweekly cadence and where a broken thing goes.',
  },
  {
    id: 'invite-members',
    label: 'Invite people',
    icon: 'user',
    group: 'inviting',
    badge: '10 min',
    doneWhen: 'You have invited one person by email and one by link, after testing the door in a private window.',
  },
  {
    id: 'log-feedback',
    label: 'Log feedback and bugs',
    icon: 'clipboard',
    group: 'feedback',
    badge: '5 min',
    doneWhen: 'You can file a useful report (steps, expected vs actual, club URL, severity) without being asked.',
  },
  {
    id: 'wishlist',
    label: 'Stock the Wish list',
    icon: 'sparkles',
    group: 'shelf',
    badge: '10 min',
    doneWhen: 'Three items are on the shelf, the current title is obvious, and Library hubs were preferred over links.',
  },
  {
    id: 'add-content',
    label: 'Add content to a hub',
    icon: 'key',
    group: 'shelf',
    badge: '8 min',
    doneWhen: 'You can put a file, a webpage, or a YouTube video into a hub via Create → Add content.',
  },
  {
    id: 'content-gap',
    label: 'Open a content gap',
    icon: 'map',
    group: 'gap',
    badge: '8 min',
    doneWhen: 'A missing title is a Wish list placeholder and a Ledger row — not a forgotten link.',
  },
  {
    id: 'creator-letter',
    label: 'Write the creator letter',
    icon: 'megaphone',
    group: 'gap',
    badge: '8 min',
    doneWhen: 'You know what the letter must carry, when to hand off to Pod B, and when not to pursue.',
  },
  {
    id: 'templates',
    label: 'Copy-ready templates',
    icon: 'clipboard',
    group: 'appendix',
    badge: 'optional',
    optional: true,
    doneWhen: 'You have copied an invite, a description pattern, or a fault report when you needed one.',
  },
  {
    id: 'ledger',
    label: 'The Ledger of Missing Volumes',
    icon: 'book',
    group: 'appendix',
    badge: 'optional',
    optional: true,
    doneWhen: 'You know the columns, the weekly reading, and that a Published-not-Shelved row is an emergency.',
  },
  {
    id: 'open-decisions',
    label: 'Open decisions',
    icon: 'lock',
    group: 'appendix',
    badge: 'optional',
    optional: true,
    doneWhen: 'You know which six matters still block this codex from standing, and have not treated them as settled.',
  },
]

export function getKeepersCodexStep(id) {
  return KEEPERS_CODEX_STEPS.find((s) => s.id === id)
}

export function getAdjacentKeepersCodexSteps(id) {
  const i = KEEPERS_CODEX_STEPS.findIndex((s) => s.id === id)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? KEEPERS_CODEX_STEPS[i - 1] : null,
    next: i < KEEPERS_CODEX_STEPS.length - 1 ? KEEPERS_CODEX_STEPS[i + 1] : null,
  }
}

export function keepersCodexSearchBlob() {
  return [
    KEEPERS_CODEX_META.title,
    KEEPERS_CODEX_META.subtitle,
    ...KEEPERS_CODEX_GROUPS.map((g) => `${g.title} ${g.intro}`),
    ...KEEPERS_CODEX_STEPS.flatMap((s) => [s.label, s.doneWhen, s.id.replace(/-/g, ' ')]),
    'keeper',
    'codex',
    'wish list',
    'wishlist',
    'aura',
    'pod b',
  ].join(' ')
}
