import React from 'react'
import './FundingAnalysis.css'

function FundingAnalysis() {
  const fundingData = [
    {
      scenario: 'Conservative',
      roundSize: '$500K',
      runway: '111.8',
      nextRaise: 'Q3 2027'
    },
    {
      scenario: 'Conservative',
      roundSize: '$750K',
      runway: '142.8',
      nextRaise: 'Q4 2027'
    },
    {
      scenario: 'Conservative',
      roundSize: '$1M',
      runway: '173.9',
      nextRaise: 'Q5 2027'
    },
    {
      scenario: 'Base',
      roundSize: '$500K',
      runway: '∞',
      nextRaise: 'Beyond 2027'
    },
    {
      scenario: 'Base',
      roundSize: '$750K',
      runway: '∞',
      nextRaise: 'Beyond 2027'
    },
    {
      scenario: 'Base',
      roundSize: '$1M',
      runway: '∞',
      nextRaise: 'Beyond 2027'
    },
    {
      scenario: 'Aggressive',
      roundSize: '$500K',
      runway: '∞',
      nextRaise: 'Beyond 2027'
    },
    {
      scenario: 'Aggressive',
      roundSize: '$750K',
      runway: '∞',
      nextRaise: 'Beyond 2027'
    },
    {
      scenario: 'Aggressive',
      roundSize: '$1M',
      runway: '∞',
      nextRaise: 'Beyond 2027'
    }
  ]

  // Group by round size for better display
  const roundSizes = ['$500K', '$750K', '$1M']
  const scenarioNames = ['Conservative', 'Base', 'Aggressive']

  return (
    <div className="funding-analysis">
      <h2 className="section-title">Funding Needs Analysis</h2>
      
      <div className="funding-table-section">
        <h3>Post-Funding Runway by Scenario</h3>
        <div className="table-container">
          <table className="funding-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Round Size</th>
                <th>Post-Round Runway (months)</th>
                <th>Next Raise Month</th>
              </tr>
            </thead>
            <tbody>
              {fundingData.map((row, idx) => (
                <tr key={idx} className={`scenario-${row.scenario.toLowerCase()}`}>
                  <td className="scenario-name">{row.scenario}</td>
                  <td className="round-size">{row.roundSize}</td>
                  <td className="runway-value">{row.runway}</td>
                  <td>{row.nextRaise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="round-size-comparison">
        <h3>Round Size Comparison</h3>
        <div className="round-size-cards">
          {roundSizes.map((size, idx) => {
            const conservative = fundingData.find(d => d.scenario === 'Conservative' && d.roundSize === size)
            const base = fundingData.find(d => d.scenario === 'Base' && d.roundSize === size)
            const aggressive = fundingData.find(d => d.scenario === 'Aggressive' && d.roundSize === size)
            
            return (
              <div key={idx} className="round-size-card">
                <div className="round-size-header">{size} Raise</div>
                <div className="round-size-details">
                  <div className="detail-row">
                    <span className="detail-label">Conservative:</span>
                    <span className="detail-value">{conservative.runway} months</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Base:</span>
                    <span className="detail-value">{base.runway} months</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Aggressive:</span>
                    <span className="detail-value">{aggressive.runway} months</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FundingAnalysis



