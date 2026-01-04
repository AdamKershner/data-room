import React from 'react'
import './TwoWaySensitivity.css'

function TwoWaySensitivity() {
  const twoWayTables = [
    {
      title: 'Subscribers vs Usage Intensity → Gross Margin %',
      description: 'Shows how subscriber count and usage intensity interact to affect B2C gross margins',
      rowLabel: 'Starting Subscribers',
      colLabel: 'Usage Intensity',
      rows: ['50', '100', '150', '200'],
      cols: ['50%', '100%', '150%'],
      data: [
        [92.2, 84.6, 77.0],
        [92.2, 84.6, 77.0],
        [92.2, 84.6, 77.1],
        [92.2, 84.6, 77.1]
      ]
    },
    {
      title: 'B2B Pilots vs Developer Cost → B2B Gross Margin %',
      description: 'Shows how number of pilots and developer hourly cost interact to affect B2B margins',
      rowLabel: 'Number of Pilots',
      colLabel: 'Developer Hourly Cost',
      rows: ['0', '2', '5', '10'],
      cols: ['$40', '$60', '$80'],
      data: [
        [0.0, 0.0, 0.0],
        [80.0, 70.0, 60.0],
        [80.0, 70.0, 60.0],
        [80.0, 70.0, 60.0]
      ]
    }
  ]

  return (
    <div className="two-way-sensitivity">
      <h2 className="section-title">Two-Way Sensitivity Tables</h2>
      <p className="section-intro">
        These tables show how two drivers interact to affect key financial metrics.
      </p>

      {twoWayTables.map((table, idx) => (
        <div key={idx} className="two-way-table-wrapper">
          <h3 className="sensitivity-title">{table.title}</h3>
          <p className="table-description">{table.description}</p>
          <div className="table-container">
            <table className="two-way-table">
              <thead>
                <tr>
                  <th rowSpan="2">{table.rowLabel}</th>
                  <th colSpan={table.cols.length}>{table.colLabel}</th>
                </tr>
                <tr>
                  {table.cols.map((col, colIdx) => (
                    <th key={colIdx}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    <td className="row-header">{row}</td>
                    {table.data[rowIdx].map((value, colIdx) => (
                      <td key={colIdx} className="two-way-value">
                        {typeof value === 'number' ? `${value.toFixed(1)}%` : value}
                      </td>
                    ))}
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

export default TwoWaySensitivity



