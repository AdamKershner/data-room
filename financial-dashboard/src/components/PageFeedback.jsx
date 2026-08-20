import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './PageFeedback.css'

const TALLY_FORM_URL = 'https://tally.so/r/5BaOlN'
const TALLY_EMBED_BASE = 'https://tally.so/embed/5BaOlN'

function buildFeedbackEmbedUrl(pathname) {
  const params = new URLSearchParams({
    alignLeft: '1',
    hideTitle: '1',
    transparentBackground: '1',
  })
  if (pathname) params.set('SOP ID', pathname)
  return `${TALLY_EMBED_BASE}?${params.toString()}`
}

function PageFeedback() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const pageId = `${location.pathname || '/'}${location.hash || ''}`
  const embedSrc = useMemo(() => buildFeedbackEmbedUrl(pageId), [pageId])

  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="page-feedback-btn"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Feedback
      </button>
      {open && (
        <div
          className="page-feedback-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="page-feedback-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          <div className="page-feedback-modal">
            <div className="page-feedback-header">
              <div>
                <h2 id="page-feedback-title">SOP Feedback</h2>
                <p className="page-feedback-context">{pageId}</p>
              </div>
              <button
                type="button"
                className="page-feedback-close"
                aria-label="Close feedback form"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="page-feedback-body">
              <iframe
                src={embedSrc}
                title="SOP Feedback"
                className="page-feedback-iframe"
              />
            </div>
            <p className="page-feedback-footer">
              Form not loading?{' '}
              <a href={TALLY_FORM_URL} target="_blank" rel="noopener noreferrer">
                Open in a new tab
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default PageFeedback
