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
