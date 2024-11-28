import { defineComponent as c, openBlock as o, createElementBlock as r, createVNode as m, unref as d, createTextVNode as s, toDisplayString as i, createCommentVNode as p, createElementVNode as u, Fragment as f, renderList as x, normalizeClass as y } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
const h = { class: "py-7 flex flex-col gap-y-3 px-4" }, k = { class: "flex flex-col gap-y-2" }, v = ["onClick"], E = /* @__PURE__ */ c({
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
    return (l, n) => (o(), r("div", h, [
      e.title ? (o(), r("div", {
        key: 0,
        class: "py-4 gap-x-3 whitespace-nowrap cursor-pointer flex font-medium items-center",
        onClick: n[0] || (n[0] = (t) => l.$emit("titleClick"))
      }, [
        m(d(g), {
          name: "chevron-down",
          class: "rotate-90 shrink-0",
          width: "20",
          height: "20"
        }),
        s(" " + i(e.title), 1)
      ])) : p("", !0),
      u("div", k, [
        (o(!0), r(f, null, x(e.menu, (t, a) => (o(), r("div", {
          key: a,
          class: y([
            "py-3 whitespace-nowrap rounded cursor-pointer font-medium hover:bg-oc-accent-2-50-tr px-5",
            e.modelValue === t.value ? "bg-oc-accent-2-50-tr text-oc-accent-1" : "text-oc-text-400"
          ]),
          onClick: (C) => l.$emit("update:modelValue", t.value)
        }, i(t.label), 11, v))), 128))
      ])
    ]));
  }
});
export {
  E as _
};
