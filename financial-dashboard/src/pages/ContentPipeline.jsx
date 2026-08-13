import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Page.css'
import './ContentPipeline.css'
import priorityMd from '../content/oasis_final_youtube_video_priority_list.md?raw'
import defaults from '../content/content_pipeline_defaults.json'
import thumbnailStyleFrameSvg from '../assets/thumbnail-style/thumbnail-style-frame.svg'
import thumbnailStyleExamplePng from '../assets/thumbnail-style/thumbnail-style-example.png'

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

function toBulletList(lines) {
  return (lines || []).filter(Boolean).map(l => `- ${l}`).join('\n')
}

function stripListPrefix(line) {
  return String(line || '')
    .trim()
    .replace(/^(\d+[\.\)]\s+|[-•*]\s+)/, '')
    .trim()
}

function toNumberedList(lines) {
  const clean = (lines || []).map(stripListPrefix).filter(Boolean)
  return clean.map((l, idx) => `${idx + 1}. ${l}`).join('\n')
}

function generateThumbnailIdeas(title) {
  const t = String(title || '').trim()
  const lc = t.toLowerCase()

  const ideas = []
  const hasVs = /\bvs\b/.test(lc)
  const isTabTopic = lc.includes('tab') || lc.includes('tabs') || lc.includes('tab groups')
  const isPrivacy = lc.includes('privacy') || lc.includes('logged') || lc.includes('leaks') || lc.includes('safe')
  const isEnterprise = lc.includes('enterprise') || lc.includes('zero trust') || lc.includes('rbi') || lc.includes('swg') || lc.includes('dlp') || lc.includes('sso') || lc.includes('okta') || lc.includes('vdi') || lc.includes('managed')
  const isBuyer = lc.includes('buyer') || lc.includes('checklist') || lc.includes('how to choose') || lc.includes('market') || lc.includes('leaders')
  const isHowTo = lc.startsWith('how to ') || lc.includes('how to enable') || lc.includes('how it works')
  const isTested = lc.includes('tested') || lc.includes('best ')

  // Oasis brand motif: calm, earthy, idyllic nature backgrounds (desert/mountain/forest)
  // to subtly differentiate in scroll without being loud.
  const landscape =
    (isPrivacy || isEnterprise) ? 'moody mountain vista' :
    (isTabTopic) ? 'sunlit forest trail' :
    (hasVs) ? 'wide desert dunes' :
    (isBuyer) ? 'golden-hour canyon ridge' :
    'calm alpine lake'

  ideas.push(`Idyllic ${landscape} background + Oasis logo + 3-word promise (“CONTROL”, “SAFETY”, “SPEED”)`)

  if (hasVs) {
    ideas.push(`Split-screen logos with big “VS” on an ${landscape} background + small Oasis badge (“Oasis take”)`)
    ideas.push('Scorecard/rubric graphic (3–5 categories) with Oasis logo in the corner')
  }

  if (isPrivacy || isEnterprise) {
    ideas.push(`Oasis logo + shield/lock icon over an ${landscape} background + red “LEAK?” or “SAFE?” stamp`)
    ideas.push('Simple “data flow” arrows: Browser → AI → Logs? (with Oasis label)')
  }

  if (isTabTopic) {
    ideas.push(`Chrome tab group UI screenshot floating over an ${landscape} background + Oasis command bubble (“group these tabs”)`)
    ideas.push(`Two panes mock: “splitview” label + left tab/right tab on an ${landscape} background (Oasis logo)`)
  }

  if (isBuyer) {
    ideas.push(`Checklist thumbnail: “2026 CHECKLIST” + Oasis logo + 3 checkbox icons on an ${landscape} background`)
  }

  if (isHowTo && ideas.length < 5) {
    ideas.push(`Before/after: messy tabs → clean system (Oasis command bubble on the “after”), with an ${landscape} background`)
  }

  if (isTested && ideas.length < 5) {
    ideas.push(`Leaderboard-style ranking with “TESTED” stamp + Oasis included, on an ${landscape} background`)
  }

  if (ideas.length === 0) {
    ideas.push('Big keyword title + Oasis logo + “workflow demo” tag')
    ideas.push('Problem/solution split: “CHAOS” vs “CONTROL” (with Oasis logo)')
  }

  return toBulletList(Array.from(new Set(ideas)).slice(0, 5))
}

function generateCtaIdeas(title, existingCta) {
  const t = String(title || '').trim()
  const lc = t.toLowerCase()

  const hasVs = /\bvs\b/.test(lc)
  const isTabTopic = lc.includes('tab') || lc.includes('tabs') || lc.includes('tab groups') || lc.includes('splitview')
  const isPrivacy = lc.includes('privacy') || lc.includes('logged') || lc.includes('leaks') || lc.includes('safe')
  const isEnterprise = lc.includes('enterprise') || lc.includes('zero trust') || lc.includes('rbi') || lc.includes('swg') || lc.includes('dlp') || lc.includes('sso') || lc.includes('okta') || lc.includes('vdi') || lc.includes('managed')
  const isHowTo = lc.startsWith('how to ') || lc.includes('how it works') || lc.includes('how to enable')
  const isChecklist = lc.includes('checklist') || lc.includes('buyer') || lc.includes('buyer’s guide') || lc.includes('how to choose')
  const isMarket = lc.includes('market') || lc.includes('leaders') || lc.includes('adoption') || lc.includes('trends')

  const base = []

  // If there's an existing CTA (from defaults), keep it as option 1.
  const existing = String(existingCta || '').trim()
  if (existing) base.push(stripListPrefix(existing.split('\n').find(Boolean) || existing))

  // Universal, non-annoying options
  base.push('Comment your role + workflow (creator / sales / IT) and I’ll reply with a suggested tab-group + command routine.')
  base.push('Comment “COMMANDS” and I’ll share the exact Oasis command sequence used in this video.')

  if (isTabTopic) {
    base.push('Comment “TAB SYSTEM” and I’ll share a default 3-group setup (Research / Writing / Tools) you can copy.')
    base.push('Comment “SPLITVIEW” and I’ll share 3 splitview setups (script+sheet, ticket+docs, email+CRM).')
  }

  if (hasVs) {
    base.push('Comment “RUBRIC” and I’ll share the scorecard template so you can run the same test yourself.')
    base.push('Tell me which browser/assistant you want next (Arc, Comet, Dia, etc.) and I’ll do the same side-by-side workflow test.')
  }

  if (isPrivacy) {
    base.push('Comment “PRIVACY” and I’ll share a 1-page checklist for what to check before enabling browser AI.')
    base.push('Drop your setup (browser + extensions + work accounts?) and I’ll flag the top 2 privacy risks to look for.')
  }

  if (isEnterprise) {
    base.push('Comment “PILOT” and I’ll share a 2-week enterprise browser pilot plan + success metrics.')
    base.push('If you’re evaluating for BYOD/contractors/regulatory, comment your constraints and I’ll suggest “must-have” controls.')
  }

  if (isChecklist) {
    base.push('Comment “CHECKLIST” and I’ll share the buyer checklist + scoring sheet.')
  }

  if (isMarket) {
    base.push('Comment “MATRIX” and I’ll share a simple market comparison grid (UX vs control) you can reuse internally.')
  }

  if (isHowTo && base.length < 6) {
    base.push('Want the step-by-step template as a copy/paste doc? Comment “TEMPLATE”.')
  }

  // Dedup and limit length
  const unique = Array.from(new Set(base.map(s => s.trim()).filter(Boolean)))
  return toNumberedList(unique.slice(0, 7))
}

