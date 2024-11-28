import { ref as n, onMounted as b, withDirectives as f, openBlock as v, createElementBlock as m, createVNode as g, unref as h, withCtx as c, Transition as N, createElementVNode as E, normalizeClass as w, renderSlot as y, createCommentVNode as _, vShow as S } from "vue";
import "dayjs";
import { v as L, q as B, N as C } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
const O = { class: "oc-tooltip-wrapper" }, A = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, P = {
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
    const i = e, o = n(!1), p = n(), s = n(), u = n(), d = () => {
      o.value = !0, u.value.popperInstance.update(), i.hideAfter && setTimeout(() => r(), i.hideAfter);
    }, r = () => o.value = !1;
    b(() => {
      if (i.trigger === "hover") {
        const a = ["mouseenter", "focus"], l = ["mouseleave", "blur"];
        a.forEach((t) => {
          p.value.addEventListener(t, d);
        }), l.forEach((t) => {
          p.value.addEventListener(t, r);
        }), i.isPopover && (a.forEach((t) => {
          s.value.addEventListener(t, d);
        }), l.forEach((t) => {
          s.value.addEventListener(t, r);
        }));
      } else
        p.value.addEventListener("click", () => o.value ? r() : d());
    });
    const k = () => {
      o.value && r();
    };
    return (a, l) => f((v(), m("span", O, [
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
          g(N, { name: e.transitionName }, {
            default: c(() => [
              f(E("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: w(["oc-tooltip", e.popperClass])
              }, [
                y(a.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? _("", !0) : (v(), m("div", A))
              ], 2), [
                [S, o.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: c(() => [
          E("div", {
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
      [h(C), k]
    ]);
  }
}, $ = /* @__PURE__ */ L(P, [["__scopeId", "data-v-9f861dd7"]]);
export {
  $ as P
};
