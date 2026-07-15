<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value   = ref(null)
const options = ref([
  { label: 'Category A', value: 'a' },
  { label: 'Category B', value: 'b' }
])

function onAddNew() {
  const n = options.value.length + 1
  options.value.push({ label: `Category ${n}`, value: `cat${n}` })
}
</script>

<template>
  <div class="w-[300px] h-[300px]">
    <Select
      v-model="value"
      label="Category"
      placeholder="Select or create..."
      is-add-new
      :options="options"
      @add-new="onAddNew"
    />
  </div>
</template>
