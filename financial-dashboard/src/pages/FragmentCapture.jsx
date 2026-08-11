import React, { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Treemap,
} from 'recharts'
import './Page.css'
import './FragmentCapture.css'
import {
  FRAGMENT_MAP_COLORS,
  formatUsdCompact,
  getMarketPieData,
  getPlayerBattleCard,
  getWorldMapNodes,
} from '../data/fragmentCaptureData'
import { FRAGMENT_ICON_PATHS, getPlayerLogoUrl } from '../data/fragmentMapBranding'
import {
  CREATOR_STACK_LAYERS,
} from '../data/creatorStackSegmentation'

const LABEL_DARK = '#0f0f0f'
const LABEL_LIGHT = '#f7f3ea'
const SCRIM_DARK = 'rgba(15, 15, 15, 0.55)'
const SCRIM_LIGHT = 'rgba(247, 243, 234, 0.72)'
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
        <image
          href={logoUrl}
          x={lx}
          y={ly}
          width={logoSize}
          height={logoSize}
          preserveAspectRatio="xMidYMid meet"
        />
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

function PlayerBattleCard({ card, style, onClose }) {
  if (!card) return null
  const logoUrl = getPlayerLogoUrl(card.id, 64)
  const confidence =
    card.confidence || (card.isScout ? 'Scout' : card.isEstimate ? 'Estimate' : 'Reported')
  return (
    <div
      className="fragment-battlecard"
      style={style}
      role="dialog"
      aria-label={`${card.name} summary`}
    >
      <button type="button" className="fragment-battlecard-close" onClick={onClose} aria-label="Close">
        ×
      </button>
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
          <span className="fragment-battlecard-k">Share of category</span>
          <span className="fragment-battlecard-v">
            {card.shareOfFragment != null ? `${(card.shareOfFragment * 100).toFixed(0)}%` : '—'}
          </span>
        </div>
        <div>
          <span className="fragment-battlecard-k">Users</span>
          <span className="fragment-battlecard-v">{card.usersLabel || '—'}</span>
        </div>
      </div>
      {card.kahanaAngle && (
        <p className="fragment-battlecard-angle">
          <strong>Aura Library:</strong> {card.kahanaAngle}
        </p>
      )}
      <Link className="fragment-battlecard-link" to="/company-landscape">
        Open Company Landscape →
      </Link>
    </div>
  )
}

function WorldMapCell(props) {
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
    fragmentId,
    kind,
    subtle,
    highlighted,
    onSelectCompany,
  } = props
  if (depth === 0 || width < 2 || height < 2) return null

  // Parent category with nested companies: Recharts still paints the parent — keep a light frame only
  if (kind === 'fragment' && depth === 1 && props.children?.length) {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="transparent"
          stroke={highlighted ? '#1b4332' : DEFAULT_STROKE}
          strokeWidth={highlighted ? 3 : 1.5}
        />
      </g>
    )
  }

  const cellFill = fill || FRAGMENT_MAP_COLORS[fragmentId] || '#6b4e3d'
  const isCompany = !!playerId || kind === 'company' || kind === 'remainder'
  const large = width > 100 && height > 48
  const medium = width > 56 && height > 32
  const tiny = width >= 36 && height >= 26

  let title = null
  let subtitle = null
  let titleSize = 12
  let subSize = 11

  if (large) {
    title = name
    subtitle = kind === 'remainder' ? 'Rest of category' : formatUsdCompact(size)
    titleSize = width > 140 ? 14 : 12
  } else if (medium) {
    title = name
    subtitle = height > 44 ? formatUsdCompact(size) : null
    titleSize = 11
  } else if (tiny && isCompany) {
    title = null
  } else if (tiny) {
    title = name
    titleSize = 10
  }

  return (
    <g
      className={`fragment-map-province${subtle ? ' is-scout' : ''}${highlighted ? ' is-occupied' : ''}`}
      onClick={() => {
        if (playerId && onSelectCompany) onSelectCompany(fragmentId, playerId)
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
          stroke: highlighted ? '#081c15' : DEFAULT_STROKE,
          strokeWidth: highlighted ? 2.5 : 1.25,
          opacity: subtle ? 0.65 : 1,
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
          fragmentId={!playerId ? fragmentId : null}
          playerId={playerId}
          showCategoryIcon={!playerId}
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
  if (!name) return null

  return (
    <div className="fragment-map-tooltip">
      <div className="fragment-map-tooltip-title">{name}</div>
      <div className="fragment-map-tooltip-size">
        {raw.kind === 'remainder' ? 'Unmodeled share' : formatUsdCompact(size)}
      </div>
      {raw.sizeLabel && <div className="fragment-map-tooltip-meta">{raw.sizeLabel}</div>}
      {raw.kind && <div className="fragment-map-tooltip-meta">Type: {raw.kind}</div>}
      {(raw.marketNote || raw.note) && (
        <p className="fragment-map-tooltip-note">{raw.marketNote || raw.note}</p>
      )}
    </div>
  )
}

function MarketPieTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="fragment-map-tooltip">
      <div className="fragment-map-tooltip-title">{d.fullName || d.name}</div>
      {d.fragmentName && d.kind === 'company' && (
        <div className="fragment-map-tooltip-meta">{d.fragmentName}</div>
      )}
      <div className="fragment-map-tooltip-meta">
        {formatUsdCompact(d.value)}
        {d.share != null ? ` · ${(d.share * 100).toFixed(1)}% of total` : ''}
        {d.isEstimate ? ' · est.' : ''}
      </div>
      <div className="fragment-map-tooltip-note">Click to highlight on the map</div>
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
              return `${s.name} (${formatUsdCompact(s.value)})`
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <p className="fragment-capture-note fragment-capture-note--tight">{data.note}</p>
    </div>
  )
}

