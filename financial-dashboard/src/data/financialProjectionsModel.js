/**
 * Kahana Financial Projections engine — ports Revenue_T, Revenue_B, Expenses_Y from v2.
 */

import {
  BASE_YEAR,
  HISTORY,
  IS_YEARS,
  SENSITIVITY_CAGR_PCTS,
  SENSITIVITY_SHARE_PCTS,
  TORNADO_DRIVERS,
  WORKBOOK_INPUTS,
} from './financialProjectionsData'

export function cloneInputs(inputs = WORKBOOK_INPUTS) {
  return { ...inputs }
}

function n(value) {
  const x = Number(value)
  return Number.isFinite(x) ? x : 0
}

export function totalTaxRate(inputs) {
  return (n(inputs.federalTaxPct) + n(inputs.stateTaxPct)) / 100
}

function isForecastCol(col) {
  return col.kind === 'stub' || col.kind === 'forecast'
}

export function weeksIn(months) {
  return n(months) * (52 / 12)
}

export function internFteStart(inputs) {
  const per = n(inputs.hoursPerInternWeek) || 20
  const hours = n(inputs.internOutreachHoursPerWeek)
  if (hours > 0 && per > 0) return hours / per
  return n(inputs.internFte2026)
}

function internFte(col, inputs) {
  if (!isForecastCol(col)) return 0
  const start = internFteStart(inputs)
  const rate = n(inputs.internHireRatePct) / 100
  const t = col.year - BASE_YEAR
  return start * (1 + rate) ** t
}

function hubLiveShare(monthsToHub, months) {
  const lag = n(monthsToHub)
  const m = n(months)
  if (lag <= 0) return 1
  if (m <= 0) return 0
  if (lag >= m) return 0
  return (m - lag) / m
}

function roleFte(col, hireYear, fte) {
  if (!isForecastCol(col)) return 0
  if (col.year < n(hireYear)) return 0
  return n(fte)
}

function cashFor(fte, salary, months) {
  return fte * n(salary) * (months / 12)
}

function smForYear(year, inputs) {
  return {
    outreach: year === 2026 ? n(inputs.smOutreachInfra2026) : 0,
    referral: year === 2027 ? n(inputs.smReferralBonus2027) : 0,
    influencer: year === 2028 ? n(inputs.smInfluencer2028) : 0,
    brand: year === 2029 ? n(inputs.smBrand2029) : 0,
    other: year === 2030 ? n(inputs.smOther2030) : 0,
  }
}

export function computeExpenses(inputs, years = IS_YEARS) {
  const byId = {}
  for (const col of years) {
    if (col.kind === 'actual') {
      const h = HISTORY[col.year]
      byId[col.id] = {
        internFte: 0,
        ceoFte: 0,
        engFte: 0,
        productFte: 0,
        cosFte: 0,
        internCash: 0,
        ceoCash: 0,
        engCash: 0,
        productCash: 0,
        cosCash: 0,
        personnel: h.personnel,
        tech: h.tech,
        sales: h.sales,
        ga: h.ga,
        cogs: 0,
        opex: h.personnel + h.tech + h.sales + h.ga,
        sm: { outreach: 0, referral: 0, influencer: 0, brand: 0, other: 0 },
      }
      continue
    }
    if (col.kind === 'ytd') {
      const h = HISTORY['2026Ytd']
      byId[col.id] = {
        internFte: 0,
        ceoFte: 0,
        engFte: 0,
        productFte: 0,
        cosFte: 0,
        internCash: 0,
        ceoCash: 0,
        engCash: 0,
        productCash: 0,
        cosCash: 0,
        personnel: h.personnel,
        tech: h.tech,
        sales: h.sales,
        ga: h.ga,
        cogs: 0,
        opex: h.personnel + h.tech + h.sales + h.ga,
        sm: { outreach: 0, referral: 0, influencer: 0, brand: 0, other: 0 },
      }
      continue
    }

    const intern = internFte(col, inputs)
    const ceo = roleFte(col, inputs.ceoHireYear, inputs.ceoFte)
    const eng = roleFte(col, inputs.engHireYear, inputs.engFte)
    const product = roleFte(col, inputs.productHireYear, inputs.productFte)
    const cos = roleFte(col, inputs.cosHireYear, inputs.cosFte)
    const internCash = cashFor(intern, inputs.internSalary, col.months)
    const ceoCash = cashFor(ceo, inputs.ceoSalary, col.months)
    const engCash = cashFor(eng, inputs.engSalary, col.months)
    const productCash = cashFor(product, inputs.productSalary, col.months)
    const cosCash = cashFor(cos, inputs.cosSalary, col.months)
    const cash = internCash + ceoCash + engCash + productCash + cosCash
    const benefits = cash * (n(inputs.payrollBenefitsPct) / 100)
    const personnel = cash + benefits
    const sm = smForYear(col.year, inputs)
    const sales = sm.outreach + sm.referral + sm.influencer + sm.brand + sm.other
    byId[col.id] = {
      internFte: intern,
      ceoFte: ceo,
      engFte: eng,
      productFte: product,
      cosFte: cos,
      internCash,
      ceoCash,
      engCash,
      productCash,
      cosCash,
      personnel,
      tech: 0,
      sales,
      ga: 0,
      cogs: 0,
      opex: personnel + sales,
      sm,
    }
  }
  return { byId }
}

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

