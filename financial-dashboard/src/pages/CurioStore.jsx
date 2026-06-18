import React from 'react'
import {
  CURIO_STORE_URL,
  CURIO_STORE_PAGE,
  CURIO_HIGHLIGHTS,
  CURIO_STORE_SECTIONS,
  EXECUTIVE_SUMMARY,
  AMAZON_PARALLEL,
  COMPETITIVE_FRAME,
  PRODUCT_SURFACES,
  EXPLORE_FILTERS,
  MARKETPLACE_CATEGORIES,
  SAAS_PLANS,
  PRODUCT_LIMITATIONS,
  INFRASTRUCTURE,
  ICP_HYPOTHESES,
  JOBS_TO_BE_DONE,
  REVENUE_STREAMS,
  REVENUE_METRICS,
  EXPANSION_LEVERS,
  GROWTH_FUNNEL,
  QUARTERLY_THEMES,
  CREATOR_VALUE_SCENARIOS,
  ROADMAP_HORIZONS,
  OPERATING_CADENCE,
  NORTH_STAR_METRICS,
  DECISION_FRAMEWORK,
  RISK_REGISTER,
} from '../data/curioStoreSections'
import './Page.css'
import './CurioStore.css'

function TbdBadge() {
  return <span className="curio-tbd">TBD</span>
}

