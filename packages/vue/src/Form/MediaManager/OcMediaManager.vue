<script setup>
import {
  Dropdown,
  Icon,
  FilterSearch,
  Tabs,
  DropdownItem,
  ConfirmationModal,
  Modal
} from '@/orchidui'
import { ref, computed, watch } from 'vue'
import { ModalCropper } from '@/orchidui/Cropper.js'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
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
  'invalidFileType',
  'update:modelValue'
])
const isEditOpen = ref(false)
const editImgIndex = ref('')
const editLink = ref('')
const isDropdownOpen = ref({})
const images = ref([])

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
  editLink.value = ''
}
const updateLink = (link) => {
  let changedFile = props.uploadedImages[editImgIndex.value]
  changedFile.link = link
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
const filterTab = ref('all')
const tabs = ref([
  { label: 'All', value: 'all' },
  { label: 'Images', value: 'images' },
  { label: 'Videos', value: 'videos' }
])

const save = () => {
  emit(
    'update:uploadedImages',
    images.value.filter(({ isSelected }) => isSelected)
  )
  emit('update:modelValue', false)
}

watch(
  () => props.uploadedImages,
  () => {
    images.value = [...props.uploadedImages]
  },
  { deep: true }
)
</script>

<template>
  <Modal
    title="Edit Image"
    is-close-icon
    :model-value="modelValue"
    :cancel-button-props="{
      onClick: () => {}
    }"
    :confirm-button-props="{
      label: 'Insert',
      onClick: save
    }"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div class="border rounded">
      <div class="flex items-center justify-between px-4 min-h-[52px] border-b">
        <Tabs v-model="filterTab" :tabs="tabs" variant="pills" />
        <div>
          <FilterSearch />
        </div>
      </div>
      <div class="p-5">
        <div class="grid sm:grid-cols-3 md:grid-cols-5 gap-4">
          <label v-if="showAddBtn">
            <div
              class="h-[100px] hover:bg-oc-primary-50 cursor-pointer bg-oc-accent-1-50 text-oc-accent-1 rounded aspect-square flex items-center justify-center"
            >
              <Icon name="plus" />
            </div>
            <input
              v-if="!resetFile"
              class="hidden"
              type="file"
              :accept="accept || 'image/png, image/jpeg'"
              :multiple="props.maxImages !== 1"
              @change="onChange"
            />
          </label>
          <div
            class="h-[100px] rounded overflow-hidden bg-gray-50 bg-cover bg-center group relative cursor-pointer border-2 border-transparent"
            v-for="(item, index) in images"
            :key="item.fileName"
            :class="{
              '!border-oc-primary': item.isSelected
            }"
            @mouseleave="isDropdownOpen[index] = false"
            @click="item.isSelected = !item.isSelected"
          >
            <img v-if="item.fileUrl" class="w-full h-full object-cover" :src="item.fileUrl" />
            <Dropdown
              v-model="isDropdownOpen[index]"
              placement="bottom-end"
              class="absolute top-2 right-2 transition opacity-0 group-hover:opacity-100 w-auto"
            >
              <button
                class="bg-[rgba(41,41,44,0.35)] rounded-full w-9 h-9 flex items-center justify-center"
                @click.stop="isDropdownOpen[index] = !isDropdownOpen[index]"
              >
                <Icon name="dots-vertical" class="text-white" height="24" width="24" />
              </button>
              <template #menu>
                <div class="flex flex-col">
                  <div class="p-2 border-b border-gray-200">
                    <DropdownItem
                      text="Edit"
                      icon="pencil"
                      @click="
                        () => {
                          editImgIndex = index
                          editLink = item.link
                          isDropdownOpen[index] = false
                          isEditOpen = true
                        }
                      "
                    />
                  </div>
                  <div class="p-2">
                    <DropdownItem
                      text="Delete"
                      icon="bin"
                      variant="destructive"
                      @click="
                        () => {
                          onDeleteFile(index)
                          isDropdownOpen[index] = false
                        }
                      "
                    />
                  </div>
                </div>
              </template>
            </Dropdown>

            <div
              v-if="!item.fileUrl"
              class="absolute transition-all duration-500 top-0 left-0 flex items-center justify-center w-full h-full"
              :class="item.progress !== 100 ? 'bg-black/[.35]' : 'bg-black/0'"
            >
              <div
                class="h-[6px] w-[72px] bg-white transition-all rounded-full"
                :class="{ 'on-end-loading opacity-0': item.progress === 100 }"
              >
                <div
                  class="h-full bg-oc-primary rounded-full w-0 transition-all duration-500"
                  :style="{ width: `${item.progress || 0}%` }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>

  <ModalCropper
    v-if="isEditOpen"
    v-model="isEditOpen"
    :img="editImgIndexFileUrl"
    :with-link="withLink"
    :link="editLink"
    @close="
      () => {
        isEditOpen = false
        editImgIndex = ''
      }
    "
    @change-image="changeImage"
    @update:link="updateLink"
  />

  <ConfirmationModal
    v-model="deleteConfirmationModal"
    description="Do you want to delete this image ?"
    @confirm="confirmDeleteFile"
  />
</template>
