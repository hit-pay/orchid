import { defineAsyncComponent } from "vue";
const PhoneInput = defineAsyncComponent(() =>
  import("./OcPhoneInput.vue"),
);
export { PhoneInput };
