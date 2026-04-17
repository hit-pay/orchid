<script setup>
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
</template>
