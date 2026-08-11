/** Aura Library platform page — core idea, growth, club playbooks, company landscape teaser */

import { KAHANA_LIBRARY_URL, KAHANA_SITE_URL, PRODUCT_NAME, LEGAL_ENTITY } from '../constants/kahanaSite'

export const KAHANA_PLATFORM_URL = KAHANA_SITE_URL
/** @deprecated Prefer KAHANA_LIBRARY_URL — library catalog lives at /library */
export const KAHANA_EXPLORE_URL = KAHANA_LIBRARY_URL
export { KAHANA_LIBRARY_URL, PRODUCT_NAME, LEGAL_ENTITY }
export const KAHANA_CLUBS_FEEDBACK_URL = 'https://kahana.io/survey/improve?source=support_panel'
export const COMPETITORS_PAGE_PATH = '/company-landscape'
export const NARRATIVE_PAGE_PATH = '/kahana-narrative'
export const FRAGMENT_MAP_PATH = '/fragment-capture'

export const KAHANA_PLATFORM_PAGE = {
  title: `${PRODUCT_NAME} Overview`,
  subtitle: `A digital library with Aura — Clubs, curated content, and community-governed discovery at kahana.io.`,
  northStar: `Make ${PRODUCT_NAME} a beloved place to discover curated human knowledge — where anyone could spend an eternity exploring.`,
  legalEntity: LEGAL_ENTITY,
}

export const KAHANA_HIGHLIGHTS = [
  { label: 'Aura discovery', detail: 'Up to 5 Aura/day — wisdom of the crowds' },
  { label: 'Clubs first', detail: 'Book & video clubs for empathy and discussion' },
  { label: 'Library boarding', detail: 'Ebooks, courses, long-form YouTube first' },
  { label: '6,500+ users', detail: 'Registered and growing' },
]

/** Kept for executive summary quote + GTM one-liner */
export const VISION_LIBRARY = {
  zeQuote: 'I could spend an eternity in here.',
  zeAttribution: "Professor Zei, on Wan Shi Tong's Library (Avatar: The Last Airbender)",
}

/**
 * Tone-setter for the executive summary — the feeling before objectives.
 */
export const VISION_FEELING = {
  eyebrow: 'Before the objectives',
  title: 'The feeling we are building for',
  scene: [
    'You are on campus and a friend texts asking if you want to pregame for the party. You went out last night, and the weekend before. You say thanks, but you are headed to the library.',
    'Inside, it is quiet and warm. People are curled into chairs in comfortable hoodies, deep in their work, laptops and books open. Shelves rise around you holding more than you could read in a lifetime. The size of it makes you feel small in a good way. Surrounded by centuries of collected knowledge and other focused people, you become curious and open. You fall into the reading. Hours pass without your noticing. When you step outside into clear night air, ideas are connecting in your head and you feel better than when you walked in.',
  ],
  contrast:
    'Instagram, TikTok, YouTube and Netflix are the virtual party. They are always there when you want a dopamine hit, and there is nothing wrong with a party. But eventually you graduate and lose your library card, or you move somewhere without a good public library.',
  product:
    'Aura Library is the digital library with Aura: a place you can always go to fall into focus, feel productive, and be surrounded by other learners. We are building the room people deserve for thinking, learning, and becoming better.',
  stakes:
    'Everything in this data room serves that experience. A reader who searches and finds nothing does not get that feeling. That is the problem we are solving.',
}

export const TRACTION_METRICS = [
  { label: 'Registered users', value: '6,500+', detail: 'Growing network effects' },
  { label: 'Growth plan', value: '$9.99/mo', detail: 'or $99.99/yr' },
  { label: 'Take rate', value: '5%', detail: 'GMV spikes when creators monetize hubs' },
  { label: 'Platform', value: 'kahana.io', detail: 'Library at /library' },
]

export const GTM_STRATEGY = {
  headline: 'Organic Clubs + library boarding',
}

