import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Events.css'
import {
  DURATION_STATS,
  FORMAT_STATS,
  RESPONSES,
  SURVEY_META,
  THEME_CHIP_LABELS,
  THEME_LABELS,
  THEME_STATS,
} from '../data/communityEventsSurvey'

/** Omad Shaikh — LinkedIn profile photo (400×400). */
const OMAD_HEADSHOT_URL =
  'https://media.licdn.com/dms/image/v2/C5603AQGD3CJdjaOjGQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517482665497?e=1777507200&v=beta&t=4hZ8chAVb67RxlUhMeUKH_H_jGReVPcK9MAtHKimQok'

/** Live survey — Kahana Community-Led Events on Tally. */
const COMMUNITY_EVENTS_SURVEY_URL = 'https://tally.so/r/NpYZqB'

/** Google Sheet export / linked responses. */
const COMMUNITY_EVENTS_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1A58SDwSmWGo9bf9EwkjAw-FJVUKARwrmv9E4uYFO_zg/edit?gid=0#gid=0'

/** Same asset as Q1 Executive Report — Unique differentiation (calm / ease while AI does the work). */
const OASIS_SLOTH_HAMMOCK_URL = '/images/oasis-sloth-hammock-differentiation.png'

const PROBLEM_STAT_TILES = [
  {
    key: 'ai-use',
    stat: '75%',
    title: 'Knowledge workers use AI regularly',
    copy: 'AI adoption is now mainstream, expanding the unmanaged AI surface area inside organizations.',
    sourceHref: 'https://www.worklytics.co/resources/2025-ai-adoption-benchmarks-employee-usage-statistics',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="12" height="10" rx="2" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        <circle cx="10" cy="13" r="1" />
        <circle cx="14" cy="13" r="1" />
        <path d="M10 16h4" />
      </svg>
    ),
  },
  {
    key: 'shadow',
    stat: '57%',
    title: 'Shadow AI users input sensitive data',
    copy: 'In Jan 2025 alone, AI sites saw 10.53B visits and 80% came from everyday work sessions — where productivity and security collide.',
    sourceHref:
      'https://www.menlosecurity.com/press-releases/menlo-securitys-2025-report-uncovers-68-surge-in-shadow-generative-ai-usage-in-the-modern-enterprise',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 2.8 19a1 1 0 0 0 .87 1.5h16.66A1 1 0 0 0 21.2 19L12 3Z" />
        <path d="M12 9v5" />
        <circle cx="12" cy="17" r="1" />
      </svg>
    ),
  },
  {
    key: 'block',
    stat: '17%',
    title: 'Companies can block confidential uploads',
    copy: 'Most enterprises still lack technical controls to prevent data uploads to public AI tools.',
    sourceHref: 'https://www.kiteworks.com/cybersecurity-risk-management/ibm-2025-data-breach-report-ai-risks/',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 1 1 8 0v3" />
        <circle cx="12" cy="16" r="1.1" />
      </svg>
    ),
  },
]

