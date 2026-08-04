/**
 * Adjacent platforms for Kahana Clubs + library GTM.
 * Nested by category; filterable by market lens; ranked by revenue and by
 * creators (supply) vs viewers (demand). Excludes Canva / Figma.
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
 * @property {string} switchReason
 * @property {string} useWithReason
 */

export const COMPETITIVE_CATEGORIES = [
  {
    id: 'story-reading',
    name: 'Story / writing / reading',
    blurb: 'Social reading, writing communities, and book discovery.',
  },
  {
    id: 'creator-monetization',
    name: 'Creator Business',
    blurb: 'Paid memberships, tips, and digital product storefronts.',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-bio + commerce',
    blurb: 'Bio link hubs and lightweight creator commerce.',
  },
  {
    id: 'course-knowledge',
    name: 'Course / knowledge',
    blurb: 'Online courses, cohorts, and learning marketplaces.',
  },
  {
    id: 'community',
    name: 'Community / communication',
    blurb: 'Group chat and branded community homes.',
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
      'Creators monetizing community access — Clubs as the consumption ritual; Kahana hub as the paid library.',
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
    switchReason:
      'Move from serial scroll discovery to intentional Book Clubs with shared lists and monthly discussion.',
    useWithReason:
      'Keep Wattpad for serial discovery; use Kahana when a title becomes a group read.',
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
    switchReason:
      'Writers who want audiences to read/watch together host Clubs on Kahana as the engagement layer.',
    useWithReason:
      'Keep Substack for delivery/monetization; deep-link Clubs for each issue’s group discussion.',
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
    kahanaAngle: 'Reader graph for book clubs; Kahana as action layer for real clubs around shelves.',
    switchReason:
      'Replace shelf-only tracking with live Book Clubs, then demand-source titles onto Kahana.',
    useWithReason:
      'Keep Goodreads for ratings/shelves; run the club loop and paid access on Kahana.',
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
    switchReason:
      'Essay audiences that want structured group reading use Kahana Clubs instead of one-off comments.',
    useWithReason:
      'Publish on Medium; host recurring reading Clubs and hubs on Kahana.',
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
      'Creators already monetize; Kahana adds structured reading/video clubs as new offerings.',
    switchReason:
      'Creators who want patrons in a shared Book/Video Club ritual center Kahana as club + library.',
    useWithReason:
      'Keep Patreon for billing; grant patrons Kahana Clubs/hubs as the benefit.',
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
      'Highly monetized creator↔fan relationships; Kahana for club-style / non-adult knowledge communities.',
    switchReason:
      'Creators seeking discussion-first communities use Kahana’s library + Clubs as a cleaner social home.',
    useWithReason:
      'Keep OF for one channel; host curated Clubs/libraries on Kahana for branded group experiences.',
  },
  {
    id: 'gumroad',
    name: 'Gumroad',
    categoryId: 'creator-monetization',
    lenses: ['link-in-bio', 'video-course', 'membership'],
    usersLabel: '~27k storefronts; 46k creators earned (2020); GMV $142M (2020)',
    revenueLabel: '~$23.8M ARR (2024); ~10% of GMV',
    revenueUsdMid: 23.8e6,
    demandLabel: 'Hundreds of thousands–millions of buyers (MAU not precise)',
    supplyLabel: 'Tens of thousands of creators; ~27k stores',
    demandScale: 1e6,
    supplyScale: 27e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Digital product / ebook creators host clubs around Gumroad content on Kahana.',
    switchReason:
      'Move from one-off file delivery to Clubs that read/watch together and drive repeat demand.',
    useWithReason:
      'Keep Gumroad checkout if needed; fulfill into Kahana hubs/Clubs.',
  },
  {
    id: 'linktree',
    name: 'Linktree',
    categoryId: 'link-in-bio',
    lenses: ['link-in-bio'],
    usersLabel: '50M+ users (largely creators/influencers/brands)',
    revenueLabel: '~$37M revenue (2023)',
    revenueUsdMid: 37e6,
    demandLabel: 'Link clickers (hundreds of millions) — not registered viewers',
    supplyLabel: '~50M users, mostly creators/brands',
    demandScale: null,
    supplyScale: 50e6,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Supply-side heavy — Kahana as destination in the link-in-bio stack.',
    switchReason:
      'Make Clubs + Public Library the primary bio destination instead of a menu of links.',
    useWithReason:
      'Keep Linktree as router; feature Kahana Clubs/library as #1 engagement link.',
  },
  {
    id: 'beacons',
    name: 'Beacons',
    categoryId: 'link-in-bio',
    lenses: ['link-in-bio', 'membership'],
    usersLabel: 'Likely hundreds of thousands of creators (sparse public stats)',
    revenueLabel: 'Low single-digit millions ARR (est.)',
    revenueUsdMid: null,
    demandLabel: 'Creator audiences (not centrally reported)',
    supplyLabel: 'Hundreds of thousands of creators (est.)',
    demandScale: null,
    supplyScale: 200e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Supply-side tool; Kahana = club engagement/demand layer.',
    switchReason:
      'Creators who outgrow link menus need a durable club + library product.',
    useWithReason:
      'Use Beacons for bio/commerce; deep-link Clubs for recurring community.',
  },
  {
    id: 'stan-store',
    name: 'Stan.store',
    categoryId: 'link-in-bio',
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
    switchReason:
      'Add Video/Book Clubs so purchases become cohort experiences, not file drops.',
    useWithReason:
      'Sell via Stan; deliver access into Kahana Clubs/hubs.',
  },
  {
    id: 'pensight',
    name: 'Pensight',
    categoryId: 'link-in-bio',
    lenses: ['link-in-bio', 'membership'],
    usersLabel: 'Solo creators (sparse public stats)',
    revenueLabel: 'Low single-digit millions ARR (est.)',
    revenueUsdMid: null,
    demandLabel: 'Creator audiences (not centrally reported)',
    supplyLabel: 'Solo creators',
    demandScale: null,
    supplyScale: 100e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Kahana as club/library destination behind the bio.',
    switchReason:
      'Same wedge as other link-in-bio stacks: Kahana as engagement OS.',
    useWithReason:
      'Keep Pensight for storefront; Clubs for retention and DDA sourcing.',
  },
  {
    id: 'podia',
    name: 'Podia',
    categoryId: 'link-in-bio',
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
    switchReason:
      'Use Kahana Video Clubs for cohort watch/discuss and demand-signaled content.',
    useWithReason:
      'Host courses on Podia; run club cohorts on Kahana.',
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
    switchReason:
      'Run Video Clubs on Kahana as the learning ritual, not only LMS modules.',
    useWithReason:
      'Keep Kajabi for course ops/billing; Kahana for club discussion + DDA titles.',
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
    switchReason:
      'Structured Video Clubs beat solitary course completion for retention.',
    useWithReason:
      'Teachable for delivery; Kahana Clubs for cohort accountability.',
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
    switchReason:
      'Private friend/team clubs around a course topic instead of marketplace-only browsing.',
    useWithReason:
      'Discover/buy on Udemy; form a Video Club on Kahana to watch and discuss.',
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
    switchReason:
      'Learning cohorts that want club cadence + shared library use Kahana as social layer.',
    useWithReason:
      'Complete Coursera credentials; parallel Kahana Clubs for peer discussion.',
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
    switchReason:
      'Book/film club servers move reading/watching loop into Kahana (lists, titles, library).',
    useWithReason:
      'Keep Discord for chat; Kahana for titles, DDA uploads, Public Library.',
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
    kahanaAngle: 'Ready-made communities; Kahana as reading/video club plugin.',
    switchReason:
      'Hosts who need library + club consumption (not only posts) prefer Kahana hubs + Clubs.',
    useWithReason:
      'Circle for feed/events; Kahana for Book/Video Clubs and monetized content.',
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
    kahanaAngle: 'Cohort classroom on Skool; library shelf + Aura + Clubs on Kahana — use both.',
    switchReason: 'Optional if the host wants a public library-first home.',
    useWithReason: 'Host cohort on Skool; put materials on Kahana; link classroom ↔ Club.',
  },
  {
    id: 'fable',
    name: 'Fable',
    categoryId: 'story-reading',
    lenses: ['book-social'],
    usersLabel: 'Social reading clubs (scale not fully public)',
    revenueLabel: 'Consumer social reading; not a primary Kahana revenue peer',
    revenueUsdMid: null,
    demandLabel: 'Readers in social book clubs',
    supplyLabel: 'Authors/titles via publisher/Amazon ecosystem',
    demandScale: null,
    supplyScale: null,
    sideBias: 'viewer-heavy',
    kahanaAngle:
      'If you like Fable, you might also love Kahana for book clubs — library shelf + Aura + multi-format.',
    switchReason: 'N/A — tandem; they rhyme.',
    useWithReason: 'Keep Fable for bookish social energy; run Kahana Book Clubs with library materials.',
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
    kahanaAngle: 'Course ops on Thinkific; discovery + Clubs on Kahana — dual-list.',
    switchReason: 'Optional library-first teachers.',
    useWithReason: 'Build on Thinkific; list course + Club on Kahana for exposure and discussion.',
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
    kahanaAngle: 'Listen on Spotify; organize listen-along Clubs and companion materials on Kahana.',
    switchReason: 'N/A — tandem listening + Clubs.',
    useWithReason: 'Pin episodes in Kahana Clubs; cross-link profiles and show notes.',
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
    kahanaAngle: 'Listen on Audible; meet the Book Club on Kahana; ebook when boarded.',
    switchReason: 'N/A — dual-format tandem.',
    useWithReason: 'Some members Audible, some Kahana ebook; discuss on Kahana; wishlist boarding.',
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
    switchReason:
      'Newsletters that want readers in Clubs center Kahana for retention.',
    useWithReason:
      'Send via Beehiiv; deep-link each edition into a Kahana Club + hub.',
  },
  {
    id: 'etsy-ebooks',
    name: 'Etsy (ebooks niche)',
    categoryId: 'creator-monetization',
    lenses: ['link-in-bio', 'membership'],
    usersLabel: '90–96M active buyers overall; ebooks = subset of sellers',
    revenueLabel: 'Multi-billion company; ebook niche not broken out (digital +22% last reported year)',
    revenueUsdMid: null,
    demandLabel: '90–96M active buyers (marketplace overall)',
    supplyLabel: 'Hundreds of thousands of sellers; ebooks a subset',
    demandScale: 93e6,
    supplyScale: 200e3,
    sideBias: 'viewer-heavy',
    kahanaAngle: 'Ebook sellers bring catalog into structured clubs on Kahana.',
    switchReason:
      'Move flagship titles to Kahana for club-driven demand and recurring group reads.',
    useWithReason:
      'Keep Etsy for craft/impulse; fulfill flagship titles into Kahana Clubs.',
  },
  {
    id: 'curios',
    name: 'Curios',
    categoryId: 'link-in-bio',
    lenses: ['link-in-bio', 'book-social', 'membership'],
    usersLabel: 'Niche author-focused; creator counts likely in thousands',
    revenueLabel: 'Not reliably disclosed (likely small vs peers)',
    revenueUsdMid: null,
    demandLabel: 'Author audiences (not centrally reported)',
    supplyLabel: 'Thousands of authors (est.)',
    demandScale: null,
    supplyScale: 5e3,
    sideBias: 'creator-heavy',
    kahanaAngle: 'Author-focused supply; Kahana for club engagement + library.',
    switchReason:
      'Authors who want live Book Clubs and demand-driven uploads use Kahana as the engagement home.',
    useWithReason:
      'Keep Curios for author tooling if needed; run clubs and sales on Kahana.',
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
 */
export function getNestedCompetitiveSquares(lensId) {
  const platforms = getPlatformsForLens(lensId)
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
