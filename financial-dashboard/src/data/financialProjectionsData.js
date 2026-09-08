/**
 * Kahana Financial Projections — defaults from Kahana_Proforma_v2.xlsx
 * (Summary IS, Revenue_T, Revenue_B, Expenses_Y, Seed Raise Plan, Comparables).
 */

export const FINANCIAL_PROJECTIONS_PATH = '/financial-projections'

export const FINANCIAL_PROJECTIONS_PAGE = {
  title: 'Financial Projections',
  subtitle:
    'Creator-engine forecast from the v2 pro forma: intern/BDR outreach, conversion, CPA, then unpaid network effects. Bottom-up vs top-down share the same expense book.',
}

export const WORKBOOK_SOURCE = {
  fileName: 'Kahana_Proforma_v2.xlsx',
  href: '/kahana-proforma-v2.xlsx',
  asOf: 'Pro forma v2 — Sep 2026 · 2026 YTD is Jan–Aug',
}

export const BASE_YEAR = 2026
export const FORECAST_END_YEAR = 2031
export const DEFAULT_HORIZON_YEARS = 7
export const SHOW_LONG_RANGE_REVENUE = true

export const IS_YEARS = [
  { id: '2023A', label: '2023A', year: 2023, kind: 'actual', months: 12 },
  { id: '2024A', label: '2024A', year: 2024, kind: 'actual', months: 12 },
  { id: '2025A', label: '2025A', year: 2025, kind: 'actual', months: 12 },
  {
    id: '2026YTD',
    label: '2026 YTD',
    year: 2026,
    kind: 'ytd',
    months: 8,
    title: 'January–August 2026 actuals. Only revenue, GMV, and software costs are carried over.',
  },
  {
    id: '2026F',
    label: '2026F',
    year: 2026,
    kind: 'stub',
    months: 4,
    title: 'September–December 2026 forecast tail. Acquisition, churn, hubs, and intern pay are prorated to four months.',
  },
  { id: '2027F', label: '2027F', year: 2027, kind: 'forecast', months: 12 },
  { id: '2028F', label: '2028F', year: 2028, kind: 'forecast', months: 12 },
  { id: '2029F', label: '2029F', year: 2029, kind: 'forecast', months: 12 },
  { id: '2030F', label: '2030F', year: 2030, kind: 'forecast', months: 12 },
  { id: '2031F', label: '2031F', year: 2031, kind: 'forecast', months: 12 },
]

/** Historical actuals from Revenue_B / Expenses_Y. Forecast columns are computed. */
export const HISTORY = {
  2023: { revenue: 304, gmv: 6080, personnel: 0, tech: 2128, sales: 0, ga: 500, endingPremium: 0, endingNormal: 0 },
  2024: { revenue: 84.79, gmv: 1695.71, personnel: 0, tech: 2128, sales: 0, ga: 500, endingPremium: 0, endingNormal: 0 },
  2025: { revenue: 898.42, gmv: 17968.38, personnel: 0, tech: 2128, sales: 0, ga: 500, endingPremium: 0, endingNormal: 48 },
  '2026Ytd': {
    revenue: 512.15,
    gmv: 10243,
    personnel: 0,
    tech: 528,
    sales: 0,
    ga: 0,
    endingPremium: 0,
    endingNormal: 60,
  },
}

export const TECH_DETAIL = {
  2023: { github: 288, cursor: 720, heroku: 300, workspace: 300, gcp: 180, resend: 240, domain: 100 },
  2024: { github: 288, cursor: 720, heroku: 300, workspace: 300, gcp: 180, resend: 240, domain: 100 },
  2025: { github: 288, cursor: 720, heroku: 300, workspace: 300, gcp: 180, resend: 240, domain: 100 },
  '2026Ytd': { github: 288, cursor: 240 },
}

