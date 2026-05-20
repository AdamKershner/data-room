import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  NARRATIVE_CATEGORIES,
  STORY_FRAMEWORK_ARTICLE_URL,
  LINEAR_ALL_ISSUES_URL,
  CONSORTIUM_PAGE_URL,
  IBM_BREACH_REPORT_HUB_URL,
  CHROME_SOURCE_LINKS,
  OASIS_OF_LIFE_POEM,
  TALLY_SUGGEST_IDEAS_EMBED_BASE,
  TALLY_SUGGEST_IDEAS_URL,
  linearIssueUrl,
} from './marketingNarrativeSections'
import './Page.css'
import OasisEvidenceGallery from '../components/OasisEvidenceGallery'
import AdNauseamRealStories from '../components/AdNauseamRealStories'
import B2cCreativeConceptSuggestions from '../components/B2cCreativeConceptSuggestions'
import B2cFinalPostsSuggestions from '../components/B2cFinalPostsSuggestions'
import './MarketingNarrativeChecklist.css'

const CATEGORY_FILTER_KEY = 'marketing-narrative-category-filter'
const DEFAULT_CATEGORY_ID = 'b2c'

function parseInstructionWithLinks(text) {
  if (!text) return null
  const chromeTokens = Object.keys(CHROME_SOURCE_LINKS).join('|')
  const pattern = new RegExp(
    `\\[\\[(LINEAR|CONSORTIUM|IBM_BREACH|${chromeTokens}|KAH-\\d+|\\/[^\\s|]+|https?:\\/\\/[^\\s|]+|mn-[a-z0-9-]+)\\|([^\\]]+)\\]\\]`,
    'gi'
  )
  const parts = []
  let lastIndex = 0
  let match
  while ((match = pattern.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index))
    const ref = match[1]
    const linkText = match[2]
    const refUpper = ref.toUpperCase()
    const isRoute = ref.startsWith('/')
    const isHttp = ref.startsWith('http')
    const isLinearBoard = refUpper === 'LINEAR'
    const isConsortium = refUpper === 'CONSORTIUM'
    const isIbmBreach = refUpper === 'IBM_BREACH'
    const isLinearIssue = /^KAH-\d+$/i.test(ref)
    const chromeHref = CHROME_SOURCE_LINKS[refUpper]
    let href = null
    if (isHttp) href = ref
    else if (isRoute) href = ref
    else if (isLinearBoard) href = LINEAR_ALL_ISSUES_URL
    else if (isConsortium) href = CONSORTIUM_PAGE_URL
    else if (isIbmBreach) href = IBM_BREACH_REPORT_HUB_URL
    else if (chromeHref) href = chromeHref
    else if (isLinearIssue) href = linearIssueUrl(ref)
    parts.push({ href, text: linkText })
    lastIndex = match.index + match[0].length
  }
  parts.push(text.slice(lastIndex))
  return parts.map((part, i) =>
    typeof part === 'string' ? (
      part
    ) : part.href && part.href.startsWith('/') ? (
      <Link key={i} to={part.href} className="mn-instruction-link">
        {part.text}
      </Link>
    ) : part.href ? (
      <a
        key={i}
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mn-instruction-link"
      >
        {part.text}
      </a>
    ) : (
      <span key={i} className="mn-instruction-link-static">
        {part.text}
      </span>
    )
  )
}

function buildTallyFeedbackEmbedUrl({ categoryId, categoryTitle }) {
  const params = new URLSearchParams({
    alignLeft: '1',
    hideTitle: '1',
    transparentBackground: '1',
  })
  if (categoryTitle) params.set('Model', categoryTitle)
  if (categoryId) params.set('narrative', categoryId)
  return `${TALLY_SUGGEST_IDEAS_EMBED_BASE}?${params.toString()}`
}

function FeedbackModal({ context, onClose }) {
  const embedSrc = buildTallyFeedbackEmbedUrl(context)

  return (
    <div
      className="mn-feedback-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mn-feedback-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="mn-feedback-modal">
        <div className="mn-feedback-modal-header">
          <div>
            <h2 id="mn-feedback-modal-title">Suggest an idea</h2>
            {context.categoryTitle && (
              <p className="mn-feedback-modal-context">{context.categoryTitle}</p>
            )}
          </div>
          <button
            type="button"
            className="mn-feedback-modal-close"
            aria-label="Close feedback form"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="mn-feedback-modal-body">
          <iframe
            src={embedSrc}
            title="Suggest ideas: Tally form"
            className="mn-feedback-modal-iframe"
            loading="lazy"
          />
        </div>
        <p className="mn-feedback-modal-footer">
          Form not loading?{' '}
          <a href={TALLY_SUGGEST_IDEAS_URL} target="_blank" rel="noopener noreferrer">
            Open in a new tab
          </a>
          .
        </p>
      </div>
    </div>
  )
}

