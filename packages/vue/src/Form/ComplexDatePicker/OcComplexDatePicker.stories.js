import { ComplexCalendar } from '@orchidui/vue/Calendar.js'
import { Theme } from '@orchidui/vue'
import dayjs from 'dayjs'
import { ref } from 'vue'

export default {
  component: ComplexCalendar,
  tags: ['autodocs']
}
export const Calendar = {
  args: {
    shortcuts: [
      {
        label: 'Today',
        value: {
          start: new Date(),
          end: new Date()
        }
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
    ],
    cancelButtonProps: {
      label: 'Clear'
    },
    submitButtonProps: {
      label: 'Done'
    },
    calendarProps: null,
    formatDate: 'DD/MM/YYYY',
    countCalendars: 2,
    withFooter: true,
    label: '',
    hint: '',
    errorMessage: ''
  },
  argTypes: {
    formatDate: {
      control: 'select',
      options: ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD']
    }
  },
  render: (args) => ({
    components: { ComplexCalendar, Theme },
    setup() {
      const range = ref()
      return { args, range }
    },
    template: `
          <Theme class="h-[400px]">
            <ComplexCalendar
                v-model="range"
                :shortcuts="args.shortcuts"
                :calendarProps="args.calendarProps"
                :cancel-button-props="args.cancelButtonProps"
                :format-date="args.formatDate"
                :submit-button-props="args.submitButtonProps"
                :count-calendars="args.countCalendars"
                :with-footer="args.withFooter"
                :label="args.label"
                :hint="args.hint"
                :error-message="args.errorMessage"
            />
          </Theme>
        `
  })
}
