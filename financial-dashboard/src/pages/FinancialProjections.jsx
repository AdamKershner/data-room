/**
 * Interactive Kahana financial projections from Kahana_Proforma_v2.xlsx.
 */

import React, { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
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
  DEFAULT_PRESET_ID,
  FINANCIAL_PROJECTIONS_PAGE,
  GLOSSARY,
  IS_YEARS,
  METHOD_NOTES,
  PRESETS,
  SEED_RAISE_PLAN,
  SENSITIVITY_SHARE_PCTS,
  TERM_HELP,
  WORKBOOK_SOURCE,
} from '../data/financialProjectionsData'
import {
  cloneInputs,
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
  const [pos, setPos] = useState({ top: 0, left: 0, width: 280 })

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

function YearTh({ col }) {
  const stub = col.kind === 'stub'
  return (
    <th className={stub ? 'fp-col-stub' : undefined} title={col.title}>
      {col.label}
    </th>
  )
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
              <YearTh key={row.col.id} col={row.col} />
            ))}
          </tr>
        </thead>
        <tbody>
          {caseKey === 'bottomUp'
            ? line('Subscription revenue', (p) => p.subscription)
            : null}
          {caseKey === 'bottomUp' ? line('Transaction-fee revenue', (p) => p.take) : null}
          {line('Platform revenue', (p) => p.revenue, { strong: true, tipKey: 'pnlRevenue' })}
          {line('Transaction / platform costs', (p) => p.cogs, { tipKey: 'pnlCogs' })}
          {line('Gross profit', (p) => p.gross, { strong: true })}
          {line('Gross margin', (p) => p.grossMargin, { pct: true })}
          {line('Personnel', (p) => p.personnel, { tipKey: 'pnlPersonnel' })}
          {line('Technology & infrastructure', (p) => p.tech)}
          {line('Sales & marketing', (p) => p.sales, { tipKey: 'pnlSales' })}
          {line('G&A', (p) => p.ga)}
          {line('Total operating expenses', (p) => p.opex, { strong: true })}
          {line('Operating income', (p) => p.opInc, { strong: true })}
          {line('Operating margin', (p) => p.opMargin, { pct: true })}
          {line('Taxes', (p) => p.tax)}
          {line('Net income', (p) => p.net, { strong: true })}
          {line('Net margin', (p) => p.netMargin, { pct: true })}
        </tbody>
      </table>
    </div>
  )
}

function BuildRow({ label, rows, cell, className, digits = 1 }) {
  return (
    <tr className={className}>
      <th scope="row">{label}</th>
      {rows.map((row) => (
        <td key={row.col.id}>{cell(row) == null ? '—' : formatCount(cell(row), digits)}</td>
      ))}
    </tr>
  )
}

