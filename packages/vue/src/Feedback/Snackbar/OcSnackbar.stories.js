import { Theme, Snackbar } from "@/orchidui";

export default {
  component: Snackbar,
};

export const Default = {
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "error", "warning", "gray"],
      default: "default",
    },
    size: {
      control: "select",
      options: ["small", "big", "default"],
      default: "default",
    },
    icon: {
      control: "select",
      options: ["filled-check", "circle", "plus", "x"],
      default: "filled-check",
    },
  },
  args: {
    modelValue: true,
    showIcon: true,
    isFloating: true,
    position: "top-center",
    transitionName: "slide-from-top",
    icon: "filled-check",
    color: "default",
    content: "Changes have been successfully saved",
    description: "Changes have been successfully saved",
    title: "Success",
    secondaryButton: {
      label: "Action",
    },
    primaryButton: {
      label: "Action",
    },
    isCloseIcon: true,
  },
  render: (args) => ({
    components: { Snackbar, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light" class="h-[300px]">
            <div class="flex flex-col gap-y-4">
              <Snackbar v-bind="args" v-model="args.modelValue"/>
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
    components: { Snackbar, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <Snackbar v-bind="args"/>
              <Snackbar v-bind="args" color="primary"/>
              <Snackbar v-bind="args" color="error"/>
              <Snackbar v-bind="args" color="warning"/>
              <Snackbar v-bind="args" color="gray"/>
            </div>
          </Theme>
        `,
  }),
};
