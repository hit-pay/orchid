import { HorizontalProgressbar } from '@/orchidui'

export default {
  component: HorizontalProgressbar,
  tags: ['autodocs']
}

export const Default = {
  args: {
    max: 5,
    current: 3
  },
  render: (args) => ({
    components: { HorizontalProgressbar },
    setup() {
      return { args }
    },
    template: `
          <HorizontalProgressbar v-bind="args" :label="\`${args.current} / ${args.max} completed\`"/>
        `
  })
}
