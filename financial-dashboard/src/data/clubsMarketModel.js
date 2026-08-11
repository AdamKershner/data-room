/**
 * Clubs GTM — market benchmarks + seed → invite → organizer growth engine.
 * Revenue conversion intentionally deferred (hostGrowthConversion stays null).
 */

export const CLUBS_MARKET = {
  usAdultsInBookClubs: 13_000_000,
  /** BookBrowse ~5%; NEA / derivative analyses often cite 6–7% of U.S. adults. */
  usAdultPenetrationLow: 0.05,
  usAdultPenetrationHigh: 0.07,
  usAdultPenetrationApprox: 0.05,
  /** Earlier / alternate participation estimates. */
  usMembersEarlierLow: 5_000_000,
  usMembersEarlierHigh: 10_000_000,
  globalParticipantsLow: 20_000_000,
  globalParticipantsHigh: 30_000_000,
  /** Club-count range cited externally (Jacobsohn ~500k; broader informal/digital “5M+”). */
  usClubsLow: 500_000,
  usClubsHigh: 5_000_000,
  globalParticipantsMidpoint: 25_000_000,
  globalBookClubsMarket2024Usd: 1.85e9,
  globalBookClubsMarketAltUsd: 1.2e9,
  northAmericaShareOfBookClubs: 0.37,
  northAmericaShareAlt: 0.385,
  europeShareOfBookClubs: 0.3,
  altBookClubsMarket2025Usd: 1.2e9,
  altBookClubsCagr: 0.048,
  onlineBookServices2025Usd: 24.75e9,
  onlineBookServices2030Usd: 32.45e9,
  onlineBookServicesCagr: 0.056,
  socialReading2025Usd: 6.2e9,
  socialReading2034Usd: 14.8e9,
  socialReadingCagr: 0.102,
  /** Video-adjacent infrastructure (not Netflix-scale — engagement layer only). */
  onlineVideoPlatforms2024Usd: 12.05e9,
  onlineVideoPlatforms2032Usd: 49.12e9,
  onlineVideoPlatformsCagr: 0.193,
  videoStreaming2024Usd: 129.3e9,
  shortVideo2025Usd: 53.7e9,
  shortVideo2035Usd: 132.9e9,
  socialVideoAds2025Usd: 31.3e9,
  eventbriteBookClubListingsGrowth4yr: 3.5,
  eventbriteUkAttendees: 127_000,
  fictionPrimaryShare: 0.7,
  someNonfictionShare: 0.93,
  meetingCadence: 'Most private clubs meet monthly (some bi/quarterly)',
  typicalClubSizeRange: [8, 12],
  recommendedDiscussionSizeRange: [4, 8],
  externalSummary:
    'There are an estimated 500k–5M book clubs in the U.S. and ~13M adults who participate in them, with typical club sizes around 10 members.',
  sourcesNote:
    'U.S. participation from BookBrowse (~13M / ~5%) and NEA/SPPA-derived analyses (often 6–7% of adults); club counts Jacobsohn ~500k through broader informal/digital estimates (5M+); book-club / social-reading / video platform market sizes from industry reports. TAM/SAM/SOM are directional.',
}

/**
 * Directional TAM / SAM / SOM for Clubs (book + video).
 * Revenue figures in USD; SOM share of SAM over ~5–10 year horizon.
 */
