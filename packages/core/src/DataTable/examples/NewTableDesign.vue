<script setup>
import { ref } from 'vue'
import { DataTable, EmptyPage } from '@orchidui/core'

const filter = ref({
  page: 1,
  per_page: 10,
  tab: '',
  keywords: ''
})

const CHIP_STATUS = {
  active:   { label: 'Active',   variant: 'success' },
  inactive: { label: 'Inactive', variant: 'error' },
  pending:  { label: 'Pending',  variant: 'warning' }
}

const options = {
  pagination: { total: 3, last_page: 1 },
  filterOptions: {
    per_page: { key: 'per_page' },
    search: { key: 'keywords' },
    tabs: {
      key: 'tab',
      options: [
        { label: 'All',      value: '' },
        { label: 'Active',   value: 'active' },
        { label: 'Inactive', value: 'inactive' }
      ]
    }
  },
  tableOptions: {
    isCursorPointer: true,
    headers: [
      { key: 'name',   label: 'Name',   class: 'w-[35%]' },
      { key: 'email',  label: 'Email',  class: 'w-[35%]' },
      {
        key: 'status', label: 'Status', class: 'w-[20%]',
        variant: 'chip', chipOptions: CHIP_STATUS
      },
      { key: 'actions', label: '', class: 'w-[10%]', variant: 'icon', headerVariant: 'text' }
    ],
    fields: [
      { id: '1', name: 'Alice',   email: 'alice@example.com',   status: 'active' },
      { id: '2', name: 'Bob',     email: 'bob@example.com',     status: 'inactive' },
      { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'pending' }
    ]
  }
}
</script>

<template>
  <DataTable
    id="new-table-demo"
    is-new-table
    v-model:filter="filter"
    :options="options"
    @click:row="console.log('row clicked:', $event.item)"
  >
    <template #actions="{ item }">
      <button class="opacity-0 group-hover/row:opacity-100 text-oc-text-400 hover:text-oc-text-500">
        <Icon name="dots-vertical" width="20" height="20" />
      </button>
    </template>

    <template #empty>
      <div class="flex justify-center py-12">
        <EmptyPage title="No records found" description="Try adjusting your search." :is-button="false" />
      </div>
    </template>
  </DataTable>
</template>
