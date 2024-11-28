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
    countCalendars: 2,
    withFooter: true
  },
  render: (args) => ({
    components: { ComplexCalendar, Theme },
    setup() {
      const modelValue = ref([])
      return { modelValue, args }
    },
    template: `
          <Theme class="h-[400px]">
            {{ modelValue }}
            <ComplexCalendar
                v-model="modelValue"
                :shortcuts="args.shortcuts"
                :cancel-button-props="args.cancelButtonProps"
                :submit-button-props="args.submitButtonProps"
                :count-calendars="args.countCalendars"
                :with-footer="args.withFooter"
            />
          </Theme>
        `
  })
}

export const Single = {
  args: {
    shortcuts: null,
    cancelButtonProps: {
      label: 'Clear'
    },
    submitButtonProps: {
      label: 'Done'
    },
    countCalendars: 1,
    withFooter: true
  },
  render: (args) => ({
    components: { ComplexCalendar, Theme },
    setup() {
      const modelValue = ref('20/10/2000')
      const masks = ref({
        modelValue: 'DD-MM-YYYY'
      })
      return { modelValue, args, masks }
    },
    template: `
          <Theme class="h-[400px]">
            {{ modelValue }}
            <ComplexCalendar
                v-model.string="modelValue"
                :shortcuts="args.shortcuts"
                :cancel-button-props="args.cancelButtonProps"
                :submit-button-props="args.submitButtonProps"
                :count-calendars="args.countCalendars"
                :is-range="false"
                :with-footer="false"
                :masks="masks"
                
            />
          </Theme>
        `
  })
}
