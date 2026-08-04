import React from 'react'
import { Link } from 'react-router-dom'
import {
  KAHANA_PLATFORM_URL,
  KAHANA_EXPLORE_URL,
  KAHANA_PLATFORM_PAGE,
  KAHANA_HIGHLIGHTS,
  KAHANA_PLATFORM_SECTIONS,
  CORE_IDEA,
  HOW_WE_GROW,
  CLUB_PLAYBOOKS,
  SYNERGY_CARDS,
  GO_DEEPER_LINKS,
  VISION_LIBRARY,
} from '../data/kahanaPlatformSections'
import './Page.css'
import './KahanaPlatform.css'

function CoreIdeaSection() {
  return (
    <div className="content-block">
      <blockquote className="kahana-ze-quote">
        &ldquo;{VISION_LIBRARY.zeQuote}&rdquo;
        <footer>— {VISION_LIBRARY.zeAttribution}</footer>
      </blockquote>
      {CORE_IDEA.paragraphs.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
    </div>
  )
}

function HowWeGrowSection() {
  return (
    <div className="content-block">
      <p>{HOW_WE_GROW.intro}</p>
      <ol className="kahana-grow-verbs">
        {HOW_WE_GROW.verbs.map((verb) => (
          <li key={verb.name}>
            <strong>{verb.name}</strong>
            <span>{verb.detail}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function ClubPlaybooksSection() {
  return (
    <div className="content-block">
      <p>
        Key processes for GTM — book clubs and video clubs. Same playbook; content type differs. Start with
        ebooks, YouTube long-form, and courses that drive discussion with the team, friends, family, or others
        in your life.
      </p>
      <div className="kahana-playbook-grid">
        {CLUB_PLAYBOOKS.map((playbook) => (
          <article key={playbook.id} className="kahana-playbook" id={playbook.id}>
            <h3>{playbook.title}</h3>
            <p className="kahana-playbook-focus">{playbook.focus}</p>
            <ol className="kahana-playbook-steps">
              {playbook.steps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>
                    {step.detail}
                    {step.href ? (
                      <>
                        {' '}
                        <a href={step.href} target="_blank" rel="noopener noreferrer">
                          {step.linkLabel || step.href}
                        </a>
                      </>
                    ) : null}
                  </span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </div>
  )
}

function SynergyCardsSection() {
  return (
    <div className="content-block">
      <p>
        Kahana works alongside peers — complementary, not extractive. Each card shows how someone can use
        both: keep the other platform for what it does well, and use Kahana for library, Clubs, and Aura (often
        dual-list or cross-link). More cards can be added as we go.
      </p>
      <div className="kahana-synergy-grid">
        {SYNERGY_CARDS.map((card) => (
          <article key={card.id} className="kahana-synergy-card" id={`synergy-${card.id}`}>
            <p className="kahana-synergy-kicker">Synergy</p>
            <h3>Kahana + {card.partner}</h3>
            <dl className="kahana-synergy-dl">
              <div>
                <dt>They do well</dt>
                <dd>{card.theyDo}</dd>
              </div>
              <div>
                <dt>We do well</dt>
                <dd>{card.weDo}</dd>
              </div>
              <div>
                <dt>Together</dt>
                <dd>{card.together}</dd>
              </div>
              <div>
                <dt>Example flow</dt>
                <dd>{card.exampleFlow}</dd>
              </div>
            </dl>
            <p className="kahana-synergy-stance">{card.stance}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

function GoDeeperSection() {
  return (
    <div className="content-block">
      <p>Deep dives live elsewhere — this page stays focused on the core idea and how we grow.</p>
      <ul className="feature-list">
        {GO_DEEPER_LINKS.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label} →</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const SECTION_RENDERERS = {
  'core-idea': CoreIdeaSection,
  'how-we-grow': HowWeGrowSection,
  'club-playbooks': ClubPlaybooksSection,
  'synergy-cards': SynergyCardsSection,
  'go-deeper': GoDeeperSection,
}

function KahanaPlatform() {
  return (
    <div className="page" id="kahana-platform">
      <div className="page-header">
        <h1>{KAHANA_PLATFORM_PAGE.title}</h1>
        <p className="page-subtitle">{KAHANA_PLATFORM_PAGE.subtitle}</p>
      </div>

      <section className="kahana-platform-hero page-section" aria-label="Kahana platform overview">
        <div className="kahana-platform-hero-inner">
          <div>
            <p className="kahana-platform-hero-kicker">app.kahana.io</p>
            <h2 className="kahana-platform-hero-title">A digital library with Aura</h2>
            <p className="kahana-platform-hero-body">
              Kahana is a trusted digital library — ebooks, courses, and long-form video first — built for Clubs
              where friends and colleagues discuss, learn, and build empathy together. Aura (up to 5 per day)
              surfaces what the community believes deserves to rise. Formerly Curio. 6,500+ users and growing.
            </p>
            <div className="kahana-platform-hero-ctas">
              <a
                className="kahana-platform-hero-cta"
                href={KAHANA_PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enter the library →
              </a>
              <a
                className="kahana-platform-hero-cta kahana-platform-hero-cta--secondary"
                href={KAHANA_EXPLORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the catalog →
              </a>
            </div>
          </div>
          <ul className="kahana-highlight-grid" aria-label="Key facts">
            {KAHANA_HIGHLIGHTS.map((h) => (
              <li key={h.label} className="kahana-highlight-chip">
                <span className="kahana-highlight-label">{h.label}</span>
                <span className="kahana-highlight-detail">{h.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav className="content-block kahana-on-page-nav" aria-label="On this page">
        <p>
          <strong>On this page:</strong>{' '}
          {KAHANA_PLATFORM_SECTIONS.map((section, index) => (
            <React.Fragment key={section.id}>
              {index > 0 && ' · '}
              <a href={`#${section.id}`}>{section.title}</a>
            </React.Fragment>
          ))}
        </p>
      </nav>

      {KAHANA_PLATFORM_SECTIONS.map((section) => {
        const Renderer = SECTION_RENDERERS[section.id]
        return (
          <section key={section.id} className="page-section" id={section.id}>
            <h2>{section.title}</h2>
            {Renderer ? <Renderer /> : null}
          </section>
        )
      })}
    </div>
  )
}

export default KahanaPlatform
