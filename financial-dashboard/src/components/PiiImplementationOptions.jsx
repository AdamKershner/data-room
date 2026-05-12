import React from 'react'

/**
 * Sprint 2 reference: PII stripping paths before prompts hit the LLM.
 * Reuses .chromium-assessment-* classes from Sprints.css (shared reference disclosure styling).
 */
function PiiImplementationOptions({ data }) {
  if (!data) return null

  const colHeaders = data.options.map((o) => o.shortLabel)

  return (
    <div id="pii-implementation-options" className="chromium-assessment-wrap">
      <details className="chromium-assessment-details">
        <summary className="chromium-assessment-summary">
          PII implementation options and tradeoffs
        </summary>
        <div className="chromium-assessment">
          <h4 className="chromium-assessment-title">{data.title}</h4>
          <p>{data.constraintSummary}</p>

          {data.options.map((opt) => (
            <div key={opt.id} className="chromium-assessment-infra-block">
              <h6 className="chromium-assessment-h6 chromium-assessment-option-title">{opt.shortLabel}</h6>
              <p>
                <strong>What it is:</strong> {opt.whatItIs}
              </p>
              <p style={{ marginBottom: '6px', fontWeight: 600 }}>Pros</p>
              <ul className="chromium-assessment-list">
                {opt.pros.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <p style={{ marginBottom: '6px', fontWeight: 600 }}>Cons</p>
              <ul className="chromium-assessment-list">
                {opt.cons.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <p>
                <strong>Best for:</strong> {opt.bestFor}
              </p>
            </div>
          ))}

          <h5 className="chromium-assessment-h5">At-a-glance comparison</h5>
          <p>{data.comparisonIntro}</p>
          <div className="chromium-assessment-table-scroll">
            <table className="chromium-assessment-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  {colHeaders.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{row.option1}</td>
                    <td>{row.option2}</td>
                    <td>{row.option3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="chromium-assessment-stakeholder-callout">
            <div className="chromium-assessment-stakeholder-heading">{data.stakeholderNotesHeading}</div>
            {data.stakeholderNotes.map((note) => (
              <div key={note.label} className="chromium-assessment-stakeholder-item">
                <div className="chromium-assessment-stakeholder-label">{note.label}</div>
                <p>{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </details>
    </div>
  )
}

export default PiiImplementationOptions
