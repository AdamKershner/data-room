/**
 * Company Landscape enrichment — size tier, role tags, category remaps, and
 * companies to pull into the landscape (from Market Map fragments + extras).
 * Keeps Market Map fragment ids; merges cleanly in kahanaCompanyDatabase.getCompanies().
 */

/** @typedef {'incumbent' | 'challenger' | 'niche'} SizeTier */

export const SIZE_TIER_LABELS = {
  incumbent: 'Incumbent',
  challenger: 'Challenger',
  niche: 'Niche / Emerging',
}

/** @typedef {keyof typeof ROLE_TAG_LABELS} RoleTag */

export const ROLE_TAG_LABELS = {
  'content-platform': 'Content Platform',
  'community-messaging': 'Community / Messaging',
  'membership-fan': 'Membership / Fan Support',
  'storefront-commerce': 'Storefront / Commerce',
  'course-learning': 'Course / Learning',
  marketplace: 'Marketplace',
  audio: 'Audio',
  streaming: 'Streaming (Series/Films)',
  'newsletter-writing': 'Newsletter / Writing',
  'knowledge-reference': 'Knowledge / Reference',
  ebook: 'Ebook / Reading',
  'short-form': 'Short-Form Video',
  'long-form': 'Long-Form Video',
}

/**
 * Force primary/secondary Market Map categories (extends MARKET_CATEGORY_OVERRIDES).
 * Remaps unmapped entries and dual-role platforms per landscape review.
 */
export const LANDSCAPE_CATEGORY_OVERRIDES = {
  // Remap former “unmapped”
  fansly: { primaryFragmentId: 'creator-monetization' },
  kofi: {
    primaryFragmentId: 'creator-monetization',
    secondaryFragmentIds: ['online-storefront'],
  },
  wikipedia: { primaryFragmentId: null, secondaryFragmentIds: [] }, // knowledge / reference (no Market Map fragment)
  curios: { primaryFragmentId: null, secondaryFragmentIds: [] },

  // Dual-role clarity
  skool: {
    primaryFragmentId: 'courses-learning',
    secondaryFragmentIds: ['messaging-community'],
  },
  podia: {
    primaryFragmentId: 'courses-learning',
    secondaryFragmentIds: ['online-storefront'],
  },
  youtube: {
    primaryFragmentId: 'long-form-video',
    secondaryFragmentIds: ['short-form-video', 'audio-listening'],
  },
  'youtube-shorts': { primaryFragmentId: 'short-form-video' },
  'amazon-kindle': { primaryFragmentId: 'ebook-reading' },
  amazon: {
    primaryFragmentId: 'ebook-reading',
    secondaryFragmentIds: ['audio-listening', 'series-films-streaming', 'digital-marketplaces'],
  },
  'google-books': { primaryFragmentId: 'ebook-reading' },
  'project-gutenberg': { primaryFragmentId: 'ebook-reading' },
  'internet-archive': { primaryFragmentId: 'ebook-reading' },
  shopify: {
    primaryFragmentId: 'digital-marketplaces',
    secondaryFragmentIds: ['online-storefront'],
  },
  heartbeat: { primaryFragmentId: 'messaging-community' },
  'higher-logic': { primaryFragmentId: 'messaging-community' },
  learnworlds: { primaryFragmentId: 'courses-learning' },
  kartra: { primaryFragmentId: 'courses-learning' },
  zenler: { primaryFragmentId: 'courses-learning' },
  woocommerce: { primaryFragmentId: 'digital-marketplaces' },
  'creative-market': { primaryFragmentId: 'digital-marketplaces' },
  locals: {
    primaryFragmentId: 'creator-monetization',
    secondaryFragmentIds: ['messaging-community'],
  },
  kit: {
    primaryFragmentId: 'newsletters-written',
    secondaryFragmentIds: ['online-storefront'],
  },
  'facebook-reels': { primaryFragmentId: 'short-form-video' },
}

/**
 * Fragment / landscape ids that should appear as Company Landscape cards
 * even if they are not already in PLATFORM_POOLS / competitors / virtual party.
 * Names pulled from Market Map when present; extras fill gaps.
 */
