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
    isArrows: true,
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
        count: 10,
      },
      {
        label: "Filter 04",
        value: "4",
      },
      {
        label: "Filter 05",
        value: "5",
      },
      {
        label: "Filter 06",
        value: "6",
      },
      {
        label: "Filter 07",
        value: "7",
      },
      {
        label: "Filter 08",
        value: "8",
      },
      {
        label: "Filter 09",
        value: "9",
      },
      {
        label: "Filter 10",
        value: "10",
      },
      {
        label: "Filter 11",
        value: "11",
      },
      {
        label: "Filter 12",
        value: "12",
      },
    ],
    maxCount: 9,
  },
  render: (args) => ({
    components: { Theme, Tabs },
    setup() {
      const activeTab = ref("8");
      return { activeTab, args };
    },
    template: `
          <Theme>
            <Tabs v-model="activeTab" :tabs="args.tabs" :variant="args.variant" :max-count="args.maxCount" :is-arrows="args.isArrows" />
          </Theme>
        `,
  }),
};
