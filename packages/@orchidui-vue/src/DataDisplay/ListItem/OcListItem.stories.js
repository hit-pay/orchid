import { Theme, ListItem } from "@/orchidui";

export default {
  component: ListItem,
  tags: ["autodocs"],
};

export const listItem = {
  argTypes: {
    icon: {
      control: "select",
      options: ["backward", "circle", "x", ""],
    },
    active: {
      control: {
        type: "number",
        min: 1,
        max: 5,
      },
    },
  },
  args: {
    active: 1,
    title: "September, 1 2023 at 05:01PM",
    icon: "backward",
    iconClass: "text-oc-error",
    iconText: "SGD 130,11",
    description: "#9a2804fc-74df-4304-a7d7-79d11f9e1db8dsdss",
  },
  render: (args) => ({
    components: { Theme, ListItem },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light">
            <ListItem
                v-for="i in 5"
                :is-active="args.active >= i"
                :key="i"
                :title="args.title"
                :icon="args.icon"
                :icon-class="args.iconClass"
                :icon-text="args.iconText"
                :description="args.description"
            />
          </Theme>
        `,
  }),
};
export const ListURL = {
  render: (args) => ({
    components: { Theme, ListItem },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light">
            <ListUrl
                v-for="i in 5"
                :is-active="args.active >= i"
                :key="i"
                :title="args.title"
                :icon="args.icon"
                :icon-class="args.iconClass"
                :icon-text="args.iconText"
                :description="args.description"
            />
          </Theme>
        `,
  }),
};
