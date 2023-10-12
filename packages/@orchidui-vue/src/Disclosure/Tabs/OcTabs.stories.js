import Theme from "../../Theme/OcTheme.vue";
import Tabs from "./OcTabs.vue";

export default {
  component: Tabs,
  tags: ["autodocs"],
};

export const Pills = {
  args: {
    tabs: [
      {
        label: "All",
        value: "",
      },
      {
        label: "Filter 01",
        value: "1",
      },
      {
        label: "Filter 02",
        value: "2",
      },
      {
        label: "Filter 03",
        value: "3",
      },
    ],
  },
  render: (args) => ({
    components: { Theme, Tabs },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <Tabs model-value="" :tabs="args.tabs" variant="pills"/>
          </Theme>
        `,
  }),
};
