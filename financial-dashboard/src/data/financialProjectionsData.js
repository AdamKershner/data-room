/**
 * Kahana Financial Projections — static defaults, historicals, and advisor copy.
 * Sourced from Kahana_Proforma template.xlsx (Summary IS, Revenue_T, Revenue_B,
 * Expenses_Y, Assumptions, Marketing Plan, Comparable Companies).
 */

export const FINANCIAL_PROJECTIONS_PATH = '/financial-projections'

export const FINANCIAL_PROJECTIONS_PAGE = {
  title: 'Financial Projections',
  subtitle:
    'Interactive Kahana model for teammates and investors. Change the drivers, watch both revenue cases and the income statement update, then run a sensitivity grid.',
}

export const WORKBOOK_SOURCE = {
  fileName: 'Kahana_Proforma template.xlsx',
  href: '/kahana-proforma-template.xlsx',
  asOf: 'Workbook template — Aug 2026',
}

/** Display columns on the Summary IS (matches the Excel Summary IS sheet). */
export const IS_YEARS = [
  { id: '2023A', label: '2023A', year: 2023, kind: 'actual', months: 12 },
  { id: '2024A', label: '2024A', year: 2024, kind: 'actual', months: 12 },
  { id: '2025A', label: '2025A', year: 2025, kind: 'actual', months: 12 },
  { id: '2026YTD', label: '2026 YTD', year: 2026, kind: 'ytd', months: 5 },
  { id: '2027F', label: '2027F', year: 2027, kind: 'forecast', months: 12 },
  { id: '2028F', label: '2028F', year: 2028, kind: 'forecast', months: 12 },
  { id: '2029F', label: '2029F', year: 2029, kind: 'forecast', months: 12 },
  { id: '2030F', label: '2030F', year: 2030, kind: 'forecast', months: 12 },
  { id: '2031F', label: '2031F', year: 2031, kind: 'forecast', months: 12 },
]

export const BASE_YEAR = 2026

/**
 * Workbook default inputs (Revenue_T Assumptions + tax + seed).
 * Segment % is stored as 0–100; CAGR as 0–100; target share as 0–100.
 */
export const WORKBOOK_INPUTS = {
  globalMarketBn2026: 360,
  relevantSegmentPct: 7.5,
  marketCagrPct: 11.4,
  kahanaRevenue2026: 1000,
  targetSharePct: 1,
  horizonYears: 7,
  federalTaxPct: 21,
  stateTaxPct: 0,
  seedRaise: 0,
  fundingYear: 2026,
  payrollBenefitsPct: 0,
  paidMarketingAnnual: 0,
  creatorPartnershipsAnnual: 0,
  brandContentAnnual: 0,
  legalAnnual: 0,
  accountingAnnual: 0,
  insuranceAnnual: 0,
  paymentProcessingAnnual: 0,
  otherVariablePlatformAnnual: 0,
  // Bottom-up forecast drivers — blank in the workbook; 0 = YAU case stays empty.
  startingYau: 0,
  resurrectionPct: 0,
  resurrectionPublishPct: 0,
  resurrectionSavePct: 0,
  newRegisteredUsers: 0,
  newUserGrowthPct: 0,
  viralK: 0,
  catalogSignupsPerPublisher: 0,
  signupViralK: 0,
  extraSignupsPerCollab: 0,
  extraBuyersPerHub: 0,
  checkoutCompletionPct: 0,
  extraSaversThisHub: 0,
  extraSaversOtherHub: 0,
  extraAspiringSellersPerHub: 0,
  yauRetentionPct: 0,
  newUserActivationPct: 0,
  monetizationRatePct: 0,
  gmvPerMonetizingUser: 0,
  takeRatePct: 5,
  txPerMonetizingUser: 0,
  growthMonthlyPrice: 9.99,
  growthAnnualPrice: 99.99,
  growthAnnualMixPct: 0,
  growthConvertPct: 0,
  growthConvertBetaPct: 0,
  discoveryGmvLiftPct: 0,
}

/**
 * Demand spillover around a published hub (not k). Average collab, not Amy-scale.
 * Pay-intent 15: Etsy-shaped, Amy ~13/year is the same order. Account created to pay;
 * checkoutCompletionPct is who actually finishes (GMV is still $1,250/seller, not 15 × AOV).
 * Savers are a small direct count: save this hub + attracted by this hub then save another.
 * Not Substack free-list inverse (that was ~285 and too high for an average collab).
 * Aspiring-seller signups stay at k’s order of magnitude.
 */
export const ETSY_BUYERS_PER_SELLER = 15
export const CHECKOUT_COMPLETION_PCT = 50
export const SAVERS_THIS_HUB = 2
export const SAVERS_OTHER_HUB = 2
export const ASPIRING_SELLERS_PER_HUB = 0.05

export const HUB_SPILLOVER_DEFAULTS = {
  extraBuyersPerHub: ETSY_BUYERS_PER_SELLER,
  checkoutCompletionPct: CHECKOUT_COMPLETION_PCT,
  extraSaversThisHub: SAVERS_THIS_HUB,
  extraSaversOtherHub: SAVERS_OTHER_HUB,
  extraAspiringSellersPerHub: ASPIRING_SELLERS_PER_HUB,
}

export function hubDemandSpillover(funnel = {}) {
  const f = { ...HUB_SPILLOVER_DEFAULTS, ...funnel }
  const payIntent = nFunnel(f.extraBuyersPerHub)
  const completion = nFunnel(f.checkoutCompletionPct) / 100
  const saversThis = nFunnel(f.extraSaversThisHub)
  const saversOther = nFunnel(f.extraSaversOtherHub)
  const savers = saversThis + saversOther
  const aspiring = nFunnel(f.extraAspiringSellersPerHub)
  return {
    extraBuyersPerHub: payIntent,
    checkoutCompletionPct: nFunnel(f.checkoutCompletionPct),
    completedBuyersPerHub: payIntent * completion,
    extraSaversThisHub: saversThis,
    extraSaversOtherHub: saversOther,
    extraSaversPerHub: savers,
    extraAspiringSellersPerHub: aspiring,
    extraSignupsPerCollab: payIntent + savers + aspiring,
  }
}

/**
 * Unpaid-collab plan (conservative page default).
 * 30 people × 20 hours/week (locked). Hours split between outreach and 5h hub setup
 * so the same hour is not counted twice. 10 meetings / 100 emails; 50% of meetings yes unpaid;
 * 80% of yeses publish. Email-found 10% is conservative. Hub extras: 15 pay-intent (some
 * do not finish checkout), 2 savers of this hub + 2 savers of another hub, 0.05 aspiring
 * sellers. 48 working weeks, stable all year.
 */
export const MARKETING_FUNNEL_DEFAULTS = {
  people: 30,
  hoursPerWeek: 20,
  profilesPerHour: 30,
  emailFoundPct: 10,
  responsePct: 30,
  meetingsPer100Emails: 10,
  collabPct: 50,
  collabPctIfFunded: 80,
  publishCompletionPct: 80,
  setupHoursPerCollab: 5,
  ...HUB_SPILLOVER_DEFAULTS,
  extraSignupsPerCollab: hubDemandSpillover(HUB_SPILLOVER_DEFAULTS).extraSignupsPerCollab,
  workingWeeks: 48,
}

function nFunnel(value) {
  const x = Number(value)
  return Number.isFinite(x) ? x : 0
}

