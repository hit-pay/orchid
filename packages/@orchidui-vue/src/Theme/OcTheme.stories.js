import Theme from "./OcTheme.vue";

export default {
  component: Theme,
  tags: ["autodocs"],
};

export const ColorMode = {
  render: () => ({
    components: { Theme },
    template: `
          <div class="flex gap-3 items-center light-mode mb-3">
            <Theme colorMode="light">
              Light Mode
            </Theme>
            <Theme colorMode="dark">
              Dark Mode
            </Theme>
          </div>
        `,
  }),
};
