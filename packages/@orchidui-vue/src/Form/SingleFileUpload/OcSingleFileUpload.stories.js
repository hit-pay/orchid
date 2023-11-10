import { SingleFileUpload } from "@/orchidui";
import { ref } from "vue";

export default {
  component: SingleFileUpload,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    accept: "",
  },
  render: (args) => ({
    components: { SingleFileUpload },
    setup() {
      const modelValue = ref();
      return { modelValue, args };
    },
    template: `
          <SingleFileUpload v-model="modelValue" :accept="args.accept"/>
        `,
  }),
};
