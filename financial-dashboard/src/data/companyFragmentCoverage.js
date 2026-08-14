/**
 * Explicit Yes/No coverage by Market Map modality — filled category-by-category.
 *
 * Rule: Yes only if a typical person can easily use that modality as a
 * first-class product job — not because a file or clip might exist if you hunt.
 * Example: Goodreads = Ebook Yes. Discord = Ebook No (some servers share files;
 * that is not an ebook product).
 *
 * Once a fragment id is in REVIEWED_FRAGMENT_IDS, company charts use this list
 * (Yes only if company id is listed). Unreviewed fragments still fall back to
 * Market Map primary/secondary membership.
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
 * How each coverage column is scored.
 * Hover text on Company Landscape charts + Key terms.
 * @type {Record<string, { label: string, definition: string, yesExample: string, noExample: string }>}
 */
export const COVERAGE_COLUMN_DEFINITIONS = {
  'ebook-reading': {
    label: 'Ebook',
    definition:
      'Yes if you can easily get and consume ebooks on the platform (free or paid) as a first-class product — open, buy, borrow, or read without hunting.',
    yesExample: 'Kindle, Goodreads, Wattpad, Project Gutenberg',
    noExample: 'Discord (a server might share a PDF; that is not an ebook product)',
  },
  'short-form-video': {
    label: 'Short-form video',
    definition:
      'Yes if you can easily consume short-form video as a first-class surface (For You, Reels, Shorts).',
    yesExample: 'TikTok, Instagram Reels, YouTube Shorts',
    noExample: 'Twitch clips buried in a live-stream product',
  },
  'long-form-video': {
    label: 'Long-form video',
    definition:
      'Yes if you can easily watch creator / UGC long-form video (or specialty long video) as a core surface. Course lectures belong under Courses. Hollywood catalogs belong under Series/Films.',
    yesExample: 'YouTube, Vimeo, Twitch VODs, Nebula',
    noExample: 'Udemy lecture video (that is Courses)',
  },
  'series-films-streaming': {
    label: 'Series/Films',
    definition:
      'Yes if you can easily watch series and films as an SVOD / catalog entertainment product.',
    yesExample: 'Netflix, Disney+, Crunchyroll',
    noExample: 'YouTube (some movies exist; it is not an SVOD catalog)',
  },
  'courses-learning': {
    label: 'Courses',
    definition:
      'Yes if you can easily take or browse structured courses as a first-class product.',
    yesExample: 'Udemy, Coursera, Teachable, Kajabi',
    noExample: 'YouTube tutorials (helpful, not a course catalog)',
  },
  'newsletters-written': {
    label: 'Newsletters',
    definition:
      'Yes if you can easily read or subscribe to newsletters / creator writing as a first-class product.',
    yesExample: 'Substack, beehiiv, Medium, Ghost',
    noExample: 'X posts (not a newsletter product)',
  },
  'audio-listening': {
    label: 'Audio',
    definition:
      'Yes if you can easily listen to music, podcasts, or audiobooks as a first-class product.',
    yesExample: 'Spotify, Amazon Music, Audible, YouTube Music',
    noExample: 'Discord voice chat',
  },
  'creator-monetization': {
    label: 'Memberships',
    definition:
      'Yes if a creator or seller can accept payments from others and make money through the platform — checkout, fan subscriptions, tips, ads, shop, or creator funds. Not only a classic Patreon-style membership product.',
    yesExample: 'YouTube, Instagram, Patreon, Udemy, Gumroad, Shopify',
    noExample: 'Netflix, Goodreads, Slack, Wikipedia (you don’t earn as a typical creator)',
  },
  'messaging-community': {
    label: 'Community & Messaging',
    definition:
      'Yes if groups, chat, or social feeds are a first-class product — where people hang out, not a comments thread on something else.',
    yesExample: 'Discord, Slack, Circle, WhatsApp',
    noExample: 'Udemy Q&A on a lecture',
  },
  'online-storefront': {
    label: 'Storefronts',
    definition:
      'Yes if the product gives a creator a custom storefront or site that can take the place of building their own website (bio page, creator site, branded shop). Not a shop tab on someone else’s multi-seller marketplace.',
    yesExample: 'Linktree, Kajabi, Stan, Beacons, Shopify',
    noExample: 'Udemy instructor page, Etsy shop on Etsy’s marketplace',
  },
  'digital-marketplaces': {
    label: 'Marketplaces',
    definition:
      'Yes if a typical person can search and shop a catalog of offerings from many sellers — courses, books, digital goods, etc. Storefront software (Shopify, WooCommerce) is not a marketplace unless shoppers browse many sellers there.',
    yesExample: 'Udemy (courses), Etsy, Gumroad, Kindle Store, Creative Market',
    noExample: 'Kajabi or Linktree (your site, not a public multi-seller catalog)',
  },
}