/** Weekly unpaid-collab capacity and implied 2027 new registrations. */
export function planOutreachYear(funnel = MARKETING_FUNNEL_DEFAULTS, funded = false) {
  const f = { ...MARKETING_FUNNEL_DEFAULTS, ...funnel }
  const weeklyHours = nFunnel(f.people) * nFunnel(f.hoursPerWeek)
  const profilesPerHour = nFunnel(f.profilesPerHour)
  const emailRate = nFunnel(f.emailFoundPct) / 100
  const meetRate = nFunnel(f.meetingsPer100Emails) / 100
  const collabPct = funded ? nFunnel(f.collabPctIfFunded) : nFunnel(f.collabPct)
  const collabRate = collabPct / 100
  const setupH = nFunnel(f.setupHoursPerCollab)
  const publishRate = nFunnel(f.publishCompletionPct) / 100
  const collabsPerOutreachHour = profilesPerHour * emailRate * meetRate * collabRate

  let outreachHours = weeklyHours
  let weeklyCollabs = 0
  if (collabsPerOutreachHour > 0) {
    // Setup hours only for yeses who finish the hub (publishCompletionPct).
    const hoursPerOutreachHour = 1 + collabsPerOutreachHour * publishRate * setupH
    outreachHours = hoursPerOutreachHour > 0 ? weeklyHours / hoursPerOutreachHour : weeklyHours
    weeklyCollabs = outreachHours * collabsPerOutreachHour
  }
  const weeklyPublished = weeklyCollabs * publishRate
  const setupHoursUsed = weeklyPublished * setupH
  const profiles = outreachHours * profilesPerHour
  const emails = profiles * emailRate
  const responses = emails * (nFunnel(f.responsePct) / 100)
  const meetings = emails * meetRate
  const weeks = nFunnel(f.workingWeeks) || 48
  const annualCollabs = weeklyCollabs * weeks
  const annualPublished = weeklyPublished * weeks
  const spill = hubDemandSpillover(f)
  const extra = spill.extraSignupsPerCollab
  const newRegistrations = annualPublished * (1 + extra)
  const naiveOutreachCollabs = weeklyHours * collabsPerOutreachHour
  return {
    weeklyHours,
    outreachHours,
    setupHoursUsed,
    profiles,
    emails,
    responses,
    meetings,
    collabs: weeklyCollabs,
    collabPct,
    publishCompletionPct: nFunnel(f.publishCompletionPct),
    weeklyPublished,
    annualPublished,
    weeklyCollabsUncapped: naiveOutreachCollabs,
    setupCap: setupH > 0 ? weeklyHours / setupH : naiveOutreachCollabs,
    setupCapped: setupHoursUsed + 1e-9 >= outreachHours,
    weeklyCollabs,
    annualCollabs,
    extraBuyersPerHub: spill.extraBuyersPerHub,
    checkoutCompletionPct: spill.checkoutCompletionPct,
    completedBuyersPerHub: spill.completedBuyersPerHub,
    extraSaversThisHub: spill.extraSaversThisHub,
    extraSaversOtherHub: spill.extraSaversOtherHub,
    extraSaversPerHub: spill.extraSaversPerHub,
    extraAspiringSellersPerHub: spill.extraAspiringSellersPerHub,
    extraSignupsPerCollab: extra,
    workingWeeks: weeks,
    newRegistrations,
  }
}

export const PLAN_NEW_REGISTERED_USERS = Math.round(planOutreachYear().newRegistrations)

/**
 * Conservative bottoms-up case for the default page load.
 * Not a management forecast. Grounded in 2023–26 actuals; YAU itself was never measured.
 *
 * Anchors: 6,554 registered (founder census Aug 2026), 13 monetizing creators and $1,382 GMV each in 2025,
 * 5% take, $898 platform revenue. New registrations were 1,500 / 1,300 / 0 / 0.
 */
export const CONSERVATIVE_YAU_INPUTS = {
  ...WORKBOOK_INPUTS,
  relevantSegmentPct: 20,
  marketCagrPct: 5,
  targetSharePct: 0,
  startingYau: 500,
  resurrectionPct: 7.5,
  resurrectionPublishPct: 20,
  resurrectionSavePct: 50,
  newRegisteredUsers: PLAN_NEW_REGISTERED_USERS,
  newUserGrowthPct: 0,
  viralK: 0.05,
  catalogSignupsPerPublisher: 3,
  signupViralK: 0.25,
  extraBuyersPerHub: ETSY_BUYERS_PER_SELLER,
  checkoutCompletionPct: CHECKOUT_COMPLETION_PCT,
  extraSaversThisHub: SAVERS_THIS_HUB,
  extraSaversOtherHub: SAVERS_OTHER_HUB,
  extraAspiringSellersPerHub: ASPIRING_SELLERS_PER_HUB,
  extraSignupsPerCollab: hubDemandSpillover(HUB_SPILLOVER_DEFAULTS).extraSignupsPerCollab,
  yauRetentionPct: 50,
  newUserActivationPct: 20,
  monetizationRatePct: 4,
  gmvPerMonetizingUser: 1250,
  takeRatePct: 5,
  txPerMonetizingUser: 6,
  growthMonthlyPrice: 9.99,
  growthAnnualPrice: 99.99,
  growthAnnualMixPct: 30,
  growthConvertPct: 30,
  growthConvertBetaPct: 15,
  discoveryGmvLiftPct: 15,
}

/** @deprecated Use CONSERVATIVE_YAU_INPUTS — kept so older references keep working. */
export const YAU_STARTER_INPUTS = CONSERVATIVE_YAU_INPUTS

export const DEFAULT_PRESET_ID = 'conservative'

export const PRESETS = [
  {
    id: 'conservative',
    label: 'Conservative YAU',
    hint: 'Default — 30 × 20h unpaid collabs, pay-intent + small saver spillover, no share ramp',
    inputs: CONSERVATIVE_YAU_INPUTS,
  },
  {
    id: 'workbook',
    label: 'Workbook',
    hint: 'Excel defaults — YAU forecast blank, no hires',
    inputs: WORKBOOK_INPUTS,
  },
  {
    id: 'seed-300',
    label: 'Seed $300k',
    hint: 'Conservative YAU + CEO and first engineer',
    inputs: { ...CONSERVATIVE_YAU_INPUTS, seedRaise: 300000 },
  },
  {
    id: 'seed-full',
    label: 'Seed $1.2M',
    hint: 'Conservative YAU + full hiring waterfall',
    inputs: { ...CONSERVATIVE_YAU_INPUTS, seedRaise: 1200000 },
  },
]

export const CREATOR_SUPPLY_CAGR_PCT = 10

/** Founder census, Aug 2026 — registered accounts (small-scale creators + viewers). */
export const REGISTERED_USERS_CENSUS_2026 = 6554

/** Extra first-time publishers per publishing creator per year. Labeled assumption, not a measured K. */
export const VIRAL_K = { low: 0.01, base: 0.05, high: 0.15 }
/** New accounts per already-live publisher per year at full product, from search / recs / viewer agent. */
export const CATALOG_SIGNUPS = { low: 1, base: 3, high: 8 }
/** Extra new accounts next year per this year’s new account (share / Linktree / word of mouth), at full product. */
export const SIGNUP_VIRAL_K = { low: 0.1, base: 0.25, high: 0.5 }

export const VIRAL_K_RATIONALE = [
  'Intern hours are capped (30 × 20h), so intern launches stay ~2,160 hubs/year. Linear intern add is not the whole acquisition story. Compounding comes from loops that do not cost intern hours.',
  'Hub-to-creator k = 0.05: extra people who publish a first hub after seeing someone else’s. They were usually already registered as aspiring sellers. Their *hub* now mints the same extras as an intern collab (pay-intent, savers, aspiring). Those extras are new accounts. k ≥ 1 is still not the base plan.',
  'Catalog discovery: at full product, each already-live publisher brings 3 new accounts a year (low 1 / high 8) because search, the viewer agent, and recommendations keep surfacing old hubs — not only the week of the collab. 3 is ~16% of a launch’s ~19 extras, every year, ramped with product maturity. Not 19 extras per live hub forever.',
  'Signup virality 0.25 at full product (low 0.1 / high 0.5): 100 new accounts this year → 25 extra next year via share, Linktree, and word of mouth. Ramped with product maturity. Below 1, so it compounds on top of intern rather than doubling the list every year. Not intern-hour growth (that box stays 0%).',
  'Together this is compounding, not a straight 43,308 line, and not unbounded exponential. Intern stays the engine; catalog + k extras + cohort share steepen the slope as the library and product get better.',
]

export const HUB_SPILLOVER_RATIONALE = [
  'A published hub is marketed on Linktree and social; some hubs are free. People create accounts to pay, to save, or to sell. That mix is spillover, not k. Numbers are for an average unpaid collab, not Amy’s lifetime traffic.',
  'Pay-intent 15: Etsy Q4 2025 ≈ 15.4 active buyers per seller; Amy ~13 buyers/year is the same order. These people create an account intending to pay. Checkout completion 50% is who actually finish — the other half keep the account and look like savers. GMV is still $1,250 per selling creator, not 15 × AOV.',
  'Savers 2 + 2: not a Substack free list. 2 create an account to save this hub for later. 2 were attracted by this collab and then save a different hub on Kahana. 285 (5% paid inverse) was too high for an average collab.',
  'Aspiring-seller signups 0.05 per hub: someone who saw a hub and created an account intending to sell. Most never publish. k is who actually ships a hub later, and is not counted again as a new account.',
  'The same launch extras apply to intern collabs, resurrection-published hubs, and k first hubs. Already-live hubs add a smaller catalog-discovery stream (search / recs), not another full 19 extras every year.',
]

/**
 * Share of the existing 6,554 registered accounts who do one meaningful action in 2027
 * after the planned “what’s new” resurrection email. Conservative working range, not an email open rate.
 */
export const RESURRECTION = { low: 5, base: 7.5, high: 10 }
export const RESURRECTION_PUBLISH = { base: 20 }
export const RESURRECTION_SAVE = { base: 50 }

