import React, { useState, useCallback, useRef } from 'react'
import { INSTRUCTIONS } from './soc2Type1Instructions'
import './Page.css'
import './SOC2Type1Checklist.css'

const STORAGE_KEY = 'soc2-type1-checklist'

const GOOGLE_DRIVE_URL = 'https://drive.google.com/drive/folders/1F4k70oaZgZ6kmYKJJsPe46JVs6UxExY7?usp=sharing'
const PERPLEXITY_URL = 'https://www.perplexity.ai/'
const ANTIGRAVITY_URL = 'https://antigravity.google/'
const DATA_ROOM_REPO_URL = 'https://github.com/AdamKershner/data-room'
const TALLY_FEEDBACK_FORM_URL = 'https://tally.so/embed/obOlb1'

const ASSIGNMENTS = {
  'ev-setup': 'Hasitha, Konika',
  'p0a-1': 'Hasitha, Konika', 'p0a-2': 'Adam', 'p0a-3': 'Adam', 'p0a-4': 'Hasitha, Konika', 'p0a-5': 'Adam',
  'p0b-1': 'Adam', 'p0b-2': 'Adam', 'p0b-4': 'Adam',
  'p1log-3': 'Hasitha, Konika',
  'p2ch-2': 'Hasitha, Konika',
  'p2r-1': 'Adam', 'p2r-2': 'Hasitha, Konika', 'p2r-4': 'Adam',
  'assert-1': 'Adam', 'assert-2': 'Hasitha, Konika', 'assert-3': 'Adam',
  'one-1': 'Hasitha, Konika', 'one-2': 'Hasitha, Konika', 'one-6': 'Adam',
  'rec-q1': 'Adam', 'rec-q2': 'Adam', 'rec-q3': 'Adam', 'rec-q4': 'Adam', 'rec-risk': 'Adam',
  'ev-1': 'Hasitha, Konika', 'ev-2': 'Hasitha, Konika', 'ev-3': 'Hasitha, Konika', 'ev-4': 'Hasitha, Konika', 'ev-5': 'Hasitha, Konika',
  'ev-6': 'Adam', 'ev-7': 'Hasitha, Konika', 'ev-8': 'Hasitha, Konika', 'ev-9': 'Hasitha, Konika',
  'so-1': 'Adam', 'so-2': 'Adam', 'so-3': 'Adam', 'so-4': 'Adam',
  'vc-aws-1': 'Adam', 'vc-aws-2': 'Adam', 'vc-supabase-1': 'Adam',
  'vc-github-1': 'Adam', 'vc-google-1': 'Adam', 'vc-stripe-1': 'Adam',
}

/** Estimated time to complete each task. Used for doc-* and dec-* when not explicitly set. */
const TIME_ESTIMATES = {
  'ev-setup': '15 min',
  'p0a-1': '30 min', 'p0a-2': '1–2 hrs', 'p0a-3': '5 min', 'p0a-4': '5 min', 'p0a-5': '5 min',
  'p0b-1': '5 min', 'p0b-2': '30 min', 'p0b-4': '30 min',
  'p1log-3': '15 min',
  'p2ch-2': '30 min',
  'p2r-1': '2 hrs', 'p2r-2': '1 hr', 'p2r-4': '15 min',
  'assert-1': '5 min', 'assert-2': '30 min', 'assert-3': '5 min',
  'one-1': '15 min', 'one-2': '15 min', 'one-6': '1–2 hrs',
  'rec-q1': '1 hr', 'rec-q2': '1 hr', 'rec-q3': '1 hr', 'rec-q4': '1 hr', 'rec-risk': '2 hrs',
  'ev-1': '5 min', 'ev-2': '5 min', 'ev-3': '5 min', 'ev-4': '5 min', 'ev-5': '5 min',
  'ev-6': '5 min', 'ev-7': '5 min', 'ev-8': '5 min', 'ev-9': '5 min',
  'so-1': '15 min', 'so-2': '15 min', 'so-3': '5 min', 'so-4': '5 min',
  'dec-1': '5 min', 'dec-2': '5 min', 'dec-3': '5 min', 'dec-4': '5 min', 'dec-5': '5 min',
  'vc-aws-1': '30 min', 'vc-aws-2': '30 min', 'vc-supabase-1': '30 min',
  'vc-github-1': '20 min', 'vc-google-1': '20 min', 'vc-stripe-1': '15 min',
  // doc-*: 10–20 min with Cursor + Perplexity; system/risk docs slightly longer
  ...Object.fromEntries(
    [...Array(53)].map((_, i) => {
      const n = i + 1
      const est = (n >= 14 && n <= 25) ? '15–25 min' : '10–20 min'
      return [`doc-${n}`, est]
    })
  ),
}

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

