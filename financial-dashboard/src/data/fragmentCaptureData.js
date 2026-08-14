/**
 * Per-fragment competitor pools for capture / pathway modeling.
 * Revenue figures are directional estimates for strategy — not audited financials.
 * “Wipe out” = take 100% of that player’s modeled revenue; 10% = share of selected pool.
 *
 * Map helpers size territories like Risk/Diplomacy countries (area ∝ $).
 */

import { CONTENT_FRAGMENTS } from './libraryAuraNarrative'

/**
 * @typedef {'creator-heavy'|'viewer-heavy'|'balanced'} SideBias
 */

/**
 * @typedef {object} FragmentPlayer
 * @property {string} id
 * @property {string} name
 * @property {number|null} revenueUsd - annual platform / fragment-relevant revenue
 * @property {string} revenueNote
 * @property {boolean} [isEstimate]
 * @property {SideBias} sideBias
 */

/**
 * Directional mid-$ when CONTENT_FRAGMENTS has null marketSizeLow/High.
 * Used only for world-map area so small fragments still appear; labeled as placeholder.
 */
export const FRAGMENT_MAP_SIZE_PLACEHOLDERS = {
  'courses-learning': {
    midUsd: 8e9,
    label: '~$8B placeholder (creator LMS + MOOC slice)',
    note: 'Broad e-learning quotes vary wildly; map uses a directional mid so courses are visible vs streaming.',
  },
  'newsletters-written': {
    midUsd: 3e9,
    label: '~$3B placeholder (creator newsletters + digital writing)',
    note: 'Platform ARR is much smaller; map mid includes a wider writing/newsletter slice so the territory is visible.',
  },
}

export const MAP_LENSES = [
  {
    id: 'categories',
    name: 'Categories',
    description: 'Macro continents first — hover for player silhouettes, click to drill in.',
  },
  {
    id: 'companies',
    name: 'Companies',
    description: 'Same macro map; drill-in emphasizes company logos and labels.',
  },
  {
    id: 'creator-viewer',
    name: 'Creator / viewer',
    description: 'Macro continents colored by creator-heavy vs viewer-heavy bias.',
  },
]

/** Mid–deep board colors per fragment (categories lens) — readable with light or dark labels. */
export const FRAGMENT_MAP_COLORS = {
  'ebook-reading': '#3d6b4f',
  'short-form-video': '#9a7a2e',
  'long-form-video': '#4a6e8a',
  'series-films-streaming': '#3d5f73',
  'courses-learning': '#6b4e3d',
  'newsletters-written': '#5a4a6e',
  'audio-listening': '#2f5f5a',
  'creator-monetization': '#7a4e3d',
  'messaging-community': '#4a5d6e',
  'online-storefront': '#6b5a3d',
  'digital-marketplaces': '#5a4e3d',
}

/** Short on-map titles (full name stays in tooltip / chips). */
export const FRAGMENT_SHORT_NAMES = {
  'ebook-reading': 'Ebook',
  'short-form-video': 'Short-form video',
  'long-form-video': 'Long-form video',
  'series-films-streaming': 'Series/Films',
  'courses-learning': 'Courses',
  'newsletters-written': 'Newsletters',
  'audio-listening': 'Audio',
  'creator-monetization': 'Memberships',
  'messaging-community': 'Community & Messaging',
  'online-storefront': 'Storefronts',
  'digital-marketplaces': 'Marketplaces',
}

export const FRAGMENT_ABBREV = {
  'ebook-reading': 'Eb',
  'short-form-video': 'SF',
  'long-form-video': 'LF',
  'series-films-streaming': 'Se',
  'courses-learning': 'Co',
  'newsletters-written': 'Nw',
  'audio-listening': 'Au',
  'creator-monetization': 'Mb',
  'messaging-community': 'CM',
  'online-storefront': 'St',
  'digital-marketplaces': 'Mp',
}

export const SIDE_BIAS_COLORS = {
  'creator-heavy': '#6b4e3d',
  'viewer-heavy': '#3d5f73',
  balanced: '#3d6b4f',
}

export function getFragmentShortName(fragmentId) {
  return FRAGMENT_SHORT_NAMES[fragmentId] || getFragmentMeta(fragmentId)?.name || fragmentId
}

export function getFragmentAbbrev(fragmentId) {
  return FRAGMENT_ABBREV[fragmentId] || (getFragmentShortName(fragmentId) || '?').slice(0, 2)
}

/**
 * Club-centric GTM sequence — not biggest-first; natural clubs + product readiness + tractable acquisition.
 * Creator Business is a monetization/outreach layer, not a content phase.
 */
export const GTM_PHASES = [
  {
    id: 'phase-1',
    phase: 1,
    name: 'Reading & learning clubs',
    shortName: 'P1',
    fragmentIds: ['ebook-reading', 'courses-learning', 'long-form-video'],
    summary:
      'Book clubs, course clubs, and YouTube-powered video groups — same club pattern, three modalities.',
    pathway:
      'Start where clubs are natural. Phase 1 “Add YouTube” stores a youtube.com/embed/… URL and plays in an iframe — Kahana does not download or rehost the file, so the channel still gets YouTube views, watch time, and ads (per YouTube’s rules). Pair with book clubs and course clubs in multi-modal learning hubs. Caveat: a raw mp4 upload is a different path (Kahana-hosted) and does not credit the original YouTube channel.',
  },
  {
    id: 'phase-2',
    phase: 2,
    name: 'Newsletters / essays',
    shortName: 'P2',
    fragmentIds: ['newsletters-written'],
    summary: 'Reuse the reading/notes stack for newsletter and essay clubs.',
    pathway:
      'Clubs around a Substack/Beehiiv/Medium letter or essay collection. Outreach: “We already host book and video clubs — host yours on Kahana.”',
  },
  {
    id: 'phase-3',
    phase: 3,
    name: 'Audio / listening clubs',
    shortName: 'P3',
    fragmentIds: ['audio-listening'],
    summary: 'Audiobook, podcast, and lecture clubs — listen → reflect → discuss.',
    pathway:
      'Link-first (Spotify, Apple, Audible); uploads later. Same club mechanics as reading/video groups.',
  },
  {
    id: 'phase-4',
    phase: 4,
    name: 'Short-form (channel + prompts)',
    shortName: 'P4',
    fragmentIds: ['short-form-video'],
    summary: 'GTM channel and in-hub prompts — not a feed to replace.',
    pathway:
      'Creators invite from TikTok/Reels/Shorts into Kahana clubs; short clips as discussion prompts inside hubs. Core experience stays deep.',
  },
  {
    id: 'phase-5',
    phase: 5,
    name: 'Series / films',
    shortName: 'P5',
    fragmentIds: ['series-films-streaming'],
    summary: 'Film/show clubs linking out to SVOD once communities are proven.',
    pathway:
      'Link to Netflix/Disney+/Max/etc.; host discussion + supporting materials. Bring engaged clubs to rights holders — don’t start here.',
  },
]

