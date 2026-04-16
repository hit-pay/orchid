import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MCP_DIR = path.join(__dirname, 'public/mcp')
const COMPONENTS_DIR = path.join(MCP_DIR, 'components')

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

function componentSection(comp, baseUrl = '/mcp/components') {
  const detail = `${baseUrl}/${comp.name}.detail.json`
  const lines = [`## ${comp.name}`, '']

  if (comp.description) lines.push(`${comp.description}`, '')

  const tags = []
  if (comp.kind) tags.push(`kind: ${comp.kind}`)
  if (comp.tags?.length) tags.push(`tags: ${comp.tags.join(', ')}`)
  if (tags.length) lines.push(tags.join(' · '), '')

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

  lines.push(`- Detail: ${detail}`)

  // Find matching example files
  const prefix = comp.name + '.'
  const exampleFiles = fs.existsSync(COMPONENTS_DIR)
    ? fs.readdirSync(COMPONENTS_DIR)
        .filter(f => f.startsWith(prefix) && !f.endsWith('.detail.json'))
        .sort()
    : []

  if (exampleFiles.length) {
    lines.push('- Examples:')
    for (const f of exampleFiles) {
      lines.push(`  - ${baseUrl}/${f}`)
    }
  }

  return lines.join('\n') + '\n'
}

function propTable(props) {
  if (!props || !Object.keys(props).length) return ''
  const rows = []
  rows.push('| Prop | Type | Required | Default | Values |')
  rows.push('|------|------|----------|---------|--------|')
  for (const [name, p] of Object.entries(props)) {
    const values = p.values ? p.values.join(', ') : ''
    rows.push(`| ${name} | ${p.type ?? ''} | ${p.required ? 'yes' : 'no'} | ${p.default ?? ''} | ${values} |`)
  }
  return rows.join('\n')
}

function eventTable(events) {
  if (!events || !Object.keys(events).length) return ''
  const rows = []
  rows.push('| Event | Type | Description |')
  rows.push('|-------|------|-------------|')
  for (const [name, e] of Object.entries(events)) {
    rows.push(`| ${name} | ${e.type ?? ''} | ${(e.description ?? '').replace(/\n/g, ' ')} |`)
  }
  return rows.join('\n')
}

function slotTable(slots) {
  if (!slots || !Object.keys(slots).length) return ''
  const rows = []
  rows.push('| Slot | Description |')
  rows.push('|------|-------------|')
  for (const [name, s] of Object.entries(slots)) {
    rows.push(`| ${name} | ${(s.description ?? '').replace(/\n/g, ' ')} |`)
  }
  return rows.join('\n')
}

function fullComponentSection(comp, baseUrl = '/mcp/components') {
  const detailFile = path.join(COMPONENTS_DIR, `${comp.name}.detail.json`)
  if (!fs.existsSync(detailFile)) return componentSection(comp, baseUrl)

  const detail = readJson(detailFile)
  const lines = []

  lines.push(`## ${comp.name}`)
  lines.push('')
  if (comp.description) lines.push(comp.description, '')
  if (detail.storybook) lines.push(`Storybook: ${detail.storybook}`, '')

  const tags = []
  if (comp.kind) tags.push(`kind: ${comp.kind}`)
  if (comp.tags?.length) tags.push(`tags: ${comp.tags.join(', ')}`)
  if (tags.length) lines.push(tags.join(' · '), '')

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

  if (detail.props && Object.keys(detail.props).length) {
    lines.push('### Props', '')
    lines.push(propTable(detail.props), '')
  }

  if (detail.events && Object.keys(detail.events).length) {
    lines.push('### Events', '')
    lines.push(eventTable(detail.events), '')
  }

  if (detail.slots && Object.keys(detail.slots).length) {
    lines.push('### Slots', '')
    lines.push(slotTable(detail.slots), '')
  }

  if (detail.rules?.length) {
    lines.push('### Rules', '')
    for (const r of detail.rules) lines.push(`- ${r}`)
    lines.push('')
  }

  // Examples
  const prefix = comp.name + '.'
  const exampleFiles = fs.existsSync(COMPONENTS_DIR)
    ? fs.readdirSync(COMPONENTS_DIR)
        .filter(f => f.startsWith(prefix) && !f.endsWith('.detail.json'))
        .sort()
    : []

  if (exampleFiles.length) {
    lines.push('### Examples', '')
    for (const f of exampleFiles) {
      const ex = readJson(path.join(COMPONENTS_DIR, f))
      lines.push(`#### ${ex.title ?? f}`, '')
      if (ex.description) lines.push(ex.description, '')
      const snippet = typeof ex.code === 'string' ? ex.code : ex.code?.snippet
      if (snippet) {
        const lang = ex.code?.language ?? 'vue'
        lines.push(`\`\`\`${lang}`)
        lines.push(snippet)
        lines.push('```')
      }
      lines.push('')
    }
  }

  return lines.join('\n')
}

function buildLlmsTxt(coreIndex, dashIndex) {
  const sections = [
    '# OrchidUI — LLM Reference',
    '',
    'OrchidUI is a Vue 3 component library with Tailwind CSS and OrchidUI design tokens (`oc-*` prefix).',
    '',
    '## Packages',
    '',
    `- \`@orchidui/core\` — ${coreIndex.total} components (UI primitives, forms, layout, navigation)`,
    `- \`@orchidui/dashboard\` — ${dashIndex.total} components (charts, editors, specialized widgets)`,
    '',
    '## Base paths',
    '',
    '- Index: `/mcp/orchid-core.json`, `/mcp/orchid-dashboard.json`',
    '- Components: `/mcp/components/<Name>.detail.json`',
    '- Examples: `/mcp/components/<Name>.<example-id>.json`',
    '',
    '---',
    '',
    '# @orchidui/core',
    '',
    ...coreIndex.components.map(c => componentSection(c)),
    '',
    '---',
    '',
    '# @orchidui/dashboard',
    '',
    ...dashIndex.components.map(c => componentSection(c)),
  ]
  return sections.join('\n')
}

function buildLlmsFullTxt(coreIndex, dashIndex) {
  const sections = [
    '# OrchidUI — Full LLM Reference',
    '',
    'OrchidUI is a Vue 3 component library with Tailwind CSS and OrchidUI design tokens (`oc-*` prefix).',
    '',
    '## Packages',
    '',
    `- \`@orchidui/core\` — ${coreIndex.total} components (UI primitives, forms, layout, navigation)`,
    `- \`@orchidui/dashboard\` — ${dashIndex.total} components (charts, editors, specialized widgets)`,
    '',
    '---',
    '',
    '# @orchidui/core',
    '',
    ...coreIndex.components.map(c => fullComponentSection(c)),
    '',
    '---',
    '',
    '# @orchidui/dashboard',
    '',
    ...dashIndex.components.map(c => fullComponentSection(c)),
  ]
  return sections.join('\n')
}

const coreIndex = readJson(path.join(MCP_DIR, 'orchid-core.json'))
const dashIndex = readJson(path.join(MCP_DIR, 'orchid-dashboard.json'))

const llmsTxt = buildLlmsTxt(coreIndex, dashIndex)
const llmsFullTxt = buildLlmsFullTxt(coreIndex, dashIndex)

fs.writeFileSync(path.join(__dirname, 'public/llms.txt'), llmsTxt)
fs.writeFileSync(path.join(__dirname, 'public/llms-full.txt'), llmsFullTxt)

console.log(`llms.txt: ${(llmsTxt.length / 1024).toFixed(1)} KB`)
console.log(`llms-full.txt: ${(llmsFullTxt.length / 1024).toFixed(1)} KB`)
console.log('Done.')
