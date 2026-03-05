---
title: Provenance
description: How prov-spec records work.
sidebar:
  order: 3
---

## Three prov-spec records per finding

Each finding includes three independently verifiable records:

### 1. record.json

Evidence extraction using `engine.extract.evidence.json_pointer`. Contains the raw evidence data anchored to the source HTML via JSON Pointer.

### 2. digest.json

SHA-256 hash of canonical evidence using `integrity.digest.sha256`. Allows anyone to verify the finding's evidence hasn't been tampered with.

### 3. envelope.json

Wrapped result using `adapter.wrap.envelope_v0_1`. Packages the finding with metadata in a standard envelope format.

## Verification

These records are independently verifiable without trusting the engine. An external auditor can:

1. Re-compute the SHA-256 digest of the evidence
2. Compare it against `digest.json`
3. Confirm the JSON Pointer in `record.json` points to the correct location in the source HTML

## Related tools

- [prov-spec](https://github.com/mcp-tool-shop-org/prov-spec) — The provenance specification this engine implements
- [a11y-mcp-tools](https://github.com/mcp-tool-shop-org/a11y-mcp-tools) — MCP tools that consume evidence bundles
- [a11y-assist](https://github.com/mcp-tool-shop-org/a11y-assist) — Fix advisor that works alongside this engine
