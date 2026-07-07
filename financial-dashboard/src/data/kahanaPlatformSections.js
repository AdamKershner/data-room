/** Kahana platform page — synthesized from KAHANA_PLATFORM.md + Phase 2 vision/GTM */

export const KAHANA_PLATFORM_URL = 'https://app.kahana.io'
export const KAHANA_EXPLORE_URL = 'https://app.kahana.io/explore'
export const KAHANA_PLATFORM_MD_PATH = 'KAHANA_PLATFORM.md'
export const COMPETITORS_PAGE_PATH = '/kahana-competitors'
export const NARRATIVE_PAGE_PATH = '/kahana-narrative'

export const STRATEGIC_NARRATIVE_INTRO =
  'Why Kahana exists: AI slop and engagement-bait bury real expertise; creator platforms force knowledge into rigid formats. Kahana hubs are flexible, outcome-oriented libraries — Wan Shi Tong for humans.'

export const KAHANA_PLATFORM_PAGE = {
  title: 'Kahana Platform Overview',
  subtitle:
    'A trusted library for humanity — curated digital knowledge from experts worldwide. Marketplace at app.kahana.io.',
  northStar:
    'Make Kahana a beloved place to discover curated human knowledge — where anyone could spend an eternity exploring.',
  legalEntity: 'Kahana Group Inc.',
}

export const TRACTION_METRICS = [
  { label: 'Registered users', value: '6,500+', detail: 'Growing network effects' },
  { label: 'Growth MRR', value: '~$300/mo', detail: 'Growth tier subscriptions (~$9.99/mo)' },
  { label: 'Take rate', value: '5%', detail: 'GMV spikes when creators monetize hubs' },
  { label: 'Platform', value: 'app.kahana.io', detail: 'Explore at /explore' },
]

export const KAHANA_HIGHLIGHTS = [
  { label: '6,500+ users', detail: 'Registered and growing' },
  { label: 'Explore marketplace', detail: 'Public discovery at /explore' },
  { label: 'Stripe Connect', detail: 'Built-in creator monetization' },
  { label: '5% take rate', detail: 'Platform fee on hub sales' },
]

export const VISION_LIBRARY = {
  title: 'Vision: The Library',
  zeQuote: 'I could spend an eternity in here.',
  zeAttribution: 'Professor Zei, on Wan Shi Tong\'s Library (Avatar: The Last Airbender)',
  paragraphs: [
    'Kahana aspires to be like Wan Shi Tong\'s Library — a vast, mesmerizing repository where seekers lose themselves in curated knowledge. Not a cold transaction machine, but a beloved place to discover digital artifacts from the world\'s best experts, creators, and influencers.',
    'We package expertise into hubs — guides, playbooks, templates, and resource libraries — and make them accessible to anyone on Earth. A healthy layer stays free: quality, useful knowledge for humanity. Paid hubs fund the mission and reward creators who contribute their best work.',
    'Operationally, Kahana is the Amazon of digital products — selection, trust, convenience, and scale. Visionally, we strive to become something more: a trusted library for humanity, especially for women experts and the audiences they serve.',
  ],
  parallels: [
    { wst: 'Vast repository of books, scrolls, artifacts', kahana: 'Explore marketplace + curated hubs across 16 categories' },
    { wst: 'Knowledge Seekers collect and guide visitors', kahana: 'Creator partners + platform discovery and filters' },
    { wst: 'Exchange: contribute knowledge to earn access', kahana: 'Creators publish hubs; buyers discover free and paid content' },
    { wst: 'Mesmerizing depth — spend an eternity exploring', kahana: 'Professor Zei bar: Explore UX that rewards curiosity' },
  ],
  commitments: [
    'Substantial free, quality content — not paywall-everything',
    'Curate for learning and empowerment, not weaponized knowledge',
    'Women experts and women audiences as our first GTM priority',
  ],
}

export const KAHANA_PLATFORM_SECTIONS = [
  { id: 'vision-library', title: 'Vision: The Library' },
  { id: 'strategic-narrative', title: 'Strategic narrative' },
  { id: 'executive-summary', title: 'Executive summary' },
  { id: 'positioning', title: 'Positioning' },
  { id: 'platform-architecture', title: 'Platform architecture' },
  { id: 'explore-marketplace', title: 'Explore marketplace' },
  { id: 'hubs', title: 'Hubs' },
  { id: 'monetization-and-payments', title: 'Monetization and payments' },
  { id: 'plans-and-limits', title: 'Plans and limits' },
  { id: 'trust-and-safety', title: 'Trust and safety' },
  { id: 'revenue-model', title: 'Revenue model' },
  { id: 'growth-strategy', title: 'Growth strategy' },
  { id: 'roadmap-snapshot', title: 'Roadmap snapshot' },
  { id: 'risks', title: 'Risks and mitigations' },
]

