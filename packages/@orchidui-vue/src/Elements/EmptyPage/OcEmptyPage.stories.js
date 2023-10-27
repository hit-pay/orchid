import { Theme, EmptyPage } from "@orchid";

export default {
  component: EmptyPage,
  tags: ["autodocs"],
};

export const emptyPage = {
  args: {
    title: "Title",
    description: "Description",
    isButton: true,
    isUpgrade: true,
  },
  render: (args) => ({
    components: {
      Theme,
      EmptyPage,
    },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <EmptyPage v-bind="args"/>
          </Theme>
        `,
  }),
};
