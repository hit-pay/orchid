import { DataTable, Button } from '@/orchidui-core'
import { ref, computed } from 'vue'
import BasicExample from './examples/Basic.vue'
import BasicRaw from './examples/Basic.vue?raw'
import WithCustomCellsExample from './examples/WithCustomCells.vue'
import WithCustomCellsRaw from './examples/WithCustomCells.vue?raw'
import WithFilterFormExample from './examples/WithFilterForm.vue'
import WithFilterFormRaw from './examples/WithFilterForm.vue?raw'
import LoadingStateExample from './examples/LoadingState.vue'
import LoadingStateRaw from './examples/LoadingState.vue?raw'
import CustomEmptyStateExample from './examples/CustomEmptyState.vue'
import CustomEmptyStateRaw from './examples/CustomEmptyState.vue?raw'
import RowClickAndLinkExample from './examples/RowClickAndLink.vue'
import RowClickAndLinkRaw from './examples/RowClickAndLink.vue?raw'
import CursorPaginationExample from './examples/CursorPagination.vue'
import CursorPaginationRaw from './examples/CursorPagination.vue?raw'
import ColumnEditExample from './examples/ColumnEdit.vue'
import ColumnEditRaw from './examples/ColumnEdit.vue?raw'
import SearchWithOptionsExample from './examples/SearchWithOptions.vue'
import SearchWithOptionsRaw from './examples/SearchWithOptions.vue?raw'
import StickyColumnsExample from './examples/StickyColumns.vue'
import StickyColumnsRaw from './examples/StickyColumns.vue?raw'
import NewTableDesignExample from './examples/NewTableDesign.vue'
import NewTableDesignRaw from './examples/NewTableDesign.vue?raw'

export default {
  component: DataTable,
  tags: ['autodocs'],
  kind: 'composite',
  description: 'Data table with filtering, pagination, search, and bulk actions.',
  keywords: ['table', 'data', 'filter', 'pagination', 'crud'],
  use_for: [
    'resource list',
    'CRUD table',
    'data grid with search and filter',
    'paginated data display',
    'manage records with bulk actions'
  ],
  understand_with: ['NewTable', 'FormBuilder', 'Modal', 'ConfirmationModal', 'PageTitle', 'EmptyPage', 'Chip', 'Button', 'Dropdown', 'DropdownItem'],
}

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  argTypes: {
    // Direct DataTable props — descriptions auto-generated from component JSDoc
    isNewTable:    { control: 'boolean' },
    isLoading:     { control: 'boolean' },
    selectedIndex: { control: { type: 'number', min: -1, max: 4 } },
    // tableOptions fields — not DataTable props, need manual descriptions
    isSelectable:    { control: 'boolean', description: 'tableOptions.isSelectable — row checkboxes, enables v-model:selected' },
    isSticky:        { control: 'boolean', description: 'tableOptions.isSticky — horizontal scroll with stickyLeft/stickyRight pinned' },
    isBorderless:    { control: 'boolean', description: 'tableOptions.isBorderless — remove outer border (Table only)' },
    isCursorPointer: { control: 'boolean', description: 'tableOptions.isCursorPointer — pointer cursor on rows (Table only)' },
    isExpand:        { control: 'boolean', description: 'tableOptions.isExpand — expandable child rows via row.children (NewTable only)' },
    // Header column features
    showCopyEmail:     { control: 'boolean', description: 'header.isCopy — copy-to-clipboard on hover for Email column' },
    showHeaderTooltip: { control: 'boolean', description: 'header.tooltip / header.leftTooltip — icon tooltips on Plan column header (NewTable)' },
    showChipStatus:    { control: 'boolean', description: 'header.variant="chip" + header.chipOptions — coloured status chips (Table only, set isNewTable=false)' },
    showDateVariant:   { control: 'boolean', description: 'header.variant="date" — auto-formats ISO date via dayjs (NewTable only)' },
    // Filter toolbar
    showSearch:          { control: 'boolean', description: 'filterOptions.search — enables search bar' },
    showTabs:            { control: 'boolean', description: 'filterOptions.tabs — tab bar above the table' },
    showFilterForm:      { control: 'boolean', description: 'filterOptions.form — filter dropdown powered by FormBuilder' },
    showColumnEdit:      { control: 'boolean', description: 'filterOptions.columnEdit — column show/hide editor, persists to localStorage' },
    hidePerPageDropdown: { control: 'boolean', description: 'options.hidePerPageDropdown — hide the per-page selector' },
    // Slots & data state
    showCustomCells: { control: 'boolean', description: '#[header.key]="{ item, data }" — custom cell slot for Status column' },
    showBulkActions: { control: 'boolean', description: '#bulk-actions="{ selectedRows }" — action bar shown when rows are selected (requires isSelectable)' },
    emptyTable:      { control: 'boolean', description: 'Set fields=[] to trigger the #empty slot' },
  },
  args: {
    isNewTable:        true,
    isLoading:         false,
    isSelectable:      false,
    isSticky:          false,
    isBorderless:      false,
    isCursorPointer:   false,
    isExpand:          false,
    showCopyEmail:     false,
    showHeaderTooltip: false,
    showChipStatus:    false,
    showDateVariant:   false,
    showSearch:        true,
    showTabs:          true,
    showFilterForm:    false,
    showColumnEdit:    false,
    hidePerPageDropdown: false,
    showCustomCells:   false,
    showBulkActions:   false,
    emptyTable:        false,
    selectedIndex:     -1
  },
  render: (args) => ({
    components: { DataTable, Button },
    setup() {
      const selected = ref([])
      const filter   = ref({ page: 1, per_page: 10, tab: '', keywords: '' })
      const lastClickedRow = ref(null)

      const rows = [
        {
          id: '1', name: 'Alice Johnson',  email: 'alice@example.com',
          status: 'active',   plan: 'Pro',        joined: '2024-01-15T08:30:00Z',
          children: [
            { id: '1a', name: '↳ Alice (sub)', email: 'alice-sub@example.com', status: 'active',   plan: 'Pro',  joined: '2024-01-16T08:30:00Z' }
          ]
        },
        { id: '2', name: 'Bob Smith',      email: 'bob@example.com',     status: 'inactive', plan: 'Free',       joined: '2024-02-20T14:00:00Z' },
        { id: '3', name: 'Charlie Lee',    email: 'charlie@example.com', status: 'active',   plan: 'Enterprise', joined: '2024-03-05T09:15:00Z' },
        { id: '4', name: 'Diana Prince',   email: 'diana@example.com',   status: 'pending',  plan: 'Pro',        joined: '2024-04-10T11:45:00Z' },
        { id: '5', name: 'Eve Torres',     email: 'eve@example.com',     status: 'active',   plan: 'Free',       joined: '2024-05-01T16:00:00Z' }
      ]

      const options = computed(() => ({
        pagination: { total: 100, last_page: 10 },
        hidePerPageDropdown: args.hidePerPageDropdown,
        filterOptions: {
          per_page: { key: 'per_page' },
          ...(args.showSearch && { search: { key: 'keywords' } }),
          ...(args.showTabs && {
            tabs: {
              key: 'tab',
              options: [
                { label: 'All',      value: '' },
                { label: 'Active',   value: 'active' },
                { label: 'Inactive', value: 'inactive' },
                { label: 'Pending',  value: 'pending' }
              ]
            }
          }),
          ...(args.showFilterForm && {
            form: [
              {
                name: 'plan',
                type: 'Select',
                props: {
                  label: 'Plan',
                  options: [
                    { label: 'Free',       value: 'free' },
                    { label: 'Pro',        value: 'pro' },
                    { label: 'Enterprise', value: 'enterprise' }
                  ]
                }
              }
            ]
          }),
          ...(args.showColumnEdit && {
            columnEdit: { key: 'columnEdit', localStorageKey: 'playground-datatable' }
          })
        },
        tableOptions: {
          isSelectable:    args.isSelectable,
          isSticky:        args.isSticky,
          isBorderless:    args.isBorderless,
          isCursorPointer: args.isCursorPointer,
          isExpand:        args.isExpand,
          headers: [
            {
              key:        'name',
              label:      'Name',
              class:      'w-[25%]',
              stickyLeft: args.isSticky
            },
            {
              key:    'email',
              label:  'Email',
              class:  'w-[28%]',
              isCopy: args.showCopyEmail
            },
            {
              key:     'plan',
              label:   'Plan',
              class:   'w-[12%]',
              tooltip: args.showHeaderTooltip ? 'Current subscription tier'       : undefined,
              leftTooltip: args.showHeaderTooltip ? 'Affects feature availability' : undefined,
              leftIcon:    args.showHeaderTooltip ? 'information'                  : undefined
            },
            {
              key:         'joined',
              label:       'Joined',
              class:       'w-[15%]',
              variant:     args.showDateVariant ? 'date' : undefined,
              dateFormat:  'MMM DD, YYYY'
            },
            {
              key:         'status',
              label:       'Status',
              class:       'w-[20%]',
              stickyRight: args.isSticky,
              ...(!args.showCustomCells && args.showChipStatus && !args.isNewTable
                ? {
                    variant:     'chip',
                    chipOptions: {
                      active:   'green',
                      inactive: 'red',
                      pending:  'yellow'
                    }
                  }
                : {})
            }
          ],
          fields: args.emptyTable ? [] : rows
        }
      }))

      return { args, filter, options, selected, lastClickedRow }
    },
    template: `
      <div class="p-6 flex flex-col gap-4">
        <DataTable
          id="playground-table"
          :is-new-table="args.isNewTable"
          :is-loading="args.isLoading"
          :selected-index="args.selectedIndex"
          v-model:selected="selected"
          :filter="filter"
          :options="options"
          @update:filter="filter = $event"
          @click:row="lastClickedRow = $event"
        >
          <template v-if="args.showCustomCells" #status="{ item }">
            <span
              class="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
              :class="{
                'bg-green-100 text-green-700':   item.status === 'active',
                'bg-red-100 text-red-700':       item.status === 'inactive',
                'bg-yellow-100 text-yellow-700': item.status === 'pending'
              }"
            >{{ item.status }}</span>
          </template>

          <template v-if="args.showBulkActions && args.isSelectable" #bulk-actions="{ selectedRows }">
            <span class="text-sm text-oc-text-400">{{ selectedRows.length }} selected</span>
            <Button variant="secondary" size="small" left-icon="x-circle" @click="selected = []">
              Clear
            </Button>
            <Button variant="secondary" size="small" left-icon="trash">
              Delete
            </Button>
          </template>

          <template v-if="args.emptyTable" #empty>
            <div class="flex flex-col items-center gap-2 py-12 text-oc-text-400">
              <p class="text-sm font-medium">No records found</p>
              <p class="text-xs">Try adjusting your filters</p>
            </div>
          </template>
        </DataTable>

        <div v-if="lastClickedRow" class="rounded border border-oc-gray-200 bg-oc-bg-2 p-3 text-xs text-oc-text-400 font-mono">
          click:row → {{ JSON.stringify(lastClickedRow.field ?? lastClickedRow, null, 2) }}
        </div>
      </div>
    `
  })
}

export const Basic = {
  description: 'Minimal DataTable with search, status tabs, pagination, and items-per-page. Listen to update:filter to re-fetch data.',
  highlights: ['options.tableOptions — headers + fields', 'options.filterOptions — search + tabs + per_page', 'options.pagination — { total, last_page }', 'v-model:filter — current filter state', 'update:filter event to trigger data fetch'],
  code: BasicRaw,
  render: () => ({
    components: { BasicExample },
    template: `<div class="p-6"><BasicExample /></div>`
  })
}

export const WithCustomCells = {
  description: 'Custom column slots override the default cell renderer. The #bulk-actions slot renders when rows are selected.',
  highlights: ['#[header.key]="{ item, data }" — custom cell slot', '#bulk-actions="{ selectedRows }" — batch action bar', 'v-model:selected — selected rows array', 'row-key — unique row identifier field'],
  code: WithCustomCellsRaw,
  render: () => ({
    components: { WithCustomCellsExample },
    template: `<div class="p-6"><WithCustomCellsExample /></div>`
  })
}

export const WithFilterForm = {
  description: 'Filter dropdown with a form rendered inside. Emit apply-filter to receive the selected filter values.',
  highlights: ['options.filterOptions.form — FormBuilder jsonForm array', 'apply-filter event — filter values from form', 'filter-fields-changed event — per-field change'],
  code: WithFilterFormRaw,
  render: () => ({
    components: { WithFilterFormExample },
    template: `<div class="p-6"><WithFilterFormExample /></div>`
  })
}

