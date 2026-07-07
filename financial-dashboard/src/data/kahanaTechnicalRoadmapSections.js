/** Internal technical roadmap — Security, Trust, Algorithm pillars. */

import { LINEAR_WORKSPACE_URL } from '../constants/kahanaSite'

export { LINEAR_WORKSPACE_URL }

export const TECHNICAL_ROADMAP_PAGE = {
  title: 'Technical Roadmap',
  subtitle:
    'Internal focus for the next wave — Security, Trust, and Algorithm. Supplements business horizons on /kahana.',
  kicker: 'Technical focus (internal)',
}

export const SECURITY_AUDIT = {
  title: 'Kahana LLC — Security Audit Report',
  date: '2026-07-01',
  scope: 'kahana-web (frontend) · firebase-functions (backend) · app.kahana.io',
  /** Repo-relative path for team with data room checkout */
  repoPath: 'Kahana LLC - Security Audit Report.pdf',
}

export const PILLARS = [
  {
    id: 'security',
    name: 'Security',
    question:
      'Can users, creators, and buyers trust that the platform protects data, payments, and access?',
    summary:
      'Remediate findings from the July 2026 security audit — secrets, Firestore rules, storage IDOR, payments, and client hardening.',
  },
  {
    id: 'trust',
    name: 'Trust',
    question:
      'Can buyers trust creators, hubs, and marketplace quality — and can creators trust the platform?',
    summary:
      'Creator credibility, marketplace quality signals, product integrity, and accurate information — reviews, verification, moderation.',
  },
  {
    id: 'algorithm',
    name: 'Algorithm',
    question:
      'Can someone find the knowledge they have in mind — across Explore, hubs, and resources?',
    summary:
      'Search relevance, intent/semantic discovery, in-hub findability, and recommendations — the Wan Shi Tong library experience.',
  },
]

export const SECURITY_PRIORITIES = [
  {
    band: 'P0 — Do today',
    items: [
      { id: 'sec-p0-1', findings: 'WB-01', theme: 'Secrets rotation', action: 'Rotate Stripe, Mailgun, Algolia keys committed to git' },
      { id: 'sec-p0-2', findings: 'BB-01', theme: 'API perimeter', action: 'Restrict CORS to kahana.io, kahana.co, localhost on all API servers' },
      { id: 'sec-p0-3', findings: 'WB-02, WB-03', theme: 'Firestore write guards', action: 'Add affectedKeys() guard — block monetization and age-gate bypass' },
      { id: 'sec-p0-4', findings: 'WB-04', theme: 'Storage IDOR', action: 'Require request.auth.uid == userId on all storage create rules' },
    ],
  },
  {
    band: 'P1 — This week',
    items: [
      { id: 'sec-p1-5', findings: 'WB-01', theme: 'Secrets hygiene', action: 'Purge secrets from git history (filter-repo, force-push)' },
      { id: 'sec-p1-6', findings: 'WB-06', theme: 'Auth on reads', action: 'Require request.auth != null in readAccess() and readHubContent()' },
      { id: 'sec-p1-7', findings: 'WB-09', theme: 'Mass assignment', action: 'Replace {...req.body} with explicit allowlist in patchUser' },
      { id: 'sec-p1-8', findings: 'WB-10', theme: 'Payment verification', action: "Verify Stripe subscription.status === 'active' before granting PAID role" },
      { id: 'sec-p1-9', findings: 'WB-08, WB-12', theme: 'Ownership checks', action: 'Add ownership checks to cancelHubSubscription, invite cancel/reminder' },
      { id: 'sec-p1-10', findings: 'WB-07', theme: 'Subscriber privacy', action: 'Scope sharing subcollection read to own doc only' },
      { id: 'sec-p1-11', findings: 'BB-02', theme: 'Admin surface', action: 'Add isKahanaAdmin role gate to /internal/explore-featured route' },
    ],
  },
  {
    band: 'P2 — Next sprint',
    items: [
      { id: 'sec-p2-12', findings: 'WB-05', theme: 'Per-workspace storage ACLs', action: 'Per-workspace role checks in storage rules' },
      { id: 'sec-p2-13', findings: 'WB-19', theme: 'Monetization gate', action: 'Remove writeAccess() short-circuit from storage monetized read' },
      { id: 'sec-p2-14', findings: 'WB-11', theme: 'Logging endpoint', action: 'Add authenticated middleware to logging endpoint' },
      { id: 'sec-p2-15', findings: 'WB-13, WB-14', theme: 'Payment binding', action: 'Fetch payment data from Stripe server-side; bind payment intent to buyer UID' },
      { id: 'sec-p2-16', findings: 'BB-08', theme: 'Rate limiting', action: 'Replace in-memory rate limiter with Firestore counters or Redis' },
      { id: 'sec-p2-17', findings: 'WB-15', theme: 'Webhook fail-closed', action: 'Error/alert when Stripe webhook secret missing — do not fail-open' },
    ],
  },
  {
    band: 'P3 — Backlog',
    items: [
      { id: 'sec-p3-18', findings: 'BB-03, BB-04, BB-07', theme: 'Client content security', action: 'Tighten DOMPurify; iframe sandbox without allow-same-origin' },
      { id: 'sec-p3-19', findings: 'BB-05', theme: 'Redirect validation', action: 'Validate hubId param before post-login redirect' },
      { id: 'sec-p3-20', findings: 'WB-18', theme: 'Storage limits', action: 'Add content-type and size checks to storage write rules' },
      { id: 'sec-p3-21', findings: 'WB-16', theme: 'Origin middleware', action: 'Anchor verifiedOrigin regex; add authenticated to user-data routes' },
      { id: 'sec-p3-22', findings: 'Track B', theme: 'Dependencies', action: 'Upgrade url-parse, jsdom; replace mailgun-js' },
    ],
  },
]

