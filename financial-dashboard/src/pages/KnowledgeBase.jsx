import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  KNOWLEDGE_BASE_ENTRIES,
  KNOWLEDGE_BASE_CATEGORIES,
} from '../data/knowledgeBaseEntries'
import './Page.css'
import './KnowledgeBase.css'

function entryMatchesSearch(entry, q) {
  if (!q.trim()) return true
  const s = q.toLowerCase()
  const blob = [
    entry.title,
    entry.description,
    entry.category,
    ...(entry.keywords || []),
  ]
    .join(' ')
    .toLowerCase()
  return blob.includes(s)
}

function KnowledgeBase() {
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [search, setSearch] = useState('')

  const countsByCategory = useMemo(() => {
    const m = { all: KNOWLEDGE_BASE_ENTRIES.length }
    KNOWLEDGE_BASE_CATEGORIES.forEach((c) => {
      m[c] = KNOWLEDGE_BASE_ENTRIES.filter((e) => e.category === c).length
    })
    return m
  }, [])

  const filtered = useMemo(() => {
    return KNOWLEDGE_BASE_ENTRIES.filter((e) => {
      const catOk = categoryFilter === 'all' || e.category === categoryFilter
      return catOk && entryMatchesSearch(e, search)
    })
  }, [categoryFilter, search])

  return (
    <div className="page" id="knowledge-base">
      <div className="page-header">
        <h1>Knowledge base</h1>
        <p className="page-subtitle">
          Search and browse GTM, finance, product, and technical reference pages. Top-level shortcuts for NPS and
          HITL stay in the table of contents.
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
              <Link key={entry.path} to={entry.path} className="kb-card">
                <span className="kb-card-category">{entry.category}</span>
                <span className="kb-card-title">{entry.title}</span>
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
