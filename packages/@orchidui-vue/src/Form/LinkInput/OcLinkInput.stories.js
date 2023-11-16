import { Theme, LinkInput } from "@/orchidui";
import { ref } from "vue";

export default {
  component: LinkInput,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    labelIcon: {
      control: "select",
      options: ["", "question-mark"],
    },
  },
  args: {
    hint: "This is a hint text to help user.",
    placeholder: "Placeholder",
    isInlineLabel: false,
    isDisabled: false,
    label: "",
    errorMessage: "",
    isRequired: false,
    labelIcon: "",
    tooltipText: "Tooltip text",
    tooltipOptions: {
      position: "top",
      distance: 10,
    },
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
            <div class="w-full h-[200px]">
              <LinkInput
                  v-model="link"
                  :isInlineLabel="args.isInlineLabel"
                  :isDisabled="args.isDisabled"
                  :label="args.label"
                  :hint="args.hint"
                  :links="args.links"
                  :placeholder="args.placeholder"
                  :error-message="args.errorMessage"
                  :isRequired="args.isRequired"
                  :tooltip-options="args.tooltipOptions"
                  :label-icon="args.labelIcon"
                  :tooltip-text="args.tooltipText"
              />
            </div>
          </Theme>
        `,
  }),
};
