<script setup>
import { Dropdown, Icon, ConfirmationModal } from "@/orchidui";
import { ref, computed } from "vue";
import { Draggable } from "@/orchidui/Draggable.js";
import { ModalCropper } from "@/orchidui/Cropper.js";

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
  withLink: Boolean,
  maxImages: Number,
});
const emit = defineEmits([
  "change",
  "update:selectedImage",
  "update:uploadedImages",
  "onRemoveImage",
  "onEditImage",
  "delete"
]);
const isDropdownOpen = ref([]);
const isEditOpen = ref(false);
const editImgIndex = ref("");
const editLink = ref("");

const editImgIndexFileUrl = computed(() => {
  return props.uploadedImages[editImgIndex.value].fileUrl;
});
const deleteConfirmationModal = ref(false);
const deleteIndex = ref("");
const onDeleteFile = (index) => {
  deleteConfirmationModal.value = true;
  deleteIndex.value = index;
};

const resetFile = ref(false)

const confirmDeleteFile = () => {
  const deletedImage = props.uploadedImages.find(
    (_, i) => i === deleteIndex.value,
  );

  if (deletedImage.current) {
    emit("onRemoveImage", deletedImage);
  } else {
    emit("delete", deleteIndex.value);
    resetFile.value = true
    setTimeout(() => {
      resetFile.value = false
    }, 1000)
  }

  emit(
    "update:uploadedImages",
    props.uploadedImages.filter((_, i) => i !== deleteIndex.value),
  );
  deleteConfirmationModal.value = false;
};
const changeImage = (url) => {
  const changedFile = props.uploadedImages[editImgIndex.value];
  changedFile.fileUrl = url;
  isEditOpen.value = false;
  editImgIndex.value = "";
  editLink.value = "";

  if (changedFile.current) {
    emit("onEditImage", changedFile);
  }
};
const updateLink = (link) => {
  const changedFile = props.uploadedImages[editImgIndex.value];
  changedFile.link = link;
  emit("update:uploadedImages", props.uploadedImages);
};

const onChange = ($event) => {
  let limit =
    props.uploadedImages.length + $event.target.files.length > props.maxImages;
  if (!props.maxImages || (props.maxImages && !limit)) {
    emit("change", $event);
  }
};
</script>

<template>
  <div class="relative min-h-[100px]">
    <label class="absolute">
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
        multiple
        @change="onChange"
      />
    </label>
    <Draggable
      :key="uploadedImages.length"
      :model-value="uploadedImages"
      filter="filtered-el"
      class="grid w-fit grid-cols-3 gap-3"
      :style="`grid-template-columns: repeat(${columnsCount}, 1fr)`"
      @update:model-value="$emit('update:uploadedImages', $event)"
    >
      <template #default="{ list }">
        <div
          v-for="(img, i) in list"
          :key="img.fileName"
          class="w-[100px] group relative cursor-pointer aspect-square border rounded border-oc-accent-1-100 bg-cover bg-center"
          :class="{
            'border-oc-primary': selectedImage.fileName === img.fileName,
            'col-start-2': i === 0,
          }"
          :style="`background-image: url(${img.fileUrl})`"
          @click="$emit('update:selectedImage', img)"
        >
          <Dropdown
            v-model="isDropdownOpen[i]"
            placement="bottom-end"
            class="absolute top-2 right-2 z-[1010] hidden group-hover:flex"
          >
            <Icon
              name="dots-vertical"
              class="absolute right-0 cursor-pointer w-[32px] flex h-[32px] items-center justify-center text-oc-bg-light"
            />
            <template #menu>
              <slot
                name="action"
                :item="img"
                :remove-item="onDeleteFile"
                :file-index="i"
              >
                <div class="py-2 flex flex-col">
                  <div
                    class="flex p-3 cursor-pointer items-center gap-x-3"
                    @click="
                      editImgIndex = i;
                      editLink = img.link;
                      isDropdownOpen[i] = false;
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
                      isDropdownOpen[i] = false;
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
      v-if="isEditOpen"
      v-model="isEditOpen"
      :img="editImgIndexFileUrl"
      :with-link="withLink"
      :link="editLink"
      @close="
        isEditOpen = false;
        editImgIndex = '';
      "
      @change-image="changeImage"
      @update:link="updateLink"
    />

    <ConfirmationModal
      v-model="deleteConfirmationModal"
      description="Do you want to delete this image ?"
      @confirm="confirmDeleteFile"
    />
  </div>
</template>
