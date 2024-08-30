<script setup>
import { computed, onMounted, ref } from 'vue'
import { Input, Button, BaseInput, Icon, Dropdown } from '@/orchidui'
import { useUploadFileProgress } from '@/orchidui/composables/uploadFileProgress.js'
import { ModalCropper } from '@/orchidui/Cropper.js'
import SingleOnlyImageUpload from './OcSingleOnlyImageUpload.vue'

const props = defineProps({
  format: {
    type: String,
    default: 'array'
  },
  modelValue: Object,
  isPreview: Boolean,
  isImageOnly: Boolean,
  showUploadImageArea: Boolean,
  /**
   * Maximum file size in MB
   */
  maxSize: Number,
  accept: String,
  validateAcceptFileType: Boolean,
  errorMessage: String,
  imageClasses: String,
  allowToEdit: {
    type: Boolean,
    default: true
  },
  label: String,
  labelClass: String,
  hint: String,
  uploadButtonOptions: Object,
  /**
   * Variant of input (upload or url)
   */
  variant: {
    type: String,
    default: 'upload',
    validator: (val) => ['upload', 'url'].includes(val)
  },
  shouldTruncateFileName: Boolean,
  isButtonOnly: Boolean,
  isDisabled: Boolean,
  buttonUploadProps: {
    type: Object,
    default: () => ({
      label: 'Upload'
    })
  }
})
const emit = defineEmits([
  'update:modelValue',
  'onRemoveFile',
  'onExceedMaxFileSize',
  'fileExist',
  'invalidFileType'
])

const inputRef = ref()
const fileLink = ref('')
const fileName = ref('')
const isLinkValid = ref(true)
const isDragover = ref(false)
const isDropdownOpen = ref(false)
const isEditOpen = ref(false)
const editImg = ref('')

const { currentFiles, onChangeFile, onDeleteFile } = useUploadFileProgress(
  props.maxSize,
  emit,
  props.accept,
  props.validateAcceptFileType
)

const videoUrl = computed(() => URL.createObjectURL(currentFiles.value?.[0].file))
const currentFile = computed(() => currentFiles.value?.[0])
onMounted(() => {
  if (props.modelValue && props.modelValue.current) {
    const formattedModelValue = [
      {
        current: props.modelValue.current,
        file: null,
        fileName: props.modelValue.current.caption ?? '',
        progress: 100,
        fileUrl: props.modelValue.current.path,
        totalSize: props.modelValue.current.file_size ?? 0,
        isLoaded: true,
        extension: props.modelValue.current.extension ?? 'png'
      }
    ]
    currentFiles.value = formattedModelValue
  }
})
const onDrop = (ev) => {
  ev.preventDefault()
  const dropFiles = ev.dataTransfer.files
  onChangeFile({ target: { files: dropFiles } }, props.format === 'object')
}
const saveLinkFile = () => {
  if (!fileLink.value || !fileName.value) return
  emit('update:modelValue', { fileName, fileLink })
}
const changeImage = (url) => {
  currentFile.value.fileUrl = url
  currentFile.value.fileName = Date.now()
  isEditOpen.value = false
  editImg.value = ''
  emit('update:modelValue', props.format === 'object' ? currentFile.value : [currentFile.value])
}

const checkFileLink = async (link) => {
  if (!link) return
  try {
    const response = await fetch(link, { method: 'HEAD' })
    isLinkValid.value = response.ok
  } catch (error) {
    console.log('Error checking file link:', error)
  }
}

const onEditFile = () => {
  editImg.value = currentFile.value.fileUrl
  isDropdownOpen.value = false
  isEditOpen.value = true
}

const onUploadImage = ($event) => {
  emit('update:modelValue', $event)
}
</script>

