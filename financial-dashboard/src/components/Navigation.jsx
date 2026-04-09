import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const menuCategories = [
    {
      name: 'Executive Summary',
      items: [
        { path: '/', label: 'Executive Summary', id: 'executive-summary' },
        { path: '/Q1-executive-report', label: 'Q1 Executive Update', id: 'q1-executive-report' }
      ]
    },
    {
      name: 'Weekly Updates',
      items: [
        { path: '/weekly-reports', label: 'Weekly Reports', id: 'weekly-reports' }
      ]
    },
    {
      name: 'Q1 Midpoint Update',
      items: [
        { path: '/q1-midpoint', label: 'Q1 Midpoint Update', id: 'q1-midpoint' }
      ]
    },
    {
      name: 'Human Resources',
      items: [
        { path: '/onboarding', label: 'Onboarding', id: 'onboarding' }
      ]
    },
    {
      name: 'Operations',
      items: [
        { path: '/team-execution', label: 'Team, Execution & Milestones', id: 'team-execution' }
      ]
    },
    {
      name: 'Marketing',
      items: [
        { path: '/market-size', label: 'Market Size', id: 'market-size' },
        { path: '/b2c-strategic-narrative', label: 'B2C Strategic Narrative', id: 'b2c-strategic-narrative' },
        { path: '/b2b-strategic-narrative', label: 'B2B Strategic Narrative', id: 'b2b-strategic-narrative' },
        { path: '/competitors', label: 'Competitors', id: 'competitors' },
        { path: '/linkedin-guide', label: 'LinkedIn Guide', id: 'linkedin-guide' },
        { path: '/linkedin-connections-guide', label: 'LinkedIn Connections Guide', id: 'linkedin-connections-guide' },
        { path: '/producthunt-tasks', label: 'ProductHunt Tasks', id: 'producthunt-tasks' },
        { path: '/content-pipeline', label: 'Content Pipeline', id: 'content-pipeline' },
        { path: '/events', label: 'Events', id: 'events' }
      ]
    },
    {
      name: 'Sales',
      items: [
        { path: '/go-to-market', label: 'Go-to-Market & Growth', id: 'go-to-market' }
      ]
    },
    {
      name: 'Finance',
      items: [
        { path: '/financial-plan', label: 'Financial Plan & Sensitivity', id: 'financial-plan' },
        { path: '/business-model', label: 'Business Model & Unit Economics', id: 'business-model' }
      ]
    },
    {
      name: 'Product',
      items: [
        { path: '/product-technology', label: 'Product & Technology', id: 'product-technology' },
        { path: '/problem-market', label: 'Problem, Market & Users', id: 'problem-market' },
        { path: '/nps', label: 'NPS', id: 'nps' },
        { path: '/hitl', label: 'HITL Feedback', id: 'hitl' }
      ]
    },
    {
      name: 'Technical',
      items: [
        { path: '/ota-guide', label: 'OTA & Updates Guide', id: 'ota-guide' },
        { path: '/sprints', label: 'Sprints', id: 'sprints' },
        { path: '/soc2-gap-analysis', label: 'SOC2 Gap Analysis', id: 'soc2-gap-analysis' },
        { path: '/soc2-type1-checklist', label: 'SOC2 Type 1 Checklist', id: 'soc2-type1-checklist' }
      ]
    }
  ]

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
        <ul className="menu-list">
          {menuCategories.map((category) => (
            <li key={category.name} className="menu-category">
              <div className="menu-category-header">{category.name}</div>
              <ul className="menu-sublist">
                {category.items.map((item) => (
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
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation



