import { AuthenticationOption } from './AuthenticationOption.js'

export default {
  component: AuthenticationOption,
  tags: ['autodocs']
}

export const Default = {
  args: {
    firstOption: {
      title: 'Google Authenticator',
      icon: 'google-authenticator',
      isActive: false,
      chipProps: {
        label: 'Recommended'
      }
    },
    secondOption: {
      title: 'SMS delivery',
      icon: 'cellphone',
      iconClass: 'text-oc-text-400',
      isActive: true
    }
  },
  render: (args) => ({
    components: { AuthenticationOption },

    setup() {
      return {
        args
      }
    },
    template: `
          <div class="flex gap-x-4">
            <AuthenticationOption class="w-full" v-bind="args.firstOption"/>
            <AuthenticationOption class="w-full" v-bind="args.secondOption"/>
          </div>
        `
  })
}