function parseDurationBadge(text) {
  const src = String(text || '')
  // Match "Length: 6–8s" / "Length: 6-8s" / "Length: 8s"
  const re = /Length:\s*(\d+)\s*(?:[–-]\s*(\d+)\s*)?s/gi
  let m
  let min = null
  let max = null
  while ((m = re.exec(src)) !== null) {
    const a = Number(m[1])
    const b = m[2] ? Number(m[2]) : a
    if (!Number.isFinite(a) || !Number.isFinite(b)) continue
    min = min === null ? Math.min(a, b) : Math.min(min, a, b)
    max = max === null ? Math.max(a, b) : Math.max(max, a, b)
  }
  if (min === null || max === null) return null
  return min === max ? `${min}s` : `${min}–${max}s`
}

function generateAnimationStyleNotes(title) {
  const t = String(title || '').trim()
  const lc = t.toLowerCase()

  const notes = []
  const isPrivacy = lc.includes('privacy') || lc.includes('logged') || lc.includes('leaks') || lc.includes('safe')
  const isEnterprise = lc.includes('enterprise') || lc.includes('zero trust') || lc.includes('rbi') || lc.includes('swg') || lc.includes('dlp') || lc.includes('sso') || lc.includes('okta') || lc.includes('vdi') || lc.includes('managed')
  const isTabTopic = lc.includes('tab') || lc.includes('tabs') || lc.includes('tab groups') || lc.includes('splitview')
  const hasVs = /\bvs\b/.test(lc)

  // Background: keep it Oasis (earthy, calm) but subdued so UI is readable.
  if (isPrivacy || isEnterprise) notes.push('Background: moody mountain/forest blur (10–15px) with subtle grain; keep risk highlights high-contrast.')
  else if (isTabTopic) notes.push('Background: calm alpine lake / sunlit forest blur; motion should slow noticeably after “cleanup”.')
  else if (hasVs) notes.push('Background: wide desert dunes blur; keep the comparison grid clean and centered.')
  else notes.push('Background: neutral nature blur (earthy tones) + light paper texture optional.')

  notes.push('Palette: 2 neutrals + Oasis green accent; reserve red/orange only for “risk” moments.')
  notes.push('Typography: large, readable labels; avoid dense paragraphs—prefer icons + short headers.')
  notes.push('Motion: ease-in-out, soft slides + fades; avoid bouncy/chaotic easing except in “chaos” beat.')
  notes.push('Deliverable: 1080p overlays that can sit on top of screen recordings (safe margins).')

  return notes
}

