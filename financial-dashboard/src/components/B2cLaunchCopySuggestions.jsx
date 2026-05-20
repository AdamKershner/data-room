import React from 'react'
import { getLaunchCopyForBeat } from '../data/b2cLaunchCopySuggestions'

export default function B2cLaunchCopySuggestions({ beatId }) {
  const items = getLaunchCopyForBeat(beatId)
  if (items.length === 0) return null

  return (
    <div
      className="mn-launch-copy-wrap"
      aria-label={`Launch copy for narrative beat ${beatId}`}
    >
      <h4 className="mn-launch-copy-title">Launch copy (descriptions and taglines)</h4>
      <p className="mn-launch-copy-lead">
        Shared launch descriptions and taglines from Adam; expand to read verbatim copy.
      </p>
      {beatId === 'promised-land' && (
        <p className="mn-launch-copy-related-note">
          Related to the section intro above; these variants name Oasis explicitly for launch.
        </p>
      )}
      <ul className="mn-launch-copy-list">
        {items.map((item) => (
          <li key={item.id} className="mn-launch-copy-item">
            <details className="mn-launch-copy-details">
              <summary className="mn-launch-copy-summary">
                <span className="mn-launch-copy-label">
                  {item.number}. {item.title}
                </span>
              </summary>
              <blockquote className="mn-launch-copy-quote">
                {item.body.split('\n\n').map((para, i) => (
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