export const LANDSCAPE_INCLUDE_IDS = [
  // Audio
  'apple-music',
  'amazon-music',
  'youtube-music',
  'scribd',
  // Community
  'heartbeat',
  'higher-logic',
  // Courses
  'edx',
  'domestika',
  'learnworlds',
  'kartra',
  'zenler',
  // Ebook
  'amazon-kindle',
  'apple-books',
  'kobo',
  'google-play-books',
  'google-books',
  'project-gutenberg',
  'internet-archive',
  // Long-form
  'twitch',
  'vimeo',
  'nebula',
  'curiositystream',
  // Marketplaces
  'woocommerce',
  'creative-market',
  // Memberships
  'memberful',
  'locals',
  // Newsletters
  'ghost',
  'kit',
  'wordpress',
  // Series / films
  'apple-tv',
  'paramount-plus',
  'peacock',
  'crunchyroll',
  // Short-form
  'youtube-shorts',
  'facebook-reels',
  'snapchat',
  'triller',
  'likee',
]

/**
 * Seed records when a company is not already in pools/competitors/fragments.
 * @type {Array<{
 *   id: string,
 *   name: string,
 *   website?: string,
 *   description: string,
 *   primaryFragmentId?: string | null,
 *   secondaryFragmentIds?: string[],
 * }>}
 */
export const LANDSCAPE_EXTRA_COMPANIES = [
  {
    id: 'heartbeat',
    name: 'Heartbeat',
    website: 'https://www.heartbeat.chat',
    description:
      'Community platform for cohort-based and branded online communities — chat, events, and memberships.',
    primaryFragmentId: 'messaging-community',
  },
  {
    id: 'higher-logic',
    name: 'Higher Logic',
    website: 'https://www.higherlogic.com',
    description:
      'Enterprise community platforms (including Vanilla) for associations, brands, and large organizations.',
    primaryFragmentId: 'messaging-community',
  },
  {
    id: 'learnworlds',
    name: 'LearnWorlds',
    website: 'https://www.learnworlds.com',
    description: 'Creator-focused course platform with interactive video, sites, and selling tools.',
    primaryFragmentId: 'courses-learning',
  },
  {
    id: 'kartra',
    name: 'Kartra',
    website: 'https://kartra.com',
    description: 'All-in-one marketing + course and membership suite for online creators and coaches.',
    primaryFragmentId: 'courses-learning',
  },
  {
    id: 'zenler',
    name: 'Zenler',
    website: 'https://www.newzenler.com',
    description: 'Course creation and live-class platform aimed at coaches and online educators.',
    primaryFragmentId: 'courses-learning',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    website: 'https://woocommerce.com',
    description: 'WordPress ecommerce plugin — open storefronts including digital products.',
    primaryFragmentId: 'digital-marketplaces',
  },
  {
    id: 'creative-market',
    name: 'Creative Market',
    website: 'https://creativemarket.com',
    description: 'Marketplace for design assets, fonts, templates, and creative digital goods.',
    primaryFragmentId: 'digital-marketplaces',
  },
  {
    id: 'locals',
    name: 'Locals',
    website: 'https://locals.com',
    description: 'Creator memberships with community features — subscriptions and exclusive content.',
    primaryFragmentId: 'creator-monetization',
    secondaryFragmentIds: ['messaging-community'],
  },
  {
    id: 'kit',
    name: 'Kit (ConvertKit)',
    website: 'https://kit.com',
    description: 'Email, newsletter, and creator commerce platform (formerly ConvertKit).',
    primaryFragmentId: 'newsletters-written',
    secondaryFragmentIds: ['online-storefront'],
  },
  {
    id: 'facebook-reels',
    name: 'Facebook Reels',
    website: 'https://www.facebook.com/reels',
    description: 'Meta short-form video on Facebook — Reels discovery and creator monetization.',
    primaryFragmentId: 'short-form-video',
  },
  {
    id: 'curiositystream',
    name: 'CuriosityStream',
    website: 'https://curiositystream.com',
    description: 'Factual and documentary streaming service for nonfiction long-form video.',
    primaryFragmentId: 'long-form-video',
  },
  {
    id: 'paramount-plus',
    name: 'Paramount+',
    website: 'https://www.paramountplus.com',
    description: 'SVOD streaming from Paramount — series, films, sports, and live TV bundles.',
    primaryFragmentId: 'series-films-streaming',
  },
  {
    id: 'apple-tv',
    name: 'Apple TV+',
    website: 'https://tv.apple.com',
    description: 'Apple’s SVOD service for original series and films.',
    primaryFragmentId: 'series-films-streaming',
  },
  {
    id: 'google-books',
    name: 'Google Books',
    website: 'https://books.google.com',
    description:
      'Full-text search and preview index of millions of books — public-domain full view, publisher previews, and buy/borrow links.',
    primaryFragmentId: 'ebook-reading',
  },
  {
    id: 'project-gutenberg',
    name: 'Project Gutenberg',
    website: 'https://www.gutenberg.org',
    description:
      'Volunteer-run library of 75,000+ free public-domain ebooks (EPUB, Kindle, HTML, text) since 1971.',
    primaryFragmentId: 'ebook-reading',
  },
  {
    id: 'internet-archive',
    name: 'Internet Archive / Open Library',
    website: 'https://archive.org',
    description:
      'Nonprofit digital library with Open Library ebook lending — public-domain downloads and controlled digital lending of scanned books.',
    primaryFragmentId: 'ebook-reading',
  },
]

