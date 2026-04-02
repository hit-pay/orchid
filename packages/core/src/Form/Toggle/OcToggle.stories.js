import { Toggle, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Toggle,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small']
    }
  },
  args: {
    size: 'default',
    disabled: false,
    label: 'Label'
  },
  render: (args) => ({
    components: { Toggle, Theme },
    setup() {
      const modelValue = ref(false)
      return { modelValue, args }
    },
    template: `
      <Theme>
        <Toggle v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { Toggle, Theme },
    template: `
      <Theme>
        <div class="grid grid-cols-2 w-fit items-center gap-6">
          <Toggle :model-value="true" />
          <Toggle :model-value="true" size="small" />
          <Toggle :model-value="false" />
          <Toggle :model-value="false" size="small" />
        </div>
      </Theme>
    `
  })
}
