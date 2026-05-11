import React, { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { searchDataRoomEntries } from '../data/dataRoomSearchIndex'
import { formatCardTitle } from '../utils/formatCardTitle'
import './DataRoomSearch.css'

/**
 * @param {object} props
 * @param {string} [props.placeholder]
 * @param {string | null} [props.businessFunction] — when set, results are limited to this function
 * @param {(path: string) => void} [props.onNavigate] — called after user picks a result (e.g. close modal)
 * @param {number} [props.maxResults]
 * @param {string} [props.className]
 * @param {boolean} [props.showKbLink]
 * @param {boolean} [props.compactResults] — smaller max-height for embedded panels
 * @param {boolean} [props.autoFocus]
 * @param {boolean} [props.showAllWhenEmpty] — if true, list all matches for the function when query is empty (galleries)
 */
export function DataRoomSearchPanel({
  placeholder = 'Search by title, topic, or what you are looking for…',
  businessFunction = null,
  onNavigate,
  maxResults = 20,
  className = '',
  showKbLink = false,
  compactResults = false,
  autoFocus = false,
  showAllWhenEmpty = false,
}) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const baseId = useId()
  const inputId = `${baseId}-drs-input`

  const results = useMemo(() => {
    const q = query.trim()
    if (!showAllWhenEmpty && !q) return []
    const list = searchDataRoomEntries(query, {
      businessFunction: businessFunction || undefined,
    })
    return list.slice(0, maxResults)
  }, [query, businessFunction, maxResults, showAllWhenEmpty])

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus()
    }
  }, [autoFocus])

  return (
    <div className={`drs-panel ${className}`.trim()}>
      <label htmlFor={inputId} className="drs-label">
        Search the data room
      </label>
      <input
        ref={inputRef}
        id={inputId}
        type="search"
        className="drs-input"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />
      {!showAllWhenEmpty && !query.trim() && (
        <p className="drs-hint">Start typing to search titles, descriptions, and keywords across the data room.</p>
      )}
      {(showAllWhenEmpty || query.trim() !== '' || results.length > 0) && (
        <ul
          className={`drs-results ${compactResults ? 'drs-results--inline' : ''}`.trim()}
          role="listbox"
          aria-label="Search results"
        >
          {results.length === 0 && query.trim() !== '' && (
            <li className="drs-empty" role="option">
              No pages match. Try different words or browse by function below.
            </li>
          )}
          {showAllWhenEmpty && !query.trim() && results.length === 0 && (
            <li className="drs-empty" role="option">
              No pages in this category yet.
            </li>
          )}
          {results.map((entry) => (
            <li key={entry.path} role="none">
              <Link
                to={entry.path}
                className="drs-row"
                role="option"
                aria-label={entry.title}
                onClick={() => onNavigate?.(entry.path)}
              >
                <span className="drs-row-title" title={entry.title}>
                  {formatCardTitle(entry.title)}
                </span>
                <div className="drs-row-meta">
                  <span className="drs-row-badge">{entry.businessFunction}</span>
                  <span className="drs-row-path">{entry.path}</span>
                </div>
                {entry.description && <p className="drs-row-desc">{entry.description}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {showKbLink && (
        <p className="drs-kb-link">
          <Link to="/knowledge-base" onClick={() => onNavigate?.('/knowledge-base')}>
            Open full knowledge base
          </Link>
        </p>
      )}
    </div>
  )
}

/**
 * @param {object} props
 * @param {boolean} props.open
 * @param {() => void} props.onClose
 */
export function DataRoomSearchModal({ open, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (ev) => {
      if (ev.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="drs-modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="drs-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drs-modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="drs-modal-header">
          <h2 id="drs-modal-title" className="drs-modal-title">
            Search the data room
          </h2>
          <button type="button" className="drs-modal-close" onClick={onClose} aria-label="Close search">
            ×
          </button>
        </div>
        <div className="drs-modal-body">
          <DataRoomSearchPanel
            onNavigate={() => onClose()}
            maxResults={60}
            showKbLink
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}
