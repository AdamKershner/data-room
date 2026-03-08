# SOC 2 Type 2 Compliance Checklist

A preparation checklist for organizations pursuing SOC 2 Type 2 certification. Tailored for **Kahana** (AI browser, B2B SaaS, user data handling). Use this to track readiness before and during an audit.

**Context:** SOC 2 Type 2 audits evaluate whether your controls operate effectively over a period of time (typically 6–12 months). Auditors will request evidence, interview staff, and verify that policies are actually followed.

---

## 1. Security (Required)

### 1.1 Access Control (CC6.1)

- [ ] **Identity management** – Centralized user accounts (e.g., Google Workspace, Okta) for all employees
- [ ] **Access provisioning** – Documented process for granting access when someone joins
- [ ] **Access deprovisioning** – Documented process for revoking access when someone leaves (within 24–48 hours)
- [ ] **Least privilege** – Users have only the access needed for their role
- [ ] **Access reviews** – Quarterly (or more frequent) review of who has access to what; documented sign-off
- [ ] **Password / MFA** – Strong password policy; MFA enforced for all production systems, cloud consoles, and critical tools
- [ ] **Service accounts** – Inventory of service accounts; no shared personal credentials for production

### 1.2 Logical and Physical Access (CC6.2, CC6.3)

- [ ] **Logical access** – Firewall rules, network segmentation, VPN if applicable
- [ ] **Physical access** – If you have an office, badge/access logs; if fully remote, document how you protect company devices
- [ ] **Device management** – MDM or equivalent for company laptops; encryption at rest, screen lock policy

### 1.3 System Operations (CC7.1, CC7.2)

- [ ] **Monitoring** – Logging and alerting for production systems (Supabase, app servers, etc.)
- [ ] **Incident detection** – Process to detect anomalies, failed logins, unauthorized access attempts
- [ ] **Vulnerability management** – Regular dependency scans, patching cadence for OS and critical software
- [ ] **Malware protection** – Antivirus/EDR on endpoints

### 1.4 Change Management (CC8.1)

- [ ] **Change control** – Documented process for deploying code and infrastructure changes
- [ ] **Approvals** – Who approves production changes; evidence of approval before deployment
- [ ] **Testing** – Changes tested before production (staging, canary, etc.)
- [ ] **Rollback** – Ability to roll back bad deployments (e.g., OTA rollback for Oasis)

### 1.5 Risk Mitigation (CC9.1, CC9.2)

- [ ] **Risk assessment** – Annual (or more frequent) risk assessment; documented risks and mitigations
- [ ] **Risk register** – Track risks, owners, and status

---

## 2. Availability (Common for SaaS)

- [ ] **Uptime targets** – Defined SLA or target (e.g., 99.9%); documented
- [ ] **Monitoring** – Uptime monitoring for critical services (Supabase, Oasis update service, etc.)
- [ ] **Incident response** – Process to respond to outages; communication plan
- [ ] **Capacity planning** – How you ensure capacity for growth

---

## 3. Confidentiality (Relevant for User Data)

- [ ] **Data classification** – Policy defining what is confidential (user data, browse history, AI interactions)
- [ ] **Encryption in transit** – TLS for all external and internal APIs
- [ ] **Encryption at rest** – Database and storage encryption (Supabase provides this; verify and document)
- [ ] **Data handling** – Who can access user data; logging of access to sensitive data
- [ ] **Data retention** – Policy for how long you retain data; deletion process

---

## 4. Policies and Documentation

### 4.1 Required Policies (Written and Approved)

- [ ] **Information Security Policy** – Overall security framework
- [ ] **Access Control Policy** – Provisioning, deprovisioning, least privilege, MFA
- [ ] **Data Classification & Handling Policy** – How you classify and protect user data
- [ ] **Incident Response Policy** – Steps when a breach or security incident occurs
- [ ] **Acceptable Use Policy** – Permitted use of company systems
- [ ] **Change Management Policy** – How changes are approved and deployed
- [ ] **Business Continuity & Disaster Recovery Policy** – Backup, recovery, RTO/RPO
- [ ] **Vendor & Third-Party Risk Management Policy** – Evaluation of Supabase, AI vendors, etc.
- [ ] **Privacy Policy** – Public-facing; how you collect and use customer data
- [ ] **Risk Assessment Policy** – How and how often you assess risks

