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

  const filterQuery = () => {
    const filteredData = {}
    const excludedKeys = ['columnEdit', 'page', 'per_page']
    
    Object.entries(filterData.value).forEach(([key, value]) => {
      if (!excludedKeys.includes(key) && value !== undefined && value !== null && value !== '') {
        filteredData[key] = value
      }
    })
    return filteredData
  }

  const syncLocalData = async () => {
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    debounceTimer = setTimeout(async () => {
      let query = dataDb.value.table(dataTableName.value)
      
    //   // Apply filters
    //   if (Object.keys(filterQuery()).length > 0) {
    //     query = query.where(filterQuery())
    //   }

    //   // Apply sorting
    //   if (sortBy.value.length > 0) {
    //     sortBy.value.forEach(sort => {
    //       query = query.sortBy(sort.column)
    //       if (sort.direction === 'desc') {
    //         query = query.reverse()
    //       }
    //     })
    //   }

      const data = await query.toArray()
      localData.value = data
    }, 300)
  }

  const bulkUpdateOrAddLocalData = async (newData) => {
    await dataDb.value.table(dataTableName.value).bulkPut(newData)
  }

  const deleteLocalData = async (id) => {
    await dataDb.value.table(dataTableName.value).delete(id)
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
    bulkUpdateOrAddLocalData,
    deleteLocalData,
    bulkDeleteLocalData,  
    getLocalDataUpdatedAt,
    getLocalDataIds,
    // Setters
    setFilter,
    setSortBy,

  }
}
