<script setup>
import { Modal, Button, Input } from '@/orchidui'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { ref, watch } from 'vue'

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

const image = ref('')
const localLinkValue = ref(props.link)

const confirmButtonProps = ref({
  label: 'Save',
  onClick: () => {
    console.log(image.value)
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

    <!--    <div class="flex flex-col gap-y-5">-->
    <!--      <input ref="file_upload" accept="image/*" type="file" class="hidden" @change="fileUpload" />-->

    <!--      <Cropper-->
    <!--        v-if="localImage"-->
    <!--        ref="cropper"-->
    <!--        class="w-[592px] h-[300px]"-->
    <!--        :src="localImage"-->
    <!--        :resize-image="{ wheel: false }"-->
    <!--        background-class="test"-->
    <!--        :default-size="defaultSize"-->
    <!--        @change="imageChanged = true"-->
    <!--      />-->
    <!--      <img v-else class="w-full" :src="img" />-->

    <!--      <div class="flex gap-x-1 justify-center relative">-->
    <!--        <template v-if="localImage">-->
    <!--          <Button variant="secondary" size="small" left-icon="backward" @click="rotate(-90)" />-->
    <!--          <Button variant="secondary" size="small" left-icon="zoom-out" @click="zoom(0.8)" />-->
    <!--          <Button variant="secondary" size="small" left-icon="zoom-in" @click="zoom(1.2)" />-->
    <!--          <Button variant="secondary" size="small" left-icon="forward" @click="rotate(90)" />-->
    <!--        </template>-->
    <!--        <Button-->
    <!--          class="absolute right-0"-->
    <!--          variant="secondary"-->
    <!--          size="small"-->
    <!--          label="Replace image"-->
    <!--          left-icon="refresh"-->
    <!--          @click="replaceImage"-->
    <!--        />-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <Input-->
    <!--          v-if="withLink"-->
    <!--          v-model="localLinkValue"-->
    <!--          label="Link"-->
    <!--          placeholder="https://website.com"-->
    <!--        />-->
    <!--      </div>-->
    <!--    </div>-->
  </Modal>
</template>
