/**
 * Step bodies for /sops/finding-whats-broken/:stepId
 * Block types: p, h2, ol, ul, table, callout, link
 */

export const FINDING_WHATS_BROKEN_CONTENT = {
  'why-it-matters': {
    intro:
      'On a small team there is no dedicated QA org and no army of researchers. The PM is often the last line of defense between a confusing product and a real user.',
    blocks: [
      {
        type: 'p',
        text: 'Every broken button, unreadable label, or dead end costs something you cannot easily get back at this stage: a first impression, a creator’s willingness to publish, a buyer’s trust at checkout.',
      },
      {
        type: 'p',
        text: 'The goal of this SOP is not to catch every bug. It is to build a repeatable habit of noticing what’s broken, deciding what’s worth fixing first, and closing the loop — so quality improves every week instead of getting rediscovered by accident.',
      },
      {
        type: 'callout',
        kind: 'important',
        title: 'Use this, don’t file it.',
        text: 'Pull Section V whenever you sit down to do a review. The rest of the playbook is how to find, write, and ship the fix.',
      },
    ],
  },

  'core-principles': {
    intro: 'Five standing orders. If a review violates one of these, it is not a real review.',
    blocks: [
      {
        type: 'ol',
        items: [
          {
            text: 'Use it like a stranger would.',
            note: 'Familiarity is the enemy of a good review. You know where every button is. A new user does not.',
          },
          {
            text: 'Every finding needs a “so what.”',
            note: 'Do not log “this looks off.” Log what it costs — a lost signup, a confused creator, a failed search — so it can be prioritized honestly.',
          },
          {
            text: 'Small and shipped beats big and perfect.',
            note: 'A fixed contrast issue this week is worth more than a redesign proposal that ships in a quarter.',
          },
          {
            text: 'Data tells you where to look. Users tell you why it hurts.',
            note: 'Analytics show the drop-off. Talking to or reading real users tells you the reason.',
          },
          {
            text: 'Close the loop.',
            note: 'A finding that never gets verified as fixed is not done — it has only been moved from the product to a spreadsheet.',
          },
        ],
      },
    ],
  },

  dogfood: {
    intro:
      'Once a week, open the product in an incognito window or a throwaway account and complete a real task end to end.',
    blocks: [
      {
        type: 'p',
        text: 'Sign up, create a hub, search for something specific, try to buy something. Do not use shortcuts or insider knowledge. Write down every moment you hesitate, re-read something, or are not sure what to click.',
      },
      {
        type: 'ul',
        items: [
          'Incognito or a fresh account — not your admin session.',
          'One real task, start to finish.',
          'Note hesitation, re-reading, and “what do I click?” moments.',
        ],
      },
      {
        type: 'callout',
        kind: 'help',
        title: 'Cadence',
        text: 'Weekly. Pair with a pass over new support tickets.',
      },
    ],
  },

  'walk-journeys': {
    intro:
      'List the 5–8 journeys that matter most, then walk each one on desktop and mobile, in at least two browsers.',
    blocks: [
      {
        type: 'p',
        text: 'Examples: a new visitor searches and finds nothing; a creator uploads and prices a hub; a buyer completes checkout; a user sets up payouts.',
      },
      {
        type: 'callout',
        kind: 'important',
        title: 'Seams are where absurd lives.',
        text: 'The step right after a redirect. A modal that opens over another modal. The back button after a payment.',
      },
      {
        type: 'ul',
        items: [
          'Name 5–8 journeys that actually move the business.',
          'Walk each on desktop and mobile.',
          'Use at least two browsers.',
        ],
      },
    ],
  },

  'read-the-data': {
    intro:
      'Instrumentation exists so you do not have to rely on gut feel. Look in these four places.',
    blocks: [
      {
        type: 'ul',
        items: [
          'Funnel drop-off — the exact step where people leave a flow.',
          'Dead clicks / rage clicks — repeated clicks on something that does not respond. Strong signal of a broken or misleading control.',
          'Zero-result and thin-result search queries — where discovery is failing.',
          'Error and exception logs — the technical ground truth of what is actually breaking, not just what looks broken.',
        ],
      },
      {
        type: 'p',
        text: 'Search-to-engagement tracking (Workstream C) is one of the instruments this review should actually use, not a dashboard you glance at after the fact.',
      },
    ],
  },

  'mine-feedback': {
    intro: 'This is usually sitting unread. Go through it on a regular cadence.',
    blocks: [
      {
        type: 'ul',
        items: [
          'Support tickets and DMs — look for the same complaint showing up more than once.',
          'App store or product review comments.',
          'Sales or founder-call notes — objections on calls are often UX gaps in disguise.',
          'Social mentions — people are often more blunt in public than in a feedback form.',
        ],
      },
      {
        type: 'link',
        to: '/sops/logging-feedback-and-issues',
        label: 'SOP 5 — Logging feedback and issues →',
      },
    ],
  },

  'heuristic-eval': {
    intro:
      'Walk key screens against a known checklist rather than relying on personal taste. Nielsen’s 10 usability heuristics are the default.',
    blocks: [
      {
        type: 'ol',
        items: [
          { text: 'Visibility of system status' },
          { text: 'Match between the system and the real world' },
          { text: 'User control and freedom — can they undo or back out?' },
          { text: 'Consistency and standards' },
          { text: 'Error prevention' },
          { text: 'Recognition over recall — do not make users remember things' },
          { text: 'Flexibility and efficiency' },
          { text: 'Aesthetic and minimalist design' },
          { text: 'Help users recover from errors' },
          { text: 'Help and documentation' },
        ],
      },
      {
        type: 'callout',
        kind: 'help',
        title: 'Score it.',
        text: 'Score each screen against these. Do not just eyeball it.',
      },
    ],
  },

  benchmark: {
    intro:
      'Use 2–3 products your users already know (marketplaces, creator platforms, or direct competitors) and do the same core task there.',
    blocks: [
      {
        type: 'p',
        text: 'If their empty state, pricing display, or search feels obviously better, that is a concrete, arguable case for change — not just an opinion.',
      },
      {
        type: 'link',
        to: '/company-landscape',
        label: 'Company Landscape — peer cards →',
      },
    ],
  },

  'absurd-patterns': {
    intro:
      'Patterns that repeatedly turn out to be real problems, not style nits.',
    blocks: [
      {
        type: 'ul',
        items: [
          'A button or control that does nothing when clicked, or does something different from what it says.',
          'A panel, modal, or page that cannot be closed or backed out of.',
          'Text with contrast so low it is genuinely hard to read.',
          'Icon-only controls with no label or hover tooltip.',
          'Empty states that do not tell the user what to do next (“you have nothing here” and nothing else).',
          'Pricing or costs that are vague, hidden, or require extra clicks to understand.',
          'Anything that behaves differently on mobile vs. desktop without a clear reason.',
          'Inconsistent terminology for the same thing (e.g. “Hub” in one place, “Collection” in another).',
          'A flow that requires the user to already know something the product never told them.',
          'Friction placed right before a conversion moment — signup, checkout, publish.',
        ],
      },
    ],
  },

  'document-a-finding': {
    intro:
      'Keep the format boring and consistent so anyone (including engineering) can scan it fast. One finding, one entry.',
    blocks: [
      {
        type: 'table',
        rows: [
          ['Field', 'What to write'],
          ['Title', 'Short and specific (“Share button doesn’t open,” not “sharing is broken”)'],
          ['Screenshot', 'Still or a short screen recording'],
          ['Issue', 'Exactly what happens, in one or two sentences'],
          ['Impact', 'What this costs — lost signup, confused creator, abandoned checkout'],
          ['Fix', 'The concrete change being proposed'],
          ['Priority', 'High / Medium / Low — see How to prioritize'],
        ],
      },
      {
        type: 'callout',
        kind: 'important',
        title: 'One log.',
        text: 'Keep a single running log (a doc or a board) rather than scattering findings across chats and screenshots. It becomes the evidence base when you are arguing for engineering time.',
      },
      {
        type: 'link',
        to: '/sops/logging-feedback-and-issues',
        label: 'SOP 5 — Logging feedback and issues →',
      },
    ],
  },

  prioritize: {
    intro:
      'Not everything gets fixed at once. Sort findings on Impact vs Effort. Impact is a real KPI or user moment, not gut feel.',
    blocks: [
      {
        type: 'table',
        rows: [
          ['', 'Low effort', 'High effort'],
          ['High impact', 'Fix immediately — this week', 'Scope and schedule — next sprint'],
          ['Low impact', 'Batch with similar fixes', 'Backlog — revisit only if it recurs'],
        ],
      },
      {
        type: 'p',
        text: 'Does this block a conversion, cause abandonment, or generate repeat support tickets? If you cannot name what it costs, it is probably not High Impact yet — even if it looks bad.',
      },
    ],
  },

  'finding-to-fix': {
    intro: 'The workflow that closes the loop.',
    blocks: [
      {
        type: 'ol',
        items: [
          { text: 'Log the finding using the format in How to document a finding.' },
          { text: 'Triage weekly — sort new findings into the Impact / Effort grid.' },
          {
            text: 'Write the ticket — include repro steps, screenshot, and the specific fix expected, not just “this is broken.”',
          },
          { text: 'Track it through build — do not let it silently drop off a sprint.' },
          { text: 'QA the fix yourself before calling it done — re-run the exact repro steps.' },
          {
            text: 'Verify impact — check the relevant metric a week or two later if it was a conversion-related fix.',
          },
          {
            text: 'Close the loop — mark it resolved in the shared log so it does not get rediscovered and re-reported.',
          },
        ],
      },
    ],
  },

  cadence: {
    intro: 'A simple calendar so this stays a habit, not a scramble before a launch.',
    blocks: [
      {
        type: 'table',
        rows: [
          ['Cadence', 'Activity'],
          ['Daily', 'Note anything broken you personally hit while using the product.'],
          ['Weekly', 'One structured dogfood session + review of new support tickets / feedback.'],
          [
            'Bi-weekly',
            'Triage the findings log against Impact / Effort, hand off top items to engineering.',
          ],
          [
            'Monthly',
            'Full heuristic pass on the 5–8 core journeys, plus a competitive benchmark check.',
          ],
          [
            'Before any major launch',
            'Full end-to-end walk of every journey touched by the change, on mobile and desktop.',
          ],
        ],
      },
    ],
  },

  'session-first-time': {
    intro: 'Section V is the print-ready review. This check: did you use the product like a first-time user, not an insider?',
    blocks: [
      {
        type: 'p',
        text: 'Incognito or a throwaway account. One real task. Write down hesitation. If you skipped a step because “everyone knows that’s over there,” you failed this check.',
      },
    ],
  },

  'session-devices': {
    intro: 'Did you test the same flow on mobile and desktop?',
    blocks: [
      {
        type: 'p',
        text: 'Most absurd issues show up on one viewport and not the other. Same journey, both surfaces, before you log the finding as desktop-only.',
      },
    ],
  },

  'session-data': {
    intro: 'Did you check funnel drop-off and error logs, not just click around?',
    blocks: [
      {
        type: 'p',
        text: 'Click-around finds what looks broken. Logs find what is actually breaking. Do both in the same session.',
      },
    ],
  },

  'session-tickets': {
    intro: 'Did you check recent support tickets and reviews for repeat complaints?',
    blocks: [
      {
        type: 'p',
        text: 'If the same complaint appears twice, it is not an anecdote. Promote it to a finding with impact named.',
      },
    ],
  },

  'session-evidence': {
    intro: 'Does every finding have a screenshot, an issue, and a named impact?',
    blocks: [
      {
        type: 'p',
        text: 'Title, screenshot, what happens, what it costs. If impact is missing, it cannot be prioritized honestly.',
      },
    ],
  },

  'session-grid': {
    intro: 'Have you sorted new findings into the Impact / Effort grid?',
    blocks: [
      {
        type: 'p',
        text: 'High/Low impact × High/Low effort. Anything you cannot place is not triaged yet.',
      },
    ],
  },

  'session-schedule': {
    intro: 'Are High Impact / Low Effort items scheduled this week?',
    blocks: [
      {
        type: 'p',
        text: 'Those are the “fix immediately” cell. If they are still sitting in the log, the review did not convert into work.',
      },
    ],
  },

  'session-retest': {
    intro: 'Did you re-test anything marked “fixed” before closing it?',
    blocks: [
      {
        type: 'p',
        text: 'Re-run the exact repro steps. Then, if it was conversion-related, check the metric a week or two later. Then close it in the shared log.',
      },
      {
        type: 'callout',
        kind: 'important',
        title: 'The point of this SOP',
        text: 'Not to make the product perfect. To make sure nothing broken stays invisible for long — and that fixing it is a habit, not a scramble before a launch.',
      },
    ],
  },
}
