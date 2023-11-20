import { Theme, RangeInput } from "@/orchidui";
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
    minGap: 0,
    label: "",
    hint: "",
    errorMessage: "",
  },
  render: (args) => ({
    components: { Theme, RangeInput },
    setup() {
      const modelValue = ref([0, 50]);

      return { args, modelValue };
    },
    template: `
          <Theme>
            <RangeInput
                v-model="modelValue"
                :max-limit="args.maxLimit"
                :min-limit="args.minLimit"
                :minGap="args.minGap"
                :label="args.label"
                :hint="args.hint"
                :errorMessage="args.errorMessage"
            />
          </Theme>
        `,
  }),
};
