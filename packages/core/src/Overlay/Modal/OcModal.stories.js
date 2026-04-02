import { Modal, Button, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Modal,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'default']
    }
  },
  args: {
    title: 'Modal Title',
    description: 'Modal Description',
    isCloseIcon: true,
    cancelButtonProps: {
      label: 'Cancel',
      variant: 'secondary'
    },
    confirmButtonProps: {
      label: 'OK'
    },
    size: 'medium'
  },
  render: (args) => ({
    components: { Modal, Button, Theme },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Theme>
        <div class="h-[500px]">
          <Button label="Open Modal" @click="isOpen = true" />

          <Modal v-model="isOpen" v-bind="args">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae?
          </Modal>
        </div>
      </Theme>
    `
  })
}
