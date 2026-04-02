import { DatePicker, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: DatePicker,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'range']
    }
  },
  args: {
    label: 'Date',
    hint: '',
    placeholder: '',
    disabled: false,
    errorMessage: '',
    isRange: false,
    type: 'default',
    dateFormat: 'YYYY-MM-DD'
  },
  render: (args) => ({
    components: { DatePicker, Theme },
    setup() {
      const modelValue = ref('')
      return { modelValue, args }
    },
    template: `
      <Theme>
        <div class="w-full h-[500px]">
          <DatePicker
            v-model="modelValue"
            v-bind="args"
          />
        </div>
      </Theme>
    `
  })
}

export const DateRange = {
  render: () => ({
    components: { DatePicker, Theme },
    setup() {
      const modelValue = ref([])
      return { modelValue }
    },
    template: `
      <Theme>
        <div class="w-full h-[500px]">
          <DatePicker
            v-model="modelValue"
            type="range"
            label="Date Range"
            hint="Select a start and end date"
            date-format="YYYY-MM-DD"
            min-label="From"
            max-label="To"
          />
        </div>
      </Theme>
    `
  })
}