/** Always-on creator monetization — memberships / tips channel. */
export const GTM_CREATOR_LAYER = {
  id: 'creator-layer',
  name: 'Memberships (channel)',
  fragmentIds: ['creator-monetization'],
  summary:
    'Patreon, OnlyFans, Ko-fi, etc. — paywall / fan-support layer; unlock Kahana clubs via tiers.',
  pathway:
    'Patreon creators host reading/video clubs on Kahana; memberships unlock library access — keep billing, move clubs home.',
}

/** Link-in-bio / personal storefront tools — destination behind the link. */
export const GTM_STOREFRONT_LAYER = {
  id: 'storefront-layer',
  name: 'Storefronts (channel)',
  fragmentIds: ['online-storefront'],
  summary:
    'Linktree, Stan, Beacons, Pensight, HYpage — “Join my Kahana club” as the destination behind the bio.',
  pathway:
    'Put Kahana on the link-in-bio; personal storefront creators bundle club access with offers.',
}

/** Multi-seller marketplaces — browse & buy, then deepen on Kahana. */
export const GTM_MARKETPLACE_LAYER = {
  id: 'marketplace-layer',
  name: 'Marketplaces (channel)',
  fragmentIds: ['digital-marketplaces'],
  summary:
    'Udemy, Gumroad, Etsy, Kindle Store — buyers find products on the marketplace; Kahana hosts clubs + library after purchase.',
  pathway:
    'Keep discovery/checkout on the marketplace; link purchased ebooks/courses into Kahana clubs.',
}

/** Group chat / community homes — sit beside, don’t replace chat. */
export const GTM_MESSAGING_LAYER = {
  id: 'messaging-layer',
  name: 'Community & Messaging (channel)',
  fragmentIds: ['messaging-community'],
  summary:
    'Discord, Telegram, WhatsApp, Circle, Mighty Networks — link the group to a Kahana hub (library + Clubs).',
  pathway:
    'Discord/WhatsApp admins keep chat; Kahana hosts the reading/watch club and library shelf the group is discussing.',
}

export function getGtmPhaseForFragment(fragmentId) {
  const phase = GTM_PHASES.find((p) => p.fragmentIds.includes(fragmentId))
  if (phase) return { ...phase, kind: 'phase' }
  if (GTM_CREATOR_LAYER.fragmentIds.includes(fragmentId)) {
    return { ...GTM_CREATOR_LAYER, phase: null, shortName: 'Mb', kind: 'layer' }
  }
  if (GTM_STOREFRONT_LAYER.fragmentIds.includes(fragmentId)) {
    return { ...GTM_STOREFRONT_LAYER, phase: null, shortName: 'St', kind: 'layer' }
  }
  if (GTM_MARKETPLACE_LAYER.fragmentIds.includes(fragmentId)) {
    return { ...GTM_MARKETPLACE_LAYER, phase: null, shortName: 'Mp', kind: 'layer' }
  }
  if (GTM_MESSAGING_LAYER.fragmentIds.includes(fragmentId)) {
    return { ...GTM_MESSAGING_LAYER, phase: null, shortName: 'CM', kind: 'layer' }
  }
  return null
}

/**
 * Players keyed by CONTENT_FRAGMENTS id.
 * Where company revenue spans multiple fragments, we use a fragment-relevant proxy and note it.
 */
