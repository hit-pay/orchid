import { ref as v, openBlock as i, createElementBlock as p, createElementVNode as x, normalizeClass as f, createBlock as u, unref as n, createCommentVNode as r, renderSlot as h, toDisplayString as k, computed as _, watch as j, nextTick as oe, createSlots as M, withCtx as w, createVNode as O, Fragment as q, renderList as z, createTextVNode as te, mergeProps as ae, withKeys as se, withModifiers as ie } from "vue";
import "dayjs";
import { aS as ne, d as E, aT as re, m as y, q as ce, aP as ue } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { E as W } from "./OcChip-BVKb4v92-KDjhQinN-BPeFXLu3.js";
import { s as de } from "./OcSkeleton-BgoOR1qd-pnPSK-aY-DsKe9Qwj.js";
import { z as pe } from "./OcBaseInput-Bc5AUiVI-CDGfnnZp-CyqZk-kF.js";
import { J as U } from "./OcInputOption-C4nn0iSu-CO_rJ4fh-CEQrc1F9.js";
const he = { class: "w-full flex items-center gap-x-3" }, me = { class: "truncate" }, be = {
  key: 0,
  class: "text-sm text-oc-text-300"
}, H = {
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
    const S = v();
    return $({
      optionItemRef: S
    }), (t, c) => (i(), p("div", {
      ref_key: "optionItemRef",
      ref: S,
      class: "w-full flex flex-wrap relative hover:bg-oc-accent-1-50 rounded-sm"
    }, [
      x("div", {
        class: f(["w-full p-3 flex items-center text-oc-text-400 justify-between cursor-pointer gap-x-3", {
          "bg-oc-accent-1-50": e.isSelected && !e.isCheckboxes,
          "opacity-50 hover:bg-white !cursor-default": e.isDisabled
        }]),
        onClick: c[0] || (c[0] = (d) => t.$emit("select"))
      }, [
        e.isCheckboxes ? (i(), u(n(ne), {
          key: 0,
          "model-value": !!e.isSelected,
          "is-partial": e.isPartial,
          class: "!w-fit pointer-events-none"
        }, null, 8, ["model-value", "is-partial"])) : r("", !0),
        x("div", he, [
          h(t.$slots, "trailing"),
          x("div", {
            class: f(["flex flex-col gap-3 overflow-hidden", { "flex-1": e.isCheckboxes }])
          }, [
            x("span", me, k(e.label), 1),
            h(t.$slots, "sub-label", {}, () => [
              e.subLabel ? (i(), p("span", be, k(e.subLabel), 1)) : r("", !0)
            ])
          ], 2),
          h(t.$slots, "leading")
        ]),
        e.isSelected && !e.isCheckboxes ? (i(), u(n(E), {
          key: 1,
          class: "w-5 h-5 text-oc-primary",
          name: "check-2"
        })) : r("", !0)
      ], 2),
      e.hasChildren ? (i(), u(n(E), {
        key: 0,
        class: f(["w-6 h-6 absolute right-[10px] top-[8px] cursor-pointer", e.showChildren ? "rotate-180" : ""]),
        name: "chevron-down",
        onClick: c[1] || (c[1] = (d) => e.showChildren ? t.$emit("hide:children") : t.$emit("show:children"))
      }, null, 8, ["class"])) : r("", !0),
      h(t.$slots, "after")
    ], 512));
  }
}, ve = {
  key: 0,
  class: "flex flex-wrap gap-2 overflow-hidden"
}, fe = {
  key: 0,
  class: "text-oc-text-300 md:text-base text-lg"
}, xe = {
  key: 2,
  class: "whitespace-nowrap flex gap-x-3 text-lg md:text-base items-center overflow-hidden"
}, ge = {
  key: 1,
  class: "text-oc-text-300"
}, we = {
  key: 2,
  class: "truncate"
}, ye = {
  key: 3,
  class: "text-oc-text-300"
}, ke = {
  key: 0,
  class: "sticky px-3 pt-3 top-0 z-10 bg-white"
}, Se = { key: 0 }, Fe = {
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
  setup(e, { expose: $, emit: S }) {
    const t = e, c = S, d = v(t.searchKeywords ?? ""), g = v(!1), R = v(), A = v(), N = v([]), D = v(), P = v((/* @__PURE__ */ new Date()).toISOString()), I = _(() => {
      var o, l;
      return t.multiple ? ((o = t.modelValue) == null ? void 0 : o.length) && ((l = t.modelValue) == null ? void 0 : l.length) === C.value.length : !1;
    }), C = _(() => {
      var o, l;
      const a = [];
      for (const s of t.options)
        if (s.values) {
          const m = s.values.filter(
            (V) => {
              var B, L;
              return ((B = V.label) == null ? void 0 : B.toLowerCase().includes(d.value.toLowerCase())) || ((L = V.subLabel) == null ? void 0 : L.toLowerCase().includes(d.value.toLowerCase()));
            }
          );
          m.length > 0 && a.push({
            label: s.label,
            values: m
          });
        } else
          ((o = s.label) != null && o.toLowerCase().includes(d.value.toLowerCase()) || (l = s.subLabel) != null && l.toLowerCase().includes(d.value.toLowerCase())) && a.push(s);
      return a;
    }), b = _(() => {
      if (t.multiple) {
        let o = [];
        if (t.modelValue)
          for (const l of t.modelValue)
            for (const a of t.options)
              a.values ? a.values.forEach((s) => {
                s.value === l && o.push(s);
              }) : a.value === l && o.push(a);
        return o;
      } else
        return t.options.find((o) => {
          var l;
          return o.value.toString() === ((l = t.modelValue) == null ? void 0 : l.toString());
        });
    }), F = (o) => {
      var l;
      if (o.isDisabled)
        return;
      let a;
      if (t.multiple) {
        const s = (t.modelValue || []).find((m) => m === o.value);
        if (!s && t.maxOptionAllowed && ((l = b.value) == null ? void 0 : l.length) >= Number(t.maxOptionAllowed)) {
          c("max-option-allowed-set");
          return;
        }
        a = s ? (t.modelValue || []).filter((m) => m !== o.value) : [...t.modelValue || [], o.value];
      } else
        a = o.value, g.value = !1;
      c("update:modelValue", a);
    }, J = (o) => {
      c(
        "update:modelValue",
        (t.modelValue || []).filter((l) => l !== o)
      );
    }, Y = () => {
      t.isAsynchronousSearch || (I.value ? c("update:modelValue", null) : c(
        "update:modelValue",
        C.value.map((o) => o.value)
      ));
    }, T = v();
    j(C, () => {
      P.value = (/* @__PURE__ */ new Date()).toISOString();
    }), j(g, (o) => {
      if (!o) {
        c("close");
        return;
      }
      oe(() => {
        var l;
        (l = R.value) == null || l.focus();
      });
    });
    const K = v("100%"), Q = _(() => ({ maxWidth: K.value })), X = () => {
      var o, l, a, s;
      c("toggle"), K.value = (l = (o = T.value) == null ? void 0 : o.$el) != null && l.offsetWidth ? `${(s = (a = T.value) == null ? void 0 : a.$el) == null ? void 0 : s.offsetWidth}px` : "100%", setTimeout(() => {
        var m;
        let V, B;
        if (Array.isArray(t.modelValue) ? V = t.modelValue[0] ?? null : V = t.modelValue, !V)
          return;
        C.value.find((ee, le) => {
          if (ee.value === V)
            return B = le, !0;
        });
        const L = N.value[B], G = (m = L == null ? void 0 : L.optionItemRef) == null ? void 0 : m.offsetTop;
        D.value.parentNode.scrollTo(0, G - 60, { behavior: "smooth" });
      }, 10);
    }, Z = (o) => {
      var l, a, s;
      t.isLoading || ((l = o.target) == null ? void 0 : l.scrollHeight) - Math.round((a = o.target) == null ? void 0 : a.scrollTop) <= ((s = o.target) == null ? void 0 : s.clientHeight) && c("loadMore");
    };
    return $({
      dropdownRef: A
    }), (o, l) => (i(), u(n(pe), {
      ref_key: "baseInput",
      ref: T,
      class: "relative rounded",
      label: e.isInlineLabel ? "" : e.label,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText,
      "tooltip-options": e.tooltipOptions
    }, M({
      tooltipText: w(() => [
        o.$slots.selectTooltipText ? (i(), p("div", Se, [
          h(o.$slots, "selectTooltipText")
        ])) : r("", !0)
      ]),
      default: w(() => [
        O(n(re), {
          ref_key: "dropdownRef",
          ref: A,
          modelValue: g.value,
          "onUpdate:modelValue": [
            l[7] || (l[7] = (a) => g.value = a),
            X
          ],
          class: f(["w-full", {
            "!bg-transparent": e.isTransparent
          }]),
          distance: 4,
          "popper-class": "w-full",
          placement: "bottom-end",
          "popper-style": Q.value,
          "popper-options": e.popperOptions,
          "is-disabled": e.isDisabled || e.isReadonly,
          onScroll: Z
        }, {
          menu: w(() => {
            var a;
            return [
              x("div", {
                ref_key: "selectListRef",
                ref: D,
                class: "flex flex-col gap-y-2"
              }, [
                e.isFilterable && !e.isInlineSearch || e.isFilterable && e.isInlineSearch && b.value ? (i(), p("div", ke, [
                  O(n(U), {
                    ref_key: "searchInputRef",
                    ref: R,
                    modelValue: d.value,
                    "onUpdate:modelValue": [
                      l[4] || (l[4] = (s) => d.value = s),
                      l[5] || (l[5] = (s) => o.$emit("onSearchKeywords", d.value))
                    ],
                    icon: "search",
                    placeholder: "Search"
                  }, {
                    icon: w(() => [
                      O(n(y), {
                        class: "w-5 h-5 text-oc-text-400",
                        name: "search"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])) : r("", !0),
                x("div", {
                  class: f(["flex px-3 pb-3 flex-col gap-y-2", { "pt-3": !e.isFilterable || e.isInlineSearch && !b.value }])
                }, [
                  e.isCheckboxes && e.isSelectAll && C.value.length && e.multiple ? (i(), u(n(H), {
                    key: 0,
                    "is-selected": I.value,
                    "is-checkboxes": "",
                    "is-partial": !I.value && !!((a = e.modelValue) != null && a.length),
                    class: "border-b border-oc-gray-200",
                    label: "Select All",
                    onClick: Y
                  }, null, 8, ["is-selected", "is-partial"])) : r("", !0),
                  h(o.$slots, "default", {
                    key: P.value,
                    fOptions: C.value,
                    selectOption: F
                  }, () => [
                    (i(!0), p(q, null, z(C.value, (s) => (i(), u(n(H), {
                      ref_for: !0,
                      ref_key: "filterableOptionsRef",
                      ref: N,
                      key: s.value,
                      label: s.label,
                      "sub-label": s.subLabel,
                      "is-disabled": s.isDisabled,
                      "is-checkboxes": e.isCheckboxes,
                      "is-selected": e.multiple ? e.modelValue ? e.modelValue.find((m) => m === s.value) !== void 0 : !1 : e.modelValue === s.value,
                      onClick: (m) => F(s)
                    }, null, 8, ["label", "sub-label", "is-disabled", "is-checkboxes", "is-selected", "onClick"]))), 128))
                  ]),
                  h(o.$slots, "infinite-scrolling"),
                  e.isLoading ? (i(), u(n(de), {
                    key: 1,
                    class: f(["h-[20px] rounded-sm", { "mt-2": !e.options.length && e.isFilterable }])
                  }, null, 8, ["class"])) : r("", !0)
                ], 2),
                e.isAddNew ? (i(), u(n(ce), {
                  key: 1,
                  variant: "secondary",
                  class: "flex items-center py-2 justify-center gap-x-[6px] sticky bottom-0 bg-white z-10",
                  size: "small",
                  "is-transparent": "",
                  onClick: l[6] || (l[6] = (s) => o.$emit("addNew"))
                }, {
                  default: w(() => [
                    O(n(y), {
                      class: "w-5 h-5",
                      name: "plus"
                    }),
                    l[8] || (l[8] = te(" Add new "))
                  ]),
                  _: 1
                })) : r("", !0)
              ], 512)
            ];
          }),
          default: w(() => [
            x("div", {
              class: f(["border min-h-[36px] w-full px-3 flex justify-between items-center bg-white cursor-pointer gap-x-3 rounded", {
                "border-oc-error": e.errorMessage && !e.isDisabled,
                "pointer-events-none !bg-oc-bg-dark": e.isDisabled,
                "py-3": e.multiple,
                "border-none !min-h-[30px] !px-0": e.isTransparent && !e.isSlim,
                "border-none !min-h-[18px] !px-0": e.isSlim
              }])
            }, [
              e.multiple ? (i(), p("div", ve, [
                h(o.$slots, "selection", {}, () => [
                  (i(!0), p(q, null, z(e.maxVisibleOptions ? b.value.slice(0, e.maxVisibleOptions) : b.value, (a) => (i(), u(n(W), ae({
                    key: a.value,
                    closable: "",
                    variant: a.variant,
                    label: a.label,
                    ref_for: !0
                  }, e.chipProps, {
                    "should-truncate-chip": "",
                    onRemove: (s) => J(a.value)
                  }), null, 16, ["variant", "label", "onRemove"]))), 128)),
                  e.maxVisibleOptions && b.value.length > e.maxVisibleOptions ? (i(), u(n(W), {
                    key: 0,
                    label: `+${b.value.length - e.maxVisibleOptions}`
                  }, null, 8, ["label"])) : r("", !0)
                ]),
                b.value.length === 0 ? (i(), p("span", fe, k(e.placeholder), 1)) : r("", !0)
              ])) : r("", !0),
              e.isInlineSearch && e.isFilterable && !b.value ? (i(), u(n(U), {
                key: 1,
                modelValue: d.value,
                "onUpdate:modelValue": [
                  l[0] || (l[0] = (a) => d.value = a),
                  l[1] || (l[1] = (a) => o.$emit("onSearchKeywords", d.value))
                ],
                placeholder: "Search",
                "input-class": "!border-none !shadow-none",
                "is-readonly": !g.value,
                onKeyup: l[2] || (l[2] = se((a) => g.value = !1, ["enter"]))
              }, M({ _: 2 }, [
                g.value ? {
                  name: "icon",
                  fn: w(() => [
                    O(n(y), {
                      class: "w-5 h-5 text-oc-text-400",
                      name: "search"
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["modelValue", "is-readonly"])) : (i(), p("span", xe, [
                e.icon ? (i(), u(n(y), {
                  key: 0,
                  name: e.icon,
                  width: "16",
                  height: "16"
                }, null, 8, ["name"])) : r("", !0),
                e.isInlineLabel && e.label ? (i(), p("span", ge, k(e.label) + ": ", 1)) : r("", !0),
                b.value ? (i(), p("span", we, k(b.value.label), 1)) : (i(), p("span", ye, k(e.placeholder), 1))
              ])),
              e.modelValue && e.isClearable ? (i(), u(n(y), {
                key: 3,
                class: "text-oc-text-400 ml-auto transition-all shrink-0 duration-500 hover:rotate-90",
                width: "16",
                height: "16",
                name: "x",
                onClick: l[3] || (l[3] = ie((a) => c("cleared"), ["stop"]))
              })) : r("", !0),
              e.hideChevron ? r("", !0) : (i(), u(n(y), {
                key: 4,
                class: f(["w-5 h-5 text-oc-text-400 transition-all shrink-0 duration-500", g.value && "-rotate-180"]),
                name: "chevron-down"
              }, null, 8, ["class"]))
            ], 2)
          ]),
          _: 3
        }, 8, ["modelValue", "class", "popper-style", "popper-options", "is-disabled"])
      ]),
      _: 2
    }, [
      o.$slots.hint ? {
        name: "hint",
        fn: w(() => [
          h(o.$slots, "hint")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["label", "hint", "error-message", "is-required", "label-icon", "tooltip-text", "tooltip-options"]));
  }
}, Ce = { class: "w-full flex items-center gap-x-3" }, Ve = { class: "truncate" }, $e = {
  key: 0,
  class: "text-sm text-oc-text-300"
}, Ke = {
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
    const S = v();
    return $({
      optionItemRef: S
    }), (t, c) => (i(), p("div", {
      ref_key: "optionItemRef",
      ref: S,
      class: "w-full flex flex-wrap relative hover:bg-oc-accent-1-50 rounded-sm"
    }, [
      x("div", {
        class: f(["w-full p-3 flex items-center text-oc-text-400 justify-between cursor-pointer gap-x-3", {
          "bg-oc-accent-1-50": e.isSelected && !e.isCheckboxes,
          "opacity-50 hover:bg-white !cursor-default": e.isDisabled
        }]),
        onClick: c[0] || (c[0] = (d) => t.$emit("select"))
      }, [
        e.isCheckboxes ? (i(), u(n(ue), {
          key: 0,
          "model-value": !!e.isSelected,
          "is-partial": e.isPartial,
          class: "!w-fit pointer-events-none"
        }, null, 8, ["model-value", "is-partial"])) : r("", !0),
        x("div", Ce, [
          h(t.$slots, "trailing"),
          x("div", {
            class: f(["flex flex-col gap-3 overflow-hidden", { "flex-1": e.isCheckboxes }])
          }, [
            x("span", Ve, k(e.label), 1),
            h(t.$slots, "sub-label", {}, () => [
              e.subLabel ? (i(), p("span", $e, k(e.subLabel), 1)) : r("", !0)
            ])
          ], 2),
          h(t.$slots, "leading")
        ]),
        e.isSelected && !e.isCheckboxes ? (i(), u(n(y), {
          key: 1,
          class: "w-5 h-5 text-oc-primary",
          name: "check-2"
        })) : r("", !0)
      ], 2),
      e.hasChildren ? (i(), u(n(y), {
        key: 0,
        class: f(["w-6 h-6 absolute right-[10px] top-[8px] cursor-pointer", e.showChildren ? "rotate-180" : ""]),
        name: "chevron-down",
        onClick: c[1] || (c[1] = (d) => e.showChildren ? t.$emit("hide:children") : t.$emit("show:children"))
      }, null, 8, ["class"])) : r("", !0),
      h(t.$slots, "after")
    ], 512));
  }
};
export {
  Fe as F,
  Ke as P
};