export const CORE_IDEA = {
  title: 'Core idea',
  paragraphs: [
    'Aura Library is a digital library with Aura. Clubs are how friends, family, colleagues, and teammates discuss what they read and watch — fostering empathy and understanding.',
    'We start with Clubs around ebooks, long-form YouTube, and courses — primarily educational or interesting content that drives real discussion. As Clubs grow, the community grows naturally, and we expand to more content types.',
    'Aura is simple: each person can give up to 5 Aura per day to things they feel deserve to rise. That is the algorithm — wisdom of the crowds. We hope Aura Library becomes a wonderful place to discover high-quality, important things to learn.',
  ],
}

export const HOW_WE_GROW = {
  title: 'How we grow',
  intro: 'Three things. Do them well and Aura Library compounds.',
  verbs: [
    {
      name: 'Make Clubs',
      detail:
        'Start book and video clubs with the team, friends, family, and people in your life. Clubs are the growth engine.',
    },
    {
      name: 'Create hubs of the right content',
      detail:
        'Stock the library with ebooks, courses, and YouTube long-form that Clubs actually need — driven by club wishlists.',
    },
    {
      name: 'Ask creators to add content',
      detail:
        'Outreach to authors and creators so their books, videos, and courses live on Aura Library and can fuel Clubs.',
    },
  ],
}

const SHARED_CLUB_STEPS = [
  {
    title: 'Create a club',
    detail: 'Go to kahana.io → Clubs → create a club → add all necessary info.',
  },
  {
    title: 'Manage the club over time',
    detail:
      'Keep the schedule, discussion prompts, and materials current. Rotate titles; keep the conversation alive.',
  },
  {
    title: 'Invite people',
    detail: 'Invite friends, family, teammates, colleagues — anyone who wants to learn and discuss together.',
  },
  {
    title: 'Log feedback',
    detail:
      'Bugs, feature ideas, and enhancements for Clubs go to the improve survey (support panel source).',
    href: KAHANA_CLUBS_FEEDBACK_URL,
    linkLabel: 'kahana.io/survey/improve',
  },
  {
    title: 'Build wishlist lists',
    detail:
      'List books/videos not on Aura Library yet — titles, authors, videos, creators — so we know what to board for the club.',
  },
  {
    title: 'Outreach to creators / authors',
    detail:
      'Request that they put their books or videos on Aura Library so the club can use them. Complementary ask, not a rip-and-replace.',
  },
]

export const CLUB_PLAYBOOKS = [
  {
    id: 'book-club',
    title: 'Book club playbook',
    focus: 'Ebooks and long-form reading — educational or discussion-worthy titles.',
    steps: SHARED_CLUB_STEPS,
  },
  {
    id: 'video-club',
    title: 'Video club playbook',
    focus: 'Long-form YouTube and courses — educational or interesting content that sparks discussion.',
    steps: SHARED_CLUB_STEPS,
  },
]

export { SYNERGY_CARDS } from './kahanaSynergyCards'
export const KAHANA_PLATFORM_SECTIONS = [
  { id: 'core-idea', title: 'Core idea' },
  { id: 'how-we-grow', title: 'How we grow' },
  { id: 'club-playbooks', title: 'Club playbooks' },
  { id: 'company-landscape', title: 'Company landscape' },
  { id: 'go-deeper', title: 'Go deeper' },
]

export const HOME_SECTION_LINKS = [
  { id: 'core-idea', label: 'Core idea' },
  { id: 'how-we-grow', label: 'How we grow' },
  { id: 'club-playbooks', label: 'Club playbooks' },
  { id: 'company-landscape', label: 'Company landscape' },
]

export const GO_DEEPER_LINKS = [
  { to: NARRATIVE_PAGE_PATH, label: 'Aura Library story / narrative' },
  { to: FRAGMENT_MAP_PATH, label: 'Market Map' },
  { to: COMPETITORS_PAGE_PATH, label: 'Company Landscape' },
]
