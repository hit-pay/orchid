import { Theme, FloatContent, Button } from '@orchidui/vue-core'
import { ar } from 'date-fns/locale'
import { ref } from 'vue'

export default {
  component: FloatContent,
  tags: ['autodocs']
}

export const overview = {
  name: 'Overview',
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
          onClick: () => console.log('activate/disactivate clicked')
        }
      ]
    }
  },
  render: (args) => ({
    components: { FloatContent, Button, Theme },
    setup() {
      return {
        args,
        isOpen: ref(false)
      }
    },
    template: `
      <Theme class="h-[300px] ">
        <Button @click="isOpen = !isOpen">Open</Button>
        <FloatContent
            v-model="isOpen"
            :title="args.title"
            :description="args.description" 
            :dropdown-options="args.dropdownOptions"
            :position="args.position"
        />
      </Theme>
    `
  })
}
