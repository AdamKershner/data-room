import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SOP_PAGE, SOP_CATEGORIES, SOPS, sopMatchesQuery, getSopReviewStatus, SOP_REVIEW_STATUS } from '../data/sopContent'
import { formatCardTitle } from '../utils/formatCardTitle'
import { SopReviewStatusBadge } from '../components/SopReviewStatusBadge'
import './Page.css'
import './KnowledgeBase.css'
import './Sops.css'

function Sops() {
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [search, setSearch] = useState('')

  const countsByCategory = useMemo(() => {
    const m = { all: SOPS.length }
    SOP_CATEGORIES.forEach((c) => {
      m[c] = SOPS.filter((s) => s.category === c).length
    })
    return m
  }, [])

  const countsByStatus = useMemo(() => {
    const ready = SOPS.filter((s) => getSopReviewStatus(s) === SOP_REVIEW_STATUS.ready).length
    return {
      all: SOPS.length,
      ready,
      inProgress: SOPS.length - ready,
    }
  }, [])

  const filtered = useMemo(() => {
    let pool = categoryFilter === 'all' ? SOPS : SOPS.filter((s) => s.category === categoryFilter)
    if (statusFilter === SOP_REVIEW_STATUS.ready) {
      pool = pool.filter((s) => getSopReviewStatus(s) === SOP_REVIEW_STATUS.ready)
    } else if (statusFilter === SOP_REVIEW_STATUS.inProgress) {
      pool = pool.filter((s) => getSopReviewStatus(s) === SOP_REVIEW_STATUS.inProgress)
    }
    return pool.filter((s) => sopMatchesQuery(s, search))
  }, [categoryFilter, statusFilter, search])

  return (
    <div className="page sops-page" id="sops">
      <div className="page-header">
        <h1>{SOP_PAGE.title}</h1>
        <p className="page-subtitle">{SOP_PAGE.subtitle}</p>
        {SOP_PAGE.freshnessNote && (
          <p className="sop-freshness-note">{SOP_PAGE.freshnessNote}</p>
        )}
      </div>

      <section className="page-section kb-filters">
        <div className="content-block">
          <div className="kb-filter-row">
            <div className="kb-filter-group">
              <span className="kb-filter-group-label">Category</span>
              <div className="kb-filter-buttons" role="group" aria-label="Filter by SOP category">
                <button
                  type="button"
                  className={`kb-filter-btn ${categoryFilter === 'all' ? 'kb-filter-btn--active' : ''}`}
                  onClick={() => setCategoryFilter('all')}
                >
                  All ({countsByCategory.all})
                </button>
                {SOP_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`kb-filter-btn ${categoryFilter === cat ? 'kb-filter-btn--active' : ''}`}
                    onClick={() => setCategoryFilter(cat)}
                  >
                    {cat} ({countsByCategory[cat]})
                  </button>
                ))}
              </div>
            </div>
            {countsByStatus.inProgress > 0 && (
            <div className="kb-filter-group">
              <span className="kb-filter-group-label">Status</span>
              <div className="kb-filter-buttons" role="group" aria-label="Filter by SOP review status">
                <button
                  type="button"
                  className={`kb-filter-btn ${statusFilter === 'all' ? 'kb-filter-btn--active' : ''}`}
                  onClick={() => setStatusFilter('all')}
                >
                  All ({countsByStatus.all})
                </button>
                <button
                  type="button"
                  className={`kb-filter-btn ${statusFilter === SOP_REVIEW_STATUS.ready ? 'kb-filter-btn--active' : ''}`}
                  onClick={() => setStatusFilter(SOP_REVIEW_STATUS.ready)}
                >
                  Ready for review ({countsByStatus.ready})
                </button>
                <button
                  type="button"
                  className={`kb-filter-btn ${statusFilter === SOP_REVIEW_STATUS.inProgress ? 'kb-filter-btn--active' : ''}`}
                  onClick={() => setStatusFilter(SOP_REVIEW_STATUS.inProgress)}
                >
                  Updates in progress ({countsByStatus.inProgress})
                </button>
              </div>
            </div>
            )}
            <div className="kb-filter-group kb-search-group">
              <label htmlFor="sops-search">Search</label>
              <input
                id="sops-search"
                type="search"
                className="kb-search-input"
                placeholder="Search SOPs by title, topic, or keyword…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-block">
          <div className="kb-grid">
            {filtered.map((sop) => (
              <Link
                key={sop.id}
                to={sop.href || `/sops/${sop.id}`}
                className="kb-card"
                aria-label={`SOP ${sop.number}: ${sop.title}. ${getSopReviewStatus(sop) === SOP_REVIEW_STATUS.ready ? 'Ready for review' : 'Updates in progress'}`}
              >
                <span className="sop-card-topline">
                  <span className="kb-card-category">{sop.category}</span>
                  <SopReviewStatusBadge number={sop.number} />
                </span>
                <span className="kb-card-title" title={sop.title}>
                  {formatCardTitle(`SOP ${sop.number}: ${sop.title}`)}
                </span>
                <span className="kb-card-desc">{sop.description}</span>
                <span className="sop-card-meta">
                  {sop.owner ? `Owner: ${sop.owner}` : `Who: ${sop.who}`}
                </span>
                {sop.format === 'checklist' && (
                  <span className="sop-card-format">Checklist</span>
                )}
                {sop.format === 'playbook' && (
                  <span className="sop-card-format sop-card-format--playbook">Playbook</span>
                )}
                <span className="kb-card-path">{sop.href || `/sops/${sop.id}`}</span>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="kb-empty">No SOPs match your search. Try another keyword or set category to All.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Sops
