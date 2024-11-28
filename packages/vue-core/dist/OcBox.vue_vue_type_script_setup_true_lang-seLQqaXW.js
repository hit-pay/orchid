import { defineComponent as o, openBlock as r, createElementBlock as n, normalizeClass as c, createVNode as a, unref as m, createElementVNode as i, toDisplayString as e } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as s } from "./OcOverviewIcon-jCLuTU_N.js";
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
const l = { class: "flex flex-col text-center gap-y-3" }, d = { class: "text-lg font-medium" }, p = { class: "text-sm text-oc-text-400" }, z = /* @__PURE__ */ o({
  __name: "OcBox",
  props: {
    icon: String,
    width: String,
    height: String,
    variant: String,
    title: String,
    description: String,
    isActive: Boolean
  },
  setup(t) {
    return (g, h) => (r(), n("div", {
      class: c(["rounded py-7 px-5 border bg-oc-bg-light flex flex-col gap-y-5 items-center shadow-sm", t.isActive ? "border-oc-primary" : "border-oc-gray-200"])
    }, [
      a(m(s), {
        icon: t.icon,
        width: t.width,
        height: t.height,
        variant: t.variant
      }, null, 8, ["icon", "width", "height", "variant"]),
      i("div", l, [
        i("span", d, e(t.title), 1),
        i("span", p, e(t.description), 1)
      ])
    ], 2));
  }
});
export {
  z as _
};