export const CLUBS_MARKET_SIZING = {
  book: {
    label: 'Book / reading clubs',
    tamLowUsd: 7e9,
    tamHighUsd: 8e9,
    tamNote:
      'Global book clubs market ($1.2–1.85B) + social reading platforms ($6.2B) ≈ $7–8B if Aura Library were the dominant club + social-reading layer.',
    userTamLow: 20_000_000,
    userTamHigh: 30_000_000,
    userTamNote:
      'Global club participants today (U.S. ~13M at 5–7% adults; similar penetration in other developed markets) plus larger social-reader halo.',
    samLowUsd: 4.1e9,
    samHighUsd: 4.4e9,
    samNote:
      'English-speaking / reachable: NA book-club revenue ≈$0.46–0.68B + ~60% of social reading ($3.7B) → ~$4.1–4.4B.',
    somScenarios: [
      { id: 'book-cons', name: 'Conservative', shareOfSam: 0.001, horizon: '5–7 yr' },
      { id: 'book-mod', name: 'Moderate', shareOfSam: 0.005, horizon: '5–7 yr', isBase: true },
      { id: 'book-agg', name: 'Aggressive', shareOfSam: 0.01, horizon: '5–7 yr' },
    ],
  },
  video: {
    label: 'Video / watching clubs',
    tamLowUsd: 6e9,
    tamHighUsd: 13e9,
    tamNote:
      'Engagement/club layer: 10–20% of (online video platforms $12.05B + short video $53.7B ≈ $65.75B) → ~$6.6–13.2B. Not full streaming ($129B+) or ad stacks.',
    samLowUsd: 2e9,
    samHighUsd: 5e9,
    samNote:
      '~30–40% of TAM_video for English-speaking creators/communities (watch parties, film clubs, learning cohorts).',
    somScenarios: [
      { id: 'vid-cons', name: 'Conservative', shareOfSam: 0.001, horizon: '5–10 yr' },
      { id: 'vid-mod', name: 'Moderate', shareOfSam: 0.005, horizon: '5–10 yr', isBase: true },
      { id: 'vid-agg', name: 'Aggressive', shareOfSam: 0.01, horizon: '5–10 yr' },
    ],
  },
  combined: {
    label: 'Book + video clubs (combined)',
    tamLowUsd: 13e9,
    tamHighUsd: 21e9,
    samLowUsd: 6e9,
    samHighUsd: 9e9,
    somShareLow: 0.001,
    somShareHigh: 0.01,
    somNote: '0.1–1% of SAM_combined over 5–10 years → ~$6–90M/year.',
  },
}

function mid(low, high) {
  return (low + high) / 2
}

function formatUsdRange(low, high, { billions = false } = {}) {
  if (billions || low >= 1e9) {
    return `$${(low / 1e9).toFixed(1)}–${(high / 1e9).toFixed(1)}B`
  }
  if (low >= 1e6) {
    return `$${(low / 1e6).toFixed(1)}–${(high / 1e6).toFixed(1)}M`
  }
  return `$${Math.round(low).toLocaleString()}–$${Math.round(high).toLocaleString()}`
}

/**
 * Summary rows: TAM / SAM / SOM headline for book, video, combined.
 */
export function getTamSamSomSummaryRows() {
  const s = CLUBS_MARKET_SIZING
  return [
    {
      segment: s.book.label,
      tam: formatUsdRange(s.book.tamLowUsd, s.book.tamHighUsd, { billions: true }),
      sam: formatUsdRange(s.book.samLowUsd, s.book.samHighUsd, { billions: true }),
      somModerate: formatUsdRange(s.book.samLowUsd * 0.005, s.book.samHighUsd * 0.005),
      note: s.book.samNote,
    },
    {
      segment: s.video.label,
      tam: formatUsdRange(s.video.tamLowUsd, s.video.tamHighUsd, { billions: true }),
      sam: formatUsdRange(s.video.samLowUsd, s.video.samHighUsd, { billions: true }),
      somModerate: formatUsdRange(s.video.samLowUsd * 0.005, s.video.samHighUsd * 0.005),
      note: s.video.samNote,
    },
    {
      segment: s.combined.label,
      tam: formatUsdRange(s.combined.tamLowUsd, s.combined.tamHighUsd, { billions: true }),
      sam: formatUsdRange(s.combined.samLowUsd, s.combined.samHighUsd, { billions: true }),
      somModerate: formatUsdRange(
        s.combined.samLowUsd * s.combined.somShareLow,
        s.combined.samHighUsd * s.combined.somShareHigh,
      ),
      note: s.combined.somNote,
    },
  ]
}

/**
 * SOM scenarios for one segment (book or video) — revenue only.
 * @param {'book'|'video'} segmentKey
 */
export function getSomScenarioRows(segmentKey) {
  const s = CLUBS_MARKET_SIZING
  const seg = s[segmentKey]
  return seg.somScenarios.map((sc) => {
    const somLow = seg.samLowUsd * sc.shareOfSam
    const somHigh = seg.samHighUsd * sc.shareOfSam
    return {
      ...sc,
      somLow,
      somHigh,
      somMid: mid(somLow, somHigh),
      somLabel: formatUsdRange(somLow, somHigh),
    }
  })
}

