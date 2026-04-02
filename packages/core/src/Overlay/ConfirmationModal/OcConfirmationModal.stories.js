import { ConfirmationModal, Button, Theme } from '@/orchidui-core'
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
    description: 'Do you want to delete this item? This action cannot be undone.',
    labelConfirm: 'Confirm',
    labelCancel: 'Cancel',
    isLoading: false
  },
  render: (args) => ({
    components: { ConfirmationModal, Button, Theme },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Theme>
        <div class="h-screen">
          <Button label="Open Confirmation" @click="isOpen = true" />

          <ConfirmationModal v-model="isOpen" v-bind="args" />
        </div>
      </Theme>
    `
  })
}
