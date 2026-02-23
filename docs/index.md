# a11y-evidence-engine

Headless accessibility evidence engine with [prov-spec](https://github.com/mcp-tool-shop-org/prov-spec) provenance.

## What It Does

Scans HTML files for accessibility issues and produces cryptographically verifiable evidence bundles. Every finding includes provenance records that can be independently verified without trusting the engine.

## Key Features

- **Deterministic output** — same input always produces identical findings
- **prov-spec compatible** — every finding includes verifiable provenance
- **CI-friendly** — exit codes designed for automation
- **No browser required** — pure static HTML analysis

## Install

```bash
npm install -g a11y-evidence-engine
```

## Quick Start

```bash
a11y-engine scan ./path/to/html --out ./results
```

## Links

- [GitHub Repository](https://github.com/mcp-tool-shop-org/a11y-evidence-engine)
- [MCP Tool Shop](https://github.com/mcp-tool-shop-org)
