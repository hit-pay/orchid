import { Theme } from "@/orchidui";
import MultipleUploadFile from "./OcMultipleUploadFile.vue";
import { ref } from "vue";

export default {
  component: MultipleUploadFile,
  tags: ["autodocs"],
};
export const Default = {
  args: {
    accept: "",
    maxSize: 5,
    hint: "",
    label: "",
    errorMessage: "",
    isImageOnly: false,
    columnsCount: 3,
  },
  render: (args) => ({
    components: { MultipleUploadFile, Theme },
    setup() {
      const modelValue = ref();
      const selectedImage = ref();
      return { modelValue, args, selectedImage };
    },
    template: `
          <Theme class="min-h-[500px]">

            {{ modelValue }}
            <MultipleUploadFile
                v-model="modelValue"
                v-model:selectedImage="selectedImage"
                :accept="args.accept"
                :max-size="args.maxSize"
                :hint="args.hint"
                :label="args.label"
                :error-message="args.errorMessage"
                :isImageOnly="args.isImageOnly"
                :columnsCount="args.columnsCount"
            />
          </Theme>
        `,
  }),
};
export const MultipleImages = {
  args: {
    accept: "",
    maxSize: 5,
    hint: "",
    label: "",
    errorMessage: "",
    isImageOnly: false,
    columnsCount: 3,
  },
  render: (args) => ({
    components: { MultipleUploadFile, Theme },
    setup() {
      const modelValue = ref();
      const selectedImage = ref();
      return { modelValue, args, selectedImage };
    },
    template: `
      <Theme class="min-h-[500px]">
        <MultipleUploadFile
            v-model="modelValue"
            v-model:selectedImage="selectedImage"
            :accept="args.accept"
            :hint="args.hint"
            :max-size="5"
            :label="args.label"
            :error-message="args.errorMessage"
            is-image-only
            :columnsCount="args.columnsCount"
        />
      </Theme>
    `,
  }),
};
