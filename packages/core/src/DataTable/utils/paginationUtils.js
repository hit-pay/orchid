export const getItemsPerPageOptions = (customOptions, paginationOption) => {
  let defaultItemsPerPageOptions = [
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
    { label: '25', value: 25 },
    { label: '40', value: 40 },
    { label: '50', value: 50 },
    { label: '75', value: 75 },
    { label: '99', value: 99 }
  ]

  let availableItemsPerPage = customOptions ?? defaultItemsPerPageOptions
  
  if (paginationOption) {
    const maxItems = paginationOption.total < 100 ? paginationOption.total : 100
    if (maxItems > 10) {
      availableItemsPerPage = availableItemsPerPage.filter((p) => {
        return p.value <= maxItems
      })
    }
  }
  
  return [...new Set(availableItemsPerPage)]
}

export const formatCustomItemsPerPageOptions = (options) => {
  return options?.map(
    (perPage) => ({
      label: `${perPage}`,
      value: perPage
    }) ?? null
  )
} 