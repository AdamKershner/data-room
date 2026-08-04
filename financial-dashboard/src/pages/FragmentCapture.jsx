import React, { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
} from 'recharts'
import './Page.css'
import './FragmentCapture.css'
import {
  CAPTURE_PRESETS,
  FRAGMENT_MAP_COLORS,
  GTM_CREATOR_LAYER,
  GTM_PHASES,
  computeCaptureScenario,
  formatUsdCompact,
  getCapturableFragments,
  getFragmentMeta,
  getFragmentMapSize,
  getFragmentShortName,
  getGtmPhaseForFragment,
  getMarketPieData,
  getPlayersForFragment,
  getProvinceNodes,
  getWedgeBrief,
  summarizeScenario,
} from '../data/fragmentCaptureData'
import {
  FRAGMENT_ICON_PATHS,
  getPlayerLogoUrl,
} from '../data/fragmentMapBranding'

const BAR_COLORS = ['#2d6a4f', '#40916c', '#52b788', '#74c69d', '#95d5b2', '#1b4332', '#081c15']
const LABEL_DARK = '#0f0f0f'
const LABEL_LIGHT = '#f7f3ea'
const SCRIM_DARK = 'rgba(15, 15, 15, 0.55)'
const SCRIM_LIGHT = 'rgba(247, 243, 234, 0.72)'
const SELECTED_STROKE = '#f0e6c8'
const DEFAULT_STROKE = '#ebe4d4'

function hexToRgb(hex) {
  if (!hex || typeof hex !== 'string') return { r: 80, g: 80, b: 80 }
  const h = hex.replace('#', '')
  const full =
    h.length === 3
      ? h
          .split('')
          .map((c) => c + c)
          .join('')
      : h
  const num = parseInt(full, 16)
  if (Number.isNaN(num)) return { r: 80, g: 80, b: 80 }
  return { r: (num >> 16) & 0xff, g: (num >> 8) & 0xff, b: num & 0xff }
}

/** Relative luminance 0–1; pick dark or light text for contrast. */
function contrastLabelColors(fillHex) {
  const { r, g, b } = hexToRgb(fillHex)
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  const lightText = lum < 0.55
  return {
    text: lightText ? LABEL_LIGHT : LABEL_DARK,
    muted: lightText ? 'rgba(247,243,234,0.88)' : 'rgba(15,15,15,0.78)',
    scrim: lightText ? SCRIM_DARK : SCRIM_LIGHT,
  }
}

function truncateLabel(name, widthPx, fontSize = 12) {
  if (!name) return ''
  const maxChars = Math.max(3, Math.floor((widthPx - 16) / (fontSize * 0.58)))
  if (name.length <= maxChars) return name
  return `${name.slice(0, Math.max(2, maxChars - 1))}…`
}

function CategoryIcon({ fragmentId, size = 14, color = '#f7f3ea', x, y }) {
  const icon = FRAGMENT_ICON_PATHS[fragmentId]
  if (!icon) return null
  return (
    <svg
      x={x}
      y={y}
      width={size}
      height={size}
      viewBox={icon.viewBox}
      style={{ pointerEvents: 'none', overflow: 'visible' }}
    >
      <path d={icon.d} fill={color} />
    </svg>
  )
}

function CategoryIconInline({ fragmentId, size = 14, color = 'currentColor' }) {
  const icon = FRAGMENT_ICON_PATHS[fragmentId]
  if (!icon) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      aria-hidden
      style={{ flexShrink: 0, display: 'block' }}
    >
      <path d={icon.d} fill={color} />
    </svg>
  )
}

