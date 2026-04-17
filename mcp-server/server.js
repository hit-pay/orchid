import express from 'express'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { randomUUID } from 'crypto'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { z } from 'zod'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = path.resolve(__dirname, '../public')
const JSON_DIR = path.join(PUBLIC_DIR, 'json/components')
const RAW_COMPONENTS_DIR = path.join(PUBLIC_DIR, 'raw/docs/components')
const RAW_EXAMPLES_DIR = path.join(PUBLIC_DIR, 'raw/docs/examples')

// ─── Load indexes ─────────────────────────────────────────────────────────────

function loadIndex() {
  const core = JSON.parse(fs.readFileSync(path.join(PUBLIC_DIR, 'json/orchid-core.json'), 'utf-8'))
  const dashboard = JSON.parse(fs.readFileSync(path.join(PUBLIC_DIR, 'json/orchid-dashboard.json'), 'utf-8'))
  const all = [
    ...core.components.map(c => ({ ...c, package: '@orchidui/core' })),
    ...dashboard.components.map(c => ({ ...c, package: '@orchidui/dashboard' })),
  ]
  return { core, dashboard, all }
}

const { all: allComponents } = loadIndex()
const componentMap = Object.fromEntries(allComponents.map(c => [c.name.toLowerCase(), c]))

// ─── Helpers ──────────────────────────────────────────────────────────────────

function readFile(filePath) {
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, 'utf-8')
}

function findComponent(name) {
  return componentMap[name.toLowerCase()] ?? null
}

function getDetailJson(name) {
  const f = path.join(JSON_DIR, `${name}.detail.json`)
  if (!fs.existsSync(f)) return null
  return JSON.parse(fs.readFileSync(f, 'utf-8'))
}

// Extract specific sections from markdown content
function extractSections(md, sections) {
  if (!sections?.length) return md

  const result = []
  const lines = md.split('\n')

  const sectionMap = {
    examples: '## Examples',
    api: '## API',
    props: '### Props',
    events: '### Events',
    slots: '### Slots',
    rules: '### Rules',
  }

  const wantedH2 = new Set()
  const wantedH3 = new Set()

  for (const s of sections) {
    const key = s.toLowerCase()
    if (key === 'api') { wantedH2.add('## API') }
    else if (key === 'examples') { wantedH2.add('## Examples') }
    else if (['props','events','slots','rules'].includes(key)) {
      wantedH2.add('## API')
      wantedH3.add(sectionMap[key])
    }
  }

  // Always include header block (everything before first ##)
  const headerLines = []
  let bodyStart = 0
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('## ')) { bodyStart = i; break }
    headerLines.push(lines[i])
  }
  result.push(...headerLines)

  let i = bodyStart
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      if (wantedH2.has(line.trim())) {
        if (line.trim() === '## API' && wantedH3.size) {
          result.push(line)
          i++
          // only include wanted h3 subsections
          while (i < lines.length && !lines[i].startsWith('## ')) {
            if (lines[i].startsWith('### ')) {
              if (wantedH3.has(lines[i].trim())) {
                result.push(lines[i]); i++
                while (i < lines.length && !lines[i].startsWith('## ') && !lines[i].startsWith('### ')) {
                  result.push(lines[i]); i++
                }
              } else { i++ }
            } else { i++ }
          }
        } else {
          result.push(line); i++
          while (i < lines.length && !lines[i].startsWith('## ')) {
            result.push(lines[i]); i++
          }
        }
      } else { i++ }
    } else { i++ }
  }

  return result.join('\n')
}

// ─── MCP Server ───────────────────────────────────────────────────────────────

