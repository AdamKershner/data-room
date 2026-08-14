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
import { buildKahanaComparisonRows } from '../data/kahanaFragmentPresence'
import {
  COVERAGE_COLUMN_DEFINITIONS,
  COVERAGE_EASY_BAR,
} from '../data/companyFragmentCoverage'
import {
  COMPANY_LANDSCAPE_GLOSSARY,
  COMPANY_LANDSCAPE_METHOD_BLOCKS,
  COMPANY_LANDSCAPE_SUBTITLE_LEAD,
} from '../data/companyLandscapeAdvisorCopy'

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

function CardIcon({ name, className = '' }) {
  const paths = {
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10v6" />
        <path d="M12 7.5h.01" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 17V10" />
        <path d="M12 17V7" />
        <path d="M16 17v-4" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l2.5 2.5L16 9.5" />
      </>
    ),
    alert: (
      <>
        <path d="M12 3l9 16H3L12 3z" />
        <path d="M12 10v4" />
        <path d="M12 16.5h.01" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5.93" />
        <path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.4a5 5 0 0 0 7.07 7.07L14 18.07" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6" />
        <path d="M10 14L20 4" />
        <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
      </>
    ),
    chevron: (
      <path d="M6 9l6 6 6-6" />
    ),
    tag: (
      <>
        <path d="M20.5 13.5L12 22l-8.5-8.5a2 2 0 0 1 0-2.8L11.2 3H20v8.8a2 2 0 0 1-.5 1.7z" />
        <circle cx="15.5" cy="7.5" r="1.2" />
      </>
    ),
    dot: <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" />,
  }

  return (
    <svg
      className={`battlecard-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  )
}

function ResearchCallout({ variant, title, icon, children }) {
  if (!children) return null
  return (
    <section className={`battlecard-callout is-${variant}`}>
      {title && (
        <div className="battlecard-callout-head">
          {icon && <CardIcon name={icon} className="battlecard-callout-icon" />}
          <h3 className="battlecard-callout-title">{title}</h3>
        </div>
      )}
      <div className="battlecard-callout-body">{children}</div>
    </section>
  )
}

function FactList({ items }) {
  if (!items?.length) return null
  return (
    <ul className="battlecard-fact-list">
      {items.map((item) => (
        <li key={item} className="battlecard-fact-item">
          <CardIcon name="dot" className="battlecard-fact-icon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PointList({ points, variant }) {
  if (!points?.length) return null
  const icon = variant === 'benefits' ? 'check' : 'alert'
  return (
    <ul className={`battlecard-point-stack is-${variant}`}>
      {points.map((p) => (
        <li key={p.title} className="battlecard-point-item">
          <div className="battlecard-point-item-head">
            <CardIcon name={icon} className="battlecard-point-item-icon" />
            <strong className="battlecard-point-item-title">{p.title}</strong>
          </div>
          {p.detail && <p className="battlecard-point-item-detail">{p.detail}</p>}
        </li>
      ))}
    </ul>
  )
}

function SourcePills({ sources }) {
  if (!sources?.length) return null
  return (
    <ul className="battlecard-source-pills">
      {sources.map((href) => {
        const domain = href.replace(/^https?:\/\//, '').split('/')[0]
        return (
          <li key={href}>
            <a
              className="battlecard-source-pill"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardIcon name="link" className="battlecard-source-pill-icon" />
              {domain}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function PresenceCell({ value }) {
  const supported = value === 'yes'
  return (
    <span
      className={`battlecard-presence is-${supported ? 'yes' : 'no'}`}
      title={supported ? 'Supported — first-class product job' : 'Not a first-class product job'}
    >
      {supported ? 'Yes' : '—'}
    </span>
  )
}

/**
 * Content types as columns. Kahana supports all; company row shows overlap.
 */
function KahanaComparisonChart({ card }) {
  const modalities = useMemo(() => buildKahanaComparisonRows(card), [card])
  const companyName = card.name || 'Them'

  return (
    <ResearchCallout variant="compare" title={`Coverage: Kahana vs ${companyName}`} icon="chart">
      <p className="battlecard-compare-note">
        Columns are content types Kahana aims to unify in one Aura-powered library.
        Kahana supports all of them; {companyName} shows which of those it supports
        as a <strong>first-class, easy product job</strong> — not something you could
        theoretically find if you hunt. Hover a column name for the definition.
      </p>
      <div className="battlecard-compare-scroll">
        <table className="battlecard-compare-table is-modality-columns">
          <thead>
            <tr>
              <th scope="col" className="battlecard-compare-corner">
                Platform
              </th>
              {modalities.map((col) => (
                <th
                  key={col.fragmentId}
                  scope="col"
                  title={[col.definition, col.yesExample && `Yes: ${col.yesExample}`, col.noExample && `No: ${col.noExample}`]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="is-kahana-row">
              <th scope="row">Kahana</th>
              {modalities.map((col) => (
                <td key={`kahana-${col.fragmentId}`}>
                  <PresenceCell value={col.kahana} />
                </td>
              ))}
            </tr>
            <tr className="is-company-row">
              <th scope="row">{companyName}</th>
              {modalities.map((col) => (
                <td key={`${card.id}-${col.fragmentId}`}>
                  <PresenceCell value={col.company} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <details className="battlecard-coverage-defs">
        <summary>Column definitions</summary>
        <dl>
          {modalities.map((col) => (
            <div key={`def-${col.fragmentId}`}>
              <dt>{col.label}</dt>
              <dd>
                {col.definition}
                {col.yesExample ? ` Yes: ${col.yesExample}.` : ''}
                {col.noExample ? ` No: ${col.noExample}.` : ''}
              </dd>
            </div>
          ))}
        </dl>
      </details>
    </ResearchCallout>
  )
}

function AboutCallout({ card }) {
  const text = card.description || card.theyDo
  if (!text && !card.website) return null
  return (
    <ResearchCallout variant="about" title="About" icon="info">
      {text && <p className="battlecard-about-text">{text}</p>}
      {card.website && (
        <a
          className="battlecard-website-row"
          href={card.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardIcon name="external" className="battlecard-website-icon" />
          <span>{card.website.replace(/^https?:\/\//, '')}</span>
        </a>
      )}
    </ResearchCallout>
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
      <div className="page-header battlecards-header">
        <h1>Company Landscape</h1>
        <p className="battlecards-subtitle">
          {COMPANY_LANDSCAPE_SUBTITLE_LEAD} Same categories as the{' '}
          <Link to="/fragment-capture">Market Map</Link>. Kahana vs creator stack:{' '}
          <Link to="/glossary">Glossary</Link>.
        </p>
        {researchedCount > 0 && (
          <p className="battlecards-meta-line">
            {researchedCount} companies with enhanced research · open a card for coverage chart +
            size tier
          </p>
        )}
        <div className="battlecards-advisor-panels">
          <details className="battlecards-collapsible">
            <summary>
              <span className="battlecards-collapsible__title">Key terms</span>
              <span className="battlecards-collapsible__hint" aria-hidden="true">
                Expand
              </span>
            </summary>
            <div className="battlecards-collapsible__panel">
              <dl className="battlecards-glossary">
                {COMPANY_LANDSCAPE_GLOSSARY.map((item) => (
                  <div key={item.term} className="battlecards-glossary__row">
                    <dt>{item.term}</dt>
                    <dd>{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </details>
          <details className="battlecards-collapsible">
            <summary>
              <span className="battlecards-collapsible__title">Coverage column definitions</span>
              <span className="battlecards-collapsible__hint" aria-hidden="true">
                Expand
              </span>
            </summary>
            <div className="battlecards-collapsible__panel">
              <p className="battlecards-coverage-bar">{COVERAGE_EASY_BAR}</p>
              <dl className="battlecards-glossary">
                {Object.entries(COVERAGE_COLUMN_DEFINITIONS).map(([id, item]) => (
                  <div key={id} className="battlecards-glossary__row">
                    <dt>{item.label}</dt>
                    <dd>
                      {item.definition} <em>Yes:</em> {item.yesExample}. <em>No:</em> {item.noExample}.
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </details>
          <details className="battlecards-collapsible">
            <summary>
              <span className="battlecards-collapsible__title">How this landscape was built</span>
              <span className="battlecards-collapsible__hint" aria-hidden="true">
                Expand
              </span>
            </summary>
            <div className="battlecards-collapsible__panel">
              {COMPANY_LANDSCAPE_METHOD_BLOCKS.map((block) => (
                <div key={block.title} className="battlecards-method-block">
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
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
                  <span className={`battlecard-toggle${isOpen ? ' is-open' : ''}`}>
                    <CardIcon name="chevron" />
                  </span>
                </button>

                <div className="battlecard-summary">
                  <AboutCallout card={card} />
                </div>

                {isOpen && (
                  <div className="battlecard-body">
                    <KahanaComparisonChart card={card} />
                    {hasResearch ? (
                      <>
                        {card.scaleFacts?.length > 0 && (
                          <ResearchCallout
                            variant="scale"
                            title="Recent scale / facts"
                            icon="chart"
                          >
                            <FactList items={card.scaleFacts} />
                          </ResearchCallout>
                        )}
                        {card.benefits?.length > 0 && (
                          <ResearchCallout
                            variant="benefits"
                            title="Key benefits"
                            icon="check"
                          >
                            <PointList points={card.benefits} variant="benefits" />
                          </ResearchCallout>
                        )}
                        {card.weaknesses?.length > 0 && (
                          <ResearchCallout
                            variant="weaknesses"
                            title="Common weaknesses"
                            icon="alert"
                          >
                            <PointList points={card.weaknesses} variant="weaknesses" />
                          </ResearchCallout>
                        )}
                        {(card.sizeTierLabel ||
                          card.roleTagLabel ||
                          card.primaryMarketLabel ||
                          card.secondaryMarketLabels?.length > 0) && (
                          <ResearchCallout variant="meta" title="Classification" icon="tag">
                            <div className="battlecard-classify-chips">
                              <MarketCategoryBadges card={card} />
                            </div>
                          </ResearchCallout>
                        )}
                        {card.researchSources?.length > 0 && (
                          <ResearchCallout variant="sources" title="Sources" icon="link">
                            <SourcePills sources={card.researchSources} />
                          </ResearchCallout>
                        )}
                      </>
                    ) : (
                      <>
                        {(card.primaryMarketLabel ||
                          card.secondaryMarketLabels?.length > 0 ||
                          card.sizeTierLabel ||
                          card.roleTagLabel) && (
                          <ResearchCallout variant="meta" title="Classification" icon="tag">
                            <div className="battlecard-classify-chips">
                              <MarketCategoryBadges card={card} />
                            </div>
                          </ResearchCallout>
                        )}

                        {card.description && card.theyDo && (
                          <ResearchCallout variant="about" title="What they do" icon="info">
                            <p className="battlecard-about-text">{card.theyDo}</p>
                          </ResearchCallout>
                        )}
                        {card.stackRole && (
                          <ResearchCallout variant="meta" title="Role in the stack" icon="tag">
                            <p className="battlecard-about-text">{card.stackRole}</p>
                          </ResearchCallout>
                        )}

                        <ResearchCallout variant="scale" title="Scale" icon="chart">
                          <div className="battlecard-columns">
                            <Field label="Users / audience" value={card.usersLabel} />
                            <Field label="Revenue / business" value={card.revenueLabel} />
                          </div>
                          <div className="battlecard-columns">
                            <Field label="Demand side" value={card.demandLabel} />
                            <Field label="Supply side" value={card.supplyLabel} />
                          </div>
                        </ResearchCallout>
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
