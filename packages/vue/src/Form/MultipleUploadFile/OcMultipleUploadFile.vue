<script setup>
import { onMounted, ref } from 'vue'
import { Icon, BaseInput, Button } from '@/orchidui'
import { useUploadFileProgress } from '@/orchidui/composables/uploadFileProgress.js'
import OcSimpleMultipleUpload from './OcSimpleMultipleUpload.vue'

const emit = defineEmits([
  'update:modelValue',
  'update:selectedImage',
  'onEditFile',
  'onRemoveFile',
  'onExceedMaxFileSize',
  'onMaxFileExceed'
])
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: ''
  },
  validateAcceptFileType: Boolean,
  /**
   * Maximum file size in MB
   */
  maxSize: Number,
  maxImages: Number,
  hint: String,
  label: String,
  errorMessage: String,
  isImageOnly: Boolean,
  columnsCount: Number,
  selectedImage: {
    type: Object,
    default: () => ({})
  },
  inputOptions: Array,
  isDisabled: Boolean,
  labelUploadArea: String,
  isButtonOnly: Boolean,
  buttonUploadProps: {
    type: Object,
    default: () => ({
      label: 'Upload'
    })
  }
})
const inputRef = ref()
const isDragover = ref(false)
const isUploading = ref(false)
const { isErrorMaxSize, currentFiles, onChangeFile, onDeleteFile } = useUploadFileProgress(
  props.maxSize,
  emit,
  props.accept,
  props.validateAcceptFileType
)

onMounted(() => {
  const formattedModelValue = []

  if (props.modelValue.length > 0) {
    props.modelValue.forEach((item) => {
      if (item.current) {
        formattedModelValue.push({
          current: item.current,
          file: null,
          fileName: item.current.caption ?? '',
          progress: 100,
          fileUrl: item.current.path,
          totalSize: item.current.file_size ?? 0,
          isLoaded: true,
          extension: item.current.extension ?? 'png',
          description: item.current.description,
          caption: item.current.caption,
          caption_variant: item.current.caption_variant,
          lightbox: item.current.lightbox
        })
      }
    })

    currentFiles.value = formattedModelValue
  }
})

const onChange = (event) => {
  isUploading.value = true
  onChangeFile(event)
}

const onDelete = (index) => {
  isUploading.value = false
  onDeleteFile(index)
}

const triggerInput = () => {
  inputRef.value?.click()
}
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <BaseInput
      :label="label"
      :hint="hint"
      :error-message="isErrorMaxSize ? `File(s) is more than ${maxSize}MB` : errorMessage"
    >
      <OcSimpleMultipleUpload
        v-if="isImageOnly"
        :uploaded-images="currentFiles"
        :selected-image="selectedImage"
        :columns-count="columnsCount"
        :accept="accept"
        :input-options="inputOptions"
        :max-images="maxImages"
        @change="onChangeFile"
        @update:selected-image="$emit('update:selectedImage', $event)"
        @update:uploaded-images="
          ($event) => {
            currentFiles = $event
            $emit('update:modelValue', $event)
          }
        "
        @on-edit-image="$emit('onEditFile', $event)"
        @on-remove-image="$emit('onRemoveFile', $event)"
        @delete="onDeleteFile"
        @on-max-file-exceed="$emit('onMaxFileExceed', $event)"
      >
        <template #action="slotData">
          <slot
            name="action"
            :item="slotData.item"
            :remove-item="slotData.removeItem"
            :file-index="slotData.i"
          />
        </template>
      </OcSimpleMultipleUpload>
      <template v-else-if="isButtonOnly">
        <slot name="button" :trigger-input="triggerInput">
          <Button v-bind="buttonUploadProps" @click="triggerInput" />
        </slot>

        <input
          id="my-file"
          ref="inputRef"
          class="hidden"
          type="file"
          multiple
          :accept="accept"
          @change="onChange"
        />
      </template>
      <div
        v-else
        class="relative border rounded p-3 min-w-[30rem] flex flex-col"
        :class="[
          isErrorMaxSize || errorMessage ? 'border-oc-error' : 'border-oc-gray-200',
          {
            'bg-oc-bg-dark': isDisabled
          }
        ]"
      >
        <div class="input-file-uploaded flex flex-col gap-y-3">
          <div
            v-for="(file, index) in currentFiles"
            :key="`${index}-${file.fileName}`"
            class="flex justify-between relative items-center w-full last:mb-2"
          >
            <div class="flex items-center gap-x-3">
              <div class="flex flex-col items-center justify-center text-oc-text-300">
                <Icon name="file-extension" width="14" height="10" />
                <span class="uppercase text-[8px] font-bold leading-none block">
                  {{ file.extension }}
                </span>
              </div>
              <span class="text-oc-text-400 text-sm">{{ file?.fileName }}</span>
            </div>
            <div
              v-if="isUploading"
              class="w-[100px] h-[16px] absolute right-0 flex items-center z-40"
              :class="{ 'on-end-loading': file.progress === 100 }"
            >
              <div
                class="w-[100px] h-[6px] bg-oc-accent-1-50 rounded-full overflow-hidden transition-all duration-1000"
              >
                <div
                  :style="{ width: `${file.progress}%` }"
                  class="block transition-all duration-1000 h-[6px] rounded-full bg-oc-primary"
                />
              </div>
            </div>

            <Icon
              v-if="!isDisabled"
              width="12"
              height="12"
              name="bin"
              class="opacity-0 text-oc-error cursor-pointer absolute right-0"
              :class="{
                'on-enable-delete': file.progress === 100 && isUploading,
                'opacity-100': !isUploading
              }"
              @click="onDelete(index)"
            />
          </div>
        </div>
        <label
          tabindex="0"
          for="my-file"
          class="relative overflow-hidden rounded-sm flex-1 flex flex-col transition-all border-transparent border-dashed hover:border-oc-primary"
          :class="{
            '!border-oc-primary': isDragover && !isDisabled,
            border: !currentFiles.length,
            'cursor-pointer': !isDisabled
          }"
        >
          <input
            v-if="!isDisabled"
            id="my-file"
            ref="inputRef"
            class="w-full h-full absolute opacity-0 cursor-pointer"
            type="file"
            multiple
            :accept="accept"
            @dragover="isDragover = true"
            @dragleave="isDragover = false"
            @drop="isDragover = false"
            @change="onChange"
          />
          <div
            v-if="!currentFiles.length"
            class="w-full text-oc-text-300 text-sm h-full flex-1 flex flex-col justify-center items-center my-auto min-h-[120px] transition-all duration-300 gap-2"
          >
            <Icon name="upload" :class="isDisabled ? 'text-oc-accent-1-200' : 'text-oc-accent-1'" />
            <div v-if="labelUploadArea">{{ labelUploadArea }}</div>
            <div v-else-if="isDisabled">Upload disabled</div>
            <div v-else class="text-center">
              <div>Select documents or drag here</div>
              <div>File max {{ maxSize }}MB</div>
            </div>
          </div>
          <div v-else-if="!isDisabled" class="mt-3 flex items-center justify-center">
            <span class="text-oc-accent-1 text-sm">+ Add more</span>
          </div>
        </label>
      </div>

      <template #hint>
        <slot name="hint"></slot>
      </template>
    </BaseInput>
  </div>
</template>

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
