import { CardInput, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: CardInput,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    cardType: {
      control: 'select',
      options: ['mastercard', 'visa']
    },
    labelIcon: {
      control: 'select',
      options: ['', 'question-mark']
    }
  },
  args: {
    label: '',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    isDisabled: false,
    isRequired: false,
    isInlineLabel: false,
    errorMessage: '',
    cardType: 'mastercard',
    labelIcon: '',
    tooltipText: 'Tooltip text',
    tooltipOptions: {
      position: 'top',
      distance: 10
    }
  },
  render: (args) => ({
    components: { CardInput, Theme },
    setup() {
      const modelValue = ref('')
      return { modelValue, args }
    },
    template: `
      <Theme>
        <CardInput v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}