### 4.2 Policy Requirements

- [ ] **Version control** – Policies have version numbers and effective dates
- [ ] **Approval** – Policies approved by leadership (e.g., CEO/founder)
- [ ] **Distribution** – Employees acknowledge they have read policies (e.g., during onboarding)
- [ ] **Review** – Annual review of policies; updates documented

---

## 5. Evidence and Artifacts (What Auditors Will Request)

### 5.1 Access Control Evidence

- [ ] **User access list** – Who has access to production systems, cloud consoles, databases
- [ ] **Onboarding checklist** – Evidence that new hires get appropriate access
- [ ] **Offboarding checklist** – Evidence that access is revoked when someone leaves
- [ ] **Access review logs** – Quarterly reviews with sign-off

### 5.2 Change Management Evidence

- [ ] **Deployment logs** – When changes were deployed; who approved
- [ ] **Git/CI history** – Code changes, PR reviews, merge history
- [ ] **Release notes / changelog** – Track of what was released and when

### 5.3 Incident Response Evidence

- [ ] **Incident log** – Record of incidents (even minor); how they were resolved
- [ ] **Post-incident reviews** – For significant incidents, documented lessons learned

### 5.4 Vendor Management Evidence

- [ ] **Vendor list** – Supabase, AI providers, hosting, etc.
- [ ] **Vendor assessments** – Questionnaires or SOC 2 reports from critical vendors
- [ ] **Contracts** – DPAs, SLAs where applicable

### 5.5 Training and Awareness

- [ ] **Security awareness training** – Employees complete training (phishing, password hygiene, etc.)
- [ ] **Training records** – Who completed training and when

---

## 6. Kahana-Specific Considerations

### 6.1 AI Browser / User Data

- [ ] **Data flow documentation** – Where user data (browse history, AI prompts) flows; what is stored, where
- [ ] **AI vendor compliance** – If you use third-party AI (e.g., OpenAI, Anthropic), DPAs and data handling
- [ ] **Local vs. cloud** – Clarify what stays on device vs. what is sent to your servers
- [ ] **Privacy policy alignment** – Public policy matches actual practice

### 6.2 OTA Updates and Release Pipeline

- [ ] **Update signing** – MAR signing, code signing; keys protected (HSM/KMS)
- [ ] **Change management for releases** – Tag-based releases, canary/stable; documented process
- [ ] **Rollback capability** – Documented and tested

### 6.3 Enterprise / B2B

- [ ] **Customer data isolation** – How you ensure one customer’s data is not exposed to another
- [ ] **SSO / identity** – If you offer Okta SSO or similar, document integration and security
- [ ] **DPAs** – Data Processing Agreements with enterprise customers

---

## 7. Pre-Audit Readiness

- [ ] **Scope definition** – Clearly define what is in scope (e.g., Oasis product, Supabase backend, internal tools)
- [ ] **Control mapping** – Map your controls to the Trust Service Criteria
- [ ] **Gap assessment** – Internal or consultant-led gap assessment before formal audit
- [ ] **Evidence collection** – Start collecting evidence 6–12 months before audit (Type 2 requires operating effectiveness over time)
- [ ] **Auditor selection** – Choose a reputable CPA firm experienced in SOC 2 for tech/SaaS

---

## 8. Ongoing Maintenance

- [ ] **Continuous compliance** – Treat this as ongoing, not a one-time project
- [ ] **Quarterly check-ins** – Access reviews, policy updates, incident review
- [ ] **Annual** – Full policy review, risk assessment, vendor re-assessment

---

## References

- [AICPA SOC 2](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome) – Official guidance
- [Trust Service Criteria](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/trustdataintegritytaskforce) – Security, Availability, Processing Integrity, Confidentiality, Privacy
- [Vanta](https://www.vanta.com), [Drata](https://drata.com), [Secureframe](https://secureframe.com) – Compliance automation platforms (can help with evidence collection and audit prep)

---

*Last updated: February 2026. Adapt this checklist to your specific scope and auditor requirements.*