export const FRAGMENT_CAPTURE_PLAYERS = {
  'ebook-reading': [
    {
      id: 'amazon-kindle',
      name: 'Amazon Kindle / KU (ebook slice)',
      revenueUsd: 12e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote:
        '~67–83% U.S. ebook sales; modeled as ~$12B of the ~$15–18B consumer ebook pool (directional).',
    },
    {
      id: 'apple-books',
      name: 'Apple Books',
      revenueUsd: 1.2e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Smaller share of consumer ebook retail; rough placeholder.',
    },
    {
      id: 'google-play-books',
      name: 'Google Play Books',
      revenueUsd: 0.8e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Rough placeholder within consumer ebook retail.',
    },
    {
      id: 'kobo',
      name: 'Kobo',
      revenueUsd: 0.5e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Rough placeholder.',
    },
    {
      id: 'wattpad',
      name: 'Wattpad',
      revenueUsd: 24e6,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote:
        'Earlier ~$20–24M ARR; a 2025 ~$895M figure exists but treat as unreliable — using conservative ARR.',
    },
    {
      id: 'goodreads',
      name: 'Goodreads',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Amazon-integrated; no standalone ARR — use for pathway priority, not $ wipe-out.',
    },
    {
      id: 'fable',
      name: 'Fable',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Curated book clubs; public ARR sparse.',
    },
    {
      id: 'storygraph',
      name: 'The StoryGraph',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote:
        'Independent Goodreads alternative; ~4M+ users (dir.); Plus subscription ~$4.99/mo — use for pathway priority, not $ wipe-out.',
    },
    {
      id: 'bookclubs',
      name: 'Bookclubs (Bookclubz)',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Book club ops app (Bookclubz, Inc.); public ARR sparse.',
    },
    {
      id: 'librarything',
      name: 'LibraryThing',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Social cataloging; ~2.6M users (2021 dir.); lifetime ~$25 — pathway priority, not $ wipe-out.',
    },
    {
      id: 'literal',
      name: 'Literal (Literal Club)',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Minimalist social reading + clubs; freemium — public ARR sparse.',
    },
    {
      id: 'bookbrowse',
      name: 'BookBrowse',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Curated guides + moderated online clubs; membership model — niche influence.',
    },
    {
      id: 'royal-road',
      name: 'Royal Road',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Scout — serialized fiction / web novels.',
    },
    {
      id: 'inkitt',
      name: 'Inkitt',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Scout — serialized fiction + publishing.',
    },
    {
      id: 'tapas',
      name: 'Tapas',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Scout — webcomics/novels, micro-transactions.',
    },
    {
      id: 'radish',
      name: 'Radish',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Scout — serialized romance / genre fiction.',
    },
    {
      id: 'draft2digital',
      name: 'Draft2Digital',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — ebook distribution / aggregation.',
    },
    {
      id: 'smashwords',
      name: 'Smashwords',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — ebook distribution.',
    },
    {
      id: 'ingramspark',
      name: 'IngramSpark',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — distribution / print-on-demand.',
    },
    {
      id: 'publishdrive',
      name: 'PublishDrive',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — ebook distribution.',
    },
  ],
  'short-form-video': [
    {
      id: 'tiktok',
      name: 'TikTok',
      revenueUsd: 23e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Company-scale revenue often cited in low–mid tens of $B; short-form is the core product.',
    },
    {
      id: 'instagram-reels',
      name: 'Instagram (Reels / Meta)',
      revenueUsd: 20e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Meta ad revenue is much larger; modeled Reels-relevant slice as directional only.',
    },
    {
      id: 'youtube-shorts',
      name: 'YouTube Shorts',
      revenueUsd: 8e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'YouTube overall ad revenue is larger; Shorts slice is a directional proxy.',
    },
    {
      id: 'snapchat',
      name: 'Snapchat',
      revenueUsd: 5e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Company revenue ~several $B; included as smaller short-form peer.',
    },
    {
      id: 'triller',
      name: 'Triller',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — short-form video peer.',
    },
    {
      id: 'kwai',
      name: 'Kwai',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — regional short-form (global coverage).',
    },
    {
      id: 'likee',
      name: 'Likee',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — regional short-form.',
    },
  ],
  'long-form-video': [
    {
      id: 'youtube-long',
      name: 'YouTube (long-form)',
      revenueUsd: 30e9,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote:
        'YouTube ad revenue is large; long-form (non-Shorts) share is a directional proxy for this fragment.',
    },
    {
      id: 'vimeo',
      name: 'Vimeo',
      revenueUsd: 0.4e9,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Much smaller than YouTube; directional SaaS / hosting estimate.',
    },
    {
      id: 'nebula',
      name: 'Nebula',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Creator-owned long-form; ARR not reliably public — pathway scout.',
    },
    {
      id: 'curiositystream',
      name: 'CuriosityStream',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — documentary / specialty VOD (creator/hosting adjacent).',
    },
    {
      id: 'twitch',
      name: 'Twitch',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Scout — live long-form + VOD; pathway for video clubs.',
    },
    {
      id: 'rumble',
      name: 'Rumble',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Scout — alternative long-form / creator video platform.',
    },
  ],
  'series-films-streaming': [
    {
      id: 'netflix',
      name: 'Netflix',
      revenueUsd: 45.2e9,
      isEstimate: false,
      sideBias: 'viewer-heavy',
      revenueNote: '~$45.2B (2025); ~325M subscribers.',
    },
    {
      id: 'prime-video',
      name: 'Amazon Prime Video',
      revenueUsd: 15e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Bundled with Prime; streaming-attributable revenue is a rough estimate.',
    },
    {
      id: 'disney-plus',
      name: 'Disney+',
      revenueUsd: 10e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Disney streaming segment; directional.',
    },
    {
      id: 'max',
      name: 'Max (HBO)',
      revenueUsd: 8e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Directional from Warner streaming; ~126–140M subs.',
    },
    {
      id: 'hulu',
      name: 'Hulu',
      revenueUsd: 4e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'U.S.-weighted; ~54–64M subs; directional.',
    },
    {
      id: 'crunchyroll',
      name: 'Crunchyroll',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — anime / manga streaming (tens of millions of subs).',
    },
    {
      id: 'paramount-plus',
      name: 'Paramount+',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — major SVOD.',
    },
    {
      id: 'peacock',
      name: 'Peacock',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — major SVOD (NBCU).',
    },
    {
      id: 'apple-tv-plus',
      name: 'Apple TV+',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — major SVOD; often services-bundled.',
    },
  ],
  'courses-learning': [
    {
      id: 'udemy',
      name: 'Udemy',
      revenueUsd: 786.6e6,
      isEstimate: false,
      sideBias: 'balanced',
      revenueNote: '~$786.6M (2024).',
    },
    {
      id: 'coursera',
      name: 'Coursera',
      revenueUsd: 757.5e6,
      isEstimate: false,
      sideBias: 'viewer-heavy',
      revenueNote: '~$757.5M (2025).',
    },
    {
      id: 'kajabi',
      name: 'Kajabi',
      revenueUsd: 75e6,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: '~$75M ARR (2024 est.).',
    },
    {
      id: 'teachable',
      name: 'Teachable',
      revenueUsd: 59.2e6,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: '~$59.2M estimated annual revenue.',
    },
    {
      id: 'podia',
      name: 'Podia',
      revenueUsd: 0.81e6,
      isEstimate: false,
      sideBias: 'creator-heavy',
      revenueNote: '~$0.81M ARR (2024).',
    },
    {
      id: 'thinkific',
      name: 'Thinkific',
      revenueUsd: 60e6,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Public/company figures vary by year; directional mid-tens of $M.',
    },
    {
      id: 'skool',
      name: 'Skool',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Community + courses; ARR not reliably public.',
    },
    {
      id: 'edx',
      name: 'edX',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — MOOCs (2U / ecosystem).',
    },
    {
      id: 'domestika',
      name: 'Domestika',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Scout — creative courses.',
    },
    {
      id: 'mighty-networks',
      name: 'Mighty Networks',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — community + courses.',
    },
    {
      id: 'disco',
      name: 'Disco',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — cohort-based learning.',
    },
    {
      id: 'maven',
      name: 'Maven',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — cohort-based courses.',
    },
    {
      id: 'masterclass',
      name: 'MasterClass',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — celebrity-led courses / SVOD learning.',
    },
  ],
  'newsletters-written': [
    {
      id: 'substack',
      name: 'Substack',
      revenueUsd: 45e6,
      isEstimate: false,
      sideBias: 'creator-heavy',
      revenueNote:
        'Platform ~$45M (2025) on ~$450M writer gross — wipe-out uses platform $ unless you model GMV.',
    },
    {
      id: 'beehiiv',
      name: 'Beehiiv',
      revenueUsd: 25e6,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Early-stage; modeled as tens of millions ARR (directional).',
    },
    {
      id: 'medium',
      name: 'Medium',
      revenueUsd: 40e6,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Memberships + sponsorship; tens of millions/yr est.',
    },
    {
      id: 'ghost',
      name: 'Ghost',
      revenueUsd: 15e6,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Open-source + hosted; directional SaaS estimate.',
    },
    {
      id: 'substack-writer-gmv',
      name: 'Substack writer GMV (optional)',
      revenueUsd: 450e6,
      isEstimate: false,
      sideBias: 'creator-heavy',
      revenueNote:
        'Writer gross ~$450M (2025) — use if modeling take-rate on creator GMV, not Substack’s cut.',
    },
    {
      id: 'wsj',
      name: 'WSJ (digital)',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — traditional news digital subs (adjacent to creator newsletters).',
    },
    {
      id: 'nyt',
      name: 'NYT (digital)',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — traditional news digital subs.',
    },
    {
      id: 'ft',
      name: 'FT (digital)',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — traditional news digital subs.',
    },
    {
      id: 'economist',
      name: 'The Economist (digital)',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — traditional news digital subs.',
    },
    {
      id: 'kit-convertkit',
      name: 'Kit (ConvertKit)',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — creator email / newsletters stack.',
    },
    {
      id: 'wordpress',
      name: 'WordPress',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — publishing substrate (huge, highly varied monetization).',
    },
  ],
  'audio-listening': [
    {
      id: 'spotify',
      name: 'Spotify (music + podcasts)',
      revenueUsd: 15e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote:
        'Company revenue mid-teens $B; core of music + podcast listening — directional fragment proxy.',
    },
    {
      id: 'apple-music',
      name: 'Apple Music',
      revenueUsd: 8e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Services-bundled; music-attributable revenue is a rough estimate.',
    },
    {
      id: 'amazon-music',
      name: 'Amazon Music',
      revenueUsd: 5e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Often Prime-bundled; directional estimate.',
    },
    {
      id: 'youtube-music',
      name: 'YouTube Music',
      revenueUsd: 4e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'YouTube Music / Premium slice; directional vs YouTube long-form video fragment.',
    },
    {
      id: 'audible',
      name: 'Audible',
      revenueUsd: 5e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Audiobook leader (Amazon); public ARR sparse — directional.',
    },
    {
      id: 'apple-podcasts',
      name: 'Apple Podcasts',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Distribution-heavy; limited standalone revenue disclosure — pathway scout.',
    },
    {
      id: 'scribd',
      name: 'Scribd / Everand',
      revenueUsd: 0.5e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Subscription reading + audiobooks; rough placeholder.',
    },
    {
      id: 'deezer',
      name: 'Deezer',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — music streaming.',
    },
    {
      id: 'megaphone',
      name: 'Megaphone',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — podcast hosting / ads (Spotify).',
    },
    {
      id: 'libsyn',
      name: 'Libsyn',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — podcast hosting.',
    },
    {
      id: 'simplecast',
      name: 'Simplecast',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — podcast hosting.',
    },
    {
      id: 'google-play-audiobooks',
      name: 'Google Play Books (audiobooks)',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — audiobook retail slice (distinct from ebook retail province).',
    },
    {
      id: 'pandora',
      name: 'Pandora',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — audio streaming & podcasts.',
    },
    {
      id: 'iheartradio',
      name: 'iHeartRadio',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Scout — radio + streaming + podcasts.',
    },
  ],
  'creator-monetization': [
    {
      id: 'onlyfans',
      name: 'OnlyFans',
      revenueUsd: 1.3e9,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote:
        'Platform >$1.3B (2024 dir.); user spend multi-billion — use platform $ for wipe-out modeling.',
    },
    {
      id: 'patreon',
      name: 'Patreon',
      revenueUsd: 62.5e6,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote:
        'Platform ~$50–75M (2026 est.); creator payouts ~$2B/yr — wipe-out uses platform cut unless modeling GMV.',
    },
    {
      id: 'ko-fi',
      name: 'Ko-fi',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — tips + memberships.',
    },
    {
      id: 'buymeacoffee',
      name: 'Buy Me a Coffee',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — tips + memberships.',
    },
    {
      id: 'memberful',
      name: 'Memberful',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — memberships for independent creators/publishers.',
    },
  ],
  'messaging-community': [
    {
      id: 'discord',
      name: 'Discord',
      revenueUsd: 561e6,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: '~$561M (2025 dir.); Nitro + ads/partnerships — dominant creator/gaming/paid groups.',
    },
    {
      id: 'telegram',
      name: 'Telegram',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Premium + ads (dir.); large groups/channels — trading, crypto, B2B, international.',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote:
        'Meta-owned; Communities + Business API — dominant consumer messaging in LATAM, MENA, India, etc.',
    },
    {
      id: 'signal',
      name: 'Signal',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Secure messaging — smaller privacy-focused groups; pathway scout.',
    },
    {
      id: 'slack',
      name: 'Slack',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'balanced',
      revenueNote: 'Workplace seats; professional communities, masterminds, membership programs.',
    },
    {
      id: 'facebook-groups',
      name: 'Facebook Groups',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Mass-market community layer on Meta — broad consumer communities.',
    },
    {
      id: 'groupme',
      name: 'GroupMe',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Microsoft-owned group messaging — campus/friend-group pathway scout.',
    },
    {
      id: 'circle',
      name: 'Circle',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Modern all-in-one community (spaces, events, memberships).',
    },
    {
      id: 'mighty-networks',
      name: 'Mighty Networks',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Branded community + courses/events — overlaps Courses.',
    },
    {
      id: 'guild',
      name: 'Guild',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — dedicated community platform for brands/memberships.',
    },
    {
      id: 'hivebrite',
      name: 'Hivebrite',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — community platform for brands / membership orgs.',
    },
    {
      id: 'disciple',
      name: 'Disciple',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — branded community apps for creators/orgs.',
    },
    {
      id: 'bettermode',
      name: 'Bettermode',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — community platform (ex-Tribe).',
    },
  ],
  'online-storefront': [
    {
      id: 'linktree',
      name: 'Linktree',
      revenueUsd: 37e6,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: '~$37M revenue (2023 dir.); supply-side heavy link-in-bio.',
    },
    {
      id: 'beacons',
      name: 'Beacons',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — link-in-bio + creator commerce.',
    },
    {
      id: 'stan-store',
      name: 'Stan.store',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — personal storefront / link-in-bio for solo creators.',
    },
    {
      id: 'pensight',
      name: 'Pensight',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — link-in-bio / personal creator storefront.',
    },
    {
      id: 'hypage',
      name: 'HYpage',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — link-in-bio / personal creator storefront.',
    },
    {
      id: 'podia',
      name: 'Podia',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: 'Scout — personal storefront + courses overlap.',
    },
  ],
  'digital-marketplaces': [
    {
      id: 'gumroad',
      name: 'Gumroad',
      revenueUsd: 23.8e6,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote: '~$23.8M ARR (2024 dir.); ~10% of GMV — multi-seller digital marketplace.',
    },
    {
      id: 'etsy',
      name: 'Etsy (digital)',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'viewer-heavy',
      revenueNote: 'Multi-seller marketplace; digital downloads / ebooks niche — not full Etsy GMV.',
    },
    {
      id: 'shopify',
      name: 'Shopify',
      revenueUsd: null,
      isEstimate: true,
      sideBias: 'creator-heavy',
      revenueNote:
        'Commerce platform / merchant marketplace pattern for buyers finding products — digital/creator slice only.',
    },
  ],
}

