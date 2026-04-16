<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

const filter        = ref({ page: 1, per_page: 10 })
const selectedIndex = ref(-1)

const options = {
  pagination: { total: 3, last_page: 1 },
  tableOptions: {
    isCursorPointer: true,
    headers: [
      { key: 'name',   label: 'Name',   class: 'w-[40%]' },
      { key: 'email',  label: 'Email',  class: 'w-[40%]' },
      { key: 'status', label: 'Status', class: 'w-[20%]' }
    ],
    fields: [
      { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'Active',   href: '/users/1' },
      { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'Inactive', href: '/users/2' },
      { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'Active',   href: '/users/3' }
    ]
  }
}

function onRowClick({ item, index }) {
  selectedIndex.value = index
  console.log('clicked row:', item)
}
</script>

<template>
  <DataTable
    id="row-click-table"
    is-new-table
    :filter="filter"
    :options="options"
    :selected-index="selectedIndex"
    row-link="href"
    @click:row="onRowClick"
    @update:filter="filter = $event"
  />
</template>
