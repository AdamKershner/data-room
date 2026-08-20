import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAdjacentSops, getSopById } from '../data/sopContent'
import './Page.css'
import './Sops.css'

function SopDoc({ sop }) {
  return (
    <article className="sop-doc" id={sop.id}>
      <header className="sop-doc-header">
        <p className="sop-doc-eyebrow">
          SOP {sop.number} · {sop.category}
        </p>
        <h1 className="sop-detail-title">{sop.title}</h1>
        <dl className="sop-meta">
          <div>
            <dt>Who</dt>
            <dd>{sop.who}</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>{sop.when}</dd>
          </div>
        </dl>
        {sop.notes?.length > 0 && (
          <div className="sop-callouts" role="note">
            {sop.notes.map((note) => (
              <p key={note} className="sop-callout">
                {note}
              </p>
            ))}
          </div>
        )}
      </header>

      {sop.sections.map((section) => (
        <section key={section.id} className="sop-section" id={`${sop.id}-${section.id}`}>
          <h2>{section.title}</h2>
          {section.intro && <p className="sop-section-intro">{section.intro}</p>}
          <ol className="sop-steps">
            {section.steps.map((step, i) => (
              <li key={`${section.id}-${i}`}>
                <p>{step.text}</p>
                {step.href && (
                  <p className="sop-step-link">
                    <a href={step.href} target="_blank" rel="noopener noreferrer">
                      {step.hrefLabel || step.href} →
                    </a>
                  </p>
                )}
                {step.note && <p className="sop-step-note">{step.note}</p>}
              </li>
            ))}
          </ol>
        </section>
      ))}

      <section className="sop-done-when" id={`${sop.id}-done-when`}>
        <h2>Done when</h2>
        <ul className="sop-done-list">
          {sop.doneWhen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

function SopDetail() {
  const { sopId } = useParams()
  const sop = getSopById(sopId)
  const { prev, next } = getAdjacentSops(sopId)

  if (!sop) {
    return (
      <div className="page sops-page" id="sop-detail">
        <div className="sop-back-banner">
          <Link to="/sops">← Back to SOPs</Link>
        </div>
        <div className="page-header">
          <h1>SOP not found</h1>
          <p className="page-subtitle">This procedure doesn&apos;t exist yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page sops-page" id="sop-detail">
      <div className="sop-back-banner">
        <Link to="/sops">← Back to SOPs</Link>
      </div>
      <SopDoc sop={sop} />
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
    </div>
  )
}

export default SopDetail
