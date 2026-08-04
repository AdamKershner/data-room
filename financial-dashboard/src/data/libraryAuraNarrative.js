/**
 * “Library vs virtual party” + unification + Aura discovery thesis.
 * Social / short-form + streaming = dopamine party.
 * Kahana = digital library with Aura (focus, clubs, community-governed discovery).
 */

export const LIBRARY_AURA_NARRATIVE = {
  title: 'The digital library with Aura',
  campusScene: `You are on campus and a friend texts asking if you want to pregame for the party. You went out last night, and the weekend before. You say thanks, but you are headed to the library.
Inside, it is quiet and warm. People are curled into chairs in comfortable hoodies, deep in their work, laptops and books open. Shelves rise around you holding more than you could read in a lifetime. The size of it makes you feel small in a good way. Surrounded by centuries of collected knowledge and other focused people, you become curious and open. You fall into the reading. Hours pass without your noticing. When you step outside into clear night air, ideas are connecting in your head and you feel better than when you walked in.`,
  partyContrast: `Instagram, TikTok, YouTube and Netflix are the virtual party. They are always there when you want a dopamine hit, and there is nothing wrong with a party. But eventually you graduate and lose your library card, or you move somewhere without a good public library.`,
  kahanaLine: `Kahana is the digital library with Aura: a place you can always go to fall into focus, feel productive, and be surrounded by other learners. We are building the room people deserve for thinking, learning, and becoming better.`,
  problemLine: `Everything in this charter serves that experience. A reader who searches and finds nothing does not get that feeling. That is the problem we are solving.`,
  opportunityLine: `Be the digital library with Aura that sits alongside the virtual party—where creators host book and video clubs instead of only posting into an endless feed, viewers become readers/learners in focused rooms, and content is demand-driven by clubs, not algorithmically sprayed.`,
}

/** Two product bets that organize the charter. */
export const KAHANA_BIG_BETS = [
  {
    id: 'unify',
    title: 'Unify fragmented consumption',
    summary:
      'Books, courses, short-form, long-form, series/films, newsletters, audio, and Creator Business in one digital library with Aura — one “library card” instead of many apps and subscriptions.',
  },
  {
    id: 'aura-signal',
    title: 'User-governed discovery (Aura)',
    summary:
      'Scarce, visible community endorsement drives Explore and search — not opaque engagement-maximizing feeds optimized for dopamine per minute.',
  },
]

/** Today’s fragmented stack a typical learner juggles. */
export const FRAGMENTATION_BUCKETS = [
  {
    id: 'video-short',
    label: 'Video / short-form',
    examples: 'TikTok, Instagram, YouTube, Twitch',
  },
  {
    id: 'shows-films',
    label: 'Shows / films',
    examples: 'Netflix, Hulu, Disney+, HBO Max, Prime Video',
  },
  {
    id: 'books-reading',
    label: 'Books / reading',
    examples: 'Kindle/Amazon, Wattpad, Goodreads, Apple Books, Google Play Books, Substack, Medium, Fable',
  },
  {
    id: 'courses',
    label: 'Courses',
    examples: 'Coursera, Udemy, Kajabi, Teachable, Thinkific, Domestika, Skool, Mighty Networks',
  },
  {
    id: 'newsletters-communities',
    label: 'Newsletters & communities',
    examples: 'Substack, Beehiiv, Ghost, Discord, Circle, Patreon, Ko-fi',
  },
  {
    id: 'audio-listening',
    label: 'Audio / listening',
    examples: 'Spotify, Apple Music, Amazon Music, YouTube Music, Apple Podcasts, Audible, Scribd',
  },
  {
    id: 'creator-monetization',
    label: 'Memberships',
    examples: 'Patreon, OnlyFans, Ko-fi, Buy Me a Coffee, Memberful',
  },
  {
    id: 'messaging-community',
    label: 'Community & Messaging',
    examples: 'Discord, Telegram, WhatsApp, Signal, Slack, Facebook Groups, Circle, Mighty Networks',
  },
  {
    id: 'online-storefront',
    label: 'Storefronts',
    examples: 'Linktree, Stan.store, Beacons, Pensight, HYpage, Podia',
  },
  {
    id: 'digital-marketplaces',
    label: 'Marketplaces',
    examples: 'Gumroad, Etsy, Shopify',
  },
]

