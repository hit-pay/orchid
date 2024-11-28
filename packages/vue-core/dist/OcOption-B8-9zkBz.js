import { ref as b, computed as L, watch as q, nextTick as le, openBlock as s, createBlock as c, unref as n, createSlots as z, withCtx as y, createElementBlock as f, renderSlot as v, createCommentVNode as u, createVNode as C, normalizeClass as p, createElementVNode as k, Fragment as U, renderList as W, createTextVNode as te, mergeProps as ae, toDisplayString as V, withKeys as oe, withModifiers as ie } from "vue";
import "dayjs";
import { _ as se, D as ne, B as re, a as ue } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as g } from "./OcIcon-CJgBICxh.js";
import { _ as E } from "./OcChip-5vbWMktM.js";
import { S as de } from "./OcSkeleton-BdPTmGh0.js";
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as H } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
/* empty css                                                                    */
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const ce = {
  key: 0,
  class: "flex flex-wrap gap-2 overflow-hidden"
}, me = {
  key: 0,
  class: "text-oc-text-300 md:text-base text-lg"
}, fe = {
  key: 2,
  class: "whitespace-nowrap flex gap-x-3 text-lg md:text-base items-center overflow-hidden"
}, he = {
  key: 1,
  class: "text-oc-text-300"
}, be = {
  key: 2,
  class: "truncate"
}, ve = {
  key: 3,
  class: "text-oc-text-300"
}, xe = {
  key: 0,
  class: "sticky px-3 pt-3 top-0 z-10 bg-white"
}, ye = { key: 0 }, qe = {
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
  setup(e, { expose: I, emit: O }) {
    const a = e, d = O, m = b(a.searchKeywords ?? ""), x = b(!1), R = b(), T = b(), N = b([]), K = b(), M = b((/* @__PURE__ */ new Date()).toISOString()), A = L(() => {
      var t, l;
      return a.multiple ? ((t = a.modelValue) == null ? void 0 : t.length) && ((l = a.modelValue) == null ? void 0 : l.length) === w.value.length : !1;
    }), w = L(() => {
      var l, o;
      const t = [];
      for (const i of a.options)
        if (i.values) {
          const r = i.values.filter(
            ($) => {
              var S, B;
              return ((S = $.label) == null ? void 0 : S.toLowerCase().includes(m.value.toLowerCase())) || ((B = $.subLabel) == null ? void 0 : B.toLowerCase().includes(m.value.toLowerCase()));
            }
          );
          r.length > 0 && t.push({
            label: i.label,
            values: r
          });
        } else
          ((l = i.label) != null && l.toLowerCase().includes(m.value.toLowerCase()) || (o = i.subLabel) != null && o.toLowerCase().includes(m.value.toLowerCase())) && t.push(i);
      return t;
    }), h = L(() => {
      if (a.multiple) {
        let t = [];
        if (a.modelValue)
          for (const l of a.modelValue)
            for (const o of a.options)
              o.values ? o.values.forEach((i) => {
                i.value === l && t.push(i);
              }) : o.value === l && t.push(o);
        return t;
      } else
        return a.options.find((t) => {
          var l;
          return t.value.toString() === ((l = a.modelValue) == null ? void 0 : l.toString());
        });
    }), F = (t) => {
      var o;
      if (t.isDisabled)
        return;
      let l;
      if (a.multiple) {
        const i = (a.modelValue || []).find((r) => r === t.value);
        if (!i && a.maxOptionAllowed && ((o = h.value) == null ? void 0 : o.length) >= Number(a.maxOptionAllowed)) {
          d("max-option-allowed-set");
          return;
        }
        l = i ? (a.modelValue || []).filter((r) => r !== t.value) : [...a.modelValue || [], t.value];
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
        w.value.map((t) => t.value)
      ));
    }, D = b();
    q(w, () => {
      M.value = (/* @__PURE__ */ new Date()).toISOString();
    }), q(x, (t) => {
      if (!t) {
        d("close");
        return;
      }
      le(() => {
        var l;
        (l = R.value) == null || l.focus();
      });
    });
    const P = b("100%"), X = L(() => ({ maxWidth: P.value })), Y = () => {
      var t, l, o, i;
      d("toggle"), P.value = (l = (t = D.value) == null ? void 0 : t.$el) != null && l.offsetWidth ? `${(i = (o = D.value) == null ? void 0 : o.$el) == null ? void 0 : i.offsetWidth}px` : "100%", setTimeout(() => {
        var j;
        let r, $;
        if (Array.isArray(a.modelValue) ? r = a.modelValue[0] ?? null : r = a.modelValue, !r) return;
        w.value.find((_, ee) => {
          if (_.value === r)
            return $ = ee, !0;
        });
        const S = N.value[$], B = (j = S == null ? void 0 : S.optionItemRef) == null ? void 0 : j.offsetTop;
        K.value.parentNode.scrollTo(0, B - 60, { behavior: "smooth" });
      }, 10);
    }, Z = (t) => {
      var o, i, r;
      if (a.isLoading)
        return;
      ((o = t.target) == null ? void 0 : o.scrollHeight) - Math.round((i = t.target) == null ? void 0 : i.scrollTop) <= ((r = t.target) == null ? void 0 : r.clientHeight) && d("loadMore");
    };
    return I({
      dropdownRef: T
    }), (t, l) => (s(), c(n(se), {
      ref_key: "baseInput",
      ref: D,
      class: "relative rounded",
      label: e.isInlineLabel ? "" : e.label,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, z({
      tooltipText: y(() => [
        t.$slots.selectTooltipText ? (s(), f("div", ye, [
          v(t.$slots, "selectTooltipText")
        ])) : u("", !0)
      ]),
      default: y(() => [
        C(n(ne), {
          ref_key: "dropdownRef",
          ref: T,
          modelValue: x.value,
          "onUpdate:modelValue": [
            l[7] || (l[7] = (o) => x.value = o),
            Y
          ],
          class: p(["w-full", {
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
          menu: y(() => {
            var o;
            return [
              k("div", {
                ref_key: "selectListRef",
                ref: K,
                class: "flex flex-col gap-y-2"
              }, [
                e.isFilterable && !e.isInlineSearch || e.isFilterable && e.isInlineSearch && h.value ? (s(), f("div", xe, [
                  C(n(H), {
                    ref_key: "searchInputRef",
                    ref: R,
                    modelValue: m.value,
                    "onUpdate:modelValue": [
                      l[4] || (l[4] = (i) => m.value = i),
                      l[5] || (l[5] = (i) => t.$emit("onSearchKeywords", m.value))
                    ],
                    icon: "search",
                    placeholder: "Search"
                  }, {
                    icon: y(() => [
                      C(n(g), {
                        class: "w-5 h-5 text-oc-text-400",
                        name: "search"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])) : u("", !0),
                k("div", {
                  class: p(["flex px-3 pb-3 flex-col gap-y-2", { "pt-3": !e.isFilterable || e.isInlineSearch && !h.value }])
                }, [
                  e.isCheckboxes && e.isSelectAll && w.value.length && e.multiple ? (s(), c(n(G), {
                    key: 0,
                    "is-selected": A.value,
                    "is-checkboxes": "",
                    "is-partial": !A.value && !!((o = e.modelValue) != null && o.length),
                    class: "border-b border-oc-gray-200",
                    label: "Select All",
                    onClick: Q
                  }, null, 8, ["is-selected", "is-partial"])) : u("", !0),
                  v(t.$slots, "default", {
                    key: M.value,
                    fOptions: w.value,
                    selectOption: F
                  }, () => [
                    (s(!0), f(U, null, W(w.value, (i) => (s(), c(n(G), {
                      ref_for: !0,
                      ref_key: "filterableOptionsRef",
                      ref: N,
                      key: i.value,
                      label: i.label,
                      "sub-label": i.subLabel,
                      "is-disabled": i.isDisabled,
                      "is-checkboxes": e.isCheckboxes,
                      "is-selected": e.multiple ? e.modelValue ? e.modelValue.find((r) => r === i.value) !== void 0 : !1 : e.modelValue === i.value,
                      onClick: (r) => F(i)
                    }, null, 8, ["label", "sub-label", "is-disabled", "is-checkboxes", "is-selected", "onClick"]))), 128))
                  ]),
                  v(t.$slots, "infinite-scrolling"),
                  e.isLoading ? (s(), c(n(de), {
                    key: 1,
                    class: p(["h-[20px] rounded-sm", { "mt-2": !e.options.length && e.isFilterable }])
                  }, null, 8, ["class"])) : u("", !0)
                ], 2),
                e.isAddNew ? (s(), c(n(re), {
                  key: 1,
                  variant: "secondary",
                  class: "flex items-center py-2 justify-center gap-x-[6px] sticky bottom-0 bg-white z-10",
                  size: "small",
                  "is-transparent": "",
                  onClick: l[6] || (l[6] = (i) => t.$emit("addNew"))
                }, {
                  default: y(() => [
                    C(n(g), {
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
          default: y(() => [
            k("div", {
              class: p(["border min-h-[36px] w-full px-3 flex justify-between items-center bg-white cursor-pointer gap-x-3 rounded", {
                "border-oc-error": e.errorMessage && !e.isDisabled,
                "pointer-events-none !bg-oc-bg-dark": e.isDisabled,
                "py-3": e.multiple,
                "border-none !min-h-[30px] !px-0": e.isTransparent && !e.isSlim,
                "border-none !min-h-[18px] !px-0": e.isSlim
              }])
            }, [
              e.multiple ? (s(), f("div", ce, [
                v(t.$slots, "selection", {}, () => [
                  (s(!0), f(U, null, W(e.maxVisibleOptions ? h.value.slice(0, e.maxVisibleOptions) : h.value, (o) => (s(), c(n(E), ae({
                    key: o.value,
                    closable: "",
                    variant: o.variant,
                    label: o.label,
                    ref_for: !0
                  }, e.chipProps, {
                    "should-truncate-chip": "",
                    onRemove: (i) => J(o.value)
                  }), null, 16, ["variant", "label", "onRemove"]))), 128)),
                  e.maxVisibleOptions && h.value.length > e.maxVisibleOptions ? (s(), c(n(E), {
                    key: 0,
                    label: `+${h.value.length - e.maxVisibleOptions}`
                  }, null, 8, ["label"])) : u("", !0)
                ]),
                h.value.length === 0 ? (s(), f("span", me, V(e.placeholder), 1)) : u("", !0)
              ])) : u("", !0),
              e.isInlineSearch && e.isFilterable && !h.value ? (s(), c(n(H), {
                key: 1,
                modelValue: m.value,
                "onUpdate:modelValue": [
                  l[0] || (l[0] = (o) => m.value = o),
                  l[1] || (l[1] = (o) => t.$emit("onSearchKeywords", m.value))
                ],
                placeholder: "Search",
                "input-class": "!border-none !shadow-none",
                "is-readonly": !x.value,
                onKeyup: l[2] || (l[2] = oe((o) => x.value = !1, ["enter"]))
              }, z({ _: 2 }, [
                x.value ? {
                  name: "icon",
                  fn: y(() => [
                    C(n(g), {
                      class: "w-5 h-5 text-oc-text-400",
                      name: "search"
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["modelValue", "is-readonly"])) : (s(), f("span", fe, [
                e.icon ? (s(), c(n(g), {
                  key: 0,
                  name: e.icon,
                  width: "16",
                  height: "16"
                }, null, 8, ["name"])) : u("", !0),
                e.isInlineLabel && e.label ? (s(), f("span", he, V(e.label) + ": ", 1)) : u("", !0),
                h.value ? (s(), f("span", be, V(h.value.label), 1)) : (s(), f("span", ve, V(e.placeholder), 1))
              ])),
              e.modelValue && e.isClearable ? (s(), c(n(g), {
                key: 3,
                class: "text-oc-text-400 ml-auto transition-all shrink-0 duration-500 hover:rotate-90",
                width: "16",
                height: "16",
                name: "x",
                onClick: l[3] || (l[3] = ie((o) => d("cleared"), ["stop"]))
              })) : u("", !0),
              e.hideChevron ? u("", !0) : (s(), c(n(g), {
                key: 4,
                class: p(["w-5 h-5 text-oc-text-400 transition-all shrink-0 duration-500", x.value && "-rotate-180"]),
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
        fn: y(() => [
          v(t.$slots, "hint")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["label", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
}, ge = { class: "w-full flex items-center gap-x-3" }, pe = { class: "truncate" }, we = {
  key: 0,
  class: "text-sm text-oc-text-300"
}, G = {
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
  setup(e, { expose: I }) {
    const O = b();
    return I({
      optionItemRef: O
    }), (a, d) => (s(), f("div", {
      ref_key: "optionItemRef",
      ref: O,
      class: "w-full flex flex-wrap relative hover:bg-oc-accent-1-50 rounded-sm"
    }, [
      k("div", {
        class: p(["w-full p-3 flex items-center text-oc-text-400 justify-between cursor-pointer gap-x-3", {
          "bg-oc-accent-1-50": e.isSelected && !e.isCheckboxes,
          "opacity-50 hover:bg-white !cursor-default": e.isDisabled
        }]),
        onClick: d[0] || (d[0] = (m) => a.$emit("select"))
      }, [
        e.isCheckboxes ? (s(), c(n(ue), {
          key: 0,
          "model-value": !!e.isSelected,
          "is-partial": e.isPartial,
          class: "!w-fit pointer-events-none"
        }, null, 8, ["model-value", "is-partial"])) : u("", !0),
        k("div", ge, [
          v(a.$slots, "trailing"),
          k("div", {
            class: p(["flex flex-col gap-3 overflow-hidden", { "flex-1": e.isCheckboxes }])
          }, [
            k("span", pe, V(e.label), 1),
            v(a.$slots, "sub-label", {}, () => [
              e.subLabel ? (s(), f("span", we, V(e.subLabel), 1)) : u("", !0)
            ])
          ], 2),
          v(a.$slots, "leading")
        ]),
        e.isSelected && !e.isCheckboxes ? (s(), c(n(g), {
          key: 1,
          class: "w-5 h-5 text-oc-primary",
          name: "check-2"
        })) : u("", !0)
      ], 2),
      e.hasChildren ? (s(), c(n(g), {
        key: 0,
        class: p(["w-6 h-6 absolute right-[10px] top-[8px] cursor-pointer", e.showChildren ? "rotate-180" : ""]),
        name: "chevron-down",
        onClick: d[1] || (d[1] = (m) => e.showChildren ? a.$emit("hide:children") : a.$emit("show:children"))
      }, null, 8, ["class"])) : u("", !0),
      v(a.$slots, "after")
    ], 512));
  }
};
export {
  qe as _,
  G as a
};