export function computeBottomUp(inputs, years = IS_YEARS, expenses) {
  const exp = expenses ?? computeExpenses(inputs, years)
  const byId = {}
  let prevPremium = 0
  let prevNormal = 0
  let prevLiveHubs = 0
  let prevCollabHubs = 0
  let prevPrevCollabHubs = 0
  const fte0 = internFteStart(inputs)

  for (const col of years) {
    if (col.kind === 'actual') {
      const h = HISTORY[col.year]
      prevPremium = h.endingPremium
      prevNormal = h.endingNormal
      prevLiveHubs = h.endingPremium + h.endingNormal
      byId[col.id] = {
        endingPremium: h.endingPremium,
        endingNormal: h.endingNormal,
        endingTotal: h.endingPremium + h.endingNormal,
        subscriptionRevenue: null,
        takeRevenue: h.revenue,
        gmv: h.gmv,
        platformRevenue: h.revenue,
        marketingSpend: 0,
      }
      continue
    }
    if (col.kind === 'ytd') {
      const h = HISTORY['2026Ytd']
      prevPremium = h.endingPremium
      prevNormal = h.endingNormal
      prevLiveHubs = h.endingPremium + h.endingNormal
      byId[col.id] = {
        endingPremium: h.endingPremium,
        endingNormal: h.endingNormal,
        endingTotal: h.endingPremium + h.endingNormal,
        subscriptionRevenue: null,
        takeRevenue: h.revenue,
        gmv: h.gmv,
        platformRevenue: h.revenue,
        marketingSpend: 0,
      }
      continue
    }

    const e = exp.byId[col.id]
    const months = col.months
    const weeks = weeksIn(months)
    const scale = fte0 > 0 ? e.internFte / fte0 : 1
    const emailsCollected = n(inputs.emailsCollectedPerWeek) * weeks * scale
    const emailsSent = n(inputs.emailsSentPerWeek) * weeks * scale
    const collabYes = n(inputs.collabYesPerWeek) * weeks * scale
    const collabNo = n(inputs.collabNoPerWeek) * weeks * scale
    const paidNew = collabNo * (n(inputs.paidCollabUnlockPct) / 100)
    const collabNew = collabYes + paidNew
    const collabHubs = n(inputs.publicHubsPerWeek) * weeks * scale
    const conversion = emailsSent > 0 ? collabYes / emailsSent : 0
    const networkBase = n(inputs.monthsToFirstHub) > 12 ? prevPrevCollabHubs : prevCollabHubs
    const networkNew = col.year >= 2027 ? networkBase * n(inputs.networkFromCollab) : 0

    const personalSpend = e.ceoCash * (n(inputs.ceoTimeOutreachPct) / 100)
    const platformSpend = (e.engCash + e.productCash) * (n(inputs.pmEngTimePlatformPct) / 100)

    const marketingNew = collabNew
    const premiumMix = n(inputs.premiumShareOfNewPct) / 100
    const mktPremium = marketingNew * premiumMix
    const mktNormal = marketingNew * (1 - premiumMix)
    const netPremium = networkNew * premiumMix
    const netNormal = networkNew * (1 - premiumMix)

    const beginningPremium = col.id === '2026F' ? n(inputs.beginningPremium2026F) : prevPremium
    const beginningNormal = col.id === '2026F' ? n(inputs.beginningNormal2026F) : prevNormal
    const beginningTotal = beginningPremium + beginningNormal
    const beginningLive = col.id === '2026F' ? beginningTotal : prevLiveHubs

    const newPremium = mktPremium + netPremium
    const newNormal = mktNormal + netNormal
    const frac = months / 12
    const attritPremium = beginningPremium * (n(inputs.premiumChurnPct) / 100) * frac
    const attritNormal = beginningNormal * (n(inputs.normalChurnPct) / 100) * frac
    const endingPremium = beginningPremium + newPremium - attritPremium
    const endingNormal = beginningNormal + newNormal - attritNormal
    const attritTotal = attritPremium + attritNormal
    const attritLive = beginningTotal > 0 ? beginningLive * (attritTotal / beginningTotal) : 0
    const liveShare = hubLiveShare(inputs.monthsToFirstHub, months)
    const newLiveHubs = collabHubs * liveShare + networkNew * liveShare
    const gmvHubs = beginningLive - attritLive + newLiveHubs
    const liveHubs = beginningLive - attritLive + collabHubs + networkNew

    const gmv = Math.max(0, gmvHubs) * n(inputs.avgCreatorGmvYear) * frac
    const take = gmv * (n(inputs.takeRatePct) / 100)
    const subscription =
      endingPremium * n(inputs.premiumFeeMonthly) * months +
      endingNormal * n(inputs.normalFeeMonthly) * months
    const engine1Spend = e.internCash + e.sm.outreach
    const engine2Spend = personalSpend + platformSpend
    const engine3Spend = e.sm.referral + e.sm.influencer
    const marketingSpend = engine1Spend + engine2Spend + engine3Spend

    const row = {
      internFte: e.internFte,
      weeks,
      scale,
      emailsCollected,
      emailsSent,
      collabYes,
      collabNo,
      paidNew,
      collabHubs,
      contacted: emailsCollected,
      conversion,
      funnelNew: collabYes,
      cpaNew: paidNew,
      marketingNew,
      mktPremium,
      mktNormal,
      beginningPremium,
      beginningNormal,
      netPremium,
      netNormal,
      networkNew,
      newPremium,
      newNormal,
      attritPremium,
      attritNormal,
      endingPremium,
      endingNormal,
      endingTotal: endingPremium + endingNormal,
      liveHubs,
      gmvHubs,
      gmv,
      subscriptionRevenue: subscription,
      takeRevenue: take,
      platformRevenue: subscription + take,
      engine1Spend,
      engine2Spend,
      engine3Spend,
      marketingSpend,
      blendedCac: marketingNew + networkNew > 0 ? marketingSpend / (marketingNew + networkNew) : null,
      paidUpside: collabNo * (1 - n(inputs.paidCollabUnlockPct) / 100),
    }
    byId[col.id] = row
    prevPremium = endingPremium
    prevNormal = endingNormal
    prevLiveHubs = liveHubs
    prevPrevCollabHubs = prevCollabHubs
    prevCollabHubs = collabHubs
  }

  return { byId }
}