/** Directional user / audience labels for tooltip “at a glance” (not audited). */
export const PLAYER_USERS_LABEL = {
  'amazon-kindle': '~100M+ Kindle ecosystem (dir.)',
  'apple-books': 'Tens of millions (dir.)',
  'google-play-books': 'Tens of millions (dir.)',
  kobo: 'Tens of millions (dir.)',
  wattpad: '~90M+ MAU (hist./dir.)',
  goodreads: '~150M+ members (dir.)',
  fable: 'Smaller club audience (dir.)',
  storygraph: '~4M+ users (dir.)',
  bookclubs: 'Club ops audience (dir.)',
  librarything: '~2.6M users (2021 dir.)',
  literal: 'Growing social-reading base (dir.)',
  bookbrowse: 'Niche club / guide audience (dir.)',
  'royal-road': 'Serialized fiction readers (dir.)',
  inkitt: 'Serialized fiction (dir.)',
  tapas: 'Webcomics/novels audience (dir.)',
  radish: 'Serialized genre audience (dir.)',
  draft2digital: 'Publisher/distributor base (dir.)',
  smashwords: 'Indie publisher base (dir.)',
  ingramspark: 'Author/publisher base (dir.)',
  publishdrive: 'Publisher base (dir.)',
  tiktok: '~1.9–2.0B MAU',
  'instagram-reels': '~3B IG MAU (Reels inside)',
  'youtube-shorts': 'Part of ~2.58B YT MAU',
  snapchat: '~400M+ DAU (co.)',
  triller: 'Smaller short-form base (dir.)',
  kwai: 'Regional MAU (dir.)',
  likee: 'Regional MAU (dir.)',
  'youtube-long': '~2.58B MAU (platform)',
  vimeo: 'Tens of millions (dir.)',
  nebula: 'Hundreds of thousands–low M (dir.)',
  curiositystream: 'Specialty VOD subs (dir.)',
  twitch: '~100M+ MAU (hist./dir.)',
  rumble: 'Tens of millions (dir.)',
  netflix: '~325M subscribers',
  'prime-video': '~167–200M (dir.)',
  'disney-plus': '~132M subscribers (dir.)',
  max: '~126–140M subscribers (dir.)',
  hulu: '~54–64M subscribers (dir.)',
  crunchyroll: 'Tens of millions of subs (dir.)',
  'paramount-plus': 'Tens of millions (dir.)',
  peacock: 'Tens of millions (dir.)',
  'apple-tv-plus': 'Tens of millions (dir.)',
  udemy: '~70M+ learners (dir.)',
  coursera: '~150M+ registered (dir.)',
  kajabi: 'Creator SaaS — tens of k customers (dir.)',
  teachable: 'Creator SaaS — tens of k (dir.)',
  podia: 'Small creator base',
  thinkific: 'Creator SaaS — tens of k (dir.)',
  skool: 'Growing community base (dir.)',
  edx: 'MOOC learners (dir.)',
  domestika: 'Creative course learners (dir.)',
  'mighty-networks': 'Community creators (dir.)',
  disco: 'Cohort learners (dir.)',
  maven: 'Cohort course buyers (dir.)',
  masterclass: 'Millions of members (dir.)',
  substack: 'Millions of readers / paid subs (dir.)',
  beehiiv: 'Growing publisher base (dir.)',
  medium: 'Tens of millions of readers (dir.)',
  ghost: 'Hundreds of k sites (dir.)',
  'substack-writer-gmv': 'Same Substack writer ecosystem',
  wsj: 'Digital news subs (dir.)',
  nyt: 'Digital news subs (dir.)',
  ft: 'Digital news subs (dir.)',
  economist: 'Digital news subs (dir.)',
  'kit-convertkit': 'Creator email lists (dir.)',
  wordpress: 'Huge publishing base (dir.)',
  spotify: '~600M+ MAU / ~250M+ Premium (dir.)',
  'apple-music': '~100M+ subscribers (dir.)',
  'amazon-music': 'Tens–100M+ (Prime overlap, dir.)',
  'youtube-music': 'Tens–100M+ (YT Premium overlap, dir.)',
  audible: 'Tens of millions of listeners (dir.)',
  'apple-podcasts': 'Hundreds of millions of devices (dist.)',
  scribd: 'Millions of subscribers (dir.)',
  deezer: 'Tens of millions (dir.)',
  megaphone: 'Podcast publishers (B2B)',
  libsyn: 'Podcast creators (dir.)',
  simplecast: 'Podcast creators (dir.)',
  'google-play-audiobooks': 'Audiobook buyers (dir.)',
  pandora: 'Tens of millions (dir.)',
  iheartradio: 'Tens–100M+ (dir.)',
  onlyfans: '~120M MAU; 377M+ registered (dir.)',
  patreon: '~8–10M active patrons; ~286k paid creators (dir.)',
  linktree: '~50M+ users (creators/brands)',
  gumroad: 'Tens of thousands of creators / stores (dir.)',
  beacons: 'Hundreds of thousands of creators (dir.)',
  'stan-store': 'Solo creators (dir.)',
  'ko-fi': 'Creators + tippers (dir.)',
  buymeacoffee: 'Creators + tippers (dir.)',
  memberful: 'Publisher/creator members (dir.)',
  pensight: 'Creator storefronts (dir.)',
  circle: 'Community creators (dir.)',
  whatsapp: '~2B+ MAU (Meta, dir.)',
  telegram: '~900M+ MAU (dir.)',
  groupme: 'Tens of millions (campus/friend groups, dir.)',
  slack: 'Tens of millions of paid users (workspace, dir.)',
  signal: 'Tens of millions (privacy-focused, dir.)',
  'facebook-groups': 'Hundreds of millions of group members (Meta, dir.)',
  guild: 'Brand / membership communities (dir.)',
  hivebrite: 'Brand / alumni communities (dir.)',
  disciple: 'Branded community apps (dir.)',
  bettermode: 'Community creators (dir.)',
  hypage: 'Creator storefronts (dir.)',
  shopify: 'Millions of merchants (digital slice, dir.)',
  etsy: 'Digital downloads niche (dir.)',
  podia: 'Small creator base',
}

