import { Theme, Calendar, Checkbox } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Calendar,
  tags: ['autodocs']
}

export const calendarStory = {
  argTypes: {
    disabledDate: {
      control: 'object',
      description:
        'a function determining if a date is disabled with that date as its parameter. Should return a Boolean'
    },
    type: {
      control: 'select',
      options: ['default', 'range']
    },
    position: {
      control: 'select',
      options: ['floating', 'inline']
    },
    isIndefinite: {
      control: 'boolean',
      description: 'Whether the calendar is indefinite or not'
    }
  },
  args: {
    type: 'default',
    minDate: '',
    maxDate: '',
    position: 'floating',
    isIndefinite: false
  },
  render: (args) => ({
    components: {
      Theme,
      Calendar,
      Checkbox
    },
    setup() {
      const modelValue = ref(Date.now())
      const rangeModelValue = ref([])

      return { modelValue, rangeModelValue, args }
    },
    template: `
          <Theme>
            <div class="flex gap-x-6 justify-around">
              <div class="gap-y-4 flex flex-col basis-1/2">
                <span class="text-xl font-bold">Default Calendar</span>
                <Calendar v-model="modelValue" v-bind="args" type="default" />
                <span v-if="modelValue">{{ modelValue }}</span>
              </div>
              <div class="gap-y-4 flex flex-col basis-1/2">
                <span class="text-xl font-bold">Range Calendar</span>
                <Calendar v-model="rangeModelValue" v-bind="args" type="range"/>
                <span v-if="rangeModelValue">{{ rangeModelValue.toString() }}</span>
              </div>
            </div>
          </Theme>
        `
  })
}