function generateAnimationIdeas(title) {
  const t = String(title || '').trim()
  const lc = t.toLowerCase()

  const ideas = []
  const hasVs = /\bvs\b/.test(lc)
  const isTabTopic = lc.includes('tab') || lc.includes('tabs') || lc.includes('tab groups')
  const isSummarization = lc.includes('summar') || lc.includes('notes') || lc.includes('next steps')
  const isPrivacy = lc.includes('privacy') || lc.includes('logged') || lc.includes('leaks') || lc.includes('safe')
  const isEnterprise = lc.includes('enterprise') || lc.includes('zero trust') || lc.includes('rbi') || lc.includes('swg') || lc.includes('dlp') || lc.includes('sso') || lc.includes('okta') || lc.includes('vdi') || lc.includes('managed')
  const isMarket = lc.includes('market') || lc.includes('leaders') || lc.includes('adoption') || lc.includes('trends')

  const push = (idea, storyboard) => ideas.push({ idea, storyboard })

  push(
    '“Problem → Workflow → Result” 3-step animated ladder',
    'Length: 6–8s.\nBackground: calm desert/mountain blur + subtle grain.\nSequence:\n00:00 “Problem” card pops in (scale 0.96→1.00 + fade).\n00:02 “Workflow” card slides up above it; Oasis badge wipes in left→right.\n00:05 “Result” card slides in; checkmark draws (stroke animation).\n00:07 Thin line traces up ladder; gentle 6px parallax drift.\nStyle: rounded cards, off-white fill, soft shadow, Oasis green accent line; 2–3 words max per card.'
  )

  if (hasVs) {
    push(
      'Animated scorecard fill-in: Reliability / Actions / Privacy / Tab management',
      'Length: 7–10s (reuse later as 2–3s “score updates”).\nBackground: warm paper texture on a desert blur.\nSequence:\n00:00 Header drops in (“Rubric”).\n00:01 Rows stagger in (120ms fade per row).\n00:03 Highlight bar sweeps row 1; pill fills left→right; click-lock.\n00:05 Repeat for remaining rows (fast).\n00:09 End frame holds 1s for readability.\nStyle: minimalist grid, rounded pills, Oasis green for wins, muted gray for neutral; small Oasis logo in corner.'
    )
    push(
      'Side-by-side “same prompt” test: chat response vs actual browser actions',
      'Length: 8–12s.\nBackground: dark calm gradient (low contrast).\nSequence:\n00:00 Two panels slide in: left “Chat AI”, right “Oasis”.\n00:02 Left types an answer (typewriter), then freezes.\n00:05 Right shows tabs snapping into groups; group name morphs.\n00:09 splitview divider slides in; focus glow on right.\n00:11 “Executed” checkmark appears.\nStyle: clean UI mock; subtle glow for execution; minimal text.'
    )
  }

  if (isPrivacy) {
    push(
      'Data flow animation: page content/URLs → model → retention/training? (highlight what matters)',
      'Length: 10–14s.\nBackground: soft forest blur (10–15px) + grain.\nSequence:\n00:00 “Page” card fades in; icons slide out (URL / text / form fields).\n00:03 Arrow draws to “Model”.\n00:06 Arrow splits: Logs/Retention (solid pulse) vs Training (dashed).\n00:10 Spotlight highlights the path you’re explaining; other path dims to 40%.\nStyle: flat icons, rounded cards, minimal labels; Oasis green only for the highlighted path.'
    )
    push(
      '“Leak paths” diagram: clipboard, downloads, screenshots, printing (icons lighting up)',
      'Length: 8–10s.\nBackground: light sand tone + subtle texture.\nSequence:\n00:00 Title bar slides in (“Leak paths”).\n00:01 Clipboard icon glows; line draws to “SaaS data”.\n00:03 Download icon glows; line draws.\n00:05 Screenshot icon glows; line draws.\n00:07 Print icon glows; line draws.\n00:09 Keep the relevant icon highlighted; others fade slightly.\nStyle: simple line icons; consistent stroke; red/orange for risk, Oasis green only for mitigated.'
    )
  }

  if (isTabTopic) {
    push(
      'Tab chaos animation: tabs multiply → grouped → labeled → cleaned (then splitview to focus)',
      'Length: 9–12s.\nBackground: calm alpine lake blur.\nSequence:\n00:00 Tabs duplicate rapidly (slight jitter).\n00:02 Tabs snap into 3 colored groups (magnetic pull).\n00:05 Labels type in: Research / Writing / Tools.\n00:07 Duplicates shrink + fade out (cleanup).\n00:09 splitview divider slides in; motion slows.\nStyle: rounded tabs, pastel group colors, minimal text; calm after chaos.'
    )
    push(
      'Command sequence overlay: 1) group 2) rename 3) move 4) dedupe 5) splitview',
      'Length: 6–9s (reuse as lower-third).\nBackground: translucent overlay on live recording (30% opacity).\nSequence:\n00:00 Overlay slides up from bottom.\n00:01 Check “group”.\n00:02 Check “rename”.\n00:03 Check “move”.\n00:04 Check “dedupe”.\n00:05 Check “splitview”.\n00:06 Overlay collapses into a small “Workflow running” pill.\nStyle: pill checklist, Oasis green checks, white text; keep it minimal so the demo stays visible.'
    )
  }

  if (isSummarization) {
    push(
      'Research funnel: 5 tabs → 1 structured brief (TL;DR / key facts / risks / next steps)',
      'Length: 10–12s.\nBackground: muted canyon blur.\nSequence:\n00:00 Five tab cards drift in (slow).\n00:03 Cards funnel into one doc.\n00:05 Headers appear in order: TL;DR → Key facts → Risks → Next steps.\n00:09 Cursor highlights “Next steps”; checklist animates in.\nStyle: clean doc look, bold headers, generous whitespace; calm motion.'
    )
  }

  if (isEnterprise) {
    push(
      'Policy control plane graphic: Identity → Browser → SaaS (show where enforcement happens)',
      'Length: 10–14s.\nBackground: neutral texture (very subtle) on mountain blur.\nSequence:\n00:00 “Identity” node appears (IdP icon optional).\n00:03 Arrow draws to “Browser”.\n00:05 Browser node expands; policy toggles appear.\n00:08 Arrow draws to “SaaS”; shield sits at Browser.\n00:10 One toggle flips as you explain an example.\nStyle: simple nodes, thin lines, Oasis green accent; elegant (avoid heavy security clichés).'
    )
    push(
      'RBI vs enterprise browser: where the session runs (local vs remote) with a simple diagram',
      'Length: 10–12s.\nBackground: calm gradient + slight grain.\nSequence:\n00:00 Two columns slide in: “RBI” vs “Enterprise browser”.\n00:02 RBI shows cloud “remote session” + thin video stream to user.\n00:05 Enterprise browser shows on-device policy layer; data stays local.\n00:08 Spotlight circle highlights the key difference.\n00:10 Labels fade in: “remote rendering” vs “local + policy”.\nStyle: clean, no clutter; 2 colors + Oasis green highlight.'
    )
  }

  if (isMarket) {
    push(
      'Category map animation: axes (UX vs control) placing major players + Oasis position marker',
      'Length: 12–16s.\nBackground: very subtle nature blur (low opacity).\nSequence:\n00:00 Axes draw in (UX ↑, Control →).\n00:03 Vendor dots slide in one-by-one (staggered).\n00:09 Oasis marker appears last with soft glow + short label.\n00:12 A shaded region highlights the segment you’re discussing.\nStyle: minimalist chart, readable labels, no noisy logos; Oasis marker is the only strong color.'
    )
  }

  const deduped = []
  const seen = new Set()
  ideas.forEach(({ idea, storyboard }) => {
    const key = `${idea}__${storyboard}`
    if (seen.has(key)) return
    seen.add(key)
    deduped.push({ idea, storyboard })
  })

  const formatItem = (idx, x) => {
    // Keep formatting readable inside a textarea (no giant single-line blocks).
    // We intentionally keep newlines and labeled sections.
    return [
      `${idx + 1}. ${x.idea}`,
      ...String(x.storyboard || '').split('\n').map(s => `   ${s}`),
    ].join('\n')
  }

  return deduped
    .slice(0, 6)
    .map((x, idx) => formatItem(idx, x))
    .join('\n\n')
}