/**
 * Key players for fragment hover: revenue, share of fragment TAM mid, users label.
 * @param {string} fragmentId
 * @param {number} [limit=6]
 */
export function getKeyPlayersForFragment(fragmentId, limit = 6) {
  const size = getFragmentMapSize(fragmentId)
  const mid = size.midUsd
  const players = [...getPlayersForFragment(fragmentId)].sort((a, b) => {
    const ar = a.revenueUsd ?? -1
    const br = b.revenueUsd ?? -1
    return br - ar
  })

  return players.slice(0, limit).map((p) => {
    const shareOfFragment =
      p.revenueUsd != null && mid > 0 ? p.revenueUsd / mid : null
    return {
      id: p.id,
      name: p.name,
      revenueUsd: p.revenueUsd,
      shareOfFragment,
      usersLabel: PLAYER_USERS_LABEL[p.id] || null,
      isEstimate: !!p.isEstimate,
    }
  })
}

export const CAPTURE_PRESETS = [
  { id: '10', label: '10%', rate: 0.1 },
  { id: '25', label: '25%', rate: 0.25 },
  { id: '50', label: '50%', rate: 0.5 },
  { id: '100', label: '100% (wipe-out)', rate: 1 },
]

/**
 * Named investment theses — one-click loaders for fragment + occupied players + capture %.
 * `occupyAllModeled: true` resolves playerIds from the target fragment at apply time.
 * `fragmentId: null` means keep the currently selected fragment.
 */
