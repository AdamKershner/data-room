/** Curio Store business plan page — synthesized from data-room Curio/ docs. */

export const CURIO_STORE_URL = 'https://curio.store'

export const CURIO_STORE_PAGE = {
  title: 'Curio Store',
  subtitle:
    'Business plan and executive summary for Curio — the marketplace and storefront for curated digital products.',
  northStar:
    'Make Curio the default place to discover, buy, and host curated digital products.',
  legalEntity: 'Kahana Group Inc.',
}

export const CURIO_HIGHLIGHTS = [
  { label: 'Explore marketplace', detail: 'Public discovery at /explore' },
  { label: 'Stripe Connect', detail: 'Built-in creator monetization' },
  { label: 'Free / Growth / Enterprise', detail: 'SaaS tiers for scale' },
  { label: '5% take rate', detail: 'Platform fee on hub sales' },
]

export const CURIO_STORE_SECTIONS = [
  { id: 'executive-summary', title: 'Executive summary' },
  { id: 'product-today', title: 'Product today' },
  { id: 'market', title: 'Market and customers' },
  { id: 'revenue-model', title: 'Revenue model' },
  { id: 'growth', title: 'Growth strategy' },
  { id: 'unit-economics', title: 'Unit economics' },
  { id: 'roadmap', title: 'Product roadmap' },
  { id: 'operating-model', title: 'Team and operating model' },
  { id: 'risks', title: 'Risks and mitigations' },
]

export const EXECUTIVE_SUMMARY = {
  paragraphs: [
    'Curio is building the Amazon of digital products: one trusted marketplace where buyers discover curated digital goods and creators host, sell, and grow their catalogs. Curio combines a public marketplace (Explore), creator storefronts (profiles + hubs), and collaboration tooling under a single brand at curio.store.',
    'Brand is Curio; legal entity is Kahana Group Inc. Curio is a separate product line from Oasis Browser within the Kahana family — same engineering backbone, distinct market and GTM.',
    '"Amazon" here is strategic shorthand, not a literal clone. It means winning on selection, trust, convenience, and scale economics applied to digital creators and knowledge products.',
  ],
  pillars: [
    { name: 'Catalog density', detail: 'More quality public hubs across categories' },
    { name: 'Conversion', detail: 'Explore → hub view → purchase with minimal friction' },
    { name: 'Creator earnings', detail: 'Help creators make money so they stay and refer others' },
    { name: 'Platform revenue', detail: 'Scale GMV (take rate) and Growth MRR in parallel' },
  ],
  positioning: {
    creators:
      'For creators who package expertise into digital products, Curio is a marketplace and storefront that lets them publish curated hubs, get discovered on Explore, and monetize with Stripe — unlike generic file hosts or link-in-bio tools that lack discovery or built-in commerce.',
    buyers:
      'For buyers, Curio is a curated digital marketplace where they find high-signal products in public hubs — unlike scattered PDFs, Notion pages, or one-off Gumroad links with no browse experience.',
  },
  isNot: [
    'Not a generic cloud drive or Dropbox alternative',
    'Not only an internal team wiki (though hubs support collaboration)',
    'Not a full LMS or course platform (though creators can sell course-like content in hubs)',
    'Not a social network — discovery is catalog- and creator-led, not feed-led',
  ],
}

export const AMAZON_PARALLEL = [
  { dimension: 'Selection', amazon: 'Huge catalog, every category', curio: 'Explore marketplace with 14 categories, hub + creator discovery' },
  { dimension: 'Trust', amazon: 'Reviews, returns, known sellers', curio: 'Creator profiles, clear pricing, moderation, Stripe checkout' },
  { dimension: 'Convenience', amazon: 'One account, fast checkout', curio: 'Single platform for browse → buy → access; Linktree-style profiles' },
  { dimension: 'Scale', amazon: 'Logistics + marketplace economics improve with volume', curio: 'Stripe Connect take rate + SaaS subscriptions; tools that reward catalog depth' },
]

export const COMPETITIVE_FRAME = [
  { competitor: 'Gumroad', strength: 'Simple digital sales, creator trust', differentiation: 'Curio adds discovery (Explore), hub as product container, and collaboration' },
  { competitor: 'Stan Store / link-in-bio', strength: 'Mobile-first creator links', differentiation: 'Curio adds marketplace browse, richer hub content, and category taxonomy' },
  { competitor: 'Notion / Coda', strength: 'Flexible docs and workspaces', differentiation: 'Curio is commerce- and discovery-first; monetization and public marketplace are core' },
  { competitor: 'Kajabi / Teachable', strength: 'Courses and memberships', differentiation: 'Curio is lighter-weight and hub-centric; better for curated resource bundles' },
]

