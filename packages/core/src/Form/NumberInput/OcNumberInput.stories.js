import { NumberInput, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: NumberInput,
  tags: ['autodocs']
}

export const Default = {
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    disabled: false,
    errorMessage: '',
    min: undefined,
    max: undefined,
    step: 1
  },
  render: (args) => ({
    components: { NumberInput, Theme },
    setup() {
      const modelValue = ref(0)
      return { modelValue, args }
    },
    template: `
      <Theme>
        <NumberInput
          v-model="modelValue"
          v-bind="args"
        />
      </Theme>
    `
  })
}
