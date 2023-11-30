import { Theme } from "@/orchidui";
import { SDSidebar } from "@/orchidui/StoreDesign";
export default {
  component: SDSidebar,
  tags: ["autodocs"],
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { Theme, SDSidebar },
    setup() {
      return { args };
    },
    template: `
          <Theme>
           <SDSidebar>
            <template #form-{type}>
                 input type
            </template>
           </SDSidebar>
          </Theme>
        `,
  }),
};