export const EXECUTIVE_SUMMARY = {
  paragraphs: [
    'Kahana combines a public marketplace (Explore), creator storefronts (profiles + hubs), built-in commerce (Stripe Connect paywalls), and collaboration tooling under a single brand at app.kahana.io.',
    'Legal entity: Kahana Group Inc. Formerly known as Curio. Oasis Browser is a separate archived product line within the Kahana family.',
  ],
  pillars: [
    { name: 'Catalog density', detail: 'More quality public hubs across marketplace categories' },
    { name: 'Conversion', detail: 'Explore → hub view → purchase with minimal friction' },
    { name: 'Creator earnings', detail: 'Help creators make money so they stay and refer others' },
    { name: 'Platform revenue', detail: 'Scale GMV (5% take rate) and Growth MRR in parallel' },
  ],
  isNot: [
    'Not a generic cloud drive or Dropbox alternative',
    'Not only an internal team wiki (though hubs support collaboration)',
    'Not a full LMS or course platform (though creators can sell course-like content)',
    'Not a social network — discovery is catalog- and creator-led, not feed-led',
    'Not purely transactional — the library vision comes first',
  ],
}

export const AMAZON_PARALLEL = [
  { dimension: 'Selection', amazon: 'Huge catalog, every category', kahana: 'Explore with 16 categories, hub + creator discovery' },
  { dimension: 'Trust', amazon: 'Reviews, returns, known sellers', kahana: 'Creator profiles, clear pricing, moderation, Stripe checkout' },
  { dimension: 'Convenience', amazon: 'One account, fast checkout', kahana: 'Single platform for browse → buy → access; Linktree-style profiles' },
  { dimension: 'Scale', amazon: 'Marketplace economics improve with volume', kahana: 'Stripe Connect take rate + SaaS subscriptions' },
]

export const POSITIONING = {
  creators:
    'For creators who package expertise into digital products, Kahana is a marketplace and storefront that lets them publish curated hubs, get discovered on Explore, and monetize with Stripe — unlike generic file hosts or link-in-bio tools.',
  buyers:
    'For buyers, Kahana is a curated digital marketplace where they find high-signal products in public hubs — unlike scattered PDFs, Notion pages, or one-off Gumroad links with no browse experience.',
}

export const COMPETITIVE_FRAME = [
  { competitor: 'Gumroad', strength: 'Simple digital sales, creator trust', differentiation: 'Kahana adds discovery (Explore), hub as product container, and collaboration' },
  { competitor: 'Stan Store / link-in-bio', strength: 'Mobile-first creator links', differentiation: 'Marketplace browse, richer hub content, category taxonomy' },
  { competitor: 'Patreon', strength: 'Recurring membership and community', differentiation: 'Curated product libraries and marketplace discovery, not feed-only membership' },
  { competitor: 'Substack', strength: 'Newsletter publishing and subscriber community', differentiation: 'Multi-format hubs and Explore browse beyond email-first writing' },
  { competitor: 'Udemy', strength: 'Course marketplace discovery', differentiation: 'Multi-format hubs, creator-owned storefronts, not video-only courses' },
  { competitor: 'Kajabi / Teachable', strength: 'Courses and memberships', differentiation: 'Lighter-weight and hub-centric; better for curated resource bundles' },
  { competitor: 'Notion / Coda', strength: 'Flexible docs and workspaces', differentiation: 'Commerce- and discovery-first; monetization and public marketplace are core' },
]

export const PRODUCT_SURFACES = [
  { surface: 'Home / My hubs', route: '/', purpose: 'Creator dashboard; hub library, recents, create' },
  { surface: 'Explore', route: '/explore', purpose: 'Discover public hubs and creators; search and filters' },
  { surface: 'Hub', route: '/hub/:id', purpose: 'Curated digital product — files, notes, collaboration, paywall' },
  { surface: 'Profile', route: '/profile/:userId', purpose: 'Public creator page — avatar, bio, social links, hub links' },
  { surface: 'Billing', route: '/billing', purpose: 'Free / Growth / Enterprise plan selection' },
  { surface: 'Monetization', route: '/monetization/:workspaceId', purpose: 'Connect Stripe, set hub pricing' },
  { surface: 'Messages', route: '/messages', purpose: 'Direct messages between users' },
  { surface: 'Saved', route: '/saved', purpose: 'Saved hub collections' },
]