export const RESURRECTION_RATIONALE = [
  'The 6,554 registered accounts (founder census, Aug 2026 — mix of small-scale creators and viewers) are the starting base, not a cold list. They already have accounts. Resurrection is how that base comes back in 2027 after the “what’s new” email: they can publish hubs, save hubs, and try to pay. They are not counted again as new registrations.',
  'Resurrection rate 7.5% (range 5–10%) of the dormant remainder (6,554 minus 2026 starting YAU) ≈ 454 people who do at least one meaningful 2027 action. Not an open rate. The inferred 500 current YAU are not counted twice.',
  'Of those who come back: 20% publish a hub (already registered — no intern setup hours). 50% save a hub. Overlap is allowed. Publishing is heavier, so it is lower than saving.',
  'Hubs those resurrected people publish mint the same extras as intern collabs (15 pay-intent, 2 save-this, 2 save-other, 0.05 aspiring). Those extras ARE new registrations, attributed to the starting 6,554 / resurrection, not intern GTM. Later years keep resurrected people only if YAU retention holds.',
  'Workbook case stays at 0% because Excel never modeled this campaign.',
]

/** Calendar-year YAU operating rates. Labeled assumptions — no platform publishes these exact cohorts. */
export const YAU_RETENTION = { low: 35, base: 50, high: 65 }
export const NEW_USER_ACTIVATION = { low: 10, base: 20, high: 35 }
export const MONETIZATION_RATE = { low: 2, base: 4, high: 8 }
export const GMV_PER_SELLER = { low: 750, base: 1250, high: 2500 }

export const YAU_OPERATING_RATIONALE = [
  'These four are labeled planning assumptions, not Kahana history and not public benchmarks. No reviewed platform publishes calendar-year YAU retention, registration → same-year YAU, sellers as % of YAU, or annual GMV per monetizing seller in the form this model uses.',
  'YAU retention 50% (low 35% / high 65%): share of last year’s yearly actives who do one meaningful action again this year. 50% means half the annual-action cohort churns. 55% was slightly optimistic for a beta marketplace. High 65% needs Clubs, new hubs, notifications, and a reason to come back. Not DAU/MAU, email opens, seller retention, or registered-account retention.',
  'New-user activation 20% (low 10% / high 35%): share of saver, aspiring-seller, and unfinished-checkout registrations that become YAU in the same calendar year. Publishers and people who finish paying count as YAU in full. 25% was optimistic. Not onboarding completion, first-session activation, or resurrection.',
  'Annual monetization 4% (low 2% / high 8%): share of *publishing creators* who make at least one sale. One seller per 25 publishers. Applied to publisher stock, not all YAU — otherwise Substack-style savers would mint fake sellers. Not the 5% take rate, not Etsy sellers/buyers, not Substack free-to-paid.',
  'GMV / monetizing user $1,250 (low $750 / high $2,500): beta-era volume floor, about 10% below the 2025 observed $1,382 across 13 sellers. Search, the viewer agent, and recommendations add a separate ramped discovery lift (default 15% at full product). Do not use the ~$25k organic outlier, lifetime GMV, GMV per YAU, or Whop (~$46k/yr on a different seller mix). Teachable’s $100k+ annual sellers are a recognition tier, not a base.',
]

/** Why the page uses 5% demand / 10% supply instead of Excel 11.4% or Creatorplaces 22.3%. */
export const CAGR_RATIONALE = [
  'Two rates, not one. Viewer/reader demand (5%) grows the $72bn pond in the top-down case. Creator supply (10%) is how fast the pool of short-form creators grows — used as context for recruiting, not as “people who join Kahana.”',
  'Demand 5% (low 3% / high 9.2%): Mordor global ebooks 4.60% and Statista 2.46% (2026–2031) are the cleanest paid digital-reading proxies. Rounded up slightly for educational video, Clubs, and content memberships. Not full e-learning (10.86%, includes enterprise) and not edutainment’s 9.22% as the base.',
  'Supply 10% (low 7% / high 15%): Goldman Sachs people-count — about 67 million global creators in 2025 to about 107 million in 2030 (~9.8%, rounded to 10%). That is all creators, not education-only. No public CAGR exists for “learn/tips” creators on TikTok, Instagram, YouTube, or Pinterest.',
  'Excel 11.4% is Mordor’s global video-on-demand CAGR (~11.47%, 2026–2031). That includes Hollywood streaming. Ignore it as Kahana’s pond growth.',
  'Workbook 22.3% is The Business Research Company “Creatorplaces” dollar TAM ($8.34B to $18.66B, 2026–2030). Platform/monetization infrastructure, not creator headcount and not learner demand. Same problem as 23–28% “creator economy” dollar forecasts.',
  'Neither rate is Kahana conversion. Creators who actually put hubs on Kahana still come from the collab funnel (profiles → email → meeting → unpaid yes).',
]

/** Growth SaaS — product prices are locked; conversion ramps with the product, not 2026 beta. */
export const GROWTH_MONTHLY_PRICE = 9.99
export const GROWTH_ANNUAL_PRICE = 99.99
export const GROWTH_CONVERT_BETA = { base: 15 }
export const GROWTH_CONVERT = { low: 20, base: 30, high: 45 }
export const GROWTH_ANNUAL_MIX = { base: 30 }
export const DISCOVERY_GMV_LIFT = { low: 5, base: 15, high: 30 }

/**
 * Share of the three conversion-roadmap bets that are in-market that year.
 * 2027 = H1 shipping (not a full year of agents + recs). 2029+ = in-market.
 * Not a staffing plan — a conservative product-maturity curve.
 */
export const PRODUCT_MATURITY_PCT = {
  2027: 40,
  2028: 70,
  2029: 90,
  2030: 100,
  2031: 100,
}

export function productMaturityPct(year, inputs = {}) {
  if (inputs.productMaturityPct != null && inputs.productMaturityPct !== '') {
    return nFunnel(inputs.productMaturityPct)
  }
  return PRODUCT_MATURITY_PCT[year] ?? 100
}

export function effectiveGrowthConvertPct(year, inputs = {}) {
  const maturity = productMaturityPct(year, inputs) / 100
  const beta = nFunnel(inputs.growthConvertBetaPct ?? GROWTH_CONVERT_BETA.base)
  const full = nFunnel(inputs.growthConvertPct ?? GROWTH_CONVERT.base)
  return beta + (full - beta) * maturity
}

export function effectiveGmvPerSeller(year, inputs = {}) {
  const maturity = productMaturityPct(year, inputs) / 100
  const base = nFunnel(inputs.gmvPerMonetizingUser)
  const lift = nFunnel(inputs.discoveryGmvLiftPct) / 100
  return base * (1 + lift * maturity)
}

export function growthAnnualArpu(inputs = {}) {
  const monthly = nFunnel(inputs.growthMonthlyPrice ?? GROWTH_MONTHLY_PRICE)
  const annual = nFunnel(inputs.growthAnnualPrice ?? GROWTH_ANNUAL_PRICE)
  const mix = nFunnel(inputs.growthAnnualMixPct ?? GROWTH_ANNUAL_MIX.base) / 100
  return mix * annual + (1 - mix) * monthly * 12
}

export const GROWTH_SAAS_RATIONALE = [
  'Two cash streams: marketplace take (5% of hub GMV) and Growth SaaS. Enterprise stays $0. Free already includes Stripe monetization — selling a hub does not require Growth. Buyers and savers do not need Growth, so conversion is not applied to all YAU.',
  'Conversion is a north star. Do not hold the Aug 2026 rate (~9 paid / 6,554 registered ≈ 0.14%, ~$77 MRR). That was a worse product: no search algorithm, no marketplace discovery, weaker usability and UI. It is a floor, not the 2031 plan.',
  'Three feature families on the roadmap, all aimed at conversion and creator profitability: (1) a creator agent to publish a monetized hub faster and optimize hub info for discovery; (2) a viewer agent to search and find hubs/files (e.g. “top 20 Finance hubs by Aura in the last 7 days”); (3) personalized recommendations so viewers see the right hubs. More findable demand → more transactions → creators earn more → more likely to pay for extra hubs and 5 MB–5 GB uploads.',
  'Beta-floor conversion 15% of eligible publishers (generous Free: 3 hubs, 10 files, 5 MB). Full-product conversion 30% (low 20% / high 45%) once those bets are in-market — 2× the floor, not “most publishers pay.” Intern comps still apply in the collab year only.',
  'Discovery GMV lift 15% at full product (low 5% / high 30%) on GMV per selling creator. That is extra transaction volume from search + recs + the viewer agent, not a list-price increase. $1,250 × 1.15 ≈ $1,438, in range of the 2025 observed $1,382 with a better marketplace. Not Amazon-style “recs are a third of GMV.”',
  'Product maturity ramp (conservative, not a ship calendar): 40% in 2027, 70% in 2028, 90% in 2029, 100% in 2030–31. Effective conversion and GMV lift are blended between the beta floor and the full-product boxes. Billing mix 30% annual / 70% monthly; blended ARPU ≈ $114/year.',
]

