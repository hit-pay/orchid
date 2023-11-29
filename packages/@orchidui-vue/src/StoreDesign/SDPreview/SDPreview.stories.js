import { Theme } from "@/orchidui";
export default {
  component: '',
};

export const Default = {
  args: {
  },
  render: (args) => ({
    components: { Theme },
    setup() {
        return { args}
    },
    template: `
          <Theme>
           
          </Theme>
        `,
  }),
};
