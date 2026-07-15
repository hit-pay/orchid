<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value = ref('SG')

const options = [
  { label: 'Singapore', value: 'SG' },
  { label: 'Malaysia',  value: 'MY' }
]
</script>

<template>
  <div class="flex flex-col gap-6 w-[300px]">
    <Select
      model-value="SG"
      label="Disabled"
      is-disabled
      :options="options"
    />
    <Select
      model-value="MY"
      label="Read-only"
      is-readonly
      :options="options"
    />
    <Select
      :model-value="null"
      label="With error"
      error-message="Please select a country."
      :options="options"
    />
    <Select
      v-model="value"
      label="Clearable"
      is-clearable
      :options="options"
    />
  </div>
</template>