export const FRAGMENTATION_COST =
  'Each has its own account, subscription, algorithm, and UX — and optimizes for its own engagement and monetization, not the user’s coherence or focus. That’s the virtual party: lots of rooms, lots of noise, lots of hopping, little continuity.'

export const UNIFYING_THESIS = {
  convenience:
    'It’s more convenient and cognitively healthy when books, essays, long-form videos, short clips, courses, and podcasts live in one place — without 7+ subscriptions, 5+ apps, and constant context-switching.',
  productImplications: [
    'Host multiple modalities: ebooks, articles, lecture videos, short clips, courses, audio (music, podcasts, audiobooks)',
    'Wrap them in clubs (book clubs, video clubs, course cohorts, newsletter clubs, listen-alongs)',
    'One account + subscription: a singular “library card” vs many',
  ],
}

/** Aura mechanism (community endorsement — not money, stars, or paid boost). */
export const AURA_MECHANICS = {
  oneLiner:
    'Aura is community endorsement for hubs (collections) and files (pieces) — not money or star ratings.',
  rules: [
    'Each user gets 5 Aura per day, reset at midnight UTC',
    'Give Aura to hubs and files (not profiles); you cannot self-Aura your own hubs/files',
    'Aura given to a file also adds +1 Aura to its hub; Aura given to a hub does not cascade down',
    'Aura persists until you remove it; daily reset only refreshes budget, not past endorsements',
    'Aura is signal on Explore and in search/ranking — not a paid boost or guaranteed top slot',
  ],
}

export const AURA_VS_OPAQUE = {
  partyAlgos:
    'TikTok / Instagram / Netflix rank with proprietary engagement signals (watch time, CTR, skips, replays, shares, paid promotion) — optimized for dopamine per minute and their revenue.',
  kahanaAura:
    'Kahana ranks with deliberate, scarce endorsements (5/day, no self-Aura) — optimized for what the community finds worth learning from, with Aura counts visible on hubs and files.',
  deckLine:
    'TikTok, Instagram, and Netflix are driven by private, engagement-maximizing algorithms. Kahana’s discovery engine is driven by Aura, a visible, scarce, community-given signal that surfaces work people genuinely think is worth learning from.',
}

/** Positioning vs ecosystem categories. */
export const POSITIONING_VS_ECOSYSTEM = [
  {
    id: 'social',
    versus: 'Social networks (Instagram, TikTok, YouTube)',
    contrast:
      'They are the party; Kahana is the library with club rooms. They optimize for-you feeds; we optimize for-learning experiences.',
  },
  {
    id: 'streaming',
    versus: 'Streaming (Netflix, Hulu, Max, Disney+, Prime Video)',
    contrast:
      'They host professionally produced entertainment; we host community-chosen learning and reading. Their discovery follows investment slate; ours follows Aura.',
  },
  {
    id: 'courses',
    versus: 'Course platforms (Udemy, Coursera, Kajabi, Teachable, Thinkific)',
    contrast:
      'They sell transactional enrollment; we host ongoing clubs and libraries where courses are one modality among books, videos, and discussion.',
  },
  {
    id: 'reading',
    versus: 'Reading / social (Wattpad, Goodreads, Fable, Substack, Beehiiv, Medium)',
    contrast:
      'They focus on specific forms (stories, reviews, essays, newsletters). Kahana is modality-agnostic, anchored in clubs + library, with Aura as the unifying discovery signal.',
  },
]

/** Crisp reusable narrative blocks. */
export const CRISP_NARRATIVE_COPY = {
  fragmentedToday:
    'To read, watch, listen, and learn, you bounce between Substack, YouTube, TikTok, Netflix, Spotify, Audible, Coursera, and a dozen niche apps. Every platform has its own login, subscription, and feed.',
  unifiedOnKahana:
    'Books, essays, courses, podcasts, music, audiobooks, and videos live in one digital library, organized into clubs. You don’t have to keep switching apps or stacking subscriptions.',
  auraPreservesQuality:
    'On Kahana, discovery isn’t controlled by a black-box engagement algo. Each person gets 5 Aura per day to give to hubs and files they truly find worth learning from. Aura powers the Kahana algorithm, so the content that rises has been deliberately endorsed by the community, not just optimized for watch time.',
}

/**
 * Modular argument skeleton for decks / docs / landing pages.
 * Expand each section later without changing the spine.
 */
