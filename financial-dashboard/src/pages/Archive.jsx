import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Archive.css'

const ARCHIVE_PAGES = [
  {
    path: '/Q1-executive-report',
    title: 'Q1 Executive Update',
    description: 'Quarterly executive narrative, metrics, and strategic context.',
  },
  {
    path: '/q1-midpoint',
    title: 'Q1 Midpoint Update',
    description: 'Mid-quarter checkpoint across product, GTM, and operations.',
  },
  {
    path: '/events',
    title: 'Events',
    description: 'Community-led events survey, landing themes, and related notes.',
  },
  {
    path: '/soc2-gap-analysis',
    title: 'SOC2 Gap Analysis',
    description: 'Control-area gaps and readiness notes for SOC 2.',
  },
]

function Archive() {
  return (
    <div className="page" id="archive">
      <div className="page-header">
        <h1>Archive</h1>
        <p className="page-subtitle">
          Historical and point-in-time pages. Content is unchanged; these links are grouped here so the main
          navigation stays focused on current work.
        </p>
      </div>

      <section className="page-section">
        <div className="content-block">
          <ul className="archive-page-list">
            {ARCHIVE_PAGES.map((page) => (
              <li key={page.path} className="archive-page-list-item">
                <Link to={page.path} className="archive-page-link">
                  <span className="archive-page-link-title">{page.title}</span>
                  <span className="archive-page-link-path">{page.path}</span>
                </Link>
                <p className="archive-page-description">{page.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Archive
