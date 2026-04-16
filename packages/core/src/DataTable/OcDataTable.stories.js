import { DataTable, Chip, Toggle, Button, Dropdown, DropdownItem, EmptyPage } from '@/orchidui-core'
import { ref, computed } from 'vue'

export default {
  component: DataTable,
  tags: ['autodocs'],
  kind: 'composite',
  use_for: [
    'resource list',
    'CRUD table',
    'data grid with search and filter',
    'paginated data display',
    'manage records with bulk actions'
  ],
  understand_with: ['NewTable', 'FormBuilder', 'Modal', 'ConfirmationModal', 'PageTitle', 'EmptyPage', 'Chip', 'Button', 'Dropdown', 'DropdownItem'],
  parameters: {
    docs: {
      description: {
        component: `
DataTable is a full-featured table with an integrated filter toolbar, pagination, and column management.
All state lives in the \`filter\` object (v-model:filter). The component emits \`update:filter\` whenever the
filter changes — use that event to re-fetch data from the server.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`id\` | String | **required** | Unique ID — used as localStorage namespace when columnEdit is enabled |
| \`options\` | Object | **required** | Full config object (see **options** section below) |
| \`filter\` | Object | \`{}\` | Current filter state (v-model:filter). Holds page, per_page, search query, tab, columnEdit, etc. |
| \`selected\` | Array | — | Currently selected rows (v-model:selected) |
| \`isLoading\` | Boolean | \`false\` | Show skeleton rows while fetching |
| \`isNewTable\` | Boolean | \`false\` | Use the new table visual design (**preferred** — used in 46+ pages) |
| \`rowKey\` | String\\|Function | \`'id'\` | Field name (or fn) that uniquely identifies each row |
| \`rowLink\` | String | — | Field name whose value is used as navigation URL on row click |
| \`rowClass\` | String | — | CSS class applied to every data row |
| \`selectedIndex\` | Number | \`-1\` | 0-based index of the highlighted row; -1 = none |

---

## options object

\`\`\`js
{
  // ── Table structure (required) ──────────────────────────────────────────
  tableOptions: {
    headers: [
      {
        key: 'name',          // matches field key and slot name
        label: 'Name',        // column header text
        class: 'w-[30%]',     // column width class
        variant: 'chip',      // 'chip' | 'icon' | 'datetime' | 'image' — built-in cell renderers
        chipOptions: {        // map of value → { label, variant } — used with variant: 'chip'
          active: { label: 'Active', variant: 'success' }
        },
        headerVariant: 'text',// override header cell style
        isSortable: true,     // show sort indicator
        isCopy: true,         // show copy-to-clipboard icon
        stickyLeft: true,     // pin column to left (requires isSticky)
        stickyRight: true,    // pin column to right (requires isSticky)
        disableClickRow: true // prevent click:row from firing when this cell is clicked
      }
    ],
    fields: [ { id: '1', name: 'Alice', ... } ],  // row data — keyed to header keys
    isSelectable: true,       // show row checkboxes
    isCursorPointer: true,    // cursor:pointer on rows
    isSticky: true,           // horizontal scroll with sticky columns
    isBorderless: true        // remove outer border
  },

  // ── Filter toolbar (optional) ───────────────────────────────────────────
  filterOptions: {
    search: {
      key: 'keywords',        // filter key for search query
      options: [              // if set, shows a field-selector dropdown before the search input
        { label: 'Name', value: 'name' }
      ]
    },
    tabs: {
      key: 'tab',             // filter key for active tab
      options: [ { label: 'All', value: '' }, { label: 'Active', value: 'active' } ]
    },
    per_page: { key: 'per_page' },  // filter key for items-per-page
    form: [ /* FormBuilder jsonForm array */ ],   // fields rendered inside the filter dropdown
    actions: { applyButton: { label: 'Apply filters' } },
    columnEdit: {
      key: 'columnEdit',             // filter key that holds column order/visibility state
      localStorageKey: 'my-table'   // localStorage key for persisting column config
    }
  },

  // ── Pagination ──────────────────────────────────────────────────────────
  pagination: { total: 100, last_page: 10 },  // numbered pagination
  // OR cursor-based (mutually exclusive with pagination):
  cursor: { prev: 'cursor_abc', next: 'cursor_xyz' },  // null values disable the button

  // ── Other ───────────────────────────────────────────────────────────────
  perPageOptions: [10, 25, 50, 100],  // custom per-page dropdown values
  hidePerPageDropdown: true           // hide the per-page selector
}
\`\`\`

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:filter\` | \`(filter, isOnMount)\` | Emitted on every filter change — use to re-fetch data |
| \`apply-filter\` | \`(filter, isOnMount)\` | Same as update:filter (alias, both fire together) |
| \`update:selected\` | \`(rows)\` | Selected rows changed |
| \`click:row\` | \`{ item, index }\` | Row clicked (not fired when disableClickRow column is clicked) |
| \`hover:cell\` | \`{ item, key }\` | Cell hovered |
| \`search-query-changed\` | \`(query)\` | Search input changed |
| \`filter-fields-changed\` | \`(field)\` | A field inside the filter form changed |
| \`filter-removed\` | \`(field)\` | A filter tag was removed |
| \`filter-open\` | \`(isOpen)\` | Filter dropdown opened/closed |
| \`columns-changed\` | \`(activeHeaders)\` | Column visibility/order changed |
| \`on-table-ready\` | — | Fired on mount after column init |

---

## Slots

| Slot | Bindings | Description |
|------|----------|-------------|
| \`#[header.key]\` | \`{ item, data }\` | Override cell content for a specific column (\`data\` = cell value, \`item\` = full row) |
| \`#header-[key]-tooltip\` | \`{ item, data }\` | Tooltip content for a column header |
| \`#bulk-actions\` | \`{ selectedRows }\` | Shown in the filter bar when rows are selected |
| \`#before\` | — | Content above the filter bar |
| \`#after\` | — | Content below the table rows, above pagination |
| \`#after-rows\` | — | Injected after the last data row |
| \`#empty\` | — | Replaces the default empty state when fields is empty |
| \`#filter-options\` | — | Replaces the entire right-side filter toolbar |
| \`#custom-filter-form\` | \`{ errors, values, jsonForm, updateFilter }\` | Custom content inside the filter dropdown |
| \`#before-pagination\` | — | Content between table and pagination |
| \`#table-header\` | slotProps | Override the entire table header row |
| \`#table-body\` | slotProps | Override the entire table body |
        `.trim()
      }
    }
  }
}

