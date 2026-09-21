<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value = ref(null)

const options = [
  { label: 'Most Popular', value: 'popular' },
  {
    label: 'Southeast Asia',
    values: [
      { label: 'Indonesia', value: 'ID' },
      { label: 'Singapore', value: 'SG' },
      { label: 'Malaysia',  value: 'MY' }
    ]
  },
  {
    label: 'Europe',
    values: [
      { label: 'Germany', value: 'DE' },
      { label: 'France',  value: 'FR' },
      { label: 'UK',      value: 'GB' }
    ]
  }
]
</script>

<template>
  <div class="w-[300px] h-[400px]">
    <Select
      v-model="value"
      label="Region"
      placeholder="Select region..."
      is-filterable
      :options="options"
    />
  </div>
</template>
