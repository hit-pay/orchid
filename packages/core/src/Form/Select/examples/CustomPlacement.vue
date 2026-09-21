<script setup>
import { ref } from 'vue'
import { Select } from '@/orchidui-core'

const value = ref(null)

const options = [
  { label: 'Indonesia', value: 'ID' },
  { label: 'Singapore', value: 'SG' },
  { label: 'Malaysia', value: 'MY' }
]
</script>

<template>
  <div class="relative h-[280px] flex items-end justify-end p-6">
    <div class="w-[240px]">
      <Select
        v-model="value"
        label="Country"
        :popper-style="{ width: '500px' }"
        placement="bottom-start"
        placeholder="Bottom left..."
        :options="options"
      />
    </div>
  </div>
</template>
