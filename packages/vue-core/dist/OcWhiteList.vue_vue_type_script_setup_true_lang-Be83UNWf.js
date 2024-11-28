import { defineComponent as c, openBlock as n, createElementBlock as p, normalizeClass as d, toDisplayString as l, createElementVNode as e, renderSlot as i, createTextVNode as m, createBlock as u, unref as r, normalizeProps as g, mergeProps as a, createCommentVNode as f, createVNode as x } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { q as b } from "./OcButton-Cnqik19l-BEVE67cg.js";
const h = /* @__PURE__ */ c({
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
    const s = {
      warning: "bg-oc-warning-600 text-white",
      "accent-2": "bg-oc-accent-2-500 text-white"
    };
    return (o, N) => (n(), p("div", {
      class: d(["rounded-sm py-1 px-3 text-xs", s[t.variant]])
    }, l(t.label), 3));
  }
}), y = { class: "flex justify-center pt-[75px] items-start backdrop-blur-sm" }, v = { class: "bg-white relative z-10 rounded pb-3 max-w-[320px] w-[96vw] shadow" }, w = { class: "flex flex-col gap-y-7 p-5" }, _ = { class: "min-w-[142px] pt-7 flex justify-center items-center" }, O = ["src"], S = { class: "flex text-center flex-col gap-y-3" }, j = { class: "text-lg flex justify-center gap-x-3 items-center font-medium" }, P = { class: "text-oc-text-400" }, k = { class: "py-6 px-5 flex items-center justify-center" }, A = /* @__PURE__ */ c({
  __name: "OcWhiteList",
  props: {
    buttonProps: {
      type: Object,
      default: () => ({})
    },
    tagOptions: {
      type: Object,
      default: () => null
    },
    title: String,
    imagePath: String,
    description: String
  },
  setup(t) {
    return (s, o) => (n(), p("div", y, [
      o[0] || (o[0] = e("div", { class: "absolute w-full h-full top-0 left-0 bg-oc-gray-50 opacity-80" }, null, -1)),
      e("div", v, [
        e("div", w, [
          i(s.$slots, "logo", {}, () => [
            e("div", _, [
              e("img", {
                src: t.imagePath,
                alt: "logo"
              }, null, 8, O)
            ])
          ]),
          e("div", S, [
            e("div", j, [
              m(l(t.title) + " ", 1),
              t.tagOptions ? (n(), u(r(h), g(a({ key: 0 }, t.tagOptions)), null, 16)) : f("", !0)
            ]),
            e("span", P, l(t.description), 1)
          ]),
          i(s.$slots, "bottom")
        ]),
        e("div", k, [
          i(s.$slots, "footer", {}, () => [
            x(r(b), a({
              label: "Request Access",
              class: "w-fit"
            }, t.buttonProps), null, 16)
          ])
        ])
      ])
    ]));
  }
});
export {
  A as _
};