/** @type {Record<string, SizeTier>} */
export const COMPANY_SIZE_TIER = {
  // Audio
  spotify: 'incumbent',
  audible: 'incumbent',
  'apple-music': 'incumbent',
  'amazon-music': 'incumbent',
  'youtube-music': 'incumbent',
  scribd: 'challenger',

  // Community
  discord: 'incumbent',
  whatsapp: 'incumbent',
  telegram: 'incumbent',
  slack: 'incumbent',
  'facebook-groups': 'incumbent',
  circle: 'challenger',
  'mighty-networks': 'challenger',
  disciple: 'niche',
  bettermode: 'niche',
  guild: 'niche',
  hivebrite: 'niche',
  groupme: 'niche',
  signal: 'niche',
  heartbeat: 'challenger',
  'higher-logic': 'challenger',

  // Courses
  coursera: 'incumbent',
  udemy: 'incumbent',
  teachable: 'challenger',
  thinkific: 'challenger',
  kajabi: 'challenger',
  skool: 'challenger',
  edx: 'challenger',
  domestika: 'challenger',
  podia: 'challenger',
  learnworlds: 'niche',
  kartra: 'niche',
  zenler: 'niche',

  // Ebook
  'amazon-kindle': 'incumbent',
  amazon: 'incumbent',
  'apple-books': 'incumbent',
  'google-play-books': 'challenger',
  kobo: 'incumbent',
  goodreads: 'incumbent',
  wattpad: 'challenger',
  fable: 'challenger',
  'google-books': 'incumbent',
  'project-gutenberg': 'incumbent',
  'internet-archive': 'incumbent',

  // Long-form
  youtube: 'incumbent',
  twitch: 'incumbent',
  vimeo: 'challenger',
  nebula: 'niche',
  curiositystream: 'niche',

  // Marketplaces
  etsy: 'incumbent',
  shopify: 'incumbent',
  gumroad: 'challenger',
  woocommerce: 'challenger',
  'creative-market': 'niche',

  // Memberships
  patreon: 'incumbent',
  onlyfans: 'incumbent',
  fansly: 'niche',
  kofi: 'challenger',
  memberful: 'challenger',
  locals: 'challenger',

  // Newsletters
  substack: 'incumbent',
  medium: 'incumbent',
  beehiiv: 'challenger',
  ghost: 'challenger',
  kit: 'challenger',
  wordpress: 'incumbent',

  // Series / films
  netflix: 'incumbent',
  'prime-video': 'incumbent',
  disney: 'incumbent',
  max: 'incumbent',
  hulu: 'incumbent',
  'apple-tv': 'challenger',
  'paramount-plus': 'challenger',
  peacock: 'challenger',
  crunchyroll: 'challenger',

  // Short-form
  tiktok: 'incumbent',
  instagram: 'incumbent',
  'youtube-shorts': 'incumbent',
  'facebook-reels': 'challenger',
  snapchat: 'challenger',
  triller: 'niche',
  likee: 'niche',

  // Storefronts
  linktree: 'incumbent',
  stan: 'challenger',
  beacons: 'challenger',
  pensight: 'niche',
  hypage: 'niche',

  // Special / knowledge
  wikipedia: 'incumbent',
  curios: 'niche',
}