function DataTable({ headers, rows, className = '' }) {
  return (
    <div className={`curio-table-wrap ${className}`.trim()}>
      <table className="curio-table">
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

function ExecutiveSummarySection() {
  return (
    <div className="content-block">
      <blockquote className="curio-north-star">{CURIO_STORE_PAGE.northStar}</blockquote>
      {EXECUTIVE_SUMMARY.paragraphs.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      <p>
        <strong>Legal entity:</strong> {CURIO_STORE_PAGE.legalEntity}
      </p>

      <h3>Strategic pillars (2025–2026)</h3>
      <ul className="feature-list">
        {EXECUTIVE_SUMMARY.pillars.map((pillar) => (
          <li key={pillar.name}>
            <strong>{pillar.name}:</strong> {pillar.detail}
          </li>
        ))}
      </ul>

      <h3>Positioning</h3>
      <p>
        <strong>Creators:</strong> {EXECUTIVE_SUMMARY.positioning.creators}
      </p>
      <p>
        <strong>Buyers:</strong> {EXECUTIVE_SUMMARY.positioning.buyers}
      </p>

      <h3>What Curio is not</h3>
      <ul className="feature-list">
        {EXECUTIVE_SUMMARY.isNot.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Amazon parallel</h3>
      <DataTable
        headers={['Dimension', 'Amazon parallel', 'Curio expression']}
        rows={AMAZON_PARALLEL.map((row) => ({
          key: row.dimension,
          cells: [row.dimension, row.amazon, row.curio],
        }))}
      />

      <h3>Competitive frame</h3>
      <DataTable
        headers={['Competitor', 'Strength', 'Curio differentiation']}
        rows={COMPETITIVE_FRAME.map((row) => ({
          key: row.competitor,
          cells: [row.competitor, row.strength, row.differentiation],
        }))}
      />
    </div>
  )
}

function ProductTodaySection() {
  return (
    <div className="content-block">
      <p>
        Curio today is a live product at{' '}
        <a href={CURIO_STORE_URL} target="_blank" rel="noopener noreferrer">
          curio.store
        </a>{' '}
        with a public Explore marketplace, monetizable creator hubs, Linktree-style profiles, Stripe Connect
        payments, and three SaaS tiers.
      </p>

      <h3>Product surfaces</h3>
      <DataTable
        headers={['Surface', 'Route', 'Purpose']}
        rows={PRODUCT_SURFACES.map((row) => ({
          key: row.surface,
          cells: [row.surface, row.route, row.purpose],
        }))}
      />

      <h3>Explore filters (shipped)</h3>
      <ul className="feature-list">
        {EXPLORE_FILTERS.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h3>Marketplace categories (14)</h3>
      <p className="curio-category-grid">
        {MARKETPLACE_CATEGORIES.map((cat) => (
          <span key={cat} className="curio-category-chip">
            {cat}
          </span>
        ))}
      </p>

      <h3>Monetization</h3>
      <p>
        Creators connect Stripe via Stripe Connect. Buyers pay through a hub paywall. Platform application fee:{' '}
        <strong>5%</strong> on monetized transactions.
      </p>
      <ol className="curio-numbered-list">
        <li>Creator connects Stripe account</li>
        <li>Creator sets hub as monetized with pricing</li>
        <li>Buyer hits paywall on hub</li>
        <li>Payment processes via Stripe; creator receives payout minus platform fee and Stripe fees</li>
      </ol>

      <h3>SaaS plans</h3>
      <DataTable
        headers={['Feature', 'Free', 'Growth', 'Enterprise']}
        rows={SAAS_PLANS.map((row) => ({
          key: row.feature,
          cells: [row.feature, row.free, row.growth, row.enterprise],
        }))}
      />

      <h3>Current limitations (honest)</h3>
      <DataTable
        headers={['Gap', 'Impact']}
        rows={PRODUCT_LIMITATIONS.map((row) => ({
          key: row.gap,
          cells: [row.gap, row.impact],
        }))}
      />
      <p>
        Near-term priority: hub UX friction around share/monetize discoverability and upload entry points.
      </p>

      <h3>Infrastructure</h3>
      <DataTable
        headers={['Layer', 'Stack']}
        rows={INFRASTRUCTURE.map((row) => ({
          key: row.layer,
          cells: [row.layer, row.stack],
        }))}
      />
    </div>
  )
}

function MarketSection() {
  return (
    <div className="content-block">
      <p>
        Curio serves creators who sell curated digital products and buyers who want discovery plus trust — not
        just another checkout link.
      </p>

      <h3>Primary ICP hypotheses</h3>
      {ICP_HYPOTHESES.map((icp) => (
        <div key={icp.id} className="curio-icp-card">
          <h4>{icp.title}</h4>
          <p>
            <strong>Profile:</strong> {icp.profile}
          </p>
          <p>
            <strong>Job to be done:</strong> {icp.job}
          </p>
          <p>
            <strong>Why Curio:</strong> {icp.whyCurio}
          </p>
        </div>
      ))}

      <h3>Jobs to be done</h3>
      <DataTable
        headers={['Actor', 'Functional job', 'Emotional job', 'Curio feature']}
        rows={JOBS_TO_BE_DONE.map((row) => ({
          key: `${row.actor}-${row.functional}`,
          cells: [row.actor, row.functional, row.emotional, row.feature],
        }))}
      />

      <h3>Competitive alternatives (customer view)</h3>
      <p>Creators today often stitch together Gumroad or Stan for sales, Notion/Drive for delivery, Linktree for bio links, and social for audience. Curio&apos;s pitch: replace the stack with marketplace discovery + storefront + delivery.</p>

      <h3>Market sizing</h3>
      <DataTable
        headers={['Horizon', 'GMV target', 'MRR target', 'Monetized hubs']}
        rows={[
          { key: 'y1', cells: ['Year 1', <TbdBadge key="y1-gmv" />, <TbdBadge key="y1-mrr" />, <TbdBadge key="y1-hubs" />] },
          { key: 'y2', cells: ['Year 2', <TbdBadge key="y2-gmv" />, <TbdBadge key="y2-mrr" />, <TbdBadge key="y2-hubs" />] },
          { key: 'y3', cells: ['Year 3', <TbdBadge key="y3-gmv" />, <TbdBadge key="y3-mrr" />, <TbdBadge key="y3-hubs" />] },
        ]}
      />
    </div>
  )
}

function RevenueModelSection() {
  return (
    <div className="content-block">
      <p>
        Curio earns from three streams: creator SaaS subscriptions (Growth), marketplace take rate on hub sales
        (5% via Stripe Connect), and Enterprise contracts. Scaling means growing GMV and MRR together.
      </p>

      <h3>Revenue streams today</h3>
      <DataTable
        headers={['Stream', 'Mechanism', 'Detail']}
        rows={REVENUE_STREAMS.map((row) => ({
          key: row.stream,
          cells: [row.stream, row.mechanism, row.fact],
        }))}
      />

      <h3>Revenue mix</h3>
      <DataTable
        headers={['Metric', 'Current', 'Target (12 mo)', 'Target (36 mo)']}
        rows={REVENUE_METRICS.map((row) => ({
          key: row.metric,
          cells: [
            row.metric,
            row.current === 'TBD' ? <TbdBadge key={`${row.metric}-c`} /> : row.current,
            row.target12 === 'TBD' ? <TbdBadge key={`${row.metric}-12`} /> : row.target12,
            row.target36 === 'TBD' ? <TbdBadge key={`${row.metric}-36`} /> : row.target36,
          ],
        }))}
      />

      <h3>Expansion levers</h3>
      <h4>Near term (0–12 months)</h4>
      <ul className="feature-list">
        {EXPANSION_LEVERS.nearTerm.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h4>Medium term (12–24 months)</h4>
      <ul className="feature-list">
        {EXPANSION_LEVERS.mediumTerm.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h4>Long term (24+ months)</h4>
      <ul className="feature-list">
        {EXPANSION_LEVERS.longTerm.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Pricing philosophy</h3>
      <ul className="feature-list">
        <li>
          <strong>Free tier seeds GMV:</strong> Let creators sell before they pay Curio SaaS
        </li>
        <li>
          <strong>Growth captures power users:</strong> Unlimited hubs/uploads when catalog is the product
        </li>
        <li>
          <strong>Take rate aligns incentives:</strong> Curio wins when creators win on sales
        </li>
        <li>
          <strong>Enterprise captures B2B:</strong> High-touch, high-ACV separate motion
        </li>
      </ul>
    </div>
  )
}

function GrowthSection() {
  return (
    <div className="content-block">
      <p>
        Curio grows through a marketplace flywheel: more creators → richer catalog → more buyers → higher GMV →
        creator earnings → more creators.
      </p>
      <p>
        <strong>When stuck, priority order:</strong> (1) recruit creators and reduce publish friction, (2)
        distribution and SEO, (3) paywall/trust/hub page quality, (4) creator success and retention.
      </p>

      <h3>Conversion funnel</h3>
      <DataTable
        headers={['Stage', 'Definition', 'Target metric', 'Current']}
        rows={GROWTH_FUNNEL.map((row) => ({
          key: row.stage,
          cells: [
            row.stage,
            row.definition,
            row.metric,
            row.current === 'TBD' ? <TbdBadge key={`${row.stage}-c`} /> : row.current,
          ],
        }))}
      />

      <h3>Free → Growth conversion</h3>
      <p>
        Free tier limits: 3 hubs, 10 uploads/hub, 5 MB files. Growth removes limits and adds 100 GB storage, 5 GB
        files, and live chat. Upgrade prompts trigger at 4th hub, upload limit, large file rejection, or support
        requests.
      </p>
      <p>
        Current Free → Growth conversion rate: <TbdBadge />
      </p>

      <h3>12-month growth themes</h3>
      {QUARTERLY_THEMES.map((q) => (
        <div key={q.quarter} className="curio-quarter-card">
          <h4>{q.quarter}</h4>
          <ul className="feature-list">
            {q.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function UnitEconomicsSection() {
  return (
    <div className="content-block">
      <p>
        Curio&apos;s unit economics blend SaaS margins (Growth subscriptions) with marketplace economics (5% of
        GMV).
      </p>

      <h3>Illustrative creator value (annual)</h3>
      <DataTable
        headers={['Creator type', 'SaaS/yr', 'GMV share/yr', 'Total to Curio']}
        rows={CREATOR_VALUE_SCENARIOS.map((row) => ({
          key: row.type,
          cells: [row.type, row.saasYr, row.gmvShareYr, row.total],
        }))}
      />
      <p className="curio-note">Illustrative only — replace with live data when available.</p>

      <h3>Key inputs</h3>
      <div className="economics-table">
        <div className="economics-row">
          <span className="economics-label">Growth monthly price</span>
          <span className="economics-value">$9.99</span>
        </div>
        <div className="economics-row">
          <span className="economics-label">Growth annual price</span>
          <span className="economics-value">$99.99</span>
        </div>
        <div className="economics-row">
          <span className="economics-label">Take rate</span>
          <span className="economics-value">5%</span>
        </div>
        <div className="economics-row">
          <span className="economics-label">Avg annual GMV per monetized creator</span>
          <span className="economics-value">
            <TbdBadge />
          </span>
        </div>
        <div className="economics-row">
          <span className="economics-label">LTV : CAC target</span>
          <span className="economics-value">&gt; 3:1</span>
        </div>
      </div>
    </div>
  )
}

function RoadmapSection() {
  return (
    <div className="content-block">
      {ROADMAP_HORIZONS.map((h) => (
        <div key={h.id} className="curio-roadmap-horizon">
          <h3>{h.horizon}</h3>
          <p className="curio-roadmap-meta">
            <strong>{h.timeframe}</strong> · {h.theme}
          </p>
          <ul className="feature-list">
            {h.initiatives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>Not building in H1</h3>
      <ul className="feature-list">
        <li>Full LMS with quizzes and certificates</li>
        <li>Native mobile apps</li>
        <li>Crypto payments</li>
        <li>Open API marketplace (until H3)</li>
      </ul>
    </div>
  )
}

function OperatingModelSection() {
  return (
    <div className="content-block">
      <h3>North-star metrics</h3>
      <DataTable
        headers={['Metric', 'Definition', 'Source']}
        rows={NORTH_STAR_METRICS.map((row) => ({
          key: row.metric,
          cells: [row.metric, row.definition, row.source],
        }))}
      />

      <h3>Cadence</h3>
      <h4>Weekly</h4>
      <DataTable
        headers={['Meeting', 'Duration', 'Output']}
        rows={OPERATING_CADENCE.weekly.map((row) => ({
          key: row.meeting,
          cells: [row.meeting, row.duration, row.output],
        }))}
      />
      <h4>Monthly</h4>
      <ul className="feature-list">
        {OPERATING_CADENCE.monthly.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h4>Quarterly</h4>
      <ul className="feature-list">
        {OPERATING_CADENCE.quarterly.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Decision framework</h3>
      <p>When priorities conflict, use this order unless leadership explicitly overrides:</p>
      <DataTable
        headers={['Priority', 'Area', 'Example']}
        rows={DECISION_FRAMEWORK.map((row) => ({
          key: row.area,
          cells: [row.priority, row.area, row.example],
        }))}
      />

      <h3>GMV vs MRR tradeoff</h3>
      <ul className="feature-list">
        <li>
          <strong>Early stage:</strong> Bias GMV — prove creators earn and marketplace works
        </li>
        <li>
          <strong>Efficiency stage:</strong> Bias MRR — improve margins and predictable revenue
        </li>
        <li>
          <strong>Enterprise stage:</strong> Bias ACV — fewer, larger deals
        </li>
      </ul>
    </div>
  )
}

function RisksSection() {
  return (
    <div className="content-block">
      <DataTable
        headers={['ID', 'Risk', 'Likelihood', 'Impact', 'Mitigation']}
        rows={RISK_REGISTER.map((row) => ({
          key: row.id,
          cells: [
            row.id,
            row.risk,
            row.likelihood === 'TBD' ? <TbdBadge key={`${row.id}-l`} /> : row.likelihood,
            row.impact,
            row.mitigation,
          ],
        }))}
      />
    </div>
  )
}

const SECTION_RENDERERS = {
  'executive-summary': ExecutiveSummarySection,
  'product-today': ProductTodaySection,
  market: MarketSection,
  'revenue-model': RevenueModelSection,
  growth: GrowthSection,
  'unit-economics': UnitEconomicsSection,
  roadmap: RoadmapSection,
  'operating-model': OperatingModelSection,
  risks: RisksSection,
}

function CurioStore() {
  return (
    <div className="page" id="curio-store">
      <div className="page-header">
        <h1>{CURIO_STORE_PAGE.title}</h1>
        <p className="page-subtitle">{CURIO_STORE_PAGE.subtitle}</p>
      </div>

      <section className="curio-hero page-section" aria-label="Curio Store overview">
        <div className="curio-hero-inner">
          <div>
            <p className="curio-hero-kicker">curio.store</p>
            <h2 className="curio-hero-title">The Amazon of digital products</h2>
            <p className="curio-hero-body">
              One trusted marketplace where buyers discover curated digital goods and creators host, sell, and
              grow their catalogs. Explore discovery, monetized hubs, and Linktree-style profiles — all in one
              platform.
            </p>
            <a
              className="curio-hero-cta"
              href={CURIO_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit curio.store →
            </a>
          </div>
          <ul className="curio-highlight-grid" aria-label="Key facts">
            {CURIO_HIGHLIGHTS.map((h) => (
              <li key={h.label} className="curio-highlight-chip">
                <span className="curio-highlight-label">{h.label}</span>
                <span className="curio-highlight-detail">{h.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav className="content-block curio-on-page-nav" aria-label="On this page">
        <p>
          <strong>On this page:</strong>{' '}
          {CURIO_STORE_SECTIONS.map((section, index) => (
            <React.Fragment key={section.id}>
              {index > 0 && ' · '}
              <a href={`#${section.id}`}>{section.title}</a>
            </React.Fragment>
          ))}
        </p>
      </nav>

      {CURIO_STORE_SECTIONS.map((section) => {
        const Renderer = SECTION_RENDERERS[section.id]
        return (
          <section key={section.id} className="page-section" id={section.id}>
            <h2>{section.title}</h2>
            {Renderer ? <Renderer /> : null}
          </section>
        )
      })}
    </div>
  )
}

export default CurioStore
