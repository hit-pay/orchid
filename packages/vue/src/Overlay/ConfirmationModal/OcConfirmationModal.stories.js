import { ConfirmationModal, Button } from '@/orchidui'
import { ref } from 'vue'

export default {
  component: ConfirmationModal,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['delete', 'success', 'warning', 'question']
    }
  },
  args: {
    variant: 'delete',
    title: 'Are you sure?',
    description: 'Do you want to delete this payment link? The action can’t be undo.',
    open: false,
    labelConfirm: 'Confirm',
    labelCancel: 'Close',
    isLoading: false
  },
  render: (args) => ({
    components: { ConfirmationModal, Button },
    setup() {
      const handleConfirm = () => {
        args.isLoading = true

        setTimeout(() => (args.isLoading = false), 1000)
      }
      return { args, handleConfirm }
    },
    template: `
          <div class="h-screen">
            <Button @click="args.open = !args.open">Open Confirmation Modal</Button>
            <ConfirmationModal class="!w-full" v-bind="args" v-model="args.open" @confirm="handleConfirm" />
          </div>
        `
  })
}
