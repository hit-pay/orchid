import Steps from "./OcSteps.vue";
import { ref } from "vue";

export default {
  component: Steps,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    steps: [
      {
        title: "Title",
      },
      {
        title: "Title",
      },
      {
        title: "Title",
      },
      {
        title: "Title",
      },
      {
        title: "Title",
      },
    ],
  },
  render: (args) => ({
    components: { Steps },
    setup() {
      const modelValue = ref();
      return { args, modelValue };
    },
    template: `
          <Steps v-model="modelValue" :steps="args.steps"/>
        `,
  }),
};
