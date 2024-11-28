import { openBlock as o, createElementBlock as n, normalizeClass as w, createVNode as m, unref as i, createElementVNode as c, toDisplayString as h, createBlock as f, normalizeProps as C, mergeProps as x, createCommentVNode as p, createTextVNode as L, Fragment as g, renderList as v, ref as P, withCtx as l, createSlots as $, renderSlot as y, defineComponent as E, Transition as I, guardReactiveProps as T } from "vue";
import "dayjs";
import { B as k, D as M, T as A } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { a as z, _ as H } from "./OcPrimaryActions-D0RDT8B2.js";
import { _ as j } from "./OcChip-5vbWMktM.js";
import { S as B } from "./OcSkeleton-BdPTmGh0.js";
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
import { _ as N } from "./OcDropdownItem-CsRX3XmF.js";
import { _ as U, a as O } from "./OcOverviewItem-f2qg2KV5.js";
/* empty css                                                                    */
import { C as V } from "./OcCustomerCard-DeynYOgo.js";
import { _ as D } from "./OcIcon-CJgBICxh.js";
import { _ as F } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const R = {
  key: 0,
  class: "min-w-[138px] flex flex-col gap-y-3"
}, q = {
  key: 1,
  class: "flex gap-x-4 items-center"
}, G = { class: "flex flex-col gap-y-2" }, J = { class: "flex items-center gap-x-2" }, K = { class: "text-oc-text-400 text-sm" }, Q = {
  key: 0,
  class: "flex justify-center items-center w-[38px] h-[38px] shrink-0 rounded-full bg-oc-gray-100"
}, W = {
  __name: "OcInfoCardButton",
  props: {
    isActive: Boolean,
    isLoading: Boolean,
    title: String,
    content: String,
    isDropdown: Boolean,
    chipOptions: Object,
    dropdownOptions: Object,
    countryIso: String
  },
  setup(e) {
    return (s, d) => (o(), n("div", {
      class: w(["cursor-pointer rounded group font-medium justify-center border gap-y-2 md:w-fit w-full flex flex-col hover:shadow-normal", [
        e.isActive && !e.isLoading ? "border-b-[3px] border-oc-primary" : "border-oc-accent-1-100",
        e.isLoading ? "p-3" : "px-5 py-4 min-h-[62px] max-h-[76px]"
      ]])
    }, [
      e.isLoading ? (o(), n("div", R, [
        m(i(B), { class: "h-[14px] w-[80%] rounded-sm" }),
        m(i(B), { class: "h-[20px] w-full rounded-sm" })
      ])) : (o(), n("div", q, [
        c("div", G, [
          c("div", J, [
            c("span", K, h(e.title), 1),
            e.chipOptions ? (o(), f(i(j), C(x({ key: 0 }, e.chipOptions)), null, 16)) : p("", !0)
          ]),
          c("span", {
            class: w(["flex gap-x-4 items-center text-xl group-hover:text-oc-text", e.isActive ? "text-oc-text" : "text-oc-text-400"])
          }, [
            e.countryIso ? (o(), n("div", Q, [
              c("div", {
                class: w(["fi !w-[24px] !h-[16px] !rounded-[1px]", `fi-${e.countryIso}`])
              }, null, 2)
            ])) : p("", !0),
            L(" " + h(e.content), 1)
          ], 2)
        ]),
        e.isDropdown ? (o(), f(i(k), C(x({ key: 0 }, e.dropdownOptions)), null, 16)) : p("", !0)
      ]))
    ], 2));
  }
}, X = { class: "flex items-center gap-x-4 overflow-hidden" }, Y = { class: "flex gap-x-2 overflow-auto" }, Z = ["alt", "src"], _ = {
  __name: "OcPaymentMethods",
  props: {
    methods: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (s, d) => (o(), n("div", X, [
      d[0] || (d[0] = c("span", { class: "text-xs shrink-0 font-medium text-oc-text-300 uppercase" }, " Payment methods ", -1)),
      c("div", Y, [
        (o(!0), n(g, null, v(e.methods, (t) => (o(), n("img", {
          key: t,
          width: "35",
          alt: t,
          height: "24",
          src: t
        }, null, 8, Z))), 128))
      ])
    ]));
  }
}, ee = { class: "flex justify-between md:flex-row flex-col gap-y-3 gap-x-4 md:gap-y-0" }, te = { key: 2 }, oe = {
  key: 4,
  class: "flex shrink-0 gap-x-3"
}, se = {
  __name: "OcTopActions",
  props: {
    moreButtonProps: Object,
    paymentMethods: {
      type: Array,
      default: () => []
    },
    secondaryButtonProps: Object,
    isLoading: Boolean,
    dropdownItems: {
      type: Array,
      default: () => []
    },
    dropdownProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const s = P(!1);
    return (d, t) => {
      var r;
      return o(), n("div", ee, [
        e.isLoading ? (o(), f(i(B), {
          key: 0,
          class: "h-[20px] w-[322px] rounded-sm"
        })) : p("", !0),
        !e.isLoading && e.paymentMethods.length ? (o(), f(_, {
          key: 1,
          methods: e.paymentMethods
        }, null, 8, ["methods"])) : (o(), n("div", te)),
        e.isLoading ? (o(), f(i(B), {
          key: 3,
          class: "h-[20px] w-[168px] rounded-sm"
        })) : (o(), n("div", oe, [
          m(i(M), x({
            modelValue: s.value,
            "onUpdate:modelValue": t[0] || (t[0] = (a) => s.value = a),
            "popper-options": { strategy: "fixed" },
            placement: "bottom",
            class: "text-sm"
          }, e.dropdownProps), {
            menu: l(() => [
              (o(!0), n(g, null, v(e.dropdownItems, (a, u) => (o(), f(i(N), x({
                key: u,
                ref_for: !0
              }, a), null, 16))), 128))
            ]),
            default: l(() => [
              m(i(k), x({
                "left-icon": "dots-vertical",
                variant: "secondary"
              }, e.moreButtonProps), null, 16)
            ]),
            _: 1
          }, 16, ["modelValue"]),
          m(i(A), {
            "popper-options": { strategy: "fixed" },
            position: "top"
          }, $({
            default: l(() => [
              m(i(k), x({
                variant: "secondary",
                label: "Top up balance"
              }, e.secondaryButtonProps), null, 16)
            ]),
            _: 2
          }, [
            (r = e.secondaryButtonProps) != null && r.tooltip ? {
              name: "popper",
              fn: l(() => [
                L(h(e.secondaryButtonProps.tooltip), 1)
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]))
      ]);
    };
  }
}, ne = { class: "flex flex-col gap-y-5" }, ae = { class: "flex gap-x-5 overflow-x-auto" }, ie = {
  __name: "OcBalanceOverview",
  props: {
    overviewItems: {
      type: Array,
      default: () => []
    },
    overviewTabs: {
      type: Array,
      default: () => []
    },
    overviewActiveTab: {
      type: String,
      default: ""
    },
    secondaryButtonProps: Object,
    moreButtonProps: Object,
    containerClass: String,
    dropdownItems: {
      type: Array,
      default: () => []
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    isLoading: Boolean,
    dropdownProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: {
    changeTab: []
  },
  setup(e) {
    return (s, d) => (o(), n("div", ne, [
      c("div", ae, [
        (o(!0), n(g, null, v(e.isLoading ? 2 : e.overviewTabs, (t) => y(s.$slots, t.value, { tab: t }, () => [
          (o(), f(W, {
            key: t.value,
            title: t.title,
            "is-loading": e.isLoading,
            content: t.content,
            "chip-options": t.chipOptions,
            "is-dropdown": t.isDropdown,
            "dropdown-options": t.dropdownOptions,
            "is-active": t.value === e.overviewActiveTab,
            "country-iso": t.countryIso,
            onClick: (r) => s.$emit("changeTab", t.value)
          }, null, 8, ["title", "is-loading", "content", "chip-options", "is-dropdown", "dropdown-options", "is-active", "country-iso", "onClick"]))
        ])), 256))
      ]),
      d[0] || (d[0] = c("div", { class: "border-t border-oc-gray-200" }, null, -1)),
      m(se, {
        "is-loading": e.isLoading,
        "more-button-props": e.moreButtonProps,
        "secondary-button-props": e.secondaryButtonProps,
        "payment-methods": e.paymentMethods,
        "dropdown-items": e.dropdownItems,
        "dropdown-props": e.dropdownProps
      }, null, 8, ["is-loading", "more-button-props", "secondary-button-props", "payment-methods", "dropdown-items", "dropdown-props"]),
      m(i(U), {
        "is-loading": e.isLoading,
        title: "",
        items: e.overviewItems,
        "container-class": e.containerClass
      }, {
        warning: l(() => [
          y(s.$slots, "warning")
        ]),
        _: 3
      }, 8, ["is-loading", "items", "container-class"])
    ]));
  }
}, re = {}, le = { class: "flex gap-x-5 md:flex-nowrap flex-wrap p-3 md:items-center bg-oc-gray-50 border border-oc-gray-200 rounded overflow-hidden" };
function de(e, s) {
  return o(), n("div", le, [
    y(e.$slots, "default")
  ]);
}
const S = /* @__PURE__ */ F(re, [["render", de]]), ce = { class: "flex" }, ue = {
  key: 0,
  class: "p-2"
}, me = { class: "py-2 px-3" }, fe = {
  key: 0,
  class: "max-w-[250px] fixed z-[1006] top-0 right-0 transition-all duration-500 flex flex-col gap-y-2 w-full bg-white h-screen overflow-y-auto"
}, pe = { class: "p-5 flex items-center justify-between" }, ye = { class: "px-5 flex-1 flex flex-col gap-y-5" }, ve = /* @__PURE__ */ E({
  __name: "MobileDynamicType",
  props: {
    boxes: { type: Array, default: () => [] },
    isCustomer: { type: Boolean, default: !1 },
    customerCardVariant: { type: String, default: "big" },
    customer: { type: Object, default: null }
  },
  emits: ["addCustomer"],
  setup(e) {
    const s = P(!1);
    return (d, t) => (o(), n("div", null, [
      m(S, { class: "!flex-nowrap flex-col w-full" }, {
        default: l(() => [
          c("div", ce, [
            (o(!0), n(g, null, v(e.boxes[0].items.slice(0, 2), (r, a) => (o(), f(i(O), {
              key: a,
              "is-transparent": "",
              title: r.title,
              content: r.content
            }, {
              default: l(() => [
                d.box.showInfo ? (o(), n("div", ue, [
                  m(i(A), null, {
                    popper: l(() => [
                      c("div", me, h(d.box.infoTooltip), 1)
                    ]),
                    default: l(() => [
                      m(i(D), {
                        width: "16",
                        height: "16",
                        class: "!w-[20px] !h-[20px] text-oc-text-300",
                        name: "information"
                      })
                    ]),
                    _: 1
                  })
                ])) : p("", !0)
              ]),
              _: 2
            }, 1032, ["title", "content"]))), 128))
          ]),
          m(i(k), {
            class: "self-start px-3",
            label: "See details ->",
            size: "small",
            "is-transparent": "",
            onClick: t[0] || (t[0] = (r) => s.value = !0)
          })
        ]),
        _: 1
      }),
      m(I, { name: "slow-fade" }, {
        default: l(() => [
          s.value ? (o(), n("div", {
            key: 0,
            class: "fixed z-[1005] top-0 left-0 w-screen flex justify-end h-screen bg-black/[.45]",
            onClick: t[1] || (t[1] = (r) => s.value = !1)
          })) : p("", !0)
        ]),
        _: 1
      }),
      m(I, { name: "slide-from-right" }, {
        default: l(() => [
          s.value ? (o(), n("div", fe, [
            c("div", pe, [
              t[4] || (t[4] = c("span", { class: "font-medium" }, "Details", -1)),
              m(i(k), {
                size: "small",
                "left-icon": "x",
                label: "Close",
                "is-transparent": "",
                class: "px-3",
                variant: "secondary",
                onClick: t[2] || (t[2] = (r) => s.value = !1)
              })
            ]),
            c("div", ye, [
              (o(!0), n(g, null, v(e.boxes, (r, a) => (o(), f(S, { key: a }, {
                default: l(() => [
                  (o(!0), n(g, null, v(r.items, (u, b) => (o(), f(i(O), x({
                    key: `${a}-${b}`,
                    "is-transparent": "",
                    title: u.title,
                    content: u.content,
                    class: u.class,
                    "is-loading": u.isLoading,
                    ref_for: !0
                  }, u), $({ _: 2 }, [
                    u.slot && d.$slots[u.slot] ? {
                      name: "content",
                      fn: l(() => [
                        y(d.$slots, u.slot, {
                          data: u.content
                        })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1040, ["title", "content", "class", "is-loading"]))), 128))
                ]),
                _: 2
              }, 1024))), 128)),
              e.isCustomer ? (o(), f(i(V), {
                key: 0,
                variant: e.customerCardVariant,
                customer: e.customer,
                onAddCustomer: t[3] || (t[3] = (r) => d.$emit("addCustomer"))
              }, null, 8, ["variant", "customer"])) : p("", !0)
            ])
          ])) : p("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ge = { class: "hidden md:flex md:gap-5 gap-3 md:flex-row flex-col" }, xe = { class: "py-2 px-3" }, we = {
  __name: "OcDynamicType",
  props: {
    boxes: { type: Array, default: () => [] },
    isCustomer: { type: Boolean, default: !1 },
    customerCardVariant: { type: String, default: "big" },
    customer: { type: Object, default: null },
    customerIsHover: { type: Boolean, default: !1 },
    customerIsEdit: { type: Boolean, default: !1 }
  },
  emits: ["addCustomer", "editCustomer"],
  setup(e) {
    return (s, d) => (o(), n(g, null, [
      c("div", ge, [
        (o(!0), n(g, null, v(e.boxes, (t, r) => (o(), f(S, {
          key: r,
          class: w(
            (e.isCustomer ? "!grid grid-cols-4 grid-rows-2 gap-y-4 w-full !py-4 " : " ") + (t == null ? void 0 : t.style)
          )
        }, {
          default: l(() => [
            t.slot && s.$slots[t.slot] ? y(s.$slots, t.slot, {
              key: 0,
              data: { ...t, key: r }
            }) : (o(!0), n(g, { key: 1 }, v(t.items, (a, u) => (o(), f(i(O), x({
              key: `${r}-${u}`,
              "is-transparent": "",
              title: a.title,
              class: a.class,
              "is-loading": a.isLoading,
              content: a.content,
              ref_for: !0
            }, a), $({ _: 2 }, [
              a.slot && s.$slots[a.slot] ? {
                name: "content",
                fn: l(() => [
                  y(s.$slots, a.slot, {
                    data: a.content
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1040, ["title", "class", "is-loading", "content"]))), 128)),
            t.showInfo ? (o(), n("div", {
              key: 2,
              class: w(["p-2", t.infoTooltipStyle])
            }, [
              m(i(A), { "popper-options": { strategy: "fixed" } }, {
                popper: l(() => [
                  y(s.$slots, t.infoTooltipSlot, {}, () => [
                    c("div", xe, h(t.infoTooltip), 1)
                  ])
                ]),
                default: l(() => [
                  m(i(D), {
                    width: "16",
                    height: "16",
                    class: "!w-[20px] !h-[20px] text-oc-text-300",
                    name: "information"
                  })
                ]),
                _: 2
              }, 1024)
            ], 2)) : p("", !0)
          ]),
          _: 2
        }, 1032, ["class"]))), 128)),
        e.isCustomer ? (o(), f(i(V), {
          key: 0,
          variant: e.customerCardVariant,
          customer: e.customer,
          "is-hover": e.customerIsHover,
          "is-edit": e.customerIsEdit,
          class: "max-w-[300px]",
          onAddCustomer: d[0] || (d[0] = (t) => s.$emit("addCustomer")),
          onEditCustomer: d[1] || (d[1] = (t) => s.$emit("editCustomer", t))
        }, $({ _: 2 }, [
          s.$slots["customer-leading"] ? {
            name: "leading",
            fn: l(() => [
              y(s.$slots, "customer-leading")
            ]),
            key: "0"
          } : void 0,
          s.$slots["customer-bottom"] ? {
            name: "bottom",
            fn: l(() => [
              y(s.$slots, "customer-bottom")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["variant", "customer", "is-hover", "is-edit"])) : p("", !0)
      ]),
      m(ve, {
        class: "flex md:hidden",
        boxes: e.boxes,
        "is-customer": e.isCustomer,
        "customer-card-variant": e.customerCardVariant,
        customer: e.customer,
        onAddCustomer: d[2] || (d[2] = (t) => s.$emit("addCustomer"))
      }, null, 8, ["boxes", "is-customer", "customer-card-variant", "customer"])
    ], 64));
  }
}, he = { class: "md:pt-5 pt-0 md:px-10 px-5" }, $e = { class: "flex items-center gap-x-3" }, be = { class: "font-medium" }, ke = { class: "flex items-center gap-x-2 max-w-full" }, Ce = ["href"], Be = { class: "truncate" }, Oe = { class: "text-oc-text whitespace-nowrap" }, Xe = {
  __name: "OcAdditionalContent",
  props: {
    mainLink: { type: String, default: "" },
    balanceContainerClass: { type: String, default: "" },
    userId: { type: String, default: "" },
    chipVariant: { type: String, default: "" },
    chipLabel: { type: String, default: "" },
    additionalTitle: { type: String, default: "" },
    primaryActions: { type: Object, default: null },
    overviewActiveTab: { type: String, default: "" },
    customerCardVariant: { type: String, default: "" },
    customer: { type: Object, default: null },
    customerIsHover: { type: Boolean, default: !1 },
    customerIsEdit: { type: Boolean, default: !1 },
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "dynamic", "balance"].includes(e)
    },
    boxes: { type: Array, default: () => [] },
    isCustomer: { type: Boolean, default: !1 },
    isLoading: { type: Boolean, default: !1 },
    overviewItems: { type: Array, default: () => [] },
    overviewTabs: { type: Array, default: () => [] },
    secondaryButtonProps: { type: Object, default: null },
    moreButtonProps: { type: Object, default: null },
    dropdownProps: {
      type: Object,
      default: () => ({})
    },
    dropdownItems: { type: Array, default: () => [] },
    paymentMethods: { type: Array, default: () => [] },
    additionalStyling: { type: String, default: "" },
    href: { type: String, default: "" }
  },
  emits: {
    changeTab: [],
    addCustomer: [],
    editCustomer: []
  },
  setup(e) {
    const s = e, d = async () => {
      try {
        await navigator.clipboard.writeText(s.mainLink + s.userId);
      } catch (t) {
        console.error("Unable to copy text to clipboard. Error: ", t);
      }
    };
    return (t, r) => (o(), n("div", he, [
      e.variant === "default" ? (o(), f(z, {
        key: 0,
        description: e.mainLink,
        title: e.additionalTitle,
        class: w(["border rounded md:py-4 py-3 md:px-5 px-4 border-oc-gray-200 bg-oc-gray-50 flex flex-col gap-y-2", e.additionalStyling])
      }, {
        title: l(() => [
          c("div", $e, [
            c("span", be, h(e.additionalTitle), 1),
            e.chipVariant ? (o(), f(i(j), {
              key: 0,
              variant: e.chipVariant,
              label: e.chipLabel
            }, null, 8, ["variant", "label"])) : p("", !0)
          ])
        ]),
        description: l(() => [
          c("div", ke, [
            c("a", {
              href: e.href || `${e.mainLink}${e.userId}`,
              target: "_blank",
              class: "text-oc-text-400 flex items-center overflow-hidden cursor-pointer"
            }, [
              c("div", Be, h(e.mainLink), 1),
              c("div", Oe, h(e.userId), 1)
            ], 8, Ce),
            m(i(H), {
              "primary-actions": e.primaryActions,
              onCopy: d
            }, null, 8, ["primary-actions"])
          ])
        ]),
        _: 1
      }, 8, ["description", "title", "class"])) : e.variant === "dynamic" ? (o(), f(we, {
        key: 1,
        boxes: e.boxes,
        "customer-card-variant": e.customerCardVariant,
        customer: e.customer,
        "is-customer": e.isCustomer,
        "customer-is-hover": e.customerIsHover,
        "customer-is-edit": e.customerIsEdit,
        class: w(e.additionalStyling),
        onAddCustomer: r[0] || (r[0] = (a) => t.$emit("addCustomer")),
        onEditCustomer: r[1] || (r[1] = (a) => t.$emit("editCustomer", a))
      }, $({ _: 2 }, [
        v(t.$slots, (a, u) => ({
          name: u,
          fn: l((b) => [
            y(t.$slots, u, C(T(b)))
          ])
        }))
      ]), 1032, ["boxes", "customer-card-variant", "customer", "is-customer", "customer-is-hover", "customer-is-edit", "class"])) : e.variant === "balance" ? (o(), f(ie, {
        key: 2,
        "overview-items": e.overviewItems,
        "overview-tabs": e.overviewTabs,
        "secondary-button-props": e.secondaryButtonProps,
        "more-button-props": e.moreButtonProps,
        "overview-active-tab": e.overviewActiveTab,
        "container-class": e.balanceContainerClass,
        "payment-methods": e.paymentMethods,
        "dropdown-items": e.dropdownItems,
        "dropdown-props": e.dropdownProps,
        class: w(e.additionalStyling),
        "is-loading": e.isLoading,
        onChangeTab: r[2] || (r[2] = (a) => t.$emit("changeTab", a))
      }, $({ _: 2 }, [
        v(t.$slots, (a, u) => ({
          name: u,
          fn: l((b) => [
            y(t.$slots, u, C(T(b)))
          ])
        }))
      ]), 1032, ["overview-items", "overview-tabs", "secondary-button-props", "more-button-props", "overview-active-tab", "container-class", "payment-methods", "dropdown-items", "dropdown-props", "class", "is-loading"])) : p("", !0)
    ]));
  }
};
export {
  Xe as _,
  W as a
};
