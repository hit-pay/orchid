<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value = ref(null)

const options = [
  { label: 'Indonesia', value: 'ID' },
  { label: 'Singapore', value: 'SG' },
  { label: 'Malaysia',  value: 'MY' }
]
</script>

<template>
  <div class="w-[300px] h-[250px]">
    <Select
      v-model="value"
      label="Country"
      hint="Select your country."
      placeholder="Select a country..."
      :options="options"
    />
  </div>
</template>
