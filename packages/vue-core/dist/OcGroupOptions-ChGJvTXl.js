import { openBlock as o, createElementBlock as r, createElementVNode as s, toDisplayString as l, renderSlot as c } from "vue";
const n = { class: "flex flex-col" }, p = { class: "px-3 pt-3 pb-2 border-y border-white text-oc-text uppercase text-xs font-medium" }, d = {
  __name: "OcGroupOptions",
  props: {
    label: String
  },
  setup(e) {
    return (t, a) => (o(), r("div", n, [
      s("div", p, l(e.label), 1),
      c(t.$slots, "default")
    ]));
  }
};
export {
  d as _
};
