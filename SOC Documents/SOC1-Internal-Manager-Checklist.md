# SOC 1 Internal Manager Checklist

**Purpose:** Internal tracking for SOC 1 audit readiness. Review and agree with manager.  
**Last updated:** March 2026  
**Owner:** [Name]  
**Manager sign-off:** _____________ Date: _____

---

## 1. Decisions (Manager to confirm)

| # | Item | Decision / Answer | Owner | Status |
|---|------|------------------|-------|--------|
| 1 | **Second signatory** – Who signs Management Assertion with CEO? (CFO, COO, CTO if no CFO) | | Manager | ☐ |
| 2 | **CTO / Security Lead** – Who is the technical contact for the auditor? | | Manager | ☐ |
| 3 | **Supabase plan** – Free or Pro? Upgrade to Pro if Free (needed for backups) | | Manager / Tech | ☐ |
| 4 | **RTO target** – Max acceptable downtime (e.g., 8 hours) | | Manager | ☐ |
| 5 | **RPO target** – Max acceptable data loss (e.g., 24 hours) | | Manager | ☐ |

---

## 2. One-time setup tasks

| # | Task | Owner | Target Date | Done |
|---|------|-------|-------------|------|
| 1 | Create access list template (Person, System, Access Level, Last Reviewed) | | | ☐ |
| 2 | Document change management flow (GitHub PR → approve → deploy) | | | ☐ |
| 3 | Update Management Assertion with signatory names | | | ☐ |
| 4 | Add CTO / Security Lead to System Description & Org Chart | | | ☐ |
| 5 | Add RTO/RPO to Backup Policy and BC/DR Policy | | | ☐ |
| 6 | Complete Risk Assessment – list risks, mitigations, get manager approval | | | ☐ |
| 7 | Confirm Supabase plan – upgrade to Pro if needed | | | ☐ |
| 8 | Run one restore test (if Pro) – document result | | | ☐ |

---

## 3. Recurring tasks

### Access review (quarterly)

| Quarter | Access list updated | Manager sign-off | Done |
|---------|---------------------|------------------|------|
| Q1 [year] | | | ☐ |
| Q2 [year] | | | ☐ |
| Q3 [year] | | | ☐ |
| Q4 [year] | | | ☐ |

### Risk assessment (annual)

| Year | Conducted | Manager approval | Done |
|------|-----------|------------------|------|
| [year] | | | ☐ |

---

## 4. Evidence to collect (for auditor)

| Evidence | Where to get it | Status |
|----------|-----------------|--------|
| Access list + quarterly sign-offs | [path/link] | ☐ |
| Change management flow (documented) | [path/link] | ☐ |
| GitHub PR / deployment logs | GitHub | ☐ |
| Risk Assessment + approval | [path/link] | ☐ |
| Backup/restore test record | [path/link] | ☐ |
| Management Assertion (signed) | [path/link] | ☐ |
| RTO/RPO in policy | Backup Policy | ☐ |

---

## 5. Manager sign-off

- [ ] I have reviewed and agree with this checklist  
- [ ] I have completed the decisions in Section 1  
- [ ] I will provide sign-off for quarterly access reviews  
- [ ] I will sign the Management Assertion when ready  

**Manager:** _________________  **Date:** _______
