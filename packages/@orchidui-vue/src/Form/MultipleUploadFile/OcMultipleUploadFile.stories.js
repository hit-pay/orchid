import { MultipleUploadFile, Theme } from "@/orchidui";
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
  },
  render: (args) => ({
    components: { MultipleUploadFile, Theme },
    setup() {
      const modelValue = ref();
      return { modelValue, args };
    },
    template: `
          <Theme>
            <MultipleUploadFile v-model="modelValue" :accept="args.accept" :max-size="args.maxSize" :hint="args.hint"
                                :label="args.label" :error-message="args.errorMessage"/>
          </Theme>
        `,
  }),
};
