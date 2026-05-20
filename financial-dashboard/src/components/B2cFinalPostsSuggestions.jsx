import React from 'react'
import { getFinalPostsForBeat } from '../data/b2cFinalPostsSuggestions'

export default function B2cFinalPostsSuggestions({ beatId }) {
  const posts = getFinalPostsForBeat(beatId)
  if (posts.length === 0) return null

  return (
    <div
      className="mn-final-posts-wrap"
      aria-label={`Launch posts for narrative beat ${beatId}`}
    >
      <h4 className="mn-final-posts-title">Launch posts (Oasis_Final_Posts.docx)</h4>
      <p className="mn-final-posts-lead">
        Verbatim LinkedIn launch sequence for Product Hunt week; expand for full post copy.
      </p>
      {beatId === 'evidence' && (
        <p className="mn-final-posts-date-note">
          This doc lists Product Hunt launch as Wednesday May 21, 2026. The checklist uses May
          27, 2026 (see Product Hunt brief). Reconcile before publishing.
        </p>
      )}
      <ul className="mn-final-posts-list">
        {posts.map((post) => (
          <li key={post.id} className="mn-final-posts-item">
            <details className="mn-final-posts-details">
              <summary className="mn-final-posts-summary">
                <span className="mn-final-posts-label">
                  {post.number === 0 ? post.title : `${post.number}. ${post.title}`}
                </span>
                {post.schedule && (
                  <span className="mn-final-posts-schedule">{post.schedule}</span>
                )}
                {post.optional && <span className="mn-final-posts-optional">Optional</span>}
              </summary>
              <blockquote className="mn-final-posts-quote">
                {post.body.split('\n\n').map((para, i) => (
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
