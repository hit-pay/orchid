import { WhiteList, Button, Theme } from '@/orchidui-core'

export default {
  component: WhiteList,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Feature Unavailable',
    description: 'This feature is not available for your current plan.'
  },
  render: (args) => ({
    components: { WhiteList, Button, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <div class="relative h-[500px] flex flex-col gap-y-5 px-10">
          content behind some text to show the overlay effect of the whitelist component
          <Button label="Test Button" />
          <Button label="Test Button" variant="destructive" />
          <WhiteList v-bind="args" class="w-full top-0 left-0 h-full absolute" />
        </div>
      </Theme>
    `
  })
}