export const ARGUMENT_SKELETON = {
  gap: {
    title: 'The gap: no unified “library with clubs”',
    statement:
      'There is no single place where a creator can host books + videos + newsletters + courses + audio + community, and a reader/learner can consume all of those in a focused, club-based environment.',
    punchline: 'Creators assemble a tech stack; consumers assemble a subscription stack.',
  },
  creatorsFragmented: {
    title: 'For creators (supply)',
    problem:
      'To build an audience and earn a living, creators are forced to spread themselves across many platforms.',
    stacks: [
      {
        label: 'Social / short-form video',
        items: 'TikTok · Instagram Reels · YouTube Shorts / YouTube',
      },
      {
        label: 'Written & newsletters',
        items: 'Substack / Beehiiv / Ghost · Medium · personal blog (WordPress / Squarespace)',
      },
      {
        label: 'Courses & education',
        items: 'Coursera, Udemy · Teachable, Kajabi, Thinkific, Podia',
      },
      {
        label: 'Digital products & books',
        items: 'Gumroad, Shopify, Etsy · Amazon KDP, Apple Books, Google Play Books, Draft2Digital',
      },
      {
        label: 'Links, membership & community',
        items:
          'Patreon, OnlyFans, Ko-fi · Linktree, Beacons, Stan.store, Pensight · Discord, Circle, Mighty Networks, Skool',
      },
      {
        label: 'Audio / listening',
        items: 'Spotify, Apple Music, Amazon Music, YouTube Music · Apple Podcasts · Audible, Scribd',
      },
    ],
    issues: [
      'Operational overhead — repurpose and maintain presence across 8–10+ tools',
      'Fragmented audience — followers and conversation scattered',
      'Inconsistent UX — different feeds, analytics, monetization rules',
      'No single “home” — books, videos, courses, audio, and community never truly live together',
    ],
  },
  consumersFragmented: {
    title: 'For consumers (demand)',
    problem:
      'To follow and learn from creators, consumers must subscribe to and juggle multiple services.',
    stacks: [
      {
        label: 'Entertainment / TV',
        items: 'Netflix, Hulu, Disney+, HBO Max, Prime Video',
      },
      {
        label: 'Short-form dopamine',
        items: 'TikTok, Instagram, YouTube',
      },
      {
        label: 'Learning & courses',
        items: 'Udemy, Coursera, Domestika, Kajabi / Teachable sites',
      },
      {
        label: 'Reading & newsletters',
        items: 'Substack, Beehiiv, Medium, traditional publishers (WSJ, NYT, …)',
      },
      {
        label: 'Books & ebooks',
        items: 'Kindle / Amazon, Apple Books, Google Play Books, Wattpad, Fable, Goodreads',
      },
      {
        label: 'Audio / listening',
        items: 'Spotify, Apple Music, podcasts, Audible / audiobooks',
      },
    ],
    issues: [
      'Subscription fatigue — many payments for slices of the same creator universe',
      'Context switching — constant app hopping; no single focused room',
      'Algorithmic noise — feeds optimized for engagement, not depth or quality',
    ],
  },
  creatorVp: {
    title: 'Kahana for creators',
    homeLine: 'A single home for all your content and your audience.',
    bullets: [
      'Host books, essays, newsletters, videos, courses, audio, and digital files in one library',
      'Organize into clubs and hubs — book clubs, video clubs, course cohorts, listen-alongs, study groups',
      'Monetize via hub/file access, club memberships, events, Q&A, and deep-dive sessions',
    ],
    beforePitch:
      '“Follow me on TikTok, subscribe on Substack, buy my ebook on Gumroad, join my course on Teachable, and chat in my Discord.”',
    afterPitch: '“Join me on Kahana. This is where we read, watch, learn, and discuss together.”',
  },
  consumerVp: {
    title: 'Kahana for consumers',
    homeLine: 'Your digital library with Aura — one account, one focused room.',
    modalities: [
      'Books and ebooks',
      'Long and short videos',
      'Series and films',
      'Courses and lectures',
      'Newsletters and essays',
      'Audio — music, podcasts, audiobooks',
      'Clubs and communities',
    ],
    insteadOf:
      'Netflix + Hulu + HBO + Prime + TikTok + Instagram + YouTube + Spotify + Audible + Substack + Udemy + Coursera',
    instead: 'Kahana — the place you go to fall into focus, feel productive, and be surrounded by other learners.',
  },
  algoContrast: {
    title: 'Aura vs black-box algorithms',
    todayTitle: 'How most algorithms work today',
    todayBullets: [
      'You don’t control what rises — you react to what the feed chooses',
      'Ranking driven by watch time, CTR, replays/skips, ad revenue, platform investment priorities',
      'User role in curating the ecosystem is minimal; private platform objectives dominate',
    ],
    kahanaTitle: 'How Aura works on Kahana',
    kahanaBullets: [
      'Community endorsement (not money or likes) with a scarce 5 Aura/day budget',
      'Cannot self-Aura; only others’ hubs and files',
      'Aura accumulates and powers Explore / search — visible and traceable',
      'High-Aura content is “canonized” by learners, not by a profit-maximizing feed',
    ],
    deckLine:
      'On TikTok, Instagram, YouTube, and Netflix, you watch whatever the private algorithm decides to show you. On Kahana, Aura lets you and the community decide what rises to the top. The algorithm is human-driven: only content that real people give Aura to becomes visible at scale.',
  },
  threeSlides: [
    {
      id: 'slide-1',
      title: 'Slide 1 — Fragmented today',
      creators:
        'Must publish on TikTok / IG / YouTube + newsletters + courses + ebooks + audio + memberships + communities. Audience scattered; operations heavy; experience fragmented.',
      consumers:
        'Juggle multiple subscriptions and apps (Netflix, Hulu, TikTok, Spotify, Audible, Substack, Udemy, …). Constant context-switching; feeds optimize for engagement, not growth.',
    },
    {
      id: 'slide-2',
      title: 'Slide 2 — Kahana: all-in-one library + clubs',
      body: 'One platform for books, videos, courses, newsletters, audio, digital products — plus book clubs, video clubs, listen-alongs, learning cohorts, and communities. One “library card” for focused consumption and shared learning.',
    },
    {
      id: 'slide-3',
      title: 'Slide 3 — Aura: human-driven discovery',
      bullets: [
        '5 Aura/day to endorse hubs/files you find noteworthy',
        'Cannot be self-given — pure community appreciation signal',
        'Surfaces high-Aura content, not just high-engagement content',
        'Learners curate the room — not ads',
      ],
    },
  ],
}

