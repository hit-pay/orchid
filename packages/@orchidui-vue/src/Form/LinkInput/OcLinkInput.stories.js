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
    hint: "",
    placeholder: "@username",
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
      const linkType = ref("twitter");
      const linkValue = ref("");
      return { linkType, linkValue, args };
    },
    template: `
          <Theme>
            <div class="w-full h-[200px]">
              <div>
                type:  {{linkType}}
              </div>
              <div>
                value : {{linkValue}}
              </div>
              <LinkInput
                  v-model="linkValue"
                  v-model:type="linkType"
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
