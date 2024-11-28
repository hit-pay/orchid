import { defineComponent as l, openBlock as r, createElementBlock as n, createElementVNode as t, toDisplayString as o, normalizeStyle as a } from "vue";
const s = { class: "flex items-center gap-x-3" }, c = { class: "text-oc-text-400 text-sm shrink-0" }, i = { class: "w-full rounded-full bg-oc-gray-100 h-[8px] overflow-hidden" }, p = /* @__PURE__ */ l({
  __name: "OcHorizontalProgressbar",
  props: {
    label: {
      type: String,
      default: ""
    },
    max: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    }
  },
  setup(e) {
    return (d, u) => (r(), n("div", s, [
      t("span", c, o(e.label), 1),
      t("div", i, [
        t("div", {
          class: "h-[8px] rounded-l-full bg-oc-primary transition-all",
          style: a({ width: e.current / e.max * 100 + "%" })
        }, null, 4)
      ])
    ]));
  }
});
export {
  p as _
};