export const Basic = {
  description: 'Minimal DataTable with search, status tabs, pagination, and items-per-page. Listen to update:filter to re-fetch data.',
  highlights: ['options.tableOptions — headers + fields', 'options.filterOptions — search + tabs + per_page', 'options.pagination — { total, last_page }', 'v-model:filter — current filter state', 'update:filter event to trigger data fetch'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

const filter = ref({ page: 1, per_page: 10, tab: '', keywords: '' })

const options = {
  pagination: { total: 100, last_page: 10 },
  filterOptions: {
    per_page: { key: 'per_page' },
    search: { key: 'keywords' },
    tabs: {
      key: 'tab',
      options: [
        { label: 'All', value: '' },
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' }
      ]
    }
  },
  tableOptions: {
    headers: [
      { key: 'name',   label: 'Name',   class: 'w-[40%]' },
      { key: 'email',  label: 'Email',  class: 'w-[40%]' },
      { key: 'status', label: 'Status', class: 'w-[20%]' }
    ],
    fields: [
      { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'Active' },
      { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'Inactive' },
      { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'Active' }
    ]
  }
}

function onFilterChange(newFilter) {
  filter.value = newFilter
  // fetch data with newFilter params here
  console.log('fetch with:', newFilter)
}
</script>

<template>
  <DataTable
    id="users-table"
    is-new-table
    :filter="filter"
    :options="options"
    @update:filter="onFilterChange"
  />
</template>`,
  render: () => ({
    components: { DataTable },
    setup() {
      const filter = ref({ page: 1, per_page: 10, tab: '', keywords: '' })
      const options = {
        pagination: { total: 100, last_page: 10 },
        filterOptions: {
          per_page: { key: 'per_page' },
          search: { key: 'keywords' },
          tabs: {
            key: 'tab',
            options: [
              { label: 'All', value: '' },
              { label: 'Active', value: 'active' },
              { label: 'Inactive', value: 'inactive' }
            ]
          }
        },
        tableOptions: {
          headers: [
            { key: 'name',   label: 'Name',   class: 'w-[40%]' },
            { key: 'email',  label: 'Email',  class: 'w-[40%]' },
            { key: 'status', label: 'Status', class: 'w-[20%]' }
          ],
          fields: [
            { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'Active' },
            { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'Inactive' },
            { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'Active' }
          ]
        }
      }
      return { filter, options }
    },
    template: `
      <div class="p-6">
        <DataTable id="basic-table" is-new-table :filter="filter" :options="options" @update:filter="filter = $event" />
      </div>
    `
  })
}

export const WithCustomCells = {
  description: 'Custom column slots override the default cell renderer. The #bulk-actions slot renders when rows are selected.',
  highlights: ['#[header.key]="{ item, data }" — custom cell slot', '#bulk-actions="{ selectedRows }" — batch action bar', 'v-model:selected — selected rows array', 'row-key — unique row identifier field'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable, Chip, Toggle, Button, Dropdown, DropdownItem } from '@orchidui/core'

const filter    = ref({ page: 1, per_page: 10 })
const selected  = ref([])
const dropdowns = ref({})

const options = {
  pagination: { total: 3, last_page: 1 },
  filterOptions: { per_page: { key: 'per_page' } },
  tableOptions: {
    isSelectable: true,
    isCursorPointer: true,
    headers: [
      { key: 'name',    label: 'Name',    class: 'w-[30%]' },
      { key: 'status',  label: 'Status',  class: 'w-[20%]', variant: 'chip',
        chipOptions: {
          active:   { label: 'Active',   variant: 'success' },
          inactive: { label: 'Inactive', variant: 'error' }
        }
      },
      { key: 'enabled', label: 'Enabled', class: 'w-[20%]', disableClickRow: true },
      { key: 'actions', label: '',        class: 'w-[10%]', variant: 'icon', headerVariant: 'text' }
    ],
    fields: [
      { id: '1', name: 'Alice',   status: 'active',   enabled: true },
      { id: '2', name: 'Bob',     status: 'inactive', enabled: false },
      { id: '3', name: 'Charlie', status: 'active',   enabled: true }
    ]
  }
}
</script>

<template>
  <DataTable
    id="custom-cells-table"
    is-new-table
    v-model:selected="selected"
    v-model:filter="filter"
    row-key="id"
    :options="options"
  >
    <!-- Bulk action bar shown when rows are selected -->
    <template #bulk-actions>
      <Button size="small" is-transparent left-icon="eye-open"  label="Enable" />
      <Button size="small" is-transparent left-icon="bin"       label="Delete" variant="destructive" />
    </template>

    <!-- Custom Enabled cell — Toggle component -->
    <template #enabled="{ item }">
      <Toggle size="small" :model-value="item.enabled" />
    </template>

    <!-- Custom Actions cell — Dropdown menu per row -->
    <template #actions="{ item }">
      <Dropdown v-model="dropdowns[item.id]" :distance="10">
        <Icon class="w-6 h-6 cursor-pointer mx-auto" name="dots-vertical" />
        <template #menu>
          <div class="p-2">
            <DropdownItem text="Edit"   icon="pencil" />
            <DropdownItem text="Delete" icon="bin"    variant="destructive" />
          </div>
        </template>
      </Dropdown>
    </template>
  </DataTable>
</template>`,
  render: () => ({
    components: { DataTable, Chip, Toggle, Button, Dropdown, DropdownItem },
    setup() {
      const filter    = ref({ page: 1, per_page: 10 })
      const selected  = ref([])
      const dropdowns = ref({})
      const options = {
        pagination: { total: 3, last_page: 1 },
        filterOptions: { per_page: { key: 'per_page' } },
        tableOptions: {
          isSelectable: true,
          isCursorPointer: true,
          headers: [
            { key: 'name',    label: 'Name',    class: 'w-[30%]' },
            { key: 'status',  label: 'Status',  class: 'w-[20%]', variant: 'chip',
              chipOptions: {
                active:   { label: 'Active',   variant: 'success' },
                inactive: { label: 'Inactive', variant: 'error' }
              }
            },
            { key: 'enabled', label: 'Enabled', class: 'w-[20%]', disableClickRow: true },
            { key: 'actions', label: '',        class: 'w-[10%]', variant: 'icon', headerVariant: 'text' }
          ],
          fields: [
            { id: '1', name: 'Alice',   status: 'active',   enabled: true },
            { id: '2', name: 'Bob',     status: 'inactive', enabled: false },
            { id: '3', name: 'Charlie', status: 'active',   enabled: true }
          ]
        }
      }
      return { filter, selected, dropdowns, options }
    },
    template: `
      <div class="p-6">
        <DataTable id="custom-cells" is-new-table v-model:selected="selected" v-model:filter="filter" row-key="id" :options="options">
          <template #bulk-actions>
            <Button size="small" is-transparent left-icon="bin" label="Delete" variant="destructive" />
          </template>
          <template #enabled="{ item }">
            <Toggle size="small" :model-value="item.enabled" />
          </template>
        </DataTable>
      </div>
    `
  })
}

export const WithFilterForm = {
  description: 'Filter dropdown with a form rendered inside. Emit apply-filter to receive the selected filter values.',
  highlights: ['options.filterOptions.form — FormBuilder jsonForm array', 'apply-filter event — filter values from form', 'filter-fields-changed event — per-field change'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

const filter = ref({ page: 1, per_page: 10, status: null })

const options = {
  pagination: { total: 50, last_page: 5 },
  filterOptions: {
    per_page: { key: 'per_page' },
    search: { key: 'keywords' },
    form: [
      {
        name: 'status',
        type: 'Select',
        props: {
          label: 'Status',
          options: [
            { label: 'Active',   value: 'active' },
            { label: 'Inactive', value: 'inactive' }
          ]
        }
      },
      {
        name: ['created_from', 'created_to'],
        type: 'DatePicker',
        props: { label: 'Created date', type: 'range' }
      }
    ],
    actions: { applyButton: { label: 'Apply filters' } }
  },
  tableOptions: {
    headers: [
      { key: 'name',   label: 'Name',   class: 'w-[50%]' },
      { key: 'status', label: 'Status', class: 'w-[50%]' }
    ],
    fields: [
      { id: '1', name: 'Alice', status: 'active' },
      { id: '2', name: 'Bob',   status: 'inactive' }
    ]
  }
}
</script>

<template>
  <DataTable
    id="filter-form-table"
    is-new-table
    v-model:filter="filter"
    :options="options"
    @apply-filter="console.log('filter applied:', $event)"
  />
</template>`,
  render: () => ({
    components: { DataTable },
    setup() {
      const filter = ref({ page: 1, per_page: 10 })
      const options = {
        pagination: { total: 50, last_page: 5 },
        filterOptions: {
          per_page: { key: 'per_page' },
          search: { key: 'keywords' },
          form: [
            {
              name: 'status',
              type: 'Select',
              props: {
                label: 'Status',
                options: [
                  { label: 'Active', value: 'active' },
                  { label: 'Inactive', value: 'inactive' }
                ]
              }
            }
          ],
          actions: { applyButton: { label: 'Apply filters' } }
        },
        tableOptions: {
          headers: [
            { key: 'name',   label: 'Name',   class: 'w-[50%]' },
            { key: 'status', label: 'Status', class: 'w-[50%]' }
          ],
          fields: [
            { id: '1', name: 'Alice', status: 'active' },
            { id: '2', name: 'Bob',   status: 'inactive' }
          ]
        }
      }
      return { filter, options }
    },
    template: `
      <div class="p-6">
        <DataTable id="filter-form" is-new-table v-model:filter="filter" :options="options" />
      </div>
    `
  })
}

export const LoadingState = {
  description: 'Pass is-loading to show skeleton rows while data is being fetched. The number of skeleton rows matches the current per_page value.',
  highlights: ['is-loading prop', 'skeleton rows = current per_page'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

const filter   = ref({ page: 1, per_page: 5 })
const isLoading = ref(true)

const options = {
  pagination: { total: 50, last_page: 10 },
  filterOptions: { per_page: { key: 'per_page' }, search: { key: 'keywords' } },
  tableOptions: {
    headers: [
      { key: 'name',   label: 'Name',   class: 'w-[40%]' },
      { key: 'email',  label: 'Email',  class: 'w-[40%]' },
      { key: 'status', label: 'Status', class: 'w-[20%]' }
    ],
    fields: []
  }
}
</script>

<template>
  <DataTable
    id="loading-table"
    is-new-table
    :filter="filter"
    :options="options"
    :is-loading="isLoading"
    @update:filter="filter = $event"
  />
</template>`,
  render: () => ({
    components: { DataTable },
    setup() {
      const filter    = ref({ page: 1, per_page: 5 })
      const isLoading = ref(true)
      const options = {
        pagination: { total: 50, last_page: 10 },
        filterOptions: { per_page: { key: 'per_page' }, search: { key: 'keywords' } },
        tableOptions: {
          headers: [
            { key: 'name',   label: 'Name',   class: 'w-[40%]' },
            { key: 'email',  label: 'Email',  class: 'w-[40%]' },
            { key: 'status', label: 'Status', class: 'w-[20%]' }
          ],
          fields: []
        }
      }
      return { filter, isLoading, options }
    },
    template: `
      <div class="p-6">
        <DataTable id="loading-table" is-new-table :filter="filter" :options="options" :is-loading="isLoading" @update:filter="filter = $event" />
      </div>
    `
  })
}

export const CustomEmptyState = {
  description: 'The #empty slot replaces the default empty state when fields is an empty array.',
  highlights: ['#empty slot', 'shown when fields.length === 0'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable, EmptyPage } from '@orchidui/core'

const filter = ref({ page: 1, per_page: 10 })

const options = {
  pagination: { total: 0, last_page: 1 },
  filterOptions: { search: { key: 'keywords' } },
  tableOptions: {
    headers: [
      { key: 'name',  label: 'Name',  class: 'w-[50%]' },
      { key: 'email', label: 'Email', class: 'w-[50%]' }
    ],
    fields: []
  }
}
</script>

<template>
  <DataTable id="empty-table" is-new-table :filter="filter" :options="options" @update:filter="filter = $event">
    <template #empty>
      <div class="flex justify-center py-16">
        <EmptyPage
          icon="document"
          title="No records found"
          description="Try adjusting your search or filters."
          :is-button="false"
          hide-badge
        />
      </div>
    </template>
  </DataTable>
</template>`,
  render: () => ({
    components: { DataTable, EmptyPage },
    setup() {
      const filter = ref({ page: 1, per_page: 10 })
      const options = {
        pagination: { total: 0, last_page: 1 },
        filterOptions: { search: { key: 'keywords' } },
        tableOptions: {
          headers: [
            { key: 'name',  label: 'Name',  class: 'w-[50%]' },
            { key: 'email', label: 'Email', class: 'w-[50%]' }
          ],
          fields: []
        }
      }
      return { filter, options }
    },
    template: `
      <div class="p-6">
        <DataTable id="empty-table" is-new-table :filter="filter" :options="options" @update:filter="filter = $event">
          <template #empty>
            <div class="flex justify-center py-16">
              <EmptyPage icon="document" title="No records found" description="Try adjusting your search or filters." :is-button="false" hide-badge />
            </div>
          </template>
        </DataTable>
      </div>
    `
  })
}

export const RowClickAndLink = {
  description: 'click:row fires with the row data object. row-link sets the field whose value is used as a navigation URL per row. selectedIndex highlights a specific row.',
  highlights: ['click:row event — { item }', 'row-link prop — field name containing the URL', 'selected-index prop — 0-based highlighted row'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

const filter        = ref({ page: 1, per_page: 10 })
const selectedIndex = ref(-1)

const options = {
  pagination: { total: 3, last_page: 1 },
  tableOptions: {
    isCursorPointer: true,
    headers: [
      { key: 'name',   label: 'Name',   class: 'w-[40%]' },
      { key: 'email',  label: 'Email',  class: 'w-[40%]' },
      { key: 'status', label: 'Status', class: 'w-[20%]' }
    ],
    fields: [
      { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'Active',   href: '/users/1' },
      { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'Inactive', href: '/users/2' },
      { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'Active',   href: '/users/3' }
    ]
  }
}

function onRowClick({ item, index }) {
  selectedIndex.value = index
  console.log('clicked row:', item)
}
</script>

<template>
  <DataTable
    id="row-click-table"
    is-new-table
    :filter="filter"
    :options="options"
    :selected-index="selectedIndex"
    row-link="href"
    @click:row="onRowClick"
    @update:filter="filter = $event"
  />
</template>`,
  render: () => ({
    components: { DataTable },
    setup() {
      const filter        = ref({ page: 1, per_page: 10 })
      const selectedIndex = ref(-1)
      const options = {
        pagination: { total: 3, last_page: 1 },
        tableOptions: {
          isCursorPointer: true,
          headers: [
            { key: 'name',   label: 'Name',   class: 'w-[40%]' },
            { key: 'email',  label: 'Email',  class: 'w-[40%]' },
            { key: 'status', label: 'Status', class: 'w-[20%]' }
          ],
          fields: [
            { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'Active',   href: '/users/1' },
            { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'Inactive', href: '/users/2' },
            { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'Active',   href: '/users/3' }
          ]
        }
      }
      return { filter, selectedIndex, options }
    },
    template: `
      <div class="p-6">
        <DataTable
          id="row-click-table"
          is-new-table
          :filter="filter"
          :options="options"
          :selected-index="selectedIndex"
          row-link="href"
          @click:row="({ index }) => selectedIndex = index"
          @update:filter="filter = $event"
        />
      </div>
    `
  })
}

export const CursorPagination = {
  description: 'Cursor-based pagination — pass options.cursor instead of options.pagination. The component emits update:filter with the new cursor value.',
  highlights: ['options.cursor — { prev, next }', 'no options.pagination', 'update:filter carries cursor key'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

// Simulate cursor pages
const pages = {
  '': {
    fields: [
      { id: '1', name: 'Alice', email: 'alice@example.com' },
      { id: '2', name: 'Bob',   email: 'bob@example.com' }
    ],
    cursor: { prev: null, next: 'cursor_page2' }
  },
  cursor_page2: {
    fields: [
      { id: '3', name: 'Charlie', email: 'charlie@example.com' },
      { id: '4', name: 'Dana',    email: 'dana@example.com' }
    ],
    cursor: { prev: 'cursor_page1', next: null }
  }
}

const filter  = ref({ cursor: '' })
const current = ref(pages[''])

const options = computed(() => ({
  cursor: current.value.cursor,
  tableOptions: {
    headers: [
      { key: 'name',  label: 'Name',  class: 'w-[50%]' },
      { key: 'email', label: 'Email', class: 'w-[50%]' }
    ],
    fields: current.value.fields
  }
}))

function onFilterChange(newFilter) {
  filter.value = newFilter
  current.value = pages[newFilter.cursor ?? ''] ?? pages['']
}
</script>

<template>
  <DataTable
    id="cursor-table"
    is-new-table
    :filter="filter"
    :options="options"
    @update:filter="onFilterChange"
  />
</template>`,
  render: () => ({
    components: { DataTable },
    setup() {
      const pages = {
        '': {
          fields: [
            { id: '1', name: 'Alice', email: 'alice@example.com' },
            { id: '2', name: 'Bob',   email: 'bob@example.com' }
          ],
          cursor: { prev: null, next: 'cursor_page2' }
        },
        cursor_page2: {
          fields: [
            { id: '3', name: 'Charlie', email: 'charlie@example.com' },
            { id: '4', name: 'Dana',    email: 'dana@example.com' }
          ],
          cursor: { prev: 'cursor_page1', next: null }
        }
      }
      const filter  = ref({ cursor: '' })
      const current = ref(pages[''])
      const options = computed(() => ({
        cursor: current.value.cursor,
        tableOptions: {
          headers: [
            { key: 'name',  label: 'Name',  class: 'w-[50%]' },
            { key: 'email', label: 'Email', class: 'w-[50%]' }
          ],
          fields: current.value.fields
        }
      }))
      function onFilterChange(newFilter) {
        filter.value = newFilter
        current.value = pages[newFilter.cursor ?? ''] ?? pages['']
      }
      return { filter, options, onFilterChange }
    },
    template: `
      <div class="p-6">
        <DataTable id="cursor-table" is-new-table :filter="filter" :options="options" @update:filter="onFilterChange" />
      </div>
    `
  })
}

export const ColumnEdit = {
  description: 'Column show/hide and reorder editor. Pass filterOptions.columnEdit with a key (filter field name) and localStorageKey (persistence namespace). Persists column order to localStorage.',
  highlights: ['filterOptions.columnEdit — { key, localStorageKey }', 'columns-changed event', 'persisted to localStorage'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

const filter = ref({
  page: 1,
  per_page: 10,
  columnEdit: {}
})

const options = {
  pagination: { total: 3, last_page: 1 },
  filterOptions: {
    per_page: { key: 'per_page' },
    columnEdit: {
      key: 'columnEdit',
      localStorageKey: 'my-table-columns'
    }
  },
  tableOptions: {
    headers: [
      { key: 'name',    label: 'Name',    class: 'w-[25%]', isSortable: false },
      { key: 'email',   label: 'Email',   class: 'w-[35%]' },
      { key: 'role',    label: 'Role',    class: 'w-[20%]' },
      { key: 'status',  label: 'Status',  class: 'w-[20%]' }
    ],
    fields: [
      { id: '1', name: 'Alice',   email: 'alice@example.com',   role: 'Admin',  status: 'Active' },
      { id: '2', name: 'Bob',     email: 'bob@example.com',     role: 'Editor', status: 'Inactive' },
      { id: '3', name: 'Charlie', email: 'charlie@example.com', role: 'Viewer', status: 'Active' }
    ]
  }
}
</script>

<template>
  <DataTable
    id="column-edit-table"
    is-new-table
    v-model:filter="filter"
    :options="options"
    @columns-changed="console.log('columns changed:', $event)"
  />
</template>`,
  render: () => ({
    components: { DataTable },
    setup() {
      const filter = ref({ page: 1, per_page: 10, columnEdit: {} })
      const options = {
        pagination: { total: 3, last_page: 1 },
        filterOptions: {
          per_page: { key: 'per_page' },
          columnEdit: {
            key: 'columnEdit',
            localStorageKey: 'storybook-column-edit'
          }
        },
        tableOptions: {
          headers: [
            { key: 'name',   label: 'Name',   class: 'w-[25%]' },
            { key: 'email',  label: 'Email',  class: 'w-[35%]' },
            { key: 'role',   label: 'Role',   class: 'w-[20%]' },
            { key: 'status', label: 'Status', class: 'w-[20%]' }
          ],
          fields: [
            { id: '1', name: 'Alice',   email: 'alice@example.com',   role: 'Admin',  status: 'Active' },
            { id: '2', name: 'Bob',     email: 'bob@example.com',     role: 'Editor', status: 'Inactive' },
            { id: '3', name: 'Charlie', email: 'charlie@example.com', role: 'Viewer', status: 'Active' }
          ]
        }
      }
      return { filter, options }
    },
    template: `
      <div class="p-6">
        <DataTable id="column-edit-table" is-new-table v-model:filter="filter" :options="options" />
      </div>
    `
  })
}

export const SearchWithOptions = {
  description: 'When filterOptions.search has an options array, a dropdown lets the user choose which field to search by. The active choice is stored in filter.selectedSearchOption.',
  highlights: ['filterOptions.search.options — [{ label, value }]', 'selectedSearchOption in filter', 'search-query-changed event'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

const filter = ref({ page: 1, per_page: 10, selectedSearchOption: 'name' })

const options = {
  pagination: { total: 3, last_page: 1 },
  filterOptions: {
    per_page: { key: 'per_page' },
    search: {
      key: 'keywords',
      options: [
        { label: 'Name',  value: 'name' },
        { label: 'Email', value: 'email' },
        { label: 'ID',    value: 'id' }
      ]
    }
  },
  tableOptions: {
    headers: [
      { key: 'name',  label: 'Name',  class: 'w-[33%]' },
      { key: 'email', label: 'Email', class: 'w-[33%]' },
      { key: 'id',    label: 'ID',    class: 'w-[33%]' }
    ],
    fields: [
      { id: '1', name: 'Alice',   email: 'alice@example.com' },
      { id: '2', name: 'Bob',     email: 'bob@example.com' },
      { id: '3', name: 'Charlie', email: 'charlie@example.com' }
    ]
  }
}
</script>

<template>
  <DataTable
    id="search-options-table"
    is-new-table
    v-model:filter="filter"
    :options="options"
    @search-query-changed="console.log('search:', $event)"
  />
</template>`,
  render: () => ({
    components: { DataTable },
    setup() {
      const filter = ref({ page: 1, per_page: 10, selectedSearchOption: 'name' })
      const options = {
        pagination: { total: 3, last_page: 1 },
        filterOptions: {
          per_page: { key: 'per_page' },
          search: {
            key: 'keywords',
            options: [
              { label: 'Name',  value: 'name' },
              { label: 'Email', value: 'email' },
              { label: 'ID',    value: 'id' }
            ]
          }
        },
        tableOptions: {
          headers: [
            { key: 'name',  label: 'Name',  class: 'w-[33%]' },
            { key: 'email', label: 'Email', class: 'w-[33%]' },
            { key: 'id',    label: 'ID',    class: 'w-[33%]' }
          ],
          fields: [
            { id: '1', name: 'Alice',   email: 'alice@example.com' },
            { id: '2', name: 'Bob',     email: 'bob@example.com' },
            { id: '3', name: 'Charlie', email: 'charlie@example.com' }
          ]
        }
      }
      return { filter, options }
    },
    template: `
      <div class="p-6">
        <DataTable id="search-options-table" is-new-table v-model:filter="filter" :options="options" />
      </div>
    `
  })
}

export const StickyColumns = {
  description: 'Horizontal scrolling table with a sticky first column. Set isSticky on tableOptions and add stickyLeft / stickyRight on individual headers.',
  highlights: ['tableOptions.isSticky — enables horizontal scroll', 'header.stickyLeft — pin column to left', 'header.stickyRight — pin column to right'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

const filter = ref({ page: 1, per_page: 10 })

const options = {
  pagination: { total: 2, last_page: 1 },
  tableOptions: {
    isSticky: true,
    headers: [
      { key: 'name',    label: 'Name',    class: 'w-[180px]', stickyLeft: true },
      { key: 'email',   label: 'Email',   class: 'w-[220px]' },
      { key: 'country', label: 'Country', class: 'w-[160px]' },
      { key: 'plan',    label: 'Plan',    class: 'w-[160px]' },
      { key: 'created', label: 'Created', class: 'w-[160px]' },
      { key: 'actions', label: '',        class: 'w-[80px]',  stickyRight: true }
    ],
    fields: [
      { id: '1', name: 'Alice',   email: 'alice@example.com',   country: 'SG', plan: 'Pro',   created: '2024-01-10', actions: '' },
      { id: '2', name: 'Bob',     email: 'bob@example.com',     country: 'MY', plan: 'Basic', created: '2024-02-15', actions: '' }
    ]
  }
}
</script>

<template>
  <DataTable
    id="sticky-table"
    is-new-table
    :filter="filter"
    :options="options"
    @update:filter="filter = $event"
  />
</template>`,
  render: () => ({
    components: { DataTable },
    setup() {
      const filter = ref({ page: 1, per_page: 10 })
      const options = {
        pagination: { total: 2, last_page: 1 },
        tableOptions: {
          isSticky: true,
          headers: [
            { key: 'name',    label: 'Name',    class: 'w-[180px]', stickyLeft: true },
            { key: 'email',   label: 'Email',   class: 'w-[220px]' },
            { key: 'country', label: 'Country', class: 'w-[160px]' },
            { key: 'plan',    label: 'Plan',    class: 'w-[160px]' },
            { key: 'created', label: 'Created', class: 'w-[160px]' },
            { key: 'actions', label: '',        class: 'w-[80px]',  stickyRight: true }
          ],
          fields: [
            { id: '1', name: 'Alice', email: 'alice@example.com', country: 'SG', plan: 'Pro',   created: '2024-01-10', actions: '' },
            { id: '2', name: 'Bob',   email: 'bob@example.com',   country: 'MY', plan: 'Basic', created: '2024-02-15', actions: '' }
          ]
        }
      }
      return { filter, options }
    },
    template: `
      <div class="p-6 overflow-x-auto">
        <DataTable id="sticky-table" is-new-table :filter="filter" :options="options" @update:filter="filter = $event" />
      </div>
    `
  })
}

export const NewTableDesign = {
  description: 'The is-new-table prop switches to the NewTable component — the updated visual design used across most pages. Combine with is-sticky, cursor pagination, and columnEdit as needed.',
  highlights: ['is-new-table prop', 'used in 46+ dashboard pages', 'combine with is-sticky + cursor + columnEdit'],
  code: `<script setup>
import { ref } from 'vue'
import { DataTable, Chip, EmptyPage } from '@orchidui/core'

const filter = ref({
  page: 1,
  per_page: 10,
  tab: '',
  keywords: ''
})

const CHIP_STATUS = {
  active:   { label: 'Active',   variant: 'success' },
  inactive: { label: 'Inactive', variant: 'error' },
  pending:  { label: 'Pending',  variant: 'warning' }
}

const options = {
  pagination: { total: 3, last_page: 1 },
  filterOptions: {
    per_page: { key: 'per_page' },
    search: { key: 'keywords' },
    tabs: {
      key: 'tab',
      options: [
        { label: 'All',      value: '' },
        { label: 'Active',   value: 'active' },
        { label: 'Inactive', value: 'inactive' }
      ]
    }
  },
  tableOptions: {
    isCursorPointer: true,
    headers: [
      { key: 'name',   label: 'Name',   class: 'w-[35%]' },
      { key: 'email',  label: 'Email',  class: 'w-[35%]' },
      {
        key: 'status', label: 'Status', class: 'w-[20%]',
        variant: 'chip', chipOptions: CHIP_STATUS
      },
      { key: 'actions', label: '', class: 'w-[10%]', variant: 'icon', headerVariant: 'text' }
    ],
    fields: [
      { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'active' },
      { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'inactive' },
      { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'pending' }
    ]
  }
}
</script>

<template>
  <DataTable
    id="new-table-demo"
    is-new-table
    v-model:filter="filter"
    :options="options"
    @click:row="console.log('row clicked:', $event.item)"
  >
    <template #actions="{ item }">
      <button class="opacity-0 group-hover/row:opacity-100 text-oc-text-400 hover:text-oc-text-500">
        <Icon name="dots-vertical" width="20" height="20" />
      </button>
    </template>

    <template #empty>
      <div class="flex justify-center py-12">
        <EmptyPage title="No records found" description="Try adjusting your search." :is-button="false" />
      </div>
    </template>
  </DataTable>
</template>`,
  render: () => ({
    components: { DataTable, Chip, EmptyPage },
    setup() {
      const filter = ref({ page: 1, per_page: 10, tab: '', keywords: '' })
      const CHIP_STATUS = {
        active:   { label: 'Active',   variant: 'success' },
        inactive: { label: 'Inactive', variant: 'error' },
        pending:  { label: 'Pending',  variant: 'warning' }
      }
      const options = {
        pagination: { total: 3, last_page: 1 },
        filterOptions: {
          per_page: { key: 'per_page' },
          search: { key: 'keywords' },
          tabs: {
            key: 'tab',
            options: [
              { label: 'All',      value: '' },
              { label: 'Active',   value: 'active' },
              { label: 'Inactive', value: 'inactive' }
            ]
          }
        },
        tableOptions: {
          isCursorPointer: true,
          headers: [
            { key: 'name',    label: 'Name',   class: 'w-[35%]' },
            { key: 'email',   label: 'Email',  class: 'w-[35%]' },
            { key: 'status',  label: 'Status', class: 'w-[20%]', variant: 'chip', chipOptions: CHIP_STATUS },
            { key: 'actions', label: '',       class: 'w-[10%]', variant: 'icon', headerVariant: 'text' }
          ],
          fields: [
            { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'active' },
            { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'inactive' },
            { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'pending' }
          ]
        }
      }
      return { filter, options }
    },
    template: `
      <div class="p-6">
        <DataTable
          id="new-table-demo"
          is-new-table
          v-model:filter="filter"
          :options="options"
        >
          <template #empty>
            <div class="flex justify-center py-12">
              <EmptyPage title="No records found" description="Try adjusting your search." :is-button="false" />
            </div>
          </template>
        </DataTable>
      </div>
    `
  })
}
