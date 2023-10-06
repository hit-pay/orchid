import Theme from "../../Theme/OCTheme.vue";
import Input from "./OCInput.vue";
import { ref } from "vue";

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
          <Theme colorMode="light">
            <Input v-bind="args"/>
          </Theme>
        `,
  }),
};
export const Example = {
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
  args: {
    hint: "This is a hint text to help user.",
    icon: "circle",
  },
  render: (args) => ({
    components: { Theme, Input },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light" >
            <Input v-bind="args"/>
          </Theme>
        `,
  }),
};

export const MainComponent = {
  render: () => ({
    components: { Theme, Input },
    setup() {
      const text = ref("Text");
      return { text };
    },
    template: `
          <Theme colorMode="light" >
            <div class="flex flex-col gap-y-4">
              <div class="flex items-end gap-x-4">
                <Input label="Label"/>
                <Input disabled label="Label"/>
                <Input v-model="text" label="Label" inline-label/>
              </div>
              <div class="flex items-end gap-x-4">
                <Input is-error inline-label label="Label"/>
                <Input disabled inline-label is-error label="Label"/>
                <Input is-error v-model="text" label="Label" inline-label/>
              </div>
            </div>
          </Theme>
        `,
  }),
};

export const LeadingTrailing = {
  render: () => ({
    components: { Theme, Input },
    template: `
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <div class="flex items-end gap-x-4">
                <Input hint="This is a hint text to help user" type="trailing"/>
                <Input disabled hint="This is a hint text to help user" type="trailing"/>
                <Input hint="This is a hint text to help user" type="leading"/>
              </div>
              <div class="flex items-end gap-x-4">
                <Input is-error hint="This is a hint text to help user" type="trailing"/>
                <Input disabled is-error hint="This is a hint text to help user" type="trailing"/>
                <Input is-error hint="This is a hint text to help user" type="leading"/>
              </div>
            </div>
          </Theme>
        `,
  }),
};
