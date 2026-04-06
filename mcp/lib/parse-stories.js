import fs from 'fs'
import { buildSFCCode, extractBacktickByKey } from './sfc-builder.js'

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

export function parseStoryExamples(vueFilePath) {
  const storyPath = vueFilePath.replace(/\.vue$/, '.stories.js')
  if (!fs.existsSync(storyPath)) return []

  const content = fs.readFileSync(storyPath, 'utf-8')
  const examples = []

  for (const m of content.matchAll(/export\s+const\s+(\w+)\s*=\s*\{/g)) {
    const name = m[1]
    const storyStart = m.index + m[0].length - 1
    const storyObj = extractBalanced(content, storyStart)
    if (!storyObj) continue

    // ── Prefer explicit `code: \`` property (full hand-written SFC snippet) ──
    const manualSnippet = extractBacktickByKey(storyObj, 'code')

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

export function parseStoryRelatedComponents(vueFilePath, primaryComponent) {
  const storyPath = vueFilePath.replace(/\.vue$/, '.stories.js')
  if (!fs.existsSync(storyPath)) return []

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
