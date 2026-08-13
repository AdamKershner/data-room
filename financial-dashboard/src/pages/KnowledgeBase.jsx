import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  KNOWLEDGE_BASE_ENTRIES,
  KNOWLEDGE_BASE_CATEGORIES,
  KNOWLEDGE_BASE_ACTIVE_ENTRIES,
} from '../data/knowledgeBaseEntries'
import { dataRoomEntryMatchesQuery } from '../data/dataRoomSearchIndex'
import { formatCardTitle } from '../utils/formatCardTitle'
import './Page.css'
import './KnowledgeBase.css'

function KnowledgeBase() {
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [search, setSearch] = useState('')

  const countsByCategory = useMemo(() => {
    const m = { all: KNOWLEDGE_BASE_ACTIVE_ENTRIES.length }
    KNOWLEDGE_BASE_CATEGORIES.forEach((c) => {
      m[c] = KNOWLEDGE_BASE_ACTIVE_ENTRIES.filter((e) => e.category === c).length
    })
    return m
  }, [])

  const filtered = useMemo(() => {
    const pool =
      categoryFilter === 'all'
        ? KNOWLEDGE_BASE_ACTIVE_ENTRIES
        : KNOWLEDGE_BASE_ACTIVE_ENTRIES.filter((e) => e.category === categoryFilter)

    return pool.filter((e) =>
      dataRoomEntryMatchesQuery({ ...e, businessFunction: e.category }, search)
    )
  }, [categoryFilter, search])

  return (
    <div className="page" id="knowledge-base">
      <div className="page-header">
        <h1>Knowledge base</h1>
        <p className="page-subtitle">
          Kahana platform, GTM, finance, product, HR, and technical reference for scaling the library.
        </p>
      </div>

      <section className="page-section kb-filters">
        <div className="content-block">
          <div className="kb-filter-row">
            <div className="kb-filter-group">
              <span className="kb-filter-group-label">Category</span>
              <div className="kb-filter-buttons" role="group" aria-label="Filter by category">
                <button
                  type="button"
                  className={`kb-filter-btn ${categoryFilter === 'all' ? 'kb-filter-btn--active' : ''}`}
                  onClick={() => setCategoryFilter('all')}
                >
                  All ({countsByCategory.all})
                </button>
                {KNOWLEDGE_BASE_CATEGORIES.map((cat) => (
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
            <div className="kb-filter-group kb-search-group">
              <label htmlFor="kb-search">Search</label>
              <input
                id="kb-search"
                type="search"
                className="kb-search-input"
                placeholder="Search titles, topics, keywords…"
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
            {filtered.map((entry) => (
              <Link key={entry.path} to={entry.path} className="kb-card" aria-label={entry.title}>
                <span className="kb-card-category">{entry.category}</span>
                <span className="kb-card-title" title={entry.title}>
                  {formatCardTitle(entry.title)}
                </span>
                <span className="kb-card-desc">{entry.description}</span>
                <span className="kb-card-path">{entry.path}</span>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="kb-empty">No pages match your search. Try another keyword or set category to All.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default KnowledgeBase
