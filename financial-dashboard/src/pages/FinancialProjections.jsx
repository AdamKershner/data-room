/**
 * Interactive Kahana financial projections — teammates and investors can
 * edit drivers, compare top-down vs YAU cases, and run sensitivity.
 */

import React, { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import './Page.css'
import './FinancialProjections.css'
import {
  CAGR_RATIONALE,
  COMPARABLES,
  CONSERVATIVE_YAU_INPUTS,
  CONSERVATIVE_YAU_RATIONALE,
  CREATOR_SUPPLY_CAGR_PCT,
  DEFAULT_PRESET_ID,
  FINANCIAL_PROJECTIONS_PAGE,
  GLOSSARY,
  IS_YEARS,
  MARKETING_FUNNEL_DEFAULTS,
  METHOD_NOTES,
  PRESETS,
  REGISTERED_USERS_CENSUS_2026,
  RESURRECTION,
  RESURRECTION_PUBLISH,
  RESURRECTION_RATIONALE,
  RESURRECTION_SAVE,
  SENSITIVITY_SHARE_PCTS,
  TERM_HELP,
  HUB_SPILLOVER_RATIONALE,
  ETSY_BUYERS_PER_SELLER,
  CHECKOUT_COMPLETION_PCT,
  SAVERS_THIS_HUB,
  SAVERS_OTHER_HUB,
  ASPIRING_SELLERS_PER_HUB,
  WORKBOOK_SOURCE,
  YAU_OPERATING_RATIONALE,
  YAU_RETENTION,
  NEW_USER_ACTIVATION,
  MONETIZATION_RATE,
  GMV_PER_SELLER,
  GROWTH_ANNUAL_MIX,
  GROWTH_ANNUAL_PRICE,
  GROWTH_CONVERT,
  GROWTH_CONVERT_BETA,
  GROWTH_MONTHLY_PRICE,
  GROWTH_SAAS_RATIONALE,
  DISCOVERY_GMV_LIFT,
  PRODUCT_MATURITY_PCT,
  growthAnnualArpu,
  effectiveGrowthConvertPct,
  effectiveGmvPerSeller,
  VIRAL_K,
  VIRAL_K_RATIONALE,
  CATALOG_SIGNUPS,
  SIGNUP_VIRAL_K,
  hubDemandSpillover,
} from '../data/financialProjectionsData'
import {
  cloneInputs,
  computeMarketingFunnel,
  computeModel,
  computeShareCagrGrid,
  computeTornado,
  formatCount,
  formatPct,
  formatUsd,
} from '../data/financialProjectionsModel'

function InfoTip({ term, text }) {
  const id = useId()
  const btnRef = useRef(null)
  const bubbleRef = useRef(null)
  const hideTimer = useRef(null)
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })

  const place = () => {
    const el = btnRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const width = Math.min(300, window.innerWidth - 16)
    let left = r.left + r.width / 2 - width / 2
    left = Math.max(8, Math.min(left, window.innerWidth - width - 8))
    const bubbleH = bubbleRef.current?.offsetHeight || 120
    const below = r.bottom + 8
    const top = below + bubbleH > window.innerHeight - 8 ? Math.max(8, r.top - 8 - bubbleH) : below
    setPos({ top, left, width })
  }

  const show = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    place()
    setOpen(true)
  }

  const hide = () => {
    hideTimer.current = setTimeout(() => setOpen(false), 80)
  }

  useLayoutEffect(() => {
    if (open) place()
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onScroll = () => place()
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('scroll', onScroll, true)
    window.addEventListener('resize', onScroll)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll, true)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(
    () => () => {
      if (hideTimer.current) clearTimeout(hideTimer.current)
    },
    [],
  )

  return (
    <span className="fp-info">
      <button
        ref={btnRef}
        type="button"
        className="fp-info-btn"
        aria-label={`About ${term}`}
        aria-expanded={open}
        aria-controls={id}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        <span aria-hidden="true">i</span>
      </button>
      {open
        ? createPortal(
            <span
              ref={bubbleRef}
              id={id}
              role="tooltip"
              className="fp-info-bubble"
              style={{ top: pos.top, left: pos.left, width: pos.width }}
            >
              <strong>{term}</strong>
              {text}
            </span>,
            document.body,
          )
        : null}
    </span>
  )
}

function TermTip({ k }) {
  const help = TERM_HELP[k]
  if (!help) return null
  return <InfoTip term={help.title} text={help.body} />
}

function Term({ k, children }) {
  return (
    <span className="fp-term">
      {children}
      <TermTip k={k} />
    </span>
  )
}

function Field({ label, hint, tipKey, children }) {
  return (
    <div className="fp-field">
      <span className="fp-field-label">
        <Term k={tipKey}>{label}</Term>
      </span>
      {children}
      {hint ? <span className="fp-field-hint">{hint}</span> : null}
    </div>
  )
}

function NumberField({ label, hint, tipKey, value, onChange, step, min, prefix, suffix }) {
  return (
    <Field label={label} hint={hint} tipKey={tipKey}>
      <label className="fp-input-wrap">
        {prefix ? <span className="fp-affix">{prefix}</span> : null}
        <input
          type="number"
          aria-label={label}
          value={value}
          step={step}
          min={min}
          onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
        />
        {suffix ? <span className="fp-affix">{suffix}</span> : null}
      </label>
    </Field>
  )
}

function moneyCell(value) {
  if (value == null) return '—'
  return formatUsd(value)
}

function pctCell(value) {
  if (value == null) return '—'
  return formatPct(value, value < 0.01 && value > 0 ? 4 : 1)
}

