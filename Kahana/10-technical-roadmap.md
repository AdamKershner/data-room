# 10 — Technical Roadmap (Security, Trust, Algorithm)

[← Back to index](./README.md) · Prev: [09 — Risks](./09-risks-and-mitigations.md)

**Internal onboarding doc.** Gives new and existing team members a clear picture of what Kahana is focusing on technically in the next wave. Execution lives in [Linear](https://linear.app/kahana); business horizons live in [07 — Product roadmap](./07-product-roadmap.md).

---

## Executive summary

Kahana aspires to be Wan Shi Tong's Library — a trusted place to discover curated human knowledge. The next wave of technical work clusters around three pillars:

| Pillar | North-star question |
|--------|---------------------|
| **Security** | Can users, creators, and buyers trust that the platform protects data, payments, and access? |
| **Trust** | Can buyers trust creators, hubs, and marketplace quality — and can creators trust the platform? |
| **Algorithm** | Can someone find the knowledge they have in mind — across Explore, hubs, and resources? |

**Horizons vs pillars:** [07 — Product roadmap](./07-product-roadmap.md) describes *what* we ship over H1–H3. This doc describes *how engineering focuses now* — grouped by pillar, not by quarter alone.

---

## How the pillars interact

- **Security** is foundational — payment integrity, access control, and content safety unblock trust features and marketplace scale.
- **Trust** improves catalog quality and conversion — reviews, verification, and moderation make Algorithm recommendations meaningful.
- **Algorithm** delivers the library vision — if buyers cannot find what they have in mind, discovery fails regardless of catalog size.

Cross-dependencies: better search indexing requires trustworthy hub metadata; monetization fixes (Security) must ship before expanding paid trust signals.

---

## Security

Source: [Kahana LLC - Security Audit Report](../Kahana%20LLC%20-%20Security%20Audit%20Report.pdf) (2026-07-01). Scope: `kahana-web` (frontend) · `firebase-functions` (backend) · production `app.kahana.io`.

**For engineers:** full finding detail and reproduction context are in the PDF. This section lists remediation themes and priority bands only.

### P0 — Do today

| # | Theme | Findings | Action |
|---|-------|----------|--------|
| 1 | Secrets rotation | WB-01 | Rotate Stripe, Mailgun (current + historical), Algolia server keys committed to git |
| 2 | API perimeter | BB-01 | Restrict CORS to `kahana.io`, `kahana.co`, `localhost` on all API servers |
| 3 | Firestore write guards | WB-02, WB-03 | Add `affectedKeys()` field guard to workspace write rules — block monetization and age-gate bypass |
| 4 | Storage IDOR | WB-04 | Require `request.auth.uid == userId` on all storage create rules |

### P1 — This week

| # | Theme | Findings | Action |
|---|-------|----------|--------|
| 5 | Secrets hygiene | WB-01 | Purge secrets from git history (`git filter-repo`, force-push) |
| 6 | Auth on reads | WB-06 | Require `request.auth != null` in `readAccess()` and `readHubContent()` |
| 7 | Mass assignment | WB-09 | Replace `{...req.body}` with explicit allowlist in `patchUser` |
| 8 | Payment verification | WB-10 | Verify Stripe `subscription.status === 'active'` before granting PAID role |
| 9 | Ownership checks | WB-08, WB-12 | Add ownership checks to `cancelHubSubscription`, invite cancel/reminder |
| 10 | Subscriber privacy | WB-07 | Scope sharing subcollection read to own doc only |
| 11 | Admin surface | BB-02 | Add `isKahanaAdmin` role gate to `/internal/explore-featured` route |

### P2 — Next sprint

| # | Theme | Findings | Action |
|---|-------|----------|--------|
| 12 | Per-workspace storage ACLs | WB-05 | Per-workspace role checks in storage rules |
| 13 | Monetization gate | WB-19 | Remove `writeAccess()` short-circuit from storage monetized read |
| 14 | Logging endpoint | WB-11 | Add authenticated middleware to logging endpoint |
| 15 | Payment binding | WB-13, WB-14 | Fetch payment data from Stripe server-side; bind payment intent to buyer UID |
| 16 | Rate limiting | BB-08 | Replace in-memory rate limiter with Firestore counters or Redis |
| 17 | Webhook fail-closed | WB-15 | Error/alert when Stripe webhook secret missing — do not fail-open |

### P3 — Backlog

| # | Theme | Findings | Action |
|---|-------|----------|--------|
| 18 | Client content security | BB-03, BB-04, BB-07 | Tighten DOMPurify (`ALLOWED_TAGS` whitelist); iframe sandbox without `allow-same-origin` |
| 19 | Redirect validation | BB-05 | Validate `hubId` param (`/^[a-zA-Z0-9_-]+$/`) before post-login redirect |
| 20 | Storage limits | WB-18 | Add content-type and size checks to storage write rules |
| 21 | Origin middleware | WB-16 | Anchor `verifiedOrigin` regex; add `authenticated` to user-data routes |
| 22 | Dependencies | Track B | Upgrade `url-parse`, `jsdom`; replace `mailgun-js` |

### Security theme summary

| Theme | Findings | Priority |
|-------|----------|----------|
| Secrets and config hygiene | WB-01 | P0 / P1 |
| API perimeter (CORS, origin, rate limits) | BB-01, BB-08, WB-16 | P0 / P2 / P3 |
| Firestore rules and authorization | WB-02/03/06/07/20 | P0 / P1 |
| Storage access and IDOR | WB-04/05/19, WB-18 | P0 / P2 / P3 |
| Payments and monetization integrity | WB-10/13/14/15, WB-19 | P1 / P2 |
| API mass assignment and logging | WB-09/11/12 | P1 / P2 |
| Client content security (XSS, sandbox, redirects) | BB-03/04/05/06/07/09 | P3 |
| Admin surface exposure | BB-02 | P1 |
| Dependencies | Track B dep vulns | P3 |

---

## Trust

Building trust in creators/experts, the marketplace, products, and information quality.

### Creator and expert credibility

| Initiative | Status | Surface | Notes |
|------------|--------|---------|-------|
| Stripe Identity verified badge | Shipped | Profile, paywall | Display on creator surfaces |
| Expand verification signals | Planned | Profile, Explore cards | Badges, tenure, sales volume |
| Creator onboarding standards | Planned | Hub creation | Clear terms, preview quality bar |

### Marketplace quality

| Initiative | Status | Surface | Notes |
|------------|--------|---------|-------|
| Reviews / ratings MVP | Planned (H1 P1) | Hub, Explore | Amazon-style trust signal |
| Explore indexing quality bar | Planned | Explore, backend | Editorial + automated gates |
| Featured / curated collections | Planned (H2) | Explore | Women-expert campaigns at scale |
| Social proof on cards | Partial | Explore | Views, badges |

### Product integrity

| Initiative | Status | Surface | Notes |
|------------|--------|---------|-------|
| Hub preview and merchandising | Planned (H1 P1) | Hub | Hero, description, preview conversion |
| Refund / dispute playbook | Planned (H1 P2) | Ops, legal | Creator + buyer confidence |
| Share + monetize discoverability | Planned (H1 P0) | Hub UX | [UX backlog](../hub-ux-investigation/prioritized-backlog.md) |
| Chargeback tracking by creator | Planned | Backend, ops | Suspend repeat offenders |

### Information integrity

| Initiative | Status | Surface | Notes |
|------------|--------|---------|-------|
| Adult content flags + age gate | Shipped | Explore, hub access | Ties to audit WB-03 hardening |
| Moderation queue for flagged hubs | Planned | Ops | Manual review SLA |
| Accurate hub metadata | Ongoing | Hub, Explore | Descriptions match delivered content |
| Reporting flow for buyers | Planned | Hub, support | Escalate to moderation |

---

## Algorithm

Making it easy to find the information you have in mind — the core of the Wan Shi Tong library vision.

### Explore discovery

| Initiative | Status | Surface | Notes |
|------------|--------|---------|-------|
| Search relevance (synonyms, tags, ranking) | Planned (H2) | Explore | Functional today; not semantic-optimized |
| Category landing pages | Planned (H1 P1) | Explore, SEO | Clearer browse + organic traffic |
| Creator search filter expansion | Planned (H2) | Explore | Find experts by niche |
| Algolia / index pipeline hygiene | Planned | Backend | Audit noted key rotation; verify permission scope |

### Intent and semantic discovery

| Initiative | Status | Surface | Notes |
|------------|--------|---------|-------|
| Natural-language / intent queries | Planned | Explore | "That guide about beginner investing" |
| Semantic search over catalog | Planned | Explore, search API | Beyond keyword match |
| Improved default sort and empty states | Planned (H1 P1) | Explore | Reduce bounce on failed queries |

### In-hub findability

| Initiative | Status | Surface | Notes |
|------------|--------|---------|-------|
| Search within hub libraries | Planned | Hub | Large resource libraries need internal search |
| Resource organization and tags | Planned | Hub | Structure aids both browse and search |

### Recommendations

| Initiative | Status | Surface | Notes |
|------------|--------|---------|-------|
| Related hubs | Planned (H2) | Hub, Explore | Cross-sell + discovery |
| Personalized browse (logged-in) | Planned (H2+) | Explore | Based on views, purchases, follows |
| Following → buyer notifications | Planned | Profile, email | Retention loop for creators |

---

## Execution

| Where | Purpose |
|-------|---------|
| [Linear](https://linear.app/kahana) | Active backlog — features, bugs, security remediation issues |
| [Operating System](../financial-dashboard/src/pages/OperatingSystem.jsx) | How work enters Linear; Slack norms |
| [Product Lifecycle / Sprints](../financial-dashboard/src/pages/Sprints.jsx) | Feedback → backlog flow |
| [07 — Product roadmap](./07-product-roadmap.md) | H1–H3 business horizons |
| [08 — Team operating model](./08-team-operating-model.md) | Cadence, KPIs, decision framework |

---

## Related documents

- [Kahana LLC - Security Audit Report](../Kahana%20LLC%20-%20Security%20Audit%20Report.pdf) — full findings (engineers only)
- [02 — Product today](./02-product-today.md) — shipped ground truth
- [07 — Product roadmap](./07-product-roadmap.md) — business horizons
- [09 — Risks and mitigations](./09-risks-and-mitigations.md) — risk register