function FinancialProjections() {
  const [inputs, setInputs] = useState(() => cloneInputs(PRESETS[0].inputs))
  const [presetId, setPresetId] = useState(DEFAULT_PRESET_ID)
  const [caseView, setCaseView] = useState('both')

  const setField = (key, value) => {
    setPresetId('custom')
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  const setHours = (hours) => {
    const per = Number(inputs.hoursPerInternWeek) || 20
    setPresetId('custom')
    setInputs((prev) => ({
      ...prev,
      internOutreachHoursPerWeek: hours,
      internFte2026: per ? hours / per : prev.internFte2026,
    }))
  }

  const setInternFte = (fte) => {
    const per = Number(inputs.hoursPerInternWeek) || 20
    setPresetId('custom')
    setInputs((prev) => ({
      ...prev,
      internFte2026: fte,
      internOutreachHoursPerWeek: fte * per,
    }))
  }

  const applyPreset = (preset) => {
    setPresetId(preset.id)
    setInputs(cloneInputs(preset.inputs))
  }

  const model = useMemo(() => computeModel(inputs), [inputs])
  const tornado = useMemo(() => computeTornado(inputs), [inputs])
  const grid = useMemo(() => computeShareCagrGrid(inputs), [inputs])
  const y26f = model.isRows.find((r) => r.col.id === '2026F')
  const y31 = model.isRows.find((r) => r.col.id === '2031F')

  const chartData = model.isRows
    .filter((r) => r.col.year >= 2026)
    .map((row) => ({
      year: row.col.label,
      topDown: row.topDownPnl?.revenue ?? null,
      bottomUp: row.bottomUpPnl?.revenue ?? null,
      premium: row.bottomUp?.endingPremium ?? null,
      normal: row.bottomUp?.endingNormal ?? null,
    }))

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

  const seedSoftware = nSafe(inputs.seedRaise) * (nSafe(inputs.seedSoftwarePct) / 100)
  const seedHiring = nSafe(inputs.seedRaise) * (nSafe(inputs.seedHiringPct) / 100)
  const seedMarketing = nSafe(inputs.seedRaise) * (nSafe(inputs.seedMarketingPct) / 100)

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
          <a href="#drivers">Collab engine</a>
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
            <strong>Bottom-up</strong> is the intern collab funnel you run: hours on outreach, emails
            collected, emails sent, free yeses, paid-blocked nos, and public hubs. After a hub is
            live, a network multiplier brings more creators over the next year (default: one hub, three
            more people). Cash is subscriptions plus a {formatPct(inputs.takeRatePct / 100)} take on
            hub GMV. <strong>Top-down</strong> is still market × share, ramping to{' '}
            {inputs.targetSharePct}% by {2026 + Number(inputs.horizonYears)}. 2026 YTD is eight months
            of actuals; 2026F is the Sep–Dec tail.
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
        <section className="fp-kpis fp-kpis-yau" aria-label="Workbook headline numbers">
          <article>
            <p className="fp-kpi-label">2026F platform revenue</p>
            <p className="fp-kpi-value">{formatUsd(y26f?.bottomUpPnl?.revenue)}</p>
            <p className="fp-kpi-sub">Sep–Dec tail · {formatCount(y26f?.bottomUp?.endingTotal, 0)} ending creators</p>
          </article>
          <article>
            <p className="fp-kpi-label">2027F platform revenue</p>
            <p className="fp-kpi-value">
              {formatUsd(model.isRows.find((r) => r.col.id === '2027F')?.bottomUpPnl?.revenue)}
            </p>
            <p className="fp-kpi-sub">First full year of hub-driven network</p>
          </article>
          <article>
            <p className="fp-kpi-label">2031F platform revenue</p>
            <p className="fp-kpi-value">{formatUsd(y31?.bottomUpPnl?.revenue)}</p>
            <p className="fp-kpi-sub">
              {formatCount(y31?.bottomUp?.endingTotal, 0)} creators · net {formatUsd(y31?.bottomUpPnl?.net)}
            </p>
          </article>
          <article>
            <p className="fp-kpi-label">2031F top-down revenue</p>
            <p className="fp-kpi-value">{formatUsd(y31?.topDownPnl?.revenue)}</p>
            <p className="fp-kpi-sub">
              Share path to {inputs.targetSharePct}% in {2026 + Number(inputs.horizonYears)}
            </p>
          </article>
        </section>
      </div>

      <section className="page-section" id="charts">
        <h2>Revenue and creator stock</h2>
        <div className="fp-chart" style={{ height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 8, right: 12, left: 8, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d5ddd7" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis
                yAxisId="rev"
                tickFormatter={(v) => formatUsd(v)}
                tick={{ fontSize: 11 }}
                width={72}
              />
              <Tooltip
                formatter={(value, name) => [
                  name.includes('creator') ? formatCount(value, 1) : formatUsd(value),
                  name,
                ]}
              />
              <Legend />
              <Bar yAxisId="rev" dataKey="bottomUp" name="Bottom-up revenue" fill="#2d6a4f" />
              <Line
                yAxisId="rev"
                type="monotone"
                dataKey="topDown"
                name="Top-down revenue"
                stroke="#1d3557"
                strokeWidth={2}
                dot={false}
                connectNulls
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <p className="fp-chart-caption">
          Top-down is blank in 2026 because Revenue_T has no YTD/tail split. Creator counts are in
          the roll-forward below.
        </p>
      </section>

      <section className="page-section" id="drivers">
        <h2>Collab engine</h2>
        <p className="content-block">
          2026F weekly run-rate. Later years scale with intern hiring. A collab <em>no</em> is someone
          who would have said yes if we paid. Network new creators land in the following year from
          last year’s collab hubs.
        </p>
        <ol className="fp-key-board">
          <li>
            <NumberField
              label="Intern outreach hours / week"
              hint="All interns, 2026F. 20 hours = 1 FTE."
              tipKey="internOutreachHoursPerWeek"
              value={inputs.internOutreachHoursPerWeek}
              onChange={setHours}
              step={5}
              min={0}
            />
          </li>
          <li>
            <NumberField
              label="Creators reached / week"
              hint="Emails collected"
              tipKey="emailsCollectedPerWeek"
              value={inputs.emailsCollectedPerWeek}
              onChange={(v) => setField('emailsCollectedPerWeek', v)}
              step={1}
              min={0}
            />
          </li>
          <li>
            <NumberField
              label="Emails sent / week"
              hint="Collab asks actually sent"
              tipKey="emailsSentPerWeek"
              value={inputs.emailsSentPerWeek}
              onChange={(v) => setField('emailsSentPerWeek', v)}
              step={1}
              min={0}
            />
          </li>
          <li>
            <NumberField
              label="Collab yes / week"
              hint="Free collabs"
              tipKey="collabYesPerWeek"
              value={inputs.collabYesPerWeek}
              onChange={(v) => setField('collabYesPerWeek', v)}
              step={0.5}
              min={0}
            />
          </li>
          <li>
            <NumberField
              label="Collab no / week"
              hint="Would be yes with paid-collab budget"
              tipKey="collabNoPerWeek"
              value={inputs.collabNoPerWeek}
              onChange={(v) => setField('collabNoPerWeek', v)}
              step={0.5}
              min={0}
            />
          </li>
          <li>
            <NumberField
              label="Public hubs from collabs / week"
              tipKey="publicHubsPerWeek"
              value={inputs.publicHubsPerWeek}
              onChange={(v) => setField('publicHubsPerWeek', v)}
              step={0.5}
              min={0}
            />
          </li>
          <li>
            <NumberField
              label="Network creators per collab hub"
              hint="1 hub → this many join over the next year"
              tipKey="networkFromCollab"
              value={inputs.networkFromCollab}
              onChange={(v) => setField('networkFromCollab', v)}
              step={0.5}
              min={0}
            />
          </li>
          <li>
            <NumberField
              label="Months to first hub"
              hint="0 = they publish as they join"
              tipKey="monthsToFirstHub"
              value={inputs.monthsToFirstHub}
              onChange={(v) => setField('monthsToFirstHub', v)}
              step={1}
              min={0}
            />
          </li>
          <li>
            <NumberField
              label="Avg hub sales / creator / year"
              hint="GMV before take rate"
              tipKey="avgCreatorGmvYear"
              prefix="$"
              value={inputs.avgCreatorGmvYear}
              onChange={(v) => setField('avgCreatorGmvYear', v)}
              step={10}
              min={0}
            />
          </li>
          <li>
            <NumberField
              label="Paid-collab unlock"
              hint="% of nos that convert if we pay"
              tipKey="paidCollabUnlockPct"
              suffix="%"
              value={inputs.paidCollabUnlockPct}
              onChange={(v) => setField('paidCollabUnlockPct', v)}
              step={5}
              min={0}
            />
          </li>
        </ol>
        <ul className="fp-funnel-out fp-key-readout">
          <li>
            <span>Yes rate on emails sent</span>
            <strong>
              {inputs.emailsSentPerWeek > 0
                ? formatPct(inputs.collabYesPerWeek / inputs.emailsSentPerWeek)
                : '—'}
            </strong>
          </li>
          <li>
            <span>Emails sent per outreach hour</span>
            <strong>
              {inputs.internOutreachHoursPerWeek > 0
                ? formatCount(inputs.emailsSentPerWeek / inputs.internOutreachHoursPerWeek, 2)
                : '—'}
            </strong>
          </li>
          <li>
            <span>2026F intern FTE from hours</span>
            <strong>{formatCount((inputs.internOutreachHoursPerWeek || 0) / (inputs.hoursPerInternWeek || 20), 1)}</strong>
          </li>
          <li>
            <span>Paid-collab upside / week</span>
            <strong>
              {formatCount(
                inputs.collabNoPerWeek * (1 - (inputs.paidCollabUnlockPct || 0) / 100),
                1,
              )}
            </strong>
          </li>
          <li>
            <span>2026F collab yeses (4 mo)</span>
            <strong>{formatCount(y26f?.bottomUp?.collabYes, 0)}</strong>
          </li>
          <li>
            <span>2027F network new</span>
            <strong>
              {formatCount(
                model.isRows.find((r) => r.col.id === '2027F')?.bottomUp?.networkNew,
                0,
              )}
            </strong>
          </li>
        </ul>
        <details className="fp-details fp-advanced">
          <summary>
            Advanced workbook inputs
            <span>Headcount, churn, take rate, market, seed</span>
          </summary>
          <p className="fp-advanced-note">
            Outreach volume and GMV come from the collab board above. These cells still set intern
            pay, hiring mix, churn, subscriptions, take rate, and the top-down case.
          </p>
          <div className="fp-driver-grid">
          <fieldset>
            <legend>Interns &amp; hiring</legend>
            <div className="fp-funnel">
              <NumberField
                label="2026F intern / BDR FTE"
                tipKey="internFte2026"
                value={inputs.internFte2026}
                onChange={setInternFte}
                step={1}
                min={0}
              />
              <NumberField
                label="Hours per intern FTE / week"
                value={inputs.hoursPerInternWeek}
                onChange={(v) => {
                  setPresetId('custom')
                  setInputs((prev) => ({
                    ...prev,
                    hoursPerInternWeek: v,
                    internFte2026: v ? prev.internOutreachHoursPerWeek / v : prev.internFte2026,
                  }))
                }}
                step={1}
                min={1}
              />
              <NumberField
                label="Intern hiring rate"
                tipKey="internHireRatePct"
                suffix="%"
                value={inputs.internHireRatePct}
                onChange={(v) => setField('internHireRatePct', v)}
                step={1}
                min={0}
              />
              <NumberField
                label="Intern salary"
                prefix="$"
                value={inputs.internSalary}
                onChange={(v) => setField('internSalary', v)}
                step={500}
                min={0}
              />
              <NumberField
                label="2026F outreach infra"
                prefix="$"
                value={inputs.smOutreachInfra2026}
                onChange={(v) => setField('smOutreachInfra2026', v)}
                step={500}
                min={0}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Creators &amp; churn</legend>
            <div className="fp-funnel">
              <NumberField
                label="Premium share of new"
                tipKey="premiumShareOfNewPct"
                suffix="%"
                value={inputs.premiumShareOfNewPct}
                onChange={(v) => setField('premiumShareOfNewPct', v)}
                step={1}
                min={0}
              />
              <NumberField
                label="Premium churn"
                suffix="%"
                value={inputs.premiumChurnPct}
                onChange={(v) => setField('premiumChurnPct', v)}
                step={1}
                min={0}
              />
              <NumberField
                label="Normal churn"
                suffix="%"
                value={inputs.normalChurnPct}
                onChange={(v) => setField('normalChurnPct', v)}
                step={1}
                min={0}
              />
              <NumberField
                label="2026F starting normal creators"
                value={inputs.beginningNormal2026F}
                onChange={(v) => setField('beginningNormal2026F', v)}
                step={1}
                min={0}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Monetization</legend>
            <div className="fp-funnel">
              <NumberField
                label="Premium fee / month"
                prefix="$"
                value={inputs.premiumFeeMonthly}
                onChange={(v) => setField('premiumFeeMonthly', v)}
                step={1}
                min={0}
              />
              <NumberField
                label="Take rate"
                tipKey="takeRatePct"
                suffix="%"
                value={inputs.takeRatePct}
                onChange={(v) => setField('takeRatePct', v)}
                step={0.5}
                min={0}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Top-down market</legend>
            <p className="fp-fieldset-note">
              Selected CAGR {CAGR_RATIONALE.selectedPct}% (research proxy {CAGR_RATIONALE.researchPct}
              %).{' '}
              <a href={CAGR_RATIONALE.source} target="_blank" rel="noopener noreferrer">
                Creatorplaces report
              </a>
            </p>
            <div className="fp-funnel">
              <NumberField
                label="2026 global market"
                prefix="$"
                suffix="bn"
                value={inputs.globalMarketBn2026}
                onChange={(v) => setField('globalMarketBn2026', v)}
                step={10}
                min={0}
              />
              <NumberField
                label="Relevant segment"
                suffix="%"
                value={inputs.relevantSegmentPct}
                onChange={(v) => setField('relevantSegmentPct', v)}
                step={0.5}
                min={0}
              />
              <NumberField
                label="Market CAGR"
                tipKey="marketCagrPct"
                suffix="%"
                value={inputs.marketCagrPct}
                onChange={(v) => setField('marketCagrPct', v)}
                step={0.1}
                min={0}
              />
              <NumberField
                label="Target share"
                tipKey="targetSharePct"
                suffix="%"
                value={inputs.targetSharePct}
                onChange={(v) => setField('targetSharePct', v)}
                step={0.1}
                min={0}
              />
              <NumberField
                label="Horizon (years from 2026)"
                value={inputs.horizonYears}
                onChange={(v) => setField('horizonYears', v)}
                step={1}
                min={1}
              />
              <NumberField
                label="Federal tax"
                suffix="%"
                value={inputs.federalTaxPct}
                onChange={(v) => setField('federalTaxPct', v)}
                step={1}
                min={0}
              />
            </div>
          </fieldset>
          </div>
        </details>
      </section>

      <section className="page-section" id="creators">
        <h2>Creator roll-forward</h2>
        <div className="fp-table-wrap">
          <table className="fp-table">
            <thead>
              <tr>
                <th>Bottom-up creators</th>
                {model.isRows.map((row) => (
                  <YearTh key={row.col.id} col={row.col} />
                ))}
              </tr>
            </thead>
            <tbody>
              <BuildRow
                label="Intern / BDR FTE"
                rows={model.isRows}
                cell={(r) => r.exp?.internFte || null}
                digits={2}
              />
              <BuildRow
                label="Emails collected"
                rows={model.isRows}
                cell={(r) => r.bottomUp?.emailsCollected}
                digits={0}
              />
              <BuildRow
                label="Emails sent"
                rows={model.isRows}
                cell={(r) => r.bottomUp?.emailsSent}
                digits={0}
              />
              <BuildRow
                label="Collab yes"
                rows={model.isRows}
                cell={(r) => r.bottomUp?.collabYes}
              />
              <BuildRow
                label="Collab no (paid-blocked)"
                rows={model.isRows}
                cell={(r) => r.bottomUp?.collabNo}
              />
              <BuildRow
                label="Public hubs from collabs"
                rows={model.isRows}
                cell={(r) => r.bottomUp?.collabHubs}
              />
              <BuildRow
                label="Network new creators"
                rows={model.isRows}
                cell={(r) => r.bottomUp?.networkNew}
              />
              <BuildRow
                label="Ending premium"
                rows={model.isRows}
                cell={(r) => r.bottomUp?.endingPremium}
              />
              <BuildRow
                label="Ending normal"
                rows={model.isRows}
                cell={(r) => r.bottomUp?.endingNormal}
              />
              <tr className="is-total">
                <th scope="row">Ending total creators</th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.endingTotal == null
                      ? '—'
                      : formatCount(row.bottomUp.endingTotal, 1)}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Blended CAC</th>
                {model.isRows.map((row) => (
                  <td key={row.col.id}>
                    {row.bottomUp?.blendedCac == null ? '—' : formatUsd(row.bottomUp.blendedCac)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="fp-chart-caption">
          2023A–2025A only carry ending creator counts where the workbook had them (2025 ending
          normal = 48). Network new creators start in 2027F = prior year’s collab hubs × the
          network multiplier.
        </p>
      </section>

      <section className="page-section" id="income-statement">
        <h2>Summary income statement</h2>
        <div className="fp-case-toggle" role="tablist" aria-label="Income statement case">
          {[
            { id: 'both', label: 'Both cases' },
            { id: 'topDown', label: 'Top-down' },
            { id: 'bottomUp', label: 'Bottom-up' },
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
        {(caseView === 'both' || caseView === 'bottomUp') && (
          <PnlTable rows={model.isRows} caseKey="bottomUp" title="Bottom-up / creator engine" />
        )}
        {(caseView === 'both' || caseView === 'topDown') && (
          <PnlTable rows={model.isRows} caseKey="topDown" title="Top-down case" />
        )}
        <p className="fp-chart-caption">
          Personnel, tech, S&amp;M, and G&amp;A come from Expenses_Y. Taxes apply only to positive
          pre-tax income. No NOL carryforward.
        </p>
      </section>

      <section className="page-section" id="hiring">
        <h2>P&amp;L headcount (Expenses_Y)</h2>
        <p className="content-block">
          Direct inputs, not the seed waterfall. Interns start 2026F; CEO 2027; two engineers 2028;
          three product 2029; four chief-of-staff / ops 2030. Interns grow {inputs.internHireRatePct}
          % per year. Cash is FTE × salary × months / 12.
        </p>
        <div className="fp-table-wrap">
          <table className="fp-table fp-table-narrow">
            <thead>
              <tr>
                <th>Role</th>
                {model.isRows
                  .filter((r) => r.col.year >= 2026)
                  .map((row) => (
                    <YearTh key={row.col.id} col={row.col} />
                  ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Interns / BDR', 'internFte'],
                ['CEO', 'ceoFte'],
                ['Engineering', 'engFte'],
                ['Product', 'productFte'],
                ['Chief of Staff / Ops', 'cosFte'],
              ].map(([label, key]) => (
                <tr key={key}>
                  <th scope="row">{label}</th>
                  {model.isRows
                    .filter((r) => r.col.year >= 2026)
                    .map((row) => (
                      <td key={row.col.id}>{formatCount(row.exp?.[key] ?? 0, 2)}</td>
                    ))}
                </tr>
              ))}
              <tr className="is-total">
                <th scope="row">Personnel cash</th>
                {model.isRows
                  .filter((r) => r.col.year >= 2026)
                  .map((row) => (
                    <td key={row.col.id}>{formatUsd(row.exp?.personnel)}</td>
                  ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section" id="seed">
        <h2>Seed raise plan (decoupled)</h2>
        <p className="content-block">{SEED_RAISE_PLAN.note}</p>
        <div className="fp-funnel">
          <NumberField
            label="Seed raise"
            prefix="$"
            value={inputs.seedRaise}
            onChange={(v) => setField('seedRaise', v)}
            step={100000}
            min={0}
          />
        </div>
        <ul className="fp-funnel-out">
          <li>
            <span>Software tools {inputs.seedSoftwarePct}%</span>
            <strong>{formatUsd(seedSoftware)}</strong>
          </li>
          <li>
            <span>Hiring {inputs.seedHiringPct}%</span>
            <strong>{formatUsd(seedHiring)}</strong>
          </li>
          <li>
            <span>Marketing {inputs.seedMarketingPct}%</span>
            <strong>{formatUsd(seedMarketing)}</strong>
          </li>
        </ul>
        <div className="fp-table-wrap" style={{ marginTop: 16 }}>
          <table className="fp-table fp-table-narrow">
            <thead>
              <tr>
                <th>#</th>
                <th>Role</th>
                <th>Min seed</th>
                <th>Salary</th>
                <th>Funded at this raise?</th>
              </tr>
            </thead>
            <tbody>
              {SEED_RAISE_PLAN.roles.map((row) => (
                <tr key={row.priority} className={inputs.seedRaise >= row.minRaise ? undefined : 'is-muted'}>
                  <td>{row.priority}</td>
                  <td>{row.role}</td>
                  <td>{formatUsd(row.minRaise)}</td>
                  <td>{formatUsd(row.salary)}</td>
                  <td>{inputs.seedRaise >= row.minRaise ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section" id="sensitivity">
        <h2>Sensitivity</h2>
        <p className="content-block">
          Tornado: each driver ±20%. Output is 2031F bottom-up platform revenue.
          Grid: market CAGR × target share on 2031F <em>top-down</em> revenue.
        </p>
        <h3>Tornado — 2031F bottom-up revenue</h3>
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
        <h3>Two-way grid — 2031F top-down revenue</h3>
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

      <section className="page-section" id="comparables">
        <h2>Comparable companies</h2>
        <p className="content-block">
          From the workbook. Gumroad and Shopify have the strongest public cost data. Stan, Kajabi,
          Flodesk, and Podia are operating-model references. Beacons and Linktree figures are
          third-party estimates.
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

function nSafe(value) {
  const x = Number(value)
  return Number.isFinite(x) ? x : 0
}

export default FinancialProjections
