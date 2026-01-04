import React from 'react'
import './KeyHighlights.css'

function KeyHighlights() {
  const highlights = [
    {
      label: 'Annual Recurring Revenue (ARR)',
      value: '$105,163',
      description: 'Projected by year-end 2026'
    },
    {
      label: 'B2C Subscribers',
      value: '461',
      description: 'Ending subscriber count'
    },
    {
      label: 'B2B Pilot Contracts',
      value: '5',
      description: 'Annual contracts @ $50k avg'
    },
    {
      label: 'Average Gross Margin',
      value: '81.0%',
      description: 'B2C: 84.6% | B2B: 80.0%'
    },
    {
      label: 'Year-End Cash Balance',
      value: '$509,587',
      description: 'Starting: $500,000'
    },
    {
      label: 'Cash Flow Status',
      value: 'Positive',
      description: 'Net cash flow: $9,587 for 2026'
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



