import React from 'react'
import { Link } from 'react-router-dom'
import {
  NARRATIVE_PAGE,
  ONE_LINER,
  NARRATIVE_BEATS,
  MAGIC_GIFTS,
  REFINE_NOTE,
  RELATED_LINKS,
  COMPETITORS_PAGE_PATH,
} from '../data/kahanaNarrativeSections'
import './Page.css'
import './KahanaNarrative.css'

function KahanaNarrative() {
  return (
    <div className="page" id="kahana-narrative">
      <div className="page-header">
        <h1>{NARRATIVE_PAGE.title}</h1>
        <p className="page-subtitle">{NARRATIVE_PAGE.subtitle}</p>
      </div>

      <section className="page-section">
        <blockquote className="kn-one-liner">&ldquo;{ONE_LINER}&rdquo;</blockquote>
      </section>

      {NARRATIVE_BEATS.map((beat) => (
        <section key={beat.id} className="page-section kn-beat" id={beat.id}>
          <span className="kn-raskin-kicker">{beat.raskinStage}</span>
          <h2>{beat.title}</h2>
          <div className="content-block">
            {beat.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            {beat.bullets && beat.bullets.length > 0 && (
              <ul className="feature-list">
                {beat.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {beat.linkToCompetitors && (
              <p className="kn-competitors-link">
                <Link to={COMPETITORS_PAGE_PATH}>Full competitor landscape →</Link>
              </p>
            )}
          </div>
        </section>
      ))}

      <section className="page-section" id="magical-gifts">
        <span className="kn-raskin-kicker">Magic gifts</span>
        <h2>Magical gifts</h2>
        <div className="content-block">
          <p>What Kahana gives creators and learners that existing tools don&apos;t offer.</p>
          <div className="kn-gifts-grid">
            <div className="kn-gifts-card">
              <h3>For creators and experts</h3>
              <ul>
                {MAGIC_GIFTS.creators.map((gift) => (
                  <li key={gift.title}>
                    <strong>{gift.title}</strong>
                    {gift.detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="kn-gifts-card">
              <h3>For learners and buyers</h3>
              <ul>
                {MAGIC_GIFTS.learners.map((gift) => (
                  <li key={gift.title}>
                    <strong>{gift.title}</strong>
                    {gift.detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="refine">
        <div className="content-block">
          <div className="kn-refine-note" role="note">
            {REFINE_NOTE}
          </div>
        </div>
      </section>

      <section className="page-section" id="related">
        <h2>Related</h2>
        <div className="content-block">
          <ul className="kn-related-links">
            {RELATED_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.title}</Link>
                <span> — {link.description}</span>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '16px' }}>
            Markdown source: <code>Kahana/12-strategic-narrative.md</code>
          </p>
        </div>
      </section>
    </div>
  )
}

export default KahanaNarrative
