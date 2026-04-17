<script setup>
import { ref } from 'vue'
import { DataTable, EmptyPage } from '@orchidui/core'

const filter = ref({ page: 1, per_page: 10 })

const options = {
  pagination: { total: 0, last_page: 1 },
  filterOptions: { search: { key: 'keywords' } },
  tableOptions: {
    headers: [
      { key: 'name',  label: 'Name',  class: 'w-[50%]' },
      { key: 'email', label: 'Email', class: 'w-[50%]' }
    ],
    fields: []
  }
}
</script>

<template>
  <DataTable id="empty-table" is-new-table :filter="filter" :options="options" @update:filter="filter = $event">
    <template #empty>
      <div class="flex justify-center py-16">
        <EmptyPage
          icon="document"
          title="No records found"
          description="Try adjusting your search or filters."
          :is-button="false"
          hide-badge
        />
      </div>
    </template>
  </DataTable>
</template>
