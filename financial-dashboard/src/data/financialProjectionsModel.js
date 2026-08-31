/**
 * Kahana Financial Projections engine — ports Revenue_T, Revenue_B, Expenses_Y, Assumptions.
 */

import {
  BASE_YEAR,
  BOTTOM_UP_HISTORY,
  HIRING_PLAN,
  IS_YEARS,
  ROLE_COMP,
  SENSITIVITY_CAGR_PCTS,
  SENSITIVITY_SHARE_PCTS,
  TECH_EXPENSE,
  TORNADO_DRIVERS,
  WORKBOOK_INPUTS,
  growthAnnualArpu,
  effectiveGmvPerSeller,
  effectiveGrowthConvertPct,
  productMaturityPct,
  hubDemandSpillover,
  planOutreachYear,
} from './financialProjectionsData'

export function cloneInputs(inputs = WORKBOOK_INPUTS) {
  return { ...inputs }
}

export function totalTaxRate(inputs) {
  return (Number(inputs.federalTaxPct) + Number(inputs.stateTaxPct)) / 100
}

function n(value) {
  const x = Number(value)
  return Number.isFinite(x) ? x : 0
}

/** Sequential hiring: each role funds only if seed clears its threshold AND the prior role funded. */
export function resolveHiring(inputs) {
  const seed = n(inputs.seedRaise)
  const fundingYear = n(inputs.fundingYear) || BASE_YEAR
  const funded = []
  let priorYes = true
  for (const row of HIRING_PLAN) {
    const yes = priorYes && seed >= row.minRaise
    const hireYear = yes ? fundingYear : null
    const comp = ROLE_COMP[row.role]
    funded.push({
      ...row,
      funded: yes,
      hireYear,
      salary: comp.salary,
      raisePct: comp.raisePct,
    })
    priorYes = yes
  }
  return funded
}

function headcountForYear(plan, year) {
  const byRole = { CEO: 0, Engineers: 0, 'Chief of Staff': 0, 'Product Manager': 0 }
  for (const row of plan) {
    if (!row.funded || row.hireYear == null || year < row.hireYear) continue
    if (row.role === 'Engineer') byRole.Engineers += row.hires
    else byRole[row.role] += row.hires
  }
  const total = byRole.CEO + byRole.Engineers + byRole['Chief of Staff'] + byRole['Product Manager']
  return { ...byRole, total }
}

function cashCompForYear(plan, year) {
  let ceo = 0
  let engineers = 0
  let cos = 0
  let pm = 0
  for (const row of plan) {
    if (!row.funded || row.hireYear == null || year < row.hireYear) continue
    const yearsInSeat = year - row.hireYear
    const dollars = row.hires * row.salary * (1 + row.raisePct) ** yearsInSeat
    if (row.role === 'CEO') ceo += dollars
    else if (row.role === 'Engineer') engineers += dollars
    else if (row.role === 'Chief of Staff') cos += dollars
    else if (row.role === 'Product Manager') pm += dollars
  }
  return { CEO: ceo, Engineers: engineers, 'Chief of Staff': cos, 'Product Manager': pm, total: ceo + engineers + cos + pm }
}

export function computeHiringSchedule(inputs, years = IS_YEARS) {
  const plan = resolveHiring(inputs)
  const byYear = {}
  for (const col of years) {
    if (col.kind === 'ytd' && col.year === BASE_YEAR) {
      byYear[col.id] = {
        headcount: headcountForYear(plan, col.year),
        cash: cashCompForYear(plan, col.year),
      }
      continue
    }
    byYear[col.id] = {
      headcount: headcountForYear(plan, col.year),
      cash: cashCompForYear(plan, col.year),
    }
  }
  return { plan, byYear }
}

/**
 * Top-down: market grows at CAGR; share ramps from 2026 implied share to target at horizon end.
 * t = 0 is 2026. Revenue in dollars.
 */
