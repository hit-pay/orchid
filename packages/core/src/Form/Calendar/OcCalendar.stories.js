import { Calendar, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Calendar,
  tags: ['autodocs']
}

export const Default = {
  args: {
    isRange: false,
    isMultiple: false,
    disabledDates: [],
    minDate: '',
    maxDate: ''
  },
  render: (args) => ({
    components: { Calendar, Theme },
    setup() {
      const modelValue = ref('')
      return { modelValue, args }
    },
    template: `
      <Theme>
        <Calendar v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}

export const RangeCalendar = {
  render: () => ({
    components: { Calendar, Theme },
    setup() {
      const modelValue = ref([])
      return { modelValue }
    },
    template: `
      <Theme>
        <Calendar v-model="modelValue" type="range" />
      </Theme>
    `
  })
}
