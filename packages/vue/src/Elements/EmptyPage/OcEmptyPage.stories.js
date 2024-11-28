import { Theme, EmptyPage } from '@orchidui/vue'

export default {
  component: EmptyPage,
  tags: ['autodocs']
}

export const emptyPage = {
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
    size: undefined
  },
  render: (args) => ({
    components: {
      Theme,
      EmptyPage
    },
    setup() {
      return { args }
    },
    template: `
          <Theme>
            <EmptyPage v-bind="args"/>
          </Theme>
        `
  })
}
