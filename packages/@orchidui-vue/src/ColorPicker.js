
import { defineAsyncComponent } from "vue";
const ColorPicker = defineAsyncComponent(
  () => import("./Form/ColorPicker/ColorPicker.vue"),
);
const ColorPickerPopup = defineAsyncComponent(
    () => import("./Form/ColorPicker/ColorPickerPopup.vue"),
);
export { ColorPicker, ColorPickerPopup };
