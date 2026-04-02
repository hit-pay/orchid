import { TimePicker, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: TimePicker,
  tags: ['autodocs']
}

export const Default = {
  args: {
    label: '',
    hint: '',
    disabled: false,
    errorMessage: '',
    is24Hours: false
  },
  render: (args) => ({
    components: { TimePicker, Theme },
    setup() {
      const modelValue = ref('09:30')
      return { modelValue, args }
    },
    template: `
      <Theme>
        <div class="w-full h-[200px]">
          <TimePicker v-model="modelValue" v-bind="args" />
        </div>
      </Theme>
    `
  })
}
