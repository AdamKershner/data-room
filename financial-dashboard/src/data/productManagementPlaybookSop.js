/**
 * SOP 4 — Kahana Product Management Playbook v1.0
 * Product operating system: how we learn, decide, build, launch, and compound value.
 */

import { LINEAR_WORKSPACE_URL, MIXPANEL_URL } from '../constants/kahanaSite'

export const PRODUCT_MANAGEMENT_PLAYBOOK_SOP = {
  id: 'product-management-playbook',
  title: 'Product Management Playbook',
  category: 'Product',
  owner: 'Product Leadership / Product Operations',
  format: 'checklist',
  description:
    'Kahana’s product operating system (v1.0). How PMs observe, frame, prioritize, shape, ship, launch, learn, and compound — including the 90-day launchpad, quality gates, and AI readiness.',
  keywords: [
    'product management',
    'playbook',
    'pm',
    'opportunity test',
    'problem brief',
    'delivery spec',
    'launch brief',
    'outcome review',
    '90 day',
    'ai readiness',
    'quality gates',
  ],
  who: 'Product Managers, Product Engineers with PM responsibility, Product Leads, and cross-functional partners',
  when: 'First 90 days for new PMs, then continuously. Review this playbook quarterly and after each PM onboarding cycle.',
  notes: [
    'This is not a reading assignment. It is how Kahana product work actually runs.',
    'Our job is not to ship more. It is to make the right customer workflow meaningfully better — and to prove that it did.',
    'Every initiative needs a named owner, explicit evidence, an intended outcome, known constraints, and a next learning step.',
    'v1.0 — review quarterly; refresh after each PM onboarding cycle.',
  ],
  sections: [
    {
      id: 'standard',
      title: '01 — The Kahana Product Standard',
      intro:
        'Product management turns real customer workflows into durable, scalable product value. We stay close to implementation and customer reality, but a loud request is not a roadmap priority and a one-off workaround is not a strategy.',
      steps: [
        {
          id: 'pm-great-workflow',
          text: 'Start with the user’s workflow and the business outcome — not a feature request.',
        },
        {
          id: 'pm-great-pain',
          text: 'Spend enough time close to customers to recognize recurring pain versus isolated noise.',
        },
        {
          id: 'pm-great-tradeoffs',
          text: 'Make trade-offs explicit. Every “yes” includes what we are not doing now.',
        },
        {
          id: 'pm-great-write',
          text: 'Convert ambiguity into a written problem, a testable bet, a scoped plan, and a measurable outcome.',
        },
        {
          id: 'pm-great-team',
          text: 'Work as one team with Engineering and Design — no surprise handoffs, hidden commitments, or fake deadlines.',
        },
        {
          id: 'pm-great-complexity',
          text: 'Protect the product from unnecessary complexity, customer-specific debt, and unvalidated AI theater.',
        },
        {
          id: 'pm-great-launch',
          text: 'Treat launch as the start of learning, not the finish line.',
        },
        {
          id: 'pm-loop',
          text: 'Run the product loop on every initiative: Observe → Frame → Prioritize → Shape → Build → Launch → Learn → Compound.',
          note: 'Every initiative: named owner, explicit evidence, intended outcome, known constraints, next learning step.',
        },
        {
          id: 'pm-narrative',
          text: 'Keep the Kahana Story current in your head — AI slop, hubs as library, Aura — so product bets stay on mission.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
      ],
    },
    {
      id: 'principles',
      title: '02 — PM Principles',
      intro: 'Eight beliefs that decide what we build, and what we refuse to build. If a principle is slipping, stop and re-frame.',
      steps: [
        {
          id: 'pm-p1',
          text: 'Earn the right to build. Clear problem, defined user, credible evidence, and a reason Kahana is well-positioned. A request is input, not commitment.',
          note: 'Test: name the user, the evidence, and why Kahana wins — out loud, in under a minute. If you reach for “a customer asked,” you have not earned it.',
        },
        {
          id: 'pm-p2',
          text: 'Customer reality beats internal certainty. Review calls, implementations, support, telemetry, and observed workarounds before debating opinions.',
          note: 'Test: point to the last time you saw this workflow performed by a real user. If the answer is last quarter, your certainty is stale.',
        },
        {
          id: 'pm-p3',
          text: 'Write to think. Important decisions must be legible to someone who was not in the meeting.',
          note: 'Test: hand the document to someone two teams away. If they can state the decision and the trade-off without you, it holds.',
        },
        {
          id: 'pm-p4',
          text: 'Build the product, not the customization. Would this make Kahana better for a defined set of customers? If not, it is implementation, configuration, service, or a conscious exception — never quiet roadmap work.',
          note: 'Test: if this shipped and the requesting customer churned next quarter, would we still want it? A no means it was never product.',
        },
        {
          id: 'pm-p5',
          text: 'Speed is learning velocity. Shrink uncertainty with narrower scope, instrumented outcomes, and reversible decisions. Never buy speed with design, reliability, security, or trust.',
          note: 'Test: what will you know in two weeks that you do not know today? No answer means you are producing output, not velocity.',
        },
        {
          id: 'pm-p6',
          text: 'The smallest coherent experience wins. Ship the smallest end-to-end slice that completes a real workflow. A partial surface is worse than no surface.',
          note: 'Test: can a user start the job and finish it inside the product without a taught workaround? If not, the slice is small but not coherent.',
        },
        {
          id: 'pm-p7',
          text: 'AI must be useful, controllable, and trustworthy. Before broad rollout: user value, failure modes, data boundaries, evaluation, observability, human controls, and fallback.',
          note: 'Test: describe what happens on the worst plausible input. If unknown, it is not ready for a customer.',
        },
        {
          id: 'pm-p8',
          text: 'Own the outcome after release. Ownership runs through adoption, support, reliability, and the next decision. Merged code is not a finished feature.',
          note: 'Test: is there a named owner and a date on the outcome review? If not, nobody owns the result.',
        },
      ],
    },
    {
      id: 'contract',
      title: '03 — Product Team Contract',
      intro: 'Who owns what, so nothing falls between PM, Engineering, Design, and the field.',
      steps: [
        {
          id: 'pm-owns',
          text: 'PM owns: problem framing, target user, desired outcome, synthesis of customer/workflow/business/data, priority recommendation, scope, non-goals, acceptance criteria, launch criteria, outcome measurement, alignment, decision records, and escalation of risk.',
        },
        {
          id: 'eng-owns',
          text: 'Engineering owns: technical design, estimates, feasibility, implementation, quality, reliability, architecture, operational readiness, calling out risk early, and proposing viable technical alternatives.',
        },
        {
          id: 'design-owns',
          text: 'Design owns: experience quality, interaction design, accessibility, research craft, design-system stewardship, and validation of usability assumptions. Bring Design in during shaping, not after scope is treated as fixed.',
        },
        {
          id: 'field-owns',
          text: 'Customer-facing teams own: relationship context, implementation reality, commercial commitments, adoption signals, support themes, and field feedback.',
        },
        {
          id: 'together-own',
          text: 'We own together: selecting the right customer problem, scope/sequencing trade-offs, what “good enough to launch” means, communicating changes accurately, and learning from results.',
        },
        {
          id: 'non-negotiable-promise',
          text: 'Non-negotiable: PMs do not promise timelines, functionality, integrations, data handling, or custom solutions externally without internal alignment.',
        },
        {
          id: 'non-negotiable-eng',
          text: 'Non-negotiable: Engineering does not receive work without an understandable problem, intended outcome, and usable acceptance criteria.',
        },
        {
          id: 'non-negotiable-record',
          text: 'Non-negotiable: customer feedback is recorded in the shared system, not left in personal notes or chat. Decisions that change scope, priority, customer commitment, cost, security, or reliability are documented.',
        },
      ],
    },
    {
      id: 'launchpad-setup',
      title: '04 — 90-Day Launchpad: before Day 1 and Day 1',
      intro:
        'By Day 90 a new PM independently owns a bounded product area from evidence to decision, delivery, launch, and learning. Setup is a leadership job.',
      steps: [
        {
          id: 'pm-success-brief',
          text: 'Hiring manager / Product Ops: write a one-page Success Brief (role, manager, buddy, start date, why this role exists, target customers, outcomes, in-flight work, risks, partners, decision rights, what excellent looks like at Day 30/60/90).',
        },
        {
          id: 'pm-before-day1',
          text: 'Before Day 1: assign a buddy, provision product/customer/analytics/design/engineering/docs/security access, add the PM to operating cadences, pre-schedule the first two weeks, choose one low-risk first win for Weeks 2–3, and share strategy, roadmap, scorecard, narrative, landscape, and known risks.',
        },
        {
          id: 'pm-day1',
          text: 'Day 1: meet manager and buddy; review mission, product narrative, customers, priorities, and principles; walk the Success Brief and escalation rules; confirm the operating stack; take a guided product demo including known rough edges; start an onboarding log.',
          href: '/onboarding',
          hrefLabel: 'Onboarding',
        },
        {
          id: 'pm-day1-artifact',
          text: 'Day 1 artifact (one page, shared with manager and buddy): What I believe Kahana does / what I need to learn next.',
        },
      ],
    },
    {
      id: 'launchpad-month1',
      title: '04 — 90-Day Launchpad: Week 1 through Day 30',
      steps: [
        {
          id: 'pm-week1-truth',
          text: 'Week 1: read narrative, ICP, roadmap, recent releases, and customer insights. Attend or review at least two customer / prospect / implementation / onboarding / support interactions.',
        },
        {
          id: 'pm-week1-partners',
          text: 'Meet Engineering, Design, Sales/GTM, Customer Success, and implementation. Learn how an insight becomes a decision, a planned item, a release, and a measured outcome.',
        },
        {
          id: 'pm-week1-artifacts',
          text: 'Week 1 artifacts: stakeholder map; Kahana product glossary; five evidence-tagged insights (observation, validated need, assumption, risk, or open question).',
        },
        {
          id: 'pm-weeks24',
          text: 'Weeks 2–4: use the product end-to-end; review journeys, failure states, support themes, and product debt; three more customer/field interactions; architecture walkthrough; product scorecard; Definition of Ready / Done with Eng and Design; deliver the first win; draft 30/60/90 plan by end of Week 2.',
        },
        {
          id: 'pm-month1-artifacts',
          text: 'End-of-month artifacts: Product Area Brief, first-win artifact and retro, approved 30/60/90 plan.',
        },
      ],
    },
    {
      id: 'launchpad-60-90',
      title: '04 — 90-Day Launchpad: Days 31–90',
      steps: [
        {
          id: 'pm-d31',
          text: 'Days 31–60: take primary ownership of one bounded workflow, opportunity, quality problem, or initiative. Write a Problem Brief. Gather discovery across conversations, observation, support, product data, and feasibility.',
        },
        {
          id: 'pm-d60-shape',
          text: 'Present options including “do nothing.” Facilitate a shaping session with Engineering and Design. Define scope, non-goals, dependencies, acceptance, measurement, instrumentation, and launch approach. Publish a weekly product update.',
        },
        {
          id: 'pm-d60-artifacts',
          text: 'Day 60 artifacts: approved Problem Brief and decision record; delivery spec proportional to scope; measurement and launch plan; stakeholder readout with decisions, trade-offs, risks, and owners.',
        },
        {
          id: 'pm-d61',
          text: 'Days 61–90: own delivery orchestration. Validate high-risk assumptions before they become expensive. Confirm acceptance, edge cases, AI evals if applicable, analytics, support, docs, and rollout. Coordinate launch with Eng, Design, GTM, and CS.',
        },
        {
          id: 'pm-d90-artifacts',
          text: 'Day 90 artifacts: Launch Brief or Decision Memo; Outcome Review; updated opportunity backlog; six-month Product Area Plan; onboarding retro with playbook improvements.',
        },
      ],
    },
    {
      id: 'decide',
      title: '05 — How We Decide',
      intro: 'Every opportunity clears this test in writing before it earns product capacity.',
      steps: [
        {
          id: 'pm-opp-who',
          text: 'Who has the problem? Defined user and customer segment.',
        },
        {
          id: 'pm-opp-job',
          text: 'What job are they trying to do? Workflow, trigger, and current workaround.',
        },
        {
          id: 'pm-opp-evidence',
          text: 'What evidence says this matters? Calls, observations, support, product data, or revenue/retention — linked, not asserted.',
        },
        {
          id: 'pm-opp-now',
          text: 'Why now? Strategic, customer, market, reliability, or commercial reason.',
        },
        {
          id: 'pm-opp-kahana',
          text: 'Why Kahana? Product advantage, data/workflow fit, or durable learning advantage.',
        },
        {
          id: 'pm-opp-slice',
          text: 'What is the smallest coherent solution? Minimum end-to-end experience — not disconnected UI pieces.',
        },
        {
          id: 'pm-opp-nongoals',
          text: 'What will we not do? Write non-goals to defend focus.',
        },
        {
          id: 'pm-opp-know',
          text: 'How will we know? Baseline, target, leading signals, failure signals, owner, and review date.',
        },
        {
          id: 'pm-opp-fail',
          text: 'What could make this fail? Technical, customer, data, adoption, security, and operating risks.',
        },
        {
          id: 'pm-rubric',
          text: 'Score as a decision aid (1–5), not false precision: strategic fit, customer intensity, reach, evidence strength, durable advantage, expected impact, effort/complexity, reversibility. Prioritize strong fit + intensity + evidence + advantage, then size the smallest credible bet that teaches us something.',
        },
        {
          id: 'pm-memo',
          text: 'Write a Decision Memo when the choice affects priority, scope, architecture, a material customer commitment, or a major trade-off: decision, owner, date, status, context, options, evidence, recommendation, trade-offs, risks, dissent, next review date.',
        },
      ],
    },
    {
      id: 'artifacts',
      title: '06 — Craft: artifacts that move work',
      intro:
        'Six templates that turn thinking into executable work. Use the smallest document that creates shared understanding. Add detail only where risk warrants it.',
      steps: [
        {
          id: 'pm-area-brief',
          text: 'Product Area Brief: area, owner, target user, core job, current workflow and pain, Kahana’s value, adoption/quality signals, systems/dependencies, top opportunities, top risks/debt, alternatives, open questions.',
        },
        {
          id: 'pm-problem-brief',
          text: 'Problem Brief: title, owner, status, problem statement, user/segment, workflow trigger and workaround, evidence, impact if unsolved, why now, constraints, desired outcome, success metrics (baseline, target, owner, review date), non-goals, open questions, decision needed.',
          note: 'The metric must be fail-able: baseline, target, date, named owner. A metric missing any of those cannot be learned from. Briefs that end in “thoughts?” move nothing.',
        },
        {
          id: 'pm-delivery-spec',
          text: 'Delivery Spec: initiative, owner, linked Problem Brief, goal, users, scope, non-goals, user flow, requirements, acceptance criteria, edge cases, technical dependencies, AI eval plan if applicable, data/privacy/security, instrumentation, rollout/support/rollback, open decisions.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear',
        },
        {
          id: 'pm-weekly-update',
          text: 'Weekly Product Update: week of, area, health (Green/Yellow/Red), outcome progress against target, what changed, customer or product signal, decisions made, next milestone, risks, the one decision or help needed, links. Lead with the metric, not activity.',
        },
        {
          id: 'pm-launch-brief',
          text: 'Launch Brief: initiative, owner, date/cohort, user problem and value, what is shipping, what is intentionally not, eligibility/migration, success metrics and dashboard, known limitations, support/implementation guidance, customer-facing messaging owner, rollback/incident path, post-launch review date.',
        },
        {
          id: 'pm-outcome-review',
          text: 'Outcome Review: original hypothesis, what shipped, baseline/target/actual, customer and support signal, quality/reliability, what we learned, what we will do next, what we will stop, owners and dates.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
      ],
    },
    {
      id: 'quality-gates',
      title: '07 — Product Quality Gates',
      intro: 'The bar to clear at discovery, at shaping, and at launch. Dogfood and UX review still run through SOP 3.',
      steps: [
        {
          id: 'pm-gate-discovery',
          text: 'Discovery — ready to prioritize: user, workflow, and problem clearly stated; evidence linked and stronger than a single anecdote when feasible; workaround and impact understood; alternatives including no action considered; Eng and Design consulted for material risk; a measurable or observable outcome defined.',
        },
        {
          id: 'pm-gate-shaping',
          text: 'Shaping — ready to build: scope and non-goals explicit; user flow understandable; acceptance criteria and important edge cases documented; Design and Eng agree it is feasible enough to plan; dependencies, owners, and risks visible; data/privacy/security reviewed when relevant; instrumentation and rollout included.',
        },
        {
          id: 'pm-gate-launch',
          text: 'Launch — ready to learn in production: acceptance verified; monitoring, analytics, error states, and quality signals available; GTM/support/implementation have accurate guidance; docs updated; rollback/flag/incident path clear where applicable; named owner and date for the outcome review.',
        },
        {
          id: 'pm-gate-sop3',
          text: 'Dogfood like a stranger, log findings with screenshot and impact, and verify the fix using SOP 3 Product Quality.',
          href: '/sops/finding-whats-broken',
          hrefLabel: 'SOP 3: Product Quality',
        },
      ],
    },
    {
      id: 'ai-readiness',
      title: '08 — AI Product Readiness',
      intro: 'A compelling demo is not enough. AI-powered features require extra product craft before they reach a customer.',
      steps: [
        {
          id: 'pm-ai-job',
          text: 'What exact user job becomes faster, easier, safer, or more valuable?',
        },
        {
          id: 'pm-ai-mistakes',
          text: 'What is the expected behavior, and which mistakes are unacceptable?',
        },
        {
          id: 'pm-ai-data',
          text: 'What inputs, data classifications, permissions, and retention rules apply?',
        },
        {
          id: 'pm-ai-override',
          text: 'How do users understand, verify, correct, or override the output? What happens when confidence is low, an integration fails, or the model produces a poor answer?',
        },
        {
          id: 'pm-ai-eval',
          text: 'Which offline evaluation and production metrics indicate quality? What is the human fallback path? What will we log, monitor, and review without compromising customer trust?',
        },
        {
          id: 'pm-ai-launch',
          text: 'AI launch checklist: eval set covers real tasks and hard cases; quality threshold agreed; failure states designed not hidden; permissions/data boundaries validated; human review where risk warrants it; cost/latency/reliability understood; feedback capture in the workflow; rollout starts with an appropriate cohort or guardrail.',
        },
      ],
    },
    {
      id: 'rituals',
      title: '09 — Product Rituals',
      intro: 'The weekly rhythm that keeps decisions fast, written, and visible.',
      steps: [
        {
          id: 'pm-ritual-1on1',
          text: 'Manager 1:1 — bring a written agenda, decisions needed, risks, and growth topics.',
        },
        {
          id: 'pm-ritual-planning',
          text: 'Planning — bring ranked opportunities, trade-offs, dependencies, and a recommendation. Align capacity to the highest-value work.',
        },
        {
          id: 'pm-ritual-refine',
          text: 'Refinement — protect the problem, scope, acceptance criteria, and edge cases so near-term work is understandable and buildable.',
        },
        {
          id: 'pm-ritual-design',
          text: 'Design review — bring user context, decision criteria, and open questions before expensive implementation.',
        },
        {
          id: 'pm-ritual-customer',
          text: 'Customer / implementation review — capture evidence, commitments, risks, and follow-up owners. Keep the roadmap anchored in reality.',
        },
        {
          id: 'pm-ritual-release',
          text: 'Release readiness — verify quality, support, comms, measurement, and rollback.',
        },
        {
          id: 'pm-ritual-outcome',
          text: 'Outcome review — compare actual results to the hypothesis; choose the next move.',
        },
        {
          id: 'pm-ritual-review',
          text: 'Product review — present outcome, evidence, trade-off, and decision request — not a status dump.',
        },
        {
          id: 'pm-comms',
          text: 'Communication rules: write before meetings; start with the outcome or decision needed; separate facts, assumptions, and recommendations; escalate yellow/red early; link primary evidence; end with decision, owner, due date, and location of record.',
        },
      ],
    },
    {
      id: 'requests',
      title: '10 — Requests and Boundaries',
      intro: 'Every customer request deserves a response. It does not automatically deserve roadmap capacity.',
      steps: [
        {
          id: 'pm-req-core',
          text: 'Core product opportunity (reusable, strategy-aligned, multiple priority customers) → research, prioritize, and build a scalable solution if evidence supports it.',
        },
        {
          id: 'pm-req-config',
          text: 'Configuration / enablement (already solvable through setup, training, or workflow) → route to implementation / CS and document the pattern.',
        },
        {
          id: 'pm-req-integration',
          text: 'Integration / platform need → assess strategic fit, technical complexity, security, and reuse potential.',
        },
        {
          id: 'pm-req-custom',
          text: 'Customer-specific customization → explicit commercial/implementation decision. Do not hide it in the product roadmap.',
        },
        {
          id: 'pm-req-defect',
          text: 'Defect / reliability → triage by severity, customer impact, and operational risk.',
        },
        {
          id: 'pm-req-explore',
          text: 'Exploration (early or underspecified) → capture, clarify, and gather evidence before commitment.',
        },
        {
          id: 'pm-req-response',
          text: 'Response standard: acknowledge the job and impact; clarify outcome, urgency, workaround, and affected users; record the request and evidence; decide the path and owner; communicate what is committed, what is being explored, and what is not promised.',
        },
      ],
    },
    {
      id: 'scorecards',
      title: '11 — Scorecards',
      intro: 'Measure onboarding health and product health. Pick metrics that match the workflow — do not copy generic SaaS dashboards.',
      steps: [
        {
          id: 'pm-onboard-health',
          text: 'PM onboarding health: Day 1 tools available; five relevant customer/field interactions by Day 30; first contribution by end of Week 3; product fluency by Day 30; Problem Brief by Day 60; launch/decision review by Day 90; each new PM leaves one process improvement behind.',
        },
        {
          id: 'pm-health-customer',
          text: 'Product health — Customer: activation, time-to-value, adoption, retention, expansion, satisfaction.',
        },
        {
          id: 'pm-health-workflow',
          text: 'Product health — Workflow: task success, completion time, repeat usage, manual work removed.',
        },
        {
          id: 'pm-health-quality',
          text: 'Product health — Quality: error rate, support burden, reliability, latency, data-quality incidents.',
        },
        {
          id: 'pm-health-business',
          text: 'Product health — Business: qualified demand, conversion, revenue influence, cost to serve.',
        },
        {
          id: 'pm-health-ai',
          text: 'Product health — AI (when relevant): task-quality score, override rate, trust signal, cost per successful task.',
        },
      ],
    },
    {
      id: 'pm-bar',
      title: '12 — The PM Bar',
      intro: 'You are ready for normal, unsupervised ownership when you can do all of the following.',
      steps: [
        {
          id: 'pm-bar-explain',
          text: 'Explain the customer’s workflow and Kahana’s value without slides or jargon.',
        },
        {
          id: 'pm-bar-evidence',
          text: 'Distinguish evidence from opinion, and a durable opportunity from a one-off request.',
        },
        {
          id: 'pm-bar-frame',
          text: 'Frame a problem that Engineering and Design can help solve.',
        },
        {
          id: 'pm-bar-priority',
          text: 'Make a scoped, evidence-backed prioritization recommendation.',
        },
        {
          id: 'pm-bar-lead',
          text: 'Lead a cross-functional initiative without creating confusion or surprise.',
        },
        {
          id: 'pm-bar-success',
          text: 'Define success before shipping, and make a clear decision after learning from results.',
        },
        {
          id: 'pm-bar-tradeoff',
          text: 'Communicate a difficult trade-off honestly to a customer-facing partner or leader.',
        },
        {
          id: 'pm-bar-system',
          text: 'Improve the system around you, not only the backlog you own. Leave every product area more understandable, more focused, and more compounding than you found it.',
        },
      ],
    },
    {
      id: 'reading-list',
      title: 'Appendix — First 30 days reading list',
      intro: 'The hiring manager owns a current set of links for the product area. Every new PM works this list in the first 30 days.',
      steps: [
        {
          id: 'pm-read-strategy',
          text: 'Company and strategy: Kahana mission and product narrative, current annual/quarterly priorities, product strategy and roadmap, ICP, segments, positioning, competitive context.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
        {
          id: 'pm-read-customer',
          text: 'Customer and workflow: top call recordings or summaries, onboarding/implementation guide, support-theme review, user research repository, feedback taxonomy and request backlog.',
        },
        {
          id: 'pm-read-tech',
          text: 'Product and technology: product demo and primary journey, area architecture, integration and data-flow docs, release/incident process, current metrics dashboard and definitions.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
        {
          id: 'pm-read-os',
          text: 'Operating system: product decision log, active initiative briefs, design system and research process, Linear conventions, security/privacy/AI data-handling guidance.',
          href: '/how-we-work',
          hrefLabel: 'How We Work',
        },
      ],
    },
  ],
  doneWhen: [
    'The PM can name the user, evidence, and why Kahana wins for the current bet — in under a minute.',
    'Problem, scope, non-goals, acceptance criteria, instrumentation, and outcome owner/date exist in writing.',
    'Quality gates for discovery, shaping, and launch are ticked; AI features have cleared the AI launch checklist.',
    'A weekly update leads with outcome vs target and the one decision needed — not a list of activity.',
    'New PMs are on the 90-day launchpad with a Success Brief; by Day 90 they have a Launch Brief or Decision Memo and an Outcome Review.',
  ],
}

export const PRODUCT_MANAGEMENT_PLAYBOOK_ALIASES = {
  'product-management-operations': 'product-management-playbook',
}
