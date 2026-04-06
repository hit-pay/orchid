import { DataTable, Chip, Toggle, Button, Dropdown, DropdownItem } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: DataTable,
  tags: ['autodocs']
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
        <DataTable id="basic-table" :filter="filter" :options="options" @update:filter="filter = $event" />
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
        <DataTable id="custom-cells" v-model:selected="selected" v-model:filter="filter" row-key="id" :options="options">
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
        <DataTable id="filter-form" v-model:filter="filter" :options="options" />
      </div>
    `
  })
}
