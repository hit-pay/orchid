<script setup>
import { Modal } from '@/orchidui'
import { MediaManager } from './OcMediaManager.js'

import { ref } from 'vue'

const props = defineProps({
  accept: {
    type: String,
    default: ''
  },
  uploadedImages: {
    type: Array,
    default: () => []
  },
  selectedImage: {
    type: Object,
    default: () => ({})
  },
  columnsCount: {
    type: Number,
    default: 3
  },
  withLink: Boolean,
  maxImages: Number
})
const emit = defineEmits([
  'change',
  'update:selectedImage',
  'update:uploadedImages',
  'onRemoveImage',
  'onEditImage',
  'delete',
  'onMaxFileExceed',
  'fileExist',
  'invalidFileType'
])

const currentFiles = ref([])

const onChangeFile = () => {}
const onDeleteFile = () => {}
</script>

<template>
  <Modal
    title="Edit Image"
    is-close-icon
    :cancel-button-props="{
      onClick: () => {}
    }"
    :confirm-button-props="{
      label: 'Insert',
      onClick: () => {}
    }"
  >
    <MediaManager
      :uploaded-images="currentFiles"
      :selected-image="selectedImage"
      :columns-count="columnsCount"
      :accept="accept"
      :with-link="withLink"
      :max-images="maxImages"
      @change="onChangeFile"
      @update:selected-image="$emit('update:selectedImage', $event)"
      @update:uploaded-images="
        ($event) => {
          currentFiles = $event
          $emit('update:modelValue', $event)
        }
      "
      @on-edit-image="$emit('onEditFile', $event)"
      @on-remove-image="$emit('onRemoveFile', $event)"
      @delete="onDeleteFile"
      @on-max-file-exceed="$emit('onMaxFileExceed', $event)"
    />
  </Modal>
</template>
