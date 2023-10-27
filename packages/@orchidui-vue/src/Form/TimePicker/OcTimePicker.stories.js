import { Theme, TimePicker } from "@orchid";

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
            <TimePicker v-bind="args"/>
          </Theme>
        `,
  }),
};
