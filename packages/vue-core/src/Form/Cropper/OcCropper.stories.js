import { Theme } from '@orchidui/vue-core'
import { Cropper } from './OcCropper'

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
      let modelValueOptions = ref({
        caption: 'hello',
        caption_variant: 'hover'
      })
      return { args, modelValueOptions }
    },
    template: `
          <Theme class="min-h-[500px]">
            <div v-if="args.image" class="mb-6">
              <span class="font-medium">Value:</span>
              <pre class="mb-4">{{args.image}}</pre>
              <img :src="args.image" class="max-w-2xl" />
            </div>
            
            {{ modelValueOptions }}
            <Cropper
                :img="args.img"
                :max-size="args.maxSize"
                :is-replace-image="args.isReplaceImage"


                :input-options="['description','link','caption','lightbox']"
                :input-option-values="modelValueOptions"
                
                @change-image="args.image = $event"
                @update:input-options="modelValueOptions = $event"
            />
          </Theme>
        `
  })
}