/** @type {Record<string, RoleTag>} */
export const COMPANY_ROLE_TAG = {
  spotify: 'audio',
  audible: 'audio',
  'apple-music': 'audio',
  'amazon-music': 'audio',
  'youtube-music': 'audio',
  scribd: 'audio',

  discord: 'community-messaging',
  whatsapp: 'community-messaging',
  telegram: 'community-messaging',
  slack: 'community-messaging',
  'facebook-groups': 'community-messaging',
  circle: 'community-messaging',
  'mighty-networks': 'community-messaging',
  disciple: 'community-messaging',
  bettermode: 'community-messaging',
  guild: 'community-messaging',
  hivebrite: 'community-messaging',
  groupme: 'community-messaging',
  signal: 'community-messaging',
  heartbeat: 'community-messaging',
  'higher-logic': 'community-messaging',

  coursera: 'course-learning',
  udemy: 'course-learning',
  teachable: 'course-learning',
  thinkific: 'course-learning',
  kajabi: 'course-learning',
  skool: 'course-learning',
  edx: 'course-learning',
  domestika: 'course-learning',
  podia: 'course-learning',
  learnworlds: 'course-learning',
  kartra: 'course-learning',
  zenler: 'course-learning',

  'amazon-kindle': 'ebook',
  amazon: 'ebook',
  'apple-books': 'ebook',
  'google-play-books': 'ebook',
  kobo: 'ebook',
  goodreads: 'ebook',
  wattpad: 'ebook',
  fable: 'ebook',
  'google-books': 'ebook',
  'project-gutenberg': 'ebook',
  'internet-archive': 'ebook',

  youtube: 'long-form',
  twitch: 'long-form',
  vimeo: 'long-form',
  nebula: 'long-form',
  curiositystream: 'long-form',

  etsy: 'marketplace',
  shopify: 'marketplace',
  gumroad: 'marketplace',
  woocommerce: 'marketplace',
  'creative-market': 'marketplace',

  patreon: 'membership-fan',
  onlyfans: 'membership-fan',
  fansly: 'membership-fan',
  kofi: 'membership-fan',
  memberful: 'membership-fan',
  locals: 'membership-fan',

  substack: 'newsletter-writing',
  medium: 'newsletter-writing',
  beehiiv: 'newsletter-writing',
  ghost: 'newsletter-writing',
  kit: 'newsletter-writing',
  wordpress: 'newsletter-writing',

  netflix: 'streaming',
  'prime-video': 'streaming',
  disney: 'streaming',
  max: 'streaming',
  hulu: 'streaming',
  'apple-tv': 'streaming',
  'paramount-plus': 'streaming',
  peacock: 'streaming',
  crunchyroll: 'streaming',

  tiktok: 'short-form',
  instagram: 'short-form',
  'youtube-shorts': 'short-form',
  'facebook-reels': 'short-form',
  snapchat: 'short-form',
  triller: 'short-form',
  likee: 'short-form',

  linktree: 'storefront-commerce',
  stan: 'storefront-commerce',
  beacons: 'storefront-commerce',
  pensight: 'storefront-commerce',
  hypage: 'storefront-commerce',

  wikipedia: 'knowledge-reference',
  curios: 'content-platform',
}

export function getSizeTier(companyId) {
  return COMPANY_SIZE_TIER[companyId] ?? null
}

export function getRoleTag(companyId) {
  return COMPANY_ROLE_TAG[companyId] ?? null
}
