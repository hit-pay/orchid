import { SingleFileUpload } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: SingleFileUpload,
  tags: ['autodocs']
}

export const Default = {
  description: 'Drag-and-drop file upload area. Shows file name + progress bar after selection. Emits update:modelValue with the file object.',
  highlights: ['v-model — file object', 'accept — allowed extensions or MIME types (e.g. ".pdf,.png")', 'maxSize — MB limit; triggers onExceedMaxFileSize event', 'onRemoveFile event — file was deleted'],
  code: `<script setup>
import { ref } from 'vue'
import { SingleFileUpload } from '@orchidui/core'

const file = ref(null)
</script>

<template>
  <SingleFileUpload
    v-model="file"
    label="Attachment"
    hint="PDF, PNG, or JPG up to 5 MB."
    accept=".pdf,.png,.jpg"
    :max-size="5"
    @on-exceed-max-file-size="alert('File exceeds 5 MB')"
    @on-remove-file="file = null"
  />
</template>`,
  render: () => ({
    components: { SingleFileUpload },
    setup() {
      const file = ref(null)
      return { file }
    },
    template: `
      <div class="p-6 w-[400px]">
        <SingleFileUpload v-model="file" label="Attachment" hint="PDF, PNG, or JPG up to 5 MB." accept=".pdf,.png,.jpg" :max-size="5" />
      </div>
    `
  })
}

export const ImageOnly = {
  description: 'Compact image-only upload. Shows a square preview area with edit/delete overlay. Ideal for avatars and cover photos.',
  highlights: ['is-image-only — image-specific UI', 'show-upload-image-area — visible upload zone', 'allow-to-edit — shows crop button on hover'],
  code: `<script setup>
import { ref } from 'vue'
import { SingleFileUpload } from '@orchidui/core'

const image = ref(null)
</script>

<template>
  <SingleFileUpload
    v-model="image"
    label="Profile photo"
    hint="JPG or PNG. Recommended: 400×400px."
    accept="image/*"
    :max-size="2"
    is-image-only
    show-upload-image-area
    :allow-to-edit="true"
  />
</template>`,
  render: () => ({
    components: { SingleFileUpload },
    setup() {
      const image = ref(null)
      return { image }
    },
    template: `
      <div class="p-6 w-[200px]">
        <SingleFileUpload v-model="image" label="Profile photo" accept="image/*" is-image-only show-upload-image-area />
      </div>
    `
  })
}

export const ButtonOnly = {
  description: 'Renders just an upload button — no drag area. Useful when the upload action is one step in a larger form.',
  highlights: ['is-button-only — button only, no drag area', 'buttonUploadProps — Button component props', 'accept — file type filter'],
  code: `<script setup>
import { ref } from 'vue'
import { SingleFileUpload } from '@orchidui/core'

const file = ref(null)
</script>

<template>
  <SingleFileUpload
    v-model="file"
    is-button-only
    accept=".csv"
    :button-upload-props="{
      label: 'Import CSV',
      leftIcon: 'upload',
      variant: 'secondary'
    }"
  />
</template>`,
  render: () => ({
    components: { SingleFileUpload },
    setup() {
      const file = ref(null)
      return { file }
    },
    template: `
      <div class="p-6">
        <SingleFileUpload v-model="file" is-button-only accept=".csv" :button-upload-props="{ label: 'Import CSV', leftIcon: 'upload', variant: 'secondary' }" />
      </div>
    `
  })
}

export const WithError = {
  description: 'Pass errorMessage to show validation errors below the upload area.',
  highlights: ['errorMessage prop', 'showErrorStyleOnly — show red border without the message text'],
  code: `<script setup>
import { ref } from 'vue'
import { SingleFileUpload } from '@orchidui/core'

const file  = ref(null)
const error = ref('A file is required to continue.')
</script>

<template>
  <SingleFileUpload
    v-model="file"
    label="Contract"
    accept=".pdf"
    :error-message="error"
    @update:model-value="error = ''"
  />
</template>`,
  render: () => ({
    components: { SingleFileUpload },
    setup() {
      const file  = ref(null)
      const error = ref('A file is required to continue.')
      return { file, error }
    },
    template: `
      <div class="p-6 w-[400px]">
        <SingleFileUpload v-model="file" label="Contract" accept=".pdf" :error-message="error" @update:model-value="error = ''" />
      </div>
    `
  })
}
