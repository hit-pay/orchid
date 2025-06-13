import type { Meta, StoryObj } from '@storybook/vue3'
import DataTableDemo from './DataTableDemo.vue'

const meta = {
  title: 'Examples/DataTableDemo',
  component: DataTableDemo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DataTableDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
} 