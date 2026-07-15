<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const perPage = ref(10)

const options = [
  { label: '10', value: 10 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: '100', value: 100 }
]
</script>

<template>
  <Select
    v-model="perPage"
    label="Per page"
    is-inline-label
    is-slim
    :options="options"
  />
</template>
