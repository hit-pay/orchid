import path from 'path'
import fs from 'fs'
import { resolvePath } from './resolve.js'

export function parseBarrelFile(filePath, aliases, visited = new Set()) {
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

export function parseIndexFile(indexPath, aliases) {
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
