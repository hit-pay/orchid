import { ref as s, onMounted as b, withDirectives as f, openBlock as m, createElementBlock as v, createVNode as g, unref as h, withCtx as c, Transition as w, createElementVNode as E, normalizeClass as _, renderSlot as y, createCommentVNode as N, vShow as S } from "vue";
import "dayjs";
import { s as L, t as B, a as C } from "./Cropper-Qy54pgCV.js";
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
    const i = e, o = s(!1), p = s(), n = s(), u = s(), d = () => {
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
          n.value.addEventListener(t, d);
        }), l.forEach((t) => {
          n.value.addEventListener(t, r);
        }));
      } else
        p.value.addEventListener("click", () => o.value ? r() : d());
    });
    const k = () => {
      o.value && r();
    };
    return (a, l) => f((m(), v("span", O, [
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
              f(E("div", {
                ref_key: "popperBodyEl",
                ref: n,
                class: _(["oc-tooltip", e.popperClass])
              }, [
                y(a.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? N("", !0) : (m(), v("div", A))
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
}, j = /* @__PURE__ */ L(P, [["__scopeId", "data-v-9f861dd7"]]);
export {
  j as P
};