function LabelBlock({
  x,
  y,
  width,
  height,
  title,
  subtitle,
  fillHex,
  titleSize,
  subSize,
  fragmentId,
  playerId,
  showCategoryIcon,
  logoOnly,
}) {
  const colors = contrastLabelColors(fillHex)
  const pad = 5
  const logoSize = logoOnly ? Math.min(28, Math.max(16, Math.min(width, height) * 0.45)) : 16
  const logoUrl = playerId ? getPlayerLogoUrl(playerId, 64) : null
  const hasLogo = !!logoUrl && width >= 28 && height >= 24
  const hasCatIcon = showCategoryIcon && fragmentId && FRAGMENT_ICON_PATHS[fragmentId]
  const iconSlot = (hasLogo ? logoSize + 6 : 0) + (hasCatIcon && !hasLogo ? 16 : 0)

  if (logoOnly && hasLogo) {
    const lx = x + (width - logoSize) / 2
    const ly = y + (height - logoSize) / 2
    return (
      <g style={{ pointerEvents: 'none' }}>
        <rect
          x={lx - 3}
          y={ly - 3}
          width={logoSize + 6}
          height={logoSize + 6}
          rx={4}
          fill={colors.scrim}
        />
        <image href={logoUrl} x={lx} y={ly} width={logoSize} height={logoSize} preserveAspectRatio="xMidYMid meet" />
      </g>
    )
  }

  const lines = subtitle ? 2 : 1
  const lineH = titleSize + 4
  const blockH = pad * 2 + Math.max(lines * lineH - 2, hasLogo ? logoSize : 0)
  const blockW = Math.min(width - 8, Math.max(40, width - 10))
  const blockX = x + 4
  const blockY = y + 4
  if (blockH > height - 4 || blockW < 28) {
    if (hasLogo) {
      return (
        <LabelBlock
          x={x}
          y={y}
          width={width}
          height={height}
          title={title}
          subtitle={null}
          fillHex={fillHex}
          titleSize={titleSize}
          subSize={subSize}
          playerId={playerId}
          logoOnly
        />
      )
    }
    return null
  }

  const textX = blockX + pad + iconSlot
  const textMaxW = blockW - pad * 2 - iconSlot

  return (
    <g style={{ pointerEvents: 'none' }}>
      <rect
        x={blockX}
        y={blockY}
        width={blockW}
        height={Math.min(blockH, height - 8)}
        rx={4}
        ry={4}
        fill={colors.scrim}
      />
      {hasLogo && (
        <image
          href={logoUrl}
          x={blockX + pad}
          y={blockY + pad}
          width={logoSize}
          height={logoSize}
          preserveAspectRatio="xMidYMid meet"
        />
      )}
      {!hasLogo && hasCatIcon && (
        <CategoryIcon
          fragmentId={fragmentId}
          size={14}
          color={colors.text}
          x={blockX + pad}
          y={blockY + pad + 1}
        />
      )}
      {textMaxW > 20 && (
        <text
          x={textX}
          y={blockY + pad + titleSize - 1}
          fill={colors.text}
          fontSize={titleSize}
          fontWeight={700}
        >
          {truncateLabel(title, textMaxW, titleSize)}
        </text>
      )}
      {subtitle && height > blockH + 2 && textMaxW > 20 && (
        <text
          x={textX}
          y={blockY + pad + titleSize + lineH - 2}
          fill={colors.muted}
          fontSize={subSize}
          fontWeight={600}
        >
          {truncateLabel(subtitle, textMaxW, subSize)}
        </text>
      )}
    </g>
  )
}

function layoutSilhouettes(players, x, y, width, height) {
  if (!players?.length || width < 8 || height < 8) return []
  const total = players.reduce((s, p) => s + (p.size || 0), 0) || 1
  const vertical = width >= height
  let cursor = vertical ? x : y
  return players.map((p) => {
    const share = (p.size || 0) / total
    if (vertical) {
      const w = Math.max(2, share * width)
      const cell = { ...p, x: cursor, y, width: w, height }
      cursor += w
      return cell
    }
    const h = Math.max(2, share * height)
    const cell = { ...p, x, y: cursor, width, height: h }
    cursor += h
    return cell
  })
}

function formatPct(n, digits = 1) {
  if (n == null || Number.isNaN(n)) return '—'
  const pct = n * 100
  if (pct > 0 && pct < 0.01) return '<0.01%'
  if (pct < 10) return `${pct.toFixed(Math.max(digits, 2))}%`
  return `${pct.toFixed(digits)}%`
}

