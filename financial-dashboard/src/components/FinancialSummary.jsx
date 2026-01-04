import React from 'react'
import './FinancialSummary.css'

function FinancialSummary() {
  const metrics = [
    {
      metric: 'Total 2026 Revenue',
      value: '$323,188',
      notes: 'B2C: $73,188 | B2B: $250,000'
    },
    {
      metric: 'B2C Revenue',
      value: '$73,188',
      notes: 'Ending 461 subscribers | $20/month subscription'
    },
    {
      metric: 'B2B Revenue',
      value: '$250,000',
      notes: '5 pilot contracts @ $50,000/year avg'
    },
    {
      metric: 'Average Gross Margin %',
      value: '81.0%',
      notes: 'B2C: 84.6% | B2B: 80.0%'
    },
    {
      metric: 'Total Operating Expenses',
      value: '$144,000',
      notes: 'Headcount + fixed overhead | 1 dev, 0.5 support'
    },
    {
      metric: 'Average Monthly Burn',
      value: '$0 (positive)',
      notes: 'Net cash flow: $9,587 for 2026'
    },
    {
      metric: 'Year-End Cash Balance',
      value: '$509,587',
      notes: 'Starting: $500,000 | Net change: $9,587'
    },
    {
      metric: 'Minimum Monthly Cash Balance',
      value: '$470,039',
      notes: 'Occurred in May 2026'
    },
    {
      metric: 'Runway Months (at Jan 2026 start)',
      value: '∞',
      notes: 'Based on starting cash $500,000 and avg monthly burn $0'
    }
  ]

  return (
    <section className="financial-summary">
      <h2 className="section-title">Financial Summary</h2>
      <div className="table-container">
        <table className="financial-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>2026 Value</th>
              <th>Notes / Key Assumption</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((row, index) => (
              <tr key={index}>
                <td className="metric-name">{row.metric}</td>
                <td className="metric-value">{row.value}</td>
                <td className="metric-notes">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default FinancialSummary



