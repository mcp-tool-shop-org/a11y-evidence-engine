import type { SiteConfig } from '@mcptoolshop/site-theme';

export const config: SiteConfig = {
  title: 'a11y-evidence-engine',
  description: 'Headless accessibility evidence engine with prov-spec provenance',
  logoBadge: 'AE',
  brandName: 'a11y-evidence-engine',
  repoUrl: 'https://github.com/mcp-tool-shop-org/a11y-evidence-engine',
  npmUrl: 'https://www.npmjs.com/package/@mcptoolshop/a11y-evidence-engine',
  footerText: 'MIT Licensed \u2014 built by <a href="https://github.com/mcp-tool-shop-org" style="color:var(--color-muted);text-decoration:underline">mcp-tool-shop-org</a>',

  hero: {
    badge: 'Node.js / CLI',
    headline: 'a11y-evidence-engine,',
    headlineAccent: 'findings you can verify.',
    description: 'Headless accessibility scanner that emits prov-spec provenance records. Every finding includes cryptographically verifiable evidence \u2014 no browser required, deterministic output, CI-ready.',
    primaryCta: { href: '#quick-start', label: 'Get started' },
    secondaryCta: { href: '#features', label: 'Learn more' },
    previews: [
      { label: 'Install', code: 'npm install -g @mcptoolshop/a11y-evidence-engine' },
      { label: 'Scan', code: 'a11y-engine scan ./html --out ./results' },
      { label: 'Verify', code: 'cat results/provenance/finding-0001/digest.json' },
    ],
  },

  sections: [
    {
      kind: 'features',
      id: 'features',
      title: 'Why a11y-evidence-engine?',
      subtitle: 'Accessibility findings backed by cryptographic proof.',
      features: [
        { title: 'Deterministic', desc: 'Same input always produces identical findings and provenance. No randomness, no flaky results.' },
        { title: 'prov-spec Compatible', desc: 'Every finding includes three provenance records: evidence extraction, SHA-256 digest, and MCP envelope.' },
        { title: 'No Browser Required', desc: 'Pure static HTML analysis. No Puppeteer, no Playwright, no headless Chrome \u2014 just the HTML.' },
        { title: 'CI-Friendly', desc: 'Exit codes designed for automation: 0 for clean, 2 for findings, 3 for engine failure.' },
        { title: 'Pairs with a11y-assist', desc: 'This engine finds issues and captures evidence. a11y-assist turns those findings into fixes.' },
        { title: 'Verifiable Without Trust', desc: 'Provenance records are independently verifiable. You don\u2019t have to trust the engine to trust the results.' },
      ],
    },
    {
      kind: 'code-cards',
      id: 'quick-start',
      title: 'Quick Start',
      cards: [
        {
          title: 'Scan & review',
          code: 'npm install -g @mcptoolshop/a11y-evidence-engine\n\n# Scan a file or directory\na11y-engine scan ./path/to/html --out ./results\n\n# View help\na11y-engine --help',
        },
        {
          title: 'Output structure',
          code: 'results/\n\u251c\u2500\u2500 findings.json                    # All findings with metadata\n\u2514\u2500\u2500 provenance/\n    \u2514\u2500\u2500 finding-0001/\n        \u251c\u2500\u2500 record.json              # evidence extraction\n        \u251c\u2500\u2500 digest.json              # SHA-256 integrity\n        \u2514\u2500\u2500 envelope.json            # MCP envelope',
        },
      ],
    },
    {
      kind: 'data-table',
      id: 'rules',
      title: 'Rules (v0.1.0)',
      subtitle: 'Static HTML accessibility checks.',
      columns: ['Rule ID', 'Description'],
      rows: [
        ['html.document.missing_lang', '<html> element missing lang attribute'],
        ['html.img.missing_alt', '<img> element missing alt attribute'],
        ['html.form_control.missing_label', 'Form control missing associated label'],
        ['html.interactive.missing_name', 'Interactive element missing accessible name'],
      ],
    },
    {
      kind: 'data-table',
      id: 'exit-codes',
      title: 'Exit Codes',
      subtitle: 'Designed for CI pipelines.',
      columns: ['Code', 'Meaning'],
      rows: [
        ['0', 'No findings with severity error'],
        ['2', 'At least one error finding'],
        ['3', 'Internal engine failure or invalid input'],
      ],
    },
    {
      kind: 'data-table',
      id: 'provenance',
      title: 'Provenance Records',
      subtitle: 'Three prov-spec records per finding.',
      columns: ['Record', 'Method ID', 'Purpose'],
      rows: [
        ['record.json', 'engine.extract.evidence.json_pointer', 'Evidence extraction with location pointers'],
        ['digest.json', 'integrity.digest.sha256', 'SHA-256 hash of canonical evidence'],
        ['envelope.json', 'adapter.wrap.envelope_v0_1', 'Wrapped result in MCP envelope'],
      ],
    },
  ],
};