export function computeTopDown(inputs) {
  const horizon = Math.max(1, Math.round(n(inputs.horizonYears)))
  const endYear = BASE_YEAR + horizon
  const marketBn0 = n(inputs.globalMarketBn2026)
  const relevantPct = n(inputs.relevantSegmentPct) / 100
  const cagr = n(inputs.marketCagrPct) / 100
  const rev2026 = n(inputs.kahanaRevenue2026)
  const targetShareRaw = n(inputs.targetSharePct) / 100

  const relevantMm0 = marketBn0 * 1000 * relevantPct
  const share0 = relevantMm0 > 0 ? rev2026 / 1e6 / relevantMm0 : 0
  // 0 (or below today's implied share) = hold 2026 implied share. Conservative plan: no ramp to 1%.
  const holdShare = targetShareRaw <= 0 || (share0 > 0 && targetShareRaw <= share0)
  const targetShare = holdShare ? share0 : targetShareRaw
  const shareCagr =
    !holdShare && share0 > 0 && targetShare > 0 && horizon > 0
      ? (targetShare / share0) ** (1 / horizon) - 1
      : 0

  const years = []
  for (let t = 0; t <= horizon; t += 1) {
    const year = BASE_YEAR + t
    const globalBn = marketBn0 * (1 + cagr) ** t
    const relevantMm = globalBn * 1000 * relevantPct
    const share = holdShare ? share0 : t === horizon ? targetShare : share0 * (1 + shareCagr) ** t
    const revenue = relevantMm * 1e6 * share
    const prior = years[t - 1]
    years.push({
      year,
      t,
      globalBn,
      relevantMm,
      share,
      revenue,
      yoy: prior && prior.revenue ? revenue / prior.revenue - 1 : null,
    })
  }

  return {
    relevantMm0,
    share0,
    shareCagr,
    holdShare,
    endYear,
    horizon,
    years,
    byYear: Object.fromEntries(years.map((row) => [row.year, row])),
  }
}

export function newRegisteredUsersForYear(year, inputs) {
  const base = n(inputs.newRegisteredUsers)
  const growth = n(inputs.newUserGrowthPct) / 100
  const t = year - 2027
  if (t <= 0) return base
  return base * (1 + growth) ** t
}

/** One-time 2027 lift from the existing registered list. Not applied in later years. */
export function resurrectedUsersForYear(year, inputs) {
  if (year !== 2027) return 0
  const registered = BOTTOM_UP_HISTORY[2026]?.endingUsers ?? 0
  const dormant = Math.max(0, registered - n(inputs.startingYau))
  return dormant * (n(inputs.resurrectionPct) / 100)
}

/** Outreach new accounts = published hubs × (1 + extras). Extras = pay-intent + savers + aspiring sellers. */
function outreachPublishersFromAdd(outreachNew, inputs) {
  const extra = hubDemandSpillover(inputs).extraSignupsPerCollab
  const denom = 1 + extra
  return denom > 0 ? outreachNew / denom : outreachNew
}

/** Extras minted by published hubs (pay-intent + savers + aspiring). Does not include the publisher. */
function extrasFromPublishedHubs(hubs, spill) {
  return {
    newUsers: hubs * spill.extraSignupsPerCollab,
    newBuyers: hubs * spill.extraBuyersPerHub,
    newCompletedBuyers: hubs * spill.completedBuyersPerHub,
    newSaversThis: hubs * spill.extraSaversThisHub,
    newSaversOther: hubs * spill.extraSaversOtherHub,
    newAspiring: hubs * spill.extraAspiringSellersPerHub,
  }
}

function extrasNewlyActive(ex, activation) {
  const incomplete = ex.newBuyers - ex.newCompletedBuyers
  return (
    ex.newCompletedBuyers +
    (incomplete + ex.newSaversThis + ex.newSaversOther + ex.newAspiring) * activation
  )
}

function extrasFromSignupCount(count, spill) {
  const extra = spill.extraSignupsPerCollab
  const hubs = extra > 0 ? count / extra : 0
  return extrasFromPublishedHubs(hubs, spill)
}

