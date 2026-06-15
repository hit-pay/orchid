import { Sort, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Sort,
  tags: ['autodocs'],
  kind: 'leaf',
  description:
    'Sort control for the DataTable toolbar: an icon button (with an indicator dot when a non-default sort is active) that opens a panel with a "Sort by" field selector and an Ascending/Descending direction toggle. Emits the selected `{ field, direction }` via v-model; mapping to API params and persistence is left to the consumer.',
  keywords: ['sort', 'order', 'order_by', 'toolbar', 'ascending', 'descending'],
  use_for: ['sort button + panel in DataTable filter toolbar', 'sorting a products or transactions list'],
  understand_with: ['DataTable', 'FilterSearch', 'FilterSearchFor']
}

export const Playground = {
  render: (args) => ({
    components: { Sort, Theme },
    setup() {
      const sort = ref({ field: null, direction: 'asc' })
      const sortOptions = [
        { label: 'Created', value: 'created_at' },
        { label: 'Product name', value: 'name' },
        { label: 'Price', value: 'price' }
      ]
      return { args, sort, sortOptions }
    },
    template: `
      <Theme class="p-6">
        <div class="flex items-center gap-x-2">
          <Sort v-model="sort" :sort-options="sortOptions" />
        </div>
        <pre class="mt-4 text-sm text-oc-text-400">{{ sort }}</pre>
      </Theme>
    `
  })
}
