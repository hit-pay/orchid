import { TableCell } from '@/orchidui-core'

export default {
  component: TableCell,
  tags: ['autodocs']
}
export const Default = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['content', 'checkbox', 'chip', 'datetime', 'icon', 'image', 'empty']
    }
  },
  args: {
    variant: 'content',
    isSelected: false,
    isSimple: true,
    isLast: false,
    isCopy: false,
    data: '',
    isLoading: false,
    chipOptions: {},
    content: {
      title: '',
      description: ''
    },
    datetime: '',
    imageClass: 'h-full'
  },

  render: (args) => ({
    components: { TableCell },
    setup() {
      return { args }
    },
    template: `
          <div class="flex group/row">
            <TableCell class="flex-1" v-bind="args" variant="content"
                       :content="{title: 'title', description: 'description'}"/>
            <TableCell class="flex-1" v-bind="args" variant="datetime" :data="new Date()"/>
            <TableCell class="flex-1" v-bind="args" variant="content"
                       :content="{title: 'title', description: 'description'}" isCopy/>
            <TableCell class="flex-1" v-bind="args">Default slot</TableCell>
            <TableCell class="flex-1" v-bind="args" isLoading/>
            <TableCell class="flex-1" v-bind="args" variant="icon" data="x"/>
            <TableCell class="flex-1" v-bind="args" variant="image"/>
            <TableCell class="flex-1" v-bind="args" variant="chip" data="label" :chipOptions="{ label: 'primary'}"/>
            <TableCell class="flex-1" v-bind="args" variant="checkbox"/>
            <TableCell class="flex-1" v-bind="args" variant="empty"/>
          </div>
        `
  })
}
