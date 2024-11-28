import { ref as n, onMounted as b, withDirectives as u, openBlock as m, createElementBlock as v, createVNode as g, unref as h, withCtx as c, Transition as _, createElementVNode as y, normalizeClass as w, renderSlot as E, createCommentVNode as N, vShow as S } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { x as B, i as C } from "./clickOutside-9ce_n7yD.js";
import { s as L } from "./_plugin-vue_export-helper-CHgC5LLL-BmOybl0N.js";
const A = { class: "oc-tooltip-wrapper" }, O = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, T = {
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
    const i = e, o = n(!1), p = n(), d = n(), f = n(), s = () => {
      o.value = !0, f.value.popperInstance.update(), i.hideAfter && setTimeout(() => r(), i.hideAfter);
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
    const k = () => {
      o.value && r();
    };
    return (a, l) => u((m(), v("span", A, [
      g(h(B), {
        ref_key: "popper",
        ref: f,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: c(() => [
          g(_, { name: e.transitionName }, {
            default: c(() => [
              u(y("div", {
                ref_key: "popperBodyEl",
                ref: d,
                class: w(["oc-tooltip", e.popperClass])
              }, [
                E(a.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? N("", !0) : (m(), v("div", O))
              ], 2), [
                [S, o.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: c(() => [
          y("div", {
            ref_key: "triggerEl",
            ref: p,
            class: "w-[inherit] relative"
          }, [
            E(a.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [h(C), k]
    ]);
  }
}, M = /* @__PURE__ */ L(T, [["__scopeId", "data-v-9f861dd7"]]);
export {
  M as q
};
