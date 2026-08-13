import React from 'react'
import { Link } from 'react-router-dom'
import {
  KAHANA_PLATFORM_URL,
  KAHANA_LIBRARY_URL,
  KAHANA_PLATFORM_PAGE,
  KAHANA_HIGHLIGHTS,
  KAHANA_PLATFORM_SECTIONS,
  CORE_IDEA,
  HOW_WE_GROW,
  CLUB_PLAYBOOKS,
  GO_DEEPER_LINKS,
  VISION_LIBRARY,
  COMPETITORS_PAGE_PATH,
} from '../data/kahanaPlatformSections'
import { getFeaturedCompanies } from '../data/kahanaCompanyDatabase'
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

function CompanyLandscapeTeaser() {
  const featured = getFeaturedCompanies(4)
  return (
    <div className="content-block">
      <p>
        Kahana works alongside peers — complementary, not extractive. Keep the other platform for what it
        does well; use Kahana for library, Clubs, and Aura. Browse the full Company Landscape.
      </p>
      <div className="kahana-landscape-teaser-grid">
        {featured.map((company) => (
          <article key={company.id} className="kahana-landscape-teaser-card">
            <p className="kahana-synergy-kicker">{company.category || 'Peer'}</p>
            <h3>Kahana + {company.name}</h3>
            <p>{company.kahanaOneLiner || company.together || company.useWithReason}</p>
          </article>
        ))}
      </div>
      <p className="kahana-landscape-teaser-cta">
        <Link to={COMPETITORS_PAGE_PATH}>Browse all companies on Company Landscape →</Link>
      </p>
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
  'company-landscape': CompanyLandscapeTeaser,
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
            <p className="kahana-platform-hero-kicker">kahana.io</p>
            <h2 className="kahana-platform-hero-title">Kahana</h2>
            <p className="kahana-platform-hero-aka">AKA &ldquo;The Aura Library&rdquo;</p>
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
                href={KAHANA_LIBRARY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse the library →
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
