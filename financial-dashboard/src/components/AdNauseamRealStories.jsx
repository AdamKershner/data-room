import React from 'react'
import {
  END_OF_PRIVACY_COLLECTION_LABEL,
  END_OF_PRIVACY_TESTIMONIALS,
  END_OF_PRIVACY_THEME_LABELS,
} from '../data/endOfPrivacyTestimonials'

export default function AdNauseamRealStories() {
  return (
    <div className="mn-real-stories-wrap" aria-label="Real community stories for Ad Nauseam">
      <h4 className="mn-real-stories-title">Real stories ({END_OF_PRIVACY_COLLECTION_LABEL})</h4>
      <p className="mn-real-stories-lead">Verbatim community submissions from May 2026.</p>
      <ul className="mn-real-stories-list">
        {END_OF_PRIVACY_TESTIMONIALS.map((story) => (
          <li key={story.id} className="mn-real-stories-item">
            <details className="mn-real-stories-details">
              <summary className="mn-real-stories-summary">
                <span className="mn-real-stories-label">{story.anonymousLabel}</span>
                <span className="mn-real-stories-meta">
                  {story.themes.map((theme) => (
                    <span key={theme} className="mn-real-stories-theme">
                      {END_OF_PRIVACY_THEME_LABELS[theme]}
                    </span>
                  ))}
                </span>
              </summary>
              <blockquote className="mn-real-stories-quote">
                {story.quote.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </blockquote>
            </details>
          </li>
        ))}
      </ul>
    </div>
  )
}