function pnlFrom(revenue, exp, gmv, inputs, taxRate) {
  const cogs = n(gmv) * (n(inputs.paymentProcessingPct) / 100)
  const gross = revenue - cogs
  const opex = n(exp.personnel) + n(exp.tech) + n(exp.sales) + n(exp.ga)
  const opInc = gross - opex
  const tax = opInc > 0 ? opInc * taxRate : 0
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
    opex,
    opInc,
    opMargin: revenue ? opInc / revenue : null,
    tax,
    net,
    netMargin: revenue ? net / revenue : null,
  }
}

export function computeModel(inputs) {
  const taxRate = totalTaxRate(inputs)
  const expenses = computeExpenses(inputs)
  const topDown = computeTopDown(inputs)
  const bottomUp = computeBottomUp(inputs, IS_YEARS, expenses)

  const isRows = IS_YEARS.map((col) => {
    const bu = bottomUp.byId[col.id]
    const exp = expenses.byId[col.id]
    const tdYear = topDown.byYear[col.year]
    const topDownPnl =
      col.kind === 'forecast' && tdYear ? pnlFrom(tdYear.revenue, exp, 0, inputs, taxRate) : null
    const bottomUpPnl =
      bu?.platformRevenue != null
        ? pnlFrom(bu.platformRevenue, exp, bu.gmv ?? 0, inputs, taxRate)
        : null
    if (bottomUpPnl && bu) {
      bottomUpPnl.subscription = bu.subscriptionRevenue
      bottomUpPnl.take = bu.takeRevenue
      bottomUpPnl.gmv = bu.gmv
    }
    return {
      col,
      exp,
      bottomUp: bu ?? null,
      topDown: tdYear ?? null,
      bottomUpPnl,
      topDownPnl,
    }
  })

  const y26f = isRows.find((r) => r.col.id === '2026F')
  const y27 = isRows.find((r) => r.col.id === '2027F')
  const y31 = isRows.find((r) => r.col.id === '2031F')
  const endTd = topDown.years.find((y) => y.year === FORECAST_END_SAFE(inputs)) ?? topDown.years[topDown.years.length - 1]

  return {
    inputs,
    taxRate,
    expenses,
    topDown,
    bottomUp,
    isRows,
    kpis: {
      tdEndRevenue: endTd?.revenue ?? null,
      tdEndNet: null,
      bu2026FRevenue: y26f?.bottomUpPnl?.revenue ?? null,
      bu2027Revenue: y27?.bottomUpPnl?.revenue ?? null,
      bu2031Revenue: y31?.bottomUpPnl?.revenue ?? null,
      bu2031Net: y31?.bottomUpPnl?.net ?? null,
      creators2026F: y26f?.bottomUp?.endingTotal ?? null,
      creators2031: y31?.bottomUp?.endingTotal ?? null,
      endYear: 2031,
    },
  }
}

