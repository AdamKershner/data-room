import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Executive Summary', id: 'executive-summary' },
    { path: '/problem-market', label: 'Problem, Market & Users', id: 'problem-market' },
    { path: '/product-technology', label: 'Product & Technology', id: 'product-technology' },
    { path: '/business-model', label: 'Business Model & Unit Economics', id: 'business-model' },
    { path: '/go-to-market', label: 'Go-to-Market & Growth', id: 'go-to-market' },
    { path: '/financial-plan', label: 'Financial Plan & Sensitivity', id: 'financial-plan' },
    { path: '/team-execution', label: 'Team, Execution & Milestones', id: 'team-execution' }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path) => {
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
          {menuItems.map((item) => (
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
      </div>
    </nav>
  )
}

export default Navigation



