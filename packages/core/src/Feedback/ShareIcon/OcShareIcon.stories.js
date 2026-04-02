import { ShareIcon, Theme } from '@/orchidui-core'

export default {
  component: ShareIcon,
  tags: ['autodocs']
}

export const Default = {
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
          <ShareIcon v-bind="args" />
        </div>
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { ShareIcon, Theme },
    template: `
      <Theme>
        <div class="flex gap-4 h-[150px] items-start">
          <ShareIcon icon="whatsapp" text="Whatsapp" />
          <ShareIcon icon="facebook" text="Facebook" />
          <ShareIcon icon="telegram" text="Telegram" />
          <ShareIcon icon="email" text="Email" />
          <ShareIcon icon="tiktok" text="TikTok" />
        </div>
      </Theme>
    `
  })
}
