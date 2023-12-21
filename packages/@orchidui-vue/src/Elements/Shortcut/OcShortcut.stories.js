import OcShortcut from "./OcShortcut.vue";

export default {
  component: OcShortcut,
  tags: ["autodocs"],
};

export const shortcut = {
  // argTypes: {},
  args: {
    asd: "",
  },
  render: (args) => ({
    components: { OcShortcut },
    setup() {
      return { args };
    },
    template: `
          <div class="flex">
            <OcShortcut
                :v-bing="args"
            />
          </div>
        `,
  }),
};