function forecastBottomUpYear(
  priorEnding,
  priorYau,
  priorInternPublishers,
  priorSelfServePublishers,
  priorNewUsers,
  inputs,
  year,
) {
  const priorPublishers = priorInternPublishers + priorSelfServePublishers
  const outreachNew = newRegisteredUsersForYear(year, inputs)
  const k = n(inputs.viralK)
  const kNewPublishers = priorPublishers * k
  const spill = hubDemandSpillover(inputs)
  const outreachPublishers = outreachPublishersFromAdd(outreachNew, inputs)
  const internExtras = extrasFromPublishedHubs(outreachPublishers, spill)

  const resurrected = resurrectedUsersForYear(year, inputs)
  const resurrectionPublishers = resurrected * (n(inputs.resurrectionPublishPct) / 100)
  const resurrectionSavers = resurrected * (n(inputs.resurrectionSavePct) / 100)
  const resurrectionExtras = extrasFromPublishedHubs(resurrectionPublishers, spill)

  const kExtras = extrasFromPublishedHubs(kNewPublishers, spill)
  const maturityPct = productMaturityPct(year, inputs)
  const maturity = maturityPct / 100
  const catalogPer = n(inputs.catalogSignupsPerPublisher) * maturity
  const extraEach = spill.extraSignupsPerCollab
  const catalogEquivHubs = extraEach > 0 ? (priorPublishers * catalogPer) / extraEach : 0
  const catalogExtras = extrasFromPublishedHubs(catalogEquivHubs, spill)
  const viralNew = priorNewUsers * n(inputs.signupViralK) * maturity
  const viralExtras = extrasFromSignupCount(viralNew, spill)

  // Intern add already includes that year’s launch extras. k publishers are usually already registered.
  const newUsers =
    outreachNew +
    resurrectionExtras.newUsers +
    kExtras.newUsers +
    catalogExtras.newUsers +
    viralNew
  const endingUsers = priorEnding + newUsers
  const retention = n(inputs.yauRetentionPct) / 100
  const activation = n(inputs.newUserActivationPct) / 100
  const retained = priorYau * retention
  const newlyActive =
    outreachPublishers +
    extrasNewlyActive(internExtras, activation) +
    extrasNewlyActive(resurrectionExtras, activation) +
    extrasNewlyActive(kExtras, activation) +
    extrasNewlyActive(catalogExtras, activation) +
    extrasNewlyActive(viralExtras, activation) +
    kNewPublishers
  const yau = retained + newlyActive + resurrected
  const internPublishers = outreachPublishers
  const selfServePublishers =
    priorPublishers * retention + resurrectionPublishers + kNewPublishers
  const publishers = internPublishers + selfServePublishers
  const monetization = n(inputs.monetizationRatePct) / 100
  const monetizingUsers = publishers * monetization
  const convertPct = effectiveGrowthConvertPct(year, inputs)
  const gmvEach = effectiveGmvPerSeller(year, inputs)
  const gmv = monetizingUsers * gmvEach
  const take = n(inputs.takeRatePct) / 100
  const takeRevenue = gmv * take
  const growthArpu = growthAnnualArpu(inputs)
  const growthSubs = selfServePublishers * (convertPct / 100)
  const growthRevenue = growthSubs * growthArpu
  const platformRevenue = takeRevenue + growthRevenue
  const txEach = n(inputs.txPerMonetizingUser)
  const transactions = txEach > 0 ? monetizingUsers * txEach : 0
  const aov = transactions > 0 ? gmv / transactions : null
  return {
    beginningUsers: priorEnding,
    newUsers,
    endingUsers,
    yau,
    yauRetention: retention,
    newlyActive,
    resurrected,
    resurrectionPublishers,
    resurrectionSavers,
    resurrectionNewUsers: resurrectionExtras.newUsers,
    catalogNewUsers: catalogExtras.newUsers,
    kExtraNewUsers: kExtras.newUsers,
    viralNewUsers: viralNew,
    retained,
    kNewPublishers,
    outreachPublishers,
    internPublishers,
    selfServePublishers,
    newBuyers:
      internExtras.newBuyers +
      resurrectionExtras.newBuyers +
      kExtras.newBuyers +
      catalogExtras.newBuyers +
      viralExtras.newBuyers,
    newCompletedBuyers:
      internExtras.newCompletedBuyers +
      resurrectionExtras.newCompletedBuyers +
      kExtras.newCompletedBuyers +
      catalogExtras.newCompletedBuyers +
      viralExtras.newCompletedBuyers,
    newSavers:
      internExtras.newSaversThis +
      internExtras.newSaversOther +
      resurrectionExtras.newSaversThis +
      resurrectionExtras.newSaversOther +
      kExtras.newSaversThis +
      kExtras.newSaversOther +
      catalogExtras.newSaversThis +
      catalogExtras.newSaversOther +
      viralExtras.newSaversThis +
      viralExtras.newSaversOther,
    newSaversThis:
      internExtras.newSaversThis +
      resurrectionExtras.newSaversThis +
      kExtras.newSaversThis +
      catalogExtras.newSaversThis +
      viralExtras.newSaversThis,
    newSaversOther:
      internExtras.newSaversOther +
      resurrectionExtras.newSaversOther +
      kExtras.newSaversOther +
      catalogExtras.newSaversOther +
      viralExtras.newSaversOther,
    newAspiring:
      internExtras.newAspiring +
      resurrectionExtras.newAspiring +
      kExtras.newAspiring +
      catalogExtras.newAspiring +
      viralExtras.newAspiring,
    publishers,
    monetizationRate: monetization,
    monetizingUsers,
    gmvPerMonetizingUser: gmvEach,
    gmv,
    takeRate: take,
    takeRevenue,
    growthArpu,
    growthSubs,
    growthRevenue,
    growthConvertEffectivePct: convertPct,
    productMaturityPct: maturityPct,
    platformRevenue,
    transactions,
    aov,
    outreachNewUsers: outreachNew,
    isForecast: true,
  }
}

