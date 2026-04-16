import { FilterSearch, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: FilterSearch,
  tags: ['autodocs'],
  kind: 'leaf',
  description: 'Expandable search bar with an optional search-key dropdown. Used inside the DataTable filter toolbar.',
  keywords: ['search', 'filter', 'toolbar', 'query'],
  use_for: ['search bar in DataTable filter toolbar', 'search with field selector dropdown'],
  understand_with: ['DataTable', 'FilterSearchFor', 'FilterForm']
}

export const Playground = {
  argTypes: {
    isSearchOnly:  { control: 'boolean' },
    showOptions:   { control: 'boolean', description: 'Pass searchOptions to enable a field-selector dropdown' }
  },
  args: {
    isSearchOnly: true,
    showOptions:  false
  },
  render: (args) => ({
    components: { FilterSearch, Theme },
    setup() {
      const selectedOption = ref('name')
      const queries = ref([])
      const searchOptions = [
        { label: 'Name',  value: 'name' },
        { label: 'Email', value: 'email' }
      ]
      return { args, selectedOption, queries, searchOptions }
    },
    template: `
      <Theme class="p-6">
        <div class="relative flex items-center min-h-[44px] border border-oc-gray-200 rounded px-4 overflow-hidden">
          <FilterSearch
            :is-search-only="args.isSearchOnly"
            :search-options="args.showOptions ? searchOptions : []"
            :selected-option="selectedOption"
            @add-query="queries.push($event)"
            @change-search-key="selectedOption = $event"
          />
        </div>
        <p v-if="queries.length" class="mt-2 text-sm text-oc-text-400 font-mono">queries: {{ queries }}</p>
      </Theme>
    `
  })
}