function Events() {
  const maxTheme = Math.max(...THEME_STATS.map((t) => t.count), 1)
  const maxFormat = Math.max(...FORMAT_STATS.map((f) => f.count), 1)

  return (
    <div className="page" id="events">
      <div className="page-header">
        <p className="events-brief-kicker">Kahana × Everyday Business Leaders · May 2026</p>
        <h1>Co-host planning brief</h1>
        <p className="page-subtitle">
          A single place for <strong>Gregory Gray</strong> (founder,{' '}
          <strong>Everyday Business Leaders</strong>) and <strong>Adam Kershner</strong> (CEO, Kahana) to review{' '}
          <strong>survey data and qualitative signals</strong> while aligning on the{' '}
          <strong>masterclass title</strong>, <strong>format</strong>, <strong>agenda</strong>, and{' '}
          <strong>perks / giveaways</strong> for the joint session.
        </p>
        <div className="events-top-actions" role="navigation" aria-label="Survey and response data">
          <a
            className="events-top-btn events-top-btn--primary"
            href={COMMUNITY_EVENTS_SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Take the survey — Kahana Community-Led Events (Tally)
          </a>
          <a
            className="events-top-btn events-top-btn--secondary"
            href={COMMUNITY_EVENTS_SHEET_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open survey responses (Google Sheet)
          </a>
        </div>
      </div>

      <p className="events-audience-line">
        <strong>Purpose:</strong> turn what we are learning from respondents —{' '}
        <strong>Kahana team members</strong> plus <strong>prospective attendees across industries</strong> — into concrete
        decisions Greg and Adam can make together before promoting the event.
      </p>

      <nav className="events-toc" aria-label="On this page">
        <h2 className="events-toc-title">On this page</h2>
        <ol className="events-toc-list">
          <li>
            <a className="events-toc-link" href="#events-landing">
              Proposed event page <span className="events-toc-desc">(landing preview for attendees)</span>
            </a>
          </li>
          <li>
            <a className="events-toc-link" href="#events-rationale">
              Rationale &amp; data <span className="events-toc-desc">(evidence behind the proposal)</span>
            </a>
          </li>
        </ol>
      </nav>

      {/* ——— Section 1: attendee-facing landing preview ——— */}
      <section className="events-section events-section--landing" id="events-landing" aria-labelledby="events-landing-heading">
        <p className="events-section-label">Section 1</p>
        <h2 className="events-section-title" id="events-landing-heading">
          Proposed event page
        </h2>
        <p className="events-section-lead">
          Draft copy and layout mimicking what attendees would see on a <strong>registration landing page</strong> — everything
          they need to decide whether to sign up. (Registration URL / platform TBD.)
        </p>

        <div className="events-landing-frame">
          <p className="events-landing-badge">Live masterclass · May 2026</p>
          <p className="events-landing-hosts">
            Presented by <strong>Everyday Business Leaders</strong> &amp; <strong>Kahana</strong>
          </p>

          <h3 className="events-landing-title">
            Where Productivity and Security Collide: A Masterclass for Business Leaders on AI, Risk, and Control
          </h3>

          <div className="events-landing-hero">
            <div className="events-landing-hero-text">
              <p className="events-landing-hook">
                We&apos;re all trying to leverage AI as best we can. You&apos;ve probably dreamed of autonomous agents handling
                your business processes—or at least taking real work off your plate—while you sip piña coladas.{' '}
                <em>Right?</em> This session starts there, then gets honest about what it takes when{' '}
                <strong>productivity</strong> and <strong>security</strong> collide in the real world.
              </p>
            </div>
            <figure className="events-landing-sloth">
              <img
                src={OASIS_SLOTH_HAMMOCK_URL}
                alt="Relaxed sloth in a hammock — the vibe of letting automation handle the busywork"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          <div className="events-landing-block">
            <h4 className="events-landing-h4">About this masterclass</h4>
            <p>
              Every business is under pressure to move faster with AI — but the same tools that boost productivity can quietly
              create <strong>data risk</strong>, <strong>policy gaps</strong>, and <strong>shadow IT</strong> you might not see
              until something breaks. Most of that activity happens where work actually gets done: SaaS, AI assistants, agents,
              and day-to-day workflows converging in one place.
            </p>
            <p>
              Join <strong>Gregory Gray</strong> (Everyday Business Leaders) and <strong>Adam Kershner</strong> (Kahana) for a{' '}
              <strong>~60-minute live session</strong> built for owners and leaders who are not full-time security
              professionals. Expect a <strong>plain-language story</strong>, <strong>real examples</strong>, and{' '}
              <strong>live Q&amp;A</strong> — no jargon wall, no death-by-slides.
            </p>
          </div>

          <div className="events-landing-block events-landing-block--highlight">
            <h4 className="events-landing-h4">What you&apos;ll walk away with</h4>
            <ul className="events-landing-checklist">
              <li>
                A clearer picture of <strong>where AI friction actually lives</strong> for your organization — especially the
                tension between <strong>moving fast</strong> and <strong>staying in control</strong>.
              </li>
              <li>
                Practical language to discuss <strong>shadow AI</strong>, <strong>data boundaries</strong>, and{' '}
                <strong>“good enough” governance</strong> with your team, IT partners, or advisors — without killing speed.
              </li>
              <li>
                An understanding of <strong>where work (and leaks) actually happen</strong> in modern stacks — and what to ask
                vendors or internal teams about next.
              </li>
              <li>
                <strong>Live Q&amp;A</strong> so you can pressure-test how this applies to your industry and operating model.
              </li>
            </ul>
          </div>

          <div className="events-landing-block">
            <h4 className="events-landing-h4">Included when you register</h4>
            <ul className="events-landing-includes">
              <li>
                <strong>~60-minute</strong> masterclass + moderated Q&amp;A
              </li>
              <li>
                <strong>Lock in founder pricing</strong> for the <strong>Oasis Enterprise Browser</strong>.
              </li>
              <li>
                <strong>Complimentary Productivity &amp; Security Diagnosis:</strong> a brief written take on which{' '}
                <strong>core functions and processes</strong> in your business are the best candidates to automate with AI{' '}
                <strong>safely</strong>. <strong>Greg</strong> brings years of process experience and has helped companies refine how
                they work; <strong>Adam</strong> brings AI and security expertise. Together they summarize where it makes sense to
                focus — across areas like <strong>marketing</strong>, <strong>sales</strong>, <strong>HR</strong>,{' '}
                <strong>product</strong>, <strong>finance</strong>, and the rest of your operation — so you know where to
                prioritize.
              </li>
              <li>
                <strong>Leader checklist (PDF):</strong> &ldquo;10 questions to ask before your team adopts another AI tool&rdquo;
              </li>
            </ul>
          </div>

          <div className="events-landing-block">
            <h4 className="events-landing-h4">What attendees are saying</h4>
            <figure className="events-quote-card events-quote-card--profile events-quote-card--landing">
              <div className="events-profile-header">
                <img
                  className="events-profile-photo"
                  src={OMAD_HEADSHOT_URL}
                  alt="Omad Shaikh, finance and real estate business owner"
                  width={88}
                  height={88}
                  loading="lazy"
                  decoding="async"
                />
                <div className="events-profile-text">
                  <strong className="events-profile-name">Omad Shaikh</strong>
                  <div className="events-profile-role">Business owner — finance &amp; real estate</div>
                </div>
              </div>
              <blockquote className="events-direct-quote">
                <p>
                  &ldquo;I want to build agents that are doing research/work/tasks for me round the clock. My background is
                  finance and real estate. Since I just started a project on a home I hope to build agents to help me along the
                  process of the rehab. With finance I want to have agents testing data sets and strategies I have built and/or
                  wish to build. I think there is a lot more that I would use it for. Building businesses, websites, tools
                  etc.&rdquo;
                </p>
              </blockquote>
            </figure>
          </div>

          <div className="events-landing-cta" role="note">
            <span className="events-landing-cta-label">Registration</span>
            <span className="events-landing-cta-placeholder">Link and date/time TBD — placeholder for launch</span>
          </div>
        </div>
      </section>

      {/* ——— Section 2: rationale & data ——— */}
      <section className="events-section events-section--rationale" id="events-rationale" aria-labelledby="events-rationale-heading">
        <p className="events-section-label">Section 2</p>
        <h2 className="events-section-title" id="events-rationale-heading">
          Rationale &amp; data
        </h2>
        <p className="events-section-lead">
          Evidence, survey results, and planning notes that <strong>support Section 1</strong> — for Greg and Adam to sanity-check
          the landing copy, title, agenda, and perks before promotion.
        </p>

        <p className="events-rationale-meta">
          The landing preview above is synthesized from the <strong>Community-Led Events survey</strong> on this page (
          {SURVEY_META.responseCount} responses, {SURVEY_META.dateRangeLabel}) — including <strong>Kahana internal team</strong>{' '}
          and <strong>external contacts Adam has built relationships with</strong> who match{' '}
          <strong>business-owner / operator</strong> interest in <strong>productivity</strong>, <strong>AI</strong>, and{' '}
          <strong>security</strong>. Treat it as a <strong>starting point</strong> for discussion, not a final sign-off.
        </p>

        <h3 className="events-problem-context-heading">Why the topic lands now — problem stats</h3>
        <p className="events-problem-context-intro">
          Same <strong>enterprise AI risk indicators</strong> as the{' '}
          <Link className="events-inline-link" to="/Q1-executive-report#identification-of-problem">
            Q1 Executive Update — Identification of Problem
          </Link>
          . They ground the masterclass in numbers, not fear-mongering.
        </p>
        <div className="events-problem-grid" aria-label="Enterprise AI risk indicators">
          {PROBLEM_STAT_TILES.map((tile) => (
            <article key={tile.key} className="events-problem-tile">
              <div className="events-problem-icon" aria-hidden="true">
                {tile.icon}
              </div>
              <div className="events-problem-stat">{tile.stat}</div>
              <p className="events-problem-title">{tile.title}</p>
              <p className="events-problem-copy">{tile.copy}</p>
              <a className="events-problem-source" href={tile.sourceHref} target="_blank" rel="noopener noreferrer">
                Source
              </a>
            </article>
          ))}
        </div>

        <aside className="events-greg-note" aria-label="Note from Gregory Gray">
          <p>
            <strong>From Greg (recent):</strong> Be thinking about what you could either{' '}
            <strong>sell at a low ticket price</strong> or <strong>give away as an incentive</strong> — for example a{' '}
            <strong>meaningful discount</strong>, a <strong>short consult</strong>, or something in that spirit — on the
            masterclass. Also start thinking about the <strong>title of the masterclass</strong>. (Section 1 now drafts a{' '}
            <strong>founder pricing</strong> on the <strong>Oasis Enterprise Browser</strong> plus a{' '}
            <strong>complimentary Productivity &amp; Security Diagnosis</strong>.)
          </p>
          <footer>— Gregory Gray, founder, Everyday Business Leaders</footer>
        </aside>

        <section className="events-dashboard" aria-label="Survey snapshot">
          <div className="events-dashboard-grid">
            <div className="events-dashboard-card">
              <div className="events-dashboard-value">{SURVEY_META.responseCount}</div>
              <div className="events-dashboard-label">Responses ({SURVEY_META.dateRangeLabel})</div>
            </div>
            <div className="events-dashboard-card events-dashboard-card--accent">
              <div className="events-dashboard-value">{SURVEY_META.optInPercent}%</div>
              <div className="events-dashboard-label">Opted in to events-only email list</div>
            </div>
            <div className="events-dashboard-card">
              <div className="events-dashboard-value">60 min</div>
              <div className="events-dashboard-label">Most common ideal length (7 of 11)</div>
            </div>
            <div className="events-dashboard-card">
              <div className="events-dashboard-value">7 / 11</div>
              <div className="events-dashboard-label">Chose “security vs. productivity” theme</div>
            </div>
          </div>
        </section>

        <div className="events-callout">
          <p>
            <strong>Strategic headline from the data:</strong> People want programming that bridges{' '}
            <strong>AI adoption in the real world</strong> with <strong>security, identity, and control</strong> — especially
            where <strong>productivity and security collide</strong> (shadow AI, sensitive data, governance gaps, unmanaged
            devices).
          </p>
          <p>
            <strong>Format signal:</strong> Strong interest in <strong>webinars / masterclass-style sessions</strong>,{' '}
            <strong>hands-on workshops</strong>, and <strong>AMAs</strong>, with room for fireside chats, roundtables, and light
            networking for an EBL × Kahana audience.
          </p>
        </div>

        <section className="page-section events-rationale-subsection">
          <h3 className="events-rationale-subheading">Masterclass title — discussion starters</h3>
          <div className="content-block">
            <p>
              Working titles only — refine for EBL tone, SEO, and calendar invites. Greg flagged titling as an explicit next
              step. (Section 1 shows the current default pick.)
            </p>
            <ul className="feature-list">
              <li>
                <strong>AI, Agents &amp; Your Business:</strong> What to Automate First (Without Losing Control)
              </li>
              <li>
                <strong>Where Productivity and Security Collide:</strong> Shadow AI, Real Work, and Control
              </li>
              <li>
                <strong>From ChatGPT to Governance:</strong> A Practical Masterclass for Business Leaders
              </li>
              <li>
                <strong>Secure AI in the Wild:</strong> How Real Teams Adopt Tools — and What IT Wishes You Knew
              </li>
            </ul>
          </div>
        </section>

        <section className="page-section events-rationale-subsection">
          <h3 className="events-rationale-subheading">Format, length &amp; agenda building blocks</h3>
          <div className="content-block">
            <h4 className="events-planning-h3">Length</h4>
            <div className="events-duration-pills" role="list">
              {DURATION_STATS.map(({ minutes, count, label }) => (
                <div key={minutes} className="events-duration-pill" role="listitem">
                  <strong>{label}</strong> — {count} survey response{count !== 1 ? 's' : ''}
                </div>
              ))}
            </div>
            <p>
              <strong>Default recommendation:</strong> plan the <strong>core masterclass ~60 minutes</strong> (matches majority
              preference) plus optional <strong>15 minutes</strong> for Q&amp;A or a short breakout if the platform allows.
            </p>

            <h4 className="events-planning-h3">Format (from survey multi-select)</h4>
            <div className="events-bar-block" role="list">
              {FORMAT_STATS.map(({ key, label, count }) => (
                <div key={key} className="events-bar-row" role="listitem">
                  <div className="events-bar-top">
                    <div className="events-bar-label">{label}</div>
                    <div className="events-bar-count">{count}</div>
                  </div>
                  <div className="events-bar-track" aria-hidden="true">
                    <div className="events-bar-fill" style={{ width: `${(count / maxFormat) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p>
              A <strong>live masterclass + moderated Q&amp;A</strong> maps cleanly to “webinar” and “AMA” demand; a follow-on{' '}
              <strong>office-hours or resource drop</strong> can stand in for workshop energy without over-scoping May.
            </p>

            <h4 className="events-planning-h3">Sample agenda outline (draft)</h4>
            <ol className="events-agenda-list">
              <li>
                <strong>Opening (Greg + Adam, ~5 min):</strong> why this topic now for business leaders; what EBL and Kahana each
                bring.
              </li>
              <li>
                <strong>Reality check (~15 min):</strong> how teams actually adopt AI — productivity upside vs. data and
                security gaps (tie to survey themes).
              </li>
              <li>
                <strong>Deep dive (~30 min):</strong> where work actually happens; shadow AI; what “good governance” looks like
                without killing speed — Kahana POV with concrete examples.
              </li>
              <li>
                <strong>Audience Q&amp;A (~10 min).</strong>
              </li>
              <li>
                <strong>Close (~5 min):</strong> clear CTA — perk redemption, next step, or low-ticket offer.
              </li>
            </ol>
          </div>
        </section>

        <section className="page-section events-rationale-subsection">
          <h3 className="events-rationale-subheading">Perks, giveaways &amp; low-ticket ideas (planning)</h3>
          <div className="content-block">
            <p>
              Aligns with Greg’s prompt: pair the masterclass with something <strong>easy to explain</strong>,{' '}
              <strong>low friction to fulfill</strong>, and <strong>trust-aligned</strong>. Section 1 shows the attendee-facing
              short list; below is extra detail for internal planning.
            </p>
            <ul className="feature-list">
              <li>
                <strong>Founder pricing lock-in</strong> for <strong>Oasis Enterprise Browser</strong> for qualifying registrants —
                define eligibility, price book, end date, and how it stacks with other promos with Kahana
                before launch.
              </li>
              <li>
                <strong>Productivity &amp; Security Diagnosis (Greg + Adam):</strong> written output mapping which core
                functions/processes are strongest candidates for <strong>safe</strong> AI automation. Greg: process refinement and
                operations; Adam: AI and security. Brief summary by area (e.g. marketing, sales, HR, product, finance) — high touch;
                cap volume if needed.
              </li>
              <li>
                <strong>Leader checklist (PDF):</strong> “10 questions to ask before your team adopts another AI tool” — cheap to
                produce, high perceived value.
              </li>
              <li>
                <strong>Limited office hours:</strong> raffle or first-N signups get a short block with Kahana (optional if the
                diagnosis covers high-touch follow-up).
              </li>
              <li>
                <strong>Partner framing:</strong> position <strong>founder pricing</strong> as <strong>EBL-exclusive</strong> where
                appropriate — confirm pricing, capacity, and fulfillment with Kahana.
              </li>
            </ul>
          </div>
        </section>

        <section className="page-section events-rationale-subsection">
          <h3 className="events-rationale-subheading">Survey themes (what respondents weighted)</h3>
          <div className="content-block">
            <p>Each respondent could select multiple themes. Counts are non-exclusive.</p>
            <div className="events-bar-block" role="list">
              {THEME_STATS.map(({ key, count }) => (
                <div key={key} className="events-bar-row" role="listitem">
                  <div className="events-bar-top">
                    <div className="events-bar-label">{THEME_LABELS[key]}</div>
                    <div className="events-bar-count">
                      {count} ({Math.round((count / SURVEY_META.responseCount) * 100)}%)
                    </div>
                  </div>
                  <div className="events-bar-track" aria-hidden="true">
                    <div className="events-bar-fill" style={{ width: `${(count / maxTheme) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section events-rationale-subsection">
          <h3 className="events-rationale-subheading">Insights to drive discussion</h3>
          <div className="content-block">
            <ul className="events-insights-list">
              <li>
                <strong>AI + governance:</strong> Non-deterministic tools, shadow AI, and data in consumer LLMs show up
                repeatedly — good fodder for a leader-friendly “what could go wrong” segment.
              </li>
              <li>
                <strong>Where the gap shows up:</strong> Several responses tie risk to everyday work surfaces and visibility —
                natural bridge to Kahana’s story without a pure product pitch.
              </li>
              <li>
                <strong>Identity and access:</strong> IAM strain, contractors, and non-human identities (agents, APIs) — useful for
                ops-heavy businesses.
              </li>
              <li>
                <strong>Speaker energy:</strong> Preference for <strong>practitioners who can demo</strong> or “live audit” over
                celebrity keynotes.
              </li>
              <li>
                <strong>Sample composition:</strong> Kahana internal voices plus cross-industry prospects; response table
                anonymized. Directional only — layer EBL member intuition on top.
              </li>
            </ul>
          </div>
        </section>

        <section className="page-section events-rationale-subsection">
          <h3 className="events-rationale-subheading">Speaker &amp; guest angles (from optional survey field)</h3>
          <div className="content-block">
            <p>Ideas respondents suggested if Greg and Adam want a guest or co-demo:</p>
            <ul className="feature-list">
              <li>Enterprise security practitioners focused on shadow AI and in-session risk.</li>
              <li>LinkedIn-active voices on AI + security trends (credible, not hype-only).</li>
              <li>Enterprise ecosystem perspectives (e.g. cloud / platform) for third-party validation.</li>
              <li>Technical demo or short “live audit” instead of slides-only.</li>
            </ul>
          </div>
        </section>

        <section className="page-section events-rationale-subsection">
          <h3 className="events-rationale-subheading">Response-level summary ({SURVEY_META.name})</h3>
          <div className="content-block">
            <p>
              Condensed challenges from the survey export; full verbatim answers in the source sheet. Rows{' '}
              <strong>anonymized</strong> as <strong>Survey respondent</strong>. Theme chips abbreviate full labels (hover for
              full text).
            </p>
            <div className="events-table-wrap">
              <table className="events-table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Respondent</th>
                    <th scope="col">Themes</th>
                    <th scope="col">Length</th>
                    <th scope="col">Challenge (summary)</th>
                  </tr>
                </thead>
                <tbody>
                  {RESPONSES.map((r) => (
                    <tr key={r.id}>
                      <td className="events-cell-muted">{r.submittedAt}</td>
                      <td>
                        {r.name}
                        {r.affiliation && r.affiliation !== '—' ? (
                          <span className="events-cell-muted">
                            <br />
                            {r.affiliation}
                          </span>
                        ) : null}
                      </td>
                      <td>
                        <div className="events-chip-row">
                          {r.themes.map((tk) => (
                            <span key={tk} className="events-chip" title={THEME_LABELS[tk]}>
                              {THEME_CHIP_LABELS[tk]}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="events-cell-muted">{r.durationMinutes} min</td>
                      <td>
                        <div className="events-challenge">{r.challengeSummary}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Events
