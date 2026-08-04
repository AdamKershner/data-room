import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Battlecards.css'
import {
  COMPANY_GROUPS,
  MARKET_MAP_CATEGORIES,
  countByMarketFragment,
  filterCompanies,
  getCompanies,
} from '../data/kahanaCompanyDatabase'

function Field({ label, value, emphasize }) {
  if (value == null || value === '') return null
  const isTbd = typeof value === 'string' && value.startsWith('TBD')
  return (
    <div className={`battlecard-field${isTbd ? ' is-tbd' : ''}${emphasize ? ' is-emphasis' : ''}`}>
      <span className="battlecard-field-label">{label}</span>
      <p className="battlecard-field-value">{value}</p>
    </div>
  )
}

function BulletList({ items, className = '' }) {
  if (!items?.length) return null
  return (
    <ul className={`battlecard-bullet-list ${className}`.trim()}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function PointList({ points, variant }) {
  if (!points?.length) return null
  return (
    <ul className={`battlecard-point-list is-${variant}`}>
      {points.map((p) => (
        <li key={p.title}>
          <strong>{p.title}.</strong> {p.detail}
        </li>
      ))}
    </ul>
  )
}

function MarketCategoryBadges({ card }) {
  const hasMarket = card.primaryMarketLabel || (card.secondaryMarketLabels?.length > 0)
  if (!hasMarket && !card.sizeTierLabel && !card.roleTagLabel) {
    return <p className="battlecard-meta">{card.groupLabel}</p>
  }
  return (
    <div className="battlecard-market-cats" aria-label="Categories and size">
      {card.primaryMarketLabel && (
        <span className="battlecard-market-chip is-primary" title="Primary Market Map category">
          {card.primaryMarketLabel}
        </span>
      )}
      {(card.secondaryMarketLabels ?? []).map((label) => (
        <span
          key={label}
          className="battlecard-market-chip is-secondary"
          title="Secondary Market Map category"
        >
          {label}
        </span>
      ))}
      {!hasMarket && card.roleTagLabel && (
        <span className="battlecard-market-chip is-role" title="Role tag">
          {card.roleTagLabel}
        </span>
      )}
      {card.sizeTierLabel && (
        <span
          className={`battlecard-market-chip is-size is-size-${card.sizeTier || 'unknown'}`}
          title="Size tier"
        >
          {card.sizeTierLabel}
        </span>
      )}
    </div>
  )
}

function CompanyLandscape() {
  const allCards = useMemo(() => getCompanies(), [])
  const [groupId, setGroupId] = useState('all')
  const [marketFragmentId, setMarketFragmentId] = useState('all')
  const [query, setQuery] = useState('')
  const [openId, setOpenId] = useState(null)

  const marketCounts = useMemo(() => countByMarketFragment(allCards), [allCards])

  const visible = useMemo(
    () => filterCompanies(allCards, { groupId, marketFragmentId, query }),
    [allCards, groupId, marketFragmentId, query],
  )

  const researchedCount = useMemo(
    () => allCards.filter((c) => c.research).length,
    [allCards],
  )

  return (
    <div className="page battlecards-page">
      <div className="page-header">
        <h1>Company Landscape</h1>
        <p className="battlecards-subtitle">
          Facts on peer platforms — same categories as the{' '}
          <Link to="/fragment-capture">Market Map</Link>. Cards include size tier
          (Incumbent / Challenger / Niche). For how Kahana relates to the creator stack,
          see the <Link to="/glossary">Glossary</Link>.
        </p>
        {researchedCount > 0 && (
          <p className="battlecards-wip-note">
            {researchedCount} companies have enhanced research (description, scale, benefits,
            weaknesses). Core fragments complete through Series/Films; Ebook also covers public /
            library sources (Google Books, Project Gutenberg, Internet Archive).
          </p>
        )}
      </div>

      <section className="page-section battlecards-find-section" aria-label="Find companies">
        <div className="battlecards-search-hero">
          <label className="battlecards-search-hero-label" htmlFor="company-landscape-search">
            Search companies
          </label>
          <input
            id="company-landscape-search"
            type="search"
            className="battlecards-search-hero-input"
            placeholder="Search by name, category, benefit, or weakness…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="battlecards-filter-block">
          <p className="battlecards-filter-heading">Market Map category</p>
          <div className="battlecards-chip-row" role="group" aria-label="Filter by Market Map category">
            <button
              type="button"
              className={`battlecards-chip${marketFragmentId === 'all' ? ' is-active' : ''}`}
              onClick={() => setMarketFragmentId('all')}
            >
              All <span className="battlecards-chip-count">{marketCounts.all}</span>
            </button>
            {MARKET_MAP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`battlecards-chip${marketFragmentId === cat.id ? ' is-active' : ''}`}
                onClick={() => setMarketFragmentId(cat.id)}
              >
                {cat.label}{' '}
                <span className="battlecards-chip-count">{marketCounts[cat.id] ?? 0}</span>
              </button>
            ))}
          </div>
        </div>

        {COMPANY_GROUPS.length > 1 && (
          <div className="battlecards-filter-block">
            <p className="battlecards-filter-heading">Group</p>
            <div className="battlecards-chip-row" role="group" aria-label="Filter by group">
              {COMPANY_GROUPS.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className={`battlecards-chip is-subtle${groupId === g.id ? ' is-active' : ''}`}
                  onClick={() => setGroupId(g.id)}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="battlecards-result-meta">
          Showing {visible.length} of {allCards.length} companies
        </p>
      </section>

      <section className="page-section">
        <div className="battlecards-grid">
          {visible.map((card) => {
            const isOpen = openId === card.id
            const hasResearch = Boolean(card.research)
            return (
              <article
                key={card.id}
                className={`battlecard${isOpen ? ' is-open' : ''}${hasResearch ? ' has-research' : ''}`}
                id={`company-${card.id}`}
              >
                <button
                  type="button"
                  className="battlecard-header"
                  onClick={() => setOpenId(isOpen ? null : card.id)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <h2 className="battlecard-title">{card.name}</h2>
                    <MarketCategoryBadges card={card} />
                  </div>
                  <span className="battlecard-toggle">{isOpen ? '−' : '+'}</span>
                </button>

                <div className="battlecard-summary">
                  {card.description && <Field label="About" value={card.description} emphasize />}
                  {!card.description && card.theyDo && (
                    <Field label="What they do" value={card.theyDo} emphasize />
                  )}
                  {card.website && (
                    <p className="battlecard-website">
                      <a href={card.website} target="_blank" rel="noopener noreferrer">
                        {card.website.replace(/^https?:\/\//, '')}
                      </a>
                    </p>
                  )}
                </div>

                {isOpen && (
                  <div className="battlecard-body">
                    {hasResearch ? (
                      <>
                        {card.scaleFacts?.length > 0 && (
                          <>
                            <h3 className="battlecard-body-heading">Recent scale / facts</h3>
                            <BulletList items={card.scaleFacts} />
                          </>
                        )}
                        {card.benefits?.length > 0 && (
                          <>
                            <h3 className="battlecard-body-heading">Key benefits</h3>
                            <PointList points={card.benefits} variant="benefits" />
                          </>
                        )}
                        {card.weaknesses?.length > 0 && (
                          <>
                            <h3 className="battlecard-body-heading">Common weaknesses</h3>
                            <PointList points={card.weaknesses} variant="weaknesses" />
                          </>
                        )}
                        {(card.sizeTierLabel || card.roleTagLabel) && (
                          <>
                            <h3 className="battlecard-body-heading">Classification</h3>
                            <Field label="Size tier" value={card.sizeTierLabel} emphasize />
                            <Field label="Role" value={card.roleTagLabel} />
                            {card.primaryMarketLabel && (
                              <Field label="Primary category" value={card.primaryMarketLabel} />
                            )}
                            {card.secondaryMarketLabels?.length > 0 && (
                              <Field
                                label="Secondary"
                                value={card.secondaryMarketLabels.join(', ')}
                              />
                            )}
                          </>
                        )}
                        {card.researchSources?.length > 0 && (
                          <>
                            <h3 className="battlecard-body-heading">Sources</h3>
                            <ul className="battlecard-sources-list">
                              {card.researchSources.map((href) => (
                                <li key={href}>
                                  <a href={href} target="_blank" rel="noopener noreferrer">
                                    {href.replace(/^https?:\/\//, '').split('/')[0]}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {(card.primaryMarketLabel || card.secondaryMarketLabels?.length > 0) && (
                          <>
                            <h3 className="battlecard-body-heading">Market Map categories</h3>
                            <Field label="Primary" value={card.primaryMarketLabel} emphasize />
                            {card.secondaryMarketLabels?.length > 0 && (
                              <Field
                                label="Secondary"
                                value={card.secondaryMarketLabels.join(', ')}
                              />
                            )}
                          </>
                        )}

                        {(card.sizeTierLabel || card.roleTagLabel) && (
                          <>
                            <h3 className="battlecard-body-heading">Classification</h3>
                            <Field label="Size tier" value={card.sizeTierLabel} emphasize />
                            <Field label="Role" value={card.roleTagLabel} />
                          </>
                        )}

                        {card.description && card.theyDo && (
                          <Field label="What they do" value={card.theyDo} />
                        )}
                        {card.stackRole && <Field label="Role in the stack" value={card.stackRole} />}

                        <h3 className="battlecard-body-heading">Scale</h3>
                        <div className="battlecard-columns">
                          <Field label="Users / audience" value={card.usersLabel} />
                          <Field label="Revenue / business" value={card.revenueLabel} />
                        </div>
                        <div className="battlecard-columns">
                          <Field label="Demand side" value={card.demandLabel} />
                          <Field label="Supply side" value={card.supplyLabel} />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default CompanyLandscape
