import { Theme, Toggle } from '@orchidui/vue'
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
    disabled: false,
    size: 'default',
    label: 'Label'
  },
  render: (args) => ({
    components: { Toggle, Theme },
    setup() {
      const value = ref(false)
      return {
        value,
        args
      }
    },
    template: `
          <Theme>
            <Toggle
                v-model="value"
                v-bind="args"
            />
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
              <Toggle :model-value="true"/>
              <Toggle :model-value="true" size="small"/>
              <Toggle :model-value="false"/>
              <Toggle size="small" :model-value="false"/>
            </div>
          </Theme>
        `
  })
}
