# SOC 2 Controls Matrix – Kahana Oasis (CC1–CC9)

**Version:** 1.0  
**Effective Date:** March 2026  
**Source:** SOC2 Gap Analysis, policy documents  
**Status:** Aligned with Kahana's current implementation and gaps

---

## Trust Services Criteria Mapping (CC1-CC9)

| TSC | Control Area | Kahana Implementation | Status | Evidence | Gap |
|-----|--------------|------------------------|--------|----------|-----|
| **CC1.1-CC1.5** | Control Environment / Governance | CEO-led governance, Corporate Governance Manual, Compliance Program Overview, Organization Chart with CEO/CTO/Security structure | Partial | Governance manual, org chart, policy approvals | CTO/Security Lead names to be finalized consistently across all docs |
| **CC2.x** | Communication and Information | Policies communicated via onboarding/training; internal documentation and compliance updates; public privacy/security documentation | Partial | Employee onboarding/offboarding checklists, Security Awareness Program, policy set | Formal policy acknowledgment evidence should be consistently retained |
| **CC3.x** | Risk Assessment | Annual baseline and trigger-based risk assessment methodology documented; risk register/treatment plan framework in place | Partial | Risk Assessment Policy (methods), Risk Report/Register/Treatment Plan docs | Initial full assessment and leadership-approved scoring/treatment execution still pending |
| **CC4.x** | Monitoring Activities | Internal reviews/mock audit readiness process documented; policy review cadence at least annually | Partial | Compliance Program Overview, controls matrix, policy review sections | Need repeatable periodic control testing records and completed review logs |
| **CC5.x** | Control Activities | Documented policies/procedures for access, change, incident response, backup/DR, data handling, vendor risk | Current | Full SOC policy set and procedural documents | Evidence execution maturity varies by control (see evidence gaps below) |
| **CC6.1** | Logical and Physical Access Controls | Supabase Auth, AWS IAM, Google Workspace (1 user), AWS Secrets Manager | Partial | User list (manual); no access review logs | Access reviews not quarterly |
| **CC6.1** | Access Reviews | Not conducted quarterly; no documented sign-off | Gap | None | P0: Implement quarterly review + sign-off |
| **CC6.1** | Internal IdP | Google Workspace for Adam only; no org-wide IdP; Okta/Azure trialed, deferred | Partial | Documented deferral | P1: Document deferral; plan for growth |
| **CC6.x** | Access Provisioning/Deprovisioning | Joiner/Mover/Leaver process documented; offboarding within 24 hours required | Partial | Access Control Policy, Employee Offboarding Checklist | Need recurring evidence that deprovisioning and access reviews are executed and logged |
| **CC7.1** | Monitoring | Supabase logs, Mixpanel; no dedicated SIEM | Partial | Supabase dashboard; no formal retention policy | P1: Document current state or adopt Datadog |
| **CC7.x** | Incident Detection/Response | Incident Response Plan with escalation, Supabase/Mixpanel log usage, and post-incident output requirements | Partial | Incident Response Plan, logging policy, incident records folder | Need executed incident/post-incident records and tested response evidence |
| **CC8.1** | Change Management | GitHub, CI/CD, Tally→Slack→Sheets→GitHub workflows | Current | PR history, workflow runs; now formally documented | P2: Policy updated |
| **CC8.x** | SDLC and Release Controls | PR review, CI/CD checks, OTA canary/stable, rollback by ring repointing | Current | Change Management Policy, SDLC Policy, Code Review Procedures, GitHub actions logs | Ensure approval/testing evidence is consistently archived for audit samples |
| **CC9.x** | Risk Assessment | Not yet conducted | Gap | None | P2: Conduct and document annual risk assessment |
| **Availability** | Service Availability | Supabase, AWS; no formal SLA or DR testing | Partial | Vendor SLAs | Document RTO/RPO; test DR |
| **Confidentiality** | Data Protection | Encryption at rest (Supabase), TLS in transit | Current | Supabase documentation | — |
| **BC/DR** | Backups | Free Plan = no backups; Pro Plan = 7-day retention | Gap | None on Free Plan | P0: Upgrade to Pro or custom db dump |

---

## Control-to-Document Mapping

| Control | Policy / Procedure | Evidence |
|---------|-------------------|----------|
| CC6.1 Access Control | Access Control Policy, Password and Authentication Policy | User list, IAM configs |
| CC6.1 Access Reviews | Access Control Policy (Section 9) | Access review logs (to be created) |
| CC6.1 IdP | Access Control Policy | Google Workspace for Adam; deferral documented |
| CC7.1 Monitoring | Logging & Monitoring Policy | Supabase logs, Mixpanel |
| CC8.1 Change Management | Change Management Policy, SDLC, Code Review Procedures | GitHub PRs, workflow runs |
| CC9 Risk Assessment | Risk Assessment Report, Risk Register, Risk Treatment Plan | Risk docs (assessment to be conducted) |
| Backups | Backup and Restoration Policy | Supabase dashboard (Pro); restore test results |
| Encryption | Encryption Policy | Supabase, TLS configs |
| Governance (CC1) | Corporate Governance Manual, Organization Chart, Compliance Program Overview | Signed approvals, governance review notes |
| Data Classification/Privacy | Data Classification Policy, Privacy Policy, Data Protection Policy, Retention Policy | Data handling records, retention/deletion evidence |
| Incident Response (CC7) | Incident Response Plan | Incident ticket timelines, post-incident reviews |
| Vendor Risk (CC9) | Vendor Management Policy, Vendor Risk Assessment Template, Subservice review procedure | Vendor assessments, DPAs, SOC reports |

---

## Subservice Organizations (Carve-Out)

| Vendor | Role | Controls Relied Upon |
|--------|------|----------------------|
| AWS | Infrastructure (us-east-1) | IAM, encryption, logging |
| Supabase | Database, Auth, Storage | Encryption, backups (Pro), Auth |
| Okta | Enterprise browser SSO | IdP, MFA |
| Stripe | Payments | PCI compliance |
| Mixpanel | Analytics | Data handling |
| Google Gemini, Deepgram | AI | DPA, data handling |

---

## Evidence Inventory (Kahana Current State)

| Control Area | Evidence We Have | Evidence We Need |
|--------------|------------------|------------------|
| Governance / Control Environment | Governance manual, organization chart, compliance program overview | Finalized CTO/Security Lead names and consistent role ownership across docs |
| Access Control | User list (manual) | Access review logs, offboarding checklist |
| Change Management | GitHub history, CI logs, workflow runs | Formal change policy (done), approval evidence |
| Backups | Supabase dashboard (if Pro) | Backup verification logs, restore test |
| Logging | Supabase logs, Mixpanel | Retention policy (documented), SIEM if required |
| Vendor Management | Vendor list | DPAs, SOC2 reports from critical vendors |
| Risk Assessment | None | Risk register, assessment documentation |
| Incident Response | Incident response policy and templates | Completed incident records and post-incident reviews |
| Privacy / Data Handling | Privacy, data classification, data protection, retention policies | Demonstrable retention/deletion executions and request handling evidence |
