import { openBlock as l, createElementBlock as a, normalizeClass as u, createElementVNode as i, Fragment as $, createVNode as d, unref as s, createTextVNode as v, toDisplayString as o, createBlock as x, withCtx as k, createCommentVNode as h, computed as b, renderList as z } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as w } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { j as y } from "./OcChip-D-MDc7mX-aGoqgxkI.js";
import { q as c } from "./OcButton-CgGNGzWP-CIpgruq1.js";
import { _ as A } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const F = { class: "w-full relative group" }, j = {
  key: 0,
  class: "m-auto"
}, B = {
  key: 1,
  class: "m-auto flex gap-3"
}, S = {
  key: 2,
  class: "m-auto flex gap-3"
}, E = {
  key: 1,
  class: "m-auto bg-white/75 rounded p-5 flex text-center flex-col justify-center"
}, q = { class: "mx-auto mb-3" }, N = ["src", "alt"], O = { class: "p-4 flex items-center" }, V = { class: "w-full" }, D = { class: "text-md font-medium" }, R = { class: "text-oc-text-400 text-sm mt-1" }, U = { class: "h-full flex items-start" }, fe = {
  __name: "ThumbnailTheme",
  props: {
    theme: Object,
    activating: Boolean,
    isFreeAccount: Boolean
  },
  emits: ["activate", "customize", "preview", "upgrade", "publish"],
  setup(e) {
    return (n, t) => (l(), a("div", {
      class: u(["bg-oc-bg-dark border-[3px] rounded-lg flex flex-col", e.theme.active ? "border-oc-primary" : "border-oc-bg-dark"])
    }, [
      i("div", F, [
        i("div", {
          class: u(["w-full h-full bg-black/25 absolute top-0 left-0 group-hover:flex rounded-t-lg", e.activating ? "flex" : "hidden"])
        }, [
          e.activating ? (l(), a("div", E, [
            i("div", q, [
              d(s(w), {
                name: "loading-2",
                width: "32",
                height: "32",
                class: "text-oc-text-400 motion-safe:animate-spin"
              })
            ]),
            t[6] || (t[6] = v(" Adding theme "))
          ])) : (l(), a($, { key: 0 }, [
            e.theme.active ? (l(), a("div", j, [
              d(s(c), {
                variant: "secondary",
                label: "Customize",
                onClick: t[0] || (t[0] = (r) => n.$emit("customize", e.theme))
              })
            ])) : e.theme.draft ? (l(), a("div", B, [
              d(s(c), {
                variant: "secondary",
                label: "Customize",
                onClick: t[1] || (t[1] = (r) => n.$emit("customize", e.theme))
              }),
              d(s(c), {
                label: "Publish",
                onClick: t[2] || (t[2] = (r) => n.$emit("publish", e.theme))
              })
            ])) : (l(), a("div", S, [
              d(s(c), {
                variant: "secondary",
                label: "Preview",
                onClick: t[3] || (t[3] = (r) => n.$emit("preview", e.theme))
              }),
              d(s(c), {
                label: e.isFreeAccount ? "Activate" : "Try Theme",
                onClick: t[4] || (t[4] = (r) => n.$emit("activate", e.theme))
              }, null, 8, ["label"])
            ]))
          ], 64))
        ], 2),
        i("img", {
          class: "w-full rounded-t-md",
          src: e.theme.thumbnail,
          alt: e.theme.title
        }, null, 8, N)
      ]),
      i("div", O, [
        i("div", V, [
          i("div", D, o(e.theme.title), 1),
          i("div", R, o(e.theme.description), 1)
        ]),
        i("div", U, [
          e.theme.active ? (l(), x(s(y), {
            key: 0,
            class: "ml-auto"
          }, {
            default: k(() => t[7] || (t[7] = [
              v("Active")
            ])),
            _: 1
          })) : e.theme.draft ? (l(), x(s(y), {
            key: 1,
            variant: "gray",
            class: "ml-auto"
          }, {
            default: k(() => t[8] || (t[8] = [
              v("Draft")
            ])),
            _: 1
          })) : e.theme.pro ? (l(), x(s(y), {
            key: 2,
            class: "ml-auto",
            variant: "accent-2",
            onClick: t[5] || (t[5] = (r) => n.$emit("upgrade", e.theme))
          }, {
            default: k(() => t[9] || (t[9] = [
              v("Upgrade")
            ])),
            _: 1
          })) : h("", !0)
        ])
      ])
    ], 2));
  }
}, I = { class: "flex flex-col" }, L = { class: "w-full relative group" }, G = { class: "w-full h-full bg-black/25 absolute top-0 left-0 hidden group-hover:flex rounded-lg" }, H = { class: "w-full px-6 gap-3 m-auto flex" }, J = ["src", "alt"], K = { class: "mt-4 text-md text-center" }, be = {
  __name: "ThumbnailSection",
  props: {
    section: Object
  },
  emits: ["add", "customize"],
  setup(e) {
    return (n, t) => (l(), a("div", I, [
      i("div", L, [
        i("div", G, [
          i("div", H, [
            d(s(c), {
              class: "w-1/2",
              variant: "secondary",
              label: "Customize",
              size: "small",
              onClick: t[0] || (t[0] = (r) => n.$emit("customize", e.section))
            }),
            d(s(c), {
              class: "w-1/2",
              label: "Add",
              size: "small",
              onClick: t[1] || (t[1] = (r) => n.$emit("add", e.section))
            })
          ])
        ]),
        i("img", {
          class: "w-full",
          src: e.section.preview,
          alt: e.section.title
        }, null, 8, J)
      ]),
      i("div", K, o(e.section.title), 1)
    ]));
  }
}, M = { class: "z-10 flex flex-col gap-4 p-9 relative" }, Q = { class: "flex items-center gap-4" }, W = { class: "font-medium text-xl" }, X = { class: "flex gap-3 items-center mb-5" }, Y = { class: "flex items-start gap-2" }, Z = { class: "text-[24px] font-medium tracking-tighter" }, _ = { class: "text-[40px] leading-none font-medium" }, ee = { key: 0 }, te = {
  __name: "SubPlanCard",
  props: {
    planTier: {
      type: Object,
      required: !0
    },
    isPlanActive: Boolean
  },
  emits: ["select"],
  setup(e, { emit: n }) {
    const t = e, r = n, f = b(() => t.planTier.name === "Free"), T = b(() => t.planTier.name === "Pro"), g = b(() => t.planTier.name === "Plus"), C = b(() => t.planTier.billing_frequency === "monthly") ? "/month" : "/year", P = b(() => t.planTier.name === "free" ? "For individual who just starting their business" : t.planTier.name === "pro" ? "For business who needs more features to increase their sales" : "For business who want in-depth analytics to win business and work");
    return (ie, m) => (l(), a("div", {
      class: u(["tier-card rounded relative shadow-sm max-w-[300px]", {
        "!bg-oc-bg-dark border border-oc-gray-200": f.value,
        "tier-card--pro border border-oc-gray-200": T.value,
        "tier-card--plus bg-oc-gray-900 text-white": g.value,
        "border-2 border-oc-primary-500": e.isPlanActive
      }])
    }, [
      i("div", M, [
        i("div", Q, [
          i("span", W, o(e.planTier.name), 1),
          e.isPlanActive ? (l(), x(s(y), {
            key: 0,
            label: "Current Plan"
          })) : h("", !0)
        ]),
        i("div", {
          class: u(["text-oc-text-400 text-sm mb-5", { "!text-oc-text-200": g.value }])
        }, o(P.value), 3),
        i("div", X, [
          i("div", Y, [
            i("span", Z, o(e.planTier.currency.toUpperCase()), 1),
            i("span", _, o(e.planTier.price), 1)
          ]),
          f.value ? h("", !0) : (l(), a("span", {
            key: 0,
            class: u(["text-oc-text-400 text-base", { "!text-oc-text-200": g.value }])
          }, o(s(C)), 3))
        ]),
        e.isPlanActive ? h("", !0) : (l(), x(s(c), {
          key: 0,
          label: f.value ? "Change to Free" : "Start 14 day trial",
          variant: f.value ? "secondary" : "primary",
          size: "big",
          class: "mb-5",
          onClick: m[0] || (m[0] = (p) => r("select"))
        }, null, 8, ["label", "variant"])),
        i("div", {
          class: u(["flex flex-col gap-3", { "text-oc-text-200": g.value }])
        }, [
          f.value ? h("", !0) : (l(), a("span", ee, [
            m[1] || (m[1] = v(" Everything on ")),
            i("strong", null, o(e.planTier.code === "tier_s" ? "FREE" : "PRO"), 1),
            m[2] || (m[2] = v(" includes: "))
          ])),
          (l(!0), a($, null, z(e.planTier.features, (p) => (l(), a("span", {
            key: p.id,
            class: "flex gap-3 items-center"
          }, [
            d(s(w), {
              name: "check-fill",
              class: "text-oc-primary-500",
              height: "16",
              width: "16"
            }),
            i("span", null, o(p.name), 1)
          ]))), 128))
        ], 2)
      ])
    ], 2));
  }
}, he = /* @__PURE__ */ A(te, [["__scopeId", "data-v-5c2edbd2"]]);
export {
  he as SubPlanCard,
  be as ThumbnailSection,
  fe as ThumbnailTheme
};
