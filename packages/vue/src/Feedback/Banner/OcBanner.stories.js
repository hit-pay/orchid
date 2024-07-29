import { Theme, Banner } from '@/orchidui'

export default {
  component: Banner,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'error', 'warning', 'gray'],
      default: 'default'
    },
    icon: {
      control: 'select',
      options: ['filled-check', 'circle', 'plus', 'x'],
      default: 'filled-check'
    }
  },
  args: {
    modelValue: true,
    showIcon: true,
    transitionName: 'slide-from-top',
    icon: 'filled-check',
    color: 'default',
    content: 'Changes have been successfully saved',
    title: 'Title',
    dismissible: true
  },
  render: (args) => ({
    components: { Banner, Theme },
    setup() {
      return { args }
    },
    template: `
          <Theme colorMode="light" class="h-[300px]">
            <div class="flex flex-col gap-y-4">
              <Banner v-bind="args" v-model="args.modelValue"/>
            </div>
          </Theme>
        `
  })
}

export const Variants = {
  args: {
    showIcon: true,
    icon: 'filled-check',
    content: 'Changes have been successfully saved',
    title: 'Title'
  },
  render: (args) => ({
    components: { Banner, Theme },
    setup() {
      return { args }
    },
    template: `
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <Banner v-bind="args"/>
              <Banner v-bind="args" color="primary"/>
              <Banner v-bind="args" color="error"/>
              <Banner v-bind="args" color="warning"/>
              <Banner v-bind="args" color="gray"/>
            </div>
          </Theme>
        `
  })
}
