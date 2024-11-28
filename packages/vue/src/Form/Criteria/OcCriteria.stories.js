import { Criteria, Theme } from '@orchidui/vue'

export default {
  component: Criteria,
  tags: ['autodocs']
}

export const Default = {
  args: {
    modelValue: false,
    label: 'Text'
  },
  render: (args) => ({
    components: { Criteria, Theme },
    setup() {
      return { args }
    },
    template: `
          <Theme>
            <Criteria
                :model-value="args.modelValue"
                :label="args.label"
            />
          </Theme>
        `
  })
}
export const Variants = {
  render: () => ({
    components: { Criteria, Theme },
    template: `
          <Theme>
            <div class="flex flex-col w-fit gap-6">
              <Criteria label="Text" :model-value="false"/>
              <Criteria label="Text" :model-value="true"/>
            </div>
          </Theme>
        `
  })
}
