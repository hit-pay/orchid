import { Theme, Snackbar } from '@orchidui/vue-core'

export default {
  component: Snackbar,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'error', 'warning', 'gray'],
      default: 'default'
    },
    size: {
      control: 'select',
      options: ['small', 'big', 'default'],
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
    isFloating: true,
    position: 'top-center',
    transitionName: 'slide-from-top',
    icon: 'filled-check',
    color: 'default',
    content: 'Changes have been successfully saved',
    description: 'Changes have been successfully saved',
    title: 'Success',
    secondaryButton: {
      label: 'Action'
    },
    primaryButton: {
      label: 'Action'
    },
    dismissible: false
  },
  render: (args) => ({
    components: { Snackbar, Theme },
    setup() {
      return { args }
    },
    template: `
          <Theme colorMode="light" class="h-[300px]">
            <div class="flex flex-col gap-y-4">
              <Snackbar v-bind="args" v-model="args.modelValue"/>
            </div>
          </Theme>
        `
  })
}

export const Variants = {
  args: {
    showIcon: true,
    icon: 'filled-check',
    content: 'Changes have been successfully saved'
  },
  render: (args) => ({
    components: { Snackbar, Theme },
    setup() {
      return { args }
    },
    template: `
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <Snackbar v-bind="args"/>
              <Snackbar v-bind="args" color="primary"/>
              <Snackbar v-bind="args" color="error"/>
              <Snackbar v-bind="args" color="warning"/>
              <Snackbar v-bind="args" color="gray"/>
            </div>
          </Theme>
        `
  })
}

export const BigSize = {
  args: {
    modelValue1: true,
    modelValue2: true,
    modelValue3: true,
    modelValue4: true,
    modelValue5: true,
    showIcon: true,
    icon: 'filled-check',
    title: 'Snackbar title',
    description: 'Changes have been successfully saved',
    dismissible: true,
    size: 'big'
  },
  render: (args) => ({
    components: { Snackbar, Theme },
    setup() {
      return { args }
    },
    template: `
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <Snackbar v-bind="args" v-model="args.modelValue1" />
              <Snackbar v-bind="args" color="primary" v-model="args.modelValue2" />
              <Snackbar v-bind="args" color="error" v-model="args.modelValue3" />
              <Snackbar v-bind="args" color="warning" v-model="args.modelValue4" />
              <Snackbar v-bind="args" color="gray" v-model="args.modelValue5" />
            </div>
          </Theme>
        `
  })
}
