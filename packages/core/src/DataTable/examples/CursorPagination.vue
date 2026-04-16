<script setup>
import { ref, computed } from 'vue'
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
</template>
