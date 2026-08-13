/**
 * Kahana marketplace Pro Forma — named cases with assumptions.
 * Edit assumptions here during walkthroughs; computeCaseRevenue() derives totals.
 *
 * Streams: Growth SaaS · marketplace take rate (5%) · Enterprise · optional feature lines.
 * Horizon: 12-month EOY run-rate (not cumulative ramp).
 */

export const PRO_FORMA_META = {
  product: 'Kahana marketplace',
  horizonLabel: '12-month EOY run-rate',
  horizonMonths: 12,
  takeRateDefault: 0.05,
  knownTraction: {
    registeredUsers: 6482,
    registeredUsersNote:
      'Vast majority inactive (“dead”); not a live audience. Platform retention work is recent.',
    dauLast30Days: '1–14',
    dauWindow: '2026-07-04 to 2026-08-03',
    dauContext:
      'Internal beta testers; returning users dominate; no paid marketing in ~2 years.',
    hubTxLast30Days: 0,
    /** Last calendar year GMV mostly one adult hub ($375 entry); creator ~$15k → Kahana 5% = $750. */
    lastYearGmv: 15000,
    lastYearTakeRateRevenue: 750,
    /** Going-forward Growth MRR after Aug 7, 2026 cancel (Stripe actuals). */
    growthMrrApprox: 76.62,
    growthSubsApprox: 9,
    growthArrApprox: 919.38,
    growthMrrBeforeCancel: 86.61,
    asOf: '2026-08-03',
    cancelEffective: '2026-08-07',
    noMarketingYears: 2,
  },
  /** Current near-term GTM — Clubs (Book / Video). */
  gtm: {
    focus: 'Clubs',
    clubTypes: ['Book Clubs', 'Video Clubs'],
    typicalInviteSize: '5–15 friends',
    loop: [
      'Collaborative shortlist of books/videos',
      'Pick the most popular title',
      'Read/watch over ~1 month (daily habit)',
      'Group discussion after finishing',
    ],
    retentionThesis:
      'Hosting a club on Kahana implies multi-day check-ins (reading + discussion), then spillover into Public Library browse/search.',
    contentInventory: {
      files: 17700,
      hubs: 1473,
    },
    publicLibrary:
      'Public Library page + search shipped recently; not yet communicated to the ~6,482 registered users.',
    /**
     * Demand-driven acquisition (DDA): clubs signal which titles to onboard;
     * rights-holders upload, set price, sell access (marketplace take rate).
     */
    demandDrivenAcquisition: {
      oneLiner:
        'A demand-driven acquisition platform where book and video clubs signal which titles to onboard, aligning content with real reader/viewer interest.',
      example:
        'Club picks Life of Pi → invite Yann Martel / publisher to upload, set price, sell access → other clubs can reuse the title once live.',
      antiPattern:
        'Avoid bulk-loading public-domain or random catalog content nobody asked for.',
      analogues: [
        'Library ebook DDA (e.g. JSTOR-style usage-triggered acquisition)',
        'Direct upload/pricing like KDP / Apple Books / Kobo — but discovery is club-led, not SEO/algorithm-led',
      ],
      authorValueProp:
        'Upload because a committed group already plans to read/watch together, with more clubs likely to follow.',
      networkEffect:
        'One club onboards a title; every other club can add it to their list — multi-club staples raise utilization and royalties.',
      strategicBenefits: [
        'Filters for demand — every sourcing request is club-triggered',
        'Aligns author/publisher incentives with pre-qualified demand',
        'Title network effects across clubs',
        'Outreach prioritizes repeatedly requested books/videos; genre demand data guides curation',
      ],
      deckCopy:
        'Kahana uses book and video clubs as demand signals for content acquisition. Rather than bulk-loading public domain titles that nobody reads, we onboard content that clubs explicitly request—e.g., if a club chooses Life of Pi, we invite Yann Martel and his publisher to upload the book, set a price, and start selling directly to that club and others. This demand-driven model is similar to library DDA for ebooks, but applied to a social, creator-friendly marketplace where authors and publishers earn royalties whenever clubs choose their titles.',
    },
  },
}

