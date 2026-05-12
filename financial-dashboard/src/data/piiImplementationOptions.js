/**
 * PII stripping / privacy filter paths before prompts reach the LLM.
 * Rendered on Sprint 2 via PiiImplementationOptions.jsx
 */
export const piiImplementationOptions = {
  title: 'PII implementation options for Oasis and tradeoffs',
  constraintSummary:
    'The main constraint to navigate is Windows RAM: roughly a 2GB hit from local models would be very visible to users, while the browser-based Oasis experience also has vector-search generation to keep lightweight. Below are the top three implementation paths and how they trade off accuracy, infra, and client fit.',

  options: [
    {
      id: 1,
      shortLabel: 'Option 1: On-device OpenAI privacy filter',
      whatItIs:
        'Open-weight Mixture-of-Experts model (Apache 2.0) that runs locally—PII never leaves the machine.',
      pros: [
        '100% on-device',
        'Strong accuracy (F1 ~97.4% cited for this class of filter)',
        'Apache 2.0 open source',
        'Strong data-sovereignty story',
      ],
      cons: [
        '~2GB RAM overhead; heavy on Windows—users will notice the resource drag',
        'PII restoration logic adds product/engineering complexity',
      ],
      bestFor:
        'Mac clients with ample unified memory (e.g. 16GB Apple Silicon) where the overhead is negligible. Not the right default for Windows or the browser build today.',
    },
    {
      id: 2,
      shortLabel: 'Option 2: Microsoft Presidio (server-side / API)',
      whatItIs:
        'Mature open-source (MIT) library hosted as a service—regex, pattern matching, and ML-based PII detection.',
      pros: [
        'Zero user-side RAM overhead',
        'Same behavior across Mac, Windows, and browser',
        'Reversible PII (preserves context for the model)',
        'Fully under our control when self-hosted',
      ],
      cons: [
        '~23% less accurate than LLM-based filters (order-of-magnitude tradeoff vs on-device MoE)',
        'Latency added per request',
        'Requires backend operations and deployment',
      ],
      bestFor:
        'Firefox Oasis browser version—eliminates the Windows bottleneck while we already generate search vectors. Natural universal fallback for thin clients.',
    },
    {
      id: 3,
      shortLabel: 'Option 3: Nightfall AI (managed SaaS DLP)',
      whatItIs:
        'Fully managed, AI-native detection platform that scans text and 100+ file types before traffic reaches any LLM.',
      pros: [
        'Minimal new infrastructure on our side',
        'Built-in compliance positioning (HIPAA, PCI-DSS, SOC 2)',
        'Continuously updated detection models',
      ],
      cons: [
        'Recurring per-seat/API cost',
        'Third party processes raw content—privacy and legal review required',
        'Additional HTTPS hop and latency',
      ],
      bestFor:
        'Organization-wide compliance and heavy file-scanning use cases—not necessarily the embedded in-browser Oasis path.',
    },
  ],

  comparisonIntro: 'At-a-glance comparison:',
  comparisonRows: [
    {
      feature: 'Primary method',
      option1: 'AI model (~1.5B params, mixture-of-experts)',
      option2: 'Regex, pattern matching, and ML detectors',
      option3: 'AI-native GenAI detection engine',
    },
    {
      feature: 'Deployment',
      option1: 'On-device or self-hosted server',
      option2: 'Self-hosted server / API',
      option3: 'SaaS / API',
    },
    {
      feature: 'Key pros',
      option1: '100% PII stays on-device; high accuracy; Apache 2.0',
      option2: 'No user RAM overhead; reversible PII; highly configurable; MIT',
      option3: 'Managed service; broad file detection; HIPAA/PCI positioning',
    },
    {
      feature: 'Key cons',
      option1: '~2GB local RAM; rough on Windows; restoration complexity',
      option2: 'Pattern/ML limitations vs LLM filters; backend ops; latency',
      option3: 'Recurring SaaS cost; third-party data access',
    },
    {
      feature: 'Best for',
      option1: 'Mac apps (native, 16GB+ local AI headroom)',
      option2: 'Browser app (Firefox Oasis) to avoid local overhead with vector search',
      option3: 'Org-wide compliance and document/file scanning',
    },
  ],

  stakeholderNotesHeading: 'Review context',
  stakeholderNotes: [
    {
      label: 'Nightfall positioning',
      text: "Deprioritize Nightfall for the embedded Oasis path for now—the value proposition shows up strongest when handling document databases and information redaction at scale, not necessarily the in-browser assistant loop.",
    },
    {
      label: 'Product and packaging',
      text: 'The right approach depends on product marketing and what is prioritized: wider client compatibility vs tighter resource constraints—each path implies real tradeoffs, and most options are robust in different dimensions.',
    },
    {
      label: 'Presidio and enterprise norms',
      text: 'Presidio is the more conventional, battle-tested pattern and is likely what a security-conscious enterprise (e.g. from a vendor meeting) would already be familiar with or running adjacent to their stack.',
    },
  ],
}
