/**
 * Build static component documentation JSON files into /public/docs/
 *
 * Output:
 *   public/docs/orchid-core.json       — all exported core components
 *   public/docs/orchid-dashboard.json  — all exported dashboard components
 */

import { parse } from 'vue-docgen-api'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CORE_ROOT = path.resolve(__dirname, '../packages/core/src')
const DASHBOARD_ROOT = path.resolve(__dirname, '../packages/dashboard/src')
const OUTPUT_DIR = path.resolve(__dirname, '../public/docs')

const CORE_ALIASES = {
  '@/orchidui-core': CORE_ROOT,
  '@': CORE_ROOT
}

const DASHBOARD_ALIASES = {
  '@/orchidui-dashboard': DASHBOARD_ROOT,
  '@/orchidui-core': CORE_ROOT,
  '@': DASHBOARD_ROOT
}

// ── Alias resolver ──────────────────────────────────────────────────────────

function resolveAlias(importPath, aliases) {
  for (const [alias, replacement] of Object.entries(aliases)) {
    if (importPath === alias || importPath.startsWith(alias + '/')) {
      return importPath.replace(alias, replacement)
    }
  }
  return importPath
}

function resolvePath(importPath, fromDir, aliases) {
  const aliased = resolveAlias(importPath, aliases)
  const resolved = path.isAbsolute(aliased) ? aliased : path.resolve(fromDir, aliased)
  if (!path.extname(resolved) && fs.existsSync(resolved + '/index.js')) {
    return resolved + '/index.js'
  }
  return resolved
}

// ── JS barrel file parser ───────────────────────────────────────────────────

function parseBarrelFile(filePath, aliases, visited = new Set()) {
  if (visited.has(filePath)) return []
  visited.add(filePath)
  if (!fs.existsSync(filePath)) return []

  const content = fs.readFileSync(filePath, 'utf-8')
  const dir = path.dirname(filePath)
  const results = []
  const vueImports = {}

  for (const m of content.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+\.vue)['"]/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  for (const m of content.matchAll(/const\s+(\w+)\s*=\s*defineAsyncComponent[\s\S]*?import\(['"]([^'"]+\.vue)['"]\)/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  for (const m of content.matchAll(/export\s+\*\s+from\s+['"]([^'"]+)['"]/g)) {
    if (m[1].endsWith('.vue')) continue
    const nested = resolvePath(m[1], dir, aliases)
    if (nested.endsWith('.js')) results.push(...parseBarrelFile(nested, aliases, visited))
  }

  const exportedNames = new Set()
  for (const m of content.matchAll(/export\s+\{([^}]+)\}/g)) {
    for (const part of m[1].split(',')) {
      const name = part.replace(/\/\/[^\n]*/g, '').trim()
      if (name) exportedNames.add(name.split(/\s+as\s+/).pop().trim())
    }
  }

  for (const [name, vuePath] of Object.entries(vueImports)) {
    if (exportedNames.size === 0 || exportedNames.has(name)) {
      results.push({ exportName: name, vueFilePath: vuePath })
    }
  }

  return results
}

// ── Index.js parser ─────────────────────────────────────────────────────────

function parseIndexFile(indexPath, aliases) {
  const content = fs.readFileSync(indexPath, 'utf-8')
  const dir = path.dirname(indexPath)
  const results = []
  const vueImports = {}

  for (const m of content.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+\.vue)['"]/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  for (const m of content.matchAll(/const\s+(\w+)\s*=\s*defineAsyncComponent[\s\S]*?import\(['"]([^'"]+\.vue)['"]\)/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  for (const m of content.matchAll(/export\s+\*\s+from\s+['"]([^'"]+)['"]/g)) {
    if (m[1].endsWith('.vue')) continue
    const barrelPath = resolvePath(m[1], dir, aliases)
    if (barrelPath.endsWith('.js')) results.push(...parseBarrelFile(barrelPath, aliases))
  }

  const exportedNames = new Set()
  for (const m of content.matchAll(/export\s+\{([^}]+)\}/g)) {
    for (const part of m[1].split(',')) {
      const name = part.replace(/\/\/[^\n]*/g, '').trim()
      if (name) exportedNames.add(name.split(/\s+as\s+/).pop().trim())
    }
  }

  for (const [name, vuePath] of Object.entries(vueImports)) {
    if (exportedNames.size === 0 || exportedNames.has(name)) {
      results.push({ exportName: name, vueFilePath: vuePath })
    }
  }

  return results
}

