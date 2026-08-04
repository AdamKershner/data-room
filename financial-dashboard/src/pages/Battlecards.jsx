import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Battlecards.css'
import {
  BATTLECARD_GROUPS,
  filterBattlecards,
  getBattlecards,
} from '../data/kahanaBattlecards'

function Field({ label, value, emphasize }) {
  const isTbd = typeof value === 'string' && value.startsWith('TBD')
  return (
    <div className={`battlecard-field${isTbd ? ' is-tbd' : ''}${emphasize ? ' is-emphasis' : ''}`}>
      <span className="battlecard-field-label">{label}</span>
      <p className="battlecard-field-value">{value}</p>
    </div>
  )
}

function Battlecards() {
  const allCards = useMemo(() => getBattlecards(), [])
  const [groupId, setGroupId] = useState('all')
  const [query, setQuery] = useState('')
  const [openId, setOpenId] = useState(null)

  const visible = useMemo(
    () => filterBattlecards(allCards, { groupId, query }),
    [allCards, groupId, query],
  )

  return (
    <div className="page battlecards-page">
      <div className="page-header">
        <h1>Kahana Battlecards</h1>
        <p className="battlecards-subtitle">
          Conversation guides for new users, prospects, and team members. Each card compares Kahana with
          another platform, contrasts what each is best for, and shows good ways to use both — e.g. Instagram
          for entertainment scrolling, Kahana for longer-form and educational focus with Clubs. These are not
          “kill the competitor” sheets; they teach how Kahana fits in the wider landscape. Pair with{' '}
          <Link to="/kahana#synergy-cards">Synergy cards</Link> on the Kahana page.
        </p>
        <p className="battlecards-wip-note" role="status">
          In progress — battlecards are being optimized continuously as we take in new market research.
          Treat angles and stats as living drafts, not final canon.
        </p>
      </div>

      <section className="page-section">
        <div className="battlecards-toolbar">
          <div className="battlecards-group-bar" role="tablist" aria-label="Platform group">
            {BATTLECARD_GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={groupId === g.id}
                className={`battlecards-group-btn${groupId === g.id ? ' is-active' : ''}`}
                onClick={() => setGroupId(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
          <label className="battlecards-search">
            <span className="battlecards-search-label">Filter</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search platforms…"
            />
          </label>
        </div>
        <p className="battlecards-count">
          Showing {visible.length} of {allCards.length} cards
        </p>

        <div className="battlecards-grid">
          {visible.map((card) => {
            const isOpen = openId === card.id
            return (
              <article
                key={card.id}
                className={`battlecard${isOpen ? ' is-open' : ''}`}
                id={`battlecard-${card.id}`}
              >
                <button
                  type="button"
                  className="battlecard-header"
                  onClick={() => setOpenId(isOpen ? null : card.id)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <h2 className="battlecard-title">{card.name}</h2>
                    <p className="battlecard-meta">
                      {card.groupLabel} · {card.category}
                    </p>
                  </div>
                  <span className="battlecard-toggle">{isOpen ? '−' : '+'}</span>
                </button>

                <div className="battlecard-summary">
                  <Field label="How they fit together" value={card.kahanaOneLiner} emphasize />
                  <Field label="Compare & contrast" value={card.competitiveAngle} emphasize />
                  <Field label="Using both" value={card.useWithReason} emphasize />
                </div>

                {isOpen && (
                  <div className="battlecard-body">
                    <div className="battlecard-columns">
                      <Field label="Scale (users)" value={card.usersLabel} />
                      <Field label="Revenue / business (context)" value={card.revenueLabel} />
                    </div>
                    <div className="battlecard-columns">
                      <Field label="Demand side" value={card.demandLabel} />
                      <Field label="Supply side" value={card.supplyLabel} />
                    </div>
                    <Field label="Kahana angle (seed)" value={card.kahanaAngle} />
                    <div className="battlecard-columns">
                      <Field
                        label="When Kahana is the better fit"
                        value={card.whenWeWin}
                        emphasize
                      />
                      <Field
                        label={`When ${card.name} is the better fit`}
                        value={card.whenTheyWin}
                        emphasize
                      />
                    </div>
                    <Field
                      label="When someone might prefer Kahana as primary"
                      value={card.switchReason}
                    />
                    <Field label="Conversation tips" value={card.landmines} emphasize />
                    <Field label="Talking points for the team" value={card.proofPoints} emphasize />
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Battlecards
