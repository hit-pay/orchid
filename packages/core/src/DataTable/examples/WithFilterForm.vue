<script setup>
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
</template>