// ── Story parser ─────────────────────────────────────────────────────────────

// Extracts balanced {} block starting at startPos
function extractBalanced(str, startPos) {
  let depth = 0
  let i = startPos
  while (i < str.length) {
    if (str[i] === '{') depth++
    else if (str[i] === '}') {
      depth--
      if (depth === 0) return str.slice(startPos, i + 1)
    }
    i++
  }
  return null
}

// Returns { propName: string[] } from argTypes options
function parseStoryOptions(vueFilePath) {
  const storyPath = vueFilePath.replace(/\.vue$/, '.stories.js')
  if (!fs.existsSync(storyPath)) return {}

  const content = fs.readFileSync(storyPath, 'utf-8')
  const propOptions = {}

  for (const m of content.matchAll(/(\w+)\s*:\s*\{[^{}]*options\s*:\s*(\[[^\]]*\])/g)) {
    const propName = m[1]
    if (propName === 'argTypes') continue
    try {
      const options = new Function('return ' + m[2])()
      if (Array.isArray(options) && options.length > 0) {
        propOptions[propName] = [...new Set(options.map(String).filter(Boolean))]
      }
    } catch { /* skip */ }
  }

  return propOptions
}

// Returns [{ name, props }] from each named story export's args
function parseStoryExamples(vueFilePath) {
  const storyPath = vueFilePath.replace(/\.vue$/, '.stories.js')
  if (!fs.existsSync(storyPath)) return []

  const content = fs.readFileSync(storyPath, 'utf-8')
  const examples = []

  for (const m of content.matchAll(/export\s+const\s+(\w+)\s*=\s*\{/g)) {
    const name = m[1]
    // position of the opening { of the story object
    const storyStart = m.index + m[0].length - 1
    const storyObj = extractBalanced(content, storyStart)
    if (!storyObj) continue

    // Find args: { within the story object
    const argsIdx = storyObj.search(/\bargs\s*:\s*\{/)
    if (argsIdx === -1) continue

    const bracePos = storyObj.indexOf('{', argsIdx)
    const argsStr = extractBalanced(storyObj, bracePos)
    if (!argsStr) continue

    try {
      const args = new Function('return ' + argsStr)()
      if (args && typeof args === 'object') {
        // Filter out empty placeholder values
        const cleaned = Object.fromEntries(
          Object.entries(args).filter(([, v]) => v !== '' && v !== null && v !== undefined)
        )
        if (Object.keys(cleaned).length > 0) {
          examples.push({ name, props: cleaned })
        }
      }
    } catch { /* skip if args reference imported variables */ }
  }

  return examples
}

// ── Category → tags mapping ──────────────────────────────────────────────────

const CATEGORY_TAGS = {
  form:          ['form', 'input', 'interactive'],
  overlay:       ['overlay', 'modal', 'popup'],
  datadisplay:   ['data', 'display', 'list', 'table'],
  disclosure:    ['navigation', 'accordion', 'tabs', 'steps'],
  elements:      ['layout', 'navigation', 'page'],
  feedback:      ['feedback', 'notification', 'status'],
  mediaandicons: ['media', 'icon', 'avatar', 'image'],
  storedesign:   ['design', 'theme', 'store'],
  datatable:     ['table', 'data', 'filter', 'pagination'],
  formbuilder:   ['form', 'builder', 'dynamic'],
  theme:         ['theme', 'color', 'design'],
  dashboard:     ['chart', 'graph', 'analytics', 'dashboard']
}

function getTags(vueFilePath, packageRoot) {
  const rel = path.relative(packageRoot, vueFilePath)
  const cat = rel.split(path.sep)[0].toLowerCase().replace(/[^a-z]/g, '')
  return CATEGORY_TAGS[cat] ?? [cat]
}

// ── Storybook URL generator ──────────────────────────────────────────────────

function storybookUrl(vueFilePath, packageRoot) {
  const rel = path.relative(packageRoot, vueFilePath)
  const withoutExt = rel.replace(/\.vue$/, '')
  const slug = withoutExt.split(path.sep).join('-').toLowerCase()
  return `https://orchidui.vercel.app/storybook/?path=/docs/${slug}--docs`
}

// ── Doc formatter ────────────────────────────────────────────────────────────

function formatDoc(doc, exportName, vueFilePath, packageRoot) {
  const storyOptions = parseStoryOptions(vueFilePath)
  const examples = parseStoryExamples(vueFilePath)

  const rel = path.relative(packageRoot, vueFilePath)
  const category = rel.split(path.sep)[0]

  const result = {
    name: exportName,
    description: doc.description || '',
    category,
    tags: getTags(vueFilePath, packageRoot),
    storybook: storybookUrl(vueFilePath, packageRoot),
    props: {},
    events: {},
    slots: {},
    rules: [],
    examples: []
  }

  // Props as object — type:"enum" when values present
  for (const prop of doc.props ?? []) {
    const storyVals = storyOptions[prop.name]
    const values =
      prop.values?.length > 0 ? prop.values : storyVals?.length > 0 ? storyVals : null

    let type = 'any'
    if (prop.type) {
      type =
        prop.type.name === 'union'
          ? prop.type.elements?.map((e) => e.name).join(' | ') ?? prop.type.name
          : prop.type.name
    }
    if (values) type = 'enum'

    const p = { type, required: prop.required || false }

    if (prop.defaultValue?.value !== undefined && prop.defaultValue.value !== 'undefined') {
      // strip surrounding quotes from string defaults
      p.default = prop.defaultValue.value.replace(/^'(.*)'$/, '$1')
    }

    if (values) p.values = values
    if (prop.description) p.description = prop.description

    result.props[prop.name] = p
  }

  // Events as object
  for (const e of doc.events ?? []) {
    result.events[e.name] = {
      description: e.description || '',
      ...(e.type ? { type: e.type.names?.join(' | ') ?? e.type.name } : {})
    }
  }

  // Slots as object
  for (const s of doc.slots ?? []) {
    result.slots[s.name] = {
      description: s.description || '',
      ...(s.bindings?.length > 0
        ? { bindings: s.bindings.map((b) => ({ name: b.name, ...(b.type?.name ? { type: b.type.name } : {}) })) }
        : {})
    }
  }

  // Auto-generate rules
  const requiredProps = Object.entries(result.props)
    .filter(([, p]) => p.required)
    .map(([name]) => name)
  if (requiredProps.length > 0) {
    result.rules.push(`Required props: ${requiredProps.join(', ')}`)
  }
  for (const [name, prop] of Object.entries(result.props)) {
    if (prop.type === 'enum') {
      result.rules.push(`"${name}" must be one of: ${prop.values.join(', ')}`)
    }
  }

  result.examples = examples

  return result
}

// ── Build ────────────────────────────────────────────────────────────────────

async function buildPackageDocs(label, indexPath, aliases, outputFile, packageRoot) {
  console.log(`\nBuilding ${label}...`)

  const entries = parseIndexFile(indexPath, aliases)
  console.log(`  Found ${entries.length} exported components`)

  const docs = []
  let success = 0
  let failed = 0

  for (const { exportName, vueFilePath } of entries) {
    if (!fs.existsSync(vueFilePath)) {
      console.warn(`  ✗ ${exportName}: file not found`)
      failed++
      continue
    }

    try {
      const raw = await parse(vueFilePath, { alias: aliases })
      const doc = formatDoc(raw, exportName, vueFilePath, packageRoot)
      docs.push(doc)
      console.log(`  ✓ ${exportName}`)
      success++
    } catch (err) {
      console.warn(`  ✗ ${exportName}: ${err.message}`)
      failed++
    }
  }

  const registry = {
    version: '1.0',
    library: label === 'orchid-core' ? '@orchidui/core' : '@orchidui/dashboard',
    generatedAt: new Date().toISOString().split('T')[0],
    total: docs.length,
    components: docs
  }

  fs.writeFileSync(outputFile, JSON.stringify(registry, null, 2))
  console.log(`  → ${outputFile} (${success} components, ${failed} failed)`)
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  await buildPackageDocs(
    'orchid-core',
    path.join(CORE_ROOT, 'index.js'),
    CORE_ALIASES,
    path.join(OUTPUT_DIR, 'orchid-core.json'),
    CORE_ROOT
  )

  await buildPackageDocs(
    'orchid-dashboard',
    path.join(DASHBOARD_ROOT, 'index.js'),
    DASHBOARD_ALIASES,
    path.join(OUTPUT_DIR, 'orchid-dashboard.json'),
    DASHBOARD_ROOT
  )

  console.log('\nDone.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
