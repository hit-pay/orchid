import Theme from "../../Theme/OCTheme.vue";
import Input from "./OCInput.vue";

export default {
  component: Input,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    type: {
      control: "select",
      options: ["", "trailing", "leading"],
    },
    icon: {
      control: "select",
      options: ["", "circle"],
    },
  },
  render: (args) => ({
    components: { Theme, Input },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light" group="payment">
            <Input v-bind="args"/>
          </Theme>
        `,
  }),
};
