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
      const modelValue = ref([]);
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
    hint: "The optimal product image size is at least 800x800 px. PNG and JPG format is supported.",
    label: "label example",
    errorMessage: "",
    isImageOnly: false,
    columnsCount: 3,
  },
  render: (args) => ({
    components: { MultipleUploadFile, Theme },
    setup() {
      const modelValue = ref([
        {
          current: {
            id: "image_1",
            path: "https://hitpay-staging-public.s3.ap-southeast-1.amazonaws.com/covers/small/99d696e564ba45fbaa0fb2e3b43d0e27.jpg",
            caption: "Image 1",
          },
        },
        {
          current: {
            id: "image_2",
            path: "https://hitpay-staging-public.s3.ap-southeast-1.amazonaws.com/products/small/99a6b905ea094d48bde25dc0c0eaa840.jpg",
            caption: "Image 2",
          },
        },
      ]);
      const selectedImage = ref();
      const onRemoveFile = (currentFile) => {
        console.log("removed ", currentFile.current);
      };
      const onEditFile = (currentFile) => {
        console.log("edited", currentFile.current);
      };
      return { modelValue, args, selectedImage, onRemoveFile, onEditFile };
    },
    template: `
      <Theme class="min-h-[500px]">

      <div class="mt-5">
      {{ modelValue }}
      </div>
       <div class="mt-5">
       {{ selectedImage}}
       </div>
        <MultipleUploadFile
            v-model="modelValue"
            v-model:selectedImage="selectedImage"
            :accept="args.accept"
            :hint="args.hint"
            :max-size="5"
            :label="args.label"
            :important="true"
            :error-message="args.errorMessage"
            is-image-only
            :columnsCount="args.columnsCount"
            @onEditFile="onEditFile"
            @onRemoveFile="onRemoveFile"
        >
          <template #action="{item}">
          {{item}}
          </template>
        </MultipleUploadFile>
      </Theme>
    `,
  }),
};
