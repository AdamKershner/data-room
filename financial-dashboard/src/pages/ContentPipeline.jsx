import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Page.css'
import './ContentPipeline.css'
import priorityMd from '../content/oasis_final_youtube_video_priority_list.md?raw'
import defaults from '../content/content_pipeline_defaults.json'

function looksNumbered(text) {
  const lines = String(text || '')
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)

  if (lines.length === 0) return false

  const numbered = lines.filter(l => /^\d+[\.\)]\s+/.test(l)).length
  return numbered / lines.length >= 0.5
}

function numberizeForCreators(text) {
  const src = String(text || '')
  if (!src.trim()) return ''
  if (looksNumbered(src)) return src

  const counters = new Map()

  const resetDeeper = (level) => {
    for (const k of Array.from(counters.keys())) {
      if (k > level) counters.delete(k)
    }
  }

  const nextAt = (level) => {
    const n = (counters.get(level) || 0) + 1
    counters.set(level, n)
    resetDeeper(level)
    return n
  }

  const lines = src.split('\n')
  const out = lines.map((line) => {
    if (!line.trim()) return line

    const bullet = line.match(/^(\s*)[-•*]\s+(.*)$/)
    if (bullet) {
      const indent = bullet[1] || ''
      const content = bullet[2] || ''
      const level = indent.length
      const n = nextAt(level)
      return `${indent}${n}. ${content}`
    }

    const indent = (line.match(/^\s*/)?.[0]) || ''
    const content = line.trimStart()
    const n = nextAt(0)
    return `${indent}${n}. ${content}`
  })

  return out.join('\n')
}

function AutoGrowTextarea({ value, onChange, placeholder, minRows = 2 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [value])

  return (
    <textarea
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={minRows}
    />
  )
}

function parsePriorityMarkdown(md) {
  const lines = (md || '').split('\n')
  const sections = []
  let current = null

  const sectionHeaderRe = /^##\s+(.+)\s*$/
  const titleRe = /^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*$/

  for (const line of lines) {
    const headerMatch = line.match(sectionHeaderRe)
    if (headerMatch) {
      current = { title: headerMatch[1], items: [] }
      sections.push(current)
      continue
    }

    const titleMatch = line.match(titleRe)
    if (titleMatch) {
      if (!current) {
        current = { title: 'Videos', items: [] }
        sections.push(current)
      }
      const rank = Number(titleMatch[1])
      const title = titleMatch[2]
      current.items.push({ rank, title })
    }
  }

  const allItems = sections.flatMap(s => s.items.map(i => i.title))
  return { sections, allItems }
}