function PnlTable({ rows, caseKey, title }) {
  const pnlKey = caseKey === 'topDown' ? 'topDownPnl' : 'bottomUpPnl'
  const line = (label, getter, { strong, pct, tipKey } = {}) => (
    <tr className={strong ? 'is-total' : undefined}>
      <th scope="row">
        <Term k={tipKey}>{label}</Term>
      </th>
      {rows.map((row) => {
        const pnl = row[pnlKey]
        const raw = pnl ? getter(pnl) : null
        return (
          <td key={row.col.id} className={raw < 0 ? 'is-neg' : undefined}>
            {pct ? pctCell(raw) : moneyCell(raw)}
          </td>
        )
      })}
    </tr>
  )

  return (
    <div className="fp-table-wrap">
      <table className="fp-table">
        <thead>
          <tr>
            <th>{title}</th>
            {rows.map((row) => (
              <th key={row.col.id}>{row.col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {line('Platform revenue', (p) => p.revenue, { strong: true, tipKey: 'pnlRevenue' })}
          {line('Transaction / platform costs', (p) => p.cogs, { tipKey: 'pnlCogs' })}
          {line('Gross profit', (p) => p.gross, { strong: true, tipKey: 'pnlGross' })}
          {line('Gross margin', (p) => p.grossMargin, { pct: true, tipKey: 'pnlGrossMargin' })}
          {line('Personnel', (p) => p.personnel, { tipKey: 'pnlPersonnel' })}
          {line('Technology & infrastructure', (p) => p.tech, { tipKey: 'pnlTech' })}
          {line('Sales & marketing', (p) => p.sales, { tipKey: 'pnlSales' })}
          {line('G&A', (p) => p.ga, { tipKey: 'pnlGa' })}
          {line('Total operating expenses', (p) => p.opex, { strong: true, tipKey: 'pnlOpex' })}
          {line('Operating income', (p) => p.opInc, { strong: true, tipKey: 'pnlOpInc' })}
          {line('Operating margin', (p) => p.opMargin, { pct: true, tipKey: 'pnlOpMargin' })}
          {line('Taxes', (p) => p.tax, { tipKey: 'pnlTax' })}
          {line('Net income', (p) => p.net, { strong: true, tipKey: 'pnlNet' })}
          {line('Net margin', (p) => p.netMargin, { pct: true, tipKey: 'pnlNetMargin' })}
        </tbody>
      </table>
    </div>
  )
}

function FinancialProjections() {
  const [inputs, setInputs] = useState(() => cloneInputs(CONSERVATIVE_YAU_INPUTS))
  const [presetId, setPresetId] = useState(DEFAULT_PRESET_ID)
  const [caseView, setCaseView] = useState('both')
  const [funnel, setFunnel] = useState(MARKETING_FUNNEL_DEFAULTS)

  const setField = (key, value) => {
    setPresetId('custom')
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  const applyPreset = (preset) => {
    setPresetId(preset.id)
    setInputs(cloneInputs(preset.inputs))
    setFunnel({ ...MARKETING_FUNNEL_DEFAULTS })
  }

  const setFunnelField = (key, value) => {
    setPresetId('custom')
    setFunnel((p) => ({ ...p, [key]: value }))
  }

  const setSpilloverField = (key, value) => {
    setPresetId('custom')
    setInputs((prev) => {
      const next = { ...prev, [key]: value }
      const s = hubDemandSpillover(next)
      return { ...next, extraSignupsPerCollab: s.extraSignupsPerCollab }
    })
  }

  const model = useMemo(() => computeModel(inputs), [inputs])
  const tornado = useMemo(() => computeTornado(inputs), [inputs])
  const grid = useMemo(() => computeShareCagrGrid(inputs), [inputs])
  const funded = inputs.seedRaise > 0
  const funnelOut = useMemo(
    () =>
      computeMarketingFunnel(
        {
          ...funnel,
          extraBuyersPerHub: inputs.extraBuyersPerHub,
          checkoutCompletionPct: inputs.checkoutCompletionPct,
          extraSaversThisHub: inputs.extraSaversThisHub,
          extraSaversOtherHub: inputs.extraSaversOtherHub,
          extraAspiringSellersPerHub: inputs.extraAspiringSellersPerHub,
        },
        funded,
      ),
    [
      funnel,
      funded,
      inputs.extraBuyersPerHub,
      inputs.checkoutCompletionPct,
      inputs.extraSaversThisHub,
      inputs.extraSaversOtherHub,
      inputs.extraAspiringSellersPerHub,
    ],
  )

  const chartData = model.topDown.years.map((td) => {
    const isCol = model.isRows.find((r) => r.col.year === td.year && r.col.kind !== 'ytd')
    const ytd = model.isRows.find((r) => r.col.year === td.year && r.col.kind === 'ytd')
    return {
      year: String(td.year),
      topDown: td.revenue,
      bottomUp: isCol?.bottomUpPnl?.revenue ?? ytd?.bottomUpPnl?.revenue ?? null,
    }
  })

  const maxTornado = Math.max(
    1,
    ...tornado.flatMap((d) => [Math.abs(d.lowDelta), Math.abs(d.highDelta)]),
  )
  const gridVals = grid.flatMap((r) => r.cells.map((c) => c.revenue ?? 0))
  const gridMin = Math.min(...gridVals)
  const gridMax = Math.max(...gridVals)

  const heat = (value) => {
    if (gridMax === gridMin) return 0.15
    return 0.06 + 0.32 * ((value - gridMin) / (gridMax - gridMin))
  }

  return (
    <div className="page fp-page">
      <div className="page-header">
        <h1>{FINANCIAL_PROJECTIONS_PAGE.title}</h1>
        <p className="fp-subtitle">{FINANCIAL_PROJECTIONS_PAGE.subtitle}</p>
        <p className="fp-meta">
          {WORKBOOK_SOURCE.asOf}
          {' · '}
          <a href={WORKBOOK_SOURCE.href} download>
            Download {WORKBOOK_SOURCE.fileName}
          </a>
          {' · '}
          <Link to="/fragment-capture">Market Map</Link>
          {' · '}
          <Link to="/company-landscape">Company Landscape</Link>
        </p>
      </div>

      <section className="page-section">
        <h2>How to read this</h2>
        <div className="content-block">
          <p>
            Two revenue cases, not a sum.{' '}
            <Term k="topDown">
              <strong>Top-down</strong>
            </Term>{' '}
            is relevant global market × Kahana share. The conservative case holds today’s implied
            share (no ramp to 1%).{' '}
            <Term k="bottomUp">
              <strong>Bottom-up / YAU</strong>
            </Term>{' '}
            is yearly active users feeding two cash streams: 5% take on hub sales, plus Growth SaaS
            from publishers who hit Free limits. Conversion ramps as the creator publish agent,
            viewer search agent, and recommendations ship — not the 2026 ~9/6,554 beta rate.
            Intern collabs are complimentary in the collab year only. Not a management forecast.
            Switch to Workbook for the blank Excel defaults (including a 1% share ramp). Expenses
            and hiring are shared. Edit the drivers — the statements, chart, and sensitivity grid
            recompute immediately.
          </p>
        </div>
        <div className="fp-collapsibles">
          <details className="fp-details">
            <summary>
              Key terms
              <span>Open</span>
            </summary>
            <dl className="fp-glossary">
              {GLOSSARY.map((item) => (
                <div key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.definition}</dd>
                </div>
              ))}
            </dl>
          </details>
          <details className="fp-details">
            <summary>
              Methodology notes
              <span>Open</span>
            </summary>
            <ul className="fp-notes">
              {METHOD_NOTES.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      <section className="page-section" id="presets">
        <h2>Named cases</h2>
        <div className="fp-presets" role="tablist" aria-label="Named cases">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              role="tab"
              aria-selected={presetId === preset.id}
              className={`fp-chip${presetId === preset.id ? ' is-active' : ''}`}
              onClick={() => applyPreset(preset)}
            >
              <strong>{preset.label}</strong>
              <span>{preset.hint}</span>
            </button>
          ))}
          <button
            type="button"
            className={`fp-chip${presetId === 'custom' ? ' is-active' : ''}`}
            disabled={presetId !== 'custom'}
          >
            <strong>Custom</strong>
            <span>Edits since last preset</span>
          </button>
        </div>
      </section>

      <div className="fp-kpis-wrap">
        <section className="fp-kpis" aria-label="Top-down results">
          <article>
            <p className="fp-kpi-label">
              <Term k="td2031Revenue">2031F top-down revenue</Term>
            </p>
            <p className="fp-kpi-value">{formatUsd(model.kpis.td2031Revenue)}</p>
          </article>
          <article>
            <p className="fp-kpi-label">
              <Term k="td2031Net">2031F top-down net income</Term>
            </p>
            <p className={`fp-kpi-value${(model.kpis.td2031Net ?? 0) < 0 ? ' is-neg' : ''}`}>
              {formatUsd(model.kpis.td2031Net)}
            </p>
          </article>
          <article>
            <p className="fp-kpi-label">
              <Term k="targetShareKpi">{model.kpis.endYear} target share</Term>
            </p>
            <p className="fp-kpi-value">{formatPct(model.kpis.endShare, 2)}</p>
            <p className="fp-kpi-sub">
              {model.kpis.holdShare
                ? 'Held at 2026 implied share — no ramp'
                : `Required share CAGR ${formatPct(model.kpis.shareCagr, 0)}`}
            </p>
          </article>
          <article>
            <p className="fp-kpi-label">
              <Term k="headcount2031">2031F headcount</Term>
            </p>
            <p className="fp-kpi-value">{formatCount(model.kpis.headcount2031)}</p>
            <p className="fp-kpi-sub">Seed {formatUsd(inputs.seedRaise)}</p>
          </article>
        </section>
        <section className="fp-kpis fp-kpis-yau" aria-label="Bottom-up results">
          <article>
            <p className="fp-kpi-label">
              <Term k="bu2031Revenue">2031F YAU platform revenue</Term>
            </p>
            <p className="fp-kpi-value">{formatUsd(model.kpis.bu2031Revenue)}</p>
            <p className="fp-kpi-sub">5% take on GMV — not a sum with top-down</p>
          </article>
          <article>
            <p className="fp-kpi-label">
              <Term k="bu2031Gmv">2031F creator GMV</Term>
            </p>
            <p className="fp-kpi-value">{formatUsd(model.kpis.bu2031Gmv)}</p>
          </article>
          <article>
            <p className="fp-kpi-label">
              <Term k="bu2031Yau">2031F yearly active users</Term>
            </p>
            <p className="fp-kpi-value">{formatCount(model.kpis.bu2031Yau)}</p>
          </article>
          <article>
            <p className="fp-kpi-label">
              <Term k="bu2031Monetizing">2031F monetizing creators</Term>
            </p>
            <p className="fp-kpi-value">{formatCount(model.kpis.bu2031Monetizing)}</p>
            <p className="fp-kpi-sub">vs 13 actual in 2025</p>
          </article>
        </section>
      </div>

      <section className="page-section" id="drivers">
        <h2>Drivers</h2>
        <div className="fp-layout">
          <div className="fp-controls">
            <fieldset>
              <legend>Top-down market</legend>
              <NumberField
                label="2026 global market"
                tipKey="globalMarketBn2026"
                prefix="$"
                suffix="bn"
                value={inputs.globalMarketBn2026}
                onChange={(v) => setField('globalMarketBn2026', v)}
                step={10}
                min={0}
                hint="From Company Landscape company $ / users, cross-checked independently. $360bn is the ballpark."
              />
              <NumberField
                label="Kahana-relevant segment"
                tipKey="relevantSegmentPct"
                suffix="%"
                value={inputs.relevantSegmentPct}
                onChange={(v) => setField('relevantSegmentPct', v)}
                step={0.5}
                min={0}
                hint="Page default 20% ($72bn). Excel workbook is 7.5%."
              />
              <NumberField
                label="Market CAGR"
                tipKey="marketCagrPct"
                suffix="%"
                value={inputs.marketCagrPct}
                onChange={(v) => setField('marketCagrPct', v)}
                step={0.1}
                min={0}
                hint="Viewer/reader demand. Base 5% from ebook forecasts. This is what grows the pond."
              />
              <p className="fp-cagr-companion">
                <Term k="creatorSupplyCagr">Creator-supply CAGR</Term>
                <strong>{CREATOR_SUPPLY_CAGR_PCT}%</strong>
                <span>Goldman Sachs creator headcount — not in this box</span>
              </p>
              <details className="fp-details fp-details-nested">
                <summary>
                  Why these CAGRs
                  <span>Open</span>
                </summary>
                <ul className="fp-notes">
                  {CAGR_RATIONALE.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
              <NumberField
                label="2026 Kahana platform revenue"
                tipKey="kahanaRevenue2026"
                prefix="$"
                value={inputs.kahanaRevenue2026}
                onChange={(v) => setField('kahanaRevenue2026', v)}
                step={100}
                min={0}
                hint="Workbook $1,000 for share math. 2025–26 actuals were organic-only, in beta: $898 (2025), $512 YTD through May."
              />
              <NumberField
                label="Target share at forecast end"
                tipKey="targetSharePct"
                suffix="%"
                value={inputs.targetSharePct}
                onChange={(v) => setField('targetSharePct', v)}
                step={0.1}
                min={0}
                hint="0 = hold 2026 implied share (conservative plan). 1% is a stretch on the grid, not the unpaid-collab case. Excel still has 1%."
              />
              <NumberField
                label="Forecast horizon"
                tipKey="horizonYears"
                suffix="years"
                value={inputs.horizonYears}
                onChange={(v) => setField('horizonYears', Math.max(1, Math.round(v)))}
                step={1}
                min={1}
                hint={`End year ${model.topDown.endYear}.`}
              />
            </fieldset>

            <fieldset>
              <legend>Bottom-up / YAU forecast</legend>
              <p className="fp-fieldset-note">
                Historical years stay as actuals. These drivers apply from 2027F. Conservative
                defaults are inferred from 2023–26 actuals because Excel left YAU blank.
              </p>
              <NumberField
                label="Hub-to-creator virality (k)"
                tipKey="viralK"
                value={inputs.viralK}
                onChange={(v) => setField('viralK', v)}
                step={0.01}
                min={0}
                hint={`Extra first publishers per publisher / year. Base ${VIRAL_K.base} (low ${VIRAL_K.low} / high ${VIRAL_K.high}). They were usually already registered; their hub mints new-account extras.`}
              />
              <p className="fp-cagr-companion">
                <Term k="kNewOut">New publishers from k (2027)</Term>
                <strong>
                  {formatCount(
                    model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.kNewPublishers ?? 0,
                    1,
                  )}
                </strong>
                <span>
                  Last year’s publisher stock × k. Their first hubs mint extras like intern collabs.
                  Scales with the collab-built publisher stock.
                </span>
              </p>
              <details className="fp-details fp-details-nested">
                <summary>
                  Why this k
                  <span>Open</span>
                </summary>
                <ul className="fp-notes">
                  {VIRAL_K_RATIONALE.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
              <NumberField
                label="Catalog signups / live publisher"
                tipKey="catalogSignupsPerPublisher"
                value={inputs.catalogSignupsPerPublisher}
                onChange={(v) => setField('catalogSignupsPerPublisher', v)}
                step={0.5}
                min={0}
                hint={`At full product. Default ${CATALOG_SIGNUPS.base} (low ${CATALOG_SIGNUPS.low} / high ${CATALOG_SIGNUPS.high}). Search / recs / viewer agent on already-live hubs, not intern launch extras. Ramped with product maturity.`}
              />
              <NumberField
                label="Signup virality"
                tipKey="signupViralK"
                value={inputs.signupViralK}
                onChange={(v) => setField('signupViralK', v)}
                step={0.05}
                min={0}
                hint={`Extra new accounts next year per new account this year. Default ${SIGNUP_VIRAL_K.base} (low ${SIGNUP_VIRAL_K.low} / high ${SIGNUP_VIRAL_K.high}). Below 1 so intern stays the engine. Ramped with product maturity.`}
              />
                tipKey="startingYau"
                value={inputs.startingYau}
                onChange={(v) => setField('startingYau', v)}
                step={50}
                min={0}
                hint={`Inferred. Workbook never measured yearly actives. 500 ≈ 8% of ${REGISTERED_USERS_CENSUS_2026.toLocaleString()} registered.`}
              />
              <NumberField
                label="Resurrection rate"
                tipKey="resurrectionPct"
                suffix="%"
                value={inputs.resurrectionPct}
                onChange={(v) => setField('resurrectionPct', v)}
                step={0.5}
                min={0}
                hint={`5–10% of the ${REGISTERED_USERS_CENSUS_2026.toLocaleString()} starting list do one meaningful 2027 action after the email. Default ${RESURRECTION.base}%. Applied to dormant accounts only. Already registered.`}
              />
              <p className="fp-cagr-companion">
                <Term k="resurrectionPct">2027 resurrected YAU</Term>
                <strong>
                  {formatCount(
                    model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.resurrected ?? 0,
                  )}
                </strong>
                <span>
                  One-time add from the starting base. Low {RESURRECTION.low}% · high{' '}
                  {RESURRECTION.high}% of dormant remainder (
                  {REGISTERED_USERS_CENSUS_2026.toLocaleString()} − starting YAU). Not a new
                  signup.
                </span>
              </p>
              <details className="fp-details fp-details-nested">
                <summary>
                  Why this resurrection rate
                  <span>Open</span>
                </summary>
                <ul className="fp-notes">
                  {RESURRECTION_RATIONALE.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
              <NumberField
                label="Resurrected who publish"
                tipKey="resurrectionPublishPct"
                suffix="%"
                value={inputs.resurrectionPublishPct}
                onChange={(v) => setField('resurrectionPublishPct', v)}
                step={5}
                min={0}
                hint={`Default ${RESURRECTION_PUBLISH.base}%. Already registered — no intern setup hours. Each hub they publish mints the same extras as an intern collab.`}
              />
              <NumberField
                label="Resurrected who save"
                tipKey="resurrectionSavePct"
                suffix="%"
                value={inputs.resurrectionSavePct}
                onChange={(v) => setField('resurrectionSavePct', v)}
                step={5}
                min={0}
                hint={`Default ${RESURRECTION_SAVE.base}%. Already registered. Overlap with publishing is allowed.`}
              />
              <p className="fp-cagr-companion">
                <Term k="resurrectionNewUsersOut">New accounts from their hubs</Term>
                <strong>
                  {formatCount(
                    model.isRows.find((r) => r.col.id === '2027F')?.bottomUp
                      ?.resurrectionNewUsers ?? 0,
                  )}
                </strong>
                <span>
                  {formatCount(
                    model.isRows.find((r) => r.col.id === '2027F')?.bottomUp
                      ?.resurrectionPublishers ?? 0,
                    1,
                  )}{' '}
                  hubs they publish × extras per hub. Attributed to the{' '}
                  {REGISTERED_USERS_CENSUS_2026.toLocaleString()} starting base, not intern GTM.
                </span>
              </p>
              <NumberField
                label="New registered users (2027)"
                tipKey="newRegisteredUsers"
                value={inputs.newRegisteredUsers}
                onChange={(v) => setField('newRegisteredUsers', v)}
                step={50}
                min={0}
                hint="Intern unpaid-collab funnel only (30 × 20h). Engine adds resurrection, k-hub extras, catalog discovery, and signup virality on top. Re-click Conservative YAU after changing the funnel."
              />
              <p className="fp-cagr-companion">
                <Term k="funnelCollabs">Intern funnel implies</Term>
                <strong>{formatCount(Math.round(funnelOut.newRegistrations ?? 0))}</strong>
                <span>
                  {formatCount(funnelOut.annualPublished, 1)} published hubs × (1 creator +{' '}
                  {formatCount(funnelOut.extraBuyersPerHub, 1)} pay-intent +{' '}
                  {formatCount(funnelOut.extraSaversThisHub, 1)} save-this +{' '}
                  {formatCount(funnelOut.extraSaversOtherHub, 1)} save-other +{' '}
                  {formatCount(funnelOut.extraAspiringSellersPerHub, 2)} aspiring). Re-click
                  Conservative YAU after changing the funnel if you want this box to match.
                </span>
              </p>
              <p className="fp-cagr-companion">
                <Term k="newUsersOut">2027 new accounts (engine)</Term>
                <strong>
                  {formatCount(
                    model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.newUsers ?? 0,
                  )}
                </strong>
                <span>
                  Intern {formatCount(model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.outreachNewUsers ?? 0)}
                  {' '}+ resurrection extras {formatCount(model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.resurrectionNewUsers ?? 0)}
                  {' '}+ k-hub extras {formatCount(model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.kExtraNewUsers ?? 0)}
                  {' '}+ catalog {formatCount(model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.catalogNewUsers ?? 0)}
                  {' '}+ signup virality {formatCount(model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.viralNewUsers ?? 0)}
                  . Intern hours are not the whole curve.
                </span>
              </p>
              <NumberField
                label="Pay-intent signups / hub"
                tipKey="extraBuyersPerHub"
                value={inputs.extraBuyersPerHub}
                onChange={(v) => setSpilloverField('extraBuyersPerHub', v)}
                step={1}
                min={0}
                hint={`Etsy ~${ETSY_BUYERS_PER_SELLER} buyers per seller. Amy ~13/year. Account created intending to pay; not all finish.`}
              />
              <NumberField
                label="Checkout completion"
                tipKey="checkoutCompletionPct"
                suffix="%"
                value={inputs.checkoutCompletionPct}
                onChange={(v) => setSpilloverField('checkoutCompletionPct', v)}
                step={5}
                min={0}
                hint={`Default ${CHECKOUT_COMPLETION_PCT}%. Unfinished pay-intent uses saver activation. Does not set GMV.`}
              />
              <NumberField
                label="Savers of this hub"
                tipKey="extraSaversThisHub"
                value={inputs.extraSaversThisHub}
                onChange={(v) => setSpilloverField('extraSaversThisHub', v)}
                step={1}
                min={0}
                hint={`Default ${SAVERS_THIS_HUB}. Saw the collab hub and created an account to save it for later. Average collab, not Amy-scale.`}
              />
              <NumberField
                label="Savers of another hub"
                tipKey="extraSaversOtherHub"
                value={inputs.extraSaversOtherHub}
                onChange={(v) => setSpilloverField('extraSaversOtherHub', v)}
                step={1}
                min={0}
                hint={`Default ${SAVERS_OTHER_HUB}. Attracted by that collab, then signed up to save a different hub.`}
              />
              <NumberField
                label="Aspiring-seller signups / hub"
                tipKey="extraAspiringSellersPerHub"
                value={inputs.extraAspiringSellersPerHub}
                onChange={(v) => setSpilloverField('extraAspiringSellersPerHub', v)}
                step={0.05}
                min={0}
                hint={`Default ${ASPIRING_SELLERS_PER_HUB}. Intent to sell; k is who actually publishes. Not extra accounts from k.`}
              />
              <p className="fp-cagr-companion">
                <Term k="extraSignupsPerCollab">Extras per hub</Term>
                <strong>
                  {formatCount(hubDemandSpillover(inputs).extraSignupsPerCollab, 1)}
                </strong>
                <span>
                  {formatCount(hubDemandSpillover(inputs).extraBuyersPerHub, 1)} pay-intent (
                  {formatCount(hubDemandSpillover(inputs).completedBuyersPerHub, 1)} finish checkout)
                  + {formatCount(hubDemandSpillover(inputs).extraSaversThisHub, 1)} save-this +{' '}
                  {formatCount(hubDemandSpillover(inputs).extraSaversOtherHub, 1)} save-other +{' '}
                  {formatCount(hubDemandSpillover(inputs).extraAspiringSellersPerHub, 2)} aspiring.
                  Plus 1 collab creator.
                </span>
              </p>
              <details className="fp-details fp-details-nested">
                <summary>
                  Why these hub extras
                  <span>Open</span>
                </summary>
                <ul className="fp-notes">
                  {HUB_SPILLOVER_RATIONALE.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
              <NumberField
                label="New-user growth"
                tipKey="newUserGrowthPct"
                suffix="% / yr"
                value={inputs.newUserGrowthPct}
                onChange={(v) => setField('newUserGrowthPct', v)}
                step={1}
                min={0}
                hint="Intern-hour growth only. 0% = 30 × 20h stays flat. Catalog discovery and signup virality compound on top of that box."
              />
              <NumberField
                label="YAU retention"
                tipKey="yauRetentionPct"
                suffix="%"
                value={inputs.yauRetentionPct}
                onChange={(v) => setField('yauRetentionPct', v)}
                step={1}
                min={0}
                hint={`Last year’s YAU who return. Base ${YAU_RETENTION.base}% (low ${YAU_RETENTION.low} / high ${YAU_RETENTION.high}). Labeled assumption.`}
              />
              <NumberField
                label="New-user activation"
                tipKey="newUserActivationPct"
                suffix="%"
                value={inputs.newUserActivationPct}
                onChange={(v) => setField('newUserActivationPct', v)}
                step={1}
                min={0}
                hint={`Savers, aspiring sellers, and unfinished checkouts → same-year YAU. Publishers and completed checkouts count in full. Base ${NEW_USER_ACTIVATION.base}% (low ${NEW_USER_ACTIVATION.low} / high ${NEW_USER_ACTIVATION.high}).`}
              />
              <NumberField
                label="Annual monetization rate"
                tipKey="monetizationRatePct"
                suffix="%"
                value={inputs.monetizationRatePct}
                onChange={(v) => setField('monetizationRatePct', v)}
                step={0.5}
                min={0}
                hint={`Publishing creators who sell. Base ${MONETIZATION_RATE.base}% (low ${MONETIZATION_RATE.low} / high ${MONETIZATION_RATE.high}). Not applied to saver YAU.`}
              />
              <NumberField
                label="GMV / monetizing user"
                tipKey="gmvPerMonetizingUser"
                prefix="$"
                value={inputs.gmvPerMonetizingUser}
                onChange={(v) => setField('gmvPerMonetizingUser', v)}
                step={50}
                min={0}
                hint={`Beta-era volume floor. Base $${GMV_PER_SELLER.base.toLocaleString()} (low $${GMV_PER_SELLER.low} / high $${GMV_PER_SELLER.high.toLocaleString()}). Search + recs add a ramped discovery lift on top.`}
              />
              <details className="fp-details fp-details-nested">
                <summary>
                  Why these operating rates
                  <span>Open</span>
                </summary>
                <ul className="fp-notes">
                  {YAU_OPERATING_RATIONALE.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
              <NumberField
                label="Platform take rate"
                tipKey="takeRatePct"
                suffix="%"
                value={inputs.takeRatePct}
                onChange={(v) => setField('takeRatePct', v)}
                step={0.5}
                min={0}
                hint="5% application fee on hub GMV (Stripe Connect). Not Growth SaaS."
              />
              <NumberField
                label="Beta-floor Growth conversion"
                tipKey="growthConvertBetaPct"
                suffix="%"
                value={inputs.growthConvertBetaPct}
                onChange={(v) => setField('growthConvertBetaPct', v)}
                step={1}
                min={0}
                hint={`2026-like product (no search, no marketplace discovery, weaker UX). Default ${GROWTH_CONVERT_BETA.base}%. Start of the ramp — not the 2031 rate.`}
              />
              <NumberField
                label="Full-product Growth conversion"
                tipKey="growthConvertPct"
                suffix="%"
                value={inputs.growthConvertPct}
                onChange={(v) => setField('growthConvertPct', v)}
                step={1}
                min={0}
                hint={`Once the creator agent, viewer search agent, and recommendations are in-market. Default ${GROWTH_CONVERT.base}% (low ${GROWTH_CONVERT.low} / high ${GROWTH_CONVERT.high}). Eligible publishers except this year’s intern comps.`}
              />
              <NumberField
                label="Discovery GMV lift (full product)"
                tipKey="discoveryGmvLiftPct"
                suffix="%"
                value={inputs.discoveryGmvLiftPct}
                onChange={(v) => setField('discoveryGmvLiftPct', v)}
                step={1}
                min={0}
                hint={`Extra GMV/seller from search, the viewer agent, and recs. Default ${DISCOVERY_GMV_LIFT.base}% (low ${DISCOVERY_GMV_LIFT.low} / high ${DISCOVERY_GMV_LIFT.high}). Volume, not a price hike.`}
              />
              <NumberField
                label="Growth monthly price"
                tipKey="growthMonthlyPrice"
                prefix="$"
                value={inputs.growthMonthlyPrice}
                onChange={(v) => setField('growthMonthlyPrice', v)}
                step={0.01}
                min={0}
                hint={`Product default $${GROWTH_MONTHLY_PRICE}. 4th+ hubs, unlimited files, 5 MB–5 GB uploads.`}
              />
              <NumberField
                label="Growth annual price"
                tipKey="growthAnnualPrice"
                prefix="$"
                value={inputs.growthAnnualPrice}
                onChange={(v) => setField('growthAnnualPrice', v)}
                step={0.01}
                min={0}
                hint={`Product default $${GROWTH_ANNUAL_PRICE}/yr (~17% less than 12 × monthly).`}
              />
              <NumberField
                label="Growth annual billing mix"
                tipKey="growthAnnualMixPct"
                suffix="%"
                value={inputs.growthAnnualMixPct}
                onChange={(v) => setField('growthAnnualMixPct', v)}
                step={5}
                min={0}
                hint={`Share on annual billing. Default ${GROWTH_ANNUAL_MIX.base}% (near Aug 2026 list-price Stripe mix). Higher annual mix lowers ARPU.`}
              />
              <p className="fp-cagr-companion">
                <Term k="growthRevOut">2027 Growth SaaS</Term>
                <strong>
                  {formatUsd(
                    model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.growthRevenue ?? 0,
                  )}
                </strong>
                <span>
                  {formatCount(
                    model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.growthSubs ?? 0,
                    1,
                  )}{' '}
                  paid × {formatUsd(growthAnnualArpu(inputs))}/yr. Effective convert{' '}
                  {formatCount(
                    model.isRows.find((r) => r.col.id === '2027F')?.bottomUp
                      ?.growthConvertEffectivePct ?? 0,
                    1,
                  )}
                  % at {PRODUCT_MATURITY_PCT[2027]}% product maturity. GMV/seller{' '}
                  {formatUsd(effectiveGmvPerSeller(2027, inputs))}. Take{' '}
                  {formatUsd(
                    model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.takeRevenue ?? 0,
                  )}
                  .
                </span>
              </p>
              <p className="fp-cagr-companion">
                <Term k="growthRevOut">2031 Growth SaaS</Term>
                <strong>
                  {formatUsd(
                    model.isRows.find((r) => r.col.id === '2031F')?.bottomUp?.growthRevenue ?? 0,
                  )}
                </strong>
                <span>
                  {formatCount(
                    model.isRows.find((r) => r.col.id === '2031F')?.bottomUp?.growthSubs ?? 0,
                    1,
                  )}{' '}
                  paid at full-product {formatCount(effectiveGrowthConvertPct(2031, inputs), 1)}%
                  convert. GMV/seller {formatUsd(effectiveGmvPerSeller(2031, inputs))}. Take{' '}
                  {formatUsd(
                    model.isRows.find((r) => r.col.id === '2031F')?.bottomUp?.takeRevenue ?? 0,
                  )}
                  . 2026 ~9/6,554 is not this rate.
                </span>
              </p>
              <details className="fp-details fp-details-nested">
                <summary>
                  Why conversion ramps (north star)
                  <span>Open</span>
                </summary>
                <ul className="fp-notes">
                  {GROWTH_SAAS_RATIONALE.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
              <NumberField
                label="Transactions / monetizing user"
                tipKey="txPerMonetizingUser"
                value={inputs.txPerMonetizingUser}
                onChange={(v) => setField('txPerMonetizingUser', v)}
                step={1}
                min={0}
                hint="Used for AOV. 2026 YTD actual was 6."
              />
              <details className="fp-details fp-details-nested">
                <summary>
                  Why these defaults
                  <span>Open</span>
                </summary>
                <ul className="fp-notes">
                  {CONSERVATIVE_YAU_RATIONALE.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
            </fieldset>

            <fieldset>
              <legend>Funding &amp; hiring</legend>
              <NumberField
                label="Seed raise"
                tipKey="seedRaise"
                prefix="$"
                value={inputs.seedRaise}
                onChange={(v) => setField('seedRaise', v)}
                step={50000}
                min={0}
                hint="Walks CEO → engineer → CoS → engineer → PM."
              />
              <NumberField
                label="Funding year"
                tipKey="fundingYear"
                value={inputs.fundingYear}
                onChange={(v) => setField('fundingYear', Math.round(v))}
                step={1}
                min={2026}
              />
              <NumberField
                label="Payroll taxes & benefits"
                tipKey="payrollBenefitsPct"
                suffix="%"
                value={inputs.payrollBenefitsPct}
                onChange={(v) => setField('payrollBenefitsPct', v)}
                step={1}
                min={0}
              />
              <NumberField
                label="Federal tax"
                tipKey="federalTaxPct"
                suffix="%"
                value={inputs.federalTaxPct}
                onChange={(v) => setField('federalTaxPct', v)}
                step={1}
                min={0}
              />
            </fieldset>

            <fieldset>
              <legend>Annual opex (forecast years)</legend>
              <NumberField
                label="Paid marketing"
                tipKey="paidMarketingAnnual"
                prefix="$"
                value={inputs.paidMarketingAnnual}
                onChange={(v) => setField('paidMarketingAnnual', v)}
                step={1000}
                min={0}
              />
              <NumberField
                label="Creator partnerships"
                tipKey="creatorPartnershipsAnnual"
                prefix="$"
                value={inputs.creatorPartnershipsAnnual}
                onChange={(v) => setField('creatorPartnershipsAnnual', v)}
                step={1000}
                min={0}
              />
              <NumberField
                label="Legal"
                tipKey="legalAnnual"
                prefix="$"
                value={inputs.legalAnnual}
                onChange={(v) => setField('legalAnnual', v)}
                step={500}
                min={0}
              />
              <NumberField
                label="Payment processing"
                tipKey="paymentProcessingAnnual"
                prefix="$"
                value={inputs.paymentProcessingAnnual}
                onChange={(v) => setField('paymentProcessingAnnual', v)}
                step={100}
                min={0}
              />
            </fieldset>
          </div>

          <div className="fp-viz">
            <h3>Platform revenue</h3>
            <p className="fp-chart-caption">
              Top-down from 2026 base through the horizon end. Bottom-up uses take actuals through
              2026 YTD, then Growth SaaS + 5% take from the YAU drivers.
            </p>
            <div className="fp-chart">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={chartData} margin={{ top: 8, right: 12, left: 8, bottom: 0 }}>
                  <CartesianGrid stroke="#e6ece8" vertical={false} />
                  <XAxis dataKey="year" tick={{ fill: '#445', fontSize: 12 }} />
                  <YAxis
                    tickFormatter={(v) => formatUsd(v)}
                    tick={{ fill: '#445', fontSize: 12 }}
                    width={72}
                  />
                  <Tooltip
                    formatter={(value, name) => [formatUsd(value), name]}
                    contentStyle={{ border: '1px solid #c5d4cb', borderRadius: 0 }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="topDown"
                    name="Top-down"
                    stroke="#2d6a4f"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="bottomUp"
                    name="Bottom-up / YAU"
                    stroke="#b45309"
                    strokeWidth={2}
                    dot={false}
                    connectNulls
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="fp-chart-caption">
              2026 relevant market {formatUsd(model.topDown.relevantMm0 * 1e6)}
              <TermTip k="relevantMarket" /> · implied 2026 share{' '}
              {formatPct(model.topDown.share0, 6)}
              <TermTip k="impliedShare" /> · {model.topDown.endYear} revenue{' '}
              {formatUsd(model.kpis.endRevenue)}.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section" id="yau-bridge">
        <h2>Bottom-up operating build</h2>
        <p className="content-block">
          Actuals through 2026 YTD (YAU was not recorded). 2027F onward uses the drivers at left,
          including inferred starting YAU, a one-time resurrection of the 6,554 starting base
          (already registered; hubs they publish mint new accounts), pay-intent and saver spillover
          per published hub, and hub-to-creator k. Platform revenue is Growth SaaS + 5% take on GMV.
          Intern collabs get complimentary Growth in the collab year only. Monetization applies to
          publishing creators, not saver YAU.
        </p>
        <div className="fp-table-wrap">
          <table className="fp-table">
            <thead>
              <tr>
                <th>YAU build</th>
                {model.isRows.map((row) => (
                  <th key={row.col.id}>{row.col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Term k="newUsersOut">New registered users</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp ? formatCount(row.bottomUp.newUsers) : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="kExtrasOut">New from k hubs</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.kExtraNewUsers ?? 0)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="catalogNewOut">New from catalog discovery</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.catalogNewUsers ?? 0)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="signupViralOut">New from signup virality</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.viralNewUsers ?? 0)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="kNewOut">New publishers from k</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.kNewPublishers, 1)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="publishersOut">Publishing creators</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.publishers
                      ? formatCount(row.bottomUp.publishers, 1)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="internPublishersOut">Intern publishers (comped this year)</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.internPublishers ?? 0, 1)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="selfServePublishersOut">Paid-eligible publishers</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.selfServePublishers ?? 0, 1)
                      : formatCount(row.bottomUp?.selfServePublishers ?? 0, 1)}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="endingUsersOut">Ending registered users</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp ? formatCount(row.bottomUp.endingUsers) : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="yauOut">Yearly active users</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.yau)
                      : row.bottomUp?.yau
                        ? formatCount(row.bottomUp.yau)
                        : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="resurrectedOut">Resurrected users</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast && row.bottomUp.resurrected
                      ? formatCount(row.bottomUp.resurrected)
                      : row.bottomUp?.isForecast
                        ? formatCount(0)
                        : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="resurrectionPublishersOut">Resurrected who publish</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.resurrectionPublishers ?? 0, 1)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="resurrectionSaversOut">Resurrected who save</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.resurrectionSavers ?? 0, 1)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="resurrectionNewUsersOut">New from resurrection hubs</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.resurrectionNewUsers ?? 0)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="buyersOut">New pay-intent accounts</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.newBuyers, 1)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="completedBuyersOut">Completed checkouts</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.newCompletedBuyers, 1)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="saversThisOut">Savers of this hub</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.newSaversThis, 1)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="saversOtherOut">Savers of another hub</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.newSaversOther, 1)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="monetizingOut">Monetizing creators</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp ? formatCount(row.bottomUp.monetizingUsers, 1) : '—'}
                  </td>
                ))}
              </tr>
              <tr className="is-total">
                <th scope="row">
                  <Term k="gmvOut">Creator GMV</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>{moneyCell(row.bottomUp?.gmv)}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="takeOut">Marketplace take (5%)</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {moneyCell(row.bottomUp?.takeRevenue ?? row.bottomUp?.platformRevenue)}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="growthSubsOut">Paid Growth subscribers</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? formatCount(row.bottomUp.growthSubs ?? 0, 1)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="growthRevOut">Growth SaaS revenue</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? moneyCell(row.bottomUp.growthRevenue ?? 0)
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <Term k="productMaturityOut">Product maturity</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.isForecast
                      ? `${formatCount(row.bottomUp.productMaturityPct ?? 0)}%`
                      : '—'}
                  </td>
                ))}
              </tr>
              <tr className="is-total">
                <th scope="row">
                  <Term k="platformRevOut">Platform revenue (total)</Term>
                </th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>{moneyCell(row.bottomUp?.platformRevenue)}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section" id="income-statement">
        <h2>Summary income statement</h2>
        <div className="fp-case-toggle" role="tablist" aria-label="Income statement case">
          {[
            { id: 'both', label: 'Both cases' },
            { id: 'topDown', label: 'Top-down' },
            { id: 'bottomUp', label: 'Bottom-up / YAU' },
          ].map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="tab"
              aria-selected={caseView === opt.id}
              className={`fp-chip compact${caseView === opt.id ? ' is-active' : ''}`}
              onClick={() => setCaseView(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {(caseView === 'both' || caseView === 'topDown') && (
          <PnlTable rows={model.isRows} caseKey="topDown" title="Top-down case" />
        )}
        {(caseView === 'both' || caseView === 'bottomUp') && (
          <PnlTable rows={model.isRows} caseKey="bottomUp" title="Bottom-up / YAU case" />
        )}
        <p className="fp-chart-caption">
          Top-down P&amp;L starts in 2027F. 2026 YTD is five months. Taxes apply only to positive
          pre-tax income.
        </p>
      </section>

      <section className="page-section" id="hiring">
        <h2>
          <Term k="hiringWaterfall">Hiring waterfall</Term>
        </h2>
        <div className="fp-table-wrap">
          <table className="fp-table fp-table-narrow">
            <thead>
              <tr>
                <th>#</th>
                <th>Role</th>
                <th>
                  <Term k="minSeed">Min seed</Term>
                </th>
                <th>Funded?</th>
                <th>
                  <Term k="hireYear">Hire year</Term>
                </th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {model.hiring.plan.map((row) => (
                <tr key={row.priority} className={row.funded ? undefined : 'is-muted'}>
                  <td>{row.priority}</td>
                  <td>{row.role}</td>
                  <td>{formatUsd(row.minRaise)}</td>
                  <td>{row.funded ? 'Yes' : 'No'}</td>
                  <td>{row.hireYear ?? '—'}</td>
                  <td>{formatUsd(row.salary)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section" id="sensitivity">
        <h2>Sensitivity</h2>
        <p className="content-block">
          Tornado: each driver ±20% (horizon ±2 years), holding the rest at the current case. Output
          is 2031F top-down platform revenue. Grid: market CAGR × target share.
        </p>
        <h3>
          <Term k="tornado">Tornado — 2031F top-down revenue</Term>
        </h3>
        <ul className="fp-tornado">
          {tornado.map((d) => (
            <li key={d.key}>
              <span className="fp-tornado-label">
                <Term k={d.key}>{d.label}</Term>
              </span>
              <div className="fp-tornado-track">
                <span
                  className="fp-tornado-bar is-low"
                  style={{ width: `${(Math.abs(d.lowDelta) / maxTornado) * 50}%` }}
                  title={`Low ${formatUsd(d.low)}`}
                />
                <span
                  className="fp-tornado-bar is-high"
                  style={{ width: `${(Math.abs(d.highDelta) / maxTornado) * 50}%` }}
                  title={`High ${formatUsd(d.high)}`}
                />
              </div>
              <span className="fp-tornado-vals">
                {formatUsd(d.low)} → {formatUsd(d.high)}
              </span>
            </li>
          ))}
        </ul>

        <h3>
          <Term k="twoWayGrid">Two-way grid — 2031F top-down revenue</Term>
        </h3>
        <div className="fp-table-wrap">
          <table className="fp-table fp-heat">
            <thead>
              <tr>
                <th>CAGR \ share</th>
                {SENSITIVITY_SHARE_PCTS.map((s) => (
                  <th key={s}>{s}%</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {grid.map((row) => (
                <tr key={row.cagr}>
                  <th scope="row">{row.cagr}%</th>
                  {row.cells.map((cell) => (
                    <td
                      key={cell.share}
                      style={{ background: `rgba(45, 106, 79, ${heat(cell.revenue ?? 0)})` }}
                    >
                      {formatUsd(cell.revenue)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section" id="outreach">
        <h2>Outreach funnel (unpaid collabs)</h2>
        <p className="content-block">
          The actual plan: find learn/tips creators, email “Collab?”, meet, unpaid yes (paid only
          later from a Creator Fund). Locked capacity is 30 people × 20 hours/week × 48 stable
          weeks. 10% email-found is conservative. 10 meetings per 100 emails; 50% of meetings yes
          unpaid. 80% of yeses finish and publish the hub — setup (5h) attaches only to those. Each
          published hub: 15 pay-intent (half finish checkout), 2 savers of this hub, 2 savers of
          another hub, 0.05 aspiring sellers. 80% meeting-yes only if seed is greater than zero.
        </p>
        <div className="fp-funnel">
          <NumberField
            label="People"
            tipKey="funnelPeople"
            value={funnel.people}
            onChange={(v) => setFunnelField('people', v)}
            step={1}
            min={0}
          />
          <NumberField
            label="Hours / week / person"
            tipKey="funnelHours"
            value={funnel.hoursPerWeek}
            onChange={(v) => setFunnelField('hoursPerWeek', v)}
            step={1}
            min={0}
          />
          <NumberField
            label="Working weeks"
            tipKey="funnelWeeks"
            value={funnel.workingWeeks}
            onChange={(v) => setFunnelField('workingWeeks', v)}
            step={1}
            min={0}
          />
          <NumberField
            label="Profiles / hour"
            tipKey="funnelProfiles"
            value={funnel.profilesPerHour}
            onChange={(v) => setFunnelField('profilesPerHour', v)}
            step={1}
            min={0}
          />
          <NumberField
            label="Email found"
            tipKey="funnelEmailFound"
            suffix="%"
            value={funnel.emailFoundPct}
            onChange={(v) => setFunnelField('emailFoundPct', v)}
            step={1}
            min={0}
          />
          <NumberField
            label="Setup hours / published hub"
            tipKey="funnelSetup"
            value={funnel.setupHoursPerCollab}
            onChange={(v) => setFunnelField('setupHoursPerCollab', v)}
            step={1}
            min={0}
          />
          <NumberField
            label="Yeses who publish"
            tipKey="funnelPublish"
            suffix="%"
            value={funnel.publishCompletionPct}
            onChange={(v) => setFunnelField('publishCompletionPct', v)}
            step={1}
            min={0}
          />
        </div>
        <ol className="fp-funnel-out">
          <li>
            <span>Hours / week</span>
            <strong>{formatCount(funnelOut.weeklyHours)}</strong>
            <span className="fp-funnel-note">
              {' '}
              ({formatCount(funnelOut.outreachHours, 0)} outreach /{' '}
              {formatCount(funnelOut.setupHoursUsed, 0)} setup)
            </span>
          </li>
          <li>
            <span>
              <Term k="funnelProfiles">Profiles</Term>
            </span>
            <strong>{formatCount(funnelOut.profiles)}</strong>
          </li>
          <li>
            <span>
              <Term k="funnelEmails">Emails found</Term>
            </span>
            <strong>{formatCount(funnelOut.emails, 1)}</strong>
          </li>
          <li>
            <span>
              <Term k="funnelResponses">Responses</Term>
            </span>
            <strong>{formatCount(funnelOut.responses, 1)}</strong>
          </li>
          <li>
            <span>
              <Term k="funnelMeetings">Meetings</Term>
            </span>
            <strong>{formatCount(funnelOut.meetings, 1)}</strong>
          </li>
          <li>
            <span>
              <Term k="funnelCollabs">Yes to collaborate ({funnelOut.collabPct}%)</Term>
            </span>
            <strong>{formatCount(funnelOut.collabs, 1)}</strong>
            <span className="fp-funnel-note">
              {funnelOut.setupCapped ? ' / week, setup-capped' : ' / week'}
            </span>
          </li>
          <li>
            <span>
              <Term k="funnelPublish">Published hubs / week</Term>
            </span>
            <strong>{formatCount(funnelOut.weeklyPublished, 1)}</strong>
          </li>
          <li>
            <span>Annual published hubs ({funnelOut.workingWeeks} weeks)</span>
            <strong>{formatCount(funnelOut.annualPublished, 1)}</strong>
          </li>
          <li>
            <span>
              <Term k="extraBuyersPerHub">Pay-intent / hub</Term>
            </span>
            <strong>{formatCount(funnelOut.extraBuyersPerHub, 1)}</strong>
          </li>
          <li>
            <span>
              <Term k="checkoutCompletionPct">Finish checkout / hub</Term>
            </span>
            <strong>{formatCount(funnelOut.completedBuyersPerHub, 1)}</strong>
          </li>
          <li>
            <span>
              <Term k="extraSaversThisHub">Save this hub</Term>
            </span>
            <strong>{formatCount(funnelOut.extraSaversThisHub, 1)}</strong>
          </li>
          <li>
            <span>
              <Term k="extraSaversOtherHub">Save another hub</Term>
            </span>
            <strong>{formatCount(funnelOut.extraSaversOtherHub, 1)}</strong>
          </li>
          <li>
            <span>Implied 2027 new registrations</span>
            <strong>{formatCount(Math.round(funnelOut.newRegistrations ?? 0))}</strong>
          </li>
        </ol>
      </section>

      <section className="page-section" id="comparables">
        <h2>Comparable companies</h2>
        <p className="content-block">
          From the workbook. Gumroad and Shopify have the strongest public cost data. Stan, Kajabi,
          Flodesk, and Podia are operating-model references.
        </p>
        <div className="fp-table-wrap">
          <table className="fp-table fp-table-narrow">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Revenue / ARR</th>
                <th>Cost / profitability</th>
                <th>Data quality</th>
              </tr>
            </thead>
            <tbody>
              {COMPARABLES.map((c) => (
                <tr key={c.name}>
                  <td>
                    <a href={c.source} target="_blank" rel="noopener noreferrer">
                      {c.name}
                    </a>
                    <div className="fp-muted">{c.scale}</div>
                  </td>
                  <td>{c.revenue}</td>
                  <td>{c.cost}</td>
                  <td>{c.quality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default FinancialProjections
