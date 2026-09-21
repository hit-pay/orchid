<script setup>
import { ref } from 'vue'
import { Select } from '@orchidui/core'

const value     = ref(null)
const options   = ref([])
const isLoading = ref(false)

let timer = null

function onSearch(query) {
  if (!query) {
    options.value = []
    return
  }

  isLoading.value = true
  clearTimeout(timer)
  timer = setTimeout(() => {
    options.value = [
      { label: `Result for "${query}" A`, value: '1' },
      { label: `Result for "${query}" B`, value: '2' },
      { label: `Result for "${query}" C`, value: '3' }
    ]
    isLoading.value = false
  }, 500)
}
</script>

<template>
  <div class="w-[320px] h-[280px]">
    <Select
      v-model="value"
      label="Search users"
      placeholder="Type to search..."
      is-filterable
      is-asynchronous-search
      :is-loading="isLoading"
      :options="options"
      @on-search-keywords="onSearch"
    />
  </div>
</template>
