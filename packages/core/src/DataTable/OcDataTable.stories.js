import { DataTable } from '@/orchidui-core'
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
