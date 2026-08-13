/**
 * How creators actually operate — maps to Market Map categories + Kahana position.
 * Content modalities (ebook, video, etc.) sit under Content & Audience on the map.
 *
 * Platform name: Kahana (AKA "The Aura Library"). “Aura” alone = discovery signal.
 */

export const KAHANA_CREATOR_STACK_POSITION =
  'Kahana (AKA "The Aura Library") is a club + library platform that sits between content and community, and ties into monetization. Creators publish on Instagram / TikTok / YouTube (and peers), then bring their audience into Kahana to join book / video / course clubs, access curated hubs (ebooks, videos, audio, newsletters), and participate in structured learning and discussion. Aura surfaces the best content across modalities based on what people genuinely endorse.'

/**
 * @typedef {object} CreatorStackLayer
 * @property {string} id
 * @property {string} name
 * @property {string} purpose
 * @property {string} examples
 * @property {string} kahanaRelation
 * @property {string[]} fragmentIds - Market Map fragment ids (empty = not on pie)
 * @property {boolean} [onMap]
 */

/** @type {CreatorStackLayer[]} */
export const CREATOR_STACK_LAYERS = [
  {
    id: 'content-audience',
    name: 'Content & Audience',
    purpose: 'Front-of-house — where content lives and audience is built (discovery & attention).',
    examples:
      'Instagram, TikTok, YouTube, Twitch, Snapchat · Wattpad, Substack, Beehiiv, Medium · Spotify, Apple Podcasts, Audible',
    kahanaRelation:
      'Sits alongside as the deep room where clubs and libraries live — not primarily a business-tool layer.',
    fragmentIds: [
      'ebook-reading',
      'short-form-video',
      'long-form-video',
      'series-films-streaming',
      'courses-learning',
      'newsletters-written',
      'audio-listening',
    ],
    onMap: true,
  },
  {
    id: 'community-messaging',
    name: 'Community & Messaging',
    purpose: 'Where creators host communities and run ongoing engagement — “where the group hangs out.”',
    examples:
      'Discord, Telegram, WhatsApp, Signal, Slack, Facebook Groups · Circle, Mighty Networks, Guild, Hivebrite, Disciple, Bettermode',
    kahanaRelation:
      'Community focused on learning clubs and libraries, not general chat — integrate with Discord / Telegram / Slack for notifications and lightweight conversation.',
    fragmentIds: ['messaging-community'],
    onMap: true,
  },
  {
    id: 'monetization-membership',
    name: 'Monetization — Memberships',
    purpose: 'Paywall and ongoing fan support — access, tiers, tips.',
    examples: 'Patreon, OnlyFans, Ko-fi, Buy Me a Coffee, Memberful',
    kahanaRelation:
      'Can be the membership destination (clubs / hubs / libraries) or unlock via Patreon / OnlyFans tiers.',
    fragmentIds: ['creator-monetization'],
    onMap: true,
  },
  {
    id: 'monetization-storefront',
    name: 'Monetization — Storefronts',
    purpose: 'Creator-owned link-in-bio and personal digital storefronts — not multi-seller marketplaces.',
    examples: 'Stan.store, Beacons, Pensight, Linktree, HYpage, Podia',
    kahanaRelation:
      'Put it behind the bio — sell club + library access as the destination product.',
    fragmentIds: ['online-storefront'],
    onMap: true,
  },
  {
    id: 'monetization-marketplaces',
    name: 'Monetization — Marketplaces',
    purpose: 'Multi-seller marketplaces where buyers browse and find products to buy.',
    examples: 'Gumroad, Etsy, Shopify',
    kahanaRelation:
      'Checkout and discovery stay on the marketplace; Kahana is the club + library layer after (or linked from) purchase — not the checkout itself.',
    fragmentIds: ['digital-marketplaces'],
    onMap: true,
  },
  {
    id: 'ops-analytics',
    name: 'Ops & Analytics',
    purpose: 'Back office — content planning, scheduling, analytics, sponsorships, community CRM.',
    examples:
      'Later, Hootsuite, Notion, Airtable · Stir, Passionfroot · WhatsApp / Telegram CRM (WATI, Respond.io, CRMChat)',
    kahanaRelation: 'Does not compete here — integrate or lean on these for data and outreach.',
    fragmentIds: [],
    onMap: false,
  },
]
