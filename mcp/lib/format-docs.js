import path from 'path'
import { DESCRIPTIONS } from './component-meta.js'

export function storybookUrl(vueFilePath, packageRoot) {
  const rel = path.relative(packageRoot, vueFilePath)
  const withoutExt = rel.replace(/\.vue$/, '')
  const slug = withoutExt.split(path.sep).join('-').toLowerCase()
  return `https://orchidui.vercel.app/storybook/?path=/docs/${slug}--docs`
}

// Extract string-literal enum values from a vue-component-meta schema node.
// PropertyMetaSchema enum: { kind: 'enum', type: string, schema?: PropertyMetaSchema[] }
// Each item in schema[] is either a quoted string literal ("'primary'") or a nested schema.
// Returns string[] or null if not applicable.
function extractEnumValues(schema) {
  if (!schema || typeof schema === 'string' || schema.kind !== 'enum') return null
  if (!schema.schema?.length) return null
  const literals = schema.schema.filter(
    s => typeof s === 'string' &&
      ((s.startsWith("'") && s.endsWith("'")) || (s.startsWith('"') && s.endsWith('"')))
  )
  if (!literals.length) return null
  return literals.map(s => s.slice(1, -1))
}

export function buildProps(meta, storyOptions) {
  const props = {}
  for (const prop of meta.props ?? []) {
    // Skip Vue built-ins (key, ref, class, style, onXxx…)
    if (prop.global) continue

    // Enum values: prefer schema-derived, fall back to story argTypes options
    const schemaValues = extractEnumValues(prop.schema)
    const storyValues  = storyOptions[prop.name]?.length > 0 ? storyOptions[prop.name] : null
    const values = schemaValues ?? storyValues

    const type = values ? 'enum' : (prop.type || 'any')

    const p = { type, required: prop.required ?? false }

    if (prop.default !== undefined && prop.default !== 'undefined') {
      p.default = prop.default.replace(/^'(.*)'$/, '$1').replace(/^"(.*)"$/, '$1')
    }
    if (values) p.values = values
    if (prop.description) p.description = prop.description
    if (prop.tags?.length) {
      const deprecated = prop.tags.find(t => t.name === 'deprecated')
      if (deprecated) p.deprecated = deprecated.text || true
    }

    props[prop.name] = p
  }
  return props
}

export function buildRules(props) {
  const rules = []
  const required = Object.entries(props).filter(([, p]) => p.required).map(([n]) => n)
  if (required.length) rules.push(`Required props: ${required.join(', ')}`)
  for (const [name, prop] of Object.entries(props)) {
    if (prop.type === 'enum') rules.push(`"${name}" must be one of: ${prop.values.join(', ')}`)
  }
  return rules
}

export function formatSchema(exportName, vueFilePath, packageRoot, props, meta, rules, relatedComponents) {
  const events = {}
  for (const e of meta.events ?? []) {
    events[e.name] = {
      description: e.description || '',
      ...(e.signature ? { type: e.signature } : {}),
    }
  }

  const slots = {}
  for (const s of meta.slots ?? []) {
    slots[s.name] = {
      description: s.description || '',
      ...(s.type && s.type !== '(props?: {}) => any' ? { type: s.type } : {}),
    }
  }

  return {
    name: exportName,
    description: DESCRIPTIONS[exportName] ?? `OrchidUI ${exportName} component.`,
    storybook: storybookUrl(vueFilePath, packageRoot),
    props,
    events,
    slots,
    rules,
    relatedComponents,
  }
}

export function formatExamples(exportName, examples) {
  return { component: exportName, examples }
}
