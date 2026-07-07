import React from 'react'
import { Link } from 'react-router-dom'
import { LINEAR_WORKSPACE_URL } from '../constants/kahanaSite'
import './Page.css'
import './OperatingSystem.css'

function Sprints() {
  return (
    <div className="page" id="product-lifecycle">
      <div className="sprints-linear-banner" role="status">
        <p>
          <strong>Active engineering backlog lives in{' '}
          <a href={LINEAR_WORKSPACE_URL} target="_blank" rel="noopener noreferrer">
            Linear
          </a>.</strong>{' '}
          Feature requests, bugs, and sprint work are logged, prioritized, and assigned there —
          daily/weekly. See{' '}
          <Link to="/operating-system">Operating System</Link> for the full workflow.
        </p>
      </div>

      <div className="page-header">
        <h1>Product Lifecycle</h1>
        <p className="page-subtitle">
          How user signals become prioritized work — primarily managed in Linear.
        </p>
      </div>

      <section className="page-section">
        <h2>Feedback → backlog</h2>
        <div className="content-block">
          <p>
            Kahana product development is driven by creator and buyer needs, survey data, and
            in-product feedback. Insights from these sources inform what gets logged as issues in
            Linear — not ad-hoc Slack threads alone.
          </p>
          <ol className="feature-list">
            <li>
              <strong>Listen</strong> — NPS/PMF surveys, user feedback trends, support themes,
              and team observations.
            </li>
            <li>
              <strong>Log</strong> — PM or reporter creates a Linear issue (bug, feature, improvement)
              with context and links.
            </li>
            <li>
              <strong>Prioritize</strong> — Backlog ordered against roadmap and impact; top items
              assigned to engineers.
            </li>
            <li>
              <strong>Ship</strong> — Work completed; status tracked in Linear through release.
            </li>
          </ol>
        </div>
      </section>

      <section className="page-section">
        <h2>Reference data in this data room</h2>
        <div className="content-block">
          <ul className="feature-list">
            <li>
              <Link to="/nps">PMF + NPS data</Link> — survey program, scores, and methodology
            </li>
            <li>
              <Link to="/hitl">User feedback trends</Link> — human-in-the-loop themes from ratings
            </li>
            <li>
              <Link to="/project-charter">Project charter</Link> — analytics scope (historical Oasis
              context; principles apply to Kahana metrics)
            </li>
            <li>
              <Link to="/kahana#roadmap-snapshot">Kahana roadmap</Link> — horizon themes; execution
              in Linear
            </li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Tools</h2>
        <div className="content-block">
          <p>
            <a href={LINEAR_WORKSPACE_URL} target="_blank" rel="noopener noreferrer">
              linear.app/kahana
            </a>{' '}
            — backlog, bugs, feature requests, sprint prioritization
          </p>
          <p>
            <Link to="/operating-system">Operating System</Link> — Linear + Slack norms by function
          </p>
          <p>
            <Link to="/archive/oasis-sprints">Oasis engineering sprints (archived)</Link> — historical
            Oasis Browser sprint boards from when backlog lived in this data room
          </p>
        </div>
      </section>
    </div>
  )
}

export default Sprints
