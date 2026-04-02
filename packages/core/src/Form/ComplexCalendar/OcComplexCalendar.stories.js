import { ComplexCalendar, Theme } from '@/orchidui-core'
import { ref } from 'vue'
import dayjs from 'dayjs'

export default {
  component: ComplexCalendar,
  tags: ['autodocs']
}

export const Default = {
  args: {
    countCalendars: 2,
    withFooter: true,
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
    components: { ComplexCalendar, Theme },
    setup() {
      const modelValue = ref([])
      return { modelValue, args }
    },
    template: `
      <Theme class="h-[400px]">
        <ComplexCalendar v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}

export const SingleCalendar = {
  render: () => ({
    components: { ComplexCalendar, Theme },
    setup() {
      const modelValue = ref('')
      const masks = ref({ modelValue: 'DD/MM/YYYY' })
      return { modelValue, masks }
    },
    template: `
      <Theme class="h-[400px]">
        <ComplexCalendar
          v-model.string="modelValue"
          :count-calendars="1"
          :is-range="false"
          :with-footer="false"
          :masks="masks"
        />
      </Theme>
    `
  })
}
