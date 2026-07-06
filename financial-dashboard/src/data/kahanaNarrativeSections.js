/** Kahana strategic narrative — story beats for onboarding and marketing alignment. */

import { COMPETITORS_PAGE_PATH } from './kahanaCompetitorsData'

export const NARRATIVE_PAGE_PATH = '/kahana-narrative'

export const NARRATIVE_PAGE = {
  title: 'Kahana Story',
  subtitle:
    'Why Kahana exists — from AI slop and broken creator platforms to Wan Shi Tong\'s Library for humans.',
}

export const ONE_LINER =
  'Where do I go to find the best digital resources for what I\'m trying to do?'

export const NARRATIVE_BEATS = [
  {
    id: 'big-change',
    title: 'Big relevant change',
    raskinStage: 'Name the change',
    paragraphs: [
      'The internet used to feel like a frontier of discovery. Now it feels like sludge.',
      'AI has made it trivial to generate endless "content," but most of it is low-quality slop — reheated takes and shallow tutorials churned out for clicks, not comprehension. Social platforms like Instagram, TikTok, and YouTube are structurally optimized for doom-scrolling and micro-hits of dopamine, not for deep understanding or serious projects. Even Wikipedia, the closest thing we have to a global reference library, is fundamentally text-only, anonymous, and not designed to host the rich digital artifacts people actually need to do real work.',
      'At the same time, human curiosity hasn\'t gone away. If anything, upskilling, career pivots, and side projects matter more than ever. People want to build things, learn fast, and apply knowledge — not just consume content.',
    ],
  },
  {
    id: 'stakes',
    title: 'The stakes, winners, and losers',
    raskinStage: 'Stakes',
    paragraphs: [
      'The stakes are simple: in a world flooded with AI slop and engagement-bait, will we have a home for high-signal knowledge, or will serious learners be forced to assemble their own libraries from random links, stores, and feeds?',
      'If nothing changes, the next decade of "learning online" will be governed by algorithms tuned for retention, not transformation.',
    ],
    bullets: [
      'Winners: engagement platforms and content mills — they monetize attention, not outcomes.',
      'Losers: real experts whose work gets buried, and professionals, builders, teams, and students who need trustworthy, actionable assets — not another 20-minute "Top 5 Tips" video.',
    ],
  },
  {
    id: 'creator-platforms',
    title: 'The problem with today\'s creator platforms',
    raskinStage: 'Old way fails',
    paragraphs: [
      'The creator economy supposedly solved monetization for experts — but it did so by forcing knowledge into rigid, format-first containers.',
      'None of these tools were designed to be a library. They\'re point solutions for monetizing formats: newsletters, memberships, downloads. The burden of discovery, trust, and safe delivery is pushed onto the creator and the buyer.',
    ],
    bullets: [
      'Patreon — value must be membership tiers; awkward for selling specific knowledge environments or asset bundles.',
      'Substack — work must be a newsletter, even when people need a structured library of files, templates, and walkthroughs.',
      'Gumroad — pay once, download a file; high-value assets leak the second they leave the platform.',
    ],
    linkToCompetitors: true,
  },
  {
    id: 'core-gap',
    title: 'The core gap',
    raskinStage: 'Old way fails',
    paragraphs: [
      'There is no obvious place on the internet where a curious person can say, "I want to learn X or build Y," and then reliably discover high-quality, expert-created artifacts — videos, files, templates, PDFs, code, datasets — organized around that goal, with flexible access and meaningful protection for the creator.',
      'The user has to be their own librarian. The expert has to be their own infrastructure team.',
    ],
    bullets: [
      'A course here.',
      'A newsletter there.',
      'A one-off Gumroad file somewhere else.',
      'A couple of YouTube videos.',
      'A buried PDF in someone\'s Dropbox.',
    ],
  },
  {
    id: 'solution',
    title: 'The solution: Kahana as Wan Shi Tong\'s Library',
    raskinStage: 'New way',
    paragraphs: [
      'Kahana starts from a different premise: the atomic unit is not "content," it\'s a hub of knowledge.',
      'A hub on Kahana is a living environment built around a problem, skill, or outcome. The creator isn\'t forced into a tier system or a newsletter. They design the hub the way an expert actually thinks about their domain: as an interconnected set of assets that help people get from "I don\'t know how" to "I can do this."',
    ],
    bullets: [
      'Videos and walkthroughs',
      'Files, templates, and spreadsheets',
      'PDFs, reference docs, and links',
      'Code, datasets, and other artifacts',
    ],
  },
  {
    id: 'promised-land',
    title: 'The promised land',
    raskinStage: 'Promised land',
    paragraphs: [
      'In the promised land, Kahana is the default answer to a simple question: "Where do I go to find the best digital resources for what I\'m trying to do?"',
      'Instead of doom-scrolling through social feeds or hunting across hundreds of fragmented creator storefronts, people go straight to Kahana — a modern, human-aligned version of Wan Shi Tong\'s Library.',
      'The internet finally gains a central, navigable library of high-signal knowledge, not just an endless buffet of content.',
    ],
    bullets: [
      'Students and professionals use Kahana hubs to upskill in weeks instead of semesters.',
      'Teams rely on hubs as onboarding and capability stacks for specific roles or projects.',
      'Experts maintain evolving libraries of their best work, earning fairly while watching their knowledge genuinely empower others.',
    ],
  },
  {
    id: 'horizon',
    title: 'Look to the horizon',
    raskinStage: 'Horizon',
    paragraphs: [
      'In that future, social platforms remain places to be entertained. Kahana becomes the place you go to get smarter and get things done.',
    ],
    bullets: [
      'As AI generates more generic slop, provenance and curation become the new scarcity.',
      'The creator economy drifts toward structured catalogs of durable knowledge — Kahana becomes the spine.',
      'Kahana evolves from marketplace into infrastructure: hubs embedded in tools, workflows, and organizations.',
    ],
  },
]