/** Parses text with [[taskId|link text]] (internal) and [[url|text]] or [[GOOGLE_DRIVE|text]] (external). */
function parseInstructionWithLinks(text, onNavigateToTask) {
  if (!text) return null
  const pattern = /\[\[(https?:\/\/[^\s|]+|GOOGLE_DRIVE|PERPLEXITY|ANTIGRAVITY|DATA_ROOM_REPO|[a-z0-9-]+)\|([^\]]+)\]\]/g
  const parts = []
  let lastIndex = 0
  let match
  while ((match = pattern.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index))
    const ref = match[1]
    const linkText = match[2]
    const href = ref === 'GOOGLE_DRIVE' ? GOOGLE_DRIVE_URL : ref === 'PERPLEXITY' ? PERPLEXITY_URL : ref === 'ANTIGRAVITY' ? ANTIGRAVITY_URL : ref === 'DATA_ROOM_REPO' ? DATA_ROOM_REPO_URL : ref.startsWith('http') ? ref : null
    parts.push({ type: 'link', taskId: href ? null : ref, href, text: linkText })
    lastIndex = match.index + match[0].length
  }
  parts.push(text.slice(lastIndex))
  return parts.map((part, i) =>
    typeof part === 'string' ? (
      part
    ) : part.href ? (
      <a
        key={i}
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
        className="soc2-instruction-link"
      >
        {part.text}
      </a>
    ) : (
      <a
        key={i}
        href={`#soc2-task-${part.taskId}`}
        className="soc2-instruction-link"
        onClick={(e) => {
          e.preventDefault()
          onNavigateToTask?.(part.taskId)
        }}
      >
        {part.text}
      </a>
    )
  )
}

