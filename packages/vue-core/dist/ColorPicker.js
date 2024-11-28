import { defineAsyncComponent as h, ref as n, computed as O, openBlock as s, createBlock as p, unref as i, normalizeClass as U, withCtx as u, createVNode as C, createCommentVNode as B, createSlots as E, renderSlot as k, createElementBlock as I, normalizeStyle as L } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as N } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { z as $ } from "./OcBaseInput-B-eZowCe-M_QvuaZV.js";
import { d as z } from "./OcInputOption-rY2kKCL8-Ce2jETq4.js";
import { o as A } from "./OcDropdownItem-CzffqBjG-CMBrNq8k.js";
const D = { key: 1 }, T = {
  __name: "ColorPicker",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "solid"
    },
    hideOpacity: Boolean,
    hideInputColor: Boolean,
    presetColors: {
      type: Array
    }
  },
  emits: ["update:model-value"],
  setup(a, { emit: S }) {
    const V = h(() => import("./VueColorPicker-BSnIgXtK.js")), m = a, v = S, d = n(!1), l = n(m.modelValue), f = (e) => {
      e && (l.value = e, v("update:model-value", e));
    }, w = O(() => m.variant === "gradient" ? {
      class: "w-[20px] h-[20px] hide-svg-icon",
      style: {
        background: l.value
      }
    } : {
      style: {
        color: l.value
      }
    }), y = n(), o = n([]), c = () => {
      o.value.length > 8 && (o.value = o.value.filter((e, r) => r < 8)), localStorage.setItem("ck-cp-local-color-list", JSON.stringify(o.value));
    };
    let g = localStorage.getItem("ck-cp-local-color-list");
    g && (o.value = [...new Set(JSON.parse(g))], c());
    const P = (e) => {
      if (!e && l.value)
        if (o.value.find((t) => t === l.value))
          o.value = [
            l.value,
            ...o.value.filter((t) => t !== l.value)
          ], c();
        else {
          o.value.length >= 9 && o.value.pop();
          let t = l.value;
          o.value.unshift(t), c();
        }
    }, x = n(!1), F = (e) => {
      l.value = e, v("update:model-value", e), d.value = !1;
    };
    return (e, r) => (s(), p(i($), {
      class: U(a.hideInputColor ? "w-[40px]" : ""),
      onClick: r[1] || (r[1] = () => {
        var t;
        return (t = y.value) == null ? void 0 : t.toggleDropdown();
      })
    }, {
      default: u(() => [
        C(i(A), {
          ref_key: "dropdownRef",
          ref: y,
          modelValue: d.value,
          "onUpdate:modelValue": [
            r[0] || (r[0] = (t) => d.value = t),
            P
          ],
          "max-menu-height": 800,
          placement: "auto"
        }, {
          menu: u(() => [
            x.value ? B("", !0) : (s(), p(i(V), {
              key: 0,
              variant: a.variant,
              "show-alpha": !a.hideOpacity,
              type: a.hideOpacity ? "HEX" : "HEX8",
              "model-value": a.modelValue,
              "last-used-colors": o.value,
              "preset-colors": a.presetColors,
              "onUpdate:modelValue": f,
              onLastUsedPick: F
            }, null, 8, ["variant", "show-alpha", "type", "model-value", "last-used-colors", "preset-colors"]))
          ]),
          default: u(() => [
            a.hideInputColor ? (s(), I("div", D, [
              k(e.$slots, "picker-icon", {}, () => [
                C(i(N), {
                  class: "cursor-pointer",
                  style: L(`color: ${l.value}`),
                  name: "drop"
                }, null, 8, ["style"])
              ])
            ])) : (s(), p(i(z), {
              key: 0,
              "model-value": l.value,
              icon: "drop",
              "icon-props": w.value,
              placeholder: "#FFFFFF",
              "onUpdate:modelValue": f
            }, E({ _: 2 }, [
              e.$slots.leading ? {
                name: "leading",
                fn: u(() => [
                  k(e.$slots, "leading")
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["model-value", "icon-props"]))
          ]),
          _: 3
        }, 8, ["modelValue"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}, W = h(
  () => import("./VueColorPicker-BSnIgXtK.js")
);
export {
  T as ColorPicker,
  W as ColorPickerPopup
};
