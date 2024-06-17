import { Theme, CardInput } from '@/orchidui'
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
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    isInlineLabel: false,
    isDisabled: false,
    label: '',
    errorMessage: '',
    cardType: 'mastercard',
    isRequired: false,
    labelIcon: '',
    tooltipText: 'Tooltip text',
    tooltipOptions: {
      position: 'top',
      distance: 10
    }
  },
  render: (args) => ({
    components: { Theme, CardInput },
    setup() {
      const text = ref('')
      return { text, args }
    },
    template: `
          <Theme>
            <CardInput
                v-model="text"
                :isInlineLabel="args.isInlineLabel"
                :isDisabled="args.isDisabled"
                :label="args.label"
                :card-type="args.cardType"
                :hint="args.hint"
                :placeholder="args.placeholder"
                :error-message="args.errorMessage"
                :isRequired="args.isRequired"
                :tooltip-options="args.tooltipOptions"
                :label-icon="args.labelIcon"
                :tooltip-text="args.tooltipText"
            />
          </Theme>
        `
  })
}
