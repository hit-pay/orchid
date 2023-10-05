import Shackbar from "./OCShackbar.vue";
import Theme from "../../Theme/OCTheme.vue";

export default {
  component: Shackbar,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    color: {
      control: "select",
      options: ["default", "blue", "red", "orange", "grey"],
      default: "default",
    },
    icon: {
      control: "select",
      options: ["filled-check", "circle", "plus", "x"],
      default: "filled-check",
    },
  },
  args: {
    showIcon: true,
    icon: "filled-check",
    color: "default",
    content: "Changes have been successfully saved",
  },
  render: (args) => ({
    components: { Shackbar, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light" group="payment">
            <div class="flex flex-col gap-y-4">
              <Shackbar v-bind="args"/>
            </div>
          </Theme>
        `,
  }),
};
export const Variants = {
  args: {
    showIcon: true,
    icon: "filled-check",
    content: "Changes have been successfully saved",
  },
  render: (args) => ({
    components: { Shackbar, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light" group="payment">
            <div class="flex flex-col gap-y-4">
              <Shackbar v-bind="args"/>
              <Shackbar v-bind="args" color="blue"/>
              <Shackbar v-bind="args" color="red"/>
              <Shackbar v-bind="args" color="orange"/>
              <Shackbar v-bind="args" color="grey"/>
            </div>
          </Theme>
        `,
  }),
};
