import { ref, onMounted } from 'vue'
import type { FilterRule, SortRule } from './filters'
import type { DataItem } from '../types'
import { db } from '../db'

// Settings JSON
export const settings = {
  defaultColumns: [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'quantity', label: 'Quantity', type: 'number' },
    { key: 'category_ids', label: 'Categories', type: 'array' },
    { key: 'channels', label: 'Channels', type: 'array' },
    { 
      key: 'status', 
      label: 'Status', 
      type: 'select',
      options: [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
        { value: 'draft', label: 'Draft' }
      ]
    }
  ],
  defaultRules: {
    filter: [
      { key: 'quantity', operator: 'gte', value: 5 },
      { key: 'channels', operator: 'includes', value: 'online_store' }
    ] as FilterRule[],
    sort: [
      { key: 'quantity', direction: 'desc' },
      { key: 'name', direction: 'asc' }
    ] as SortRule[]
  },
  alternativeRules: {
    filter: [
      { key: 'category_ids', operator: 'includesAny', value: ['cat-2'] },
      { key: 'quantity', operator: 'gte', value: 8 },
      { key: 'channels', operator: 'includes', value: 'pos' }
    ] as FilterRule[],
    sort: [
      { key: 'name', direction: 'desc' },
      { key: 'quantity', direction: 'asc' }
    ] as SortRule[]
  },
  statusRules: {
    filter: [
      { key: 'status', operator: 'equals', value: 'active' }
    ] as FilterRule[],
    sort: [
      { key: 'quantity', direction: 'desc' }
    ] as SortRule[]
  }
}

// Simulasi delay network
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// API Implementation
const api = {
  // Get all items
  async getItems(): Promise<DataItem[]> {
    await delay(500) // Simulasi network delay
    return db.items.toArray()
  },

  // Update item
  async updateItem(id: string, updates: Partial<DataItem>): Promise<DataItem | undefined> {
    await delay(600)
    await db.items.update(id, updates)
    return db.items.get(id)
  },

  // Delete item
  async deleteItem(id: string): Promise<void> {
    await delay(400)
    await db.items.delete(id)
  }
}

export function useProductDataTable() {
  const data = ref<DataItem[]>([])
  const loading = ref(true)
  const currentRules = ref(settings.defaultRules)
  const showRules = ref(true)

  onMounted(async () => {
    data.value = await api.getItems()
    loading.value = false
  })

  const handleUpdate = async (id: string, field: string, value: any) => {
    const updatedItem = await api.updateItem(id, { [field]: value })
    if (updatedItem) {
      data.value = await api.getItems()
    }
  }

  const handleDelete = async (id: string) => {
    await api.deleteItem(id)
    data.value = await api.getItems()
  }

  const handleRulesChange = (newRules: FilterRule[], newSortRules: SortRule[]) => {
    currentRules.value = {
      filter: newRules,
      sort: newSortRules
    }
  }

  const changeRules = (ruleSet: keyof typeof settings) => {
    currentRules.value = settings[ruleSet]
  }

  return {
    data,
    loading,
    currentRules,
    showRules,
    handleUpdate,
    handleDelete,
    handleRulesChange,
    changeRules
  }
} 