function createMcpServer() {
  const server = new McpServer({
    name: 'orchidui',
    version: '1.0.0',
  })

  // search-components
  server.tool(
    'search-components',
    'Search OrchidUI components by name, description, tags, or package.',
    {
      search: z.string().optional().describe('Search term to filter by name or description'),
      tags: z.string().optional().describe('Filter by tag (e.g. "table", "form", "button")'),
      package: z.enum(['@orchidui/core', '@orchidui/dashboard']).optional().describe('Filter by package'),
    },
    async ({ search, tags, package: pkg }) => {
      let results = allComponents

      if (pkg) results = results.filter(c => c.package === pkg)
      if (tags) results = results.filter(c => c.tags?.some(t => t.toLowerCase().includes(tags.toLowerCase())))
      if (search) {
        const q = search.toLowerCase()
        results = results.filter(c =>
          c.name.toLowerCase().includes(q) ||
          c.description?.toLowerCase().includes(q) ||
          c.tags?.some(t => t.includes(q))
        )
      }

      return {
        content: [{
          type: 'text',
          text: JSON.stringify(results.map(c => ({
            name: c.name,
            description: c.description,
            package: c.package,
            kind: c.kind,
            tags: c.tags,
            use_for: c.use_for,
            doc: `/raw/docs/components/${c.name}.md`,
          })), null, 2)
        }]
      }
    }
  )

  // get-component
  server.tool(
    'get-component',
    'Get full documentation for an OrchidUI component. Use sections to fetch only specific parts.',
    {
      componentName: z.string().describe('Component name (PascalCase), e.g. "Button", "DataTable"'),
      sections: z.array(
        z.enum(['examples', 'api', 'props', 'events', 'slots', 'rules'])
      ).optional().describe('Specific sections to return. Omit for full documentation.'),
    },
    async ({ componentName, sections }) => {
      const comp = findComponent(componentName)
      if (!comp) {
        return { content: [{ type: 'text', text: `[404] Component '${componentName}' not found. Use search-components to find available components.` }], isError: true }
      }

      const mdFile = path.join(RAW_COMPONENTS_DIR, `${comp.name}.md`)
      let md = readFile(mdFile)
      if (!md) {
        return { content: [{ type: 'text', text: `[404] Documentation for '${comp.name}' not found.` }], isError: true }
      }

      if (sections?.length) md = extractSections(md, sections)

      const detail = getDetailJson(comp.name)

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            name: comp.name,
            description: comp.description,
            package: comp.package,
            kind: comp.kind,
            tags: comp.tags,
            storybook: detail?.storybook ?? null,
            documentation: md,
            sections_returned: sections ?? ['full'],
          }, null, 2)
        }]
      }
    }
  )

  // get-component-metadata
  server.tool(
    'get-component-metadata',
    'Get lightweight structured metadata for a component — props, events, slots, and rules. No examples or full docs.',
    {
      componentName: z.string().describe('Component name (PascalCase)'),
    },
    async ({ componentName }) => {
      const comp = findComponent(componentName)
      if (!comp) {
        return { content: [{ type: 'text', text: `[404] Component '${componentName}' not found.` }], isError: true }
      }

      const detail = getDetailJson(comp.name)
      if (!detail) {
        return { content: [{ type: 'text', text: `[404] Metadata for '${comp.name}' not found.` }], isError: true }
      }

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            name: detail.name,
            description: comp.description,
            package: comp.package,
            props: detail.props,
            events: detail.events,
            slots: detail.slots,
            rules: detail.rules,
          }, null, 2)
        }]
      }
    }
  )

  // list-examples
  server.tool(
    'list-examples',
    'List all available examples. Optionally filter by component name.',
    {
      componentName: z.string().optional().describe('Filter examples by component name (PascalCase)'),
    },
    async ({ componentName }) => {
      let files = fs.readdirSync(RAW_EXAMPLES_DIR)
        .filter(f => f.endsWith('.md'))
        .map(f => f.replace('.md', ''))

      if (componentName) {
        const prefix = componentName + '-'
        files = files.filter(f => f.startsWith(prefix) || f.toLowerCase().startsWith(prefix.toLowerCase()))
      }

      return {
        content: [{ type: 'text', text: JSON.stringify(files, null, 2) }]
      }
    }
  )

  // get-example
  server.tool(
    'get-example',
    'Get the full code for a specific example. Use list-examples to find available example names.',
    {
      exampleName: z.string().describe('Example name as returned by list-examples, e.g. "Button-default" or "DataTable-with-custom-cells"'),
    },
    async ({ exampleName }) => {
      const mdFile = path.join(RAW_EXAMPLES_DIR, `${exampleName}.md`)
      const md = readFile(mdFile)
      if (!md) {
        return { content: [{ type: 'text', text: `[404] Example '${exampleName}' not found. Use list-examples to see available examples.` }], isError: true }
      }

      return { content: [{ type: 'text', text: md }] }
    }
  )

  return server
}

// ─── Express HTTP Server ──────────────────────────────────────────────────────

const app = express()
app.use(express.json())

const transports = new Map()

app.post('/mcp', async (req, res) => {
  const sessionId = req.headers['mcp-session-id'] ?? randomUUID()
  let transport = transports.get(sessionId)

  if (!transport) {
    transport = new StreamableHTTPServerTransport({ sessionId })
    transports.set(sessionId, transport)
    const server = createMcpServer()
    await server.connect(transport)
    transport.onclose = () => transports.delete(sessionId)
  }

  await transport.handleRequest(req, res, req.body)
})

app.get('/mcp', async (req, res) => {
  const sessionId = req.headers['mcp-session-id']
  if (!sessionId || !transports.has(sessionId)) {
    res.status(400).json({ error: 'Missing or invalid mcp-session-id header' })
    return
  }
  await transports.get(sessionId).handleRequest(req, res)
})

app.delete('/mcp', async (req, res) => {
  const sessionId = req.headers['mcp-session-id']
  if (sessionId && transports.has(sessionId)) {
    await transports.get(sessionId).close()
    transports.delete(sessionId)
  }
  res.status(204).end()
})

app.get('/health', (_, res) => res.json({ status: 'ok', name: 'orchidui-mcp' }))

const PORT = process.env.PORT ?? 3333
app.listen(PORT, () => {
  console.log(`OrchidUI MCP server running at http://localhost:${PORT}/mcp`)
})
