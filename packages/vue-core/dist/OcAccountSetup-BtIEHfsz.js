import { ref as z, reactive as A, computed as D, onMounted as L, openBlock as t, createElementBlock as i, normalizeClass as l, createElementVNode as s, renderSlot as x, Fragment as b, renderList as S, toDisplayString as O, createCommentVNode as o, createBlock as h, unref as p, withCtx as w, createVNode as g, normalizeProps as B, guardReactiveProps as M, normalizeStyle as $ } from "vue";
import "dayjs";
import { D as U } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as y } from "./OcIcon-CJgBICxh.js";
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
import { _ as N } from "./OcChip-5vbWMktM.js";
import { _ as W } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const F = { class: "grid py-7 w-full max-h-[inherit] overflow-y-auto overflow-x-hidden gap-3 px-8" }, R = {
  key: 0,
  class: "text-sm uppercase text-[var(--oc-sidebar-menu-title)] my-3"
}, T = ["onClick"], q = {
  key: 0,
  class: "p-3 gap-4 bg-oc-bg shadow-sm rounded w-[200px]"
}, G = {
  key: 0,
  class: "relative flex flex-col"
}, Se = {
  __name: "OcSidebar",
  props: {
    class: {
      type: String
    },
    isExpanded: {
      type: Boolean,
      default: !0
    },
    sidebarMenu: {
      type: Array
    }
  },
  emits: ["changeExpanded", "click:sidebar-icon", "changeExpandedMenus"],
  setup(e, { emit: E }) {
    const d = E, c = e, f = z([]), u = A({
      loading: !0,
      expanded: []
    }), C = (n) => {
      u.expanded.includes(n) ? u.expanded = u.expanded.filter((r) => r !== n) : u.expanded.push(n), d("changeExpandedMenus", u.expanded);
    }, j = D(() => (c.isExpanded ? "w-[300px] " : "w-[102px] ") + c.class);
    return L(() => {
      c.sidebarMenu.forEach((n) => {
        n.items.forEach((r) => {
          r.children && r.children.forEach((v) => {
            v.active && C(r.name);
          });
        });
      }), u.loading = !1;
    }), (n, r) => (t(), i("div", {
      class: l(["cursor-pointer max-h-[inherit] transition-all duration-300 ease-in-out relative bg-[var(--oc-sidebar-background)]", j.value])
    }, [
      s("div", F, [
        x(n.$slots, "before", { isExpanded: e.isExpanded }),
        (t(!0), i(b, null, S(e.sidebarMenu, (v, P) => (t(), i(b, { key: P }, [
          e.isExpanded && v.label ? (t(), i("h2", R, O(v.label), 1)) : o("", !0),
          (!v.label || !e.isExpanded) && P !== 0 ? (t(), i("div", {
            key: 1,
            class: l(["my-3", e.isExpanded ? "px-0" : "px-3"])
          }, r[0] || (r[0] = [
            s("div", { class: "w-full border-b border-[var(--oc-sidebar-menu-title)] opacity-50" }, null, -1)
          ]), 2)) : o("", !0),
          (t(!0), i(b, null, S(v.items, (a, k) => (t(), i("div", {
            key: k,
            class: "flex flex-col"
          }, [
            s("div", {
              class: l(["flex items-center rounded transition-all duration-500 hover:bg-[var(--oc-sidebar-menu-hover)]", {
                "px-5 py-3": e.isExpanded,
                "font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]": a.active
              }]),
              onClick: (m) => C(a.name)
            }, [
              e.isExpanded ? (t(), h(p(y), {
                key: 0,
                width: "22",
                height: "22",
                class: l(["z-[1] relative", {
                  "text-[var(--oc-sidebar-menu-active-icon)]": !a.active,
                  "text-[var(--oc-sidebar-menu-active-icon-active)]": a.active
                }]),
                name: a.icon
              }, null, 8, ["class", "name"])) : (t(), h(p(U), {
                key: 1,
                modelValue: f.value[a.name + "-" + k],
                "onUpdate:modelValue": (m) => f.value[a.name + "-" + k] = m,
                placement: "right-start"
              }, {
                menu: w(() => [
                  f.value[a.name + "-" + k] ? (t(), i("div", q, [
                    a.children ? o("", !0) : (t(), i("div", {
                      key: 0,
                      class: l(["flex items-center rounded hover:bg-[var(--oc-sidebar-menu-hover)]", {
                        "font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]": a.active
                      }])
                    }, [
                      e.isExpanded ? o("", !0) : x(n.$slots, "label", {
                        key: 0,
                        menu: a
                      })
                    ], 2)),
                    a.children ? (t(), h(p(V), {
                      key: 1,
                      menu: a,
                      "is-expanded": ""
                    }, {
                      label: w(({ submenu: m }) => [
                        x(n.$slots, "submenu_label", {
                          menu: a,
                          submenu: m
                        })
                      ]),
                      _: 2
                    }, 1032, ["menu"])) : o("", !0)
                  ])) : o("", !0)
                ]),
                default: w(() => [
                  s("button", {
                    type: "button",
                    class: l({
                      "p-4": !e.isExpanded
                    })
                  }, [
                    g(p(y), {
                      width: "22",
                      height: "22",
                      class: l({
                        "text-[var(--oc-sidebar-menu-active-icon)]": !a.active,
                        "text-[var(--oc-sidebar-menu-active-icon-active)]": a.active
                      }),
                      name: a.icon,
                      onClick: (m) => n.$emit("click:sidebar-icon", a)
                    }, null, 8, ["class", "name", "onClick"])
                  ], 2)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])),
              e.isExpanded ? x(n.$slots, "label", {
                key: 2,
                menu: a
              }) : o("", !0)
            ], 10, T),
            e.isExpanded ? (t(), i("div", G, [
              r[1] || (r[1] = s("div", { class: "absolute border-l left-[27px] bottom-[17px] h-full" }, null, -1)),
              a.children ? (t(), h(p(V), {
                key: 0,
                menu: a,
                class: l(u.expanded.includes(a.name) && "mt-3"),
                "is-expanded-sidebar": e.isExpanded,
                "is-expanded": u.expanded.includes(a.name)
              }, {
                label: w(({ submenu: m }) => [
                  x(n.$slots, "submenu_label", {
                    menu: a,
                    submenu: m,
                    isExpanded: e.isExpanded
                  })
                ]),
                _: 2
              }, 1032, ["menu", "class", "is-expanded-sidebar", "is-expanded"])) : o("", !0)
            ])) : o("", !0)
          ]))), 128))
        ], 64))), 128)),
        x(n.$slots, "after", { isExpanded: e.isExpanded })
      ])
    ], 2));
  }
}, V = {
  __name: "OcSidebarSubmenu",
  props: {
    isExpanded: {
      type: Boolean,
      default: !0
    },
    isExpandedSidebar: {
      type: Boolean,
      default: !1
    },
    menu: {
      type: Object
    }
  },
  setup(e) {
    return (E, d) => (t(), i("div", {
      class: l(["grid gap-3 transition-all duration-500 overflow-hidden", e.isExpanded ? "max-h-screen" : "max-h-0"])
    }, [
      (t(!0), i(b, null, S(e.menu.children, (c, f) => (t(), i("div", {
        key: f,
        class: l(["text-oc-text-400 flex items-center rounded hover:bg-[var(--oc-sidebar-menu-hover)]", {
          "font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]": c.active
        }])
      }, [
        e.isExpandedSidebar ? (t(), h(p(y), {
          key: 0,
          width: "22",
          height: "22",
          class: l(["flex z-[1] ml-[17.5px]", {
            "text-[var(--oc-sidebar-menu-active-icon)]": !c.active,
            "text-[var(--oc-sidebar-menu-active-icon-active)]": c.active
          }]),
          name: "sidebar-submenu-icon"
        }, null, 8, ["class"])) : o("", !0),
        x(E.$slots, "label", {
          menu: e.menu,
          submenu: c
        })
      ], 2))), 128))
    ], 2));
  }
}, H = {
  key: 0,
  class: "p-3 bg-white rounded-[6px] w-full flex flex-col gap-y-5"
}, J = { class: "p-2 flex gap-3" }, K = { class: "p-3 rounded-full border border-oc-warning-500" }, Q = { class: "mx-[-8px] mb-[-8px] rounded-b-[6px] border-t border-gray-200 bg-oc-gray-50" }, X = { class: "py-4 px-5 text-oc-text-400 font-medium" }, Y = {
  key: 0,
  class: "flex items-center"
}, Z = {
  key: 1,
  class: "flex items-center mt-3"
}, I = { class: "flex flex-col gap-y-3" }, _ = { class: "flex items-center text-[var(--oc-sidebar-menu-active-text)] justify-between" }, ee = { class: "font-bold" }, te = { class: "h-[12px] w-full rounded-full bg-oc-gray-100 shadow" }, ae = {
  key: 1,
  class: "bg-white rounded-full p-1"
}, se = {
  key: 0,
  class: "p-3 rounded-full"
}, ie = {
  key: 1,
  class: "pie-wrapper progress style-2"
}, ne = { class: "label" }, de = {
  __name: "OcAccountSetup",
  props: {
    isExpanded: Boolean,
    progress: {
      type: Number,
      default: 0
    },
    isPending: Boolean,
    paymentStatus: Object,
    payoutStatus: Object
  },
  setup(e) {
    return (E, d) => (t(), i("div", {
      class: l(["p-1 flex items-center justify-center mb-5", [
        e.isExpanded ? "rounded" : "w-fit rounded-full",
        e.isPending ? "bg-oc-warning-500" : "account-setup-bg"
      ]])
    }, [
      e.isExpanded ? (t(), i("div", H, [
        e.isPending ? (t(), i(b, { key: 0 }, [
          s("div", J, [
            s("div", K, [
              g(y, {
                name: "alert",
                width: "20",
                height: "20",
                class: "text-oc-warning-500"
              })
            ]),
            d[0] || (d[0] = s("div", { class: "text-oc-text-500 text-sm" }, "We’re currently reviewing your account.", -1))
          ]),
          s("div", Q, [
            s("div", X, [
              e.paymentStatus ? (t(), i("div", Y, [
                d[1] || (d[1] = s("span", { class: "flex-1" }, "Payment", -1)),
                g(N, B(M(e.paymentStatus)), null, 16)
              ])) : o("", !0),
              e.paymentStatus ? (t(), i("div", Z, [
                d[2] || (d[2] = s("span", { class: "flex-1" }, "Payout", -1)),
                g(N, B(M(e.payoutStatus)), null, 16)
              ])) : o("", !0)
            ])
          ])
        ], 64)) : (t(), i(b, { key: 1 }, [
          s("div", I, [
            s("div", _, [
              d[3] || (d[3] = s("span", { class: "font-medium" }, "Account setup", -1)),
              s("span", ee, O(e.progress) + "%", 1)
            ]),
            s("div", te, [
              s("div", {
                class: "h-[12px] rounded-full bg-[var(--oc-sidebar-menu-active-icon-active)]",
                style: $({ width: `${e.progress}%` })
              }, null, 4)
            ])
          ]),
          d[4] || (d[4] = s("div", { class: "text-sm font-bold text-[var(--oc-sidebar-menu-active-text)] text-center" }, " COMPLETE NOW -> ", -1))
        ], 64))
      ])) : (t(), i("div", ae, [
        e.isPending ? (t(), i("div", se, [
          g(y, {
            name: "alert",
            width: "20",
            height: "20",
            class: "text-oc-warning-500"
          })
        ])) : (t(), i("div", ie, [
          s("span", ne, O(e.progress), 1),
          s("div", {
            class: "pie",
            style: $({
              clip: e.progress > 50 ? "rect(auto, auto, auto, auto)" : ""
            })
          }, [
            s("div", {
              class: "left-side half-circle transition-all duration-500",
              style: $({ transform: `rotate(calc(${e.progress}*3.6deg))` })
            }, null, 4),
            s("div", {
              class: l(["right-side half-circle transition-all duration-500", e.progress <= 50 ? "hidden" : "rotate-180"])
            }, null, 2)
          ], 4)
        ]))
      ]))
    ], 2));
  }
}, Oe = /* @__PURE__ */ W(de, [["__scopeId", "data-v-98a72f05"]]);
export {
  Oe as O,
  Se as _,
  V as a
};
