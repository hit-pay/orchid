import { CheckboxesGroup, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: CheckboxesGroup,
  tags: ['autodocs']
}

const sampleCheckboxes = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 }
]

export const Default = {
  argTypes: {
    alignment: { control: 'select', options: ['vertical', 'horizontal'] }
  },
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    errorMessage: '',
    alignment: 'vertical',
    isDisabled: false,
    isSelectAll: false,
    checkboxes: sampleCheckboxes
  },
  render: (args) => ({
    components: { CheckboxesGroup, Theme },
    setup() {
      const modelValue = ref([])
      return { modelValue, args }
    },
    template: `
      <Theme>
        <CheckboxesGroup
          v-model="modelValue"
          v-bind="args"
        />
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { CheckboxesGroup, Theme },
    setup() {
      const vertical = ref([])
      const horizontal = ref([])
      const disabledValue = ref([])
      const withError = ref([])
      return { vertical, horizontal, disabledValue, withError }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-6">
          <CheckboxesGroup
            v-model="vertical"
            label="Vertical (default)"
            hint="Select one or more options."
            alignment="vertical"
            :checkboxes="[
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
              { label: 'Option 3', value: 3 }
            ]"
          />
          <CheckboxesGroup
            v-model="horizontal"
            label="Horizontal"
            alignment="horizontal"
            :checkboxes="[
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
              { label: 'Option 3', value: 3 }
            ]"
          />
          <CheckboxesGroup
            v-model="disabledValue"
            label="Disabled"
            :is-disabled="true"
            :checkboxes="[
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
              { label: 'Option 3', value: 3 }
            ]"
          />
          <CheckboxesGroup
            v-model="withError"
            label="With Error"
            error-message="Please select at least one option."
            :checkboxes="[
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
              { label: 'Option 3', value: 3 }
            ]"
          />
        </div>
      </Theme>
    `
  })
}
