# SOC 2 Type 1 Internal Checklist – Kahana

**Purpose:** Internal tracking for SOC 2 Type 1 audit readiness. Single place to see what has been done and what remains. Review and agree with manager.  
**Owner:** [Name]  
**Approved By:** CEO  
**Effective Date:** March 2026  
**Last Updated:** March 2026  
**Manager sign-off:** _____________ Date: _____

---

## Manager notes

- **Policies:** Policies should be moved to Google Docs when possible. For now, all policy and compliance documents in this **SOC Documents** folder are the source of truth. Update this checklist when policies move to Google Docs.
- **SOC 2 Type 1** = point-in-time audit (auditor checks that controls are *in place* at a point in time). Type II would require evidence over 6–12 months.
- **Checklist style:** Same as Employee Onboarding Checklist – use **Done (Y/N)** and **Notes** to track progress. Every item is here so you can see what has been completed.

---

## 1. Manager decisions (must be answered for audit)

| # | Decision | Answer / Name | Owner | Done (Y/N) | Notes |
|---|----------|---------------|-------|------------|-------|
| 1 | **Second signatory** – Who signs Management Assertion with CEO? (CFO, COO, or CTO if no CFO) | | Manager | | |
| 2 | **CTO / Security Lead** – Who is the technical contact for the auditor? | | Manager | | |
| 3 | **Supabase plan** – Free or Pro? (Upgrade to Pro if Free – required for backups) | | Manager / Tech | | |
| 4 | **RTO target** – Max acceptable downtime (e.g., 8 hours) | | Manager | | |
| 5 | **RPO target** – Max acceptable data loss (e.g., 24 hours) | | Manager | | |

---

## 2. Gaps and how to achieve them (SOC 2 Type 1)

Each gap from the Documentation Review is listed with the action needed. Check off when done.

### P0 – Access reviews (quarterly)

| Step | How to achieve | Owner | Done (Y/N) | Notes |
|------|----------------|-------|------------|-------|
| 1 | Create access list template: Person, System (Supabase, Stripe, AWS, GitHub, etc.), Access Level, Last Reviewed | | | |
| 2 | Complete first access list for all production/financial systems | | | |
| 3 | Manager (or Security Lead) reviews and signs off: "Access review completed [date]. Access is appropriate." | | | |
| 4 | Save signed access list + sign-off in Evidence(Type II)/Access-Review-Logs (or agreed location) | | | |
| 5 | Schedule and complete quarterly access reviews (Q1, Q2, Q3, Q4) with sign-off each time | | | |

**Why:** CC6.1 – auditor expects proof that you regularly verify who has access and remove access when people leave.

---

### P0 – Backups (Supabase)

| Step | How to achieve | Owner | Done (Y/N) | Notes |
|------|----------------|-------|------------|-------|
| 1 | Confirm current Supabase plan (Free or Pro) | Tech | | |
| 2 | If Free: upgrade to Pro (or implement documented manual backup process, e.g. supabase db dump on schedule) | Tech | | |
| 3 | Document where backups are stored and retention (e.g. Pro = 7-day daily in S3) in Backup-and-Restoration-Policy | | | |
| 4 | Run one restore test and document result; save in Evidence(Type II)/Backup-Test-Results | Tech | | |

**Why:** BC/DR – auditor needs proof that financial/billing data can be recovered. Free tier has no automatic backups.

---

### P1 – Org-wide IdP (Identity Provider)

| Step | How to achieve | Owner | Done (Y/N) | Notes |
|------|----------------|-------|------------|-------|
| 1 | Ensure Access-Control-Policy documents current state: Google Workspace for Adam only; org-wide IdP deferred | | | |
| 2 | Add rationale and plan (e.g. "Implement when team reaches X people") if not already in policy | | | |

**Why:** CC6.1 – for small team, documented deferral is acceptable. Auditor sees you’ve considered it.

---

### P1 – Logging / SIEM

