// filters.ts
export interface FilterRule {
    key: string
    operator: string
    value: any
  }
  
  export interface SortRule {
    key: string
    direction: 'asc' | 'desc'
  }
  
  export function filterByRules(data: any[], rules: FilterRule[]): any[] {
    return data.filter((item) =>
      rules.every(({ key, operator, value }) => {
        const fieldValue = item[key]
  
        switch (operator) {
          case 'eq': return fieldValue === value
          case 'neq': return fieldValue !== value
          case 'gt': return fieldValue > value
          case 'gte': return fieldValue >= value
          case 'lt': return fieldValue < value
          case 'lte': return fieldValue <= value
          case 'includes': return Array.isArray(fieldValue) && fieldValue.includes(value)
          case 'includesAny': return Array.isArray(fieldValue) && Array.isArray(value) && value.some(v => fieldValue.includes(v))
          case 'in': return Array.isArray(value) && value.includes(fieldValue)
          default: return true
        }
      })
    )
  }
  
  export function sortByRules(data: any[], rules: SortRule[]): any[] {
    return [...data].sort((a, b) => {
      for (const { key, direction } of rules) {
        const dir = direction === 'asc' ? 1 : -1
        if (a[key] < b[key]) return -1 * dir
        if (a[key] > b[key]) return 1 * dir
      }
      return 0
    })
  }