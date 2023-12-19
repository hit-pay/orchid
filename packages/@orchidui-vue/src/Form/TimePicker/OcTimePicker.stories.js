import { Theme, TimePicker } from "@/orchidui";
import { ref } from "vue";

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
      const modelValue = ref(new Date());
      return { modelValue, args };
    },
    template: `
          <Theme>
            <p>{{ modelValue }}</p>
            <div class="w-full h-[200px]">
              <TimePicker v-model="modelValue" v-bind="args"/>
            </div>
          </Theme>
        `,
  }),
};
