import { defineComponent as s, openBlock as t, createElementBlock as r, normalizeClass as o, createElementVNode as n, createBlock as m, unref as d, toDisplayString as i, renderSlot as f, Fragment as p, renderList as y } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as x } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
const g = { key: 1 }, C = /* @__PURE__ */ s({
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
    return (a, u) => (t(), r("div", {
      class: o(["flex flex-col gap-y-3 text-sm cursor-pointer", e.isCurrent || e.isCompleted ? "text-oc-text-500" : "text-oc-text-300"])
    }, [
      n("div", {
        class: o(["rounded-full flex items-center justify-center w-7 h-7 font-medium", [
          e.isCompleted ? "text-white bg-oc-primary" : "border border-oc-gray-300",
          e.isCurrent ? "border-oc-gray-800" : ""
        ]])
      }, [
        e.isCompleted ? (t(), m(d(x), {
          key: 0,
          name: "check-2",
          width: "12",
          height: "12"
        })) : (t(), r("span", g, i(e.value), 1))
      ], 2),
      n("span", {
        class: o(e.isCurrent ? "font-medium" : "")
      }, i(e.title), 3)
    ], 2));
  }
}), h = { class: "flex gap-x-7" }, E = /* @__PURE__ */ s({
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
    return (a, u) => (t(), r("div", h, [
      f(a.$slots, "default", {}, () => [
        (t(!0), r(p, null, y(e.steps, (c, l) => (t(), m(C, {
          key: l,
          title: c.title,
          value: l + 1,
          "is-current": l === e.modelValue,
          "is-completed": l < e.modelValue,
          class: "flex flex-col gap-y-3 items-center text-sm",
          onClick: (v) => a.$emit("update:model-value", l)
        }, null, 8, ["title", "value", "is-current", "is-completed", "onClick"]))), 128))
      ])
    ]));
  }
});
export {
  E as _,
  C as a
};
