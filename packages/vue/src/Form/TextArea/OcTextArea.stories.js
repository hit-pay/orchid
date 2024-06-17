import { Theme, TextArea } from '@/orchidui'
import { ref } from 'vue'

export default {
  component: TextArea,
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
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    label: '',
    errorMessage: '',
    rows: 5,
    autoResize: false,
    isDisabled: false,
    isRequired: false,
    labelIcon: '',
    tooltipText: 'Tooltip text',
    tooltipOptions: {
      position: 'top',
      distance: 10
    }
  },
  render: (args) => ({
    components: { Theme, TextArea },
    setup() {
      const text = ref('')
      return { text, args }
    },
    template: `
          <Theme>
            <TextArea
                v-model="text"
                :label="args.label"
                :hint="args.hint"
                :rows="args.rows"
                :auto-resize="args.autoResize"
                :is-disabled="args.isDisabled"
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
