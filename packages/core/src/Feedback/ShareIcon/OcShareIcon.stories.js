import { Theme, ShareIcon } from '@/orchidui-core'

export default {
  component: ShareIcon,
  tags: ['autodocs']
}

export const VariantColor = {
  args: {
    text: 'Whatsapp',
    icon: 'whatsapp',
    isOnlyIcon: true,
    tooltipOptions: {
      position: 'bottom',
      distance: 9
    }
  },
  render: (args) => ({
    components: { ShareIcon, Theme },
    setup() {
      return { args }
    },
    template: `
          <Theme>
            <div class="h-[150px]">
              <ShareIcon v-bind="args"/>
            </div>
          </Theme>
        `
  })
}
