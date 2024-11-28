import { openBlock as t, createElementBlock as o, normalizeClass as d, createElementVNode as s, createVNode as m, unref as r, createCommentVNode as i, createBlock as u, Fragment as O, withCtx as D, createTextVNode as q, toDisplayString as c, renderSlot as F } from "vue";
import "dayjs";
import { B as I } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as G } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { _ as f } from "./OcListDetail-SWiuyAPu.js";
import { _ as J } from "./OcIcon-CJgBICxh.js";
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
import { _ as P } from "./OcAvatar-NDXQiZvz.js";
import "@popperjs/core";
const K = { class: "flex flex-col items-center justify-center gap-y-3 overflow-hidden" }, L = { class: "w-full flex gap-x-3 items-center" }, M = { class: "flex flex-col font-medium overflow-hidden" }, Q = { class: "flex items-center gap-2" }, R = { class: "truncate" }, W = {
  key: 0,
  class: "rounded-md py-1 px-3 text-sm text-oc-accent-1-500 bg-oc-accent-1-50"
}, X = {
  key: 0,
  class: "text-sm text-oc-text-400"
}, Y = {
  key: 1,
  class: "text-sm text-oc-text-400 truncate"
}, Z = {
  key: 0,
  class: "flex flex-col gap-y-4 pt-4 w-full"
}, _ = { class: "flex flex-col gap-y-2 w-full items-center" }, ee = { key: 0 }, te = {
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
  setup(e, { emit: T }) {
    const U = T;
    return (a, n) => {
      var y, h, b, v, x, g, k, C, $, B, w, z, E, N, j, H, V, p, A;
      return t(), o("div", {
        class: d(["rounded shrink-0 border border-oc-gray-200 bg-oc-bg-light flex items-center justify-between gap-4 px-4 py-5 customer-card relative group", { [e.variant]: !0, "hover:shadow-normal transition": e.isHover }])
      }, [
        s("div", K, [
          e.isEdit ? (t(), o("div", {
            key: 0,
            class: d(["absolute right-3 top-3 transition", { "opacity-0 group-hover:opacity-100": e.isHover }])
          }, [
            m(r(I), {
              "right-icon": "pencil",
              variant: "secondary",
              size: "small",
              class: "*:!px-[6px]",
              onClick: n[0] || (n[0] = (l) => a.$emit("editCustomer", e.customer))
            })
          ], 2)) : i("", !0),
          e.isClosable ? (t(), u(r(J), {
            key: 1,
            class: "absolute -right-1.5 -top-1.5 border-1 border-white rounded-full text-gray-500 cursor-pointer transition-all duration-300 hover:text-oc-error",
            name: "filled-x-circle",
            onClick: n[1] || (n[1] = (l) => U("closeCustomer"))
          })) : i("", !0),
          e.customer ? (t(), o(O, { key: 2 }, [
            s("div", L, [
              m(r(P), {
                class: "shrink-0 uppercase",
                size: 32
              }, {
                default: D(() => {
                  var l, S;
                  return [
                    q(c(((S = (l = e.customer) == null ? void 0 : l.name) == null ? void 0 : S[0]) || "J"), 1)
                  ];
                }),
                _: 1
              }),
              s("div", M, [
                s("div", Q, [
                  s("span", R, c(((y = e.customer) == null ? void 0 : y.name) || "-"), 1),
                  e.isBeneficiary ? (t(), o("span", W, c((h = e.customer.currency) == null ? void 0 : h.toUpperCase()), 1)) : i("", !0)
                ]),
                e.isBeneficiary ? (t(), o("span", X, c(e.customer.bank_name) + " / " + c(e.customer.bank_account_number), 1)) : (t(), o("span", Y, c(((b = e.customer) == null ? void 0 : b.email) || ((v = e.customer) != null && v.phone_number_country_code && ((x = e.customer) != null && x.phone_number) ? `+${e.customer.phone_number_country_code} ${e.customer.phone_number}` : (g = e.customer) != null && g.phone_number ? e.customer.phone_number : "-")), 1))
              ])
            ]),
            e.variant !== "small" ? (t(), o("div", Z, [
              e.isBeneficiary ? i("", !0) : (t(), u(r(f), {
                key: 0,
                label: "Phone",
                content: (k = e.customer) != null && k.phone_number_country_code && ((C = e.customer) != null && C.phone_number) ? `+${e.customer.phone_number_country_code} ${e.customer.phone_number}` : ($ = e.customer) != null && $.phone_number ? e.customer.phone_number : "-"
              }, null, 8, ["content"])),
              e.isBeneficiary ? (t(), u(r(f), {
                key: 1,
                label: "Email",
                content: e.customer.email ?? "-"
              }, null, 8, ["content"])) : (t(), u(r(f), {
                key: 2,
                label: "Address",
                content: [
                  ((w = (B = e.customer) == null ? void 0 : B.address) == null ? void 0 : w.street) || "",
                  ((E = (z = e.customer) == null ? void 0 : z.address) == null ? void 0 : E.city) || "",
                  ((j = (N = e.customer) == null ? void 0 : N.address) == null ? void 0 : j.state) || "",
                  ((V = (H = e.customer) == null ? void 0 : H.address) == null ? void 0 : V.postal_code) || "",
                  ((A = (p = e.customer) == null ? void 0 : p.address) == null ? void 0 : A.country) || ""
                ].join(" ").trim() || "-"
              }, null, 8, ["content"]))
            ])) : i("", !0)
          ], 64)) : e.isBeneficiary ? i("", !0) : (t(), o(O, { key: 3 }, [
            s("div", _, [
              m(r(P), { size: 32 }, {
                default: D(() => [
                  m(r(J), {
                    name: "user-add",
                    width: "16",
                    height: "16"
                  })
                ]),
                _: 1
              }),
              n[3] || (n[3] = s("div", { class: "flex flex-col font-medium text-center" }, [
                s("span", null, "No customer attached"),
                s("span", { class: "text-sm text-oc-text-400" }, " Add customer detail to this transaction ")
              ], -1))
            ]),
            m(r(I), {
              variant: "secondary",
              size: "small",
              class: "w-full",
              label: "Add customer",
              onClick: n[2] || (n[2] = (l) => a.$emit("addCustomer"))
            })
          ], 64)),
          a.$slots.bottom ? (t(), o("div", {
            key: 4,
            class: d({ "opacity-0 group-hover:opacity-100": e.isHover })
          }, [
            F(a.$slots, "bottom", {}, void 0, !0)
          ], 2)) : i("", !0)
        ]),
        a.$slots.leading ? (t(), o("div", ee, [
          F(a.$slots, "leading", {}, void 0, !0)
        ])) : i("", !0)
      ], 2);
    };
  }
}, Ce = /* @__PURE__ */ G(te, [["__scopeId", "data-v-e499a3c4"]]);
export {
  Ce as C
};
