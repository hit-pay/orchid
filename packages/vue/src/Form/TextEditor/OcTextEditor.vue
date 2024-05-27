<script setup>
import Quill from "quill";
import { QuillEditor } from "./QuillEditor";
import { ColorPicker } from "@/orchidui/ColorPicker.js";

import { computed, onMounted, ref } from "vue";
import { BaseInput, Icon, Dropdown, Slider } from "@/orchidui";

const props = defineProps({
  /**
   * The font sizes of the editor.
   */
  fontSizes: { type: Array, required: true },
  /**
   * The initial font size of the editor. (if empty the first item of `fontSizes` will be used, needs to be a value of `fontSizes`)
   */
  initialFontSize: { type: String },
  modelValue: String,
  image: String,
  errorMessage: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
    default: "",
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  labelIcon: {
    type: String,
    default: "",
  },
  tooltipText: {
    type: String,
    default: "",
  },
  tooltipOptions: {
    type: Object,
    default: () => ({}),
  },
  variant: {
    type: String,
    validator: (value) => ["default", "text-only"].includes(value),
    default: "default",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue", "update:image"]);

const variants = {
  default: [
    "changes",
    "font-size",
    "font-style",
    "link",
    "image",
    "quote",
    "media",
    "list",
    "alignment",
  ],
  "text-only": [
    "changes",
    "font-size",
    "font-style",
    "link",
    "quote",
    "list",
    "alignment",
  ],
};

const toolbar = computed(() => variants[props.variant]);

const Size = Quill.import("attributors/style/size");
Size.whitelist = props.fontSizes.map((f) => f.value);
Quill.register(Size, true);

const id = ref(
  Math.random()
    .toString(36)
    .replace(/[^a-zA-Z]+/g, "")
);
const isUndoActive = ref(false);
const isRedoActive = ref(false);
const isBoldActive = ref(false);
const isItalicActive = ref(false);
const isUnderlineActive = ref(false);
const isSizeActive = ref(false);
const isBlockquoteActive = ref(false);

const activeSize = ref("");
const activeListFormat = ref("");
const activeAlign = ref("");
const quill = ref();

const loaded = ref(false);
// need for upload to server
const base64Images = ref(props.image);

const checkStates = (value) => {
  isUndoActive.value = quill.value.getQuill().history.stack.undo.length > 0;
  isRedoActive.value = quill.value.getQuill().history.stack.redo.length > 0;
  isBoldActive.value = quill.value.getQuill().getFormat().bold;
  isItalicActive.value = quill.value.getQuill().getFormat().italic;
  isUnderlineActive.value = quill.value.getQuill().getFormat().underline;
  isBlockquoteActive.value = quill.value.getQuill().getFormat().blockquote;
  activeListFormat.value = quill.value.getQuill().getFormat().list;
  activeAlign.value = quill.value.getQuill().getFormat().align;
  // check if innerText null remove tags
  let domTest = document.createElement("div");
  domTest.innerHTML = value;

  if (!loaded.value) {
    return;
  }

  if (!domTest.innerText) {
    // reset
    emit("update:modelValue", "");
  } else {
    emit("update:modelValue", value || "");
  }
  domTest.remove();
};
const undo = () => {
  quill.value.getQuill().history.undo();
  checkStates(props.modelValue);
};
const redo = () => {
  quill.value.getQuill().history.redo();
  checkStates(props.modelValue);
};
const setBold = () => {
  quill.value.getQuill().format("bold", !isBoldActive.value);
  if (!quill.value.getQuill().getSelection()?.length) {
    isBoldActive.value = !isBoldActive.value;
  }
};
const setItalic = () => {
  quill.value.getQuill().format("italic", !isItalicActive.value);
  if (!quill.value.getQuill().getSelection()?.length) {
    isItalicActive.value = !isItalicActive.value;
  }
};
const setUnderline = () => {
  quill.value.getQuill().format("underline", !isUnderlineActive.value);
  if (!quill.value.getQuill().getSelection()?.length) {
    isUnderlineActive.value = !isUnderlineActive.value;
  }
};
const setSize = (size) => {
  quill.value.getQuill().format("size", size);
  activeSize.value = size;
  isSizeActive.value = false;
};
const setLink = () => {
  const selection = quill.value.getQuill().getSelection();
  if (selection && selection.length > 0)
    quill.value.getQuill().theme.tooltip.edit();
};
const setBlockquote = () => {
  quill.value.getQuill().format("blockquote", !isBlockquoteActive.value);
};

const readImage = (base64) => {
  const range = quill.value.getQuill().getSelection();
  if (!range) return;
  quill.value
    .getQuill()
    .clipboard.dangerouslyPasteHTML(range.index, `<img src="${base64}" />`);
  base64Images.value = base64;
  emit("update:image", base64Images.value);
};
const uploadImage = () => {
  if (!quill.value.getQuill().getSelection())
    !quill.value
      .getQuill()
      .setSelection(quill.value.getQuill().getLength() - 1);

  const input = document.createElement("input");
  input.type = "file";
  input.accept = "jpg,.jpeg,.png,.webp,.gif";
  input.onchange = () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => readImage(reader.result);
    reader.readAsDataURL(file);
  };
  input.click();
};
const checkBase64Validation = (base64) => {
  const regex = /^data:image\/(png|jpg|jpeg|gif);base64,/;
  return regex.test(base64);
};

const isValidPasedText = (clipBoardEvent) => {
  setTimeout(() => {
    // emit base 64 image
    if (clipBoardEvent) {
      const htmlData = quill.value.getHTML();
      const domData = document.createElement("div");
      domData.innerHTML = htmlData;
      let allImages = domData.getElementsByTagName("img");
      if (allImages && allImages.length > 0) {
        for (let index = 0; index < allImages.length; index++) {
          const img = allImages[index]?.getAttribute("src");
          if (checkBase64Validation(img)) {
            emit("update:image", img);
          }
        }
      }
    }
  }, 100);

  const { items } = clipBoardEvent.clipboardData;
  if (!items.length) return;
  items[0].getAsString((data) => {
    if (checkBase64Validation(data)) {
      if (!quill.value.getQuill().getSelection()) {
        !quill.value
          .getQuill()
          .setSelection(quill.value.getQuill().getLength() - 1);
      }
    }
  });
};

const uploadVideo = () => {
  quill.value.getQuill().theme.tooltip.edit("video");
};
const setListFormat = (format) => {
  quill.value.getQuill().format("list", format);
  activeListFormat.value = format;
};
const setAlign = (align = undefined) => {
  quill.value.getQuill().format("align", align);
  activeAlign.value = align;
};

const colorPickModel = ref("");

const setColor = () => {
  quill.value.getQuill().format("color", colorPickModel.value);
};

onMounted(() => {
  setSize(props.initialFontSize || props.fontSizes[0].value);
  loaded.value = true;
});

const imageWidth = ref(100);
const showImageWidthToolbar = ref(false);
const updateImageWidth = (val) => {
  imageWidth.value = val;
  const focusNode = window.getSelection()?.focusNode;
  if (focusNode && focusNode.nodeName !== "#text") {
    quill.value.getQuill().format("width", `${imageWidth.value}%`);
    focusNode
      ?.querySelector("img")
      ?.setAttribute("style", `margin:auto;display:block;`);
  }
};

const onClickContent = () => {
  const focusNode = window.getSelection()?.focusNode;
  showImageWidthToolbar.value =
    focusNode.innerHTML && focusNode.innerHTML.includes("<img");
};
</script>

<template>
  <BaseInput
    :label="label"
    :hint="hint"
    :error-message="errorMessage"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
  >
    <div
      class="grid"
      :class="{ 'has-error': errorMessage }"
      @click="onClickContent"
    >
      <QuillEditor
        v-if="id"
        :id="`#${id}`"
        ref="quill"
        :content="modelValue"
        :options="{
          bounds: `#${id}`,
        }"
        theme="snow"
        content-type="html"
        class="min-h-[200px]"
        :placeholder="placeholder"
        @update:content="checkStates"
        @paste="isValidPasedText"
      >
        <template #toolbar>
          <div
            :id="id"
            class="flex min-h-[36px] flex-wrap !py-2 !px-3 gap-x-5 gap-y-2 rounded-t"
          >
            <template v-if="toolbar.includes('changes')">
              <div class="flex items-center gap-x-3">
                <Icon
                  :class="
                    isUndoActive
                      ? 'text-oc-text cursor-pointer'
                      : 'text-oc-text-300'
                  "
                  width="20"
                  height="20"
                  name="text-editor/undo"
                  @click="undo"
                />
                <Icon
                  :class="
                    isRedoActive
                      ? 'text-oc-text cursor-pointer'
                      : 'text-oc-text-300'
                  "
                  width="20"
                  height="20"
                  name="text-editor/redo"
                  @click="redo"
                />
              </div>

              <div class="border-l border-oc-gray-200" />
            </template>

            <template v-if="toolbar.includes('font-size')">
              <Dropdown v-model="isSizeActive">
                <div class="flex items-center gap-x-5 cursor-pointer">
                  {{
                    fontSizes.find((font) => font.value === activeSize)?.label
                  }}
                  <Icon
                    width="20"
                    height="20"
                    name="chevron-down"
                    class="transition-all"
                    :class="isSizeActive ? 'rotate-180' : ''"
                  />
                </div>
                <template #menu>
                  <div class="flex flex-col py-2 overflow-hidden">
                    <div
                      v-for="fontSize in fontSizes"
                      :key="fontSize.value"
                      class="min-w-[120px] cursor-pointer py-2 px-3 hover:bg-oc-gray-50"
                      :class="
                        activeSize === fontSize.value ? 'font-medium' : ''
                      "
                      @click="setSize(fontSize.value)"
                    >
                      {{ fontSize.label }}
                    </div>
                  </div>
                </template>
              </Dropdown>

              <div class="border-l border-oc-gray-200" />
            </template>

            <template v-if="toolbar.includes('font-style')">
              <div class="flex gap-x-3 items-center">
                <Icon
                  class="cursor-pointer"
                  :class="isBoldActive ? 'text-oc-text' : 'text-oc-text-300'"
                  width="20"
                  height="20"
                  name="text-editor/bold"
                  @click="setBold"
                />
                <Icon
                  class="cursor-pointer"
                  :class="isItalicActive ? 'text-oc-text' : 'text-oc-text-300'"
                  width="20"
                  height="20"
                  name="text-editor/italic"
                  @click="setItalic"
                />
                <Icon
                  class="cursor-pointer"
                  :class="
                    isUnderlineActive ? 'text-oc-text' : 'text-oc-text-300'
                  "
                  width="20"
                  height="20"
                  name="text-editor/underline"
                  @click="setUnderline"
                />
              </div>

              <div class="border-l border-oc-gray-200" />
            </template>

            <div class="flex items-center gap-x-3">
              <Icon
                v-if="toolbar.includes('link')"
                class="cursor-pointer"
                width="20"
                height="20"
                name="text-editor/link"
                @click="setLink"
              />
              <Icon
                v-if="toolbar.includes('image')"
                class="cursor-pointer"
                width="20"
                height="20"
                name="text-editor/image"
                @click="uploadImage"
              />
              <Icon
                v-if="toolbar.includes('quote')"
                class="cursor-pointer"
                :class="
                  isBlockquoteActive ? 'text-oc-text' : 'text-oc-text-300'
                "
                width="20"
                height="20"
                name="text-editor/quote"
                @click="setBlockquote"
              />
              <Icon
                v-if="toolbar.includes('media')"
                class="cursor-pointer"
                width="20"
                height="20"
                name="text-editor/media"
                @click="uploadVideo"
              />
            </div>

            <template v-if="toolbar.includes('list')">
              <div class="border-l border-oc-gray-200" />

              <div class="flex gap-x-3 items-center">
                <Icon
                  class="cursor-pointer"
                  :class="
                    activeListFormat === 'bullet'
                      ? 'text-oc-text'
                      : 'text-oc-text-300'
                  "
                  width="20"
                  height="20"
                  name="text-editor/bullet"
                  @click="setListFormat('bullet')"
                />
                <Icon
                  class="cursor-pointer"
                  :class="
                    activeListFormat === 'ordered'
                      ? 'text-oc-text'
                      : 'text-oc-text-300'
                  "
                  width="20"
                  height="20"
                  name="text-editor/number"
                  @click="setListFormat('ordered')"
                />
              </div>
            </template>
            <template v-if="toolbar.includes('alignment')">
              <div class="border-l border-oc-gray-200" />

              <div class="flex gap-x-3 items-center">
                <Icon
                  class="cursor-pointer"
                  :class="!activeAlign ? 'text-oc-text' : 'text-oc-text-300'"
                  width="20"
                  height="20"
                  name="text-editor/left"
                  @click="setAlign()"
                />
                <Icon
                  class="cursor-pointer"
                  :class="
                    activeAlign === 'center'
                      ? 'text-oc-text'
                      : 'text-oc-text-300'
                  "
                  width="20"
                  height="20"
                  name="text-editor/center"
                  @click="setAlign('center')"
                />
                <Icon
                  class="cursor-pointer"
                  :class="
                    activeAlign === 'right'
                      ? 'text-oc-text'
                      : 'text-oc-text-300'
                  "
                  width="20"
                  height="20"
                  name="text-editor/right"
                  @click="setAlign('right')"
                />
                <Icon
                  class="cursor-pointer"
                  :class="
                    activeAlign === 'justify'
                      ? 'text-oc-text'
                      : 'text-oc-text-300'
                  "
                  width="20"
                  height="20"
                  name="text-editor/justify"
                  @click="setAlign('justify')"
                />
              </div>
            </template>

            <div class="border-l border-oc-gray-200" />
            <div class="flex gap-x-3 items-center">
              <ColorPicker
                v-model="colorPickModel"
                hide-input-color
                @update:model-value="setColor"
              >
                <template #picker-icon>
                  <div class="grid cursor-pointer">
                    <div :style="`color:${colorPickModel}`">A</div>
                    <div
                      class="h-[5px] w-full rounded border"
                      :style="`background:${colorPickModel}`"
                    ></div>
                  </div>
                </template>
              </ColorPicker>
            </div>
            <div class="border-l border-oc-gray-200" />

            <div v-if="showImageWidthToolbar" class="flex gap-x-3 items-center">
              <Slider
                label="Image width"
                class="w-[120px]"
                :model-value="imageWidth"
                :min-limit="0"
                :max-limit="100"
                @update:modelValue="updateImageWidth"
              />
            </div>
          </div>
        </template>
      </QuillEditor>
    </div>
  </BaseInput>
</template>

<style lang="scss">
@import url("./snow.css");

.ql-container {
  @apply rounded-b text-base;
}

.ql-editor {
  @apply min-h-[200px];
}

ol li {
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  counter-increment: list-0;
  padding-left: 1.5rem;

  &:before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2em;
    margin-left: -1.5em;
    margin-right: 0.3em;
    text-align: right;
  }

  &[data-list="bullet"]:before {
    content: "•";
  }

  &[data-list="ordered"]:before {
    content: counter(list-0, decimal) ". ";
  }
}
</style>