export const MAGIC_GIFTS = {
  creators: [
    { title: 'Freedom of form', detail: 'No imposed tiers, no mandatory newsletter. Spin up as many hubs as you want, each structured for the job it\'s meant to do.' },
    { title: 'Flexible monetization', detail: 'Set one-time or monthly pricing per hub. Static library, living lab, recurring program, or a mix — without switching platforms.' },
    { title: 'Safer assets', detail: 'Artifacts live in a controlled hub environment. Access is permissioned, making casual copying and redistribution harder.' },
    { title: 'Better economics', detail: 'Low transaction fees and many hubs mean Kahana scales with your expertise.' },
  ],
  learners: [
    { title: 'A real place to start', detail: 'When you have a project or learning goal, go to Kahana first — not Google plus 15 tabs. Hubs are organized around outcomes, not algorithms.' },
    { title: 'Trustworthy knowledge', detail: 'See who created a hub, what else they\'ve built, and how others have used it. Real experts with reputations.' },
    { title: 'Actionable artifacts', detail: 'Download templates, files, and assets you can plug directly into your work or study — not just read about something.' },
  ],
}

export const REFINE_NOTE =
  'Draft for internal alignment. Elevator versions and website hero copy live in Kahana/12-strategic-narrative.md — refine from here.'

export const RELATED_LINKS = [
  { path: '/kahana', title: 'Kahana Platform Overview', description: 'Business plan, vision, GTM, and metrics' },
  { path: '/kahana#vision-library', title: 'Vision: The Library', description: 'Wan Shi Tong parallels on the platform page' },
  { path: COMPETITORS_PAGE_PATH, title: 'Competitive landscape', description: 'Gumroad, Patreon, Substack, and full market map' },
  { path: '/b2c-strategic-narrative', title: 'Oasis Browser narrative (archived)', description: 'Separate product — browser privacy story' },
]

export { COMPETITORS_PAGE_PATH }
