import { Theme, Table, Chip, Icon, Toggle, TableCellContent, TableCell, ExpandingTable } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Table,
  tags: ['autodocs'],
  kind: 'composite',
  use_for: [
    'standalone table with custom header and body control',
    'table with sorting and row selection',
    'simple data table without filter toolbar'
  ],
  understand_with: ['DataTable', 'NewTable', 'TableCell', 'TableHeader', 'Chip'],
  parameters: {
    docs: {
      description: {
        component: `
Table is the low-level table primitive used inside DataTable. Use **DataTable** for full filter/pagination/search integration.
Use Table directly only when you need granular control over the header/body structure.

---

## options object

\`\`\`js
{
  headers: [
    {
      key: 'name',            // matches slot name and field key
      label: 'Name',          // column header text
      class: 'w-[30%]',       // column width
      variant: 'chip',        // 'chip' | 'icon' | 'datetime' | 'image' — built-in cell renderers
      chipOptions: {          // map value → { label, variant } — used with variant: 'chip'
        active: { label: 'Active', variant: 'success' }
      },
      isSortable: true,       // show sort indicator
      isCopy: true,           // copy-to-clipboard icon
      stickyLeft: true,       // pin to left (requires isSticky)
      stickyRight: true,      // pin to right (requires isSticky)
      disableClickRow: true   // prevent click:row from this column
    }
  ],
  fields: [ { id: '1', name: 'Alice', ... } ],  // row data keyed to header keys
  isSelectable: true,         // show row checkboxes
  isCursorPointer: true       // cursor:pointer on rows
}
\`\`\`

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`options\` | Object | **required** | Table structure (see above) |
| \`selected\` | Array | — | v-model:selected — selected row objects |
| \`isLoading\` | Boolean | \`false\` | Show skeleton rows |
| \`loadingRows\` | Number | \`10\` | Number of skeleton rows shown while loading |
| \`isBorderless\` | Boolean | \`false\` | Remove outer border |
| \`isSticky\` | Boolean | \`false\` | Horizontal scroll with sticky columns |
| \`isResponsive\` | Boolean | \`false\` | Enable responsive card layout on mobile |
| \`rowKey\` | String\\|Function | \`'id'\` | Unique key field per row |
| \`rowClass\` | String\\|Function | — | CSS class (or fn) applied to each row |
| \`rowLink\` | String | — | Field name whose value is used as navigation URL |
| \`sortBy\` | Object | \`{}\` | Current sort state: \`{ key, direction }\` |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`click:row\` | \`{ field, header }\` | Row clicked (not fired from \`disableClickRow\` columns) |
| \`update:selected\` | \`rows[]\` | Selected rows changed |
| \`update:sort-by\` | \`{ key, direction }\` | Sort column/direction changed |
| \`hover:cell\` | \`{ item, key }\` | Cell hovered |

---

## Slots

| Slot | Bindings | Description |
|------|----------|-------------|
| \`#[header.key]\` | \`{ data, item }\` | Custom cell content (\`data\` = cell value, \`item\` = full row) |
| \`#header-[key]\` | — | Custom column header content |
| \`#before\` | — | Content above the header row |
| \`#after\` | — | Content below the last row |
| \`#extra\` | \`{ item, index }\` | Extra row injected after each data row |
| \`#empty\` | — | Shown when fields is empty |
        `.trim()
      }
    }
  }
}

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  argTypes: {
    isLoading:    { control: 'boolean' },
    isSticky:     { control: 'boolean' },
    isBorderless: { control: 'boolean' },
    isSelectable: { control: 'boolean' },
    loadingRows:  { control: 'number' }
  },
  args: {
    isLoading:    false,
    isSticky:     false,
    isBorderless: false,
    isSelectable: true,
    loadingRows:  5
  },
  render: (args) => ({
    components: { Table, Theme, Icon, Toggle, Chip },
    setup() {
      const selected = ref([])
      const options = {
        isSelectable:    args.isSelectable,
        isCursorPointer: true,
        headers: [
          { key: 'name',    label: 'Name',    class: 'w-[30%]' },
          { key: 'email',   label: 'Email',   class: 'w-[35%]' },
          { key: 'status',  label: 'Status',  class: 'w-[20%]', variant: 'chip',
            chipOptions: {
              active:   { label: 'Active',   variant: 'success' },
              inactive: { label: 'Inactive', variant: 'error' }
            }
          },
          { key: 'enabled', label: 'Enabled', class: 'w-[10%]', disableClickRow: true },
          { key: 'actions', label: '',        class: 'w-[5%]',  variant: 'icon' }
        ],
        fields: [
          { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'active',   enabled: true },
          { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'inactive', enabled: false },
          { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'active',   enabled: true }
        ]
      }
      return { args, selected, options }
    },
    template: `
      <Theme class="p-6">
        <Table
          v-model:selected="selected"
          :options="{ ...options, isSelectable: args.isSelectable }"
          :is-loading="args.isLoading"
          :is-sticky="args.isSticky"
          :is-borderless="args.isBorderless"
          :loading-rows="args.loadingRows"
        >
          <template #enabled="{ data }">
            <Toggle size="small" :model-value="data" />
          </template>
          <template #actions>
            <Icon class="w-5 h-5 cursor-pointer mx-auto text-oc-text-400 group-hover/row:opacity-100 opacity-0" name="dots-vertical" />
          </template>
        </Table>
      </Theme>
    `
  })
}