function CheckRowWithInstructions({ id, checked, onToggle, label, sublabel, tag, openId, onToggleOpen, onNavigateToTask, onOpenFeedback }) {
  const instruction = INSTRUCTIONS[id]
  const isOpen = openId === id
  const lastClickRef = React.useRef(null)
  const displayTag = tag ?? ASSIGNMENTS[id] ?? (id.startsWith('doc-') ? 'Hasitha, Konika' : id.startsWith('dec-') ? 'Adam' : null)
  const timeEstimate = TIME_ESTIMATES[id] ?? (id.startsWith('doc-') ? '10–20 min' : id.startsWith('dec-') ? '5 min' : null)

  return (
    <>
      <tr id={`soc2-task-${id}`}>
        <td className="soc2-check-cell">
          <label
            className="soc2-checkbox-wrapper"
            onClick={(e) => {
              lastClickRef.current = { x: e.clientX, y: e.clientY }
            }}
          >
            <input
              type="checkbox"
              checked={!!checked}
              onChange={() => onToggle(id, lastClickRef.current)}
              className="soc2-checkbox"
            />
            <span className="soc2-checkbox-custom" />
            {instruction && (
              <button
                type="button"
                className="soc2-view-instructions-link"
                onClick={() => onToggleOpen(isOpen ? null : id)}
                aria-expanded={isOpen}
              >
                {isOpen ? 'Hide instructions' : 'View instructions'}
              </button>
            )}
            <button
              type="button"
              className="soc2-feedback-link"
              onClick={() => onOpenFeedback?.(id)}
              title="Log feedback or questions for this task"
            >
              Feedback
            </button>
          </label>
        </td>
        <td className="soc2-id-cell">
          <code className="soc2-task-id">{id}</code>
        </td>
        <td className="soc2-assigned-cell">
          {displayTag ? (
            <span className="soc2-tags">
              {displayTag.split(',').map((name) => name.trim()).filter(Boolean).map((name, i) => (
                <span key={i} className="soc2-tag">{name}</span>
              ))}
            </span>
          ) : '—'}
        </td>
        <td className="soc2-label-cell">
          {parseInstructionWithLinks(label, onNavigateToTask) ?? label}
          {sublabel && <span className="soc2-sublabel">{sublabel}</span>}
        </td>
        <td className="soc2-time-cell">
          {timeEstimate ?? '—'}
        </td>
      </tr>
      {instruction && isOpen && (
        <tr>
          <td colSpan={5} className="soc2-instruction-cell">
            <div className="soc2-instruction-panel">
              {instruction.prompt && (
                <div className="soc2-instruction-block soc2-prompt-block">
                  <strong>Prompts for content generation:</strong>
                  <p className="soc2-prompt-intro">1. In Cursor or <a href={ANTIGRAVITY_URL} target="_blank" rel="noopener noreferrer" className="soc2-instruction-link">Antigravity</a> (<a href={DATA_ROOM_REPO_URL} target="_blank" rel="noopener noreferrer" className="soc2-instruction-link">Data Room repo</a>), Konika can prompt to generate Kahana-specific content. 2. Hasitha takes the output, adds to Google Doc, or further refines with <a href={PERPLEXITY_URL} target="_blank" rel="noopener noreferrer" className="soc2-instruction-link">Perplexity</a> for industry standards and best practices.</p>
                  <div className="soc2-prompt-item">
                    <strong>Cursor or <a href={ANTIGRAVITY_URL} target="_blank" rel="noopener noreferrer" className="soc2-instruction-link">Antigravity</a> (<a href={DATA_ROOM_REPO_URL} target="_blank" rel="noopener noreferrer" className="soc2-instruction-link">Data Room repository</a>):</strong>
                    <blockquote className="soc2-prompt-quote">{parseInstructionWithLinks(instruction.prompt.cursor, onNavigateToTask)}</blockquote>
                  </div>
                  <div className="soc2-prompt-item">
                    <strong><a href={PERPLEXITY_URL} target="_blank" rel="noopener noreferrer" className="soc2-instruction-link">Perplexity</a> (optional refinement):</strong>
                    <blockquote className="soc2-prompt-quote">{instruction.prompt.perplexity}</blockquote>
                  </div>
                </div>
              )}
              <div className="soc2-instruction-block">
                <strong>How to do this:</strong>
                <p className="soc2-how-to">{parseInstructionWithLinks(instruction.howTo, onNavigateToTask)}</p>
              </div>
              <div className="soc2-instruction-block">
                <strong>What has already been done:</strong>
                <p>{parseInstructionWithLinks(instruction.alreadyDone, onNavigateToTask)}</p>
              </div>
              {instruction.successCriteria && (
                <div className="soc2-instruction-block">
                  <strong>Success criteria / Definition of done:</strong>
                  <p>{parseInstructionWithLinks(instruction.successCriteria, onNavigateToTask)}</p>
                </div>
              )}
              {instruction.why && (
                <div className="soc2-instruction-block soc2-why-block">
                  <strong>Why?</strong>
                  <p>{parseInstructionWithLinks(instruction.why, onNavigateToTask)}</p>
                </div>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

function SOC2Type1Checklist() {
  const [checked, setChecked] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : {}
    } catch {
      return {}
    }
  })
  const [openId, setOpenId] = useState(null)
  const [feedbackTaskId, setFeedbackTaskId] = useState(null)
  const [confetti, setConfetti] = useState(null)
  const lastClickRef = useRef(null)

  const handleNavigateToTask = useCallback((taskId) => {
    const el = document.getElementById(`soc2-task-${taskId}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setOpenId(taskId)
  }, [])

  const toggle = useCallback((id, clickPos) => {
    setChecked((prev) => {
      const wasChecked = !!prev[id]
      const next = { ...prev, [id]: !wasChecked }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      if (!wasChecked && clickPos) {
        setConfetti({ x: clickPos.x, y: clickPos.y })
      }
      return next
    })
  }, [])

  const clearConfetti = useCallback(() => setConfetti(null), [])

  const handleOpenFeedback = useCallback((taskId) => setFeedbackTaskId(taskId), [])

  const isChecked = (id) => !!checked[id]

  const decisionIds = ['dec-1', 'dec-2', 'dec-3', 'dec-4', 'dec-5']
  const p0AccessIds = ['p0a-1', 'p0a-2', 'p0a-3', 'p0a-4', 'p0a-5']
  const p0BackupIds = ['p0b-1', 'p0b-2', 'p0b-4']
  const p1LogIds = ['p1log-3']
  const p2ChangeIds = ['p2ch-2']
  const p2RiskIds = ['p2r-1', 'p2r-2', 'p2r-4']
  const assertionIds = ['assert-1', 'assert-2', 'assert-3']
  const onetimeIds = ['one-1', 'one-2', 'one-6']
  const recurringQ = ['rec-q1', 'rec-q2', 'rec-q3', 'rec-q4']
  const recurringRisk = ['rec-risk']
  const evidenceIds = ['ev-setup', 'ev-1', 'ev-2', 'ev-3', 'ev-4', 'ev-5', 'ev-6', 'ev-7', 'ev-8', 'ev-9']
  const signoffIds = ['so-1', 'so-2', 'so-3', 'so-4']
  const vendorConfigIds = ['vc-aws-1', 'vc-aws-2', 'vc-supabase-1', 'vc-github-1', 'vc-google-1', 'vc-stripe-1']
  const docIds = [
    'doc-1', 'doc-2', 'doc-3', 'doc-4', 'doc-5', 'doc-6', 'doc-7', 'doc-8', 'doc-9', 'doc-10',
    'doc-11', 'doc-12', 'doc-13', 'doc-14', 'doc-15', 'doc-16', 'doc-17', 'doc-18', 'doc-19', 'doc-20',
    'doc-21', 'doc-22', 'doc-23', 'doc-24', 'doc-25', 'doc-26', 'doc-27', 'doc-28', 'doc-29', 'doc-30',
    'doc-31', 'doc-32', 'doc-33', 'doc-34', 'doc-35', 'doc-36', 'doc-37', 'doc-38', 'doc-39', 'doc-40',
    'doc-41', 'doc-42', 'doc-43', 'doc-44', 'doc-45', 'doc-46', 'doc-47', 'doc-48', 'doc-49', 'doc-50',
    'doc-51', 'doc-52', 'doc-53'
  ]

  const allIds = [
    ...docIds,
    ...decisionIds, ...vendorConfigIds, ...p0AccessIds, ...p0BackupIds, ...p1LogIds,
    ...p2ChangeIds, ...p2RiskIds, ...assertionIds, ...onetimeIds,
    ...recurringQ, ...recurringRisk, ...evidenceIds, ...signoffIds
  ]
  const completed = allIds.filter((id) => checked[id]).length
  const total = allIds.length
  const progress = total ? Math.round((completed / total) * 100) : 0

  return (
    <div className="page" id="soc2-type1-checklist">
      {confetti && (
        <ConfettiBurst
          x={confetti.x}
          y={confetti.y}
          onComplete={clearConfetti}
        />
      )}
      <div className="page-header">
        <h1>SOC 2 Type 1 Internal Checklist</h1>
        <p className="page-subtitle">
          Internal tracking for SOC 2 Type 1 audit readiness. Policies live in the SOC Documents folder (Google Docs when ready). Checkboxes save in your browser.
        </p>
        <div className="soc2-progress-sticky">
          <div className="soc2-checklist-summary">
            <span className="soc2-checklist-count">{completed} / {total}</span>
            <span className="soc2-checklist-progress">{progress}% complete</span>
          </div>
          <div className="soc2-progress-bar">
            <div className="soc2-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <section className="page-section soc2-section">
        <h2>SOC 2 document workspace (Google Drive)</h2>
        <div className="content-block">
          <p><strong>Suggested order:</strong> 1) Manager decisions (Section 1), 2) Evidence folder (below), 3) Vendor Configurations, 4) Core policies (doc-1–doc-13), 5) Gaps (Section 2), 6) Remaining docs.</p>
          <p>
            All SOC 2 policies, procedures, and evidence docs should live in a single Google Drive workspace so they are easy to find, review, and update over time.
          </p>
          <p>
            Use this shared folder as the home for all SOC 2 documentation:{' '}
            <a
              href="https://drive.google.com/drive/folders/1F4k70oaZgZ6kmYKJJsPe46JVs6UxExY7?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="onboarding-inline-link"
            >
              SOC2 Docs &amp; Policies (Google Drive)
            </a>
          </p>
          <ul className="soc2-auditor-list">
            <li className="soc2-auditor-item">
              <span className="soc2-auditor-icon">📄</span>
              <div className="soc2-auditor-text">
                Create one Google Doc per policy or artifact (e.g., Access Control Policy, Change Management Policy, System Description, Risk Assessment Report, Backup and Restoration Policy).
              </div>
            </li>
            <li className="soc2-auditor-item">
              <span className="soc2-auditor-icon">📅</span>
              <div className="soc2-auditor-text">
                At the top of each doc, include: <strong>Creation date</strong>, <strong>Last update date</strong>, and a short <strong>change control / version history</strong> table (date, editor, summary of change).
              </div>
            </li>
            <li className="soc2-auditor-item">
              <span className="soc2-auditor-icon">✅</span>
              <div className="soc2-auditor-text">
                Ensure every policy required by this checklist (and all evidence documents referenced in Section 6) is created in this folder, so auditors can see one organized system of record for SOC 2.
              </div>
            </li>
          </ul>
          <h3>Evidence folder structure</h3>
          <p>Create an Evidence folder (and subfolders) in the SOC2 Docs &amp; Policies folder before saving evidence documents. Use &quot;View instructions&quot; for the full list of subfolders.</p>
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Task</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="ev-setup" checked={isChecked('ev-setup')} onToggle={toggle} label="Create Evidence folder structure in [[GOOGLE_DRIVE|Google Drive]]: Evidence folder with subfolders (Access-Review-Logs, Backup-Test-Results, Change-Management, Employee-Onboarding-Offboarding, Vendor-Review)" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>Manager notes</h2>
        <div className="content-block soc2-note">
          <p><strong>Policies:</strong> Move to Google Docs when possible. For now, the <strong>SOC Documents</strong> folder is the source of truth.</p>
          <p><strong>SOC 2 Type 1</strong> = point-in-time audit (controls in place). Type II would require evidence over 6–12 months.</p>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>Documents to Create and Add to Google Drive</h2>
        <p className="soc2-section-intro">Each document must be created as a Google Doc, added to the SOC2 Docs &amp; Policies folder, and include at the top: <strong>Document Creation Date</strong>, <strong>Last Change</strong>, and a <strong>Change Control / Version History</strong> table (Date | Editor | Summary of change). Assigned to Hasitha and Konika—Konika can cross-reference the codebase to ensure documentation is contextually accurate to Kahana. Use &quot;View instructions&quot; for document-specific guidance.</p>

        <h3>Core Policies</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Document</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="doc-1" checked={isChecked('doc-1')} onToggle={toggle} label="Create Information Security Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-2" checked={isChecked('doc-2')} onToggle={toggle} label="Create Access Control Policy and add to [[GOOGLE_DRIVE|Google Drive]] (include: Google Workspace for Adam only; IdP deferred with rationale; provisioning, deprovisioning, quarterly access reviews)" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-3" checked={isChecked('doc-3')} onToggle={toggle} label="Create Change Management Policy and add to [[GOOGLE_DRIVE|Google Drive]] (include: GitHub PRs, Tally→Slack→Sheets→GitHub, CI/CD flow)" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-4" checked={isChecked('doc-4')} onToggle={toggle} label="Create Backup and Restoration Policy and add to [[GOOGLE_DRIVE|Google Drive]] (include: backup location S3, retention 7 days Pro, who can restore)" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-5" checked={isChecked('doc-5')} onToggle={toggle} label="Create Logging and Monitoring Policy and add to [[GOOGLE_DRIVE|Google Drive]] (include: Supabase logs, Mixpanel, 7-day retention, where logs are stored, who can access)" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-6" checked={isChecked('doc-6')} onToggle={toggle} label="Create Encryption Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-7" checked={isChecked('doc-7')} onToggle={toggle} label="Create Data Classification and Handling Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-8" checked={isChecked('doc-8')} onToggle={toggle} label="Create Incident Response Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-9" checked={isChecked('doc-9')} onToggle={toggle} label="Create Acceptable Use Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-10" checked={isChecked('doc-10')} onToggle={toggle} label="Create Business Continuity and Disaster Recovery Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-11" checked={isChecked('doc-11')} onToggle={toggle} label="Create Vendor and Third-Party Risk Management Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-12" checked={isChecked('doc-12')} onToggle={toggle} label="Create Privacy Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-13" checked={isChecked('doc-13')} onToggle={toggle} label="Create Risk Assessment Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>Management and Governance</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Document</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="doc-14" checked={isChecked('doc-14')} onToggle={toggle} label="Create System Description Document and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-15" checked={isChecked('doc-15')} onToggle={toggle} label="Create Organization Chart and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-16" checked={isChecked('doc-16')} onToggle={toggle} label="Create Management Assertion Letter and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-17" checked={isChecked('doc-17')} onToggle={toggle} label="Create Compliance Program Overview and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-18" checked={isChecked('doc-18')} onToggle={toggle} label="Create Corporate Governance Manual and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-19" checked={isChecked('doc-19')} onToggle={toggle} label="Create Controls Matrix (CC1–CC9) and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>Risk and Compliance</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Document</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="doc-20" checked={isChecked('doc-20')} onToggle={toggle} label="Create Risk Assessment Report and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-21" checked={isChecked('doc-21')} onToggle={toggle} label="Create Information Security Risk Register and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-22" checked={isChecked('doc-22')} onToggle={toggle} label="Create Risk Treatment Plan and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-23" checked={isChecked('doc-23')} onToggle={toggle} label="Create Risk Assessment Methods and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-24" checked={isChecked('doc-24')} onToggle={toggle} label="Create Vendor Risk Assessment Template and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-25" checked={isChecked('doc-25')} onToggle={toggle} label="Create Third-Party Service Agreement and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>Technical and Development</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Document</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="doc-26" checked={isChecked('doc-26')} onToggle={toggle} label="Create SDLC Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-27" checked={isChecked('doc-27')} onToggle={toggle} label="Create Code Review Procedures and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-28" checked={isChecked('doc-28')} onToggle={toggle} label="Create Configuration Management Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-29" checked={isChecked('doc-29')} onToggle={toggle} label="Create Password and Authentication Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-30" checked={isChecked('doc-30')} onToggle={toggle} label="Create Remote Access Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-31" checked={isChecked('doc-31')} onToggle={toggle} label="Create Data Retention and Destruction Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>Security and Operations</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Document</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="doc-32" checked={isChecked('doc-32')} onToggle={toggle} label="Create Subservice Organization and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-33" checked={isChecked('doc-33')} onToggle={toggle} label="Create Vulnerability Management Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-34" checked={isChecked('doc-34')} onToggle={toggle} label="Create Workstation Security Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-35" checked={isChecked('doc-35')} onToggle={toggle} label="Create Physical Security Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-36" checked={isChecked('doc-36')} onToggle={toggle} label="Create Network Security Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-37" checked={isChecked('doc-37')} onToggle={toggle} label="Create Phishing Simulation Program and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>HR and Personnel</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Document</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="doc-38" checked={isChecked('doc-38')} onToggle={toggle} label="Create Employee Onboarding Checklist and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-39" checked={isChecked('doc-39')} onToggle={toggle} label="Create Employee Offboarding Checklist and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-40" checked={isChecked('doc-40')} onToggle={toggle} label="Create Employee Handbook and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-41" checked={isChecked('doc-41')} onToggle={toggle} label="Create Code of Conduct and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-42" checked={isChecked('doc-42')} onToggle={toggle} label="Create NDA and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-43" checked={isChecked('doc-43')} onToggle={toggle} label="Create Background Check Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-44" checked={isChecked('doc-44')} onToggle={toggle} label="Create Security Awareness Training and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>Privacy and Data Protection</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Document</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="doc-45" checked={isChecked('doc-45')} onToggle={toggle} label="Create Data Protection Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-46" checked={isChecked('doc-46')} onToggle={toggle} label="Create Confidentiality Policy and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-47" checked={isChecked('doc-47')} onToggle={toggle} label="Create Customer Data Protection and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>Technical Documentation</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Document</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="doc-48" checked={isChecked('doc-48')} onToggle={toggle} label="Create System Architecture Design and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-49" checked={isChecked('doc-49')} onToggle={toggle} label="Create Data Flow Diagram and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-50" checked={isChecked('doc-50')} onToggle={toggle} label="Create Network Architecture and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-51" checked={isChecked('doc-51')} onToggle={toggle} label="Create Asset Inventory and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-52" checked={isChecked('doc-52')} onToggle={toggle} label="Create Firewall Rules and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="doc-53" checked={isChecked('doc-53')} onToggle={toggle} label="Create System Configuration Standards and add to [[GOOGLE_DRIVE|Google Drive]]" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>1. Manager decisions</h2>
        <p className="soc2-section-intro">Decisions that only management can make and that other tasks depend on. Complete these first so policies and procedures can reference the correct values (e.g. second signatory, RTO/RPO).</p>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead>
              <tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Task</th><th className="soc2-th-time">Est. time</th></tr>
            </thead>
            <tbody>
              <CheckRowWithInstructions id="dec-1" checked={isChecked('dec-1')} onToggle={toggle} label="Decide second signatory for Management Assertion (CFO, COO, or CTO if no CFO)" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="dec-2" checked={isChecked('dec-2')} onToggle={toggle} label="Assign CTO/Security Lead as technical contact for auditor" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="dec-3" checked={isChecked('dec-3')} onToggle={toggle} label="Confirm Supabase plan (Free or Pro); upgrade to Pro if Free for backups" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="dec-4" checked={isChecked('dec-4')} onToggle={toggle} label="Set RTO target (max acceptable downtime, e.g. 8 hours)" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="dec-5" checked={isChecked('dec-5')} onToggle={toggle} label="Set RPO target (max acceptable data loss, e.g. 24 hours)" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>Vendor Configurations</h2>
        <p className="soc2-section-intro">Verify that each platform has the right rules and configurations for SOC 2 compliance. Document findings or take screenshots for evidence.</p>

        <h3>AWS</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="vc-aws-1" checked={isChecked('vc-aws-1')} onToggle={toggle} label="Verify AWS: Enable MFA for root and IAM users; apply least-privilege IAM policies" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="vc-aws-2" checked={isChecked('vc-aws-2')} onToggle={toggle} label="Verify AWS: Enable CloudTrail; confirm S3 encryption and block public access; verify Secrets Manager usage" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>Supabase</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="vc-supabase-1" checked={isChecked('vc-supabase-1')} onToggle={toggle} label="Verify Supabase: Enable RLS on sensitive tables; confirm auth providers, encryption, and API key restrictions" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>GitHub</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="vc-github-1" checked={isChecked('vc-github-1')} onToggle={toggle} label="Verify GitHub: Require 2FA for org members; enable branch protection on main" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>Google Workspace</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="vc-google-1" checked={isChecked('vc-google-1')} onToggle={toggle} label="Verify Google Workspace: Enforce 2-Step Verification; confirm admin roles (Adam only); enable audit log" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>Stripe</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="vc-stripe-1" checked={isChecked('vc-stripe-1')} onToggle={toggle} label="Verify Stripe: Use restricted API keys; verify webhook signatures; confirm no raw card storage" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>2. Gaps and how to achieve them</h2>
        <p className="soc2-section-intro">Operational gaps identified for SOC 2 (access reviews, backups, risk assessment, etc.). These tasks close the gaps—prioritize P0 items first. Documentation tasks go to Hasitha and Konika; manager review/sign-off goes to Adam.</p>

        <h3>P0 – Access reviews (quarterly)</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p0a-1" checked={isChecked('p0a-1')} onToggle={toggle} label="Create access list template: spreadsheet or doc with columns Person, System, Access Level, Last Reviewed" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="p0a-2" checked={isChecked('p0a-2')} onToggle={toggle} label="Populate first access list: list every person with access to Supabase, Stripe, AWS, GitHub, Google Workspace and their access level" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="p0a-3" checked={isChecked('p0a-3')} onToggle={toggle} label="Manager reviews access list and signs off (confirms access is appropriate)" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="p0a-4" checked={isChecked('p0a-4')} onToggle={toggle} label="Save signed access list and sign-off in Evidence/Access-Review-Logs folder" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="p0a-5" checked={isChecked('p0a-5')} onToggle={toggle} label="Complete quarterly access reviews: update list, get manager sign-off, save to Access-Review-Logs (Q1, Q2, Q3, Q4)" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
          <p className="soc2-why"><strong>Why:</strong> CC6.1 – auditor expects proof you verify who has access and remove access when people leave.</p>
        </div>

        <h3>P0 – Backups (Supabase)</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p0b-1" checked={isChecked('p0b-1')} onToggle={toggle} label="Confirm Supabase plan: check Project Settings → Billing; document whether Free or Pro" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="p0b-2" checked={isChecked('p0b-2')} onToggle={toggle} label="If Free: upgrade to Pro ($25/mo) for backups, or document manual backup process in policy" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="p0b-4" checked={isChecked('p0b-4')} onToggle={toggle} label="Run one backup restore test and document date, result, steps in Evidence/Backup-Test-Results" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
          <p className="soc2-why"><strong>Why:</strong> BC/DR – auditor needs proof financial/billing data can be recovered. Free tier has no automatic backups.</p>
        </div>

        <h3>P1 – Logging / SIEM</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p1log-3" checked={isChecked('p1log-3')} onToggle={toggle} label="(Optional) Evaluate Datadog; document decision and timeline in Logging Policy" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>P2 – Change management</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p2ch-2" checked={isChecked('p2ch-2')} onToggle={toggle} label="Document evidence sources for auditor: GitHub PR history, workflow runs, deployment logs" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>

        <h3>P2 – Risk assessment</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p2r-1" checked={isChecked('p2r-1')} onToggle={toggle} label="Conduct risk assessment session: list risks (breach, outage, data loss), score likelihood/impact, define mitigations" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="p2r-2" checked={isChecked('p2r-2')} onToggle={toggle} label="Populate Risk-Assessment-Report, Risk-Register, and Risk-Treatment-Plan with risk IDs, descriptions, owners, status, and concrete actions for each risk" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="p2r-4" checked={isChecked('p2r-4')} onToggle={toggle} label="Manager reviews and approves risk assessment; sign and date" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>3. Management assertion and signatories</h2>
        <p className="soc2-section-intro">The Management Assertion Letter is the formal statement that controls are in place. These tasks ensure the letter is ready with both signatories named and the audit period set; signing happens when the auditor provides the final version.</p>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="assert-1" checked={isChecked('assert-1')} onToggle={toggle} label="Confirm CEO and second signatory" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="assert-2" checked={isChecked('assert-2')} onToggle={toggle} label="Update Management-Assertion-Letter with both names and audit period" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="assert-3" checked={isChecked('assert-3')} onToggle={toggle} label="Both sign and date the Management Assertion when auditor provides final version" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>4. One-time setup tasks</h2>
        <p className="soc2-section-intro">Tasks you do once to finalize policies and vendor documentation. These depend on Section 1 decisions (e.g. add RTO/RPO after dec-4/dec-5; add CTO name after dec-2).</p>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Task</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="one-1" checked={isChecked('one-1')} onToggle={toggle} label="Add RTO/RPO to Backup and BC/DR policies" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="one-2" checked={isChecked('one-2')} onToggle={toggle} label="Add CTO / Security Lead to System Description and Org Chart" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="one-6" checked={isChecked('one-6')} onToggle={toggle} label="Collect DPAs and SOC 2 reports from critical vendors" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>5. Recurring tasks</h2>
        <p className="soc2-section-intro">Tasks that repeat on a schedule (quarterly access reviews, annual risk assessment). Mark each when completed for that period; these demonstrate ongoing control operation.</p>
        <h3>Access review (quarterly)</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Task</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="rec-q1" checked={isChecked('rec-q1')} onToggle={toggle} label="Complete Q1 access review; obtain manager sign-off; save in Evidence" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="rec-q2" checked={isChecked('rec-q2')} onToggle={toggle} label="Complete Q2 access review; obtain manager sign-off; save in Evidence" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="rec-q3" checked={isChecked('rec-q3')} onToggle={toggle} label="Complete Q3 access review; obtain manager sign-off; save in Evidence" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="rec-q4" checked={isChecked('rec-q4')} onToggle={toggle} label="Complete Q4 access review; obtain manager sign-off; save in Evidence" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
        <h3>Risk assessment (annual)</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Step</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="rec-risk" checked={isChecked('rec-risk')} onToggle={toggle} label="Conduct annual risk assessment; update Risk Report, Register, Treatment Plan; obtain manager approval" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>6. Prepare evidence for auditor</h2>
        <p className="soc2-section-intro">Gather and verify each item below before the audit. Most items come from completing earlier sections (e.g. access sign-offs from Section 5, backup test from Section 2). Use this to confirm nothing is missing.</p>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Task</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="ev-1" checked={isChecked('ev-1')} onToggle={toggle} label="Collect access list and quarterly sign-offs; save in Evidence/Access-Review-Logs" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="ev-2" checked={isChecked('ev-2')} onToggle={toggle} label="Gather documented change management flow for auditor" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="ev-3" checked={isChecked('ev-3')} onToggle={toggle} label="Prepare GitHub PR history and deployment logs for auditor" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="ev-4" checked={isChecked('ev-4')} onToggle={toggle} label="Collect Risk Assessment Report and Register with management approval" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="ev-5" checked={isChecked('ev-5')} onToggle={toggle} label="Collect backup/restore test record; save in Evidence/Backup-Test-Results" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="ev-6" checked={isChecked('ev-6')} onToggle={toggle} label="Obtain signed Management Assertion from both signatories" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="ev-7" checked={isChecked('ev-7')} onToggle={toggle} label="Verify RTO/RPO are documented in Backup and BC/DR policies" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="ev-8" checked={isChecked('ev-8')} onToggle={toggle} label="Complete onboarding checklist for each hire; save in Evidence/Employee-Onboarding-Offboarding" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="ev-9" checked={isChecked('ev-9')} onToggle={toggle} label="Complete offboarding checklist for each departure; save in Evidence/Employee-Onboarding-Offboarding" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>7. Manager sign-off</h2>
        <p className="soc2-section-intro">Manager commitments that the process will be followed. These are not evidence items—they confirm the manager has reviewed the checklist and will provide sign-offs when required (quarterly access reviews, Management Assertion).</p>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th className="soc2-th-id">ID</th><th className="soc2-th-assigned">Assigned</th><th>Task</th><th className="soc2-th-time">Est. time</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="so-1" checked={isChecked('so-1')} onToggle={toggle} label="Review this entire checklist and confirm understanding" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="so-2" checked={isChecked('so-2')} onToggle={toggle} label="Complete all decisions in Section 1" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="so-3" checked={isChecked('so-3')} onToggle={toggle} label="Commit to providing sign-off for each quarterly access review" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
              <CheckRowWithInstructions id="so-4" checked={isChecked('so-4')} onToggle={toggle} label="Commit to signing the Management Assertion when auditor provides final version" openId={openId} onToggleOpen={setOpenId} onNavigateToTask={handleNavigateToTask} onOpenFeedback={handleOpenFeedback} />
            </tbody>
          </table>
        </div>
      </section>

      {feedbackTaskId && (
        <div className="soc2-feedback-overlay" onClick={() => setFeedbackTaskId(null)}>
          <div className="soc2-feedback-modal" onClick={(e) => e.stopPropagation()}>
            <div className="soc2-feedback-header">
              <h3>Log feedback for task <code className="soc2-feedback-task-id">{feedbackTaskId}</code></h3>
              <button type="button" className="soc2-feedback-close" onClick={() => setFeedbackTaskId(null)} aria-label="Close">×</button>
            </div>
            <p className="soc2-feedback-hint">Log comments, questions, or feedback for this task. Add a hidden field named &quot;taskId&quot; in your Tally form to auto-fill the task ID, or copy it above and paste into the form.</p>
            <iframe
              src={`${TALLY_FEEDBACK_FORM_URL}?taskId=${encodeURIComponent(feedbackTaskId)}`}
              className="soc2-feedback-iframe"
              title="SOC2 Checklist Feedback"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default SOC2Type1Checklist
