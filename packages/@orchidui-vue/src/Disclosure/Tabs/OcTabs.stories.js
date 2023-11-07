import { Theme, Tabs } from "@/orchidui";
import { ref } from "vue";

export default {
  component: Tabs,
  tags: ["autodocs"],
};

export const Pills = {
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "pills"],
    },
  },
  args: {
    variant: "pills",
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
      const activeTab = ref("1");
      return { activeTab, args };
    },
    template: `
          <Theme>
            <Tabs v-model="activeTab" :tabs="args.tabs" :variant="args.variant"/>
          </Theme>
        `,
  }),
};
