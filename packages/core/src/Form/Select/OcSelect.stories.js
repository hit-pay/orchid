import { Select, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Select,
  tags: ['autodocs']
}

const sampleOptions = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' }
]

export const Default = {
  args: {
    options: sampleOptions,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    isFilterable: false,
    isMultiple: false,
    disabled: false,
    errorMessage: ''
  },
  render: (args) => ({
    components: { Select, Theme },
    setup() {
      const modelValue = ref(undefined)
      return { modelValue, args }
    },
    template: `
      <Theme>
        <div class="w-full h-[300px]">
          <Select
            v-model="modelValue"
            v-bind="args"
          />
        </div>
      </Theme>
    `
  })
}

export const MultiSelect = {
  render: () => ({
    components: { Select, Theme },
    setup() {
      const modelValue = ref([])
      return { modelValue }
    },
    template: `
      <Theme>
        <div class="w-full h-[300px]">
          <Select
            v-model="modelValue"
            :options="[
              { label: 'Option 1', value: 'opt1' },
              { label: 'Option 2', value: 'opt2' },
              { label: 'Option 3', value: 'opt3' }
            ]"
            label="Multi Select"
            hint="Select one or more options."
            placeholder="Select options..."
            :is-filterable="true"
            multiple
          />
        </div>
      </Theme>
    `
  })
}