export function computeBottomUp(inputs, isYears = IS_YEARS) {
  const byId = {}
  let priorEnding = BOTTOM_UP_HISTORY[2025]?.endingUsers ?? 0
  // Workbook never recorded YAU. Use the inferred starting YAU unless a historical year has one.
  let priorYau = n(inputs.startingYau)
  let priorInternPublishers = 0
  let priorSelfServePublishers = BOTTOM_UP_HISTORY[2025]?.monetizingUsers ?? 0
  let priorNewUsers = BOTTOM_UP_HISTORY[2025]?.newUsers ?? 0

  for (const col of isYears) {
    if (col.kind !== 'forecast') {
      const hist = BOTTOM_UP_HISTORY[col.year]
      if (!hist) continue
      const takeRate = hist.gmv ? hist.platformRevenue / hist.gmv : 0
      const gmvEach = hist.monetizingUsers ? hist.gmv / hist.monetizingUsers : 0
      byId[col.id] = {
        ...hist,
        takeRate,
        gmvPerMonetizingUser: gmvEach,
        monetizationRate: hist.yau ? hist.monetizingUsers / hist.yau : 0,
        aov: hist.transactions ? hist.gmv / hist.transactions : null,
        resurrected: 0,
        kNewPublishers: 0,
        publishers: hist.monetizingUsers || 0,
        internPublishers: 0,
        selfServePublishers: hist.monetizingUsers || 0,
        takeRevenue: hist.platformRevenue,
        growthSubs: 0,
        growthRevenue: 0,
        isForecast: false,
      }
      priorEnding = hist.endingUsers
      if (hist.yau) priorYau = hist.yau
      if (hist.monetizingUsers) priorSelfServePublishers = hist.monetizingUsers
      priorInternPublishers = 0
      priorNewUsers = hist.newUsers ?? 0
      continue
    }

    const row = forecastBottomUpYear(
      priorEnding,
      priorYau,
      priorInternPublishers,
      priorSelfServePublishers,
      priorNewUsers,
      inputs,
      col.year,
    )
    byId[col.id] = row
    priorEnding = row.endingUsers
    priorYau = row.yau
    priorInternPublishers = row.internPublishers
    priorSelfServePublishers = row.selfServePublishers
    priorNewUsers = row.newUsers
  }

  return { byId }
}

export function expenseForColumn(col, inputs, hiring) {
  const tech =
    col.kind === 'forecast' ? n(TECH_EXPENSE.forecastAnnual) : n(TECH_EXPENSE[col.year])
  const cash = hiring.byYear[col.id]?.cash.total ?? 0
  const personnel = cash * (1 + n(inputs.payrollBenefitsPct) / 100)
  const sales =
    n(inputs.paidMarketingAnnual) +
    n(inputs.creatorPartnershipsAnnual) +
    n(inputs.brandContentAnnual)
  const ga = n(inputs.legalAnnual) + n(inputs.accountingAnnual) + n(inputs.insuranceAnnual)
  const cogs = n(inputs.paymentProcessingAnnual) + n(inputs.otherVariablePlatformAnnual)

  // Historical / YTD: keep workbook tech; do not apply forecast opex inputs to actuals.
  if (col.kind !== 'forecast') {
    return {
      personnel: 0,
      tech,
      sales: 0,
      ga: 0,
      cogs: 0,
      opex: tech,
    }
  }

  return {
    personnel,
    tech,
    sales,
    ga,
    cogs,
    opex: personnel + tech + sales + ga,
  }
}

function pnlFromRevenue(revenue, exp, taxRate) {
  if (revenue == null || revenue === '') {
    return null
  }
  const cogs = exp.cogs
  const gross = revenue - cogs
  const opInc = gross - exp.opex
  const tax = Math.max(0, opInc * taxRate)
  const net = opInc - tax
  return {
    revenue,
    cogs,
    gross,
    grossMargin: revenue ? gross / revenue : null,
    personnel: exp.personnel,
    tech: exp.tech,
    sales: exp.sales,
    ga: exp.ga,
    opex: exp.opex,
    opInc,
    opMargin: revenue ? opInc / revenue : null,
    tax,
    net,
    netMargin: revenue ? net / revenue : null,
  }
}

