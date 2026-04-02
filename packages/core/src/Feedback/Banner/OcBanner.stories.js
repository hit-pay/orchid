import { Banner, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Banner,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'error', 'warning', 'gray']
    },
    icon: {
      control: 'select',
      options: ['filled-check', 'circle', 'plus', 'x']
    }
  },
  args: {
    color: 'default',
    icon: 'filled-check',
    title: 'Title',
    content: 'Changes have been successfully saved',
    showIcon: true,
    dismissible: true,
    transitionName: 'slide-from-top'
  },
  render: (args) => ({
    components: { Banner, Theme },
    setup() {
      const modelValue = ref(true)
      return { modelValue, args }
    },
    template: `
      <Theme class="h-[300px]">
        <Banner v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { Banner, Theme },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <Banner :model-value="true" title="Title" content="Changes have been successfully saved" show-icon icon="filled-check" />
          <Banner :model-value="true" color="primary" title="Title" content="Changes have been successfully saved" show-icon icon="filled-check" />
          <Banner :model-value="true" color="error" title="Title" content="Changes have been successfully saved" show-icon icon="filled-check" />
          <Banner :model-value="true" color="warning" title="Title" content="Changes have been successfully saved" show-icon icon="filled-check" />
          <Banner :model-value="true" color="gray" title="Title" content="Changes have been successfully saved" show-icon icon="filled-check" />
        </div>
      </Theme>
    `
  })
}
