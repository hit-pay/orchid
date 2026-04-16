import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MCP_DIR = path.join(__dirname, 'public/json')
const COMPONENTS_DIR = path.join(MCP_DIR, 'components')
const RAW_COMPONENTS_DIR = path.join(__dirname, 'public/raw/docs/components')
const RAW_EXAMPLES_DIR = path.join(__dirname, 'public/raw/docs/examples')

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

function exampleSlug(compName, exampleId) {
  return `${compName}-${exampleId}`
}

// ─── Tables ───────────────────────────────────────────────────────────────────

function propTable(props) {
  if (!props || !Object.keys(props).length) return ''
  const lines = []
  for (const [name, p] of Object.entries(props)) {
    const meta = []
    meta.push(`**Type:** \`${p.type ?? 'any'}\``)
    if (p.required) meta.push('**Required**')
    if (p.default !== undefined && p.default !== '') meta.push(`**Default:** \`${p.default}\``)
    if (p.values?.length) meta.push(`**Values:** ${p.values.map(v => `\`${v}\``).join(' | ')}`)
    lines.push(`#### \`${name}\``)
    lines.push('')
    lines.push(meta.join(' · '))
    if (p.description) {
      lines.push('')
      lines.push(p.description.trim())
    }
    lines.push('')
  }
  return lines.join('\n')
}

function eventTable(events) {
  if (!events || !Object.keys(events).length) return ''
  const rows = [
    '| Event | Type | Description |',
    '|-------|------|-------------|',
  ]
  for (const [name, e] of Object.entries(events)) {
    rows.push(`| ${name} | ${e.type ?? ''} | ${(e.description ?? '').replace(/\n/g, ' ')} |`)
  }
  return rows.join('\n')
}

function slotTable(slots) {
  if (!slots || !Object.keys(slots).length) return ''
  const rows = [
    '| Slot | Bindings | Description |',
    '|------|----------|-------------|',
  ]
  for (const [name, s] of Object.entries(slots)) {
    const bindings = s.type && s.type !== '{}' ? s.type.replace(/\n/g, ' ') : ''
    rows.push(`| ${name} | ${bindings} | ${(s.description ?? '').replace(/\n/g, ' ')} |`)
  }
  return rows.join('\n')
}

// ─── Per-example .md ─────────────────────────────────────────────────────────

function buildExampleMd(compName, ex) {
  const lines = [
    `# ${compName} — ${ex.title}`,
    '',
  ]
  if (ex.description) lines.push(`> ${ex.description}`, '')

  if (ex.highlights?.length) {
    lines.push('**Key points:**')
    for (const h of ex.highlights) lines.push(`- ${h}`)
    lines.push('')
  }

  const snippet = typeof ex.code === 'string' ? ex.code : ex.code?.snippet
  if (snippet) {
    const lang = ex.code?.language ?? 'vue'
    lines.push(`\`\`\`${lang}`, snippet, '```', '')
  }

  return lines.join('\n')
}

// ─── Per-component .md ───────────────────────────────────────────────────────

