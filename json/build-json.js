/**
 * Build static component documentation JSON files into /public/docs/
 *
 * Output:
 *   public/docs/orchid-core.json              — slim index (name, description, tags, kind, use_for, understand_with, related)
 *   public/docs/orchid-dashboard.json         — slim index
 *   public/docs/components/<Name>.detail.json — schema + example manifest (no code)
 *   public/docs/components/<Name>.<id>.json   — individual example with full code
 */

import { createCheckerByJson } from 'vue-component-meta'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

import { TAGS, DESCRIPTIONS } from './lib/component-meta.js'
import { parseIndexFile } from './lib/parse-index.js'
import {
  parseStoryOptions,
  parseStoryExamples,
  parseStoryRelatedComponents,
  parseStoryMeta
} from './lib/parse-stories.js'
import { buildProps, buildRules, formatDetail, formatExample } from './lib/format-json.js'

const SCHEMA_PATCHES = {
  FormBuilder: {
    props: {
      jsonForm: {
        type: 'FormField[]',
        itemShape: {
          name: 'string | Array<{ key: string }>',
          type: 'string — built-in types: Input, NumberInput, TextArea, PhoneInput, CardInput, Select, Checkbox, CheckboxesGroup, RadioGroup, Toggle, DatePicker, TimePicker, RangeInput, Slider, SectionItem, LinkInput, SelectOptions',
          props: 'Record<string, any> — forwarded to the field component',
          defaultValue: 'any — initial value for this field',
          show_if: 'string | string[] — field name(s) that control visibility',
          show_if_value: 'any | any[] — required value(s) of show_if field(s) to show this field',
          show_if_not: 'any — hide this field when show_if field equals this value',
          show_if_min: 'number | string — show this field when show_if field is >= this value'
        }
      }
    },
    events: {
      onUpdate: {
        description:
          'Emitted when any field value changes. The parent component must update values[form.name] = value externally. For range fields (name is an array), each key in form.name corresponds to the matching index in value.',
        type: '(form: FormField, value: any) => void'
      }
    },
    slots: {
      '[type]': {
        description:
          'Dynamic slot for any field type not in the built-in list. The slot name equals the field\'s type string (e.g. use <template #MyWidget> for a field with type: "MyWidget"). Bindings: form (field config object from jsonForm), value (current field value), error (error message string), onUpdate (function(form, value) to emit the change).'
      }
    }
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ORCHID_ROOT = path.resolve(__dirname, '..')
const CORE_ROOT = path.resolve(ORCHID_ROOT, 'packages/core/src')
const DASHBOARD_ROOT = path.resolve(ORCHID_ROOT, 'packages/dashboard/src')
const OUTPUT_DIR = path.resolve(ORCHID_ROOT, 'public/json')
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
        paths: buildTsPaths(aliases)
      },
      include: ['packages/**/*.vue']
    },
    {
      schema: {}
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
      const storyMeta = parseStoryMeta(vueFilePath)
      const examples = parseStoryExamples(vueFilePath)
      const related = parseStoryRelatedComponents(vueFilePath, exportName)

      const props = buildProps(meta, storyOptions)
      const rules = buildRules(props)

      const detail = formatDetail(
        exportName,
        vueFilePath,
        packageRoot,
        props,
        meta,
        rules,
        examples,
        SCHEMA_PATCHES[exportName]
      )

      fs.writeFileSync(
        path.join(COMPONENTS_DIR, `${exportName}.detail.json`),
        JSON.stringify(detail)
      )

      for (const example of examples) {
        fs.writeFileSync(
          path.join(COMPONENTS_DIR, `${exportName}.${example.id}.json`),
          JSON.stringify(formatExample(exportName, example))
        )
      }

      indexComponents.push({
        name: exportName,
        description: DESCRIPTIONS[exportName] ?? `OrchidUI ${exportName} component.`,
        tags: TAGS[exportName] ?? [],
        kind: storyMeta.kind,
        ...(storyMeta.use_for?.length && { use_for: storyMeta.use_for }),
        ...(storyMeta.understand_with?.length && { understand_with: storyMeta.understand_with }),
        ...(related?.length && { related })
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

  // Remove old format files from previous builds
  for (const f of fs.readdirSync(COMPONENTS_DIR)) {
    if (f.endsWith('.schema.json') || f.endsWith('.examples.json')) {
      fs.unlinkSync(path.join(COMPONENTS_DIR, f))
    }
  }

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