function AutoGrowTextarea({ value, onChange, placeholder, minRows = 2, readOnly = false }) {
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
      onChange={readOnly ? undefined : onChange}
      placeholder={placeholder}
      rows={minRows}
      readOnly={readOnly}
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

// Video title → responsible person(s)
const videoResponsible = {
  'How to group tabs in Chrome (then do it faster with Oasis AI commands)': 'Rashmi',
  'How to Save Chrome Tab Groups — then Use Oasis AI to Manage Them + splitview Any Two Tabs': 'Rashmi',
  'Browser summarization that matters: research → notes → next steps (Oasis workflow)': 'Rashmi',
  'How to sync bookmarks across browsers (then keep them organized with tab groups) (Oasis workflow)': 'Rashmi',
  '7 AI browser features you\'ll actually use (summaries, commands, organization, security) (Oasis playbook)': 'Rashmi',
  '7 AI browser features you\u2019ll actually use (summaries, commands, organization, security) (Oasis playbook)': 'Rashmi', // curly apostrophe (U+2019) from markdown
}

function ContentPipeline() {
  const { sections, allItems } = useMemo(() => parsePriorityMarkdown(priorityMd), [])

  const storageKey = 'oasis.contentPipeline.completed'
  const notesKey = 'oasis.contentPipeline.notes'
  const uiKey = 'oasis.contentPipeline.ui'
  const methodologyKey = 'oasis.contentPipeline.methodologyOpen'
  const thumbnailGuideKey = 'oasis.contentPipeline.thumbnailGuideOpen'
  const contentTeamKey = 'oasis.contentPipeline.contentTeamOpen'
  const thumbnailStyleSvgSrc = thumbnailStyleFrameSvg
  const thumbnailStylePngSrc = thumbnailStyleExamplePng
  const titleMigrations = useMemo(() => ([
    {
      from: 'How to save Chrome tab groups (and turn them into reusable Oasis workspaces)',
      to: 'How to Save Chrome Tab Groups — then Use Oasis AI to Manage Them + splitview Any Two Tabs',
    },
    {
      from: 'How to group tabs in Chrome (then do it faster with Oasis commands + workspaces)',
      to: 'How to group tabs in Chrome (then do it faster with Oasis AI commands)',
    },
    {
      from: 'Arc vs SigmaOS: the best “workspace browser” (and what Oasis copies vs changes)',
      to: 'Arc vs SigmaOS: the best “project browser” (and what Oasis copies vs changes)',
    },
    {
      from: 'How to sync bookmarks across browsers (then keep them organized as workspaces)',
      to: 'How to sync bookmarks across browsers (then keep them organized with tab groups)',
    },
    {
      from: 'How to enable tab groups in Chrome (and use them like “workspaces”)',
      to: 'How to enable tab groups in Chrome (and run them like a system)',
    },
    {
      from: 'Best AI browser in 2026 (tested): what actually helps you work',
      to: 'Best AI browser in 2026 (tested): what actually helps you work (Oasis included)',
    },
    {
      from: 'AI assistants in browsers: what’s real vs hype (and why commands matter)',
      to: 'AI assistants in browsers: what’s real vs hype (and why commands matter) (Oasis field guide)',
    },
    {
      from: 'Get AI to control your browser: the execution gap (with a real demo)',
      to: 'Get AI to control your browser: the execution gap (Oasis demo)',
    },
    {
      from: 'Browser AI & privacy: what gets logged, what leaks, and what to demand',
      to: 'Browser AI & privacy: what gets logged, what leaks, and what to demand (Oasis privacy lens)',
    },
    {
      from: 'Browser summarization that matters: research → notes → next steps',
      to: 'Browser summarization that matters: research → notes → next steps (Oasis workflow)',
    },
    {
      from: '“Secure DNS is disabled by your organization”: what it means on managed browsers',
      to: '“Secure DNS is disabled by your organization”: what it means on managed browsers (Oasis IT lens)',
    },
    {
      from: 'Enterprise browser vs consumer browser: policies, isolation, and why it exists',
      to: 'Enterprise browser vs consumer browser: policies, isolation, and why it exists (Oasis buyer lens)',
    },
    {
      from: 'Enterprise browser vs Remote Browser Isolation (RBI): which stops SaaS data leaks better?',
      to: 'Enterprise browser vs Remote Browser Isolation (RBI): which stops SaaS data leaks better? (Oasis security lens)',
    },
    {
      from: '7 AI browser features you’ll actually use (summaries, commands, organization, security)',
      to: '7 AI browser features you’ll actually use (summaries, commands, organization, security) (Oasis playbook)',
    },
    {
      from: 'AI is breaking web search: what changes for browsing in 2026',
      to: 'AI is breaking web search: what changes for browsing in 2026 (Oasis take)',
    },
    {
      from: 'AI chat in browsers vs AI that does things: the execution gap',
      to: 'AI chat in browsers vs AI that does things: the execution gap (Oasis explanation)',
    },
    {
      from: 'Best AI browser extensions in 2026 (and the #1 reason they disappoint)',
      to: 'Best AI browser extensions in 2026 (and the #1 reason they disappoint) (Oasis breakdown)',
    },
    {
      from: 'Is Comet AI browser safe? Privacy + security breakdown',
      to: 'Is Comet AI browser safe? Privacy + security breakdown (Oasis security lens)',
    },
    {
      from: 'Brave Leo vs Opera Aria: the workflow comparison (tabs, summaries, actions)',
      to: 'Brave Leo vs Opera Aria: the workflow comparison (tabs, summaries, actions) (Oasis review)',
    },
    {
      from: 'Opera browser AI features (Aria): what it does + what it misses',
      to: 'Opera browser AI features (Aria): what it does + what it misses (Oasis review)',
    },
    {
      from: 'Gemini in Chrome: how it works + how to enable it (and what it can’t do yet)',
      to: 'Gemini in Chrome: how it works + how to enable it (and what it can’t do yet) (Oasis take)',
    },
    {
      from: 'Chrome Gemini vs “AI extensions”: what’s better for real work?',
      to: 'Chrome Gemini vs “AI extensions”: what’s better for real work? (Oasis recommendation)',
    },
    {
      from: 'The future of AI browsers: from chat to workflow automation',
      to: 'The future of AI browsers: from chat to workflow automation (Oasis take)',
    },
    {
      from: 'Zero Trust browsing explained: when the browser becomes the control plane',
      to: 'Zero Trust browsing explained: when the browser becomes the control plane (Oasis security lens)',
    },
    {
      from: 'Secure Web Gateway vs Enterprise Browser: what to deploy first (and why)',
      to: 'Secure Web Gateway vs Enterprise Browser: what to deploy first (and why) (Oasis buyer lens)',
    },
    {
      from: 'Enterprise browser features checklist (SSO, DLP, clipboard, downloads, audit logs)',
      to: 'Enterprise browser features checklist (SSO, DLP, clipboard, downloads, audit logs) (Oasis checklist)',
    },
    {
      from: 'Browser-based DLP explained: copy/paste, downloads, screenshots, printing',
      to: 'Browser-based DLP explained: copy/paste, downloads, screenshots, printing (Oasis security lens)',
    },
    {
      from: 'Managed browser policy enforcement: what IT can (and can’t) control',
      to: 'Managed browser policy enforcement: what IT can (and can’t) control (Oasis IT lens)',
    },
    {
      from: 'SSO in the browser: Okta concepts, session controls, and common failure modes',
      to: 'SSO in the browser: Okta concepts, session controls, and common failure modes (Oasis troubleshooting lens)',
    },
    {
      from: 'Island vs Talon vs LayerX: how to choose an enterprise browser (2026 buyer’s guide)',
      to: 'Island vs Talon vs LayerX: how to choose an enterprise browser (2026 buyer’s guide) (Oasis buyer lens)',
    },
    {
      from: 'Best enterprise browsers (2026 buyer’s guide): what actually matters',
      to: 'Best enterprise browsers (2026 buyer’s guide): what actually matters (Oasis buyer guide)',
    },
    {
      from: '“We need a secure enterprise browser for 1,000 employees”: rollout checklist',
      to: '“We need a secure enterprise browser for 1,000 employees”: rollout checklist (Oasis rollout playbook)',
    },
    {
      from: 'Enterprise browsing vs VDI: when each wins (and why users hate one of them)',
      to: 'Enterprise browsing vs VDI: when each wins (and why users hate one of them) (Oasis buyer lens)',
    },
    {
      from: 'Enterprise browser adoption trends: why now (and what’s changing)',
      to: 'Enterprise browser adoption trends: why now (and what’s changing) (Oasis market take)',
    },
    {
      from: 'Enterprise browser market leaders: who’s winning and why (2026)',
      to: 'Enterprise browser market leaders: who’s winning and why (2026) (Oasis market take)',
    },
    {
      from: 'How to sync bookmarks across browsers (then keep them organized with tab groups)',
      to: 'How to sync bookmarks across browsers (then keep them organized with tab groups) (Oasis workflow)',
    },
    {
      from: 'How to enable tab groups in Chrome (and run them like a system)',
      to: 'How to enable tab groups in Chrome (and run them like a system) (Oasis workflow)',
    },
    {
      from: 'Saving tab groups in Edge: how it works + better alternatives',
      to: 'Saving tab groups in Edge: how it works + better alternatives (with Oasis alternatives)',
    },
    {
      from: 'Chrome tab groups: best practices (naming, pinning, restoring, sharing)',
      to: 'Chrome tab groups: best practices (naming, pinning, restoring, sharing) (Oasis workflow)',
    },
    {
      from: 'Tab groups collapse (and other tab group bugs): fixes + workarounds',
      to: 'Tab groups collapse (and other tab group bugs): fixes + workarounds (Oasis fix plan)',
    },
    {
      from: 'Best AI browsers in 2026 (tested): who wins for real workflows?',
      to: 'Best AI browsers in 2026 (tested): who wins for real workflows? (Oasis included)',
    },
    {
      from: 'Is Comet AI browser good? What to look for (beyond the demo)',
      to: 'Is Comet AI browser good? What to look for (beyond the demo) (Oasis review)',
    },
    {
      from: 'OpenAI browser / “AI browser test”: how to evaluate AI browsers honestly',
      to: 'OpenAI browser / “AI browser test”: how to evaluate AI browsers honestly (Oasis testing rubric)',
    },
    {
      from: 'Genspark “autopilot mode”: what it is, what it breaks, and what to copy',
      to: 'Genspark “autopilot mode”: what it is, what it breaks, and what to copy (Oasis take)',
    },
    // Migrate previously-shipped "(Oasis perspective)" titles to the diversified variants.
    {
      from: 'AI assistants in browsers: what’s real vs hype (and why commands matter) (Oasis perspective)',
      to: 'AI assistants in browsers: what’s real vs hype (and why commands matter) (Oasis field guide)',
    },
    {
      from: 'Built-in browser AI vs extensions: speed, reliability, privacy (Oasis perspective)',
      to: 'Built-in browser AI vs extensions: speed, reliability, privacy (Oasis breakdown)',
    },
    {
      from: 'Browser AI & privacy: what gets logged, what leaks, and what to demand (Oasis perspective)',
      to: 'Browser AI & privacy: what gets logged, what leaks, and what to demand (Oasis privacy lens)',
    },
    {
      from: '“Secure DNS is disabled by your organization”: what it means on managed browsers (Oasis perspective)',
      to: '“Secure DNS is disabled by your organization”: what it means on managed browsers (Oasis IT lens)',
    },
    {
      from: 'Enterprise browser vs consumer browser: policies, isolation, and why it exists (Oasis perspective)',
      to: 'Enterprise browser vs consumer browser: policies, isolation, and why it exists (Oasis buyer lens)',
    },
    {
      from: 'Enterprise browser vs Remote Browser Isolation (RBI): which stops SaaS data leaks better? (Oasis perspective)',
      to: 'Enterprise browser vs Remote Browser Isolation (RBI): which stops SaaS data leaks better? (Oasis security lens)',
    },
    {
      from: '7 AI browser features you’ll actually use (summaries, commands, organization, security) (Oasis perspective)',
      to: '7 AI browser features you’ll actually use (summaries, commands, organization, security) (Oasis playbook)',
    },
    {
      from: 'AI is breaking web search: what changes for browsing in 2026 (Oasis perspective)',
      to: 'AI is breaking web search: what changes for browsing in 2026 (Oasis take)',
    },
    {
      from: 'AI chat in browsers vs AI that does things: the execution gap (Oasis perspective)',
      to: 'AI chat in browsers vs AI that does things: the execution gap (Oasis explanation)',
    },
    {
      from: 'Best AI browser extensions in 2026 (and the #1 reason they disappoint) (Oasis perspective)',
      to: 'Best AI browser extensions in 2026 (and the #1 reason they disappoint) (Oasis breakdown)',
    },
    {
      from: 'Is Comet AI browser safe? Privacy + security breakdown (Oasis perspective)',
      to: 'Is Comet AI browser safe? Privacy + security breakdown (Oasis security lens)',
    },
    {
      from: 'Brave Leo vs Opera Aria: the workflow comparison (tabs, summaries, actions) (Oasis perspective)',
      to: 'Brave Leo vs Opera Aria: the workflow comparison (tabs, summaries, actions) (Oasis review)',
    },
    {
      from: 'Opera browser AI features (Aria): what it does + what it misses (Oasis perspective)',
      to: 'Opera browser AI features (Aria): what it does + what it misses (Oasis review)',
    },
    {
      from: 'Gemini in Chrome: how it works + how to enable it (and what it can’t do yet) (Oasis perspective)',
      to: 'Gemini in Chrome: how it works + how to enable it (and what it can’t do yet) (Oasis take)',
    },
    {
      from: 'Chrome Gemini vs “AI extensions”: what’s better for real work? (Oasis perspective)',
      to: 'Chrome Gemini vs “AI extensions”: what’s better for real work? (Oasis recommendation)',
    },
    {
      from: 'The future of AI browsers: from chat to workflow automation (Oasis perspective)',
      to: 'The future of AI browsers: from chat to workflow automation (Oasis take)',
    },
    {
      from: 'Zero Trust browsing explained: when the browser becomes the control plane (Oasis perspective)',
      to: 'Zero Trust browsing explained: when the browser becomes the control plane (Oasis security lens)',
    },
    {
      from: 'Secure Web Gateway vs Enterprise Browser: what to deploy first (and why) (Oasis perspective)',
      to: 'Secure Web Gateway vs Enterprise Browser: what to deploy first (and why) (Oasis buyer lens)',
    },
    {
      from: 'Enterprise browser features checklist (SSO, DLP, clipboard, downloads, audit logs) (Oasis perspective)',
      to: 'Enterprise browser features checklist (SSO, DLP, clipboard, downloads, audit logs) (Oasis checklist)',
    },
    {
      from: 'Browser-based DLP explained: copy/paste, downloads, screenshots, printing (Oasis perspective)',
      to: 'Browser-based DLP explained: copy/paste, downloads, screenshots, printing (Oasis security lens)',
    },
    {
      from: 'Managed browser policy enforcement: what IT can (and can’t) control (Oasis perspective)',
      to: 'Managed browser policy enforcement: what IT can (and can’t) control (Oasis IT lens)',
    },
    {
      from: 'SSO in the browser: Okta concepts, session controls, and common failure modes (Oasis perspective)',
      to: 'SSO in the browser: Okta concepts, session controls, and common failure modes (Oasis troubleshooting lens)',
    },
    {
      from: 'Island vs Talon vs LayerX: how to choose an enterprise browser (2026 buyer’s guide) (Oasis perspective)',
      to: 'Island vs Talon vs LayerX: how to choose an enterprise browser (2026 buyer’s guide) (Oasis buyer lens)',
    },
    {
      from: 'Best enterprise browsers (2026 buyer’s guide): what actually matters (Oasis perspective)',
      to: 'Best enterprise browsers (2026 buyer’s guide): what actually matters (Oasis buyer guide)',
    },
    {
      from: '“We need a secure enterprise browser for 1,000 employees”: rollout checklist (Oasis perspective)',
      to: '“We need a secure enterprise browser for 1,000 employees”: rollout checklist (Oasis rollout playbook)',
    },
    {
      from: 'Enterprise browsing vs VDI: when each wins (and why users hate one of them) (Oasis perspective)',
      to: 'Enterprise browsing vs VDI: when each wins (and why users hate one of them) (Oasis buyer lens)',
    },
    {
      from: 'Enterprise browser adoption trends: why now (and what’s changing) (Oasis perspective)',
      to: 'Enterprise browser adoption trends: why now (and what’s changing) (Oasis market take)',
    },
    {
      from: 'Enterprise browser market leaders: who’s winning and why (2026) (Oasis perspective)',
      to: 'Enterprise browser market leaders: who’s winning and why (2026) (Oasis market take)',
    },
    {
      from: 'Saving tab groups in Edge: how it works + better alternatives (Oasis perspective)',
      to: 'Saving tab groups in Edge: how it works + better alternatives (with Oasis alternatives)',
    },
    {
      from: 'Tab groups collapse (and other tab group bugs): fixes + workarounds (Oasis perspective)',
      to: 'Tab groups collapse (and other tab group bugs): fixes + workarounds (Oasis fix plan)',
    },
    {
      from: 'Is Comet AI browser good? What to look for (beyond the demo) (Oasis perspective)',
      to: 'Is Comet AI browser good? What to look for (beyond the demo) (Oasis review)',
    },
    {
      from: 'OpenAI browser / “AI browser test”: how to evaluate AI browsers honestly (Oasis perspective)',
      to: 'OpenAI browser / “AI browser test”: how to evaluate AI browsers honestly (Oasis testing rubric)',
    },
    {
      from: 'Genspark “autopilot mode”: what it is, what it breaks, and what to copy (Oasis perspective)',
      to: 'Genspark “autopilot mode”: what it is, what it breaks, and what to copy (Oasis take)',
    },
  ]), [])
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
  const [thumbnailGuideOpen, setThumbnailGuideOpen] = useState(() => {
    try {
      const raw = localStorage.getItem(thumbnailGuideKey)
      if (raw === 'true') return true
      if (raw === 'false') return false
    } catch {
      // ignore
    }
    return false
  })
  const [contentTeamOpen, setContentTeamOpen] = useState(() => {
    try {
      const raw = localStorage.getItem(contentTeamKey)
      if (raw === 'true') return true
      if (raw === 'false') return false
    } catch {
      // ignore
    }
    return true
  })

  useEffect(() => {
    // If we rename a video title in the markdown, migrate any stored "done" + notes
    // so people don't lose their progress.
    if (!titleMigrations.length) return

    setCompleted((prev) => {
      let changed = false
      const next = { ...(prev && typeof prev === 'object' ? prev : {}) }

      titleMigrations.forEach(({ from, to }) => {
        if (!from || !to) return
        if (next[from] === undefined) return
        if (next[to] === undefined) next[to] = next[from]
        else next[to] = !!next[to] || !!next[from]
        delete next[from]
        changed = true
      })

      return changed ? next : prev
    })

    setNotes((prev) => {
      let changed = false
      const next = { ...(prev && typeof prev === 'object' ? prev : {}) }

      titleMigrations.forEach(({ from, to }) => {
        if (!from || !to) return
        if (next[from] === undefined) return

        const fromObj = next[from] && typeof next[from] === 'object' ? next[from] : {}
        const toObj = next[to] && typeof next[to] === 'object' ? next[to] : {}
        next[to] = { ...fromObj, ...toObj } // prefer existing "to" fields if both exist
        delete next[from]
        changed = true
      })

      return changed ? next : prev
    })
  }, [titleMigrations])

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

  useEffect(() => {
    try {
      localStorage.setItem(thumbnailGuideKey, String(!!thumbnailGuideOpen))
    } catch {
      // ignore
    }
  }, [thumbnailGuideOpen])

  useEffect(() => {
    try {
      localStorage.setItem(contentTeamKey, String(!!contentTeamOpen))
    } catch {
      // ignore
    }
  }, [contentTeamOpen])

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
            onClick={() => setThumbnailGuideOpen(v => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setThumbnailGuideOpen(v => !v)
              }
            }}
            aria-expanded={thumbnailGuideOpen}
          >
            <div className="pipeline-video-title">
              <span className="pipeline-emoji">🖼️</span>
              <div className="pipeline-title-stack">
                <div className="pipeline-title-row">
                  <span className="pipeline-title-text">Thumbnail style guide (Oasis look &amp; feel)</span>
                </div>
                <div className="pipeline-explanation-subtitle">
                  Reference examples + repeatable elements we incorporate into future thumbnails.
                </div>
              </div>
            </div>

            <div className="pipeline-style-preview" aria-hidden="true">
              <img className="pipeline-style-preview-image" src={thumbnailStyleSvgSrc} alt="" loading="lazy" />
              <img className="pipeline-style-preview-image" src={thumbnailStylePngSrc} alt="" loading="lazy" />
            </div>

            <div className="pipeline-toggle" aria-hidden="true">
              {thumbnailGuideOpen ? '−' : '+'}
            </div>
          </div>

          {thumbnailGuideOpen && (
            <div className="pipeline-explanation-body content-block">
              <div className="pipeline-style-guide">
                <div className="pipeline-style-rules">
                  <p><strong>What we’re optimizing for</strong>: calm, awe, and instant clarity while staying unmistakably Oasis.</p>
                  <ul className="pipeline-style-list">
                    <li><strong>Background</strong>: beautiful natural, picturesque scenes (desert / mountains / forests) with earthy tones.</li>
                    <li><strong>Message</strong>: 2–4 word promise (e.g., “CONTROL”, “SAFETY”, “SPEED”, “NO CHAOS”).</li>
                    <li><strong>Brand</strong>: Oasis logo present, subtle but visible.</li>
                    <li><strong>Focus</strong>: one clear subject (face, app UI, comparison) + one visual cue (arrow / circle / badge).</li>
                    <li><strong>Contrast</strong>: readable at phone size; avoid busy overlays.</li>
                  </ul>
                </div>

                <div className="pipeline-style-examples">
                  <div className="pipeline-style-example">
                    <div className="pipeline-style-caption">Reference frame</div>
                    <img
                      className="pipeline-style-image"
                      src={thumbnailStyleSvgSrc}
                      alt="Thumbnail style reference frame"
                      loading="lazy"
                    />
                    <div className="pipeline-style-links">
                      <a href={thumbnailStyleSvgSrc} target="_blank" rel="noopener noreferrer">Open SVG</a>
                    </div>
                  </div>

                  <div className="pipeline-style-example">
                    <div className="pipeline-style-caption">Example thumbnail</div>
                    <img
                      className="pipeline-style-image"
                      src={thumbnailStylePngSrc}
                      alt="Example Oasis thumbnail"
                      loading="lazy"
                    />
                    <div className="pipeline-style-links">
                      <a href={thumbnailStylePngSrc} target="_blank" rel="noopener noreferrer">Open PNG</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="page-section">
        <div className="pipeline-explanation-card">
          <div
            className="pipeline-explanation-header clickable"
            role="button"
            tabIndex={0}
            onClick={() => setContentTeamOpen(v => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setContentTeamOpen(v => !v)
              }
            }}
            aria-expanded={contentTeamOpen}
          >
            <div className="pipeline-video-title">
              <span className="pipeline-emoji">👥</span>
              <div className="pipeline-title-stack">
                <div className="pipeline-title-row">
                  <span className="pipeline-title-text">Content team (execution)</span>
                </div>
                <div className="pipeline-explanation-subtitle">
                  Who does what across scripting, production, editing, animation, thumbnails, and keyword research.
                </div>
              </div>
            </div>

            <div className="pipeline-toggle" aria-hidden="true">
              {contentTeamOpen ? '−' : '+'}
            </div>
          </div>

          {contentTeamOpen && (
            <div className="pipeline-explanation-body content-block">
              <div className="pipeline-team-grid">
                <div className="pipeline-team-card">
                  <div className="pipeline-team-role">Creators</div>
                  <div className="pipeline-team-names">Adam Kershner, Rashmi Kadwani</div>
                  <div className="pipeline-team-desc">
                    Responsible for creating videos using Screen Studio (feature zooms + demo-style walkthroughs).
                  </div>
                </div>

                <div className="pipeline-team-card">
                  <div className="pipeline-team-role">Editors</div>
                  <div className="pipeline-team-names">Preetika Shyamawale</div>
                  <div className="pipeline-team-desc">
                    Responsible for editing out pauses and incorporating animations.
                  </div>
                </div>

                <div className="pipeline-team-card">
                  <div className="pipeline-team-role">Animators</div>
                  <div className="pipeline-team-names">Ruhani Vinzuda</div>
                  <div className="pipeline-team-desc">
                    Responsible for making animations.
                  </div>
                </div>

                <div className="pipeline-team-card">
                  <div className="pipeline-team-role">Designer (thumbnails)</div>
                  <div className="pipeline-team-names">Pournami Pottekat</div>
                  <div className="pipeline-team-desc">
                    Provides design components + graphics for thumbnails (product + branding assets from Figma). Collaborates with animators and editors.
                  </div>
                </div>

                <div className="pipeline-team-card">
                  <div className="pipeline-team-role">Creative / Script writing</div>
                  <div className="pipeline-team-names">Vruksha Joshi</div>
                  <div className="pipeline-team-desc">
                    Enhances existing scripts and animation ideas.
                  </div>
                </div>

                <div className="pipeline-team-card">
                  <div className="pipeline-team-role">Keyword research</div>
                  <div className="pipeline-team-names">Adam Kershner, Hritik Chalse</div>
                  <div className="pipeline-team-desc">
                    Stays on top of trends and identifies new gaps/opportunities for content.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

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
                <strong>Looker Studio dashboard</strong>:{' '}
                <a
                  href="https://lookerstudio.google.com/u/0/reporting/c4152057-dad9-4725-9158-94c2b6e545a9/page/p_r1o0q334kd"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0369a1', textDecoration: 'underline' }}
                >
                  Open Kahana Reports
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
                  <p><strong>Oasis fit</strong>: boosts topics that naturally showcase Oasis (workflows/commands, tab groups, splitview, managed enterprise posture).</p>
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

                    const rawThumbnailIdeas =
                      overrideObj.thumbnailIdeas ?? defaultObj.thumbnailIdeas ?? generateThumbnailIdeas(title)
                    const thumbnailIdeasValue =
                      overrideObj.thumbnailIdeas === undefined
                        ? numberizeForCreators(rawThumbnailIdeas)
                        : rawThumbnailIdeas

                    const rawAnimationIdeas =
                      overrideObj.animationIdeas ?? defaultObj.animationIdeas ?? generateAnimationIdeas(title)
                    const animationIdeasValue = rawAnimationIdeas

                    const rawCta = overrideObj.cta ?? defaultObj.cta ?? ''
                    const ctaValue =
                      overrideObj.cta === undefined
                        ? generateCtaIdeas(title, rawCta)
                        : rawCta

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
                              <div className="pipeline-video-responsible">
                                <span className="pipeline-responsible-label">Responsible:</span>
                                <span className={`pipeline-responsible-value ${videoResponsible[title] ? 'assigned' : 'unassigned'}`}>
                                  {videoResponsible[title] || '—'}
                                </span>
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
                                  readOnly
                                />
                              </div>
                              <div className="pipeline-field pipeline-bubble bubble-hook">
                                <label>Hook (1–2 sentences)</label>
                                <AutoGrowTextarea
                                  value={hookValue}
                                  onChange={(e) => updateNotes(title, { hook: e.target.value })}
                                  placeholder="Open with the pain + payoff. What do we show in the first 10 seconds?"
                                  minRows={2}
                                  readOnly
                                />
                              </div>

                              <div className="pipeline-field pipeline-bubble bubble-topics span-2">
                                <label>Key points / topics to cover (numbered)</label>
                                <AutoGrowTextarea
                                  value={topicsValue}
                                  onChange={(e) => updateNotes(title, { topics: e.target.value })}
                                  placeholder="1. Point 1\n2. Point 2\n3. Point 3"
                                  minRows={6}
                                  readOnly
                                />
                              </div>

                              <div className="pipeline-field pipeline-bubble bubble-outline span-2">
                                <label>High-level outline / beat sheet</label>
                                <AutoGrowTextarea
                                  value={outlineValue}
                                  onChange={(e) => updateNotes(title, { outline: e.target.value })}
                                  placeholder="1. Hook\n2. Context\n3. Demo\n…"
                                  minRows={7}
                                  readOnly
                                />
                              </div>

                              <div className="pipeline-field pipeline-bubble bubble-thumbnail span-2">
                                <label>Thumbnail ideas (numbered)</label>
                                <AutoGrowTextarea
                                  value={thumbnailIdeasValue}
                                  onChange={(e) => updateNotes(title, { thumbnailIdeas: e.target.value })}
                                  placeholder="1. Split-screen logos + “VS” + Oasis badge\n2. Chrome tabs chaos → Oasis command bubble\n3. Lock/shield + “SAFE?”"
                                  minRows={4}
                                  readOnly
                                />
                              </div>

                              <div className="pipeline-field pipeline-bubble bubble-animation span-2">
                                <label>Animation ideas / conceptual B-roll (structured)</label>
                                {(() => {
                                  const badge = parseDurationBadge(animationIdeasValue)
                                  if (!badge) return null
                                  return (
                                    <div className="pipeline-duration-badge" title="Typical animation length">
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M12 8V12L14.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                                      </svg>
                                      <span>{badge}</span>
                                    </div>
                                  )
                                })()}
                                <div className="pipeline-style-callout">
                                  <div className="pipeline-style-callout-title">Styling considerations</div>
                                  <ul className="pipeline-style-callout-list">
                                    {generateAnimationStyleNotes(title).map((s) => (
                                      <li key={s}>{s}</li>
                                    ))}
                                  </ul>
                                </div>
                                <AutoGrowTextarea
                                  value={animationIdeasValue}
                                  onChange={(e) => updateNotes(title, { animationIdeas: e.target.value })}
                                  placeholder={"1. Data flow diagram\n   Length: 10–14s\n   Background: blurred forest / desert gradient\n   Sequence: Page card → arrow → Model → split paths (Logs/Training) → spotlight highlight\n   Style: minimalist nodes, Oasis green highlight\n\n2. Scorecard fill-in\n   Length: 7–10s\n   Background: warm paper texture\n   Sequence: header drops in → rows stagger in → progress pills fill left→right → click lock\n   Style: clean, high-contrast, rounded pills"}
                                  minRows={7}
                                  readOnly
                                />
                              </div>

                              <div className="pipeline-field pipeline-bubble bubble-cta span-2">
                                <label>CTA options / ideas (numbered)</label>
                                <AutoGrowTextarea
                                  value={ctaValue}
                                  onChange={(e) => updateNotes(title, { cta: e.target.value })}
                                  placeholder="1. Comment “COMMANDS” and I’ll share the exact Oasis sequence.\n2. Comment “RUBRIC” for the scorecard template.\n3. Tell me your workflow and I’ll suggest a tab-group system."
                                  minRows={4}
                                  readOnly
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