/**
 * Shared scenario summary for sticky KPIs and Path A/B slots.
 * Includes a value ladder: world → category → occupied pool → capture.
 */
export function summarizeScenario(fragmentId, selectedIds, captureRate) {
  const players = getPlayersForFragment(fragmentId)
  const scenario = computeCaptureScenario(players, selectedIds, captureRate)
  const meta = getFragmentMeta(fragmentId)
  const mapSize = getFragmentMapSize(fragmentId)
  const world = getWorldMarketRollup()
  const fragmentTam = mapSize.midUsd
  const shareOfTam =
    fragmentTam && scenario.capturedUsd > 0 ? scenario.capturedUsd / fragmentTam : null
  const poolShareOfFragment =
    fragmentTam > 0 && scenario.poolUsd > 0 ? scenario.poolUsd / fragmentTam : null
  const fragmentShareOfWorld =
    world.worldTamUsd > 0 ? fragmentTam / world.worldTamUsd : null
  const poolShareOfWorld =
    world.worldTamUsd > 0 && scenario.poolUsd > 0 ? scenario.poolUsd / world.worldTamUsd : null
  const captureShareOfWorld =
    world.worldTamUsd > 0 && scenario.capturedUsd > 0
      ? scenario.capturedUsd / world.worldTamUsd
      : null
  return {
    fragmentId,
    fragmentName: meta?.name || getFragmentShortName(fragmentId),
    selectedIds: [...selectedIds],
    captureRate,
    poolUsd: scenario.poolUsd,
    capturedUsd: scenario.capturedUsd,
    modeledCount: scenario.modeledCount,
    selectedCount: scenario.selectedCount,
    scoutCount: scenario.skippedNoRevenue.length,
    fragmentTam,
    shareOfTam,
    sizeLabel: mapSize.sizeLabel,
    worldTamUsd: world.worldTamUsd,
    worldFragmentCount: world.fragmentCount,
    fragmentShareOfWorld,
    poolShareOfFragment,
    poolShareOfWorld,
    captureShareOfWorld,
    ladder: [
      {
        id: 'world',
        label: 'World market',
        usd: world.worldTamUsd,
        detail: `${world.fragmentCount} categories`,
        pctOfParent: null,
      },
      {
        id: 'fragment',
        label: meta?.name || getFragmentShortName(fragmentId),
        usd: fragmentTam,
        detail: mapSize.isPlaceholder ? 'placeholder TAM' : 'category TAM',
        pctOfParent: fragmentShareOfWorld,
      },
      {
        id: 'pool',
        label: 'Occupied companies',
        usd: scenario.poolUsd,
        detail: `${scenario.modeledCount} with $ · ${scenario.skippedNoRevenue.length} scout`,
        pctOfParent: poolShareOfFragment,
      },
      {
        id: 'capture',
        label: `At ${(captureRate * 100).toFixed(0)}% capture`,
        usd: scenario.capturedUsd,
        detail: 'implied ceiling',
        pctOfParent: captureRate,
      },
    ],
  }
}

/**
 * Sum of all capturable fragment mid TAMs (+ per-fragment rows for legend / tooltips).
 */
export function getWorldMarketRollup() {
  const fragments = getCapturableFragments()
  const rows = fragments.map((f) => {
    const size = getFragmentMapSize(f.id)
    const players = getPlayersForFragment(f.id)
    const modeledUsd = players.reduce((s, p) => s + (p.revenueUsd ?? 0), 0)
    return {
      fragmentId: f.id,
      name: f.name,
      shortName: getFragmentShortName(f.id),
      midUsd: size.midUsd,
      sizeLabel: size.sizeLabel,
      isPlaceholder: size.isPlaceholder,
      modeledUsd,
      playerCount: players.length,
    }
  })
  const worldTamUsd = rows.reduce((s, r) => s + r.midUsd, 0)
  return {
    worldTamUsd,
    fragmentCount: rows.length,
    fragments: rows
      .map((r) => ({
        ...r,
        shareOfWorld: worldTamUsd > 0 ? r.midUsd / worldTamUsd : 0,
      }))
      .sort((a, b) => b.midUsd - a.midUsd),
  }
}

const COMPANY_PIE_TOP_N = 14

/**
 * Pie slices for total-market view: categories (TAM) or companies (modeled revenue).
 * @param {'categories'|'companies'} breakdown
 */
export function getMarketPieData(breakdown = 'categories') {
  if (breakdown === 'companies') {
    const slices = []
    for (const f of getCapturableFragments()) {
      const fill = FRAGMENT_MAP_COLORS[f.id] || '#3d6b4f'
      for (const p of getPlayersForFragment(f.id)) {
        if (p.revenueUsd == null) continue
        slices.push({
          id: `${f.id}:${p.id}`,
          name: p.name.length > 22 ? `${p.name.slice(0, 20)}…` : p.name,
          fullName: p.name,
          value: p.revenueUsd,
          fill,
          kind: 'company',
          fragmentId: f.id,
          fragmentName: getFragmentShortName(f.id),
          playerId: p.id,
          isEstimate: !!p.isEstimate,
        })
      }
    }
    slices.sort((a, b) => b.value - a.value)
    const totalUsd = slices.reduce((s, x) => s + x.value, 0)
    let display = slices
    if (slices.length > COMPANY_PIE_TOP_N) {
      const top = slices.slice(0, COMPANY_PIE_TOP_N)
      const rest = slices.slice(COMPANY_PIE_TOP_N)
      const restUsd = rest.reduce((s, x) => s + x.value, 0)
      display = [
        ...top,
        {
          id: 'other-companies',
          name: `Other (${rest.length})`,
          fullName: `${rest.length} smaller modeled companies`,
          value: restUsd,
          fill: '#8a8070',
          kind: 'other',
          fragmentId: null,
          fragmentName: null,
          playerId: null,
          isEstimate: true,
        },
      ]
    }
    return {
      breakdown: 'companies',
      totalUsd,
      totalLabel: 'Modeled company revenue',
      note: 'Sum of companies with $ on file — not full category TAMs (unmodeled share omitted).',
      slices: display.map((s) => {
        const gtm = s.fragmentId ? getGtmPhaseForFragment(s.fragmentId) : null
        return {
          ...s,
          share: totalUsd > 0 ? s.value / totalUsd : 0,
          gtmPhase: gtm?.shortName || null,
          gtmLabel: gtm?.phase != null ? `Phase ${gtm.phase}` : gtm?.name || null,
        }
      }),
    }
  }

  const world = getWorldMarketRollup()
  return {
    breakdown: 'categories',
    totalUsd: world.worldTamUsd,
    totalLabel: 'World market (category TAMs)',
    note: 'Sum of directional mid TAMs across categories. Phase badges = club-centric GTM order (not biggest-first).',
    slices: world.fragments.map((f) => {
      const gtm = getGtmPhaseForFragment(f.fragmentId)
      return {
        id: f.fragmentId,
        name: f.shortName,
        fullName: f.name,
        value: f.midUsd,
        fill: FRAGMENT_MAP_COLORS[f.fragmentId] || '#3d6b4f',
        kind: 'fragment',
        fragmentId: f.fragmentId,
        fragmentName: f.shortName,
        playerId: null,
        isEstimate: f.isPlaceholder,
        share: f.shareOfWorld,
        gtmPhase: gtm?.shortName || null,
        gtmLabel: gtm?.phase != null ? `Phase ${gtm.phase}` : gtm?.name || null,
      }
    }),
  }
}

