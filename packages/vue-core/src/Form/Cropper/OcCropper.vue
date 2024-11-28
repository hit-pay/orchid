<script setup>
import { Button, Input, Checkbox, RadioGroup, Icon, Tooltip } from '@/orchidui-core'
import { Cropper } from 'vue-advanced-cropper'
import { nextTick, ref, watch } from 'vue'
import 'vue-advanced-cropper/dist/style.css'

const props = defineProps({
  inputOptions: Array,
  inputOptionValues: Object,
  img: String,
  maxSize: [String, Number],
  isReplaceImage: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['changeImage', 'update:input-options'])
const cropper = ref()
const fileUploadEl = ref()

const localImage = ref('')
const imageChanged = ref(false)

const localInputOptionsValue = ref(props.inputOptionValues ?? {})

watch(
  () => props.inputOptionValues,
  () => {
    localInputOptionsValue.value = props.inputOptionValues
  },
  {
    deep: true
  }
)

watch(
  () => props.img,
  (img) => {
    if (img) {
      nextTick(() => {
        try {
          const url = new URL(img)

          const isLink = url.protocol === 'http:' || url.protocol === 'https:'

          if (isLink) {
            localImage.value = `${img}?${Date.now()}`
          } else {
            localImage.value = img
          }
        } catch {
          localImage.value = img
        }
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

const updateOptions = (key, value) => {
  let newValue = localInputOptionsValue.value
  newValue[key] = value
  emit('update:input-options', newValue)
}

const showCaption = ref(localInputOptionsValue.value.caption ? true : false)

const isLightBox = ref(localInputOptionsValue.value.lightbox ? true : false)
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <input
      id="cropper-file-input"
      ref="fileUploadEl"
      accept="image/*"
      type="file"
      class="hidden"
      @change="fileUpload"
    />

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
        v-if="isReplaceImage"
        class="absolute right-0"
        variant="secondary"
        size="small"
        label="Replace image"
        left-icon="refresh"
        @click="replaceImage"
      />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <Input
        v-if="inputOptions?.includes('description')"
        v-model="localInputOptionsValue.description"
        label="Describe Image"
        placeholder=""
        @update:model-value="updateOptions('description', $event)"
      />

      <Input
        v-if="inputOptions?.includes('link')"
        v-model="localInputOptionsValue.link"
        placeholder="https://hitpayapp.com"
        label="Link to"
        @update:model-value="updateOptions('link', $event)"
      />

      <div>
        <Checkbox
          v-if="inputOptions?.includes('caption')"
          v-model="showCaption"
          label="Caption"
          class="mb-4"
        />
        <Input
          v-if="inputOptions?.includes('caption') && showCaption"
          v-model="localInputOptionsValue.caption"
          class="mb-4"
          placeholder=""
          @update:model-value="updateOptions('caption', $event)"
        />
        <RadioGroup
          v-if="inputOptions?.includes('caption') && showCaption"
          :model-value="localInputOptionsValue.caption_variant"
          group-name="caption_variant"
          alignment="horizontal"
          :radio="[
            {
              value: 'hover',
              label: 'Show on hover'
            },
            {
              value: 'bottom',
              label: 'Show on bottom'
            }
          ]"
          label="Caption position"
          @update:model-value="updateOptions('caption_variant', $event)"
        />
      </div>
      <div>
        <Checkbox
          v-if="inputOptions?.includes('lightbox')"
          v-model="isLightBox"
          label="Lightbox"
          @update:model-value="updateOptions('lightbox', $event)"
        >
          <template #after>
            <Tooltip position="bottom" :distance="10" popper-class="bg-oc-bg-light min-w-[125px]">
              <Icon name="question-mark" width="16" height="16" class="text-oc-accent-1-500" />
              <template #popper>
                <div class="text-oc-text-400 text-sm px-3 py-2 font-medium text-center">
                  Show lightbox when click the image
                </div>
              </template>
            </Tooltip>
          </template>
        </Checkbox>
      </div>
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
