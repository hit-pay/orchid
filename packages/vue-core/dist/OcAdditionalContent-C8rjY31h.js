import { defineComponent as te, openBlock as o, createBlock as m, unref as r, mergeProps as b, withCtx as c, createElementVNode as l, toDisplayString as f, renderSlot as v, createVNode as u, computed as T, createElementBlock as a, normalizeClass as x, createTextVNode as B, createCommentVNode as y, Fragment as g, normalizeStyle as re, normalizeProps as S, renderList as h, ref as oe, createSlots as $, Transition as Y, guardReactiveProps as G } from "vue";
import "dayjs";
import { aP as ie, aQ as le, f as de, a as K, m as _ } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { _ as ce, S as ue } from "./OcTitle-CMEw2BNj.js";
import { j as se } from "./OcChip-BiALeB1C-DzQgECL4.js";
import { l as O } from "./OcSkeleton-BgoOR1qd-pnPSK-aY.js";
import { q as C } from "./OcButton-Cnqik19l-BEVE67cg.js";
import { o as me, n as pe } from "./OcDropdownItem-CzffqBjG-CMBrNq8k.js";
import { q as L } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
import { R as ye, Z as I } from "./OcOverviewItem-CKLpa3DD-cNh--ktu.js";
import { s as fe } from "./_plugin-vue_export-helper-CHgC5LLL-BmOybl0N.js";
import { g as ne } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { _ as ve } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const xe = { class: "px-3 py-2 text-oc-text-400 text-sm font-medium" }, ge = /* @__PURE__ */ te({
  __name: "OcCopyTooltip",
  props: {
    value: [String, Blob],
    tooltipText: {
      type: String,
      default: "Copied!"
    },
    tooltipOptions: Object
  },
  setup(e) {
    const s = async (i) => {
      try {
        i instanceof Blob ? await navigator.clipboard.write([
          new ClipboardItem({
            [i.type]: i
          })
        ]) : await navigator.clipboard.writeText(i);
      } catch (t) {
        console.error("Unable to copy text to clipboard. Error: ", t);
      }
    };
    return (i, t) => (o(), m(r(ie), b({
      position: "top",
      "hide-after": 1500,
      "arrow-hidden": "",
      trigger: "click",
      distance: 20
    }, e.tooltipOptions), {
      popper: c(() => [
        l("div", xe, f(e.tooltipText), 1)
      ]),
      default: c(({ isShow: n }) => [
        l("div", {
          onClick: t[0] || (t[0] = (d) => s(e.value))
        }, [
          v(i.$slots, "default", { isShow: n }, () => [
            u(r(le), {
              width: "14",
              height: "14",
              class: "cursor-pointer transition-all duration-500",
              name: "copy"
            })
          ])
        ])
      ]),
      _: 3
    }, 16));
  }
}), A = {
  __name: "OcListDetail",
  props: {
    label: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "small",
      validator: (e) => ["small", "big"].includes(e)
    },
    alignment: {
      type: String,
      default: "horizontal",
      validator: (e) => ["horizontal", "vertical"].includes(e)
    },
    showCopyTooltip: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const s = e, i = T(() => s.alignment === "vertical");
    return (t, n) => (o(), a("div", {
      class: x(["flex gap-x-5 text-sm group", { "flex-col": i.value }])
    }, [
      l("div", {
        class: x(["flex gap-x-2 items-center shrink-0 text-oc-text-400", { "w-[80px]": e.variant === "small" && !i.value }])
      }, [
        B(f(e.label) + " ", 1),
        e.showCopyTooltip ? (o(), m(r(ge), {
          key: 0,
          value: e.content
        }, {
          default: c(({ isShow: d }) => [
            u(r(de), {
              width: "14",
              height: "14",
              class: x(["cursor-pointer transition-all duration-500 group-hover:opacity-100", d ? "opacity-100" : "opacity-0"]),
              name: "copy"
            }, null, 8, ["class"])
          ]),
          _: 1
        }, 8, ["value"])) : y("", !0)
      ], 2),
      l("div", {
        class: x({ "text-base font-medium": i.value })
      }, [
        v(t.$slots, "content", {}, () => [
          l("span", null, f(e.content), 1)
        ])
      ], 2)
    ], 2));
  }
}, ee = {
  __name: "OcAvatar",
  props: {
    size: {
      type: Number,
      validator: (e) => [64, 48, 40, 32, 24].includes(e),
      default: 32
    },
    type: {
      type: String,
      default: "default",
      validator: (e) => ["business", "default", "image"].includes(e)
    }
  },
  setup(e) {
    const s = T(() => ({
      business: "bg-oc-accent-1 text-oc-text-100",
      default: "bg-oc-gray-800 text-oc-text-100",
      image: "text-oc-text-500",
      icon: "border-oc-gray-100"
    })), i = T(() => ({
      64: "text-[30px]",
      48: "text-xl",
      40: "text-lg",
      32: "text-base",
      24: "text-xs"
    }));
    return (t, n) => (o(), a("div", {
      class: x(["rounded-full border border-oc-gray-300 flex items-center font-bold justify-center", [s.value[e.type], i.value[e.size]]]),
      style: re({ width: `${e.size}px`, height: `${e.size}px` })
    }, [
      v(t.$slots, "default", {}, () => [
        n[0] || (n[0] = B("H"))
      ])
    ], 6));
  }
}, he = { class: "flex flex-col items-center justify-center gap-y-3 overflow-hidden" }, be = { class: "w-full flex gap-x-3 items-center" }, we = { class: "flex flex-col font-medium overflow-hidden" }, $e = { class: "flex items-center gap-2" }, ke = { class: "truncate" }, Ce = {
  key: 0,
  class: "rounded-md py-1 px-3 text-sm text-oc-accent-1-500 bg-oc-accent-1-50"
}, Be = {
  key: 0,
  class: "text-sm text-oc-text-400"
}, Se = {
  key: 1,
  class: "text-sm text-oc-text-400 truncate"
}, Oe = {
  key: 0,
  class: "flex flex-col gap-y-4 pt-4 w-full"
}, Ae = { class: "flex flex-col gap-y-2 w-full items-center" }, Te = { key: 0 }, Ie = {
  __name: "OcCustomerCard",
  props: {
    variant: {
      type: String,
      default: "small",
      validator: (e) => ["small", "big", "float"].includes(e)
    },
    customer: Object,
    isHover: {
      type: Boolean,
      default: !1
    },
    isEdit: {
      type: Boolean,
      default: !1
    },
    isClosable: Boolean,
    isBeneficiary: Boolean
  },
  emits: ["addCustomer", "editCustomer", "closeCustomer"],
  setup(e, { emit: s }) {
    const i = s;
    return (t, n) => {
      var d, p, w, P, z, V, E, D, H, M, N, q, U, R, Z, J, Q, F, W;
      return o(), a("div", {
        class: x(["rounded shrink-0 border border-oc-gray-200 bg-oc-bg-light flex items-center justify-between gap-4 px-4 py-5 customer-card relative group", { [e.variant]: !0, "hover:shadow-normal transition": e.isHover }])
      }, [
        l("div", he, [
          e.isEdit ? (o(), a("div", {
            key: 0,
            class: x(["absolute right-3 top-3 transition", { "opacity-0 group-hover:opacity-100": e.isHover }])
          }, [
            u(r(K), {
              "right-icon": "pencil",
              variant: "secondary",
              size: "small",
              class: "*:!px-[6px]",
              onClick: n[0] || (n[0] = (k) => t.$emit("editCustomer", e.customer))
            })
          ], 2)) : y("", !0),
          e.isClosable ? (o(), m(r(_), {
            key: 1,
            class: "absolute -right-1.5 -top-1.5 border-1 border-white rounded-full text-gray-500 cursor-pointer transition-all duration-300 hover:text-oc-error",
            name: "filled-x-circle",
            onClick: n[1] || (n[1] = (k) => i("closeCustomer"))
          })) : y("", !0),
          e.customer ? (o(), a(g, { key: 2 }, [
            l("div", be, [
              u(r(ee), {
                class: "shrink-0 uppercase",
                size: 32
              }, {
                default: c(() => {
                  var k, X;
                  return [
                    B(f(((X = (k = e.customer) == null ? void 0 : k.name) == null ? void 0 : X[0]) || "J"), 1)
                  ];
                }),
                _: 1
              }),
              l("div", we, [
                l("div", $e, [
                  l("span", ke, f(((d = e.customer) == null ? void 0 : d.name) || "-"), 1),
                  e.isBeneficiary ? (o(), a("span", Ce, f((p = e.customer.currency) == null ? void 0 : p.toUpperCase()), 1)) : y("", !0)
                ]),
                e.isBeneficiary ? (o(), a("span", Be, f(e.customer.bank_name) + " / " + f(e.customer.bank_account_number), 1)) : (o(), a("span", Se, f(((w = e.customer) == null ? void 0 : w.email) || ((P = e.customer) != null && P.phone_number_country_code && (z = e.customer) != null && z.phone_number ? `+${e.customer.phone_number_country_code} ${e.customer.phone_number}` : (V = e.customer) != null && V.phone_number ? e.customer.phone_number : "-")), 1))
              ])
            ]),
            e.variant !== "small" ? (o(), a("div", Oe, [
              e.isBeneficiary ? y("", !0) : (o(), m(r(A), {
                key: 0,
                label: "Phone",
                content: (E = e.customer) != null && E.phone_number_country_code && (D = e.customer) != null && D.phone_number ? `+${e.customer.phone_number_country_code} ${e.customer.phone_number}` : (H = e.customer) != null && H.phone_number ? e.customer.phone_number : "-"
              }, null, 8, ["content"])),
              e.isBeneficiary ? (o(), m(r(A), {
                key: 1,
                label: "Email",
                content: e.customer.email ?? "-"
              }, null, 8, ["content"])) : (o(), m(r(A), {
                key: 2,
                label: "Address",
                content: [
                  ((N = (M = e.customer) == null ? void 0 : M.address) == null ? void 0 : N.street) || "",
                  ((U = (q = e.customer) == null ? void 0 : q.address) == null ? void 0 : U.city) || "",
                  ((Z = (R = e.customer) == null ? void 0 : R.address) == null ? void 0 : Z.state) || "",
                  ((Q = (J = e.customer) == null ? void 0 : J.address) == null ? void 0 : Q.postal_code) || "",
                  ((W = (F = e.customer) == null ? void 0 : F.address) == null ? void 0 : W.country) || ""
                ].join(" ").trim() || "-"
              }, null, 8, ["content"]))
            ])) : y("", !0)
          ], 64)) : e.isBeneficiary ? y("", !0) : (o(), a(g, { key: 3 }, [
            l("div", Ae, [
              u(r(ee), { size: 32 }, {
                default: c(() => [
                  u(r(_), {
                    name: "user-add",
                    width: "16",
                    height: "16"
                  })
                ]),
                _: 1
              }),
              n[3] || (n[3] = l("div", { class: "flex flex-col font-medium text-center" }, [
                l("span", null, "No customer attached"),
                l("span", { class: "text-sm text-oc-text-400" }, " Add customer detail to this transaction ")
              ], -1))
            ]),
            u(r(K), {
              variant: "secondary",
              size: "small",
              class: "w-full",
              label: "Add customer",
              onClick: n[2] || (n[2] = (k) => t.$emit("addCustomer"))
            })
          ], 64)),
          t.$slots.bottom ? (o(), a("div", {
            key: 4,
            class: x({ "opacity-0 group-hover:opacity-100": e.isHover })
          }, [
            v(t.$slots, "bottom", {}, void 0, !0)
          ], 2)) : y("", !0)
        ]),
        t.$slots.leading ? (o(), a("div", Te, [
          v(t.$slots, "leading", {}, void 0, !0)
        ])) : y("", !0)
      ], 2);
    };
  }
}, ae = /* @__PURE__ */ fe(Ie, [["__scopeId", "data-v-6761183a"]]), je = {
  key: 0,
  class: "min-w-[138px] flex flex-col gap-y-3"
}, Le = {
  key: 1,
  class: "flex gap-x-4 items-center"
}, Pe = { class: "flex flex-col gap-y-2" }, ze = { class: "flex items-center gap-x-2" }, Ve = { class: "text-oc-text-400 text-sm" }, Ee = {
  key: 0,
  class: "flex justify-center items-center w-[38px] h-[38px] shrink-0 rounded-full bg-oc-gray-100"
}, De = {
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
    return (s, i) => (o(), a("div", {
      class: x(["cursor-pointer rounded group font-medium justify-center border gap-y-2 md:w-fit w-full flex flex-col hover:shadow-normal", [
        e.isActive && !e.isLoading ? "border-b-[3px] border-oc-primary" : "border-oc-accent-1-100",
        e.isLoading ? "p-3" : "px-5 py-4 min-h-[62px] max-h-[76px]"
      ]])
    }, [
      e.isLoading ? (o(), a("div", je, [
        u(r(O), { class: "h-[14px] w-[80%] rounded-sm" }),
        u(r(O), { class: "h-[20px] w-full rounded-sm" })
      ])) : (o(), a("div", Le, [
        l("div", Pe, [
          l("div", ze, [
            l("span", Ve, f(e.title), 1),
            e.chipOptions ? (o(), m(r(se), S(b({ key: 0 }, e.chipOptions)), null, 16)) : y("", !0)
          ]),
          l("span", {
            class: x(["flex gap-x-4 items-center text-xl group-hover:text-oc-text", e.isActive ? "text-oc-text" : "text-oc-text-400"])
          }, [
            e.countryIso ? (o(), a("div", Ee, [
              l("div", {
                class: x(["fi !w-[24px] !h-[16px] !rounded-[1px]", `fi-${e.countryIso}`])
              }, null, 2)
            ])) : y("", !0),
            B(" " + f(e.content), 1)
          ], 2)
        ]),
        e.isDropdown ? (o(), m(r(C), S(b({ key: 0 }, e.dropdownOptions)), null, 16)) : y("", !0)
      ]))
    ], 2));
  }
}, He = { class: "flex items-center gap-x-4 overflow-hidden" }, Me = { class: "flex gap-x-2 overflow-auto" }, Ne = ["alt", "src"], qe = {
  __name: "OcPaymentMethods",
  props: {
    methods: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (s, i) => (o(), a("div", He, [
      i[0] || (i[0] = l("span", { class: "text-xs shrink-0 font-medium text-oc-text-300 uppercase" }, " Payment methods ", -1)),
      l("div", Me, [
        (o(!0), a(g, null, h(e.methods, (t) => (o(), a("img", {
          key: t,
          width: "35",
          alt: t,
          height: "24",
          src: t
        }, null, 8, Ne))), 128))
      ])
    ]));
  }
}, Ue = { class: "flex justify-between md:flex-row flex-col gap-y-3 gap-x-4 md:gap-y-0" }, Re = { key: 2 }, Ze = {
  key: 4,
  class: "flex shrink-0 gap-x-3"
}, Je = {
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
    const s = oe(!1);
    return (i, t) => {
      var n;
      return o(), a("div", Ue, [
        e.isLoading ? (o(), m(r(O), {
          key: 0,
          class: "h-[20px] w-[322px] rounded-sm"
        })) : y("", !0),
        !e.isLoading && e.paymentMethods.length ? (o(), m(qe, {
          key: 1,
          methods: e.paymentMethods
        }, null, 8, ["methods"])) : (o(), a("div", Re)),
        e.isLoading ? (o(), m(r(O), {
          key: 3,
          class: "h-[20px] w-[168px] rounded-sm"
        })) : (o(), a("div", Ze, [
          u(r(me), b({
            modelValue: s.value,
            "onUpdate:modelValue": t[0] || (t[0] = (d) => s.value = d),
            "popper-options": { strategy: "fixed" },
            placement: "bottom",
            class: "text-sm"
          }, e.dropdownProps), {
            menu: c(() => [
              (o(!0), a(g, null, h(e.dropdownItems, (d, p) => (o(), m(r(pe), b({
                key: p,
                ref_for: !0
              }, d), null, 16))), 128))
            ]),
            default: c(() => [
              u(r(C), b({
                "left-icon": "dots-vertical",
                variant: "secondary"
              }, e.moreButtonProps), null, 16)
            ]),
            _: 1
          }, 16, ["modelValue"]),
          u(r(L), {
            "popper-options": { strategy: "fixed" },
            position: "top"
          }, $({
            default: c(() => [
              u(r(C), b({
                variant: "secondary",
                label: "Top up balance"
              }, e.secondaryButtonProps), null, 16)
            ]),
            _: 2
          }, [
            (n = e.secondaryButtonProps) != null && n.tooltip ? {
              name: "popper",
              fn: c(() => [
                B(f(e.secondaryButtonProps.tooltip), 1)
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]))
      ]);
    };
  }
}, Qe = { class: "flex flex-col gap-y-5" }, Fe = { class: "flex gap-x-5 overflow-x-auto" }, We = {
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
    return (s, i) => (o(), a("div", Qe, [
      l("div", Fe, [
        (o(!0), a(g, null, h(e.isLoading ? 2 : e.overviewTabs, (t) => v(s.$slots, t.value, { tab: t }, () => [
          (o(), m(De, {
            key: t.value,
            title: t.title,
            "is-loading": e.isLoading,
            content: t.content,
            "chip-options": t.chipOptions,
            "is-dropdown": t.isDropdown,
            "dropdown-options": t.dropdownOptions,
            "is-active": t.value === e.overviewActiveTab,
            "country-iso": t.countryIso,
            onClick: (n) => s.$emit("changeTab", t.value)
          }, null, 8, ["title", "is-loading", "content", "chip-options", "is-dropdown", "dropdown-options", "is-active", "country-iso", "onClick"]))
        ])), 256))
      ]),
      i[0] || (i[0] = l("div", { class: "border-t border-oc-gray-200" }, null, -1)),
      u(Je, {
        "is-loading": e.isLoading,
        "more-button-props": e.moreButtonProps,
        "secondary-button-props": e.secondaryButtonProps,
        "payment-methods": e.paymentMethods,
        "dropdown-items": e.dropdownItems,
        "dropdown-props": e.dropdownProps
      }, null, 8, ["is-loading", "more-button-props", "secondary-button-props", "payment-methods", "dropdown-items", "dropdown-props"]),
      u(r(ye), {
        "is-loading": e.isLoading,
        title: "",
        items: e.overviewItems,
        "container-class": e.containerClass
      }, {
        warning: c(() => [
          v(s.$slots, "warning")
        ]),
        _: 3
      }, 8, ["is-loading", "items", "container-class"])
    ]));
  }
}, Xe = {}, Ye = { class: "flex gap-x-5 md:flex-nowrap flex-wrap p-3 md:items-center bg-oc-gray-50 border border-oc-gray-200 rounded overflow-hidden" };
function Ge(e, s) {
  return o(), a("div", Ye, [
    v(e.$slots, "default")
  ]);
}
const j = /* @__PURE__ */ ve(Xe, [["render", Ge]]), Ke = { class: "flex" }, _e = {
  key: 0,
  class: "p-2"
}, et = { class: "py-2 px-3" }, tt = {
  key: 0,
  class: "max-w-[250px] fixed z-[1006] top-0 right-0 transition-all duration-500 flex flex-col gap-y-2 w-full bg-white h-screen overflow-y-auto"
}, ot = { class: "p-5 flex items-center justify-between" }, st = { class: "px-5 flex-1 flex flex-col gap-y-5" }, nt = /* @__PURE__ */ te({
  __name: "MobileDynamicType",
  props: {
    boxes: { type: Array, default: () => [] },
    isCustomer: { type: Boolean, default: !1 },
    customerCardVariant: { type: String, default: "big" },
    customer: { type: Object, default: null }
  },
  emits: ["addCustomer"],
  setup(e) {
    const s = oe(!1);
    return (i, t) => (o(), a("div", null, [
      u(j, { class: "!flex-nowrap flex-col w-full" }, {
        default: c(() => [
          l("div", Ke, [
            (o(!0), a(g, null, h(e.boxes[0].items.slice(0, 2), (n, d) => (o(), m(r(I), {
              key: d,
              "is-transparent": "",
              title: n.title,
              content: n.content
            }, {
              default: c(() => [
                i.box.showInfo ? (o(), a("div", _e, [
                  u(r(L), null, {
                    popper: c(() => [
                      l("div", et, f(i.box.infoTooltip), 1)
                    ]),
                    default: c(() => [
                      u(r(ne), {
                        width: "16",
                        height: "16",
                        class: "!w-[20px] !h-[20px] text-oc-text-300",
                        name: "information"
                      })
                    ]),
                    _: 1
                  })
                ])) : y("", !0)
              ]),
              _: 2
            }, 1032, ["title", "content"]))), 128))
          ]),
          u(r(C), {
            class: "self-start px-3",
            label: "See details ->",
            size: "small",
            "is-transparent": "",
            onClick: t[0] || (t[0] = (n) => s.value = !0)
          })
        ]),
        _: 1
      }),
      u(Y, { name: "slow-fade" }, {
        default: c(() => [
          s.value ? (o(), a("div", {
            key: 0,
            class: "fixed z-[1005] top-0 left-0 w-screen flex justify-end h-screen bg-black/[.45]",
            onClick: t[1] || (t[1] = (n) => s.value = !1)
          })) : y("", !0)
        ]),
        _: 1
      }),
      u(Y, { name: "slide-from-right" }, {
        default: c(() => [
          s.value ? (o(), a("div", tt, [
            l("div", ot, [
              t[4] || (t[4] = l("span", { class: "font-medium" }, "Details", -1)),
              u(r(C), {
                size: "small",
                "left-icon": "x",
                label: "Close",
                "is-transparent": "",
                class: "px-3",
                variant: "secondary",
                onClick: t[2] || (t[2] = (n) => s.value = !1)
              })
            ]),
            l("div", st, [
              (o(!0), a(g, null, h(e.boxes, (n, d) => (o(), m(j, { key: d }, {
                default: c(() => [
                  (o(!0), a(g, null, h(n.items, (p, w) => (o(), m(r(I), b({
                    key: `${d}-${w}`,
                    "is-transparent": "",
                    title: p.title,
                    content: p.content,
                    class: p.class,
                    "is-loading": p.isLoading,
                    ref_for: !0
                  }, p), $({ _: 2 }, [
                    p.slot && i.$slots[p.slot] ? {
                      name: "content",
                      fn: c(() => [
                        v(i.$slots, p.slot, {
                          data: p.content
                        })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1040, ["title", "content", "class", "is-loading"]))), 128))
                ]),
                _: 2
              }, 1024))), 128)),
              e.isCustomer ? (o(), m(r(ae), {
                key: 0,
                variant: e.customerCardVariant,
                customer: e.customer,
                onAddCustomer: t[3] || (t[3] = (n) => i.$emit("addCustomer"))
              }, null, 8, ["variant", "customer"])) : y("", !0)
            ])
          ])) : y("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), at = { class: "hidden md:flex md:gap-5 gap-3 md:flex-row flex-col" }, rt = { class: "py-2 px-3" }, it = {
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
    return (s, i) => (o(), a(g, null, [
      l("div", at, [
        (o(!0), a(g, null, h(e.boxes, (t, n) => (o(), m(j, {
          key: n,
          class: x(
            (e.isCustomer ? "!grid grid-cols-4 grid-rows-2 gap-y-4 w-full !py-4 " : " ") + (t == null ? void 0 : t.style)
          )
        }, {
          default: c(() => [
            t.slot && s.$slots[t.slot] ? v(s.$slots, t.slot, {
              key: 0,
              data: { ...t, key: n }
            }) : (o(!0), a(g, { key: 1 }, h(t.items, (d, p) => (o(), m(r(I), b({
              key: `${n}-${p}`,
              "is-transparent": "",
              title: d.title,
              class: d.class,
              "is-loading": d.isLoading,
              content: d.content,
              ref_for: !0
            }, d), $({ _: 2 }, [
              d.slot && s.$slots[d.slot] ? {
                name: "content",
                fn: c(() => [
                  v(s.$slots, d.slot, {
                    data: d.content
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1040, ["title", "class", "is-loading", "content"]))), 128)),
            t.showInfo ? (o(), a("div", {
              key: 2,
              class: x(["p-2", t.infoTooltipStyle])
            }, [
              u(r(L), { "popper-options": { strategy: "fixed" } }, {
                popper: c(() => [
                  v(s.$slots, t.infoTooltipSlot, {}, () => [
                    l("div", rt, f(t.infoTooltip), 1)
                  ])
                ]),
                default: c(() => [
                  u(r(ne), {
                    width: "16",
                    height: "16",
                    class: "!w-[20px] !h-[20px] text-oc-text-300",
                    name: "information"
                  })
                ]),
                _: 2
              }, 1024)
            ], 2)) : y("", !0)
          ]),
          _: 2
        }, 1032, ["class"]))), 128)),
        e.isCustomer ? (o(), m(r(ae), {
          key: 0,
          variant: e.customerCardVariant,
          customer: e.customer,
          "is-hover": e.customerIsHover,
          "is-edit": e.customerIsEdit,
          class: "max-w-[300px]",
          onAddCustomer: i[0] || (i[0] = (t) => s.$emit("addCustomer")),
          onEditCustomer: i[1] || (i[1] = (t) => s.$emit("editCustomer", t))
        }, $({ _: 2 }, [
          s.$slots["customer-leading"] ? {
            name: "leading",
            fn: c(() => [
              v(s.$slots, "customer-leading")
            ]),
            key: "0"
          } : void 0,
          s.$slots["customer-bottom"] ? {
            name: "bottom",
            fn: c(() => [
              v(s.$slots, "customer-bottom")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["variant", "customer", "is-hover", "is-edit"])) : y("", !0)
      ]),
      u(nt, {
        class: "flex md:hidden",
        boxes: e.boxes,
        "is-customer": e.isCustomer,
        "customer-card-variant": e.customerCardVariant,
        customer: e.customer,
        onAddCustomer: i[2] || (i[2] = (t) => s.$emit("addCustomer"))
      }, null, 8, ["boxes", "is-customer", "customer-card-variant", "customer"])
    ], 64));
  }
}, lt = { class: "md:pt-5 pt-0 md:px-10 px-5" }, dt = { class: "flex items-center gap-x-3" }, ct = { class: "font-medium" }, ut = { class: "flex items-center gap-x-2 max-w-full" }, mt = ["href"], pt = { class: "truncate" }, yt = { class: "text-oc-text whitespace-nowrap" }, Lt = {
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
    const s = e, i = async () => {
      try {
        await navigator.clipboard.writeText(s.mainLink + s.userId);
      } catch (t) {
        console.error("Unable to copy text to clipboard. Error: ", t);
      }
    };
    return (t, n) => (o(), a("div", lt, [
      e.variant === "default" ? (o(), m(ce, {
        key: 0,
        description: e.mainLink,
        title: e.additionalTitle,
        class: x(["border rounded md:py-4 py-3 md:px-5 px-4 border-oc-gray-200 bg-oc-gray-50 flex flex-col gap-y-2", e.additionalStyling])
      }, {
        title: c(() => [
          l("div", dt, [
            l("span", ct, f(e.additionalTitle), 1),
            e.chipVariant ? (o(), m(r(se), {
              key: 0,
              variant: e.chipVariant,
              label: e.chipLabel
            }, null, 8, ["variant", "label"])) : y("", !0)
          ])
        ]),
        description: c(() => [
          l("div", ut, [
            l("a", {
              href: e.href || `${e.mainLink}${e.userId}`,
              target: "_blank",
              class: "text-oc-text-400 flex items-center overflow-hidden cursor-pointer"
            }, [
              l("div", pt, f(e.mainLink), 1),
              l("div", yt, f(e.userId), 1)
            ], 8, mt),
            u(r(ue), {
              "primary-actions": e.primaryActions,
              onCopy: i
            }, null, 8, ["primary-actions"])
          ])
        ]),
        _: 1
      }, 8, ["description", "title", "class"])) : e.variant === "dynamic" ? (o(), m(it, {
        key: 1,
        boxes: e.boxes,
        "customer-card-variant": e.customerCardVariant,
        customer: e.customer,
        "is-customer": e.isCustomer,
        "customer-is-hover": e.customerIsHover,
        "customer-is-edit": e.customerIsEdit,
        class: x(e.additionalStyling),
        onAddCustomer: n[0] || (n[0] = (d) => t.$emit("addCustomer")),
        onEditCustomer: n[1] || (n[1] = (d) => t.$emit("editCustomer", d))
      }, $({ _: 2 }, [
        h(t.$slots, (d, p) => ({
          name: p,
          fn: c((w) => [
            v(t.$slots, p, S(G(w)))
          ])
        }))
      ]), 1032, ["boxes", "customer-card-variant", "customer", "is-customer", "customer-is-hover", "customer-is-edit", "class"])) : e.variant === "balance" ? (o(), m(We, {
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
        class: x(e.additionalStyling),
        "is-loading": e.isLoading,
        onChangeTab: n[2] || (n[2] = (d) => t.$emit("changeTab", d))
      }, $({ _: 2 }, [
        h(t.$slots, (d, p) => ({
          name: p,
          fn: c((w) => [
            v(t.$slots, p, S(G(w)))
          ])
        }))
      ]), 1032, ["overview-items", "overview-tabs", "secondary-button-props", "more-button-props", "overview-active-tab", "container-class", "payment-methods", "dropdown-items", "dropdown-props", "class", "is-loading"])) : y("", !0)
    ]));
  }
};
export {
  Lt as _,
  De as a
};