export const CONSERVATIVE_YAU_RATIONALE = [
  '2026 starting YAU 500 is inferred, not measured (~8% of 6,554 registered). At 4% monetization that implies ~20 sellers vs 13 actual in 2025 — a small step-up, not a leap. Separate from the resurrection email, which wakes dormant accounts in 2027.',
  'Resurrection 7.5% of the dormant remainder of the 6,554 starting list: they come back as YAU (already registered). 20% of those publish a hub; 50% save. Hubs they publish mint the same extras as intern collabs — those extras are new 2027 registrations attributed to the starting base, not intern GTM.',
  'New registrations are intern launches (~43k in 2027) plus compounding that does not use intern hours: extras around k-published hubs, catalog discovery on already-live hubs (search / recs / viewer agent), and last year’s new users sharing. Intern hours stay 30 × 20h (new-user growth 0% on that box). The 43,308 line is intern-only, not total new accounts.',
  'YAU retention 50% (was a 55% placeholder): half of last year’s actives return. Activation 20% applies to savers, aspiring sellers, and pay-intent signups who do not finish checkout. Publishers and completed checkouts count as YAU in full.',
  '4% of publishing creators monetize (one seller per 25 publishers). Applied to publisher stock so savers do not mint sellers. GMV / seller $1,250 is the beta-era volume floor (~10% below the 2025 actual $1,382). Search, the viewer agent, and recommendations add a ramped discovery lift on top — not a price hike.',
  'Platform revenue is take + Growth SaaS. Eligible publishers → paid Growth ramps from a 15% beta floor to 30% once the conversion roadmap is in-market (creator publish agent, viewer search agent, recommendations). Intern collabs are complimentary in the collab year only. Do not freeze 9/6,554 as the 2031 rate. Enterprise is $0.',
]

export const ROLE_COMP = {
  CEO: { salary: 60000, raisePct: 0.25 },
  Engineer: { salary: 90000, raisePct: 0.05 },
  'Chief of Staff': { salary: 90000, raisePct: 0.1 },
  'Product Manager': { salary: 60000, raisePct: 0.1 },
}

/** Strict hiring priority — seed must clear each threshold in order. */
export const HIRING_PLAN = [
  { priority: 1, role: 'CEO', hires: 1, minRaise: 200000 },
  { priority: 2, role: 'Engineer', hires: 1, minRaise: 300000 },
  { priority: 3, role: 'Chief of Staff', hires: 1, minRaise: 600000 },
  { priority: 4, role: 'Engineer', hires: 1, minRaise: 900000 },
  { priority: 5, role: 'Product Manager', hires: 1, minRaise: 1200000 },
]

/** Historical Revenue_B actuals. YAU was not entered historically. */
export const BOTTOM_UP_HISTORY = {
  2023: {
    beginningUsers: 2000,
    newUsers: 1500,
    endingUsers: 3500,
    yau: 0,
    monetizingUsers: 14,
    gmv: 6080,
    platformRevenue: 304,
    transactions: 51,
  },
  2024: {
    beginningUsers: 3500,
    newUsers: 1300,
    endingUsers: 4800,
    yau: 0,
    monetizingUsers: 15,
    gmv: 1695.71,
    platformRevenue: 84.79,
    transactions: 53,
  },
  2025: {
    beginningUsers: 4800,
    newUsers: 0,
    endingUsers: 4800,
    yau: 0,
    monetizingUsers: 13,
    gmv: 17968.38,
    platformRevenue: 898.42,
    transactions: 104,
  },
  2026: {
    beginningUsers: 6000,
    newUsers: 554,
    endingUsers: 6554,
    yau: 0,
    monetizingUsers: 6,
    gmv: 10243,
    platformRevenue: 512.15,
    transactions: 36,
    months: 5,
  },
}

/** Historical + forecast tech/SaaS from Expenses_Y (Cursor $240/yr from 2027). */
export const TECH_EXPENSE = {
  2023: 1648,
  2024: 1648,
  2025: 1648,
  2026: 528,
  forecastAnnual: 240,
}

export const COMPARABLES = [
  {
    name: 'Stan Store',
    scale: '~70K creators; ~25-person team (2025)',
    revenue: '$25M revenue (2024); ~$41M ARR (2026)',
    cost: 'Profitable since 2022 seed; detailed P&L not public',
    quality: 'High / Medium',
    source: 'https://www.forbes.com/sites/victoriafeng/2025/08/12/this-startup-helps-creators-sell-classes-coaching-and-more-to-their-fans/',
  },
  {
    name: 'Kajabi',
    scale: '>250 employees; >$11B creator revenue powered',
    revenue: 'Close to $200M annual revenue (2026 commentary)',
    cost: 'Historically bootstrapped and profitable; current P&L not public',
    quality: 'High / Medium',
    source: 'https://www.spectrumequity.com/insights/partners-in-conversation-powering-creators-building-for-the-long-game/',
  },
  {
    name: 'Gumroad',
    scale: 'SEC-filed creator-commerce financials',
    revenue: '$17.8M revenue (2025 actual)',
    cost: '$6.1M COGS; $3.8M net income',
    quality: 'High',
    source: 'https://www.sec.gov/Archives/edgar/data/1532978/0001532978-26-000003-index.htm',
  },
  {
    name: 'Linktree',
    scale: '70M+ users',
    revenue: '~$55.5M revenue (2024 estimate)',
    cost: 'No reliable standalone public cost P&L',
    quality: 'Medium / Low',
    source: 'https://sacra.com/c/linktree/',
  },
  {
    name: 'Shopify',
    scale: '$378.4B GMV — much broader commerce platform',
    revenue: '$11.6B revenue (2025 actual)',
    cost: '$6.0B COGS; $4.1B OpEx; $1.47B operating income',
    quality: 'High',
    source: 'https://www.sec.gov/Archives/edgar/data/1594805/000159480526000007/shop-20251231.htm',
  },
  {
    name: 'Flodesk',
    scale: '50 FTE and 80K paying customers (May 2024)',
    revenue: '>$36M ARR (2025)',
    cost: 'Profitable; paid ads ~$700K/quarter in May-2024 interview',
    quality: 'High / Medium',
    source: 'https://flodesk.com/blog/a-milestone-year-made-together/',
  },
  {
    name: 'Teachable',
    scale: 'Hotmart + Teachable; 200K+ creators (2024)',
    revenue: 'Standalone not disclosed; $10B+ cumulative GMV across Hotmart + Teachable',
    cost: 'Standalone costs not disclosed',
    quality: 'High for GMV',
    source: 'https://www.teachable.com/press/hotmart-company-announces-10-billion',
  },
  {
    name: 'Podia',
    scale: 'Creator-focused all-in-one',
    revenue: 'Not publicly disclosed',
    cost: 'Company states it is profitable and independent',
    quality: 'High',
    source: 'https://www.podia.com/about',
  },
]

