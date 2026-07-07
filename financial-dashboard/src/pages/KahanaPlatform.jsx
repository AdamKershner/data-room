import { Link } from 'react-router-dom'
import {
  KAHANA_PLATFORM_URL,
  KAHANA_EXPLORE_URL,
  KAHANA_PLATFORM_PAGE,
  KAHANA_HIGHLIGHTS,
  KAHANA_PLATFORM_SECTIONS,
  VISION_LIBRARY,
  EXECUTIVE_SUMMARY,
  AMAZON_PARALLEL,
  POSITIONING,
  COMPETITIVE_FRAME,
  COMPETITORS_PAGE_PATH,
  NARRATIVE_PAGE_PATH,
  STRATEGIC_NARRATIVE_INTRO,
  PRODUCT_SURFACES,
  EXPLORE_FILTERS,
  MARKETPLACE_CATEGORIES,
  HUB_CAPABILITIES,
  SAAS_PLANS,
  REVENUE_STREAMS,
  REVENUE_METRICS,
  GTM_STRATEGY,
  GROWTH_FUNNEL,
  ROADMAP_HORIZONS,
  RISK_REGISTER,
  TECH_STACK,
  TRUST_SAFETY,
  KAHANA_PLATFORM_MD_PATH,
} from '../data/kahanaPlatformSections'
import './Page.css'
import './KahanaPlatform.css'

