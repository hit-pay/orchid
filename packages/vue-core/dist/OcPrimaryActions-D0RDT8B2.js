import { openBlock as o, createElementBlock as i, createElementVNode as l, renderSlot as N, toDisplayString as w, createBlock as a, unref as r, normalizeProps as E, mergeProps as V, createCommentVNode as u, withCtx as c, createVNode as h, normalizeClass as k, ref as q, computed as $, Fragment as f, renderList as O } from "vue";
import "dayjs";
import { T, D as F } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as b } from "./OcIcon-CJgBICxh.js";
import { _ as M } from "./OcChip-5vbWMktM.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
import { _ as U } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-IsqOGpEF.js";
import { _ as B } from "./OcDropdownItem-CsRX3XmF.js";
const G = { class: "flex text-oc-text justify-center flex-col gap-y-3 max-w-full" }, H = { class: "md:text-xl font-medium flex items-center gap-x-3" }, I = { class: "whitespace-nowrap text-ellipsis overflow-hidden md:text-base lg:text-xl" }, J = {
  key: 0,
  class: "text-oc-text-400 text-sm group flex items-center gap-x-4"
}, K = { class: "overflow-hidden whitespace-nowrap text-ellipsis" }, bt = {
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
    return (v, g) => (o(), i("div", G, [
      l("div", H, [
        N(v.$slots, "title", {}, () => [
          l("span", I, w(e.title), 1)
        ]),
        e.chipProps ? (o(), a(r(M), E(V({ key: 0 }, e.chipProps)), null, 16)) : u("", !0)
      ]),
      e.description || v.$slots.description ? (o(), i("div", J, [
        N(v.$slots, "description", {}, () => [
          l("span", K, w(e.description), 1)
        ]),
        e.isCopy ? (o(), a(r(U), {
          key: 0,
          value: e.copyValue,
          "tooltip-options": e.tooltipOptions
        }, {
          default: c(({ isShow: C }) => [
            h(r(b), {
              width: "16",
              height: "16",
              class: k(["cursor-pointer transition-all duration-500 group-hover:opacity-100", C ? "opacity-100" : "opacity-0"]),
              name: "copy"
            }, null, 8, ["class"])
          ]),
          _: 1
        }, 8, ["value", "tooltip-options"])) : u("", !0)
      ])) : u("", !0)
    ]));
  }
}, Q = ["href"], R = { class: "py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400" }, W = {
  key: 0,
  class: "border-l group-hover:border-oc-accent-1-100 border-transparent"
}, X = { class: "py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400" }, Y = { class: "flex flex-col" }, Z = { class: "p-2 border-b border-gray-200" }, tt = {
  key: 0,
  class: "p-2"
}, gt = {
  __name: "OcPrimaryActions",
  props: {
    primaryActions: Object
  },
  emits: {
    copy: [],
    "click:primaryActionsDropdown": []
  },
  setup(e, { emit: v }) {
    var S;
    const g = e, C = v, p = q(!1), A = $(() => {
      var s;
      return (s = g.primaryActions) == null ? void 0 : s.dropdownOptions;
    }), m = q(((S = A.value) == null ? void 0 : S.isDropdownOpened) ?? !1), D = () => {
      p.value = !0, C("copy"), setTimeout(() => p.value = !1, 1500);
    }, L = $(
      () => {
        var s;
        return ((s = g.primaryActions) == null ? void 0 : s.copyTooltipContent) ?? "Copy link";
      }
    ), P = $(
      () => {
        var s;
        return ((s = g.primaryActions) == null ? void 0 : s.copiedTooltipContent) ?? "Link copied!";
      }
    );
    return (s, d) => {
      var j;
      return o(), i("div", {
        class: k(["p-1 gap-x-1 rounded-sm border text-oc-text-400 flex hover:bg-oc-bg group hover:border-oc-accent-1-100", m.value ? "bg-oc-bg border-oc-accent-1-100" : "border-transparent"])
      }, [
        (j = e.primaryActions) != null && j.mainLinkAction ? (o(), a(r(T), {
          key: 0,
          position: "top",
          "arrow-hidden": "",
          distance: 7
        }, {
          popper: c(() => {
            var t, n;
            return [
              l("div", R, w((n = (t = e.primaryActions) == null ? void 0 : t.mainLinkAction) == null ? void 0 : n.tooltipContent), 1)
            ];
          }),
          default: c(() => {
            var t, n;
            return [
              l("a", {
                href: (n = (t = e.primaryActions) == null ? void 0 : t.mainLinkAction) == null ? void 0 : n.url,
                target: "_blank"
              }, [
                h(r(b), {
                  class: "p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr",
                  name: "external-link"
                })
              ], 8, Q)
            ];
          }),
          _: 1
        })) : u("", !0),
        (o(!0), i(f, null, O(e.primaryActions.actions, (t, n) => {
          var x;
          return o(), i(f, { key: n }, [
            (x = e.primaryActions) != null && x.mainLinkAction || n > 0 ? (o(), i("div", W)) : u("", !0),
            h(r(T), {
              position: "top",
              "arrow-hidden": "",
              distance: 7
            }, {
              popper: c(() => [
                l("div", X, w(t != null && t.isCopyButton ? p.value ? P.value : L.value : t.tooltipContent), 1)
              ]),
              default: c(() => [
                t != null && t.isCopyButton ? (o(), a(r(b), {
                  key: 0,
                  class: k(["p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr", p.value ? "!text-oc-success" : ""]),
                  name: p.value ? "check" : "copy",
                  onClick: D
                }, null, 8, ["name", "class"])) : (o(), a(r(b), {
                  key: 1,
                  class: k(["p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr", t.class ?? ""]),
                  name: t.icon,
                  onClick: t.onClick
                }, null, 8, ["name", "class", "onClick"]))
              ]),
              _: 2
            }, 1024)
          ], 64);
        }), 128)),
        A.value ? (o(), i("div", {
          key: 1,
          class: k(["border-l group-hover:border-oc-accent-1-100", m.value ? "border-oc-gray-200" : "border-transparent"])
        }, null, 2)) : u("", !0),
        A.value ? (o(), a(r(F), {
          key: 2,
          modelValue: m.value,
          "onUpdate:modelValue": d[2] || (d[2] = (t) => m.value = t),
          distance: 6
        }, {
          menu: c(() => {
            var t, n, x;
            return [
              l("div", Y, [
                l("div", Z, [
                  (o(!0), i(f, null, O((t = e.primaryActions.dropdownOptions) == null ? void 0 : t.top, (y, _) => (o(), i(f, { key: _ }, [
                    y != null && y.isCopyButton ? (o(), a(r(B), {
                      key: 0,
                      icon: p.value ? "check" : "copy",
                      text: p.value ? P.value : L.value,
                      "icon-classes": p.value ? "!text-oc-success" : "",
                      onClick: D
                    }, null, 8, ["icon", "text", "icon-classes"])) : (o(), a(r(B), V({
                      key: 1,
                      ref_for: !0
                    }, y, {
                      onClick: d[0] || (d[0] = (z) => m.value = !1)
                    }), null, 16))
                  ], 64))), 128))
                ]),
                (n = e.primaryActions.dropdownOptions) != null && n.bottom ? (o(), i("div", tt, [
                  (o(!0), i(f, null, O((x = e.primaryActions.dropdownOptions) == null ? void 0 : x.bottom, (y, _) => (o(), a(r(B), V({
                    key: _,
                    ref_for: !0
                  }, y, {
                    onClick: d[1] || (d[1] = (z) => m.value = !1)
                  }), null, 16))), 128))
                ])) : u("", !0)
              ])
            ];
          }),
          default: c(() => [
            h(r(T), {
              position: "top",
              "arrow-hidden": "",
              distance: 7
            }, {
              popper: c(() => d[3] || (d[3] = [
                l("div", { class: "py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400" }, " More actions ", -1)
              ])),
              default: c(() => [
                h(r(b), {
                  class: "p-2 cursor-pointer rounded-sm hover:bg-oc-accent-1-50-tr",
                  name: "dots-vertical"
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : u("", !0)
      ], 2);
    };
  }
};
export {
  gt as _,
  bt as a
};
