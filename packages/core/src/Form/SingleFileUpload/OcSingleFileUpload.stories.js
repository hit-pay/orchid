import { SingleFileUpload, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: SingleFileUpload,
  tags: ['autodocs']
}

export const Default = {
  args: {
    accept: '.png',
    isPreview: false,
    isImageOnly: false,
    maxSize: 5,
    label: '',
    hint: '',
    errorMessage: '',
    isButtonOnly: true,
    buttonUploadProps: {
      label: 'Upload',
      leftIcon: 'upload'
    }
  },
  render: (args) => ({
    components: { SingleFileUpload, Theme },
    setup() {
      const modelValue = ref()
      return { modelValue, args }
    },
    template: `
      <Theme>
        <SingleFileUpload v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}

export const ImageOnly = {
  render: () => ({
    components: { SingleFileUpload, Theme },
    setup() {
      const modelValue = ref()
      return { modelValue }
    },
    template: `
      <Theme>
        <SingleFileUpload
          v-model="modelValue"
          is-image-only
          show-upload-image-area
        />
      </Theme>
    `
  })
}

export const UrlVariant = {
  render: () => ({
    components: { SingleFileUpload, Theme },
    template: `
      <Theme>
        <SingleFileUpload variant="url" />
      </Theme>
    `
  })
}
