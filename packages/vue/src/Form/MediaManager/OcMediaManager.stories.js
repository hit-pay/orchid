import { Theme } from '@/orchidui'
import { MediaManager } from './OcMediaManager.js'
import { ref } from 'vue'

export default {
  component: MediaManager,
  tags: ['autodocs']
}
export const Default = {
  args: {
    accept: '',
    maxSize: 5,
    hint: '',
    label: '',
    errorMessage: '',
    isImageOnly: false,
    columnsCount: 3,
    withLink: false
  },
  render: (args) => ({
    components: { MediaManager, Theme },
    setup() {
      const modelValue = ref([])
      const selectedImage = ref()
      return { modelValue, args, selectedImage }
    },
    template: `
          <Theme class="min-h-[500px]">

            {{ modelValue }}

            <MediaManager
                v-model="modelValue"
                v-model:selectedImage="selectedImage"
                :accept="args.accept"
                :max-size="args.maxSize"
                :hint="args.hint"
                :label="args.label"
                :error-message="args.errorMessage"
                :isImageOnly="args.isImageOnly"
                :columnsCount="args.columnsCount"
                :with-link="args.withLink"
            />
          </Theme>
        `
  })
}
