import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { KNOWLEDGE_BASE_PATHS } from '../data/knowledgeBaseEntries'
import './Navigation.css'

/** Paths that keep "Knowledge base" highlighted; excludes top-level TOC items. */
const KNOWLEDGE_BASE_PATHS_FOR_NAV_ACTIVE = KNOWLEDGE_BASE_PATHS.filter(
  (p) => p !== '/sprints' && p !== '/project-charter'
)

const archiveContentPaths = ['/Q1-executive-report', '/q1-midpoint', '/events', '/soc2-gap-analysis']

const archiveCategory = {
  name: 'Archive',
  items: [
    { path: '/archive', label: 'Archive', id: 'archive' },
    { path: '/Q1-executive-report', label: 'Q1 Executive Update', id: 'q1-executive-report' },
    { path: '/q1-midpoint', label: 'Q1 Midpoint Update', id: 'q1-midpoint' },
    { path: '/events', label: 'Events', id: 'events' },
    { path: '/soc2-gap-analysis', label: 'SOC2 Gap Analysis', id: 'soc2-gap-analysis' }
  ]
}

const primaryNavItems = [
  { path: '/', label: 'Executive Summary', id: 'executive-summary' },
  { path: '/team-execution', label: 'Team Directory', id: 'team-execution' },
  { path: '/weekly-reports', label: 'Weekly Reports', id: 'weekly-reports' },
  { path: '/sprints', label: 'Sprints', id: 'sprints' },
  { path: '/project-charter', label: 'Project Charter', id: 'project-charter' },
  { path: '/nps', label: 'PMF+NPS data', id: 'nps' },
  { path: '/hitl', label: 'User Feedback Trends (training data)', id: 'hitl' },
  { path: '/onboarding', label: 'Onboarding', id: 'onboarding' },
  { path: '/knowledge-base', label: 'Knowledge base', id: 'knowledge-base' },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [archiveSectionOpen, setArchiveSectionOpen] = useState(false)
  const location = useLocation()

  const isOnArchiveRoute =
    location.pathname === '/archive' || archiveContentPaths.includes(location.pathname)

  useEffect(() => {
    if (isOnArchiveRoute) {
      setArchiveSectionOpen(true)
    }
  }, [isOnArchiveRoute])

  const toggleArchiveSection = () => {
    setArchiveSectionOpen((prev) => !prev)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path) => {
    if (path === '/onboarding') {
      return location.pathname === '/onboarding' || location.pathname.startsWith('/onboarding/')
    }
    if (path === '/archive') {
      return location.pathname === '/archive' || archiveContentPaths.includes(location.pathname)
    }
    if (path === '/knowledge-base') {
      return (
        location.pathname === '/knowledge-base' ||
        KNOWLEDGE_BASE_PATHS_FOR_NAV_ACTIVE.includes(location.pathname)
      )
    }
    return location.pathname === path
  }

  return (
    <nav className="navigation">
      <button 
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <div className={`menu-drawer ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h3>Table of Contents</h3>
          <button className="close-button" onClick={closeMenu} aria-label="Close menu">
            ×
          </button>
        </div>
        <ul className="menu-list menu-list--flat">
          {primaryNavItems.map((item) => (
            <li key={item.id} className="menu-nav-item">
              <Link
                to={item.path}
                className={`menu-link menu-link--flat ${isActive(item.path) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="menu-category menu-category--collapsible">
            <button
              type="button"
              className={`menu-category-toggle ${isOnArchiveRoute ? 'menu-category-toggle--active-child' : ''}`}
              onClick={toggleArchiveSection}
              aria-expanded={archiveSectionOpen}
              aria-controls="nav-archive-links"
              id="nav-archive-heading"
            >
              <span className="menu-category-toggle-label">{archiveCategory.name}</span>
              <span className="menu-category-toggle-chevron" aria-hidden>
                {archiveSectionOpen ? '▼' : '▶'}
              </span>
            </button>
            <ul
              id="nav-archive-links"
              className="menu-sublist menu-sublist--collapsible"
              hidden={!archiveSectionOpen}
              aria-labelledby="nav-archive-heading"
            >
              {archiveCategory.items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`menu-link ${isActive(item.path) ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