function FragmentCapture() {
  const mapRef = useRef(null)
  const [pieBreakdown, setPieBreakdown] = useState('categories')
  const [highlightFragmentId, setHighlightFragmentId] = useState(null)
  const [activeCard, setActiveCard] = useState(null)

  const pieData = useMemo(() => getMarketPieData(pieBreakdown), [pieBreakdown])
  const worldTree = useMemo(() => getWorldMapNodes(pieBreakdown), [pieBreakdown])

  const selectFromPie = (fragmentId) => {
    if (!fragmentId) return
    setHighlightFragmentId(fragmentId)
    requestAnimationFrame(() => {
      mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const onSelectCompany = (fragmentId, playerId) => {
    const card = getPlayerBattleCard(fragmentId, playerId)
    setActiveCard(card)
    setHighlightFragmentId(fragmentId)
  }

  const renderCell = (props) => (
    <WorldMapCell
      {...props}
      highlighted={
        !!highlightFragmentId &&
        props.fragmentId === highlightFragmentId &&
        (props.kind === 'fragment' || !!props.playerId)
      }
      onSelectCompany={onSelectCompany}
    />
  )

  return (
    <div className="page fragment-capture-page">
      <div className="page-header fragment-capture-header">
        <h1>Market Map</h1>
        <p className="fragment-capture-subtitle">
          Lay of the land — content modalities plus how creators operate (community, memberships,
          storefronts, marketplaces), sized by directional market $. Company facts live on{' '}
          <Link to="/company-landscape">Company Landscape</Link>; Aura Library positioning is in the{' '}
          <Link to="/glossary">Glossary</Link>.
        </p>
        <div className="fragment-capture-stack-row" aria-label="Creator stack layers">
          {CREATOR_STACK_LAYERS.filter((l) => l.onMap !== false).map((layer) => (
            <div key={layer.id} className="fragment-capture-stack-pill">
              <strong>{layer.name}</strong>
              <span>{layer.purpose}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="page-section fragment-market-pie-section">
        <div className="fragment-map-world-heading">
          <h2>Total market</h2>
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
            ? 'Each slice is a content category sized by directional mid TAM. Click a slice to highlight it on the map.'
            : 'Each slice is a modeled company (top players; smaller ones grouped as Other). Click to highlight its category on the map.'}
        </p>
        <div className="fragment-map-board fragment-market-pie-board">
          <MarketPieChart
            data={pieData}
            selectedFragmentId={highlightFragmentId}
            onSelectSlice={selectFromPie}
          />
        </div>
      </section>

      <section className="page-section fragment-map-world-section" ref={mapRef} id="market-board">
        <h2>Categories &amp; companies</h2>
        <p className="fragment-capture-note fragment-capture-note--tight">
          One board for the whole landscape — each block is a category; tiles inside are companies
          (plus unmodeled share). Click a company for a quick card, then go deeper on Company Landscape.
        </p>
        <div className="fragment-map-board fragment-map-board--world">
          <ResponsiveContainer width="100%" height={520}>
            <Treemap
              data={worldTree.children}
              dataKey="size"
              aspectRatio={4 / 3}
              stroke={DEFAULT_STROKE}
              content={renderCell}
              isAnimationActive={false}
            >
              <Tooltip content={<MapTooltip />} />
            </Treemap>
          </ResponsiveContainer>
        </div>
        {activeCard && (
          <div className="fragment-battlecard-dock">
            <PlayerBattleCard card={activeCard} onClose={() => setActiveCard(null)} />
          </div>
        )}
        <p className="fragment-capture-note">
          Sizes are directional midpoints for orientation — not a forecast. Next:{' '}
          <Link to="/company-landscape">Company Landscape</Link> for fit, synergy, and comparisons.
        </p>
      </section>
    </div>
  )
}

export default FragmentCapture
