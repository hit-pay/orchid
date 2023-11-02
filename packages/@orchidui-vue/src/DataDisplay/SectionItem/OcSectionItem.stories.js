import { Theme, SectionItem } from "@orchid";

export default {
  component: SectionItem,
  tags: ["autodocs"],
};

export const sectionItem = {
  argTypes: {
    icon: {
      control: "select",
      options: ["information", "check", "x", ""],
    },
  },
  args: {
    title: "Title",
    description: "Description",
    buttonProps: {
      label: "Copy",
      variant: "secondary",
    },
    inputProps: null,
    isToggle: true,
    icon: "",
  },
  render: (args) => ({
    components: { Theme, SectionItem },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light">
            <div class="p-1">
              <SectionItem
                  :title="args.title"
                  :description="args.description"
                  :button-props="args.buttonProps"
                  :input-props="args.inputProps"
                  :is-toggle="args.isToggle"
                  :icon="args.icon"
              />
            </div>
          </Theme>
        `,
  }),
};
