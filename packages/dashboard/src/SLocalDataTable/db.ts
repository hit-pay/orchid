import Dexie, { Table } from 'dexie'
import type { DataItem } from './types'

// Database Implementation
class MyDB extends Dexie {
  items!: Table<DataItem, string>

  constructor() {
    super('MyAppDB')
    this.version(1).stores({
      items: 'id',
    })
  }
}

export const db = new MyDB()

// Mock Data
const mockData: DataItem[] = [
  {
    id: '1',
    name: 'Produk A',
    category_ids: ['cat-1', 'cat-2'],
    quantity: 10,
    channels: ['online_store', 'pos'],
    status: 'active'
  },
  {
    id: '2',
    name: 'Produk B',
    category_ids: ['cat-3'],
    quantity: 3,
    channels: ['pos'],
    status: 'inactive'
  },
  {
    id: '3',
    name: 'Produk C',
    category_ids: ['cat-1'],
    quantity: 15,
    channels: ['online_store'],
    status: 'draft'
  },
  {
    id: '4',
    name: 'Produk D',
    category_ids: ['cat-2', 'cat-3'],
    quantity: 8,
    channels: ['online_store', 'pos'],
    status: 'active'
  },
  {
    id: '5',
    name: 'Produk E',
    category_ids: ['cat-1'],
    quantity: 20,
    channels: ['pos'],
    status: 'inactive'
  },
  {
    id: '6',
    name: 'Produk F',
    category_ids: ['cat-2'],
    quantity: 12,
    channels: ['online_store'],
    status: 'active'
  },
  {
    id: '7',
    name: 'Produk G',
    category_ids: ['cat-3'],
    quantity: 5,
    channels: ['pos'],
    status: 'draft'
  },
  {
    id: '8',
    name: 'Produk H',
    category_ids: ['cat-1', 'cat-3'],
    quantity: 18,
    channels: ['online_store', 'pos'],
    status: 'active'
  },
  {
    id: '9',
    name: 'Produk I',
    category_ids: ['cat-2'],
    quantity: 7,
    channels: ['online_store'],
    status: 'inactive'
  },
  {
    id: '10',
    name: 'Produk J',
    category_ids: ['cat-1', 'cat-2'],
    quantity: 25,
    channels: ['pos'],
    status: 'active'
  },
  {
    id: '11',
    name: 'Produk K',
    category_ids: ['cat-3'],
    quantity: 9,
    channels: ['online_store', 'pos'],
    status: 'draft'
  },
  {
    id: '12',
    name: 'Produk L',
    category_ids: ['cat-1'],
    quantity: 14,
    channels: ['online_store'],
    status: 'active'
  },
  {
    id: '13',
    name: 'Produk M',
    category_ids: ['cat-2', 'cat-3'],
    quantity: 6,
    channels: ['pos'],
    status: 'inactive'
  },
  {
    id: '14',
    name: 'Produk N',
    category_ids: ['cat-1', 'cat-2'],
    quantity: 22,
    channels: ['online_store', 'pos'],
    status: 'active'
  },
  {
    id: '15',
    name: 'Produk O',
    category_ids: ['cat-3'],
    quantity: 11,
    channels: ['online_store'],
    status: 'draft'
  },
  {
    id: '16',
    name: 'Produk P',
    category_ids: ['cat-1', 'cat-3'],
    quantity: 17,
    channels: ['pos'],
    status: 'active'
  },
  {
    id: '17',
    name: 'Produk Q',
    category_ids: ['cat-2'],
    quantity: 4,
    channels: ['online_store', 'pos'],
    status: 'inactive'
  },
  {
    id: '18',
    name: 'Produk R',
    category_ids: ['cat-1'],
    quantity: 19,
    channels: ['online_store'],
    status: 'active'
  },
  {
    id: '19',
    name: 'Produk S',
    category_ids: ['cat-2', 'cat-3'],
    quantity: 13,
    channels: ['pos'],
    status: 'draft'
  },
  {
    id: '20',
    name: 'Produk T',
    category_ids: ['cat-1', 'cat-2'],
    quantity: 16,
    channels: ['online_store', 'pos'],
    status: 'active'
  }
]

// Inisialisasi database dengan data mock
export const initializeDB = async () => {
  const count = await db.items.count()
  if (count === 0) {
    await db.items.bulkAdd(mockData)
  }
} 