| Step | How to achieve | Owner | Done (Y/N) | Notes |
|------|----------------|-------|------------|-------|
| 1 | Ensure Logging-&-Monitoring-Policy documents current state: Supabase logs, Mixpanel; 7-day retention on Pro | | | |
| 2 | Document retention and where logs live; add to policy if missing | | | |
| 3 | (Optional) Evaluate Datadog or similar; document decision and timeline | | | |

**Why:** CC7.1 – auditor wants to see logging and retention documented. SIEM improves but is not mandatory for Type 1 if current state is documented.

---

### P2 – Change management

| Step | How to achieve | Owner | Done (Y/N) | Notes |
|------|----------------|-------|------------|-------|
| 1 | Confirm Change-Management-Policy documents flow: GitHub PRs, Tally→Slack→Sheets→GitHub, CI/CD; no Jira/Linear | | | |
| 2 | Export or document where to get evidence: GitHub PR history, workflow runs, deployment logs | | | |

**Why:** CC8.1 – policy is updated; auditor will want to see that changes are approved and tracked.

---

### P2 – Risk assessment

| Step | How to achieve | Owner | Done (Y/N) | Notes |
|------|----------------|-------|------------|-------|
| 1 | Conduct formal risk assessment: list risks (e.g. data breach, vendor outage, data loss), likelihood, impact, mitigations | Manager / Security | | |
| 2 | Populate Risk-Assessment-Report and Information-Security-Risk-Register in Risk-&-Compliance folder | | | |
| 3 | Update Risk-Treatment-Plan with owners and actions | | | |
| 4 | Manager approves and dates the risk assessment | Manager | | |

**Why:** CC9.x – auditor expects a documented risk assessment with management approval.

---

## 3. Management assertion and signatories

| Step | How to achieve | Owner | Done (Y/N) | Notes |
|------|----------------|-------|------------|-------|
| 1 | Confirm CEO (Adam Kershner) and second signatory (from Section 1) | Manager | | |
| 2 | Update Management-Assertion-Letter in Managment-documents with both names and audit period | | | |
| 3 | Both sign and date the Management Assertion when auditor provides final version | Manager | | |

**Why:** Core requirement for SOC 2 – management attests that controls are in place.

---

## 4. Policies and documentation status

**Policy location:** Documents in this **SOC Documents** folder are the current source. When policies move to Google Docs, update links here.

Use this to see what has been done. Mark **Done (Y/N)** when the document is reviewed and Kahana-specific (no placeholders that need filling).

### Core policies (Ready for Review per Documentation Review)

| Document | Location (folder) | Done (Y/N) | Notes |
|----------|-------------------|------------|-------|
| System-Description-Document | Managment-documents | | |
| Management-Assertion-Letter | Managment-documents | | Needs signatory names |
| Organization-Chart | Managment-documents | | Add CTO/Security Lead when decided |
| Access-Control-Policy | Security-documents | | |
| Backup-and-Restoration-Policy | Operational-Policies | | Add RTO/RPO when decided |
| Logging-&-Monitoring-Policy | Security-documents | | |
| Change-Management-Policy | Operational-Policies | | |
| Information-Security-Policy | Security-documents | | |
| Password-and-Authentication-Policy | Security-documents | | |
| Encryption-Policy | Security-documents | | |
| Subservice-Organization | Vendor-and-Third-Party | | |
| Compliance-Program-Overview | Risk-&-Compliance | | |
| Disaster-Recovery-Plan | Operational-Policies | | |
| Business-Continuity-Plan | Operational-Policies | | |
| Incident-Response-Plan | Operational-Policies | | |
| SDLC-Policy | Development-Policies | | |
| Code-Review-Procedures | Development-Policies | | |
| Data-Retention-and-Destruction-Policy | Operational-Policies | | |
| Vendor-Management-Policy | Vendor-and-Third-Party | | |
| Remote-Access-Policy | Security-documents | | |
| Controls-Matrix-CC1-CC9 | Risk-&-Compliance | | |

