import { defineComponent as n, openBlock as t, createElementBlock as l, normalizeClass as i, createElementVNode as a, createBlock as s, unref as d, toDisplayString as m, renderSlot as p, Fragment as f, renderList as y } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as x } from "./OcIcon-CJgBICxh.js";
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
const C = { key: 1 }, g = /* @__PURE__ */ n({
  __name: "OcStep",
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    isCurrent: {
      type: Boolean,
      default: !1
    },
    isCompleted: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (o, c) => (t(), l("div", {
      class: i(["flex flex-col gap-y-3 text-sm cursor-pointer", e.isCurrent || e.isCompleted ? "text-oc-text-500" : "text-oc-text-300"])
    }, [
      a("div", {
        class: i(["rounded-full flex items-center justify-center w-7 h-7 font-medium", [
          e.isCompleted ? "text-white bg-oc-primary" : "border border-oc-gray-300",
          e.isCurrent ? "border-oc-gray-800" : ""
        ]])
      }, [
        e.isCompleted ? (t(), s(d(x), {
          key: 0,
          name: "check-2",
          width: "12",
          height: "12"
        })) : (t(), l("span", C, m(e.value), 1))
      ], 2),
      a("span", {
        class: i(e.isCurrent ? "font-medium" : "")
      }, m(e.title), 3)
    ], 2));
  }
}), h = { class: "flex gap-x-7" }, q = /* @__PURE__ */ n({
  __name: "OcSteps",
  props: {
    steps: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:model-value"],
  setup(e) {
    return (o, c) => (t(), l("div", h, [
      p(o.$slots, "default", {}, () => [
        (t(!0), l(f, null, y(e.steps, (u, r) => (t(), s(g, {
          key: r,
          title: u.title,
          value: r + 1,
          "is-current": r === e.modelValue,
          "is-completed": r < e.modelValue,
          class: "flex flex-col gap-y-3 items-center text-sm",
          onClick: (v) => o.$emit("update:model-value", r)
        }, null, 8, ["title", "value", "is-current", "is-completed", "onClick"]))), 128))
      ])
    ]));
  }
});
export {
  q as _,
  g as a
};
