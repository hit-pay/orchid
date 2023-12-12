<script setup lang="ts">
import { Dropdown, Icon } from "@/orchidui";
import { ref } from "vue";
import { Draggable } from "@/orchidui/Draggable.js";
import ModalCropper from "../SingleFileUpload/ModalCropper.vue";

const props = defineProps({
  accept: {
    type: String,
    default: "",
  },
  uploadedImages: {
    type: Array,
    default: () => [],
  },
  selectedImage: {
    type: Object,
    default: () => ({}),
  },
  columnsCount: {
    type: Number,
    default: 3,
  },
});
const emit = defineEmits([
  "change",
  "update:selectedImage",
  "update:uploadedImages",
  "onRemoveImage",
  "onEditImage",
]);
const isDropdownOpen = ref(false);
const isEditOpen = ref(false);
const editImg = ref("");
const onDeleteFile = (index) => {
  const deletedImage = props.uploadedImages.find((_, i) => i === index);
  if (deletedImage.current) {
    emit("onRemoveImage", deletedImage);
  }
  emit(
    "update:uploadedImages",
    props.uploadedImages.filter((_, i) => i !== index),
  );
};
const changeImage = (url) => {
  const changedFile = props.uploadedImages.find(
    (img) => img.fileUrl === editImg.value,
  );
  changedFile.fileUrl = url;
  isEditOpen.value = false;
  editImg.value = "";

  if (changedFile.current) {
    emit("onEditImage", changedFile);
  }

  emit("update:uploadedImages", props.uploadedImages);
};
</script>

<template>
  <div class="relative min-h-[90px]">
    <label class="absolute">
      <div
        class="w-[90px] hover:bg-oc-primary-50 cursor-pointer bg-oc-accent-1-50 text-oc-accent-1 rounded aspect-square flex items-center justify-center"
      >
        <Icon name="plus" />
      </div>
      <input
        class="hidden"
        type="file"
        :accept="accept || 'image/png, image/jpeg'"
        multiple
        @change="$emit('change', $event)"
      />
    </label>
    <Draggable
      :key="uploadedImages.length"
      :model-value="uploadedImages"
      filter="filtered-el"
      class="gap-3 grid w-fit grid-cols-3"
      :style="`grid-template-columns: repeat(${columnsCount}, 1fr)`"
      @update:model-value="$emit('update:uploadedImages', $event)"
    >
      <template #default="{ list }">
        <div
          v-for="(img, i) in list"
          :key="img.fileName"
          class="w-[90px] group relative cursor-pointer aspect-square border rounded border-oc-accent-1-100 bg-cover bg-center"
          :class="{
            'border-oc-primary': selectedImage.fileName === img.fileName,
            'col-start-2': i === 0,
          }"
          :style="`background-image: url(${img.fileUrl})`"
          @click="$emit('update:selectedImage', img)"
        >
          <Dropdown
            v-model="isDropdownOpen"
            placement="bottom-end"
            class="absolute top-2 right-2 z-[1010] hidden group-hover:flex"
          >
            <Icon
              name="dots-vertical"
              class="draggable-card-action cursor-pointer w-[32px] flex h-[32px] items-center justify-center text-oc-bg-light"
            />
            <template #menu>
              <slot name="action" :item="img" :remove-item="onDeleteFile" :file-index="i" />
              <!-- <div class="py-2 flex flex-col">
                <div
                  class="flex p-3 cursor-pointer items-center gap-x-3"
                  @click="
                    editImg = img.fileUrl;
                    isDropdownOpen = false;
                    isEditOpen = true;
                  "
                >
                  <Icon width="16" height="16" name="pencil" />
                  <span>Edit</span>
                </div>
                <div
                  class="flex p-3 cursor-pointer items-center text-oc-error gap-x-3"
                  @click="
                    onDeleteFile(i);
                    isDropdownOpen = false;
                  "
                >
                  <Icon width="16" height="16" name="bin" />
                  <span>Delete</span>
                </div>
              </div> -->
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
            class="z-[1009] hidden group-hover:flex absolute bg-black/30 w-full h-full top-0 left-0 rounded"
          >
            <span class="cursor-pointer m-auto drag-el">
              <Icon name="arrows" class="text-oc-accent-1-50" />
            </span>
          </div>
        </div>
      </template>
    </Draggable>

    <ModalCropper
      v-model="isEditOpen"
      :img="editImg"
      @close="
        isEditOpen = false;
        editImg = '';
      "
      @change-image="changeImage"
    />
  </div>
</template>
