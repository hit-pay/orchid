import { computed as r, openBlock as i, createElementBlock as c, normalizeClass as o, createVNode as a, unref as n } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as m } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const O = {
  __name: "OcOverviewIcon",
  props: {
    icon: {
      type: String,
      default: "circle"
    },
    variant: {
      type: String,
      default: "blue"
    },
    width: {
      type: String,
      default: "22"
    },
    height: {
      type: String,
      default: "22"
    }
  },
  setup(t) {
    const e = r(() => ({
      gray: "bg-oc-gray-100 text-oc-gray-700",
      orange: "bg-oc-warning-50-tr text-oc-warning-600",
      red: "bg-oc-error-50-tr text-oc-error",
      green: "bg-oc-success-50-tr text-oc-success",
      accent: "bg-oc-accent-1-50-tr text-oc-accent-1",
      blue: "bg-oc-primary-50-tr text-oc-primary"
    }));
    return (p, s) => (i(), c("div", {
      class: o(["rounded-full p-3 flex items-center justify-center aspect-square", e.value[t.variant]])
    }, [
      a(n(m), {
        name: t.icon,
        width: t.width,
        height: t.height
      }, null, 8, ["name", "width", "height"])
    ], 2));
  }
};
export {
  O as _
};
