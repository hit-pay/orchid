import fs from 'fs'
import path from 'path'
import { buildSFCCode, extractBacktickByKey } from './sfc-builder.js'

/**
 * Resolve the stories file for a given Vue component file.
 * Tries several naming conventions before giving up:
 *   1. Exact match: Foo.vue → Foo.stories.js
 *   2. Oc-prefixed: Foo.vue → OcFoo.stories.js
 *   3. Strip-Oc: OcFoo.vue → Foo.stories.js (rare, but some stories drop the prefix)
 */
function resolveStoryPath(vueFilePath) {
  const dir  = path.dirname(vueFilePath)
  const base = path.basename(vueFilePath, '.vue')

  const candidates = [
    path.join(dir, `${base}.stories.js`),
    path.join(dir, `Oc${base}.stories.js`),
    base.startsWith('Oc') ? path.join(dir, `${base.slice(2)}.stories.js`) : null
  ].filter(Boolean)

  return candidates.find(p => fs.existsSync(p)) ?? null
}

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

// Extract a simple quoted string property: description: 'foo' or description: "foo"
function extractStringProp(block, key) {
  const m = block.match(new RegExp(`\\b${key}\\s*:\\s*['"]([^'"\\r\\n]+)['"]`))
  return m ? m[1] : null
}

// Extract a flat string array property: highlights: ['a', 'b']
function extractStringArrayProp(block, key) {
  const m = block.match(new RegExp(`\\b${key}\\s*:\\s*(\\[[^\\]]*\\])`))
  if (!m) return null
  try {
    const arr = new Function('return ' + m[1])()
    return Array.isArray(arr) && arr.length ? arr : null
  } catch { return null }
}

export function parseStoryOptions(vueFilePath) {
  const storyPath = resolveStoryPath(vueFilePath)
  if (!storyPath) return {}

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

function resolveRawImport(content, storyDir, varName) {
  const m = content.match(new RegExp(`import\\s+${varName}\\s+from\\s+['"]([^'"]+\\.vue\\?raw)['"]`))
  if (!m) return null
  const relPath = m[1].replace('?raw', '')
  const absPath = path.resolve(storyDir, relPath)
  if (!fs.existsSync(absPath)) return null
  return fs.readFileSync(absPath, 'utf-8').trim()
}

export function parseStoryExamples(vueFilePath) {
  const storyPath = resolveStoryPath(vueFilePath)
  if (!storyPath) return []

  const content = fs.readFileSync(storyPath, 'utf-8')
  const storyDir = path.dirname(storyPath)
  const examples = []

  for (const m of content.matchAll(/export\s+const\s+(\w+)\s*=\s*\{/g)) {
    const name = m[1]
    const storyStart = m.index + m[0].length - 1
    const storyObj = extractBalanced(content, storyStart)
    if (!storyObj) continue

    // Skip Storybook-only playgrounds (have argTypes but no code property)
    if (/\bargTypes\s*:/.test(storyObj) && !/\bcode\s*:/.test(storyObj)) continue

    // ── Prefer explicit `code: \`` property (full hand-written SFC snippet) ──
    const manualSnippet = extractBacktickByKey(storyObj, 'code')

    // ── Detect `code: SomeRawVar` variable reference → read from ?raw import ──
    if (!manualSnippet) {
      const refMatch = storyObj.match(/\bcode\s*:\s*(\w+Raw)\b/)
      if (refMatch) {
        const rawContent = resolveRawImport(content, storyDir, refMatch[1])
        if (rawContent) {
          const id    = name.replace(/[A-Z]/g, (c, offset) => (offset === 0 ? c.toLowerCase() : '-' + c.toLowerCase()))
          const title = name.replace(/[A-Z]/g, (c, offset) => (offset === 0 ? c : ' ' + c))
          const description = extractStringProp(storyObj, 'description')
          const highlights  = extractStringArrayProp(storyObj, 'highlights')
          examples.push({
            id,
            title,
            ...(description && { description }),
            ...(highlights  && { highlights }),
            code: { language: 'vue', snippet: rawContent }
          })
          continue
        }
      }
    }

    // ── Fall back to sfc-builder if no manual code ───────────────────────────
    let snippet = manualSnippet
    if (!snippet) {
      let args = {}
      const argsIdx = storyObj.search(/\bargs\s*:\s*\{/)
      if (argsIdx !== -1) {
        const bracePos = storyObj.indexOf('{', argsIdx)
        const argsStr = extractBalanced(storyObj, bracePos)
        if (argsStr) {
          try { args = new Function('return ' + argsStr)() ?? {} } catch { args = {} }
        }
      }
      snippet = buildSFCCode(storyObj, args) ?? null
    }

    if (!snippet) continue

    const id    = name.replace(/[A-Z]/g, (c, offset) => (offset === 0 ? c.toLowerCase() : '-' + c.toLowerCase()))
    const title = name.replace(/[A-Z]/g, (c, offset) => (offset === 0 ? c : ' ' + c))

    const description = extractStringProp(storyObj, 'description')
    const highlights  = extractStringArrayProp(storyObj, 'highlights')

    examples.push({
      id,
      title,
      ...(description && { description }),
      ...(highlights  && { highlights }),
      code: { language: 'vue', snippet }
    })
  }

  return examples
}

export function parseStoryMeta(vueFilePath) {
  const storyPath = resolveStoryPath(vueFilePath)
  if (!storyPath) return { kind: 'leaf', use_for: [], understand_with: [] }

  const content = fs.readFileSync(storyPath, 'utf-8')

  const m = content.match(/export\s+default\s+\{/)
  if (!m) return { kind: 'leaf', use_for: [], understand_with: [] }

  const block = extractBalanced(content, m.index + m[0].length - 1)
  if (!block) return { kind: 'leaf', use_for: [], understand_with: [] }

  return {
    kind:            extractStringProp(block, 'kind') ?? 'leaf',
    description:     extractStringProp(block, 'description') ?? null,
    keywords:        extractStringArrayProp(block, 'keywords') ?? null,
    use_for:         extractStringArrayProp(block, 'use_for') ?? [],
    understand_with: extractStringArrayProp(block, 'understand_with') ?? [],
  }
}

export function parseStoryRelatedComponents(vueFilePath, primaryComponent) {
  const storyPath = resolveStoryPath(vueFilePath)
  if (!storyPath) return []

  const content = fs.readFileSync(storyPath, 'utf-8')
  const related = new Set()

  for (const m of content.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]@\/orchidui-(?:core|dashboard)['"]/g)) {
    for (const raw of m[1].split(',')) {
      const name = raw.trim()
      if (name && name !== primaryComponent && name !== 'Theme') {
        related.add(name)
      }
    }
  }

  return [...related].sort()
}
