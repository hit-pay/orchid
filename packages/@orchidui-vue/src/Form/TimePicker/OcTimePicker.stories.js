import { Theme, TimePicker } from "@/orchidui";

export default {
  component: TimePicker,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    labelIcon: {
      control: "select",
      options: ["", "question-mark"],
    },
  },
  args: {
    label: "",
    hint: "",
    placeholder: "",
    errorMessage: "",
    isRequired: false,
    labelIcon: "",
    tooltipText: "Tooltip text",
    tooltipOptions: {
      position: "top",
      distance: 10,
    },
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
