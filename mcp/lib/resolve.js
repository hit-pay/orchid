import path from 'path'
import fs from 'fs'

export function resolveAlias(importPath, aliases) {
  for (const [alias, replacement] of Object.entries(aliases)) {
    if (importPath === alias || importPath.startsWith(alias + '/')) {
      return importPath.replace(alias, replacement)
    }
  }
  return importPath
}

export function resolvePath(importPath, fromDir, aliases) {
  const aliased = resolveAlias(importPath, aliases)
  const resolved = path.isAbsolute(aliased) ? aliased : path.resolve(fromDir, aliased)
  if (!path.extname(resolved) && fs.existsSync(resolved + '/index.js')) {
    return resolved + '/index.js'
  }
  return resolved
}
