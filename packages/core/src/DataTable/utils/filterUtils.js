import dayjs from 'dayjs'

export const getFilterFieldNames = (filterNames) => {
  let names = []
  filterNames.forEach((name) => {
    names.push(name.key)
  })
  return names
}

export const formatFilterDisplay = (filterData, filterOptions) => {
  if (!filterData) return []

  let display = []
  Object.keys(filterData).forEach((name) => {
    let filterTabKey = filterOptions?.tabs?.key
    const filterSearchKey = filterOptions?.search?.key
    const filterPerPageKey = filterOptions?.per_page?.key ?? 'per_page'

    filterOptions.form?.find((f) => {
      if (f.name === filterTabKey) {
        filterTabKey = ''
      }
    })

    if (
      name !== 'page' &&
      name !== 'cursor' &&
      name !== filterPerPageKey &&
      name !== filterTabKey &&
      name !== filterSearchKey
    ) {
      let isMultiNames = null
      let option = filterOptions.form?.find((f) => {
        if (typeof f.name === 'object') {
          let isSelectedOption = false
          f.name.forEach((formName) => {
            if (formName.key === name) {
              isSelectedOption = true
              isMultiNames = getFilterFieldNames(f.name)
            }
          })
          return isSelectedOption
        } else {
          return f.name === name
        }
      })

      let optionLabel = ''

      if (option && filterData[name]) {
        if (typeof option.name === 'object') {
          option.name?.forEach((formName) => {
            if (optionLabel) {
              optionLabel += ' - '
            }
            optionLabel += filterData[formName.key]
          })
        } else {
          optionLabel = filterData[name]
        }

        if (option.props.options) {
          const selectedValuesInArray = option.props.multiple
            ? filterData[name]
            : [filterData[name]]

          optionLabel = selectedValuesInArray
            .map(
              (selectedValue) =>
                option.props.options.find(({ value }) => value === selectedValue)?.label
            )
            .join(', ')
        }

        if (option.type === 'RangeInput') {
          if (Array.isArray(filterData[name])) {
            optionLabel =
              filterData[name][0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
              ' - ' +
              filterData[name][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
        }

        if (option.type === 'DatePicker') {
          if (option?.props?.type === 'range' && option.name && option.name[1]) {
            const startDate = dayjs(filterData[option.name[0].key]).format('MM/DD/YYYY')
            const endDate = dayjs(filterData[option.name[1].key]).format('MM/DD/YYYY')

            optionLabel = startDate === endDate ? startDate : startDate + ' - ' + endDate
          } else optionLabel = dayjs(filterData[option.name]).format('MM/DD/YYYY')
        }

        let label = `${option?.props?.label} : ${optionLabel}`
        if (option && option.name && typeof option.name === 'object') {
          const exist = display.find((f) => f.name === isMultiNames[0])
          if (exist) {
            label = ``
          }
        }

        display.push({
          label: label,
          name: name,
          multiNames: isMultiNames
        })
      }
    }
  })
  return display
}

export const clearAllFilters = (filterData, filterOptions, itemsPerPage, activeFilterTab) => {
  const defaultFilters = {}

  if (filterOptions) {
    filterData.page = 1
  } else {
    filterData.cursor = ''
  }

  if (filterOptions?.per_page?.key) {
    defaultFilters[filterOptions?.per_page?.key] = itemsPerPage
  } else {
    defaultFilters.per_page = itemsPerPage
  }

  if (filterOptions?.tabs?.key) {
    defaultFilters[filterOptions?.tabs?.key] = activeFilterTab
  } else {
    defaultFilters.tabs = activeFilterTab
  }

  if (filterOptions?.columnEdit?.key) {
    defaultFilters[filterOptions?.columnEdit?.key] = filterData[filterOptions?.columnEdit?.key]
  }

  return defaultFilters
}