export const COVERAGE_EASY_BAR =
  '“Easily” means the modality is an obvious product job — what you open the app to do — not something you could theoretically find if you hunt. Discord can host an ebook file; Goodreads is built so you can find and get books.'

/**
 * Company ids that support each reviewed modality.
 * @type {Record<string, string[]>}
 */
export const FRAGMENT_YES_COMPANY_IDS = {
  'ebook-reading': [
    'amazon-kindle',
    'amazon',
    'apple-books',
    'google-play-books',
    'google-books',
    'kobo',
    'wattpad',
    'goodreads',
    'fable',
    'storygraph',
    'librarything',
    'literal',
    'project-gutenberg',
    'internet-archive',
    'scribd',
    'curios',
    'crunchyroll', // manga reader
    'royal-road',
    'inkitt',
    'tapas',
    'radish',
  ],

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

  'long-form-video': [
    'youtube',
    'vimeo',
    'nebula',
    'curiositystream',
    'twitch',
    'rumble',
  ],

  'series-films-streaming': [
    'netflix',
    'prime-video',
    'amazon',
    'disney',
    'max',
    'hulu',
    'crunchyroll',
    'paramount-plus',
    'peacock',
    'apple-tv',
  ],

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
    'linkedin', // LinkedIn Learning
  ],

  'newsletters-written': [
    'substack',
    'beehiiv',
    'medium',
    'ghost',
    'kit',
    'wordpress',
    'tumblr',
    'linkedin',
  ],

  'audio-listening': [
    'spotify',
    'apple-music',
    'amazon-music',
    'amazon',
    'youtube-music',
    'youtube',
    'youtube-podcasts',
    'audible',
    'apple-podcasts',
    'scribd',
    'deezer',
    'google-play-books',
    'pandora',
    'iheartradio',
    'tiktok-music',
    'curios',
  ],

  'creator-monetization': [
    // Fan payments / patronage
    'patreon',
    'onlyfans',
    'fansly',
    'kofi',
    'memberful',
    'locals',
    'nas-io',
    'circle',
    'skool',
    // Social / video where creators earn (ads, subs, tips, shop)
    'youtube',
    'youtube-shorts',
    'youtube-podcasts',
    'youtube-music',
    'instagram',
    'tiktok',
    'facebook-reels',
    'snapchat',
    'twitch',
    'triller',
    'likee',
    'x',
    'facebook-groups',
    'telegram',
    'discord',
    'pinterest',
    'wechat',
    'vimeo',
    'nebula',
    // Course / site builders with checkout
    'udemy',
    'coursera',
    'edx',
    'domestika',
    'kajabi',
    'teachable',
    'thinkific',
    'podia',
    'learnworlds',
    'kartra',
    'zenler',
    'mighty-networks',
    'ghost',
    'substack',
    'medium',
    'beehiiv',
    'kit',
    'wordpress',
    // Commerce / storefronts / marketplaces
    'gumroad',
    'etsy',
    'shopify',
    'woocommerce',
    'creative-market',
    'stan',
    'beacons',
    'pensight',
    'hypage',
    'linktree',
    'curios',
    'amazon-kindle',
    'apple-books',
    'kobo',
    'google-play-books',
    'wattpad',
    'scribd',
    'audible',
    'spotify',
    'apple-music',
    'amazon-music',
  ],

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
    'snapchat',
    'bookclubs',
    'literal',
    'fable',
  ],

  'online-storefront': [
    'linktree',
    'beacons',
    'stan',
    'pensight',
    'hypage',
    'podia',
    'kajabi',
    'teachable',
    'thinkific',
    'learnworlds',
    'kartra',
    'zenler',
    'curios',
    'kit',
    'kofi',
    'nas-io',
    'shopify',
    'woocommerce',
    'mighty-networks',
    'gumroad',
    'wordpress',
  ],

  'digital-marketplaces': [
    'udemy',
    'coursera',
    'edx',
    'domestika',
    'masterclass',
    'gumroad',
    'etsy',
    'creative-market',
    'amazon',
    'amazon-kindle',
    'apple-books',
    'kobo',
    'google-play-books',
    'audible',
    'curios',
    'pinterest',
    'wechat',
    'substack',
    'medium',
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

export function getCoverageColumnDefinition(fragmentId) {
  return COVERAGE_COLUMN_DEFINITIONS[fragmentId] ?? null
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