export const EXPLORE_FILTERS = [
  'Text search',
  'Category (16 standard categories)',
  'Monetization (free vs monetized)',
  'Price range',
  'Adult content (include / exclude / only)',
  'Custom tags',
  'Sort (including relevance when searching)',
]

export const MARKETPLACE_CATEGORIES = [
  'Beauty & Skincare',
  'Fashion & Style',
  'Health & Wellness',
  'Sports & Fitness',
  'Finance',
  'Business',
  'Lifestyle',
  'Education',
  'Technology',
  'Creative & Design',
  'Marketing',
  'Productivity',
  'Entertainment',
  'Spirituality',
  'Writing & Publishing',
  'Other',
]

export const HUB_CAPABILITIES = [
  'Files — upload and organize digital assets (size limits vary by plan)',
  'Notes — structured text content alongside files',
  'Collaborators — invite others with role-based access; unlimited on Free tier',
  'Monetization — Stripe Connect paywall (one-time or monthly subscription)',
  'Hub settings — title, description, cover, categories/tags, Explore listing',
  'View counts — displayed on marketplace cards and profiles',
]

export const SAAS_PLANS = [
  { feature: 'Price', free: '$0', growth: '$9.99/mo or $99.99/yr', enterprise: 'Custom' },
  { feature: 'Hubs', free: '3', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Uploads per hub', free: 'Up to 10', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Max file size', free: '5 MB', growth: '5 GB', enterprise: 'Flexible' },
  { feature: 'Storage', free: '—', growth: '100 GB', enterprise: 'Flexible' },
  { feature: 'Stripe monetization', free: 'Yes', growth: 'Yes', enterprise: 'Yes' },
  { feature: 'Support', free: '—', growth: 'Live chat', enterprise: '24/7 white-glove' },
]

export const REVENUE_STREAMS = [
  { stream: 'Growth SaaS', mechanism: 'Monthly or annual subscription', fact: '$9.99/mo · $99.99/yr · ~$300/mo MRR today' },
  { stream: 'Marketplace take rate', mechanism: 'Application fee on hub sales', fact: '5% — revenue spikes when creators monetize' },
  { stream: 'Enterprise', mechanism: 'Custom contracts', fact: 'White-label, analytics beta, dedicated support' },
]

export const REVENUE_METRICS = [
  { metric: 'Registered users', current: '6,500+', target12: 'TBD', target36: 'TBD' },
  { metric: 'MRR (Growth)', current: '~$300/mo', target12: 'TBD', target36: 'TBD' },
  { metric: 'Monthly GMV', current: 'Spiky (creator-driven)', target12: 'TBD', target36: 'TBD' },
  { metric: 'Take-rate revenue', current: '5% of hub sales', target12: 'TBD', target36: 'TBD' },
]

export const GTM_STRATEGY = {
  headline: 'Women-first expert curation',
  intro:
    'The key to go-to-market is simple: discover, filter, and select high-quality women experts, creators, and influencers — then invite them to partner and showcase their work on Kahana.',
  steps: [
    { step: 'Discover', detail: 'Find women experts, coaches, educators, and influencers packaging digital knowledge' },
    { step: 'Filter', detail: 'Assess catalog quality, audience fit, and expertise depth' },
    { step: 'Invite', detail: 'Partner and onboard; showcase their hubs on Explore and profiles' },
    { step: 'Amplify', detail: 'Featured creators, category campaigns (beauty, fashion, health-wellness, lifestyle)' },
  ],
  icp: {
    supply: 'Women experts, coaches, educators, influencers packaging guides, templates, and resource libraries',
    demand: 'Women audiences seeking trusted, curated expertise — not scattered links',
  },
  flywheel: [
    'More quality creators → richer catalog',
    'Richer catalog → more buyers',
    'More buyers → higher GMV + creator earnings',
    'Creator earnings → referrals → more creators',
  ],
  notYet: ['Paid ads at scale', 'Enterprise outbound — creator-led + curated partnerships first'],
}