export const GLOSSARY = [
  {
    term: 'Top-down case',
    definition:
      'Kahana revenue = Kahana-relevant global market × Kahana share. Conservative default holds the 2026 implied share (target box 0). A 1% ramp is a stretch sensitivity, not the unpaid-collab plan. No U.S.-only cut — the model is global.',
  },
  {
    term: 'Bottom-up / YAU case',
    definition:
      'Platform revenue = Growth SaaS + 5% take on hub GMV. Take = publishing creators × monetization rate × GMV per monetizing user × take rate. Growth = (publishers minus this year’s intern comps) × conversion × blended $9.99 / $99.99 ARPU. Intern collabs are complimentary in the collab year only. Historical YAU was not filled in the workbook. The conservative case infers a 2026 starting YAU, then forecast YAU = retained prior YAU + newly activated hub extras + publishers + a one-time 2027 resurrection of the 6,554 starting base. Hub extras (intern collabs and resurrection-published hubs) are pay-intent (some unfinished checkout), savers of this hub, savers of another hub, and aspiring sellers.',
  },
  {
    term: 'Viewer / reader demand CAGR',
    definition:
      'How fast the pond of people who learn, read, and watch longer-form content grows. Page default 5%, anchored to global ebook forecasts (Statista 2.46%, Mordor 4.60%, 2026–2031) with a small lift for educational video and Clubs. This is the top-down Market CAGR box. Not VOD 11.4% and not Creatorplaces 22.3%.',
  },
  {
    term: 'Creator-supply CAGR',
    definition:
      'How fast the global pool of people who create and post content is growing. Page default 10% from Goldman Sachs (~67M creators in 2025 to ~107M in 2030). All creators, not education-only; no public “learn/tips” split. Not Kahana signups — those come from the collab funnel.',
  },
  {
    term: 'Hub-to-creator virality (k)',
    definition:
      'Extra first-time publishers per publishing creator per year from seeing a hub. Page assumption 0.05 (low 0.01 / high 0.15). Those people were usually already registered; their new hub mints extras (new accounts) like an intern collab. Catalog discovery and signup virality are separate compounding loops. k ≥ 1 is not the base plan.',
  },
  {
    term: 'Resurrection rate',
    definition:
      'Share of the 6,554 starting registered accounts who do at least one meaningful action in 2027 after the planned “what’s new” email. Working range 5–10%, default 7.5%. Applied to the dormant remainder (registered minus 2026 starting YAU). They already have accounts. Those who come back can publish and save hubs; hubs they publish mint new registrations (same extras as intern collabs), attributed to this starting base — not intern GTM, not an open rate, and not virality k.',
  },
  {
    term: 'YAU retention',
    definition:
      'Share of last year’s yearly actives who complete at least one meaningful action again this year. Page assumption 50% (low 35% / high 65%). Labeled — no public analogue publishes this cohort. Not DAU/MAU, email opens, or registered-account retention.',
  },
  {
    term: 'New-user activation',
    definition:
      'Share of saver, aspiring-seller, and unfinished-checkout registrations that become YAU in the same calendar year. Publishers and completed checkouts count as YAU in full. Page assumption 20% (low 10% / high 35%).',
  },
  {
    term: 'Annual monetization rate',
    definition:
      'Share of publishing creators who make at least one sale in the year. Page assumption 4% (low 2% / high 8%). Applied to publisher stock, not all YAU, so Substack-style savers do not mint sellers. Not the 5% take rate.',
  },
  {
    term: 'GMV / monetizing user',
    definition:
      'Annual gross merchandise value per selling creator, before the 5% take. Page assumption $1,250 is the beta-era volume floor (low $750 / high $2,500), about 10% below the 2025 observed $1,382. Search, the viewer agent, and recommendations add a ramped discovery lift. Not the ~$25k organic outlier.',
  },
  {
    term: 'Growth SaaS',
    definition:
      'Kahana’s $9.99/month or $99.99/year plan: more than 3 hubs, unlimited files per hub, uploads from 5 MB to 5 GB. Free already includes Stripe sales. Conversion ramps from a 15% beta floor to 30% of eligible publishers as the creator agent, viewer search agent, and recommendations ship. Intern comps apply in the collab year only. The 2026 ~9/6,554 rate is not the 2031 plan.',
  },
  {
    term: 'YAU',
    definition:
      'Yearly active users — unique people who do at least one meaningful activity on Kahana during the year. Not the same as registered users or monetizing creators.',
  },
  {
    term: 'Two cases, not a sum',
    definition:
      'Top-down and bottom-up are alternative views of the same business. Do not add them. The Summary IS shows each case with the shared expense forecast.',
  },
  {
    term: 'Hiring waterfall',
    definition:
      'Seed raise amount walks a strict priority list (CEO → engineer → chief of staff → second engineer → PM). All funded roles hire in the funding year. Raises start the following year. No attrition.',
  },
  {
    term: 'Taxes',
    definition:
      'Tax expense only when pre-tax income is positive. No NOL carryforward. Default federal 21%, state 0%.',
  },
]

/**
 * Hover copy for inputs and outputs. title = term name; body = what it is and how the model uses it.
 */
