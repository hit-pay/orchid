import { ref as s, onMounted as w, withDirectives as u, openBlock as m, createElementBlock as v, createVNode as h, unref as g, withCtx as c, Transition as b, createElementVNode as E, normalizeClass as N, renderSlot as k, createCommentVNode as O, vShow as S } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { P as B } from "./OcPopper-C11OgQAj-BjcdmdP_.js";
import { clickOutside as C } from "./directives/clickOutside.js";
import { _ as L } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const T = { class: "oc-tooltip-wrapper" }, _ = {
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
    const a = e, o = s(!1), n = s(), p = s(), f = s(), d = () => {
      o.value = !0, f.value.popperInstance.update(), a.hideAfter && setTimeout(() => r(), a.hideAfter);
    }, r = () => o.value = !1;
    w(() => {
      if (a.trigger === "hover") {
        const i = ["mouseenter", "focus"], l = ["mouseleave", "blur"];
        i.forEach((t) => {
          n.value.addEventListener(t, d);
        }), l.forEach((t) => {
          n.value.addEventListener(t, r);
        }), a.isPopover && (i.forEach((t) => {
          p.value.addEventListener(t, d);
        }), l.forEach((t) => {
          p.value.addEventListener(t, r);
        }));
      } else
        n.value.addEventListener("click", () => o.value ? r() : d());
    });
    const y = () => {
      o.value && r();
    };
    return (i, l) => u((m(), v("span", T, [
      h(g(B), {
        ref_key: "popper",
        ref: f,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: c(() => [
          h(b, { name: e.transitionName }, {
            default: c(() => [
              u(E("div", {
                ref_key: "popperBodyEl",
                ref: p,
                class: N(["oc-tooltip", e.popperClass])
              }, [
                k(i.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? O("", !0) : (m(), v("div", _))
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
            ref: n,
            class: "w-[inherit] relative"
          }, [
            k(i.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [g(C), y]
    ]);
  }
}, q = /* @__PURE__ */ L(A, [["__scopeId", "data-v-9f861dd7"]]);
export {
  q as O
};
