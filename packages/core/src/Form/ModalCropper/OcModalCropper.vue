<script setup>
import { Modal } from '@/orchidui-core'
import { ref } from 'vue'
import { Cropper } from '../Cropper/OcCropper'

const props = defineProps({
  inputOptions: Array,
  inputOptionValues: Object,
  img: String,
  maxSize: [String, Number]
})
const emit = defineEmits(['changeImage', 'close', 'update:input-options'])
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
      emit('changeImage', image.value, cropper.value)
    } else {
      emit('close')
    }
  }
})

const onChangeImage = (url, cropperInfo) => {
  image.value = url
  cropper.value = cropperInfo
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