export const TRUST_GROUPS = [
  {
    id: 'creator-credibility',
    title: 'Creator and expert credibility',
    initiatives: [
      { name: 'Stripe Identity verified badge', status: 'Shipped', surface: 'Profile, paywall', notes: 'Display on creator surfaces' },
      { name: 'Expand verification signals', status: 'Planned', surface: 'Profile, Explore', notes: 'Badges, tenure, sales volume' },
      { name: 'Creator onboarding standards', status: 'Planned', surface: 'Hub creation', notes: 'Clear terms, preview quality bar' },
    ],
  },
  {
    id: 'marketplace-quality',
    title: 'Marketplace quality',
    initiatives: [
      { name: 'Reviews / ratings MVP', status: 'Planned (H1 P1)', surface: 'Hub, Explore', notes: 'Amazon-style trust signal' },
      { name: 'Explore indexing quality bar', status: 'Planned', surface: 'Explore, backend', notes: 'Editorial + automated gates' },
      { name: 'Featured / curated collections', status: 'Planned (H2)', surface: 'Explore', notes: 'Women-expert campaigns at scale' },
      { name: 'Social proof on cards', status: 'Partial', surface: 'Explore', notes: 'Views, badges' },
    ],
  },
  {
    id: 'product-integrity',
    title: 'Product integrity',
    initiatives: [
      { name: 'Hub preview and merchandising', status: 'Planned (H1 P1)', surface: 'Hub', notes: 'Hero, description, preview conversion' },
      { name: 'Refund / dispute playbook', status: 'Planned (H1 P2)', surface: 'Ops, legal', notes: 'Creator + buyer confidence' },
      { name: 'Share + monetize discoverability', status: 'Planned (H1 P0)', surface: 'Hub UX', notes: 'UX backlog blockers' },
      { name: 'Chargeback tracking by creator', status: 'Planned', surface: 'Backend, ops', notes: 'Suspend repeat offenders' },
    ],
  },
  {
    id: 'information-integrity',
    title: 'Information integrity',
    initiatives: [
      { name: 'Adult content flags + age gate', status: 'Shipped', surface: 'Explore, hub access', notes: 'Ties to audit WB-03 hardening' },
      { name: 'Moderation queue for flagged hubs', status: 'Planned', surface: 'Ops', notes: 'Manual review SLA' },
      { name: 'Accurate hub metadata', status: 'Ongoing', surface: 'Hub, Explore', notes: 'Descriptions match delivered content' },
      { name: 'Reporting flow for buyers', status: 'Planned', surface: 'Hub, support', notes: 'Escalate to moderation' },
    ],
  },
]

export const ALGORITHM_GROUPS = [
  {
    id: 'explore-discovery',
    title: 'Explore discovery',
    initiatives: [
      { name: 'Search relevance (synonyms, tags, ranking)', status: 'Planned (H2)', surface: 'Explore', notes: 'Functional today; not semantic-optimized' },
      { name: 'Category landing pages', status: 'Planned (H1 P1)', surface: 'Explore, SEO', notes: 'Clearer browse + organic traffic' },
      { name: 'Creator search filter expansion', status: 'Planned (H2)', surface: 'Explore', notes: 'Find experts by niche' },
      { name: 'Algolia / index pipeline hygiene', status: 'Planned', surface: 'Backend', notes: 'Audit noted key rotation; verify permission scope' },
    ],
  },
  {
    id: 'intent-semantic',
    title: 'Intent and semantic discovery',
    initiatives: [
      { name: 'Natural-language / intent queries', status: 'Planned', surface: 'Explore', notes: '"That guide about beginner investing"' },
      { name: 'Semantic search over catalog', status: 'Planned', surface: 'Explore, search API', notes: 'Beyond keyword match' },
      { name: 'Improved default sort and empty states', status: 'Planned (H1 P1)', surface: 'Explore', notes: 'Reduce bounce on failed queries' },
    ],
  },
  {
    id: 'in-hub',
    title: 'In-hub findability',
    initiatives: [
      { name: 'Search within hub libraries', status: 'Planned', surface: 'Hub', notes: 'Large resource libraries need internal search' },
      { name: 'Resource organization and tags', status: 'Planned', surface: 'Hub', notes: 'Structure aids browse and search' },
    ],
  },
  {
    id: 'recommendations',
    title: 'Recommendations',
    initiatives: [
      { name: 'Related hubs', status: 'Planned (H2)', surface: 'Hub, Explore', notes: 'Cross-sell + discovery' },
      { name: 'Personalized browse (logged-in)', status: 'Planned (H2+)', surface: 'Explore', notes: 'Based on views, purchases, follows' },
      { name: 'Following → buyer notifications', status: 'Planned', surface: 'Profile, email', notes: 'Retention loop for creators' },
    ],
  },
]

export const PILLAR_DEPENDENCIES = [
  'Security fixes unblock trust features and marketplace scale (payments, access control).',
  'Trust signals improve Algorithm quality — recommendations need reliable catalog metadata.',
  'Algorithm success depends on trustworthy hubs — bad listings poison search and recommendations.',
]

export const EXECUTION_LINKS = [
  { path: 'https://linear.app/kahana', title: 'Linear', external: true, description: 'Active backlog — features, bugs, security remediation' },
  { path: '/operating-system', title: 'Operating System', description: 'How work enters Linear; Slack norms' },
  { path: '/sprints', title: 'Product Lifecycle', description: 'Feedback → backlog flow' },
  { path: '/kahana#roadmap-snapshot', title: 'Kahana business roadmap', description: 'H1–H3 horizons on the platform page' },
]
