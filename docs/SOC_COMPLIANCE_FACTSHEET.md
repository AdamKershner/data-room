# SOC Compliance Factsheet

Information gathered from the codebase, documentation, and internal input for SOC compliance document drafts. Use this to populate auditor questionnaires and policy drafts.

**Last updated:** March 2026

---

## 1. Production Hosting

| Item | Status | Details |
|------|--------|---------|
| **Cloud provider** | Documented | AWS (Lambda, Terraform, CI/CD, build/versioning); Supabase for backend |
| **AWS region(s)** | Documented | **US East (N. Virginia)** – us-east-1 |

---

## 2. Auth / SSO

| Item | Status | Details |
|------|--------|---------|
| **End-user auth** | Documented | Google, Microsoft, and Apple sign-in |
| **Enterprise auth** | Documented | Okta plugin for enterprise browser (pre-installed, non-removable) |
| **Backend auth** | Documented | Supabase for auth and API usage |
| **Internal IdP** | Documented | **No designated IdP for all employees yet.** Google Workspace for 1 person only (Adam, adam@kahana.co). Okta and Azure have been trialed but not adopted due to cost. |

---

## 3. Primary Data Stores

| Item | Status | Details |
|------|--------|---------|
| **Primary database** | Documented | Supabase (Postgres) – analytics, UTM tracking, HITL feedback, Mixpanel integration |
| **Secondary store** | Documented | DynamoDB – auth/API count (mentioned in time logs with Terraform) |
| **Encryption** | Documented | Supabase provides encryption at rest; TLS in transit per SOC2 checklist |
| **Backup storage** | Documented | Supabase stores daily backups in regionally replicated AWS S3 (same region as database, e.g., us-east-1). **Note: Free Plan does not include project backups.** Pro Plan ($25/mo) includes 7-day scheduled backups. Retention by plan: 7 days (Pro), 14 days (Team), 30 days (Enterprise). Storage objects (Supabase Storage/S3 buckets) are not included in database backups and must be managed separately. Custom backups possible via `supabase db dump`. |

---

## 4. Logging / Monitoring

| Item | Status | Details |
|------|--------|---------|
| **Analytics** | Documented | Mixpanel |
| **Backend** | Documented | Supabase |
| **Logging tools** | Documented | **No dedicated logging tools.** Events are logged directly in Supabase tables. Datadog is under consideration (Free tier: 1-day metric retention, up to 5 hosts). |
| **Log retention** | Documented | Supabase Pro Plan includes 7-day log retention. Add Log Drains available at additional cost ($60/drain/project). |

---

## 5. Change Management

| Item | Status | Details |
|------|--------|---------|
| **Code control** | Documented | GitHub – PRs, reviews, merge history, CI |
| **Ticketing** | Documented | **Tally.so feedback forms** → Slack and Google Sheets. Sprints are created from feedback using Cursor and GitHub. Releases are generated and managed via **GitHub workflows** in a CI pipeline. No Jira/Linear. |

---

## 6. Access Reviews

| Item | Status | Details |
|------|--------|---------|
| **Policy** | Documented | SOC2 checklist says “Quarterly (or more frequent) review of who has access to what; documented sign-off” |
| **Actual cadence** | Documented | **Access reviews are not conducted quarterly.** Process is not documented. |
| **Evidence** | Gap | No access review logs with sign-off |

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
- **AI vendors:** OpenAI, Anthropic (mentioned in SOC2 checklist for DPA considerations)
- **Enterprise:** Okta SSO for enterprise browser; DPAs for enterprise customers

---

## Checklist: What You Still Need to Address

Use this checklist before finalizing SOC compliance documents and for audit readiness.

### Critical Gaps (SOC auditors will ask)

- [ ] **Supabase backups** – Free Plan has no backups. Consider upgrading to Pro ($25/mo) for 7-day backups, or implement custom `db dump` to your own storage.
- [ ] **Access reviews** – Implement and document a cadence (quarterly or alternative). Create access review logs with sign-off.
- [ ] **Access review policy alignment** – Update policy to reflect actual cadence, or change practice to match “quarterly” if that’s the target.

### Recommended Improvements

- [ ] **Logging/monitoring** – If adopting Datadog, document tool, retention, and scope. If staying with Supabase tables only, document that as the current approach and any retention limits.
- [ ] **Internal IdP** – Document the decision to defer Okta/Azure. Consider timeline for adopting a centralized IdP as team grows.
- [ ] **DynamoDB backups** – Confirm backup strategy for DynamoDB (AWS backup, point-in-time recovery, etc.) and document.

### Documentation to Create/Update

- [ ] **Change Management Policy** – Document the flow: Tally.so → Slack/Sheets → Cursor/GitHub sprints → GitHub workflows/CI.
- [ ] **Access Control Policy** – Document current state (Google Workspace for Adam only; no org-wide IdP) and access review requirements.
- [ ] **Backup & DR Policy** – Document Supabase backup status (Free vs Pro), retention, and any custom backup procedures.

---

*Source: Compiled from data-room codebase, SOC2_TYPE2_COMPLIANCE_CHECKLIST.md, WeeklyReports, time logs, Sprints, and internal input (March 2026).*