function DataTable({ headers, rows, className = '' }) {
  return (
    <div className={`kahana-table-wrap ${className}`.trim()}>
      <table className="kahana-table">
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

function VisionLibrarySection() {
  return (
    <div className="content-block">
      <blockquote className="kahana-ze-quote">
        &ldquo;{VISION_LIBRARY.zeQuote}&rdquo;
        <footer>— {VISION_LIBRARY.zeAttribution}</footer>
      </blockquote>
      {VISION_LIBRARY.paragraphs.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
      <h3>Wan Shi Tong → Kahana</h3>
      <DataTable
        headers={['Library parallel', 'Kahana expression']}
        rows={VISION_LIBRARY.parallels.map((row) => ({
          key: row.wst,
          cells: [row.wst, row.kahana],
        }))}
      />
      <h3>Commitments</h3>
      <ul className="feature-list">
        {VISION_LIBRARY.commitments.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function StrategicNarrativeSection() {
  return (
    <div className="content-block">
      <p>{STRATEGIC_NARRATIVE_INTRO}</p>
      <p>
        <Link to={NARRATIVE_PAGE_PATH}>Read the full Kahana story →</Link>
      </p>
    </div>
  )
}

function ExecutiveSummarySection() {
  return (
    <div className="content-block">
      <blockquote className="kahana-north-star">{KAHANA_PLATFORM_PAGE.northStar}</blockquote>
      {EXECUTIVE_SUMMARY.paragraphs.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      <p>
        <strong>Legal entity:</strong> {KAHANA_PLATFORM_PAGE.legalEntity}
      </p>
      <h3>Strategic pillars</h3>
      <ul className="feature-list">
        {EXECUTIVE_SUMMARY.pillars.map((pillar) => (
          <li key={pillar.name}>
            <strong>{pillar.name}:</strong> {pillar.detail}
          </li>
        ))}
      </ul>
      <h3>What Kahana is not</h3>
      <ul className="feature-list">
        {EXECUTIVE_SUMMARY.isNot.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function PositioningSection() {
  return (
    <div className="content-block">
      <p>
        <strong>For creators:</strong> {POSITIONING.creators}
      </p>
      <p>
        <strong>For buyers:</strong> {POSITIONING.buyers}
      </p>
      <h3>&ldquo;Amazon of digital products&rdquo; (operational frame)</h3>
      <p>
        Marketplace mechanics — selection, trust, convenience, scale — serve the library vision. Amazon is
        shorthand for how the platform works; Wan Shi Tong&apos;s Library is what we strive to become.
      </p>
      <DataTable
        headers={['Dimension', 'Amazon parallel', 'Kahana expression']}
        rows={AMAZON_PARALLEL.map((row) => ({
          key: row.dimension,
          cells: [row.dimension, row.amazon, row.kahana],
        }))}
      />
      <h3>Competitive frame</h3>
      <DataTable
        headers={['Competitor', 'Strength', 'Kahana differentiation']}
        rows={COMPETITIVE_FRAME.map((row) => ({
          key: row.competitor,
          cells: [row.competitor, row.strength, row.differentiation],
        }))}
      />
      <p style={{ marginTop: '16px' }}>
        <Link to={COMPETITORS_PAGE_PATH}>Full competitor landscape →</Link>
      </p>
    </div>
  )
}

function PlatformArchitectureSection() {
  return (
    <div className="content-block">
      <p>
        Kahana is a React single-page application backed by Firebase (Firestore, Auth, Cloud Functions) and
        Stripe for payments.
      </p>
      <DataTable
        headers={['Surface', 'Route', 'Purpose']}
        rows={PRODUCT_SURFACES.map((row) => ({
          key: row.surface,
          cells: [row.surface, row.route, row.purpose],
        }))}
      />
      <h3>Technical stack</h3>
      <DataTable
        headers={['Layer', 'Stack']}
        rows={TECH_STACK.map((row) => ({
          key: row.layer,
          cells: [row.layer, row.stack],
        }))}
      />
    </div>
  )
}

function ExploreMarketplaceSection() {
  return (
    <div className="content-block">
      <p>
        Explore is Kahana&apos;s public discovery surface at{' '}
        <a href={KAHANA_EXPLORE_URL} target="_blank" rel="noopener noreferrer">
          app.kahana.io/explore
        </a>
        . Buyers and guests browse without an account; adult content requires login and age verification.
      </p>
      <h3>Filters (shipped)</h3>
      <ul className="feature-list">
        {EXPLORE_FILTERS.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <h3>Marketplace categories (16)</h3>
      <p className="kahana-category-grid">
        {MARKETPLACE_CATEGORIES.map((cat) => (
          <span key={cat} className="kahana-category-chip">
            {cat}
          </span>
        ))}
      </p>
      <p>
        <strong>Priority categories:</strong> beauty, fashion, health-wellness, sports-fitness, finance,
        business, lifestyle — aligned with women-first GTM.
      </p>
    </div>
  )
}

function HubsSection() {
  return (
    <div className="content-block">
      <p>
        A <strong>hub</strong> is Kahana&apos;s core product unit — a workspace for files, notes,
        collaborators, and optional monetization. Public hubs appear on Explore when listed.
      </p>
      <h3>Capabilities</h3>
      <ul className="feature-list">
        {HUB_CAPABILITIES.map((cap) => (
          <li key={cap}>{cap}</li>
        ))}
      </ul>
    </div>
  )
}

function MonetizationSection() {
  return (
    <div className="content-block">
      <p>
        Creators connect <strong>Stripe</strong> via Stripe Connect. Platform application fee:{' '}
        <strong>5%</strong>. Revenue spikes when creators charge for hub access.
      </p>
      <ol className="kahana-numbered-list">
        <li>Connect Stripe account</li>
        <li>Enable monetization on a hub; set price (one-time or monthly)</li>
        <li>Buyer hits paywall on hub</li>
        <li>Payment processes via Stripe; creator receives payout minus fees</li>
      </ol>
      <p>
        Payment types: <strong>ONETIME</strong> (lifetime access) and <strong>MONTHLY</strong> (recurring
        subscription for hub access).
      </p>
    </div>
  )
}

function PlansSection() {
  return (
    <div className="content-block">
      <p>
        Free tier seeds GMV — creators can sell before paying SaaS. Growth (~$9.99/mo) removes hub and upload
        limits; today ~$300/mo MRR from Growth subscribers.
      </p>
      <DataTable
        headers={['Feature', 'Free', 'Growth', 'Enterprise']}
        rows={SAAS_PLANS.map((row) => ({
          key: row.feature,
          cells: [row.feature, row.free, row.growth, row.enterprise],
        }))}
      />
      <h3>Free → Growth trigger moments</h3>
      <ul className="feature-list">
        <li>Attempt to create 4th hub</li>
        <li>Upload limit hit on hub</li>
        <li>Large file upload rejected (&gt;5 MB on Free)</li>
        <li>Creator requests support (Growth includes live chat)</li>
      </ul>
    </div>
  )
}

function TrustSafetySection() {
  return (
    <div className="content-block">
      <p>
        <strong>Adult content:</strong> {TRUST_SAFETY.adult}
      </p>
      <p>
        <strong>Creator verification:</strong> {TRUST_SAFETY.verification}
      </p>
      <p>
        <strong>Policies:</strong> {TRUST_SAFETY.policies}
      </p>
    </div>
  )
}

function RevenueModelSection() {
  return (
    <div className="content-block">
      <p>
        Kahana earns from Growth SaaS subscriptions, 5% marketplace take rate on hub sales, and Enterprise
        contracts. With 6,500+ registered users, network effects compound as the catalog grows.
      </p>
      <h3>Revenue streams</h3>
      <DataTable
        headers={['Stream', 'Mechanism', 'Detail']}
        rows={REVENUE_STREAMS.map((row) => ({
          key: row.stream,
          cells: [row.stream, row.mechanism, row.fact],
        }))}
      />
      <h3>Key metrics</h3>
      <DataTable
        headers={['Metric', 'Current', 'Target (12 mo)', 'Target (36 mo)']}
        rows={REVENUE_METRICS.map((row) => ({
          key: row.metric,
          cells: [row.metric, row.current, row.target12, row.target36],
        }))}
      />
    </div>
  )
}

function GrowthStrategySection() {
  return (
    <div className="content-block">
      <h3>{GTM_STRATEGY.headline}</h3>
      <p>{GTM_STRATEGY.intro}</p>
      <h3>GTM motion</h3>
      <DataTable
        headers={['Step', 'Detail']}
        rows={GTM_STRATEGY.steps.map((row) => ({
          key: row.step,
          cells: [row.step, row.detail],
        }))}
      />
      <h3>ICP priority</h3>
      <p>
        <strong>Supply:</strong> {GTM_STRATEGY.icp.supply}
      </p>
      <p>
        <strong>Demand:</strong> {GTM_STRATEGY.icp.demand}
      </p>
      <h3>Marketplace flywheel</h3>
      <ul className="feature-list">
        {GTM_STRATEGY.flywheel.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>Conversion funnel</h3>
      <DataTable
        headers={['Stage', 'Definition', 'Target metric']}
        rows={GROWTH_FUNNEL.map((row) => ({
          key: row.stage,
          cells: [row.stage, row.definition, row.metric],
        }))}
      />
      <h3>Not yet</h3>
      <ul className="feature-list">
        {GTM_STRATEGY.notYet.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function RoadmapSection() {
  return (
    <div className="content-block">
      {ROADMAP_HORIZONS.map((h) => (
        <div key={h.id} className="kahana-roadmap-horizon">
          <h3>{h.horizon}</h3>
          <p className="kahana-roadmap-meta">
            <strong>{h.timeframe}</strong> · {h.theme}
          </p>
          <ul className="feature-list">
            {h.initiatives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
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
          cells: [row.id, row.risk, row.likelihood, row.impact, row.mitigation],
        }))}
      />
    </div>
  )
}

const SECTION_RENDERERS = {
  'vision-library': VisionLibrarySection,
  'strategic-narrative': StrategicNarrativeSection,
  'executive-summary': ExecutiveSummarySection,
  positioning: PositioningSection,
  'platform-architecture': PlatformArchitectureSection,
  'explore-marketplace': ExploreMarketplaceSection,
  hubs: HubsSection,
  'monetization-and-payments': MonetizationSection,
  'plans-and-limits': PlansSection,
  'trust-and-safety': TrustSafetySection,
  'revenue-model': RevenueModelSection,
  'growth-strategy': GrowthStrategySection,
  'roadmap-snapshot': RoadmapSection,
  risks: RisksSection,
}

function KahanaPlatform() {
  return (
    <div className="page" id="kahana-platform">
      <div className="page-header">
        <h1>{KAHANA_PLATFORM_PAGE.title}</h1>
        <p className="page-subtitle">{KAHANA_PLATFORM_PAGE.subtitle}</p>
      </div>

      <section className="kahana-platform-hero page-section" aria-label="Kahana platform overview">
        <div className="kahana-platform-hero-inner">
          <div>
            <p className="kahana-platform-hero-kicker">app.kahana.io</p>
            <h2 className="kahana-platform-hero-title">A trusted library for humanity</h2>
            <p className="kahana-platform-hero-body">
              Curated digital knowledge from experts worldwide — guides, playbooks, templates, and resource
              libraries. Formerly Curio. 6,500+ users and growing.
            </p>
            <div className="kahana-platform-hero-ctas">
              <a
                className="kahana-platform-hero-cta"
                href={KAHANA_PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open app.kahana.io →
              </a>
              <a
                className="kahana-platform-hero-cta kahana-platform-hero-cta--secondary"
                href={KAHANA_EXPLORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Explore →
              </a>
            </div>
          </div>
          <ul className="kahana-highlight-grid" aria-label="Key facts">
            {KAHANA_HIGHLIGHTS.map((h) => (
              <li key={h.label} className="kahana-highlight-chip">
                <span className="kahana-highlight-label">{h.label}</span>
                <span className="kahana-highlight-detail">{h.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav className="content-block kahana-on-page-nav" aria-label="On this page">
        <p>
          <strong>On this page:</strong>{' '}
          {KAHANA_PLATFORM_SECTIONS.map((section, index) => (
            <React.Fragment key={section.id}>
              {index > 0 && ' · '}
              <a href={`#${section.id}`}>{section.title}</a>
            </React.Fragment>
          ))}
        </p>
      </nav>

      {KAHANA_PLATFORM_SECTIONS.map((section) => {
        const Renderer = SECTION_RENDERERS[section.id]
        return (
          <section key={section.id} className="page-section" id={section.id}>
            <h2>{section.title}</h2>
            {Renderer ? <Renderer /> : null}
          </section>
        )
      })}

      <section className="page-section">
        <h2>Full canonical doc</h2>
        <div className="content-block">
          <p>
            This page summarizes{' '}
            <code>{KAHANA_PLATFORM_MD_PATH}</code> in the data room repo — the source of truth for engineers,
            marketing extraction, and KB ingestion.
          </p>
        </div>
      </section>
    </div>
  )
}

export default KahanaPlatform
