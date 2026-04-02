import { EmojiPicker, Theme } from '@/orchidui-core'
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
    components: { EmojiPicker, Theme },
    setup() {
      const modelValue = ref('')
      return { modelValue, args }
    },
    template: `
      <Theme>
        <div class="h-[500px] w-full">
          <EmojiPicker v-model="modelValue" v-bind="args" />
        </div>
      </Theme>
    `
  })
}
