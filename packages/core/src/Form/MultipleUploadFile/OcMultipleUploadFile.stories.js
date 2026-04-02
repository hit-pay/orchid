import { MultipleUploadFile, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: MultipleUploadFile,
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
    isButtonOnly: true,
    buttonUploadProps: {
      label: 'Upload',
      leftIcon: 'upload'
    }
  },
  render: (args) => ({
    components: { MultipleUploadFile, Theme },
    setup() {
      const modelValue = ref([])
      return { modelValue, args }
    },
    template: `
      <Theme class="min-h-[500px]">
        <MultipleUploadFile v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}

export const MultipleImages = {
  render: () => ({
    components: { MultipleUploadFile, Theme },
    setup() {
      const modelValue = ref([
        {
          current: {
            id: 'image_1',
            path: 'https://hitpay-staging-public.s3.ap-southeast-1.amazonaws.com/covers/small/99d696e564ba45fbaa0fb2e3b43d0e27.jpg',
            caption: 'Image 1'
          }
        }
      ])
      return { modelValue }
    },
    template: `
      <Theme class="min-h-[500px]">
        <MultipleUploadFile
          v-model="modelValue"
          is-image-only
          label="Product Images"
          hint="The optimal product image size is at least 800x800 px. PNG and JPG format is supported."
          :max-images="4"
          :columns-count="3"
          :input-options="['caption', 'link', 'lightbox', 'new_tab']"
        />
      </Theme>
    `
  })
}