export const WORKBOOK_INPUTS = {
  globalMarketBn2026: 360,
  relevantSegmentPct: 7.5,
  marketCagrPct: 11.4,
  kahanaRevenue2026: 1000,
  targetSharePct: 1,
  horizonYears: DEFAULT_HORIZON_YEARS,
  federalTaxPct: 21,
  stateTaxPct: 0,
  seedRaise: 5000000,
  fundingYear: 2026,
  seedSoftwarePct: 5,
  seedHiringPct: 80,
  seedMarketingPct: 15,

  internFte2026: 10,
  internHireRatePct: 10,
  internSalary: 10000,
  internCapacityBase: 10,
  internIncentivePerDollar: 0.001,
  infraContactsBase: 1000,
  infraSpendFactor: 0.01,
  baseConversionPct: 10,
  ceoTimeOutreachPct: 0,
  personalTouchMaxLiftPct: 20,
  personalTouchHalfSat: 10000,
  pmEngTimePlatformPct: 0,
  platformMaxLiftPct: 15,
  platformHalfSat: 15000,
  referralCreatorsPerDollar: 0.002,
  influencerCreatorsPerDollar: 0.001,
  premiumShareOfNewPct: 5,

  referralDecayPct: 15,
  networkMultiplier: 1,
  premOnPrem: 1,
  premOnNormal: 2,
  normalOnPrem: 1,
  normalOnNormal: 1,

  beginningPremium2026F: 0,
  beginningNormal2026F: 60,
  premiumChurnPct: 5,
  normalChurnPct: 30,

  premiumFeeMonthly: 10,
  normalFeeMonthly: 0,
  hubsPerPremium: 1,
  hubsPerNormal: 1,
  premiumPaidHubPct: 90,
  normalPaidHubPct: 40,
  premPaidPurchases: 30,
  premFreeAcq: 20,
  normalPaidPurchases: 10,
  normalFreeAcq: 5,
  premPaidValue: 50,
  premFreeValue: 0,
  normalPaidValue: 30,
  normalFreeValue: 0,
  takeRatePct: 5,

  ceoHireYear: 2027,
  ceoFte: 1,
  ceoSalary: 100000,
  engHireYear: 2028,
  engFte: 2,
  engSalary: 75000,
  productHireYear: 2029,
  productFte: 3,
  productSalary: 150000,
  cosHireYear: 2030,
  cosFte: 4,
  cosSalary: 50000,
  payrollBenefitsPct: 0,
  paymentProcessingPct: 0,

  smOutreachInfra2026: 5000,
  smReferralBonus2027: 10000,
  smInfluencer2028: 15000,
  smBrand2029: 20000,
  smOther2030: 25000,
}

export const DEFAULT_PRESET_ID = 'workbook'

export const PRESETS = [
  {
    id: 'workbook',
    label: 'Workbook',
    hint: 'Pro forma v2 as written',
    inputs: { ...WORKBOOK_INPUTS },
  },
  {
    id: 'conservative',
    label: 'Conservative',
    hint: '5% conversion, slower network, 8 interns',
    inputs: {
      ...WORKBOOK_INPUTS,
      internFte2026: 8,
      baseConversionPct: 5,
      networkMultiplier: 0.5,
      premiumShareOfNewPct: 3,
    },
  },
  {
    id: 'aggressive',
    label: 'Aggressive',
    hint: '15% conversion, stronger network, 12 interns',
    inputs: {
      ...WORKBOOK_INPUTS,
      internFte2026: 12,
      baseConversionPct: 15,
      networkMultiplier: 1.5,
      premiumShareOfNewPct: 8,
    },
  },
]

export const SENSITIVITY_SHARE_PCTS = [0.1, 0.5, 1, 2, 5]
export const SENSITIVITY_CAGR_PCTS = [6, 8, 11.4, 15, 22.3]

export const TORNADO_DRIVERS = [
  { key: 'baseConversionPct', label: 'Base conversion', kind: 'pct' },
  { key: 'internFte2026', label: '2026F intern / BDR FTE', kind: 'count' },
  { key: 'internCapacityBase', label: 'Contacts / intern / month', kind: 'count' },
  { key: 'networkMultiplier', label: 'Network multiplier', kind: 'count' },
  { key: 'premiumShareOfNewPct', label: 'Premium share of new', kind: 'pct' },
  { key: 'normalChurnPct', label: 'Normal churn', kind: 'pct' },
  { key: 'takeRatePct', label: 'Take rate', kind: 'pct' },
]

