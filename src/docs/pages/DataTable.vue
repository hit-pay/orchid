<script setup>
import { defineComponent } from 'vue'
import storyDefault, { Basic, WithCustomCells, WithFilterForm, LoadingState, CustomEmptyState, RowClickAndLink, CursorPagination, ColumnEdit, SearchWithOptions, StickyColumns, NewTableDesign } from '../../../packages/core/src/DataTable/OcDataTable.stories.js'
import ComponentPage from '../../docs-components/ComponentPage.vue'

const meta = {
  title: 'DataTable',
  description: storyDefault.parameters?.docs?.description?.component ?? '',
  package: '@orchidui/core',
}

const examples = [
  {
    id: 'basic',
    title: 'Basic',
    description: Basic.description,
    highlights: Basic.highlights,
    code: Basic.code,
    preview: Basic.render ? defineComponent(Basic.render()) : null,
  },
  {
    id: 'with-custom-cells',
    title: 'With Custom Cells',
    description: WithCustomCells.description,
    highlights: WithCustomCells.highlights,
    code: WithCustomCells.code,
    preview: WithCustomCells.render ? defineComponent(WithCustomCells.render()) : null,
  },
  {
    id: 'with-filter-form',
    title: 'With Filter Form',
    description: WithFilterForm.description,
    highlights: WithFilterForm.highlights,
    code: WithFilterForm.code,
    preview: WithFilterForm.render ? defineComponent(WithFilterForm.render()) : null,
  },
  {
    id: 'loading-state',
    title: 'Loading State',
    description: LoadingState.description,
    highlights: LoadingState.highlights,
    code: LoadingState.code,
    preview: LoadingState.render ? defineComponent(LoadingState.render()) : null,
  },
  {
    id: 'custom-empty-state',
    title: 'Custom Empty State',
    description: CustomEmptyState.description,
    highlights: CustomEmptyState.highlights,
    code: CustomEmptyState.code,
    preview: CustomEmptyState.render ? defineComponent(CustomEmptyState.render()) : null,
  },
  {
    id: 'row-click-and-link',
    title: 'Row Click And Link',
    description: RowClickAndLink.description,
    highlights: RowClickAndLink.highlights,
    code: RowClickAndLink.code,
    preview: RowClickAndLink.render ? defineComponent(RowClickAndLink.render()) : null,
  },
  {
    id: 'cursor-pagination',
    title: 'Cursor Pagination',
    description: CursorPagination.description,
    highlights: CursorPagination.highlights,
    code: CursorPagination.code,
    preview: CursorPagination.render ? defineComponent(CursorPagination.render()) : null,
  },
  {
    id: 'column-edit',
    title: 'Column Edit',
    description: ColumnEdit.description,
    highlights: ColumnEdit.highlights,
    code: ColumnEdit.code,
    preview: ColumnEdit.render ? defineComponent(ColumnEdit.render()) : null,
  },
  {
    id: 'search-with-options',
    title: 'Search With Options',
    description: SearchWithOptions.description,
    highlights: SearchWithOptions.highlights,
    code: SearchWithOptions.code,
    preview: SearchWithOptions.render ? defineComponent(SearchWithOptions.render()) : null,
  },
  {
    id: 'sticky-columns',
    title: 'Sticky Columns',
    description: StickyColumns.description,
    highlights: StickyColumns.highlights,
    code: StickyColumns.code,
    preview: StickyColumns.render ? defineComponent(StickyColumns.render()) : null,
  },
  {
    id: 'new-table-design',
    title: 'New Table Design',
    description: NewTableDesign.description,
    highlights: NewTableDesign.highlights,
    code: NewTableDesign.code,
    preview: NewTableDesign.render ? defineComponent(NewTableDesign.render()) : null,
  },
]
</script>

<template>
  <ComponentPage :meta="meta" :examples="examples" />
</template>
