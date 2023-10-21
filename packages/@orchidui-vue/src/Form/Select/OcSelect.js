import { defineAsyncComponent } from "vue";

import Select from "./OcSelect.vue";
const Option = defineAsyncComponent(() => import("./OcOption.vue"));
import GroupOptions from "./OcGroupOptions.vue";
export { Select, Option, GroupOptions };
