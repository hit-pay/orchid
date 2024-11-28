import { defineComponent as m, openBlock as o, createElementBlock as r, createVNode as c, unref as p, createTextVNode as s, toDisplayString as l, createCommentVNode as d, createElementVNode as u, Fragment as f, renderList as x, normalizeClass as y } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as g } from "./OcIcon-CJgBICxh.js";
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
const h = { class: "py-7 flex flex-col gap-y-3 px-4" }, k = { class: "flex flex-col gap-y-2" }, v = ["onClick"], j = /* @__PURE__ */ m({
  __name: "OcSubSidebar",
  props: {
    title: {
      type: String,
      default: ""
    },
    menu: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["titleClick", "update:modelValue"],
  setup(e) {
    return (i, n) => (o(), r("div", h, [
      e.title ? (o(), r("div", {
        key: 0,
        class: "py-4 gap-x-3 whitespace-nowrap cursor-pointer flex font-medium items-center",
        onClick: n[0] || (n[0] = (t) => i.$emit("titleClick"))
      }, [
        c(p(g), {
          name: "chevron-down",
          class: "rotate-90 shrink-0",
          width: "20",
          height: "20"
        }),
        s(" " + l(e.title), 1)
      ])) : d("", !0),
      u("div", k, [
        (o(!0), r(f, null, x(e.menu, (t, a) => (o(), r("div", {
          key: a,
          class: y([
            "py-3 whitespace-nowrap rounded cursor-pointer font-medium hover:bg-oc-accent-2-50-tr px-5",
            e.modelValue === t.value ? "bg-oc-accent-2-50-tr text-oc-accent-1" : "text-oc-text-400"
          ]),
          onClick: (C) => i.$emit("update:modelValue", t.value)
        }, l(t.label), 11, v))), 128))
      ])
    ]));
  }
});
export {
  j as _
};
