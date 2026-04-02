/**
 * Build static component documentation JSON files into /public/docs/
 *
 * Output:
 *   public/docs/orchid-core.json       — all exported core components
 *   public/docs/orchid-dashboard.json  — all exported dashboard components
 *
 * Component names match the export names from each package's index.js.
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
  return path.isAbsolute(aliased) ? aliased : path.resolve(fromDir, aliased)
}

// ── JS barrel file parser ───────────────────────────────────────────────────
// Returns: [{ exportName, vueFilePath }]

function parseBarrelFile(filePath, aliases, visited = new Set()) {
  if (visited.has(filePath)) return []
  visited.add(filePath)

  if (!fs.existsSync(filePath)) return []

  const content = fs.readFileSync(filePath, 'utf-8')
  const dir = path.dirname(filePath)
  const results = []

  // Collect import name → vue file path (both regular and defineAsyncComponent)
  const vueImports = {}

  // import X from './X.vue'
  for (const m of content.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+\.vue)['"]/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  // const X = defineAsyncComponent(() => import('./X.vue'))  (multiline-safe)
  for (const m of content.matchAll(/const\s+(\w+)\s*=\s*defineAsyncComponent[\s\S]*?import\(['"]([^'"]+\.vue)['"]\)/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  // export * from './other-barrel.js'  (recurse)
  for (const m of content.matchAll(/export\s+\*\s+from\s+['"]([^'"]+\.js)['"]/g)) {
    const nested = resolvePath(m[1], dir, aliases)
    results.push(...parseBarrelFile(nested, aliases, visited))
  }

  // export { X, Y, Z }  — collect what names are actually exported
  const exportedNames = new Set()
  for (const m of content.matchAll(/export\s+\{([^}]+)\}/g)) {
    for (const part of m[1].split(',')) {
      // Strip inline // comments before checking the name
      const name = part.replace(/\/\/[^\n]*/g, '').trim()
      if (name) exportedNames.add(name.split(/\s+as\s+/).pop().trim())
    }
  }

  // Map: export name → vue file
  for (const [name, vuePath] of Object.entries(vueImports)) {
    if (exportedNames.size === 0 || exportedNames.has(name)) {
      results.push({ exportName: name, vueFilePath: vuePath })
    }
  }

  return results
}

// ── Index.js parser ─────────────────────────────────────────────────────────
// Parses a package's main index.js and returns [{ exportName, vueFilePath }]

function parseIndexFile(indexPath, aliases) {
  const content = fs.readFileSync(indexPath, 'utf-8')
  const dir = path.dirname(indexPath)
  const results = []

  // Collect import name → vue file
  const vueImports = {}

  // import X from './path/X.vue'
  for (const m of content.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+\.vue)['"]/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  // const X = defineAsyncComponent(() => import('./path/X.vue'))
  for (const m of content.matchAll(/const\s+(\w+)\s*=\s*defineAsyncComponent[\s\S]*?import\(['"]([^'"]+\.vue)['"]\)/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  // export * from './path/barrel.js'  — delegate to barrel parser
  for (const m of content.matchAll(/export\s+\*\s+from\s+['"]([^'"]+\.js)['"]/g)) {
    const barrelPath = resolvePath(m[1], dir, aliases)
    results.push(...parseBarrelFile(barrelPath, aliases))
  }

  // export { X, Y, Z }  — pick up names from direct imports above
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

// ── Vue component doc formatter ─────────────────────────────────────────────

function formatDoc(doc, exportName) {
  const result = {
    name: exportName,
    description: doc.description || ''
  }

  if (doc.props && doc.props.length > 0) {
    result.props = doc.props.map((prop) => {
      const formatted = { name: prop.name, required: prop.required || false }

      if (prop.type) {
        formatted.type =
          prop.type.name === 'union'
            ? prop.type.elements?.map((e) => e.name).join(' | ') ?? prop.type.name
            : prop.type.name
      }

      if (prop.defaultValue?.value !== undefined && prop.defaultValue.value !== 'undefined') {
        formatted.default = prop.defaultValue.value
      }

      if (prop.description) formatted.description = prop.description
      if (prop.values?.length > 0) formatted.values = prop.values

      return formatted
    })
  }

  if (doc.events?.length > 0) {
    result.events = doc.events.map((e) => ({
      name: e.name,
      description: e.description || '',
      ...(e.type ? { type: e.type.names?.join(' | ') ?? e.type.name } : {})
    }))
  }

  if (doc.slots?.length > 0) {
    result.slots = doc.slots.map((s) => ({
      name: s.name,
      description: s.description || '',
      ...(s.bindings?.length > 0
        ? { bindings: s.bindings.map((b) => ({ name: b.name, type: b.type?.name, description: b.description })) }
        : {})
    }))
  }

  if (doc.methods?.length > 0) {
    result.methods = doc.methods.map((m) => ({
      name: m.name,
      description: m.description || '',
      ...(m.params?.length > 0
        ? { params: m.params.map((p) => ({ name: p.name, type: p.type?.name, description: p.description })) }
        : {}),
      ...(m.returns ? { returns: m.returns } : {})
    }))
  }

  return result
}

// ── Build ────────────────────────────────────────────────────────────────────

async function buildPackageDocs(label, indexPath, aliases, outputFile) {
  console.log(`\nBuilding ${label}...`)

  const entries = parseIndexFile(indexPath, aliases)
  console.log(`  Found ${entries.length} exported components`)

  const docs = []
  let success = 0
  let failed = 0

  for (const { exportName, vueFilePath } of entries) {
    if (!fs.existsSync(vueFilePath)) {
      console.warn(`  ✗ ${exportName}: file not found (${vueFilePath})`)
      failed++
      continue
    }

    try {
      const raw = await parse(vueFilePath, { alias: aliases })
      const doc = formatDoc(raw, exportName)
      docs.push(doc)
      console.log(`  ✓ ${exportName}`)
      success++
    } catch (err) {
      console.warn(`  ✗ ${exportName}: ${err.message}`)
      failed++
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(docs, null, 2))
  console.log(`  → ${outputFile} (${success} components, ${failed} failed)`)
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  await buildPackageDocs(
    'orchid-core',
    path.join(CORE_ROOT, 'index.js'),
    CORE_ALIASES,
    path.join(OUTPUT_DIR, 'orchid-core.json')
  )

  await buildPackageDocs(
    'orchid-dashboard',
    path.join(DASHBOARD_ROOT, 'index.js'),
    DASHBOARD_ALIASES,
    path.join(OUTPUT_DIR, 'orchid-dashboard.json')
  )

  console.log('\nDone.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
