const formatHeadersToLocalStorage = (fixed = [], active = []) => {
  const headers = {
    fixed: {},
    active: {}
  }
  fixed.forEach((header) => {
    headers.fixed[header.key] = header.isActive
  })
  active.forEach((header) => {
    headers.active[header.key] = header.isActive
  })
  return JSON.stringify(headers)
}

const formatHeadersFromLocalStorage = (jsonHeaders, localHeaders, key) => {
  const parsedHeaders = jsonHeaders ? JSON.parse(jsonHeaders) : null
  if (!parsedHeaders) return { fixed: null, active: null }
  if (
    [...Object.keys(parsedHeaders.fixed), ...Object.keys(parsedHeaders.active)].length !==
    localHeaders.length
  ) {
    localStorage.removeItem(key)
    return { fixed: null, active: null }
  }
  return {
    fixed: Object.keys(parsedHeaders.fixed).map((headerKey) => ({
      ...(localHeaders.find((lh) => lh.key === headerKey) || {}),
      isActive: parsedHeaders.fixed[headerKey]
    })),
    active: Object.keys(parsedHeaders.active).map((headerKey) => ({
      ...(localHeaders.find((lh) => lh.key === headerKey) || {}),
      isActive: parsedHeaders.active[headerKey]
    }))
  }
}

const tableStateKey = '__table_state_key__'


const setInLocalStorage = (key, data) => {
  const allFilterData = JSON.parse(localStorage.getItem(tableStateKey)) || {}
  allFilterData[key] = JSON.parse(data)
  localStorage.setItem(tableStateKey, JSON.stringify(allFilterData))
}
const getFromLocalStorage = (key) => {
  const allFilterData = JSON.parse(localStorage.getItem(tableStateKey)) || {}
  return allFilterData[key] ?? null
}

export {
  setInLocalStorage,
  getFromLocalStorage,
  formatHeadersToLocalStorage,
  formatHeadersFromLocalStorage
}
