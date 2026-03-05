---
title: Getting Started
description: Install, scan, and verify findings.
sidebar:
  order: 1
---

## Install

```bash
npm install -g @accessibility-suite/evidence-engine
```

## Scan HTML files

```bash
# Scan a file or directory
a11y-engine scan ./path/to/html --out ./results

# View help
a11y-engine --help
```

## Output structure

```
results/
├── findings.json                    # All findings with metadata
└── provenance/
    └── finding-0001/
        ├── record.json              # engine.extract.evidence.json_pointer
        ├── digest.json              # integrity.digest.sha256
        └── envelope.json            # adapter.wrap.envelope_v0_1
```

## Features

- **Deterministic output** — same input always produces identical findings and provenance
- **prov-spec compatible** — every finding includes cryptographically verifiable evidence
- **CI-friendly** — exit codes designed for automation
- **No browser required** — pure static HTML analysis
