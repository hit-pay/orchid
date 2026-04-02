import { Radio, Theme } from '@/orchidui-core'

export default {
  component: Radio,
  tags: ['autodocs']
}

export const Default = {
  args: {
    modelValue: false,
    label: 'Text',
    hint: 'Text',
    errorMessage: '',
    tooltipText: 'Tooltip text',
    labelIcon: 'information',
    isDisabled: false
  },
  render: (args) => ({
    components: { Radio, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <Radio v-bind="args" />
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { Radio, Theme },
    template: `
      <Theme>
        <div class="grid grid-cols-3 w-fit gap-6">
          <Radio :model-value="true" />
          <Radio :model-value="false" />
          <Radio :model-value="false" error-message="Error" />
          <Radio :model-value="true" is-disabled />
          <Radio :model-value="false" is-disabled />
        </div>
      </Theme>
    `
  })
}

export const LabelVariants = {
  render: () => ({
    components: { Radio, Theme },
    template: `
      <Theme>
        <div class="flex flex-col w-fit gap-6">
          <Radio model-value="1" label="Text" />
          <Radio model-value="2" label="Text" />
          <Radio model-value="3" label="Text" is-disabled />
          <Radio model-value="4" label="Text" is-disabled />
          <Radio model-value="5" label="Text" error-message="Error" />
        </div>
      </Theme>
    `
  })
}

export const ButtonVariants = {
  render: () => ({
    components: { Radio, Theme },
    template: `
      <Theme>
        <div class="flex flex-col w-fit gap-6">
          <Radio model-value="1" :is-button-variant="true" label="Text" />
          <Radio model-value="2" :is-button-variant="true" icon="tiktok" label="Text" />
          <Radio model-value="3" :is-button-variant="true" is-disabled label="Text" />
          <Radio model-value="4" :is-button-variant="true" icon="facebook" is-disabled label="Text" />
          <Radio model-value="5" :is-button-variant="true" icon="email" error-message="Error" label="Text" />
        </div>
      </Theme>
    `
  })
}
