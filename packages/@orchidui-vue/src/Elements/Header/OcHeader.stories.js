import Header from "./OcHeader.vue";
import Theme from "../../Theme/OcTheme.vue";
import { ref } from "vue";

export default {
  component: Header,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    theme: "light",
    menus: [
      {
        label: "Payments",
        value: "payments",
        color: "#002771",
        path: "payments",
      },
      {
        label: "Point of Sale",
        value: "point_of_sale",
        color: "#FDB012",
        path: "point_of_sale",
      },
      {
        label: "Online Store",
        value: "online_store",
        color: "#0EA81B",
        path: "online_store",
      },
    ],
    saveButtonProps: {
      label: "Save",
    },
    cancelButtonProps: {
      label: "Cancel",
    },
    isUnsavedChanges: false,
    isBackButton: false,
    badgeText: "Locally",
  },
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
  },
  render: (args) => ({
    components: { Header, Theme },
    setup() {
      const activeMenuValue = ref("payments");

      return { args, activeMenuValue };
    },
    template: `
          <Theme>
            <Header
                v-model="activeMenuValue"
                :theme="args.theme"
                :is-back-button="args.isBackButton"
                :is-unsaved-changes="args.isUnsavedChanges"
                :save-button-props="args.saveButtonProps"
                :cancel-button-props="args.cancelButtonProps"
                :menus="args.menus"
                badge-icon="store"
                :badge-text="args.badgeText"
            />
          </Theme>
        `,
  }),
};
