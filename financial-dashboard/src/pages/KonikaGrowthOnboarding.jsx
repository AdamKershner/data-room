import React, { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Onboarding.css'
import './KonikaGrowthOnboarding.css'

const STORAGE_KEY = 'konika-growth-onboarding-checklist'

const CONFETTI_COLORS = ['#0d9488', '#10b981', '#34d399', '#f59e0b', '#f97316', '#ec4899', '#8b5cf6', '#3b82f6']
const CONFETTI_COUNT = 16

function ConfettiBurst({ x, y, onComplete }) {
  const [particles] = useState(() =>
    Array.from({ length: CONFETTI_COUNT }, (_, i) => {
      const angle = (Math.PI * 2 * i) / CONFETTI_COUNT + Math.random() * 0.5
      const distance = 60 + Math.random() * 80
      return {
        id: i,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        tx: Math.cos(angle) * distance,
        ty: -Math.sin(angle) * distance,
        size: 6 + Math.random() * 6,
        delay: Math.random() * 80,
        duration: 800 + Math.random() * 400,
      }
    })
  )

  React.useEffect(() => {
    const t = setTimeout(() => onComplete?.(), 1400)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <div className="confetti-burst" style={{ left: x, top: y }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle"
          style={{
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            '--duration': `${p.duration}ms`,
            '--delay': `${p.delay}ms`,
            '--color': p.color,
            '--size': `${p.size}px`,
          }}
        />
      ))}
    </div>
  )
}

const CHECKBOX_IDS = [
  'schedule-biweekly-konika',
  'agenda-understood',
  'dm-setup-done',
  'website-reviewed',
  'connected-discuss-contribution',
  'pallavi-training-meeting',
  'draft-blog-training',
  'publish-blog-1',
  'publish-blog-2',
  'publish-blog-3',
  'dm-training-done',
  'cadence-10-per-week',
  'topics-list-tracking',
  'kpi-traffic-understood',
  'escalate-when-stuck',
  'pricing-traffic-challenge',
]

function CheckRow({ id, checked, onToggle, label }) {
  const lastClickRef = useRef(null)
  return (
    <li className="onboarding-item konika-growth-item">
      <div className="onboarding-item-row konika-growth-item-row">
        <label
          className="onboarding-checkbox-wrapper"
          onClick={(e) => {
            lastClickRef.current = { x: e.clientX, y: e.clientY }
          }}
        >
          <input
            type="checkbox"
            checked={!!checked}
            onChange={() => onToggle(id, lastClickRef.current)}
            className="onboarding-checkbox"
          />
          <span className="onboarding-checkbox-custom" />
          <span className="onboarding-checkbox-label">Done</span>
        </label>
        <div className="konika-growth-label-block">
          <span className="konika-growth-item-label">{label}</span>
        </div>
      </div>
    </li>
  )
}

