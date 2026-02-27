<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.md">English</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/a11y-evidence-engine/readme.png" alt="a11y-evidence-engine" width="400">
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/a11y-evidence-engine/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/a11y-evidence-engine/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://www.npmjs.com/package/@mcptoolshop/a11y-evidence-engine"><img src="https://img.shields.io/npm/v/@mcptoolshop/a11y-evidence-engine" alt="npm"></a>
  <a href="https://codecov.io/gh/mcp-tool-shop-org/a11y-evidence-engine"><img src="https://codecov.io/gh/mcp-tool-shop-org/a11y-evidence-engine/branch/main/graph/badge.svg" alt="Coverage"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow" alt="MIT License"></a>
  <a href="https://mcp-tool-shop-org.github.io/a11y-evidence-engine/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

**Motor de análisis de accesibilidad sin interfaz que genera registros de trazabilidad según la especificación [prov-spec](https://github.com/mcp-tool-shop-org/prov-spec).**

Diseñado para funcionar en conjunto con **a11y-assist**: este motor identifica problemas y recopila evidencia verificable; a11y-assist transforma esos hallazgos en soluciones.

---

## Características

- **Resultado determinista:** la misma entrada siempre produce los mismos resultados y trazabilidad.
- **Compatible con prov-spec:** cada hallazgo incluye evidencia verificable criptográficamente.
- **Amigable para CI:** códigos de salida diseñados para la automatización.
- **No requiere navegador:** análisis estático de HTML puro.

---

## Instalación

```bash
npm install -g @mcptoolshop/a11y-evidence-engine
```

---

## Uso

```bash
# Scan a file or directory
a11y-engine scan ./path/to/html --out ./results

# View help
a11y-engine --help
```

---

## Salida

```
results/
├── findings.json                    # All findings with metadata
└── provenance/
    └── finding-0001/
        ├── record.json              # engine.extract.evidence.json_pointer
        ├── digest.json              # integrity.digest.sha256
        └── envelope.json            # adapter.wrap.envelope_v0_1
```

---

## Códigos de salida

| Código | Significado |
|------|---------|
| 0 | No se encontraron problemas con la severidad "error". |
| 2 | Se encontró al menos un problema con la severidad "error". |
| 3 | Fallo interno del motor / entrada inválida. |

---

## Reglas (v0.1.0)

| ID de la regla | Descripción |
|---------|-------------|
| `html.document.missing_lang` | Elemento `<html>` sin el atributo `lang`. |
| `html.img.missing_alt` | Elemento `<img>` sin el atributo `alt`. |
| `html.form_control.missing_label` | Elemento de control de formulario sin etiqueta asociada. |
| `html.interactive.missing_name` | Elemento interactivo sin nombre accesible. |

---

## Trazabilidad

Cada hallazgo incluye tres registros prov-spec:

1. **record.json**: Extracción de evidencia utilizando `engine.extract.evidence.json_pointer`.
2. **digest.json**: Hash SHA-256 de la evidencia canónica utilizando `integrity.digest.sha256`.
3. **envelope.json**: Resultado encapsulado utilizando `adapter.wrap.envelope_v0_1`.

Estos registros se pueden verificar de forma independiente sin confiar en el motor.

---

## Relacionado

- [prov-spec](https://github.com/mcp-tool-shop-org/prov-spec) - Especificación de trazabilidad.
- [a11y-mcp-tools](https://github.com/mcp-tool-shop-org/a11y-mcp-tools) - Herramientas MCP para accesibilidad.
- [a11y-assist](https://github.com/mcp-tool-shop-org/a11y-assist) - Asistente de corrección.
- [a11y-demo-site](https://github.com/mcp-tool-shop-org/a11y-demo-site) - Demostración con flujos de trabajo de CI.

---

## Seguridad y alcance de datos

**Datos accedidos:** archivos HTML pasados como argumentos de línea de comandos (solo lectura), resultados y trazabilidad escritos en el directorio `--out`. **Datos NO accedidos:** ningún archivo fuera de los argumentos especificados y el directorio de salida, ninguna credencial del sistema operativo, ningún dato del navegador. **No hay salida de red:** todo el análisis se realiza localmente. **No se recopilan ni se envían datos de telemetría.**

## Licencia

[MIT](LICENSE)

---

Creado por <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
