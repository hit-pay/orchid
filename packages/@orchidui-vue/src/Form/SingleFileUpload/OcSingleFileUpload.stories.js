import { ref } from "vue";
import SingleFileUpload from "./OcSingleFileUpload.vue";
import { RadioGroup } from "@/orchidui";

export default {
  component: SingleFileUpload,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    accept: "",
    isPreview: false,
    isImageOnly: false,
    maxSize: 5,
    label: "",
    hint: "",
    errorMessage: "",
  },
  render: (args) => ({
    components: { SingleFileUpload, RadioGroup },
    setup() {
      const modelValue = ref();
      const variant = ref("upload");
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
      return { radios, variant, modelValue, args };
    },
    template: `
          <div class="p-5 rounded flex flex-col gap-y-2" :class="args.isImageOnly ? '' : 'bg-oc-bg-dark'">
            <RadioGroup
                v-if="!args.isImageOnly"
                v-model="variant"
                :radio="radios"
                class="items-center"
                alignment="horizontal"
                wrapper-class="gap-x-5 flex-nowrap w-fit whitespace-nowrap justify-center"
            />

            <SingleFileUpload
                class="max-w-[400px] self-center"
                v-model="modelValue"
                :variant="variant"
                :is-preview="args.isPreview"
                :accept="args.accept"
                :is-image-only="args.isImageOnly"
                :max-size="args.maxSize"
                :label="args.label"
                :hint="args.hint"
                :error-message="args.errorMessage"/>
          </div>

        `,
  }),
};
export const Upload = {
  render: () => ({
    components: { SingleFileUpload },
    template: `
          <SingleFileUpload/>
        `,
  }),
};
export const Url = {
  render: () => ({
    components: { SingleFileUpload },
    template: `
          <SingleFileUpload variant="url"/>
        `,
  }),
};
export const ImageOnly = {
  render: () => ({
    components: { SingleFileUpload },
    setup() {
      const imageRef = ref({
        current: {
          id: "image_1",
          path: "https://hitpay-staging-public.s3.ap-southeast-1.amazonaws.com/covers/small/99d696e564ba45fbaa0fb2e3b43d0e27.jpg",
          caption: "Image 1",
        },
        //
      });
      const onRemoveFile = (data) => {
        console.log(data);
      };
      return { imageRef, onRemoveFile };
    },
    template: `

          <pre> {{imageRef}}</pre>
          <SingleFileUpload 
            v-model="imageRef"
            is-image-only    
            @onRemoveFile="onRemoveFile"
          />
        `,
  }),
};
