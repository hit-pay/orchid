import { SelectOptions, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: SelectOptions,
  tags: ['autodocs']
}

const sampleOptions = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 }
]

export const Default = {
  argTypes: {
    variant: { control: 'select', options: ['grid', 'list', 'list2'] },
    optionType: { control: 'select', options: ['text', 'icon', 'image'] }
  },
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    isDisabled: false,
    errorMessage: '',
    variant: 'grid',
    optionType: 'text',
    options: sampleOptions
  },
  render: (args) => ({
    components: { SelectOptions, Theme },
    setup() {
      const modelValue = ref(null)
      return { modelValue, args }
    },
    template: `
      <Theme>
        <SelectOptions
          v-model="modelValue"
          v-bind="args"
        />
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { SelectOptions, Theme },
    setup() {
      const grid = ref(null)
      const list = ref(null)
      const list2 = ref(null)
      return { grid, list, list2 }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-6">
          <SelectOptions
            v-model="grid"
            label="Grid (default)"
            hint="Select one of the options below."
            variant="grid"
            :options="[
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
              { label: 'Option 3', value: 3 }
            ]"
          />
          <SelectOptions
            v-model="list"
            label="List"
            hint="Select one of the options below."
            variant="list"
            :options="[
              { label: 'Option 1', value: 1, description: 'Description for option 1' },
              { label: 'Option 2', value: 2, description: 'Description for option 2' },
              { label: 'Option 3', value: 3, description: 'Description for option 3' }
            ]"
          />
          <SelectOptions
            v-model="list2"
            label="List 2"
            hint="Select one of the options below."
            variant="list2"
            :options="[
              { label: 'Option 1', value: 1, description: 'Smaller height, fits screen width' },
              { label: 'Option 2', value: 2, description: 'Smaller height, fits screen width' }
            ]"
          />
        </div>
      </Theme>
    `
  })
}