function PlayerBattleCard({ card, style }) {
  if (!card) return null
  const logoUrl = getPlayerLogoUrl(card.id, 64)
  const confidence =
    card.confidence || (card.isScout ? 'Scout' : card.isEstimate ? 'Estimate' : 'Reported')
  return (
    <div
      className="fragment-battlecard"
      style={style}
      role="dialog"
      aria-label={`${card.name} battle card`}
    >
      <div className="fragment-battlecard-head">
        {logoUrl ? (
          <img src={logoUrl} alt="" width={28} height={28} />
        ) : (
          <span className="fragment-battlecard-cat">
            <CategoryIconInline fragmentId={card.fragmentId} size={18} color="#2d6a4f" />
          </span>
        )}
        <div>
          <div className="fragment-battlecard-name">{card.name}</div>
          <div className="fragment-battlecard-frag">{card.fragmentName}</div>
        </div>
        <span
          className={`fragment-battlecard-badge fragment-battlecard-badge--${confidence.toLowerCase()}`}
        >
          {confidence}
        </span>
      </div>
      <div className="fragment-battlecard-stats">
        <div>
          <span className="fragment-battlecard-k">Revenue</span>
          <span className="fragment-battlecard-v">
            {card.revenueUsd != null
              ? `${formatUsdCompact(card.revenueUsd)}${card.isEstimate ? ' est.' : ''}`
              : '—'}
          </span>
        </div>
        <div>
          <span className="fragment-battlecard-k">Share of fragment</span>
          <span className="fragment-battlecard-v">
            {card.shareOfFragment != null ? `${(card.shareOfFragment * 100).toFixed(0)}%` : '—'}
          </span>
        </div>
        <div>
          <span className="fragment-battlecard-k">Share of world</span>
          <span className="fragment-battlecard-v">
            {card.shareOfWorld != null
              ? card.shareOfWorld * 100 < 0.1
                ? '<0.1%'
                : `${(card.shareOfWorld * 100).toFixed(1)}%`
              : '—'}
          </span>
        </div>
        <div>
          <span className="fragment-battlecard-k">Users</span>
          <span className="fragment-battlecard-v">{card.usersLabel || '—'}</span>
        </div>
        <div>
          <span className="fragment-battlecard-k">Bias</span>
          <span className="fragment-battlecard-v">{card.sideBias}</span>
        </div>
      </div>
      {card.revenueNote && (
        <p className="fragment-battlecard-note">
          <strong>Confidence:</strong> {card.revenueNote}
        </p>
      )}
      {card.kahanaAngle && (
        <p className="fragment-battlecard-angle">
          <strong>Kahana:</strong> {card.kahanaAngle}
        </p>
      )}
      <Link className="fragment-battlecard-link" to="/battlecards">
        Open battlecards →
      </Link>
    </div>
  )
}

function ProvinceTreemapContent(props) {
  const {
    x,
    y,
    width,
    height,
    name,
    fill,
    size,
    depth,
    playerId,
    attackable,
    selected,
    onToggle,
  } = props
  if (depth === 0 || width < 2 || height < 2) return null

  const occupied = selected && attackable !== false
  const cellFill = occupied ? '#2d6a4f' : fill || '#6b4e3d'
  const large = width > 100 && height > 48
  const medium = width > 56 && height > 32
  const tiny = width >= 36 && height >= 26
  const canAttack = attackable !== false

  let title = null
  let subtitle = null
  let titleSize = 12
  let subSize = 11

  if (large) {
    title = name
    subtitle = canAttack ? formatUsdCompact(size) : 'Scout'
    titleSize = width > 140 ? 14 : 12
    subSize = 11
  } else if (medium) {
    title = name
    subtitle = height > 44 ? (canAttack ? formatUsdCompact(size) : 'Scout') : null
    titleSize = 11
  } else if (tiny) {
    title = canAttack ? null : 'Sc'
  }

  return (
    <g
      className={`fragment-map-province${occupied ? ' is-occupied' : ''}${
        !canAttack ? ' is-scout' : ''
      }`}
      onClick={() => {
        if (playerId && onToggle) onToggle(playerId, canAttack)
      }}
      style={{ cursor: playerId ? 'pointer' : 'default' }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        className="fragment-map-cell-rect"
        style={{
          fill: cellFill,
          stroke: occupied ? '#081c15' : DEFAULT_STROKE,
          strokeWidth: occupied ? 3 : 1.5,
          opacity: canAttack ? 1 : 0.7,
        }}
      />
      {(title || (tiny && playerId)) && (
        <LabelBlock
          x={x}
          y={y}
          width={width}
          height={height}
          title={title || name}
          subtitle={subtitle}
          fillHex={cellFill}
          titleSize={titleSize}
          subSize={subSize}
          playerId={playerId}
          logoOnly={!title && !!playerId}
        />
      )}
    </g>
  )
}

function MapTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const raw = payload[0].payload || payload[0]
  if (!raw || raw.depth === 0) return null
  const name = raw.name
  const size = raw.size ?? raw.value
  const sizeLabel = raw.sizeLabel
  const note = raw.marketNote || raw.note || raw.revenueNote
  const kind = raw.kind
  const sideBias = raw.sideBias
  if (!name) return null

  return (
    <div className="fragment-map-tooltip">
      <div className="fragment-map-tooltip-title">{name}</div>
      <div className="fragment-map-tooltip-size">
        {kind === 'scout' ? 'Scout (no $)' : formatUsdCompact(size)}
      </div>
      {sizeLabel && <div className="fragment-map-tooltip-meta">{sizeLabel}</div>}
      {kind && <div className="fragment-map-tooltip-meta">Type: {kind}</div>}
      {sideBias && <div className="fragment-map-tooltip-meta">Bias: {sideBias}</div>}
      {note && <p className="fragment-map-tooltip-note">{note}</p>}
    </div>
  )
}

function MarketPieTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="fragment-map-tooltip">
      <div className="fragment-map-tooltip-title">{d.fullName || d.name}</div>
      {d.gtmLabel && (
        <div className="fragment-map-tooltip-meta fragment-map-tooltip-gtm">{d.gtmLabel}</div>
      )}
      {d.fragmentName && d.kind === 'company' && (
        <div className="fragment-map-tooltip-meta">{d.fragmentName}</div>
      )}
      <div className="fragment-map-tooltip-meta">
        {formatUsdCompact(d.value)}
        {d.share != null ? ` · ${(d.share * 100).toFixed(1)}% of total` : ''}
        {d.isEstimate ? ' · est.' : ''}
      </div>
      <div className="fragment-map-tooltip-note">Click to focus this category</div>
    </div>
  )
}

function MarketPieChart({ data, selectedFragmentId, onSelectSlice }) {
  if (!data?.slices?.length) return null
  return (
    <div className="fragment-market-pie">
      <div className="fragment-market-pie-total">
        <span className="fragment-market-pie-total-label">{data.totalLabel}</span>
        <span className="fragment-market-pie-total-value">{formatUsdCompact(data.totalUsd)}</span>
      </div>
      <ResponsiveContainer width="100%" height={360}>
        <PieChart>
          <Pie
            data={data.slices}
            dataKey="value"
            nameKey="name"
            cx="42%"
            cy="50%"
            innerRadius={72}
            outerRadius={130}
            paddingAngle={1.5}
            onClick={(slice) => {
              if (slice?.fragmentId && onSelectSlice) onSelectSlice(slice.fragmentId)
            }}
            style={{ cursor: 'pointer' }}
          >
            {data.slices.map((s) => (
              <Cell
                key={s.id}
                fill={s.fill}
                stroke={s.fragmentId === selectedFragmentId ? '#1f2a24' : '#f7f3ea'}
                strokeWidth={s.fragmentId === selectedFragmentId ? 3 : 1}
              />
            ))}
          </Pie>
          <Tooltip content={<MarketPieTooltip />} />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{ maxHeight: 320, overflowY: 'auto', fontSize: 12, paddingLeft: 8 }}
            formatter={(value, entry) => {
              const s = entry?.payload
              if (!s) return value
              const phase = s.gtmPhase ? ` · ${s.gtmPhase}` : ''
              return `${s.name} (${formatUsdCompact(s.value)}${phase})`
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <p className="fragment-capture-note fragment-capture-note--tight">{data.note}</p>
    </div>
  )
}

function FragmentCapture() {
  const fragments = getCapturableFragments()
  const provinceRef = useRef(null)
  const [fragmentId, setFragmentId] = useState(fragments[0]?.id ?? 'newsletters-written')
  const [pieBreakdown, setPieBreakdown] = useState('categories')
  const players = useMemo(() => getPlayersForFragment(fragmentId), [fragmentId])
  const fragmentMeta = getFragmentMeta(fragmentId)
  const mapSize = useMemo(() => getFragmentMapSize(fragmentId), [fragmentId])

  const [selectedIds, setSelectedIds] = useState(() =>
    players.filter((p) => p.revenueUsd != null).map((p) => p.id),
  )
  const [captureRate, setCaptureRate] = useState(0.1)
  const [customPct, setCustomPct] = useState('10')
  const [pathA, setPathA] = useState(null)
  const [pathB, setPathB] = useState(null)

  const provinceNodes = useMemo(() => getProvinceNodes(fragmentId), [fragmentId])
  const provinceTree = useMemo(
    () => ({ name: fragmentMeta?.name || 'Provinces', children: provinceNodes }),
    [fragmentMeta, provinceNodes],
  )
  const pieData = useMemo(() => getMarketPieData(pieBreakdown), [pieBreakdown])
  const wedgeBrief = useMemo(() => getWedgeBrief(fragmentId), [fragmentId])
  const activeGtm = useMemo(() => getGtmPhaseForFragment(fragmentId), [fragmentId])

  const onFragmentChange = (id) => {
    setFragmentId(id)
    const next = getPlayersForFragment(id)
    setSelectedIds(next.filter((p) => p.revenueUsd != null).map((p) => p.id))
  }

  const selectFragmentFromPie = (id) => {
    if (!id) return
    onFragmentChange(id)
    requestAnimationFrame(() => {
      provinceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const scenario = useMemo(
    () => computeCaptureScenario(players, selectedIds, captureRate),
    [players, selectedIds, captureRate],
  )

  const liveSummary = useMemo(
    () => summarizeScenario(fragmentId, selectedIds, captureRate),
    [fragmentId, selectedIds, captureRate],
  )

  const chartData = scenario.perPlayer.map((p) => ({
    name: p.name.length > 18 ? `${p.name.slice(0, 16)}…` : p.name,
    fullName: p.name,
    captured: Math.round(p.capturedUsd),
    full: Math.round(p.fullUsd),
  }))

  const fragmentTam = liveSummary.fragmentTam
  const shareOfTam = liveSummary.shareOfTam
  const shareLabel =
    shareOfTam != null
      ? `${formatPct(shareOfTam)} of ${formatUsdCompact(fragmentTam)}`
      : '—'

  const togglePlayer = (id, attackable = true) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
    void attackable
  }

  const selectAllWithRevenue = () => {
    setSelectedIds(players.filter((p) => p.revenueUsd != null).map((p) => p.id))
  }

  const clearSelection = () => setSelectedIds([])

  const applyPreset = (rate) => {
    setCaptureRate(rate)
    setCustomPct(String(Math.round(rate * 100)))
  }

  const applyCustomPct = () => {
    const n = Number(customPct)
    if (Number.isNaN(n) || n < 0) return
    setCaptureRate(Math.min(n, 100) / 100)
  }

  const savePath = (slot) => {
    const snap = { ...liveSummary }
    if (slot === 'A') setPathA(snap)
    else setPathB(snap)
  }

  const loadPath = (snap) => {
    if (!snap) return
    setFragmentId(snap.fragmentId)
    setSelectedIds([...snap.selectedIds])
    setCaptureRate(snap.captureRate)
    setCustomPct(String(Math.round(snap.captureRate * 100)))
  }

  const renderProvinceCell = (props) => (
    <ProvinceTreemapContent
      {...props}
      selected={props.playerId ? selectedIds.includes(props.playerId) : false}
      onToggle={togglePlayer}
    />
  )

  return (
    <div className="page fragment-capture-page">
      <div className="page-header fragment-capture-header">
        <h1>Fragment map</h1>
        <p className="fragment-capture-subtitle">
          Total market → club-centric GTM sequence → competitors → capture %. Phase 1 = reading &amp;
          learning clubs (ebooks, courses, YouTube video groups). Not a forecast. See{' '}
          <Link to="/pro-forma">Pro Forma</Link> for narrative context.
        </p>
      </div>

      <section className="page-section fragment-market-pie-section">
        <div className="fragment-map-world-heading">
          <h2>1. Total market</h2>
          <div className="fragment-capture-fragment-bar" role="tablist" aria-label="Pie breakdown">
            <button
              type="button"
              className={`fragment-capture-chip${pieBreakdown === 'categories' ? ' is-active' : ''}`}
              onClick={() => setPieBreakdown('categories')}
            >
              By category
            </button>
            <button
              type="button"
              className={`fragment-capture-chip${pieBreakdown === 'companies' ? ' is-active' : ''}`}
              onClick={() => setPieBreakdown('companies')}
            >
              By company
            </button>
          </div>
        </div>
        <p className="fragment-capture-note fragment-capture-note--tight">
          {pieBreakdown === 'categories'
            ? 'Each slice is a content category sized by directional mid TAM. Click a slice to open competitors below.'
            : 'Each slice is a modeled company (top players; smaller ones grouped as Other). Click a company to open its category.'}
        </p>
        <div className="fragment-map-board fragment-market-pie-board">
          <MarketPieChart
            data={pieData}
            selectedFragmentId={fragmentId}
            onSelectSlice={selectFragmentFromPie}
          />
        </div>
      </section>

      <section className="page-section fragment-gtm-section">
        <h2>2. Club-centric GTM sequence</h2>
        <p className="fragment-capture-note fragment-capture-note--tight">
          Not biggest-first — where clubs are natural, product is ready, and acquisition is
          tractable. Phase 1 includes YouTube video groups via <strong>Add YouTube</strong> (iframe
          embed — channel keeps YouTube views/ads; Kahana does not rehost the file).
        </p>
        <div className="fragment-gtm-phases">
          {GTM_PHASES.map((p) => {
            const isActive = p.fragmentIds.includes(fragmentId)
            return (
              <button
                key={p.id}
                type="button"
                className={`fragment-gtm-card${isActive ? ' is-active' : ''}`}
                onClick={() => selectFragmentFromPie(p.fragmentIds[0])}
              >
                <span className="fragment-gtm-card-phase">Phase {p.phase}</span>
                <span className="fragment-gtm-card-name">{p.name}</span>
                <span className="fragment-gtm-card-frags">
                  {p.fragmentIds.map((id) => getFragmentShortName(id)).join(' · ')}
                </span>
                <span className="fragment-gtm-card-summary">{p.summary}</span>
                {p.phase === 1 && (
                  <span className="fragment-gtm-card-youtube">
                    Add YouTube = embed URL in an iframe (not a downloaded file). Creators keep
                    YouTube views, watch time, and ads. Raw mp4 upload ≠ this path.
                  </span>
                )}
              </button>
            )
          })}
          <div
            className={`fragment-gtm-card fragment-gtm-card--layer${
              GTM_CREATOR_LAYER.fragmentIds.includes(fragmentId) ? ' is-active' : ''
            }`}
            role="button"
            tabIndex={0}
            onClick={() => selectFragmentFromPie(GTM_CREATOR_LAYER.fragmentIds[0])}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                selectFragmentFromPie(GTM_CREATOR_LAYER.fragmentIds[0])
              }
            }}
          >
            <span className="fragment-gtm-card-phase">Channel</span>
            <span className="fragment-gtm-card-name">{GTM_CREATOR_LAYER.name}</span>
            <span className="fragment-gtm-card-frags">Creator Business</span>
            <span className="fragment-gtm-card-summary">{GTM_CREATOR_LAYER.summary}</span>
          </div>
        </div>
      </section>

      <section className="page-section" ref={provinceRef} id="province-board">
        <h2>3. Competitors — {fragmentMeta?.name ?? 'Fragment'}</h2>
        <div className="fragment-capture-fragment-bar">
          {fragments.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`fragment-capture-chip${fragmentId === f.id ? ' is-active' : ''}`}
              onClick={() => onFragmentChange(f.id)}
            >
              <CategoryIconInline
                fragmentId={f.id}
                size={13}
                color={fragmentId === f.id ? '#f7f3ea' : FRAGMENT_MAP_COLORS[f.id]}
              />{' '}
              {getFragmentShortName(f.id)}
              {getGtmPhaseForFragment(f.id)?.shortName ? (
                <span className="fragment-chip-phase">
                  {getGtmPhaseForFragment(f.id).shortName}
                </span>
              ) : null}
            </button>
          ))}
        </div>
        {activeGtm && (
          <div className="fragment-pathway-brief">
            <div className="fragment-pathway-brief-head">
              <strong>
                {activeGtm.phase != null ? `Phase ${activeGtm.phase}` : 'Creator channel'}:{' '}
                {activeGtm.name}
              </strong>
            </div>
            <p>{activeGtm.pathway || activeGtm.summary}</p>
            {wedgeBrief?.kahanaAngle && (
              <p className="fragment-pathway-brief-angle">
                <strong>Kahana:</strong> {wedgeBrief.kahanaAngle}
              </p>
            )}
          </div>
        )}
        {fragmentMeta && (
          <p className="fragment-capture-note">
            <strong>{fragmentMeta.name}:</strong> {fragmentMeta.covers} Size: {mapSize.sizeLabel}
            {mapSize.isPlaceholder ? ' (placeholder)' : ''}. Category TAM{' '}
            {formatUsdCompact(fragmentTam)}. Click a competitor to occupy it for capture math.
          </p>
        )}

        <div className="fragment-capture-actions">
          <button type="button" className="fragment-capture-link-btn" onClick={selectAllWithRevenue}>
            Occupy all with $ modeled
          </button>
          <button type="button" className="fragment-capture-link-btn" onClick={clearSelection}>
            Clear occupation
          </button>
        </div>

        <div className="fragment-map-board fragment-map-board--province">
          <ResponsiveContainer width="100%" height={340}>
            <Treemap
              data={provinceTree.children}
              dataKey="size"
              aspectRatio={4 / 3}
              stroke={DEFAULT_STROKE}
              content={renderProvinceCell}
              isAnimationActive={false}
            >
              <Tooltip content={<MapTooltip />} />
            </Treemap>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="page-section">
        <h2>4. Capture scenario</h2>
        <div className="fragment-decision-rates">
          <span className="fragment-decision-theses-label">Capture %</span>
          {CAPTURE_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`fragment-capture-chip${
                Math.abs(captureRate - p.rate) < 0.001 ? ' is-active' : ''
              }`}
              onClick={() => applyPreset(p.rate)}
            >
              {p.label}
            </button>
          ))}
          <label className="fragment-capture-custom">
            Custom %
            <input
              type="number"
              min={0}
              max={100}
              value={customPct}
              onChange={(e) => setCustomPct(e.target.value)}
              onBlur={applyCustomPct}
              onKeyDown={(e) => e.key === 'Enter' && applyCustomPct()}
            />
          </label>
        </div>
        <div className="fragment-decision-paths">
          <button type="button" className="fragment-capture-link-btn" onClick={() => savePath('A')}>
            Save as Path A
          </button>
          <button type="button" className="fragment-capture-link-btn" onClick={() => savePath('B')}>
            Save as Path B
          </button>
          {pathA && (
            <button type="button" className="fragment-capture-link-btn" onClick={() => loadPath(pathA)}>
              Load A
            </button>
          )}
          {pathB && (
            <button type="button" className="fragment-capture-link-btn" onClick={() => loadPath(pathB)}>
              Load B
            </button>
          )}
          {(pathA || pathB) && (
            <button
              type="button"
              className="fragment-capture-link-btn"
              onClick={() => {
                setPathA(null)
                setPathB(null)
              }}
            >
              Clear paths
            </button>
          )}
        </div>
        {(pathA || pathB) && (
          <div className="fragment-path-compare">
            <table className="fragment-path-compare-table">
              <thead>
                <tr>
                  <th>Path</th>
                  <th>Fragment</th>
                  <th>Players</th>
                  <th>Pool</th>
                  <th>Capture</th>
                  <th>Implied $</th>
                  <th>% TAM</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { key: 'A', snap: pathA },
                  { key: 'B', snap: pathB },
                ].map(({ key, snap }) =>
                  snap ? (
                    <tr key={key}>
                      <td>
                        <button
                          type="button"
                          className="fragment-capture-link-btn"
                          onClick={() => loadPath(snap)}
                        >
                          {key}
                        </button>
                      </td>
                      <td>{snap.fragmentName}</td>
                      <td>{snap.modeledCount}</td>
                      <td>{formatUsdCompact(snap.poolUsd)}</td>
                      <td>{(snap.captureRate * 100).toFixed(0)}%</td>
                      <td className="metric-value">{formatUsdCompact(snap.capturedUsd)}</td>
                      <td>
                        {snap.shareOfTam != null
                          ? `${(snap.shareOfTam * 100).toFixed(2)}%`
                          : '—'}
                      </td>
                    </tr>
                  ) : (
                    <tr key={key} className="is-empty">
                      <td>{key}</td>
                      <td colSpan={6}>Empty — save current scenario</td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="page-section">
        <h2>5. Implied ceiling</h2>
        <div className="fragment-capture-kpis">
          <div className="fragment-capture-kpi">
            <span className="fragment-capture-kpi-label">Selected pool (100%)</span>
            <span className="fragment-capture-kpi-value">{formatUsdCompact(scenario.poolUsd)}</span>
          </div>
          <div className="fragment-capture-kpi is-highlight">
            <span className="fragment-capture-kpi-label">
              At {(captureRate * 100).toFixed(0)}% capture
            </span>
            <span className="fragment-capture-kpi-value">
              {formatUsdCompact(scenario.capturedUsd)}
            </span>
          </div>
          <div className="fragment-capture-kpi">
            <span className="fragment-capture-kpi-label">vs fragment TAM</span>
            <span className="fragment-capture-kpi-value">{shareLabel}</span>
          </div>
        </div>
        {scenario.skippedNoRevenue.length > 0 && (
          <p className="fragment-capture-note">
            Occupied but not in $ math (scouts):{' '}
            {scenario.skippedNoRevenue.map((p) => p.name).join(', ')}.
          </p>
        )}

        {chartData.length > 0 ? (
          <div className="fragment-capture-chart">
            <ResponsiveContainer width="100%" height={Math.max(280, chartData.length * 48)}>
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis
                  type="number"
                  tickFormatter={(v) => formatUsdCompact(v)}
                  stroke="#888"
                  fontSize={12}
                />
                <YAxis type="category" dataKey="name" width={120} stroke="#555" fontSize={12} />
                <Tooltip
                  formatter={(value, _name, props) => [
                    formatUsdCompact(value),
                    props.payload.fullName,
                  ]}
                  labelFormatter={() => `At ${(captureRate * 100).toFixed(0)}% capture`}
                />
                <Bar dataKey="captured" name="Captured" radius={[0, 4, 4, 0]}>
                  {chartData.map((_, i) => (
                    <Cell key={chartData[i].fullName} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="fragment-capture-note">
            Occupy at least one competitor with modeled revenue.
          </p>
        )}

        {scenario.perPlayer.length > 0 && (
          <div className="table-container" style={{ marginTop: 20 }}>
            <table className="scenario-table" style={{ minWidth: 640 }}>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Full modeled $</th>
                  <th>At {(captureRate * 100).toFixed(0)}%</th>
                </tr>
              </thead>
              <tbody>
                {scenario.perPlayer.map((p) => (
                  <tr key={p.id}>
                    <td className="scenario-name">
                      {p.name}
                      {p.isEstimate ? ' *' : ''}
                    </td>
                    <td>{formatUsdCompact(p.fullUsd)}</td>
                    <td className="metric-value">{formatUsdCompact(p.capturedUsd)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="scenario-name">Total</td>
                  <td>{formatUsdCompact(scenario.poolUsd)}</td>
                  <td className="metric-value">{formatUsdCompact(scenario.capturedUsd)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <p className="fragment-capture-note">
          * Estimate. Occupying every modeled competitor at 100% = complete capture of this modeled
          pool — a thinking tool, not a prediction.
        </p>
      </section>
    </div>
  )
}

export default FragmentCapture
