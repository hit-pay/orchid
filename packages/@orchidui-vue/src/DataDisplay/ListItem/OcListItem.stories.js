import { Theme, ListItem, DropdownItem } from "@/orchidui";

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
    type: {
      control: "select",
      options: ["timeline", "webhook"],
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
    type: "timeline",
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
export const ListWebhook = {
  args: {
    urls: [
      {
        url: "https://orchid.software",
        title: "URL",
      },
    ],
  },
  render: (args) => ({
    components: { Theme, ListItem, DropdownItem },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light" class="p-10">
            <ListItem
                type="webhook"
                :urls="args.urls"
                title="Zapier Flow"
                date="Oct, 20 2023"
            >
              <template #menu>
                <div class="p-2 border-b border-gray-200">
                  <DropdownItem text="Edit" icon="pencil"/>
                </div>
                <div class="p-2">
                  <DropdownItem text="Delete" variant="destructive" icon="bin"/>
                </div>
              </template>
            </ListItem>
          </Theme>
        `,
  }),
};

export const ListPayment = {
  args: {},
  render: (args) => ({
    components: { Theme, ListItem },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light" class="p-10">
            <ListItem
                type="payment"
            />
          </Theme>
        `,
  }),
};
