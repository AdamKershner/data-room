import React from 'react'
import { Link } from 'react-router-dom'
import './ArchiveBanner.css'

function ArchiveBanner({ product = 'Oasis Browser' }) {
  return (
    <div className="archive-banner" role="status">
      <p>
        <strong>Archived product line — {product}.</strong> Preserved for future return when demand warrants.
        All content is unchanged.{' '}
        <Link to="/archive">View archive index</Link>
      </p>
    </div>
  )
}

export default ArchiveBanner
