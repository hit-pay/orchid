import { TextArea, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: TextArea,
  tags: ['autodocs']
}

export const Default = {
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    disabled: false,
    isRequired: false,
    errorMessage: '',
    maxLength: undefined,
    rows: 5
  },
  render: (args) => ({
    components: { TextArea, Theme },
    setup() {
      const modelValue = ref('')
      return { modelValue, args }
    },
    template: `
      <Theme>
        <TextArea
          v-model="modelValue"
          v-bind="args"
        />
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { TextArea, Theme },
    setup() {
      const normal = ref('')
      const disabled = ref('')
      const error = ref('')
      return { normal, disabled, error }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-6">
          <TextArea
            v-model="normal"
            label="Normal"
            hint="This is a hint text."
            placeholder="Placeholder"
            :rows="4"
          />
          <TextArea
            v-model="disabled"
            label="Disabled"
            hint="This is a hint text."
            placeholder="Placeholder"
            :rows="4"
            :is-disabled="true"
          />
          <TextArea
            v-model="error"
            label="Error"
            hint="This is a hint text."
            placeholder="Placeholder"
            :rows="4"
            error-message="This field is required."
          />
        </div>
      </Theme>
    `
  })
}
