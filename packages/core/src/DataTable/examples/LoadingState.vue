<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

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
</template>
