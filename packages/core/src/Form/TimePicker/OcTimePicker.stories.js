import { Theme, TimePicker } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: TimePicker,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    labelIcon: {
      control: 'select',
      options: ['', 'question-mark']
    }
  },
  args: {
    label: '',
    hint: '',
    preFill: '',
    icon: undefined,
    placeholder: '',
    errorMessage: '',
    isRequired: false,
    isDisabled: false,
    labelIcon: '',
    tooltipText: 'Tooltip text',
    tooltipOptions: {
      position: 'top',
      distance: 10
    }
  },
  render: (args) => ({
    components: { Theme, TimePicker },
    setup() {
      const modelValue = ref(new Date())
      return { modelValue, args }
    },
    template: `
          <Theme>
            <p>{{ modelValue }}</p>
            <div class="w-full h-[200px]">
              <TimePicker v-model="modelValue" v-bind="args"/>
            </div>
          </Theme>
        `
  })
}
