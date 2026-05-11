import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BUSINESS_FUNCTIONS, searchDataRoomEntries } from '../data/dataRoomSearchIndex'
import { formatCardTitle } from '../utils/formatCardTitle'

const BLURBS = {
  Marketing: 'Positioning, content, social, and market context.',
  Sales: 'GTM, ICPs, and revenue motions.',
  Product: 'Vision, users, charter, PMF signals, and weekly narrative.',
  HR: 'People, onboarding, directory, and ways of working.',
  Technical: 'Engineering delivery, releases, security, and compliance checklists.',
  Finance: 'Plan, unit economics, and archived quarterly updates.',
}

function FunctionColumn({ fn }) {
  const [q, setQ] = useState('')
  const results = useMemo(() => {
    return searchDataRoomEntries(q, { businessFunction: fn }).slice(0, 36)
  }, [q, fn])

  return (
    <div className="exec-bf-col">
      <h3 className="exec-bf-col-title">{fn}</h3>
      <p className="exec-bf-col-blurb">{BLURBS[fn]}</p>
      <label className="exec-bf-search-label" htmlFor={`exec-bf-search-${fn}`}>
        Filter pages in {fn}
      </label>
      <input
        id={`exec-bf-search-${fn}`}
        type="search"
        className="exec-bf-search"
        placeholder={`Search ${fn} pages…`}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoComplete="off"
      />
      <div className="exec-bf-gallery" role="list">
        {results.map((entry) => (
          <Link
            key={entry.path}
            to={entry.path}
            className="exec-bf-card"
            role="listitem"
            title={entry.title}
            aria-label={entry.title}
          >
            <span className="exec-bf-card-title">{formatCardTitle(entry.title)}</span>
            <span className="exec-bf-card-desc">{entry.description}</span>
            <span className="exec-bf-card-path">{entry.path}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function BusinessFunctionExploreGrid() {
  return (
    <div className="exec-bf-section" aria-labelledby="exec-bf-heading">
      <h3 id="exec-bf-heading" className="exec-bf-section-title">
        Browse by business function
      </h3>
      <p className="exec-bf-section-intro">
        Each area lists data-room pages tagged for that function. Use the field in each column to narrow the
        gallery.
      </p>
      <div className="exec-bf-grid">
        {BUSINESS_FUNCTIONS.map((fn) => (
          <FunctionColumn key={fn} fn={fn} />
        ))}
      </div>
    </div>
  )
}
