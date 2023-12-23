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
    label: "Enter Username",
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
        value: "facebook",
        placeholder: "@username",
        label: "Facebook",
        icon: "facebook",
        preFill: "https://facebook.com/",
      },
      {
        value: "instagram",
        label: "Instagram",
        icon: "instagram",
        preFill: "https://instagram.com/",
      },
      {
        value: "twitter",
        label: "(X) Twitter",
        icon: "twitter",
        preFill: "https://twitter.com/",
      },
      {
        value: "tiktok",
        label: "Tiktok",
        icon: "tiktok",
        preFill: "https://tiktok.com/",
      },
      {
        value: "other",
        label: "Other website",
        placeholder: "website.com",
        icon: "earth",
        preFill: "https://",
      },
    ],
  },
  render: (args) => ({
    components: { Theme, LinkInput },
    setup() {
      const linkType = ref("twitter");
      const linkValue = ref("");
      const linkTitle = ref("");
      return { linkType, linkValue, linkTitle, args };
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
                  v-model:title="linkTitle"
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
