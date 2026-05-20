import React from 'react'
import { getCreativeConceptsForBeat } from '../data/b2cCreativeConceptSuggestions'

export default function B2cCreativeConceptSuggestions({ beatId }) {
  const concepts = getCreativeConceptsForBeat(beatId)
  if (concepts.length === 0) return null

  return (
    <div
      className="mn-creative-suggestions-wrap"
      aria-label={`Content suggestions for narrative beat ${beatId}`}
    >
      <h4 className="mn-creative-suggestions-title">Content suggestions (Ideas.docx)</h4>
      <p className="mn-creative-suggestions-lead">
        Verbatim creative concepts from Ideas.docx; expand to read full brief.
      </p>
      <ul className="mn-creative-suggestions-list">
        {concepts.map((concept) => (
          <li key={concept.id} className="mn-creative-suggestions-item">
            <details className="mn-creative-suggestions-details">
              <summary className="mn-creative-suggestions-summary">
                <span className="mn-creative-suggestions-label">
                  {concept.number}. {concept.title}
                </span>
              </summary>
              <blockquote className="mn-creative-suggestions-quote">
                {concept.body.split('\n\n').map((para, i) => (
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
