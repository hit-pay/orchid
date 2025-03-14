import { Theme, Toggle } from '@/orchidui-core'
import MultipleUploadFile from './OcMultipleUploadFile.vue'
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
      const selectedImage = ref()
      return { modelValue, args, selectedImage }
    },
    template: `
          <Theme class="min-h-[500px]">

            {{ modelValue }}

            <MultipleUploadFile
                v-model="modelValue"
                v-model:selectedImage="selectedImage"
                :accept="args.accept"
                :max-size="args.maxSize"
                :hint="args.hint"
                :label="args.label"
                :error-message="args.errorMessage"
                :isImageOnly="args.isImageOnly"
                :columnsCount="args.columnsCount"
                :input-options="['link']"
                :is-button-only="args.isButtonOnly"
                :button-upload-props="args.buttonUploadProps"
            />
          </Theme>
        `
  })
}

export const Files = {
  render: (args) => ({
    components: { MultipleUploadFile, Theme, Toggle },
    setup() {
      const modelValue = ref([])
      const isDisabled = ref(false)
      return { modelValue, isDisabled }
    },
    template: `
      <Theme class="min-h-[500px]">
        {{ modelValue }}
        
        <br />

        <Toggle
            v-model="isDisabled"
            label="Disable"
            class="mt-7"
        />

        <MultipleUploadFile
            v-model="modelValue"
            :max-size="10"
            label="File uploader"
            class="mt-5"
            :is-disabled="isDisabled"
        />
      </Theme>
        `
  })
}

export const MultipleImages = {
  args: {
    accept: '',
    maxImages: 4,
    hint: 'The optimal product image size is at least 800x800 px. PNG and JPG format is supported.',
    label: 'label example',
    errorMessage: '',
    isImageOnly: false,
    columnsCount: 3
  },
  render: (args) => ({
    components: { MultipleUploadFile, Theme },
    setup() {
      const modelValue = ref([
        {
          current: {
            id: 'image_1',
            path: 'https://hitpay-staging-public.s3.ap-southeast-1.amazonaws.com/covers/small/99d696e564ba45fbaa0fb2e3b43d0e27.jpg',
            caption: 'Image 1',
            link: 'https://test-link.com'
          }
        },
        // {
        //   current: {
        //     id: 'image_2',
        //     path: 'https://hitpay-staging-public.s3.ap-southeast-1.amazonaws.com/products/small/99a6b905ea094d48bde25dc0c0eaa840.jpg',
        //     caption: 'Image 2'
        //   }
        // }
      ])
      const selectedImage = ref()
      const onRemoveFile = (currentFile) => {
        console.log('removed ', currentFile.current)
      }
      const onEditFile = (currentFile) => {
        console.log('edited', currentFile.current)
      }
      return { modelValue, args, selectedImage, onRemoveFile, onEditFile }
    },
    template: `
      <Theme class="min-h-[500px]">
      <pre>
      {{ modelValue }}</pre>
        <MultipleUploadFile
            v-model="modelValue"
            v-model:selectedImage="selectedImage"
            :accept="args.accept"
            :hint="args.hint"
            :maxImages="args.maxImages"
            :label="args.label"
            :important="true"
            :error-message="args.errorMessage"
            is-image-only
            :columnsCount="args.columnsCount"
            @onEditFile="onEditFile"
            @onRemoveFile="onRemoveFile"
        >
        </MultipleUploadFile>
      </Theme>
    `
  })
}
