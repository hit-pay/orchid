import { FilterForm, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: FilterForm,
  tags: ['autodocs'],
  kind: 'composite',
  description: 'Filter panel with a FormBuilder form and Apply/Cancel actions. Renders inside the DataTable filter dropdown.',
  keywords: ['filter', 'form', 'dropdown', 'FormBuilder', 'apply'],
  use_for: ['filter panel inside DataTable filter dropdown'],
  understand_with: ['DataTable', 'FormBuilder', 'Dropdown']
}

export const Playground = {
  argTypes: {},
  args: {},
  render: () => ({
    components: { FilterForm, Theme },
    setup() {
      const values = ref({})
      const jsonForm = [
        {
          name: 'status',
          type: 'Select',
          props: {
            label: 'Status',
            options: [
              { label: 'Active',   value: 'active' },
              { label: 'Inactive', value: 'inactive' }
            ]
          }
        },
        {
          name: 'plan',
          type: 'Select',
          props: {
            label: 'Plan',
            options: [
              { label: 'Free', value: 'free' },
              { label: 'Pro',  value: 'pro' }
            ]
          }
        }
      ]
      return { values, jsonForm }
    },
    template: `
      <Theme class="p-6">
        <FilterForm
          id="example-filter"
          :json-form="jsonForm"
          :values="values"
          @apply-filter="values = $event"
          @cancel="() => {}"
        />
        <p class="mt-3 text-sm text-oc-text-400 font-mono">{{ JSON.stringify(values) }}</p>
      </Theme>
    `
  })
}