// ── Basic ─────────────────────────────────────────────────────────────────────

export const Basic = {
  description: 'Minimal table with headers and row data. Custom cell slots override the default renderer per column key.',
  highlights: ['options.headers — column definitions', 'options.fields — row data array', '#[header.key] slot — custom cell renderer', 'click:row event'],
  code: `<script setup>
import { ref } from 'vue'
import { Table, Chip } from '@orchidui/core'

const selected = ref([])

const options = {
  isSelectable:    true,
  isCursorPointer: true,
  headers: [
    { key: 'name',   label: 'Name',   class: 'w-[35%]' },
    { key: 'email',  label: 'Email',  class: 'w-[40%]' },
    { key: 'status', label: 'Status', class: 'w-[25%]' }
  ],
  fields: [
    { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'Active' },
    { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'Inactive' },
    { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'Active' }
  ]
}

function onRowClick({ field }) {
  console.log('clicked:', field.name)
}
</script>

<template>
  <Table
    v-model:selected="selected"
    :options="options"
    @click:row="onRowClick"
  >
    <template #status="{ data }">
      <Chip
        :label="data"
        :variant="data === 'Active' ? 'success' : 'error'"
      />
    </template>
  </Table>
</template>`,
  render: () => ({
    components: { Table, Chip },
    setup() {
      const selected = ref([])
      const options = {
        isSelectable: true,
        isCursorPointer: true,
        headers: [
          { key: 'name',   label: 'Name',   class: 'w-[35%]' },
          { key: 'email',  label: 'Email',  class: 'w-[40%]' },
          { key: 'status', label: 'Status', class: 'w-[25%]' }
        ],
        fields: [
          { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'Active' },
          { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'Inactive' },
          { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'Active' }
        ]
      }
      return { selected, options }
    },
    template: `
      <div class="p-6">
        <Table v-model:selected="selected" :options="options">
          <template #status="{ data }">
            <Chip :label="data" :variant="data === 'Active' ? 'success' : 'error'" />
          </template>
        </Table>
      </div>
    `
  })
}

// ── Built-in Cell Variants ────────────────────────────────────────────────────

export const CellVariants = {
  description: 'Built-in cell renderers via the header variant field. No slot needed — the table renders the right component automatically.',
  highlights: ['variant: "chip" + chipOptions — coloured badge', 'variant: "datetime" — formatted date', 'variant: "image" — thumbnail', 'variant: "icon" — icon-only column (e.g. actions)'],
  code: `<script setup>
import { Table } from '@orchidui/core'

const options = {
  headers: [
    { key: 'name',    label: 'Name',    class: 'w-[25%]' },
    {
      key: 'status', label: 'Status',  class: 'w-[20%]',
      variant: 'chip',
      chipOptions: {
        active:   { label: 'Active',   variant: 'success' },
        inactive: { label: 'Inactive', variant: 'error' },
        pending:  { label: 'Pending',  variant: 'warning' }
      }
    },
    { key: 'created', label: 'Created', class: 'w-[25%]', variant: 'datetime' },
    { key: 'avatar',  label: 'Avatar',  class: 'w-[20%]', variant: 'image' },
    { key: 'actions', label: '',        class: 'w-[10%]', variant: 'icon' }
  ],
  fields: [
    { id: '1', name: 'Alice',   status: 'active',   created: '2024-01-10T09:00:00Z', avatar: 'https://i.pravatar.cc/40?img=1' },
    { id: '2', name: 'Bob',     status: 'inactive', created: '2024-02-15T14:30:00Z', avatar: 'https://i.pravatar.cc/40?img=2' },
    { id: '3', name: 'Charlie', status: 'pending',  created: '2024-03-20T11:00:00Z', avatar: 'https://i.pravatar.cc/40?img=3' }
  ]
}
</script>

<template>
  <Table :options="options" />
</template>`,
  render: () => ({
    components: { Table, Icon },
    setup() {
      const options = {
        headers: [
          { key: 'name',    label: 'Name',    class: 'w-[25%]' },
          { key: 'status',  label: 'Status',  class: 'w-[20%]', variant: 'chip',
            chipOptions: {
              active:   { label: 'Active',   variant: 'success' },
              inactive: { label: 'Inactive', variant: 'error' },
              pending:  { label: 'Pending',  variant: 'warning' }
            }
          },
          { key: 'created', label: 'Created', class: 'w-[25%]', variant: 'datetime' },
          { key: 'actions', label: '',        class: 'w-[10%]', variant: 'icon' }
        ],
        fields: [
          { id: '1', name: 'Alice',   status: 'active',   created: '2024-01-10T09:00:00Z' },
          { id: '2', name: 'Bob',     status: 'inactive', created: '2024-02-15T14:30:00Z' },
          { id: '3', name: 'Charlie', status: 'pending',  created: '2024-03-20T11:00:00Z' }
        ]
      }
      return { options }
    },
    template: `
      <div class="p-6">
        <Table :options="options">
          <template #actions>
            <Icon class="w-5 h-5 cursor-pointer mx-auto opacity-0 group-hover/row:opacity-100" name="dots-vertical" />
          </template>
        </Table>
      </div>
    `
  })
}

