import { TextEditor } from '@/orchidui-dashboard'
import { Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: TextEditor,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Rich text editor built on Quill. Supports formatting, font sizes, images, links, lists, and alignment. Emits HTML string via v-model.

From \`@orchidui/dashboard\` package.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`modelValue\` | String | — | v-model — HTML string |
| \`fontSizes\` | Array | **required** | Font size options: \`[{ label, value }]\` (value must be a CSS size like \`'14px'\`) |
| \`initialFontSize\` | String | — | Default font size (must be a value from fontSizes) |
| \`label\` | String | \`''\` | Label above the editor |
| \`hint\` | String | \`''\` | Helper text below the label |
| \`placeholder\` | String | \`''\` | Placeholder text in the editor |
| \`errorMessage\` | String | \`''\` | Error message below the editor |
| \`isRequired\` | Boolean | \`false\` | Show \`*\` next to the label |
| \`labelIcon\` | String | \`''\` | Icon in the label area |
| \`tooltipText\` | String | \`''\` | Tooltip on the label icon |
| \`tooltipOptions\` | Object | \`{}\` | Extra tooltip props |
| \`variant\` | String | \`'default'\` | \`'default'\` (full toolbar with image) or \`'text-only'\` (no image/media) |
| \`image\` | String | — | URL of image inserted into editor |
| \`isCustomImageUpload\` | Boolean | \`false\` | Use custom image upload flow (emits \`uploadImage\` instead of native) |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| \`update:modelValue\` | \`string\` | HTML content changed |
| \`update:image\` | \`string\` | Image URL updated |
| \`uploadImage\` | — | Custom image upload triggered (when isCustomImageUpload=true) |
        `.trim()
      }
    }
  }
}

const fontSizes = [
  { label: 'Default', value: '14px' },
  { label: 'Medium',  value: '16px' },
  { label: 'Large',   value: '18px' },
  { label: 'XL',      value: '20px' }
]

export const Basic = {
  description: 'Full rich text editor with formatting toolbar. v-model is an HTML string.',
  highlights: ['v-model — HTML string', 'fontSizes — required font size options', 'variant="default" — full toolbar with image support'],
  code: `<script setup>
import { ref } from 'vue'
import { TextEditor } from '@orchidui/dashboard'

const content = ref('')

const fontSizes = [
  { label: 'Default', value: '14px' },
  { label: 'Medium',  value: '16px' },
  { label: 'Large',   value: '18px' },
  { label: 'XL',      value: '20px' }
]
</script>

<template>
  <TextEditor
    id="editor"
    v-model="content"
    label="Product description"
    placeholder="Start typing..."
    :font-sizes="fontSizes"
    initial-font-size="14px"
  />

  <!-- Render the HTML output -->
  <div class="mt-6 p-4 border rounded" v-html="content" />
</template>`,
  render: () => ({
    components: { TextEditor, Theme },
    setup() {
      const content = ref('')
      return { content, fontSizes }
    },
    template: `
      <Theme class="p-6">
        <TextEditor id="editor-basic" v-model="content" label="Product description" placeholder="Start typing..." :font-sizes="fontSizes" initial-font-size="14px" />
        <div class="mt-6">
          <p class="text-sm font-medium text-oc-text-400 mb-2">HTML output:</p>
          <div class="p-3 border border-oc-gray-200 rounded text-sm font-mono text-oc-text-300">{{ content || '(empty)' }}</div>
        </div>
      </Theme>
    `
  })
}

export const TextOnlyVariant = {
  description: 'Text-only variant hides image and media toolbar buttons — useful for plain formatted text fields.',
  highlights: ['variant="text-only" — no image/media toolbar items', 'same formatting options: bold, italic, links, lists, alignment'],
  code: `<script setup>
import { ref } from 'vue'
import { TextEditor } from '@orchidui/dashboard'

const content = ref('')

const fontSizes = [
  { label: 'Default', value: '14px' },
  { label: 'Medium',  value: '16px' }
]
</script>

<template>
  <TextEditor
    id="editor-text"
    v-model="content"
    variant="text-only"
    label="Notes"
    :font-sizes="fontSizes"
  />
</template>`,
  render: () => ({
    components: { TextEditor, Theme },
    setup() {
      const content = ref('')
      return { content, fontSizes }
    },
    template: `
      <Theme class="p-6">
        <TextEditor id="editor-text-only" v-model="content" variant="text-only" label="Notes" :font-sizes="fontSizes" />
      </Theme>
    `
  })
}

export const Default = {
  args: {
    label: 'Label',
    isRequired: true,
    fontSizes: fontSizes,
    initialFontSize: '14px',
    placeholder: 'Placeholder'
  },
  render: (args) => ({
    components: { TextEditor, Theme },
    setup() {
      const modelValue = ref('')
      const modelValue2 = ref('')
      const onUpdateImage = () => {}
      return { args, modelValue, modelValue2, onUpdateImage }
    },
    template: `
      <Theme>
        <div @click="modelValue = ''" class="cursor-pointer mb-1">Clear</div>
        <div @click="modelValue = 'default model value'" class="cursor-pointer mb-4">Reset</div>

        <div class="mb-2">Full Editor</div>
        <TextEditor id="quill-example" v-model="modelValue" v-bind="args" @update:image="onUpdateImage" />
        <div class="flex gap-y-6 flex-col mt-8">
          <div>Preview</div>
          <div v-html="modelValue" />
        </div>

        <div class="mt-8 mb-2">Text Only Editor</div>
        <TextEditor id="quill-example-text-only" variant="text-only" v-model="modelValue2" v-bind="args" />
        <div class="flex gap-y-6 flex-col mt-8">
          <div>Preview</div>
          <div v-html="modelValue2" />
        </div>
      </Theme>
    `
  })
}