export function computeModel(inputs) {
  const taxRate = totalTaxRate(inputs)
  const hiring = computeHiringSchedule(inputs)
  const topDown = computeTopDown(inputs)
  const bottomUp = computeBottomUp(inputs)

  const isRows = IS_YEARS.map((col) => {
    const exp = expenseForColumn(col, inputs, hiring)
    const buRev = bottomUp.byId[col.id]?.platformRevenue
    const tdYear = topDown.byYear[col.year]
    // Top-down IS begins 2027F (workbook note).
    const topDownPnl =
      col.kind === 'forecast' ? pnlFromRevenue(tdYear?.revenue ?? 0, exp, taxRate) : null
    const hasBu = buRev != null && buRev !== ''
    const bottomUpPnl = hasBu ? pnlFromRevenue(buRev, exp, taxRate) : null
    return {
      col,
      exp,
      hiring: hiring.byYear[col.id],
      bottomUp: bottomUp.byId[col.id] ?? null,
      topDown: tdYear ?? null,
      bottomUpPnl,
      topDownPnl,
    }
  })

  const y2031 = isRows.find((r) => r.col.id === '2031F')
  const endTd = topDown.years[topDown.years.length - 1]
  const bu2031 = y2031?.bottomUp

  return {
    inputs,
    taxRate,
    hiring,
    topDown,
    bottomUp,
    isRows,
    kpis: {
      td2031Revenue: y2031?.topDownPnl?.revenue ?? null,
      td2031Net: y2031?.topDownPnl?.net ?? null,
      bu2031Revenue: y2031?.bottomUpPnl?.revenue ?? null,
      bu2031Net: y2031?.bottomUpPnl?.net ?? null,
      bu2031Gmv: bu2031?.gmv ?? null,
      bu2031Yau: bu2031?.yau ?? null,
      bu2031Monetizing: bu2031?.monetizingUsers ?? null,
      endYear: topDown.endYear,
      endRevenue: endTd?.revenue ?? null,
      endShare: endTd?.share ?? null,
      headcount2031: y2031?.hiring?.headcount.total ?? 0,
      shareCagr: topDown.shareCagr,
      holdShare: topDown.holdShare,
    },
  }
}

export function computeMarketingFunnel(funnel, funded) {
  return planOutreachYear(funnel, funded)
}

export function computeTornado(baseInputs, shockPct = 0.2) {
  const base = computeModel(baseInputs)
  const baseVal = base.kpis.td2031Revenue ?? 0
  return TORNADO_DRIVERS.map((driver) => {
    const lowIn = { ...baseInputs, [driver.key]: n(baseInputs[driver.key]) * (1 - shockPct) }
    const highIn = { ...baseInputs, [driver.key]: n(baseInputs[driver.key]) * (1 + shockPct) }
    if (driver.key === 'horizonYears') {
      lowIn.horizonYears = Math.max(1, Math.round(n(baseInputs.horizonYears) - 2))
      highIn.horizonYears = Math.max(1, Math.round(n(baseInputs.horizonYears) + 2))
    }
    const low = computeModel(lowIn).kpis.td2031Revenue ?? 0
    const high = computeModel(highIn).kpis.td2031Revenue ?? 0
    return {
      ...driver,
      low,
      high,
      lowDelta: low - baseVal,
      highDelta: high - baseVal,
      swing: Math.abs(high - low),
    }
  }).sort((a, b) => b.swing - a.swing)
}

export function computeShareCagrGrid(baseInputs) {
  return SENSITIVITY_CAGR_PCTS.map((cagr) => ({
    cagr,
    cells: SENSITIVITY_SHARE_PCTS.map((share) => {
      const model = computeModel({
        ...baseInputs,
        marketCagrPct: cagr,
        targetSharePct: share,
      })
      return {
        share,
        revenue: model.kpis.td2031Revenue,
        net: model.kpis.td2031Net,
      }
    }),
  }))
}

export function formatUsd(value, digits = 0) {
  if (value == null || Number.isNaN(value)) return '—'
  const abs = Math.abs(value)
  const sign = value < 0 ? '-' : ''
  if (abs >= 1e9) return `${sign}$${(abs / 1e9).toFixed(2)}B`
  if (abs >= 1e6) return `${sign}$${(abs / 1e6).toFixed(2)}M`
  if (abs >= 1e4) return `${sign}$${(abs / 1e3).toFixed(1)}k`
  return `${sign}$${abs.toLocaleString('en-US', { maximumFractionDigits: digits })}`
}

export function formatPct(value, digits = 1) {
  if (value == null || Number.isNaN(value)) return '—'
  const pct = value * 100
  if (pct !== 0 && Math.abs(pct) < 0.01) {
    return `${pct.toExponential(2)}%`
  }
  return `${pct.toFixed(digits)}%`
}

export function formatCount(value, digits = 0) {
  if (value == null || Number.isNaN(value)) return '—'
  return value.toLocaleString('en-US', { maximumFractionDigits: digits })
}
