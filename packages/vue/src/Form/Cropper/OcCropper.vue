<script setup>
import { Button, Input } from '@/orchidui'
import { Cropper } from 'vue-advanced-cropper'
import { nextTick, ref, watch } from 'vue'
import 'vue-advanced-cropper/dist/style.css'

const props = defineProps({
  withLink: Boolean,
  link: String,
  img: String,
  maxSize: [String, Number]
})
const emit = defineEmits(['changeImage', 'update:link'])
const cropper = ref()
const fileUploadEl = ref()
const imageEl = ref()

const localImage = ref('')
const imageChanged = ref(false)

watch(
  () => props.img,
  (img) => {
    if (img) {
      nextTick(() => {
        localImage.value = img.includes('base64') ? img : `${img}?time=${Date.now()}`
      })
    }
  },
  { immediate: true }
)

const onChange = () => {
  if (localImage.value && imageChanged.value) {
    const { canvas } = cropper.value.getResult()
    emit('changeImage', canvas.toDataURL())
  }
  imageChanged.value = true
}
const rotate = (angle) => cropper.value?.rotate(angle)
const zoom = (zoom) => cropper.value?.zoom(zoom)

const replaceImage = () => {
  fileUploadEl.value.click()
}

const fileUpload = (e) => {
  if (e.target.files[0] / (1024 * 1024) > +props.maxSize) {
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
    <input ref="fileUploadEl" accept="image/*" type="file" class="hidden" @change="fileUpload" />

    <Cropper
      v-if="localImage"
      ref="cropper"
      class="w-full h-[300px]"
      :src="localImage"
      :resize-image="{ wheel: false }"
      background-class="cropper-background"
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
.cropper-background {
  background:
    url('/images/empty-space.svg'),
    lightgray 0 0% / 50px 50px repeat;
}

.vue-simple-handler {
  @apply rounded-[1px] w-[5px] h-[5px] bg-[var(--oc-primary-500)];
}

.vue-simple-line {
  @apply border-[var(--oc-primary-500)];
}
</style>
