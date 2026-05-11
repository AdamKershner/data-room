import React from 'react'
import './Page.css'
import './TeamExecution.css'
import { NOTION_TEAM_DIRECTORY_URL } from '../constants/notionTeamDirectory'

function TeamExecution() {
  return (
    <div className="page" id="team-execution">
      <div className="page-header">
        <h1>Team directory (Notion)</h1>
        <p className="page-subtitle">
          Active team members, roles, and org context are maintained in Notion so they stay current outside this
          static data room.
        </p>
      </div>

      <section className="page-section">
        <div className="content-block team-execution-notion-block">
          <p>
            Open the live directory in a new tab. This in-app page exists so bookmarks to{' '}
            <code className="team-execution-inline-path">/team-execution</code> keep working.
          </p>
          <p className="team-execution-actions">
            <a
              href={NOTION_TEAM_DIRECTORY_URL}
              className="team-execution-notion-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open team directory in Notion
            </a>
          </p>
          <p className="team-execution-url-line">
            <span className="team-execution-url-label">URL</span>
            <a href={NOTION_TEAM_DIRECTORY_URL} target="_blank" rel="noopener noreferrer">
              {NOTION_TEAM_DIRECTORY_URL}
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default TeamExecution
