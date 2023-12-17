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
    onlyInput: true,
  },
  render: (args) => ({
    components: { Theme, RangeInput },
    setup() {
      const modelValue = ref('');

      return { args, modelValue };
    },
    template: `
          <Theme>
           {{ modelValue}}
            <RangeInput
                v-model="modelValue"
                :max-limit="args.maxLimit"
                :min-limit="args.minLimit"
                :minGap="args.minGap"
                :label="args.label"
                :hint="args.hint"
                :onlyInput="args.onlyInput"
                :errorMessage="args.errorMessage"
            />
          </Theme>
        `,
  }),
};
