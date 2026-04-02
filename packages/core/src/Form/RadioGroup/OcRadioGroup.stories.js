import { RadioGroup, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: RadioGroup,
  tags: ['autodocs']
}

const sampleRadios = [
  { label: 'Text 1', value: '1' },
  { label: 'Text 2', value: '2' },
  { label: 'Text 3', value: '3' },
  { label: 'Text 4', value: '4' },
  { label: 'Is Disabled', value: '5', isDisabled: true }
]

const iconRadios = [
  { label: 'Text', value: 6, icon: 'phone' },
  { label: 'Text', value: 7, icon: 'email' },
  { label: 'Text', value: 8, icon: 'facebook' },
  { label: 'Text', value: 9, icon: 'tiktok' },
  { label: 'Text', value: 10, icon: 'telegram' }
]

const plainRadios = [
  { label: 'Text', value: 6 },
  { label: 'Text', value: 7 },
  { label: 'Text', value: 8 },
  { label: 'Text', value: 9 },
  { label: 'Text', value: 10 }
]

export const Default = {
  argTypes: {
    alignment: {
      control: 'select',
      options: ['vertical', 'horizontal']
    }
  },
  args: {
    alignment: 'vertical',
    label: 'Label',
    hint: 'Hint',
    errorMessage: '',
    radio: sampleRadios
  },
  render: (args) => ({
    components: { RadioGroup, Theme },
    setup() {
      const modelValue = ref()
      return { modelValue, args }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <RadioGroup
            v-model="modelValue"
            v-bind="args"
            group-name="radio-default"
          />
          <div>Model value: "{{ modelValue }}"</div>
        </div>
      </Theme>
    `
  })
}

export const DirectionVariants = {
  render: () => ({
    components: { RadioGroup, Theme },
    setup() {
      const selectedVertical = ref()
      const selectedHorizontal = ref()
      return { selectedVertical, selectedHorizontal, sampleRadios }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <RadioGroup
            v-model="selectedVertical"
            :radio="sampleRadios"
            label="Label"
            group-name="radio-vertical"
            alignment="vertical"
          />
          <RadioGroup
            v-model="selectedHorizontal"
            :radio="sampleRadios"
            label="Label"
            group-name="radio-horizontal"
            alignment="horizontal"
          />
        </div>
      </Theme>
    `
  })
}

export const ButtonVariants = {
  render: () => ({
    components: { RadioGroup, Theme },
    setup() {
      const selectedVertical = ref()
      const selectedHorizontal = ref()
      return { selectedVertical, selectedHorizontal, iconRadios }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <RadioGroup
            v-model="selectedVertical"
            :radio="iconRadios"
            label="Label"
            group-name="radio-btn-vertical"
            alignment="vertical"
            :is-button-variant="true"
          />
          <RadioGroup
            v-model="selectedHorizontal"
            :radio="iconRadios"
            label="Label"
            group-name="radio-btn-horizontal"
            alignment="horizontal"
            :is-button-variant="true"
          />
        </div>
      </Theme>
    `
  })
}

export const ButtonVariantsWithRadio = {
  render: () => ({
    components: { RadioGroup, Theme },
    setup() {
      const selectedVertical = ref()
      const selectedHorizontal = ref()
      return { selectedVertical, selectedHorizontal, plainRadios }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <RadioGroup
            v-model="selectedVertical"
            :radio="plainRadios"
            label="Label"
            group-name="radio-btn-radio-vertical"
            alignment="vertical"
            :is-button-variant="true"
            :is-button-variant-with-radio="true"
          />
          <RadioGroup
            v-model="selectedHorizontal"
            :radio="plainRadios"
            label="Label"
            group-name="radio-btn-radio-horizontal"
            alignment="horizontal"
            :is-button-variant="true"
            :is-button-variant-with-radio="true"
          />
        </div>
      </Theme>
    `
  })
}