### Risk documents (partially complete)

| Document | Location | Done (Y/N) | Notes |
|----------|----------|------------|-------|
| Risk-Assessment-Report | Risk-&-Compliance | | Conduct assessment and populate |
| Information-Security-Risk-Register | Risk-&-Compliance | | |
| Risk-Treatment-Plan | Risk-&-Compliance | | |

### Still template / need review

| Document | Location | Done (Y/N) | Notes |
|----------|----------|------------|-------|
| Data-Classification-Policy | Operational-Policies | | Add Oasis-specific examples |
| Vulnerability-Management-Policy | Development-Policies | | Add scanning cadence, tools |
| Workstation-Security-Policy | Security-documents | | Verify device requirements |
| Physical-Security-Policy | Security-documents | | Add office location if applicable |
| Acceptable-Use-Policy | Security-documents / Additonal-Documentation | | Review scope |
| Vendor-Risk-Assessment-Template | Vendor-and-Third-Party | | Use for critical vendors |

---

## 5. One-time setup tasks

| # | Task | Owner | Done (Y/N) | Notes |
|---|------|-------|------------|-------|
| 1 | Add RTO/RPO to Backup-and-Restoration-Policy and Business-Continuity-Plan | | | |
| 2 | Add CTO / Security Lead to System-Description-Document and Organization-Chart | | | |
| 3 | Confirm Supabase plan; upgrade to Pro if currently Free | Tech | | |
| 4 | Run one backup restore test; document in Evidence(Type II)/Backup-Test-Results | Tech | | |
| 5 | Complete risk assessment and update Risk-Assessment-Report, Risk-Register, Risk-Treatment-Plan | | | |
| 6 | Collect DPAs and SOC 2 reports from critical vendors (Supabase, AWS, Stripe, etc.); store in Vendor-and-Third-Party or Evidence | | | |

---

## 6. Recurring tasks

### Access review (quarterly)

| Quarter | Access list updated | Manager sign-off | Done (Y/N) | Notes |
|---------|---------------------|------------------|------------|-------|
| Q1 _____ | | | | |
| Q2 _____ | | | | |
| Q3 _____ | | | | |
| Q4 _____ | | | | |

### Risk assessment (annual)

| Year | Conducted | Manager approval | Done (Y/N) | Notes |
|------|-----------|------------------|------------|-------|
| _____ | | | | |

---

## 7. Evidence to collect (for auditor – SOC 2 Type 1)

| Evidence | Where to get it | Done (Y/N) | Notes |
|----------|-----------------|------------|-------|
| Access list + quarterly sign-offs | Evidence(Type II)/Access-Review-Logs or agreed location | | |
| Change management flow (documented) | Operational-Policies/Change-Management-Policy | | |
| GitHub PR / deployment logs | GitHub | | |
| Risk Assessment + approval | Risk-&-Compliance | | |
| Backup/restore test record | Evidence(Type II)/Backup-Test-Results | | |
| Management Assertion (signed) | Managment-documents | | |
| RTO/RPO in policy | Backup-and-Restoration-Policy, Business-Continuity-Plan | | |
| Onboarding checklist (completed for hires) | HR-&-Personnel/Employee-Onboarding-Checklist | | |
| Offboarding checklist (when applicable) | HR-&-Personnel/Employee-Offboarding-Checklist | | |

---

## 8. Manager sign-off

| Step | Done (Y/N) | Notes |
|------|------------|-------|
| I have reviewed this checklist | | |
| I have completed the decisions in Section 1 | | |
| I will provide sign-off for quarterly access reviews | | |
| I will sign the Management Assertion when ready | | |

**Manager:** _________________  **Date:** _______

---

*Policies: Move to Google Docs when ready; until then, SOC Documents folder is the source. Update this checklist when locations change.*
