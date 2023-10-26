import { Theme, CardInput } from "@orchid";
import { ref } from "vue";

export default {
  component: CardInput,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    cardType: {
      control: "select",
      options: ["mastercard", "visa"],
    },
  },
  args: {
    hint: "This is a hint text to help user.",
    placeholder: "Placeholder",
    isInlineLabel: false,
    isDisabled: false,
    label: "",
    errorMessage: "",
    cardType: "mastercard",
  },
  render: (args) => ({
    components: { Theme, CardInput },
    setup() {
      const text = ref("");
      return { text, args };
    },
    template: `
          <Theme>
            <CardInput
                v-model="text"
                :isInlineLabel="args.isInlineLabel"
                :isDisabled="args.isDisabled"
                :label="args.label"
                :card-type="args.cardType"
                :hint="args.hint"
                :placeholder="args.placeholder"
                :error-message="args.errorMessage"
            />
          </Theme>
        `,
  }),
};
