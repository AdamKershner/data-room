# SOC Compliance Factsheet

Information gathered from the codebase, documentation, and internal input for SOC compliance document drafts. Use this to populate auditor questionnaires and policy drafts.

**Last updated:** March 2026

---

## Executive Summary

| Field | Value |
|-------|-------|
| **Purpose** | Pre-audit readiness factsheet for SOC 2 Type 2 preparation |
| **Company** | Kahana (AI browser, B2B SaaS). Pre-revenue, small team |
| **Scope** | Oasis product, Supabase backend, AWS infrastructure, internal tools |
| **Status** | Early preparation; no formal audit engagement yet |
| **What we need from you** | Prioritized recommendations, gap severity assessment, and guidance on documentation requirements |

---

## Legend

| Term | Definition |
|------|------------|
| **Current state** | How we operate today; may or may not be formally documented |
| **Gap** | Known deficiency vs. SOC2 expectations; needs remediation |
| **Planned** | Intended improvement; not yet implemented |
| **Documented** | Formal policy, procedure, or control document exists (Y/N) |
| **Auditor Notes** | Space for auditor feedback, recommendations, or follow-up questions |

---

## Control Mapping (Trust Service Criteria)

| TSC / Control | Our Implementation | Status | Evidence |
|---------------|-------------------|--------|----------|
| **CC6.1** Access Control | Supabase Auth, AWS IAM, Google Workspace (1 user), AWS Secrets Manager | Partial | User list (manual); no access review logs |
| **CC6.1** Access Reviews | Not conducted quarterly; no documented sign-off | Gap | None |
| **CC6.1** Internal IdP | Google Workspace for 1 person only; no org-wide IdP | Partial | Documented deferral needed |
| **CC7.1** Monitoring | Supabase logs, Mixpanel; no dedicated SIEM | Partial | Supabase dashboard; no formal retention policy |
| **CC8.1** Change Management | GitHub, CI/CD, Tally→Slack→Sheets→GitHub workflows | Current state | PR history, workflow runs; not formally documented |
| **CC9.x** Risk Assessment | Not yet conducted | Gap | None |
| **Availability** | Supabase, AWS; no formal SLA or DR testing | Partial | Vendor SLAs |
| **Confidentiality** | Encryption at rest (Supabase), TLS in transit | Current state | Supabase documentation |
| **BC/DR** Backups | Free Plan = no backups; Pro Plan = 7-day retention | Gap | None on Free Plan |

---

## Gap Summary (Prioritized for Auditor Review)

| Priority | Gap | Impact | Remediation Path | Est. Effort |
|----------|-----|--------|------------------|-------------|
| **P0** | Access reviews not conducted | CC6.1 failure | Implement quarterly review + sign-off | Medium |
| **P0** | Supabase Free Plan = no backups | BC/DR failure | Upgrade to Pro ($25/mo) or custom `db dump` | Low ($) |
| **P1** | No centralized IdP | CC6.1 partial | Document deferral; plan for growth | Low |
| **P1** | No dedicated logging/SIEM | CC7.1 partial | Document current state or adopt Datadog | Medium |
| **P2** | Change management not formally documented | CC8.1 | Write policy; link to existing process | Low |
| **P2** | No risk assessment | CC9.x | Conduct and document annual risk assessment | Medium |

---

## Where We Need Your Guidance

1. **Access reviews (no quarterly cadence)** – What’s the minimum viable process for a small team? Template or tool recommendations?
2. **Internal IdP (Google Workspace for 1 person)** – When does a centralized IdP become required? Acceptable to document “deferred”?
3. **Logging (Supabase tables only)** – Is this sufficient for Type 2, or should we adopt Datadog/other before audit?
4. **Backups (Free Plan = no backups)** – Pro upgrade vs. custom `db dump` – which path is audit-friendly?
5. **Change management (Tally + Slack + Sheets)** – How formally does this need to be documented for auditor acceptance?

---

## Evidence Inventory

