import React, { useState, useEffect, useCallback } from 'react'
import { FOUNDER_EXAMPLES_GALLERY } from '../data/founderExamplesGallery'

export default function FounderExamplesGallery() {
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

  const active = lightboxIndex !== null ? FOUNDER_EXAMPLES_GALLERY[lightboxIndex] : null

  return (
    <div className="founder-examples-gallery" aria-label="Adam content examples gallery">
      <div className="founder-examples-gallery-grid">
        {FOUNDER_EXAMPLES_GALLERY.map((item, index) => (
          <figure key={item.id} className="founder-examples-gallery-figure">
            <button
              type="button"
              className="founder-examples-gallery-thumb-btn"
              onClick={() => setLightboxIndex(index)}
              aria-label={`View larger: ${item.caption}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="founder-examples-gallery-img"
              />
            </button>
            <figcaption className="founder-examples-gallery-caption">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div
          className="founder-examples-gallery-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="founder-examples-lightbox-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          <div className="founder-examples-gallery-lightbox">
            <div className="founder-examples-gallery-lightbox-header">
              <p id="founder-examples-lightbox-title" className="founder-examples-gallery-lightbox-caption">
                {active.caption}
              </p>
              <button
                type="button"
                className="founder-examples-gallery-lightbox-close"
                aria-label="Close image"
                onClick={closeLightbox}
              >
                ×
              </button>
            </div>
            <div className="founder-examples-gallery-lightbox-body">
              <img
                src={active.src}
                alt={active.alt}
                className="founder-examples-gallery-lightbox-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
