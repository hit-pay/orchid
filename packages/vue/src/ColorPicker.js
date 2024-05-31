import { defineAsyncComponent } from "vue";
import ColorPicker from "./Form/ColorPicker/ColorPicker.vue";
const ColorPickerPopup = defineAsyncComponent(
  () => import("./Form/ColorPicker/components/VueColorPicker.vue")
);
export { ColorPicker, ColorPickerPopup };
