import { Theme, RangeInput } from "@orchid";
import { ref } from "vue";

export default {
  component: RangeInput,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {},
  args: {
    maxLimit: 100,
    minLimit: 0,
  },
  render: (args) => ({
    components: { Theme, RangeInput },
    setup() {
      const maxValue = ref(0);
      const minValue = ref(100);

      return { args, maxValue, minValue };
    },
    template: `
          <Theme>
            <RangeInput
                v-model:min-value="minValue"
                v-model:max-value="maxValue"
                :max-limit="args.maxLimit"
                :min-limit="args.minLimit"
            />
          </Theme>
        `,
  }),
};
