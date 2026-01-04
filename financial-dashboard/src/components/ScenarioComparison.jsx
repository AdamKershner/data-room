import React from 'react'
import './ScenarioComparison.css'

function ScenarioComparison() {
  const scenarios = [
    {
      name: 'Conservative',
      totalRevenue: '$131,404',
      b2cRevenue: '$41,404',
      b2bRevenue: '$90,000',
      avgGrossMargin: '73.7%',
      yearEndCash: '$303,379',
      minMonthlyCash: '$303,379',
      minCashMonth: 'Dec',
      runwayAtStart: '49.7 months'
    },
    {
      name: 'Base',
      totalRevenue: '$323,189',
      b2cRevenue: '$73,189',
      b2bRevenue: '$250,000',
      avgGrossMargin: '81.0%',
      yearEndCash: '$509,587',
      minMonthlyCash: '$470,039',
      minCashMonth: 'May',
      runwayAtStart: '∞'
    },
    {
      name: 'Aggressive',
      totalRevenue: '$668,603',
      b2cRevenue: '$118,603',
      b2bRevenue: '$550,000',
      avgGrossMargin: '82.8%',
      yearEndCash: '$767,686',
      minMonthlyCash: '$571,556',
      minCashMonth: 'Mar',
      runwayAtStart: '∞'
    }
  ]

  return (
    <div className="scenario-comparison">
      <h2 className="section-title">Scenario Comparison</h2>
      <div className="table-container">
        <table className="scenario-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Total 2026 Revenue</th>
              <th>B2C Revenue</th>
              <th>B2B Revenue</th>
              <th>Avg Gross Margin %</th>
              <th>Year-End Cash</th>
              <th>Min Monthly Cash</th>
              <th>Min Cash Month</th>
              <th>Runway at Start</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((scenario, index) => (
              <tr key={index} className={`scenario-row scenario-${scenario.name.toLowerCase()}`}>
                <td className="scenario-name">{scenario.name}</td>
                <td className="metric-value">{scenario.totalRevenue}</td>
                <td>{scenario.b2cRevenue}</td>
                <td>{scenario.b2bRevenue}</td>
                <td className="metric-value">{scenario.avgGrossMargin}</td>
                <td className="metric-value">{scenario.yearEndCash}</td>
                <td>{scenario.minMonthlyCash}</td>
                <td>{scenario.minCashMonth}</td>
                <td className="metric-value">{scenario.runwayAtStart}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ScenarioComparison



