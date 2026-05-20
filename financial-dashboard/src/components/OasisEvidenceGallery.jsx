import React, { useState, useEffect, useCallback } from 'react'
import { OASIS_EVIDENCE_GALLERY } from '../data/oasisEvidenceGallery'

export default function OasisEvidenceGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  useEffect(() => {
    if (lightboxIndex === null) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex, closeLightbox])

  const active = lightboxIndex !== null ? OASIS_EVIDENCE_GALLERY[lightboxIndex] : null

  return (
    <div className="mn-evidence-gallery-wrap" aria-label="Oasis product evidence gallery">
      <h4 className="mn-evidence-gallery-title">Oasis in action</h4>
      <div className="mn-evidence-gallery">
        {OASIS_EVIDENCE_GALLERY.map((item, index) => (
          <figure key={item.id} className="mn-evidence-gallery-figure">
            <button
              type="button"
              className="mn-evidence-gallery-thumb-btn"
              onClick={() => setLightboxIndex(index)}
              aria-label={`View larger: ${item.caption}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="mn-evidence-gallery-img" />
            </button>
            <figcaption className="mn-evidence-gallery-caption">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div
          className="mn-evidence-gallery-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mn-gallery-lightbox-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          <div className="mn-evidence-gallery-lightbox">
            <div className="mn-evidence-gallery-lightbox-header">
              <p id="mn-gallery-lightbox-title" className="mn-evidence-gallery-lightbox-caption">
                {active.caption}
              </p>
              <button
                type="button"
                className="mn-evidence-gallery-lightbox-close"
                aria-label="Close image"
                onClick={closeLightbox}
              >
                ×
              </button>
            </div>
            <div className="mn-evidence-gallery-lightbox-body">
              <img src={active.src} alt={active.alt} className="mn-evidence-gallery-lightbox-img" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
