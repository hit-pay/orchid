<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value = ref(null)

const options = [
  { label: 'Australia', value: 'AU' },
  { label: 'Canada',    value: 'CA' },
  { label: 'France',    value: 'FR' },
  { label: 'Germany',   value: 'DE' },
  { label: 'Indonesia', value: 'ID' },
  { label: 'Japan',     value: 'JP' },
  { label: 'Singapore', value: 'SG' },
  { label: 'UK',        value: 'GB' },
  { label: 'USA',       value: 'US' }
]
</script>

<template>
  <div class="w-[300px] h-[350px]">
    <Select
      v-model="value"
      label="Country"
      placeholder="Search countries..."
      is-filterable
      :options="options"
    />
  </div>
</template>
