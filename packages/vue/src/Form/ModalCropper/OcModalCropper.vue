<script setup>
import { Modal } from '@/orchidui'
import 'vue-advanced-cropper/dist/style.css'
import { ref } from 'vue'

import OcCropper from '../Cropper/OcCropper.vue'

const props = defineProps({
  withLink: Boolean,
  link: String,
  img: String,
  maxSize: String
})
const emit = defineEmits(['changeImage', 'close', 'update:link'])
const cropper = ref()
const file_upload = ref()
const cancelButtonProps = {
  onClick: () => emit('close')
}

const image = ref()
const localLinkValue = ref(props.link)

const confirmButtonProps = ref({
  label: 'Save',
  onClick: () => {
    if (localLinkValue.value) {
      emit('update:link', localLinkValue.value)
    }
    if (image.value) {
      emit('changeImage', image.value)
    } else {
      emit('close')
    }
  }
})
</script>

<template>
  <Modal
    title="Edit Image"
    is-close-icon
    :cancel-button-props="cancelButtonProps"
    :confirm-button-props="confirmButtonProps"
  >
    <OcCropper
      :withLink="withLink"
      :link="link"
      :img="img"
      :maxSize="maxSize"
      @change-image="image = $event"
      @update:link="localLinkValue = $event"
    />
  </Modal>
</template>