/**
 * Content-market fragments Kahana aims to unify.
 * Market sizes are directional ranges for strategy docs — refine per platform later.
 */
export const CONTENT_FRAGMENTS = [
  {
    id: 'ebook-reading',
    name: 'Ebook / reading',
    covers: 'Consumer ebooks, serialized web fiction, online reading communities, book clubs.',
    marketSizeLabel: 'USD 15–25B consumer; up to ~USD 50B incl. hardware & institutions',
    marketSizeLowUsd: 15e9,
    marketSizeHighUsd: 25e9,
    marketSizeExpandedUsd: 50.61e9,
    marketNote:
      'Statista/Mordor-type consumer ebook spend often ~$15–18B; wider ecosystem estimates up to ~$50.6B (2025).',
    players: [
      {
        tier: 'Retail & devices',
        names: 'Amazon (Kindle Store, Kindle Unlimited — ~67–83% U.S. ebook sales), Apple Books, Google Play Books, Kobo',
      },
      {
        tier: 'Social reading / clubs',
        names: 'Goodreads, Fable, Wattpad, Royal Road, Inkitt, Tapas, Radish',
      },
      {
        tier: 'Distribution & aggregators',
        names: 'Draft2Digital, Smashwords, IngramSpark, PublishDrive',
      },
    ],
    kahanaAngle:
      'Phase 1: book clubs as the natural wedge — demand-driven title outreach (“we have a group ready to read [Title]”), then unify ebooks with course and YouTube video groups in one Aura-driven learning library.',
  },
  {
    id: 'short-form-video',
    name: 'Short-form video',
    covers: 'Brief, feed-based videos (seconds to a few minutes) — TikTok, Reels, Shorts, etc.',
    marketSizeLabel: 'USD 50–60B today → USD 130B+ by 2030s',
    marketSizeLowUsd: 53.5e9,
    marketSizeHighUsd: 60e9,
    marketSizeExpandedUsd: 132.9e9,
    marketNote:
      'Short video platforms ~$53.5–53.7B (2025), NA ~37.6%; projected ~$132.9B by 2035; ~14.8% CAGR (2026–2033) in some analyses.',
    players: [
      {
        tier: 'Core feeds',
        names: 'TikTok (~1.9–2.0B MAUs), Instagram Reels (~3B MAUs), YouTube Shorts (part of 2.58B MAUs)',
      },
      {
        tier: 'Smaller',
        names: 'Snapchat, Triller, and peers',
      },
    ],
    kahanaAngle:
      'Phase 4 later: short-form as GTM channel and in-hub prompts (clip → join Kahana club), not a feed to replace. Core experience stays deep clubs.',
  },
  {
    id: 'long-form-video',
    name: 'Long-form video (creator / open platforms)',
    covers:
      'Creator and UGC long-form online video — essays, tutorials, vlogs, live+VOD on YouTube-class / open or semi-open platforms (not Shorts, not SVOD series/films catalogs).',
    marketSizeLabel: 'USD ~35–50B directional (YouTube-dominated long-form / online video ads)',
    marketSizeLowUsd: 35e9,
    marketSizeHighUsd: 50e9,
    marketSizeExpandedUsd: null,
    marketNote:
      'Separate from OTT/SVOD streaming TAM (series/films). YouTube ad revenue is the anchor; long-form vs Shorts split is a directional proxy. Kahana Phase 1 attack = embed public YouTube into video groups (iframe), not rehost. Vimeo, Nebula, Twitch, Rumble, CuriosityStream are smaller / adjacent.',
    players: [
      {
        tier: 'Creator long-form',
        names: 'YouTube (standard videos, ~2.58B MAUs), Vimeo',
      },
      {
        tier: 'Adjacent',
        names: 'Nebula, CuriosityStream, Twitch, Rumble',
      },
    ],
    kahanaAngle:
      'Phase 1 wedge: YouTube-powered video groups via Add YouTube — store embed URL (youtube.com/embed/…), play in iframe; no file copy onto Kahana. Creators keep YouTube views, watch time, and ad monetization (subject to YouTube). Same club pattern as book clubs (watch by date → discuss → Aura). Raw mp4 upload is a separate path and does not pass plays back to YouTube.',
  },
  {
    id: 'series-films-streaming',
    name: 'Series / films (streaming)',
    covers: 'TV shows, movies, and licensed catalogs on SVOD / OTT apps — Netflix, Disney+, Max, etc.',
    marketSizeLabel: 'USD 130–160B today → ~USD 400B by 2030 → ~USD 800B+ mid-2030s',
    marketSizeLowUsd: 129.3e9,
    marketSizeHighUsd: 159.9e9,
    marketSizeExpandedUsd: 416.8e9,
    marketNote:
      'OTT/streaming ~$129–160B (2024–25); projections ~$417B by 2030 and ~$866–873B by 2034–35; CAGR roughly 18–20%. Excludes YouTube long-form creator video.',
    players: [
      {
        tier: 'Subscription streaming',
        names:
          'Netflix (~325M), Prime Video (~167–200M), Disney+ (~131.6M), Max (~126–140M), Hulu (~54–64M), Crunchyroll (tens of millions)',
      },
    ],
    kahanaAngle:
      'Series and films as club watch-alongs and library titles next to books — not a replacement for Netflix, a focused room around shared viewing.',
  },
  {
    id: 'courses-learning',
    name: 'Courses / learning',
    covers: 'Professional and consumer e-learning, creator-owned courses, cohorts.',
    marketSizeLabel: 'Tens of billions+ (platform revenues in hundreds of $M each; broader e-learning often quoted in hundreds of $B by scope)',
    marketSizeLowUsd: null,
    marketSizeHighUsd: null,
    marketSizeExpandedUsd: null,
    marketNote:
      'Coursera ~$757.5M (2025); Udemy ~$786.6M (2024). Broader e-learning market quotes vary widely by scope; creator LMS stack is a multi-billion subfragment.',
    players: [
      {
        tier: 'MOOCs / open platforms',
        names: 'Coursera, Udemy, edX, Domestika',
      },
      {
        tier: 'Creator-owned',
        names: 'Kajabi, Teachable, Thinkific, Podia, Skool, Mighty Networks, Disco, Maven',
      },
    ],
    kahanaAngle:
      'Phase 1 alongside ebooks: course clubs = structured long-form video + reading + discussion. Same hub mechanics; multi-modal learning clubs (book + course + YouTube lecture).',
  },
  {
    id: 'newsletters-written',
    name: 'Newsletters / essays / written',
    covers: 'Creator newsletters, essays, blogging, digital news subscriptions.',
    marketSizeLabel: 'Tens of billions across newsletters + digital news (indicative)',
    marketSizeLowUsd: null,
    marketSizeHighUsd: null,
    marketSizeExpandedUsd: null,
    marketNote:
      'Creator-first slice: Substack writer gross ~$450M (2025), platform ~$45M; Medium/Ghost/Beehiiv smaller but meaningful. Traditional news digital subs (WSJ/NYT/FT/Economist) are an adjacent multi-billion slice of the same written fragment.',
    players: [
      {
        tier: 'Creator-first',
        names: 'Substack, Beehiiv, Ghost, Medium, personal blogs',
      },
      {
        tier: 'Institutional / news',
        names: 'WSJ, NYT, FT, The Economist online subscriptions',
      },
    ],
    kahanaAngle:
      'Newsletters and essays as files in hubs — read inside clubs, with Aura as a cross-content quality signal.',
  },
  {
    id: 'audio-listening',
    name: 'Audio / listening',
    covers:
      'Streaming music, podcasts, audiobooks, and other spoken-word audio (lectures, talks).',
    marketSizeLabel:
      'USD 50–60B today (music + podcasts slice) → USD 200B+ by early 2030s (directional)',
    marketSizeLowUsd: 50e9,
    marketSizeHighUsd: 60e9,
    marketSizeExpandedUsd: 200e9,
    marketNote:
      'Audio streaming (music + spoken word) ~$46.9–54.5B (2025–26) → ~$104–116B by early 2030s. Podcasting reports vary widely (~$10–41B today depending on scope) with high teens–high 20s% CAGR; some project $130–220B+ by 2030–33. Kahana summary: overlapping audio fragment ~$50–60B today → $200B+ early 2030s. Audiobooks (Audible et al.) sit inside / adjacent.',
    players: [
      {
        tier: 'Streaming music',
        names: 'Spotify, Apple Music, Amazon Music, YouTube Music, Deezer',
      },
      {
        tier: 'Podcasts',
        names: 'Spotify / Anchor, Apple Podcasts, YouTube, Megaphone, Libsyn, Simplecast',
      },
      {
        tier: 'Audiobooks',
        names: 'Audible (Amazon), Apple Books, Google Play Books, Scribd',
      },
    ],
    kahanaAngle:
      'Audio as another library modality in clubs — listen to the book, the lecture, or the podcast in the same hub as the ebook and video, with Aura as the quality signal across formats.',
  },
  {
    id: 'creator-monetization',
    name: 'Memberships & fan support',
    covers:
      'Memberships, tips, and fan subscriptions — the paywall / ongoing-support layer creators use to monetize access.',
    marketSizeLabel:
      'USD ~2–6B directional (platform rev across memberships / tips; creator GMV much larger)',
    marketSizeLowUsd: 2e9,
    marketSizeHighUsd: 6e9,
    marketSizeExpandedUsd: null,
    marketNote:
      'Platform take is far smaller than creator GMV (e.g. Patreon creator payouts ~$2B/yr vs platform tens of $M; OnlyFans platform >$1B). Storefronts / link-in-bio live under Storefronts; chat & community homes live under Community & Messaging.',
    players: [
      {
        tier: 'Memberships / tips',
        names: 'Patreon, OnlyFans, Ko-fi, Buy Me a Coffee, Memberful',
      },
    ],
    kahanaAngle:
      'Membership destination for clubs / hubs / libraries — or unlock Kahana via Patreon / OnlyFans tiers while billing stays elsewhere.',
  },
  {
    id: 'messaging-community',
    name: 'Community & Messaging',
    covers:
      'Chat-first tools and structured community platforms creators use to host groups — Discord, Telegram, WhatsApp, Circle, Mighty Networks, and peers.',
    marketSizeLabel:
      'USD ~8–20B directional (messaging / community platform commercial slice; MAU far larger)',
    marketSizeLowUsd: 8e9,
    marketSizeHighUsd: 20e9,
    marketSizeExpandedUsd: null,
    marketNote:
      'Discord ~$561M (2025 dir.); WhatsApp/Telegram/Slack monetize differently (ads, Business API, seats). Fragment mid is a directional commercial slice for map visibility — not full consumer-messaging TAM.',
    players: [
      {
        tier: 'Chat-first / communities',
        names: 'Discord, Telegram, WhatsApp, Signal, Slack, Facebook Groups, GroupMe',
      },
      {
        tier: 'Structured / all-in-one community',
        names: 'Circle, Mighty Networks, Guild, Hivebrite, Disciple, Bettermode',
      },
    ],
    kahanaAngle:
      'Where the group hangs out — Kahana is clubs + libraries, not general chat. Integrate with Discord / Telegram / Slack for notifications; keep deep learning on Kahana.',
  },
  {
    id: 'online-storefront',
    name: 'Storefronts & link-in-bio',
    covers:
      'Creator-owned link-in-bio hubs and personal digital storefronts — Stan, Beacons, Linktree, Pensight, HYpage, Podia. Not multi-seller marketplaces.',
    marketSizeLabel:
      'USD ~0.5–2B directional (platform rev across link-in-bio + personal storefronts; GMV larger)',
    marketSizeLowUsd: 0.5e9,
    marketSizeHighUsd: 2e9,
    marketSizeExpandedUsd: null,
    marketNote:
      'Platform ARR is often tens of $M (Linktree ~$37M). Multi-seller marketplaces (Gumroad, Etsy, Shopify) live under Marketplaces. Course LMS checkout primarily sits in Courses.',
    players: [
      {
        tier: 'Link-in-bio / personal storefront',
        names: 'Linktree, Beacons, Pensight, Stan.store, HYpage, Podia',
      },
    ],
    kahanaAngle:
      'Put Kahana behind the bio — “Join my Kahana club” as the destination, not another checkout page.',
  },
  {
    id: 'digital-marketplaces',
    name: 'Marketplaces',
    covers:
      'Multi-seller marketplaces and commerce platforms where buyers browse and find products — Gumroad, Etsy, Shopify (and peers).',
    marketSizeLabel:
      'USD ~5–20B directional (creator / digital-product commerce slice; full Etsy/Shopify GMV far larger)',
    marketSizeLowUsd: 5e9,
    marketSizeHighUsd: 20e9,
    marketSizeExpandedUsd: null,
    marketNote:
      'Etsy and Shopify are multi-billion platforms; map mid is a directional creator/digital slice so the category is visible — not full retail GMV. Gumroad ~$24M ARR is smaller but sits in the same “browse & buy from many sellers” pattern.',
    players: [
      {
        tier: 'Digital / creator marketplaces',
        names: 'Gumroad, Etsy (digital), Shopify (digital / creator commerce)',
      },
    ],
    kahanaAngle:
      'Discovery and checkout stay on the marketplace — Kahana is the club + library layer after purchase (or a linked destination), not a replacement browse feed.',
  },
]

