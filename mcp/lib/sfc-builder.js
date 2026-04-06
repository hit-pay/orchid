import { CORE_COMPONENT_NAMES, DASHBOARD_COMPONENT_NAMES } from './component-meta.js'

function camelToKebab(str) {
  return str.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
}

function serializeValue(value) {
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  if (typeof value === 'boolean' || typeof value === 'number') return String(value)
  if (Array.isArray(value)) return `[${value.map(serializeValue).join(', ')}]`
  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value).map(([k, v]) => `${k}: ${serializeValue(v)}`)
    return `{ ${entries.join(', ')} }`
  }
  return String(value)
}

function propToAttr(key, value) {
  const attr = camelToKebab(key)
  if (typeof value === 'string') return `${attr}="${value}"`
  return `:${attr}="${serializeValue(value).replace(/"/g, "'")}"`
}

function stripThemeWrapper(template) {
  const t = template.trim()
  if (!t.startsWith('<Theme')) return t
  const openEnd = t.indexOf('>') + 1
  const closeStart = t.lastIndexOf('</Theme>')
  if (closeStart === -1) return t
  const inner = t.slice(openEnd, closeStart).trim()
  const lines = inner.split('\n')
  const minIndent = lines
    .filter(l => l.trim())
    .reduce((min, l) => Math.min(min, l.match(/^ */)[0].length), Infinity)
  return lines.map(l => l.slice(minIndent)).join('\n').trim()
}

function expandArgsInTemplate(template, args) {
  let result = template
  const validArgs = Object.fromEntries(
    Object.entries(args ?? {}).filter(([, v]) => v !== '' && v !== null && v !== undefined)
  )

  result = result.replace(/\s+v-bind="args"/g, () => {
    if (!Object.keys(validArgs).length) return ''
    return '\n' + Object.entries(validArgs).map(([k, v]) => `  ${propToAttr(k, v)}`).join('\n')
  })

  result = result.replace(/:[\w-]+=["']args\.(\w+)["']/g, (match, key) => {
    if (key in args) {
      const attr = match.split('=')[0]
      return `${attr}="${serializeValue(args[key]).replace(/"/g, "'")}"`
    }
    return match
  })

  for (const [key, value] of Object.entries(validArgs)) {
    result = result.replace(new RegExp(`\\bargs\\.${key}\\b`, 'g'), serializeValue(value))
  }

  return result
}

function extractSetupState(storyObj) {
  const vueImports = []
  const stateLines = []

  const setupMatch = storyObj.match(/setup\s*\(\s*\)\s*\{([\s\S]*?)\breturn\b/)
  if (!setupMatch) return { vueImports, stateLines }

  const body = setupMatch[1]

  for (const m of body.matchAll(/const\s+(\w+)\s*=\s*(ref|reactive|computed)\(([^)]*)\)/g)) {
    const [, varName, fn, init] = m
    stateLines.push(`const ${varName} = ${fn}(${init})`)
    if (!vueImports.includes(fn)) vueImports.push(fn)
  }

  return { vueImports, stateLines }
}

function getUsedOrchidComponents(template) {
  const used = { core: [], dashboard: [] }
  for (const m of template.matchAll(/<([A-Z][a-zA-Z]+)[\s/>]/g)) {
    const name = m[1]
    if (name === 'Theme') continue
    if (CORE_COMPONENT_NAMES.has(name) && !used.core.includes(name)) used.core.push(name)
    if (DASHBOARD_COMPONENT_NAMES.has(name) && !used.dashboard.includes(name)) used.dashboard.push(name)
  }
  return used
}

export function extractBacktickTemplate(block) {
  const idx = block.search(/template\s*:\s*`/)
  if (idx === -1) return null

  const start = block.indexOf('`', idx) + 1
  let i = start
  const result = []

  while (i < block.length) {
    const ch = block[i]
    if (ch === '`') break
    if (ch === '\\') {
      result.push(ch, block[i + 1] ?? '')
      i += 2
      continue
    }
    if (ch === '$' && block[i + 1] === '{') {
      result.push('${')
      i += 2
      let depth = 1
      while (i < block.length && depth > 0) {
        if (block[i] === '{') depth++
        else if (block[i] === '}') depth--
        if (depth > 0) result.push(block[i])
        i++
      }
      result.push('}')
      continue
    }
    result.push(ch)
    i++
  }

  return result.join('').trim()
}

export function buildSFCCode(storyObj, args) {
  const rawTemplate = extractBacktickTemplate(storyObj)
  if (!rawTemplate) return null

  let template = stripThemeWrapper(rawTemplate)
  template = expandArgsInTemplate(template, args)

  const { core, dashboard } = getUsedOrchidComponents(template)
  const { vueImports, stateLines } = extractSetupState(storyObj)

  const scriptLines = []
  if (vueImports.length) scriptLines.push(`import { ${vueImports.join(', ')} } from 'vue'`)
  if (core.length) scriptLines.push(`import { ${core.join(', ')} } from '@orchidui/core'`)
  if (dashboard.length) scriptLines.push(`import { ${dashboard.join(', ')} } from '@orchidui/dashboard'`)
  if (stateLines.length) {
    scriptLines.push('')
    scriptLines.push(...stateLines)
  }

  const parts = []
  if (scriptLines.length) {
    parts.push(`<script setup>\n${scriptLines.join('\n')}\n</script>`)
  }
  parts.push(`<template>\n${template}\n</template>`)

  return parts.join('\n\n')
}
