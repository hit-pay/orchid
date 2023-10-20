import Theme from "../../Theme/OcTheme.vue";
import TextArea from "./OcTextArea.vue";
import { ref } from "vue";

export default {
  component: TextArea,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {},
  args: {
    hint: "This is a hint text to help user.",
    placeholder: "Placeholder",
    label: "",
    errorMessage: "",
    rows: 5,
    autoResize: false,
    isDisabled: false,
  },
  render: (args) => ({
    components: { Theme, TextArea },
    setup() {
      const text = ref("");
      return { text, args };
    },
    template: `
          <Theme>
            <TextArea
                v-model="text"
                :label="args.label"
                :hint="args.hint"
                :rows="args.rows"
                :auto-resize="args.autoResize"
                :is-disabled="args.isDisabled"
                :placeholder="args.placeholder"
                :error-message="args.errorMessage"
            />
          </Theme>
        `,
  }),
};
