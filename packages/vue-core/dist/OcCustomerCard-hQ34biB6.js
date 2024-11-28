import { computed as F, openBlock as t, createElementBlock as s, normalizeClass as m, normalizeStyle as K, renderSlot as b, createTextVNode as G, createElementVNode as r, createVNode as u, unref as n, createCommentVNode as i, createBlock as d, Fragment as I, withCtx as J, toDisplayString as c } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { D as x } from "./OcListDetail-DBbUVTMc-DlZnvkGy.js";
import { g as P } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as T } from "./OcButton-CgGNGzWP-CIpgruq1.js";
import { _ as L } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const U = {
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
    const f = F(() => ({
      business: "bg-oc-accent-1 text-oc-text-100",
      default: "bg-oc-gray-800 text-oc-text-100",
      image: "text-oc-text-500",
      icon: "border-oc-gray-100"
    })), y = F(() => ({
      64: "text-[30px]",
      48: "text-xl",
      40: "text-lg",
      32: "text-base",
      24: "text-xs"
    }));
    return (a, o) => (t(), s("div", {
      class: m(["rounded-full border border-oc-gray-300 flex items-center font-bold justify-center", [f.value[e.type], y.value[e.size]]]),
      style: K({ width: `${e.size}px`, height: `${e.size}px` })
    }, [
      b(a.$slots, "default", {}, () => [
        o[0] || (o[0] = G("H"))
      ])
    ], 6));
  }
}, M = { class: "flex flex-col items-center justify-center gap-y-3 overflow-hidden" }, Q = { class: "w-full flex gap-x-3 items-center" }, R = { class: "flex flex-col font-medium overflow-hidden" }, W = { class: "flex items-center gap-2" }, X = { class: "truncate" }, Y = {
  key: 0,
  class: "rounded-md py-1 px-3 text-sm text-oc-accent-1-500 bg-oc-accent-1-50"
}, Z = {
  key: 0,
  class: "text-sm text-oc-text-400"
}, _ = {
  key: 1,
  class: "text-sm text-oc-text-400 truncate"
}, ee = {
  key: 0,
  class: "flex flex-col gap-y-4 pt-4 w-full"
}, te = { class: "flex flex-col gap-y-2 w-full items-center" }, oe = { key: 0 }, se = {
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
  setup(e, { emit: f }) {
    const y = f;
    return (a, o) => {
      var h, v, g, k, C, $, B, w, z, p, N, j, E, H, O, S, A, V, D;
      return t(), s("div", {
        class: m(["rounded shrink-0 border border-oc-gray-200 bg-oc-bg-light flex items-center justify-between gap-4 px-4 py-5 customer-card relative group", { [e.variant]: !0, "hover:shadow-normal transition": e.isHover }])
      }, [
        r("div", M, [
          e.isEdit ? (t(), s("div", {
            key: 0,
            class: m(["absolute right-3 top-3 transition", { "opacity-0 group-hover:opacity-100": e.isHover }])
          }, [
            u(n(T), {
              "right-icon": "pencil",
              variant: "secondary",
              size: "small",
              class: "*:!px-[6px]",
              onClick: o[0] || (o[0] = (l) => a.$emit("editCustomer", e.customer))
            })
          ], 2)) : i("", !0),
          e.isClosable ? (t(), d(n(P), {
            key: 1,
            class: "absolute -right-1.5 -top-1.5 border-1 border-white rounded-full text-gray-500 cursor-pointer transition-all duration-300 hover:text-oc-error",
            name: "filled-x-circle",
            onClick: o[1] || (o[1] = (l) => y("closeCustomer"))
          })) : i("", !0),
          e.customer ? (t(), s(I, { key: 2 }, [
            r("div", Q, [
              u(n(U), {
                class: "shrink-0 uppercase",
                size: 32
              }, {
                default: J(() => {
                  var l, q;
                  return [
                    G(c(((q = (l = e.customer) == null ? void 0 : l.name) == null ? void 0 : q[0]) || "J"), 1)
                  ];
                }),
                _: 1
              }),
              r("div", R, [
                r("div", W, [
                  r("span", X, c(((h = e.customer) == null ? void 0 : h.name) || "-"), 1),
                  e.isBeneficiary ? (t(), s("span", Y, c((v = e.customer.currency) == null ? void 0 : v.toUpperCase()), 1)) : i("", !0)
                ]),
                e.isBeneficiary ? (t(), s("span", Z, c(e.customer.bank_name) + " / " + c(e.customer.bank_account_number), 1)) : (t(), s("span", _, c(((g = e.customer) == null ? void 0 : g.email) || ((k = e.customer) != null && k.phone_number_country_code && ((C = e.customer) != null && C.phone_number) ? `+${e.customer.phone_number_country_code} ${e.customer.phone_number}` : ($ = e.customer) != null && $.phone_number ? e.customer.phone_number : "-")), 1))
              ])
            ]),
            e.variant !== "small" ? (t(), s("div", ee, [
              e.isBeneficiary ? i("", !0) : (t(), d(n(x), {
                key: 0,
                label: "Phone",
                content: (B = e.customer) != null && B.phone_number_country_code && ((w = e.customer) != null && w.phone_number) ? `+${e.customer.phone_number_country_code} ${e.customer.phone_number}` : (z = e.customer) != null && z.phone_number ? e.customer.phone_number : "-"
              }, null, 8, ["content"])),
              e.isBeneficiary ? (t(), d(n(x), {
                key: 1,
                label: "Email",
                content: e.customer.email ?? "-"
              }, null, 8, ["content"])) : (t(), d(n(x), {
                key: 2,
                label: "Address",
                content: [
                  ((N = (p = e.customer) == null ? void 0 : p.address) == null ? void 0 : N.street) || "",
                  ((E = (j = e.customer) == null ? void 0 : j.address) == null ? void 0 : E.city) || "",
                  ((O = (H = e.customer) == null ? void 0 : H.address) == null ? void 0 : O.state) || "",
                  ((A = (S = e.customer) == null ? void 0 : S.address) == null ? void 0 : A.postal_code) || "",
                  ((D = (V = e.customer) == null ? void 0 : V.address) == null ? void 0 : D.country) || ""
                ].join(" ").trim() || "-"
              }, null, 8, ["content"]))
            ])) : i("", !0)
          ], 64)) : e.isBeneficiary ? i("", !0) : (t(), s(I, { key: 3 }, [
            r("div", te, [
              u(n(U), { size: 32 }, {
                default: J(() => [
                  u(n(P), {
                    name: "user-add",
                    width: "16",
                    height: "16"
                  })
                ]),
                _: 1
              }),
              o[3] || (o[3] = r("div", { class: "flex flex-col font-medium text-center" }, [
                r("span", null, "No customer attached"),
                r("span", { class: "text-sm text-oc-text-400" }, " Add customer detail to this transaction ")
              ], -1))
            ]),
            u(n(T), {
              variant: "secondary",
              size: "small",
              class: "w-full",
              label: "Add customer",
              onClick: o[2] || (o[2] = (l) => a.$emit("addCustomer"))
            })
          ], 64)),
          a.$slots.bottom ? (t(), s("div", {
            key: 4,
            class: m({ "opacity-0 group-hover:opacity-100": e.isHover })
          }, [
            b(a.$slots, "bottom", {}, void 0, !0)
          ], 2)) : i("", !0)
        ]),
        a.$slots.leading ? (t(), s("div", oe, [
          b(a.$slots, "leading", {}, void 0, !0)
        ])) : i("", !0)
      ], 2);
    };
  }
}, xe = /* @__PURE__ */ L(se, [["__scopeId", "data-v-6761183a"]]);
export {
  xe as O
};
