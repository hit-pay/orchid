import { defineComponent as g, computed as y, openBlock as l, createElementBlock as v, normalizeClass as c, renderSlot as d, createBlock as b, unref as f, ref as p, watch as x, createElementVNode as o, createVNode as u, toDisplayString as m } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as h } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
const _ = /* @__PURE__ */ g({
  __name: "OnboardingStatusIcon",
  props: {
    variant: {
      type: String,
      default: "current",
      validator: (e) => ["completed", "not_completed", "current", "partially_completed", "pending", "error"].includes(
        e
      )
    }
  },
  setup(e) {
    const t = e, r = y(() => !["completed", "error", "pending"].includes(t.variant)), a = {
      completed: "check-2",
      pending: "time",
      error: "filled-x-circle"
    }, i = {
      completed: "text-white bg-oc-primary",
      pending: "text-oc-warning border border-oc-warning",
      error: "text-oc-error border border-oc-error",
      not_completed: "border border-oc-gray-300",
      partially_completed: "border-2 border-dashed border-oc-primary",
      current: "border border-oc-gray-800"
    }, n = {
      completed: 12,
      error: 18,
      pending: 18
    };
    return (s, $) => (l(), v("div", {
      class: c(["rounded-full w-7 h-7 flex items-center justify-center", i[e.variant]])
    }, [
      r.value ? d(s.$slots, "default", { key: 0 }) : (l(), b(f(h), {
        key: 1,
        width: n[e.variant],
        height: n[e.variant],
        name: a[e.variant]
      }, null, 8, ["width", "height", "name"]))
    ], 2));
  }
}), w = { class: "flex items-center flex-1 gap-x-4" }, S = { class: "flex flex-col gap-y-1" }, k = { class: "font-medium" }, B = { class: "text-oc-text-400 text-sm" }, I = /* @__PURE__ */ g({
  __name: "OnboardingAccordion",
  props: {
    description: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    isBorder: {
      type: Boolean,
      default: !1
    },
    variant: {
      type: String,
      default: "current",
      validator: (e) => ["completed", "not_completed", "current", "partially_completed", "pending", "error"].includes(
        e
      )
    }
  },
  setup(e) {
    const t = p(), r = p(!1), a = () => {
      t.value && (t.value.style.height = r.value ? `${t.value.scrollHeight}px` : "0px");
    }, i = () => {
      r.value = !r.value, a();
    };
    return x(() => t.value, a), (n, s) => (l(), v("div", {
      class: c(["hover:bg-oc-gray-50 border overflow-hidden", e.isBorder ? "border-oc-gray-200 rounded" : "border-transparent"])
    }, [
      o("div", {
        class: "px-7 items-center py-5 flex gap-x-7",
        onClick: i
      }, [
        o("div", w, [
          u(_, { variant: e.variant }, null, 8, ["variant"]),
          o("div", S, [
            o("span", k, m(e.title), 1),
            o("span", B, m(e.description), 1)
          ])
        ]),
        d(n.$slots, "button-group"),
        u(f(h), {
          name: "chevron-down",
          class: c(["text-oc-text-400 transition duration-300", r.value ? "rotate-180" : ""])
        }, null, 8, ["class"])
      ]),
      o("div", {
        ref_key: "bodyWrapper",
        ref: t,
        class: "transition-all duration-300"
      }, [
        d(n.$slots, "default")
      ], 512)
    ], 2));
  }
});
export {
  I as _
};