| Control Area | Evidence We Have | Evidence We Need |
|--------------|------------------|------------------|
| Access Control | User list (manual) | Access review logs, offboarding checklist |
| Change Management | GitHub history, CI logs, workflow runs | Formal change policy, approval evidence |
| Backups | Supabase dashboard (if Pro) | Backup verification logs, restore test |
| Logging | Supabase logs, Mixpanel | Retention policy, SIEM (if required) |
| Vendor Management | Vendor list | DPAs, SOC2 reports from critical vendors |
| Risk Assessment | None | Risk register, assessment documentation |

---

## Proposed Action Plan (Seeking Auditor Input)

| Phase | Actions | Timeline |
|-------|---------|----------|
| **Immediate** | Upgrade Supabase to Pro (backups); draft Access Review process | 2–4 weeks |
| **Short-term** | Document Change Management, Access Control policies | 4–8 weeks |
| **Medium-term** | Evaluate IdP adoption; logging tool decision | 3–6 months |
| **Pre-audit** | Evidence collection period (6–12 months for Type 2) | TBD |

---

## 1. Production Hosting

| Item | Status | Documented | Details | Auditor Notes |
|------|--------|------------|---------|---------------|
| **Cloud provider** | Current state | N | AWS (Lambda, Terraform, CI/CD, build/versioning); Supabase for backend | |
| **AWS region(s)** | Current state | N | **US East (N. Virginia)** – us-east-1 | |

---

## 2. Auth / SSO

| Item | Status | Documented | Details | Auditor Notes |
|------|--------|------------|---------|---------------|
| **End-user auth** | Current state | N | Provided by Supabase Auth, with options for Google, Microsoft (Azure), Apple sign-in, and more. | |
| **Enterprise auth** | Current state | N | Okta plugin for enterprise browser (pre-installed, non-removable) | |
| **Backend auth** | Current state | N | Supabase for auth and API usage | |
| **Internal IdP** | Current state | N | **No designated IdP for all employees yet.** Google Workspace for 1 person only (Adam, adam@kahana.co). Okta and Azure have been trialed but not adopted due to cost. | |
| **Secrets / key management** | Current state | N | Secrets stored in AWS Secrets Manager. Keys are accessed securely via Lambda functions. | |

---

## 3. Primary Data Stores

| Item | Status | Documented | Details | Auditor Notes |
|------|--------|------------|---------|---------------|
| **Primary database** | Current state | N | Supabase (Postgres) – analytics, UTM tracking, HITL feedback, Mixpanel integration | |
| **Secondary database / redundancy** | Current state | N | **None.** There is no secondary database or redundancy. | |
| **Encryption** | Current state | N | Supabase provides encryption at rest; TLS in transit per SOC2 checklist | |
| **Backup storage** | Current state | N | Supabase stores daily backups in regionally replicated AWS S3 (same region as database, e.g., us-east-1). **Note: Free Plan does not include project backups.** Pro Plan ($25/mo) includes 7-day scheduled backups. Retention by plan: 7 days (Pro), 14 days (Team), 30 days (Enterprise). Storage objects (Supabase Storage/S3 buckets) are not included in database backups and must be managed separately. Custom backups possible via `supabase db dump`. | |

---

## 4. Logging / Monitoring

