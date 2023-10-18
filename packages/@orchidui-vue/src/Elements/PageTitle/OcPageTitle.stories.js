import PageTitle from "./OcPageTitle.vue";
import Theme from "../../Theme/OcTheme.vue";

export default {
  component: PageTitle,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    chipVariant: {
      control: "select",
      options: [
        "accent-1",
        "accent-2",
        "success",
        "warning",
        "error",
        "gray",
        "",
      ],
    },
  },
  args: {
    title: "Page Title",
    description: "",
    mainLink: "https://securecheckout.../payment-request/",
    userId: "@minstore-edit43",
    chipVariant: "success",
    chipLabel: "Active",
    additionalTitle: "Need attention",
    tooltipContent: "Preview Link",
  },
  render: (args) => ({
    components: { PageTitle, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <PageTitle
                :title="args.title"
                :main-link="args.mainLink"
                :user-id="args.userId"
                :description="args.description"
                :chipVariant="args.chipVariant"
                :chipLabel="args.chipLabel"
                :additional-title="args.additionalTitle"
                :tooltip-content="args.tooltipContent"
            />
          </Theme>
        `,
  }),
};
