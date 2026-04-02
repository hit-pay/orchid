import { Snackbar, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Snackbar,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'error', 'warning', 'gray']
    },
    size: {
      control: 'select',
      options: ['default', 'small', 'big']
    },
    icon: {
      control: 'select',
      options: ['filled-check', 'circle', 'plus', 'x']
    }
  },
  args: {
    color: 'default',
    size: 'default',
    icon: 'filled-check',
    title: 'Success',
    content: 'Changes have been successfully saved',
    description: 'Changes have been successfully saved',
    showIcon: true,
    isFloating: true,
    position: 'top-center',
    transitionName: 'slide-from-top',
    dismissible: false,
    secondaryButton: { label: 'Action' },
    primaryButton: { label: 'Action' }
  },
  render: (args) => ({
    components: { Snackbar, Theme },
    setup() {
      const modelValue = ref(true)
      return { modelValue, args }
    },
    template: `
      <Theme class="h-[300px]">
        <Snackbar v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { Snackbar, Theme },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <Snackbar :model-value="true" show-icon icon="filled-check" content="Changes have been successfully saved" />
          <Snackbar :model-value="true" color="primary" show-icon icon="filled-check" content="Changes have been successfully saved" />
          <Snackbar :model-value="true" color="error" show-icon icon="filled-check" content="Changes have been successfully saved" />
          <Snackbar :model-value="true" color="warning" show-icon icon="filled-check" content="Changes have been successfully saved" />
          <Snackbar :model-value="true" color="gray" show-icon icon="filled-check" content="Changes have been successfully saved" />
        </div>
      </Theme>
    `
  })
}

export const BigSize = {
  render: () => ({
    components: { Snackbar, Theme },
    setup() {
      const visible1 = ref(true)
      const visible2 = ref(true)
      const visible3 = ref(true)
      const visible4 = ref(true)
      const visible5 = ref(true)
      return { visible1, visible2, visible3, visible4, visible5 }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <Snackbar v-model="visible1" size="big" show-icon icon="filled-check" title="Snackbar title" description="Changes have been successfully saved" dismissible />
          <Snackbar v-model="visible2" size="big" color="primary" show-icon icon="filled-check" title="Snackbar title" description="Changes have been successfully saved" dismissible />
          <Snackbar v-model="visible3" size="big" color="error" show-icon icon="filled-check" title="Snackbar title" description="Changes have been successfully saved" dismissible />
          <Snackbar v-model="visible4" size="big" color="warning" show-icon icon="filled-check" title="Snackbar title" description="Changes have been successfully saved" dismissible />
          <Snackbar v-model="visible5" size="big" color="gray" show-icon icon="filled-check" title="Snackbar title" description="Changes have been successfully saved" dismissible />
        </div>
      </Theme>
    `
  })
}