function buildComponentMd(comp, detail, exampleFiles) {
  const lines = [
    `# ${comp.name}`,
    '',
    `> ${comp.description ?? `OrchidUI ${comp.name} component.`}`,
    '',
  ]

  const meta = []
  if (comp.kind) meta.push(`**Kind:** ${comp.kind}`)
  if (comp.tags?.length) meta.push(`**Tags:** ${comp.tags.join(', ')}`)
  if (meta.length) lines.push(meta.join(' · '), '')

  if (detail.storybook) lines.push(`**Storybook:** ${detail.storybook}`, '')

  if (comp.use_for?.length) {
    lines.push('**Use for:**')
    for (const u of comp.use_for) lines.push(`- ${u}`)
    lines.push('')
  }

  if (comp.understand_with?.length) {
    lines.push(`**Understand with:** ${comp.understand_with.join(', ')}`, '')
  }

  if (comp.related?.length) {
    lines.push(`**Related:** ${comp.related.join(', ')}`, '')
  }

  // Sort example files by JSON-defined order, fallback to alphabetical
  const jsonOrder = (detail.examples ?? []).map(e => e.id)
  const sortedFiles = [...exampleFiles].sort((a, b) => {
    const aId = path.basename(a, '.json').replace(`${comp.name}.`, '')
    const bId = path.basename(b, '.json').replace(`${comp.name}.`, '')
    const ai = jsonOrder.indexOf(aId)
    const bi = jsonOrder.indexOf(bId)
    if (ai === -1 && bi === -1) return a.localeCompare(b)
    if (ai === -1) return 1
    if (bi === -1) return -1
    return ai - bi
  })

  // Examples — max 3 inline, rest as links
  if (sortedFiles.length) {
    lines.push('## Examples', '')

    const inline = sortedFiles.slice(0, 3)
    const linked = sortedFiles.slice(3)

    for (const f of inline) {
      const ex = readJson(path.join(COMPONENTS_DIR, f))
      const slug = exampleSlug(comp.name, ex.id)
      lines.push(`### ${ex.title}`, '')
      if (ex.description) lines.push(ex.description, '')
      if (ex.highlights?.length) {
        for (const h of ex.highlights) lines.push(`- ${h}`)
        lines.push('')
      }
      const snippet = typeof ex.code === 'string' ? ex.code : ex.code?.snippet
      if (snippet) {
        const lang = ex.code?.language ?? 'vue'
        lines.push(`\`\`\`${lang}`, snippet, '```')
      }
      lines.push(`[Full example](/raw/docs/examples/${slug}.md)`, '')
    }

    if (linked.length) {
      lines.push('### More Examples', '')
      for (const f of linked) {
        const e = readJson(path.join(COMPONENTS_DIR, f))
        const eSlug = exampleSlug(comp.name, e.id)
        lines.push(`- [${e.title}](/raw/docs/examples/${eSlug}.md)${e.description ? ` — ${e.description}` : ''}`)
        if (e.highlights?.length) {
          for (const h of e.highlights) lines.push(`  - ${h}`)
        }
      }
      lines.push('')
    }
  }

  // API
  lines.push('## API', '')

  if (detail.props && Object.keys(detail.props).length) {
    lines.push('### Props', '', propTable(detail.props), '')
  }

  if (detail.events && Object.keys(detail.events).length) {
    lines.push('### Events', '', eventTable(detail.events), '')
  }

  if (detail.slots && Object.keys(detail.slots).length) {
    lines.push('### Slots', '', slotTable(detail.slots), '')
  }

  if (detail.rules?.length) {
    lines.push('### Rules', '')
    for (const r of detail.rules) lines.push(`- ${r}`)
    lines.push('')
  }

  return lines.join('\n')
}

// ─── Generate all raw .md files ──────────────────────────────────────────────

function generateRawDocs(allComponents) {
  fs.mkdirSync(RAW_COMPONENTS_DIR, { recursive: true })
  fs.mkdirSync(RAW_EXAMPLES_DIR, { recursive: true })

  let compCount = 0
  let exCount = 0

  for (const comp of allComponents) {
    const detailFile = path.join(COMPONENTS_DIR, `${comp.name}.detail.json`)
    if (!fs.existsSync(detailFile)) continue

    const detail = readJson(detailFile)

    const prefix = comp.name + '.'
    const exampleFiles = fs.readdirSync(COMPONENTS_DIR)
      .filter(f => f.startsWith(prefix) && !f.endsWith('.detail.json'))
      .sort()

    // Write per-example .md
    for (const f of exampleFiles) {
      const ex = readJson(path.join(COMPONENTS_DIR, f))
      const slug = exampleSlug(comp.name, ex.id)
      fs.writeFileSync(
        path.join(RAW_EXAMPLES_DIR, `${slug}.md`),
        buildExampleMd(comp.name, ex)
      )
      exCount++
    }

    // Write component .md
    fs.writeFileSync(
      path.join(RAW_COMPONENTS_DIR, `${comp.name}.md`),
      buildComponentMd(comp, detail, exampleFiles)
    )
    compCount++
  }

  console.log(`  raw/docs/components: ${compCount} files`)
  console.log(`  raw/docs/examples:   ${exCount} files`)
}

// ─── llms.txt ────────────────────────────────────────────────────────────────

