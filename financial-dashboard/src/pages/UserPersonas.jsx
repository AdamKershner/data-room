import React from 'react'
import { Link } from 'react-router-dom'
import {
  PERSONAS,
  PERSONA_TYPES,
  RELATED_LINKS,
  USER_PERSONAS_PAGE,
} from '../data/userPersonasContent'
import './Page.css'
import './UserPersonas.css'

function PersonaCard({ persona }) {
  return (
    <article className="up-card" id={persona.id}>
      <div className="up-card-top">
        <img className="up-photo" src={persona.photo} alt={persona.photoAlt} />
        <div>
          <span className="up-kicker">{persona.type} persona</span>
          <h3>{persona.name}</h3>
          <p className="up-role">{persona.role}</p>
          <p className="up-lede" style={{ marginBottom: 0 }}>
            {persona.summary}
          </p>
          {persona.mantra ? <p className="up-lede">{persona.mantra}</p> : null}
          <blockquote className="up-quote">
            “{persona.quote}” — {persona.quoteBy}
          </blockquote>
        </div>
      </div>

      <div className="up-grid">
        <div className="up-block">
          <h4>Quick facts</h4>
          <ul className="up-facts">
            {persona.facts.map((row) => (
              <li key={row.label}>
                <strong>{row.label}:</strong> {row.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="up-block">
          <h4>Content and style</h4>
          <ul className="up-facts">
            {persona.contentStyle.map((row) => (
              <li key={row.label}>
                <strong>{row.label}:</strong> {row.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="up-block">
          <h4>Background and lifestyle</h4>
          <ul>
            {persona.background.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="up-block">
          <h4>Challenges and pain points</h4>
          <ul>
            {persona.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="up-block">
          <h4>Goals and motivations</h4>
          <ul>
            {persona.goals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="up-block">
          <h4>Needs from a platform like Kahana</h4>
          <ul>
            {persona.needs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="up-footer">
        <strong>{persona.footer}</strong>
        <br />
        {persona.kahanaLine}
      </p>
    </article>
  )
}

function UserPersonas() {
  const creators = PERSONAS.filter((p) => p.type === 'creator')
  const buyers = PERSONAS.filter((p) => p.type === 'buyer')

  return (
    <div className="page" id="user-personas">
      <div className="page-header">
        <h1>{USER_PERSONAS_PAGE.title}</h1>
        <p className="page-subtitle">{USER_PERSONAS_PAGE.subtitle}</p>
      </div>

      <section className="page-section">
        <p className="up-lede">
          Start with a named person, not “everyone interested in content.” Add the next card through{' '}
          <Link to="/sops/user-personas">SOP 32</Link>. Campaign copy still lives on the{' '}
          <Link to="/mood-board">Mood Board</Link>.
        </p>
        <div className="up-types">
          {PERSONA_TYPES.map((t) => (
            <div className="up-type" key={t.id}>
              <h3>{t.title}</h3>
              <p>{t.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section" id="creators">
        <h2>Creators</h2>
        {creators.map((persona) => (
          <PersonaCard key={persona.id} persona={persona} />
        ))}
      </section>

      <section className="page-section" id="buyers">
        <h2>Buyers</h2>
        {buyers.length === 0 ? (
          <p className="up-empty">
            No buyer persona yet. Use SOP 32 and the Dhruthi sections as the template.
          </p>
        ) : (
          buyers.map((persona) => <PersonaCard key={persona.id} persona={persona} />)
        )}
      </section>

      <section className="page-section" id="related">
        <h2>Related</h2>
        <ul className="up-related">
          {RELATED_LINKS.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.title}</Link>
              <span> — {link.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default UserPersonas
