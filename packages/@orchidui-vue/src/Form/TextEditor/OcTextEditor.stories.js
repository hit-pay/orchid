import { Theme } from "@/orchidui";
import TextEditor from "./OcTextEditor.vue";
import { ref } from "vue";

export default {
  component: TextEditor,
  tags: ["autodocs"],
};
export const Default = {
  args: {
    label: "Label",
    isRequired: true,
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
      const onUpdateImage = (base64) => {
        console.log(base64);
      };
      return { args, modelValue, onUpdateImage };
    },
    template: `
          <Theme>
            <TextEditor v-model="modelValue" v-bind="args" @update:image="onUpdateImage"/>

            <div class="flex gap-y-6 flex-col mt-8">Preview
              <div v-html="modelValue"/>
            </div>
          </Theme>
        `,
  }),
};
