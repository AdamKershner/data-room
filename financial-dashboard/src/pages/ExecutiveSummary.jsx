import React from 'react'
import { Link } from 'react-router-dom'
import KeyHighlights from '../components/KeyHighlights'
import FinancialSummary from '../components/FinancialSummary'
import { TOC_EXPLORE_ITEMS } from '../data/tocExploreGrid'
import { formatCardTitle } from '../utils/formatCardTitle'
import { DataRoomSearchPanel } from '../components/DataRoomSearch'
import BusinessFunctionExploreGrid from '../components/BusinessFunctionExploreGrid'
import oasisBrowserAiSplitScreenshot from '../images/oasis-browser-ai-split-screenshot.png'
import emptyStateBackground from '../images/empty-state-background.png'
import './Page.css'
import './ExecutiveSummary.css'

const DOWNLOAD_URL = 'https://kahana.co/installations'

/** Oasis Enterprise: IT & Security / data governance overview (YouTube). */
const OASIS_ENTERPRISE_IT_VIDEO_ID = 'hn6pcZ53n48'
const OASIS_ENTERPRISE_IT_VIDEO_URL = `https://www.youtube.com/watch?v=${OASIS_ENTERPRISE_IT_VIDEO_ID}`

/** ~30s animated Short on big-tech data extraction (beside metaphor copy). */
const EXTRACTION_CONCEPT_SHORT_ID = 'mtqBuQGG3G0'
const EXTRACTION_CONCEPT_SHORT_URL = 'https://www.youtube.com/shorts/mtqBuQGG3G0?feature=share'