export const SEED_RAISE_PLAN = {
  note:
    'Decoupled from the P&L. Expenses_Y headcount is entered directly. This block is how a $5M seed would be allocated if raised.',
  roles: [
    { priority: 1, role: 'CEO', hires: 1, minRaise: 200000, salary: 60000, raisePct: 0.25 },
    { priority: 2, role: 'Engineer', hires: 1, minRaise: 300000, salary: 90000, raisePct: 0.05 },
    { priority: 3, role: 'Chief of Staff', hires: 1, minRaise: 600000, salary: 90000, raisePct: 0.1 },
    { priority: 4, role: 'Engineer', hires: 1, minRaise: 900000, salary: 90000, raisePct: 0.05 },
    { priority: 5, role: 'Product Manager', hires: 1, minRaise: 1200000, salary: 60000, raisePct: 0.1 },
  ],
}

export const COMPARABLES = [
  {
    name: 'Stan Store',
    scale: '~70K creators; ~25-person team (2025)',
    revenue: '$25M revenue (2024); ~$41M ARR (2026)',
    cost: 'Profitable since 2022 seed; detailed P&L not public',
    quality: 'High / Medium',
    source:
      'https://www.forbes.com/sites/victoriafeng/2025/08/12/this-startup-helps-creators-sell-classes-coaching-and-more-to-their-fans/',
  },
  {
    name: 'Beacons.ai',
    scale: 'Private creator platform; estimate-only financials',
    revenue: '~$10.8M revenue (2024 estimate)',
    cost: 'No reliable public cost / profitability data',
    quality: 'Low',
    source: 'https://getlatka.com/companies/beacons.ai',
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
    name: 'Linktree',
    scale: '70M+ users; broader link-in-bio platform',
    revenue: '~$55.5M revenue (2024 estimate)',
    cost: 'No reliable standalone public cost P&L',
    quality: 'Medium / Low',
    source: 'https://sacra.com/c/linktree/',
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
    name: 'Bio.Site',
    scale: 'Squarespace product; no standalone P&L',
    revenue: 'Not separately disclosed',
    cost: 'Not separately disclosed',
    quality: 'High',
    source: 'https://www.squarespace.com/marketing/biosite',
  },
  {
    name: 'Podia',
    scale: 'Creator-focused all-in-one',
    revenue: 'Not publicly disclosed',
    cost: 'Company states it is profitable and independent',
    quality: 'High',
    source: 'https://www.podia.com/about',
  },
  {
    name: 'Teachable',
    scale: 'Hotmart + Teachable; 200K+ creators (2024)',
    revenue: 'Standalone not disclosed; $10B+ cumulative GMV across Hotmart + Teachable',
    cost: 'Standalone costs not disclosed',
    quality: 'High for GMV',
    source: 'https://www.teachable.com/press/hotmart-company-announces-10-billion',
  },
]

export const METHOD_NOTES = [
  'Revenue_B and Revenue_T are alternative revenue scenarios and are not added together.',
  'The Bottom-Up case uses Revenue_B platform revenue and the shared Expenses_Y forecast.',
  'Top-down P&L begins in 2027F. Revenue_T has a 2026 annual base with no YTD/forecast split, so a 2026 top-down income statement would not be period-comparable.',
  '2026 YTD is eight months (Jan–Aug). 2026F is the four-month Sep–Dec tail. Acquisition, churn, hubs, GMV, and intern cash use months in the column.',
  'Engine 1 contacts = intern/BDR FTE × effective monthly capacity × months, plus contacts from outreach infra spend.',
  'Engine 2 conversion = base rate plus personal-touch and platform-improvement lifts (diminishing returns), capped at 100%.',
  'Engine 3 adds direct CPA creators from referral bonuses and influencer funding.',
  'Network effects start in 2027 using 2027 correlation rates, then decay 15% per year by default. They apply to beginning-of-year creator stock.',
  'Subscription revenue = ending creators × monthly fee × months in period. GMV uses annual purchases per hub, prorated by months/12.',
  'Expenses_Y is decoupled from the Seed Raise Plan. Headcount and compensation are entered directly on that tab.',
  'Sales & marketing on the P&L excludes creator-acquisition salary already in personnel (intern/BDR cash).',
  'Taxes apply only to positive pre-tax income. No NOL carryforward. Pre-tax equals operating income (no interest modeled).',
]

