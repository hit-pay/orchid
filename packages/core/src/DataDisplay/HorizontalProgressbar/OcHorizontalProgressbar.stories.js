import { Theme, HorizontalProgressbar } from '@/orchidui-core'

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
    components: { Theme, HorizontalProgressbar },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <HorizontalProgressbar v-bind="args" :label="\`\${args.current} / \${args.max} completed\`" />
      </Theme>
    `
  })
}
