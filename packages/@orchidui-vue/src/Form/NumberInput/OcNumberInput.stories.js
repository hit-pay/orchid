import { NumberInput } from "./OcNumberInput.js";
import { ref } from "vue";

export default {
  component: NumberInput,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    isDisabled: false,
  },
  render: (args) => ({
    components: { NumberInput },
    setup() {
      const modalValue = ref();
      return { modalValue, args };
    },
    template: `
          <NumberInput v-model="modalValue" v-bind="args"/>
        `,
  }),
};
