/**
 * Adjacent platforms for Aura Library Clubs + library GTM (market-sizing lenses).
 * Nested by category; filterable by market lens; ranked by revenue and by
 * creators (supply) vs viewers (demand). Excludes Canva / Figma.
 * Staff conversation copy lives in kahanaCompanyDatabase / battlecard overrides.
 */

/**
 * @typedef {object} PlatformPool
 * @property {string} id
 * @property {string} name
 * @property {string} categoryId
 * @property {string[]} lenses
 * @property {string} usersLabel
 * @property {string} revenueLabel
 * @property {number|null} revenueUsdMid - sort key; null = not reliably disclosed
 * @property {string} [revenueCaution]
 * @property {string} demandLabel - viewers / consumers / readers / learners
 * @property {string} supplyLabel - creators / hosts / instructors
 * @property {number|null} demandScale - rough consumer scale for sorting
 * @property {number|null} supplyScale - rough creator scale for sorting
 * @property {'viewer-heavy'|'creator-heavy'|'balanced'} sideBias
 * @property {string} kahanaAngle - short growth angle
 * Conversation tips (switch / use-with) live in kahanaBattlecardOverrides + company DB — not duplicated here.
 */

export const COMPETITIVE_CATEGORIES = [
  {
    id: 'story-reading',
    name: 'Story / writing / reading',
    blurb: 'Social reading, writing communities, and book discovery.',
  },
  {
    id: 'creator-monetization',
    name: 'Memberships & fan support',
    blurb: 'Paid memberships, tips, and patronage.',
  },
  {
    id: 'online-storefront',
    name: 'Storefronts & link-in-bio',
    blurb: 'Creator-owned link-in-bio hubs and personal digital storefronts.',
  },
  {
    id: 'digital-marketplaces',
    name: 'Marketplaces',
    blurb: 'Multi-seller marketplaces where buyers browse and find products.',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-bio + commerce',
    blurb: 'Legacy alias — prefer Storefronts.',
  },
  {
    id: 'course-knowledge',
    name: 'Course / knowledge',
    blurb: 'Online courses, cohorts, and learning marketplaces.',
  },
  {
    id: 'community',
    name: 'Community & Messaging',
    blurb: 'Group chat, servers, and branded community homes.',
  },
  {
    id: 'newsletter',
    name: 'Newsletter / publishing',
    blurb: 'Owned audience publishing and newsletter stacks.',
  },
]

export const MARKET_LENSES = [
  {
    id: 'all',
    name: 'All relevant platforms',
    description: 'Full overlap map for Clubs + library.',
  },
  {
    id: 'link-in-bio',
    name: 'Onboard link-in-bio users',
    description:
      'Creators who already consolidate links — give them Clubs + library as the destination behind the link.',
  },
  {
    id: 'video-course',
    name: 'Onboard video course creators',
    description:
      'Course/cohort builders — Video Clubs as structured watch + discuss, with demand-driven title upload.',
  },
  {
    id: 'book-social',
    name: 'Onboard social readers / book clubs',
    description:
      'Readers and hosts already in bookish social graphs — Book Clubs as the home for the monthly loop.',
  },
  {
    id: 'membership',
    name: 'Onboard membership / patron creators',
    description:
      'Creators monetizing community access — Clubs as the consumption ritual; Aura Library hub as the paid library.',
  },
  {
    id: 'newsletter',
    name: 'Onboard newsletter / writer audiences',
    description:
      'Writers with owned lists — Clubs turn subscribers into recurring reading/watching groups.',
  },
  {
    id: 'community-host',
    name: 'Onboard community hosts',
    description:
      'Discord/Circle operators — add a library + club reading/watching layer on top of chat.',
  },
]

