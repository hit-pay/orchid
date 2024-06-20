import EmojiPicker from './OcEmojiPicker.vue'
import { ref } from 'vue'

export default {
  component: EmojiPicker,
  tags: ['autodocs']
}

export const Default = {
  args: {
    isDisabled: false,
    popperOptions: {}
  },
  render: (args) => ({
    components: { EmojiPicker },
    setup() {
      const value = ref()
      return {
        value,
        args
      }
    },
    template: `
          <div class="h-[500px] w-full">
            <EmojiPicker v-model="value" v-bind="args" />
          </div>
        `
  })
}