function ContentPipeline() {
  const { sections, allItems } = useMemo(() => parsePriorityMarkdown(priorityMd), [])

  const storageKey = 'oasis.contentPipeline.completed'
  const notesKey = 'oasis.contentPipeline.notes'
  const uiKey = 'oasis.contentPipeline.ui'
  const methodologyKey = 'oasis.contentPipeline.methodologyOpen'
  const [completed, setCompleted] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      const parsed = raw ? JSON.parse(raw) : {}
      return parsed && typeof parsed === 'object' ? parsed : {}
    } catch {
      return {}
    }
  })
  const [notes, setNotes] = useState(() => {
    try {
      const raw = localStorage.getItem(notesKey)
      const parsed = raw ? JSON.parse(raw) : {}
      return parsed && typeof parsed === 'object' ? parsed : {}
    } catch {
      return {}
    }
  })
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState(() => {
    try {
      const raw = localStorage.getItem(uiKey)
      const parsed = raw ? JSON.parse(raw) : {}
      if (parsed && typeof parsed === 'object') return parsed
    } catch {
      // ignore
    }
    const defaults = {}
    sections.forEach((s, idx) => { defaults[s.title] = idx < 2 })
    return defaults
  })
  const [expandedVideo, setExpandedVideo] = useState(null)
  const [methodologyOpen, setMethodologyOpen] = useState(() => {
    try {
      const raw = localStorage.getItem(methodologyKey)
      if (raw === 'true') return true
      if (raw === 'false') return false
    } catch {
      // ignore
    }
    return true
  })

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(completed))
    } catch {
      // ignore
    }
  }, [completed])

  useEffect(() => {
    try {
      localStorage.setItem(notesKey, JSON.stringify(notes))
    } catch {
      // ignore
    }
  }, [notes])

  useEffect(() => {
    try {
      localStorage.setItem(uiKey, JSON.stringify(expanded))
    } catch {
      // ignore
    }
  }, [expanded])

  useEffect(() => {
    try {
      localStorage.setItem(methodologyKey, String(!!methodologyOpen))
    } catch {
      // ignore
    }
  }, [methodologyOpen])

  const normalizedQuery = query.trim().toLowerCase()
  const filteredSections = useMemo(() => {
    if (!normalizedQuery) return sections
    return sections
      .map(s => ({
        ...s,
        items: s.items.filter(i => i.title.toLowerCase().includes(normalizedQuery))
      }))
      .filter(s => s.items.length > 0)
  }, [sections, normalizedQuery])

  const completedCount = useMemo(() => {
    return allItems.reduce((acc, t) => acc + (completed[t] ? 1 : 0), 0)
  }, [allItems, completed])

  const toggleCompleted = (title) => {
    setCompleted(prev => ({ ...prev, [title]: !prev[title] }))
  }

  const toggleExpanded = (sectionTitle) => {
    setExpanded(prev => ({ ...prev, [sectionTitle]: !prev[sectionTitle] }))
  }

  const toggleVideoExpanded = (title) => {
    setExpandedVideo(prev => (prev === title ? null : title))
  }

  const updateNotes = (title, patch) => {
    setNotes(prev => {
      const existing = prev[title] && typeof prev[title] === 'object' ? prev[title] : {}
      return { ...prev, [title]: { ...existing, ...patch } }
    })
  }

  const markVisibleComplete = () => {
    const visibleTitles = filteredSections.flatMap(s => s.items.map(i => i.title))
    setCompleted(prev => {
      const next = { ...prev }
      visibleTitles.forEach(t => { next[t] = true })
      return next
    })
  }

  const clearVisibleComplete = () => {
    const visibleTitles = filteredSections.flatMap(s => s.items.map(i => i.title))
    setCompleted(prev => {
      const next = { ...prev }
      visibleTitles.forEach(t => { delete next[t] })
      return next
    })
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Content Pipeline</h1>
        <p className="page-subtitle">
          Prioritized YouTube roadmap (balanced B2C traction + enterprise pipeline)
        </p>
      </div>

      <section className="page-section">
        <div className="pipeline-explanation-card">
          <div
            className="pipeline-explanation-header clickable"
            role="button"
            tabIndex={0}
            onClick={() => setMethodologyOpen(v => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setMethodologyOpen(v => !v)
              }
            }}
            aria-expanded={methodologyOpen}
          >
            <div className="pipeline-video-title">
              <span className="pipeline-emoji">🧭</span>
              <div className="pipeline-title-stack">
                <div className="pipeline-title-row">
                  <span className="pipeline-title-text">How we arrived at these topics</span>
                </div>
                <div className="pipeline-explanation-subtitle">Method + data sources (so anyone can re-run the process)</div>
              </div>
            </div>
            <div className="pipeline-toggle" aria-hidden="true">
              {methodologyOpen ? '−' : '+'}
            </div>
          </div>

          {methodologyOpen && (
            <div className="pipeline-explanation-body content-block">
              <p>
                <strong>Google Trends source (YouTube Search)</strong>:{' '}
                <a
                  href="https://trends.google.com/explore?geo=Worldwide&gprop=youtube&date=today%205-y&q=enterprise%2520browser%2Cisland%2520browser%2Csecure%2520web%2520gateway%2Cbrowser%2520isolation%2Cremote%2520browser%2520isolation%2Ctalon%2520browser%2Czero%2520trust%2520browser%2Czero%2520trust%2520web%2520access"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0369a1', textDecoration: 'underline' }}
                >
                  Explore in Google Trends (Worldwide • last 5 years • YouTube)
                </a>
              </p>
              <p>
                This pipeline is designed to do two things at once:
                <strong> drive B2C traffic</strong> (high-demand YouTube queries) and
                <strong> build enterprise pipeline</strong> (high-intent security/IT topics),
                while keeping Oasis visible through demos and workflow framing.
              </p>

              <div className="pipeline-explanation-grid">
                <div className="pipeline-explain-block">
                  <h3>Inputs (existing data)</h3>
                  <p><strong>YouTube keyword ideas</strong>: seed keyword list + volume/competition where available.</p>
                  <p><strong>Google Search Console queries</strong>: existing search demand (impressions/clicks/position) from the site.</p>
                  <p>
                    <strong>Google Trends (YouTube Search)</strong>: keywords + “ideas to explore” collected using filters
                    <strong> Worldwide</strong>, <strong>last 5 years</strong>, and <strong>YouTube Search</strong>.
                  </p>
                </div>

                <div className="pipeline-explain-block">
                  <h3>How ranking works (high level)</h3>
                  <p><strong>Demand</strong>: combines YouTube volume (when present) + GSC impressions (when present).</p>
                  <p><strong>Ease</strong>: competition/difficulty estimates (when present) + a YouTube “actionability” bias (tutorial/comparison).</p>
                  <p><strong>Relevance</strong>: filters to browser-adjacent topics (so we don’t chase off-topic keywords).</p>
                  <p><strong>Oasis fit</strong>: boosts topics that naturally showcase Oasis (workflows/commands, workspaces/tab groups, split view, managed enterprise posture).</p>
                </div>

                <div className="pipeline-explain-block">
                  <h3>Why the list is balanced</h3>
                  <p><strong>B2C traction</strong>: lead with mainstream AI-in-browser waves + practical productivity topics.</p>
                  <p><strong>Enterprise pipeline</strong>: surface high-intent security/IT topics early enough to build authority (managed browser, Zero Trust, RBI, SWG, DLP, SSO).</p>
                  <p><strong>Show Oasis</strong>: even category videos include a short workflow demo so the product is seen (aesthetic UI advantage).</p>
                </div>

                <div className="pipeline-explain-block">
                  <h3>How to update the pipeline</h3>
                  <p>Refresh keyword sources + GSC export, re-run the keyword ranker, and regenerate the priority list.</p>
                  <p>Update the priority markdown that powers this page, then iterate on the per-video notes/outlines as we learn.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="page-section">
        <div className="content-block pipeline-controls">
          <div className="pipeline-stats">
            <div className="pipeline-stat">
              <div className="pipeline-stat-value">{allItems.length}</div>
              <div className="pipeline-stat-label">Total videos</div>
            </div>
            <div className="pipeline-stat">
              <div className="pipeline-stat-value">{completedCount}</div>
              <div className="pipeline-stat-label">Completed</div>
            </div>
          </div>

          <div className="pipeline-actions">
            <input
              className="pipeline-search"
              placeholder="Search titles…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="pipeline-buttons">
              <button className="pipeline-button" onClick={markVisibleComplete}>
                Mark visible complete
              </button>
              <button className="pipeline-button secondary" onClick={clearVisibleComplete}>
                Clear visible
              </button>
            </div>
          </div>
        </div>
      </section>

      {filteredSections.map(section => {
        const isOpen = !!expanded[section.title]
        const sectionCompleted = section.items.reduce((acc, i) => acc + (completed[i.title] ? 1 : 0), 0)

        return (
          <section key={section.title} className="page-section">
            <div className="content-block pipeline-section">
              <div
                className="pipeline-section-header clickable"
                role="button"
                tabIndex={0}
                onClick={() => toggleExpanded(section.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleExpanded(section.title)
                  }
                }}
                aria-expanded={isOpen}
              >
                <div className="pipeline-section-title">
                  <h2>{section.title}</h2>
                  <span className="pipeline-section-meta">
                    {sectionCompleted}/{section.items.length} complete
                  </span>
                </div>
                <div className={`accordion-icon ${isOpen ? 'expanded' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {isOpen && (
                <div className="pipeline-video-list">
                  {section.items.map(({ rank, title }) => {
                    const isVideoOpen = expandedVideo === title
                    const overrideObj = (notes[title] && typeof notes[title] === 'object') ? notes[title] : {}
                    const defaultObj = (defaults[title] && typeof defaults[title] === 'object') ? defaults[title] : {}

                    const notesValue = overrideObj.notes ?? defaultObj.notes ?? ''
                    const hookValue = overrideObj.hook ?? defaultObj.hook ?? ''

                    const rawTopics = overrideObj.topics ?? defaultObj.topics ?? ''
                    const topicsValue =
                      overrideObj.topics === undefined
                        ? numberizeForCreators(rawTopics)
                        : rawTopics

                    const rawOutline = overrideObj.outline ?? defaultObj.outline ?? ''
                    const outlineValue =
                      overrideObj.outline === undefined
                        ? numberizeForCreators(rawOutline)
                        : rawOutline

                    const ctaValue = overrideObj.cta ?? defaultObj.cta ?? ''

                    return (
                      <div key={title} className={`pipeline-video ${completed[title] ? 'completed' : ''}`}>
                        <div
                          className="pipeline-video-header clickable"
                          role="button"
                          tabIndex={0}
                          onClick={() => toggleVideoExpanded(title)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              toggleVideoExpanded(title)
                            }
                          }}
                          aria-expanded={isVideoOpen}
                        >
                          <div className="pipeline-video-title">
                            <span className="pipeline-emoji">🎬</span>
                            <div className="pipeline-title-stack">
                              <div className="pipeline-title-row">
                                <span className="pipeline-rank">#{rank}</span>
                                <span className="pipeline-title-text">{title}</span>
                              </div>
                            </div>
                          </div>

                          <div className="pipeline-video-actions" onClick={(e) => e.stopPropagation()}>
                            <label className="pipeline-complete">
                              <input
                                type="checkbox"
                                checked={!!completed[title]}
                                onChange={() => toggleCompleted(title)}
                              />
                              <span>Done</span>
                            </label>
                            <div className="pipeline-toggle" aria-hidden="true">
                              {isVideoOpen ? '−' : '+'}
                            </div>
                          </div>
                        </div>

                        {isVideoOpen && (
                          <div className="pipeline-video-body">
                            <div className="pipeline-fields">
                              <div className="pipeline-field pipeline-bubble bubble-notes span-2">
                                <label>Notes for creator</label>
                                <AutoGrowTextarea
                                  value={notesValue}
                                  onChange={(e) => updateNotes(title, { notes: e.target.value })}
                                  placeholder="Angle, tone, what to show on-screen, what not to do…"
                                  minRows={4}
                                />
                              </div>
                              <div className="pipeline-field pipeline-bubble bubble-hook">
                                <label>Hook (1–2 sentences)</label>
                                <AutoGrowTextarea
                                  value={hookValue}
                                  onChange={(e) => updateNotes(title, { hook: e.target.value })}
                                  placeholder="Open with the pain + payoff. What do we show in the first 10 seconds?"
                                  minRows={2}
                                />
                              </div>

                              <div className="pipeline-field pipeline-bubble bubble-topics span-2">
                                <label>Key points / topics to cover (numbered)</label>
                                <AutoGrowTextarea
                                  value={topicsValue}
                                  onChange={(e) => updateNotes(title, { topics: e.target.value })}
                                  placeholder="1. Point 1\n2. Point 2\n3. Point 3"
                                  minRows={6}
                                />
                              </div>

                              <div className="pipeline-field pipeline-bubble bubble-outline span-2">
                                <label>High-level outline / beat sheet</label>
                                <AutoGrowTextarea
                                  value={outlineValue}
                                  onChange={(e) => updateNotes(title, { outline: e.target.value })}
                                  placeholder="1. Hook\n2. Context\n3. Demo\n…"
                                  minRows={7}
                                />
                              </div>

                              <div className="pipeline-field pipeline-bubble bubble-cta">
                                <label>CTA</label>
                                <AutoGrowTextarea
                                  value={ctaValue}
                                  onChange={(e) => updateNotes(title, { cta: e.target.value })}
                                  placeholder="What should the viewer do next? (waitlist, demo, comment a workflow, etc.)"
                                  minRows={2}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default ContentPipeline

