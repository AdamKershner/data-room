import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSopById } from '../data/sopContent'
import './Page.css'
import './Sops.css'

function SopDoc({ sop }) {
  return (
    <article className="sop-doc" id={sop.id}>
      <header className="sop-doc-header">
        <p className="sop-doc-eyebrow">SOP {sop.number} · {sop.category}</p>
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
      </header>

      {sop.sections.map((section) => (
        <section key={section.id} className="sop-section" id={`${sop.id}-${section.id}`}>
          <h2>{section.title}</h2>
          {section.intro && <p className="sop-section-intro">{section.intro}</p>}
          <ol className="sop-steps">
            {section.steps.map((step, i) => (
              <li key={`${section.id}-${i}`}>
                <p>{step.text}</p>
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
    </div>
  )
}

export default SopDetail
