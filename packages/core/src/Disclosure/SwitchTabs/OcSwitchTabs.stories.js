import { SwitchTabs, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: SwitchTabs,
  tags: ['autodocs']
}

export const Default = {
  args: {
    options: [
      { label: 'Weekly', value: 'weekly' },
      { label: 'Monthly', value: 'monthly' },
      { label: 'Yearly', value: 'annually' }
    ]
  },
  render: (args) => ({
    components: { SwitchTabs, Theme },
    setup() {
      const activeOption = ref('weekly')
      return { args, activeOption }
    },
    template: `
      <Theme>
        <div class="flex items-center justify-center">
          <SwitchTabs v-bind="args" :active-option="activeOption" @select="activeOption = $event" />
        </div>
      </Theme>
    `
  })
}