function MarketingNarrativeChecklist() {
  const [poemModalOpen, setPoemModalOpen] = useState(false)
  const [feedbackModal, setFeedbackModal] = useState(null)
  const [activeCategoryId, setActiveCategoryId] = useState(() => {
    try {
      const stored = localStorage.getItem(CATEGORY_FILTER_KEY)
      return stored === 'b2b' ? 'b2b' : DEFAULT_CATEGORY_ID
    } catch {
      return DEFAULT_CATEGORY_ID
    }
  })

  const activeCategory =
    NARRATIVE_CATEGORIES.find((c) => c.id === activeCategoryId) ??
    NARRATIVE_CATEGORIES.find((c) => c.id === DEFAULT_CATEGORY_ID)

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategoryId(categoryId)
    localStorage.setItem(CATEGORY_FILTER_KEY, categoryId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const openSuggestIdea = useCallback(() => {
    if (!activeCategory) return
    setFeedbackModal({
      categoryId: activeCategory.id,
      categoryTitle: activeCategory.title,
    })
  }, [activeCategory])

  useEffect(() => {
    if (!poemModalOpen && !feedbackModal) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPoemModalOpen(false)
        setFeedbackModal(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [poemModalOpen, feedbackModal])

  return (
    <div className="page mn-page-with-sidebar" id="marketing-narrative-checklist">
      {feedbackModal && (
        <FeedbackModal context={feedbackModal} onClose={() => setFeedbackModal(null)} />
      )}
      {poemModalOpen && (
        <div
          className="mn-poem-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mn-poem-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPoemModalOpen(false)
          }}
        >
          <div className="mn-poem-modal">
            <div className="mn-poem-modal-header">
              <h2 id="mn-poem-modal-title">Oasis of Life</h2>
              <button
                type="button"
                className="mn-poem-modal-close"
                aria-label="Close poem"
                onClick={() => setPoemModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="mn-poem-modal-body">
              <pre className="mn-poem-modal-text">{OASIS_OF_LIFE_POEM}</pre>
            </div>
          </div>
        </div>
      )}
      <div className="page-header">
        <h1>Marketing Narrative Checklist</h1>
        <p className="page-subtitle">
          Story guide for the five-beat sales narrative, change, winners and losers, Promised Land,
          magic gifts, and evidence.
        </p>
      </div>

      <div className="mn-page-layout">
        <aside className="mn-sidebar" aria-label="Checklist actions">
          <div className="mn-sidebar-block">
            <p className="mn-sidebar-label">Narrative</p>
            <div className="mn-category-filter mn-category-filter--sidebar" role="group" aria-label="Narrative category">
              {NARRATIVE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`mn-category-filter-btn${
                    activeCategoryId === cat.id ? ' is-active' : ''
                  }`}
                  aria-pressed={activeCategoryId === cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.id === 'b2c' ? 'B2C' : 'B2B'}
                </button>
              ))}
            </div>
          </div>
          <div className="mn-sidebar-block">
            <button
              type="button"
              className="mn-suggest-idea-sidebar-btn"
              onClick={openSuggestIdea}
              aria-haspopup="dialog"
            >
              Suggest idea
            </button>
            <p className="mn-sidebar-hint">Share a content idea for the active narrative.</p>
          </div>
        </aside>

        <div className="mn-main">
      <section className="page-section">
        <div className="content-block mn-framework-note">
          <p>
            Based on Andy Raskin&apos;s story framework (
            <a
              href={STORY_FRAMEWORK_ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="onboarding-inline-link"
            >
              The Greatest Sales Deck I&apos;ve Ever Seen
            </a>
            ).
          </p>
        </div>
      </section>

      {activeCategory && (
        <div className="mn-category" id={`mn-category-${activeCategory.id}`}>
          <h2>{activeCategory.title}</h2>
          <p className="mn-category-tagline">{activeCategory.tagline}</p>
          {activeCategory.sections.map((section) => (
            <section key={`${activeCategory.id}-${section.id}`} className="page-section mn-section">
              <h3>
                {section.number}. {section.title}
              </h3>
              {activeCategory.id === 'b2c' && section.frameworkCallout && (
                <details className="mn-section-framework-details">
                  <summary className="mn-section-framework-summary">
                    Learn how to create content for this stage
                  </summary>
                  <div className="mn-section-framework-body">{section.frameworkCallout}</div>
                </details>
              )}
              <p className="mn-section-intro">
                {parseInstructionWithLinks(section.intro) ?? section.intro}
              </p>
              {activeCategory.id === 'b2c' && section.id === 'change' && (
                <AdNauseamRealStories />
              )}
              {activeCategory.id === 'b2c' && (
                <B2cCreativeConceptSuggestions beatId={section.id} />
              )}
              {activeCategory.id === 'b2c' && (
                <B2cFinalPostsSuggestions beatId={section.id} />
              )}
              <p className="mn-section-suggest-hint">
                Have your own angle on this beat? Use <strong>Suggest idea</strong> in the sidebar.
              </p>
              {activeCategory.id === 'b2c' && section.id === 'evidence' && (
                <p className="mn-poem-actions">
                  <button
                    type="button"
                    className="mn-poem-read-btn"
                    onClick={() => setPoemModalOpen(true)}
                  >
                    Read Oasis of Life (full poem)
                  </button>
                </p>
              )}
              {activeCategory.id === 'b2c' && section.id === 'evidence' && (
                <OasisEvidenceGallery />
              )}
            </section>
          ))}
        </div>
      )}

        </div>
      </div>
    </div>
  )
}

export default MarketingNarrativeChecklist
