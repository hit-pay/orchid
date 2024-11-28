import { watch as r, openBlock as c, createElementBlock as s, renderSlot as l } from "vue";
const a = { class: "orchid-ui bg-oc-bg-light text-oc-text-500" }, n = {
  __name: "OcTheme",
  props: {
    colorMode: {
      type: String,
      default: "light"
    }
  },
  setup(t) {
    const e = t;
    return r(
      () => e.colorMode,
      () => {
        e.colorMode === "dark" ? document.querySelector("body").setAttribute("class", "dark") : document.querySelector("body").setAttribute("class", "light");
      },
      { immediate: !0 }
    ), (o, d) => (c(), s("main", a, [
      l(o.$slots, "default")
    ]));
  }
};
export {
  n as _
};
