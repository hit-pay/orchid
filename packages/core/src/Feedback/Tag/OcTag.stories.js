import { Tag, Theme } from '@/orchidui-core'

export default {
  component: Tag,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['warning', 'primary', 'success', 'error', 'gray']
    }
  },
  args: {
    label: 'BETA',
    variant: 'warning'
  },
  render: (args) => ({
    components: { Tag, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <Tag v-bind="args" />
      </Theme>
    `
  })
}
