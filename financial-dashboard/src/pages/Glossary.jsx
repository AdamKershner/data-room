import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Glossary.css'
import {
  CREATOR_STACK_LAYERS,
  KAHANA_CREATOR_STACK_POSITION,
} from '../data/creatorStackSegmentation'
import { PRODUCT_AKA, PRODUCT_NAME, PRODUCT_NAME_WITH_AKA } from '../constants/kahanaSite'

function Glossary() {
  return (
    <div className="page glossary-page">
      <div className="page-header">
        <h1>Glossary</h1>
        <p className="glossary-subtitle">
          How {PRODUCT_NAME_WITH_AKA} relates to the creator stack and Market Map categories. For company
          facts, use <Link to="/company-landscape">Company Landscape</Link>; for the sized map, use{' '}
          <Link to="/fragment-capture">Market Map</Link>.
        </p>
      </div>

      <section className="page-section">
        <h2>Where {PRODUCT_NAME} sits</h2>
        <p className="glossary-lead">{KAHANA_CREATOR_STACK_POSITION}</p>
        <p className="glossary-aka-note">
          Platform name: <strong>{PRODUCT_NAME}</strong>. Also known as{' '}
          <strong>&ldquo;{PRODUCT_AKA}&rdquo;</strong>. <strong>Aura</strong> alone is the discovery signal
          (up to 5 per day) — not the product name.
        </p>
      </section>

      <section className="page-section">
        <h2>Creator stack — {PRODUCT_NAME} relation</h2>
        <p className="glossary-intro">
          Each layer is how creators operate. The note below is how {PRODUCT_NAME} relates — not what the
          layer is.
        </p>
        <div className="glossary-stack-list">
          {CREATOR_STACK_LAYERS.map((layer) => (
            <article key={layer.id} className="glossary-stack-item">
              <h3>{layer.name}</h3>
              <p className="glossary-purpose">{layer.purpose}</p>
              <p className="glossary-examples">
                <span className="glossary-k">Examples</span> {layer.examples}
              </p>
              <p className="glossary-kahana">
                <span className="glossary-k">{PRODUCT_NAME}</span> {layer.kahanaRelation}
              </p>
              {layer.onMap === false && (
                <p className="glossary-note">Not sized on the Market Map pie — ops layer only.</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Glossary
