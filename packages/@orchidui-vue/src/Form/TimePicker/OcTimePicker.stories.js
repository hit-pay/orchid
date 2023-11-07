import { Theme, TimePicker } from "@/orchidui";

export default {
  component: TimePicker,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {},
  args: {
    label: "",
    hint: "",
    placeholder: "",
    errorMessage: "",
  },
  render: (args) => ({
    components: { Theme, TimePicker },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <div class="w-full h-[200px]">
              <TimePicker v-bind="args"/>
            </div>
          </Theme>
        `,
  }),
};