/**
 * Drill-in wedge brief: Kahana angle + top displaceable + scout count.
 */
export function getWedgeBrief(fragmentId) {
  const meta = getFragmentMeta(fragmentId)
  const players = getPlayersForFragment(fragmentId)
  const withRevenue = players
    .filter((p) => p.revenueUsd != null)
    .sort((a, b) => b.revenueUsd - a.revenueUsd)
  const scouts = players.filter((p) => p.revenueUsd == null)
  const gtm = getGtmPhaseForFragment(fragmentId)
  return {
    fragmentId,
    fragmentName: meta?.name || getFragmentShortName(fragmentId),
    kahanaAngle: meta?.kahanaAngle || null,
    gtm,
    topDisplaceable: withRevenue.slice(0, 3).map((p) => ({
      id: p.id,
      name: p.name,
      revenueUsd: p.revenueUsd,
      isEstimate: !!p.isEstimate,
    })),
    scoutCount: scouts.length,
    modeledCount: withRevenue.length,
  }
}

export function getFragmentMeta(fragmentId) {
  return CONTENT_FRAGMENTS.find((f) => f.id === fragmentId) ?? null
}

export function getPlayersForFragment(fragmentId) {
  return FRAGMENT_CAPTURE_PLAYERS[fragmentId] ?? []
}

/**
 * Mid market size for map area. Uses CONTENT_FRAGMENTS when available, else placeholder.
 * @returns {{ midUsd: number, sizeLabel: string, isPlaceholder: boolean, marketNote: string }}
 */
export function getFragmentMapSize(fragmentId) {
  const meta = getFragmentMeta(fragmentId)
  const placeholder = FRAGMENT_MAP_SIZE_PLACEHOLDERS[fragmentId]

  if (meta?.marketSizeLowUsd != null && meta?.marketSizeHighUsd != null) {
    const midUsd = (meta.marketSizeLowUsd + meta.marketSizeHighUsd) / 2
    return {
      midUsd,
      sizeLabel: meta.marketSizeLabel,
      isPlaceholder: false,
      marketNote: meta.marketNote || '',
    }
  }

  if (placeholder) {
    return {
      midUsd: placeholder.midUsd,
      sizeLabel: placeholder.label,
      isPlaceholder: true,
      marketNote: placeholder.note,
    }
  }

  // Fallback: sum modeled player revenue so the cell still renders
  const players = getPlayersForFragment(fragmentId)
  const sum = players.reduce((s, p) => s + (p.revenueUsd ?? 0), 0)
  return {
    midUsd: Math.max(sum, 1e6),
    sizeLabel: 'Directional (from modeled players)',
    isPlaceholder: true,
    marketNote: 'No fragment TAM on file — sized from modeled competitor revenues.',
  }
}

/** Dominant sideBias among players in a fragment (by revenue weight; null revenue counts as 1). */
export function getFragmentSideBias(fragmentId) {
  const players = getPlayersForFragment(fragmentId)
  const scores = { 'creator-heavy': 0, 'viewer-heavy': 0, balanced: 0 }
  for (const p of players) {
    const w = p.revenueUsd != null ? p.revenueUsd : 1e6
    const bias = p.sideBias || 'balanced'
    scores[bias] += w
  }
  let best = 'balanced'
  let bestScore = -1
  for (const key of Object.keys(scores)) {
    if (scores[key] > bestScore) {
      bestScore = scores[key]
      best = key
    }
  }
  return /** @type {SideBias} */ (best)
}

/**
 * Battle-card stats for a player within a fragment (world-map popup).
 */
export function getPlayerBattleCard(fragmentId, playerId) {
  const meta = getFragmentMeta(fragmentId)
  const size = getFragmentMapSize(fragmentId)
  const player = getPlayersForFragment(fragmentId).find((p) => p.id === playerId)
  if (!player) return null
  const shareOfFragment =
    player.revenueUsd != null && size.midUsd > 0 ? player.revenueUsd / size.midUsd : null
  const world = getWorldMarketRollup()
  const shareOfWorld =
    player.revenueUsd != null && world.worldTamUsd > 0
      ? player.revenueUsd / world.worldTamUsd
      : null
  const isScout = player.revenueUsd == null
  const isEstimate = !!player.isEstimate
  return {
    id: player.id,
    name: player.name,
    fragmentId,
    fragmentName: meta?.name || fragmentId,
    revenueUsd: player.revenueUsd,
    shareOfFragment,
    shareOfWorld,
    fragmentTam: size.midUsd,
    worldTamUsd: world.worldTamUsd,
    usersLabel: PLAYER_USERS_LABEL[player.id] || null,
    sideBias: player.sideBias || 'balanced',
    isEstimate,
    isScout,
    confidence: isScout ? 'Scout' : isEstimate ? 'Estimate' : 'Reported',
    revenueNote: player.revenueNote,
    kahanaAngle: meta?.kahanaAngle || null,
    sizeLabel: size.sizeLabel,
  }
}

/**
 * Players sized for silhouette / drill layouts inside a fragment.
 */
