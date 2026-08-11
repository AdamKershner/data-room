/**
 * Explicit Yes/No coverage by Market Map modality — filled category-by-category.
 *
 * Once a fragment id is in REVIEWED_FRAGMENT_IDS, company charts use this list
 * (Yes only if company id is listed). Unreviewed fragments still fall back to
 * Market Map primary/secondary membership.
 *
 * All lists are draft v1 for team spot-check later.
 */

/** Fragments that have been draft-reviewed for comparison charts. */
export const REVIEWED_FRAGMENT_IDS = new Set([
  'ebook-reading',
  'short-form-video',
  'long-form-video',
  'series-films-streaming',
  'courses-learning',
  'newsletters-written',
  'audio-listening',
  'creator-monetization',
  'messaging-community',
  'online-storefront',
  'digital-marketplaces',
])

/**
 * Company ids that support each reviewed modality.
 * @type {Record<string, string[]>}
 */
export const FRAGMENT_YES_COMPANY_IDS = {
  /**
   * Ebook / reading — consumer ebook retail, libraries, serialized fiction reading,
   * or book-club reading surfaces (not pure discovery without reading).
   */
  'ebook-reading': [
    'amazon-kindle',
    'amazon', // Kindle / ebook retail within Amazon
    'apple-books',
    'google-play-books',
    'google-books',
    'kobo',
    'wattpad',
    'goodreads',
    'fable',
    'storygraph',
    'bookclubs',
    'librarything',
    'literal',
    'bookbrowse',
    'royal-road',
    'inkitt',
    'tapas',
    'radish',
    'draft2digital',
    'smashwords',
    'ingramspark',
    'publishdrive',
    'project-gutenberg',
    'internet-archive',
    'crunchyroll', // manga
    'etsy', // digital downloads / ebook niche
    'curios',
  ],

  /**
   * Short-form video — vertical / Reels / Shorts as a core product surface.
   */
  'short-form-video': [
    'tiktok',
    'instagram',
    'youtube-shorts',
    'youtube',
    'facebook-reels',
    'snapchat',
    'triller',
    'likee',
    'kwai',
  ],

  /**
   * Long-form video — UGC / creator long-form, live+VOD, specialty long video
   * (not Hollywood SVOD catalog — that is Series/Films).
   */
  'long-form-video': [
    'youtube',
    'vimeo',
    'nebula',
    'curiositystream',
    'twitch',
    'rumble',
  ],

  /**
   * Series / films streaming — SVOD / catalog entertainment streaming.
   */
  'series-films-streaming': [
    'netflix',
    'prime-video',
    'amazon', // Prime Video within Amazon
    'disney',
    'max',
    'hulu',
    'crunchyroll',
    'paramount-plus',
    'peacock',
    'apple-tv',
  ],

  /**
   * Courses / learning — course marketplaces, creator LMS, cohort learning.
   */
  'courses-learning': [
    'udemy',
    'coursera',
    'kajabi',
    'teachable',
    'podia',
    'thinkific',
    'skool',
    'edx',
    'domestika',
    'mighty-networks',
    'disco',
    'maven',
    'masterclass',
    'learnworlds',
    'kartra',
    'zenler',
    'guild-education',
    'circle',
    'nas-io',
  ],

  /**
   * Newsletters / written — creator newsletter / blog publishing stack
   * (not traditional news paywalls unless added later).
   */
  'newsletters-written': [
    'substack',
    'beehiiv',
    'medium',
    'ghost',
    'kit',
    'wordpress',
    'tumblr',
  ],

  /**
   * Audio — music, podcasts, audiobooks as a listening product.
   */
  'audio-listening': [
    'spotify',
    'apple-music',
    'amazon-music',
    'amazon',
    'youtube-music',
    'youtube', // Music / podcasts surface
    'youtube-podcasts',
    'audible',
    'apple-podcasts',
    'scribd',
    'deezer',
    'megaphone',
    'libsyn',
    'simplecast',
    'google-play-books', // audiobook retail slice
    'pandora',
    'iheartradio',
    'tiktok-music',
  ],

  /**
   * Memberships — paid fan memberships / tip+membership as a core product.
   */
  'creator-monetization': [
    'patreon',
    'onlyfans',
    'fansly',
    'kofi',
    'memberful',
    'locals',
    'nas-io',
    'circle',
  ],

  /**
   * Community & messaging — groups, chats, social feeds as the core product.
   */
  'messaging-community': [
    'discord',
    'telegram',
    'whatsapp',
    'signal',
    'slack',
    'facebook-groups',
    'groupme',
    'circle',
    'mighty-networks',
    'guild',
    'hivebrite',
    'disciple',
    'bettermode',
    'heartbeat',
    'higher-logic',
    'nas-io',
    'linkedin',
    'bluesky',
    'x',
    'reddit',
    'pinterest',
    'tumblr',
    'wechat',
    'line',
    'weibo',
    'locals',
    'skool',
    'kajabi',
    'thinkific',
    'snapchat', // messaging + spotlight
    'bookclubs',
    'literal',
  ],

  /**
   * Storefronts — link-in-bio / personal creator storefront / profile shop.
   * Includes platforms whose secondary job is selling from a creator storefront.
   */
  'online-storefront': [
    'linktree',
    'beacons',
    'stan',
    'pensight',
    'hypage',
    'podia',
    'curios',
    'kajabi',
    'teachable',
    'thinkific',
    'kit',
    'kofi',
    'nas-io',
    'shopify', // merchant storefronts
    'pinterest',
    'wechat',
  ],

  /**
   * Marketplaces — multi-seller digital goods / commerce marketplaces.
   */
  'digital-marketplaces': [
    'gumroad',
    'etsy',
    'shopify',
    'woocommerce',
    'creative-market',
    'amazon',
    'pinterest',
    'wechat',
  ],
}

/** Map Market Map / legacy player ids → landscape company ids. */
const COMPANY_ID_ALIASES = {
  'instagram-reels': 'instagram',
  'youtube-long': 'youtube',
  'ko-fi': 'kofi',
  buymeacoffee: 'kofi',
  'disney-plus': 'disney',
  'apple-tv-plus': 'apple-tv',
  'stan-store': 'stan',
  'kit-convertkit': 'kit',
  convertkit: 'kit',
  'paramount+': 'paramount-plus',
  'google-play-audiobooks': 'google-play-books',
  twitter: 'x',
  'twitter-x': 'x',
}

export function normalizeCoverageCompanyId(id) {
  if (!id) return null
  const key = String(id)
  return COMPANY_ID_ALIASES[key] || key
}

/**
 * @param {string} fragmentId
 * @param {string} companyId
 * @returns {'yes' | 'no' | null} null = not reviewed yet (use Market Map fallback)
 */
export function getReviewedFragmentPresence(fragmentId, companyId) {
  if (!REVIEWED_FRAGMENT_IDS.has(fragmentId)) {
    return null
  }
  const normalized = normalizeCoverageCompanyId(companyId)
  const yesIds = FRAGMENT_YES_COMPANY_IDS[fragmentId] || []
  return yesIds.includes(normalized) ? 'yes' : 'no'
}
