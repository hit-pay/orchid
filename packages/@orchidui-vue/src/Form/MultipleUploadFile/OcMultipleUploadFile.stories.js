import { MultipleUploadFile, Theme } from "@/orchidui";
import { ref } from "vue";

export default {
  component: MultipleUploadFile,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    accept: "",
  },
  render: (args) => ({
    components: { MultipleUploadFile, Theme },
    setup() {
      const modelValue = ref();
      return { modelValue, args };
    },
    template: `
          <Theme>
            <MultipleUploadFile v-model="modelValue" :accept="args.accept"/>
          </Theme>
        `,
  }),
};