export const UNIFY_FRAGMENTS_THESIS =
  'Kahana’s thesis is to unify content modalities—ebooks, short-form video, long-form video, series/films, courses, newsletters, audio—into a single digital library with clubs, governed by Aura. Creators publish on content & audience platforms, host groups on community & messaging tools, and monetize via memberships and storefronts; Kahana sits between content and community as the club + library home, with Aura as the discovery signal.'

export const UNIFY_FRAGMENTS_DECK_LINES = [
  'The ebook fragment is a USD 15–25B consumer market dominated by Amazon, Goodreads, Wattpad, and Fable.',
  'The short-form video fragment is a USD 50–60B market dominated by TikTok, Instagram, and YouTube Shorts.',
  'The long-form video fragment is a ~USD 35–50B directional market dominated by YouTube (standard videos), with Vimeo and niche peers.',
  'The series/films streaming fragment is a USD 130–160B market dominated by Netflix, Hulu, Max, Disney+, and Prime Video.',
  'The courses/learning and newsletters/written fragments add tens of billions more across Coursera, Udemy, Substack, Medium, Kajabi, Teachable, etc.',
  'The audio fragment—streaming music plus podcasts (plus audiobooks)—is a USD 50–60B market today, growing toward USD 200B+ by the early 2030s (Spotify, Apple, Amazon, YouTube, Audible).',
  'Memberships & fan support (Patreon, OnlyFans, Ko-fi, etc.) is the paywall / ongoing-support layer — often complementary to Kahana.',
  'Community & Messaging (Discord, Telegram, WhatsApp, Circle, Mighty Networks, etc.) is where groups hang out — Kahana is clubs + libraries beside chat.',
  'Storefronts (Linktree, Stan, Beacons, Pensight, HYpage, etc.) are the creator-owned bio / personal checkout layer — Kahana is the destination behind the link.',
  'Marketplaces (Gumroad, Etsy, Shopify, etc.) are where buyers browse and find products from many sellers — Kahana sits after purchase as clubs + library, not a browse replacement.',
]

