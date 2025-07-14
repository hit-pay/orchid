import SandboxBanner from './OcSandboxBanner.vue'

export default {
  component: SandboxBanner,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'You are using test data. Real money won’t be charged',
    chipProps: {
      label: 'Sandbox Banner',
      variant: 'light-red'
    },
    buttonProps: {
      label: 'Read our docs',
      isTransparent: true,
      rightIcon: 'arrow-right',
      class: '[&>button]:!text-white !underline underline-offset-2',
    }
  },
  render: (args) => ({
    components: {
      SandboxBanner
    },
    setup() {
      return { args }
    },
    template: `
          <SandboxBanner :title="args.title" :chipProps="args.chipProps" :button-props="args.buttonProps" />
        `
  })
}
