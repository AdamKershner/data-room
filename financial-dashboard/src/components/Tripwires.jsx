import React from 'react'
import './Tripwires.css'

function Tripwires() {
  const thresholds = [
    {
      name: 'Minimum Cash',
      value: '$100,000',
      description: 'Ensures sufficient runway buffer for operational flexibility'
    },
    {
      name: 'Minimum Gross Margin',
      value: '60%',
      description: 'Protects unit economics and ensures sustainable business model'
    },
    {
      name: 'Maximum Monthly Burn',
      value: '$50,000',
      description: 'Aligns with fundraising and runway planning'
    }
  ]

  const scenarios = [
    {
      name: 'Conservative',
      violated: false,
      minCash: '$303,379',
      grossMargin: '73.7%',
      maxBurn: '$13,653',
      note: 'All thresholds met. Lower margins due to limited B2B traction.'
    },
    {
      name: 'Base',
      violated: false,
      minCash: '$470,039',
      grossMargin: '81.0%',
      maxBurn: '$9,708 (positive cash flow)',
      note: 'All thresholds met. Balanced execution with strong financial health.'
    },
    {
      name: 'Aggressive',
      violated: false,
      minCash: '$571,556',
      grossMargin: '82.8%',
      maxBurn: '$15,127 (positive cash flow)',
      note: 'All thresholds met. Strongest performance across all metrics.'
    }
  ]

  const actions = [
    {
      threshold: 'Minimum Cash Breached',
      actions: [
        'Slow hiring and reduce marketing spend',
        'Prioritize B2B revenue generation'
      ]
    },
    {
      threshold: 'Gross Margin Below 60%',
      actions: [
        'Optimize AI costs and improve usage efficiency',
        'Adjust pricing or implement tiered pricing for power users'
      ]
    },
    {
      threshold: 'Monthly Burn Exceeds $50K',
      actions: [
        'Implement hiring freeze',
        'Shift focus to revenue-generating activities'
      ]
    }
  ]

  return (
    <div className="tripwires">
      <h2 className="section-title">Tripwires and Financial Guardrails</h2>
      
      <div className="thresholds-section">
        <h3>Defined Thresholds</h3>
        <div className="thresholds-grid">
          {thresholds.map((threshold, idx) => (
            <div key={idx} className="threshold-card">
              <div className="threshold-name">{threshold.name}</div>
              <div className="threshold-value">{threshold.value}</div>
              <div className="threshold-description">{threshold.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="scenarios-section">
        <h3>Scenario Analysis</h3>
        <div className="table-container">
          <table className="tripwire-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Violated?</th>
                <th>Min Cash</th>
                <th>Gross Margin</th>
                <th>Max Monthly Burn</th>
                <th>Status Note</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((scenario, idx) => (
                <tr key={idx} className={scenario.violated ? 'violated' : 'compliant'}>
                  <td className="scenario-name">{scenario.name}</td>
                  <td>
                    <span className={`violation-badge ${scenario.violated ? 'yes' : 'no'}`}>
                      {scenario.violated ? 'YES' : 'NO'}
                    </span>
                  </td>
                  <td className="metric-value">{scenario.minCash}</td>
                  <td className="metric-value">{scenario.grossMargin}</td>
                  <td>{scenario.maxBurn}</td>
                  <td className="status-note">{scenario.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="actions-section">
        <h3>Pre-Defined Actions if Thresholds Are Hit</h3>
        <div className="actions-list">
          {actions.map((action, idx) => (
            <div key={idx} className="action-item">
              <div className="action-threshold">{action.threshold}:</div>
              <ul className="action-bullets">
                {action.actions.map((act, actIdx) => (
                  <li key={actIdx}>{act}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="summary-section">
        <h3>Summary</h3>
        <div className="summary-content">
          <p>
            All three scenarios (Conservative, Base, and Aggressive) maintain all financial 
            guardrails with no threshold violations. This demonstrates strong resilience across 
            different execution outcomes. The primary focus should remain on B2B execution to 
            maximize revenue while maintaining cost discipline to protect margins.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tripwires



