import React from 'react'

export function sopProgressPercent(done, total) {
  return total ? Math.round((done / total) * 100) : 0
}

export function SopProgressBar({
  done,
  total,
  completeLabel = 'All done',
}) {
  if (!total) return null
  const percent = sopProgressPercent(done, total)
  return (
    <div className="sop-progress-sticky" role="status" aria-live="polite">
      <div className="sop-progress-sticky-meta">
        <span className="sop-progress-sticky-count">
          {done} / {total}
        </span>
        <span className="sop-progress-sticky-pct">
          {percent === 100 ? completeLabel : `${percent}% complete`}
        </span>
      </div>
      <div className="onboarding-progress-bar">
        <div className="onboarding-progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}

export function SopIntroCallout({ excerpt }) {
  if (!excerpt) return null
  return (
    <section className="sop-intro-callout" aria-label="What this is">
      <h2 className="sop-intro-callout-title">What this is</h2>
      <p>{excerpt}</p>
    </section>
  )
}