export function getCombinedSomBand() {
  const s = CLUBS_MARKET_SIZING
  return {
    somLabel: formatUsdRange(
      s.combined.samLowUsd * s.combined.somShareLow,
      s.combined.samHighUsd * s.combined.somShareHigh,
    ),
    note: s.combined.somNote,
  }
}

/** Topic slate for the 20 internal seed clubs. */
export const INTERNAL_CLUB_TOPICS = [
  'Fiction',
  'Literature',
  'Biography',
  'History',
  'Psychology',
  'Society',
  'Culture',
  'Travel',
  'Art',
  'Film',
  'Music',
  'Crafts',
  'Design',
  'Games',
  'Recreation',
  'Drama',
  'Poetry',
  'Education',
  'Business',
  'Marketing',
]

/**
 * Near-term growth engine: each member can become an organizer / network node.
 * Edit levers here; seed + viral projections recompute.
 */
export const CLUBS_SEED = {
  teamMembers: 28,
  internalClubs: 20,
  /** Model assumption for internal beta (overlap → effective size ~8). */
  internalAvgClubSize: 8,
  /**
   * Friends/family wave: each of 28 acts as organizer of ≥1 outward club,
   * invites midpoint of 8–12 (aligned with typical ~10 club size).
   */
  invitesPerOrganizer: 10,
  /** Warm invite → active member. Scenarios: 50% / 60% / 70%. */
  inviteConversionScenarios: [
    { id: 'conservative', name: 'Conservative', z: 0.5, isBase: false },
    { id: 'base', name: 'Base', z: 0.6, isBase: true },
    { id: 'aggressive', name: 'Aggressive', z: 0.7, isBase: false },
  ],
  /** Target fill size for outward clubs as they mature (external data ~10). */
  targetClubSize: 10,
  /** Viral years: fraction of active users who become organizers. */
  organizerFraction: 0.25,
  /** Invites per new organizer per year (same as desired club size). */
  invitesPerOrganizerPerYear: 10,
  /** Clubs a typical active user joins/manages (1–2). */
  clubsPerUser: 1.5,
  /** Long-term Aura Library share of 13M U.S. club participants (saturation caps). */
  saturationShareScenarios: [
    { id: 'cap-01', name: '0.1% of 13M', share: 0.001 },
    { id: 'cap-05', name: '0.5% of 13M', share: 0.005 },
    { id: 'cap-1', name: '1% of 13M', share: 0.01 },
  ],
  /** How many viral years to iterate after friends/family wave (Y1). */
  viralYearsAfterY1: 4,
  /** Default Z for multi-year viral path. */
  defaultInviteConversion: 0.5,
  titlesPerClubPerYear: 10,
  hostGrowthConversion: null,
}

export const CLUBS_MODEL = {
  addressablePool: CLUBS_MARKET.usAdultsInBookClubs,
  addressableLabel: 'U.S. adults in book clubs',
  globalPoolReference: CLUBS_MARKET.globalParticipantsMidpoint,
  avgClubSize: CLUBS_SEED.targetClubSize,
  titlesPerClubPerYear: CLUBS_SEED.titlesPerClubPerYear,
  organizerFraction: CLUBS_SEED.organizerFraction,
  hostGrowthConversion: CLUBS_SEED.hostGrowthConversion,
}

/**
 * Year 0 — internal beta only.
 */
export function projectInternalBeta() {
  const s = CLUBS_SEED
  return {
    phase: 'Y0 · Internal beta',
    users: s.teamMembers,
    clubs: s.internalClubs,
    organizers: s.teamMembers,
    avgMembersPerClub: s.internalAvgClubSize,
    clubsPerTeamMember: s.internalClubs / s.teamMembers,
    newUsers: 0,
    newClubs: 0,
    invitesSent: 0,
    note: '20 topic clubs for 28-person team (overlap; modeled avg size 8). Validate UX/retention before outward invites.',
  }
}

/**
 * Year 1 — friends/family wave from all 28 team organizers.
 * @param {number} z invite → active conversion
 */
