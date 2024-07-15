<script setup>
import { Dropdown, Icon, FilterSearch, Tabs, DropdownItem, ConfirmationModal } from '@/orchidui'
import { ref, computed } from 'vue'
import { ModalCropper } from '@/orchidui/Cropper.js'

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
const isEditOpen = ref(false)
const editImgIndex = ref('')
const editLink = ref('')
const isDropdownOpen = ref({})

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
const filterTab = ref()
const tabs = ref([
  { label: 'All', value: 'all' },
  { label: 'Images', value: 'images' },
  { label: 'Videos', value: 'videos' }
])
</script>

<template>
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
            class="h-[136px] hover:bg-oc-primary-50 cursor-pointer bg-oc-accent-1-50 text-oc-accent-1 rounded aspect-square flex items-center justify-center"
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
          class="h-[136px] w-[136px] rounded overflow-hidden bg-gray-50 bg-cover bg-center group relative"
          v-for="(item, index) in uploadedImages"
          :key="item.fileName"
          :class="{
            'border-oc-primary': selectedImage.fileName === item.fileName
          }"
          @mouseleave="isDropdownOpen[index] = false"
          @click="$emit('update:selectedImage', item)"
        >
          <img class="w-full h-full object-cover" :src="item.fileUrl" />
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
        </div>
      </div>
    </div>
  </div>

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
