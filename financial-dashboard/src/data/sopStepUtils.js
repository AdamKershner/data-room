/**
 * Shared SOP checklist helpers: short labels, Done when copy, stable step keys.
 */

export const SOP_LAST_UPDATED = 'August 27, 2026, 1:10 PM EST'

const MAX_LABEL_WORDS = 12

const COMMAND_START =
  /^(do not|don't|never|always|open|submit|read|write|confirm|check|create|clone|follow|put|ask|file|log|send|track|staff|share|run|book|recruit|study|give|add|choose|complete|click|build|set|use|encourage|invite|tell|aim|watch|gather|let|agree|make|offer|close|be |only |personalize|describe|publish|promote|measure|form |include|proofread|name |keep |end |start|cite|compare|scan|record|cut |tag |review|upload|request|filter|update|bookmark|install|take |document|rotate|report|escalate|decide|leave|flag|route|intake|treat|wait|get |fill|capture|draft|walk|work |amend|batch|reread|list |allocate|hand |pick|outline|edit|package|test |push|move|verify|tailor|pitch|find |copy |research|screen|stay|help|monitor|handle|note |pull|ship|retest|meet|seed|schedule|stock|dogfood|mine|benchmark|sort|re-test|mark |join|protect|convert|spend|earn|own |hire|slack|return|paste|reply|upvote|lock |date |hype |brief |chase |collect |post |ping |retain|drill|sign |attend|finish|attach|assign|approve|drop |zip |intro |thank |honor |suppress|pass |score |link |design |prefer |claim |replace |listen |compile |photograph |maintain |stage |pack |ban |overlay |spot-check |qualify |stand |define |reproduce |roll |point |store |align |present |distinguish |frame |lead |communicate |improve |assess |triage |acknowledge |bring |clear |trust |guess |amplify |hold |continue |explain |turn |white-glove |park |loop |place |spot )/i

function capFirst(s) {
  const t = String(s || '').trim()
  if (!t) return t
  return t.charAt(0).toUpperCase() + t.slice(1)
}

const WEAK_LAST = new Set([
  'the', 'a', 'an', 'and', 'or', 'to', 'for', 'with', 'in', 'on', 'of', 'at', 'as', 'by',
  'from', 'than', 'not', 'is', 'are', 'what', 'how', 'that', 'their', 'this', 'so', 'plus',
  'then', 'if',
])

function trimWords(s, max) {
  let words = wordList(s)
  if (words.length > max) words = words.slice(0, max)
  while (words.length > 4) {
    const last = words[words.length - 1].toLowerCase().replace(/[.,;:()“”"]/g, '')
    if (!WEAK_LAST.has(last)) break
    words.pop()
  }
  return words.join(' ')
}

function extractCommandFromConditional(label, doneWhen, text) {
  const sources = [doneWhen, text, label].map((s) => String(s || '').replace(/\s+/g, ' ').trim()).filter(Boolean)
  for (const src of sources) {
    const m = src.match(/^(?:If|When|Should)\b.{0,200}?,\s+(.+)$/i)
    if (m) {
      const action = firstSentence(m[1]).replace(/[.!?]$/, '')
      if (action) return action
    }
  }
  const blob = String(text || '')
  const first = firstSentence(blob)
  const rest = blob.slice(first.length).trim()
  const second = firstSentence(rest).replace(/[.!?]$/, '')
  if (second && COMMAND_START.test(second)) return second
  return String(label || '')
    .replace(/^(If|When|Should)\s+/i, '')
    .replace(/[.!?]$/, '')
}

export function toCommandLabel(label, doneWhen = '', text = '') {
  let t = String(label || '').replace(/\s+/g, ' ').trim()
  if (!t) return 'Complete this step'
  if (/^(if|when|should)\b/i.test(t)) {
    t = extractCommandFromConditional(t, doneWhen, text)
  }
  t = t.replace(/[.!?]$/, '')
  t = trimWords(t, MAX_LABEL_WORDS)
  if (COMMAND_START.test(t)) return capFirst(t)
  if (/^(path [abc]|success story|use-case|tips,|legal review|internal review)/i.test(t)) {
    if (/^path a/i.test(t)) return 'Ship the draft yourself in the marketing-site repo'
    if (/^path b/i.test(t)) return 'Send the finished draft to Manager on Slack'
    if (/^path c/i.test(t)) return 'Upload the draft into the KahanaHQ hub'
    if (/^success story/i.test(t)) return 'Write a success story from a real club or hub'
    if (/^use-case/i.test(t)) return 'Write a use-case guide the reader can follow this week'
    if (/^tips/i.test(t)) return 'Write practical tips the reader can use this week'
    if (/^legal review/i.test(t)) return 'Send pricing or legal claims to Legal before publish'
    if (/^internal review/i.test(t)) return 'Get internal review before you publish'
  }
  if (/^frequency can be/i.test(t)) return 'Put theme and frequency in the club description'
  if (COMMAND_START.test(t)) return capFirst(t)
  if (/\b(is|are|was|were|has|have)\b/i.test(t) && !/^(do not|never|always)/i.test(t)) {
    return capFirst(`Confirm ${t.charAt(0).toLowerCase()}${t.slice(1)}`)
  }
  return capFirst(t)
}

export function toCommandDoneWhen(doneWhen, label, text = '') {
  let t = String(doneWhen || '').replace(/\s+/g, ' ').trim()
  if (/^(if|when|should)\b/i.test(t)) {
    t = extractCommandFromConditional(label, doneWhen, text)
  }
  t = t.replace(/[.!?]$/, '')
  if (COMMAND_START.test(t)) return `${t}.`
  if (label && COMMAND_START.test(label)) return `${label.replace(/[.!?]$/, '')}.`
  if (t) return `Confirm ${t.charAt(0).toLowerCase()}${t.slice(1)}.`
  return `${label || 'Complete this step'}.`
}

export function toCommandBody(text) {
  const raw = String(text || '').trim()
  if (!/^(If|When|Should)\b/.test(raw)) return raw
  const oneLine = raw.replace(/\s+/g, ' ')
  const m = oneLine.match(/^(If|When|Should)\b(.+)$/i)
  if (!m) return raw
  const rest = m[2]
  let from = 0
  let comma = rest.indexOf(',', from)
  while (comma !== -1) {
    const action = rest.slice(comma + 1).trim()
    if (COMMAND_START.test(action)) {
      const cond = `${m[1]}${rest.slice(0, comma)}`.trim().replace(/[.!?]$/, '')
      return `${capFirst(action.replace(/[.!?]$/, ''))} (${cond}.)`
    }
    from = comma + 1
    comma = rest.indexOf(',', from)
  }
  return raw
}

export function firstSentence(text) {
  const t = String(text ?? '').replace(/\s+/g, ' ').trim()
  if (!t) return ''
  // Do not split on dots inside hostnames or filenames (.env, kahana.io).
  const match = t.match(/^.+?(?:[.!?](?=\s|$)|$)/)
  return (match ? match[0] : t).trim()
}

function wordList(s) {
  return s.split(/\s+/).filter(Boolean)
}

export function deriveSopStepLabel(step) {
  if (step?.label) return step.label
  const sentence = firstSentence(step?.text).replace(/[.!?]$/, '')
  if (!sentence) return 'Open this step'
  const comma = sentence.split(',')[0].trim()
  const commaWords = wordList(comma)
  if (commaWords.length >= 5 && commaWords.length <= MAX_LABEL_WORDS) return comma
  const words = wordList(sentence)
  if (words.length <= MAX_LABEL_WORDS) return sentence
  return words.slice(0, 10).join(' ')
}

export function deriveSopStepDoneWhen(step) {
  if (step?.doneWhen) return step.doneWhen
  const sentence = firstSentence(step?.text).replace(/[.!?]$/, '')
  if (sentence) return `${sentence}.`
  const label = deriveSopStepLabel(step)
  return `${label} is complete.`
}

export function sopStepKey(sectionId, step, index) {
  return step?.id || `${sectionId}-${index}`
}

const ICON_RULES = [
  [/mail|email|resend|inbox|ticket|support|contact form|nps|pmf/i, 'mail'],
  [/github|clone|code|\.env|repo|linear card|branch|npm|firebase|heroku|deploy/i, 'code'],
  [/security|pii|pentest|threat|moderat|incident|leak|key rotat|lock/i, 'shield'],
  [/youtube|screen studio|record|video|thumbnail|camera|embed/i, 'camera'],
  [/utm|link|sitemap|search console|seo|index/i, 'link'],
  [/bug|alert|breach|stop|escalate|block|fail|leak/i, 'alert'],
  [/mixpanel|analytics|metric|cohort|impressions|measure|dashboard/i, 'chart'],
  [/access|invite|credential|login|form|tools/i, 'key'],
  [/meeting|town hall|call|1-on-1|collab call/i, 'meeting'],
  [/calendar|schedule|event|cadence|weekly|friday/i, 'calendar'],
  [/brand|logo|color|type|visual|canva|merch|printify/i, 'sparkles'],
  [/outreach|author|creator|dm|pitch|prospect/i, 'megaphone'],
  [/club|keeper|codex|wishlist|hall|book|hub/i, 'book'],
  [/landscape|market map|competitor|stack/i, 'map'],
  [/revenue|paid|upgrade|price|gmv/i, 'trend'],
  [/member|people|user|who|audience|team/i, 'user'],
  [/slack|message|chat|reply|comment/i, 'message'],
  [/globe|social|linkedin|instagram|publish|post/i, 'globe'],
  [/charter|policy|legal|govern/i, 'lock'],
]

export function deriveSopStepIcon(step, section = {}) {
  if (step?.icon) return step.icon
  const hay = `${step?.label ?? ''} ${step?.text ?? ''} ${step?.id ?? ''} ${section.id ?? ''} ${section.title ?? ''}`
  for (const [re, icon] of ICON_RULES) {
    if (re.test(hay)) return icon
  }
  return 'clipboard'
}

export function normalizeSopStep(step, sectionId, index, section = {}) {
  const s = typeof step === 'string' ? { text: step } : { ...step }
  const id = sopStepKey(sectionId, s, index)
  const rawLabel = s.label || deriveSopStepLabel(s)
  const rawDone = s.doneWhen || deriveSopStepDoneWhen({ ...s, label: rawLabel })
  const label = toCommandLabel(rawLabel, rawDone, s.text)
  const doneWhen = toCommandDoneWhen(rawDone, label, s.text)
  const text = toCommandBody(s.text)
  const icon = s.icon || deriveSopStepIcon({ ...s, label, text }, { id: sectionId, ...section })
  const minutes = estimateSopStepMinutes({ ...s, label, text, doneWhen })
  const badge = minutes > 0 ? formatSopDuration(minutes) : s.badge || ''
  return { ...s, id, label, doneWhen, icon, minutes, badge, text: text || s.text }
}

export function parseMinutesFromBadge(badge) {
  const t = String(badge || '').trim()
  if (!t || /^optional$/i.test(t)) return 0
  const min = t.match(/(\d+)\s*min/i)
  if (min) return Number(min[1])
  const hr = t.match(/(\d+(?:\.\d+)?)\s*hr/i)
  if (hr) return Math.round(Number(hr[1]) * 60)
  if (/^weekly$/i.test(t)) return 15
  if (/^monthly$/i.test(t)) return 20
  if (/^session$/i.test(t)) return 10
  return 0
}

export function estimateSopStepMinutes(step) {
  if (step?.optional || /^optional$/i.test(step?.badge || '')) return 0
  if (Number.isFinite(step?.minutes) && step.minutes >= 0) return step.minutes
  const fromBadge = parseMinutesFromBadge(step?.badge)
  if (fromBadge) return fromBadge
  const hay = `${step?.label ?? ''} ${step?.text ?? ''} ${step?.doneWhen ?? ''}`.toLowerCase()
  if (/record |screen studio|film |overlay music|cut dead/.test(hay)) return 20
  if (/clone |install depend|\.env|firebase|run locally|npm run/.test(hay)) return 15
  if (/\bwrite |\bdraft |\bdesign |\bcharter |\bbrief |\boutline |\btemplate/.test(hay)) return 15
  if (/legal |proofread |brand guidelines|quality review/.test(hay)) return 8
  if (/photograph |edit |package |thumbnail/.test(hay)) return 10
  if (/slack |ask |ping |tell |dm /.test(hay)) return 2
  if (/open |read |check |click |bookmark|confirm mixpanel|confirm you/.test(hay)) return 3
  if (/do not |never /.test(hay) && hay.length < 220) return 2
  return 5
}

export function formatSopDuration(minutes) {
  const n = Math.round(Number(minutes) || 0)
  if (n <= 0) return ''
  if (n < 60) return `${n} min`
  const h = Math.floor(n / 60)
  const m = n % 60
  const hours = h === 1 ? '1 hr' : `${h} hr`
  return m ? `${hours} ${m} min` : hours
}

export function sopStepTimeBadge(step) {
  if (step?.optional || /^optional$/i.test(step?.badge || '')) return 'optional'
  return formatSopDuration(estimateSopStepMinutes(step))
}

export function sumSopMinutes(steps, { skipOptional = true } = {}) {
  return (steps || []).reduce((sum, step) => {
    if (skipOptional && (step.optional || /^optional$/i.test(step.badge || ''))) return sum
    return sum + estimateSopStepMinutes(step)
  }, 0)
}

export function sopTotalDuration(sop) {
  return formatSopDuration(sumSopMinutes(flattenSopSteps(sop)))
}

export function normalizeSopDoc(sop) {
  if (!sop?.sections) {
    return sop ? { ...sop, updatedAt: sop.updatedAt || SOP_LAST_UPDATED } : sop
  }
  return {
    ...sop,
    updatedAt: sop.updatedAt || SOP_LAST_UPDATED,
    sections: sop.sections.map((section) => ({
      ...section,
      steps: section.steps.map((step, i) => normalizeSopStep(step, section.id, i, section)),
    })),
  }
}

export function flattenSopSteps(sop) {
  if (!sop?.sections) return []
  return sop.sections.flatMap((section) =>
    section.steps.map((step, i) => ({
      ...step,
      key: sopStepKey(section.id, step, i),
      sectionId: section.id,
      sectionTitle: section.title,
    }))
  )
}
