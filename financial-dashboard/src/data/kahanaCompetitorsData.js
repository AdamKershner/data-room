/** Aura Library competitive landscape — creator economy and discovery market map. */

export const COMPETITORS_PAGE_PATH = '/company-landscape'

export const COMPETITORS_PAGE = {
  title: 'Aura Library Competitive Landscape',
  subtitle:
    'Market map for Aura Library as the Amazon of digital knowledge — Wan Shi Tong\'s library for people. Compare discovery, storefront, knowledge depth, and trust.',
}

export const CUSTOMER_STACK_REPLACED =
  'Gumroad or Stan (sales) + Notion/Drive (delivery) + Linktree (bio links) + social for audience → one Aura Library platform.'

export const THESIS_LEGEND = [
  {
    id: 'discovery',
    label: 'Discovery',
    description: 'Public marketplace browse vs link-in-bio / owned audience only',
  },
  {
    id: 'storefront',
    label: 'Storefront',
    description: 'Branded hub + checkout vs external checkout or platform-native only',
  },
  {
    id: 'knowledgeDepth',
    label: 'Knowledge depth',
    description: 'Multi-format curated libraries (PDF, video, files, text) vs single-format',
  },
  {
    id: 'trust',
    label: 'Trust',
    description: 'Verified experts and commerce trust signals vs anonymous or low-trust UGC',
  },
]

/** @typedef {'strong' | 'partial' | 'weak' | 'n/a'} ThesisLevel */

export const COMPETITOR_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'marketplace', label: 'Digital product marketplaces' },
  { id: 'membership', label: 'Membership / patronage' },
  { id: 'courses', label: 'Course and knowledge platforms' },
  { id: 'publishing', label: 'Publishing and newsletters' },
  { id: 'link-in-bio', label: 'Online Storefront / link-in-bio' },
  { id: 'social-native', label: 'Social platform monetization' },
  { id: 'all-in-one', label: 'All-in-one creator platforms' },
  { id: 'community', label: 'Messaging / community' },
  { id: 'inspiration', label: 'Discovery inspiration' },
]

export const KAHANA_REFERENCE = {
  id: 'kahana',
  name: 'Aura Library',
  category: 'kahana',
  description:
    'Marketplace and storefront for curated digital knowledge — library discovery, monetized hubs, Stripe Connect, multi-format resource libraries at kahana.io.',
  website: 'https://kahana.io',
  websiteLabel: 'kahana.io/library',
  thesis: {
    discovery: 'strong',
    storefront: 'strong',
    knowledgeDepth: 'strong',
    trust: 'strong',
  },
  kahanaAngle: 'Wan Shi Tong library vision — trusted, browsable curated knowledge from verified experts',
  stackRole: 'sales + delivery + discovery + bio links',
  isKahana: true,
}

