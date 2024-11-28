import { computed as _, openBlock as i, createElementBlock as f, normalizeClass as V, createElementVNode as s, createBlock as T, unref as v, mergeProps as D, createCommentVNode as m, toDisplayString as S, renderSlot as x, ref as r, watch as I, withDirectives as C, createVNode as B, withCtx as g, Transition as N, normalizeStyle as E, vShow as H } from "vue";
import "dayjs";
import { m as P } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { x as $, i as j } from "./clickOutside-9ce_n7yD.js";
import { s as A } from "./_plugin-vue_export-helper-CHgC5LLL-BmOybl0N.js";
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
  setup(e, { expose: d, emit: c }) {
    const n = c, l = e, p = r(), y = r(), b = async (t) => {
      t != null && t.target && (l.isDisabled || (setTimeout(() => {
        var o, a;
        return (a = (o = p.value) == null ? void 0 : o.popperInstance) == null ? void 0 : a.update();
      }, 0), n("update:modelValue", !l.modelValue)));
    }, O = (t) => {
      l.isAttachToBody && !l.preventClickOutside && p.value.checkElementIsInsidePopper(t.target) || l.modelValue && !l.preventClickOutside && n("update:modelValue", !1);
    }, u = r(), h = r(0);
    return I(() => l.modelValue, async () => {
      const t = window.innerHeight || document.documentElement.clientHeight, o = u.value.getBoundingClientRect().top, a = t - u.value.getBoundingClientRect().bottom, k = Math.max(o, a), w = k - (2 + (k === o ? 2.5 : 0)) * 16;
      h.value = w > 0 ? w : 0, p.value.popperInstance.update();
    }), d({
      dropdownScroll: y,
      toggleDropdown: b,
      popper: p
    }), (t, o) => C((i(), f("span", {
      ref_key: "parentElement",
      ref: u,
      class: "flex w-[inherit]"
    }, [
      B(v($), {
        ref_key: "popper",
        ref: p,
        placement: e.placement,
        distance: e.distance,
        "popper-class": e.popperClass,
        skidding: e.skidding,
        "popper-style": e.popperStyle,
        "popper-options": e.popperOptions,
        "is-attach-to-body": e.isAttachToBody
      }, {
        popper: g(() => [
          B(N, { name: "fade" }, {
            default: g(() => [
              C(s("div", {
                ref_key: "dropdownScroll",
                ref: y,
                class: V([e.menuClasses, "rounded bg-oc-bg-light shadow min-w-[162px] overflow-y-auto"]),
                style: E({
                  maxHeight: (e.maxMenuHeight || h.value) - 68 + "px"
                }),
                onScroll: o[0] || (o[0] = (a) => t.$emit("scroll", a))
              }, [
                x(t.$slots, "menu", { isPopoverOpen: e.modelValue }, void 0, !0)
              ], 38), [
                [H, e.modelValue]
              ])
            ]),
            _: 3
          })
        ]),
        default: g(() => [
          s("div", {
            class: "w-[inherit] flex",
            onClick: b
          }, [
            x(t.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["placement", "distance", "popper-class", "skidding", "popper-style", "popper-options", "is-attach-to-body"])
    ])), [
      [v(j), O]
    ]);
  }
}, Y = /* @__PURE__ */ A(z, [["__scopeId", "data-v-28f7b7ed"]]), M = { class: "flex items-center gap-x-3 p-3" }, R = { class: "md:text-base text-sm" }, q = {
  key: 0,
  class: "p-3 text-sm text-oc-text-300"
}, Z = {
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
    const d = _(() => ({
      default: "text-oc-text",
      destructive: "text-oc-error"
    }));
    return (c, n) => (i(), f("div", {
      class: V(["flex flex-col cursor-pointer rounded-sm hover:bg-oc-accent-1-50", d.value[e.variant]])
    }, [
      s("div", M, [
        e.icon ? (i(), T(v(P), D({
          key: 0,
          class: "w-5 h-5",
          name: e.icon
        }, e.iconProps, { class: e.iconClasses }), null, 16, ["name", "class"])) : m("", !0),
        s("span", R, S(e.text), 1),
        e.pointed ? x(c.$slots, "badge", { key: 1 }, () => [
          n[0] || (n[0] = s("div", { class: "w-[6px] aspect-square rounded-full bg-oc-error" }, null, -1))
        ]) : m("", !0)
      ]),
      e.subText ? (i(), f("div", q, [
        s("span", null, S(e.subText), 1)
      ])) : m("", !0)
    ], 2));
  }
};
export {
  Z as n,
  Y as o
};
