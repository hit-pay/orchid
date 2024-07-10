<script setup>
import { Modal, Button, Input } from '@/orchidui'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { nextTick, ref, watch } from 'vue'

const props = defineProps({
  withLink: Boolean,
  link: String,
  img: String,
  maxSize: String
})
const emit = defineEmits(['changeImage', 'update:link'])
const cropper = ref()
const file_upload = ref()

const localImage = ref('')
const isAwsImage = ref(false)
const imageChanged = ref(false)

watch(
  () => props.img,
  (img) => {
    if (img) {
      if (img.includes('.amazonaws.com')) {
        isAwsImage.value = true
        localImage.value = ''
      } else {
        isAwsImage.value = false

        nextTick(() => {
          localImage.value = img
        })
      }
    }
  },
  { immediate: true }
)

const onChange = () => {
  console.log('sdfsdf')
  if (localImage.value) {
    localImage.value = null
    const { canvas } = cropper.value.getResult()
    emit('changeImage', canvas.toDataURL())
  }
}
const rotate = (angle) => cropper.value?.rotate(angle)
const zoom = (zoom) => cropper.value?.zoom(zoom)

const replaceImage = () => {
  file_upload.value.click()
}

const fileUpload = (e) => {
  if (e.target.files[0] / (1024 * 1024) > 5) {
    e.preventDefault()
    return false
  } else {
    localImage.value = URL.createObjectURL(e.target.files[0])
  }
}

const defaultSize = ({ imageSize, visibleArea }) => {
  return {
    width: (visibleArea || imageSize).width,
    height: (visibleArea || imageSize).height
  }
}
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <input ref="file_upload" accept="image/*" type="file" class="hidden" @change="fileUpload" />

    <Cropper
      v-if="localImage"
      ref="cropper"
      class="w-[592px] h-[300px]"
      :src="localImage"
      :resize-image="{ wheel: false }"
      background-class="test"
      :default-size="defaultSize"
      @change="onChange"
    />
    <img v-else class="w-full" :src="img" />

    <div class="flex gap-x-1 justify-center relative">
      <template v-if="localImage">
        <Button variant="secondary" size="small" left-icon="backward" @click="rotate(-90)" />
        <Button variant="secondary" size="small" left-icon="zoom-out" @click="zoom(0.8)" />
        <Button variant="secondary" size="small" left-icon="zoom-in" @click="zoom(1.2)" />
        <Button variant="secondary" size="small" left-icon="forward" @click="rotate(90)" />
      </template>
      <Button
        class="absolute right-0"
        variant="secondary"
        size="small"
        label="Replace image"
        left-icon="refresh"
        @click="replaceImage"
      />
    </div>
    <div>
      <Input
        v-if="withLink"
        placeholder="https://website.com"
        label="Link"
        :model-value="link"
        @update:model-value="emit('update:link', $event)"
      />
    </div>
  </div>
</template>

<style lang="scss">
.test {
  background:
    url('./assets/empty-space.png'),
    lightgray 0 0% / 50px 50px repeat;
}

.vue-simple-handler {
  @apply rounded-[1px] w-[5px] h-[5px] bg-[var(--oc-primary-500)];
}

.vue-simple-line {
  @apply border-[var(--oc-primary-500)];
}
</style>