/**
 * @typedef {object} PartyPlatform
 * @property {string} id
 * @property {string} name
 * @property {'social-short'|'streaming'} tier
 * @property {string} demandLabel
 * @property {string} supplyLabel
 * @property {number|null} demandScale
 * @property {string} [revenueLabel]
 * @property {string} note
 */

/** @type {PartyPlatform[]} */
export const VIRTUAL_PARTY_SOCIAL = [
  {
    id: 'instagram',
    name: 'Instagram',
    tier: 'social-short',
    demandLabel: '≈3B MAUs (Q3 2025)',
    supplyLabel: 'Tens of millions of posting/creator accounts (Reels, Stories)',
    demandScale: 3e9,
    note: 'Primarily viewers scrolling; creator tools layered on top.',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    tier: 'social-short',
    demandLabel: '≈2.58B MAUs; ~2B Shorts MAUs',
    supplyLabel: '50M+ channels; millions of active uploaders',
    demandScale: 2.58e9,
    note: 'Most users are consumers first; top creators drive massive reach.',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    tier: 'social-short',
    demandLabel: '≈1.9–2.0B MAUs (~23% of world population)',
    supplyLabel: 'Hundreds of millions posting; elite 10k+ follower subset drives most views',
    demandScale: 1.95e9,
    note: 'Always-on short-form feed — core “virtual party” dopamine loop.',
  },
]