export const KAHANA_COMPETITORS = [
  {
    id: 'gumroad',
    name: 'Gumroad',
    category: 'marketplace',
    description:
      'Lightweight ecommerce for digital products (ebooks, templates, courses, software, music) — checkout, file delivery, basic email, and analytics.',
    website: 'https://gumroad.com',
    thesis: { discovery: 'weak', storefront: 'strong', knowledgeDepth: 'partial', trust: 'partial' },
    kahanaAngle: 'Aura Library adds Explore discovery, hub as product container, and collaboration',
    stackRole: 'sales + delivery',
  },
  {
    id: 'etsy',
    name: 'Etsy',
    category: 'marketplace',
    description:
      'Global marketplace for handmade and craft items; also supports digital downloads (templates, art, patterns).',
    website: 'https://www.etsy.com',
    thesis: { discovery: 'strong', storefront: 'partial', knowledgeDepth: 'weak', trust: 'partial' },
    kahanaAngle: 'Aura Library is knowledge-first with richer hub containers, not craft/physical-first',
    stackRole: 'marketplace sales',
  },
  {
    id: 'stan-store',
    name: 'Stan Store',
    category: 'marketplace',
    description:
      'Link-in-bio storefront for digital products, courses, subscriptions, and coaching from social profiles; built-in email, low transaction fees.',
    website: 'https://stan.store',
    thesis: { discovery: 'weak', storefront: 'strong', knowledgeDepth: 'partial', trust: 'partial' },
    kahanaAngle: 'Aura Library adds marketplace browse, richer hub content, and category taxonomy',
    stackRole: 'sales + link-in-bio',
  },
  {
    id: 'patreon',
    name: 'Patreon',
    category: 'membership',
    description:
      'Membership platform where fans pay recurring subscriptions for exclusive content, community, and creator perks.',
    website: 'https://www.patreon.com',
    thesis: { discovery: 'weak', storefront: 'partial', knowledgeDepth: 'partial', trust: 'partial' },
    kahanaAngle: 'Aura Library sells curated product libraries, not just ongoing membership feeds',
    stackRole: 'membership monetization',
  },
  {
    id: 'onlyfans',
    name: 'OnlyFans',
    category: 'membership',
    description:
      'Paywalled content platform with subscriptions, tips, pay-per-view posts, and paid messaging — popular with adult creators.',
    website: 'https://onlyfans.com',
    thesis: { discovery: 'weak', storefront: 'partial', knowledgeDepth: 'partial', trust: 'weak' },
    kahanaAngle: 'Different ICP — Aura Library targets curated expert knowledge, not fan-media paywalls',
    stackRole: 'subscription content',
  },
  {
    id: 'fansly',
    name: 'Fansly',
    category: 'membership',
    description:
      'Adult-friendly subscription platform — locked content via subscriptions, tips, and pay-per-view.',
    website: 'https://fansly.com',
    thesis: { discovery: 'weak', storefront: 'partial', knowledgeDepth: 'partial', trust: 'weak' },
    kahanaAngle: 'Same segment as OnlyFans; not Aura Library\'s primary market',
    stackRole: 'subscription content',
  },
  {
    id: 'udemy',
    name: 'Udemy',
    category: 'courses',
    description:
      'Massive course marketplace — video-based courses in modules; students buy individual courses on demand.',
    website: 'https://www.udemy.com',
    thesis: { discovery: 'strong', storefront: 'partial', knowledgeDepth: 'weak', trust: 'partial' },
    kahanaAngle: 'Aura Library supports multi-format hubs beyond video courses; creator-owned storefronts',
    stackRole: 'course marketplace',
  },
  {
    id: 'coursera',
    name: 'Coursera',
    category: 'courses',
    description:
      'University-backed online learning — professional certificates and degrees with structured curricula and cohorts.',
    website: 'https://www.coursera.org',
    thesis: { discovery: 'strong', storefront: 'weak', knowledgeDepth: 'weak', trust: 'strong' },
    kahanaAngle: 'Formal MOOCs vs indie creator hubs — Aura Library is lighter and creator-led',
    stackRole: 'formal education',
  },
  {
    id: 'teachable',
    name: 'Teachable',
    category: 'courses',
    description:
      'Build and sell online courses and coaching under your own brand — hosting, checkout, and course delivery.',
    website: 'https://teachable.com',
    thesis: { discovery: 'weak', storefront: 'strong', knowledgeDepth: 'weak', trust: 'partial' },
    kahanaAngle: 'Aura Library is hub-centric for curated resource bundles, not full course-builder depth',
    stackRole: 'course hosting + sales',
  },
  {
    id: 'kajabi',
    name: 'Kajabi',
    category: 'all-in-one',
    description:
      'All-in-one platform — courses, coaching, memberships, website builder, funnels, and email marketing.',
    website: 'https://kajabi.com',
    thesis: { discovery: 'weak', storefront: 'strong', knowledgeDepth: 'partial', trust: 'partial' },
    kahanaAngle: 'Aura Library is lighter-weight, discovery-first, and hub-centric vs full business-in-a-box',
    stackRole: 'full creator stack',
  },
  {
    id: 'podia',
    name: 'Podia',
    category: 'all-in-one',
    description:
      'Sell courses, downloads, and memberships with community areas on a unified creator site — storefront, not discovery marketplace.',
    website: 'https://www.podia.com',
    thesis: { discovery: 'weak', storefront: 'strong', knowledgeDepth: 'partial', trust: 'partial' },
    kahanaAngle: 'Aura Library adds public Explore discovery and marketplace browse',
    stackRole: 'creator storefront',
  },
  {
    id: 'substack',
    name: 'Substack',
    category: 'publishing',
    description:
      'Subscription publishing for newsletters (and sometimes podcasts/video) — payments, analytics, subscriber community.',
    website: 'https://substack.com',
    thesis: { discovery: 'partial', storefront: 'partial', knowledgeDepth: 'weak', trust: 'partial' },
    kahanaAngle: 'Aura Library supports multi-format hubs and marketplace discovery beyond email-first writing',
    stackRole: 'newsletter + community',
  },
  {
    id: 'beehiiv',
    name: 'Beehiiv',
    category: 'publishing',
    description:
      'Newsletter and audience-building platform with paid subscriptions and sponsorship monetization.',
    website: 'https://www.beehiiv.com',
    thesis: { discovery: 'weak', storefront: 'weak', knowledgeDepth: 'weak', trust: 'partial' },
    kahanaAngle: 'Email-first infrastructure vs Aura Library\'s artifact library and Explore',
    stackRole: 'newsletter infrastructure',
  },
  {
    id: 'medium',
    name: 'Medium',
    category: 'publishing',
    description:
      'Writing platform in a reading subscription ecosystem — authors earn from engagement, not direct product sales.',
    website: 'https://medium.com',
    thesis: { discovery: 'strong', storefront: 'weak', knowledgeDepth: 'weak', trust: 'partial' },
    kahanaAngle: 'Reading-time model vs Aura Library\'s commerce-first curated product hubs',
    stackRole: 'writing + discovery',
  },
  {
    id: 'linktree',
    name: 'Linktree',
    category: 'link-in-bio',
    description:
      'Link-in-bio hub aggregating URLs; basic monetization blocks but primarily navigational for creator presence.',
    website: 'https://linktr.ee',
    thesis: { discovery: 'weak', storefront: 'weak', knowledgeDepth: 'n/a', trust: 'weak' },
    kahanaAngle: 'Aura Library profiles + hubs replace link-in-bio with real storefront and discovery',
    stackRole: 'bio links',
  },
  {
    id: 'kofi',
    name: 'Ko-fi / Buy Me a Coffee',
    category: 'link-in-bio',
    description:
      'Tip-jar and lightweight membership — one-off or recurring support, sometimes unlocking posts or downloads.',
    website: 'https://ko-fi.com',
    thesis: { discovery: 'weak', storefront: 'weak', knowledgeDepth: 'weak', trust: 'partial' },
    kahanaAngle: 'Tips vs Aura Library\'s full hub commerce and marketplace discovery',
    stackRole: 'tips + light membership',
  },
  {
    id: 'youtube',
    name: 'YouTube Premium / Memberships',
    category: 'social-native',
    description:
      'Ad-free Premium subscriptions and channel memberships for exclusive videos, badges, and community posts.',
    website: 'https://www.youtube.com',
    thesis: { discovery: 'strong', storefront: 'weak', knowledgeDepth: 'weak', trust: 'partial' },
    kahanaAngle: 'Video-native platform vs Aura Library multi-format curated libraries and owned hubs',
    stackRole: 'video audience + membership',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'social-native',
    description:
      'Social monetization via brand deals, subscriptions, badges, Shops — often links out to Stan, Gumroad, or Etsy.',
    website: 'https://www.instagram.com',
    thesis: { discovery: 'partial', storefront: 'weak', knowledgeDepth: 'weak', trust: 'weak' },
    kahanaAngle: 'Discovery via algorithm feed vs Aura Library\'s curated expert marketplace',
    stackRole: 'audience + outbound links',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'social-native',
    description:
      'Short-form video with live gifting, tips, and product links — paired with Stan or Linktree for selling, not a download marketplace.',
    website: 'https://www.tiktok.com',
    thesis: { discovery: 'partial', storefront: 'weak', knowledgeDepth: 'weak', trust: 'weak' },
    kahanaAngle: 'Attention platform vs Aura Library persistent knowledge libraries',
    stackRole: 'audience + outbound links',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    category: 'community',
    description:
      'Global group messaging — family, friend, and interest groups; Business API for brands. Chat-first, not a content library.',
    website: 'https://www.whatsapp.com',
    thesis: { discovery: 'weak', storefront: 'n/a', knowledgeDepth: 'weak', trust: 'partial' },
    kahanaAngle: 'Groups keep chatting on WhatsApp; Aura Library hosts the library + Clubs those groups discuss',
    stackRole: 'group chat',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    category: 'community',
    description:
      'Channels and large groups for broadcasting and discussion — strong for announcements, weak as a curated multi-format library.',
    website: 'https://telegram.org',
    thesis: { discovery: 'partial', storefront: 'weak', knowledgeDepth: 'weak', trust: 'weak' },
    kahanaAngle: 'Channels stay on Telegram; Aura Library is the club room and shelf for deeper reading/watching',
    stackRole: 'channels + groups',
  },
  {
    id: 'groupme',
    name: 'GroupMe',
    category: 'community',
    description:
      'Lightweight group messaging popular with campuses and friend circles — chat threads, not storefronts or libraries.',
    website: 'https://groupme.com',
    thesis: { discovery: 'weak', storefront: 'n/a', knowledgeDepth: 'n/a', trust: 'partial' },
    kahanaAngle: 'Friend groups spin up clubs on Aura Library while keeping GroupMe for day-to-day chat',
    stackRole: 'friend / campus groups',
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'community',
    description:
      'Workplace and community workspaces — channels for ops and discussion, not a public knowledge marketplace.',
    website: 'https://slack.com',
    thesis: { discovery: 'weak', storefront: 'n/a', knowledgeDepth: 'partial', trust: 'partial' },
    kahanaAngle: 'Teams keep Slack; Aura Library for learning clubs and shared library materials',
    stackRole: 'workspace chat',
  },
  {
    id: 'wikipedia',
    name: 'Wikipedia',
    category: 'inspiration',
    description:
      'Anonymous, text-and-links encyclopedia where curious people wander and learn — discovery inspiration, not a commerce competitor.',
    website: 'https://www.wikipedia.org',
    thesis: { discovery: 'strong', storefront: 'n/a', knowledgeDepth: 'weak', trust: 'weak' },
    kahanaAngle: 'Aura Library aspires to Wikipedia-like serendipitous discovery with trusted experts and rich media',
    stackRole: 'discovery inspiration',
  },
]

/** Top competitors for comparison matrix (plus Aura Library). */
export const MATRIX_COMPETITOR_IDS = [
  'kahana',
  'gumroad',
  'stan-store',
  'patreon',
  'udemy',
  'kajabi',
  'substack',
  'linktree',
  'youtube',
  'wikipedia',
  'etsy',
  'teachable',
]

export function getCategoryLabel(categoryId) {
  const cat = COMPETITOR_CATEGORIES.find((c) => c.id === categoryId)
  return cat ? cat.label : categoryId
}

export function getMatrixRows() {
  const all = [KAHANA_REFERENCE, ...KAHANA_COMPETITORS]
  return MATRIX_COMPETITOR_IDS.map((id) => all.find((c) => c.id === id)).filter(Boolean)
}
