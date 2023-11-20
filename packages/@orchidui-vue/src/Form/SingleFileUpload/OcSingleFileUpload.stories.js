import { ref } from "vue";
import SingleFileUpload from "./SingleFileUpload.vue";
import { RadioGroup } from "@/orchidui";

export default {
  component: SingleFileUpload,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    accept: "",
    isPreview: false,
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
          <div class="p-5 rounded flex flex-col gap-y-2 bg-oc-bg-dark">
            <RadioGroup
                v-model="variant"
                :radio="radios"
                class="items-center"
                alignment="horizontal"
                wrapper-class="gap-x-5 flex-nowrap w-fit whitespace-nowrap justify-center"
            />

            <SingleFileUpload class="max-w-[400px] self-center" v-model="modelValue" :variant="variant"
                              :is-preview="args.isPreview"
                              :accept="args.accept"
                              :max-size="args.maxSize" :label="args.label"
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
