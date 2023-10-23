import { Theme, PhoneInput } from "@orchid";
import countryCodes from "@orchid/countryCodes.js";
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
    errorMessage: "Invalid phone number",
    validRegex: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
    isInlineLabel: false,
    isDisabled: false,
    label: "",
    countryCodes: countryCodes,
  },
  render: (args) => ({
    components: { Theme, PhoneInput },
    setup() {
      const phone = ref("");
      const phoneCode = ref("");
      return { phone, phoneCode, args };
    },
    template: `
          <Theme>
            <PhoneInput
                v-model:country-code="phoneCode"
                v-model:phone-number="phone"
                :country-codes="args.countryCodes"
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
          </Theme>
        `,
  }),
};
