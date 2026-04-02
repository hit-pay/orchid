import { SupportMenu, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: SupportMenu,
  tags: ['autodocs']
}

export const Default = {
  args: {
    topMenu: [
      {
        title: 'Support',
        items: [
          { text: 'Whatsapp', icon: 'whatsapp-colored' },
          { text: 'Email Us', icon: 'email' },
          { text: 'Record a Bug', icon: 'bug' }
        ]
      },
      {
        title: 'Resources',
        items: [
          { text: 'User Guides', icon: 'document' },
          { text: 'Blog', icon: 'news' }
        ]
      }
    ],
    bottomMenu: [
      { text: "What's new", icon: 'sparkle-2', pointed: true },
      { text: 'Feedback', icon: 'chat-2' },
      { text: 'Changelog', icon: 'list-check' }
    ]
  },
  render: (args) => ({
    components: { SupportMenu, Theme },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Theme class="h-[450px] w-full">
        <SupportMenu v-model="isOpen" v-bind="args" />
      </Theme>
    `
  })
}