function componentSection(comp) {
  const url = `/raw/docs/components/${comp.name}.md`
  const desc = comp.description ?? `OrchidUI ${comp.name} component.`
  return `- [${comp.name}](${url}): ${desc}`
}

function buildLlmsTxt(coreIndex, dashIndex) {
  return [
    '# OrchidUI',
    '',
    '> A Vue 3 UI component library with Tailwind CSS and OrchidUI design tokens (`oc-*` prefix), built for HitPay products.',
    '',
    '## Getting Started',
    '',
    '- [Full reference](/llms-full.txt): Inlined props, events, slots, rules, and code examples for every component.',
    '',
    '## Usage',
    '',
    '```js',
    "import { Button, Modal, Input } from '@orchidui/core'",
    "import '@orchidui/core/dist/style.css'",
    '```',
    '',
    '- All components are **Vue 3** Composition API',
    '- Styling via **Tailwind CSS** with `oc-*` design tokens',
    '- Icons: `<Icon name="check" />`',
    '- Boolean props follow `is*` convention — e.g. `isLoading`, `isDisabled`',
    '',
    `## @orchidui/core (${coreIndex.total} components)`,
    '',
    ...coreIndex.components.map(componentSection),
    '',
    `## @orchidui/dashboard (${dashIndex.total} components)`,
    '',
    ...dashIndex.components.map(componentSection),
  ].join('\n')
}

// ─── llms-full.txt (all-in-one, no fetching needed) ──────────────────────────

function fullComponentSection(comp) {
  const detailFile = path.join(COMPONENTS_DIR, `${comp.name}.detail.json`)
  if (!fs.existsSync(detailFile)) return componentSection(comp)

  const detail = readJson(detailFile)
  const prefix = comp.name + '.'
  const exampleFiles = fs.readdirSync(COMPONENTS_DIR)
    .filter(f => f.startsWith(prefix) && !f.endsWith('.detail.json'))
    .sort()

  const content = buildComponentMd(comp, detail, exampleFiles)
    .replace(/^# /, '## ')
    .replace(/^## /gm, (_, o) => o === 0 ? '## ' : '### ')

  const refs = [
    '### Reference',
    '',
    `- [Component doc](/raw/docs/components/${comp.name}.md)`,
    '',
  ].join('\n')

  return content + refs
}

function buildLlmsFullTxt(coreIndex, dashIndex) {
  return [
    '# OrchidUI',
    '',
    '> A Vue 3 UI component library with Tailwind CSS and OrchidUI design tokens (`oc-*` prefix), built for HitPay products.',
    '',
    '## Usage',
    '',
    '```js',
    "import { Button, Modal, Input } from '@orchidui/core'",
    "import '@orchidui/core/dist/style.css'",
    '```',
    '',
    '- All components are **Vue 3** Composition API',
    '- Styling via **Tailwind CSS** with `oc-*` design tokens',
    '- Icons: `<Icon name="check" />`',
    '- Boolean props follow `is*` convention — e.g. `isLoading`, `isDisabled`',
    '',
    '---',
    '',
    `# @orchidui/core (${coreIndex.total} components)`,
    '',
    ...coreIndex.components.map(fullComponentSection),
    '',
    '---',
    '',
    `# @orchidui/dashboard (${dashIndex.total} components)`,
    '',
    ...dashIndex.components.map(fullComponentSection),
  ].join('\n')
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const coreIndex = readJson(path.join(MCP_DIR, 'orchid-core.json'))
const dashIndex = readJson(path.join(MCP_DIR, 'orchid-dashboard.json'))
const allComponents = [...coreIndex.components, ...dashIndex.components]

console.log('Generating raw markdown docs...')
generateRawDocs(allComponents)

const llmsTxt = buildLlmsTxt(coreIndex, dashIndex)
const llmsFullTxt = buildLlmsFullTxt(coreIndex, dashIndex)

fs.writeFileSync(path.join(__dirname, 'public/llms.txt'), llmsTxt)
fs.writeFileSync(path.join(__dirname, 'public/llms-full.txt'), llmsFullTxt)

console.log(`llms.txt:      ${(llmsTxt.length / 1024).toFixed(1)} KB`)
console.log(`llms-full.txt: ${(llmsFullTxt.length / 1024).toFixed(1)} KB`)
console.log('Done.')
