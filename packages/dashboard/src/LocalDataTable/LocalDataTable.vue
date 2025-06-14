<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { FilterRule, SortRule } from './composables/filters'

interface Props<T = any> {
  data: T[]
  loading?: boolean
  title?: string
  columns?: {
    key: string
    label: string
    sortable?: boolean
    width?: string
  }[]
  customClass?: string
  emptyStateMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  title: 'Data Table',
  customClass: '',
  emptyStateMessage: 'Tidak ada data yang tersedia',
  columns: () => []
})

// Internal state
const currentPage = ref(1)
const perPage = ref(5)
const rules = ref<FilterRule[]>([])
const sortRules = ref<SortRule[]>([])

// Memoized filter function
const applyFilter = (item: any, rule: FilterRule): boolean => {
  const value = item[rule.key]
  const ruleValue = rule.value

  if (value === undefined || value === null) return false

  switch (rule.operator) {
    case 'equals':
      return value === ruleValue
    case 'notEquals':
      return value !== ruleValue
    case 'gte':
      return value >= ruleValue
    case 'lte':
      return value <= ruleValue
    case 'gt':
      return value > ruleValue
    case 'lt':
      return value < ruleValue
    case 'includes':
      return String(value).toLowerCase().includes(String(ruleValue).toLowerCase())
    case 'includesAny':
      return Array.isArray(ruleValue) && ruleValue.some((val: any) => 
        String(value).toLowerCase().includes(String(val).toLowerCase())
      )
    case 'startsWith':
      return String(value).toLowerCase().startsWith(String(ruleValue).toLowerCase())
    case 'endsWith':
      return String(value).toLowerCase().endsWith(String(ruleValue).toLowerCase())
    default:
      return true
  }
}

const filteredData = computed(() => {
  if (!props.data.length) return []
  
  return props.data.filter(item => 
    rules.value.every(rule => applyFilter(item, rule))
  ).sort((a, b) => {
    for (const sortRule of sortRules.value) {
      const aValue = a[sortRule.key]
      const bValue = b[sortRule.key]
      
      if (aValue === bValue) continue
      if (aValue === undefined || aValue === null) return 1
      if (bValue === undefined || bValue === null) return -1
      
      return sortRule.direction === 'asc' 
        ? aValue < bValue ? -1 : 1
        : aValue > bValue ? -1 : 1
    }
    return 0
  })
})

// Pagination
const totalPages = computed(() => Math.ceil(filteredData.value.length / perPage.value))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return filteredData.value.slice(start, end)
})

const handlePageChange = (page: number) => {
  currentPage.value = page
}

const handlePerPageChange = (newPerPage: number) => {
  perPage.value = newPerPage
  currentPage.value = 1 // Reset to first page
}

// Format cell value
const formatCellValue = (value: any): string => {
  if (value === null || value === undefined) return '-'
  if (typeof value === 'boolean') return value ? 'Ya' : 'Tidak'
  if (value instanceof Date) return value.toLocaleDateString('id-ID')
  return String(value)
}

// Add filter rule
const addFilterRule = (rule: FilterRule) => {
  rules.value.push(rule)
}

// Remove filter rule
const removeFilterRule = (index: number) => {
  rules.value.splice(index, 1)
}

// Add sort rule
const addSortRule = (rule: SortRule) => {
  sortRules.value.push(rule)
}

// Remove sort rule
const removeSortRule = (index: number) => {
  sortRules.value.splice(index, 1)
}

// Clear all filters
const clearFilters = () => {
  rules.value = []
  sortRules.value = []
  currentPage.value = 1
}
</script>

<template>
  <div class="p-4" :class="customClass">
    <h2 class="text-xl font-bold mb-4">{{ title }}</h2>

    <div v-if="loading" class="text-center py-4">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      <p class="mt-2 text-gray-600">Loading...</p>
    </div>

    <template v-else>
      <!-- Filter Rules Display -->
      <div class="bg-gray-100 p-4 rounded mb-4">
        <div class="flex justify-between items-center mb-2">
          <h3 class="font-semibold">Filter Aktif:</h3>
          <button 
            @click="clearFilters"
            class="text-sm text-red-600 hover:text-red-800"
          >
            Hapus Semua Filter
          </button>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h4 class="text-sm font-medium mb-1">Filter Rules:</h4>
            <div v-if="rules.length === 0" class="text-sm text-gray-500">
              Tidak ada filter aktif
            </div>
            <div v-else class="space-y-2">
              <div 
                v-for="(rule, index) in rules" 
                :key="index"
                class="flex items-center justify-between bg-white p-2 rounded"
              >
                <span class="text-xs">{{ rule.key }} {{ rule.operator }} {{ rule.value }}</span>
                <button 
                  @click="removeFilterRule(index)"
                  class="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-sm font-medium mb-1">Sort Rules:</h4>
            <div v-if="sortRules.length === 0" class="text-sm text-gray-500">
              Tidak ada pengurutan aktif
            </div>
            <div v-else class="space-y-2">
              <div 
                v-for="(rule, index) in sortRules" 
                :key="index"
                class="flex items-center justify-between bg-white p-2 rounded"
              >
                <span class="text-xs">{{ rule.key }} {{ rule.direction }}</span>
                <button 
                  @click="removeSortRule(index)"
                  class="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!filteredData.length" class="text-center py-8 text-gray-500">
        {{ emptyStateMessage }}
      </div>

      <!-- Data Table -->
      <div v-else class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead>
            <tr class="bg-gray-100">
              <th 
                v-for="column in columns" 
                :key="column.key"
                :style="{ width: column.width }"
                class="px-4 py-2 text-left text-sm font-semibold text-gray-600"
              >
                {{ column.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(item, index) in paginatedData" 
              :key="index"
              class="border-b hover:bg-gray-50"
            >
              <td 
                v-for="column in columns" 
                :key="column.key"
                class="px-4 py-2 text-sm text-gray-700"
              >
                {{ formatCellValue(item[column.key]) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div v-if="filteredData.length" class="mt-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <div class="text-sm text-gray-500">
            Menampilkan {{ (currentPage - 1) * perPage + 1 }} sampai {{ Math.min(currentPage * perPage, filteredData.length) }} dari {{ filteredData.length }} data
          </div>
          <select 
            :value="perPage" 
            @change="handlePerPageChange(Number(($event.target as HTMLSelectElement).value))"
            class="border rounded px-2 py-1 text-sm"
          >
            <option value="5">5 per halaman</option>
            <option value="10">10 per halaman</option>
            <option value="20">20 per halaman</option>
            <option value="50">50 per halaman</option>
          </select>
        </div>
        <div class="flex gap-2">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="handlePageChange(page)"
            :class="[
              'px-3 py-1 rounded',
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            ]"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </template>
  </div>
</template>
