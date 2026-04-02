import { EmptyPage, Theme } from '@/orchidui-core'

export default {
  component: EmptyPage,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large']
    }
  },
  args: {
    title: 'Title',
    description: 'Description',
    isButton: true,
    isUpgrade: true,
    addButtonLabel: 'Add new',
    upgradeLabel: 'Upgrade now',
    size: 'default'
  },
  render: (args) => ({
    components: { EmptyPage, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <EmptyPage v-bind="args" />
      </Theme>
    `
  })
}
