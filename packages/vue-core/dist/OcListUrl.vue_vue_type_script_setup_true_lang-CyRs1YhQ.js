import { defineComponent as T, useSlots as L, openBlock as s, createElementBlock as n, createElementVNode as t, normalizeClass as v, toDisplayString as g, renderSlot as p, createTextVNode as B, createBlock as h, unref as c, createCommentVNode as d, ref as C, createVNode as b, withCtx as w, Fragment as S, renderList as k, computed as A, onMounted as j, onBeforeUnmount as _, mergeProps as O, withModifiers as N, normalizeStyle as I, withDirectives as E, vShow as F, resolveDynamicComponent as U, createSlots as W, normalizeProps as Y, guardReactiveProps as H } from "vue";
import q from "dayjs";
import { D as V, T as G, B as R } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as $ } from "./OcIcon-CJgBICxh.js";
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
import { _ as J } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-IsqOGpEF.js";
import { _ as M } from "./OcChip-5vbWMktM.js";
const K = { class: "flex w-full relative gap-x-5 py-4 before:top-[20px] last:before:top-0 before:h-full before:left-[10px] before:absolute before:border-l" }, Q = { class: "flex gap-x-7 w-full items-center" }, X = { class: "flex flex-1 flex-col gap-y-2" }, Z = { class: "text-sm text-oc-text-400" }, ee = { class: "flex items-end gap-x-2" }, z = /* @__PURE__ */ T({
  __name: "OcTimeLine",
  props: {
    isActive: Boolean,
    title: String,
    description: String,
    icon: String,
    iconClass: String,
    iconText: String,
    iconTextClass: String
  },
  setup(e) {
    return L(), (a, f) => (s(), n("div", K, [
      t("div", null, [
        t("div", {
          class: v(["w-6 h-6 flex z-[1] relative items-center rounded-full justify-center", e.isActive ? "bg-oc-accent-1-50 shadow" : " bg-transparent"])
        }, [
          t("div", {
            class: v(["w-3 h-3 rounded-full", e.isActive ? "bg-oc-primary-500" : " bg-oc-gray-500"])
          }, null, 2)
        ], 2)
      ]),
      t("div", Q, [
        t("div", X, [
          t("span", null, g(e.title), 1),
          t("span", Z, [
            p(a.$slots, "description", {}, () => [
              B(g(e.description), 1)
            ])
          ])
        ]),
        t("div", ee, [
          e.icon ? (s(), h(c($), {
            key: 0,
            name: e.icon,
            class: v(e.iconClass)
          }, null, 8, ["name", "class"])) : d("", !0),
          t("span", {
            class: v(["text-lg font-medium", e.iconTextClass])
          }, [
            p(a.$slots, "iconText", {}, () => [
              B(g(e.iconText), 1)
            ])
          ], 2)
        ])
      ])
    ]));
  }
}), te = { class: "px-5 py-4 flex flex-col gap-y-5 rounded border border-gray-200 group hover:shadow-normal" }, se = { class: "flex items-center justify-between" }, ie = { class: "flex text-sm text-oc-text-400 items-center gap-x-2" }, ne = {
  key: 0,
  class: "text-base text-oc-text font-medium"
}, oe = { key: 1 }, le = {
  key: 0,
  class: "flex flex-col gap-y-3"
}, ae = /* @__PURE__ */ T({
  __name: "OcWebhook",
  props: {
    urls: {
      type: Array,
      default: () => []
    },
    title: String,
    date: String
  },
  emits: ["more"],
  setup(e) {
    const a = C(!1);
    return (f, l) => {
      var o;
      return s(), n("div", te, [
        t("div", se, [
          t("div", ie, [
            e.title ? (s(), n("span", ne, g(e.title), 1)) : d("", !0),
            l[3] || (l[3] = B(" - ")),
            e.date ? (s(), n("span", oe, g(e.date), 1)) : d("", !0)
          ]),
          b(c(V), {
            modelValue: a.value,
            "onUpdate:modelValue": l[2] || (l[2] = (i) => a.value = i)
          }, {
            menu: w(() => [
              t("div", {
                onMouseleave: l[1] || (l[1] = (i) => a.value = !1)
              }, [
                p(f.$slots, "menu")
              ], 32)
            ]),
            default: w(() => [
              b(c($), {
                name: "dots-vertical",
                class: "opacity-0 p-2 group-hover:opacity-100 cursor-pointer active:bg-oc-gray-100 rounded",
                onClick: l[0] || (l[0] = (i) => f.$emit("more"))
              })
            ]),
            _: 3
          }, 8, ["modelValue"])
        ]),
        (o = e.urls) != null && o.length ? (s(), n("div", le, [
          (s(!0), n(S, null, k(e.urls, (i, m) => (s(), h(c(vt), {
            key: m,
            title: i.title,
            url: i.url
          }, null, 8, ["title", "url"]))), 128))
        ])) : d("", !0)
      ]);
    };
  }
}), re = { class: "p-5 rounded border border-gray-200 max-w-[156px]" }, ce = ["src", "alt"], de = { class: "text-oc-text-400 mt-4" }, ue = /* @__PURE__ */ T({
  __name: "OcLogo",
  props: {
    title: String,
    image: String,
    imageClass: String
  },
  setup(e) {
    return (a, f) => (s(), n("div", re, [
      t("img", {
        src: e.image,
        class: v([e.imageClass, "object-contain"]),
        alt: e.title
      }, null, 10, ce),
      t("div", de, g(e.title), 1),
      p(a.$slots, "default")
    ]));
  }
}), me = { class: "flex items-center gap-x-5" }, ge = { class: "flex-1 flex items-center gap-x-3 font-medium capitalize" }, pe = { class: "flex flex-col gap-2" }, fe = { class: "flex items-center gap-x-3 overflow-hidden" }, xe = { class: "truncate" }, ve = {
  key: 0,
  class: "flex gap-3"
}, he = {
  key: 0,
  class: "text-oc-text-400 flex gap-x-2 items-center text-sm font-normal normal-case"
}, ye = { class: "border opacity-0 group-hover:opacity-100 border-oc-accent-1-100 rounded-sm p-1 flex gap-x-1" }, $e = {
  key: 0,
  class: "flex items-center gap-x-2"
}, be = ["alt", "src"], we = { class: "py-2 px-3 flex gap-x-2 w-full z-10 relative" }, ke = ["alt", "src"], Se = {
  __name: "OcPayment",
  props: {
    title: {
      type: String,
      default: "Title"
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    chips: {
      type: Array,
      default: () => []
    },
    description: String
  },
  emits: ["edit", "delete"],
  setup(e) {
    var r;
    const a = e, f = A(() => {
      var u;
      return ((u = a.paymentMethods) == null ? void 0 : u.length) > i.value;
    }), l = A(
      () => {
        var u, x;
        return (x = a.paymentMethods) == null ? void 0 : x.slice(i.value, (u = a.paymentMethods) == null ? void 0 : u.length);
      }
    ), o = C(), i = C((r = a.paymentMethods) == null ? void 0 : r.length), m = () => {
      var D;
      const u = o.value.clientWidth - 105 - 32 - 4 * ((D = a.paymentMethods) == null ? void 0 : D.length) - 35, x = 35;
      i.value = Math.floor(u / x);
    };
    return j(() => {
      m(), window.addEventListener("resize", m);
    }), _(() => {
      window.removeEventListener("resize", m);
    }), (u, x) => {
      var D;
      return s(), n("div", {
        ref_key: "cardContainer",
        ref: o,
        class: "md:px-5 px-3 md:py-4 py-3 flex flex-col gap-y-4 rounded border border-gray-200 group hover:shadow-normal"
      }, [
        t("div", me, [
          t("div", ge, [
            p(u.$slots, "logo"),
            t("div", pe, [
              t("div", fe, [
                t("span", xe, g(e.title), 1),
                e.chips.length ? (s(), n("div", ve, [
                  (s(!0), n(S, null, k(e.chips, (y, P) => (s(), h(c(M), O({
                    key: P,
                    class: "font-medium",
                    ref_for: !0
                  }, y), null, 16))), 128))
                ])) : d("", !0)
              ]),
              e.description ? (s(), n("div", he, g(e.description), 1)) : d("", !0)
            ])
          ]),
          p(u.$slots, "right", {}, () => [
            t("div", ye, [
              b(c($), {
                name: "pencil",
                class: "cursor-pointer text-oc-text-400 p-2",
                onClick: x[0] || (x[0] = (y) => u.$emit("edit"))
              }),
              x[2] || (x[2] = t("div", { class: "border-r border-gray-200" }, null, -1)),
              b(c($), {
                name: "bin",
                class: "cursor-pointer text-oc-error p-2",
                onClick: x[1] || (x[1] = (y) => u.$emit("delete"))
              })
            ])
          ])
        ]),
        (D = e.paymentMethods) != null && D.length ? (s(), n("div", $e, [
          x[3] || (x[3] = t("span", { class: "text-sm font-medium text-oc-text-300 whitespace-nowrap" }, "Payment methods", -1)),
          (s(!0), n(S, null, k(e.paymentMethods.slice(0, i.value), (y) => (s(), n("img", {
            key: y.method,
            width: "35",
            height: "24",
            alt: y.method,
            src: y.svg
          }, null, 8, be))), 128)),
          f.value ? (s(), h(c(G), {
            key: 0,
            position: "top-end",
            "popper-options": { strategy: "fixed" }
          }, {
            default: w(({ isShow: y }) => [
              t("div", {
                class: v(["text-sm w-[35px] h-[24px] flex items-center justify-center border rounded-sm font-medium whitespace-nowrap", y ? " bg-white" : "bg-oc-bg-dark"])
              }, " + " + g(e.paymentMethods.length - i.value), 3)
            ]),
            popper: w(() => [
              t("div", we, [
                (s(!0), n(S, null, k(l.value, (y) => (s(), n("img", {
                  key: y.method,
                  width: "35",
                  height: "24",
                  alt: y.method,
                  src: y.svg
                }, null, 8, ke))), 128))
              ])
            ]),
            _: 1
          })) : d("", !0)
        ])) : d("", !0)
      ], 512);
    };
  }
}, Te = { class: "flex items-center gap-x-4 w-full" }, Ce = { class: "flex flex-col flex-1 gap-y-3 overflow-hidden" }, De = { class: "flex items-center justify-between" }, Be = { class: "flex text-sm text-oc-text-400 items-center gap-x-3 overflow-hidden" }, Me = {
  key: 0,
  class: "text-base text-oc-text font-medium truncate"
}, Ae = {
  key: 0,
  class: "flex gap-3 shrink-0"
}, Oe = {
  key: 0,
  class: "flex flex-col gap-3"
}, Ve = { class: "text-oc-text-400 flex gap-x-2 items-center text-sm" }, ze = {
  key: 0,
  class: "flex gap-5"
}, Pe = { class: "font-medium whitespace-nowrap text-oc-text-500 text-sm" }, Le = /* @__PURE__ */ T({
  __name: "OcGeneral",
  props: {
    title: String,
    description: String,
    descriptionIcon: String,
    chips: {
      type: Array,
      default: () => []
    },
    details: {
      type: Array,
      default: () => []
    },
    isDisabled: Boolean,
    isDropdownActionsVisible: {
      type: Boolean,
      default: !0
    },
    isTransparent: Boolean
  },
  emits: ["more"],
  setup(e, { emit: a }) {
    const f = a, l = C(!1), o = () => {
      l.value = !l.value, f("more");
    };
    return (i, m) => (s(), n("div", {
      class: v(["px-5 py-4 rounded border border-gray-200 group", {
        "hover:shadow-normal": !e.isDisabled && !e.isTransparent,
        "border-none !p-0": e.isTransparent
      }]),
      onMouseleave: m[1] || (m[1] = (r) => l.value = !1)
    }, [
      t("div", Te, [
        p(i.$slots, "logo"),
        t("div", Ce, [
          t("div", De, [
            t("div", Be, [
              p(i.$slots, "title", {}, () => [
                e.title ? (s(), n("span", Me, g(e.title), 1)) : d("", !0)
              ]),
              e.chips.length ? (s(), n("div", Ae, [
                (s(!0), n(S, null, k(e.chips, (r, u) => (s(), h(c(M), {
                  key: u,
                  label: r.label,
                  variant: r.variant,
                  icon: r.icon,
                  "icon-size": r.iconSize,
                  "icon-tooltip": r.iconTooltip,
                  class: v([r.class, "font-medium shrink-0"])
                }, null, 8, ["label", "variant", "icon", "icon-size", "icon-tooltip", "class"]))), 128))
              ])) : d("", !0)
            ]),
            p(i.$slots, "actions", {}, () => [
              e.isDropdownActionsVisible && !e.isDisabled ? (s(), h(c(V), {
                key: 0,
                modelValue: l.value,
                "onUpdate:modelValue": m[0] || (m[0] = (r) => l.value = r),
                placement: "bottom-end"
              }, {
                menu: w(() => [
                  p(i.$slots, "menu")
                ]),
                default: w(() => [
                  b(c($), {
                    name: "dots-vertical",
                    class: "opacity-0 p-2 group-hover:opacity-100 cursor-pointer active:bg-oc-gray-100 rounded",
                    onClick: N(o, ["stop"])
                  })
                ]),
                _: 3
              }, 8, ["modelValue"])) : d("", !0)
            ])
          ]),
          p(i.$slots, "default", {}, () => [
            e.descriptionIcon || e.description || e.details.length ? (s(), n("div", Oe, [
              t("div", Ve, [
                e.descriptionIcon ? (s(), h(c($), {
                  key: 0,
                  name: e.descriptionIcon,
                  width: "16",
                  height: "16",
                  class: "text-oc-text-400"
                }, null, 8, ["name"])) : d("", !0),
                B(" " + g(e.description), 1)
              ]),
              e.details.length ? (s(), n("div", ze, [
                (s(!0), n(S, null, k(e.details, (r, u) => (s(), n("div", {
                  key: u,
                  class: "flex items-center gap-2"
                }, [
                  r.country ? (s(), n("div", {
                    key: 0,
                    class: v(["fi w-[15px] h-[15px] shadow", "fi-" + r.country])
                  }, null, 2)) : (s(), h(c($), {
                    key: 1,
                    name: r.icon,
                    width: "16",
                    height: "16",
                    class: "text-oc-text-400 shrink-0"
                  }, null, 8, ["name"])),
                  t("div", Pe, g(r.label), 1)
                ]))), 128))
              ])) : d("", !0)
            ])) : d("", !0)
          ])
        ]),
        p(i.$slots, "append")
      ])
    ], 34));
  }
}), je = ["src"], _e = { class: "flex flex-col gap-y-1 overflow-hidden" }, Ne = { class: "flex items-center justify-between" }, Ie = { class: "flex text-sm text-oc-text-400 items-center gap-x-3" }, Ee = {
  key: 0,
  class: "text-base text-oc-text font-medium"
}, Fe = {
  key: 1,
  class: "flex gap-3"
}, Ue = { class: "flex flex-col gap-4" }, We = { class: "text-xs whitespace-nowrap uppercase text-oc-text-300 overflow-hidden text-ellipsis" }, Ye = /* @__PURE__ */ T({
  __name: "OcTerminal",
  props: {
    title: String,
    image: String,
    imageClass: String,
    imageSize: {
      type: String,
      default: "medium"
    },
    description: String,
    chips: {
      type: Array,
      default: () => []
    },
    buttonProps: {
      type: Object,
      default: () => null
    },
    isDisabled: Boolean
  },
  setup(e) {
    const a = {
      small: "w-10",
      medium: "w-[56px]",
      large: "w-16"
    };
    return (f, l) => (s(), n("div", {
      class: v(["p-4 flex gap-x-4 rounded items-center border border-gray-200 group", { "hover:shadow-normal": !e.isDisabled }])
    }, [
      t("div", {
        class: v(["shrink-0 aspect-square flex items-center justify-center bg-oc-bg-dark rounded overflow-hidden", a[e.imageSize]])
      }, [
        t("img", {
          src: e.image,
          class: v([e.imageClass, "object-contain h-full w-full"]),
          alt: "terminal"
        }, null, 10, je)
      ], 2),
      t("div", _e, [
        t("div", Ne, [
          t("div", Ie, [
            e.title ? (s(), n("span", Ee, g(e.title), 1)) : d("", !0),
            e.chips.length ? (s(), n("div", Fe, [
              (s(!0), n(S, null, k(e.chips, (o, i) => (s(), h(c(M), {
                key: i,
                label: o.label,
                variant: o.variant,
                class: "font-medium"
              }, null, 8, ["label", "variant"]))), 128))
            ])) : d("", !0)
          ])
        ]),
        t("div", Ue, [
          t("div", We, g(e.description), 1)
        ])
      ]),
      e.buttonProps ? (s(), h(c(R), O({
        key: 0,
        class: "shrink-0",
        size: "small"
      }, e.buttonProps), null, 16)) : d("", !0)
    ], 2));
  }
}), He = {
  key: 0,
  class: "min-w-[100px]"
}, qe = { class: "grow pl-3" }, Ge = { class: "flex w-full" }, Re = { class: "text-lg font-medium" }, Je = { class: "ml-auto" }, Ke = { class: "cursor-pointer flex hover:bg-oc-gray-200 items-center rounded p-2" }, Qe = { class: "line-clamp-2 mb-3 max-w-[80%] text-oc-text-400" }, Xe = { class: "w-full text-sm lg:mt-4 flex flex-wrap items-center" }, Ze = { class: "mr-3" }, et = { class: "text-oc-text-400 font-medium" }, tt = {
  __name: "OcPage",
  props: {
    page: Object
  },
  setup(e) {
    const a = C(!1), f = (o) => {
      let i = document.createElement("DIV");
      return i.innerHTML = o, i.textContent || i.innerText || "";
    }, l = (o) => o == null ? void 0 : o.replace("generics/medium/", "generics/thumbnail/");
    return (o, i) => (s(), n("div", {
      class: "w-full p-5 flex",
      onMouseleave: i[1] || (i[1] = (m) => a.value = !1)
    }, [
      e.page.page_cover_url ? (s(), n("div", He, [
        t("div", {
          class: "w-[100px] h-[100px] rounded !bg-cover",
          style: I(`background:url(${l(e.page.page_cover_url)})`)
        }, null, 4)
      ])) : d("", !0),
      t("div", qe, [
        t("div", Ge, [
          t("div", Re, g(e.page.title), 1),
          t("div", Je, [
            b(c(V), {
              modelValue: a.value,
              "onUpdate:modelValue": i[0] || (i[0] = (m) => a.value = m),
              placement: "bottom-end"
            }, {
              menu: w(() => [
                p(o.$slots, "menu")
              ]),
              default: w(() => [
                t("div", Ke, [
                  b(c($), {
                    class: "text-oc-text-400",
                    name: "dots-vertical"
                  })
                ])
              ]),
              _: 3
            }, 8, ["modelValue"])
          ])
        ]),
        t("div", Qe, g(f(e.page.description)), 1),
        t("div", Xe, [
          t("span", Ze, [
            i[2] || (i[2] = t("span", { class: "text-oc-text-300" }, "Last updated : ", -1)),
            t("span", et, g(c(q)(e.page.updated_at).format("DD MMM YYYY")), 1)
          ]),
          b(c(M), {
            class: "ml-auto md:ml-0",
            variant: e.page.enabled ? "primary" : "gray"
          }, {
            default: w(() => [
              B(g(e.page.enabled ? "Published" : "Draft"), 1)
            ]),
            _: 1
          }, 8, ["variant"])
        ])
      ])
    ], 32));
  }
}, st = { class: "flex items-center gap-x-4 w-full p-5 pl-0" }, it = { class: "flex flex-col flex-1 gap-y-3" }, nt = { class: "flex items-center justify-between" }, ot = { class: "flex text-sm text-oc-text-400 items-center gap-x-3 overflow-hidden" }, lt = {
  key: 0,
  class: "text-base text-oc-text font-medium truncate"
}, at = {
  key: 1,
  class: "flex gap-3 shrink-0"
}, rt = {
  key: 0,
  class: "flex flex-col gap-3"
}, ct = { class: "text-oc-text-400 flex gap-x-2 items-center text-sm" }, dt = {
  key: 0,
  class: "flex items-center gap-4 opacity-0 group-hover:opacity-100"
}, ut = { class: "border border-oc-accent-1-100 rounded-sm p-1 flex gap-x-1" }, mt = { class: "py-5 px-7" }, gt = /* @__PURE__ */ T({
  __name: "OcAccordion",
  props: {
    title: String,
    description: String,
    chips: {
      type: Array,
      default: () => []
    },
    isDisabled: Boolean,
    hasActions: {
      type: Boolean,
      default: !0
    },
    isTransparent: Boolean,
    isDraggable: Boolean,
    isNoToggleForced: Boolean
  },
  emits: ["edit", "delete"],
  setup(e, { expose: a, emit: f }) {
    const l = e, o = C(!1), i = () => {
      l.isNoToggleForced || (o.value = !o.value);
    };
    return a({
      toggleAccordion: i
    }), (m, r) => (s(), n("div", {
      class: v(["rounded border border-gray-200 group overflow-hidden", {
        "hover:shadow-normal": !e.isDisabled && !e.isTransparent,
        "border-none !p-0": e.isTransparent
      }])
    }, [
      t("div", {
        class: v(["flex gap-4 items-stretch", {
          "border-b": o.value,
          "pl-5": e.isNoToggleForced
        }])
      }, [
        e.isNoToggleForced ? d("", !0) : (s(), n("div", {
          key: 0,
          class: "flex items-center p-3 border-r bg-gray-50 cursor-pointer",
          onClick: i
        }, [
          b(c($), {
            name: o.value ? "chevron-up" : "chevron-down",
            width: "20",
            height: "20",
            class: "text-oc-text-400"
          }, null, 8, ["name"])
        ])),
        t("div", st, [
          t("div", it, [
            t("div", nt, [
              t("div", ot, [
                e.title ? (s(), n("span", lt, g(e.title), 1)) : d("", !0),
                e.chips.length ? (s(), n("div", at, [
                  (s(!0), n(S, null, k(e.chips, (u, x) => (s(), h(c(M), {
                    key: x,
                    label: u.label,
                    variant: u.variant,
                    icon: u.icon,
                    "icon-tooltip": u.iconTooltip,
                    class: "font-medium shrink-0"
                  }, null, 8, ["label", "variant", "icon", "icon-tooltip"]))), 128))
                ])) : d("", !0)
              ])
            ]),
            p(m.$slots, "default", {}, () => [
              e.description ? (s(), n("div", rt, [
                t("div", ct, g(e.description), 1)
              ])) : d("", !0)
            ])
          ]),
          p(m.$slots, "right", {
            isOpen: o.value,
            toggleAccordion: i
          }, () => [
            e.hasActions ? (s(), n("div", dt, [
              t("div", ut, [
                b(c($), {
                  name: "pencil",
                  class: "cursor-pointer text-oc-text-400 p-2",
                  onClick: r[0] || (r[0] = (u) => m.$emit("edit"))
                }),
                r[2] || (r[2] = t("div", { class: "border-r border-gray-200" }, null, -1)),
                b(c($), {
                  name: "bin",
                  class: "cursor-pointer text-oc-error p-2",
                  onClick: r[1] || (r[1] = (u) => m.$emit("delete"))
                })
              ]),
              e.isDraggable ? (s(), h(c($), {
                key: 0,
                name: "draggable",
                class: "cursor-grab text-oc-text-400",
                width: "24",
                height: "24"
              })) : d("", !0)
            ])) : d("", !0)
          ])
        ])
      ], 2),
      E(t("div", mt, [
        p(m.$slots, "content")
      ], 512), [
        [F, o.value]
      ])
    ], 2));
  }
}), jt = {
  __name: "OcListItem",
  props: {
    isActive: Boolean,
    title: String,
    description: String,
    descriptionIcon: String,
    icon: String,
    iconClass: String,
    iconText: String,
    date: String,
    type: {
      type: String,
      default: "timeLine"
    },
    urls: {
      type: Array,
      default: () => []
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    chips: {
      type: Array,
      default: () => []
    },
    details: {
      type: Array,
      default: () => []
    },
    isDisabled: Boolean,
    isTransparent: Boolean,
    isDraggable: Boolean
  },
  emits: ["more", "edit", "delete", "click:item"],
  setup(e) {
    const a = e, f = A(() => {
      switch (a.type) {
        case "timeLine":
          return z;
        case "webhook":
          return ae;
        case "payment":
          return Se;
        case "general":
          return Le;
        case "terminal":
          return Ye;
        case "logo":
          return ue;
        case "page":
          return tt;
        case "accordion":
          return gt;
        default:
          return z;
      }
    });
    return (l, o) => (s(), h(U(f.value), O(a, {
      class: { "opacity-50": e.isDisabled },
      onMore: o[0] || (o[0] = (i) => l.$emit("more")),
      onEdit: o[1] || (o[1] = (i) => l.$emit("edit")),
      onDelete: o[2] || (o[2] = (i) => l.$emit("delete")),
      onClick: o[3] || (o[3] = (i) => l.$emit("click:item"))
    }), W({ _: 2 }, [
      k(l.$slots, (i, m) => ({
        name: m,
        fn: w((r) => [
          p(l.$slots, m, Y(H(r)))
        ])
      }))
    ]), 1040, ["class"]));
  }
}, pt = { class: "flex gap-x-3 text-sm items-center group/url" }, ft = { class: "text-oc-text-400 font-medium shrink-0" }, xt = { class: "break-all" }, vt = /* @__PURE__ */ T({
  __name: "OcListUrl",
  props: {
    title: String,
    url: String,
    isCopy: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (a, f) => (s(), n("div", pt, [
      t("span", ft, g(e.title) + ":", 1),
      t("span", xt, g(e.url), 1),
      e.isCopy ? (s(), h(c(J), {
        key: 0,
        value: e.url
      }, {
        default: w(({ isShow: l }) => [
          b(c($), {
            width: "14",
            height: "14",
            class: v(["cursor-pointer transition-all duration-500 group-hover/url:opacity-100", l ? "opacity-100" : "md:opacity-0"]),
            name: "copy"
          }, null, 8, ["class"])
        ]),
        _: 1
      }, 8, ["value"])) : d("", !0)
    ]));
  }
});
export {
  jt as _,
  vt as a
};
