import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  COMPETITORS_PAGE,
  CUSTOMER_STACK_REPLACED,
  THESIS_LEGEND,
  COMPETITOR_CATEGORIES,
  KAHANA_REFERENCE,
  KAHANA_COMPETITORS,
  getCategoryLabel,
  getMatrixRows,
} from '../data/kahanaCompetitorsData'
import './Page.css'
import './OperatingSystem.css'
import './KahanaCompetitors.css'

function thesisClass(level) {
  if (level === 'n/a') return 'na'
  return level
}

function ThesisBadge({ dimension, level }) {
  const label = THESIS_LEGEND.find((t) => t.id === dimension)?.label || dimension
  const display = level === 'n/a' ? 'n/a' : level
  return (
    <span className={`kc-thesis-badge kc-thesis-badge--${thesisClass(level)}`} title={label}>
      {label}: {display}
    </span>
  )
}

function DataTable({ headers, rows }) {
  return (
    <div className="os-table-wrap">
      <table className="os-table">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              {row.cells.map((cell, i) => (
                <td key={`${row.key}-${i}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CompetitorCard({ competitor }) {
  const isKahana = competitor.isKahana
  return (
    <article className={`kc-card${isKahana ? ' kc-card--kahana' : ''}`}>
      <span className="kc-category">{getCategoryLabel(competitor.category)}</span>
      <div className="kc-card-header">
        <h3>{competitor.name}</h3>
        {competitor.website && (
          <a href={competitor.website} target="_blank" rel="noopener noreferrer">
            Visit →
          </a>
        )}
      </div>
      <p className="kc-desc">{competitor.description}</p>
      <div className="kc-thesis">
        {THESIS_LEGEND.map((dim) => (
          <ThesisBadge key={dim.id} dimension={dim.id} level={competitor.thesis[dim.id]} />
        ))}
      </div>
      <p className="kc-angle">
        <strong>vs Kahana:</strong> {competitor.kahanaAngle}
      </p>
    </article>
  )
}

function KahanaCompetitors() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [showMatrix, setShowMatrix] = useState(false)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return KAHANA_COMPETITORS.filter((c) => {
      if (category !== 'all' && c.category !== category) return false
      if (!q) return true
      const blob = [c.name, c.description, c.kahanaAngle, getCategoryLabel(c.category)]
        .join(' ')
        .toLowerCase()
      return blob.includes(q)
    })
  }, [category, search])

  const matrixRows = getMatrixRows()

  return (
    <div className="page" id="kahana-competitors">
      <div className="page-header">
        <h1>{COMPETITORS_PAGE.title}</h1>
        <p className="page-subtitle">{COMPETITORS_PAGE.subtitle}</p>
      </div>

      <section className="page-section">
        <div className="kc-hero">
          <p>
            Kahana is the <strong>Amazon of digital products</strong> operationally — and aspires to become
            Wan Shi Tong&apos;s Library for people: a trusted place to discover curated knowledge from experts,
            with videos, files, images, PDFs, and text.
          </p>
          <p className="kc-stack">
            Customer stack Kahana replaces: {CUSTOMER_STACK_REPLACED}
          </p>
        </div>
      </section>

      <section className="page-section" id="thesis-legend">
        <h2>Comparison dimensions</h2>
        <div className="content-block kc-legend">
          <dl>
            {THESIS_LEGEND.map((item) => (
              <React.Fragment key={item.id}>
                <dt>{item.label}</dt>
                <dd>{item.description}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </section>

      <section className="page-section" id="kahana-reference">
        <h2>Kahana</h2>
        <div className="content-block">
          <CompetitorCard competitor={KAHANA_REFERENCE} />
        </div>
      </section>

      <section className="page-section" id="competitor-list">
        <h2>Competitors</h2>
        <div className="content-block">
          <div className="kc-filters" role="tablist" aria-label="Filter by category">
            {COMPETITOR_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={category === cat.id}
                className={`kc-chip${category === cat.id ? ' kc-chip--active' : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <input
            type="search"
            className="kc-search"
            placeholder="Search competitors…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search competitors"
          />
          {filtered.length === 0 ? (
            <p className="kc-empty">No competitors match your filters.</p>
          ) : (
            <div className="kc-grid">
              {filtered.map((c) => (
                <CompetitorCard key={c.id} competitor={c} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="page-section" id="comparison-matrix">
        <h2>Comparison matrix</h2>
        <div className="content-block">
          <div className="kc-matrix-toggle">
            <button type="button" onClick={() => setShowMatrix((v) => !v)}>
              {showMatrix ? 'Hide matrix' : 'Show top competitors matrix'}
            </button>
          </div>
          {showMatrix && (
            <DataTable
              headers={['Competitor', 'Discovery', 'Storefront', 'Knowledge depth', 'Trust']}
              rows={matrixRows.map((c) => ({
                key: c.id,
                cells: [
                  <span
                    key={`n-${c.id}`}
                    className={c.isKahana ? 'kc-matrix-name--kahana' : undefined}
                  >
                    {c.name}
                  </span>,
                  c.thesis.discovery,
                  c.thesis.storefront,
                  c.thesis.knowledgeDepth,
                  c.thesis.trust,
                ],
              }))}
            />
          )}
        </div>
      </section>

      <section className="page-section" id="related">
        <h2>Related</h2>
        <div className="content-block kc-footer-links">
          <p>
            <Link to="/kahana">Kahana Platform Overview</Link> — positioning and competitive frame summary
          </p>
          <p>
            <Link to="/competitors">Oasis Browser competitor database (archived)</Link> — enterprise and
            consumer browser competitors (separate product)
          </p>
          <p>
            Markdown source: <code>Kahana/11-competitive-landscape.md</code> in the data room repo
          </p>
        </div>
      </section>
    </div>
  )
}

export default KahanaCompetitors
