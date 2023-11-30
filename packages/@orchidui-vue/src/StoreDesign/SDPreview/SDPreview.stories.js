import { Theme } from "@/orchidui";
import { SDPreview } from "@/orchidui/StoreDesign";
export default {
  component: SDPreview,
  tags: ["autodocs"],
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { Theme, SDPreview },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <SDPreview />
          </Theme>
        `,
  }),
};
