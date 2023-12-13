<template>
  <div class="flex flex-col gap-y-2">
    <BaseInput
      :label="label"
      :hint="hint"
      :error-message="
        errorMessage
          ? isErrorMaxSize && `File(s) is more than ${maxSize}MB`
          : ''
      "
    >
      <OcSimpleMultipleUpload
        v-if="isImageOnly"
        :uploaded-images="currentFiles"
        :selected-image="selectedImage"
        :columns-count="columnsCount"
        :accept="accept"
        @change="onChangeFile"
        @update:selected-image="$emit('update:selectedImage', $event)"
        @update:uploaded-images="
          $emit('update:modelValue', $event);
          currentFiles = $event;
        "
        @on-edit-image="$emit('onEditFile', $event)"
        @on-remove-image="$emit('onRemoveFile', $event)"
      >
        <template #action="{ item, removeItem, i }">
          <slot
            name="action"
            :item="item"
            :remove-item="removeItem"
            :file-index="i"
          />
        </template>
      </OcSimpleMultipleUpload>
      <div
        v-else
        class="relative border rounded p-3 min-w-[30rem] flex flex-col"
        :class="isErrorMaxSize ? 'border-oc-error' : 'border-oc-gray-200'"
      >
        <div class="input-file-uploaded flex flex-col gap-y-3">
          <div
            v-for="(file, index) in currentFiles"
            :key="`${index}-${file.fileName}`"
            class="flex justify-between relative items-center w-full last:mb-2"
          >
            <div class="flex items-center gap-x-3">
              <div
                class="flex flex-col items-center justify-center text-oc-text-300"
              >
                <Icon name="file-extension" width="14" height="10" />
                <span class="uppercase text-[8px] font-bold leading-none block">
                  {{ file.extension }}
                </span>
              </div>
              <span class="text-oc-text-400 text-sm">{{ file?.fileName }}</span>
            </div>
            <div
              class="w-[100px] h-[6px] bg-oc-accent-1-50 rounded-full overflow-hidden transition-all duration-1000 absolute right-0"
              :class="{ 'on-end-loading': file.progress === 100 }"
            >
              <div
                :style="{ width: `${file.progress}%` }"
                class="block transition-all duration-1000 h-[6px] rounded-full bg-oc-primary"
              />
            </div>
            <Icon
              width="12"
              height="12"
              name="bin"
              class="opacity-0 text-oc-error cursor-pointer absolute right-0"
              :class="{
                'on-enable-delete': file.progress === 100,
              }"
              @click="onDeleteFile(index)"
            />
          </div>
        </div>
        <label
          tabindex="0"
          for="my-file"
          class="relative overflow-hidden rounded-sm flex-1 flex flex-col transition-all border-transparent border-dashed hover:border-oc-primary cursor-pointer"
          :class="{
            '!border-oc-primary': isDragover,
            border: !currentFiles.length,
          }"
        >
          <input
            id="my-file"
            ref="inputRef"
            class="w-full h-full absolute opacity-0 cursor-pointer"
            type="file"
            multiple
            :accept="accept"
            @dragover="isDragover = true"
            @dragleave="isDragover = false"
            @drop="isDragover = false"
            @change="onChangeFile"
          />
          <div
            v-if="!currentFiles.length"
            class="w-full text-oc-text-300 text-sm h -full flex-1 flex flex-col justify-center items-center my-auto min-h-[7rem] transition-all duration-300"
          >
            <Icon name="upload" class="text-oc-accent-1" />
            <span>Select documents or drag here</span>
            <span>File max {{ maxSize }}MB</span>
          </div>
          <div v-else class="mt-3 flex items-center justify-center">
            <span class="text-oc-accent-1 text-sm">+ Add more</span>
          </div>
        </label>
      </div>
    </BaseInput>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { Icon, BaseInput } from "@/orchidui";
import { useUploadFileProgress } from "@/orchidui/composables/uploadFileProgress.js";
import OcSimpleMultipleUpload from "./OcSimpleMultipleUpload.vue";

const emit = defineEmits([
  "update:modelValue",
  "update:selectedImage",
  "onEditFile",
  "onRemoveFile",
]);
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  accept: {
    type: String,
    default: "",
  },
  /**
   * Maximum file size in MB
   */
  maxSize: Number,
  hint: String,
  label: String,
  errorMessage: String,
  isImageOnly: Boolean,
  columnsCount: Number,
  selectedImage: {
    type: Object,
    default: () => ({}),
  },
});
const inputRef = ref();
const isDragover = ref(false);
const { isErrorMaxSize, currentFiles, onChangeFile, onDeleteFile } =
  useUploadFileProgress(props.maxSize, emit);

onMounted(() => {
  const formatedModelValue = [];

  if (props.modelValue.length > 0) {
    props.modelValue.forEach((item) => {
      formatedModelValue.push({
        current: item.current,
        file: null,
        fileName: item.current.caption ?? "",
        progress: 100,
        fileUrl: item.current.path,
        totalSize: item.current.file_size ?? 0,
        isLoaded: true,
        extension: item.current.extention ?? "png",
      });
    });

    currentFiles.value = formatedModelValue;
  }
});
</script>

<style lang="scss">
.on-end-loading {
  animation: finish-loading 1s ease-out 1s forwards;
  @keyframes finish-loading {
    0% {
      visibility: visible;
    }
    75% {
      visibility: hidden;
      height: 0;
      opacity: 0;
    }
    100% {
      visibility: hidden;
      height: 0;
      opacity: 0;
      display: none;
    }
  }
}

.on-enable-delete {
  animation: enable-delete 1.5s ease-in 2s forwards;
  @keyframes enable-delete {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    75% {
      visibility: visible;
    }
    100% {
      visibility: visible;
      opacity: 100;
    }
  }
}
</style>