export const LoadingState = {
  description: 'Pass is-loading to show skeleton rows while data is being fetched. The number of skeleton rows matches the current per_page value.',
  highlights: ['is-loading prop', 'skeleton rows = current per_page'],
  code: LoadingStateRaw,
  render: () => ({
    components: { LoadingStateExample },
    template: `<div class="p-6"><LoadingStateExample /></div>`
  })
}

export const CustomEmptyState = {
  description: 'The #empty slot replaces the default empty state when fields is an empty array.',
  highlights: ['#empty slot', 'shown when fields.length === 0'],
  code: CustomEmptyStateRaw,
  render: () => ({
    components: { CustomEmptyStateExample },
    template: `<div class="p-6"><CustomEmptyStateExample /></div>`
  })
}

export const RowClickAndLink = {
  description: 'click:row fires with the row data object. row-link sets the field whose value is used as a navigation URL per row. selectedIndex highlights a specific row.',
  highlights: ['click:row event — { item }', 'row-link prop — field name containing the URL', 'selected-index prop — 0-based highlighted row'],
  code: RowClickAndLinkRaw,
  render: () => ({
    components: { RowClickAndLinkExample },
    template: `<div class="p-6"><RowClickAndLinkExample /></div>`
  })
}

export const CursorPagination = {
  description: 'Cursor-based pagination — pass options.cursor instead of options.pagination. The component emits update:filter with the new cursor value.',
  highlights: ['options.cursor — { prev, next }', 'no options.pagination', 'update:filter carries cursor key'],
  code: CursorPaginationRaw,
  render: () => ({
    components: { CursorPaginationExample },
    template: `<div class="p-6"><CursorPaginationExample /></div>`
  })
}

export const ColumnEdit = {
  description: 'Column show/hide and reorder editor. Pass filterOptions.columnEdit with a key (filter field name) and localStorageKey (persistence namespace). Persists column order to localStorage.',
  highlights: ['filterOptions.columnEdit — { key, localStorageKey }', 'columns-changed event', 'persisted to localStorage'],
  code: ColumnEditRaw,
  render: () => ({
    components: { ColumnEditExample },
    template: `<div class="p-6"><ColumnEditExample /></div>`
  })
}

export const SearchWithOptions = {
  description: 'When filterOptions.search has an options array, a dropdown lets the user choose which field to search by. The active choice is stored in filter.selectedSearchOption.',
  highlights: ['filterOptions.search.options — [{ label, value }]', 'selectedSearchOption in filter', 'search-query-changed event'],
  code: SearchWithOptionsRaw,
  render: () => ({
    components: { SearchWithOptionsExample },
    template: `<div class="p-6"><SearchWithOptionsExample /></div>`
  })
}

export const StickyColumns = {
  description: 'Horizontal scrolling table with a sticky first column. Set isSticky on tableOptions and add stickyLeft / stickyRight on individual headers.',
  highlights: ['tableOptions.isSticky — enables horizontal scroll', 'header.stickyLeft — pin column to left', 'header.stickyRight — pin column to right'],
  code: StickyColumnsRaw,
  render: () => ({
    components: { StickyColumnsExample },
    template: `<div class="p-6"><StickyColumnsExample /></div>`
  })
}

export const NewTableDesign = {
  description: 'The is-new-table prop switches to the NewTable component — the updated visual design used across most pages. Combine with is-sticky, cursor pagination, and columnEdit as needed.',
  highlights: ['is-new-table prop', 'used in 46+ dashboard pages', 'combine with is-sticky + cursor + columnEdit'],
  code: NewTableDesignRaw,
  render: () => ({
    components: { NewTableDesignExample },
    template: `<div class="p-6"><NewTableDesignExample /></div>`
  })
}
