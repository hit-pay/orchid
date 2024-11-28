import { defineAsyncComponent as h, ref as i, computed as F, openBlock as s, createBlock as d, unref as n, normalizeClass as O, withCtx as u, createVNode as g, createCommentVNode as U, createSlots as B, renderSlot as k, createElementBlock as E, normalizeStyle as I } from "vue";
import "dayjs";
import { _ as L, D } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as N } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as z } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const A = { key: 1 }, oe = {
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
  setup(a, { emit: w }) {
    const S = h(() => import("./VueColorPicker-DqMO2Dd6.js")), m = a, v = w, p = i(!1), l = i(m.modelValue), f = (e) => {
      e && (l.value = e, v("update:model-value", e));
    }, V = F(() => m.variant === "gradient" ? {
      class: "w-[20px] h-[20px] hide-svg-icon",
      style: {
        background: l.value
      }
    } : {
      style: {
        color: l.value
      }
    }), y = i(), o = i([]), c = () => {
      o.value.length > 8 && (o.value = o.value.filter((e, r) => r < 8)), localStorage.setItem("ck-cp-local-color-list", JSON.stringify(o.value));
    };
    let C = localStorage.getItem("ck-cp-local-color-list");
    C && (o.value = [...new Set(JSON.parse(C))], c());
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
    }, $ = i(!1), x = (e) => {
      l.value = e, v("update:model-value", e), p.value = !1;
    };
    return (e, r) => (s(), d(n(L), {
      class: O(a.hideInputColor ? "w-[40px]" : ""),
      onClick: r[1] || (r[1] = () => {
        var t;
        return (t = y.value) == null ? void 0 : t.toggleDropdown();
      })
    }, {
      default: u(() => [
        g(n(D), {
          ref_key: "dropdownRef",
          ref: y,
          modelValue: p.value,
          "onUpdate:modelValue": [
            r[0] || (r[0] = (t) => p.value = t),
            P
          ],
          "max-menu-height": 800,
          placement: "auto"
        }, {
          menu: u(() => [
            $.value ? U("", !0) : (s(), d(n(S), {
              key: 0,
              variant: a.variant,
              "show-alpha": !a.hideOpacity,
              type: a.hideOpacity ? "HEX" : "HEX8",
              "model-value": a.modelValue,
              "last-used-colors": o.value,
              "preset-colors": a.presetColors,
              "onUpdate:modelValue": f,
              onLastUsedPick: x
            }, null, 8, ["variant", "show-alpha", "type", "model-value", "last-used-colors", "preset-colors"]))
          ]),
          default: u(() => [
            a.hideInputColor ? (s(), E("div", A, [
              k(e.$slots, "picker-icon", {}, () => [
                g(n(N), {
                  class: "cursor-pointer",
                  style: I(`color: ${l.value}`),
                  name: "drop"
                }, null, 8, ["style"])
              ])
            ])) : (s(), d(n(z), {
              key: 0,
              "model-value": l.value,
              icon: "drop",
              "icon-props": V.value,
              placeholder: "#FFFFFF",
              "onUpdate:modelValue": f
            }, B({ _: 2 }, [
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
}, le = h(
  () => import("./VueColorPicker-DqMO2Dd6.js")
);
export {
  oe as ColorPicker,
  le as ColorPickerPopup
};
