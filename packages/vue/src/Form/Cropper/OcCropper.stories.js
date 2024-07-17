import { Theme } from '@/orchidui'
import { Cropper } from './OcCropper'

export default {
  component: Cropper,
  tags: ['autodocs']
}
export const Default = {
  args: {
    link: '',
    label: '',
    withLink: false,
    img: '/images/image.jpg'
  },
  render: (args) => ({
    components: { Cropper, Theme },
    setup() {
      return { args }
    },
    template: `
          <Theme class="min-h-[500px]">
            <div v-if="args.image" class="mb-6">
              <span class="font-medium">Value:</span>
              <pre class="mb-4">{{args.image}}</pre>
              <img :src="args.image" class="max-w-2xl" />
            </div>
            
            <Cropper
                :withLink="args.withLink"
                :link="args.link"
                :img="args.img"
                :max-size="args.maxSize"
                @change-image="args.image = $event"
                @update:link="args.link = $event"
            />
          </Theme>
        `
  })
}
