import type { Meta, StoryObj } from '@storybook/vue3'
import LocalDataTable from './LocalDataTable.vue'
import { useProductDataTable } from './composables/useProductDataTable'
import { ref, onMounted } from 'vue'
import { initializeDB } from './db'

const meta = {
  title: 'Dashboard/LocalDataTable',
  component: LocalDataTable,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object' },
    columns: { control: 'object' },
    loading: { control: 'boolean' },
    title: { control: 'text' },
    customClass: { control: 'text' },
    emptyStateMessage: { control: 'text' }
  }
} satisfies Meta<typeof LocalDataTable>

export default meta
type Story = StoryObj<typeof meta>

// Sample data dengan berbagai tipe data
const sampleData = [
  {
    id: 1,
    name: 'Product A',
    price: 100000,
    inStock: true,
    status: 'active',
    tags: ['electronics', 'gadgets'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    lastUpdated: new Date('2024-03-15'),
    category_ids: ['cat-1', 'cat-2'],
    channels: ['online', 'offline'],
    quantity: 100
  },
  {
    id: 2,
    name: 'Product B',
    price: 200000,
    inStock: false,
    status: 'draft',
    tags: ['clothing', 'fashion'],
    description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
    lastUpdated: new Date('2024-03-14'),
    category_ids: ['cat-2'],
    channels: ['online'],
    quantity: 50
  }
]

// Sample columns dengan berbagai tipe data
const sampleColumns = [
  { key: 'id', label: 'ID', width: '80px' },
  { key: 'name', label: 'Nama Produk' },
  { key: 'price', label: 'Harga' },
  { key: 'inStock', label: 'Stok Tersedia' },
  { key: 'status', label: 'Status' },
  { key: 'tags', label: 'Kategori' },
  { key: 'description', label: 'Deskripsi' },
  { key: 'lastUpdated', label: 'Terakhir Diperbarui' }
]

export const Comprehensive: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    title: 'Daftar Produk',
    customClass: 'bg-gray-50',
    emptyStateMessage: 'Belum ada data produk'
  },
  render: (args) => ({
    components: { LocalDataTable },
    setup() {
      const {
        data,
        loading,
        currentRules,
        showRules,
        handleUpdate,
        handleDelete,
        handleRulesChange,
        changeRules
      } = useProductDataTable()

      const selectedCategories = ref<string[]>([])
      const currentPage = ref(1)
      const perPage = ref(5)

      onMounted(async () => {
        await initializeDB()
      })

      const categories = [
        { id: 'cat-1', label: 'Kategori 1' },
        { id: 'cat-2', label: 'Kategori 2' },
        { id: 'cat-3', label: 'Kategori 3' }
      ]

      const filterByStatus = (status: string | null) => {
        if (!status) {
          changeRules('defaultRules')
          return
        }
        
        const newRules = {
          filter: [
            {
              key: 'status',
              operator: 'equals',
              value: status
            }
          ],
          sort: currentRules.value.sort
        }
        handleRulesChange(newRules.filter, newRules.sort)
      }

      const toggleCategory = (categoryId: string) => {
        const index = selectedCategories.value.indexOf(categoryId)
        if (index === -1) {
          selectedCategories.value.push(categoryId)
        } else {
          selectedCategories.value.splice(index, 1)
        }
        applyCategoryFilter()
      }

      const applyCategoryFilter = () => {
        if (selectedCategories.value.length === 0) {
          changeRules('defaultRules')
          return
        }

        const newRules = {
          filter: [
            {
              key: 'category_ids',
              operator: 'includesAny',
              value: selectedCategories.value
            }
          ],
          sort: currentRules.value.sort
        }
        handleRulesChange(newRules.filter, newRules.sort)
      }

      const clearCategoryFilter = () => {
        selectedCategories.value = []
        changeRules('defaultRules')
      }

      const handlePageChange = (page: number) => {
        currentPage.value = page
      }

      return { 
        args,
        data,
        loading,
        currentRules,
        showRules,
        handleUpdate,
        handleDelete,
        handleRulesChange,
        changeRules,
        filterByStatus,
        categories,
        selectedCategories,
        toggleCategory,
        clearCategoryFilter,
        currentPage,
        perPage,
        handlePageChange
      }
    },
    template: `
      <div>
        <div class="flex flex-col gap-4 mb-4">
          <div class="flex gap-2">
            <button 
              @click="filterByStatus(null)"
              class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Tampilkan Semua
            </button>
            <button 
              @click="filterByStatus('active')"
              class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Tampilkan Aktif
            </button>
            <button 
              @click="filterByStatus('draft')"
              class="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Tampilkan Draft
            </button>
            <button 
              @click="showRules = !showRules"
              class="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              {{ showRules ? 'Sembunyikan Rules' : 'Tampilkan Rules' }}
            </button>
          </div>
          
          <div class="flex flex-col gap-2">
            <div class="text-sm font-medium">Filter Kategori:</div>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="category in categories"
                :key="category.id"
                @click="toggleCategory(category.id)"
                :class="[
                  'px-3 py-1 rounded',
                  selectedCategories.includes(category.id)
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                ]"
              >
                {{ category.label }}
              </button>
              <button
                v-if="selectedCategories.length > 0"
                @click="clearCategoryFilter"
                class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Hapus Filter
              </button>
            </div>
          </div>
        </div>

        <LocalDataTable 
          v-bind="args"
          :data="data"
          :rules="currentRules.filter"
          :sortRules="currentRules.sort"
          :loading="loading"
          :current-page="currentPage"
          :per-page="perPage"
          @update="handleUpdate"
          @rulesChange="handleRulesChange"
          @pageChange="handlePageChange"
        >
          <template #rules v-if="showRules">
            <div class="bg-gray-100 p-4 rounded mb-4">
              <h3 class="font-semibold mb-2">Rules Saat Ini:</h3>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <h4 class="text-sm font-medium mb-1">Filter Rules:</h4>
                  <pre class="text-xs bg-white p-2 rounded">{{ currentRules.filter }}</pre>
                </div>
                <div>
                  <h4 class="text-sm font-medium mb-1">Sort Rules:</h4>
                  <pre class="text-xs bg-white p-2 rounded">{{ currentRules.sort }}</pre>
                </div>
              </div>
            </div>
          </template>
          <template #item="{ item }">
            <div class="flex justify-between items-start">
              <div class="space-y-1">
                <div class="font-semibold">{{ item.name }}</div>
                <div class="text-sm text-gray-500">Qty: {{ item.quantity.toLocaleString() }}</div>
                <div class="text-sm text-gray-500">Kategori: {{ item.category_ids.join(', ') }}</div>
                <div class="text-sm text-gray-500">Channel: {{ item.channels.join(', ') }}</div>
              </div>
              <div class="flex items-center gap-2">
                <select 
                  :value="item.status"
                  @change="handleUpdate(item.id, 'status', $event.target.value)"
                  class="text-sm border rounded px-2 py-1"
                >
                  <option value="active">Aktif</option>
                  <option value="inactive">Tidak Aktif</option>
                  <option value="draft">Draft</option>
                </select>
                <button 
                  @click="handleDelete(item.id)"
                  class="text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              </div>
            </div>
          </template>
        </LocalDataTable>
      </div>
    `
  })
} 