export const TERM_HELP = {
  topDown: {
    title: 'Top-down case',
    body: 'Kahana revenue = relevant global market × Kahana share. Conservative default holds today’s implied share (target box 0). Type 1 to restore a stretch ramp. Do not add this to the YAU case.',
  },
  bottomUp: {
    title: 'Bottom-up / YAU case',
    body: 'Platform revenue = Growth SaaS + 5% take on hub GMV. Take from publishing creators × monetization × GMV per seller. Growth from publishers except this year’s intern comps. An operating build of users and sellers, not a market-share story. Do not add this to the top-down case.',
  },
  yau: {
    title: 'YAU — yearly active users',
    body: 'Unique people who do at least one meaningful activity on Kahana during the year. Not registered accounts, and not the same as monetizing creators. Forecast YAU = retained prior YAU + new collab publishers + new buyers + activated savers and aspiring sellers + a one-time 2027 resurrection.',
  },
  twoCases: {
    title: 'Two cases, not a sum',
    body: 'Top-down and bottom-up are alternative views of the same business. Expenses and hiring are shared. Do not add the two revenue lines together.',
  },
  globalMarketBn2026: {
    title: '2026 global market',
    body: 'Starting TAM in billions of dollars for 2026. Built from Company Landscape revenue and user-base enrichment, not a single third-party TAM report. Independently cross-checked with a teammate’s market-size work and landed in the same ballpark. Default $360bn. The model grows this at market CAGR.',
  },
  relevantSegmentPct: {
    title: 'Kahana-relevant segment',
    body: 'Share of the $360bn landscape market that is Kahana’s pond — learn / read / watch to go deeper (educational hubs, Clubs, library). Not creator-tools-only (that was 7.5%) and not all of Hollywood streaming. Default on this page is 20% → $72bn in 2026. Matches the unpaid creator-collab campaign. Workbook Excel still has 7.5%.',
  },
  marketCagrPct: {
    title: 'Market CAGR (viewer / reader demand)',
    body: 'How fast the $72bn pond grows — learners and readers, not creator headcount. Base 5% (low 3% / high 9.2%). Anchored to Mordor ebooks 4.60% and Statista ebooks 2.46% (2026–2031), nudged up for educational video, Clubs, and memberships. Excludes Hollywood VOD (~11.47%) and Creatorplaces dollar TAM (22.3%). This box drives top-down revenue. Creator-supply 10% is a separate rate.',
  },
  viralK: {
    title: 'Hub-to-creator virality (k)',
    body: 'Extra people who publish a first hub within 12 months per creator who already published. Base 0.05: 100 publishers → ~5 extra publishers/year. Low 0.01 / high 0.15. Those publishers were usually already registered. Their new hub mints the same extras as an intern collab — those extras are new accounts. k ≥ 1 is excluded from the base plan.',
  },
  resurrectionPublishPct: {
    title: 'Resurrected who publish',
    body: 'Share of resurrected YAU who put a hub on the library. Default 20%. They already have accounts, so they are not new registrations and intern hours are not used. Each hub they publish mints the same extras as an intern collab — those extras are new accounts attributed to the 6,554 starting base.',
  },
  resurrectionSavePct: {
    title: 'Resurrected who save',
    body: 'Share of resurrected YAU who save a hub (this one or another). Default 50%. Already registered — no new account. Overlaps with publishing is allowed.',
  },
  resurrectionPct: {
    title: 'Resurrection rate',
    body: 'Share of the 6,554 starting registered accounts who do one meaningful action in 2027 after the “what’s new” email. Working range 5–10%; default 7.5% of the dormant remainder (6,554 minus starting YAU) ≈ 454 people. They already have accounts — this is not a new signup. Those who come back can publish hubs and save hubs. Hubs they publish mint new registrations (same extras as intern collabs), attributed to this starting base.',
  },
  creatorSupplyCagr: {
    title: 'Creator-supply CAGR',
    body: 'How fast the pool of people posting content is growing. 10% (low 7% / high 15%) from Goldman Sachs: about 67 million global creators in 2025 to about 107 million in 2030. Measures all creators, not educational short-form only — there is no public TikTok/IG/YouTube/Pinterest “learn/tips” count CAGR. Does not change the top-down chart. Kahana conversion is still the collab funnel.',
  },
  kahanaRevenue2026: {
    title: '2026 Kahana platform revenue',
    body: 'Starting Kahana take used only to imply 2026 share of the $72bn pond (this revenue ÷ relevant market). Workbook round number is $1,000. Lifetime actual take through 28 May 2026 was $1,799 (5% of $35,987 GMV) in beta, with no creator-collab campaigns in 2025–26 — purely organic. 2025 actual $898; 2026 YTD $512. Stripe collected $1,602 in fees (one $3,500 sale had a $0 fee); the model uses contractual 5%. This is not a 2026 full-year forecast and does not assume marketplace search or paid collabs.',
  },
  targetSharePct: {
    title: 'Target share at forecast end',
    body: 'Kahana’s share of the relevant market in the last horizon year. Conservative default is 0% in this box, which means hold the 2026 implied share — no ramp to 1%. 1% of the ~$72bn pond is a stretch sensitivity (~$1bn take by 2033), not the unpaid-collab plan. Workbook Excel still has 1%.',
  },
  horizonYears: {
    title: 'Forecast horizon',
    body: 'Years from 2026 shown on the top-down path. t = 0 is 2026. Conservative case holds share, so horizon only grows the pond at 5% CAGR. The income statement still prints through 2031F even if the horizon ends later.',
  },
  startingYau: {
    title: '2026 starting YAU',
    body: 'Inferred yearly actives at the end of 2026, used as the base for 2027F. The workbook never measured YAU, so historical years show “—”. Conservative default 500 ≈ 8% of 6,554 registered users (founder census, mix of small-scale creators and viewers). The resurrection rate is a separate 2027 lift of dormant people on that same list — it does not replace this starting YAU.',
  },
  newRegisteredUsers: {
    title: 'New registered users (2027)',
    body: 'Accounts added in 2027F from intern unpaid collabs only. Conservative default is implied by that funnel. Later years grow that intern add only if new-user growth > 0 (default 0% — hours stay 30 × 20h). The engine then adds resurrection extras, k-hub extras, catalog discovery, and signup virality on top.',
  },
  newUserGrowthPct: {
    title: 'New-user growth',
    body: 'Growth of the intern outreach add from 2028 on — not catalog virality. Conservative default 0% keeps 30 × 20h intern signups flat. Compounding lives in catalog discovery and signup virality, which do not need more intern hours.',
  },
  yauRetentionPct: {
    title: 'YAU retention',
    body: 'Share of last year’s YAU that is active again this year. Retained YAU = prior YAU × this rate. The rest churn. Labeled assumption, not a measured Kahana cohort. Base 50% (low 35% / high 65%). 55% was slightly optimistic for a beta marketplace. Not DAU/MAU, email opens, seller retention, or registered-account retention.',
  },
  newUserActivationPct: {
    title: 'New-user activation',
    body: 'Share of saver, aspiring-seller, and unfinished-checkout registrations that become YAU in that same calendar year. Collab publishers and completed checkouts count as YAU in full. Labeled assumption. Base 20% (low 10% / high 35%).',
  },
  monetizationRatePct: {
    title: 'Annual monetization rate',
    body: 'Share of publishing creators who make at least one sale in the year. Monetizing creators = publisher stock × this rate. Applied to publishers, not all YAU, so Substack-style savers do not mint sellers. Labeled assumption. Base 4% (low 2% / high 8%). Not the 5% take rate, not 13 sellers / 6,554 registered, not Substack free-to-paid.',
  },
  gmvPerMonetizingUser: {
    title: 'GMV / monetizing user',
    body: 'Gross merchandise value one selling creator generates in a year, before Kahana’s 5% fee. Creator GMV = monetizing creators × this amount × (1 + discovery lift × product maturity). Labeled assumption. Base $1,250 is the beta-era volume floor (low $750 / high $2,500), about 10% below the 2025 observed $1,382. Not the ~$25k organic outlier, not GMV per YAU, not Whop-style high-intensity seller GMV.',
  },
  takeRatePct: {
    title: 'Platform take rate',
    body: 'Kahana’s application fee on GMV. Marketplace take = GMV × take rate. Product default is 5% (Stripe Connect). Not the same as monetization rate, and not Growth SaaS.',
  },
  txPerMonetizingUser: {
    title: 'Transactions / monetizing user',
    body: 'Average paid transactions per selling creator per year. Used only to imply AOV (GMV ÷ transactions). Does not change platform revenue. 2026 YTD actual was 6.',
  },
  seedRaise: {
    title: 'Seed raise',
    body: 'Equity raised. Walks a strict hiring list: CEO at $200k, engineer $300k, chief of staff $600k, second engineer $900k, PM $1.2M. $0 means no hires. Does not change revenue.',
  },
  fundingYear: {
    title: 'Funding year',
    body: 'Calendar year all funded roles are hired. Raises start the following year. No attrition.',
  },
  payrollBenefitsPct: {
    title: 'Payroll taxes & benefits',
    body: 'Markup on cash salaries. Personnel expense = cash compensation × (1 + this rate). Default 0% matches the workbook.',
  },
  federalTaxPct: {
    title: 'Federal tax',
    body: 'Tax rate applied only when operating income is positive. No NOL carryforward. Default 21%. State tax is a separate input (default 0%).',
  },
  paidMarketingAnnual: {
    title: 'Paid marketing',
    body: 'Annual paid-acquisition spend in forecast years. Sits in sales & marketing. Not applied to historical or 2026 YTD columns.',
  },
  creatorPartnershipsAnnual: {
    title: 'Creator partnerships',
    body: 'Annual creator / collab spend in forecast years. Sits in sales & marketing with paid marketing and brand content.',
  },
  legalAnnual: {
    title: 'Legal',
    body: 'Annual legal spend in forecast years. Sits in G&A with accounting and insurance.',
  },
  paymentProcessingAnnual: {
    title: 'Payment processing',
    body: 'Annual processor / platform variable cost in forecast years. Sits in cost of revenue (transaction / platform costs), not operating expenses.',
  },
  td2031Revenue: {
    title: '2031F top-down revenue',
    body: 'Kahana platform revenue in 2031 under the share-ramp case: relevant market that year × ramped share. Not GMV, and not added to the YAU case.',
  },
  td2031Net: {
    title: '2031F top-down net income',
    body: 'Top-down 2031 revenue minus shared COGS, opex, and tax (tax only if operating income is positive).',
  },
  targetShareKpi: {
    title: 'Target share',
    body: 'Kahana’s share of the relevant market in the last horizon year. Conservative default holds 2026 implied share (this box 0). 1% is a stretch on the grid, not the plan.',
  },
  headcount2031: {
    title: '2031F headcount',
    body: 'Funded roles still in seat in 2031. With $0 seed this is 0. Hiring does not change the revenue cases; it only changes personnel expense.',
  },
  bu2031Revenue: {
    title: '2031F YAU platform revenue',
    body: 'Kahana’s 2031 bottom-up cash: Growth SaaS + 5% take on hub GMV. Do not add to top-down.',
  },
  bu2031Gmv: {
    title: '2031F creator GMV',
    body: 'Gross merchandise value — all hub sales before Kahana’s fee. Marketplace take is 5% of this amount. Growth SaaS is separate.',
  },
  bu2031Yau: {
    title: '2031F yearly active users',
    body: 'Forecast YAU in 2031. Built as retained prior YAU plus newly activated registrations each year, starting from the 2026 starting YAU, plus a one-time 2027 resurrection of dormant accounts on the 6,554 list.',
  },
  bu2031Monetizing: {
    title: '2031F monetizing creators',
    body: 'Publisher stock × annual monetization rate. People with at least one sale in 2031. 2025 actual was 13.',
  },
  newUsersOut: {
    title: 'New registered users',
    body: 'Accounts added that year. History is actuals. Forecast = intern outreach add + extras around resurrection hubs + extras around k first hubs + catalog discovery on already-live hubs + last year’s new users × signup virality. Intern hours stay flat; the other loops compound.',
  },
  kNewOut: {
    title: 'New publishers from k',
    body: 'Last year’s publishing-creator stock × hub-to-creator k. These people publish a first hub after seeing someone else’s. They are YAU (usually already registered). Their hub mints new accounts (pay-intent / savers / aspiring) like an intern collab.',
  },
  internPublishersOut: {
    title: 'Intern publishers (comped this year)',
    body: 'This year’s unpaid-collab creators with a published hub. Complimentary Growth for the collab year — $0 SaaS. Next year they join the paid-eligible pool if they are still publishing (YAU retention).',
  },
  selfServePublishersOut: {
    title: 'Paid-eligible publishers',
    body: 'Publishers who can pay for Growth: retained publishers from last year (including last year’s intern collabs) + resurrection publishers + k recruits. This year’s intern comps are excluded. Paid Growth conversion applies to this stock.',
  },
  publishersOut: {
    title: 'Publishing creators',
    body: 'Stock of people with a published hub. Forecast: this year’s intern collabs (complimentary Growth that year) + paid-eligible publishers (retained prior publishers, resurrection, k). History uses selling creators as a proxy — Kahana did not count publishers separately.',
  },
  endingUsersOut: {
    title: 'Ending registered users',
    body: 'Cumulative registered accounts at year end: beginning + new adds. Includes dormant accounts. Not YAU.',
  },
  yauOut: {
    title: 'Yearly active users',
    body: 'Forecast: retained prior YAU + intern collab publishers + completed checkouts + (unfinished pay-intent + savers + aspiring sellers) × activation + a one-time 2027 resurrection of the 6,554 starting base (including extras around hubs they publish). History was never recorded in the workbook, so actuals show “—”.',
  },
  resurrectedOut: {
    title: 'Resurrected users (2027)',
    body: 'One-time 2027 add: resurrection rate × dormant accounts on the 6,554 starting list (registered minus 2026 starting YAU). Already registered — not a new signup. A share of them publish hubs; those hubs mint new accounts (shown separately). Later forecast years are 0 — those people stay in YAU only through retention. Historical years are 0 because the campaign has not run.',
  },
  resurrectionPublishersOut: {
    title: 'Resurrected who publish',
    body: 'Resurrected YAU × resurrected-who-publish %. Default 20%. Already registered; intern hours are not used. Each hub they put on the library mints the same extras as an intern collab.',
  },
  resurrectionNewUsersOut: {
    title: 'New accounts from resurrection hubs',
    body: 'Extras around hubs published by resurrected people on the 6,554 list: pay-intent + savers + aspiring sellers. These are new registrations attributed to the starting base, not intern GTM. The resurrected publishers themselves are not counted again.',
  },
  resurrectionSaversOut: {
    title: 'Resurrected who save',
    body: 'Resurrected YAU × resurrected-who-save %. Default 50%. Already registered — no new account. Overlap with publishing is allowed.',
  },
  buyersOut: {
    title: 'New pay-intent accounts',
    body: 'Published intern and resurrection hubs × pay-intent signups per hub (default 15). People who create an account intending to pay; checkout completion is who finish. Amy ~13/year is the same order, not the average collab’s traffic.',
  },
  completedBuyersOut: {
    title: 'Completed checkouts',
    body: 'Pay-intent accounts × checkout completion (default 50%). The rest keep an account. Does not set GMV.',
  },
  saversThisOut: {
    title: 'Savers of this hub',
    body: 'Published intern and resurrection hubs × 2. Saw that hub and created an account to save it for later.',
  },
  saversOtherOut: {
    title: 'Savers of another hub',
    body: 'Published intern and resurrection hubs × 2. Attracted by that hub, then signed up to save a different one.',
  },
  monetizingOut: {
    title: 'Monetizing creators',
    body: 'People with at least one sale in the year. History is actuals. Forecast = publishing creators × monetization rate.',
  },
  gmvOut: {
    title: 'Creator GMV',
    body: 'Gross merchandise value of hub sales before Kahana’s fee. Forecast = monetizing creators × effective GMV per seller (base × discovery lift × product maturity).',
  },
  takeOut: {
    title: 'Marketplace take',
    body: 'Kahana’s application fee: GMV × 5% take rate. One of two bottom-up cash streams. Historical years on this page are take only.',
  },
  growthSubsOut: {
    title: 'Paid Growth subscribers',
    body: 'Paid-eligible publishers × that year’s effective Growth conversion (beta floor blended to full-product rate along the product-maturity ramp). Eligible = all publishers except this year’s intern comps. Not YAU and not buyers.',
  },
  growthRevOut: {
    title: 'Growth SaaS revenue',
    body: 'Paid Growth subscribers × blended annual ARPU ($9.99/mo and $99.99/yr at the annual-mix %). Unlocks 4th+ hubs, unlimited files, and 5 MB–5 GB uploads.',
  },
  platformRevOut: {
    title: 'Platform revenue (total)',
    body: 'Growth SaaS + marketplace take. This is the bottom-up revenue line on the income statement. Historical years are take only (Growth MRR was not in the workbook).',
  },
  growthConvertPct: {
    title: 'Full-product Growth conversion',
    body: 'Share of paid-eligible publishing creators who pay for Growth once the conversion roadmap is in-market (creator publish agent, viewer search agent, recommendations). Default 30% (low 20% / high 45%). The engine blends this with the 15% beta floor along the product-maturity ramp. Do not hold ~9/6,554. Eligible excludes this year’s intern comps. Not applied to savers or buyers.',
  },
  growthConvertBetaPct: {
    title: 'Beta-floor Growth conversion',
    body: 'Eligible-publisher conversion in 2026-like product conditions (no search algorithm, no marketplace discovery, weaker UX). Default 15%. Used only as the start of the ramp — not the 2031 rate. Stripe Aug 2026 ~9 paid / 6,554 registered is the same era, not a target.',
  },
  discoveryGmvLiftPct: {
    title: 'Discovery GMV lift (full product)',
    body: 'Extra GMV per selling creator at full product from viewer search, the viewer agent, and personalized recommendations. Default 15% (low 5% / high 30%). Volume, not a price increase. Blended with 0% along the product-maturity ramp. $1,250 × 1.15 ≈ $1,438 vs 2025 observed $1,382.',
  },
  productMaturityOut: {
    title: 'Product maturity',
    body: 'Share of the conversion roadmap in-market that year: 40% in 2027, 70% in 2028, 90% in 2029, 100% from 2030. Blends beta-floor conversion and $1,250 GMV into the full-product boxes.',
  },
  growthAnnualMixPct: {
    title: 'Growth annual billing mix',
    body: 'Share of paid Growth subscribers on $99.99/year instead of $9.99/month. Default 30%, near the Aug 2026 list-price Stripe mix. Higher annual mix lowers ARPU.',
  },
  growthMonthlyPrice: {
    title: 'Growth monthly price',
    body: 'Product default $9.99/month. Unlimited hubs, unlimited files per hub, 5 GB max file size, 100 GB storage, live chat.',
  },
  growthAnnualPrice: {
    title: 'Growth annual price',
    body: 'Product default $99.99/year (~17% less than 12 × $9.99). Same Growth limits as monthly.',
  },
  pnlRevenue: {
    title: 'Platform revenue',
    body: 'Kahana’s cash, not creator GMV. Top-down: relevant market × share. Bottom-up: Growth SaaS + GMV × take rate. Historical bottom-up uses take actuals only.',
  },
  pnlCogs: {
    title: 'Transaction / platform costs',
    body: 'Cost of revenue: payment processing + other variable platform costs. Forecast years use the annual opex inputs. Historical columns are $0 in this model besides what the workbook booked.',
  },
  pnlGross: {
    title: 'Gross profit',
    body: 'Platform revenue minus transaction / platform costs.',
  },
  pnlGrossMargin: {
    title: 'Gross margin',
    body: 'Gross profit ÷ platform revenue.',
  },
  pnlPersonnel: {
    title: 'Personnel',
    body: 'Cash salaries for funded roles, plus payroll taxes & benefits. $0 when seed is $0. Forecast years only.',
  },
  pnlTech: {
    title: 'Technology & infrastructure',
    body: 'SaaS / tech spend. History from the workbook (e.g. $1,648). Forecast years default to $240/yr (Cursor).',
  },
  pnlSales: {
    title: 'Sales & marketing',
    body: 'Paid marketing + creator partnerships + brand content. Forecast years only; $0 in historical columns.',
  },
  pnlGa: {
    title: 'G&A',
    body: 'Legal + accounting + insurance. Forecast years only.',
  },
  pnlOpex: {
    title: 'Total operating expenses',
    body: 'Personnel + technology + sales & marketing + G&A. Does not include transaction / platform costs (those are above gross profit).',
  },
  pnlOpInc: {
    title: 'Operating income',
    body: 'Gross profit minus total operating expenses. No interest or other non-operating items.',
  },
  pnlOpMargin: {
    title: 'Operating margin',
    body: 'Operating income ÷ platform revenue.',
  },
  pnlTax: {
    title: 'Taxes',
    body: 'Federal + state tax on positive operating income only. No NOL carryforward. $0 when the year is a loss.',
  },
  pnlNet: {
    title: 'Net income',
    body: 'Operating income minus taxes. Same as pre-tax income in this model because interest is not modeled.',
  },
  pnlNetMargin: {
    title: 'Net margin',
    body: 'Net income ÷ platform revenue.',
  },
  hiringWaterfall: {
    title: 'Hiring waterfall',
    body: 'Seed must clear each threshold in order: CEO $200k → engineer $300k → CoS $600k → engineer $900k → PM $1.2M. Skip a rung and later roles stay unfunded.',
  },
  minSeed: {
    title: 'Min seed',
    body: 'Raise amount that must be reached, and all prior roles funded, before this seat is hired.',
  },
  hireYear: {
    title: 'Hire year',
    body: 'Year the role starts. Always the funding year if funded. Raises apply from the following year. No attrition.',
  },
  tornado: {
    title: 'Tornado',
    body: 'Each driver is shocked ±20% (horizon ±2 years) holding everything else at the current case. The output is 2031F top-down platform revenue. Longer bars = more sensitive.',
  },
  twoWayGrid: {
    title: 'Two-way grid',
    body: '2031F top-down platform revenue at each market CAGR × target share pair, holding other drivers at the current case. Darker cells are larger.',
  },
  funnelPeople: {
    title: 'Outreach people',
    body: 'People on the unpaid-collab motion each week. Locked at 30, all working 20 hours. Excel’s old funnel was also 30 people, but at 10 hours and 10 profiles/hour.',
  },
  funnelHours: {
    title: 'Hours / week / person',
    body: 'Hours each of the 30 people spends on profiles, email, meetings, and hub setup. Locked at 20. Those hours are split: outreach produces yeses; only the 80% who publish take 5 hours of setup.',
  },
  funnelWeeks: {
    title: 'Working weeks',
    body: 'Weeks the 30 people work this motion. Locked at 48, stable all year — not a seasonal ramp and not 52.',
  },
  funnelProfiles: {
    title: 'Profiles / hour',
    body: 'Learn/tips profiles reviewed per outreach hour. Plan default 30 (founder). Excel workbook was 10.',
  },
  funnelEmailFound: {
    title: 'Email found %',
    body: 'Share of reviewed profiles that yield a usable email. Plan default 10% is conservative (founder: okay to keep).',
  },
  funnelSetup: {
    title: 'Setup hours / published hub',
    body: 'White-glove hub setup, about 4–6 hours; default 5. Charged only against yeses who finish and publish — not against the 20% who say yes and never ship.',
  },
  funnelEmails: {
    title: 'Emails found',
    body: 'Weekly profiles × email-found rate. Plan default 10% is conservative (founder: okay to keep).',
  },
  funnelResponses: {
    title: 'Responses',
    body: 'Emails × 30% reply rate (founder).',
  },
  funnelMeetings: {
    title: 'Meetings',
    body: '10 meetings per 100 emails (founder). Not 15% of replies from the Excel sheet.',
  },
  funnelCollabs: {
    title: 'Yes to collaborate',
    body: '50% of meetings say yes unpaid; the other 50% want to be paid (Creator Fund later, from profits). 80% if seed > $0. Only 80% of unpaid yeses publish a hub. Each published hub then brings pay-intent signups, savers, and aspiring sellers.',
  },
  funnelPublish: {
    title: 'Collab → published hub',
    body: 'Share of unpaid yeses who finish and publish the hub. Plan default 80%. The other 20% said yes but never ship. Setup hours and extra signups attach to published hubs only.',
  },
  extraBuyersPerHub: {
    title: 'Pay-intent signups per published hub',
    body: 'People who create an account intending to pay. Default 15 from Etsy Q4 2025 (~86.5M active buyers / ~5.6M active sellers). Amy ~13/year is the same order. Not all finish checkout — see checkout completion. Not 15 × AOV added to GMV.',
  },
  checkoutCompletionPct: {
    title: 'Checkout completion',
    body: 'Share of pay-intent signups who actually finish the purchase. Default 50%. The rest keep an account and are treated like savers for YAU (20% activation). GMV is still $1,250 per selling creator, not completed checkouts × AOV.',
  },
  extraSaversThisHub: {
    title: 'Savers of this hub',
    body: 'People who see the collab hub and create an account to save it for later. Default 2 for an average collab — not Amy’s view volume, and not a Substack free list.',
  },
  extraSaversOtherHub: {
    title: 'Savers of another hub',
    body: 'People attracted to Kahana by that collab creator’s hub who then sign up to save a different hub. Default 2. Library browse after arrival, not buyers and not k.',
  },
  extraAspiringSellersPerHub: {
    title: 'Aspiring-seller signups per hub',
    body: 'Accounts created intending to sell after seeing a hub. Default 0.05 — same order as k, not Etsy’s 1 seller per 15 buyers (that is live-shop stock). Most never publish. k is who actually ships a hub later, and is not counted again as a new account.',
  },
  catalogSignupsPerPublisher: {
    title: 'Catalog signups / live publisher',
    body: 'New accounts per already-live publisher per year at full product, from search, the viewer agent, and recommendations — not the collab launch week. Default 3 (low 1 / high 8), about 16% of a launch’s extras, every year. Ramped with product maturity. This year’s intern launches are counted in the intern add, not here.',
  },
  signupViralK: {
    title: 'Signup virality',
    body: 'Extra new accounts next year per new account this year (share, Linktree, word of mouth). Default 0.25 at full product (low 0.1 / high 0.5). Ramped with product maturity. Below 1, so intern remains the engine. Not intern-hour growth.',
  },
  catalogNewOut: {
    title: 'New from catalog discovery',
    body: 'Already-live publishers × catalog signups per publisher × product maturity. People who find an existing hub via search / recs / viewer agent and create an account.',
  },
  signupViralOut: {
    title: 'New from signup virality',
    body: 'Last year’s new accounts × signup virality × product maturity.',
  },
  kExtrasOut: {
    title: 'New from k hubs',
    body: 'First hubs published via hub-to-creator k × extras per hub. The k publishers themselves are usually already registered.',
  },
  extraSignupsPerCollab: {
    title: 'Extra signups per published hub',
    body: 'Pay-intent + savers of this hub + savers of another hub + aspiring sellers, besides the publisher. Default ~19 = 15 + 2 + 2 + 0.05. Same mix on intern collabs, resurrection hubs, and k first hubs. Spillover, not intern hours.',
  },
  relevantMarket: {
    title: 'Relevant market',
    body: 'Global market × Kahana-relevant segment %. Page default: $360bn × 20% = $72bn. Excel workbook still uses 7.5% ($27bn).',
  },
  impliedShare: {
    title: 'Implied 2026 share',
    body: '2026 Kahana platform revenue ÷ 2026 relevant market. With page defaults, $1,000 / $72bn ≈ 0.000001%. Conservative top-down holds this share (target box = 0). A 1% ramp is a stretch sensitivity, not the plan.',
  },
}