// ── Loading ───────────────────────────────────────────────────────────────────

export const Loading = {
  description: 'Pass is-loading to render skeleton rows. loadingRows sets how many skeletons appear.',
  highlights: ['is-loading prop', 'loading-rows — number of skeleton rows'],
  code: `<script setup>
import { Table } from '@orchidui/core'

const options = {
  headers: [
    { key: 'name',   label: 'Name',   class: 'w-[40%]' },
    { key: 'email',  label: 'Email',  class: 'w-[40%]' },
    { key: 'status', label: 'Status', class: 'w-[20%]' }
  ],
  fields: []
}
</script>

<template>
  <Table :options="options" is-loading :loading-rows="5" />
</template>`,
  render: () => ({
    components: { Table },
    setup() {
      const options = {
        headers: [
          { key: 'name',   label: 'Name',   class: 'w-[40%]' },
          { key: 'email',  label: 'Email',  class: 'w-[40%]' },
          { key: 'status', label: 'Status', class: 'w-[20%]' }
        ],
        fields: []
      }
      return { options }
    },
    template: `
      <div class="p-6">
        <Table :options="options" is-loading :loading-rows="5" />
      </div>
    `
  })
}

// ── Sortable Columns ──────────────────────────────────────────────────────────

export const SortableColumns = {
  description: 'Set isSortable: true on headers to show sort indicators. Bind sortBy and listen to update:sort-by to handle server-side sorting.',
  highlights: ['header.isSortable — show sort indicator', 'sortBy prop — { key, direction }', 'update:sort-by event — { key, direction }'],
  code: `<script setup>
import { ref } from 'vue'
import { Table } from '@orchidui/core'

const sortBy = ref({ key: 'name', direction: 'asc' })

const options = {
  isCursorPointer: true,
  headers: [
    { key: 'name',   label: 'Name',   class: 'w-[40%]', isSortable: true },
    { key: 'amount', label: 'Amount', class: 'w-[30%]', isSortable: true },
    { key: 'date',   label: 'Date',   class: 'w-[30%]', isSortable: true }
  ],
  fields: [
    { id: '1', name: 'Alice',   amount: 'SGD 130.00', date: '2024-01-10' },
    { id: '2', name: 'Bob',     amount: 'SGD 50.00',  date: '2024-02-15' },
    { id: '3', name: 'Charlie', amount: 'SGD 200.00', date: '2024-03-20' }
  ]
}

function onSortChange(newSort) {
  sortBy.value = newSort
  // fetch sorted data from server with newSort
  console.log('sort by:', newSort)
}
</script>

<template>
  <Table
    :options="options"
    :sort-by="sortBy"
    @update:sort-by="onSortChange"
  />
</template>`,
  render: () => ({
    components: { Table },
    setup() {
      const sortBy = ref({ key: 'name', direction: 'asc' })
      const options = {
        isCursorPointer: true,
        headers: [
          { key: 'name',   label: 'Name',   class: 'w-[40%]', isSortable: true },
          { key: 'amount', label: 'Amount', class: 'w-[30%]', isSortable: true },
          { key: 'date',   label: 'Date',   class: 'w-[30%]', isSortable: true }
        ],
        fields: [
          { id: '1', name: 'Alice',   amount: 'SGD 130.00', date: '2024-01-10' },
          { id: '2', name: 'Bob',     amount: 'SGD 50.00',  date: '2024-02-15' },
          { id: '3', name: 'Charlie', amount: 'SGD 200.00', date: '2024-03-20' }
        ]
      }
      return { sortBy, options }
    },
    template: `
      <div class="p-6">
        <Table :options="options" :sort-by="sortBy" @update:sort-by="sortBy = $event" />
      </div>
    `
  })
}

// ── Sticky Columns ────────────────────────────────────────────────────────────

