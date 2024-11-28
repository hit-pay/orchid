import { defineComponent as n, openBlock as a, createElementBlock as r, normalizeClass as c, toDisplayString as i } from "vue";
const p = /* @__PURE__ */ n({
  __name: "OcTag",
  props: {
    variant: {
      type: String,
      default: "warning"
    },
    label: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = {
      warning: "bg-oc-warning-600 text-white",
      "accent-2": "bg-oc-accent-2-500 text-white"
    };
    return (o, s) => (a(), r("div", {
      class: c(["rounded-sm py-1 px-3 text-xs", e[t.variant]])
    }, i(t.label), 3));
  }
});
export {
  p as _
};