/** @type {PlatformPool[]} */
export const PLATFORM_POOLS = [
  {
    id: 'wattpad',
    name: 'Wattpad',
    categoryId: 'story-reading',
    lenses: ['book-social', 'newsletter'],
    usersLabel: '~90M monthly users; ~106M visits Apr 2026, ~26 min avg session',
    revenueLabel: 'One 2025 estimate ≈$895M (treat with caution); earlier ~$20–24M ARR; creators ~$142M GMV (2020)',
    revenueUsdMid: 895.4e6,
    revenueCaution: '2025 ~$895M estimate is likely high vs prior ~$20–24M ARR — treat cautiously.',
    demandLabel: '~90M monthly readers (historically 60–80M)',
    supplyLabel: 'Tens of millions of writers; 400M+ story uploads',
    demandScale: 90e6,
    supplyScale: 10e6,
    sideBias: 'viewer-heavy',
    kahanaAngle:
      'Huge pool of fiction creators + young readers for structured Book Clubs around Wattpad-origin titles.',
  },
  {
    id: 'substack',
    name: 'Substack',
    categoryId: 'story-reading',
    lenses: ['newsletter', 'book-social', 'membership'],
    usersLabel: '50M active subscriptions; ≥35M MA subscribers; ~5M paid; ~169M monthly visitors incl. custom domains',
    revenueLabel: 'Writers’ gross ~$450M (2025); Substack ~$45M (10% take)',
    revenueUsdMid: 45e6,
    demandLabel: '≥35M monthly active subscribers; 50M active subscriptions',
    supplyLabel: '17k+ writers earning; 2M+ active publications',
    demandScale: 35e6,
    supplyScale: 2e6,
    sideBias: 'balanced',
    kahanaAngle: 'Newsletter clubs — subscribers as viewers, writers as hosts.',
  },
  {
    id: 'goodreads',
    name: 'Goodreads',
    categoryId: 'story-reading',
    lenses: ['book-social'],
    usersLabel: 'Historically 90M+ registered; ~84.8M visits/mo',
    revenueLabel: 'Amazon-integrated; no standalone public ARR',
    revenueUsdMid: null,
    demandLabel: '~84.8M visits/mo → tens of millions of active readers',
    supplyLabel: 'Authors with profiles/lists; primary supply = Amazon/publisher books',
    demandScale: 80e6,
    supplyScale: null,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Reader graph for book clubs; Aura Library as action layer for real clubs around shelves.',
  },
  {
    id: 'medium',
    name: 'Medium',
    categoryId: 'story-reading',
    lenses: ['newsletter', 'book-social'],
    usersLabel: '~60M unique monthly readers; ~63M registered',
    revenueLabel: 'Memberships + sponsorship; tens of millions/yr est. (no recent official ARR)',
    revenueUsdMid: null,
    demandLabel: '~60M unique monthly readers',
    supplyLabel: 'Millions of writers publishing essays',
    demandScale: 60e6,
    supplyScale: 1e6,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Essay/article clubs and deep-dive reading groups.',
  },
  {
    id: 'patreon',
    name: 'Patreon',
    categoryId: 'creator-monetization',
    lenses: ['membership', 'video-course', 'community-host'],
    usersLabel: '8–10M active patrons; ~286k creators with ≥1 paying member',
    revenueLabel: 'Platform ~$50–75M (2026 est.); creator payouts ~$2B/yr',
    revenueUsdMid: 62.5e6,
    demandLabel: '~8–10M active patrons',
    supplyLabel: '~286k creators with ≥1 paying member (~250k+ overall)',
    demandScale: 9e6,
    supplyScale: 286e3,
    sideBias: 'creator-heavy',
    kahanaAngle:
      'Creators already monetize; Aura Library adds structured reading/video clubs as new offerings.',
  },
  {
    id: 'onlyfans',
    name: 'OnlyFans',
    categoryId: 'creator-monetization',
    lenses: ['membership'],
    usersLabel: '377.5M registered (EOY 2024); ~120M MAU; ~477M registered projected 2026',
    revenueLabel: 'Platform >$1.3B (2024); ~$7.2B user spend last reported year',
    revenueUsdMid: 1.3e9,
    demandLabel: '~120M MAUs; ~377M–477M registered',
    supplyLabel: 'Hundreds of thousands of creators',
    demandScale: 120e6,
    supplyScale: 500e3,
    sideBias: 'viewer-heavy',
    kahanaAngle:
      'Highly monetized creator↔fan relationships; Aura Library for club-style / non-adult knowledge communities.',
  },
  {
    id: 'gumroad',
    name: 'Gumroad',
    categoryId: 'digital-marketplaces',
    lenses: ['link-in-bio', 'video-course', 'membership'],
    usersLabel: '~27k storefronts; 46k creators earned (2020); GMV $142M (2020)',
    revenueLabel: '~$23.8M ARR (2024); ~10% of GMV',
    revenueUsdMid: 23.8e6,
    demandLabel: 'Hundreds of thousands–millions of buyers (MAU not precise)',
    supplyLabel: 'Tens of thousands of creators; ~27k stores',
    demandScale: 1e6,
    supplyScale: 27e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Digital product marketplace — clubs + library on Aura Library after purchase.',
  },
  {
    id: 'linktree',
    name: 'Linktree',
    categoryId: 'online-storefront',
    lenses: ['link-in-bio'],
    usersLabel: '50M+ users (largely creators/influencers/brands)',
    revenueLabel: '~$37M revenue (2023)',
    revenueUsdMid: 37e6,
    demandLabel: 'Link clickers (hundreds of millions) — not registered viewers',
    supplyLabel: '~50M users, mostly creators/brands',
    demandScale: null,
    supplyScale: 50e6,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Supply-side heavy — Aura Library as destination in the link-in-bio stack.',
  },
  {
    id: 'beacons',
    name: 'Beacons',
    categoryId: 'online-storefront',
    lenses: ['link-in-bio', 'membership'],
    usersLabel: 'Likely hundreds of thousands of creators (sparse public stats)',
    revenueLabel: 'Low single-digit millions ARR (est.)',
    revenueUsdMid: null,
    demandLabel: 'Creator audiences (not centrally reported)',
    supplyLabel: 'Hundreds of thousands of creators (est.)',
    demandScale: null,
    supplyScale: 200e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Supply-side tool; Aura Library = club engagement/demand layer.',
  },
  {
    id: 'stan-store',
    name: 'Stan.store',
    categoryId: 'online-storefront',
    lenses: ['link-in-bio', 'membership', 'video-course'],
    usersLabel: 'Solo creators with offers (sparse public stats)',
    revenueLabel: 'Low single-digit millions ARR (est.)',
    revenueUsdMid: null,
    demandLabel: 'Creator audiences (not centrally reported)',
    supplyLabel: 'Solo creators (scale similar to peer link-in-bio tools)',
    demandScale: null,
    supplyScale: 100e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Storefront creators add Clubs so purchases become group consumption.',
  },
  {
    id: 'pensight',
    name: 'Pensight',
    categoryId: 'online-storefront',
    lenses: ['link-in-bio', 'membership'],
    usersLabel: 'Solo creators (sparse public stats)',
    revenueLabel: 'Low single-digit millions ARR (est.)',
    revenueUsdMid: null,
    demandLabel: 'Creator audiences (not centrally reported)',
    supplyLabel: 'Solo creators',
    demandScale: null,
    supplyScale: 100e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Aura Library as club/library destination behind the bio.',
  },
  {
    id: 'podia',
    name: 'Podia',
    categoryId: 'online-storefront',
    lenses: ['link-in-bio', 'video-course', 'membership'],
    usersLabel: '~50k customers (course/membership creators)',
    revenueLabel: '~$0.81M ARR (2024)',
    revenueUsdMid: 0.81e6,
    demandLabel: 'Tens/hundreds of thousands of students/members (not well reported)',
    supplyLabel: '~50k course/membership creators',
    demandScale: 100e3,
    supplyScale: 50e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Club layer on top of courses and memberships.',
  },
  {
    id: 'kajabi',
    name: 'Kajabi',
    categoryId: 'course-knowledge',
    lenses: ['video-course', 'membership', 'community-host'],
    usersLabel: '~19k creator customers; millions of students across them (not centrally reported)',
    revenueLabel: '~$75M ARR (2024); previously ~$100M ARR',
    revenueUsdMid: 75e6,
    demandLabel: 'Millions of students/members across creators (not centrally reported)',
    supplyLabel: '~19k high-ARPU creator customers',
    demandScale: 2e6,
    supplyScale: 19e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'High-ARPU creators; Clubs inside knowledge businesses.',
  },
  {
    id: 'teachable',
    name: 'Teachable',
    categoryId: 'course-knowledge',
    lenses: ['video-course'],
    usersLabel: 'Historic 100k+ creators; millions of students (current exacts unpublished)',
    revenueLabel: '~$59.2M estimated annual revenue',
    revenueUsdMid: 59.2e6,
    demandLabel: 'Millions of students (exact current unpublished)',
    supplyLabel: 'Tens of thousands of instructors; historic 100k+ creators',
    demandScale: 2e6,
    supplyScale: 50e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Same as Kajabi — club layer for course retention.',
  },
  {
    id: 'udemy',
    name: 'Udemy',
    categoryId: 'course-knowledge',
    lenses: ['video-course'],
    usersLabel: '~77M learners (EOY 2024); ~75k instructors; ~262k courses',
    revenueLabel: '~$786.6M (2024); ~$789.8M (2025)',
    revenueUsdMid: 789.8e6,
    demandLabel: '~77M learners',
    supplyLabel: '~75k instructors; ~262k courses',
    demandScale: 77e6,
    supplyScale: 75e3,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Massive learning marketplace — fit for course + club.',
  },
  {
    id: 'coursera',
    name: 'Coursera',
    categoryId: 'course-knowledge',
    lenses: ['video-course', 'community-host'],
    usersLabel: '~168M registered (2025)',
    revenueLabel: '~$757.5M (2025)',
    revenueUsdMid: 757.5e6,
    demandLabel: '~168M registered learners',
    supplyLabel: 'Universities, institutions, expert instructors (hundreds–thousands)',
    demandScale: 168e6,
    supplyScale: 2e3,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Institutional supply; demand for cohort clubs around courses.',
  },
  {
    id: 'discord',
    name: 'Discord',
    categoryId: 'community',
    lenses: ['community-host', 'book-social', 'video-course'],
    usersLabel: '~260M MAU (late 2025)',
    revenueLabel: '~$561M (2025)',
    revenueUsdMid: 561e6,
    demandLabel: '~260M monthly active users',
    supplyLabel: 'Millions of server owners/community hosts (not all monetizing)',
    demandScale: 260e6,
    supplyScale: 5e6,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Huge pool of club-ready communities; admins/streamers as hosts.',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    categoryId: 'community',
    lenses: ['community-host'],
    usersLabel: '~2B+ MAU (Meta)',
    revenueLabel: 'Business API / ads (Meta slice; not cleanly disclosed)',
    revenueUsdMid: null,
    demandLabel: '~2B+ monthly active users',
    supplyLabel: 'Group admins / Business accounts (hundreds of millions of groups)',
    demandScale: 2e9,
    supplyScale: 50e6,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Groups already chat here — Aura Library is the library + Clubs layer beside the chat.',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    categoryId: 'community',
    lenses: ['community-host'],
    usersLabel: '~900M+ MAU (dir.)',
    revenueLabel: 'Premium + ads (dir.; sparse public ARR)',
    revenueUsdMid: null,
    demandLabel: '~900M+ monthly active users',
    supplyLabel: 'Channel / group admins (millions)',
    demandScale: 900e6,
    supplyScale: 5e6,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Channels and groups discuss content — link to a Aura Library hub for the library shelf.',
  },
  {
    id: 'groupme',
    name: 'GroupMe',
    categoryId: 'community',
    lenses: ['community-host', 'book-social'],
    usersLabel: 'Tens of millions (campus / friend groups, dir.)',
    revenueLabel: 'Microsoft-owned; not a primary commercial peer',
    revenueUsdMid: null,
    demandLabel: 'Group members (campus, friends, clubs)',
    supplyLabel: 'Group creators / admins',
    demandScale: 30e6,
    supplyScale: 5e6,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Natural friend-group chat — Aura Library hosts the book/watch club those groups spin up.',
  },
  {
    id: 'slack',
    name: 'Slack',
    categoryId: 'community',
    lenses: ['community-host'],
    usersLabel: 'Tens of millions of paid users (workspace)',
    revenueLabel: 'Salesforce Slack seats (multi-billion company slice)',
    revenueUsdMid: null,
    demandLabel: 'Workspace members',
    supplyLabel: 'Workspace owners / community managers',
    demandScale: 40e6,
    supplyScale: 1e6,
    sideBias: 'balanced',
    kahanaAngle: 'Workplace communities keep Slack; Aura Library for learning clubs and library.',
  },
  {
    id: 'signal',
    name: 'Signal',
    categoryId: 'community',
    lenses: ['community-host'],
    usersLabel: 'Tens of millions (privacy-focused, dir.)',
    revenueLabel: 'Nonprofit; not a commercial peer',
    revenueUsdMid: null,
    demandLabel: 'Privacy-focused group members',
    supplyLabel: 'Group admins',
    demandScale: 40e6,
    supplyScale: 1e6,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Small trusted groups — Aura Library for the library shelf those groups discuss.',
  },
  {
    id: 'facebook-groups',
    name: 'Facebook Groups',
    categoryId: 'community',
    lenses: ['community-host', 'book-social'],
    usersLabel: 'Hundreds of millions of group members (Meta)',
    revenueLabel: 'Meta ads ecosystem (groups not broken out)',
    revenueUsdMid: null,
    demandLabel: 'Broad consumer community members',
    supplyLabel: 'Group admins / creators',
    demandScale: 500e6,
    supplyScale: 20e6,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Mass-market groups stay on Facebook; Aura Library for deeper clubs and libraries.',
  },
  {
    id: 'circle',
    name: 'Circle.so',
    categoryId: 'community',
    lenses: ['community-host', 'membership', 'video-course'],
    usersLabel: 'Thousands of communities; tens/hundreds of thousands of members',
    revenueLabel: 'Mid-single to low-double-digit $M ARR (est.); plans ~$89–199/mo',
    revenueUsdMid: null,
    demandLabel: 'Tens/hundreds of thousands of community members',
    supplyLabel: 'Thousands of community owners (each workspace ≈ a creator)',
    demandScale: 200e3,
    supplyScale: 5e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Ready-made communities; Aura Library as reading/video club plugin.',
  },
  {
    id: 'guild',
    name: 'Guild',
    categoryId: 'community',
    lenses: ['community-host', 'membership'],
    usersLabel: 'Brand / membership communities (dir.)',
    revenueLabel: 'Sparse public ARR',
    revenueUsdMid: null,
    demandLabel: 'Community members',
    supplyLabel: 'Brand / org community managers',
    demandScale: null,
    supplyScale: 2e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Branded community home — Aura Library for learning clubs inside or beside.',
  },
  {
    id: 'hivebrite',
    name: 'Hivebrite',
    categoryId: 'community',
    lenses: ['community-host'],
    usersLabel: 'Brand / alumni communities (dir.)',
    revenueLabel: 'Enterprise community SaaS (sparse public)',
    revenueUsdMid: null,
    demandLabel: 'Org / alumni members',
    supplyLabel: 'Community managers',
    demandScale: null,
    supplyScale: 1e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Org communities keep Hivebrite; Aura Library for learning hubs.',
  },
  {
    id: 'disciple',
    name: 'Disciple',
    categoryId: 'community',
    lenses: ['community-host', 'membership'],
    usersLabel: 'Branded community apps (dir.)',
    revenueLabel: 'Sparse public ARR',
    revenueUsdMid: null,
    demandLabel: 'App community members',
    supplyLabel: 'Creator / brand community owners',
    demandScale: null,
    supplyScale: 2e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Branded app communities — Aura Library for multi-format clubs and libraries.',
  },
  {
    id: 'bettermode',
    name: 'Bettermode',
    categoryId: 'community',
    lenses: ['community-host'],
    usersLabel: 'Community creators (dir.)',
    revenueLabel: 'Sparse public ARR',
    revenueUsdMid: null,
    demandLabel: 'Community members',
    supplyLabel: 'Community builders',
    demandScale: null,
    supplyScale: 2e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'General community platform — Aura Library for learning-focused clubs.',
  },
  {
    id: 'hypage',
    name: 'HYpage',
    categoryId: 'online-storefront',
    lenses: ['link-in-bio', 'membership'],
    usersLabel: 'Creator storefronts (dir.)',
    revenueLabel: 'Sparse public ARR',
    revenueUsdMid: null,
    demandLabel: 'Creator audiences',
    supplyLabel: 'Solo creators',
    demandScale: null,
    supplyScale: 50e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Bio / storefront destination — put Aura Library club behind the link.',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    categoryId: 'digital-marketplaces',
    lenses: ['link-in-bio', 'membership'],
    usersLabel: 'Millions of merchants (digital / creator slice)',
    revenueLabel: 'Multi-billion platform; creator/digital slice only',
    revenueUsdMid: null,
    demandLabel: 'Buyers browsing merchant storefronts / products',
    supplyLabel: 'Merchants selling digital and physical products',
    demandScale: null,
    supplyScale: 500e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Buyers find products on Shopify; Aura Library for clubs + library after purchase.',
  },
  {
    id: 'skool',
    name: 'Skool',
    categoryId: 'community',
    lenses: ['community-host', 'video-course'],
    usersLabel: 'Growing cohort communities (public MAU not centrally reported)',
    revenueLabel: 'Creator GMV via groups; platform take not fully public',
    revenueUsdMid: null,
    demandLabel: 'Members inside Skool groups (cohort-scale)',
    supplyLabel: 'Thousands of group hosts / educators (est.)',
    demandScale: null,
    supplyScale: 10e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Cohort classroom on Skool; library shelf + Aura + Clubs on Aura Library — use both.',
  },
  {
    id: 'mighty-networks',
    name: 'Mighty Networks',
    categoryId: 'community',
    lenses: ['community-host', 'video-course', 'membership'],
    usersLabel: 'Branded communities with courses/events (dir.)',
    revenueLabel: 'Community SaaS; sparse public ARR',
    revenueUsdMid: null,
    demandLabel: 'Community members',
    supplyLabel: 'Network hosts / course creators',
    demandScale: null,
    supplyScale: 10e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'All-in-one community + courses — Aura Library for multi-format clubs and Aura.',
  },
  {
    id: 'fable',
    name: 'Fable',
    categoryId: 'story-reading',
    lenses: ['book-social'],
    usersLabel: 'Social reading clubs (scale not fully public)',
    revenueLabel: 'Consumer social reading; not a primary Aura Library revenue peer',
    revenueUsdMid: null,
    demandLabel: 'Readers in social book clubs',
    supplyLabel: 'Authors/titles via publisher/Amazon ecosystem',
    demandScale: null,
    supplyScale: null,
    sideBias: 'viewer-heavy',
    kahanaAngle:
      'If you like Fable, you might also love Aura Library for book clubs — library shelf + Aura + multi-format.',
  },
  {
    id: 'thinkific',
    name: 'Thinkific',
    categoryId: 'course-knowledge',
    lenses: ['video-course'],
    usersLabel: 'Teachers running branded course sites (creator counts in tens of thousands est.)',
    revenueLabel: 'Public company course LMS; ARR varies with filings',
    revenueUsdMid: null,
    demandLabel: 'Students enrolled in Thinkific schools',
    supplyLabel: 'Course creators / academies',
    demandScale: null,
    supplyScale: 50e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Course ops on Thinkific; discovery + Clubs on Aura Library — dual-list.',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    categoryId: 'story-reading',
    lenses: ['book-social', 'community-host'],
    usersLabel: 'Hundreds of millions of MAUs (music + podcasts)',
    revenueLabel: 'Multi-billion streaming company; podcast ads + subscriptions',
    revenueUsdMid: null,
    demandLabel: 'Listeners at global streaming scale',
    supplyLabel: 'Artists + podcasters',
    demandScale: 600e6,
    supplyScale: 5e6,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Listen on Spotify; organize listen-along Clubs and companion materials on Aura Library.',
  },
  {
    id: 'audible',
    name: 'Audible',
    categoryId: 'story-reading',
    lenses: ['book-social'],
    usersLabel: 'Tens of millions of audiobook listeners (Amazon ecosystem)',
    revenueLabel: 'Amazon audiobook segment; not broken out cleanly',
    revenueUsdMid: null,
    demandLabel: 'Audiobook listeners via credits/subscriptions',
    supplyLabel: 'Authors/narrators/publishers',
    demandScale: 50e6,
    supplyScale: null,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Listen on Audible; meet the Book Club on Aura Library; ebook when boarded.',
  },
  {
    id: 'beehiiv',
    name: 'Beehiiv',
    categoryId: 'newsletter',
    lenses: ['newsletter', 'link-in-bio'],
    usersLabel: '≥47k websites/newsletters',
    revenueLabel: 'Early-stage; likely tens of millions ARR (not widely reported)',
    revenueUsdMid: null,
    demandLabel: 'Hundreds of thousands–millions of subscribers (not centrally reported)',
    supplyLabel: '≥47k newsletters/websites',
    demandScale: 500e3,
    supplyScale: 47e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Newsletter creators host clubs around issues and ebooks.',
  },
  {
    id: 'etsy-ebooks',
    name: 'Etsy (ebooks niche)',
    categoryId: 'digital-marketplaces',
    lenses: ['link-in-bio', 'membership'],
    usersLabel: '90–96M active buyers overall; ebooks = subset of sellers',
    revenueLabel: 'Multi-billion company; ebook niche not broken out (digital +22% last reported year)',
    revenueUsdMid: null,
    demandLabel: '90–96M active buyers (marketplace overall)',
    supplyLabel: 'Hundreds of thousands of sellers; ebooks a subset',
    demandScale: 93e6,
    supplyScale: 200e3,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Marketplace discovery stays on Etsy; Aura Library for clubs + library after purchase.',
  },
  {
    id: 'curios',
    name: 'Curios',
    categoryId: 'online-storefront',
    lenses: ['link-in-bio', 'book-social', 'membership'],
    usersLabel: 'Niche author-focused; creator counts likely in thousands',
    revenueLabel: 'Not reliably disclosed (likely small vs peers)',
    revenueUsdMid: null,
    demandLabel: 'Author audiences (not centrally reported)',
    supplyLabel: 'Thousands of authors (est.)',
    demandScale: null,
    supplyScale: 5e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Author-focused supply; Aura Library for club engagement + library.',
  },
]

