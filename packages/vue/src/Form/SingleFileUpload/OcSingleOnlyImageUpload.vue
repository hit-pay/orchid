<script setup lang="ts">
import { Icon, Dropdown } from '@/orchidui'
import { ModalCropper } from '@/orchidui/Cropper.js'
import { ref } from 'vue'

const props = defineProps({
  accept: {
    type: String,
    default: ''
  },
  uploadedImage: {
    type: Object,
    default: () => ({})
  },
  imageClasses: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['change', 'update:uploadedImage', 'delete'])
const isDropdownOpen = ref(false)
const isEditOpen = ref(false)
const editImg = ref('')

const changeImage = (url) => {
  const changedFile = props.uploadedImage
  changedFile.fileUrl = url
  changedFile.fileName = Date.now()
  isEditOpen.value = false
  editImg.value = ''
  emit('update:uploadedImage', changedFile)
}
</script>

<template>
  <div class="flex gap-x-3">
    <label v-if="!uploadedImage?.fileUrl">
      <div
        class="w-[100px] hover:bg-oc-primary-50 cursor-pointer bg-oc-accent-1-50 text-oc-accent-1 rounded aspect-square flex items-center justify-center"
        :class="imageClasses"
      >
        <Icon name="plus" />
      </div>
      <input
        class="hidden"
        type="file"
        :accept="accept || 'image/png, image/jpeg'"
        @change="$emit('change', $event)"
      />
    </label>
    <div
      v-if="uploadedImage?.fileUrl"
      class="w-[100px] group relative cursor-pointer aspect-square border rounded border-oc-accent-1-100"
      :class="imageClasses"
    >
      <Dropdown
        v-model="isDropdownOpen"
        placement="bottom-end"
        class="absolute top-2 right-2 z-[1010] hidden group-hover:flex"
      >
        <Icon
          name="dots-vertical"
          class="absolute right-0 cursor-pointer bg-black/[.45] rounded-full w-[32px] h-[32px] flex items-center justify-center text-oc-bg-light"
        />
        <template #menu>
          <div class="py-2 flex flex-col">
            <div
              class="flex p-3 cursor-pointer items-center gap-x-3"
              @click="
                () => {
                  editImg = uploadedImage.fileUrl
                  isDropdownOpen = false
                  isEditOpen = true
                }
              "
            >
              <Icon width="16" height="16" name="pencil" />
              <span>Edit Image</span>
            </div>
            <div
              class="flex p-3 cursor-pointer items-center text-oc-error gap-x-3"
              @click="
                () => {
                  $emit('delete')
                  isDropdownOpen = false
                }
              "
            >
              <Icon width="16" height="16" name="bin" />
              <span>Delete</span>
            </div>
          </div>
        </template>
      </Dropdown>
      <img :src="uploadedImage.fileUrl" alt="uploaded-image" class="object-contain h-full w-full" />
    </div>

    <teleport to="body">
      <ModalCropper
        v-if="isEditOpen"
        v-model="isEditOpen"
        :img="editImg"
        @close="
          () => {
            isEditOpen = false
            editImg = ''
          }
        "
        @change-image="changeImage"
      />
    </teleport>
  </div>
</template>
