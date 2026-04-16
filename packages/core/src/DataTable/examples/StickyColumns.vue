<script setup>
import { ref } from 'vue'
import { DataTable } from '@orchidui/core'

const filter = ref({ page: 1, per_page: 10 })

const options = {
  pagination: { total: 2, last_page: 1 },
  tableOptions: {
    isSticky: true,
    headers: [
      { key: 'name',    label: 'Name',    class: 'w-[180px]', stickyLeft: true },
      { key: 'email',   label: 'Email',   class: 'w-[220px]' },
      { key: 'country', label: 'Country', class: 'w-[160px]' },
      { key: 'plan',    label: 'Plan',    class: 'w-[160px]' },
      { key: 'created', label: 'Created', class: 'w-[160px]' },
      { key: 'actions', label: '',        class: 'w-[80px]',  stickyRight: true }
    ],
    fields: [
      { id: '1', name: 'Alice', email: 'alice@example.com', country: 'SG', plan: 'Pro',   created: '2024-01-10', actions: '' },
      { id: '2', name: 'Bob',   email: 'bob@example.com',   country: 'MY', plan: 'Basic', created: '2024-02-15', actions: '' }
    ]
  }
}
</script>

<template>
  <DataTable
    id="sticky-table"
    is-new-table
    :filter="filter"
    :options="options"
    @update:filter="filter = $event"
  />
</template>
