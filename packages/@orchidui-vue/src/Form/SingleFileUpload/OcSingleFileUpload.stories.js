import SingleFileUpload from "./SingleFileUpload.vue";
import { ref } from "vue";

export default {
  component: SingleFileUpload,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    accept: "",
    isPreview: false,
    maxSize: 5,
  },
  render: (args) => ({
    components: { SingleFileUpload },
    setup() {
      const modelValue = ref();
      return { modelValue, args };
    },
    template: `
          <SingleFileUpload v-model="modelValue" :is-preview="args.isPreview" :accept="args.accept"
                            :max-size="args.maxSize"/>
        `,
  }),
};
