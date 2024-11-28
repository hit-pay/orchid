import { Theme, CheckboxesGroup } from '@orchidui/vue-core'
import { ref, watch } from 'vue'

export default {
  component: CheckboxesGroup,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    alignment: {
      control: 'select',
      options: ['vertical', 'horizontal']
    }
  },
  args: {
    label: 'Label',
    hint: 'Hint',
    errorMessage: '',
    alignment: 'vertical',
    isDisabled: false,
    isSelectAll: false,
    checkboxes: [
      {
        label: 'Text',
        value: 0
      },
      {
        label: 'Text',
        value: 1
      },
      {
        label: 'Text',
        value: 2,
        isDisabled: true
      }
    ]
  },
  render: (args) => ({
    components: { CheckboxesGroup, Theme },
    setup() {
      const selectedCheckboxes = ref([])
      watch(
        () => args.modelValue,
        (val) => (selectedCheckboxes.value = val)
      )
      return { args, selectedCheckboxes }
    },
    template: `
          <Theme>
            <div class="flex flex-col gap-y-4">
              <CheckboxesGroup
                  v-model="selectedCheckboxes"
                  :checkboxes="args.checkboxes"
                  :label="args.label"
                  :hint="args.hint"
                  :is-disabled="args.isDisabled"
                  :error-message="args.errorMessage"
                  :isSelectAll="args.isSelectAll"
                  :alignment="args.alignment"
              />
              <div class="flex gap-x-2">
                Model value:
                {{ selectedCheckboxes }}
              </div>
            </div>
          </Theme>
        `
  })
}
export const buttonVariants = {
  args: {
    label: 'Label',
    checkboxes: [
      {
        label: 'Text',
        value: 0
      },
      {
        label: 'Text',
        value: 1
      },
      {
        label: 'Text',
        value: 2
      },
      {
        label: 'Text',
        value: 3
      },
      {
        label: 'Text',
        value: 5
      }
    ]
  },
  render: (args) => ({
    components: { CheckboxesGroup, Theme },
    setup() {
      const selectedCheckbox1 = ref([])
      const selectedCheckbox2 = ref([])

      return { selectedCheckbox1, selectedCheckbox2, args }
    },
    template: `
          <Theme>
            <div class="flex flex-col gap-y-4">
              <CheckboxesGroup
                  v-model="selectedCheckbox1"
                  :checkboxes="args.checkboxes"
                  :label="args.label"
                  alignment="vertical"
                  is-button-variant
              />
              <CheckboxesGroup
                  v-model="selectedCheckbox2"
                  :checkboxes="args.checkboxes"
                  :label="args.label"
                  alignment="horizontal"
                  is-button-variant
              />
            </div>
          </Theme>
        `
  })
}