/**
 * @typedef {object} ProFormaAssumptions
 * @property {number|null} growthSubscribersEoy
 * @property {number} [growthMrrOverride] - exact Stripe MRR when price mix is heterogeneous
 * @property {number} monthlyPrice
 * @property {number} annualPrice
 * @property {number} pctOnAnnual - 0–1 share of Growth subs on annual billing
 * @property {number|null} monthlyGmvEoy - end-of-horizon monthly GMV
 * @property {number} takeRatePct
 * @property {number|null} enterpriseDealsClosed
 * @property {number|null} avgEnterpriseAcv
 * @property {number} featuredPlacementMonthly
 * @property {number} analyticsUpsellMonthly
 */

/**
 * @typedef {object} ProFormaCase
 * @property {string} id
 * @property {string} name
 * @property {string} thesis
 * @property {number} horizonMonths
 * @property {ProFormaAssumptions} assumptions
 * @property {string[]} notes
 * @property {boolean} [isBase]
 */

/** @type {ProFormaCase[]} */
export const PRO_FORMA_CASES = [
  {
    id: 'base',
    name: 'Base / balanced',
    thesis:
      'Organic baseline — Stripe Growth SaaS + last-year take-rate run-rate; no marketing, no Enterprise',
    horizonMonths: 12,
    isBase: true,
    assumptions: {
      // 9 active after one $9.99/mo cancel effective 2026-08-07
      growthSubscribersEoy: 9,
      // Exact MRR: 5×$9.99 + 2×($99.99/12) + 2×$5.00 = $76.615
      growthMrrOverride: 76.615,
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      // 2 of 9 on annual ($99.99/yr)
      pctOnAnnual: 2 / 9,
      // Annualize last calendar year ~$15k GMV → $1,250/mo → 5% = $750/yr
      // (Last 30 days: $0 hub transactions while focused on internal beta.)
      monthlyGmvEoy: 15000 / 12,
      takeRatePct: 0.05,
      enterpriseDealsClosed: 0,
      avgEnterpriseAcv: 0,
      featuredPlacementMonthly: 0,
      analyticsUpsellMonthly: 0,
    },
    notes: [
      'Organic baseline: no Kahana marketing for ~2 years — Growth SaaS + take-rate happened without paid acquisition.',
      'Registered users: 6,482 — vast majority dead/inactive; do not treat as addressable live users.',
      'Last 30 days (Jul 4–Aug 3 2026): 1–14 DAU, mostly returning internal beta testers; 0 hub transactions.',
      'Stripe Growth as of 2026-08-03: going-forward 9 subs · ~$76.62 MRR · ~$919 ARR after Aug 7 cancel.',
      'Take-rate baseline: last calendar year ~$15k GMV (mostly one adult hub @ $375) → Kahana 5% ≈ $750. Concentrated; not diversified GMV.',
      'Enterprise: none closed in this baseline.',
    ],
  },
  {
    id: 'clubs-retention',
    name: 'Clubs GTM (current focus)',
    thesis:
      'Seed 20 internal clubs → 28 organizers invite friends/family → viral organizers; $ revenue deferred',
    horizonMonths: 12,
    assumptions: {
      growthSubscribersEoy: null,
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      pctOnAnnual: 0.2,
      monthlyGmvEoy: null,
      takeRatePct: 0.05,
      enterpriseDealsClosed: 0,
      avgEnterpriseAcv: 0,
      featuredPlacementMonthly: 0,
      analyticsUpsellMonthly: 0,
    },
    notes: [
      'Volume engine (not TAM % jump): Y0 = 28 team / 20 topic clubs; Y1 = each teammate organizes outward + 10 invites × Z (50–70%).',
      'Base first wave (Z=60%): ~196 users, 48 clubs — narrative “~200 users / ~50 clubs.”',
      'Viral years: O=25% of users become organizers × 10 invites × Z; bend with 0.1–1% of 13M U.S. club adults as caps.',
      'Market one-liner: 500k–5M U.S. clubs · ~13M adult participants · typical size ~10.',
      'Demand-driven content: clubs pick titles (e.g. Life of Pi) → invite author/publisher to upload & price → other clubs reuse; DDA-style vs bulk public domain.',
      'Revenue conversion (Growth / GMV) intentionally on hold.',
    ],
  },
  {
    id: 'marketplace-gmv',
    name: 'Marketplace GMV focus',
    thesis:
      'Club-signaled titles → rights-holder uploads → take-rate on club-backed catalog (secondary to Clubs habit)',
    horizonMonths: 12,
    assumptions: {
      growthSubscribersEoy: null,
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      pctOnAnnual: 0.1,
      monthlyGmvEoy: null,
      takeRatePct: 0.05,
      enterpriseDealsClosed: 0,
      avgEnterpriseAcv: 0,
      featuredPlacementMonthly: 0,
      analyticsUpsellMonthly: 0,
    },
    notes: [
      'Content sourcing is club-first DDA: only actively pursue titles clubs request — higher expected utilization than random catalog.',
      'Once a title is onboarded for one club, any club can add it; multi-club staples compound GMV and creator royalties.',
      'Downstream of Clubs: retained members browse Public Library (new; not yet announced to signup base).',
      'Supply today: ~17.7k files / 1,473 hubs — grow wisely via club signals, not bulk public domain.',
      'Take rate stays 5% unless pricing policy changes. GMV $ targets still TBD.',
    ],
  },
  {
    id: 'enterprise-features',
    name: 'Enterprise + features',
    thesis: 'Teams/orgs plus featured placement and analytics attach',
    horizonMonths: 12,
    assumptions: {
      growthSubscribersEoy: null,
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      pctOnAnnual: 0.1,
      monthlyGmvEoy: null,
      takeRatePct: 0.05,
      enterpriseDealsClosed: null,
      avgEnterpriseAcv: null,
      featuredPlacementMonthly: null,
      analyticsUpsellMonthly: null,
    },
    notes: [
      'Segment bet: white-label hubs, unified billing, dedicated support.',
      'Feature lines (featured placement, analytics) are not shipped — price as TBD.',
      'Fill deal count, ACV, and monthly feature ARPU when priced.',
    ],
  },
]

