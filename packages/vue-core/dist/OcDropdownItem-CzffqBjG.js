import { ref as r, watch as T, withDirectives as O, openBlock as c, createElementBlock as g, createVNode as C, unref as x, withCtx as m, Transition as H, createElementVNode as s, normalizeClass as B, normalizeStyle as D, renderSlot as h, vShow as E, computed as P, createBlock as I, mergeProps as N, createCommentVNode as f, toDisplayString as S } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { P as M } from "./OcPopper-C11OgQAj-BjcdmdP_.js";
import { clickOutside as $ } from "./directives/clickOutside.js";
import { _ as j } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { g as A } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
const z = {
  __name: "OcDropdown",
  props: {
    distance: {
      type: Number,
      default: 4
    },
    skidding: {
      type: Number,
      default: 0
    },
    isDisabled: Boolean,
    menuClasses: String,
    placement: {
      type: String,
      default: "bottom-start"
    },
    popperOptions: {
      type: Object,
      default: () => ({
        strategy: "fixed"
      })
    },
    maxMenuHeight: Number,
    popperStyle: Object,
    popperClass: [String, Array, Object],
    modelValue: Boolean,
    preventClickOutside: Boolean,
    isAttachToBody: Boolean
  },
  emits: {
    "update:modelValue": [],
    scroll: []
  },
  setup(e, { expose: d, emit: p }) {
    const i = p, n = e, l = r(), v = r(), y = async (t) => {
      t != null && t.target && (n.isDisabled || (setTimeout(() => {
        var o, a;
        return (a = (o = l.value) == null ? void 0 : o.popperInstance) == null ? void 0 : a.update();
      }, 0), i("update:modelValue", !n.modelValue)));
    }, V = (t) => {
      n.isAttachToBody && !n.preventClickOutside && l.value.checkElementIsInsidePopper(t.target) || n.modelValue && !n.preventClickOutside && i("update:modelValue", !1);
    }, u = r(), b = r(0);
    return T(() => n.modelValue, async () => {
      const t = window.innerHeight || document.documentElement.clientHeight, o = u.value.getBoundingClientRect().top, a = t - u.value.getBoundingClientRect().bottom, w = Math.max(o, a), k = w - (2 + (w === o ? 2.5 : 0)) * 16;
      b.value = k > 0 ? k : 0, l.value.popperInstance.update();
    }), d({
      dropdownScroll: v,
      toggleDropdown: y,
      popper: l
    }), (t, o) => O((c(), g("span", {
      ref_key: "parentElement",
      ref: u,
      class: "flex w-[inherit]"
    }, [
      C(x(M), {
        ref_key: "popper",
        ref: l,
        placement: e.placement,
        distance: e.distance,
        "popper-class": e.popperClass,
        skidding: e.skidding,
        "popper-style": e.popperStyle,
        "popper-options": e.popperOptions,
        "is-attach-to-body": e.isAttachToBody
      }, {
        popper: m(() => [
          C(H, { name: "fade" }, {
            default: m(() => [
              O(s("div", {
                ref_key: "dropdownScroll",
                ref: v,
                class: B([e.menuClasses, "rounded bg-oc-bg-light shadow min-w-[162px] overflow-y-auto"]),
                style: D({
                  maxHeight: (e.maxMenuHeight || b.value) - 68 + "px"
                }),
                onScroll: o[0] || (o[0] = (a) => t.$emit("scroll", a))
              }, [
                h(t.$slots, "menu", { isPopoverOpen: e.modelValue }, void 0, !0)
              ], 38), [
                [E, e.modelValue]
              ])
            ]),
            _: 3
          })
        ]),
        default: m(() => [
          s("div", {
            class: "w-[inherit] flex",
            onClick: y
          }, [
            h(t.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["placement", "distance", "popper-class", "skidding", "popper-style", "popper-options", "is-attach-to-body"])
    ])), [
      [x($), V]
    ]);
  }
}, oe = /* @__PURE__ */ j(z, [["__scopeId", "data-v-28f7b7ed"]]), R = { class: "flex items-center gap-x-3 p-3" }, W = { class: "md:text-base text-sm" }, q = {
  key: 0,
  class: "p-3 text-sm text-oc-text-300"
}, ne = {
  __name: "OcDropdownItem",
  props: {
    variant: {
      type: String,
      default: "default"
    },
    icon: String,
    iconClasses: String,
    text: String,
    subText: String,
    pointed: Boolean,
    iconProps: Object
  },
  setup(e) {
    const d = P(() => ({
      default: "text-oc-text",
      destructive: "text-oc-error"
    }));
    return (p, i) => (c(), g("div", {
      class: B(["flex flex-col cursor-pointer rounded-sm hover:bg-oc-accent-1-50", d.value[e.variant]])
    }, [
      s("div", R, [
        e.icon ? (c(), I(x(A), N({
          key: 0,
          class: "w-5 h-5",
          name: e.icon
        }, e.iconProps, { class: e.iconClasses }), null, 16, ["name", "class"])) : f("", !0),
        s("span", W, S(e.text), 1),
        e.pointed ? h(p.$slots, "badge", { key: 1 }, () => [
          i[0] || (i[0] = s("div", { class: "w-[6px] aspect-square rounded-full bg-oc-error" }, null, -1))
        ]) : f("", !0)
      ]),
      e.subText ? (c(), g("div", q, [
        s("span", null, S(e.subText), 1)
      ])) : f("", !0)
    ], 2));
  }
};
export {
  oe as O,
  ne as _
};
