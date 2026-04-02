import { Icon, Theme } from '@/orchidui-core'

export default {
  component: Icon,
  tags: ['autodocs']
}

export const Default = {
  args: {
    name: 'flags/SG',
    width: '22',
    height: '16'
  },
  render: (args) => ({
    components: { Icon, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <div class="w-full h-[400px] flex items-center justify-center">
          <Icon v-bind="args" />
        </div>
      </Theme>
    `
  })
}
