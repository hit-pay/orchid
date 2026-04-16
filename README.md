# OrchidUI

- Docs: https://orchidui.vercel.app
- Storybook: https://orchidui.vercel.app/storybook/

## Setup

```bash
npm install
npm run dev        # Storybook dev server
npm run build:json # Regenerate docs + llms.txt
npm run mcp        # Start MCP server (port 3333)
```

---

## Writing Stories

Each component has a `.stories.js` file. This file is the **single source of truth** for component metadata, examples, and AI documentation.

### Default Export (Component Metadata)

```js
export default {
  component: MyComponent,
  tags: ['autodocs'],          // required for Storybook autodocs — do not remove

  // ── AI/docs metadata ────────────────────────────────────────────────────
  kind: 'leaf',                // 'leaf' (standalone) | 'composite' (composes other components)
  description: 'One sentence describing what this component does.',
  keywords: ['tag1', 'tag2'], // used for search in MCP and llms.txt
  use_for: [                   // when should a developer reach for this component?
    'use case one',
    'use case two',
  ],
  understand_with: ['OtherComponent'], // related components worth reading alongside this one
}
```

> `description` and `keywords` here replace `component-meta.js`. If omitted, the build falls back to `component-meta.js`.

### Examples

Each named export is one example. Extract the Vue code to a separate file in `examples/` and import it with `?raw`:

```
MyComponent/
  MyComponent.vue
  MyComponent.stories.js
  examples/
    Default.vue
    WithSlots.vue
```

```js
import DefaultExample from './examples/Default.vue'
import DefaultRaw    from './examples/Default.vue?raw'

export const Default = {
  description: 'One sentence describing this specific example.',
  highlights: [             // optional — key points for AI context
    'prop-name — what it does',
    '#slot-name — when to use it',
  ],
  code: DefaultRaw,         // shown in docs + used by build:json
  render: () => ({
    components: { DefaultExample },
    template: `<div class="p-6"><DefaultExample /></div>`
  })
}
```

**Rules:**
- `code` must be `SomeNameRaw` (a `?raw` import) — the build pipeline detects this pattern
- The `examples/*.vue` file should use `import { ... } from '@orchidui/core'` (not the internal alias)
- Keep the render template minimal — just wrap the example component in a `<div class="p-6">`

### Full Example — DataTable

```js
// OcDataTable.stories.js
import { DataTable } from '@/orchidui-core'
import BasicExample from './examples/Basic.vue'
import BasicRaw     from './examples/Basic.vue?raw'

export default {
  component: DataTable,
  tags: ['autodocs'],
  kind: 'composite',
  description: 'Data table with filtering, pagination, search, and bulk actions.',
  keywords: ['table', 'data', 'filter', 'pagination', 'crud'],
  use_for: ['resource list', 'CRUD table', 'paginated data display'],
  understand_with: ['FormBuilder', 'Modal', 'Chip'],
}

export const Basic = {
  description: 'Minimal DataTable with search, tabs, and pagination.',
  highlights: ['options.tableOptions — headers + fields', 'update:filter event to trigger data fetch'],
  code: BasicRaw,
  render: () => ({
    components: { BasicExample },
    template: `<div class="p-6"><BasicExample /></div>`
  })
}
```

### Build Output

Running `npm run build:json` generates:

| Output | Description |
|--------|-------------|
| `public/json/orchid-core.json` | Component index with description, tags, kind |
| `public/json/components/<Name>.detail.json` | Props, events, slots, example list |
| `public/json/components/<Name>.<id>.json` | Individual example with full code |
| `public/raw/docs/components/<Name>.md` | Full component doc (markdown) |
| `public/raw/docs/examples/<Name>-<id>.md` | Individual example (markdown) |
| `public/llms.txt` | AI discovery index |
| `public/llms-full.txt` | All-in-one AI reference |

