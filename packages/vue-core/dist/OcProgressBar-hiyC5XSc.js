import { openBlock as t, createElementBlock as r, toDisplayString as a, createCommentVNode as o, createElementVNode as u, Fragment as i, renderList as m, normalizeClass as p } from "vue";
const d = {
  key: 0,
  class: "mb-3 text-center"
}, b = { class: "w-full flex align-center justify-center gap-2" }, f = {
  __name: "OcProgressBar",
  props: {
    steps: {
      type: Number,
      required: !0
    },
    currentStep: {
      type: Number,
      default: 1
    },
    label: String
  },
  setup(e) {
    const s = e, c = (l) => l <= s.currentStep;
    return (l, g) => (t(), r("div", null, [
      e.label ? (t(), r("p", d, a(e.label), 1)) : o("", !0),
      u("div", b, [
        (t(!0), r(i, null, m(e.steps, (n) => (t(), r("span", {
          key: n,
          class: p(["bg-oc-primary h-2 w-14 rounded-full", { "bg-oc-primary-50-tr": !c(n) }])
        }, null, 2))), 128))
      ])
    ]));
  }
};
export {
  f as _
};
