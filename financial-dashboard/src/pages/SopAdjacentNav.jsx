import React from 'react'
import { Link } from 'react-router-dom'
import { getAdjacentSops } from '../data/sopContent'

export function SopAdjacentNav({ sopId }) {
  const { prev, next } = getAdjacentSops(sopId)
  return (
    <nav className="sop-adjacent" aria-label="Adjacent SOPs">
      {prev ? (
        <Link to={prev.href || `/sops/${prev.id}`} className="sop-adjacent-link">
          ← SOP {prev.number}: {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to={next.href || `/sops/${next.id}`} className="sop-adjacent-link sop-adjacent-link--next">
          SOP {next.number}: {next.title} →
        </Link>
      ) : (
        <Link to="/sops" className="sop-adjacent-link sop-adjacent-link--next">
          Back to gallery →
        </Link>
      )}
    </nav>
  )
}
