/**
 * Reference material for Sprint 1 (B2B Chromium): raw Chromium vs consumer browsers.
 * Rendered inside the sprint panel via ChromiumForkCapabilityAssessment.jsx
 */
export const chromiumForkCapabilityAssessment = {
  title: 'Assessment of Capability Gaps and Implementation Requirements for a Chromium-Based Browser Fork',
  executiveSummary:
    'The open-source Chromium project provides a near-complete web browsing engine, but significant gaps remain between its raw source code and the feature set of a modern consumer browser such as Google Chrome, Brave, or Microsoft Edge. This report identifies those missing capabilities, evaluates the complexity of implementing them, and outlines a strategic framework for prioritization. The core finding is that success depends less on replicating every proprietary Google service and more on selecting a clear product niche and building the infrastructure that directly supports that vision—especially secure auto-updates, encrypted synchronization, and a user-facing identity.',
  introduction:
    'Developing a competitive browser from the Chromium codebase is an exercise in bridging capability gaps while simultaneously adding differentiation. The Chromium source intentionally omits features that rely on non-open-source components, Google-specific APIs, or cloud services. This report systematically catalogues those missing features, outlines the investment required for each, and proposes a strategic approach that aligns technical implementation with a focused product vision.',
  capabilityComparisonIntro:
    'Comparison of raw Chromium against established consumer browsers. The final column translates each gap into the key implementation requirement for a fork.',
  capabilityRows: [
    {
      feature: 'Encrypted Sync',
      googleChrome: 'Yes (Google Account)',
      brave: 'Yes (Sync Chain)',
      edge: 'Yes (Microsoft Account)',
      thorium: 'No',
      rawChromium: 'No',
      implementationRequirement: 'Build or integrate a sync server',
    },
    {
      feature: 'Auto-Update System',
      googleChrome: 'Yes (Google Update)',
      brave: 'Yes (Custom)',
      edge: 'Yes (Windows Update)',
      thorium: 'No',
      rawChromium: 'No',
      implementationRequirement: 'Implement Omaha v4 client & server',
    },
    {
      feature: 'Telemetry / Crash Reports',
      googleChrome: 'Yes',
      brave: 'No (by design)',
      edge: 'Yes',
      thorium: 'No',
      rawChromium: 'No',
      implementationRequirement: 'Implement own service or omit',
    },
    {
      feature: 'Proprietary Media Codecs',
      googleChrome: 'Yes (Licensed)',
      brave: 'Yes (Licensed)',
      edge: 'Yes (Licensed)',
      thorium: 'Yes (Libre)',
      rawChromium: 'No (Limited)',
      implementationRequirement: 'Obtain patent licenses & integrate',
    },
    {
      feature: 'Google API Services',
      googleChrome: 'Yes (Built-in)',
      brave: 'No (Replaced)',
      edge: 'No (Replaced)',
      thorium: 'No',
      rawChromium: 'No (Requires keys)',
      implementationRequirement: 'Replace services or acquire API keys',
    },
    {
      feature: 'Spell Check / Translate',
      googleChrome: 'Yes (Private APIs)',
      brave: 'Yes (Basic)',
      edge: 'Yes',
      thorium: 'No',
      rawChromium: 'No',
      implementationRequirement: 'Integrate open-source libraries',
    },
    {
      feature: 'Safe Browsing',
      googleChrome: 'Yes',
      brave: 'Privacy-respecting alternative',
      edge: 'Yes',
      thorium: 'No',
      rawChromium: 'No (needs API key)',
      implementationRequirement: 'Generate API keys or replace with alternative',
    },
    {
      feature: 'Dedicated Password Manager UI',
      googleChrome: 'Yes (chrome://password-manager)',
      brave: 'Yes',
      edge: 'Yes',
      thorium: 'No',
      rawChromium: 'Partial (settings only)',
      implementationRequirement: 'Build a complete client-side manager',
    },
  ],
  strategicFocusIntro:
    'Before addressing individual feature gaps, the project must commit to a clear strategic identity. All subsequent build-or-buy decisions should flow from this choice. Three primary niches have proven viable:',
  strategicNiches: [
    {
      title: 'The Privacy Champion',
      body:
        'Remove all Google integrations, build end-to-end encrypted sync, and make data sovereignty the core value proposition. This demands the highest investment in server infrastructure, a dedicated security team, and a rigorous auto-update pipeline. (Example: Brave)',
    },
    {
      title: "The Power User's Playground",
      body:
        'Maintain compatibility with the Chrome Web Store while layering extensive customization, a crypto wallet, or extreme performance tuning through custom compiler flags. (Examples: Vivaldi, Thorium)',
    },
    {
      title: 'The Lean, Minimalist Browser',
      body:
        'Deliberately omit complex infrastructure features like sync and auto-update to focus on absolute speed, transparency, and a minimal attack surface. (Example: ungoogled-chromium)',
    },
  ],
  difficultyIntro:
    'The technical and operational effort required for each missing component varies widely. The following hierarchy ranks common tasks from lowest to highest effort.',
  difficultyTiers: [
    {
      tier: 'Low',
      featureOrTask: 'Adding proprietary media codecs',
      notes: 'Known, repeatable process; requires licensing fees but minimal ongoing engineering.',
    },
    {
      tier: 'Moderate',
      featureOrTask: 'Replacing Google API keys (Safe Browsing, Geolocation)',
      notes: 'Straightforward swap using own cloud project; incurs usage-based costs at scale.',
    },
    {
      tier: 'Moderate',
      featureOrTask: 'Basic spell check and translation replacement',
      notes: 'Integration of open-source libraries (e.g., Hunspell) or self-hosted services.',
    },
    {
      tier: 'High',
      featureOrTask: 'Building a secure auto-update system',
      notes: 'Requires an Omaha-compatible client and a custom server; critical for security patching.',
    },
    {
      tier: 'High',
      featureOrTask: 'Implementing encrypted sync and user accounts',
      notes:
        'Complex server-side development; demands high availability, encryption key management, and a consumer-friendly account system.',
    },
    {
      tier: 'Very High',
      featureOrTask: 'Full-featured password manager with cross-device sync',
      notes: 'Builds upon the sync service; adds sophisticated client-side UX for managing, editing, and generating passwords.',
    },
  ],
  apiDependenciesIntro:
    'Several seemingly minor browser features are disabled in raw Chromium because they depend on proprietary Google APIs. The project must replace these to offer a seamless user experience.',
  apiDependencies: [
    'Spell Checking & Translation: Default implementations call private Google APIs. Replacements can include Hunspell for spell checking and self-hosted machine translation engines.',
    'Geolocation: Relies on Google Location Services; a paid API key is required if the service is retained, or it can be replaced with an open-source alternative (e.g., MLS-based geolocation).',
    "Safe Browsing: Google's service requires an API key that accrues charges based on the number of users. Large forks often substitute their own threat intelligence feed to preserve privacy and control costs.",
  ],
  criticalInfrastructureIntro:
    'Two infrastructure systems are foundational to both security and user loyalty.',
  infrastructure: [
    {
      id: '7.1',
      title: 'Auto-Update System',
      paragraphs: [
        'A robust update mechanism is the single most important security feature of any browser. The project must implement a client compatible with the Omaha update protocol (version 4, or the more stable v3.1) and deploy a corresponding update server. This server must be capable of staged rollouts, differential updates, and secure code signing.',
      ],
    },
    {
      id: '7.2',
      title: 'Encrypted Sync Service',
      intro:
        'Cross-device synchronization of bookmarks, passwords, history, and open tabs is a major driver of user stickiness. Building it requires:',
      bullets: [
        'Server infrastructure for storing encrypted records.',
        'Client-side encryption where the user holds the only keys.',
        'A user account system tied to the sync identity.',
        'Client implementations for all supported platforms.',
      ],
    },
    {
      id: '7.3',
      title: 'Password Management',
      paragraphs: [
        "While Chromium includes the core engine for saving and auto-filling passwords, it lacks a polished management interface (equivalent to Chrome's chrome://password-manager). A competitive fork must provide a dedicated, easy-to-navigate UI for viewing, editing, and exporting credentials—ideally integrated with the sync service for backup and multi-device access.",
      ],
    },
  ],
  differentiationIntro:
    'Once the baseline gaps are closed, meaningful growth comes from unique, value-adding features. Examples that have been proven or proposed in the market include:',
  differentiationIdeas: [
    'Subscription-based, end-to-end encrypted password manager included with premium plans.',
    'Native cryptocurrency wallet integrated into the toolbar with a token-aware new tab dashboard.',
    'Gamer-focused performance hub offering per-tab RAM, CPU, and network controls.',
    'Content monetization platform (e.g., BAT-based rewards) that shares ad revenue directly with users.',
    'Advanced privacy layers, such as Tor integration or built-in VPN.',
  ],
  conclusionIntro:
    "A Chromium fork cannot simply replicate Google Chrome's feature set; the cost and complexity of building equivalent cloud services are prohibitive. The most successful strategy is to:",
  conclusionBullets: [
    'Select a clear niche (privacy, power user, or minimalist) as the guiding light for all development priorities.',
    'Secure the foundational infrastructure—especially the auto-updater and sync service—because these directly affect user safety and retention.',
    'Replace proprietary API dependencies with open-source or self-hosted alternatives to maintain independence and control long-term operating costs.',
    'Layer unique differentiation on top only after the core browser is stable, secure, and reliably updated.',
  ],
  conclusionClosing:
    'A phased approach, starting with a stable, auto-updating core and progressively adding a custom account/sync system, will reduce risk and allow the project to build a loyal user community around an honest, well-defined value proposition.',
  stakeholderNotesHeading: 'Review context',
  stakeholderNotes: [
    {
      label: 'Tradeoffs vs core-engine security work',
      text: "The Chromium source does lack some infrastructure that may or may not be expected as a core minimum requirement; reviewing this broad analysis helps analyze tradeoffs. It's important to review these factors prior to assessing security enhancements in the core engine when proposing value to clients—it's integral to know what is and isn't possible with the underlying engine.",
    },
    {
      label: 'Why enterprises prefer Chromium',
      text: 'Companies often prefer Chromium; this is mostly due to the implementation of these custom features expected by a Chromium fork that they would be able to individually assess.',
    },
  ],
}
