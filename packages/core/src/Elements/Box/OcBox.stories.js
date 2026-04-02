import { Box, Theme } from '@/orchidui-core'

export default {
  component: Box,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Change password',
    description: 'Last changed on Fri Mar 08 2024 14:43:39 GMT+0700 (Western Indonesia Time)',
    icon: 'key',
    isActive: true
  },
  render: (args) => ({
    components: { Box, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <Box v-bind="args" />
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { Box, Theme },
    template: `
      <Theme>
        <div class="flex gap-x-4">
          <Box
            title="Change password"
            description="Last changed on Fri Mar 08 2024 14:43:39 GMT+0700 (Western Indonesia Time)"
            icon="key"
            :is-active="true"
          />
          <Box
            title="Setup two-factor authentication"
            description="Log in with an authentication code from your phone as well as a password."
            icon="safe-lock"
            :is-active="false"
          />
        </div>
      </Theme>
    `
  })
}
