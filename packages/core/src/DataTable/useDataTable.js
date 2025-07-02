import { ref, computed } from 'vue'

export function useDataTable(initialData) {
  // ===== State Management =====
  const { name, db, filterableFields, sortableFields, searchableFields } = initialData

  // Table Configuration
  const dbTablename = ref(name)

  // Data State
  const localData = ref([])
  const sortByData = ref({})
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
    const includeKeys = filterableFields ?? []

    Object.entries(filterData.value).forEach(([key, value]) => {
      if (includeKeys.includes(key) && value !== undefined && value !== null && value !== '') {
        filteredColumns[key] = value
      }
    })
    return filteredColumns
  })
  const sortOptions = computed(() => {
    const sortedColumns = {}
    const includeKeys = sortableFields ?? []

    Object.entries(sortByData.value).forEach(([key, value]) => {
      if (includeKeys.includes(key) && value !== undefined && value !== null && value !== '') {
        sortedColumns[key] = value
      }
    })
    return sortedColumns
  })

  const createQuery = async () => {
    // Ambil semua data dulu
    let query = await db.table(dbTablename.value).toArray()

    // Apply filters
    if (filterOptions.value) {
      Object.entries(filterOptions.value).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          query = query.filter((item) => {
            const itemValue = item[key]?.toString() ?? ''
            return value.some((v) => itemValue.toLowerCase().includes(v.toString().toLowerCase()))
          })
        } else if (typeof value === 'string') {
          // Handle multiple keywords with ranking only for "keywords" field
          if (key === 'keywords') {
            const keywords = value
              .trim()
              .split(/\s+/)
              .filter((k) => k.length > 0)

            if (keywords.length > 1) {
              // Add ranking score to each item by searching in searchableFields
              query = query
                .map((item) => {
                  let score = 0
                  let matchCount = 0

                  keywords.forEach((keyword) => {
                    const keywordLower = keyword.toLowerCase()

                    // Search in all searchableFields
                    searchableFields?.forEach((field) => {
                      const itemValue = item[field]?.toString() ?? ''
                      const itemValueLower = itemValue.toLowerCase()

                      if (itemValueLower.includes(keywordLower)) {
                        score += 1
                        matchCount += 1

                        // Bonus score for exact matches
                        if (itemValueLower === keywordLower) {
                          score += 2
                        }
                        // Bonus score for word boundary matches
                        else if (new RegExp(`\\b${keywordLower}\\b`).test(itemValueLower)) {
                          score += 1
                        }
                      }
                    })
                  })

                  // Only include items that match at least one keyword
                  if (matchCount > 0) {
                    return { ...item, _searchScore: score, _matchCount: matchCount }
                  }
                  return null
                })
                .filter((item) => item !== null)

              // Sort by score (highest first) then by match count
              query.sort((a, b) => {
                if (b._searchScore !== a._searchScore) {
                  return b._searchScore - a._searchScore
                }
                return b._matchCount - a._matchCount
              })

              // Remove temporary ranking properties
              query = query.map((item) => {
                // eslint-disable-next-line no-unused-vars
                const { _searchScore, _matchCount, ...cleanItem } = item
                return cleanItem
              })
            } else {
              // Single keyword search across searchableFields
              const singleKeyword = value.toLowerCase()
              query = query.filter((item) => {
                return searchableFields?.some((field) => {
                  const itemValue = item[field]?.toString() ?? ''
                  return itemValue.toLowerCase().includes(singleKeyword)
                })
              })
            }
          } else {
            // For non-keywords fields, use simple string search
            query = query.filter((item) => {
              const itemValue = item[key]?.toString() ?? ''
              return itemValue.toLowerCase().includes(value.toString().toLowerCase())
            })
          }
        } else {
          query = query.filter((item) => item[key]?.toString() === value.toString())
        }
      })
    }

    // Apply sorting (only if no multiple keywords ranking was applied)
    if (sortOptions.value && Object.keys(sortOptions.value).length > 0) {
      // Check if we have multiple keywords in the "keywords" field
      const hasMultipleKeywords =
        filterOptions.value?.keywords &&
        typeof filterOptions.value.keywords === 'string' &&
        filterOptions.value.keywords
          .trim()
          .split(/\s+/)
          .filter((k) => k.length > 0).length > 1

      // Only apply sorting if no multiple keywords ranking was applied
      if (!hasMultipleKeywords) {
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
    }

    return query
  }

  // ===== Data Operations =====
  const syncLocalData = async () => {
    if (!db) {
      return
    }
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
    if (db) {
      await db.table(dbTablename.value).bulkPut(newData)
    }
    await syncLocalData()
  }

  const bulkDeleteLocalData = async (ids) => {
    if (db) {
      await db.table(dbTablename.value).bulkDelete(ids)
    }
    await syncLocalData()
  }

  const getLocalDataUpdatedAt = async () => {
    if (!db || typeof db.table !== 'function') {
      return null
    }

    try {
      const table = db.table(dbTablename.value)
      if (!table) {
        return null
      }

      const data = await table.orderBy('updated_at').reverse().limit(1).first()

      return data?.updated_at || null
    } catch (error) {
      console.error('Error getting last updated timestamp:', error)
      return null
    }
  }

  const getLocalDataIds = async () => {
    if (db) {
      const data = await db.table(dbTablename.value).toCollection().primaryKeys()
      return data
    }
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
    bulkPutLocalData,
    bulkDeleteLocalData,
    getLocalDataUpdatedAt,
    getLocalDataIds,
    syncLocalData,

    // Setters
    setFilter,
    setSortBy
  }
}
