/**
 * SOC 2 Type 1 Checklist – instructions and status per step.
 * Used for "View instructions" (how to do it + what's already done).
 */
export const INSTRUCTIONS = {
  'dec-1': {
    howTo: 'Decide who has authority to sign alongside the CEO (e.g. COO, CTO, or designated officer). Document the name in the Management Assertion Letter and in this checklist.',
    alreadyDone: 'Management Assertion Letter has CEO (Adam Kershner) filled in; second signatory is left as placeholder. Access Control Policy and Compliance Program Overview reference management structure.',
  },
  'dec-2': {
    howTo: 'Assign one person as the technical/security contact for the auditor. Add their name to System-Description-Document, Organization-Chart, and any control owner fields in policy docs.',
    alreadyDone: 'System Description and Org Chart list CEO Adam Kershner. CTO/Security Lead name is not yet filled in; placeholder for consistency across documents.',
  },
  'dec-3': {
    howTo: 'Check your Supabase dashboard (Project Settings → Billing) to see current plan. If Free, upgrade to Pro in the Supabase dashboard to enable daily backups (7-day retention in S3).',
    alreadyDone: 'Backup-and-Restoration-Policy documents both Free (no backups) and Pro (daily 7-day retention). Current plan status is not confirmed in docs; needs one-time confirmation.',
  },
  'dec-4': {
    howTo: 'Define maximum acceptable downtime (e.g. 8 hours). Add the RTO value to Backup-and-Restoration-Policy and Business-Continuity-Plan. Ensure DR testing can support this target.',
    alreadyDone: 'Disaster-Recovery-Plan and Business-Continuity-Plan have RTO/RPO sections; numeric targets are placeholders. Need management to set and document official RTO.',
  },
  'dec-5': {
    howTo: 'Define maximum acceptable data loss (e.g. 24 hours). Add the RPO value to Backup-and-Restoration-Policy. Ensure backup frequency (e.g. daily on Pro) meets RPO.',
    alreadyDone: 'Backup and BC/DR policies reference RPO; formal targets not yet set. Pro Plan 7-day daily backups support up to 24h RPO if restored from last backup.',
  },
  'p0a-1': {
    howTo: 'Create a spreadsheet or doc with columns: Person, System (e.g. Supabase, Stripe, AWS, GitHub), Access Level, Last Reviewed. Use it for every quarterly review.',
    alreadyDone: 'Access Control Policy (Section 9) requires quarterly access reviews; no template or first review exists yet. Evidence folder Evidence(Type II)/Access-Review-Logs is ready for storing the template and logs.',
  },
  'p0a-2': {
    howTo: 'List every person who has access to production/financial systems (Supabase, Stripe, AWS, GitHub, Google Workspace, etc.) and their access level. Update when someone joins or leaves.',
    alreadyDone: 'Access Control Policy defines scope (AWS, GitHub, Supabase, Google Workspace, etc.). Manual user list exists per gap analysis; not yet formalized as a single access list document.',
  },
  'p0a-3': {
    howTo: 'Manager (or Security Lead) reviews the access list, confirms it is accurate and appropriate, then signs and dates: "Access review completed [date]. Access is appropriate."',
    alreadyDone: 'Policy requires quarterly review and sign-off. Process has not been run yet; no sign-off logs exist. Offboarding checklist exists (HR-&-Personnel) for revoking access within 24h.',
  },
  'p0a-4': {
    howTo: 'Save each quarter’s access list and the signed sign-off (PDF or screenshot) in Evidence(Type II)/Access-Review-Logs (or your agreed evidence location).',
    alreadyDone: 'Evidence folder Access-Review-Logs exists; no logs have been added yet. Once first review is done, store the file there.',
  },
  'p0a-5': {
    howTo: 'Set calendar reminders for end of Q1, Q2, Q3, Q4. Each quarter: update the access list, get manager sign-off, and save to Access-Review-Logs.',
    alreadyDone: 'Access Control Policy states quarterly access reviews; no quarterly schedule has been executed or documented yet.',
  },
  'p0b-1': {
    howTo: 'Log into Supabase dashboard → Project Settings → Billing/Plan. Note whether the project is on Free or Pro (or Team/Enterprise). Document the result internally.',
    alreadyDone: 'Backup-and-Restoration-Policy describes Free vs Pro (Pro = daily 7-day retention). Current plan is not recorded in the docs; one-time confirmation needed.',
  },
  'p0b-2': {
    howTo: 'If on Free: either upgrade to Pro in Supabase (recommended) or implement a documented manual backup process (e.g. scheduled supabase db dump to S3) and document it in the Backup Policy.',
    alreadyDone: 'Policy states Free = no backups (gap), Pro = daily 7-day in S3; custom option supabase db dump is mentioned. No upgrade or manual backup process is documented as implemented.',
  },
  'p0b-3': {
    howTo: 'In Backup-and-Restoration-Policy, add or confirm: where backups are stored (e.g. Supabase/S3 us-east-1), retention (e.g. 7 days for Pro), and who can perform restores.',
    alreadyDone: 'Backup-and-Restoration-Policy already states Pro = 7-day daily retention in S3 us-east-1; Team 14d, Enterprise 30d. Location and retention are documented; ensure it matches actual plan.',
  },
  'p0b-4': {
    howTo: 'Run one restore test (e.g. restore a backup to a test project or document the steps). Record date, result, and any issues. Save in Evidence(Type II)/Backup-Test-Results.',
    alreadyDone: 'Evidence folder Backup-Test-Results exists. No restore test has been run or documented yet. Required for auditor evidence.',
  },
  'p1idp-1': {
    howTo: 'Ensure Access-Control-Policy clearly states: internal IdP is Google Workspace for Adam only; no org-wide IdP; Okta/Azure trialed and deferred. No edits needed if already there.',
    alreadyDone: 'Access Control Policy (Section 6) states: "Kahana internal access uses Google Workspace (currently for Adam only); no org‑wide IdP yet. Okta and Azure trialed but not adopted." Deferral is documented.',
  },
  'p1idp-2': {
    howTo: 'Add a short rationale and plan to the policy (e.g. "Implement org-wide IdP when team reaches X employees or when [trigger]"). Helps auditor accept deferral.',
    alreadyDone: 'Policy mentions deferral "until team grows." Optional: add a specific trigger (e.g. headcount or first enterprise customer) for when IdP will be revisited.',
  },
  'p1log-1': {
    howTo: 'Confirm Logging-&-Monitoring-Policy describes: Supabase logs, Mixpanel, and (if applicable) 7-day log retention on Supabase Pro. Update if anything is missing.',
    alreadyDone: 'Logging & Monitoring Policy documents current state: Supabase tables, Mixpanel; no dedicated SIEM; Supabase Pro 7-day log retention; Log Drains $60/drain. Datadog under consideration. Current state is documented.',
  },
  'p1log-2': {
    howTo: 'Document in the policy: where logs are stored, who can access them, and retention period (e.g. 7 days for Supabase Pro). Add to Logging-&-Monitoring-Policy if not already there.',
    alreadyDone: 'Policy already notes 7-day retention on Pro and log drain option. Retention and sources are documented; ensure any internal retention rules are stated.',
  },
  'p1log-3': {
    howTo: '(Optional) Evaluate Datadog or similar for centralized logging. If deferred, add one line to the policy: "Centralized SIEM deferred; timeline: [date or trigger]."',
    alreadyDone: 'Policy states "Datadog under consideration." No formal decision or timeline is documented; optional for Type 1 if current state is clearly documented.',
  },
  'p2ch-1': {
    howTo: 'Review Change-Management-Policy. Confirm it describes: GitHub (PRs, issues), Tally→Slack→Sheets→GitHub, CI/CD, no Jira/Linear. Edit if anything is missing.',
    alreadyDone: 'Change Management Policy is Ready for Review. It documents: GitHub PRs/issues, Tally→Slack→Sheets, Cursor/GitHub sprints, GitHub workflows/CI, no Jira/Linear. OTA canary/stable and rollback are documented. Policy is complete.',
  },
  'p2ch-2': {
    howTo: 'Know where to pull evidence: GitHub repo (PR history, merge history), GitHub Actions (workflow runs), deployment logs. Export or screenshot samples if the auditor asks.',
    alreadyDone: 'Change is tracked in GitHub and CI; evidence exists in the tooling. No formal "evidence location" doc exists; team can export PR list and workflow runs when requested.',
  },
  'p2r-1': {
    howTo: 'Hold a risk assessment session: list risks (e.g. data breach, vendor outage, data loss, unauthorized access). For each: likelihood (1–5), impact (1–5), and mitigation. Document in Risk-Assessment-Report.',
    alreadyDone: 'Risk-Assessment-Report and Risk-Register exist as drafts with March 2026 dates; R-01 access reviews, R-02 Supabase backups are noted. Full formal assessment (all risks, scores, mitigations) has not been conducted and signed off.',
  },
  'p2r-2': {
    howTo: 'Populate Risk-Assessment-Report with risk descriptions and Risk-Register with risk ID, description, owner, status. Link to Risk-Treatment-Plan for mitigation actions.',
    alreadyDone: 'Risk-Assessment-Report, Information-Security-Risk-Register, and Risk-Treatment-Plan exist in Risk-&-Compliance; partially complete. Need to complete with full risk list and register entries.',
  },
  'p2r-3': {
    howTo: 'Update Risk-Treatment-Plan with owners and concrete actions for each risk (e.g. "R-01: Implement quarterly access reviews – Owner: [Name]" ).',
    alreadyDone: 'Risk-Treatment-Plan has Effective Date March 2026. Needs to be filled with owners and actions tied to the risk register.',
  },
  'p2r-4': {
    howTo: 'Manager (CEO or Security Lead) reviews the risk assessment, Risk Register, and Treatment Plan, then signs and dates the assessment (email or doc sign-off is fine).',
    alreadyDone: 'Risk documents are in draft; no management approval or date has been recorded. Required before audit.',
  },
  'assert-1': {
    howTo: 'Confirm CEO (Adam Kershner) and the second signatory from Section 1 (Manager decisions). Both must be available to sign the Management Assertion when the auditor provides it.',
    alreadyDone: 'Management Assertion Letter has CEO Adam Kershner; second signatory is placeholder. Decision needed on who signs if no CFO.',
  },
  'assert-2': {
    howTo: 'Edit Management-Assertion-Letter in Managment-documents: insert both signatory names and the audit period (e.g. "as of [date]" for Type 1). Save a copy for the auditor.',
    alreadyDone: 'Management-Assertion-Letter has period placeholder and CEO; second signatory not yet filled. Document is Partially Complete per Documentation Review.',
  },
  'assert-3': {
    howTo: 'When the auditor provides the final Management Assertion, both signatories sign and date it. Provide the signed letter to the auditor per their instructions.',
    alreadyDone: 'No auditor engagement yet; signing will occur when the auditor sends the final assertion letter.',
  },
  'one-1': {
    howTo: 'Add the chosen RTO and RPO (from Manager decisions) to Backup-and-Restoration-Policy and Business-Continuity-Plan. Replace any placeholders with the agreed numbers.',
    alreadyDone: 'Both policies have RTO/RPO sections; values are not yet set. Once manager decides (dec-4, dec-5), add those numbers to the policies.',
  },
  'one-2': {
    howTo: 'In System-Description-Document and Organization-Chart, add the name and title of the CTO/Security Lead (same as decision dec-2). Keep consistent across all docs.',
    alreadyDone: 'System Description and Org Chart have CEO; CTO/Security Lead is not yet named. Add once decision dec-2 is made.',
  },
  'one-3': {
    howTo: 'Confirm Supabase plan (see p0b-1). If Free, complete upgrade to Pro or implement and document the manual backup process before the audit.',
    alreadyDone: 'Same as backup gap: plan not confirmed in writing. One-time confirmation and upgrade (if needed) required.',
  },
  'one-4': {
    howTo: 'Same as p0b-4: run one restore test, document result, save in Evidence(Type II)/Backup-Test-Results.',
    alreadyDone: 'Backup-Test-Results folder exists; no test documented yet.',
  },
  'one-5': {
    howTo: 'Complete the risk assessment (p2r-1–p2r-4): conduct assessment, populate Report and Register, update Treatment Plan, get manager approval.',
    alreadyDone: 'Risk docs exist as drafts; full assessment and approval not yet done.',
  },
  'one-6': {
    howTo: 'Request DPAs and SOC 2 reports from critical vendors (e.g. Supabase, AWS, Stripe). Store in Vendor-and-Third-Party or Evidence(Type II)/Vendor-Review.',
    alreadyDone: 'Subservice-Organization and Vendor-Management-Policy list vendors. No central folder of DPAs or SOC 2 reports is documented; collection is pending.',
  },
  'rec-q1': {
    howTo: 'Complete Q1 access review: update access list, get manager sign-off, save in Access-Review-Logs. Mark this box when done.',
    alreadyDone: 'Access review process not yet run for any quarter. When first quarter is completed, check this and save evidence.',
  },
  'rec-q2': {
    howTo: 'Complete Q2 access review: update access list, get manager sign-off, save in Access-Review-Logs.',
    alreadyDone: 'Pending. Repeat same process as Q1 each quarter.',
  },
  'rec-q3': {
    howTo: 'Complete Q3 access review: update access list, get manager sign-off, save in Access-Review-Logs.',
    alreadyDone: 'Pending.',
  },
  'rec-q4': {
    howTo: 'Complete Q4 access review: update access list, get manager sign-off, save in Access-Review-Logs.',
    alreadyDone: 'Pending.',
  },
  'rec-risk': {
    howTo: 'Conduct annual risk assessment: update Risk-Assessment-Report, Risk-Register, Risk-Treatment-Plan; get manager approval and date. Schedule next year’s assessment.',
    alreadyDone: 'First risk assessment not yet completed. After first full assessment, repeat annually.',
  },
  'ev-1': {
    howTo: 'Evidence: access list(s) and quarterly sign-off records. Store in Evidence(Type II)/Access-Review-Logs. Auditor will request these for CC6.1.',
    alreadyDone: 'Access list template and sign-offs do not exist yet. Create via p0a-1–p0a-5 and save in Access-Review-Logs.',
  },
  'ev-2': {
    howTo: 'Evidence: documented change management flow. Point auditor to Change-Management-Policy and (if needed) a one-page diagram or summary of GitHub → CI → deploy.',
    alreadyDone: 'Change-Management-Policy is complete and documents the flow. No separate one-pager required if policy is clear.',
  },
  'ev-3': {
    howTo: 'Evidence: GitHub PR history, workflow runs, deployment logs. Export or provide auditor access (read-only) to the repo and GitHub Actions as needed.',
    alreadyDone: 'Code and CI are in GitHub; evidence is available in the tool. No export has been prepared; can be done when auditor requests.',
  },
  'ev-4': {
    howTo: 'Evidence: Risk-Assessment-Report and Risk-Register with management approval (signed/dated). Store in Risk-&-Compliance and provide to auditor.',
    alreadyDone: 'Risk docs exist; assessment not conducted and no approval on file yet.',
  },
  'ev-5': {
    howTo: 'Evidence: backup/restore test record (date, result, steps). Store in Evidence(Type II)/Backup-Test-Results.',
    alreadyDone: 'Folder exists; no restore test has been run or documented.',
  },
  'ev-6': {
    howTo: 'Evidence: signed Management Assertion Letter. Obtain from both signatories when auditor provides final version; give to auditor.',
    alreadyDone: 'Management Assertion is draft with placeholder; not signed until auditor engagement.',
  },
  'ev-7': {
    howTo: 'Evidence: RTO/RPO stated in Backup and BC/DR policies. Auditor will check that policies include these targets.',
    alreadyDone: 'Policies have RTO/RPO sections; numeric targets not yet set. Add once manager decides (dec-4, dec-5).',
  },
  'ev-8': {
    howTo: 'Evidence: completed onboarding checklist(s) for any hires during the period. Use HR-&-Personnel/Employee-Onboarding-Checklist; store completed copies in Evidence/Employee-Onboarding-Offboarding.',
    alreadyDone: 'Employee-Onboarding-Checklist exists and is referenced in data room. Completed checklists for hires should be saved in Evidence when applicable.',
  },
  'ev-9': {
    howTo: 'Evidence: completed offboarding checklist when someone leaves (access revoked per checklist). Store in Evidence/Employee-Onboarding-Offboarding.',
    alreadyDone: 'Employee-Offboarding-Checklist exists with 24h revocation requirement. Use when offboarding; save completed checklist as evidence.',
  },
  'so-1': {
    howTo: 'Manager reviews this entire checklist and confirms understanding of all sections and commitments.',
    alreadyDone: 'Checklist is ready for manager review. Sign-off is a commitment, not evidence in the folder.',
  },
  'so-2': {
    howTo: 'Manager completes Section 1 (Manager decisions): second signatory, CTO/Security Lead, Supabase plan, RTO, RPO. Document answers in the checklist or linked doc.',
    alreadyDone: 'Section 1 has five open decisions. Once filled, manager can check this box.',
  },
  'so-3': {
    howTo: 'Manager commits to providing sign-off for each quarterly access review (or delegates to Security Lead with a documented handoff).',
    alreadyDone: 'Policy requires quarterly sign-off; no delegation or commitment is documented yet. Manager confirms here.',
  },
  'so-4': {
    howTo: 'Manager commits to signing the Management Assertion when the auditor provides the final version (with second signatory).',
    alreadyDone: 'Signing will occur at audit time; this is a commitment that both signatories will be available.',
  },
}