| Item | Status | Documented | Details | Auditor Notes |
|------|--------|------------|---------|---------------|
| **Analytics** | Current state | N | Mixpanel | |
| **Backend** | Current state | N | Supabase | |
| **Logging tools** | Current state | N | **No dedicated logging tools.** Events are logged directly in Supabase tables. [Datadog](https://www.datadoghq.com/pricing/) is under consideration (Free tier: 1-day metric retention, up to 5 hosts). | |
| **Log retention** | Current state | N | Supabase Pro Plan includes 7-day log retention. Add Log Drains available at additional cost ($60/drain/project). | |

---

## 5. Change Management

| Item | Status | Documented | Details | Auditor Notes |
|------|--------|------------|---------|---------------|
| **Code control** | Current state | N | GitHub – PRs, reviews, merge history, CI. See [OTA & Updates Guide](/ota-guide) and [Tester Distribution & OTA Update Flow](https://docs.google.com/document/d/122UjwnfNoHebaF4_aww3P87HSjk7Rb_fsLxn3gZJf64/edit?tab=t.0#heading=h.a1q9qvq0777v) (onboarding auth changes, automatic updates pipeline). | |
| **Ticketing** | Current state | N | **Tally.so feedback forms** → Slack and Google Sheets. Sprints are created from feedback using Cursor and GitHub. Releases are generated and managed via **GitHub workflows** in a CI pipeline. No Jira/Linear. | |

---

## 6. Access Reviews

| Item | Status | Documented | Details | Auditor Notes |
|------|--------|------------|---------|---------------|
| **Policy** | Current state | N | SOC2 checklist says “Quarterly (or more frequent) review of who has access to what; documented sign-off” | |
| **Actual cadence** | Current state | N | **Access reviews are not conducted quarterly.** Process is not documented. | |
| **Evidence** | Gap | N | No access review logs with sign-off | |

---

## 7. Supabase Plan Reference (Pro)

| Feature | Pro Plan |
|---------|----------|
| Price | $25 / month base |
| MAU | 100,000 included, then $0.00325 per MAU |
| Disk | 8 GB included, then $0.125 per GB |
| Egress | 250 GB included, then $0.09 per GB |
| File storage | 100 GB included, then $0.021 per GB |
| Backups | Daily backups stored for 7 days |
| Log retention | 7 days |
| Log Drains | Additional $60 per drain, per project |

---

## 8. Other Relevant Context

- **Vendors:** Supabase, AWS, Mixpanel, Stripe, Google Analytics, Looker
- **AI vendors:** Google Gemini, Deepgram (DPA considerations per SOC2 checklist)
- **Enterprise:** Okta SSO for enterprise browser; DPAs for enterprise customers

---

## 9. Semantic Search & SOC2 Considerations

### Current Implementation

- **No paid API for search.** Semantic search is integrated as a tool (similar to opening/closing tabs), with Google Gemini acting as the supervisor for tool routing and final output.
- **Local embedding model:** `all-mini-L6-v2` loaded directly in the browser.
- **Local vectorDB:** Orama (in-browser).
- **Cost:** Zero for the search step; no cloud LLM required for embeddings or vector search.

### SOC2-Relevant Aspects

| Aspect | Status | Documented | Details | Auditor Notes |
|--------|--------|------------|---------|---------------|
| **Data locality** | Current state | N | Embeddings and vector search run locally in the browser; no user data sent to a third-party search API. | |
| **Third-party search vendors** | Current state | N | None for semantic search. Reduces vendor risk and DPA scope. | |
| **Local LLM for summarization** | Planned | N | Considering Ollama (open-source) for web page summarization to improve search quality. No cost; keeps processing on-device. | |
| **History retention** | Planned | N | Originally planned: flat 30-day window (or user choice: 10, 15, or 30 days). Tiered retention policy under consideration for the summarization layer; storage impact to be evaluated. | |

---

## Checklist: What You Still Need to Address

Use this checklist before finalizing SOC compliance documents and for audit readiness.

### Critical Gaps (SOC auditors will ask)

- [ ] **Supabase backups** – Free Plan has no backups. Consider upgrading to Pro ($25/mo) for 7-day backups, or implement custom `db dump` to your own storage.
- [ ] **Access reviews** – Implement and document a cadence (quarterly or alternative). Create access review logs with sign-off.
- [ ] **Access review policy alignment** – Update policy to reflect actual cadence, or change practice to match “quarterly” if that’s the target.

### Recommended Improvements

- [ ] **Logging/monitoring** – If adopting [Datadog](https://www.datadoghq.com/pricing/), document tool, retention, and scope. If staying with Supabase tables only, document that as the current approach and any retention limits.
- [ ] **Internal IdP** – Document the decision to defer Okta/Azure. Consider timeline for adopting a centralized IdP as team grows.
### Documentation to Create/Update

- [ ] **Change Management Policy** – Document the flow: Tally.so → Slack/Sheets → Cursor/GitHub sprints → GitHub workflows/CI.
- [ ] **Access Control Policy** – Document current state (Google Workspace for Adam only; no org-wide IdP) and access review requirements.
- [ ] **Backup & DR Policy** – Document Supabase backup status (Free vs Pro), retention, and any custom backup procedures.

---

*Source: Compiled from data-room codebase, SOC2_TYPE2_COMPLIANCE_CHECKLIST.md, WeeklyReports, time logs, Sprints, and internal input (March 2026).*
