import { PhoneInput, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: PhoneInput,
  tags: ['autodocs']
}

export const Default = {
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    disabled: false,
    errorMessage: '',
    isRequired: false
  },
  render: (args) => ({
    components: { PhoneInput, Theme },
    setup() {
      const modelValue = ref(null)
      return { modelValue, args }
    },
    template: `
      <Theme>
        <div class="w-full h-[400px]">
          <PhoneInput
            v-model="modelValue"
            v-bind="args"
          />
        </div>
      </Theme>
    `
  })
}