/** @type {PartyPlatform[]} */
export const VIRTUAL_PARTY_STREAMING = [
  {
    id: 'netflix',
    name: 'Netflix',
    tier: 'streaming',
    demandLabel: '≈325M paid subscribers (2025–2026)',
    supplyLabel: 'Studios + Netflix Originals (professional production)',
    demandScale: 325e6,
    revenueLabel: '≈$45.2B (2025); ARPU ≈$11.70/mo global',
    note: 'Lean-back binge entertainment — not built for focus or learning clubs.',
  },
  {
    id: 'prime-video',
    name: 'Amazon Prime Video',
    tier: 'streaming',
    demandLabel: '≈167M subscribers (2025); some reports ≈200M+ incl. bundled Prime',
    supplyLabel: 'Amazon Studios + licensed content',
    demandScale: 180e6,
    note: 'Prime-bundled and standalone viewers.',
  },
  {
    id: 'disney-plus',
    name: 'Disney+',
    tier: 'streaming',
    demandLabel: '≈131.6M paid subscribers (late 2025)',
    supplyLabel: 'Disney / franchise studios and networks',
    demandScale: 131.6e6,
    note: 'Earlier forecasts toward ~223M tempered; still nine-figure subscriber base.',
  },
  {
    id: 'max',
    name: 'HBO / Max',
    tier: 'streaming',
    demandLabel: '≈126–140M global subscribers (targets ~150M)',
    supplyLabel: 'HBO / Warner professional slate',
    demandScale: 133e6,
    note: 'Premium lean-back catalog.',
  },
  {
    id: 'hulu',
    name: 'Hulu',
    tier: 'streaming',
    demandLabel: '≈54–64M paid subscribers (U.S., late 2025)',
    supplyLabel: 'Networks + Hulu Originals',
    demandScale: 59e6,
    note: 'U.S.-weighted streaming demand.',
  },
]

export function getVirtualPartySocialByDemand() {
  return [...VIRTUAL_PARTY_SOCIAL].sort((a, b) => (b.demandScale ?? 0) - (a.demandScale ?? 0))
}

export function getVirtualPartyStreamingByDemand() {
  return [...VIRTUAL_PARTY_STREAMING].sort((a, b) => (b.demandScale ?? 0) - (a.demandScale ?? 0))
}

export function formatPartyScale(n) {
  if (n == null) return '—'
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`
  return new Intl.NumberFormat('en-US').format(n)
}