export const PRODUCT_SURFACES = [
  { surface: 'Explore', route: '/explore', purpose: 'Discover public hubs and creators; search and filters' },
  { surface: 'Hub', route: '/hub/:id', purpose: 'Curated digital product container — files, notes, collaboration' },
  { surface: 'Profile', route: '/profile/:userId', purpose: 'Public creator page — avatar, bio, social links, hub links' },
  { surface: 'Billing', route: 'Billing view', purpose: 'Free / Growth / Enterprise plan selection' },
]

export const EXPLORE_FILTERS = [
  'Text search',
  'Category (14 standard marketplace categories)',
  'Monetization (free vs monetized)',
  'Price range',
  'Adult content (include / exclude / only)',
  'Custom tags',
  'Sort (including relevance when searching)',
]

export const MARKETPLACE_CATEGORIES = [
  'Business',
  'Education',
  'Health & Wellness',
  'Finance',
  'Technology',
  'Creative & Design',
  'Marketing',
  'Productivity',
  'Lifestyle',
  'Entertainment',
  'Spirituality',
  'Sports & Fitness',
  'Writing & Publishing',
  'Other',
]

export const SAAS_PLANS = [
  { feature: 'Price', free: '$0', growth: '$9.99/mo or $99.99/yr', enterprise: 'Custom' },
  { feature: 'Hubs', free: '3', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Uploads per hub', free: 'Up to 10', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Collaborators', free: 'Unlimited', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Stripe monetization', free: 'Yes', growth: 'Yes', enterprise: 'Yes' },
  { feature: 'Max file size', free: '5 MB', growth: '5 GB', enterprise: 'Flexible' },
  { feature: 'Storage', free: '—', growth: '100 GB', enterprise: 'Flexible' },
  { feature: 'Support', free: '—', growth: 'Live chat', enterprise: '24/7 white-glove' },
  { feature: 'Extras', free: '—', growth: '—', enterprise: 'White-label, custom integrations, analytics (beta), migration support' },
]

export const PRODUCT_LIMITATIONS = [
  { gap: 'Hub UX friction', impact: 'Share/monetize discoverability, upload entry points' },
  { gap: 'No reviews/ratings', impact: 'Weaker trust signal vs Amazon/Gumroad' },
  { gap: 'Limited recommendations', impact: 'Browse-heavy, not personalized' },
  { gap: 'Creator analytics', impact: 'Limited payout/performance dashboards' },
  { gap: 'Search depth', impact: 'Functional but not semantic/discovery-optimized' },
]

export const INFRASTRUCTURE = [
  { layer: 'Frontend', stack: 'React app on Heroku (kahana-alpha → curio.store)' },
  { layer: 'Backend', stack: 'Firebase Functions (kahana-15c2a)' },
  { layer: 'Payments', stack: 'Stripe + Stripe Connect' },
  { layer: 'Analytics', stack: 'Mixpanel (billing, profile, enterprise CTAs)' },
]

export const ICP_HYPOTHESES = [
  {
    id: 'solo-creators',
    title: 'Solo creators and influencers',
    profile: 'Coaches, educators, TikTok/Instagram creators, newsletter writers packaging guides, templates, or resource libraries.',
    job: 'Turn audience attention into revenue without building a custom site.',
    whyCurio: 'Explore discovery + profile links + monetized hub in one stack.',
  },
  {
    id: 'consultants',
    title: 'Consultants and subject-matter experts',
    profile: 'Professionals selling playbooks, frameworks, or niche expertise (business, marketing, finance, wellness).',
    job: 'Productize knowledge once; sell repeatedly.',
    whyCurio: 'Hub as structured product container; categories match expertise verticals.',
  },
  {
    id: 'enterprise',
    title: 'Teams and organizations (Enterprise)',
    profile: 'Companies needing white-label hubs, unified billing, or internal + external knowledge products.',
    job: 'Deploy Curio-like experience under their brand with support.',
    whyCurio: 'Enterprise tier — custom branding, integrations, dedicated support.',
  },
]

export const JOBS_TO_BE_DONE = [
  { actor: 'Creator', functional: 'Publish and sell digital products', emotional: 'Feel professional; earn sustainably', feature: 'Hubs, Stripe, Explore, Profile' },
  { actor: 'Creator', functional: 'Get discovered without ads', emotional: 'Hope the catalog finds buyers', feature: 'Explore categories, search, OG share' },
  { actor: 'Buyer', functional: 'Find trustworthy products fast', emotional: 'Avoid scams and low-quality PDFs', feature: 'Profiles, pricing clarity, moderation' },
  { actor: 'Buyer', functional: 'Access content after purchase', emotional: 'Instant gratification', feature: 'Paywall → hub access' },
  { actor: 'Team buyer', functional: 'Procure at scale', emotional: 'Vendor confidence', feature: 'Enterprise sales motion' },
]

export const REVENUE_STREAMS = [
  { stream: 'Growth SaaS', mechanism: 'Monthly or annual subscription', fact: '$9.99/mo · $99.99/yr default' },
  { stream: 'Marketplace take rate', mechanism: 'Application fee on hub sales', fact: '5% platform fee' },
  { stream: 'Enterprise', mechanism: 'Custom contracts', fact: 'Contact sales; white-label, analytics beta' },
]

export const REVENUE_METRICS = [
  { metric: 'MRR', current: 'TBD', target12: 'TBD', target36: 'TBD' },
  { metric: 'ARR', current: 'TBD', target12: 'TBD', target36: 'TBD' },
  { metric: 'Monthly GMV', current: 'TBD', target12: 'TBD', target36: 'TBD' },
  { metric: 'Take-rate revenue (5% of GMV)', current: 'TBD', target12: 'TBD', target36: 'TBD' },
  { metric: 'Enterprise ARR', current: 'TBD', target12: 'TBD', target36: 'TBD' },
]

export const EXPANSION_LEVERS = {
  nearTerm: [
    'GMV growth — more monetized hubs × more transactions × stable take rate',
    'Free → Growth — trigger upgrades at hub/upload limits (3 hubs, 10 uploads/hub on Free)',
    'Creator-led distribution — profile links and OG previews drive organic hub traffic',
    'Category density — fill thin categories so Explore feels "endless aisle"',
  ],
  mediumTerm: [
    'Featured placement — promoted hubs (new revenue line; not shipped)',
    'Creator analytics upsell — deeper dashboards as Growth/Enterprise feature',
    'Annual plan push — improve cash flow; ~17% yearly discount in UI',
  ],
  longTerm: [
    'Affiliate / referral marketplace — creators promote each other\'s hubs',
    'Bundles and cross-sell — multi-hub packages',
    'Enterprise marketplace — org-wide catalogs under white-label',
  ],
}

export const GROWTH_FUNNEL = [
  { stage: 'Awareness', definition: 'Visit Explore or profile', metric: 'Unique visitors/mo', current: 'TBD' },
  { stage: 'Interest', definition: 'Open hub page', metric: 'Hub views / visitor', current: 'TBD' },
  { stage: 'Intent', definition: 'Hit paywall or view pricing', metric: 'Paywall impressions', current: 'TBD' },
  { stage: 'Purchase', definition: 'Complete Stripe checkout', metric: 'Purchase conversion %', current: 'TBD' },
  { stage: 'Activation', definition: 'Access hub content post-pay', metric: 'Successful access rate', current: 'TBD' },
  { stage: 'Repeat', definition: 'Second purchase or hub', metric: 'Repeat buyer %', current: 'TBD' },
]

export const QUARTERLY_THEMES = [
  { quarter: 'Q1 — Foundation', items: ['Ship top hub UX fixes (share, monetize discoverability)', 'Establish monthly metrics ritual', 'Creator recruitment goal: TBD'] },
  { quarter: 'Q2 — Catalog density', items: ['Category launch campaigns (1 category per month)', '10 featured creator partnerships', 'Profile/share loop optimization (OG, Linktree links)'] },
  { quarter: 'Q3 — Conversion', items: ['Hub page experiments (pricing display, previews)', 'Explore sort/filter improvements', 'Target GMV milestone: TBD'] },
  { quarter: 'Q4 — Scale', items: ['Enterprise pipeline development', 'Evaluate promoted placement monetization', 'Year-end ARR + GMV targets: TBD'] },
]

export const CREATOR_VALUE_SCENARIOS = [
  { type: 'Free, no sales', saasYr: '$0', gmvShareYr: '$0', total: '$0' },
  { type: 'Free, $2k GMV', saasYr: '$0', gmvShareYr: '$100', total: '$100' },
  { type: 'Growth, $5k GMV', saasYr: '$100', gmvShareYr: '$250', total: '$350' },
  { type: 'Growth, $20k GMV', saasYr: '$100', gmvShareYr: '$1,000', total: '$1,100' },
]

export const ROADMAP_HORIZONS = [
  {
    id: 'h1',
    horizon: 'H1 — Trust and conversion',
    timeframe: 'Now – 6 mo',
    theme: 'Fix friction that blocks discover → buy → access',
    initiatives: [
      'Explore: category landing pages, improved sort and empty states',
      'Hub: share + monetize discoverability (P0), upload consolidation, hub page merchandising',
      'Trust: reviews/ratings MVP, refund/dispute playbook',
      'Billing: clearer Free → Growth upgrade paths',
    ],
  },
  {
    id: 'h2',
    horizon: 'H2 — Catalog scale',
    timeframe: '6 – 18 mo',
    theme: 'Explore feels like an endless aisle; creators understand performance',
    initiatives: [
      'Search improvements (synonyms, tags, relevance)',
      'Recommendations ("Related hubs")',
      'Payout dashboard and hub analytics',
      'Featured / curated collections on Explore',
      'Enterprise analytics beta → GA, white-label theming, SSO',
    ],
  },
  {
    id: 'h3',
    horizon: 'H3 — Platform moat',
    timeframe: '18+ mo',
    theme: 'Defensible network and B2B scale',
    initiatives: [
      'Affiliate marketplace',
      'Multi-hub bundles at checkout',
      'API + integrations (Zapier, CRM, email)',
      'Enterprise marketplace for org-hosted catalogs',
      'International (currency, tax, localization)',
    ],
  },
]

export const OPERATING_CADENCE = {
  weekly: [
    { meeting: 'Metrics standup', duration: '30 min', output: 'Top-line numbers, blockers' },
    { meeting: 'Product / eng sync', duration: '30 min', output: 'Sprint progress, scope cuts' },
    { meeting: 'Creator spotlight', duration: '15 min async', output: '1 creator win + 1 learning' },
  ],
  monthly: [
    'Metrics review',
    'Roadmap reprioritization',
    'Top creator check-in',
  ],
  quarterly: [
    'Business review',
    'Strategy refresh (vision, growth)',
    'Unit economics refresh',
  ],
}

export const NORTH_STAR_METRICS = [
  { metric: 'GMV (monthly)', definition: 'Hub sales volume', source: 'Stripe' },
  { metric: 'MRR', definition: 'Subscription revenue', source: 'Stripe' },
  { metric: 'Active monetized hubs', definition: 'Hubs with sales in last 30d', source: 'Firestore + Stripe' },
  { metric: 'Explore unique visitors', definition: 'Traffic', source: 'Mixpanel' },
  { metric: 'Purchase conversion', definition: 'Purchases / hub views', source: 'Mixpanel + Stripe' },
]

export const DECISION_FRAMEWORK = [
  { priority: 1, area: 'Payment reliability', example: 'Stripe outage, paywall bug' },
  { priority: 2, area: 'Trust & safety', example: 'Moderation failure' },
  { priority: 3, area: 'Conversion', example: 'Paywall drop-off' },
  { priority: 4, area: 'GMV growth', example: 'Featured creators' },
  { priority: 5, area: 'MRR growth', example: 'Growth upsell experiments' },
  { priority: 6, area: 'New features', example: 'Affiliates, H3 bets' },
]

export const RISK_REGISTER = [
  { id: 'R1', risk: 'Stripe dependency / account issues', likelihood: 'Medium', impact: 'High', mitigation: 'Monitor Connect compliance weekly; clear creator onboarding docs' },
  { id: 'R2', risk: 'Infrastructure outage (Heroku, Firebase)', likelihood: 'Low', impact: 'High', mitigation: 'Uptime monitoring, incident comms, load test before marketing pushes' },
  { id: 'R3', risk: 'Adult content / moderation failure', likelihood: 'Medium', impact: 'High', mitigation: 'Adult flags, age gates, Explore filters; reporting flow and manual review queue' },
  { id: 'R4', risk: 'Creator fraud or chargebacks', likelihood: 'Medium', impact: 'Medium', mitigation: 'Hub preview standards, refund policy, track chargeback rate by creator' },
  { id: 'R5', risk: 'Competitor copies marketplace', likelihood: 'High', impact: 'Medium', mitigation: 'Double down on Explore + hub depth; creator relationships; ship faster on trust features' },
  { id: 'R6', risk: 'GMV concentration in few creators', likelihood: 'TBD', impact: 'High', mitigation: 'Track top-10 GMV %; creator success for mid-tier; category diversification' },
  { id: 'R7', risk: 'Low Free → Growth conversion', likelihood: 'TBD', impact: 'Medium', mitigation: 'Cap paid spend until LTV:CAC > 3:1; prioritize organic channels' },
  { id: 'R8', risk: 'SEO / discovery underperforms', likelihood: 'Medium', impact: 'High', mitigation: 'Category landing pages, hub SEO, creator-led distribution' },
]
