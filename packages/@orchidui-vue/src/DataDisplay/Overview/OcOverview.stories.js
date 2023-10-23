import { Theme, Overview, OverviewIcon } from "@orchid";

export default {
  component: Overview,
  tags: ["autodocs"],
};

export const overview = {
  args: {
    title: "",
    items: [
      {
        title: "Total revenue",
        content: "SGD 11,170.00",
        icon: "coins",
        variant: "blue",
      },
      {
        title: "This month",
        content: "SGD 1,870.00",
        icon: "coin",
        variant: "accent",
      },
      {
        title: "Completed",
        content: "20",
        icon: "check",
        variant: "green",
      },
      {
        title: "Refunded",
        content: "3",
        icon: "backward",
        variant: "red",
      },
    ],
  },
  render: (args) => ({
    components: { Overview, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
          <Theme class="items-center mb-3">
            <Overview :items="args.items" :title="args.title"/>
          </Theme>
        `,
  }),
};
export const overviewIcon = {
  render: () => ({
    components: { Theme, OverviewIcon },
    template: `
          <Theme>
            <div class="flex gap-x-4">
              <OverviewIcon variant="blue"/>
              <OverviewIcon variant="accent"/>
              <OverviewIcon variant="green"/>
              <OverviewIcon variant="red"/>
              <OverviewIcon variant="orange"/>
              <OverviewIcon variant="gray"/>
            </div>
          </Theme>
        `,
  }),
};
