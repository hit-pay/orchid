import { Theme } from "@/orchidui";
import { RequestForm } from "@/orchidui/StoreDesign";
export default {
  tags: ["autodocs"],
  component: RequestForm,
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { Theme, RequestForm },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <RequestForm></RequestForm>
          </Theme>
        `,
  }),
};
