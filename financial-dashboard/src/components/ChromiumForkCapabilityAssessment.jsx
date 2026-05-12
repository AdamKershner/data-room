import React from 'react'

/**
 * Renders Sprint 1 reference: Chromium fork vs consumer browser capability gaps.
 * Expects the object shape from ../data/chromiumForkCapabilityAssessment.js
 */
function ChromiumForkCapabilityAssessment({ data }) {
  if (!data) return null

  return (
    <div id="chromium-fork-capability-assessment" className="chromium-assessment-wrap">
      <details className="chromium-assessment-details">
        <summary className="chromium-assessment-summary">
          Chromium fork: capability gaps &amp; implementation requirements
        </summary>
        <div className="chromium-assessment">
          <h4 className="chromium-assessment-title">{data.title}</h4>

          <h5 className="chromium-assessment-h5">Executive summary</h5>
          <p>{data.executiveSummary}</p>

          <h5 className="chromium-assessment-h5">Introduction</h5>
          <p>{data.introduction}</p>

          <h5 className="chromium-assessment-h5">Capability gap analysis</h5>
          <p>{data.capabilityComparisonIntro}</p>
          <div className="chromium-assessment-table-scroll">
            <table className="chromium-assessment-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Google Chrome</th>
                  <th>Brave</th>
                  <th>Microsoft Edge</th>
                  <th>Thorium</th>
                  <th>Raw Chromium</th>
                  <th>Implementation requirement</th>
                </tr>
              </thead>
              <tbody>
                {data.capabilityRows.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{row.googleChrome}</td>
                    <td>{row.brave}</td>
                    <td>{row.edge}</td>
                    <td>{row.thorium}</td>
                    <td>{row.rawChromium}</td>
                    <td>{row.implementationRequirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h5 className="chromium-assessment-h5">Strategic focus areas</h5>
          <p>{data.strategicFocusIntro}</p>
          <ul className="chromium-assessment-list">
            {data.strategicNiches.map((niche) => (
              <li key={niche.title}>
                <strong>{niche.title}</strong>
                <br />
                {niche.body}
              </li>
            ))}
          </ul>

          <h5 className="chromium-assessment-h5">Implementation difficulty curve</h5>
          <p>{data.difficultyIntro}</p>
          <div className="chromium-assessment-table-scroll">
            <table className="chromium-assessment-table chromium-assessment-table--tiers">
              <thead>
                <tr>
                  <th>Difficulty tier</th>
                  <th>Feature / task</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {data.difficultyTiers.map((row) => (
                  <tr key={`${row.tier}-${row.featureOrTask}`}>
                    <td>{row.tier}</td>
                    <td>{row.featureOrTask}</td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h5 className="chromium-assessment-h5">API and service dependencies</h5>
          <p>{data.apiDependenciesIntro}</p>
          <ul className="chromium-assessment-list">
            {data.apiDependencies.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h5 className="chromium-assessment-h5">Critical infrastructure components</h5>
          <p>{data.criticalInfrastructureIntro}</p>
          {data.infrastructure.map((block) => (
            <div key={block.id} className="chromium-assessment-infra-block">
              <h6 className="chromium-assessment-h6">
                {block.id} {block.title}
              </h6>
              {block.paragraphs?.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
              {block.intro && <p>{block.intro}</p>}
              {block.bullets && (
                <ul className="chromium-assessment-list">
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <h5 className="chromium-assessment-h5">Potential differentiation features</h5>
          <p>{data.differentiationIntro}</p>
          <ul className="chromium-assessment-list">
            {data.differentiationIdeas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>

          <h5 className="chromium-assessment-h5">Conclusion and recommendations</h5>
          <p>{data.conclusionIntro}</p>
          <ul className="chromium-assessment-list">
            {data.conclusionBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p>{data.conclusionClosing}</p>

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

export default ChromiumForkCapabilityAssessment
