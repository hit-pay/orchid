import { Theme, LinkInput } from "@orchid";
import { ref } from "vue";

export default {
  component: LinkInput,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {},
  args: {
    hint: "This is a hint text to help user.",
    placeholder: "Placeholder",
    isInlineLabel: false,
    isDisabled: false,
    label: "",
    errorMessage: "",
    links: [
      {
        value: "instagram",
        label: "Instagram",
        icon: "instagram",
        preFill: "https://instagram.com/",
      },
      {
        value: "twitter",
        label: "Twitter",
        icon: "twitter",
        preFill: "https://twitter.com/",
      },
    ],
  },
  render: (args) => ({
    components: { Theme, LinkInput },
    setup() {
      const link = ref("");
      return { link, args };
    },
    template: `
          <Theme>
            <LinkInput
                v-model="link"
                :isInlineLabel="args.isInlineLabel"
                :isDisabled="args.isDisabled"
                :label="args.label"
                :hint="args.hint"
                :links="args.links"
                :placeholder="args.placeholder"
                :error-message="args.errorMessage"
            />
          </Theme>
        `,
  }),
};
