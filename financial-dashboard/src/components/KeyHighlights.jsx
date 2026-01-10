import React from 'react'
import './KeyHighlights.css'

function KeyHighlights() {
  const highlights = [
    {
      label: '2026 Revenue Goal',
      value: '$323,188',
      description: 'Aggressive yet achievable target'
    },
    {
      label: 'B2C Subscribers Goal',
      value: '461',
      description: 'Year-end 2026 target'
    },
    {
      label: 'B2B Pilot Contracts Goal',
      value: '5',
      description: 'Annual contracts @ $50k avg'
    },
    {
      label: 'Target Gross Margin',
      value: '81.0%',
      description: 'B2C: 84.6% | B2B: 80.0%'
    },
    {
      label: 'Monthly Net Burn',
      value: '$25.50',
      description: 'After revenue offsets (webapp + Oasis subscriptions)'
    },
    {
      label: 'Runway',
      value: '27.4 months',
      description: 'Based on current cash and net burn'
    }
  ]

  return (
    <section className="key-highlights">
      <h2 className="section-title">Key Highlights</h2>
      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-card">
            <div className="highlight-value">{highlight.value}</div>
            <div className="highlight-label">{highlight.label}</div>
            <div className="highlight-description">{highlight.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KeyHighlights



