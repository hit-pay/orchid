import { Theme, Shackbar } from "@orchid";
export default {
  component: Shackbar,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "error", "warning", "gray"],
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
          <Theme colorMode="light">
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
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <Shackbar v-bind="args"/>
              <Shackbar v-bind="args" color="primary"/>
              <Shackbar v-bind="args" color="error"/>
              <Shackbar v-bind="args" color="warning"/>
              <Shackbar v-bind="args" color="gray"/>
            </div>
          </Theme>
        `,
  }),
};