/**
 * @param {string} lensId
 */
export function getPlatformsForLens(lensId) {
  if (lensId === 'all') return PLATFORM_POOLS
  return PLATFORM_POOLS.filter((p) => p.lenses.includes(lensId))
}

/**
 * @param {string} lensId
 * @param {Map<string, { switchReason?: string, useWithReason?: string }> | Record<string, { switchReason?: string, useWithReason?: string }>} [conversationById]
 * Optional conversation map (usually from company DB / overrides) so Pro Forma stays sizing-focused.
 */
export function getNestedCompetitiveSquares(lensId, conversationById = {}) {
  const lookup =
    conversationById instanceof Map
      ? (id) => conversationById.get(id)
      : (id) => conversationById[id]
  const platforms = getPlatformsForLens(lensId).map((p) => {
    const tip = lookup(p.id) ?? {}
    return {
      ...p,
      switchReason: tip.switchReason ?? 'See Company Landscape',
      useWithReason: tip.useWithReason ?? tip.together ?? 'See Company Landscape',
    }
  })
  return COMPETITIVE_CATEGORIES.map((cat) => ({
    ...cat,
    platforms: platforms.filter((p) => p.categoryId === cat.id),
  })).filter((cat) => cat.platforms.length > 0)
}

export function getLensById(lensId) {
  return MARKET_LENSES.find((l) => l.id === lensId) ?? MARKET_LENSES[0]
}