export const GLOSSARY = [
  {
    term: 'Bottom-up / creator engine',
    definition:
      'Intern/BDR outreach and conversion (Engine 1–2), plus CPA (Engine 3), plus unpaid network effects between premium and normal creators. Revenue is Growth-like subscriptions plus 5% take on paid GMV.',
  },
  {
    term: 'Top-down',
    definition:
      'Global creatorplaces market × Kahana-relevant segment (7.5%) × share ramping from 2026 implied share to the 1% target in the chosen horizon year (workbook default: 2033).',
  },
  {
    term: 'Premium vs normal',
    definition:
      'Premium creators pay $10/month and run 90% paid hubs. Normal creators pay $0 and run 40% paid hubs. New marketing-led creators are 5% premium by default.',
  },
  {
    term: '2026F',
    definition:
      'Four-month forecast tail (Sep–Dec 2026). Does not overwrite 2026 YTD actuals.',
  },
  {
    term: 'Seed Raise Plan',
    definition:
      'A $5M allocation (5% tools / 80% hiring / 15% marketing) and a hiring waterfall. It does not drive the P&L headcount on Expenses_Y.',
  },
]

export const TERM_HELP = {
  internFte2026: {
    title: 'Intern / BDR FTE',
    body: 'Starting 2026F headcount. Later years grow at the intern hiring rate. Pay is prorated by months in the column.',
  },
  internHireRatePct: {
    title: 'Intern hiring rate',
    body: 'Net growth after attrition. 10% means 10 → 11 → 12.1 FTE.',
  },
  internCapacityBase: {
    title: 'Base capacity',
    body: 'Contacts per intern per month before the salary incentive.',
  },
  internIncentivePerDollar: {
    title: 'Salary incentive',
    body: 'Extra contacts per intern per month per dollar of annual salary. $10,000 × 0.001 = +10 contacts.',
  },
  baseConversionPct: {
    title: 'Base conversion',
    body: 'Share of contacted people who become new creators, before personal-touch and platform lifts.',
  },
  networkMultiplier: {
    title: 'Network multiplier',
    body: 'Scales all four unpaid correlations (premium→premium, premium→normal, and the two normal-origin rates). Workbook default 1.0.',
  },
  premiumShareOfNewPct: {
    title: 'Premium mix',
    body: 'Share of marketing-led new creators who enter as premium (paying) rather than normal.',
  },
  takeRatePct: {
    title: 'Take rate',
    body: 'Platform fee on paid GMV. Free-hub acquisitions have $0 value in the workbook, so they do not generate take.',
  },
  targetSharePct: {
    title: 'Target share',
    body: 'Kahana share of the relevant global market at the top-down forecast end year (default 1% in 2033).',
  },
  marketCagrPct: {
    title: 'Market CAGR',
    body: '11.4% is the selectable workbook assumption. 22.3% is the Creatorplaces research proxy cited on Revenue_T.',
  },
  pnlRevenue: { title: 'Platform revenue', body: 'Subscriptions plus take-rate on paid GMV (bottom-up), or market × share (top-down).' },
  pnlCogs: { title: 'Transaction costs', body: 'GMV × payment-processing rate. Currently 0% pending a validated assumption.' },
  pnlPersonnel: { title: 'Personnel', body: 'CEO, engineering, product, CoS, and intern/BDR cash from Expenses_Y. Benefits currently 0%.' },
  pnlSales: { title: 'Sales & marketing', body: 'Outreach infra, referral, influencer, brand, other — not intern salary (that sits in personnel).' },
}

export const CAGR_RATIONALE = {
  selectedPct: 11.4,
  researchPct: 22.3,
  source: 'https://www.thebusinessresearchcompany.com/report/creatorplaces-global-market-report',
  note: '22.3% from The Business Research Company Creatorplaces report; 11.4% is the workbook’s selected growth proxy.',
}
