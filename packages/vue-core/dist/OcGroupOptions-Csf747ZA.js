import { ref as h, computed as I, watch as q, nextTick as le, openBlock as i, createBlock as c, unref as n, createSlots as z, withCtx as p, createElementBlock as m, renderSlot as v, createCommentVNode as u, createVNode as B, normalizeClass as g, createElementVNode as w, Fragment as E, renderList as U, createTextVNode as te, mergeProps as ae, toDisplayString as S, withKeys as oe, withModifiers as se } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as y } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { j as W } from "./OcChip-D-MDc7mX-aGoqgxkI.js";
import { l as ie } from "./OcSkeleton-BgoOR1qd-pnPSK-aY.js";
import { z as ne } from "./OcBaseInput-ezd9ky5M-NyawiPzv.js";
import { q as re } from "./OcButton-CgGNGzWP-CIpgruq1.js";
import { d as H } from "./OcInputOption-D9DTYAD7-BrCoHHb9.js";
import { P as G } from "./OcGroupOptions-C_AhqALp-CahgBN6V.js";
import { o as ue } from "./OcDropdownItem-lmVCX47e-KIMNJ0NG.js";
import { E as de } from "./OcCheckbox-CC-HWseg-DP_ygEai.js";
const ce = {
  key: 0,
  class: "flex flex-wrap gap-2 overflow-hidden"
}, me = {
  key: 0,
  class: "text-oc-text-300 md:text-base text-lg"
}, fe = {
  key: 2,
  class: "whitespace-nowrap flex gap-x-3 text-lg md:text-base items-center overflow-hidden"
}, be = {
  key: 1,
  class: "text-oc-text-300"
}, he = {
  key: 2,
  class: "truncate"
}, ve = {
  key: 3,
  class: "text-oc-text-300"
}, xe = {
  key: 0,
  class: "sticky px-3 pt-3 top-0 z-10 bg-white"
}, pe = { key: 0 }, Fe = {
  __name: "OcSelect",
  props: {
    label: String,
    hint: String,
    icon: String,
    errorMessage: String,
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    isInlineLabel: Boolean,
    isFilterable: Boolean,
    isAsynchronousSearch: Boolean,
    isDisabled: Boolean,
    isReadonly: Boolean,
    isCheckboxes: Boolean,
    isSelectAll: Boolean,
    isAddNew: Boolean,
    isTransparent: Boolean,
    isSlim: Boolean,
    hideChevron: Boolean,
    options: Array,
    modelValue: [Array, String, Number],
    maxVisibleOptions: {
      type: Number,
      default: 0
    },
    multiple: Boolean,
    maxOptionAllowed: Number,
    isRequired: {
      type: Boolean,
      default: !1
    },
    labelIcon: {
      type: String,
      default: ""
    },
    tooltipText: {
      type: String,
      default: ""
    },
    tooltipOptions: {
      type: Object,
      default: () => ({})
    },
    chipProps: {
      type: Object,
      default: () => ({})
    },
    popperOptions: {
      type: Object,
      default: () => ({
        strategy: "fixed"
      })
    },
    isInlineSearch: Boolean,
    isClearable: Boolean,
    searchKeywords: String,
    isLoading: Boolean
  },
  emits: {
    addNew: [],
    "update:modelValue": [],
    "max-option-allowed-set": [],
    onSearchKeywords: "",
    close: [],
    toggle: [],
    cleared: [],
    loadMore: []
  },
  setup(e, { expose: $, emit: C }) {
    const a = e, d = C, f = h(a.searchKeywords ?? ""), x = h(!1), T = h(), D = h(), N = h([]), P = h(), K = h((/* @__PURE__ */ new Date()).toISOString()), A = I(() => {
      var t, l;
      return a.multiple ? ((t = a.modelValue) == null ? void 0 : t.length) && ((l = a.modelValue) == null ? void 0 : l.length) === k.value.length : !1;
    }), k = I(() => {
      var l, o;
      const t = [];
      for (const s of a.options)
        if (s.values) {
          const r = s.values.filter(
            (O) => {
              var V, L;
              return ((V = O.label) == null ? void 0 : V.toLowerCase().includes(f.value.toLowerCase())) || ((L = O.subLabel) == null ? void 0 : L.toLowerCase().includes(f.value.toLowerCase()));
            }
          );
          r.length > 0 && t.push({
            label: s.label,
            values: r
          });
        } else
          ((l = s.label) != null && l.toLowerCase().includes(f.value.toLowerCase()) || (o = s.subLabel) != null && o.toLowerCase().includes(f.value.toLowerCase())) && t.push(s);
      return t;
    }), b = I(() => {
      if (a.multiple) {
        let t = [];
        if (a.modelValue)
          for (const l of a.modelValue)
            for (const o of a.options)
              o.values ? o.values.forEach((s) => {
                s.value === l && t.push(s);
              }) : o.value === l && t.push(o);
        return t;
      } else
        return a.options.find((t) => {
          var l;
          return t.value.toString() === ((l = a.modelValue) == null ? void 0 : l.toString());
        });
    }), M = (t) => {
      var o;
      if (t.isDisabled)
        return;
      let l;
      if (a.multiple) {
        const s = (a.modelValue || []).find((r) => r === t.value);
        if (!s && a.maxOptionAllowed && ((o = b.value) == null ? void 0 : o.length) >= Number(a.maxOptionAllowed)) {
          d("max-option-allowed-set");
          return;
        }
        l = s ? (a.modelValue || []).filter((r) => r !== t.value) : [...a.modelValue || [], t.value];
      } else
        l = t.value, x.value = !1;
      d("update:modelValue", l);
    }, J = (t) => {
      d(
        "update:modelValue",
        (a.modelValue || []).filter((l) => l !== t)
      );
    }, Q = () => {
      a.isAsynchronousSearch || (A.value ? d("update:modelValue", null) : d(
        "update:modelValue",
        k.value.map((t) => t.value)
      ));
    }, R = h();
    q(k, () => {
      K.value = (/* @__PURE__ */ new Date()).toISOString();
    }), q(x, (t) => {
      if (!t) {
        d("close");
        return;
      }
      le(() => {
        var l;
        (l = T.value) == null || l.focus();
      });
    });
    const j = h("100%"), X = I(() => ({ maxWidth: j.value })), Y = () => {
      var t, l, o, s;
      d("toggle"), j.value = (l = (t = R.value) == null ? void 0 : t.$el) != null && l.offsetWidth ? `${(s = (o = R.value) == null ? void 0 : o.$el) == null ? void 0 : s.offsetWidth}px` : "100%", setTimeout(() => {
        var F;
        let r, O;
        if (Array.isArray(a.modelValue) ? r = a.modelValue[0] ?? null : r = a.modelValue, !r) return;
        k.value.find((_, ee) => {
          if (_.value === r)
            return O = ee, !0;
        });
        const V = N.value[O], L = (F = V == null ? void 0 : V.optionItemRef) == null ? void 0 : F.offsetTop;
        P.value.parentNode.scrollTo(0, L - 60, { behavior: "smooth" });
      }, 10);
    }, Z = (t) => {
      var o, s, r;
      if (a.isLoading)
        return;
      ((o = t.target) == null ? void 0 : o.scrollHeight) - Math.round((s = t.target) == null ? void 0 : s.scrollTop) <= ((r = t.target) == null ? void 0 : r.clientHeight) && d("loadMore");
    };
    return $({
      dropdownRef: D
    }), (t, l) => (i(), c(n(ne), {
      ref_key: "baseInput",
      ref: R,
      class: "relative rounded",
      label: e.isInlineLabel ? "" : e.label,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, z({
      tooltipText: p(() => [
        t.$slots.selectTooltipText ? (i(), m("div", pe, [
          v(t.$slots, "selectTooltipText")
        ])) : u("", !0)
      ]),
      default: p(() => [
        B(n(ue), {
          ref_key: "dropdownRef",
          ref: D,
          modelValue: x.value,
          "onUpdate:modelValue": [
            l[7] || (l[7] = (o) => x.value = o),
            Y
          ],
          class: g(["w-full", {
            "!bg-transparent": e.isTransparent
          }]),
          distance: 4,
          "popper-class": "w-full",
          placement: "bottom-end",
          "popper-style": X.value,
          "popper-options": e.popperOptions,
          "is-disabled": e.isDisabled || e.isReadonly,
          onScroll: Z
        }, {
          menu: p(() => {
            var o;
            return [
              w("div", {
                ref_key: "selectListRef",
                ref: P,
                class: "flex flex-col gap-y-2"
              }, [
                e.isFilterable && !e.isInlineSearch || e.isFilterable && e.isInlineSearch && b.value ? (i(), m("div", xe, [
                  B(n(H), {
                    ref_key: "searchInputRef",
                    ref: T,
                    modelValue: f.value,
                    "onUpdate:modelValue": [
                      l[4] || (l[4] = (s) => f.value = s),
                      l[5] || (l[5] = (s) => t.$emit("onSearchKeywords", f.value))
                    ],
                    icon: "search",
                    placeholder: "Search"
                  }, {
                    icon: p(() => [
                      B(n(y), {
                        class: "w-5 h-5 text-oc-text-400",
                        name: "search"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])) : u("", !0),
                w("div", {
                  class: g(["flex px-3 pb-3 flex-col gap-y-2", { "pt-3": !e.isFilterable || e.isInlineSearch && !b.value }])
                }, [
                  e.isCheckboxes && e.isSelectAll && k.value.length && e.multiple ? (i(), c(n(G), {
                    key: 0,
                    "is-selected": A.value,
                    "is-checkboxes": "",
                    "is-partial": !A.value && !!((o = e.modelValue) != null && o.length),
                    class: "border-b border-oc-gray-200",
                    label: "Select All",
                    onClick: Q
                  }, null, 8, ["is-selected", "is-partial"])) : u("", !0),
                  v(t.$slots, "default", {
                    key: K.value,
                    fOptions: k.value,
                    selectOption: M
                  }, () => [
                    (i(!0), m(E, null, U(k.value, (s) => (i(), c(n(G), {
                      ref_for: !0,
                      ref_key: "filterableOptionsRef",
                      ref: N,
                      key: s.value,
                      label: s.label,
                      "sub-label": s.subLabel,
                      "is-disabled": s.isDisabled,
                      "is-checkboxes": e.isCheckboxes,
                      "is-selected": e.multiple ? e.modelValue ? e.modelValue.find((r) => r === s.value) !== void 0 : !1 : e.modelValue === s.value,
                      onClick: (r) => M(s)
                    }, null, 8, ["label", "sub-label", "is-disabled", "is-checkboxes", "is-selected", "onClick"]))), 128))
                  ]),
                  v(t.$slots, "infinite-scrolling"),
                  e.isLoading ? (i(), c(n(ie), {
                    key: 1,
                    class: g(["h-[20px] rounded-sm", { "mt-2": !e.options.length && e.isFilterable }])
                  }, null, 8, ["class"])) : u("", !0)
                ], 2),
                e.isAddNew ? (i(), c(n(re), {
                  key: 1,
                  variant: "secondary",
                  class: "flex items-center py-2 justify-center gap-x-[6px] sticky bottom-0 bg-white z-10",
                  size: "small",
                  "is-transparent": "",
                  onClick: l[6] || (l[6] = (s) => t.$emit("addNew"))
                }, {
                  default: p(() => [
                    B(n(y), {
                      class: "w-5 h-5",
                      name: "plus"
                    }),
                    l[8] || (l[8] = te(" Add new "))
                  ]),
                  _: 1
                })) : u("", !0)
              ], 512)
            ];
          }),
          default: p(() => [
            w("div", {
              class: g(["border min-h-[36px] w-full px-3 flex justify-between items-center bg-white cursor-pointer gap-x-3 rounded", {
                "border-oc-error": e.errorMessage && !e.isDisabled,
                "pointer-events-none !bg-oc-bg-dark": e.isDisabled,
                "py-3": e.multiple,
                "border-none !min-h-[30px] !px-0": e.isTransparent && !e.isSlim,
                "border-none !min-h-[18px] !px-0": e.isSlim
              }])
            }, [
              e.multiple ? (i(), m("div", ce, [
                v(t.$slots, "selection", {}, () => [
                  (i(!0), m(E, null, U(e.maxVisibleOptions ? b.value.slice(0, e.maxVisibleOptions) : b.value, (o) => (i(), c(n(W), ae({
                    key: o.value,
                    closable: "",
                    variant: o.variant,
                    label: o.label,
                    ref_for: !0
                  }, e.chipProps, {
                    "should-truncate-chip": "",
                    onRemove: (s) => J(o.value)
                  }), null, 16, ["variant", "label", "onRemove"]))), 128)),
                  e.maxVisibleOptions && b.value.length > e.maxVisibleOptions ? (i(), c(n(W), {
                    key: 0,
                    label: `+${b.value.length - e.maxVisibleOptions}`
                  }, null, 8, ["label"])) : u("", !0)
                ]),
                b.value.length === 0 ? (i(), m("span", me, S(e.placeholder), 1)) : u("", !0)
              ])) : u("", !0),
              e.isInlineSearch && e.isFilterable && !b.value ? (i(), c(n(H), {
                key: 1,
                modelValue: f.value,
                "onUpdate:modelValue": [
                  l[0] || (l[0] = (o) => f.value = o),
                  l[1] || (l[1] = (o) => t.$emit("onSearchKeywords", f.value))
                ],
                placeholder: "Search",
                "input-class": "!border-none !shadow-none",
                "is-readonly": !x.value,
                onKeyup: l[2] || (l[2] = oe((o) => x.value = !1, ["enter"]))
              }, z({ _: 2 }, [
                x.value ? {
                  name: "icon",
                  fn: p(() => [
                    B(n(y), {
                      class: "w-5 h-5 text-oc-text-400",
                      name: "search"
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["modelValue", "is-readonly"])) : (i(), m("span", fe, [
                e.icon ? (i(), c(n(y), {
                  key: 0,
                  name: e.icon,
                  width: "16",
                  height: "16"
                }, null, 8, ["name"])) : u("", !0),
                e.isInlineLabel && e.label ? (i(), m("span", be, S(e.label) + ": ", 1)) : u("", !0),
                b.value ? (i(), m("span", he, S(b.value.label), 1)) : (i(), m("span", ve, S(e.placeholder), 1))
              ])),
              e.modelValue && e.isClearable ? (i(), c(n(y), {
                key: 3,
                class: "text-oc-text-400 ml-auto transition-all shrink-0 duration-500 hover:rotate-90",
                width: "16",
                height: "16",
                name: "x",
                onClick: l[3] || (l[3] = se((o) => d("cleared"), ["stop"]))
              })) : u("", !0),
              e.hideChevron ? u("", !0) : (i(), c(n(y), {
                key: 4,
                class: g(["w-5 h-5 text-oc-text-400 transition-all shrink-0 duration-500", x.value && "-rotate-180"]),
                name: "chevron-down"
              }, null, 8, ["class"]))
            ], 2)
          ]),
          _: 3
        }, 8, ["modelValue", "class", "popper-style", "popper-options", "is-disabled"])
      ]),
      _: 2
    }, [
      t.$slots.hint ? {
        name: "hint",
        fn: p(() => [
          v(t.$slots, "hint")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["label", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
}, ye = { class: "w-full flex items-center gap-x-3" }, ge = { class: "truncate" }, we = {
  key: 0,
  class: "text-sm text-oc-text-300"
}, qe = {
  __name: "OcOption",
  props: {
    label: String,
    subLabel: String,
    isSelected: [Boolean, Number],
    isCheckboxes: Boolean,
    isPartial: Boolean,
    hasChildren: Boolean,
    showChildren: Boolean,
    isDisabled: Boolean
  },
  emits: ["select", "show:children", "hide:children"],
  setup(e, { expose: $ }) {
    const C = h();
    return $({
      optionItemRef: C
    }), (a, d) => (i(), m("div", {
      ref_key: "optionItemRef",
      ref: C,
      class: "w-full flex flex-wrap relative hover:bg-oc-accent-1-50 rounded-sm"
    }, [
      w("div", {
        class: g(["w-full p-3 flex items-center text-oc-text-400 justify-between cursor-pointer gap-x-3", {
          "bg-oc-accent-1-50": e.isSelected && !e.isCheckboxes,
          "opacity-50 hover:bg-white !cursor-default": e.isDisabled
        }]),
        onClick: d[0] || (d[0] = (f) => a.$emit("select"))
      }, [
        e.isCheckboxes ? (i(), c(n(de), {
          key: 0,
          "model-value": !!e.isSelected,
          "is-partial": e.isPartial,
          class: "!w-fit pointer-events-none"
        }, null, 8, ["model-value", "is-partial"])) : u("", !0),
        w("div", ye, [
          v(a.$slots, "trailing"),
          w("div", {
            class: g(["flex flex-col gap-3 overflow-hidden", { "flex-1": e.isCheckboxes }])
          }, [
            w("span", ge, S(e.label), 1),
            v(a.$slots, "sub-label", {}, () => [
              e.subLabel ? (i(), m("span", we, S(e.subLabel), 1)) : u("", !0)
            ])
          ], 2),
          v(a.$slots, "leading")
        ]),
        e.isSelected && !e.isCheckboxes ? (i(), c(n(y), {
          key: 1,
          class: "w-5 h-5 text-oc-primary",
          name: "check-2"
        })) : u("", !0)
      ], 2),
      e.hasChildren ? (i(), c(n(y), {
        key: 0,
        class: g(["w-6 h-6 absolute right-[10px] top-[8px] cursor-pointer", e.showChildren ? "rotate-180" : ""]),
        name: "chevron-down",
        onClick: d[1] || (d[1] = (f) => e.showChildren ? a.$emit("hide:children") : a.$emit("show:children"))
      }, null, 8, ["class"])) : u("", !0),
      v(a.$slots, "after")
    ], 512));
  }
}, ke = { class: "flex flex-col" }, Se = { class: "px-3 pt-3 pb-2 border-y border-white text-oc-text uppercase text-xs font-medium" }, ze = {
  __name: "OcGroupOptions",
  props: {
    label: String
  },
  setup(e) {
    return ($, C) => (i(), m("div", ke, [
      w("div", Se, S(e.label), 1),
      v($.$slots, "default")
    ]));
  }
};
export {
  Fe as _,
  qe as a,
  ze as b
};
