import { SingleFileUpload, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: SingleFileUpload,
  tags: ['autodocs'],
  kind: 'leaf',
  use_for: [
    'file upload field',
    'image upload with preview',
    'document attachment in form',
    'avatar or logo upload',
    'CSV import button'
  ],
  parameters: {
    docs: {
      description: {
        component: `
SingleFileUpload is a drag-and-drop file input that supports image preview, button-only mode, file size validation, and error display.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | Object | — | v-model — the uploaded file object \`{ fileName, fileLink }\` or array |
| \`format\` | String | \`'array'\` | Return format: \`'array'\` or \`'object'\` |
| \`label\` | String | — | Field label shown above the upload area |
| \`labelClass\` | String | — | CSS class applied to the label |
| \`hint\` | String | — | Helper text shown below the label |
| \`accept\` | String | — | Allowed file types — passed to the file input (e.g. \`".pdf,.png"\`, \`"image/*"\`) |
| \`maxSize\` | Number | — | Maximum file size in MB. Triggers \`onExceedMaxFileSize\` if exceeded |
| \`validateAcceptFileType\` | Boolean | \`false\` | Emit \`invalidFileType\` if file extension doesn't match \`accept\` |
| \`errorMessage\` | String | — | Validation error text shown in red |
| \`showErrorStyleOnly\` | Boolean | \`false\` | Show error border without displaying the error text |
| \`isImageOnly\` | Boolean | \`false\` | Image-specific UI with square preview |
| \`showUploadImageArea\` | Boolean | \`false\` | Show the upload zone when \`isImageOnly\` is true |
| \`allowToEdit\` | Boolean | — | Show a crop button on image hover |
| \`imageClasses\` | String | — | CSS classes applied to the preview image element |
| \`isButtonOnly\` | Boolean | \`false\` | Render only an upload button — no drag area |
| \`buttonUploadProps\` | Object | \`{ label: 'Upload', leftIcon: 'upload' }\` | Props passed to the Button component in button-only mode |
| \`isPreview\` | Boolean | \`true\` | Show file name and progress after selection |
| \`confirmToRemove\` | Boolean | \`false\` | Emit \`confirmRemoveFile\` before removing, instead of removing immediately |
| \`shouldTruncateFileName\` | Boolean | \`false\` | Truncate long file names in the preview |
| \`isDisabled\` | Boolean | \`false\` | Disable the upload area |
| \`uploadButtonOptions\` | Object | — | Additional options for the upload button |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`{ fileName, fileLink }\` or array | File selected or changed |
| \`onRemoveFile\` | — | File was removed |
| \`onExceedMaxFileSize\` | — | Selected file exceeds \`maxSize\` |
| \`invalidFileType\` | — | File extension doesn't match \`accept\` |
| \`confirmRemoveFile\` | \`(file, index)\` | Fired when \`confirmToRemove\` is true — parent decides whether to remove |
| \`onOpenEditImage\` | event | Crop/edit button was clicked |
        `.trim()
      }
    }
  }
}

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  argTypes: {
    isDisabled:          { control: 'boolean' },
    isImageOnly:         { control: 'boolean' },
    showUploadImageArea: { control: 'boolean' },
    isButtonOnly:        { control: 'boolean' },
    isPreview:           { control: 'boolean' },
    confirmToRemove:     { control: 'boolean' },
    label:               { control: 'text' },
    hint:                { control: 'text' },
    accept:              { control: 'text' },
    errorMessage:        { control: 'text' },
    maxSize:             { control: 'number' }
  },
  args: {
    isDisabled:          false,
    isImageOnly:         false,
    showUploadImageArea: false,
    isButtonOnly:        false,
    isPreview:           true,
    confirmToRemove:     false,
    label:               'Attachment',
    hint:                'PDF, PNG, or JPG up to 5 MB.',
    accept:              '.pdf,.png,.jpg',
    errorMessage:        '',
    maxSize:             5
  },
  render: (args) => ({
    components: { SingleFileUpload, Theme },
    setup() {
      const file = ref(null)
      return { args, file }
    },
    template: `
      <Theme class="p-6 w-[420px]">
        <SingleFileUpload v-model="file" v-bind="args" />
      </Theme>
    `
  })
}

// ── Default ───────────────────────────────────────────────────────────────────

export const Default = {
  description: 'Drag-and-drop file upload area. Shows file name + progress bar after selection. Emits update:modelValue with the file object.',
  highlights: ['v-model — { fileName, fileLink } file object', 'accept — allowed types (e.g. ".pdf,.png")', 'maxSize — MB limit; triggers onExceedMaxFileSize', 'onRemoveFile event — file deleted'],
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

// ── Image Only ────────────────────────────────────────────────────────────────

export const ImageOnly = {
  description: 'Compact image-only upload. Shows a square preview area with edit/delete overlay. Ideal for avatars and cover photos.',
  highlights: ['is-image-only — image-specific UI', 'show-upload-image-area — visible upload zone', 'allow-to-edit — crop button on hover', 'image-classes — style the preview img element'],
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

// ── Button Only ───────────────────────────────────────────────────────────────

export const ButtonOnly = {
  description: 'Renders just an upload button — no drag area. Useful when the upload action is one step in a larger form.',
  highlights: ['is-button-only — button only, no drag area', 'button-upload-props — Button component props (label, leftIcon, variant, size, etc.)'],
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

// ── With Error ────────────────────────────────────────────────────────────────

export const WithError = {
  description: 'Pass errorMessage to show validation errors below the upload area. Clear on file selection. Use showErrorStyleOnly for red border without text.',
  highlights: ['errorMessage prop — red text below the area', 'showErrorStyleOnly — red border only', 'clear error on update:modelValue'],
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

// ── Disabled ──────────────────────────────────────────────────────────────────

export const Disabled = {
  description: 'Disabled state — upload area is non-interactive. Use when a prerequisite step must be completed first.',
  highlights: ['is-disabled prop'],
  code: `<script setup>
import { ref } from 'vue'
import { SingleFileUpload } from '@orchidui/core'

const file = ref(null)
</script>

<template>
  <SingleFileUpload
    v-model="file"
    label="Upload (disabled)"
    hint="Complete the previous step to enable upload."
    is-disabled
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
        <SingleFileUpload v-model="file" label="Upload (disabled)" hint="Complete the previous step to enable upload." is-disabled />
      </div>
    `
  })
}
