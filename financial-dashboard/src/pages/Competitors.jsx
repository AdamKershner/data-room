import React, { useState, useEffect } from 'react'
import './Page.css'
import './Competitors.css'

/** Set to true when benchmarking delivers production security/productivity scores. */
const SHOW_COMPETITOR_SCORES = false

const COMPETITOR_SCORES = {
  oasis: { security: 9.0, productivity: 9.0 },
  perplexitycomet: { security: 6.0, productivity: 8.0 }, // Chrome row id in CSV
  safari: { security: 8.0, productivity: 7.0 },
  edge: { security: 7.0, productivity: 8.0 },
  firefox: { security: 8.0, productivity: 7.0 },
  brave: { security: 8.0, productivity: 7.0 },
  samsungInternet: { security: 6.0, productivity: 6.0 },
  opera: { security: 6.0, productivity: 7.0 },
  dia: { security: 7.0, productivity: 6.0 },
  genspark: { security: 7.0, productivity: 7.0 },
  perplexitycomet2: { security: 7.0, productivity: 8.0 },
  here: { security: 8.0, productivity: 8.0 },
  mammoth: { security: 9.0, productivity: 8.0 },
  kasm: { security: 8.0, productivity: 8.0 },
  microsoft: { security: 7.0, productivity: 8.0 },
  netzilo: { security: 8.0, productivity: 7.0 },
  zoho: { security: 7.0, productivity: 8.0 },
  prisma: { security: 9.0, productivity: 7.0 },
  shift: { security: 6.0, productivity: 8.0 },
  workona: { security: 6.0, productivity: 8.0 },
  rambox: { security: 6.0, productivity: 7.0 },
  arthur: { security: 7.0, productivity: 8.0 },
  dimension10: { security: 8.0, productivity: 8.0 },
  arborxr: { security: 8.0, productivity: 7.0 },
  meta: { security: 6.0, productivity: 7.0 },
  nreal: { security: 6.0, productivity: 7.0 },
  varjo: { security: 8.0, productivity: 8.0 },
  layerx: { security: 9.0, productivity: 8.0 },
  talon: { security: 9.0, productivity: 7.0 },
  checkpoint: { security: 9.0, productivity: 6.0 },
  zen: { security: 7.0, productivity: 8.0 },
  strawberry: { security: 6.0, productivity: 9.0 },
  sigmaos: { security: 7.0, productivity: 9.0 },
  moonshot: { security: 6.0, productivity: 7.0 },
  island: { security: 9.0, productivity: 8.0 },
  surf: { security: 8.0, productivity: 7.0 },
  cometenterprise: { security: 8.0, productivity: 8.0 },
  chromeenterprise: { security: 8.0, productivity: 8.0 },
  atlastopenai: { security: 6.5, productivity: 8.6 },
  arc: { security: 7.2, productivity: 9.1 },
  firefoxenterprise: { security: 8.4, productivity: 7.6 },
  microsoftedgebusiness: { security: 8.3, productivity: 8.4 },
  seraphic: { security: 8.8, productivity: 7.5 },
  menloenterprise: { security: 8.9, productivity: 7.2 },
  netskopebrowser: { security: 8.8, productivity: 7.8 },
  citrixbrowser: { security: 8.4, productivity: 7.7 },
  cyberarksecure: { security: 8.8, productivity: 7.4 },
  keepaware: { security: 8.2, productivity: 7.1 },
  duckduckgo: { security: 8.1, productivity: 6.8 },
}

function parseScore(value) {
  if (value == null) return null
  const match = String(value).match(/(\d+(\.\d+)?)/)
  if (!match) return null
  const score = Number.parseFloat(match[1])
  if (Number.isNaN(score)) return null
  return Math.max(0, Math.min(10, score))
}

function enrichCompetitorScores(competitor) {
  const existingSecurity = parseScore(competitor.securityScore)
  const existingProductivity = parseScore(competitor.productivityScore)
  const fallback = COMPETITOR_SCORES[competitor.id] || {}
  const securityScore = existingSecurity ?? fallback.security ?? null
  const productivityScore = existingProductivity ?? fallback.productivity ?? null

  return {
    ...competitor,
    securityScore,
    productivityScore,
  }
}

function parseCSVLine(line) {
  const result = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (c === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += c
    }
  }
  result.push(current.trim())
  return result
}

function parseCSV(text) {
  const lines = text.trim().split('\n').filter(l => l.trim())
  if (lines.length < 2) return []
  const headers = parseCSVLine(lines[0])
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line)
    return headers.reduce((obj, h, i) => ({ ...obj, [h]: values[i] || '' }), {})
  }).filter(row => row.id && row.name)
}

