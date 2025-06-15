import { ref } from 'vue'

export function useDataTable(initialData) {
  // State
  const { id, name, localDb, options } = initialData

  const localData = ref([])
  const sortBy = ref([])
  const filterData = ref({})
  const dataTableId = ref(id)
  const dataTableName = ref(name)
  const dataDb = ref(localDb)
  const dataLocalDataOptions = ref(options)
  let debounceTimer = null

  // Methods
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
      page: filterData.value.page,
      per_page: filterData.value.per_page,
    }
  }

  const syncLocalData = async () => {
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    debounceTimer = setTimeout(async () => {
      let query = dataDb.value.table(dataTableName.value)
      
      const options = getFilterOptions()
      
      // Apply filters
      if (options.filter) {
        Object.entries(options.filter).forEach(([key, value]) => {
          query = query.filter(item => {
            if (typeof value === 'string') {
              return item[key]?.toLowerCase().includes(value.toLowerCase())
            }
            return item[key] === value
          })
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

      const data = await query.toArray()
      localData.value = data
    }, 300)
  }

  const bulkPutLocalData = async (newData) => {
    await dataDb.value.table(dataTableName.value).bulkPut(newData)
  }

  const bulkDeleteLocalData = async (ids) => {
    await dataDb.value.table(dataTableName.value).bulkDelete(ids)
  }

  const getLocalDataUpdatedAt = async () => {
    const data = await dataDb.value.table(dataTableName.value)
      .orderBy('updated_at')
      .reverse()
      .limit(1)
      .first()
    return data?.updated_at
  }
  
  const getLocalDataIds = async () => {
    const data = await dataDb.value.table(dataTableName.value)
      .toCollection()
      .primaryKeys()
    return data
  }

  return {
    // State
    sortBy,
    localData,
    dataTableId,
    dataTableName,
    dataDb,
    dataLocalDataOptions,
    // Methods
    toggleSort,
    bulkPutLocalData,
    bulkDeleteLocalData,  
    getLocalDataUpdatedAt,
    getLocalDataIds,
    // Setters
    setFilter,
    setSortBy,

  }
}
