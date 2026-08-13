import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import '../components/ScenarioComparison.css'
import './ProForma.css'
import {
  PRO_FORMA_META,
  assumptionRows,
  formatMoney,
  formatPct,
  getProFormaRows,
} from '../data/proFormaCases'
import {
  CLUBS_MARKET,
  CLUBS_MARKET_SIZING,
  CLUBS_SEED,
  INTERNAL_CLUB_TOPICS,
  formatCompactCount,
  formatPctShare,
  getClubsMarketSnapshotRows,
  getCombinedSomBand,
  getGrowthEnginePath,
  getSaturationCapRows,
  getSeedWaveScenarioRows,
  getSomScenarioRows,
  getTamSamSomSummaryRows,
} from '../data/clubsMarketModel'
import {
  MARKET_LENSES,
  formatRevenueMid,
  getLensById,
  getNestedCompetitiveSquares,
  getPlatformsByRevenue,
  getPlatformsBySide,
} from '../data/kahanaCompetitivePools'
import { BATTLECARD_OVERRIDES } from '../data/kahanaBattlecardOverrides'
import {
  ARGUMENT_SKELETON,
  AURA_MECHANICS,
  AURA_VS_OPAQUE,
  CONTENT_FRAGMENTS,
  CRISP_NARRATIVE_COPY,
  FRAGMENTATION_COST,
  KAHANA_BIG_BETS,
  LIBRARY_AURA_NARRATIVE,
  POSITIONING_VS_ECOSYSTEM,
  UNIFYING_THESIS,
  UNIFY_FRAGMENTS_DECK_LINES,
  UNIFY_FRAGMENTS_THESIS,
  formatPartyScale,
  getVirtualPartySocialByDemand,
  getVirtualPartyStreamingByDemand,
} from '../data/libraryAuraNarrative'

function mixSummary(mix, revenue) {
  const parts = []
  if (revenue.saasArr != null) parts.push(`SaaS ${formatPct(mix.saas)}`)
  if (revenue.takeRateAnnual != null) parts.push(`Take ${formatPct(mix.takeRate)}`)
  if (revenue.enterpriseArr != null) parts.push(`Ent ${formatPct(mix.enterprise)}`)
  if (revenue.featureAnnual != null && revenue.featureAnnual > 0) {
    parts.push(`Feat ${formatPct(mix.features)}`)
  }
  return parts.length ? parts.join(' · ') : '—'
}

