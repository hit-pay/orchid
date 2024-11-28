import { openBlock as r, createElementBlock as n, Fragment as i, renderList as o, normalizeClass as a, createElementVNode as l, toDisplayString as c } from "vue";
const u = { class: "flex items-center gap-2 p-2 rounded-full shadow-inner border border-oc-gray-200" }, d = ["onClick"], y = {
  __name: "OcSwitchTabs",
  props: {
    options: {
      type: Array,
      required: !0
    },
    activeOption: {
      type: String,
      default: ""
    }
  },
  emits: ["select"],
  setup(t) {
    return (s, m) => (r(), n("div", u, [
      (r(!0), n(i, null, o(t.options, (e) => (r(), n("div", {
        key: e.value,
        class: a(["rounded-full cursor-pointer py-3 px-4 transition duration-300 border-2 border-transparent", { "bg-oc-gray-800": e.value === t.activeOption }]),
        onClick: (p) => s.$emit("select", e.value)
      }, [
        l("span", {
          class: a(["text-oc-text-300 font-medium text-sm", { "text-white": e.value === t.activeOption }])
        }, c(e.label), 3)
      ], 10, d))), 128))
    ]));
  }
};
export {
  y as _
};
