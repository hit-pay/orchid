export const setInLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value)
  }
}

export const getFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
  return null
}

export const saveFilterToLocalStorage = (id, filterData) => {
  if (id) {
    setInLocalStorage(id, JSON.stringify(filterData))
  }
}

export const getFilterFromLocalStorage = (id) => {
  if (id) {
    return getFromLocalStorage(id)
  }
  return null
} 