function ProForma() {
  const [marketLensId, setMarketLensId] = useState('all')
  const [competitiveView, setCompetitiveView] = useState('nested')
  const rows = getProFormaRows()
  const marketRows = getClubsMarketSnapshotRows()
  const tamSamSomRows = getTamSamSomSummaryRows()
  const bookSomRows = getSomScenarioRows('book')
  const videoSomRows = getSomScenarioRows('video')
  const combinedSom = getCombinedSomBand()
  const seedScenarios = getSeedWaveScenarioRows()
  const baseSeed = seedScenarios.find((s) => s.isBase) ?? seedScenarios[0]
  const growthPath = getGrowthEnginePath({
    z: baseSeed.z,
    saturationShare: 0.01,
  })
  const saturationRows = getSaturationCapRows()
  const activeLens = getLensById(marketLensId)
  const nestedSquares = getNestedCompetitiveSquares(marketLensId, BATTLECARD_OVERRIDES)
  const platformCount = nestedSquares.reduce((n, c) => n + c.platforms.length, 0)
  const revenueRank = getPlatformsByRevenue()
  const sideRank = getPlatformsBySide()
  const partySocial = getVirtualPartySocialByDemand()
  const partyStreaming = getVirtualPartyStreamingByDemand()

  return (
    <div className="page pro-forma-page">
      <div className="page-header">
        <h1>Kahana Pro Forma</h1>
        <p className="pro-forma-subtitle">
          Named focus cases for {PRO_FORMA_META.product} — compare segment and feature bets on a{' '}
          {PRO_FORMA_META.horizonLabel} basis. Assumptions live in data; totals are computed.
        </p>
      </div>

      <section className="page-section">
        <h2>How to read this</h2>
        <div className="content-block">
          <p>
            Each case is a <strong>focus thesis</strong> (where we put energy), not a Monte Carlo
            forecast. Three core streams: Growth SaaS, marketplace take rate (5% of GMV), and
            Enterprise. Optional feature lines (featured placement, analytics) appear when priced.
          </p>
          <p>
            <strong>TBD</strong> means the assumption is not filled yet — we will walk through and
            replace placeholders together. Revenue conversion from Clubs volume is on hold.
          </p>
          <p>
            <strong>Organic baseline (as of {PRO_FORMA_META.knownTraction.asOf}):</strong>{' '}
            {PRO_FORMA_META.knownTraction.growthSubsApprox} Growth subs · ~$
            {PRO_FORMA_META.knownTraction.growthMrrApprox} MRR · ~$
            {PRO_FORMA_META.knownTraction.growthArrApprox} ARR after the{' '}
            {PRO_FORMA_META.knownTraction.cancelEffective} cancel. Last-year take-rate ≈ $
            {PRO_FORMA_META.knownTraction.lastYearTakeRateRevenue} on ~$
            {PRO_FORMA_META.knownTraction.lastYearGmv.toLocaleString()} GMV (concentrated).{' '}
            {PRO_FORMA_META.knownTraction.registeredUsers.toLocaleString()} registered users — mostly
            inactive. Last 30 days: {PRO_FORMA_META.knownTraction.dauLast30Days} DAU (internal beta);
            {PRO_FORMA_META.knownTraction.hubTxLast30Days} hub transactions. No paid marketing for ~
            {PRO_FORMA_META.knownTraction.noMarketingYears} years.
          </p>
          <p>
            Oasis browser scenarios remain on the archived{' '}
            <Link to="/financial-plan">Financial Plan</Link> page and are not mixed here.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Current GTM — Clubs growth engine</h2>
        <div className="content-block">
          <p>
            Near-term focus is <strong>{PRO_FORMA_META.gtm.focus}</strong> (
            {PRO_FORMA_META.gtm.clubTypes.join(' / ')}). Each internal member becomes an organizer
            and node in a wider book-club network: seed internally → invite friends/family → turn a
            subset of actives into new organizers who repeat the motion.
          </p>
          <p>
            <strong>Why this case:</strong> {PRO_FORMA_META.gtm.retentionThesis} Existing supply
            clubs can save to lists: ~
            {(PRO_FORMA_META.gtm.contentInventory.files / 1000).toFixed(1)}k files and{' '}
            {PRO_FORMA_META.gtm.contentInventory.hubs.toLocaleString()} hubs.{' '}
            {PRO_FORMA_META.gtm.publicLibrary}
          </p>
          <p>
            <strong>Stakeholder narrative:</strong> seed {CLUBS_SEED.internalClubs} internal clubs
            across topics for a {CLUBS_SEED.teamMembers}-person team; once UX/retention hold, each
            teammate spins an outward club and invites 8–12 friends/family (~typical club size of{' '}
            {CLUBS_SEED.targetClubSize}). First wave ≈200 users and ≈50 clubs, then iterate the same
            organizer motion against a U.S. market of ~13M club participants and an estimated
            500k–5M clubs.
          </p>
          <p className="pro-forma-topics">
            <strong>Internal topic slate ({INTERNAL_CLUB_TOPICS.length}):</strong>{' '}
            {INTERNAL_CLUB_TOPICS.join(', ')}.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Demand-driven content acquisition</h2>
        <div className="content-block">
          <p>
            <strong>{PRO_FORMA_META.gtm.demandDrivenAcquisition.oneLiner}</strong>
          </p>
          <p>
            Clubs answer “what do we actually want to read/watch?” instead of bulk-loading public
            domain or random catalog. Example:{' '}
            {PRO_FORMA_META.gtm.demandDrivenAcquisition.example}{' '}
            {PRO_FORMA_META.gtm.demandDrivenAcquisition.antiPattern}
          </p>
          <p>
            Structurally similar to library ebook DDA and to direct-upload storefronts (KDP, Apple
            Books, Kobo) — but <strong>discovery is club-led</strong>, not SEO/algorithm-led.
            Author/publisher pitch:{' '}
            {PRO_FORMA_META.gtm.demandDrivenAcquisition.authorValueProp} Network effect:{' '}
            {PRO_FORMA_META.gtm.demandDrivenAcquisition.networkEffect}
          </p>
          <ul className="feature-list">
            {PRO_FORMA_META.gtm.demandDrivenAcquisition.strategicBenefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="pro-forma-deck-copy">
            {PRO_FORMA_META.gtm.demandDrivenAcquisition.deckCopy}
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Library vs virtual party</h2>
        <div className="content-block">
          <p className="pro-forma-narrative">{LIBRARY_AURA_NARRATIVE.campusScene}</p>
          <p>
            <strong>{LIBRARY_AURA_NARRATIVE.partyContrast}</strong>
          </p>
          <p className="pro-forma-deck-copy">{LIBRARY_AURA_NARRATIVE.kahanaLine}</p>
          <p>{LIBRARY_AURA_NARRATIVE.problemLine}</p>
          <p>{LIBRARY_AURA_NARRATIVE.opportunityLine}</p>
        </div>

        <h3 className="pro-forma-subhead">Two big bets</h3>
        <div className="pro-forma-bets">
          {KAHANA_BIG_BETS.map((bet) => (
            <div key={bet.id} className="pro-forma-bet-card">
              <h4>{bet.title}</h4>
              <p>{bet.summary}</p>
            </div>
          ))}
        </div>

        <h3 className="pro-forma-subhead">1. Today’s ecosystem is fragmented</h3>
        <div className="pro-forma-split">
          <div className="pro-forma-split-card">
            <h4>{ARGUMENT_SKELETON.creatorsFragmented.title}</h4>
            <p className="pro-forma-table-note">{ARGUMENT_SKELETON.creatorsFragmented.problem}</p>
            <div className="table-container">
              <table className="scenario-table pro-forma-assumptions-table">
                <thead>
                  <tr>
                    <th>Stack</th>
                    <th>Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {ARGUMENT_SKELETON.creatorsFragmented.stacks.map((s) => (
                    <tr key={s.label}>
                      <td className="scenario-name">{s.label}</td>
                      <td>{s.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="feature-list">
              {ARGUMENT_SKELETON.creatorsFragmented.issues.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="pro-forma-split-card">
            <h4>{ARGUMENT_SKELETON.consumersFragmented.title}</h4>
            <p className="pro-forma-table-note">{ARGUMENT_SKELETON.consumersFragmented.problem}</p>
            <div className="table-container">
              <table className="scenario-table pro-forma-assumptions-table">
                <thead>
                  <tr>
                    <th>Stack</th>
                    <th>Services</th>
                  </tr>
                </thead>
                <tbody>
                  {ARGUMENT_SKELETON.consumersFragmented.stacks.map((s) => (
                    <tr key={s.label}>
                      <td className="scenario-name">{s.label}</td>
                      <td>{s.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="feature-list">
              {ARGUMENT_SKELETON.consumersFragmented.issues.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="pro-forma-table-note" style={{ marginTop: 12 }}>
          {FRAGMENTATION_COST}
        </p>

        <h3 className="pro-forma-subhead">2. {ARGUMENT_SKELETON.gap.title}</h3>
        <div className="content-block">
          <p>{ARGUMENT_SKELETON.gap.statement}</p>
          <p className="pro-forma-deck-copy">{ARGUMENT_SKELETON.gap.punchline}</p>
        </div>

        <h3 className="pro-forma-subhead">Market fragments Kahana aims to unify</h3>
        <p className="pro-forma-table-note">
          Named fragments with directional market-size ranges and who owns each today. Refine
          numbers per platform later — this is the unification story spine.
        </p>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>Fragment</th>
                <th>Market size (directional)</th>
                <th>Kahana angle</th>
              </tr>
            </thead>
            <tbody>
              {CONTENT_FRAGMENTS.map((f) => (
                <tr key={f.id} className="scenario-row">
                  <td className="scenario-name">{f.name}</td>
                  <td className="metric-value">{f.marketSizeLabel}</td>
                  <td>{f.kahanaAngle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pro-forma-fragments">
          {CONTENT_FRAGMENTS.map((f) => (
            <details key={f.id} className="pro-forma-fragment-card">
              <summary>
                <span className="pro-forma-fragment-title">{f.name}</span>
                <span className="pro-forma-fragment-size">{f.marketSizeLabel}</span>
              </summary>
              <p className="pro-forma-table-note">{f.covers}</p>
              <p className="pro-forma-table-note">{f.marketNote}</p>
              <div className="table-container">
                <table className="scenario-table pro-forma-assumptions-table">
                  <thead>
                    <tr>
                      <th>Tier</th>
                      <th>Key players</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.players.map((p) => (
                      <tr key={p.tier}>
                        <td className="scenario-name">{p.tier}</td>
                        <td>{p.names}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Kahana:</strong> {f.kahanaAngle}
              </p>
            </details>
          ))}
        </div>
        <div className="content-block" style={{ marginTop: 16 }}>
          <ul className="feature-list">
            {UNIFY_FRAGMENTS_DECK_LINES.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="pro-forma-deck-copy">{UNIFY_FRAGMENTS_THESIS}</p>
          <p>
            <Link to="/fragment-capture">Open Market Map →</Link> Categories and companies sized by
            directional market $. Then use <Link to="/company-landscape">Company Landscape</Link> for how Kahana
            fits beside each peer.
          </p>
        </div>

        <h3 className="pro-forma-subhead">3. Kahana’s all-in-one value proposition</h3>
        <div className="pro-forma-split">
          <div className="pro-forma-split-card">
            <h4>{ARGUMENT_SKELETON.creatorVp.title}</h4>
            <p>
              <strong>{ARGUMENT_SKELETON.creatorVp.homeLine}</strong>
            </p>
            <ul className="feature-list">
              {ARGUMENT_SKELETON.creatorVp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="pro-forma-table-note">
              Instead of: {ARGUMENT_SKELETON.creatorVp.beforePitch}
            </p>
            <p className="pro-forma-deck-copy">{ARGUMENT_SKELETON.creatorVp.afterPitch}</p>
          </div>
          <div className="pro-forma-split-card">
            <h4>{ARGUMENT_SKELETON.consumerVp.title}</h4>
            <p>
              <strong>{ARGUMENT_SKELETON.consumerVp.homeLine}</strong>
            </p>
            <ul className="feature-list">
              {ARGUMENT_SKELETON.consumerVp.modalities.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="pro-forma-table-note">
              Instead of: {ARGUMENT_SKELETON.consumerVp.insteadOf}
            </p>
            <p className="pro-forma-deck-copy">{ARGUMENT_SKELETON.consumerVp.instead}</p>
          </div>
        </div>
        <div className="content-block" style={{ marginTop: 16 }}>
          <p>
            <strong>Unifying thesis:</strong> {UNIFYING_THESIS.convenience}
          </p>
          <ul className="feature-list">
            {UNIFYING_THESIS.productImplications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <h3 className="pro-forma-subhead">4. {ARGUMENT_SKELETON.algoContrast.title}</h3>
        <div className="content-block">
          <p>
            <strong>{AURA_MECHANICS.oneLiner}</strong>
          </p>
          <ul className="feature-list">
            {AURA_MECHANICS.rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div className="pro-forma-split">
          <div className="pro-forma-split-card">
            <h4>{ARGUMENT_SKELETON.algoContrast.todayTitle}</h4>
            <ul className="feature-list">
              {ARGUMENT_SKELETON.algoContrast.todayBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="pro-forma-table-note">{AURA_VS_OPAQUE.partyAlgos}</p>
          </div>
          <div className="pro-forma-split-card">
            <h4>{ARGUMENT_SKELETON.algoContrast.kahanaTitle}</h4>
            <ul className="feature-list">
              {ARGUMENT_SKELETON.algoContrast.kahanaBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="pro-forma-table-note">{AURA_VS_OPAQUE.kahanaAura}</p>
          </div>
        </div>
        <p className="pro-forma-deck-copy">{ARGUMENT_SKELETON.algoContrast.deckLine}</p>

        <h3 className="pro-forma-subhead">Positioning vs the ecosystem</h3>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>Versus</th>
                <th>Kahana contrast</th>
              </tr>
            </thead>
            <tbody>
              {POSITIONING_VS_ECOSYSTEM.map((row) => (
                <tr key={row.id} className="scenario-row">
                  <td className="scenario-name">{row.versus}</td>
                  <td>{row.contrast}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="pro-forma-subhead">5. Three-slide skeleton (deck)</h3>
        <div className="pro-forma-slides">
          {ARGUMENT_SKELETON.threeSlides.map((slide) => (
            <div key={slide.id} className="pro-forma-slide-card">
              <h4>{slide.title}</h4>
              {slide.creators && (
                <p>
                  <strong>Creators:</strong> {slide.creators}
                </p>
              )}
              {slide.consumers && (
                <p>
                  <strong>Consumers:</strong> {slide.consumers}
                </p>
              )}
              {slide.body && <p>{slide.body}</p>}
              {slide.bullets && (
                <ul className="feature-list">
                  {slide.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <h3 className="pro-forma-subhead">Crisp copy (reuse)</h3>
        <div className="content-block">
          <p>
            <strong>Fragmented today:</strong> {CRISP_NARRATIVE_COPY.fragmentedToday}
          </p>
          <p>
            <strong>Unified on Kahana:</strong> {CRISP_NARRATIVE_COPY.unifiedOnKahana}
          </p>
          <p>
            <strong>Aura preserves quality:</strong> {CRISP_NARRATIVE_COPY.auraPreservesQuality}
          </p>
        </div>

        <h3 className="pro-forma-subhead">
          Virtual party — social / short-form (by viewers)
        </h3>
        <p className="pro-forma-table-note">
          Constant dopamine, always-on feeds. Supply = posting creators; demand = MAUs scrolling.
        </p>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Platform</th>
                <th>Viewers (demand)</th>
                <th>Creators (supply)</th>
                <th>Scale key</th>
              </tr>
            </thead>
            <tbody>
              {partySocial.map((p, i) => (
                <tr key={p.id} className="scenario-row">
                  <td>{i + 1}</td>
                  <td className="scenario-name">{p.name}</td>
                  <td className="metric-value">{p.demandLabel}</td>
                  <td>{p.supplyLabel}</td>
                  <td>{formatPartyScale(p.demandScale)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="pro-forma-subhead">
          Virtual party — TV / film streaming (by subscribers)
        </h3>
        <p className="pro-forma-table-note">
          Lean-back entertainment. Supply = studios / Originals; demand = subscribers — great for the
          party, not built for focus, deep reading, or learning clubs.
        </p>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Platform</th>
                <th>Viewers (demand)</th>
                <th>Supply</th>
                <th>Revenue / notes</th>
              </tr>
            </thead>
            <tbody>
              {partyStreaming.map((p, i) => (
                <tr key={p.id} className="scenario-row">
                  <td>{i + 1}</td>
                  <td className="scenario-name">{p.name}</td>
                  <td className="metric-value">{p.demandLabel}</td>
                  <td>{p.supplyLabel}</td>
                  <td>
                    {p.revenueLabel ? `${p.revenueLabel}. ` : ''}
                    {p.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>Competitive pools</h2>
        <div className="content-block">
          <p>
            As Kahana grows, Clubs + library overlap many creator and knowledge platforms. For each,
            people may <strong>switch</strong> to Kahana or <strong>use Kahana with</strong> that
            platform. Three views: nested market lenses (use-case wedges), revenue rank, and
            creators (supply) vs viewers (demand). Canva/Figma excluded. Curios included as a niche
            author tool.
          </p>
        </div>
        <div className="pro-forma-lens-bar" role="tablist" aria-label="Competitive view">
          {[
            { id: 'nested', name: 'Nested lenses' },
            { id: 'revenue', name: 'By revenue' },
            { id: 'sides', name: 'Creators vs viewers' },
          ].map((v) => (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={competitiveView === v.id}
              className={`pro-forma-lens-btn${competitiveView === v.id ? ' is-active' : ''}`}
              onClick={() => setCompetitiveView(v.id)}
            >
              {v.name}
            </button>
          ))}
        </div>

        {competitiveView === 'nested' && (
          <>
            <div className="pro-forma-lens-bar" role="tablist" aria-label="Market lens">
              {MARKET_LENSES.map((lens) => (
                <button
                  key={lens.id}
                  type="button"
                  role="tab"
                  aria-selected={marketLensId === lens.id}
                  className={`pro-forma-lens-btn${marketLensId === lens.id ? ' is-active' : ''}`}
                  onClick={() => setMarketLensId(lens.id)}
                >
                  {lens.name}
                </button>
              ))}
            </div>
            <p className="pro-forma-table-note">
              <strong>{activeLens.name}:</strong> {activeLens.description} Showing {platformCount}{' '}
              platforms in {nestedSquares.length} categories.
            </p>
            <div className="pro-forma-nested-squares">
              {nestedSquares.map((cat) => (
                <div key={cat.id} className="pro-forma-category-square">
                  <div className="pro-forma-category-header">
                    <h3>{cat.name}</h3>
                    <p>{cat.blurb}</p>
                  </div>
                  <div className="pro-forma-platform-grid">
                    {cat.platforms.map((p) => (
                      <article key={p.id} className="pro-forma-platform-card">
                        <h4>{p.name}</h4>
                        <p className="pro-forma-platform-meta">
                          <span className="pro-forma-platform-label">Users</span> {p.usersLabel}
                        </p>
                        <p className="pro-forma-platform-meta">
                          <span className="pro-forma-platform-label">Revenue</span> {p.revenueLabel}
                        </p>
                        <p className="pro-forma-platform-reason">
                          <span className="pro-forma-platform-label">Switch to Kahana</span>{' '}
                          {p.switchReason}
                        </p>
                        <p className="pro-forma-platform-reason">
                          <span className="pro-forma-platform-label">Use with Kahana</span>{' '}
                          {p.useWithReason}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {competitiveView === 'revenue' && (
          <>
            <p className="pro-forma-table-note">
              Platforms with credible revenue estimates, highest → lowest. Undisclosed / opaque
              (Goodreads, Medium, Beehiiv, Circle, Beacons, Stan, Pensight, Etsy ebooks, Curios)
              listed separately.
            </p>
            <div className="table-container">
              <table className="scenario-table pro-forma-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Platform</th>
                    <th>Sort key</th>
                    <th>Revenue (detail)</th>
                    <th>Kahana angle</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueRank.known.map((p, i) => (
                    <tr key={p.id} className="scenario-row">
                      <td>{i + 1}</td>
                      <td className="scenario-name">{p.name}</td>
                      <td className="metric-value">{formatRevenueMid(p.revenueUsdMid)}</td>
                      <td>
                        {p.revenueLabel}
                        {p.revenueCaution ? (
                          <span className="pro-forma-caution"> {p.revenueCaution}</span>
                        ) : null}
                      </td>
                      <td>{p.kahanaAngle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="pro-forma-subhead">Revenue not reliably disclosed</h3>
            <div className="table-container">
              <table className="scenario-table pro-forma-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Notes</th>
                    <th>Kahana angle</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueRank.unknown.map((p) => (
                    <tr key={p.id} className="scenario-row">
                      <td className="scenario-name">{p.name}</td>
                      <td>{p.revenueLabel}</td>
                      <td>{p.kahanaAngle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {competitiveView === 'sides' && (
          <>
            <p className="pro-forma-table-note">
              <strong>Supply</strong> = club hosts to recruit (authors, instructors, newsletter
              writers). <strong>Demand</strong> = club participants (readers, learners, community
              members). Viewer-heavy pools are ranked by consumer scale; creator-heavy by creator
              density.
            </p>
            <h3 className="pro-forma-subhead">A. Viewer-heavy (demand pools)</h3>
            <div className="table-container">
              <table className="scenario-table pro-forma-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Viewers / demand</th>
                    <th>Creators / supply</th>
                    <th>Kahana angle</th>
                  </tr>
                </thead>
                <tbody>
                  {sideRank.viewerHeavy.map((p) => (
                    <tr key={p.id} className="scenario-row">
                      <td className="scenario-name">{p.name}</td>
                      <td className="metric-value">{p.demandLabel}</td>
                      <td>{p.supplyLabel}</td>
                      <td>{p.kahanaAngle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="pro-forma-subhead">B. Creator-heavy (supply pools)</h3>
            <div className="table-container">
              <table className="scenario-table pro-forma-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Creators / supply</th>
                    <th>Viewers / demand</th>
                    <th>Kahana angle</th>
                  </tr>
                </thead>
                <tbody>
                  {sideRank.creatorHeavy.map((p) => (
                    <tr key={p.id} className="scenario-row">
                      <td className="scenario-name">{p.name}</td>
                      <td className="metric-value">{p.supplyLabel}</td>
                      <td>{p.demandLabel}</td>
                      <td>{p.kahanaAngle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {sideRank.balanced.length > 0 && (
              <>
                <h3 className="pro-forma-subhead">Balanced supply + demand</h3>
                <div className="table-container">
                  <table className="scenario-table pro-forma-table">
                    <thead>
                      <tr>
                        <th>Platform</th>
                        <th>Viewers / demand</th>
                        <th>Creators / supply</th>
                        <th>Kahana angle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sideRank.balanced.map((p) => (
                        <tr key={p.id} className="scenario-row">
                          <td className="scenario-name">{p.name}</td>
                          <td>{p.demandLabel}</td>
                          <td>{p.supplyLabel}</td>
                          <td>{p.kahanaAngle}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}
      </section>

      <section className="page-section">
        <h2>Clubs market context</h2>
        <p className="pro-forma-table-note">
          External benchmarks for decks and saturation caps — not the near-term operating plan.
        </p>
        <div className="table-container">
          <table className="scenario-table pro-forma-assumptions-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {marketRows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td className="metric-value">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pro-forma-table-note pro-forma-source-note">{CLUBS_MARKET.sourcesNote}</p>
      </section>

      <section className="page-section">
        <h2>TAM / SAM / SOM (directional)</h2>
        <p className="pro-forma-table-note">
          Separate sizing for book/reading clubs vs video/watching clubs (engagement layer — not
          Netflix/YouTube revenue). SOM uses 0.1% / 0.5% / 1% of SAM over a ~5–10 year horizon.
          Near-term volume still follows the seed → invite engine below; this frames the ceiling.
        </p>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>TAM</th>
                <th>SAM (reachable)</th>
                <th>SOM band / moderate</th>
              </tr>
            </thead>
            <tbody>
              {tamSamSomRows.map((r) => (
                <tr key={r.segment} className="scenario-row">
                  <td className="scenario-name">{r.segment}</td>
                  <td className="metric-value">{r.tam}</td>
                  <td>{r.sam}</td>
                  <td>{r.somModerate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="pro-forma-subhead">Book / reading — SOM scenarios</h3>
        <p className="pro-forma-table-note">{CLUBS_MARKET_SIZING.book.tamNote}</p>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>% of SAM</th>
                <th>SOM revenue / yr</th>
              </tr>
            </thead>
            <tbody>
              {bookSomRows.map((r) => (
                <tr
                  key={r.id}
                  className={`scenario-row${r.isBase ? ' scenario-base' : ''}`}
                >
                  <td className="scenario-name">
                    {r.name} ({r.horizon})
                  </td>
                  <td>{formatPct(r.shareOfSam * 100)}</td>
                  <td className="metric-value">{r.somLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="pro-forma-subhead">Video / watching — SOM scenarios</h3>
        <p className="pro-forma-table-note">{CLUBS_MARKET_SIZING.video.tamNote}</p>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>% of SAM</th>
                <th>SOM revenue / yr</th>
              </tr>
            </thead>
            <tbody>
              {videoSomRows.map((r) => (
                <tr
                  key={r.id}
                  className={`scenario-row${r.isBase ? ' scenario-base' : ''}`}
                >
                  <td className="scenario-name">
                    {r.name} ({r.horizon})
                  </td>
                  <td>{formatPct(r.shareOfSam * 100)}</td>
                  <td className="metric-value">{r.somLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="pro-forma-table-note">
          <strong>Combined SOM band:</strong> {combinedSom.somLabel} ({combinedSom.note}) Seed
          engine is how we start; these SOM figures are mid-term ceilings, not Y1 forecasts.
        </p>
      </section>

      <section className="page-section">
        <h2>Seed plan — internal → friends/family</h2>
        <p className="pro-forma-table-note">
          Y0: {CLUBS_SEED.teamMembers} team · {CLUBS_SEED.internalClubs} clubs · modeled avg size{' '}
          {CLUBS_SEED.internalAvgClubSize} (overlap). Y1: each of {CLUBS_SEED.teamMembers} organizers
          sends {CLUBS_SEED.invitesPerOrganizer} invites; Z = invite→active conversion (50–70% warm
          invite range). Combined first cycle ≈ {CLUBS_SEED.internalClubs}+
          {CLUBS_SEED.teamMembers} clubs; raw members/club starts thin and fills toward ~
          {CLUBS_SEED.targetClubSize}.
        </p>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>Invite conversion (Z)</th>
                <th>Invites sent</th>
                <th>New external users</th>
                <th>Total users</th>
                <th>Total clubs</th>
                <th>Raw members/club</th>
              </tr>
            </thead>
            <tbody>
              {seedScenarios.map(({ id, name, z, isBase, y1 }) => (
                <tr
                  key={id}
                  className={`scenario-row${isBase ? ' scenario-base' : ''}`}
                >
                  <td className="scenario-name">
                    {name} ({formatPct(z * 100)})
                  </td>
                  <td>{formatCompactCount(y1.invitesSent)}</td>
                  <td>{formatCompactCount(y1.newUsers)}</td>
                  <td className="metric-value">{formatCompactCount(y1.users)}</td>
                  <td>{formatCompactCount(y1.clubs)}</td>
                  <td>{y1.avgMembersPerClubRaw.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>Growth engine path (volume)</h2>
        <p className="pro-forma-table-note">
          Engine levers: organizers = {(CLUBS_SEED.organizerFraction * 100).toFixed(0)}% of users
          (O); each sends {CLUBS_SEED.invitesPerOrganizerPerYear} invites/year (Y); Z ={' '}
          {formatPct(growthPath.z * 100)} in this path. Capped at{' '}
          {formatPctShare(growthPath.saturationShare)} of the 13M U.S. pool (
          {formatCompactCount(growthPath.saturationUsers)} users). Revenue bridge still deferred.
        </p>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>Phase</th>
                <th>New users</th>
                <th>New clubs</th>
                <th>Total users</th>
                <th>Total clubs</th>
                <th>% of 13M U.S.</th>
              </tr>
            </thead>
            <tbody>
              {growthPath.phases.map((p) => (
                <tr
                  key={p.phase}
                  className={`scenario-row${p.hitCap ? ' scenario-conservative' : ''}`}
                >
                  <td className="scenario-name">{p.phase}</td>
                  <td>{formatCompactCount(p.newUsers)}</td>
                  <td>{formatCompactCount(p.newClubs)}</td>
                  <td className="metric-value">{formatCompactCount(p.users)}</td>
                  <td>{formatCompactCount(p.clubs)}</td>
                  <td>
                    {p.shareOfUsPool != null
                      ? formatPctShare(p.shareOfUsPool)
                      : p.phase.startsWith('Y0')
                        ? formatPctShare(p.users / CLUBS_MARKET.usAdultsInBookClubs)
                        : formatPctShare(p.users / CLUBS_MARKET.usAdultsInBookClubs)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>Long-term saturation caps</h2>
        <p className="pro-forma-table-note">
          Upper bounds if Kahana captures a small share of predisposed U.S. club participants
          (clubs ≈ users ÷ {CLUBS_SEED.targetClubSize}). Use to bend the viral curve — not Y1
          targets.
        </p>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>Share of 13M</th>
                <th>Active users</th>
                <th>Implied clubs @ size {CLUBS_SEED.targetClubSize}</th>
              </tr>
            </thead>
            <tbody>
              {saturationRows.map((r) => (
                <tr key={r.id} className="scenario-row">
                  <td className="scenario-name">{r.name}</td>
                  <td className="metric-value">{formatCompactCount(r.users)}</td>
                  <td>{formatCompactCount(r.clubs)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>Case comparison</h2>
        <p className="pro-forma-table-note">
          Totals marked with * include only filled streams (partial). Clubs GTM $ revenue stays TBD;
          seed + viral tables above size users and clubs.
        </p>
        <div className="table-container">
          <table className="scenario-table pro-forma-table">
            <thead>
              <tr>
                <th>Case</th>
                <th>Thesis</th>
                <th>Total revenue</th>
                <th>Growth SaaS (ARR)</th>
                <th>Take-rate (annual)</th>
                <th>Enterprise (ARR)</th>
                <th>Features (annual)</th>
                <th>Mix</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ case: c, revenue }) => (
                <tr
                  key={c.id}
                  className={`scenario-row${c.isBase ? ' scenario-base' : ''}`}
                >
                  <td className="scenario-name">{c.name}</td>
                  <td className="pro-forma-thesis">{c.thesis}</td>
                  <td className="metric-value">
                    {formatMoney(revenue.totalRevenue, { digits: 0 })}
                    {revenue.totalPartial ? '*' : ''}
                  </td>
                  <td>{formatMoney(revenue.saasArr, { digits: 0 })}</td>
                  <td>{formatMoney(revenue.takeRateAnnual, { digits: 0 })}</td>
                  <td>{formatMoney(revenue.enterpriseArr, { digits: 0 })}</td>
                  <td>{formatMoney(revenue.featureAnnual, { digits: 0 })}</td>
                  <td className="pro-forma-mix">{mixSummary(revenue.mix, revenue)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>Assumption sheets</h2>
        <p className="pro-forma-table-note">
          Revenue-case levers in <code>proFormaCases.js</code>; Clubs volume engine in{' '}
          <code>clubsMarketModel.js</code>.
        </p>
        <div className="pro-forma-sheets">
          {rows.map(({ case: c, revenue }) => (
            <details
              key={c.id}
              className="pro-forma-sheet"
              open={c.isBase || c.id === 'clubs-retention'}
            >
              <summary>
                <span className="pro-forma-sheet-title">{c.name}</span>
                <span className="pro-forma-sheet-total">
                  {formatMoney(revenue.totalRevenue, { digits: 0 })}
                  {revenue.totalPartial ? '*' : ''}
                  {revenue.saasMrr != null && (
                    <span className="pro-forma-sheet-mrr">
                      {' '}
                      · SaaS MRR {formatMoney(revenue.saasMrr)}
                    </span>
                  )}
                </span>
              </summary>
              <p className="pro-forma-sheet-thesis">{c.thesis}</p>
              <div className="table-container">
                <table className="scenario-table pro-forma-assumptions-table">
                  <thead>
                    <tr>
                      <th>Assumption</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assumptionRows(c.assumptions).map((row) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
                        <td className="metric-value">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {c.notes.length > 0 && (
                <ul className="pro-forma-notes">
                  {c.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProForma
