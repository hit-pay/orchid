import { Cropper, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Cropper,
  tags: ['autodocs']
}

export const Default = {
  args: {
    label: '',
    img: '/images/image.jpg',
    isReplaceImage: true
  },
  render: (args) => ({
    components: { Cropper, Theme },
    setup() {
      const inputOptionValues = ref({
        caption: '',
        caption_variant: 'hover'
      })
      return { inputOptionValues, args }
    },
    template: `
      <Theme class="min-h-[500px]">
        <Cropper
          v-bind="args"
          :input-options="['description', 'link', 'caption', 'lightbox', 'new_tab']"
          :input-option-values="inputOptionValues"
          @update:input-options="inputOptionValues = $event"
        />
      </Theme>
    `
  })
}
