import { ref } from 'vue'

export function useDataTable(initialData) {
  // ===== State Management =====
  const { id, name, localDb } = initialData

  // Table Configuration
  const dataTableId = ref(id)
  const dbTablename = ref(name)
  const db = ref(localDb)

  // Data State
  const localData = ref([])
  const sortBy = ref([])
  const filterData = ref({
    page: 1,
    per_page: 10
  })
  const paginationData = ref({
    total: 0,
    last_page: 0
  })
  const isLoading = ref(false)
  let debounceTimer = null

  // ===== Data Operations =====
  const syncLocalData = async () => {
    isLoading.value = true
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    debounceTimer = setTimeout(async () => {
      let query = db.value.table(dbTablename.value)
      const options = getFilterOptions()
      
      // Apply filters
      if (options.filter) {
        Object.entries(options.filter).forEach(([key, value]) => {
          if (value && Array.isArray(value)) {
            query = query.filter(item => {
              const itemValue = item[key]
              return value.some(v => {
                if (typeof v === 'string' && typeof itemValue === 'string') {
                  return itemValue.toLowerCase().includes(v.toLowerCase())
                }
                return itemValue === v
              })
            })
          } else if (value && typeof value === 'string') {
            query = query.filter(item => {
              const itemValue = item[key]
              return typeof itemValue === 'string' && 
                itemValue.toLowerCase().includes(value.toLowerCase())
            })
          } else if (value !== null && value !== undefined) {
            query = query.filter(item => item[key] === value)
          }
        })
      }

      // Apply sorting
      if (options.sortBy && options.sortBy.length > 0) {
        options.sortBy.forEach(sort => {
          query = query.sortBy(sort.column)
          if (sort.direction === 'desc') {
            query = query.reverse()
          }
        })
      }

      // Apply pagination
      const offset = (parseInt(filterData.value.page) - 1) * parseInt(filterData.value.per_page)
      query = query.offset(offset).limit(parseInt(filterData.value.per_page))

      const data = await query.toArray()
      localData.value = data

      // Update pagination
      const totalField = await db.value.table(dbTablename.value).count()
      paginationData.value = {
        total: totalField,
        last_page: Math.ceil(totalField / filterData.value.per_page)
      }
      isLoading.value = false
    }, 300)
  }

  // ===== Filter & Sort Operations =====
  const getFilterOptions = () => {
    const filteredColumns = {}
    const excludedKeys = ['columnEdit', 'page', 'per_page']
    
    Object.entries(filterData.value).forEach(([key, value]) => {
      if (!excludedKeys.includes(key) && value !== undefined && value !== null && value !== '') {
        filteredColumns[key] = value
      }
    })
    return {
      filter: filteredColumns,
      sortBy: sortBy.value,
      pagination: paginationData.value
    }
  }

  const toggleSort = (column) => {
    const existingSort = sortBy.value.find(sort => sort.column === column)
    
    if (!existingSort) {
      // If not exists, add with asc
      sortBy.value = [...sortBy.value, { column, direction: 'asc' }]
    } else if (existingSort.direction === 'asc') {
      // If asc, change to desc
      sortBy.value = sortBy.value.map(sort => 
        sort.column === column 
          ? { ...sort, direction: 'desc' }
          : sort
      )
    } else {
      // If desc, remove
      sortBy.value = sortBy.value.filter(sort => sort.column !== column)
    }
    syncLocalData()
  }

  const setFilter = (filters) => {
    filterData.value = { ...filters }
    syncLocalData()
  }

  const setSortBy = (sorts) => {
    sortBy.value = { ...sorts }
    syncLocalData()
  }

  // ===== Database Operations =====
  const bulkPutLocalData = async (newData) => {
    await db.value.table(dbTablename.value).bulkPut(newData)
  }

  const bulkDeleteLocalData = async (ids) => {
    await db.value.table(dbTablename.value).bulkDelete(ids)
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
    sortBy,
    localData,
    dataTableId,
    dbTablename,
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
