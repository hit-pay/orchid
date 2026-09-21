<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const values = ref([])

const options = [
  { label: 'Design',      value: 'design' },
  { label: 'Engineering', value: 'eng' },
  { label: 'Marketing',   value: 'mkt' },
  { label: 'Sales',       value: 'sales' },
  { label: 'Support',     value: 'support' }
]
</script>

<template>
  <div class="w-[350px] h-[300px]">
    <Select
      v-model="values"
      label="Departments"
      placeholder="Select departments..."
      multiple
      is-filterable
      is-checkboxes
      is-select-all
      :options="options"
    />
  </div>
</template>
