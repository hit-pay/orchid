<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Input, Button, RadioGroup, Icon } from "@/orchidui";
import { useUploadFileProgress } from "@/orchidui/composables/uploadFileProgress.js";

const props = defineProps({
  modelValue: Object,
});
const emit = defineEmits(["update:modelValue"]);

const inputRef = ref();
const fileLink = ref("");
const fileName = ref("");
const isDragover = ref(false);
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

const { currentFiles, onChangeFile, onDeleteFile } =
  useUploadFileProgress(emit);
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

      <div class="flex bg-white gap-x-3">
        <template v-if="selectedRadio === 'url'">
          <Input v-model="fileLink" placeholder="https://website.com" />
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
          class="p-3 flex items-center gap-x-5 rounded border"
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
          @change="onChangeFile"
        />
      </div>
    </div>

    <div
      v-else
      class="p-3 rounded border flex gap-x-5 border-oc-gray-200 bg-white items-center"
    >
      <div class="flex flex-1 items-center gap-x-3 text-sm text-oc-text-400">
        <div
          class="flex flex-col w-7 h-7 items-center justify-center text-oc-text-300"
        >
          <Icon name="file-extension" width="14" height="10" />
          <span class="uppercase text-[8px] font-bold leading-none block">
            svg
          </span>
        </div>
        {{ currentFiles?.[0].fileName }}
      </div>
      <div class="flex">
        <div class="flex flex-col gap-y-1 items-center">
          <span class="text-sm text-oc-primary">
            {{ currentFiles?.[0]?.progress || 0 }}%
          </span>
          <div class="rounded-full bg-oc-gray-100 w-[48px] h-2 overflow-hidden">
            <div
              class="h-2 bg-oc-primary transition-all duration-100"
              :style="{ width: `${currentFiles?.[0]?.progress || 0}%` }"
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
            :name="currentFiles?.[0]?.progress === 100 ? 'bin' : 'x-circle'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
