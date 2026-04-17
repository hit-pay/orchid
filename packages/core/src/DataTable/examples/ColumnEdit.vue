<script setup>
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
      { key: 'name',    label: 'Name',    class: 'w-[25%]' },
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
</template>
