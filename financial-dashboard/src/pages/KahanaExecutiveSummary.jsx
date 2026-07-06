import React from 'react'
import { Link } from 'react-router-dom'
import { TOC_EXPLORE_ITEMS } from '../data/tocExploreGrid'
import { formatCardTitle } from '../utils/formatCardTitle'
import { DataRoomSearchPanel } from '../components/DataRoomSearch'
import BusinessFunctionExploreGrid from '../components/BusinessFunctionExploreGrid'
import {
  KAHANA_PLATFORM_URL,
  KAHANA_EXPLORE_URL,
  KAHANA_PLATFORM_PAGE,
  VISION_LIBRARY,
  TRACTION_METRICS,
  GTM_STRATEGY,
  HOME_SECTION_LINKS,
} from '../data/kahanaPlatformSections'
import './Page.css'
import './KahanaExecutiveSummary.css'

function KahanaExecutiveSummary() {
  return (
    <div className="page" id="kahana-executive-summary">
      <div className="page-header">
        <h1>Executive Summary</h1>
        <p className="page-subtitle">
          Kahana Group Inc. — a trusted library for humanity. Scaling Kahana (formerly Curio). Oasis Browser
          preserved in archive.
        </p>
      </div>

      <section className="kahana-hero page-section" aria-label="Kahana hero">
        <div className="kahana-hero-inner">
          <div>
            <p className="kahana-hero-kicker">Kahana Group Inc.</p>
            <h2 className="kahana-hero-title">A library you could spend an eternity in</h2>
            <p className="kahana-hero-body">
              Kahana aspires to be like Wan Shi Tong&apos;s Library — a mesmerizing place to discover curated
              digital knowledge from top experts, creators, and influencers worldwide. Guides, playbooks,
              templates, and resource libraries: a healthy free layer for humanity, plus paid hubs that reward
              creators.
            </p>
            <blockquote className="kahana-hero-quote">
              &ldquo;{VISION_LIBRARY.zeQuote}&rdquo;
              <span> — {VISION_LIBRARY.zeAttribution}</span>
            </blockquote>
            <p className="kahana-hero-gtm">
              <strong>GTM:</strong> {GTM_STRATEGY.headline} — discover, filter, invite, and amplify women
              experts first.
            </p>
            <div className="kahana-hero-ctas">
              <a
                className="kahana-cta kahana-cta--primary"
                href={KAHANA_PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open app.kahana.io
              </a>
              <a
                className="kahana-cta kahana-cta--secondary"
                href={KAHANA_EXPLORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Explore
              </a>
            </div>
            <ul className="kahana-hero-secondary-links">
              <li>
                <Link to="/kahana-narrative">Read the Kahana story</Link>
              </li>
              <li>
                <Link to="/kahana">Kahana platform overview</Link>
              </li>
              <li>
                <Link to="/knowledge-base">Knowledge base</Link>
              </li>
              <li>
                <Link to="/archive">Oasis Browser archive</Link>
              </li>
            </ul>
          </div>
          <div className="kahana-metrics-card">
            <h3>Traction</h3>
            <dl className="kahana-metrics-list">
              {TRACTION_METRICS.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>
                    <span className="kahana-metric-value">{m.value}</span>
                    <span className="kahana-metric-detail">{m.detail}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>North star</h2>
        <div className="content-block">
          <blockquote className="kahana-north-star-inline">{KAHANA_PLATFORM_PAGE.northStar}</blockquote>
          <p>
            Operationally: the <strong>Amazon of digital products</strong> — marketplace mechanics for
            selection, trust, and scale. Visionally: something more — a beloved library, not purely
            transactional.
          </p>
          <p>
            Explore the full business plan:{' '}
            {HOME_SECTION_LINKS.map((link, i) => (
              <React.Fragment key={link.id}>
                {i > 0 && ' · '}
                <Link to={`/kahana#${link.id}`}>{link.label}</Link>
              </React.Fragment>
            ))}
          </p>
        </div>
      </section>

      <section className="page-section kahana-toc-section" aria-labelledby="kahana-toc-heading">
        <h2 id="kahana-toc-heading">Explore the data room</h2>
        <div className="content-block">
          <p className="kahana-toc-intro">
            Business plan, team directory, sprints, onboarding, knowledge base, and archived Oasis Browser
            materials.
          </p>
          <div className="kahana-explore-search">
            <DataRoomSearchPanel maxResults={14} showKbLink compactResults />
          </div>
          <div className="kahana-toc-grid">
            {TOC_EXPLORE_ITEMS.map((item) => (
              <Link key={item.path} to={item.path} className="kahana-toc-card" aria-label={item.title}>
                <span className="kahana-toc-card-title" title={item.title}>
                  {formatCardTitle(item.title)}
                </span>
                <span className="kahana-toc-card-desc">{item.description}</span>
                <span className="kahana-toc-card-path">{item.path}</span>
              </Link>
            ))}
          </div>
          <BusinessFunctionExploreGrid />
        </div>
      </section>
    </div>
  )
}

export default KahanaExecutiveSummary
