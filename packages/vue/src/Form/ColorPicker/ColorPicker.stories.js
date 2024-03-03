import ColorPicker from "./ColorPicker.vue";
import { ref } from "vue";

export default {
  component: ColorPicker,
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({
    components: { ColorPicker },
    setup() {
      const modelValue = ref();
      return {
        modelValue,
      };
    },
    template: `
          <div class="h-[400px]">
            <ColorPicker v-model="modelValue"/>
          </div>`,
  }),
};
