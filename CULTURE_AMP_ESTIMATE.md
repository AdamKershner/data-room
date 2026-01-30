# Culture Amp Demo Requirements - Time Estimate

## Requirements Summary

**Lead:** Julian Brennan, Culture Amp  
**Use Case:** Secure access to SaaS apps for short-term consultants via managed browser

### Core Requirements:
1. ✅ **Chromium engine** - Already have (forked and built)
2. ❌ **Okta SSO integration** - Identity provider authentication
3. ❌ **Netskope DLP integration** - Data Loss Prevention policies
4. ❌ **Managed browser** - Session isolation, policy enforcement
5. ❌ **No admin privileges** - User-level installation
6. ❌ **Per-user-per-month licensing** - Billing system

---

## Effort Breakdown by Component

### 1. Okta SSO Integration
**Story Points: 21** | **Estimated Time: 3-4 weeks**

**Scope:**
- OAuth 2.0 / OpenID Connect (OIDC) integration with Okta
- SAML 2.0 support (if required)
- Token management and refresh
- User provisioning/deprovisioning hooks
- Session management tied to Okta sessions
- Error handling and fallback flows

**Technical Work:**
- Integrate Okta SDK or OAuth libraries into Chromium
- Build authentication UI/flow
- Implement token storage (secure, encrypted)
- Handle token refresh automatically
- Map Okta user attributes to browser user context
- Test with various Okta configurations

**Dependencies:**
- Backend service for token validation (if needed)
- Secure credential storage in Chromium

**Complexity:** Medium-High (SSO is well-documented but requires careful security implementation)

---

### 2. Netskope DLP Integration
**Story Points: 34** | **Estimated Time: 5-6 weeks**

**Scope:**
- Netskope API integration for policy enforcement
- Real-time content inspection
- Policy evaluation engine
- Block/allow actions based on DLP rules
- Audit logging for compliance
- Policy synchronization

**Technical Work:**
- Integrate Netskope REST API or SDK
- Build policy evaluation engine
- Intercept network requests and content
- Implement content scanning (text, files, clipboard)
- Build policy cache and refresh mechanism
- Create admin UI for policy configuration (if needed)
- Handle policy conflicts and precedence

**Dependencies:**
- Netskope API credentials and documentation
- Understanding of Culture Amp's DLP policies
- Backend service for policy management (optional)

**Complexity:** High (DLP requires deep browser integration, content analysis, and policy logic)

---

### 3. Managed Browser Infrastructure
**Story Points: 29** | **Estimated Time: 4-5 weeks**

**Scope:**
- Session isolation (separate browser instances per user/tenant)
- Policy enforcement engine
- Remote configuration management
- Session recording/audit (if required)
- Browser lockdown features (disable downloads, printing, etc.)
- Multi-tenant support

**Technical Work:**
- Build session management system
- Implement policy enforcement hooks throughout Chromium
- Create configuration service (remote or local)
- Build admin dashboard for policy management
- Implement browser lockdown APIs
- Session state management and persistence
- Multi-tenant data isolation

**Dependencies:**
- Backend service for configuration management
- Database for session/tenant data

**Complexity:** High (Requires deep Chromium modifications)

---

### 4. No-Admin Installation
**Story Points: 13** | **Estimated Time: 2 weeks**

**Scope:**
- Portable installation (no system-level changes)
- User-level application directory
- Auto-update mechanism without admin rights
- Silent installation option
- Uninstaller that doesn't require admin

**Technical Work:**
- Package browser as portable app
- Modify installer to use user directories only
- Implement user-level auto-update
- Test on Windows, macOS, Linux
- Handle permission edge cases

**Dependencies:**
- Build/packaging system modifications

**Complexity:** Medium (Well-understood problem, but requires platform-specific work)

---

### 5. Per-User-Per-Month Licensing
**Story Points: 18** | **Estimated Time: 2-3 weeks**

**Scope:**
- License validation system
- Usage tracking and reporting
- Integration with billing system (Stripe, etc.)
- License enforcement (grace period, soft limits)
- Admin portal for license management
- Usage analytics dashboard

**Technical Work:**
- Build license validation service
- Implement usage tracking (API calls, sessions, etc.)
- Create license key generation/validation
- Build admin dashboard for license management
- Integrate with existing billing system
- Handle license expiration and renewal

**Dependencies:**
- Backend service for license management
- Database for license/usage tracking
- Billing system integration