/**
 * @param {number|null|undefined} value
 * @returns {boolean}
 */
export function isKnown(value) {
  return value !== null && value !== undefined && !Number.isNaN(value)
}

/**
 * Effective monthly SaaS revenue at EOY from subscriber mix.
 * Prefer growthMrrOverride when Stripe (or other) actuals beat a single-price model.
 * @param {ProFormaAssumptions} a
 * @returns {number|null}
 */
function computeSaasMrr(a) {
  if (isKnown(a.growthMrrOverride)) return a.growthMrrOverride
  if (!isKnown(a.growthSubscribersEoy)) return null
  const pctAnnual = isKnown(a.pctOnAnnual) ? a.pctOnAnnual : 0
  const monthlyCount = a.growthSubscribersEoy * (1 - pctAnnual)
  const annualCount = a.growthSubscribersEoy * pctAnnual
  return monthlyCount * a.monthlyPrice + annualCount * (a.annualPrice / 12)
}

/**
 * Derive stream totals and mix from a case's assumptions.
 * Null inputs propagate as null outputs (UI shows TBD).
 * @param {ProFormaCase} proFormaCase
 */
export function computeCaseRevenue(proFormaCase) {
  const a = proFormaCase.assumptions
  const months = proFormaCase.horizonMonths || PRO_FORMA_META.horizonMonths

  const saasMrr = computeSaasMrr(a)
  const saasArr = isKnown(saasMrr) ? saasMrr * 12 : null

  const takeRateAnnual =
    isKnown(a.monthlyGmvEoy) && isKnown(a.takeRatePct)
      ? a.monthlyGmvEoy * months * a.takeRatePct
      : null

  const enterpriseArr =
    isKnown(a.enterpriseDealsClosed) && isKnown(a.avgEnterpriseAcv)
      ? a.enterpriseDealsClosed * a.avgEnterpriseAcv
      : null

  const featuredKnown = isKnown(a.featuredPlacementMonthly)
  const analyticsKnown = isKnown(a.analyticsUpsellMonthly)
  const featureAnnual =
    featuredKnown && analyticsKnown
      ? (a.featuredPlacementMonthly + a.analyticsUpsellMonthly) * months
      : featuredKnown || analyticsKnown
        ? ((featuredKnown ? a.featuredPlacementMonthly : 0) +
            (analyticsKnown ? a.analyticsUpsellMonthly : 0)) *
          months
        : a.featuredPlacementMonthly === 0 && a.analyticsUpsellMonthly === 0
          ? 0
          : null

  // Core streams drive whether a total is meaningful; $0 feature lines alone are not.
  const core = [saasArr, takeRateAnnual, enterpriseArr]
  const anyCoreKnown = core.some(isKnown)
  const allCoreKnown = core.every(isKnown)
  const featureContribution = isKnown(featureAnnual) ? featureAnnual : 0

  let totalRevenue = null
  let totalPartial = false
  if (anyCoreKnown) {
    totalRevenue =
      core.reduce((sum, n) => sum + (isKnown(n) ? n : 0), 0) + featureContribution
    totalPartial = !allCoreKnown
  } else if (featureContribution > 0) {
    totalRevenue = featureContribution
  }

  const mixPct = (value) => {
    if (!isKnown(value) || !isKnown(totalRevenue) || totalRevenue === 0) return null
    return (value / totalRevenue) * 100
  }

  return {
    saasMrr,
    saasArr,
    takeRateAnnual,
    enterpriseArr,
    featureAnnual,
    totalRevenue,
    totalPartial,
    mix: {
      saas: mixPct(saasArr),
      takeRate: mixPct(takeRateAnnual),
      enterprise: mixPct(enterpriseArr),
      features: mixPct(featureAnnual),
    },
  }
}

