import { ref as n, onMounted as b, withDirectives as f, openBlock as v, createElementBlock as m, createVNode as g, unref as h, withCtx as c, Transition as w, createElementVNode as k, normalizeClass as _, renderSlot as y, createCommentVNode as N, vShow as S } from "vue";
import "dayjs";
import { r as T, x as B, T as C } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
const L = { class: "oc-tooltip-wrapper" }, O = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, A = {
  __name: "OcTooltip",
  props: {
    popperClass: {
      type: String,
      default: "bg-oc-bg-light"
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    skidding: {
      type: Number,
      default: 0
    },
    transitionName: {
      type: String,
      default: "fade"
    },
    hideAfter: Number,
    popperOptions: Object,
    trigger: {
      type: String,
      default: "hover",
      validator: (e) => ["hover", "click"].includes(e)
    },
    position: {
      type: String,
      default: "bottom",
      validator: (e) => [
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-start",
        "bottom",
        "bottom-end",
        "left-start",
        "left",
        "left-end"
      ].includes(e)
    },
    arrowHidden: {
      type: Boolean,
      default: !1
    },
    isPopover: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const i = e, o = n(!1), p = n(), d = n(), u = n(), s = () => {
      o.value = !0, u.value.popperInstance.update(), i.hideAfter && setTimeout(() => r(), i.hideAfter);
    }, r = () => o.value = !1;
    b(() => {
      if (i.trigger === "hover") {
        const a = ["mouseenter", "focus"], l = ["mouseleave", "blur"];
        a.forEach((t) => {
          p.value.addEventListener(t, s);
        }), l.forEach((t) => {
          p.value.addEventListener(t, r);
        }), i.isPopover && (a.forEach((t) => {
          d.value.addEventListener(t, s);
        }), l.forEach((t) => {
          d.value.addEventListener(t, r);
        }));
      } else
        p.value.addEventListener("click", () => o.value ? r() : s());
    });
    const E = () => {
      o.value && r();
    };
    return (a, l) => f((v(), m("span", L, [
      g(h(B), {
        ref_key: "popper",
        ref: u,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: c(() => [
          g(w, { name: e.transitionName }, {
            default: c(() => [
              f(k("div", {
                ref_key: "popperBodyEl",
                ref: d,
                class: _(["oc-tooltip", e.popperClass])
              }, [
                y(a.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? N("", !0) : (v(), m("div", O))
              ], 2), [
                [S, o.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: c(() => [
          k("div", {
            ref_key: "triggerEl",
            ref: p,
            class: "w-[inherit] relative"
          }, [
            y(a.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [h(C), E]
    ]);
  }
}, P = /* @__PURE__ */ T(A, [["__scopeId", "data-v-9f861dd7"]]);
export {
  P as M
};
