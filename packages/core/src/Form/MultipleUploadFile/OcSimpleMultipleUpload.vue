<script setup>
import { Dropdown, Icon, ConfirmationModal } from '@/orchidui-core'
import { ref, computed } from 'vue'
import { Draggable, ModalCropper } from '@/orchidui-core'

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
  inputOptions: Array,
  maxImages: Number,
  isDisabled: Boolean
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
const isDropdownOpen = ref([])
const isEditOpen = ref(false)
const editImgIndex = ref('')
const editInputOptions = ref({})

const editImgIndexFileUrl = computed(() => {
  return props.uploadedImages[editImgIndex.value].fileUrl
})
const deleteConfirmationModal = ref(false)
const deleteIndex = ref('')
const onDeleteFile = (index) => {
  deleteConfirmationModal.value = true
  deleteIndex.value = index
}

const resetFile = ref(false)

const confirmDeleteFile = () => {
  const deletedImage = props.uploadedImages.find((_, i) => i === deleteIndex.value)

  if (deletedImage.current) {
    emit('onRemoveImage', deletedImage)
  } else {
    emit('delete', deleteIndex.value)
    resetFile.value = true
    setTimeout(() => {
      resetFile.value = false
    }, 1000)
  }

  emit(
    'update:uploadedImages',
    props.uploadedImages.filter((_, i) => i !== deleteIndex.value)
  )
  deleteConfirmationModal.value = false
}
const changeImage = (url) => {
  const changedFile = props.uploadedImages[editImgIndex.value]
  changedFile.fileUrl = url

  changedFile.fileName = Date.now()

  emit('onEditImage', { ...changedFile, index: editImgIndex.value })

  isEditOpen.value = false
  editImgIndex.value = ''
  editInputOptions.value = {}
}
const updateInputOption = (optionValues) => {
  let changedFile = props.uploadedImages[editImgIndex.value]
  Object.keys(optionValues).forEach((key) => {
    changedFile[key] = optionValues[key]
  })
  emit('update:uploadedImages', props.uploadedImages)
}

const onChange = ($event) => {
  let isExceedLimit = props.uploadedImages.length + $event.target.files.length > props.maxImages
  if (props.maxImages && isExceedLimit) {
    emit('onMaxFileExceed', isExceedLimit)
    return
  }

  emit('change', $event)
}
const showAddBtn = computed(
  () =>
    props.maxImages == undefined ||
    (props.maxImages && props.uploadedImages.length < props.maxImages)
)

const editSelectedImage = (i, img) => {
  editImgIndex.value = i
  props.inputOptions?.forEach((key) => {
    editInputOptions.value[key] = img[key]
  })
  isDropdownOpen[i] = false
  isEditOpen.value = true
}
</script>

<template>
  <div class="relative min-h-[100px]">
    <label v-if="showAddBtn" class="absolute">
      <div
        class="w-[100px] hover:bg-oc-primary-50 cursor-pointer bg-oc-accent-1-50 text-oc-accent-1 rounded aspect-square flex items-center justify-center"
      >
        <Icon name="plus" />
      </div>
      <input
        v-if="!resetFile"
        class="hidden"
        type="file"
        :accept="accept || 'image/png, image/jpeg'"
        :multiple="props.maxImages !== 1"
        :disabled="isDisabled"
        @change="onChange"
      />
    </label>
    <Draggable
      :key="uploadedImages.length"
      :model-value="uploadedImages"
      :disabled="isDisabled"
      filter="filtered-el"
      class="grid w-fit grid-cols-3 gap-3"
      :style="`grid-template-columns: repeat(${columnsCount}, 1fr)`"
      @update:model-value="isDisabled ? null : $emit('update:uploadedImages', $event)"
    >
      <template #default="{ list }">
        <div
          v-for="(img, i) in list"
          :key="img.fileName"
          class="w-[100px] group relative cursor-pointer aspect-square border rounded border-oc-accent-1-100 bg-cover bg-center"
          :class="{
            'border-oc-primary': selectedImage.fileName === img.fileName,
            'col-start-2': i === 0 && showAddBtn,
          }"
          :style="`background-image: url(${img.fileUrl})`"
          @click="$emit('update:selectedImage', img)"
        >
          <Dropdown
            v-if="!isDisabled"
            v-model="isDropdownOpen[i]"
            placement="bottom-end"
            class="absolute top-2 right-2 z-[1010] hidden group-hover:flex"
          >
            <Icon
              name="dots-vertical"
              class="absolute right-0 cursor-pointer w-[32px] flex h-[32px] items-center justify-center text-oc-bg-light"
            />
            <template #menu>
              <slot name="action" :item="img" :remove-item="onDeleteFile" :file-index="i">
                <div class="py-2 flex flex-col">
                  <div
                    class="flex p-3 cursor-pointer items-center gap-x-3"
                    @click="editSelectedImage(i, img)"
                  >
                    <Icon width="16" height="16" name="pencil" />
                    <span>Edit Image</span>
                  </div>
                  <div
                    class="flex p-3 cursor-pointer items-center text-oc-error gap-x-3"
                    @click="
                      () => {
                        onDeleteFile(i)
                        isDropdownOpen[i] = false
                      }
                    "
                  >
                    <Icon width="16" height="16" name="bin" />
                    <span>Delete</span>
                  </div>
                </div>
              </slot>
            </template>
          </Dropdown>
          <div
            class="absolute transition-all duration-500 top-0 left-0 flex items-center justify-center w-full h-full"
            :class="img.progress !== 100 ? 'bg-black/[.35]' : 'bg-black/0'"
          >
            <div
              class="h-[6px] w-[72px] bg-white transition-all rounded-full"
              :class="{ 'on-end-loading opacity-0': img.progress === 100 }"
            >
              <div
                class="h-full bg-oc-primary rounded-full w-0 transition-all duration-500"
                :style="{ width: `${img.progress || 0}%` }"
              />
            </div>
          </div>
          <div
            v-if="!isDisabled"
            class="z-[1009] hidden group-hover:flex absolute bg-black/30 w-full h-full top-0 left-0 rounded"
          >
            <span v-if="props.maxImages !== 1" class="cursor-pointer m-auto drag-el">
              <Icon name="arrows" class="text-oc-accent-1-50" />
            </span>
          </div>
        </div>
      </template>
    </Draggable>

    <ModalCropper
      v-if="isEditOpen"
      v-model="isEditOpen"
      :img="editImgIndexFileUrl"
      :input-options="inputOptions"
      :input-option-values="editInputOptions"
      @close="
        () => {
          isEditOpen = false
          editImgIndex = ''
        }
      "
      @change-image="changeImage"
      @update:input-options="updateInputOption"
    />

    <ConfirmationModal
      v-model="deleteConfirmationModal"
      description="Do you want to delete this image ?"
      @confirm="confirmDeleteFile"
    />
  </div>
</template>