export const METHOD_NOTES = [
  'The Excel Summary IS looks up a sheet named Revenue_YAU; the workbook tab is actually Revenue_B, so the Excel bottom-up IS is blank. This page uses the Revenue_B driver build.',
  'Top-down P&L starts in 2027F. Revenue_T has a 2026 annual base ($1,000), while Expenses_Y has only five months of 2026 YTD, so a 2026 top-down income statement would not be period-comparable.',
  'Transaction / platform costs sit in cost of revenue. Personnel, technology, sales & marketing, and G&A are operating expenses.',
  'Pre-tax income equals operating income — interest and other non-operating items are not modeled.',
  'Market CAGR on this page is 5% viewer/reader demand (ebook-anchored). Excel still has 11.4%. Do not use 11.4% (Mordor VOD / entertainment streaming) or 22.3% (The Business Research Company Creatorplaces dollar TAM) as people-count growth. Creator-supply proxy is 10% (Goldman Sachs global creator population, 67M in 2025 to 107M in 2030) — that feeds new-creator growth, not this top-down box.',
  'The page loads a conservative plan-based YAU case: 30 people × 20 hours/week all year (48 weeks), 10% email-found, 80% of unpaid yeses publish, 15 pay-intent + 4 savers per hub, no share ramp, no paid hires.',
  '2026 Kahana platform revenue $1,000 is the Excel round number for implied share, not a campaign forecast. 2025–26 GMV was organic-only (no collab outreach) on the beta product, before marketplace search and later hub-discovery work. Lifetime through 28 May 2026: 36 selling creators, $35,987 GMV, $1,799 contractual take. 2025 $898; 2026 YTD $512.',
  'Hub-to-creator virality k = 0.05 (low 0.01 / high 0.15): extra first-time publishers from last year’s publisher stock. Their hubs mint launch extras (new accounts). Catalog discovery adds 3 signups per already-live publisher per year at full product; signup virality 0.25 compounds last year’s new accounts. Both ramp with product maturity. Intern add stays flat (0% on that box). k ≥ 1 is not the base plan.',
  'Resurrection 7.5% (range 5–10%) of the dormant remainder of the 6,554 registered census: a one-time 2027 YAU add after the planned “what’s new” email. Not an open rate. 20% of those publish a hub (no intern hours); 50% save. Hubs they publish mint new registrations (same extras as intern collabs), attributed to this starting base. Workbook case is 0% because Excel never modeled the campaign.',
  'YAU operating rates are labeled assumptions (no public analogue publishes these exact cohorts): retention 50% (low 35 / high 65), saver/aspiring activation 20% (10 / 35), monetization 4% of publishers (2 / 8), GMV/seller $1,250 ($750 / $2,500) as a beta volume floor. Search, the viewer agent, and recommendations add a ramped 15% discovery GMV lift at full product.',
  'Bottom-up platform revenue is Growth SaaS + 5% take. Conversion is a north star: it ramps from a 15% eligible-publisher beta floor to 30% full product as three bets ship — creator publish agent, viewer search agent, personalized recommendations. Do not hold Aug 2026 ~9/6,554. Intern collabs are complimentary in the collab year only. Discovery GMV lift 15% at full product is extra transaction volume, not a price hike. Product maturity 40/70/90/100% across 2027–30. Enterprise is $0. Workbook actuals 2023–26 are take only.',
  'Conservative top-down holds 2026 implied share (target box 0). 1% of the pond is a stretch cell on the sensitivity grid. Intern new registrations default from the 30 × 20h funnel and stay flat (0% intern-hour growth). Catalog discovery (3 signups per live publisher at full product), k-hub extras, and signup virality (0.25) compound on top, ramped with product maturity.',
]

export const SENSITIVITY_CAGR_PCTS = [3, 5, 10, 11.4, 22.3]
export const SENSITIVITY_SHARE_PCTS = [0.1, 0.5, 1, 2, 5]

export const TORNADO_DRIVERS = [
  { key: 'marketCagrPct', label: 'Market CAGR', kind: 'pct' },
  { key: 'relevantSegmentPct', label: 'Relevant segment %', kind: 'pct' },
  { key: 'targetSharePct', label: 'Target share %', kind: 'pct' },
  { key: 'horizonYears', label: 'Horizon (years)', kind: 'years' },
  { key: 'takeRatePct', label: 'Take rate %', kind: 'pct' },
  { key: 'seedRaise', label: 'Seed raise', kind: 'usd' },
]