/** Highest → lowest known revenue; undisclosed last. */
export function getPlatformsByRevenue() {
  const known = PLATFORM_POOLS.filter((p) => p.revenueUsdMid != null).sort(
    (a, b) => b.revenueUsdMid - a.revenueUsdMid,
  )
  const unknown = PLATFORM_POOLS.filter((p) => p.revenueUsdMid == null).sort((a, b) =>
    a.name.localeCompare(b.name),
  )
  return { known, unknown }
}

/**
 * Viewer-heavy consumer pools ranked by demand scale.
 * Creator-heavy monetization pools ranked by supply scale.
 */
export function getPlatformsBySide() {
  const viewerHeavy = PLATFORM_POOLS.filter((p) => p.sideBias === 'viewer-heavy').sort(
    (a, b) => (b.demandScale ?? 0) - (a.demandScale ?? 0),
  )
  const creatorHeavy = PLATFORM_POOLS.filter((p) => p.sideBias === 'creator-heavy').sort(
    (a, b) => (b.supplyScale ?? 0) - (a.supplyScale ?? 0),
  )
  const balanced = PLATFORM_POOLS.filter((p) => p.sideBias === 'balanced').sort((a, b) =>
    a.name.localeCompare(b.name),
  )
  return { viewerHeavy, creatorHeavy, balanced }
}

export function formatRevenueMid(usd) {
  if (usd == null) return 'Not disclosed'
  if (usd >= 1e9) return `$${(usd / 1e9).toFixed(2)}B`
  if (usd >= 1e6) return `$${(usd / 1e6).toFixed(1)}M`
  return `$${Math.round(usd).toLocaleString()}`
}
