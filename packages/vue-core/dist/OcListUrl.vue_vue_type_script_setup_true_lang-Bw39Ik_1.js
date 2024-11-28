import { defineComponent as C, openBlock as s, createElementBlock as i, createElementVNode as t, toDisplayString as u, createBlock as h, unref as r, withCtx as w, createVNode as $, normalizeClass as x, createCommentVNode as d, useSlots as P, renderSlot as p, createTextVNode as M, ref as T, Fragment as S, renderList as k, computed as B, onMounted as j, onBeforeUnmount as N, mergeProps as O, withModifiers as I, normalizeStyle as E, withDirectives as U, vShow as F, resolveDynamicComponent as _, createSlots as q, normalizeProps as W, guardReactiveProps as Y } from "vue";
import H from "dayjs";
import { m as G } from "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as b } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { T as R } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-CN2dgzYx-BzsRWRq1-Cnvd4g4F.js";
import { o as V } from "./OcDropdownItem-lmVCX47e-KIMNJ0NG.js";
import { j as A } from "./OcChip-D-MDc7mX-aGoqgxkI.js";
import { q as J } from "./OcTooltip-HpelzfZG-w8_u6oS8.js";
import { q as K } from "./OcButton-CgGNGzWP-CIpgruq1.js";
import { _ as Q } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-WVQMV5PY-CSiaYiz-.js";
const X = { class: "flex gap-x-3 text-sm items-center group/url" }, Z = { class: "text-oc-text-400 font-medium shrink-0" }, ee = { class: "break-all" }, te = /* @__PURE__ */ C({
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
    return (a, f) => (s(), i("div", X, [
      t("span", Z, u(e.title) + ":", 1),
      t("span", ee, u(e.url), 1),
      e.isCopy ? (s(), h(r(R), {
        key: 0,
        value: e.url
      }, {
        default: w(({ isShow: l }) => [
          $(r(G), {
            width: "14",
            height: "14",
            class: x(["cursor-pointer transition-all duration-500 group-hover/url:opacity-100", l ? "opacity-100" : "md:opacity-0"]),
            name: "copy"
          }, null, 8, ["class"])
        ]),
        _: 1
      }, 8, ["value"])) : d("", !0)
    ]));
  }
}), se = { class: "flex w-full relative gap-x-5 py-4 before:top-[20px] last:before:top-0 before:h-full before:left-[10px] before:absolute before:border-l" }, oe = { class: "flex gap-x-7 w-full items-center" }, ie = { class: "flex flex-1 flex-col gap-y-2" }, ne = { class: "text-sm text-oc-text-400" }, le = { class: "flex items-end gap-x-2" }, z = /* @__PURE__ */ C({
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
    return P(), (a, f) => (s(), i("div", se, [
      t("div", null, [
        t("div", {
          class: x(["w-6 h-6 flex z-[1] relative items-center rounded-full justify-center", e.isActive ? "bg-oc-accent-1-50 shadow" : " bg-transparent"])
        }, [
          t("div", {
            class: x(["w-3 h-3 rounded-full", e.isActive ? "bg-oc-primary-500" : " bg-oc-gray-500"])
          }, null, 2)
        ], 2)
      ]),
      t("div", oe, [
        t("div", ie, [
          t("span", null, u(e.title), 1),
          t("span", ne, [
            p(a.$slots, "description", {}, () => [
              M(u(e.description), 1)
            ])
          ])
        ]),
        t("div", le, [
          e.icon ? (s(), h(r(b), {
            key: 0,
            name: e.icon,
            class: x(e.iconClass)
          }, null, 8, ["name", "class"])) : d("", !0),
          t("span", {
            class: x(["text-lg font-medium", e.iconTextClass])
          }, [
            p(a.$slots, "iconText", {}, () => [
              M(u(e.iconText), 1)
            ])
          ], 2)
        ])
      ])
    ]));
  }
}), ae = { class: "px-5 py-4 flex flex-col gap-y-5 rounded border border-gray-200 group hover:shadow-normal" }, re = { class: "flex items-center justify-between" }, ce = { class: "flex text-sm text-oc-text-400 items-center gap-x-2" }, de = {
  key: 0,
  class: "text-base text-oc-text font-medium"
}, ue = { key: 1 }, me = {
  key: 0,
  class: "flex flex-col gap-y-3"
}, ge = /* @__PURE__ */ C({
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
    const a = T(!1);
    return (f, l) => {
      var n;
      return s(), i("div", ae, [
        t("div", re, [
          t("div", ce, [
            e.title ? (s(), i("span", de, u(e.title), 1)) : d("", !0),
            l[3] || (l[3] = M(" - ")),
            e.date ? (s(), i("span", ue, u(e.date), 1)) : d("", !0)
          ]),
          $(r(V), {
            modelValue: a.value,
            "onUpdate:modelValue": l[2] || (l[2] = (o) => a.value = o)
          }, {
            menu: w(() => [
              t("div", {
                onMouseleave: l[1] || (l[1] = (o) => a.value = !1)
              }, [
                p(f.$slots, "menu")
              ], 32)
            ]),
            default: w(() => [
              $(r(b), {
                name: "dots-vertical",
                class: "opacity-0 p-2 group-hover:opacity-100 cursor-pointer active:bg-oc-gray-100 rounded",
                onClick: l[0] || (l[0] = (o) => f.$emit("more"))
              })
            ]),
            _: 3
          }, 8, ["modelValue"])
        ]),
        (n = e.urls) != null && n.length ? (s(), i("div", me, [
          (s(!0), i(S, null, k(e.urls, (o, g) => (s(), h(r(te), {
            key: g,
            title: o.title,
            url: o.url
          }, null, 8, ["title", "url"]))), 128))
        ])) : d("", !0)
      ]);
    };
  }
}), pe = { class: "p-5 rounded border border-gray-200 max-w-[156px]" }, fe = ["src", "alt"], xe = { class: "text-oc-text-400 mt-4" }, ve = /* @__PURE__ */ C({
  __name: "OcLogo",
  props: {
    title: String,
    image: String,
    imageClass: String
  },
  setup(e) {
    return (a, f) => (s(), i("div", pe, [
      t("img", {
        src: e.image,
        class: x([e.imageClass, "object-contain"]),
        alt: e.title
      }, null, 10, fe),
      t("div", xe, u(e.title), 1),
      p(a.$slots, "default")
    ]));
  }
}), he = { class: "flex items-center gap-x-5" }, ye = { class: "flex-1 flex items-center gap-x-3 font-medium capitalize" }, be = { class: "flex flex-col gap-2" }, $e = { class: "flex items-center gap-x-3 overflow-hidden" }, we = { class: "truncate" }, ke = {
  key: 0,
  class: "flex gap-3"
}, Se = {
  key: 0,
  class: "text-oc-text-400 flex gap-x-2 items-center text-sm font-normal normal-case"
}, Ce = { class: "border opacity-0 group-hover:opacity-100 border-oc-accent-1-100 rounded-sm p-1 flex gap-x-1" }, Te = {
  key: 0,
  class: "flex items-center gap-x-2"
}, De = ["alt", "src"], Me = { class: "py-2 px-3 flex gap-x-2 w-full z-10 relative" }, Ae = ["alt", "src"], Be = {
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
    var c;
    const a = e, f = B(() => {
      var m;
      return ((m = a.paymentMethods) == null ? void 0 : m.length) > o.value;
    }), l = B(
      () => {
        var m, v;
        return (v = a.paymentMethods) == null ? void 0 : v.slice(o.value, (m = a.paymentMethods) == null ? void 0 : m.length);
      }
    ), n = T(), o = T((c = a.paymentMethods) == null ? void 0 : c.length), g = () => {
      var D;
      const m = n.value.clientWidth - 105 - 32 - 4 * ((D = a.paymentMethods) == null ? void 0 : D.length) - 35, v = 35;
      o.value = Math.floor(m / v);
    };
    return j(() => {
      g(), window.addEventListener("resize", g);
    }), N(() => {
      window.removeEventListener("resize", g);
    }), (m, v) => {
      var D;
      return s(), i("div", {
        ref_key: "cardContainer",
        ref: n,
        class: "md:px-5 px-3 md:py-4 py-3 flex flex-col gap-y-4 rounded border border-gray-200 group hover:shadow-normal"
      }, [
        t("div", he, [
          t("div", ye, [
            p(m.$slots, "logo"),
            t("div", be, [
              t("div", $e, [
                t("span", we, u(e.title), 1),
                e.chips.length ? (s(), i("div", ke, [
                  (s(!0), i(S, null, k(e.chips, (y, L) => (s(), h(r(A), O({
                    key: L,
                    class: "font-medium",
                    ref_for: !0
                  }, y), null, 16))), 128))
                ])) : d("", !0)
              ]),
              e.description ? (s(), i("div", Se, u(e.description), 1)) : d("", !0)
            ])
          ]),
          p(m.$slots, "right", {}, () => [
            t("div", Ce, [
              $(r(b), {
                name: "pencil",
                class: "cursor-pointer text-oc-text-400 p-2",
                onClick: v[0] || (v[0] = (y) => m.$emit("edit"))
              }),
              v[2] || (v[2] = t("div", { class: "border-r border-gray-200" }, null, -1)),
              $(r(b), {
                name: "bin",
                class: "cursor-pointer text-oc-error p-2",
                onClick: v[1] || (v[1] = (y) => m.$emit("delete"))
              })
            ])
          ])
        ]),
        (D = e.paymentMethods) != null && D.length ? (s(), i("div", Te, [
          v[3] || (v[3] = t("span", { class: "text-sm font-medium text-oc-text-300 whitespace-nowrap" }, "Payment methods", -1)),
          (s(!0), i(S, null, k(e.paymentMethods.slice(0, o.value), (y) => (s(), i("img", {
            key: y.method,
            width: "35",
            height: "24",
            alt: y.method,
            src: y.svg
          }, null, 8, De))), 128)),
          f.value ? (s(), h(r(J), {
            key: 0,
            position: "top-end",
            "popper-options": { strategy: "fixed" }
          }, {
            default: w(({ isShow: y }) => [
              t("div", {
                class: x(["text-sm w-[35px] h-[24px] flex items-center justify-center border rounded-sm font-medium whitespace-nowrap", y ? " bg-white" : "bg-oc-bg-dark"])
              }, " + " + u(e.paymentMethods.length - o.value), 3)
            ]),
            popper: w(() => [
              t("div", Me, [
                (s(!0), i(S, null, k(l.value, (y) => (s(), i("img", {
                  key: y.method,
                  width: "35",
                  height: "24",
                  alt: y.method,
                  src: y.svg
                }, null, 8, Ae))), 128))
              ])
            ]),
            _: 1
          })) : d("", !0)
        ])) : d("", !0)
      ], 512);
    };
  }
}, Oe = { class: "flex items-center gap-x-4 w-full" }, Ve = { class: "flex flex-col flex-1 gap-y-3 overflow-hidden" }, ze = { class: "flex items-center justify-between" }, Le = { class: "flex text-sm text-oc-text-400 items-center gap-x-3 overflow-hidden" }, Pe = {
  key: 0,
  class: "text-base text-oc-text font-medium truncate"
}, je = {
  key: 0,
  class: "flex gap-3 shrink-0"
}, Ne = {
  key: 0,
  class: "flex flex-col gap-3"
}, Ie = { class: "text-oc-text-400 flex gap-x-2 items-center text-sm" }, Ee = {
  key: 0,
  class: "flex gap-5"
}, Ue = { class: "font-medium whitespace-nowrap text-oc-text-500 text-sm" }, Fe = /* @__PURE__ */ C({
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
    const f = a, l = T(!1), n = () => {
      l.value = !l.value, f("more");
    };
    return (o, g) => (s(), i("div", {
      class: x(["px-5 py-4 rounded border border-gray-200 group", {
        "hover:shadow-normal": !e.isDisabled && !e.isTransparent,
        "border-none !p-0": e.isTransparent
      }]),
      onMouseleave: g[1] || (g[1] = (c) => l.value = !1)
    }, [
      t("div", Oe, [
        p(o.$slots, "logo"),
        t("div", Ve, [
          t("div", ze, [
            t("div", Le, [
              p(o.$slots, "title", {}, () => [
                e.title ? (s(), i("span", Pe, u(e.title), 1)) : d("", !0)
              ]),
              e.chips.length ? (s(), i("div", je, [
                (s(!0), i(S, null, k(e.chips, (c, m) => (s(), h(r(A), {
                  key: m,
                  label: c.label,
                  variant: c.variant,
                  icon: c.icon,
                  "icon-size": c.iconSize,
                  "icon-tooltip": c.iconTooltip,
                  class: x([c.class, "font-medium shrink-0"])
                }, null, 8, ["label", "variant", "icon", "icon-size", "icon-tooltip", "class"]))), 128))
              ])) : d("", !0)
            ]),
            p(o.$slots, "actions", {}, () => [
              e.isDropdownActionsVisible && !e.isDisabled ? (s(), h(r(V), {
                key: 0,
                modelValue: l.value,
                "onUpdate:modelValue": g[0] || (g[0] = (c) => l.value = c),
                placement: "bottom-end"
              }, {
                menu: w(() => [
                  p(o.$slots, "menu")
                ]),
                default: w(() => [
                  $(r(b), {
                    name: "dots-vertical",
                    class: "opacity-0 p-2 group-hover:opacity-100 cursor-pointer active:bg-oc-gray-100 rounded",
                    onClick: I(n, ["stop"])
                  })
                ]),
                _: 3
              }, 8, ["modelValue"])) : d("", !0)
            ])
          ]),
          p(o.$slots, "default", {}, () => [
            e.descriptionIcon || e.description || e.details.length ? (s(), i("div", Ne, [
              t("div", Ie, [
                e.descriptionIcon ? (s(), h(r(b), {
                  key: 0,
                  name: e.descriptionIcon,
                  width: "16",
                  height: "16",
                  class: "text-oc-text-400"
                }, null, 8, ["name"])) : d("", !0),
                M(" " + u(e.description), 1)
              ]),
              e.details.length ? (s(), i("div", Ee, [
                (s(!0), i(S, null, k(e.details, (c, m) => (s(), i("div", {
                  key: m,
                  class: "flex items-center gap-2"
                }, [
                  c.country ? (s(), i("div", {
                    key: 0,
                    class: x(["fi w-[15px] h-[15px] shadow", "fi-" + c.country])
                  }, null, 2)) : (s(), h(r(b), {
                    key: 1,
                    name: c.icon,
                    width: "16",
                    height: "16",
                    class: "text-oc-text-400 shrink-0"
                  }, null, 8, ["name"])),
                  t("div", Ue, u(c.label), 1)
                ]))), 128))
              ])) : d("", !0)
            ])) : d("", !0)
          ])
        ]),
        p(o.$slots, "append")
      ])
    ], 34));
  }
}), _e = ["src"], qe = { class: "flex flex-col gap-y-1 overflow-hidden" }, We = { class: "flex items-center justify-between" }, Ye = { class: "flex text-sm text-oc-text-400 items-center gap-x-3" }, He = {
  key: 0,
  class: "text-base text-oc-text font-medium"
}, Ge = {
  key: 1,
  class: "flex gap-3"
}, Re = { class: "flex flex-col gap-4" }, Je = { class: "text-xs whitespace-nowrap uppercase text-oc-text-300 overflow-hidden text-ellipsis" }, Ke = /* @__PURE__ */ C({
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
    return (f, l) => (s(), i("div", {
      class: x(["p-4 flex gap-x-4 rounded items-center border border-gray-200 group", { "hover:shadow-normal": !e.isDisabled }])
    }, [
      t("div", {
        class: x(["shrink-0 aspect-square flex items-center justify-center bg-oc-bg-dark rounded overflow-hidden", a[e.imageSize]])
      }, [
        t("img", {
          src: e.image,
          class: x([e.imageClass, "object-contain h-full w-full"]),
          alt: "terminal"
        }, null, 10, _e)
      ], 2),
      t("div", qe, [
        t("div", We, [
          t("div", Ye, [
            e.title ? (s(), i("span", He, u(e.title), 1)) : d("", !0),
            e.chips.length ? (s(), i("div", Ge, [
              (s(!0), i(S, null, k(e.chips, (n, o) => (s(), h(r(A), {
                key: o,
                label: n.label,
                variant: n.variant,
                class: "font-medium"
              }, null, 8, ["label", "variant"]))), 128))
            ])) : d("", !0)
          ])
        ]),
        t("div", Re, [
          t("div", Je, u(e.description), 1)
        ])
      ]),
      e.buttonProps ? (s(), h(r(K), O({
        key: 0,
        class: "shrink-0",
        size: "small"
      }, e.buttonProps), null, 16)) : d("", !0)
    ], 2));
  }
}), Qe = {
  key: 0,
  class: "min-w-[100px]"
}, Xe = { class: "grow pl-3" }, Ze = { class: "flex w-full" }, et = { class: "text-lg font-medium" }, tt = { class: "ml-auto" }, st = { class: "cursor-pointer flex hover:bg-oc-gray-200 items-center rounded p-2" }, ot = { class: "line-clamp-2 mb-3 max-w-[80%] text-oc-text-400" }, it = { class: "w-full text-sm lg:mt-4 flex flex-wrap items-center" }, nt = { class: "mr-3" }, lt = { class: "text-oc-text-400 font-medium" }, at = {
  __name: "OcPage",
  props: {
    page: Object
  },
  setup(e) {
    const a = T(!1), f = (n) => {
      let o = document.createElement("DIV");
      return o.innerHTML = n, o.textContent || o.innerText || "";
    }, l = (n) => n == null ? void 0 : n.replace("generics/medium/", "generics/thumbnail/");
    return (n, o) => (s(), i("div", {
      class: "w-full p-5 flex",
      onMouseleave: o[1] || (o[1] = (g) => a.value = !1)
    }, [
      e.page.page_cover_url ? (s(), i("div", Qe, [
        t("div", {
          class: "w-[100px] h-[100px] rounded !bg-cover",
          style: E(`background:url(${l(e.page.page_cover_url)})`)
        }, null, 4)
      ])) : d("", !0),
      t("div", Xe, [
        t("div", Ze, [
          t("div", et, u(e.page.title), 1),
          t("div", tt, [
            $(r(V), {
              modelValue: a.value,
              "onUpdate:modelValue": o[0] || (o[0] = (g) => a.value = g),
              placement: "bottom-end"
            }, {
              menu: w(() => [
                p(n.$slots, "menu")
              ]),
              default: w(() => [
                t("div", st, [
                  $(r(b), {
                    class: "text-oc-text-400",
                    name: "dots-vertical"
                  })
                ])
              ]),
              _: 3
            }, 8, ["modelValue"])
          ])
        ]),
        t("div", ot, u(f(e.page.description)), 1),
        t("div", it, [
          t("span", nt, [
            o[2] || (o[2] = t("span", { class: "text-oc-text-300" }, "Last updated : ", -1)),
            t("span", lt, u(r(H)(e.page.updated_at).format("DD MMM YYYY")), 1)
          ]),
          $(r(A), {
            class: "ml-auto md:ml-0",
            variant: e.page.enabled ? "primary" : "gray"
          }, {
            default: w(() => [
              M(u(e.page.enabled ? "Published" : "Draft"), 1)
            ]),
            _: 1
          }, 8, ["variant"])
        ])
      ])
    ], 32));
  }
}, rt = { class: "flex items-center gap-x-4 w-full p-5 pl-0" }, ct = { class: "flex flex-col flex-1 gap-y-3" }, dt = { class: "flex items-center justify-between" }, ut = { class: "flex text-sm text-oc-text-400 items-center gap-x-3 overflow-hidden" }, mt = {
  key: 0,
  class: "text-base text-oc-text font-medium truncate"
}, gt = {
  key: 1,
  class: "flex gap-3 shrink-0"
}, pt = {
  key: 0,
  class: "flex flex-col gap-3"
}, ft = { class: "text-oc-text-400 flex gap-x-2 items-center text-sm" }, xt = {
  key: 0,
  class: "flex items-center gap-4 opacity-0 group-hover:opacity-100"
}, vt = { class: "border border-oc-accent-1-100 rounded-sm p-1 flex gap-x-1" }, ht = { class: "py-5 px-7" }, yt = /* @__PURE__ */ C({
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
    const l = e, n = T(!1), o = () => {
      l.isNoToggleForced || (n.value = !n.value);
    };
    return a({
      toggleAccordion: o
    }), (g, c) => (s(), i("div", {
      class: x(["rounded border border-gray-200 group overflow-hidden", {
        "hover:shadow-normal": !e.isDisabled && !e.isTransparent,
        "border-none !p-0": e.isTransparent
      }])
    }, [
      t("div", {
        class: x(["flex gap-4 items-stretch", {
          "border-b": n.value,
          "pl-5": e.isNoToggleForced
        }])
      }, [
        e.isNoToggleForced ? d("", !0) : (s(), i("div", {
          key: 0,
          class: "flex items-center p-3 border-r bg-gray-50 cursor-pointer",
          onClick: o
        }, [
          $(r(b), {
            name: n.value ? "chevron-up" : "chevron-down",
            width: "20",
            height: "20",
            class: "text-oc-text-400"
          }, null, 8, ["name"])
        ])),
        t("div", rt, [
          t("div", ct, [
            t("div", dt, [
              t("div", ut, [
                e.title ? (s(), i("span", mt, u(e.title), 1)) : d("", !0),
                e.chips.length ? (s(), i("div", gt, [
                  (s(!0), i(S, null, k(e.chips, (m, v) => (s(), h(r(A), {
                    key: v,
                    label: m.label,
                    variant: m.variant,
                    icon: m.icon,
                    "icon-tooltip": m.iconTooltip,
                    class: "font-medium shrink-0"
                  }, null, 8, ["label", "variant", "icon", "icon-tooltip"]))), 128))
                ])) : d("", !0)
              ])
            ]),
            p(g.$slots, "default", {}, () => [
              e.description ? (s(), i("div", pt, [
                t("div", ft, u(e.description), 1)
              ])) : d("", !0)
            ])
          ]),
          p(g.$slots, "right", {
            isOpen: n.value,
            toggleAccordion: o
          }, () => [
            e.hasActions ? (s(), i("div", xt, [
              t("div", vt, [
                $(r(b), {
                  name: "pencil",
                  class: "cursor-pointer text-oc-text-400 p-2",
                  onClick: c[0] || (c[0] = (m) => g.$emit("edit"))
                }),
                c[2] || (c[2] = t("div", { class: "border-r border-gray-200" }, null, -1)),
                $(r(b), {
                  name: "bin",
                  class: "cursor-pointer text-oc-error p-2",
                  onClick: c[1] || (c[1] = (m) => g.$emit("delete"))
                })
              ]),
              e.isDraggable ? (s(), h(r(b), {
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
      U(t("div", ht, [
        p(g.$slots, "content")
      ], 512), [
        [F, n.value]
      ])
    ], 2));
  }
}), Nt = {
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
    const a = e, f = B(() => {
      switch (a.type) {
        case "timeLine":
          return z;
        case "webhook":
          return ge;
        case "payment":
          return Be;
        case "general":
          return Fe;
        case "terminal":
          return Ke;
        case "logo":
          return ve;
        case "page":
          return at;
        case "accordion":
          return yt;
        default:
          return z;
      }
    });
    return (l, n) => (s(), h(_(f.value), O(a, {
      class: { "opacity-50": e.isDisabled },
      onMore: n[0] || (n[0] = (o) => l.$emit("more")),
      onEdit: n[1] || (n[1] = (o) => l.$emit("edit")),
      onDelete: n[2] || (n[2] = (o) => l.$emit("delete")),
      onClick: n[3] || (n[3] = (o) => l.$emit("click:item"))
    }), q({ _: 2 }, [
      k(l.$slots, (o, g) => ({
        name: g,
        fn: w((c) => [
          p(l.$slots, g, W(Y(c)))
        ])
      }))
    ]), 1040, ["class"]));
  }
}, bt = { class: "flex gap-x-3 text-sm items-center group/url" }, $t = { class: "text-oc-text-400 font-medium shrink-0" }, wt = { class: "break-all" }, It = /* @__PURE__ */ C({
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
    return (a, f) => (s(), i("div", bt, [
      t("span", $t, u(e.title) + ":", 1),
      t("span", wt, u(e.url), 1),
      e.isCopy ? (s(), h(r(Q), {
        key: 0,
        value: e.url
      }, {
        default: w(({ isShow: l }) => [
          $(r(b), {
            width: "14",
            height: "14",
            class: x(["cursor-pointer transition-all duration-500 group-hover/url:opacity-100", l ? "opacity-100" : "md:opacity-0"]),
            name: "copy"
          }, null, 8, ["class"])
        ]),
        _: 1
      }, 8, ["value"])) : d("", !0)
    ]));
  }
});
export {
  Nt as _,
  It as a
};
