import { Theme, PageTitle } from "@/orchidui";

export default {
  component: PageTitle,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "Page Title",
    description: "",
    primaryButtonProps: {
      leftIcon: "plus",
      label: "Primary",
      tooltip: "Add New",
      onClick: () => {
        console.log("click new payment link");
      },
    },
    secondaryButtonProps: {
      variant: "secondary",
      label: "Secondary",
      dropdownOptions: [
        {
          name: "bulk_create",
          icon: "upload",
          text: "Bulk create",
          onClick: () => {
            console.log("click bulk create");
          },
        },
        {
          name: "download",
          icon: "download",
          text: "Export",
          onClick: () => {
            console.log("click download");
          },
        },
      ],
    },
    isBack: false,
    isCopy: false,
    chipOptions: null,
  },
  render: (args) => ({
    components: { PageTitle, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <PageTitle v-bind="args"/>
          </Theme>
        `,
  }),
};
