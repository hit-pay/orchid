import { ref as V, onMounted as q, onBeforeUnmount as W, computed as L, openBlock as t, createElementBlock as n, normalizeClass as B, createBlock as l, unref as o, withCtx as i, createElementVNode as d, toDisplayString as C, createVNode as f, createCommentVNode as p, Fragment as w, renderList as A, mergeProps as h, renderSlot as D, normalizeProps as F } from "vue";
import "dayjs";
import { m as P, aT as N, aU as _, q as S } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { M as z } from "./OcTooltip-DBif_2H1-B-R8nPrI-BM5y6FC0.js";
import { s as I } from "./_plugin-vue_export-helper-CHgC5LLL-BmOybl0N.js";
import { g as R } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { j as Y } from "./OcChip-D-MDc7mX-aGoqgxkI.js";
import { _ as Z } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-WVQMV5PY-CSiaYiz-.js";
const G = () => {
  const e = V(window.innerWidth < 768), s = () => e.value = window.innerWidth < 768;
  return q(() => window.addEventListener("resize", s)), W(() => window.removeEventListener("resize", s)), {
    isMobile: e
  };
}, H = ["href"], J = { class: "py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400" }, K = {
  key: 0,
  class: "border-l group-hover:border-oc-accent-1-100 border-transparent"
}, Q = { class: "py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400" }, X = { class: "flex flex-col" }, ee = { class: "p-2 border-b border-gray-200" }, te = {
  key: 0,
  class: "p-2"
}, Be = {
  __name: "OcPrimaryActions",
  props: {
    primaryActions: Object
  },
  emits: {
    copy: [],
    "click:primaryActionsDropdown": []
  },
  setup(e, { emit: s }) {
    var k;
    const u = e, E = s, a = V(!1), v = L(() => {
      var m;
      return (m = u.primaryActions) == null ? void 0 : m.dropdownOptions;
    }), y = V(((k = v.value) == null ? void 0 : k.isDropdownOpened) ?? !1), O = () => {
      a.value = !0, E("copy"), setTimeout(() => a.value = !1, 1500);
    }, T = L(
      () => {
        var m;
        return ((m = u.primaryActions) == null ? void 0 : m.copyTooltipContent) ?? "Copy link";
      }
    ), M = L(
      () => {
        var m;
        return ((m = u.primaryActions) == null ? void 0 : m.copiedTooltipContent) ?? "Link copied!";
      }
    );
    return (m, x) => {
      var U;
      return t(), n("div", {
        class: B(["p-1 gap-x-1 rounded-sm border text-oc-text-400 flex hover:bg-oc-bg group hover:border-oc-accent-1-100", y.value ? "bg-oc-bg border-oc-accent-1-100" : "border-transparent"])
      }, [
        (U = e.primaryActions) != null && U.mainLinkAction ? (t(), l(o(z), {
          key: 0,
          position: "top",
          "arrow-hidden": "",
          distance: 7
        }, {
          popper: i(() => {
            var r, c;
            return [
              d("div", J, C((c = (r = e.primaryActions) == null ? void 0 : r.mainLinkAction) == null ? void 0 : c.tooltipContent), 1)
            ];
          }),
          default: i(() => {
            var r, c;
            return [
              d("a", {
                href: (c = (r = e.primaryActions) == null ? void 0 : r.mainLinkAction) == null ? void 0 : c.url,
                target: "_blank"
              }, [
                f(o(P), {
                  class: "p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr",
                  name: "external-link"
                })
              ], 8, H)
            ];
          }),
          _: 1
        })) : p("", !0),
        (t(!0), n(w, null, A(e.primaryActions.actions, (r, c) => {
          var g;
          return t(), n(w, { key: c }, [
            (g = e.primaryActions) != null && g.mainLinkAction || c > 0 ? (t(), n("div", K)) : p("", !0),
            f(o(z), {
              position: "top",
              "arrow-hidden": "",
              distance: 7
            }, {
              popper: i(() => [
                d("div", Q, C(r != null && r.isCopyButton ? a.value ? M.value : T.value : r.tooltipContent), 1)
              ]),
              default: i(() => [
                r != null && r.isCopyButton ? (t(), l(o(P), {
                  key: 0,
                  class: B(["p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr", a.value ? "!text-oc-success" : ""]),
                  name: a.value ? "check" : "copy",
                  onClick: O
                }, null, 8, ["name", "class"])) : (t(), l(o(P), {
                  key: 1,
                  class: B(["p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr", r.class ?? ""]),
                  name: r.icon,
                  onClick: r.onClick
                }, null, 8, ["name", "class", "onClick"]))
              ]),
              _: 2
            }, 1024)
          ], 64);
        }), 128)),
        v.value ? (t(), n("div", {
          key: 1,
          class: B(["border-l group-hover:border-oc-accent-1-100", y.value ? "border-oc-gray-200" : "border-transparent"])
        }, null, 2)) : p("", !0),
        v.value ? (t(), l(o(N), {
          key: 2,
          modelValue: y.value,
          "onUpdate:modelValue": x[2] || (x[2] = (r) => y.value = r),
          distance: 6
        }, {
          menu: i(() => {
            var r, c, g;
            return [
              d("div", X, [
                d("div", ee, [
                  (t(!0), n(w, null, A((r = e.primaryActions.dropdownOptions) == null ? void 0 : r.top, (b, j) => (t(), n(w, { key: j }, [
                    b != null && b.isCopyButton ? (t(), l(o(_), {
                      key: 0,
                      icon: a.value ? "check" : "copy",
                      text: a.value ? M.value : T.value,
                      "icon-classes": a.value ? "!text-oc-success" : "",
                      onClick: O
                    }, null, 8, ["icon", "text", "icon-classes"])) : (t(), l(o(_), h({
                      key: 1,
                      ref_for: !0
                    }, b, {
                      onClick: x[0] || (x[0] = ($) => y.value = !1)
                    }), null, 16))
                  ], 64))), 128))
                ]),
                (c = e.primaryActions.dropdownOptions) != null && c.bottom ? (t(), n("div", te, [
                  (t(!0), n(w, null, A((g = e.primaryActions.dropdownOptions) == null ? void 0 : g.bottom, (b, j) => (t(), l(o(_), h({
                    key: j,
                    ref_for: !0
                  }, b, {
                    onClick: x[1] || (x[1] = ($) => y.value = !1)
                  }), null, 16))), 128))
                ])) : p("", !0)
              ])
            ];
          }),
          default: i(() => [
            f(o(z), {
              position: "top",
              "arrow-hidden": "",
              distance: 7
            }, {
              popper: i(() => x[3] || (x[3] = [
                d("div", { class: "py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400" }, " More actions ", -1)
              ])),
              default: i(() => [
                f(o(P), {
                  class: "p-2 cursor-pointer rounded-sm hover:bg-oc-accent-1-50-tr",
                  name: "dots-vertical"
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : p("", !0)
      ], 2);
    };
  }
}, oe = { class: "flex gap-x-3 items-center" }, re = {
  key: 0,
  class: "p-2"
}, ne = { class: "px-3 py-[5px] whitespace-nowrap font-medium text-sm text-oc-text-400 flex gap-x-3 items-center" }, ie = {
  __name: "OcPageTitleRight",
  props: {
    primaryButtonProps: Object,
    secondaryButtonProps: Object
  },
  setup(e) {
    var s;
    const k = V(((s = e.secondaryButtonProps) == null ? void 0 : s.isDropdownOpened) ?? !1), { isMobile: u } = G();
    return (E, a) => (t(), n("div", oe, [
      e.secondaryButtonProps ? (t(), l(o(N), {
        key: 0,
        modelValue: k.value,
        "onUpdate:modelValue": a[0] || (a[0] = (v) => k.value = v),
        distance: 10
      }, {
        menu: i(() => {
          var v;
          return [
            (v = e.secondaryButtonProps) != null && v.dropdownOptions ? (t(), n("div", re, [
              (t(!0), n(w, null, A(e.secondaryButtonProps.dropdownOptions, (y, O) => (t(), l(o(_), h({
                key: O,
                ref_for: !0
              }, y), null, 16))), 128))
            ])) : p("", !0)
          ];
        }),
        default: i(() => [
          f(o(S), h({
            size: o(u) ? "small" : "default"
          }, e.secondaryButtonProps), null, 16, ["size"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : p("", !0),
      e.primaryButtonProps && e.primaryButtonProps.tooltip ? (t(), l(o(z), {
        key: 1,
        position: "top",
        distance: 4,
        "arrow-hidden": ""
      }, {
        popper: i(() => [
          d("div", ne, C(e.primaryButtonProps.tooltip), 1)
        ]),
        default: i(() => [
          f(o(S), h({
            size: o(u) ? "small" : "default"
          }, e.primaryButtonProps), null, 16, ["size"])
        ]),
        _: 1
      })) : e.primaryButtonProps ? (t(), l(o(S), h({
        key: 2,
        size: o(u) ? "small" : "default"
      }, e.primaryButtonProps), null, 16, ["size"])) : p("", !0)
    ]));
  }
}, Ce = /* @__PURE__ */ I(ie, [["__scopeId", "data-v-d02d5377"]]), le = { class: "flex text-oc-text justify-center flex-col gap-y-3 max-w-full" }, se = { class: "md:text-xl font-medium flex items-center gap-x-3" }, ae = { class: "whitespace-nowrap text-ellipsis overflow-hidden md:text-base lg:text-xl" }, ce = {
  key: 0,
  class: "text-oc-text-400 text-sm group flex items-center gap-x-4"
}, pe = { class: "overflow-hidden whitespace-nowrap text-ellipsis" }, Oe = {
  __name: "OcTitle",
  props: {
    title: { type: String, required: !0 },
    description: { type: String, required: !0 },
    copyValue: { type: String, default: "" },
    chipProps: Object,
    tooltipOptions: Object,
    isCopy: Boolean
  },
  setup(e) {
    return (s, k) => (t(), n("div", le, [
      d("div", se, [
        D(s.$slots, "title", {}, () => [
          d("span", ae, C(e.title), 1)
        ]),
        e.chipProps ? (t(), l(o(Y), F(h({ key: 0 }, e.chipProps)), null, 16)) : p("", !0)
      ]),
      e.description || s.$slots.description ? (t(), n("div", ce, [
        D(s.$slots, "description", {}, () => [
          d("span", pe, C(e.description), 1)
        ]),
        e.isCopy ? (t(), l(o(Z), {
          key: 0,
          value: e.copyValue,
          "tooltip-options": e.tooltipOptions
        }, {
          default: i(({ isShow: u }) => [
            f(o(R), {
              width: "16",
              height: "16",
              class: B(["cursor-pointer transition-all duration-500 group-hover:opacity-100", u ? "opacity-100" : "opacity-0"]),
              name: "copy"
            }, null, 8, ["class"])
          ]),
          _: 1
        }, 8, ["value", "tooltip-options"])) : p("", !0)
      ])) : p("", !0)
    ]));
  }
};
export {
  Ce as S,
  Oe as _,
  Be as z
};
