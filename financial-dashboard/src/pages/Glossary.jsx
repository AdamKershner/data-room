import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Glossary.css'
import {
  CREATOR_STACK_LAYERS,
  KAHANA_CREATOR_STACK_POSITION,
} from '../data/creatorStackSegmentation'

function Glossary() {
  return (
    <div className="page glossary-page">
      <div className="page-header">
        <h1>Glossary</h1>
        <p className="glossary-subtitle">
          How Kahana relates to the creator stack and Market Map categories. For company facts, use{' '}
          <Link to="/company-landscape">Company Landscape</Link>; for the sized map, use{' '}
          <Link to="/fragment-capture">Market Map</Link>.
        </p>
      </div>

      <section className="page-section">
        <h2>Where Kahana sits</h2>
        <p className="glossary-lead">{KAHANA_CREATOR_STACK_POSITION}</p>
      </section>

      <section className="page-section">
        <h2>Creator stack — Kahana relation</h2>
        <p className="glossary-intro">
          Each layer is how creators operate. The note below is how Kahana relates — not what the layer
          is.
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
                <span className="glossary-k">Kahana</span> {layer.kahanaRelation}
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
