import { Theme, PhoneInput } from "@orchid";
import countryCodes from "../../data/CountryCodes.sample";
import { ref } from "vue";

export default {
  component: PhoneInput,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    initialCountryCode: {
      control: "select",
      options: ["sg", "be", "ua", "sa"],
    },
  },
  args: {
    initialCountryCode: "sg",
    placeholder: "Placeholder",
    hint: "This is a hint text to help user.",
    errorMessage: "",
    isInlineLabel: false,
    isDisabled: false,
    label: "",
  },
  render: (args) => ({
    components: { Theme, PhoneInput },
    setup() {
      const modelValue = ref();
      return { modelValue, args, countryCodes };
    },
    template: `
          <Theme>
            <div class="w-full h-[400px]">
              <div class="mb-3"> Model Value: {{ modelValue }}</div>
              <PhoneInput
                  v-model="modelValue"
                  :country-codes="countryCodes"
                  :key="args.initialCountryCode"
                  :valid-regex="args.validRegex"
                  :isInlineLabel="args.isInlineLabel"
                  :isDisabled="args.isDisabled"
                  :label="args.label"
                  :hint="args.hint"
                  :placeholder="args.placeholder"
                  :error-message="args.errorMessage"
                  :initial-country-code="args.initialCountryCode"
              />
            </div>
          </Theme>
        `,
  }),
};