function FORECAST_END_SAFE(inputs) {
  return BASE_YEAR + Math.max(1, Math.round(n(inputs.horizonYears)))
}

export function computeTornado(baseInputs, shockPct = 0.2) {
  const base = computeModel(baseInputs)
  const baseVal = base.kpis.bu2031Revenue ?? 0
  return TORNADO_DRIVERS.map((d) => {
    const cur = n(baseInputs[d.key])
    let lowV = cur * (1 - shockPct)
    let highV = cur * (1 + shockPct)
    if (d.kind === 'years') {
      lowV = Math.max(1, Math.round(cur - 2))
      highV = Math.round(cur + 2)
    }
    if (cur === 0) {
      lowV = 0
      highV = d.key === 'monthsToFirstHub' ? 3 : d.key === 'collabNoPerWeek' ? 5 : 1
    }
    const low = computeModel({ ...baseInputs, [d.key]: lowV }).kpis.bu2031Revenue
    const high = computeModel({ ...baseInputs, [d.key]: highV }).kpis.bu2031Revenue
    return {
      key: d.key,
      label: d.label,
      low,
      high,
      lowDelta: (low ?? 0) - baseVal,
      highDelta: (high ?? 0) - baseVal,
    }
  })
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
      const td = model.topDown.byYear[2031]
      return {
        share,
        revenue: td?.revenue ?? null,
        net: null,
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
  return `${sign}$${abs.toLocaleString('en-US', {
    maximumFractionDigits: abs >= 1000 ? 0 : Math.max(digits, abs < 1 && abs > 0 ? 2 : digits),
    minimumFractionDigits: 0,
  })}`
}

export function formatPct(value, digits = 1) {
  if (value == null || Number.isNaN(value)) return '—'
  const pct = value * 100
  if (pct !== 0 && Math.abs(pct) < 0.01) return `${pct.toExponential(2)}%`
  return `${pct.toFixed(digits)}%`
}

export function formatCount(value, digits = 0) {
  if (value == null || Number.isNaN(value)) return '—'
  return value.toLocaleString('en-US', { maximumFractionDigits: digits })
}