<template>
  <BaseInput :label="label" :label-class="labelClass" :hint="hint" :error-message="errorMessage">
    <SingleOnlyImageUpload
      v-if="isImageOnly"
      :accept="accept"
      :uploaded-image="currentFile"
      :image-classes="imageClasses"
      :show-upload-image-area="showUploadImageArea"
      @update:uploaded-image="onUploadImage"
      @change="onChangeFile($event, props.format === 'object')"
      @delete="onDeleteFile(0)"
    />
    <template v-else-if="isButtonOnly">
      <Button v-bind="buttonUploadProps" @click="inputRef?.click()" />

      <input
        ref="inputRef"
        class="hidden"
        type="file"
        :accept="accept"
        @change="onChangeFile($event, props.format === 'object')"
      />
    </template>
    <template v-else>
      <div v-if="!currentFiles.length" class="py-2 flex flex-col items-center gap-y-4">
        <div class="flex items-baseline gap-x-3 w-full">
          <template v-if="variant === 'url'">
            <Input
              v-model="fileLink"
              :error-message="fileLink && !isLinkValid ? 'Invalid link' : ''"
              placeholder="https://website.com"
              @blur="checkFileLink(fileLink)"
            />
            <Input v-model="fileName" placeholder="Enter file name" />

            <Button class="flex-shrink-0" label="OK" disabled @click="saveLinkFile" />
          </template>

          <div
            class="p-3 flex bg-white items-center gap-x-5 rounded border w-full "
            :class="[
              isDragover ? 'border-oc-primary border-dashed' : 'border-oc-gray-200',
              {
                '!bg-oc-bg-dark': isDisabled,
              }
            ]"
            @dragenter="isDragover = true"
            @dragleave="isDragover = false"
            @drop="onDrop"
            @dragover.prevent
          >
            <span class="text-sm flex-1 text-oc-text-400 pointer-events-none">
              {{ isDisabled ? 'Upload disabled' : 'Choose file from your computer or drag here' }}
            </span>
            <Button
              size="small"
              :is-disabled="isDisabled"
              :variant="uploadButtonOptions?.variant ?? 'secondary'"
              :left-icon="uploadButtonOptions?.leftIcon ?? 'upload'"
              :label="uploadButtonOptions?.label ?? 'Upload'"
              @click="inputRef.click()"
            />
          </div>

          <input
            ref="inputRef"
            class="hidden"
            type="file"
            :accept="accept"
            @change="onChangeFile($event, props.format === 'object')"
          />
        </div>
      </div>

      <div
        v-else
        class="p-3 rounded border flex gap-x-5 border-oc-gray-200 bg-white items-center"
        :class="{
          'w-fit': isPreview,
          '!bg-oc-bg-dark': isDisabled,
        }"
      >
        <div
          v-if="isPreview && currentFile?.progress === 100"
          class="relative group w-fit rounded overflow-hidden"
        >
          <video v-if="currentFile?.file?.type.includes('video')" autoplay loop :src="videoUrl" />
          <img v-else :src="currentFile?.fileUrl" />
          <Dropdown v-model="isDropdownOpen" class="absolute top-3 right-3">
            <Icon
              name="dots-vertical"
              class="cursor-pointer w-[28px] aspect-square hidden items-center justify-center text-oc-text-400 group-hover:flex"
            />
            <template #menu>
              <div class="py-2 flex flex-col">
                <div
                  v-if="!currentFile?.file?.type.includes('video') && allowToEdit"
                  class="flex p-3 cursor-pointer items-center gap-x-3"
                  @click="onEditFile"
                >
                  <Icon width="16" height="16" name="pencil" />
                  <span>Edit</span>
                </div>
                <div
                  class="flex p-3 cursor-pointer items-center text-oc-error gap-x-3"
                  @click="
                    () => {
                      onDeleteFile(0)
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
          <ModalCropper
            v-if="!currentFile?.file?.type.includes('video') && isEditOpen"
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
        </div>
        <template v-else>
          <div class="flex flex-1 items-center gap-x-3 text-sm text-oc-text-400">
            <div class="flex flex-col w-7 h-7 items-center justify-center text-oc-text-300">
              <Icon name="file-extension" width="14" height="10" />
              <span class="uppercase text-[8px] font-bold leading-none block">
                {{ currentFile?.extension }}
              </span>
            </div>

            <div :class="[shouldTruncateFileName ? 'truncate max-w-[250px]' : '']">
              {{ currentFile?.fileName }}
            </div>
          </div>
          <div class="flex">
            <div
              :class="currentFile?.progress === 100 ? 'opacity-0' : ''"
              class="transition-all duration-500 flex flex-col gap-y-1 items-center"
            >
              <span class="text-sm text-oc-primary"> {{ currentFile?.progress || 0 }}% </span>
              <div class="rounded-full bg-oc-gray-100 w-[48px] h-2 overflow-hidden">
                <div
                  class="h-2 bg-oc-primary transition-all duration-100"
                  :style="{ width: `${currentFile?.progress || 0}%` }"
                />
              </div>
            </div>
            <div
              v-if="!isDisabled"
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
    </template>

    <template #hint>
      <slot name="hint"></slot>
    </template>
  </BaseInput>
</template>
