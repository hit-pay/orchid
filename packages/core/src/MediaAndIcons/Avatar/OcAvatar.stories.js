import { Avatar, Theme } from '@/orchidui-core'

export default {
  component: Avatar,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'business', 'image']
    },
    size: {
      control: 'select',
      options: [24, 32, 40, 48, 64]
    }
  },
  args: {
    size: 32,
    type: 'default'
  },
  render: (args) => ({
    components: { Avatar, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <div class="w-full h-[400px] flex items-center justify-center">
          <Avatar v-bind="args" />
        </div>
      </Theme>
    `
  })
}

export const Sizes = {
  render: () => ({
    components: { Avatar, Theme },
    template: `
      <Theme>
        <div class="w-full flex gap-x-6">
          <div class="flex flex-col gap-y-4">
            <Avatar v-for="size in [64, 48, 40, 32, 24]" :key="size" :size="size" />
          </div>
          <div class="flex flex-col gap-y-4">
            <Avatar v-for="size in [64, 48, 40, 32, 24]" :key="size" :size="size" type="business" />
          </div>
          <div class="flex flex-col gap-y-4">
            <Avatar v-for="size in [64, 48, 40, 32, 24]" :key="size" :size="size" type="image" />
          </div>
        </div>
      </Theme>
    `
  })
}
