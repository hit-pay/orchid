import { Input, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Input,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    icon: { control: 'select', options: ['', 'circle', 'search'] },
    inputType: { control: 'select', options: ['text', 'password', 'email', 'number'] }
  },
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    icon: '',
    disabled: false,
    isRequired: false,
    errorMessage: '',
    inputType: 'text',
    isInlineLabel: false
  },
  render: (args) => ({
    components: { Input, Theme },
    setup() {
      const modelValue = ref('')
      return { modelValue, args }
    },
    template: `
      <Theme>
        <Input
          v-model="modelValue"
          v-bind="args"
        />
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { Input, Theme },
    setup() {
      const normal = ref('')
      const disabled = ref('')
      const error = ref('')
      const inline = ref('')
      return { normal, disabled, error, inline }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-6">
          <Input
            v-model="normal"
            label="Normal"
            hint="This is a hint text."
            placeholder="Placeholder"
          />
          <Input
            v-model="disabled"
            label="Disabled"
            hint="This is a hint text."
            placeholder="Placeholder"
            :disabled="true"
          />
          <Input
            v-model="error"
            label="Error"
            hint="This is a hint text."
            placeholder="Placeholder"
            error-message="This field is required."
          />
          <Input
            v-model="inline"
            label="Inline Label"
            placeholder="Placeholder"
            :is-inline-label="true"
          />
        </div>
      </Theme>
    `
  })
}