function Competitors() {
  const [competitors, setCompetitors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all') // all | Enterprise | Consumer | newcomer
  const [search, setSearch] = useState('')
  const [minSecurity, setMinSecurity] = useState('')
  const [minProductivity, setMinProductivity] = useState('')
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    fetch('/browserComparisonData.csv')
      .then(res => res.ok ? res.text() : Promise.reject(new Error('Failed to load data')))
      .then(text => {
        setCompetitors(parseCSV(text).map(enrichCompetitorScores))
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setCompetitors([])
      })
      .finally(() => setLoading(false))
  }, [])

  const filtered = competitors.filter((c) => {
    const matchType =
      filter === 'all' || filter === 'newcomer'
        ? filter === 'newcomer'
          ? (c.newcomer || '').toLowerCase() === 'yes'
          : true
        : c.type === filter
    const matchSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      (c.summary && c.summary.toLowerCase().includes(search.toLowerCase())) ||
      (c.uniqueStrength && c.uniqueStrength.toLowerCase().includes(search.toLowerCase()))

    if (!SHOW_COMPETITOR_SCORES) {
      return matchType && matchSearch
    }

    const securityThreshold = minSecurity === '' ? null : Number.parseFloat(minSecurity)
    const productivityThreshold = minProductivity === '' ? null : Number.parseFloat(minProductivity)
    const cSecurity = parseScore(c.securityScore)
    const cProductivity = parseScore(c.productivityScore)
    const matchSecurityThreshold =
      securityThreshold == null || (cSecurity != null && cSecurity >= securityThreshold)
    const matchProductivityThreshold =
      productivityThreshold == null || (cProductivity != null && cProductivity >= productivityThreshold)
    return matchType && matchSearch && matchSecurityThreshold && matchProductivityThreshold
  })

  const enterpriseCount = competitors.filter(c => c.type === 'Enterprise').length
  const consumerCount = competitors.filter(c => c.type === 'Consumer').length
  const newcomerCount = competitors.filter(c => (c.newcomer || '').toLowerCase() === 'yes').length

  if (loading) {
    return (
      <div className="page">
        <div className="page-header">
          <h1>Competitor Database</h1>
        </div>
        <div className="content-block competitors-loading">
          <p>Loading competitor data…</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="page">
        <div className="page-header">
          <h1>Competitor Database</h1>
        </div>
        <div className="content-block competitors-error">
          <p>Could not load competitor data: {error}</p>
          <p>Ensure <code>browserComparisonData.csv</code> exists in the public folder.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page" id="competitors">
      <div className="page-header">
        <h1>Competitor Database</h1>
        <p className="page-subtitle" style={{ marginTop: '8px', color: '#666', fontSize: '1rem' }}>
          Browser and workspace competitors across Enterprise and Consumer segments
        </p>
        {!SHOW_COMPETITOR_SCORES && (
          <p className="competitors-benchmark-note">
            <strong>Note:</strong> We are underway with a <strong>Benchmarking Assessment</strong> to calculate{' '}
            <strong>productivity</strong> and <strong>security</strong> scores for all competitors; those scores will appear on
            these cards once the assessment is complete.
          </p>
        )}
      </div>

      <section className="page-section competitors-filters">
        <div className="competitors-filter-row">
          <div className="filter-group">
            <label>Type</label>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All ({competitors.length})
              </button>
              <button
                className={`filter-btn ${filter === 'Enterprise' ? 'active' : ''}`}
                onClick={() => setFilter('Enterprise')}
              >
                Enterprise ({enterpriseCount})
              </button>
              <button
                className={`filter-btn ${filter === 'Consumer' ? 'active' : ''}`}
                onClick={() => setFilter('Consumer')}
              >
                Consumer ({consumerCount})
              </button>
              {newcomerCount > 0 && (
                <button
                  className={`filter-btn filter-btn-newcomer ${filter === 'newcomer' ? 'active' : ''}`}
                  onClick={() => setFilter('newcomer')}
                >
                  Newcomers to watch ({newcomerCount})
                </button>
              )}
            </div>
          </div>
          <div className="filter-group search-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search by name, summary, or strength…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="competitors-search"
            />
          </div>
          {SHOW_COMPETITOR_SCORES && (
            <>
              <div className="filter-group score-filter-group">
                <label>Min Security (0-10)</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  placeholder="e.g. 8.5"
                  value={minSecurity}
                  onChange={(e) => setMinSecurity(e.target.value)}
                  className="competitors-score-input"
                />
              </div>
              <div className="filter-group score-filter-group">
                <label>Min Productivity (0-10)</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  placeholder="e.g. 7.0"
                  value={minProductivity}
                  onChange={(e) => setMinProductivity(e.target.value)}
                  className="competitors-score-input"
                />
              </div>
            </>
          )}
        </div>
      </section>

      <section className="page-section">
        <div className="competitors-grid">
          {filtered.map(competitor => (
            <CompetitorCard
              key={competitor.id}
              competitor={competitor}
              isExpanded={expandedId === competitor.id}
              onToggle={() => setExpandedId(expandedId === competitor.id ? null : competitor.id)}
              isOasis={competitor.id === 'oasis'}
              showScores={SHOW_COMPETITOR_SCORES}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="competitors-empty">No competitors match your filters.</p>
        )}
      </section>
    </div>
  )
}

export function EmbeddedCompetitorsTable({ pageSize = 9 }) {
  const [competitors, setCompetitors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [minSecurity, setMinSecurity] = useState('')
  const [minProductivity, setMinProductivity] = useState('')
  const [expandedId, setExpandedId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch('/browserComparisonData.csv')
      .then(res => res.ok ? res.text() : Promise.reject(new Error('Failed to load data')))
      .then(text => {
        setCompetitors(parseCSV(text).map(enrichCompetitorScores))
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setCompetitors([])
      })
      .finally(() => setLoading(false))
  }, [])

  const filtered = competitors.filter((c) => {
    const matchType =
      filter === 'all' || filter === 'newcomer'
        ? filter === 'newcomer'
          ? (c.newcomer || '').toLowerCase() === 'yes'
          : true
        : c.type === filter
    const matchSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      (c.summary && c.summary.toLowerCase().includes(search.toLowerCase())) ||
      (c.uniqueStrength && c.uniqueStrength.toLowerCase().includes(search.toLowerCase()))

    if (!SHOW_COMPETITOR_SCORES) {
      return matchType && matchSearch
    }

    const securityThreshold = minSecurity === '' ? null : Number.parseFloat(minSecurity)
    const productivityThreshold = minProductivity === '' ? null : Number.parseFloat(minProductivity)
    const cSecurity = parseScore(c.securityScore)
    const cProductivity = parseScore(c.productivityScore)
    const matchSecurityThreshold =
      securityThreshold == null || (cSecurity != null && cSecurity >= securityThreshold)
    const matchProductivityThreshold =
      productivityThreshold == null || (cProductivity != null && cProductivity >= productivityThreshold)
    return matchType && matchSearch && matchSecurityThreshold && matchProductivityThreshold
  })

  const enterpriseCount = competitors.filter(c => c.type === 'Enterprise').length
  const consumerCount = competitors.filter(c => c.type === 'Consumer').length
  const newcomerCount = competitors.filter(c => (c.newcomer || '').toLowerCase() === 'yes').length
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageStart = (currentPage - 1) * pageSize
  const paginated = filtered.slice(pageStart, pageStart + pageSize)

  useEffect(() => {
    setCurrentPage(1)
  }, [filter, search, minSecurity, minProductivity])

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages)
  }, [currentPage, totalPages])

  if (loading) {
    return (
      <div className="content-block competitors-loading">
        <p>Loading competitor data…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="content-block competitors-error">
        <p>Could not load competitor data: {error}</p>
        <p>Ensure <code>browserComparisonData.csv</code> exists in the public folder.</p>
      </div>
    )
  }

  return (
    <>
      <section className="page-section competitors-filters">
        <div className="competitors-filter-row">
          <div className="filter-group">
            <label>Type</label>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All ({competitors.length})
              </button>
              <button
                className={`filter-btn ${filter === 'Enterprise' ? 'active' : ''}`}
                onClick={() => setFilter('Enterprise')}
              >
                Enterprise ({enterpriseCount})
              </button>
              <button
                className={`filter-btn ${filter === 'Consumer' ? 'active' : ''}`}
                onClick={() => setFilter('Consumer')}
              >
                Consumer ({consumerCount})
              </button>
              {newcomerCount > 0 && (
                <button
                  className={`filter-btn filter-btn-newcomer ${filter === 'newcomer' ? 'active' : ''}`}
                  onClick={() => setFilter('newcomer')}
                >
                  Newcomers to watch ({newcomerCount})
                </button>
              )}
            </div>
          </div>
          <div className="filter-group search-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search by name, summary, or strength…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="competitors-search"
            />
          </div>
          {SHOW_COMPETITOR_SCORES && (
            <>
              <div className="filter-group score-filter-group">
                <label>Min Security (0-10)</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  placeholder="e.g. 8.5"
                  value={minSecurity}
                  onChange={(e) => setMinSecurity(e.target.value)}
                  className="competitors-score-input"
                />
              </div>
              <div className="filter-group score-filter-group">
                <label>Min Productivity (0-10)</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  placeholder="e.g. 7.0"
                  value={minProductivity}
                  onChange={(e) => setMinProductivity(e.target.value)}
                  className="competitors-score-input"
                />
              </div>
            </>
          )}
        </div>
      </section>

      <section className="page-section">
        <div className="competitors-grid">
          {paginated.map(competitor => (
            <CompetitorCard
              key={competitor.id}
              competitor={competitor}
              isExpanded={expandedId === competitor.id}
              onToggle={() => setExpandedId(expandedId === competitor.id ? null : competitor.id)}
              isOasis={competitor.id === 'oasis'}
              showScores={SHOW_COMPETITOR_SCORES}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="competitors-empty">No competitors match your filters.</p>
        )}
        {filtered.length > 0 && (
          <div className="competitors-pagination">
            <button
              className="filter-btn"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="competitors-pagination-label">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="filter-btn"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </>
  )
}

function CompetitorCard({ competitor, isExpanded, onToggle, isOasis, showScores = false }) {
  const isNewcomer = (competitor.newcomer || '').toLowerCase() === 'yes'
  const securityScore = showScores ? parseScore(competitor.securityScore) : null
  const productivityScore = showScores ? parseScore(competitor.productivityScore) : null
  const fields = [
    { key: 'whoUsesIt', label: 'Who uses it' },
    { key: 'privacy', label: 'Privacy' },
    { key: 'security', label: 'Security' },
    { key: 'aiFeatures', label: 'AI features' },
    { key: 'platforms', label: 'Platforms' },
    { key: 'uniqueStrength', label: 'Unique strength' },
    { key: 'summary', label: 'Summary' },
  ]

  return (
    <div
      className={`competitor-card ${isOasis ? 'oasis-card' : ''} ${isNewcomer ? 'newcomer-card' : ''} ${isExpanded ? 'expanded' : ''}`}
      onClick={onToggle}
    >
      <div className="competitor-card-header">
        <div className="competitor-name-row">
          <h3 className="competitor-name">{competitor.name}</h3>
          {isOasis && <span className="competitor-badge">Oasis</span>}
          {isNewcomer && <span className="competitor-badge newcomer-badge">Newcomer to watch</span>}
          <span className={`competitor-type type-${competitor.type?.toLowerCase()}`}>
            {competitor.type}
          </span>
        </div>
        <div className="competitor-score-row">
          {securityScore != null && (
            <span className="competitor-score-chip">
              Security: <strong>{securityScore.toFixed(1)}</strong>
            </span>
          )}
          {productivityScore != null && (
            <span className="competitor-score-chip">
              Productivity: <strong>{productivityScore.toFixed(1)}</strong>
            </span>
          )}
        </div>
        {competitor.summary && (
          <p className="competitor-summary-preview">{competitor.summary}</p>
        )}
        <span className="competitor-expand-hint">{isExpanded ? '▲ Collapse' : '▼ More details'}</span>
      </div>
      {isExpanded && (
        <div className="competitor-card-details">
          {competitor.website && (
            <div className="competitor-detail-row">
              <span className="detail-label">Website</span>
              <a href={competitor.website} target="_blank" rel="noopener noreferrer" className="detail-link" onClick={e => e.stopPropagation()}>
                {competitor.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </a>
            </div>
          )}
          {(securityScore != null || productivityScore != null) && (
            <>
              {securityScore != null && (
                <div className="competitor-detail-row">
                  <span className="detail-label">Security score</span>
                  <span className="detail-value">{securityScore.toFixed(1)} / 10</span>
                </div>
              )}
              {productivityScore != null && (
                <div className="competitor-detail-row">
                  <span className="detail-label">Productivity score</span>
                  <span className="detail-value">{productivityScore.toFixed(1)} / 10</span>
                </div>
              )}
            </>
          )}
          {fields.map(({ key, label }) => {
            const value = competitor[key]
            if (!value) return null
            return (
              <div key={key} className="competitor-detail-row">
                <span className="detail-label">{label}</span>
                <span className="detail-value">{value}</span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Competitors
