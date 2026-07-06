import React from 'react'
import { Link } from 'react-router-dom'
import {
  OASIS_ARCHIVE_PAGES,
  HISTORICAL_ARCHIVE_PAGES,
} from '../data/archivePages'
import './Page.css'
import './Archive.css'
import './KahanaPlatform.css'

function ArchivePageList({ pages }) {
  return (
    <ul className="archive-page-list">
      {pages.map((page) => (
        <li key={page.path} className="archive-page-list-item">
          <Link to={page.path} className="archive-page-link">
            <span className="archive-page-link-title">{page.title}</span>
            <span className="archive-page-link-path">{page.path}</span>
          </Link>
          <p className="archive-page-description">{page.description}</p>
        </li>
      ))}
    </ul>
  )
}

function Archive() {
  return (
    <div className="page" id="archive">
      <div className="page-header">
        <h1>Archive</h1>
        <p className="page-subtitle">
          Historical and point-in-time pages. Oasis Browser materials are preserved here while the team
          focuses on scaling Kahana. Content is unchanged.
        </p>
      </div>

      <section className="page-section">
        <h2 className="archive-section-heading">Oasis Browser (archived product)</h2>
        <p className="archive-section-note">
          Consumer and enterprise browser product — deprioritized until market demand warrants a return.
          All pages remain accessible and unchanged.
        </p>
        <ArchivePageList pages={OASIS_ARCHIVE_PAGES} />
      </section>

      <section className="page-section">
        <h2 className="archive-section-heading">Historical / point-in-time</h2>
        <ArchivePageList pages={HISTORICAL_ARCHIVE_PAGES} />
      </section>

      <section className="page-section">
        <h2 className="archive-section-heading">Related docs (repo root)</h2>
        <div className="content-block">
          <p>Oasis-specific technical and venture narratives stored outside the dashboard:</p>
          <ul className="feature-list">
            <li>AMPLIFIER.md — closed-loop assistant learning architecture</li>
            <li>AMPLIFIER_MASTER_ONE_PAGER.md — venture-ready differentiation thesis</li>
            <li>AMPLIFIER_VENTURES_BRIEF.md — Mozilla Ventures narrative</li>
            <li>enterprise-browser-workflow-diagrams.md — IT admin workflow diagrams</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Archive
