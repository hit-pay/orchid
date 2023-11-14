import { Theme } from "@/orchidui";
import TextEditor from './OcTextEditor.vue'
import { ref } from "vue";

export default {
  component: TextEditor,
  tags: ["autodocs"],
};
export const Default = {
  args: {
    fontSizes: [
      {
        label: "Default",
        value: "14px",
      },
      {
        label: "Medium",
        value: "16px",
      },
      {
        label: "Large",
        value: "18px",
      },
      {
        label: "Extra Large",
        value: "20px",
      },
    ],
    initialFontSize: "14px",
  },
  render: (args) => ({
    components: { TextEditor, Theme },
    setup() {
      const modelValue = ref("default model value");
      return { args, modelValue };
    },
    template: `
          <Theme>
            <TextEditor v-model="modelValue" v-bind="args"/>

            <div class="flex gap-y-6 flex-col mt-8">Preview
              <div v-html="modelValue"/>
            </div>
          </Theme>
        `,
  }),
};
