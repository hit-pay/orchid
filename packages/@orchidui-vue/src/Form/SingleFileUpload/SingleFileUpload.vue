<script setup>
import { computed, onMounted, ref } from "vue";
import { Input, Button, RadioGroup, Icon, Dropdown } from "@/orchidui";
import { useUploadFileProgress } from "@/orchidui/composables/uploadFileProgress.js";
import ModalCropper from "./ModalCropper.vue";

const props = defineProps({
  modelValue: Object,
  isPreview: Boolean,
  /**
   * Maximum file size in MB
   */
  maxSize: Number,
  accept: String,
});
const emit = defineEmits(["update:modelValue"]);

const inputRef = ref();
const fileLink = ref("");
const fileName = ref("");
const isLinkValid = ref(true);
const isDragover = ref(false);
const isDropdownOpen = ref(false);
const isEditOpen = ref(false);
const editImg = ref("");
const selectedRadio = ref("upload");
const radios = [
  {
    label: "Upload file",
    value: "upload",
  },
  {
    label: "Insert from URL",
    value: "url",
  },
];

const { currentFiles, onChangeFile, onDeleteFile } = useUploadFileProgress(
  props.maxSize,
  emit,
);

const videoUrl = computed(() =>
  URL.createObjectURL(currentFiles.value?.[0].file),
);
const currentFile = computed(() => currentFiles.value?.[0]);
onMounted(() => {
  if (props.modelValue) currentFiles.value = [props.modelValue];
});
const onDrop = (ev) => {
  ev.preventDefault();
  const dropFiles = ev.dataTransfer.files;
  onChangeFile({ target: { files: dropFiles } });
};
const saveLinkFile = () => {
  if (!fileLink.value || !fileName.value) return;
  emit("update:modelValue", { fileName, fileLink });
};
const changeImage = (url) => {
  currentFile.value.fileUrl = url;
  isEditOpen.value = false;
  editImg.value = "";
  emit("update:modelValue", currentFile.value);
};

const checkFileLink = async (link) => {
  if (!link) return;
  try {
    const response = await fetch(link, { method: "HEAD" });
    isLinkValid.value = response.ok;
  } catch (error) {
    console.log("Error checking file link:", error);
  }
};
</script>

<template>
  <div class="p-5 rounded bg-oc-bg-dark">
    <div
      v-if="!currentFiles.length"
      class="py-2 flex flex-col items-center gap-y-4"
    >
      <RadioGroup
        v-model="selectedRadio"
        :radio="radios"
        group-name="uploads"
        alignment="horizontal"
        wrapper-class="gap-x-5 justify-center"
      />

      <div class="flex items-baseline gap-x-3">
        <template v-if="selectedRadio === 'url'">
          <Input
            v-model="fileLink"
            :error-message="fileLink && !isLinkValid ? 'Invalid link' : ''"
            placeholder="https://website.com"
            @blur="checkFileLink(fileLink)"
          />
          <Input v-model="fileName" placeholder="Enter file name" />

          <Button
            class="flex-shrink-0"
            label="OK"
            disabled
            @click="saveLinkFile"
          />
        </template>

        <div
          v-else
          class="p-3 flex bg-white items-center gap-x-5 rounded border"
          :class="
            isDragover
              ? 'border-oc-primary border-dashed'
              : 'border-oc-gray-200'
          "
          @dragenter="isDragover = true"
          @dragleave="isDragover = false"
          @drop="onDrop"
          @dragover.prevent
        >
          <span class="text-sm text-oc-text-400 pointer-events-none">
            Choose file from your computer or drag here
          </span>
          <Button
            size="small"
            variant="secondary"
            left-icon="upload"
            label="Upload"
            @click="inputRef.click()"
          />
        </div>

        <input
          ref="inputRef"
          class="hidden"
          type="file"
          :accept="accept"
          @change="onChangeFile"
        />
      </div>
    </div>

    <div
      v-else
      class="p-3 rounded border flex gap-x-5 border-oc-gray-200 bg-white items-center"
      :class="isPreview && 'w-fit'"
    >
      <div
        v-if="isPreview && currentFile?.progress === 100"
        class="relative group w-fit rounded overflow-hidden"
      >
        <video
          v-if="currentFile?.file.type.includes('video')"
          autoplay
          loop
          :src="videoUrl"
        />
        <img v-else :src="currentFile?.fileUrl" />
        <Dropdown v-model="isDropdownOpen" class="absolute top-3 right-3">
          <Icon
            name="dots-vertical"
            class="cursor-pointer w-[28px] aspect-square hidden items-center justify-center text-oc-text-400 group-hover:flex"
          />
          <template #menu>
            <div class="py-2 flex flex-col">
              <div
                v-if="!currentFile?.file.type.includes('video')"
                class="flex p-3 cursor-pointer items-center gap-x-3"
                @click="
                  editImg = currentFile?.fileUrl;
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
                  onDeleteFile(0);
                  isDropdownOpen = false;
                "
              >
                <Icon width="16" height="16" name="bin" />
                <span>Delete</span>
              </div>
            </div>
          </template>
        </Dropdown>
        <ModalCropper
          v-if="!currentFile?.file.type.includes('video')"
          v-model="isEditOpen"
          :img="editImg"
          @close="
            isEditOpen = false;
            editImg = '';
          "
          @change-image="changeImage"
        />
      </div>
      <template v-else>
        <div class="flex flex-1 items-center gap-x-3 text-sm text-oc-text-400">
          <div
            class="flex flex-col w-7 h-7 items-center justify-center text-oc-text-300"
          >
            <Icon name="file-extension" width="14" height="10" />
            <span class="uppercase text-[8px] font-bold leading-none block">
              {{ currentFile?.extension }}
            </span>
          </div>
          {{ currentFile?.fileName }}
        </div>
        <div class="flex">
          <div
            :class="currentFile?.progress === 100 ? 'opacity-0' : ''"
            class="transition-all duration-500 flex flex-col gap-y-1 items-center"
          >
            <span class="text-sm text-oc-primary">
              {{ currentFile?.progress || 0 }}%
            </span>
            <div
              class="rounded-full bg-oc-gray-100 w-[48px] h-2 overflow-hidden"
            >
              <div
                class="h-2 bg-oc-primary transition-all duration-100"
                :style="{ width: `${currentFile?.progress || 0}%` }"
              />
            </div>
          </div>
          <div
            class="w-[36px] cursor-pointer flex text-oc-error items-center justify-center"
            @click="onDeleteFile(0)"
          >
            <Icon
              width="16"
              height="16"
              :name="currentFile?.progress === 100 ? 'bin' : 'x-circle'"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
