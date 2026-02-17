import React, { useState, useEffect } from 'react'
import './Page.css'
import './Competitors.css'

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
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    fetch('/browserComparisonData.csv')
      .then(res => res.ok ? res.text() : Promise.reject(new Error('Failed to load data')))
      .then(text => {
        setCompetitors(parseCSV(text))
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setCompetitors([])
      })
      .finally(() => setLoading(false))
  }, [])

  const filtered = competitors.filter(c => {
    const matchType = filter === 'all' || filter === 'newcomer'
      ? (filter === 'newcomer' ? (c.newcomer || '').toLowerCase() === 'yes' : true)
      : c.type === filter
    const matchSearch = !search || 
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      (c.summary && c.summary.toLowerCase().includes(search.toLowerCase())) ||
      (c.uniqueStrength && c.uniqueStrength.toLowerCase().includes(search.toLowerCase()))
    return matchType && matchSearch
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

function CompetitorCard({ competitor, isExpanded, onToggle, isOasis }) {
  const isNewcomer = (competitor.newcomer || '').toLowerCase() === 'yes'
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
