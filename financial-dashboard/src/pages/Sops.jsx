import React from 'react'
import { SOP_PAGE, SOPS } from '../data/sopContent'
import './Page.css'
import './Sops.css'

function SopDoc({ sop }) {
  return (
    <article className="sop-doc" id={sop.id}>
      <header className="sop-doc-header">
        <p className="sop-doc-eyebrow">SOP {sop.number}</p>
        <h2>{sop.title}</h2>
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
          <h3>{section.title}</h3>
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
        <h3>Done when</h3>
        <ul className="sop-done-list">
          {sop.doneWhen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

function Sops() {
  return (
    <div className="page sops-page" id="sops">
      <div className="page-header">
        <h1>{SOP_PAGE.title}</h1>
        <p className="page-subtitle">{SOP_PAGE.subtitle}</p>
      </div>

      <section className="page-section sop-index">
        <h2>SOP index</h2>
        <ul className="sop-index-list">
          {SOPS.map((sop) => (
            <li key={sop.id}>
              <a href={`#${sop.id}`}>
                <span className="sop-index-num">SOP {sop.number}</span>
                {sop.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {SOPS.map((sop) => (
        <section key={sop.id} className="page-section">
          <SopDoc sop={sop} />
        </section>
      ))}
    </div>
  )
}

export default Sops
