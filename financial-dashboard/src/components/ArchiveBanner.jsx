import React from 'react'
import { Link } from 'react-router-dom'
import './ArchiveBanner.css'

function ArchiveBanner({ product = 'Oasis Browser' }) {
  return (
    <div className="archive-banner" role="status">
      <p>
        <strong>{product}</strong> — privacy-first AI browser, optional for internal work. Not part of
        onboarding or Kahana&apos;s scaling focus; we love the product but have no paid users yet. Install
        from{' '}
        <a href="https://kahana.io/installations" target="_blank" rel="noopener noreferrer">
          kahana.io/installations
        </a>{' '}
        if you want it.{' '}
        <Link to="/knowledge-base">Knowledge base</Link>
        {' · '}
        <Link to="/archive">Archive index</Link>
      </p>
    </div>
  )
}

export default ArchiveBanner
