import { ComplexDatePicker, Theme } from '@/orchidui-core'
import { ref } from 'vue'
import dayjs from 'dayjs'

export default {
  component: ComplexDatePicker,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    formatDate: {
      control: 'select',
      options: ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD']
    }
  },
  args: {
    label: '',
    hint: '',
    errorMessage: '',
    countCalendars: 2,
    withFooter: true,
    formatDate: 'DD/MM/YYYY',
    cancelButtonProps: { label: 'Clear' },
    submitButtonProps: { label: 'Done' },
    shortcuts: [
      {
        label: 'Today',
        value: { start: new Date(), end: new Date() }
      },
      {
        label: 'Yesterday',
        value: {
          start: dayjs().subtract(1, 'day').toDate(),
          end: dayjs().subtract(1, 'day').toDate()
        }
      },
      {
        label: 'This week',
        value: {
          start: dayjs().startOf('week').toDate(),
          end: dayjs().endOf('week').toDate()
        }
      },
      {
        label: 'This month',
        value: {
          start: dayjs().startOf('month').toDate(),
          end: dayjs().endOf('month').toDate()
        }
      },
      {
        label: 'Last month',
        value: {
          start: dayjs().subtract(1, 'month').startOf('month').toDate(),
          end: dayjs().subtract(1, 'month').endOf('month').toDate()
        }
      }
    ]
  },
  render: (args) => ({
    components: { ComplexDatePicker, Theme },
    setup() {
      const modelValue = ref()
      return { modelValue, args }
    },
    template: `
      <Theme class="h-[400px]">
        <ComplexDatePicker v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}
