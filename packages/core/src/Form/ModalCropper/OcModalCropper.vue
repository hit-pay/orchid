<script setup>
import { Modal } from '@/orchidui-core'
import { ref } from 'vue'
import { Cropper } from '../Cropper/OcCropper'

const props = defineProps({
  /** Additional input field configs shown inside the cropper (e.g. alt text). Array of field definitions. */
  inputOptions: Array,
  /** Current values for the `inputOptions` fields. Object keyed by field name. */
  inputOptionValues: Object,
  /** Source image URL to load into the cropper. */
  img: String,
  /** Maximum allowed file size in bytes. Passed through to the Cropper. */
  maxSize: [String, Number]
})
const emit = defineEmits({
  /** Save clicked with a cropped image. Payload: `{ url, cropper }`. */
  changeImage: [],
  /** Modal closed without saving. */
  close: [],
  /** An `inputOptions` field value changed. Payload: new value. */
  'update:input-options': []
})
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
      emit('update:input-options', localLinkValue.value)
    }
    if (image.value) {
      emit('changeImage', {
        url: image.value,
        cropper: cropper.value
      })
    } else {
      emit('close')
    }
  }
})

const onChangeImage = (item) => {
  image.value = item.url
  cropper.value = item.cropper
}
</script>

<template>
  <Modal
    id="modal-cropper-overlay-wrapper"
    title="Edit Image"
    is-close-icon
    :cancel-button-props="cancelButtonProps"
    :confirm-button-props="confirmButtonProps"
  >
    <Cropper
      :input-options="inputOptions"
      :input-option-values="inputOptionValues"
      :img="img"
      :max-size="maxSize"
      @change-image="onChangeImage"
      @update:input-options="localLinkValue = $event"
    />
  </Modal>
</template>
