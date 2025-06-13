import type { Meta, StoryObj } from '@storybook/vue3'
import DataTableReactiveDemo from './DataTableReactiveDemo.vue'

const meta = {
  title: 'Examples/DataTableReactiveDemo',
  component: DataTableReactiveDemo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DataTableReactiveDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithInitialData: Story = {
  args: {
    initialData: [
      {
        id: 'm5gr84i9',
        amount: 316,
        status: 'success',
        email: 'ken99@yahoo.com',
      },
      {
        id: '3u1reuv4',
        amount: 242,
        status: 'success',
        email: 'Abe45@gmail.com',
      },
    ],
  },
} 