export const GROWTH_FUNNEL = [
  { stage: 'Awareness', definition: 'Visit Explore or profile', metric: 'Unique visitors' },
  { stage: 'Interest', definition: 'Open hub page', metric: 'Hub views / visitor' },
  { stage: 'Intent', definition: 'Open paywall / checkout', metric: 'Checkout starts' },
  { stage: 'Purchase', definition: 'Complete Stripe payment', metric: 'GMV, conversion rate' },
  { stage: 'Retention', definition: 'Second purchase or creator publish', metric: 'Repeat rate' },
]

export const ROADMAP_HORIZONS = [
  {
    id: 'h1',
    horizon: 'H1 — Trust + conversion',
    timeframe: 'Now – 6 mo',
    theme: 'More purchases per Explore visit',
    initiatives: [
      'Hub UX: share + monetize discoverability (P0)',
      'Category landing pages for SEO (P1)',
      'Reviews/ratings MVP (P1)',
      'Clearer Free → Growth upgrade paths (P1)',
    ],
  },
  {
    id: 'h2',
    horizon: 'H2 — Catalog scale',
    timeframe: '6 – 18 mo',
    theme: 'Buyers find the right hub fast; creators see ROI',
    initiatives: [
      'Search improvements and recommendations',
      'Creator payout dashboard and hub analytics',
      'Featured/curated collections on Explore',
      'Women-expert category campaigns at scale',
    ],
  },
  {
    id: 'h3',
    horizon: 'H3 — Platform moat',
    timeframe: '18+ mo',
    theme: 'Network effects, enterprise, hard to replicate',
    initiatives: [
      'Bundles and cross-sell',
      'Affiliate/referral marketplace',
      'Enterprise marketplace catalogs',
    ],
  },
]

export const RISK_REGISTER = [
  { id: 'R1', risk: 'Stripe dependency / account issues', likelihood: 'Medium', impact: 'High', mitigation: 'Monitor Stripe Connect compliance; clear creator onboarding docs' },
  { id: 'R2', risk: 'Infrastructure outage (Heroku, Firebase)', likelihood: 'Low', impact: 'High', mitigation: 'Uptime monitoring; incident comms; post-incident reviews' },
  { id: 'R3', risk: 'Adult content / moderation failure', likelihood: 'Medium', impact: 'High', mitigation: 'Adult flags, DOB age verification, Explore filters, legal terms' },
  { id: 'R4', risk: 'Creator fraud or chargebacks', likelihood: 'Medium', impact: 'Medium', mitigation: 'Hub preview standards; chargeback tracking; refund policy' },
  { id: 'R5', risk: 'Competitor copies marketplace', likelihood: 'High', impact: 'Medium', mitigation: 'Ship faster on conversion, trust, and curated catalog quality' },
  { id: 'R6', risk: 'GMV concentration in few creators', likelihood: 'TBD', impact: 'High', mitigation: 'Diversify supply via women-first curation program' },
  { id: 'R7', risk: 'Low Free → Growth conversion', likelihood: 'TBD', impact: 'Medium', mitigation: 'Upgrade prompts at hub/upload limits; live chat on Growth' },
  { id: 'R8', risk: 'SEO / discovery underperforms', likelihood: 'Medium', impact: 'High', mitigation: 'Category landing pages; creator-led distribution; OG previews' },
]

export const TECH_STACK = [
  { layer: 'Frontend', stack: 'React (CRA), Mantine UI, Redux — Heroku (app.kahana.io)' },
  { layer: 'Backend API', stack: 'Firebase Cloud Functions (kahana-15c2a prod)' },
  { layer: 'Database', stack: 'Cloud Firestore' },
  { layer: 'Auth', stack: 'Firebase Authentication' },
  { layer: 'Payments', stack: 'Stripe + Stripe Connect (5% application fee)' },
  { layer: 'Analytics', stack: 'Mixpanel' },
]

export const TRUST_SAFETY = {
  adult: 'Creators flag adult hubs; buyers must log in and verify age ≥ 18 via date of birth before access.',
  verification: 'Stripe Identity verification displays a verified creator badge on profiles and paywall surfaces.',
  policies: 'Legal pages: hub access, privacy, monetization, adult content, public listing policies at /legal/*',
}

export const HOME_SECTION_LINKS = [
  { id: 'vision-library', label: 'Vision: The Library' },
  { id: 'growth-strategy', label: 'Women-first GTM' },
  { id: 'revenue-model', label: 'Revenue model' },
  { id: 'platform-architecture', label: 'Platform architecture' },
  { id: 'roadmap-snapshot', label: 'Roadmap' },
]