export default function KonikaGrowthOnboarding() {
  const [checked, setChecked] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })
  const [confetti, setConfetti] = useState(null)

  const toggleChecked = useCallback((id, clickPos) => {
    setChecked((prev) => {
      const wasChecked = prev[id]
      const next = { ...prev, [id]: !wasChecked }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      if (!wasChecked && clickPos) {
        setConfetti({ x: clickPos.x, y: clickPos.y })
      }
      return next
    })
  }, [])

  const clearConfetti = useCallback(() => setConfetti(null), [])

  const completedCount = CHECKBOX_IDS.filter((id) => checked[id]).length
  const totalCount = CHECKBOX_IDS.length
  const progressPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="page" id="konika-growth-onboarding">
      {confetti && (
        <ConfettiBurst x={confetti.x} y={confetti.y} onComplete={clearConfetti} />
      )}
      <div className="onboarding-back-banner">
        <Link to="/onboarding">← Back to Onboarding</Link>
      </div>

      <div className="page-header">
        <h1>Website &amp; content onboarding</h1>
        <p className="page-subtitle">
          Success criteria are binary: check each box when it is fully done. Slack Konika when you finish a phase
          (setup, training, or weekly cadence milestones).
        </p>
        <p className="onboarding-hint">
          <span className="onboarding-hint-item">☐ Click the box when the criterion is met</span>
        </p>
      </div>

      <section className="onboarding-summary">
        <div className="onboarding-summary-card">
          <div className="onboarding-summary-value">
            {completedCount} / {totalCount}
          </div>
          <div className="onboarding-summary-label">Criteria met</div>
        </div>
        <div className="onboarding-summary-card">
          <div className="onboarding-summary-value">{progressPercent}%</div>
          <div className="onboarding-summary-label">Progress</div>
        </div>
      </section>

      <section className="onboarding-progress-section">
        <div className="onboarding-progress-bar">
          <div
            className="onboarding-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="onboarding-progress-label">
          {progressPercent === 100 ? '🎉 All criteria checked!' : `${progressPercent}% complete`}
        </div>
      </section>

      <section className="page-section">
        <div className="konika-growth-kpi-callout onboarding-note onboarding-note-important">
          <p>
            <strong>KPIs:</strong> Work toward roughly <strong>1M–2M</strong> in traffic (views) as we scale content.
            If something is off track or unclear, <strong>message Konika</strong> — do not hesitate.
          </p>
          <p>
            <strong>Challenge:</strong> prioritize content and CTAs that <strong>drive more traffic to pricing</strong>{' '}
            (<a href="https://kahana.co/pricing" target="_blank" rel="noopener noreferrer">kahana.co/pricing</a>).
          </p>
        </div>

        <div className="onboarding-checklist konika-growth-checklist">
          <div className="onboarding-day-section">
            <h3 className="onboarding-day-title">1. Bi-weekly 1-on-1 with Konika</h3>
            <p className="konika-growth-section-intro">
              Schedule time to connect every two weeks. Plan for at least <strong>two weeks</strong> of meetings
              ahead. Use the time for what went well, what still needs to be accomplished, and goals to discuss.
            </p>
            <p>
              <a
                href="https://oncehub.com/PAGE-A5FACAACDF"
                target="_blank"
                rel="noopener noreferrer"
                className="onboarding-cta-link"
              >
                📅 Schedule with Konika (OnceHub) →
              </a>
            </p>
            <ul className="onboarding-list">
              <CheckRow
                id="schedule-biweekly-konika"
                checked={checked['schedule-biweekly-konika']}
                onToggle={toggleChecked}
                label="Bi-weekly 1-on-1 is on the calendar for at least the next two weeks."
              />
              <CheckRow
                id="agenda-understood"
                checked={checked['agenda-understood']}
                onToggle={toggleChecked}
                label="I understand we will cover: what went well, what needs to be accomplished, and goals."
              />
              <CheckRow
                id="dm-setup-done"
                checked={checked['dm-setup-done']}
                onToggle={toggleChecked}
                label="I slacked Konika when this setup block is done."
              />
            </ul>
          </div>

          <div className="onboarding-day-section">
            <h3 className="onboarding-day-title">2. Website feedback &amp; how you contribute</h3>
            <p className="konika-growth-section-intro">
              Spend real time on our site, then sync with Konika on your honest take and where you can help.
            </p>
            <p>
              <a href="https://kahana.co" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link">
                Open kahana.co →
              </a>
            </p>
            <ul className="onboarding-list">
              <CheckRow
                id="website-reviewed"
                checked={checked['website-reviewed']}
                onToggle={toggleChecked}
                label="I reviewed the website and captured honest feedback (notes are fine)."
              />
              <CheckRow
                id="connected-discuss-contribution"
                checked={checked['connected-discuss-contribution']}
                onToggle={toggleChecked}
                label="I connected with Konika to discuss my feedback and how I can contribute."
              />
            </ul>
          </div>

          <div className="onboarding-day-section">
            <h3 className="onboarding-day-title">3. Blog training with Pallavi (3 published)</h3>
            <p className="konika-growth-section-intro">
              Setup a meeting with <strong>Pallavi</strong>, create a draft during training, then publish <strong>at least 3 blogs</strong>{' '}
              as part of onboarding training. When all three are live, DM Konika.
            </p>
            <ul className="onboarding-list">
              <CheckRow
                id="pallavi-training-meeting"
                checked={checked['pallavi-training-meeting']}
                onToggle={toggleChecked}
                label="I had the blog training meeting with Pallavi."
              />
              <CheckRow
                id="draft-blog-training"
                checked={checked['draft-blog-training']}
                onToggle={toggleChecked}
                label="I created a draft blog during training."
              />
              <CheckRow
                id="publish-blog-1"
                checked={checked['publish-blog-1']}
                onToggle={toggleChecked}
                label="Published blog 1 of 3."
              />
              <CheckRow
                id="publish-blog-2"
                checked={checked['publish-blog-2']}
                onToggle={toggleChecked}
                label="Published blog 2 of 3."
              />
              <CheckRow
                id="publish-blog-3"
                checked={checked['publish-blog-3']}
                onToggle={toggleChecked}
                label="Published blog 3 of 3."
              />
              <CheckRow
                id="dm-training-done"
                checked={checked['dm-training-done']}
                onToggle={toggleChecked}
                label="I slacked Konika when training was complete (3 blogs published)."
              />
            </ul>
          </div>

          <div className="onboarding-day-section">
            <h3 className="onboarding-day-title">4. Ongoing cadence: 10 blogs per week</h3>
            <p className="konika-growth-section-intro">
              After training, the bar is <strong>at least 10 blogs per week</strong>. Konika maintains a topics list
              you should use for tracking and creation — ask for the current sheet or doc if you do not have it yet.
            </p>
            <ul className="onboarding-list">
              <CheckRow
                id="cadence-10-per-week"
                checked={checked['cadence-10-per-week']}
                onToggle={toggleChecked}
                label="I am committed to the 10 blogs/week cadence (or have aligned exceptions with Konika)."
              />
              <CheckRow
                id="topics-list-tracking"
                checked={checked['topics-list-tracking']}
                onToggle={toggleChecked}
                label="I am using Konika’s topics list to track and create blogs."
              />
            </ul>
          </div>

          <div className="onboarding-day-section">
            <h3 className="onboarding-day-title">5. KPIs, escalation &amp; pricing focus</h3>
            <p className="konika-growth-section-intro">
              These are acknowledgment checks so expectations are explicit.
            </p>
            <ul className="onboarding-list">
              <CheckRow
                id="kpi-traffic-understood"
                checked={checked['kpi-traffic-understood']}
                onToggle={toggleChecked}
                label="I understand we are working toward ~1M–2M traffic (views) and will track progress with Konika."
              />
              <CheckRow
                id="escalate-when-stuck"
                checked={checked['escalate-when-stuck']}
                onToggle={toggleChecked}
                label="If something is going wrong or I’m blocked, I will message Konika — I won’t sit on it."
              />
              <CheckRow
                id="pricing-traffic-challenge"
                checked={checked['pricing-traffic-challenge']}
                onToggle={toggleChecked}
                label="I understand a key challenge is driving more traffic to the pricing page."
              />
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
