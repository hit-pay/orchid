import { FilterSearchFor, Theme } from '@/orchidui-core'

export default {
  component: FilterSearchFor,
  tags: ['autodocs'],
  kind: 'leaf',
  description: 'Active filter chip bar showing applied search queries and filter values with dismiss controls. Used inside DataTable.',
  keywords: ['filter', 'chips', 'search', 'active', 'toolbar', 'dismiss'],
  use_for: ['display applied filters as dismissible chips', 'filter toolbar in DataTable'],
  understand_with: ['DataTable', 'FilterSearch', 'Chip']
}

export const Playground = {
  argTypes: {
    showFilters: { control: 'boolean', description: 'Show example filter chips' },
    showQueries: { control: 'boolean', description: 'Show example search query chips' }
  },
  args: {
    showFilters: true,
    showQueries: true
  },
  render: (args) => ({
    components: { FilterSearchFor, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <FilterSearchFor
          :filters="args.showFilters ? [{ name: 'status', label: 'Status: Active' }, { name: 'plan', label: 'Plan: Pro' }] : []"
          :queries="args.showQueries ? ['alice'] : []"
          @remove-query="() => {}"
          @remove-filter="() => {}"
          @remove-all="() => {}"
        />
      </Theme>
    `
  })
}
