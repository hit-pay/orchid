import { openBlock as t, createElementBlock as a, normalizeClass as n, Fragment as b, renderList as w, createBlock as g, unref as p, createCommentVNode as r, renderSlot as m, ref as A, reactive as L, computed as U, onMounted as W, createElementVNode as i, toDisplayString as S, withCtx as k, createVNode as y, normalizeProps as P, guardReactiveProps as M, normalizeStyle as $ } from "vue";
import "dayjs";
import { m as D } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as O } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { o as F } from "./OcDropdownItem-lmVCX47e-KIMNJ0NG.js";
import { _ as N } from "./OcIcon-CJgBICxh.js";
import { _ as V } from "./OcChip-BiALeB1C.js";
import { _ as R } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const j = {
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
    return (f, d) => (t(), a("div", {
      class: n(["grid gap-3 transition-all duration-500 overflow-hidden", e.isExpanded ? "max-h-screen" : "max-h-0"])
    }, [
      (t(!0), a(b, null, w(e.menu.children, (o, v) => (t(), a("div", {
        key: v,
        class: n(["text-oc-text-400 flex items-center rounded hover:bg-[var(--oc-sidebar-menu-hover)]", {
          "font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]": o.active
        }])
      }, [
        e.isExpandedSidebar ? (t(), g(p(D), {
          key: 0,
          width: "22",
          height: "22",
          class: n(["flex z-[1] ml-[17.5px]", {
            "text-[var(--oc-sidebar-menu-active-icon)]": !o.active,
            "text-[var(--oc-sidebar-menu-active-icon-active)]": o.active
          }]),
          name: "sidebar-submenu-icon"
        }, null, 8, ["class"])) : r("", !0),
        m(f.$slots, "label", {
          menu: e.menu,
          submenu: o
        })
      ], 2))), 128))
    ], 2));
  }
}, T = { class: "grid py-7 w-full max-h-[inherit] overflow-y-auto overflow-x-hidden gap-3 px-8" }, q = {
  key: 0,
  class: "text-sm uppercase text-[var(--oc-sidebar-menu-title)] my-3"
}, G = ["onClick"], H = {
  key: 0,
  class: "p-3 gap-4 bg-oc-bg shadow-sm rounded w-[200px]"
}, J = {
  key: 0,
  class: "relative flex flex-col"
}, Ee = {
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
  setup(e, { emit: f }) {
    const d = f, o = e, v = A([]), u = L({
      loading: !0,
      expanded: []
    }), B = (l) => {
      u.expanded.includes(l) ? u.expanded = u.expanded.filter((c) => c !== l) : u.expanded.push(l), d("changeExpandedMenus", u.expanded);
    }, z = U(() => (o.isExpanded ? "w-[300px] " : "w-[102px] ") + o.class);
    return W(() => {
      o.sidebarMenu.forEach((l) => {
        l.items.forEach((c) => {
          c.children && c.children.forEach((h) => {
            h.active && B(c.name);
          });
        });
      }), u.loading = !1;
    }), (l, c) => (t(), a("div", {
      class: n(["cursor-pointer max-h-[inherit] transition-all duration-300 ease-in-out relative bg-[var(--oc-sidebar-background)]", z.value])
    }, [
      i("div", T, [
        m(l.$slots, "before", { isExpanded: e.isExpanded }),
        (t(!0), a(b, null, w(e.sidebarMenu, (h, C) => (t(), a(b, { key: C }, [
          e.isExpanded && h.label ? (t(), a("h2", q, S(h.label), 1)) : r("", !0),
          (!h.label || !e.isExpanded) && C !== 0 ? (t(), a("div", {
            key: 1,
            class: n(["my-3", e.isExpanded ? "px-0" : "px-3"])
          }, c[0] || (c[0] = [
            i("div", { class: "w-full border-b border-[var(--oc-sidebar-menu-title)] opacity-50" }, null, -1)
          ]), 2)) : r("", !0),
          (t(!0), a(b, null, w(h.items, (s, E) => (t(), a("div", {
            key: E,
            class: "flex flex-col"
          }, [
            i("div", {
              class: n(["flex items-center rounded transition-all duration-500 hover:bg-[var(--oc-sidebar-menu-hover)]", {
                "px-5 py-3": e.isExpanded,
                "font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]": s.active
              }]),
              onClick: (x) => B(s.name)
            }, [
              e.isExpanded ? (t(), g(p(O), {
                key: 0,
                width: "22",
                height: "22",
                class: n(["z-[1] relative", {
                  "text-[var(--oc-sidebar-menu-active-icon)]": !s.active,
                  "text-[var(--oc-sidebar-menu-active-icon-active)]": s.active
                }]),
                name: s.icon
              }, null, 8, ["class", "name"])) : (t(), g(p(F), {
                key: 1,
                modelValue: v.value[s.name + "-" + E],
                "onUpdate:modelValue": (x) => v.value[s.name + "-" + E] = x,
                placement: "right-start"
              }, {
                menu: k(() => [
                  v.value[s.name + "-" + E] ? (t(), a("div", H, [
                    s.children ? r("", !0) : (t(), a("div", {
                      key: 0,
                      class: n(["flex items-center rounded hover:bg-[var(--oc-sidebar-menu-hover)]", {
                        "font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]": s.active
                      }])
                    }, [
                      e.isExpanded ? r("", !0) : m(l.$slots, "label", {
                        key: 0,
                        menu: s
                      })
                    ], 2)),
                    s.children ? (t(), g(p(j), {
                      key: 1,
                      menu: s,
                      "is-expanded": ""
                    }, {
                      label: k(({ submenu: x }) => [
                        m(l.$slots, "submenu_label", {
                          menu: s,
                          submenu: x
                        })
                      ]),
                      _: 2
                    }, 1032, ["menu"])) : r("", !0)
                  ])) : r("", !0)
                ]),
                default: k(() => [
                  i("button", {
                    type: "button",
                    class: n({
                      "p-4": !e.isExpanded
                    })
                  }, [
                    y(p(O), {
                      width: "22",
                      height: "22",
                      class: n({
                        "text-[var(--oc-sidebar-menu-active-icon)]": !s.active,
                        "text-[var(--oc-sidebar-menu-active-icon-active)]": s.active
                      }),
                      name: s.icon,
                      onClick: (x) => l.$emit("click:sidebar-icon", s)
                    }, null, 8, ["class", "name", "onClick"])
                  ], 2)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])),
              e.isExpanded ? m(l.$slots, "label", {
                key: 2,
                menu: s
              }) : r("", !0)
            ], 10, G),
            e.isExpanded ? (t(), a("div", J, [
              c[1] || (c[1] = i("div", { class: "absolute border-l left-[27px] bottom-[17px] h-full" }, null, -1)),
              s.children ? (t(), g(p(j), {
                key: 0,
                menu: s,
                class: n(u.expanded.includes(s.name) && "mt-3"),
                "is-expanded-sidebar": e.isExpanded,
                "is-expanded": u.expanded.includes(s.name)
              }, {
                label: k(({ submenu: x }) => [
                  m(l.$slots, "submenu_label", {
                    menu: s,
                    submenu: x,
                    isExpanded: e.isExpanded
                  })
                ]),
                _: 2
              }, 1032, ["menu", "class", "is-expanded-sidebar", "is-expanded"])) : r("", !0)
            ])) : r("", !0)
          ]))), 128))
        ], 64))), 128)),
        m(l.$slots, "after", { isExpanded: e.isExpanded })
      ])
    ], 2));
  }
}, ke = {
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
    return (f, d) => (t(), a("div", {
      class: n(["grid gap-3 transition-all duration-500 overflow-hidden", e.isExpanded ? "max-h-screen" : "max-h-0"])
    }, [
      (t(!0), a(b, null, w(e.menu.children, (o, v) => (t(), a("div", {
        key: v,
        class: n(["text-oc-text-400 flex items-center rounded hover:bg-[var(--oc-sidebar-menu-hover)]", {
          "font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]": o.active
        }])
      }, [
        e.isExpandedSidebar ? (t(), g(p(O), {
          key: 0,
          width: "22",
          height: "22",
          class: n(["flex z-[1] ml-[17.5px]", {
            "text-[var(--oc-sidebar-menu-active-icon)]": !o.active,
            "text-[var(--oc-sidebar-menu-active-icon-active)]": o.active
          }]),
          name: "sidebar-submenu-icon"
        }, null, 8, ["class"])) : r("", !0),
        m(f.$slots, "label", {
          menu: e.menu,
          submenu: o
        })
      ], 2))), 128))
    ], 2));
  }
}, K = {
  key: 0,
  class: "p-3 bg-white rounded-[6px] w-full flex flex-col gap-y-5"
}, Q = { class: "p-2 flex gap-3" }, X = { class: "p-3 rounded-full border border-oc-warning-500" }, Y = { class: "mx-[-8px] mb-[-8px] rounded-b-[6px] border-t border-gray-200 bg-oc-gray-50" }, Z = { class: "py-4 px-5 text-oc-text-400 font-medium" }, I = {
  key: 0,
  class: "flex items-center"
}, _ = {
  key: 1,
  class: "flex items-center mt-3"
}, ee = { class: "flex flex-col gap-y-3" }, te = { class: "flex items-center text-[var(--oc-sidebar-menu-active-text)] justify-between" }, ae = { class: "font-bold" }, se = { class: "h-[12px] w-full rounded-full bg-oc-gray-100 shadow" }, ie = {
  key: 1,
  class: "bg-white rounded-full p-1"
}, ne = {
  key: 0,
  class: "p-3 rounded-full"
}, de = {
  key: 1,
  class: "pie-wrapper progress style-2"
}, le = { class: "label" }, oe = {
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
    return (f, d) => (t(), a("div", {
      class: n(["p-1 flex items-center justify-center mb-5", [
        e.isExpanded ? "rounded" : "w-fit rounded-full",
        e.isPending ? "bg-oc-warning-500" : "account-setup-bg"
      ]])
    }, [
      e.isExpanded ? (t(), a("div", K, [
        e.isPending ? (t(), a(b, { key: 0 }, [
          i("div", Q, [
            i("div", X, [
              y(N, {
                name: "alert",
                width: "20",
                height: "20",
                class: "text-oc-warning-500"
              })
            ]),
            d[0] || (d[0] = i("div", { class: "text-oc-text-500 text-sm" }, "We’re currently reviewing your account.", -1))
          ]),
          i("div", Y, [
            i("div", Z, [
              e.paymentStatus ? (t(), a("div", I, [
                d[1] || (d[1] = i("span", { class: "flex-1" }, "Payment", -1)),
                y(V, P(M(e.paymentStatus)), null, 16)
              ])) : r("", !0),
              e.paymentStatus ? (t(), a("div", _, [
                d[2] || (d[2] = i("span", { class: "flex-1" }, "Payout", -1)),
                y(V, P(M(e.payoutStatus)), null, 16)
              ])) : r("", !0)
            ])
          ])
        ], 64)) : (t(), a(b, { key: 1 }, [
          i("div", ee, [
            i("div", te, [
              d[3] || (d[3] = i("span", { class: "font-medium" }, "Account setup", -1)),
              i("span", ae, S(e.progress) + "%", 1)
            ]),
            i("div", se, [
              i("div", {
                class: "h-[12px] rounded-full bg-[var(--oc-sidebar-menu-active-icon-active)]",
                style: $({ width: `${e.progress}%` })
              }, null, 4)
            ])
          ]),
          d[4] || (d[4] = i("div", { class: "text-sm font-bold text-[var(--oc-sidebar-menu-active-text)] text-center" }, " COMPLETE NOW -> ", -1))
        ], 64))
      ])) : (t(), a("div", ie, [
        e.isPending ? (t(), a("div", ne, [
          y(N, {
            name: "alert",
            width: "20",
            height: "20",
            class: "text-oc-warning-500"
          })
        ])) : (t(), a("div", de, [
          i("span", le, S(e.progress), 1),
          i("div", {
            class: "pie",
            style: $({
              clip: e.progress > 50 ? "rect(auto, auto, auto, auto)" : ""
            })
          }, [
            i("div", {
              class: "left-side half-circle transition-all duration-500",
              style: $({ transform: `rotate(calc(${e.progress}*3.6deg))` })
            }, null, 4),
            i("div", {
              class: n(["right-side half-circle transition-all duration-500", e.progress <= 50 ? "hidden" : "rotate-180"])
            }, null, 2)
          ], 4)
        ]))
      ]))
    ], 2));
  }
}, we = /* @__PURE__ */ R(oe, [["__scopeId", "data-v-98a72f05"]]);
export {
  we as O,
  Ee as _,
  ke as a
};