export function projectFriendsFamilyWave(z = CLUBS_SEED.defaultInviteConversion) {
  const s = CLUBS_SEED
  const organizers = s.teamMembers
  const invitesSent = organizers * s.invitesPerOrganizer
  const newExternalUsers = invitesSent * z
  const newExternalClubs = organizers // one outward club per team organizer
  const totalUsers = s.teamMembers + newExternalUsers
  const totalClubs = s.internalClubs + newExternalClubs
  const avgMembersPerClubRaw = totalUsers / totalClubs

  return {
    phase: 'Y1 · Friends/family',
    z,
    organizers,
    invitesSent,
    newUsers: newExternalUsers,
    newClubs: newExternalClubs,
    users: totalUsers,
    clubs: totalClubs,
    avgMembersPerClubRaw,
    /** Planning view: clubs fill toward target size over time (not the raw thin average). */
    targetClubSize: s.targetClubSize,
    note: `Each of ${organizers} organizers invites ${s.invitesPerOrganizer}; Z=${(z * 100).toFixed(0)}% convert. Combined ~${Math.round(totalUsers)} members / ${totalClubs} clubs (raw avg ~${avgMembersPerClubRaw.toFixed(1)}; model fills toward ~${s.targetClubSize}).`,
  }
}

/**
 * Iterate viral organizer engine for additional years.
 * New organizers = O × prior total users (simplified; each spins one club + Y invites × Z).
 * Caps cumulative users at saturationShare × 13M when provided.
 *
 * @param {object} opts
 * @param {number} opts.startingUsers
 * @param {number} opts.startingClubs
 * @param {number} [opts.z]
 * @param {number} [opts.years]
 * @param {number|null} [opts.saturationUsers] hard cap on cumulative users
 */
export function projectViralYears(opts) {
  const s = CLUBS_SEED
  const z = opts.z ?? s.defaultInviteConversion
  const years = opts.years ?? s.viralYearsAfterY1
  const O = s.organizerFraction
  const Y = s.invitesPerOrganizerPerYear
  const cap = opts.saturationUsers ?? null

  let users = opts.startingUsers
  let clubs = opts.startingClubs
  const rows = []

  for (let i = 1; i <= years; i++) {
    const newOrganizers = users * O
    let newUsers = newOrganizers * Y * z
    let newClubs = newOrganizers

    if (cap != null && users + newUsers > cap) {
      newUsers = Math.max(0, cap - users)
      // Scale clubs with acquired users if capped mid-wave
      const fullWaveUsers = newOrganizers * Y * z
      newClubs =
        fullWaveUsers > 0 ? newOrganizers * (newUsers / fullWaveUsers) : 0
    }

    users += newUsers
    clubs += newClubs

    rows.push({
      phase: `Y${1 + i} · Viral`,
      yearIndex: 1 + i,
      z,
      newOrganizers,
      newUsers,
      newClubs,
      users,
      clubs,
      hitCap: cap != null && users >= cap - 1e-6,
      shareOfUsPool: users / CLUBS_MARKET.usAdultsInBookClubs,
    })

    if (cap != null && users >= cap - 1e-6) break
  }

  return rows
}

/** First-wave scenarios at different invite conversion rates. */
export function getSeedWaveScenarioRows() {
  const y0 = projectInternalBeta()
  return CLUBS_SEED.inviteConversionScenarios.map((sc) => {
    const y1 = projectFriendsFamilyWave(sc.z)
    return {
      ...sc,
      y0,
      y1,
      combinedNarrativeUsers: y1.users,
      combinedNarrativeClubs: y1.clubs,
    }
  })
}

/**
 * Full path: Y0 → Y1 (base Z) → viral years, optionally capped.
 * @param {{ z?: number, saturationShare?: number|null, years?: number }} [opts]
 */
