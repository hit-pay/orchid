import { WhiteList, Button } from '@orchidui/vue'

export default {
  component: WhiteList,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Test',
    description: 'Test'
  },
  render: (args) => ({
    components: { WhiteList, Button },
    setup() {
      return {
        args
      }
    },
    template: `
          <div class="relative h-[500px] flex flex-col gap-y-5 px-10">
            content behind some text to show the overlay effect of the whitelist component
            <Button label="Test Button"/>
            <Button label="Test Button" variant="destructive"/>
            <WhiteList v-bind="args" class="w-full top-0 left-0 h-full absolute"/>
          </div>
        `
  })
}
