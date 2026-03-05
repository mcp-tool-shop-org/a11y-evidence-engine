---
title: Rules and Output
description: Rule catalog, exit codes, and output structure.
sidebar:
  order: 2
---

## Rules (v0.1.0)

| Rule ID | Description |
|---------|-------------|
| `html.document.missing_lang` | `<html>` element missing `lang` attribute |
| `html.img.missing_alt` | `<img>` element missing `alt` attribute |
| `html.form_control.missing_label` | Form control missing associated label |
| `html.interactive.missing_name` | Interactive element missing accessible name |

## Exit codes

| Code | Meaning |
|------|---------|
| `0` | No findings with severity `error` |
| `2` | At least one `error` finding |
| `3` | Internal engine failure or invalid input |

## Output

Each scan produces a `findings.json` with all detected issues and a `provenance/` directory containing prov-spec records for each finding. These records are independently verifiable without trusting the engine.