export function getGrowthEnginePath(opts = {}) {
  const z = opts.z ?? CLUBS_SEED.defaultInviteConversion
  const y0 = projectInternalBeta()
  const y1 = projectFriendsFamilyWave(z)
  const satShare = opts.saturationShare ?? null
  const saturationUsers =
    satShare != null ? CLUBS_MARKET.usAdultsInBookClubs * satShare : null
  const viral = projectViralYears({
    startingUsers: y1.users,
    startingClubs: y1.clubs,
    z,
    years: opts.years ?? CLUBS_SEED.viralYearsAfterY1,
    saturationUsers,
  })

  return {
    z,
    saturationShare: satShare,
    saturationUsers,
    phases: [
      {
        phase: y0.phase,
        users: y0.users,
        clubs: y0.clubs,
        newUsers: 0,
        newClubs: 0,
        note: y0.note,
      },
      {
        phase: y1.phase,
        users: y1.users,
        clubs: y1.clubs,
        newUsers: y1.newUsers,
        newClubs: y1.newClubs,
        note: y1.note,
      },
      ...viral.map((r) => ({
        phase: r.phase,
        users: r.users,
        clubs: r.clubs,
        newUsers: r.newUsers,
        newClubs: r.newClubs,
        newOrganizers: r.newOrganizers,
        shareOfUsPool: r.shareOfUsPool,
        hitCap: r.hitCap,
        note: r.hitCap
          ? 'Hit long-term share cap of U.S. book-club adults.'
          : `New organizers ≈ ${(CLUBS_SEED.organizerFraction * 100).toFixed(0)}% of prior users × ${CLUBS_SEED.invitesPerOrganizerPerYear} invites × Z=${(z * 100).toFixed(0)}%.`,
      })),
    ],
  }
}

/** Saturation ceiling rows (deck / long-term bound). */
export function getSaturationCapRows() {
  return CLUBS_SEED.saturationShareScenarios.map((s) => {
    const users = CLUBS_MARKET.usAdultsInBookClubs * s.share
    const clubs = users / CLUBS_SEED.targetClubSize
    return {
      ...s,
      users,
      clubs,
    }
  })
}

/** Market snapshot rows for the Pro Forma UI. */
export function getClubsMarketSnapshotRows() {
  const m = CLUBS_MARKET
  const naBookClubs = m.globalBookClubsMarket2024Usd * m.northAmericaShareOfBookClubs
  return [
    {
      label: 'U.S. adults in book clubs',
      value: `${(m.usAdultsInBookClubs / 1e6).toFixed(0)}M (~${(m.usAdultPenetrationLow * 100).toFixed(0)}–${(m.usAdultPenetrationHigh * 100).toFixed(0)}% of adults; BookBrowse ~5%, NEA-derived often 6–7%)`,
    },
    {
      label: 'Global book-club participants (rough)',
      value: `${(m.globalParticipantsLow / 1e6).toFixed(0)}–${(m.globalParticipantsHigh / 1e6).toFixed(0)}M+ today (developed-market penetration similar to U.S.)`,
    },
    {
      label: 'U.S. book clubs (estimated range)',
      value: `${(m.usClubsLow / 1e3).toFixed(0)}k–${(m.usClubsHigh / 1e6).toFixed(0)}M (Jacobsohn ~500k; broader informal/digital counts higher)`,
    },
    {
      label: 'Stakeholder one-liner',
      value: m.externalSummary,
    },
    {
      label: 'Typical club size',
      value: `~${CLUBS_SEED.targetClubSize} active (guides often 4–8 for discussion; surveys/how-tos ~10 common)`,
    },
    {
      label: 'Global book clubs market (2024)',
      value: `$${(m.globalBookClubsMarket2024Usd / 1e9).toFixed(2)}B (NA ~${(m.northAmericaShareOfBookClubs * 100).toFixed(0)}% ≈ $${(naBookClubs / 1e6).toFixed(0)}M)`,
    },
    {
      label: 'Social reading platforms (closest Aura Library proxy)',
      value: `$${(m.socialReading2025Usd / 1e9).toFixed(1)}B (2025) → $${(m.socialReading2034Usd / 1e9).toFixed(1)}B @ ~${(m.socialReadingCagr * 100).toFixed(1)}% CAGR`,
    },
    {
      label: 'Online book services (2025 → 2030)',
      value: `$${(m.onlineBookServices2025Usd / 1e9).toFixed(1)}B → $${(m.onlineBookServices2030Usd / 1e9).toFixed(1)}B @ ${(m.onlineBookServicesCagr * 100).toFixed(1)}% CAGR`,
    },
  ]
}

export function formatCompactCount(n) {
  if (n == null || Number.isNaN(n)) return 'TBD'
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}k`
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n)
}

export function formatPctShare(n) {
  if (n == null || Number.isNaN(n)) return '—'
  if (n < 0.0001) return '<0.01%'
  return `${(n * 100).toFixed(2)}%`
}