function ExecutiveSummary() {
  return (
    <div className="page" id="executive-summary">
      <div className="page-header">
        <h1>Executive Summary</h1>
        <p className="page-subtitle">
          Oasis: a calmer place to work online—AI-native browsing without surrendering your attention to
          big-tech extraction.
        </p>
      </div>

      <section className="exec-hero page-section" aria-label="Oasis hero">
        <div className="exec-hero-inner">
          <div className="exec-hero-image-wrap">
            <img
              src={emptyStateBackground}
              alt="Oasis empty state: sloth resting in a hammock between palm trees"
              className="exec-hero-image exec-hero-image--empty-state"
              width={520}
              height={400}
            />
          </div>
          <div>
            <p className="exec-hero-kicker">Oasis Browser</p>
            <h2 className="exec-hero-title">Relax, you found the Oasis</h2>
            <p className="exec-hero-body">
              The default web is built to harvest signals: every tab, search, and assistant touchpoint
              feeds someone else&apos;s model of you. Oasis is different—a refuge where your browsing
              serves <em>your</em> work, not an ad stack. Natural-language and voice control cut through
              tab chaos so you can stay in flow. When a command misses, we learn from it: feedback and
              training data close the loop so the assistant gets sharper over time.
            </p>
            <p className="exec-hero-tagline">
              Welcome to the most elegant way to browse—speak or type what you need; Oasis handles the
              rest.
            </p>
            <div className="exec-hero-ctas">
              <a className="exec-cta exec-cta--primary" href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                Download Oasis
              </a>
            </div>
            <ul className="exec-hero-secondary-links">
              <li>
                <Link to="/knowledge-base">Product details</Link>
              </li>
              <li>
                <Link to="/sprints">For IT &amp; teams</Link>
              </li>
              <li>
                <a href="#oasis-enterprise-it-video">IT &amp; Security overview (video)</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section exec-story-section">
        <div className="content-block">
          <div className="exec-bigtech-metaphor" aria-labelledby="exec-bigtech-metaphor-heading">
            <div className="exec-bigtech-row">
              <div className="exec-bigtech-row__text">
                <h3 id="exec-bigtech-metaphor-heading" className="exec-bigtech-metaphor__title">
                  When you feel big tech hovering around like mosquitoes trying to suck your blood
                </h3>
                <p className="exec-bigtech-metaphor__lead">
                  A lot of people are quietly scared of how much gets siphoned off while they work: tabs,
                  searches, and assistants feeding models and ad graphs they never opted into. It can feel
                  less like &ldquo;using the internet&rdquo; and more like sitting outside at dusk while
                  pests keep landing—persistent, draining, and hard to swat away for good. The
                  surveillance-by-default web treats attention and identity like an open buffet—Oasis is
                  built so your workday isn&apos;t the meal. The Short beside this is the same idea in
                  motion: a quick animated take on how signal gets skimmed from everyday browsing.
                </p>

                <div className="exec-refuge exec-refuge--in-metaphor">
                  <h4 className="exec-story-subheading">Your online refuge from the attention economy</h4>
                  <p>
                    Oasis is built for peace of mind: fewer context switches, less manual window wrangling,
                    and built-in AI that stays on task with you. Our promise is simple—help you focus on
                    real work in a browser that respects your intent and your time.
                  </p>
                </div>

                <div className="exec-privacy exec-privacy--in-metaphor">
                  <h4 className="exec-story-subheading">Privacy first by design</h4>
                  <p>
                    We architect Oasis so sensitive workflows are not treated as free training fodder for
                    opaque platforms. Commands and context stay oriented around getting your job done; we
                    minimize unnecessary telemetry, document what we collect, and align product decisions
                    with clear user expectations—not surprise resale of behavioral surplus.
                  </p>
                  <p>
                    As we grow enterprise and team deployments, that posture extends to admin controls,
                    audit-friendly practices, and honest disclosure in our policies. Privacy is not a
                    footnote; it is how we earn the right to sit next to your research, your code, and your
                    customer data.
                  </p>
                </div>

                <figure className="exec-product-screenshot">
                  <img
                    src={oasisBrowserAiSplitScreenshot}
                    alt="Oasis browser: new tab and web content on the left, Oasis AI Beta sidebar on the right showing natural-language tab group commands and responses"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
              <div className="exec-bigtech-row__media">
                <div className="exec-short-embed">
                  <iframe
                    title="YouTube Short: animated concept of tech giants extracting data"
                    src={`https://www.youtube.com/embed/${EXTRACTION_CONCEPT_SHORT_ID}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <p className="exec-bigtech-short__footer">
                  <a href={EXTRACTION_CONCEPT_SHORT_URL} target="_blank" rel="noopener noreferrer">
                    Open this Short on YouTube
                  </a>{' '}
                  if the embed is blocked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="page-section exec-video-section"
        id="oasis-enterprise-it-video"
        aria-labelledby="exec-video-heading"
      >
        <h2 id="exec-video-heading">Oasis Enterprise for IT &amp; Security</h2>
        <div className="content-block">
          <p>
            How the Oasis Enterprise browser supports IT and security teams with{' '}
            <strong>data governance</strong>—visibility, policy, and control without fighting the way
            people actually work.
          </p>
          <div className="exec-video-embed">
            <iframe
              title="Oasis Enterprise browser: IT and Security data governance overview"
              src={`https://www.youtube.com/embed/${OASIS_ENTERPRISE_IT_VIDEO_ID}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="exec-video-caption">
            <a href={OASIS_ENTERPRISE_IT_VIDEO_URL} target="_blank" rel="noopener noreferrer">
              Open on YouTube
            </a>{' '}
            if the embed is blocked by your network.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Value Proposition</h2>
        <div className="content-block">
          <p>
            Natural-language commands and voice control translate directly into measurable time savings,
            improved focus, and higher productivity for both individuals and teams. By eliminating the
            friction of manual browser management, Oasis enables knowledge workers to maintain flow state
            and reduce the mental overhead of juggling multiple projects, research threads, and
            information sources.
          </p>
        </div>
      </section>

      <section className="page-section exec-toc-section" aria-labelledby="exec-toc-heading">
        <h2 id="exec-toc-heading">Explore the data room</h2>
        <div className="content-block">
          <p className="exec-toc-intro">
            Same destinations as the table of contents in the nav menu—jump straight into weekly
            updates, sprints, PMF/NPS, onboarding, the knowledge base, and archived reports.
          </p>
          <div className="exec-explore-search">
            <DataRoomSearchPanel maxResults={14} showKbLink compactResults />
          </div>
          <div className="exec-toc-grid">
            {TOC_EXPLORE_ITEMS.map((item) => (
              <Link key={item.path} to={item.path} className="exec-toc-card" aria-label={item.title}>
                <span className="exec-toc-card-title" title={item.title}>
                  {formatCardTitle(item.title)}
                </span>
                <span className="exec-toc-card-desc">{item.description}</span>
                <span className="exec-toc-card-path">{item.path}</span>
              </Link>
            ))}
          </div>
          <BusinessFunctionExploreGrid />
        </div>
      </section>

      <section className="page-section">
        <h2>Business Model Snapshot</h2>
        <div className="content-block">
          <ul className="feature-list">
            <li><strong>B2C2B Model:</strong> Individual subscriptions feed team and enterprise adoption</li>
            <li><strong>B2C Pricing:</strong> $20/month subscription with ~80% target gross margins</li>
            <li><strong>B2B Pilots:</strong> Starting at $50,000/year with scalable pricing</li>
            <li><strong>Unit Economics:</strong> High-margin subscription model with efficient B2B delivery</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>2026 High-Level Goals</h2>
        <div className="content-block">
          <div className="goals-grid">
            <div className="goal-card">
              <div className="goal-value">461</div>
              <div className="goal-label">B2C Subscribers</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">5</div>
              <div className="goal-label">B2B Pilot Contracts</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">$323K</div>
              <div className="goal-label">Total Revenue</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">81%</div>
              <div className="goal-label">Gross Margin</div>
            </div>
          </div>
          <p className="goal-description">
            Our plan focuses on grassroots B2C adoption through developer and knowledge worker
            communities, complemented by strategic B2B pilot programs that demonstrate ROI for teams and
            organizations.
          </p>
        </div>
      </section>

      <details className="page-section exec-collapsible exec-collapsible--operating">
        <summary className="exec-collapsible__summary">
          <span className="exec-collapsible__title">Operating Costs &amp; Burn Rate</span>
          <span className="exec-collapsible__chevron" aria-hidden="true" />
        </summary>
        <div className="content-block exec-collapsible__panel">
          <h3>Average Monthly Burn - Tools & Platform Subscriptions</h3>
          <p>
            The following monthly costs are included in our average monthly burn for subscriptions to tools
            and platforms:
          </p>
          <ul className="feature-list">
            <li><strong>G-Suite:</strong> $35.00/month</li>
            <li><strong>Google Cloud (Firebase storage & database reads):</strong> $10.00/month</li>
            <li><strong>GitHub:</strong> $8.00/month</li>
            <li><strong>Heroku:</strong> $20.00/month</li>
            <li><strong>Figma:</strong> $61.50/month</li>
            <li><strong>AWS:</strong> $0/month Jan-Apr 2026 (using free credits), $15.00/month starting May 2026 (EC2 and Lambda functions)</li>
            <li><strong>Gemini API:</strong> Usage-based pricing (Pay-as-you-go tier). Primarily billed per 1 million tokens for input/output. Models like Gemini 2.5 Pro and Flash have different rates, with tiered pricing for larger contexts. Free tiers available for testing through Google AI Studio with usage limits. Pricing varies between Google AI Studio and Vertex AI, with additional costs for advanced features like grounding and context caching. Reference: <a href="https://ai.google.dev/pricing" target="_blank" rel="noopener noreferrer">Gemini API Pricing</a></li>
            <li><strong>Deepgram API:</strong> Usage-based pricing varying by model. Speech-to-text models: Flux and Nova-3 (Monolingual) at $0.0077/min, Nova-3 (Multilingual) at $0.0092/min, Nova-1 & 2 at $0.0058/min, Enhanced at $0.0165/min, Base at $0.0145/min. Voice Agent API: Standard tier at $0.0800/min (pay-as-you-go). Billed per second for fairness. Free tier available with $200 credit. Custom enterprise pricing and volume discounts available. Reference: <a href="https://deepgram.com/pricing" target="_blank" rel="noopener noreferrer">Deepgram Pricing</a></li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Oasis AI Assistant API Costs</h3>
          <p>
            Gemini and Deepgram APIs power the Oasis AI assistant. Costs are incurred whenever the assistant
            processes a command. Based on current usage patterns and API pricing:
          </p>
          <ul className="feature-list">
            <li><strong>Text command:</strong> $0.002 per request (all-in cost including AWS, Gemini, and Deepgram)</li>
            <li><strong>Voice command:</strong> $0.02 per request (all-in cost including AWS, Gemini, and Deepgram)</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            <strong>Note:</strong> These are example ballpark numbers based on current usage patterns. Actual
            costs should be calculated from AWS, Gemini, and Deepgram invoices to determine the true
            average cost per request.
          </p>

          <h3 style={{ marginTop: '30px' }}>Capacity Planning with $3/month Budget</h3>
          <p>
            With the example unit costs above, a $3/month budget for AI assistant usage would support:
          </p>
          <ul className="feature-list">
            <li><strong>Text-only usage:</strong> ~1,500 text commands per month ($3 / $0.002 = 1,500 commands)</li>
            <li><strong>Voice-only usage:</strong> ~150 voice commands per month ($3 / $0.02 = 150 commands)</li>
            <li><strong>Mixed usage:</strong> A combination where each voice command uses approximately 10x the budget of a text command</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            This capacity structure provides reasonable limits for users while maintaining cost control for
            the platform.
          </p>
        </div>
      </details>

      <KeyHighlights collapsible />
      <FinancialSummary collapsible />
    </div>
  )
}

export default ExecutiveSummary
