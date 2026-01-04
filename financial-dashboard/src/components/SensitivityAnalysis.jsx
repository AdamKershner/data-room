import React from 'react'
import './SensitivityAnalysis.css'

function SensitivityAnalysis() {
  const oneWaySensitivities = [
    {
      title: 'Monthly Churn Rate',
      data: [
        { driver: '3%', revenue: '$335,925', margin: '81.2%', cash: '$520,394', runway: '∞' },
        { driver: '5%', revenue: '$329,082', margin: '81.1%', cash: '$514,587', runway: '∞' },
        { driver: '7% (Base)', revenue: '$323,188', margin: '81.0%', cash: '$509,587', runway: '∞' },
        { driver: '10%', revenue: '$315,356', margin: '80.9%', cash: '$502,942', runway: '∞' },
        { driver: '15%', revenue: '$304,920', margin: '80.8%', cash: '$494,086', runway: '∞' }
      ]
    },
    {
      title: 'Average Usage Intensity',
      data: [
        { driver: '50%', revenue: '$323,188', margin: '82.8%', cash: '$515,131', runway: '∞' },
        { driver: '75%', revenue: '$323,188', margin: '81.9%', cash: '$512,359', runway: '∞' },
        { driver: '100% (Base)', revenue: '$323,188', margin: '81.0%', cash: '$509,587', runway: '∞' },
        { driver: '125%', revenue: '$323,188', margin: '80.2%', cash: '$506,815', runway: '∞' },
        { driver: '150%', revenue: '$323,188', margin: '79.3%', cash: '$504,043', runway: '∞' }
      ]
    },
    {
      title: 'Subscription Price',
      data: [
        { driver: '$15', revenue: '$304,891', margin: '79.9%', cash: '$491,290', runway: '688.9' },
        { driver: '$18', revenue: '$315,870', margin: '80.6%', cash: '$502,268', runway: '∞' },
        { driver: '$20 (Base)', revenue: '$323,188', margin: '81.0%', cash: '$509,587', runway: '∞' },
        { driver: '$22', revenue: '$330,507', margin: '81.5%', cash: '$516,906', runway: '∞' },
        { driver: '$25', revenue: '$341,486', margin: '82.1%', cash: '$527,884', runway: '∞' }
      ]
    },
    {
      title: 'Number of B2B Pilots',
      data: [
        { driver: '0', revenue: '$73,188', margin: '84.6%', cash: '$417,920', runway: '73.1' },
        { driver: '2', revenue: '$173,188', margin: '81.9%', cash: '$493,754', runway: '960.6' },
        { driver: '5 (Base)', revenue: '$323,188', margin: '81.0%', cash: '$576,254', runway: '∞' },
        { driver: '8', revenue: '$473,188', margin: '80.7%', cash: '$621,254', runway: '∞' },
        { driver: '10', revenue: '$573,188', margin: '80.6%', cash: '$630,420', runway: '∞' }
      ]
    },
    {
      title: 'Developer Hourly Cost',
      data: [
        { driver: '$40 (Base)', revenue: '$323,188', margin: '81.0%', cash: '$509,587', runway: '∞' },
        { driver: '$50', revenue: '$323,188', margin: '77.2%', cash: '$497,087', runway: '∞' },
        { driver: '$60', revenue: '$323,188', margin: '73.3%', cash: '$484,587', runway: '389.3' },
        { driver: '$70', revenue: '$323,188', margin: '69.4%', cash: '$472,087', runway: '215.0' },
        { driver: '$80', revenue: '$323,188', margin: '65.6%', cash: '$459,587', runway: '148.5' }
      ]
    }
  ]

  return (
    <div className="sensitivity-analysis">
      <h2 className="section-title">One-Way Sensitivity Analyses</h2>
      <p className="section-intro">
        The following analyses show how changes in key drivers impact total revenue, 
        gross margin, year-end cash balance, and runway months.
      </p>
      
      {oneWaySensitivities.map((sensitivity, idx) => (
        <div key={idx} className="sensitivity-table-wrapper">
          <h3 className="sensitivity-title">{sensitivity.title}</h3>
          <div className="table-container">
            <table className="sensitivity-table">
              <thead>
                <tr>
                  <th>Driver Value</th>
                  <th>Total 2026 Revenue</th>
                  <th>Avg Gross Margin %</th>
                  <th>Year-End Cash</th>
                  <th>Runway Months</th>
                </tr>
              </thead>
              <tbody>
                {sensitivity.data.map((row, rowIdx) => (
                  <tr key={rowIdx} className={row.driver.includes('Base') ? 'base-scenario' : ''}>
                    <td className="driver-value">{row.driver}</td>
                    <td className="metric-value">{row.revenue}</td>
                    <td className="metric-value">{row.margin}</td>
                    <td>{row.cash}</td>
                    <td className="metric-value">{row.runway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SensitivityAnalysis



