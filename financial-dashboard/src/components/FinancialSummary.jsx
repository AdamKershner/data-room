import React from 'react'
import './FinancialSummary.css'

function FinancialSummary() {
  const metrics = [
    {
      metric: 'Total 2026 Revenue Goals',
      value: '$323,188',
      notes: 'B2C: $73,188 | B2B: $250,000'
    },
    {
      metric: 'B2C Revenue Goals',
      value: '$73,188',
      notes: 'Ending 461 subscribers | $20/month subscription'
    },
    {
      metric: 'B2B Revenue Goals',
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
      value: '$1,734',
      notes: 'Fixed overhead only (tools & platform subscriptions) | No salaries currently | AWS $0 Jan-Apr (free credits), $15/month May-Dec'
    },
    {
      metric: 'Average Monthly Burn',
      value: '$25.50',
      notes: 'Gross burn: $144.50/month (tools & platform subscriptions) | Offset by webapp subscriptions: $100/month + Oasis subscriptions: $19/month (after taxes) | Net burn: $25.50/month'
    },
    {
      metric: 'Year-End Cash Balance',
      value: '$509,587',
      notes: 'Starting: $698 | Net change: $508,889 (projected with funding)'
    },
    {
      metric: 'Minimum Monthly Cash Balance',
      value: '$470,039',
      notes: 'Occurred in May 2026'
    },
    {
      metric: 'Runway Months (at Jan 2026 start)',
      value: '27.4 months',
      notes: 'Based on starting cash $698 and net monthly burn $25.50/month (after $100/month webapp + $19/month Oasis subscription revenue)'
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