**Complexity:** Medium (Standard SaaS licensing pattern)

---

### 6. Integration & Testing
**Story Points: 21** | **Estimated Time: 3 weeks**

**Scope:**
- End-to-end integration testing
- Security testing and penetration testing
- Performance testing under load
- Cross-platform testing (Windows, macOS, Linux)
- Documentation and deployment guides
- Demo preparation

**Technical Work:**
- Integration testing suite
- Security audit
- Performance benchmarking
- Platform-specific testing
- Documentation writing
- Demo environment setup

**Complexity:** Medium-High

---

## Total Estimate

### Story Points: **136 points**

### Time Estimate (Based on Team Velocity):
- **Current Team Velocity:** ~20 story points per sprint
- **Sprints Required:** ~7 sprints
- **Calendar Time:** **10-12 weeks** (assuming 1 sprint = ~1.5 weeks)

### Resource Requirements:
- **2-3 engineers** working full-time on this
- **1 backend engineer** for services (if not already available)
- **1 QA engineer** for testing
- **Access to:** Okta developer account, Netskope API access, Culture Amp test environment

---

## Risk Factors & Considerations

### High Risk:
1. **Netskope Integration Complexity** - DLP integration may be more complex than estimated if API is limited or requires custom solutions
2. **Chromium Modifications** - Deep browser changes may introduce stability issues
3. **Security Requirements** - Enterprise security standards may require additional audit cycles

### Medium Risk:
1. **Okta Configuration Variability** - Different Okta setups may require additional work
2. **Platform-Specific Issues** - No-admin installation may have platform-specific challenges
3. **Performance Impact** - DLP scanning may impact browser performance

### Dependencies:
- **Okta Developer Account** - Need access for testing
- **Netskope API Documentation** - Need detailed API docs and potentially sandbox access
- **Culture Amp Requirements** - Need detailed security and compliance requirements
- **Backend Infrastructure** - May need new services for licensing, policy management

---

## Phased Approach (Recommended)

### Phase 1: MVP for Demo (6-8 weeks)
1. Basic Okta SSO integration
2. Basic Netskope DLP (policy evaluation, basic blocking)
3. Managed browser session isolation
4. Portable installation (no admin)
5. Basic licensing validation

**Story Points: ~80** | **Time: 6-8 weeks**

### Phase 2: Production Ready (4-6 weeks)
1. Full Netskope DLP features
2. Advanced policy management
3. Complete licensing system
4. Security hardening
5. Performance optimization
6. Comprehensive testing

**Story Points: ~56** | **Time: 4-6 weeks**

---

## Comparison to Current Team Capacity

Based on `TeamExecution.jsx`:
- **Current Team:** Multiple engineers at 20 hours/week
- **Current Velocity:** ~20 story points per sprint
- **Current Focus:** B2C product improvements (Sprints 8-20)

### Recommendation:
This is a **significant enterprise feature set** that would require:
- **Dedicated team** (2-3 engineers) working full-time
- **Temporary shift in priorities** from B2C to B2B enterprise features
- **10-12 weeks** of focused development

### Alternative Approach:
- **Partner with Culture Amp** for a pilot/POC with extended timeline
- **Prioritize MVP features** for demo, then iterate based on feedback
- **Consider external contractors** for Netskope integration (specialized expertise)

---

## Next Steps

1. **Clarify Requirements:**
   - Detailed Okta configuration requirements
   - Specific Netskope DLP policies needed
   - Security/compliance requirements
   - Timeline expectations

2. **Technical Discovery:**
   - Obtain Okta developer account
   - Review Netskope API documentation
   - Assess Chromium modification complexity
   - Identify backend service requirements

3. **Resource Planning:**
   - Allocate dedicated engineering resources
   - Plan for backend infrastructure
   - Schedule security review

4. **Proposal to Culture Amp:**
   - Present timeline (10-12 weeks for full implementation)
   - Offer phased approach (MVP in 6-8 weeks)
   - Discuss pilot/POC option
   - Define success criteria for demo

---

## Questions for Culture Amp

1. **Timeline:** What is the target date for the demo?
2. **Scope:** Can we start with MVP features for demo, then iterate?
3. **Access:** Can we get Okta sandbox and Netskope API access for development?
4. **Policies:** What specific DLP policies need to be enforced?
5. **Deployment:** How will the browser be distributed to consultants?
6. **Support:** What level of support is expected during pilot?
