<script setup>
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
</template>
