import { Theme, DatePicker, Calendar } from '@/orchidui'
import dayjs from 'dayjs'
import { ref } from 'vue'
import OcComplexCalendar from '@/orchidui/Form/ComplexCalendar/OcComplexCalendar.vue'

export default {
  components: { Calendar },
  component: DatePicker,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'range']
    },
    minDate: {
      control: 'text'
    },
    maxDate: {
      control: 'text'
    }
  },
  args: {
    type: 'range',
    dateFormat: 'YYYY-MM-DD',
    errorMessage: '',
    hint: '',
    minLabel: 'From',
    maxLabel: 'To',
    minDate: null,
    maxDate: null,
    isRequired: true,
    label: 'Date',
    isSplitInput: true,
    isIndefinite: false,
    disabled: false,
    countCalendars: 2
  },
  render: (args) => ({
    components: { Theme, DatePicker },
    setup() {
      // Disable date after next week
      const checkDisableDate = (value) => {
        return dayjs().add(7, 'day').isBefore(dayjs(value))
      }
      const model = ref('')
      const model1 = ref([])

      return { args, checkDisableDate, model, model1, dayjs }
    },
    template: `
          <Theme>
            <div class="w-full h-[550px]">
              {{ model }}
              <DatePicker
                  v-model="model"
                  :key="args.type"
                  type="default"
                  date-format="DD/MM/YYYY"
                  :error-message="args.errorMessage"
                  :disabled-date="checkDisableDate"
                  :hint="args.hint"
                  :disabled="args.disabled"
                  :min-date="args.minDate"
                  :max-date="args.maxDate"
                  :label="args.label"
                  :min-label="args.minLabel"
                  :max-label="args.maxLabel"
                  :is-required="args.isRequired"
                  :is-split-input="args.isSplitInput"
                  :is-indefinite="args.isIndefinite"
              />

              <div class="mt-8 w-fit">
                DD/MM/YYYY:  {{ model1 }}
                <DatePicker
                    v-model="model1"
                    :key="args.type"
                    :type="args.type"
                    date-format="YYYY-MM-DD"
                    :disabled="args.disabled"
                    :error-message="args.errorMessage"
                    :disabled-date="checkDisableDate"
                    :hint="args.hint"
                    :min-date="args.minDate"
                    :max-date="dayjs().format('YYYY-MM-DD')"
                    :label="args.label"
                    :min-label="args.minLabel"
                    :max-label="args.maxLabel"
                    :is-required="args.isRequired"
                    :is-split-input="args.isSplitInput"
                    :count-calendars="args.countCalendars"
                />
              </div>
            </div>
          </Theme>
        `
  })
}

export const VDatePicker = {
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'range']
    },
    minDate: {
      control: 'text'
    },
    maxDate: {
      control: 'text'
    }
  },
  args: {
    type: 'range',
    dateFormat: 'YYYY-MM-DD',
    errorMessage: '',
    hint: '',
    minLabel: 'From',
    maxLabel: 'To',
    minDate: null,
    maxDate: null,
    isRequired: true,
    label: 'Date',
    isSplitInput: true,
    isIndefinite: false
  },
  render: (args) => ({
    components: { Theme, DatePicker, OcComplexCalendar },
    setup() {
      // Disable date after next week
      const checkDisableDate = (value) => {
        return dayjs().add(7, 'day').isBefore(dayjs(value))
      }

      const model = ref('2000/08/20')
      const disabledDates = ref([
        {
          start: dayjs('2000/08/22', args.dateFormat).toDate(),
          end: null
        }
      ])

      return { args, checkDisableDate, model, disabledDates }
    },
    template: `
          <Theme>
            <div class="w-full h-[400px]">
              {{ args.dateFormat }}: {{ model }} {{ disabledDates }}
              <DatePicker
                  v-model="model"
                  :key="args.type"
                  type="default"
                  :error-message="args.errorMessage"
                  :disabled-date="checkDisableDate"
                  :hint="args.hint"
                  :disabled="args.disabled"
                  :min-date="args.minDate"
                  :max-date="args.maxDate"
                  :label="args.label"
                  :min-label="args.minLabel"
                  :max-label="args.maxLabel"
                  :date-format="args.dateFormat"
                  :is-required="args.isRequired"
                  :is-split-input="args.isSplitInput"
                  :is-indefinite="args.isIndefinite"
              >
                <template #menu="{ resetCalendar, updateCalendar}">
                  <OcComplexCalendar
                      :model-value="model"
                      :shortcuts="[]"
                      :count-calendars="1"
                      :is-range="false"
                      :with-footer="false"
                      :disabled-dates="disabledDates"
                      :masks="{ modelValue: args.dateFormat }"
                      @update:model-value="updateCalendar"
                  />
                </template>
              </DatePicker>
            </div>
          </Theme>
        `
  })
}
