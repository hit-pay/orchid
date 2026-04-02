import { Variants, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Variants,
  tags: ['autodocs']
}

export const Default = {
  args: {
    variants: [
      { label: 'Business', value: 'business', icon: 'user' },
      { label: 'Sole Proprietor', value: 'sole', icon: 'user' },
      { label: 'Individual', value: 'individual', icon: 'user', isDisabled: true }
    ]
  },
  render: (args) => ({
    components: { Variants, Theme },
    setup() {
      const value = ref('business')
      return { args, value }
    },
    template: `
      <Theme>
        <Variants v-model="value" v-bind="args">
          <template #business-description>
            <span class="text-oc-text-400 text-sm">Single-owner businesses without a legal distinction between the owner and the business</span>
          </template>
        </Variants>
      </Theme>
    `
  })
}
