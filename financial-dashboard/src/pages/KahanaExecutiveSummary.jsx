import React, { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { TOC_EXPLORE_ITEMS } from '../data/tocExploreGrid'
import { formatCardTitle } from '../utils/formatCardTitle'
import { DataRoomSearchPanel } from '../components/DataRoomSearch'
import BusinessFunctionExploreGrid from '../components/BusinessFunctionExploreGrid'
import {
  KAHANA_PLATFORM_PAGE,
  VISION_LIBRARY,
  VISION_FEELING,
  TRACTION_METRICS,
} from '../data/kahanaPlatformSections'
import './Page.css'
import './KahanaExecutiveSummary.css'

function VisionFeelingModal({ open, onClose, titleId }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="kahana-vision-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div className="kahana-vision-modal" onClick={(e) => e.stopPropagation()}>
        <div className="kahana-vision-modal-header">
          <div>
            <p className="kahana-vision-eyebrow">{VISION_FEELING.eyebrow}</p>
            <h2 id={titleId}>{VISION_FEELING.title}</h2>
          </div>
          <button
            type="button"
            className="kahana-vision-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="kahana-vision-modal-body kahana-vision-prose">
          {VISION_FEELING.scene.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p>{VISION_FEELING.contrast}</p>
          <p className="kahana-vision-product">{VISION_FEELING.product}</p>
          <p className="kahana-vision-stakes">{VISION_FEELING.stakes}</p>
          <blockquote className="kahana-hero-quote kahana-vision-quote">
            &ldquo;{VISION_LIBRARY.zeQuote}&rdquo;
            <span> — {VISION_LIBRARY.zeAttribution}</span>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

function KahanaExecutiveSummary() {
  const [visionOpen, setVisionOpen] = useState(false)
  const visionTitleId = useId()

  return (
    <div className="page" id="kahana-executive-summary">
      <div className="page-header">
        <h1>Executive Summary</h1>
        <p className="page-subtitle">
          Kahana Group Inc. — a digital library with Aura. The room people deserve for thinking,
          learning, and becoming better.
        </p>
      </div>

      <section className="kahana-hero page-section" aria-label="Kahana at a glance">
        <div className="kahana-hero-inner">
          <div>
            <p className="kahana-hero-kicker">{VISION_FEELING.eyebrow}</p>
            <h2 className="kahana-hero-title" id="vision-product-heading">
              {VISION_FEELING.title}
            </h2>
            <p className="kahana-vision-product-lead">{VISION_FEELING.product}</p>
            <button
              type="button"
              className="kahana-vision-expand-btn"
              onClick={() => setVisionOpen(true)}
            >
              Read the full vision →
            </button>
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

      <VisionFeelingModal
        open={visionOpen}
        onClose={() => setVisionOpen(false)}
        titleId={visionTitleId}
      />

      <section className="page-section">
        <h2>North star</h2>
        <div className="content-block">
          <blockquote className="kahana-north-star-inline">{KAHANA_PLATFORM_PAGE.northStar}</blockquote>
          <p>
            Grow through Clubs, hubs of the right content, and creator outreach — so a reader who searches
            always finds something worth falling into. Aura (up to 5/day) surfaces what the community
            believes deserves to rise: a library for learning, not a feed for dopamine.
          </p>
        </div>
      </section>

      <section className="page-section kahana-toc-section" aria-labelledby="kahana-toc-heading">
        <h2 id="kahana-toc-heading">Explore the data room</h2>
        <div className="content-block">
          <p className="kahana-toc-intro">
            Market map, company landscape, team directory, onboarding, knowledge base, and archived Oasis
            Browser materials — everything here serves the library experience above.
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
