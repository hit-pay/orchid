import { Theme, FloatContent, Button } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: FloatContent,
  tags: ['autodocs'],
  kind: 'composite',
  use_for: [
    'side panel',
    'detail drawer',
    'edit panel',
    'sliding panel overlay',
    'customer detail side view'
  ],
  understand_with: ['FormBuilder', 'Button', 'ListDetail', 'Modal']
}

export const Default = {
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right']
    }
  },
  args: {
    position: 'right',
    title: 'Transaction detail',
    description: '#9a2804fc-74df-4304-a7d7-79d11f9e1db8',
    dropdownOptions: {
      top: [
        {
          icon: 'pencil',
          text: 'Edit',
          onClick: () => console.log('edit clicked')
        },
        {
          icon: 'eye-open',
          text: 'View details',
          onClick: () => console.log('view details clicked')
        }
      ],
      bottom: [
        {
          text: 'Delete',
          icon: 'bin',
          iconClasses: '!text-oc-error',
          onClick: () => console.log('delete clicked')
        }
      ]
    }
  },
  render: (args) => ({
    components: { Theme, FloatContent, Button },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Theme class="h-[300px]">
        <Button @click="isOpen = !isOpen">Open</Button>
        <FloatContent
          v-model="isOpen"
          v-bind="args"
        />
      </Theme>
    `
  })
}

// Regression: consumers size/offset the panel with `!right-[16px] w-[566px]`. When closed,
// the panel must stay hidden and must not block clicks on the page underneath.
export const WithConsumerOffsetClasses = {
  args: {
    position: 'right',
    title: 'Transaction detail',
    description: '#9a2804fc-74df-4304-a7d7-79d11f9e1db8'
  },
  argTypes: Default.argTypes,
  render: (args) => ({
    components: { Theme, FloatContent, Button },
    setup() {
      const isOpen = ref(false)
      const clicks = ref(0)
      return { args, isOpen, clicks }
    },
    template: `
      <Theme class="h-[300px]">
        <div class="flex gap-3 items-center">
          <Button @click="isOpen = !isOpen">Toggle</Button>
          <Button variant="secondary" @click="clicks++">Page button ({{ clicks }})</Button>
        </div>
        <FloatContent
          v-model="isOpen"
          v-bind="args"
          class="top-[16px] !h-[calc(100%-32px)] !right-[16px] !left-auto w-[566px]"
          :class="{ '!left-[16px] !right-auto': args.position === 'left' }"
        />
      </Theme>
    `
  })
}
