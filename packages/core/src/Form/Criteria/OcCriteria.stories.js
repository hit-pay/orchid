import { Criteria, Theme } from '@/orchidui-core'
import { ref } from 'vue'

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
      const modelValue = ref(false)
      return { modelValue, args }
    },
    template: `
      <Theme>
        <Criteria v-model="modelValue" v-bind="args" />
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
          <Criteria label="Not met" :model-value="false" />
          <Criteria label="Met" :model-value="true" />
        </div>
      </Theme>
    `
  })
}
