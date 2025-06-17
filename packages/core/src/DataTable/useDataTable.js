import { ref, computed } from 'vue'

export function useDataTable(initialData) {
  // ===== State Management =====
  const { name, localDb, filterable_fields, sortable_fields } = initialData

  // Table Configuration
  const dbTablename = ref(name)
  const db = ref(localDb)

  // Data State
  const localData = ref([])
  const sortByData = ref({
    updated_at: 'desc'
  })
  const filterData = ref({
    page: 1,
    per_page: 10
  })
  const paginationData = ref({
    total: 0,
    last_page: 1
  })
  const isLoading = ref(false)
  let debounceTimer = null


  // ===== Filter & Sort Operations =====
  const filterOptions = computed(() => {
    const filteredColumns = {}
    const includeKeys = filterable_fields ?? []
    
    Object.entries(filterData.value).forEach(([key, value]) => {
      if (includeKeys.includes(key) && value !== undefined && value !== null && value !== '') {
        filteredColumns[key] = value
      }
    })
    return filteredColumns
})
const sortOptions = computed(() => {
  const sortedColumns = {}
  const includeKeys = sortable_fields ?? []

  Object.entries(sortByData.value).forEach(([key, value]) => {
    if (includeKeys.includes(key) && value !== undefined && value !== null && value !== '') {
      sortedColumns[key] = value
    }
  })
  return sortedColumns
})

const createQuery = async () => {
  // Ambil semua data dulu
  let query = await db.value.table(dbTablename.value).toArray()

  // Apply filters
  if (filterOptions.value) {
    Object.entries(filterOptions.value).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        query = query.filter(item => {
          const itemValue = item[key]?.toString() ?? ''
          return value.some(v =>
            itemValue.toLowerCase().includes(v.toString().toLowerCase())
          )
        })
      } else if (typeof value === 'string') {
        query = query.filter(item => {
          const itemValue = item[key]?.toString() ?? ''
          return itemValue.toLowerCase().includes(value.toString().toLowerCase())
        })
      } else {
        query = query.filter(item => item[key]?.toString() === value.toString())
      }
    })
  }

  // Apply sorting
  if (sortOptions.value && Object.keys(sortOptions.value).length > 0) {
    Object.entries(sortOptions.value).forEach(([key, order]) => {
      query = query.sort((a, b) => {
        const aVal = a[key]
        const bVal = b[key]

        const isDate = !isNaN(Date.parse(aVal)) && !isNaN(Date.parse(bVal))

        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return order === 'desc' ? bVal - aVal : aVal - bVal
        } else if (isDate) {
          return order === 'desc'
            ? new Date(bVal) - new Date(aVal)
            : new Date(aVal) - new Date(bVal)
        } else {
          return order === 'desc'
            ? bVal?.toString().localeCompare(aVal?.toString())
            : aVal?.toString().localeCompare(bVal?.toString())
        }
      })
    })
  }

  return query
}

  // ===== Data Operations =====
  const syncLocalData = async () => {
    isLoading.value = true
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
  
    debounceTimer = setTimeout(async () => {
      const result = await createQuery() // result adalah array
  
      // Apply pagination manual di array
      const offset = (parseInt(filterData.value.page) - 1) * parseInt(filterData.value.per_page)
      const limit = parseInt(filterData.value.per_page)
  
      const paginated = result.slice(offset, offset + limit)
      localData.value = paginated
  
      paginationData.value = {
        total: result.length,
        last_page: Math.ceil(result.length / limit)
      }
  
      isLoading.value = false
    }, 500)
  }


  const toggleSort = (column) => {
    const existingSort = sortByData.value.find(sort => sort.column === column)
    
    if (!existingSort) {
      // If not exists, add with asc
      sortByData.value = { ...sortByData.value, [column]: 'asc' }
    } else if (existingSort.direction === 'asc') {
      // If asc, change to desc
      sortByData.value = { ...sortByData.value, [column]: 'desc' }
    } else {
      // If desc, remove
      delete sortByData.value[column]
    }
    syncLocalData()
  }

  const setFilter = (filters) => {
    filterData.value = { ...filters }
    syncLocalData()
  }

  const setSortBy = (sorts) => {
    sortByData.value = { ...sorts }
    syncLocalData()
  }

  // ===== Database Operations =====
  const bulkPutLocalData = async (newData) => {
    await db.value.table(dbTablename.value).bulkPut(newData)
    await syncLocalData()
  }

  const bulkDeleteLocalData = async (ids) => {
    await db.value.table(dbTablename.value).bulkDelete(ids)
    await syncLocalData()
  }

  const getLocalDataUpdatedAt = async () => {
    const data = await db.value.table(dbTablename.value)
      .orderBy('updated_at')
      .reverse()
      .limit(1)
      .first()
    return data?.updated_at
  }
  
  const getLocalDataIds = async () => {
    const data = await db.value.table(dbTablename.value)
      .toCollection()
      .primaryKeys()
    return data
  }

  // ===== Exposed API =====
  return {
    // State
    localData,
    sortByData,
    filterData,
    paginationData,
    isLoading,
    
    // Methods
    toggleSort,
    bulkPutLocalData,
    bulkDeleteLocalData,  
    getLocalDataUpdatedAt,
    getLocalDataIds,
    syncLocalData,

    // Setters
    setFilter,
    setSortBy,
  }
}