export const StickyColumns = {
  description: 'Horizontal scrolling table with pinned columns. Set isSticky on the Table and stickyLeft/stickyRight on individual headers.',
  highlights: ['is-sticky — horizontal scroll container', 'header.stickyLeft — pin to left', 'header.stickyRight — pin to right'],
  code: `<script setup>
import { Table } from '@orchidui/core'

const options = {
  isSticky: true,
  headers: [
    { key: 'name',    label: 'Name',    class: 'w-[160px]', stickyLeft: true },
    { key: 'email',   label: 'Email',   class: 'w-[220px]' },
    { key: 'country', label: 'Country', class: 'w-[150px]' },
    { key: 'plan',    label: 'Plan',    class: 'w-[150px]' },
    { key: 'created', label: 'Created', class: 'w-[150px]' },
    { key: 'actions', label: '',        class: 'w-[80px]',  stickyRight: true, variant: 'icon' }
  ],
  fields: [
    { id: '1', name: 'Alice',   email: 'alice@example.com',   country: 'SG', plan: 'Pro',   created: '2024-01-10' },
    { id: '2', name: 'Bob',     email: 'bob@example.com',     country: 'MY', plan: 'Basic', created: '2024-02-15' },
    { id: '3', name: 'Charlie', email: 'charlie@example.com', country: 'ID', plan: 'Pro',   created: '2024-03-20' }
  ]
}
</script>

<template>
  <Table :options="options" is-sticky />
</template>`,
  render: () => ({
    components: { Table },
    setup() {
      const options = {
        isSticky: true,
        headers: [
          { key: 'name',    label: 'Name',    class: 'w-[160px]', stickyLeft: true },
          { key: 'email',   label: 'Email',   class: 'w-[220px]' },
          { key: 'country', label: 'Country', class: 'w-[150px]' },
          { key: 'plan',    label: 'Plan',    class: 'w-[150px]' },
          { key: 'created', label: 'Created', class: 'w-[150px]' },
          { key: 'actions', label: '',        class: 'w-[80px]',  stickyRight: true, variant: 'icon' }
        ],
        fields: [
          { id: '1', name: 'Alice',   email: 'alice@example.com',   country: 'SG', plan: 'Pro',   created: '2024-01-10' },
          { id: '2', name: 'Bob',     email: 'bob@example.com',     country: 'MY', plan: 'Basic', created: '2024-02-15' },
          { id: '3', name: 'Charlie', email: 'charlie@example.com', country: 'ID', plan: 'Pro',   created: '2024-03-20' }
        ]
      }
      return { options }
    },
    template: `
      <div class="p-6 overflow-x-auto">
        <Table :options="options" is-sticky />
      </div>
    `
  })
}

// ── Expanding Table ───────────────────────────────────────────────────────────

export const ExpandingTableStory = {
  description: 'ExpandingTable renders nested grouped data with parent/child headers. Use when a single cell contains sub-values (e.g. gross sales broken into quick sale + products).',
  highlights: ['ExpandingTable component', 'headers with children — nested column groups', '#[key] slot — custom aggregated cell', 'is-alternative — alternate row style', 'is-loading — skeleton rows'],
  code: `<script setup>
import { ExpandingTable } from '@orchidui/core'

const headers = [
  {
    key: 'gross_sales',
    label: 'Gross Sales',
    important: true,
    children: [
      { label: 'Quick Sale', key: 'quick_sale' },
      { label: 'Products',   key: 'products' }
    ]
  },
  {
    key: 'surcharges',
    label: 'Surcharges',
    infoText: 'Additional charges'
  }
]

const fields = {
  gross_sales: { quick_sale: 100, products: 200 },
  surcharges: 50
}
</script>

<template>
  <ExpandingTable :headers="headers" :fields="fields">
    <!-- Aggregate child values in the parent cell -->
    <template #gross_sales="{ value }">
      {{ value.quick_sale + value.products }}
    </template>
  </ExpandingTable>
</template>`,
  render: () => ({
    components: { ExpandingTable },
    setup() {
      const headers = [
        {
          key: 'gross_sales',
          label: 'Gross Sales',
          important: true,
          children: [
            { label: 'Quick Sale', key: 'quick_sale' },
            { label: 'Products',   key: 'products' }
          ]
        },
        { key: 'surcharges', label: 'Surcharges', infoText: 'Additional charges' }
      ]
      const fields = {
        gross_sales: { quick_sale: 100, products: 200 },
        surcharges: 50
      }
      return { headers, fields }
    },
    template: `
      <div class="p-6">
        <ExpandingTable :headers="headers" :fields="fields">
          <template #gross_sales="{ value }">
            {{ value.quick_sale + value.products }}
          </template>
        </ExpandingTable>
      </div>
    `
  })
}
