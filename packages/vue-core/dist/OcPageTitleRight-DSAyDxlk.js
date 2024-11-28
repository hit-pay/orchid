import { defineComponent as I, ref as D, openBlock as e, createElementBlock as a, createElementVNode as d, toDisplayString as T, createBlock as s, unref as o, mergeProps as x, withCtx as r, createVNode as u, withModifiers as R, createCommentVNode as c, Fragment as B, renderList as A, renderSlot as C, normalizeClass as $, createSlots as W, computed as L } from "vue";
import { _ as F, S as G } from "./OcTitle-DfvFV5Yx.js";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as P } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { j as H } from "./OcChip-D-MDc7mX-aGoqgxkI.js";
import { q as V } from "./OcButton-CgGNGzWP-CIpgruq1.js";
import { o as q, n as w } from "./OcDropdownItem-lmVCX47e-KIMNJ0NG.js";
import { _ as J } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-WVQMV5PY-CSiaYiz-.js";
import { q as z } from "./OcTooltip-HpelzfZG-w8_u6oS8.js";
import { useWindowWidth as K } from "./composables/useWindowWidth.js";
import { _ as Q } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const X = { class: "flex flex-col gap-y-3" }, Y = { class: "flex items-center justify-between gap-x-3" }, Z = { class: "text-xl leading-[24px] font-medium" }, _ = {
  key: 0,
  class: "flex gap-x-6 text-sm text-oc-text-400 py-4 whitespace-nowrap items-center"
}, tt = { class: "overflow-hidden text-ellipsis" }, et = /* @__PURE__ */ I({
  __name: "OcMobilePageTitle",
  props: {
    title: { type: String },
    description: { type: String },
    primaryButtonProps: Object,
    chipProps: Object,
    secondaryButtonProps: Object
  },
  setup(t) {
    const l = D(!1);
    return (m, y) => (e(), a("div", X, [
      d("div", Y, [
        d("span", Z, T(t.title), 1),
        t.primaryButtonProps || t.secondaryButtonProps ? (e(), s(o(V), x({
          key: 0,
          size: "small"
        }, t.primaryButtonProps, { "is-additional-area": "" }), {
          "additional-content": r(() => [
            u(o(q), {
              modelValue: l.value,
              "onUpdate:modelValue": y[0] || (y[0] = (i) => l.value = i),
              onClick: y[1] || (y[1] = R(() => {
              }, ["stop"]))
            }, {
              menu: r(() => {
                var i, h;
                return [
                  t.secondaryButtonProps ? (e(), s(o(w), {
                    key: 0,
                    text: (i = t.secondaryButtonProps) == null ? void 0 : i.label,
                    icon: (h = t.secondaryButtonProps) == null ? void 0 : h.leftIcon
                  }, null, 8, ["text", "icon"])) : c("", !0),
                  t.secondaryButtonProps && t.secondaryButtonProps.dropdownOptions ? (e(!0), a(B, { key: 1 }, A(t.secondaryButtonProps.dropdownOptions, (p) => (e(), s(o(w), x({
                    key: p.text,
                    ref_for: !0
                  }, p), null, 16))), 128)) : c("", !0)
                ];
              }),
              default: r(() => [
                u(o(P), {
                  width: "16",
                  height: "16",
                  class: "mx-auto",
                  name: "chevron-down"
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }, 16)) : c("", !0)
      ]),
      t.description ? (e(), a("div", _, [
        d("span", tt, T(t.description), 1),
        u(o(J), {
          class: "shrink-0",
          value: t.description
        }, {
          default: r(() => [
            u(o(P), {
              width: "16",
              height: "16",
              class: "cursor-pointer",
              name: "copy"
            })
          ]),
          _: 1
        }, 8, ["value"])
      ])) : c("", !0),
      C(m.$slots, "mobile-amount"),
      t.chipProps ? (e(), s(o(H), x({ key: 1 }, t.chipProps, { class: "self-start" }), null, 16)) : c("", !0)
    ]));
  }
}), ot = { class: "md:pb-5 pb-4 flex flex-col" }, nt = { class: "flex flex-col gap-y-3 pt-4 md:pt-5 px-5 md:px-10" }, jt = {
  __name: "OcPageTitle",
  props: {
    title: { type: String, required: !0 },
    description: { type: String, default: "" },
    titleClass: { type: String, default: "" },
    copyValue: { type: String, default: "" },
    primaryButtonProps: Object,
    secondaryButtonProps: Object,
    tooltipOptions: Object,
    chipProps: Object,
    isCopy: Boolean,
    isBack: { type: Boolean, default: !1 },
    isMobileCombineButtons: { type: Boolean, default: !1 }
  },
  emits: {
    changeTab: [],
    back: []
  },
  setup(t) {
    return (l, m) => (e(), a("div", ot, [
      d("div", nt, [
        t.isBack ? (e(), s(o(V), {
          key: 0,
          size: "small",
          "icon-class": "rotate-90",
          variant: "secondary",
          "is-transparent": "",
          label: "Back",
          "left-icon": "chevron-down",
          class: "self-start",
          onClick: m[0] || (m[0] = (y) => l.$emit("back"))
        })) : c("", !0),
        d("div", {
          class: $(["w-full gap-5", [t.isMobileCombineButtons ? "hidden md:flex" : "flex", t.titleClass]])
        }, [
          u(F, {
            title: t.title,
            description: t.description,
            "chip-props": t.chipProps,
            "copy-value": t.copyValue,
            "tooltip-options": t.tooltipOptions,
            "is-copy": t.isCopy,
            class: "flex-1"
          }, W({ _: 2 }, [
            l.$slots.title ? {
              name: "title",
              fn: r(() => [
                C(l.$slots, "title")
              ]),
              key: "0"
            } : void 0,
            l.$slots.description ? {
              name: "description",
              fn: r(() => [
                C(l.$slots, "description")
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["title", "description", "chip-props", "copy-value", "tooltip-options", "is-copy"]),
          C(l.$slots, "right", {}, () => [
            u(o(G), {
              class: "shrink-0",
              "primary-button-props": t.primaryButtonProps,
              "secondary-button-props": t.secondaryButtonProps
            }, null, 8, ["primary-button-props", "secondary-button-props"])
          ])
        ], 2),
        t.isMobileCombineButtons ? (e(), s(et, {
          key: 1,
          "secondary-button-props": t.secondaryButtonProps,
          "primary-button-props": t.primaryButtonProps,
          description: t.description,
          "chip-props": t.chipProps,
          title: t.title,
          class: "md:hidden"
        }, {
          "mobile-amount": r(() => [
            C(l.$slots, "mobile-amount")
          ]),
          _: 3
        }, 8, ["secondary-button-props", "primary-button-props", "description", "chip-props", "title"])) : c("", !0)
      ])
    ]));
  }
}, rt = ["href"], st = { class: "py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400" }, it = {
  key: 0,
  class: "border-l group-hover:border-oc-accent-1-100 border-transparent"
}, at = { class: "py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400" }, ct = { class: "flex flex-col" }, lt = { class: "p-2 border-b border-gray-200" }, pt = {
  key: 0,
  class: "p-2"
}, St = {
  __name: "OcPrimaryActions",
  props: {
    primaryActions: Object
  },
  emits: {
    copy: [],
    "click:primaryActionsDropdown": []
  },
  setup(t, { emit: l }) {
    var N;
    const m = t, y = l, i = D(!1), h = L(() => {
      var v;
      return (v = m.primaryActions) == null ? void 0 : v.dropdownOptions;
    }), p = D(((N = h.value) == null ? void 0 : N.isDropdownOpened) ?? !1), k = () => {
      i.value = !0, y("copy"), setTimeout(() => i.value = !1, 1500);
    }, j = L(
      () => {
        var v;
        return ((v = m.primaryActions) == null ? void 0 : v.copyTooltipContent) ?? "Copy link";
      }
    ), S = L(
      () => {
        var v;
        return ((v = m.primaryActions) == null ? void 0 : v.copiedTooltipContent) ?? "Link copied!";
      }
    );
    return (v, b) => {
      var U;
      return e(), a("div", {
        class: $(["p-1 gap-x-1 rounded-sm border text-oc-text-400 flex hover:bg-oc-bg group hover:border-oc-accent-1-100", p.value ? "bg-oc-bg border-oc-accent-1-100" : "border-transparent"])
      }, [
        (U = t.primaryActions) != null && U.mainLinkAction ? (e(), s(o(z), {
          key: 0,
          position: "top",
          "arrow-hidden": "",
          distance: 7
        }, {
          popper: r(() => {
            var n, f;
            return [
              d("div", st, T((f = (n = t.primaryActions) == null ? void 0 : n.mainLinkAction) == null ? void 0 : f.tooltipContent), 1)
            ];
          }),
          default: r(() => {
            var n, f;
            return [
              d("a", {
                href: (f = (n = t.primaryActions) == null ? void 0 : n.mainLinkAction) == null ? void 0 : f.url,
                target: "_blank"
              }, [
                u(o(P), {
                  class: "p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr",
                  name: "external-link"
                })
              ], 8, rt)
            ];
          }),
          _: 1
        })) : c("", !0),
        (e(!0), a(B, null, A(t.primaryActions.actions, (n, f) => {
          var O;
          return e(), a(B, { key: f }, [
            (O = t.primaryActions) != null && O.mainLinkAction || f > 0 ? (e(), a("div", it)) : c("", !0),
            u(o(z), {
              position: "top",
              "arrow-hidden": "",
              distance: 7
            }, {
              popper: r(() => [
                d("div", at, T(n != null && n.isCopyButton ? i.value ? S.value : j.value : n.tooltipContent), 1)
              ]),
              default: r(() => [
                n != null && n.isCopyButton ? (e(), s(o(P), {
                  key: 0,
                  class: $(["p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr", i.value ? "!text-oc-success" : ""]),
                  name: i.value ? "check" : "copy",
                  onClick: k
                }, null, 8, ["name", "class"])) : (e(), s(o(P), {
                  key: 1,
                  class: $(["p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr", n.class ?? ""]),
                  name: n.icon,
                  onClick: n.onClick
                }, null, 8, ["name", "class", "onClick"]))
              ]),
              _: 2
            }, 1024)
          ], 64);
        }), 128)),
        h.value ? (e(), a("div", {
          key: 1,
          class: $(["border-l group-hover:border-oc-accent-1-100", p.value ? "border-oc-gray-200" : "border-transparent"])
        }, null, 2)) : c("", !0),
        h.value ? (e(), s(o(q), {
          key: 2,
          modelValue: p.value,
          "onUpdate:modelValue": b[2] || (b[2] = (n) => p.value = n),
          distance: 6
        }, {
          menu: r(() => {
            var n, f, O;
            return [
              d("div", ct, [
                d("div", lt, [
                  (e(!0), a(B, null, A((n = t.primaryActions.dropdownOptions) == null ? void 0 : n.top, (g, M) => (e(), a(B, { key: M }, [
                    g != null && g.isCopyButton ? (e(), s(o(w), {
                      key: 0,
                      icon: i.value ? "check" : "copy",
                      text: i.value ? S.value : j.value,
                      "icon-classes": i.value ? "!text-oc-success" : "",
                      onClick: k
                    }, null, 8, ["icon", "text", "icon-classes"])) : (e(), s(o(w), x({
                      key: 1,
                      ref_for: !0
                    }, g, {
                      onClick: b[0] || (b[0] = (E) => p.value = !1)
                    }), null, 16))
                  ], 64))), 128))
                ]),
                (f = t.primaryActions.dropdownOptions) != null && f.bottom ? (e(), a("div", pt, [
                  (e(!0), a(B, null, A((O = t.primaryActions.dropdownOptions) == null ? void 0 : O.bottom, (g, M) => (e(), s(o(w), x({
                    key: M,
                    ref_for: !0
                  }, g, {
                    onClick: b[1] || (b[1] = (E) => p.value = !1)
                  }), null, 16))), 128))
                ])) : c("", !0)
              ])
            ];
          }),
          default: r(() => [
            u(o(z), {
              position: "top",
              "arrow-hidden": "",
              distance: 7
            }, {
              popper: r(() => b[3] || (b[3] = [
                d("div", { class: "py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400" }, " More actions ", -1)
              ])),
              default: r(() => [
                u(o(P), {
                  class: "p-2 cursor-pointer rounded-sm hover:bg-oc-accent-1-50-tr",
                  name: "dots-vertical"
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : c("", !0)
      ], 2);
    };
  }
}, dt = { class: "flex gap-x-3 items-center" }, ut = {
  key: 0,
  class: "p-2"
}, mt = { class: "px-3 py-[5px] whitespace-nowrap font-medium text-sm text-oc-text-400 flex gap-x-3 items-center" }, yt = {
  __name: "OcPageTitleRight",
  props: {
    primaryButtonProps: Object,
    secondaryButtonProps: Object
  },
  setup(t) {
    var i;
    const m = D(((i = t.secondaryButtonProps) == null ? void 0 : i.isDropdownOpened) ?? !1), { isMobile: y } = K();
    return (h, p) => (e(), a("div", dt, [
      t.secondaryButtonProps ? (e(), s(o(q), {
        key: 0,
        modelValue: m.value,
        "onUpdate:modelValue": p[0] || (p[0] = (k) => m.value = k),
        distance: 10
      }, {
        menu: r(() => {
          var k;
          return [
            (k = t.secondaryButtonProps) != null && k.dropdownOptions ? (e(), a("div", ut, [
              (e(!0), a(B, null, A(t.secondaryButtonProps.dropdownOptions, (j, S) => (e(), s(o(w), x({
                key: S,
                ref_for: !0
              }, j), null, 16))), 128))
            ])) : c("", !0)
          ];
        }),
        default: r(() => [
          u(o(V), x({
            size: o(y) ? "small" : "default"
          }, t.secondaryButtonProps), null, 16, ["size"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : c("", !0),
      t.primaryButtonProps && t.primaryButtonProps.tooltip ? (e(), s(o(z), {
        key: 1,
        position: "top",
        distance: 4,
        "arrow-hidden": ""
      }, {
        popper: r(() => [
          d("div", mt, T(t.primaryButtonProps.tooltip), 1)
        ]),
        default: r(() => [
          u(o(V), x({
            size: o(y) ? "small" : "default"
          }, t.primaryButtonProps), null, 16, ["size"])
        ]),
        _: 1
      })) : t.primaryButtonProps ? (e(), s(o(V), x({
        key: 2,
        size: o(y) ? "small" : "default"
      }, t.primaryButtonProps), null, 16, ["size"])) : c("", !0)
    ]));
  }
}, zt = /* @__PURE__ */ Q(yt, [["__scopeId", "data-v-d02d5377"]]);
export {
  zt as O,
  jt as _,
  St as a
};
