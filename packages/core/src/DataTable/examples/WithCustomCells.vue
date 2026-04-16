<script setup>
import { ref } from 'vue'
import { DataTable, Toggle, Button, Dropdown, DropdownItem } from '@orchidui/core'

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
    is-new-table
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
</template>
