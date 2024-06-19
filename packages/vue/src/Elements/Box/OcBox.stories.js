import { Box } from './OcBox.js'

export default {
  component: Box,
  tags: ['autodocs'],
  args: {
    firstBox: {
      title: 'Change password',
      description: 'Last changed on Fri Mar 08 2024 14:43:39 GMT+0700 (Western Indonesia Time)',
      icon: 'key',
      isActive: true
    },
    secondBox: {
      title: 'Setup two-factor authentication',
      description: 'Log in with an authentication code from your phone as well as a password.',
      icon: 'safe-lock',
      isActive: false
    }
  }
}
export const Default = {
  render: (args) => ({
    components: { Box },
    setup() {
      return {
        args
      }
    },
    template: `
          <div class="flex gap-x-4">
            <Box v-bind="args.firstBox"/>
            <Box v-bind="args.secondBox"/>
          </div>
        `
  })
}
