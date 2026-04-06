/**
 * Build static component documentation JSON files into /public/docs/
 *
 * Output:
 *   public/docs/orchid-core.json            — slim index (name, description, tags)
 *   public/docs/orchid-dashboard.json       — slim index
 *   public/docs/components/<Name>.schema.json   — full component detail per file
 *   public/docs/components/<Name>.examples.json — code examples per file
 */

import { createCheckerByJson } from 'vue-component-meta'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

import { TAGS } from './lib/component-meta.js'
import { parseIndexFile } from './lib/parse-index.js'
import { parseStoryOptions, parseStoryExamples, parseStoryRelatedComponents } from './lib/parse-stories.js'
import { buildProps, buildRules, formatSchema, formatExamples } from './lib/format-docs.js'
import { COMPONENT_DOCS } from './lib/component-docs/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ORCHID_ROOT    = path.resolve(__dirname, '..')
const CORE_ROOT      = path.resolve(ORCHID_ROOT, 'packages/core/src')
const DASHBOARD_ROOT = path.resolve(ORCHID_ROOT, 'packages/dashboard/src')
const OUTPUT_DIR     = path.resolve(ORCHID_ROOT, 'public/docs')
const COMPONENTS_DIR = path.join(OUTPUT_DIR, 'components')

const CORE_ALIASES = {
  '@/orchidui-core': CORE_ROOT,
  '@': CORE_ROOT
}

const DASHBOARD_ALIASES = {
  '@/orchidui-dashboard': DASHBOARD_ROOT,
  '@/orchidui-core': CORE_ROOT,
  '@': DASHBOARD_ROOT
}

// Convert { '@/foo': '/abs/path' } → TypeScript paths relative to ORCHID_ROOT
function buildTsPaths(aliases) {
  const paths = {}
  for (const [alias, absTarget] of Object.entries(aliases)) {
    const rel = path.relative(ORCHID_ROOT, absTarget)
    paths[alias] = [rel]
    paths[`${alias}/*`] = [`${rel}/*`]
  }
  return paths
}

function createChecker(aliases) {
  return createCheckerByJson(
    ORCHID_ROOT,
    {
      compilerOptions: {
        baseUrl: '.',
        paths: buildTsPaths(aliases),
      },
      include: ['packages/**/*.vue'],
    },
    {
      schema: {},
    }
  )
}

async function buildPackageDocs(label, indexPath, aliases, outputFile, packageRoot) {
  console.log(`\nBuilding ${label}...`)

  const rawEntries = parseIndexFile(indexPath, aliases)
  const seen = new Set()
  const entries = rawEntries.filter(({ exportName }) => {
    if (seen.has(exportName)) return false
    seen.add(exportName)
    return true
  })
  console.log(`  Found ${entries.length} exported components`)

  const checker = createChecker(aliases)

  const indexComponents = []
  let success = 0
  let failed = 0

  for (const { exportName, vueFilePath } of entries) {
    if (!fs.existsSync(vueFilePath)) {
      console.warn(`  ✗ ${exportName}: file not found`)
      failed++
      continue
    }

    try {
      const meta = checker.getComponentMeta(vueFilePath)
      const storyOptions = parseStoryOptions(vueFilePath)
      const examples = parseStoryExamples(vueFilePath)
      const relatedComponents = parseStoryRelatedComponents(vueFilePath, exportName)

      const overrides = COMPONENT_DOCS[exportName]

      const props = buildProps(meta, storyOptions)
      const rules = buildRules(props)

      const schema = formatSchema(exportName, vueFilePath, packageRoot, props, meta, rules, relatedComponents, overrides)
      const examplesDoc = formatExamples(exportName, examples, overrides)

      fs.writeFileSync(path.join(COMPONENTS_DIR, `${exportName}.schema.json`), JSON.stringify(schema))
      fs.writeFileSync(path.join(COMPONENTS_DIR, `${exportName}.examples.json`), JSON.stringify(examplesDoc))

      indexComponents.push({
        name: exportName,
        description: schema.description,
        tags: TAGS[exportName] ?? [],
      })

      console.log(`  ✓ ${exportName}`)
      success++
    } catch (err) {
      console.warn(`  ✗ ${exportName}: ${err.message}`)
      failed++
    }
  }

  checker.close?.()

  const index = {
    version: '1.0',
    library: label === 'orchid-core' ? '@orchidui/core' : '@orchidui/dashboard',
    generatedAt: new Date().toISOString().split('T')[0],
    total: indexComponents.length,
    components: indexComponents
  }

  fs.writeFileSync(outputFile, JSON.stringify(index))
  console.log(`  → ${outputFile} (${success} components, ${failed} failed)`)
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  fs.mkdirSync(COMPONENTS_DIR, { recursive: true })

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