export function getSilhouettePlayers(fragmentId) {
  const size = getFragmentMapSize(fragmentId)
  const players = getPlayersForFragment(fragmentId).filter((p) => p.revenueUsd != null)
  const playerSum = players.reduce((s, p) => s + p.revenueUsd, 0)
  const remainder = Math.max(0, size.midUsd - playerSum)
  const nodes = players.map((p) => ({
    id: p.id,
    name: p.name,
    size: p.revenueUsd,
    kind: 'company',
    sideBias: p.sideBias,
  }))
  if (remainder > size.midUsd * 0.02) {
    nodes.push({
      id: `${fragmentId}-rest`,
      name: 'Rest of fragment',
      size: remainder,
      kind: 'remainder',
      sideBias: getFragmentSideBias(fragmentId),
    })
  }
  return nodes.sort((a, b) => b.size - a.size)
}

/**
 * Recharts Treemap data for the singular market map (categories → companies).
 * Always nests modeled companies under each content category so one board shows the full landscape.
 * @param {'categories'|'companies'|'creator-viewer'} [_lens] - reserved; board is always nested
 * @param {{ drillFragmentId?: string|null }} [options] - if set, only that category (companies as tiles)
 */
export function getWorldMapNodes(_lens = 'categories', options = {}) {
  const { drillFragmentId = null } = options
  const fragments = getCapturableFragments()

  const companyChildren = (f, baseFill) => {
    const emphasize = _lens === 'companies'
    return getSilhouettePlayers(f.id).map((p, i) => {
      const shade = emphasize ? Math.min(0.18, 0.02 + i * 0.025) : Math.min(0.22, 0.04 + i * 0.03)
      const realPlayer = p.kind === 'company'
      const size = getFragmentMapSize(f.id)
      return {
        name: p.name,
        shortName: p.name,
        size: p.size,
        fragmentId: f.id,
        playerId: realPlayer ? p.id : null,
        kind: p.kind,
        sideBias: p.sideBias,
        isEstimate: true,
        note: realPlayer
          ? getPlayersForFragment(f.id).find((x) => x.id === p.id)?.revenueNote
          : 'Unmodeled share of category TAM (directional).',
        sizeLabel: size.sizeLabel,
        usersLabel: realPlayer ? PLAYER_USERS_LABEL[p.id] || null : null,
        shareOfFragment: size.midUsd > 0 ? p.size / size.midUsd : null,
        fill: shade > 0 ? lighten(baseFill, shade) : baseFill,
        subtle: p.kind === 'remainder',
        categoryFill: baseFill,
      }
    })
  }

  if (drillFragmentId) {
    const f =
      fragments.find((x) => x.id === drillFragmentId) || getFragmentMeta(drillFragmentId)
    if (!f) return { name: 'World', children: [] }
    const size = getFragmentMapSize(f.id)
    const sideBias = getFragmentSideBias(f.id)
    const baseFill =
      _lens === 'creator-viewer'
        ? SIDE_BIAS_COLORS[sideBias]
        : FRAGMENT_MAP_COLORS[f.id] || '#3d6b4f'
    return {
      name: f.name || 'Category',
      children: companyChildren(f, baseFill),
    }
  }

  return {
    name: 'World',
    children: fragments.map((f) => {
      const size = getFragmentMapSize(f.id)
      const sideBias = getFragmentSideBias(f.id)
      const fill =
        _lens === 'creator-viewer'
          ? SIDE_BIAS_COLORS[sideBias]
          : FRAGMENT_MAP_COLORS[f.id] || '#3d6b4f'
      const children = companyChildren(f, fill)
      return {
        name: getFragmentShortName(f.id),
        shortName: getFragmentShortName(f.id),
        abbrev: getFragmentAbbrev(f.id),
        size: size.midUsd,
        fragmentId: f.id,
        kind: 'fragment',
        sideBias,
        sizeLabel: size.sizeLabel,
        isPlaceholder: size.isPlaceholder,
        marketNote: size.marketNote,
        kahanaAngle: f.kahanaAngle,
        playerCount: getPlayersForFragment(f.id).length,
        keyPlayers: getKeyPlayersForFragment(f.id),
        fill,
        categoryFill: fill,
        children: children.length > 0 ? children : undefined,
      }
    }),
  }
}

/**
 * Province board nodes for a fragment (competitors as tiles).
 * Null-revenue players get a small scout size so they remain clickable for pathway priority.
 */
export function getProvinceNodes(fragmentId) {
  const players = getPlayersForFragment(fragmentId)
  const SCOUT_SIZE = 1e6 // $1M visual floor for no-$ provinces
  return players.map((p) => ({
    name: p.name,
    shortName: p.name,
    size: p.revenueUsd != null ? p.revenueUsd : SCOUT_SIZE,
    playerId: p.id,
    fragmentId,
    kind: p.revenueUsd != null ? 'company' : 'scout',
    attackable: p.revenueUsd != null,
    revenueUsd: p.revenueUsd,
    sideBias: p.sideBias || 'balanced',
    isEstimate: !!p.isEstimate,
    note: p.revenueNote,
    usersLabel: PLAYER_USERS_LABEL[p.id] || null,
    fill: SIDE_BIAS_COLORS[p.sideBias || 'balanced'],
  }))
}

function lighten(hex, amount) {
  const h = hex.replace('#', '')
  const num = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16)
  const r = Math.min(255, ((num >> 16) & 0xff) + Math.round(255 * amount))
  const g = Math.min(255, ((num >> 8) & 0xff) + Math.round(255 * amount))
  const b = Math.min(255, (num & 0xff) + Math.round(255 * amount))
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

/**
 * @param {FragmentPlayer[]} players
 * @param {string[]} selectedIds
 * @param {number} captureRate 0–1
 */
export function computeCaptureScenario(players, selectedIds, captureRate) {
  const selected = players.filter((p) => selectedIds.includes(p.id))
  const withRevenue = selected.filter((p) => p.revenueUsd != null)
  const withoutRevenue = selected.filter((p) => p.revenueUsd == null)
  const poolUsd = withRevenue.reduce((sum, p) => sum + p.revenueUsd, 0)
  const capturedUsd = poolUsd * captureRate
  const perPlayer = withRevenue.map((p) => ({
    id: p.id,
    name: p.name,
    fullUsd: p.revenueUsd,
    capturedUsd: p.revenueUsd * captureRate,
    isEstimate: !!p.isEstimate,
  }))

  return {
    selectedCount: selected.length,
    modeledCount: withRevenue.length,
    skippedNoRevenue: withoutRevenue,
    poolUsd,
    captureRate,
    capturedUsd,
    perPlayer: perPlayer.sort((a, b) => b.capturedUsd - a.capturedUsd),
  }
}

export function formatUsdCompact(n) {
  if (n == null || Number.isNaN(n)) return '—'
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${Math.round(n)}`
}

/** All fragment options that have player rows. */
export function getCapturableFragments() {
  return CONTENT_FRAGMENTS.filter((f) => (FRAGMENT_CAPTURE_PLAYERS[f.id] || []).length > 0)
}