/**
 * @param {number|null} value
 * @param {{ digits?: number, compact?: boolean }} [opts]
 * @returns {string}
 */
export function formatMoney(value, opts = {}) {
  if (!isKnown(value)) return 'TBD'
  const digits = opts.digits ?? (Math.abs(value) >= 1000 ? 0 : 2)
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value)
}

/**
 * @param {number|null} value
 * @returns {string}
 */
export function formatPct(value) {
  if (!isKnown(value)) return '—'
  return `${value.toFixed(1)}%`
}

/**
 * @param {number|null} value
 * @returns {string}
 */
export function formatNumber(value) {
  if (!isKnown(value)) return 'TBD'
  return new Intl.NumberFormat('en-US').format(value)
}

/**
 * Human-readable assumption rows for sheets.
 * @param {ProFormaAssumptions} a
 * @returns {{ label: string, value: string }[]}
 */
export function assumptionRows(a) {
  const rows = [
    { label: 'Growth subscribers (EOY)', value: formatNumber(a.growthSubscribersEoy) },
  ]
  if (isKnown(a.growthMrrOverride)) {
    rows.push({
      label: 'Growth MRR (Stripe override)',
      value: formatMoney(a.growthMrrOverride),
    })
  }
  rows.push(
    { label: 'Monthly price (list)', value: formatMoney(a.monthlyPrice) },
    { label: 'Annual price (list)', value: formatMoney(a.annualPrice) },
    {
      label: '% on annual billing',
      value: isKnown(a.pctOnAnnual) ? formatPct(a.pctOnAnnual * 100) : 'TBD',
    },
    { label: 'Monthly GMV (EOY)', value: formatMoney(a.monthlyGmvEoy, { digits: 0 }) },
    {
      label: 'Take rate',
      value: isKnown(a.takeRatePct) ? formatPct(a.takeRatePct * 100) : 'TBD',
    },
    { label: 'Enterprise deals closed', value: formatNumber(a.enterpriseDealsClosed) },
    { label: 'Avg Enterprise ACV', value: formatMoney(a.avgEnterpriseAcv, { digits: 0 }) },
    {
      label: 'Featured placement ($/mo)',
      value: formatMoney(a.featuredPlacementMonthly),
    },
    {
      label: 'Analytics upsell ($/mo)',
      value: formatMoney(a.analyticsUpsellMonthly),
    },
  )
  return rows
}

/** Precomputed view models for the page. */
export function getProFormaRows() {
  return PRO_FORMA_CASES.map((c) => ({
    case: c,
    revenue: computeCaseRevenue(c),
  }))
}
