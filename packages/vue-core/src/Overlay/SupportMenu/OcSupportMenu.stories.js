import { Theme, SupportMenu } from '@orchidui/vue-core'
import { ref } from 'vue'

export default {
  component: SupportMenu,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: undefined,
    info: undefined,
    confirmButtonProps: undefined,
    isPointed: true,
    topMenu: [
      {
        title: 'support',
        items: [
          {
            text: 'Whatsapp',
            icon: 'whatsapp-colored'
          },
          {
            text: 'Email Us',
            icon: 'email'
          },
          {
            text: 'Record a Bug',
            icon: 'bug'
          }
        ]
      },
      {
        title: 'Resources',
        items: [
          {
            text: 'User Guides',
            icon: 'document'
          },
          {
            text: 'Blog',
            icon: 'news'
          }
        ]
      }
    ],
    bottomMenu: [
      {
        text: 'What’s new',
        icon: 'sparkle-2',
        pointed: true
      },
      {
        text: 'Feedback',
        icon: 'chat-2'
      },
      {
        text: 'Changelog',
        icon: 'list-check'
      }
    ]
  },
  argTypes: {},
  render: (args) => ({
    components: { SupportMenu, Theme },
    setup() {
      const modelValue = ref(false)
      return { args, modelValue }
    },
    template: `
          <Theme class="h-[450px] w-full">
            <SupportMenu v-model="modelValue" :confirmButtonProps="args.confirmButtonProps"
                         :title="args.title" :info="args.info" :topMenu="args.topMenu" :bottomMenu="args.bottomMenu" :is-pointed="args.isPointed"/>
          </Theme>
        `
  })
}
