<script setup>
import { ref } from 'vue'
import { Select } from '@/orchidui-core'

const value = ref(null)

const options = [
  { label: 'Republic of Indonesia', value: 'ID' },
  { label: 'Republic of Singapore', value: 'SG' },
  { label: 'Kingdom of Thailand', value: 'TH' },
  { label: 'Socialist Republic of Vietnam', value: 'VN' }
]
</script>

<template>
  <div class="w-[220px] h-[320px]">
    <Select
      v-model="value"
      label="Country"
      :popper-style="{ width: '500px' }"
      placeholder="Select..."
      is-filterable
      :options="options"
    />
  </div>
</template>
