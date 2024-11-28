import { openBlock as t, createElementBlock as a, createElementVNode as i, defineComponent as I, ref as k, computed as E, Fragment as y, normalizeClass as w, createBlock as s, unref as o, createCommentVNode as $, renderList as L, renderSlot as m, withCtx as f, toDisplayString as d, createTextVNode as _, normalizeStyle as S, createVNode as N, createSlots as H, mergeProps as D, normalizeProps as K, guardReactiveProps as Y, withModifiers as te, pushScopeId as U, popScopeId as X, onMounted as lt } from "vue";
import Q from "dayjs";
import { a_ as at, m as F, f as ne, aU as Je, aQ as oe, aP as se, aL as de, aK as ue, a$ as it, aG as ve, aF as ce, b0 as rt, aB as pe, aA as fe, b1 as nt, aw as ye, av as he, b2 as ot, ar as we, aq as me, b3 as st, am as ke, al as ge, b4 as dt, ah as xe, ag as be, b5 as ut, ac as Te, ab as Ce, b6 as vt, a7 as $e, a6 as _e, b7 as ct, a2 as Le, a1 as Ae, b8 as pt, V as Oe, P as Be, b9 as ft, D as Se, M as Ee, ba as yt, I as Re, u as Ne, bb as ht, l as We, j as je, bc as wt, $ as He, h as Ie, bd as mt, B as De, g as Me, be as kt, L as Pe, E as Ke, bf as gt, d as Ye, o as Ue, bg as xt, A as Z, k as ee, bh as bt } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { l as le } from "./OcSkeleton-BgoOR1qd-pnPSK-aY.js";
import { E as Qe } from "./OcCheckbox-CPEV7kEq-UN7b0C93.js";
import { g as z } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { j as Tt } from "./OcChip-BiALeB1C-DzQgECL4.js";
import { _ as Ct } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-DXxdsDSQ-Cq3XmOXN.js";
import { s as ae } from "./OcSkeleton-BgoOR1qd-pnPSK-aY-D2UjEfe5.js";
import { E as $t } from "./OcChip-D-MDc7mX-aGoqgxkI-D82R7nec.js";
import { T as _t } from "./OcCopyTooltip.vue_vue_type_script_setup_true_lang-WVQMV5PY-CSiaYiz--DB93WtAM.js";
import { _ as Lt } from "./OcSkeleton-BgoOR1qd-pnPSK-aY-DsKe9Qwj-TM5tBGpw.js";
import { P as Xe } from "./OcTooltip-DBif_2H1-B-R8nPrI-BM5y6FC0-BiGpbzD8.js";
import { M as Ve } from "./OcTooltip-HpelzfZG-w8_u6oS8-BWOI0gq2.js";
import { q as qe } from "./OcTooltip-D_IQeXuu-5xiVEQiR.js";
const At = {}, Ot = { class: "bg-gray-100 overflow-hidden" };
function Bt(e, r) {
  return t(), a("div", Ot, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const St = /* @__PURE__ */ at(At, [["render", Bt], ["__scopeId", "data-v-2b70f697"]]), Et = {}, Rt = { class: "bg-gray-100 overflow-hidden" };
function Nt(e, r) {
  return t(), a("div", Rt, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const Wt = /* @__PURE__ */ it(Et, [["render", Nt], ["__scopeId", "data-v-2b70f697"]]), jt = {}, Ht = { class: "bg-gray-100 overflow-hidden" };
function It(e, r) {
  return t(), a("div", Ht, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const Dt = /* @__PURE__ */ rt(jt, [["render", It], ["__scopeId", "data-v-2b70f697"]]), Mt = {}, Pt = { class: "bg-gray-100 overflow-hidden" };
function Kt(e, r) {
  return t(), a("div", Pt, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const Yt = /* @__PURE__ */ nt(Mt, [["render", Kt], ["__scopeId", "data-v-2b70f697"]]), Ut = {}, Xt = { class: "bg-gray-100 overflow-hidden" };
function Vt(e, r) {
  return t(), a("div", Xt, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const qt = /* @__PURE__ */ ot(Ut, [["render", Vt], ["__scopeId", "data-v-2b70f697"]]), Ft = {}, zt = { class: "bg-gray-100 overflow-hidden" };
function Gt(e, r) {
  return t(), a("div", zt, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const Jt = /* @__PURE__ */ st(Ft, [["render", Gt], ["__scopeId", "data-v-2b70f697"]]), Qt = {}, Zt = { class: "bg-gray-100 overflow-hidden" };
function el(e, r) {
  return t(), a("div", Zt, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const tl = /* @__PURE__ */ dt(Qt, [["render", el], ["__scopeId", "data-v-2b70f697"]]), ll = {}, al = { class: "bg-gray-100 overflow-hidden" };
function il(e, r) {
  return t(), a("div", al, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const rl = /* @__PURE__ */ ut(ll, [["render", il], ["__scopeId", "data-v-2b70f697"]]), nl = {}, ol = { class: "bg-gray-100 overflow-hidden" };
function sl(e, r) {
  return t(), a("div", ol, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const dl = /* @__PURE__ */ vt(nl, [["render", sl], ["__scopeId", "data-v-2b70f697"]]), ul = {}, vl = { class: "bg-gray-100 overflow-hidden" };
function cl(e, r) {
  return t(), a("div", vl, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const pl = /* @__PURE__ */ ct(ul, [["render", cl], ["__scopeId", "data-v-2b70f697"]]), fl = {}, yl = { class: "bg-gray-100 overflow-hidden" };
function hl(e, r) {
  return t(), a("div", yl, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const wl = /* @__PURE__ */ pt(fl, [["render", hl], ["__scopeId", "data-v-2b70f697"]]), ml = {}, kl = { class: "bg-gray-100 overflow-hidden" };
function gl(e, r) {
  return t(), a("div", kl, r[0] || (r[0] = [
    i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)
  ]));
}
const xl = /* @__PURE__ */ ft(ml, [["render", gl], ["__scopeId", "data-v-2b70f697"]]), bl = {}, Tl = (e) => (U("data-v-2b70f697"), e = e(), X(), e), Cl = { class: "bg-gray-100 overflow-hidden" }, $l = /* @__PURE__ */ Tl(() => /* @__PURE__ */ i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)), _l = [
  $l
];
function Ll(e, r) {
  return t(), a("div", Cl, _l);
}
const Al = /* @__PURE__ */ yt(bl, [["render", Ll], ["__scopeId", "data-v-2b70f697"]]), Ol = {}, Bl = (e) => (U("data-v-2b70f697"), e = e(), X(), e), Sl = { class: "bg-gray-100 overflow-hidden" }, El = /* @__PURE__ */ Bl(() => /* @__PURE__ */ i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)), Rl = [
  El
];
function Nl(e, r) {
  return t(), a("div", Sl, Rl);
}
const Wl = /* @__PURE__ */ ht(Ol, [["render", Nl], ["__scopeId", "data-v-2b70f697"]]), jl = {}, Hl = (e) => (U("data-v-2b70f697"), e = e(), X(), e), Il = { class: "bg-gray-100 overflow-hidden" }, Dl = /* @__PURE__ */ Hl(() => /* @__PURE__ */ i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)), Ml = [
  Dl
];
function Pl(e, r) {
  return t(), a("div", Il, Ml);
}
const Kl = /* @__PURE__ */ wt(jl, [["render", Pl], ["__scopeId", "data-v-2b70f697"]]), Yl = {}, Ul = (e) => (U("data-v-2b70f697"), e = e(), X(), e), Xl = { class: "bg-gray-100 overflow-hidden" }, Vl = /* @__PURE__ */ Ul(() => /* @__PURE__ */ i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)), ql = [
  Vl
];
function Fl(e, r) {
  return t(), a("div", Xl, ql);
}
const zl = /* @__PURE__ */ mt(Yl, [["render", Fl], ["__scopeId", "data-v-2b70f697"]]), Gl = {}, Jl = (e) => (U("data-v-2b70f697"), e = e(), X(), e), Ql = { class: "bg-gray-100 overflow-hidden" }, Zl = /* @__PURE__ */ Jl(() => /* @__PURE__ */ i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)), ea = [
  Zl
];
function ta(e, r) {
  return t(), a("div", Ql, ea);
}
const la = /* @__PURE__ */ kt(Gl, [["render", ta], ["__scopeId", "data-v-2b70f697"]]), aa = {}, ia = (e) => (U("data-v-2b70f697"), e = e(), X(), e), ra = { class: "bg-gray-100 overflow-hidden" }, na = /* @__PURE__ */ ia(() => /* @__PURE__ */ i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)), oa = [
  na
];
function sa(e, r) {
  return t(), a("div", ra, oa);
}
const da = /* @__PURE__ */ gt(aa, [["render", sa], ["__scopeId", "data-v-2b70f697"]]), ua = {}, va = (e) => (U("data-v-2b70f697"), e = e(), X(), e), ca = { class: "bg-gray-100 overflow-hidden" }, pa = /* @__PURE__ */ va(() => /* @__PURE__ */ i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)), fa = [
  pa
];
function ya(e, r) {
  return t(), a("div", ca, fa);
}
const ha = /* @__PURE__ */ xt(ua, [["render", ya], ["__scopeId", "data-v-2b70f697"]]), wa = {}, ma = (e) => (U("data-v-2b70f697"), e = e(), X(), e), ka = { class: "bg-gray-100 overflow-hidden" }, ga = /* @__PURE__ */ ma(() => /* @__PURE__ */ i("div", { class: "slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]" }, null, -1)), xa = [
  ga
];
function ba(e, r) {
  return t(), a("div", ka, xa);
}
const Ze = /* @__PURE__ */ bt(wa, [["render", ba], ["__scopeId", "data-v-2b70f697"]]), Ta = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Ca = { class: "truncate" }, $a = { class: "py-1 px-2" }, _a = /* @__PURE__ */ i("div", { class: "w-9" }, null, -1), et = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(Z), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(Ze), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(ee), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", $a, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Ca, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(ee), null, {
                popper: f(() => [
                  i("div", Ta, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(Z), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          _a
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(et), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, K(Y(h)))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), La = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Aa = { class: "truncate" }, Oa = { class: "py-1 px-2" }, Ba = /* @__PURE__ */ i("div", { class: "w-9" }, null, -1), Sa = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(Z), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(Ze), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(ee), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Oa, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Aa, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(ee), null, {
                popper: f(() => [
                  i("div", La, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(Z), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          Ba
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(et), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, K(Y(h)))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Ea = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Ra = { class: "truncate" }, Na = { class: "py-1 px-2" }, Wa = /* @__PURE__ */ i("div", { class: "w-9" }, null, -1), ja = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(Ye), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(ha), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Ue), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Na, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Ra, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Ue), null, {
                popper: f(() => [
                  i("div", Ea, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(Ye), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          Wa
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Sa), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, K(Y(h)))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Ha = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Ia = { class: "truncate" }, Da = { class: "py-1 px-2" }, Ma = /* @__PURE__ */ i("div", { class: "w-9" }, null, -1), Pa = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(Pe), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(da), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Ke), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Da, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Ia, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Ke), null, {
                popper: f(() => [
                  i("div", Ha, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(Pe), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          Ma
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(ja), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, K(Y(h)))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Ka = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Ya = { class: "truncate" }, Ua = { class: "py-1 px-2" }, Xa = /* @__PURE__ */ i("div", { class: "w-9" }, null, -1), Va = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(De), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(la), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Me), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Ua, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Ya, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Me), null, {
                popper: f(() => [
                  i("div", Ka, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(De), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          Xa
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Pa), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, K(Y(h)))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), qa = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Fa = { class: "truncate" }, za = { class: "py-1 px-2" }, Ga = /* @__PURE__ */ i("div", { class: "w-9" }, null, -1), Ja = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(He), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(zl), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Ie), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", za, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Fa, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Ie), null, {
                popper: f(() => [
                  i("div", qa, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(He), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          Ga
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Va), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, K(Y(h)))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Qa = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Za = { class: "truncate" }, ei = { class: "py-1 px-2" }, ti = /* @__PURE__ */ i("div", { class: "w-9" }, null, -1), li = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(We), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(Kl), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(je), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", ei, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Za, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(je), null, {
                popper: f(() => [
                  i("div", Qa, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(We), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          ti
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Ja), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, K(Y(h)))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), ai = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, ii = { class: "truncate" }, ri = { class: "py-1 px-2" }, ni = /* @__PURE__ */ i("div", { class: "w-9" }, null, -1), oi = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(Re), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(Wl), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Ne), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", ri, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", ii, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Ne), null, {
                popper: f(() => [
                  i("div", ai, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(Re), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          ni
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(li), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, K(Y(h)))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), si = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, di = { class: "truncate" }, ui = { class: "py-1 px-2" }, vi = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(Se), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(Al), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Ee), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", ui, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", di, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Ee), null, {
                popper: f(() => [
                  i("div", si, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(Se), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(oi), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), ci = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, pi = { class: "truncate" }, fi = { class: "py-1 px-2" }, yi = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(Oe), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(xl), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Be), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", fi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", pi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Be), null, {
                popper: f(() => [
                  i("div", ci, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(Oe), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(vi), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), hi = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, wi = { class: "truncate" }, mi = { class: "py-1 px-2" }, ki = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(Le), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(wl), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Ae), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", mi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", wi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Ae), null, {
                popper: f(() => [
                  i("div", hi, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(Le), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(yi), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), gi = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, xi = { class: "truncate" }, bi = { class: "py-1 px-2" }, Ti = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o($e), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(pl), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(_e), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", bi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", xi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(_e), null, {
                popper: f(() => [
                  i("div", gi, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o($e), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(ki), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Ci = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, $i = { class: "truncate" }, _i = { class: "py-1 px-2" }, Li = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(Te), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(dl), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Ce), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", _i, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", $i, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Ce), null, {
                popper: f(() => [
                  i("div", Ci, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(Te), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Ti), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Ai = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Oi = { class: "truncate" }, Bi = { class: "py-1 px-2" }, Si = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(xe), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(rl), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(be), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Bi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Oi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(be), null, {
                popper: f(() => [
                  i("div", Ai, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(xe), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Li), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Ei = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Ri = { class: "truncate" }, Ni = { class: "py-1 px-2" }, Wi = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(ke), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(tl), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(ge), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Ni, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Ri, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(ge), null, {
                popper: f(() => [
                  i("div", Ei, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(ke), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Si), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), ji = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Hi = { class: "truncate" }, Ii = { class: "py-1 px-2" }, Di = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(we), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(Jt), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(me), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Ii, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Hi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(me), null, {
                popper: f(() => [
                  i("div", ji, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(we), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Wi), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Mi = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Pi = { class: "truncate" }, Ki = { class: "py-1 px-2" }, Yi = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(ye), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(qt), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(he), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Ki, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Pi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(he), null, {
                popper: f(() => [
                  i("div", Mi, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(ye), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Di), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Ui = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Xi = { class: "truncate" }, Vi = { class: "py-1 px-2" }, qi = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(pe), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(Yt), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(fe), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Vi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Xi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(fe), null, {
                popper: f(() => [
                  i("div", Ui, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(pe), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Yi), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Fi = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, zi = { class: "truncate" }, Gi = { class: "py-1 px-2" }, Ji = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(ve), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(Dt), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(ce), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Gi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", zi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(ce), null, {
                popper: f(() => [
                  i("div", Fi, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(ve), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(qi), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Qi = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Zi = { class: "truncate" }, er = { class: "py-1 px-2" }, tr = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(de), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(Wt), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(ue), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", er, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Zi, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(ue), null, {
                popper: f(() => [
                  i("div", Qi, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(de), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Ji), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), lr = { key: 0 }, ar = ["href"], ir = {
  __name: "OcTableLink",
  props: {
    link: String
  },
  setup(e) {
    return (r, u) => e.link ? (t(), a("a", {
      key: 1,
      href: e.link,
      style: { "'pointer-events": "none'" },
      onClick: u[0] || (u[0] = te(() => {
      }, ["prevent"]))
    }, [
      m(r.$slots, "default")
    ], 8, ar)) : (t(), a("div", lr, [
      m(r.$slots, "default")
    ]));
  }
}, rr = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, nr = { class: "truncate" }, or = { class: "py-1 px-2" }, sr = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(oe), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(St), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(se), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", or, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", nr, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(se), null, {
                popper: f(() => [
                  i("div", rr, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(oe), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(tr), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), dr = ["href"], ur = { key: 2 }, vr = { class: "overflow-hidden text-ellipsis text-oc-text-400 text-sm truncate" }, cr = { key: 0 }, Fe = {
  __name: "OcTableCellContent",
  props: {
    important: Boolean,
    title: String,
    description: String,
    href: String,
    link: String
  },
  setup(e) {
    return (r, u) => (t(), s(o(ir), {
      link: e.href ? "" : e.link,
      class: "flex flex-col gap-y-1 whitespace-nowrap overflow-hidden w-full"
    }, {
      default: f(() => [
        i("span", {
          class: w(["overflow-hidden text-ellipsis text-oc-text truncate", e.important ? "font-medium" : "font-regular"])
        }, [
          e.href ? (t(), a("a", {
            key: 0,
            href: e.href,
            target: "_blank",
            rel: "noopener noreferrer"
          }, d(e.title), 9, dr)) : (t(), a(y, { key: 1 }, [
            _(d(e.title), 1)
          ], 64)),
          e.title ? $("", !0) : (t(), a("span", ur, "-"))
        ], 2),
        i("span", vr, [
          m(r.$slots, "description", { description: e.description }, () => [
            _(d(e.description), 1)
          ]),
          e.description ? $("", !0) : (t(), a("span", cr, "-"))
        ])
      ]),
      _: 3
    }, 8, ["link"]));
  }
}, pr = { key: 0 }, fr = ["href"], V = {
  __name: "OcTableLink",
  props: {
    link: String
  },
  setup(e) {
    return (r, u) => e.link ? (t(), a("a", {
      key: 1,
      href: e.link,
      style: { "'pointer-events": "none'" },
      onClick: u[0] || (u[0] = te(() => {
      }, ["prevent"]))
    }, [
      m(r.$slots, "default")
    ], 8, fr)) : (t(), a("div", pr, [
      m(r.$slots, "default")
    ]));
  }
}, yr = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, hr = { class: "truncate" }, wr = { class: "py-1 px-2" }, mr = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(ne), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(Lt), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Xe), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", wr, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", hr, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Xe), null, {
                popper: f(() => [
                  i("div", yr, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(ne), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(sr), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), kr = { class: "mx-auto" }, ze = {
  __name: "OcTableHeader",
  props: {
    variant: {
      type: String,
      default: "text",
      validator: (e) => ["text", "checkbox"].includes(e)
    },
    text: String,
    isPartial: Boolean,
    isChecked: Boolean,
    isSticky: Boolean,
    isLoading: Boolean
  },
  emits: {
    selectAll: []
  },
  setup(e) {
    const r = {
      TEXT: "text",
      CHECKBOX: "checkbox"
    }, u = E(() => ({
      text: "px-4 py-3",
      checkbox: "p-4 md:p-3"
    }));
    return (g, T) => (t(), a("div", {
      class: w(["whitespace-nowrap text-start uppercase text-oc-text-400 leading-[18px] text-xs font-medium bg-oc-gray-50 flex items-center gap-3", u.value[e.variant]])
    }, [
      e.isLoading ? (t(), s(o(ae), {
        key: 0,
        class: "rounded-full w-full overflow-hidden h-6"
      })) : (t(), a(y, { key: 1 }, [
        e.variant === r.TEXT ? m(g.$slots, "default", { key: 0 }, () => [
          _(d(e.text), 1)
        ]) : m(g.$slots, "default", { key: 1 }, () => [
          i("div", kr, [
            N(o(Je), {
              "model-value": e.isChecked,
              "is-partial": e.isPartial,
              "onUpdate:modelValue": T[0] || (T[0] = (B) => g.$emit("selectAll", B))
            }, null, 8, ["model-value", "is-partial"])
          ]),
          i("span", {
            class: w(["text-oc-text-500", e.isSticky ? "hidden" : "md:hidden"])
          }, "Select all", 2)
        ])
      ], 64))
    ], 2));
  }
}, gr = ["src"], G = {
  __name: "OcTableCell",
  props: {
    isSimple: Boolean,
    variant: {
      type: String,
      default: "default"
    },
    isLast: Boolean,
    isCopy: Boolean,
    addDescriptionToCopyClipboard: Boolean,
    isSelected: Boolean,
    data: [String, Number, Object, Array, Boolean],
    isLoading: Boolean,
    chipOptions: Object,
    content: {
      type: Object,
      default() {
        return {
          title: null,
          description: null
        };
      }
    },
    datetime: String,
    imageClass: {
      type: String,
      default: "h-full"
    },
    link: String
  },
  emits: {
    selected: [],
    copied: [],
    "click:field": [],
    "hover:field": []
  },
  setup(e) {
    const r = {
      CHECKBOX: "checkbox",
      CONTENT: "content",
      CHIP: "chip",
      DATETIME: "datetime",
      ICON: "icon",
      IMAGE: "image",
      EMPTY: "empty",
      DEFAULT: "default"
    }, u = e, g = E(() => u.data || u.content.title || u.content.description), T = E(() => {
      const A = u.chipOptions[u.data];
      return typeof A == "object" ? {
        label: A.label || u.data,
        ...A
      } : {
        label: u.data,
        variant: A
      };
    }), B = E(() => ({
      [r.CHECKBOX]: "md:px-2 px-4 min-w-[32px]",
      [r.ICON]: "md:px-2 px-4 min-w-[32px] ",
      [r.IMAGE]: "md:px-2 px-4 min-w-[32px]",
      [r.CONTENT]: "px-4",
      [r.CHIP]: "px-4",
      [r.DATETIME]: "px-4",
      [r.EMPTY]: "px-4 min-w-[48px]",
      [r.DEFAULT]: "px-4"
    }));
    return (A, n) => {
      var c;
      return t(), a("div", {
        class: w([[
          B.value[e.variant],
          {
            "flex items-center": e.isLoading,
            "md:px-4 px-3 py-1": e.variant !== r.CHECKBOX
          }
        ], "md:py-3 bg-oc-bg-light md:min-h-[58px] md:group-hover/row:bg-oc-gray-50 items-center"])
      }, [
        e.isLoading ? (t(), s(o(ae), {
          key: 0,
          class: "rounded-full w-full overflow-hidden h-6"
        })) : (t(), a("div", {
          key: 1,
          class: w(["w-full flex", e.isCopy ? "justify-between" : "justify-start"]),
          onMouseover: n[1] || (n[1] = (C) => A.$emit("hover:field", u))
        }, [
          m(A.$slots, "default", {}, () => [
            e.variant === r.CHECKBOX ? (t(), s(o(Je), {
              key: 0,
              "model-value": e.isSelected,
              class: w(["m-auto justify-center items-center", e.isSelected ? "flex" : e.isSimple ? "" : "md:hidden group-hover/row:flex"]),
              "onUpdate:modelValue": n[0] || (n[0] = (C) => A.$emit("selected"))
            }, null, 8, ["model-value", "class"])) : e.variant === r.ICON ? (t(), s(o(F), {
              key: 1,
              class: "w-6 h-6 mx-auto",
              name: e.data
            }, null, 8, ["name"])) : e.variant === r.IMAGE ? (t(), a(y, { key: 2 }, [
              e.data ? (t(), s(o(V), {
                key: 0,
                link: e.link,
                class: "h-[42px] min-w-[42px] rounded mx-auto"
              }, {
                default: f(() => [
                  i("img", {
                    class: w([e.imageClass, "h-full"]),
                    alt: "table-img",
                    src: e.data
                  }, null, 10, gr)
                ]),
                _: 1
              }, 8, ["link"])) : (t(), s(o(V), {
                key: 1,
                link: e.link,
                class: "h-[42px] mx-auto w-[42px] bg-oc-bg-dark flex items-center justify-center rounded"
              }, {
                default: f(() => [
                  N(o(F), {
                    width: "20",
                    height: "20",
                    name: "image"
                  })
                ]),
                _: 1
              }, 8, ["link"]))
            ], 64)) : e.variant === r.EMPTY ? (t(), s(o(V), {
              key: 3,
              link: e.link,
              class: "w-full h-full"
            }, {
              default: f(() => n[2] || (n[2] = [
                _("- ")
              ])),
              _: 1
            }, 8, ["link"])) : e.variant === r.DATETIME ? (t(), s(o(Fe), {
              key: 4,
              title: o(Q)(e.data).format("D MMM, YYYY"),
              description: o(Q)(e.data).format("h:mm A"),
              link: e.link
            }, null, 8, ["title", "description", "link"])) : e.variant === r.CONTENT ? (t(), s(o(Fe), D({ key: 5 }, e.content, { link: e.link }), null, 16, ["link"])) : e.variant === r.CHIP ? (t(), s(o(V), {
              key: 6,
              link: e.link
            }, {
              default: f(() => [
                N(o($t), K(Y(T.value)), null, 16)
              ]),
              _: 1
            }, 8, ["link"])) : e.variant === r.DEFAULT ? (t(), s(o(V), {
              key: 7,
              link: e.link,
              class: "flex items-center w-full"
            }, {
              default: f(() => [
                _(d(e.data), 1)
              ]),
              _: 1
            }, 8, ["link"])) : (t(), s(o(V), {
              key: 8,
              link: e.link,
              class: "w-full h-full"
            }, {
              default: f(() => n[3] || (n[3] = [
                _("-")
              ])),
              _: 1
            }, 8, ["link"]))
          ]),
          e.isCopy && g.value ? (t(), s(o(_t), {
            key: 0,
            value: (c = e.content) != null && c.title ? `${e.content.title}${e.content.description && u.addDescriptionToCopyClipboard ? `,${e.content.description}` : ""}` : e.data,
            "tooltip-options": {
              transitionName: "copy"
            }
          }, {
            default: f(() => [
              N(o(F), {
                class: "cursor-pointer w-5 h-5 group-hover/row:opacity-100 md:opacity-0 ml-2",
                name: "copy"
              })
            ]),
            _: 1
          }, 8, ["value"])) : $("", !0)
        ], 34))
      ], 2);
    };
  }
}, xr = ["href"], br = { key: 2 }, Tr = { class: "overflow-hidden text-ellipsis text-oc-text-400 text-sm truncate" }, Cr = { key: 0 }, Ge = {
  __name: "OcTableCellContent",
  props: {
    important: Boolean,
    title: String,
    description: String,
    href: String,
    link: String
  },
  setup(e) {
    return (r, u) => (t(), s(o(V), {
      link: e.href ? "" : e.link,
      class: "flex flex-col gap-y-1 whitespace-nowrap overflow-hidden w-full"
    }, {
      default: f(() => [
        i("span", {
          class: w(["overflow-hidden text-ellipsis text-oc-text truncate", e.important ? "font-medium" : "font-regular"])
        }, [
          e.href ? (t(), a("a", {
            key: 0,
            href: e.href,
            target: "_blank",
            rel: "noopener noreferrer"
          }, d(e.title), 9, xr)) : (t(), a(y, { key: 1 }, [
            _(d(e.title), 1)
          ], 64)),
          e.title ? $("", !0) : (t(), a("span", br, "-"))
        ], 2),
        i("span", Tr, [
          m(r.$slots, "description", { description: e.description }, () => [
            _(d(e.description), 1)
          ]),
          e.description ? $("", !0) : (t(), a("span", Cr, "-"))
        ])
      ]),
      _: 3
    }, 8, ["link"]));
  }
}, $r = { key: 0 }, _r = ["href"], q = {
  __name: "OcTableLink",
  props: {
    link: String
  },
  setup(e) {
    return (r, u) => e.link ? (t(), a("a", {
      key: 1,
      href: e.link,
      style: { "'pointer-events": "none'" },
      onClick: u[0] || (u[0] = te(() => {
      }, ["prevent"]))
    }, [
      m(r.$slots, "default")
    ], 8, _r)) : (t(), a("div", $r, [
      m(r.$slots, "default")
    ]));
  }
}, Lr = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Ar = { class: "truncate" }, Or = { class: "py-1 px-2" }, Br = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(F), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(ae), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(Ve), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Or, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Ar, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(Ve), null, {
                popper: f(() => [
                  i("div", Lr, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(F), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(mr), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Sr = {
  key: 0,
  class: "flex relative group/row md:p-0 py-3 w-full"
}, cn = {
  __name: "OcTable",
  props: {
    options: {
      type: Object,
      required: !0
    },
    isLoading: Boolean,
    isBorderless: Boolean,
    loadingRows: {
      type: Number,
      default: 10
    },
    selected: {
      type: Array,
      required: !1
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    rowClass: [String, Function],
    isSticky: {
      type: Boolean,
      default: !1
    },
    isResponsive: {
      type: Boolean,
      default: !1
    },
    rowLink: String
  },
  emits: {
    "click:row": [],
    "update:selected": [],
    "hover:cell": []
  },
  setup(e, { emit: r }) {
    const u = e, g = r, T = E(() => u.options.isSelectable), B = E(() => u.options.isCursorPointer ?? !0), A = E(() => u.options.fields), n = E(() => u.options.headers), c = E(
      () => typeof u.rowKey == "function" ? u.rowKey : (j) => j[u.rowKey]
    ), C = E({
      get() {
        return u.selected || [];
      },
      set(j) {
        g("update:selected", j);
      }
    }), O = (j) => {
      C.value.find((R) => c.value(R) === c.value(j)) ? C.value = C.value.filter(
        (R) => c.value(R) !== c.value(j)
      ) : C.value = [...C.value, j];
    }, l = () => {
      const j = C.value.length === A.value.length;
      C.value = j ? [] : [...A.value];
    }, x = E(() => typeof u.rowClass == "function" ? (j, M) => u.rowClass(j, M) : () => u.rowClass), b = (j, M) => {
      !M.disableClickRow && M.key !== "actions" && g("click:row", {
        field: j,
        header: M
      });
    }, p = k(!0), h = k(!0), v = k(), ie = () => {
      u.isSticky && (p.value = v.value.scrollLeft === 0, h.value = v.value.scrollLeft + v.value.clientWidth === v.value.scrollWidth);
    };
    return lt(() => ie()), (j, M) => (t(), a("div", {
      ref_key: "scrollTable",
      ref: v,
      class: w(["flex text-oc-text flex-col border-oc-gray-200 isolate z-10", [
        e.isSticky ? "overflow-x-auto" : "overflow-hidden",
        e.isResponsive ? "rounded" : "md:rounded",
        e.isBorderless ? "" : "border"
      ]]),
      onScroll: ie
    }, [
      j.$slots.before ? (t(), a("div", {
        key: 0,
        class: w(["border-b border-oc-gray-200", {
          "sticky left-0": e.isSticky
        }])
      }, [
        m(j.$slots, "before")
      ], 2)) : $("", !0),
      m(j.$slots, "table-header", {
        fields: A.value,
        headers: n.value,
        isSelectable: T.value,
        isResponsive: e.isResponsive,
        selectAllRows: l
      }, () => [
        i("div", {
          class: w(["flex md:border-b-0 border-b border-oc-gray-200", e.isResponsive ? "w-full" : e.isSticky ? "w-max" : "flex-wrap md:flex-nowrap"])
        }, [
          T.value ? (t(), s(o(ze), {
            key: 0,
            "is-sticky": e.isSticky,
            class: w(["md:ml-0 md:border-b border-oc-gray-200 min-w-[32px]", [e.isSticky ? "shrink-0 sticky left-0 z-10" : "w-[40px] md:w-[5%]"]]),
            variant: "checkbox",
            "is-partial": C.value.length !== A.value.length && C.value.length > 0,
            "is-checked": C.value.length === A.value.length && C.value.length > 0,
            onSelectAll: l
          }, null, 8, ["is-sticky", "class", "is-partial", "is-checked"])) : $("", !0),
          (t(!0), a(y, null, L(n.value, (R) => (t(), s(o(ze), {
            key: R.key,
            text: R.label,
            "is-loading": e.isLoading,
            variant: R.headerVariant,
            "is-sticky": e.isSticky,
            class: w([[
              e.isSticky || e.isResponsive ? "flex md:min-h-auto" : "hidden md:flex",
              R.stickyLeft && T.value ? "left-[40px] md:left-[32px]" : "left-0",
              R.stickyRight ? "right-0" : "",
              typeof R.class == "function" ? R.class() : R.class,
              R.stickyLeft || R.stickyRight ? "sticky shrink-0 z-10" : "",
              R.stickyLeft && !p.value ? "shadow-right-sticky" : "",
              R.stickyRight && !h.value ? "shadow-left-sticky" : ""
            ], "md:border-b border-oc-gray-200"])
          }, {
            default: f(() => [
              m(j.$slots, `header-${R.key}`)
            ]),
            _: 2
          }, 1032, ["text", "is-loading", "variant", "is-sticky", "class"]))), 128))
        ], 2)
      ]),
      e.isLoading ? (t(!0), a(y, { key: 1 }, L(e.loadingRows, (R) => (t(), a("div", {
        key: R,
        class: w(["flex flex-wrap md:flex-nowrap group/row border-oc-gray-200 md:p-0 py-3", {
          "pl-[40px]": T.value,
          "border-b": e.isBorderless
        }])
      }, [
        T.value ? (t(), s(o(G), {
          key: 0,
          class: "opacity-0 flex justify-center absolute left-0 md:relative w-[5%]"
        })) : $("", !0),
        (t(!0), a(y, null, L(n.value, (P, W) => (t(), s(o(G), {
          key: `${W}-${R}`,
          class: w(P.class),
          "is-loading": "",
          "is-last": R === e.loadingRows
        }, null, 8, ["class", "is-last"]))), 128))
      ], 2))), 128)) : (t(), a(y, { key: 2 }, [
        m(j.$slots, "table-body", {
          fields: A.value,
          headers: n.value,
          isScrollOnEnd: h.value,
          onClickRow: b,
          isSelectable: T.value,
          isCursorPointer: B.value,
          isResponsive: e.isResponsive,
          isSticky: e.isSticky,
          rowLink: e.rowLink,
          calculateRowClass: x.value
        }, () => [
          (t(!0), a(y, null, L(A.value, (R, P) => (t(), a("div", {
            key: `${c.value(R)}-${P}`,
            class: w({
              "border-b": A.value.length !== P + 1,
              "w-max": e.isSticky
            })
          }, [
            i("div", {
              class: w(["flex relative group/row md:p-0 py-3 min-h-[58px]", [
                {
                  "pl-[40px]": T.value,
                  "cursor-pointer": B.value
                },
                e.isResponsive ? "w-full" : e.isSticky ? "w-max !p-0" : "flex-wrap md:flex-nowrap",
                x.value(R, P)
              ]])
            }, [
              T.value ? (t(), s(o(G), {
                key: 0,
                class: w(["flex border-oc-gray-200 justify-center left-0 min-w-[32px]", [
                  e.isSticky ? "shrink-0 z-10 left-0 sticky" : "md:relative absolute w-[40px] md:w-[5%]"
                ]]),
                "is-last": A.value.length === P + 1,
                "is-selected": C.value.some((W) => c.value(W) === c.value(R)),
                variant: "checkbox",
                onSelected: (W) => O(R),
                "onHover:field": M[0] || (M[0] = (W) => j.$emit("hover:cell", W))
              }, null, 8, ["is-last", "is-selected", "class", "onSelected"])) : $("", !0),
              (t(!0), a(y, null, L(n.value, (W, tt) => (t(), s(o(G), {
                key: `${tt}-${P}`,
                class: w(["flex border-oc-gray-200", [
                  typeof W.class == "function" ? W.class(R) : W.class,
                  W.stickyLeft && T.value ? "left-[40px] md:left-[32px]" : "left-0",
                  W.stickyRight ? "right-0" : "",
                  W.stickyLeft || W.stickyRight ? "shrink-0 sticky z-10" : "",
                  W.stickyLeft && !p.value ? "shadow-right-sticky" : "",
                  W.stickyRight && !h.value ? "shadow-left-sticky" : ""
                ]]),
                "is-last": A.value.length === P + 1,
                variant: W.variant,
                "is-copy": W.isCopy,
                "add-description-to-copy-clipboard": W.addDescriptionToCopyClipboard ?? !0,
                data: R[`${W.key}`] ?? "",
                content: {
                  important: W.important ?? !1,
                  title: R[`${W.title}`],
                  description: R[`${W.description}`],
                  href: R[`${W.href}`]
                },
                "chip-options": W.chipOptions,
                "image-class": W.imageClass,
                link: e.rowLink && R[e.rowLink] ? R[e.rowLink] : "",
                onClick: (re) => b(R, W),
                "onHover:field": M[1] || (M[1] = (re) => j.$emit("hover:cell", re))
              }, {
                default: f(() => [
                  j.$slots[W.key] ? m(j.$slots, W.key, {
                    key: 0,
                    item: R,
                    data: R[W.key],
                    index: P
                  }) : $("", !0)
                ]),
                _: 2
              }, 1032, ["is-last", "variant", "is-copy", "add-description-to-copy-clipboard", "data", "content", "chip-options", "class", "image-class", "link", "onClick"]))), 128))
            ], 2),
            j.$slots.extra ? (t(), a("div", Sr, [
              m(j.$slots, "extra", {
                item: R,
                index: P
              })
            ])) : $("", !0)
          ], 2))), 128))
        ]),
        A.value.length ? $("", !0) : m(j.$slots, "empty", { key: 0 })
      ], 64)),
      m(j.$slots, "after")
    ], 34));
  }
}, Er = { class: "mx-auto" }, pn = {
  __name: "OcTableHeader",
  props: {
    variant: {
      type: String,
      default: "text",
      validator: (e) => ["text", "checkbox"].includes(e)
    },
    text: String,
    isPartial: Boolean,
    isChecked: Boolean,
    isSticky: Boolean,
    isLoading: Boolean
  },
  emits: {
    selectAll: []
  },
  setup(e) {
    const r = {
      TEXT: "text",
      CHECKBOX: "checkbox"
    }, u = E(() => ({
      text: "px-4 py-3",
      checkbox: "p-4 md:p-3"
    }));
    return (g, T) => (t(), a("div", {
      class: w(["whitespace-nowrap text-start uppercase text-oc-text-400 leading-[18px] text-xs font-medium bg-oc-gray-50 flex items-center gap-3", u.value[e.variant]])
    }, [
      e.isLoading ? (t(), s(o(le), {
        key: 0,
        class: "rounded-full w-full overflow-hidden h-6"
      })) : (t(), a(y, { key: 1 }, [
        e.variant === r.TEXT ? m(g.$slots, "default", { key: 0 }, () => [
          _(d(e.text), 1)
        ]) : m(g.$slots, "default", { key: 1 }, () => [
          i("div", Er, [
            N(o(Qe), {
              "model-value": e.isChecked,
              "is-partial": e.isPartial,
              "onUpdate:modelValue": T[0] || (T[0] = (B) => g.$emit("selectAll", B))
            }, null, 8, ["model-value", "is-partial"])
          ]),
          i("span", {
            class: w(["text-oc-text-500", e.isSticky ? "hidden" : "md:hidden"])
          }, "Select all", 2)
        ])
      ], 64))
    ], 2));
  }
}, Rr = ["src"], fn = {
  __name: "OcTableCell",
  props: {
    isSimple: Boolean,
    variant: {
      type: String,
      default: "default"
    },
    isLast: Boolean,
    isCopy: Boolean,
    addDescriptionToCopyClipboard: Boolean,
    isSelected: Boolean,
    data: [String, Number, Object, Array, Boolean],
    isLoading: Boolean,
    chipOptions: Object,
    content: {
      type: Object,
      default() {
        return {
          title: null,
          description: null
        };
      }
    },
    datetime: String,
    imageClass: {
      type: String,
      default: "h-full"
    },
    link: String
  },
  emits: {
    selected: [],
    copied: [],
    "click:field": [],
    "hover:field": []
  },
  setup(e) {
    const r = {
      CHECKBOX: "checkbox",
      CONTENT: "content",
      CHIP: "chip",
      DATETIME: "datetime",
      ICON: "icon",
      IMAGE: "image",
      EMPTY: "empty",
      DEFAULT: "default"
    }, u = e, g = E(() => u.data || u.content.title || u.content.description), T = E(() => {
      const A = u.chipOptions[u.data];
      return typeof A == "object" ? {
        label: A.label || u.data,
        ...A
      } : {
        label: u.data,
        variant: A
      };
    }), B = E(() => ({
      [r.CHECKBOX]: "md:px-2 px-4 min-w-[32px]",
      [r.ICON]: "md:px-2 px-4 min-w-[32px] ",
      [r.IMAGE]: "md:px-2 px-4 min-w-[32px]",
      [r.CONTENT]: "px-4",
      [r.CHIP]: "px-4",
      [r.DATETIME]: "px-4",
      [r.EMPTY]: "px-4 min-w-[48px]",
      [r.DEFAULT]: "px-4"
    }));
    return (A, n) => {
      var c;
      return t(), a("div", {
        class: w([[
          B.value[e.variant],
          {
            "flex items-center": e.isLoading,
            "md:px-4 px-3 py-1": e.variant !== r.CHECKBOX
          }
        ], "md:py-3 bg-oc-bg-light md:min-h-[58px] md:group-hover/row:bg-oc-gray-50 items-center"])
      }, [
        e.isLoading ? (t(), s(o(le), {
          key: 0,
          class: "rounded-full w-full overflow-hidden h-6"
        })) : (t(), a("div", {
          key: 1,
          class: w(["w-full flex", e.isCopy ? "justify-between" : "justify-start"]),
          onMouseover: n[1] || (n[1] = (C) => A.$emit("hover:field", u))
        }, [
          m(A.$slots, "default", {}, () => [
            e.variant === r.CHECKBOX ? (t(), s(o(Qe), {
              key: 0,
              "model-value": e.isSelected,
              class: w(["m-auto justify-center items-center", e.isSelected ? "flex" : e.isSimple ? "" : "md:hidden group-hover/row:flex"]),
              "onUpdate:modelValue": n[0] || (n[0] = (C) => A.$emit("selected"))
            }, null, 8, ["model-value", "class"])) : e.variant === r.ICON ? (t(), s(o(z), {
              key: 1,
              class: "w-6 h-6 mx-auto",
              name: e.data
            }, null, 8, ["name"])) : e.variant === r.IMAGE ? (t(), a(y, { key: 2 }, [
              e.data ? (t(), s(o(q), {
                key: 0,
                link: e.link,
                class: "h-[42px] min-w-[42px] rounded mx-auto"
              }, {
                default: f(() => [
                  i("img", {
                    class: w([e.imageClass, "h-full"]),
                    alt: "table-img",
                    src: e.data
                  }, null, 10, Rr)
                ]),
                _: 1
              }, 8, ["link"])) : (t(), s(o(q), {
                key: 1,
                link: e.link,
                class: "h-[42px] mx-auto w-[42px] bg-oc-bg-dark flex items-center justify-center rounded"
              }, {
                default: f(() => [
                  N(o(z), {
                    width: "20",
                    height: "20",
                    name: "image"
                  })
                ]),
                _: 1
              }, 8, ["link"]))
            ], 64)) : e.variant === r.EMPTY ? (t(), s(o(q), {
              key: 3,
              link: e.link,
              class: "w-full h-full"
            }, {
              default: f(() => n[2] || (n[2] = [
                _("- ")
              ])),
              _: 1
            }, 8, ["link"])) : e.variant === r.DATETIME ? (t(), s(o(Ge), {
              key: 4,
              title: o(Q)(e.data).format("D MMM, YYYY"),
              description: o(Q)(e.data).format("h:mm A"),
              link: e.link
            }, null, 8, ["title", "description", "link"])) : e.variant === r.CONTENT ? (t(), s(o(Ge), D({ key: 5 }, e.content, { link: e.link }), null, 16, ["link"])) : e.variant === r.CHIP ? (t(), s(o(q), {
              key: 6,
              link: e.link
            }, {
              default: f(() => [
                N(o(Tt), K(Y(T.value)), null, 16)
              ]),
              _: 1
            }, 8, ["link"])) : e.variant === r.DEFAULT ? (t(), s(o(q), {
              key: 7,
              link: e.link,
              class: "flex items-center w-full"
            }, {
              default: f(() => [
                _(d(e.data), 1)
              ]),
              _: 1
            }, 8, ["link"])) : (t(), s(o(q), {
              key: 8,
              link: e.link,
              class: "w-full h-full"
            }, {
              default: f(() => n[3] || (n[3] = [
                _("-")
              ])),
              _: 1
            }, 8, ["link"]))
          ]),
          e.isCopy && g.value ? (t(), s(o(Ct), {
            key: 0,
            value: (c = e.content) != null && c.title ? `${e.content.title}${e.content.description && u.addDescriptionToCopyClipboard ? `,${e.content.description}` : ""}` : e.data,
            "tooltip-options": {
              transitionName: "copy"
            }
          }, {
            default: f(() => [
              N(o(z), {
                class: "cursor-pointer w-5 h-5 group-hover/row:opacity-100 md:opacity-0 ml-2",
                name: "copy"
              })
            ]),
            _: 1
          }, 8, ["value"])) : $("", !0)
        ], 34))
      ], 2);
    };
  }
}, Nr = ["href"], Wr = { key: 2 }, jr = { class: "overflow-hidden text-ellipsis text-oc-text-400 text-sm truncate" }, Hr = { key: 0 }, yn = {
  __name: "OcTableCellContent",
  props: {
    important: Boolean,
    title: String,
    description: String,
    href: String,
    link: String
  },
  setup(e) {
    return (r, u) => (t(), s(o(q), {
      link: e.href ? "" : e.link,
      class: "flex flex-col gap-y-1 whitespace-nowrap overflow-hidden w-full"
    }, {
      default: f(() => [
        i("span", {
          class: w(["overflow-hidden text-ellipsis text-oc-text truncate", e.important ? "font-medium" : "font-regular"])
        }, [
          e.href ? (t(), a("a", {
            key: 0,
            href: e.href,
            target: "_blank",
            rel: "noopener noreferrer"
          }, d(e.title), 9, Nr)) : (t(), a(y, { key: 1 }, [
            _(d(e.title), 1)
          ], 64)),
          e.title ? $("", !0) : (t(), a("span", Wr, "-"))
        ], 2),
        i("span", jr, [
          m(r.$slots, "description", { description: e.description }, () => [
            _(d(e.description), 1)
          ]),
          e.description ? $("", !0) : (t(), a("span", Hr, "-"))
        ])
      ]),
      _: 3
    }, 8, ["link"]));
  }
}, Ir = { key: 0 }, Dr = ["href"], hn = {
  __name: "OcTableLink",
  props: {
    link: String
  },
  setup(e) {
    return (r, u) => e.link ? (t(), a("a", {
      key: 1,
      href: e.link,
      style: { "'pointer-events": "none'" },
      onClick: u[0] || (u[0] = te(() => {
      }, ["prevent"]))
    }, [
      m(r.$slots, "default")
    ], 8, Dr)) : (t(), a("div", Ir, [
      m(r.$slots, "default")
    ]));
  }
}, Mr = { class: "rounded-xs text-sm font-medium text-oc-text-400 p-2" }, Pr = { class: "truncate" }, Kr = { class: "py-1 px-2" }, J = /* @__PURE__ */ I({
  __name: "OcExpadingTableRow",
  props: {
    row: Object,
    depth: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number, Date, Object],
      default: 0
    },
    headers: {
      type: Array,
      default: () => []
    },
    important: {
      type: Boolean,
      default: !1
    },
    isTotal: {
      type: Boolean,
      default: !1
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = k(!1), u = k("0"), g = k(), T = k(), B = E(
      () => {
        var n;
        return (n = T.value) == null ? void 0 : n.map((c) => c.scrollWidth > c.clientWidth);
      }
    ), A = () => {
      r.value = !r.value, r.value ? u.value = `${g.value.scrollHeight}px` : u.value = "0";
    };
    return (n, c) => {
      var C, O;
      return t(), a(y, null, [
        i("div", {
          class: w(["h-[58px] w-full flex items-center", {
            "font-medium": e.important || e.isTotal,
            "bg-oc-gray-900 text-white": e.isTotal,
            "bg-oc-bg-dark": e.depth,
            "border-b border-oc-gray-200": !e.isTotal
          }])
        }, [
          i("div", {
            class: "w-9",
            onClick: A
          }, [
            (C = e.row.children) != null && C.length ? (t(), s(o(z), {
              key: 0,
              name: "chevron-down",
              width: "16",
              height: "16",
              class: w(["mx-auto transition-all duration-500", r.value ? "rotate-180" : ""])
            }, null, 8, ["class"])) : $("", !0)
          ]),
          e.isAlternative ? (t(!0), a(y, { key: 1 }, L(e.headers, (l, x) => {
            var b;
            return t(), a("div", {
              key: l.key,
              ref_for: !0,
              ref_key: "itemsCellRef",
              ref: T,
              class: w(["flex-1 truncate px-4", l.itemClasses])
            }, [
              e.isLoading ? (t(), s(o(le), {
                key: 0,
                class: "w-full h-5 rounded"
              })) : m(n.$slots, l.key, {
                key: 1,
                data: (b = e.row) == null ? void 0 : b[l == null ? void 0 : l.key],
                item: e.row
              }, () => {
                var p, h;
                return [
                  (p = B.value) != null && p[x] ? (t(), s(o(qe), {
                    key: 0,
                    class: "overflow-hidden w-[-webkit-fill-available]",
                    "arrow-hidden": "",
                    position: "top"
                  }, {
                    popper: f(() => {
                      var v;
                      return [
                        i("div", Kr, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    default: f(() => {
                      var v;
                      return [
                        i("div", Pr, d((v = e.row) == null ? void 0 : v[l == null ? void 0 : l.key]), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (t(), a(y, { key: 1 }, [
                    _(d((h = e.row) == null ? void 0 : h[l == null ? void 0 : l.key]), 1)
                  ], 64))
                ];
              })
            ], 2);
          }), 128)) : (t(), a(y, { key: 0 }, [
            i("div", {
              class: "flex-1 gap-x-2 items-center flex px-4 py-3",
              style: S(e.depth ? { paddingLeft: 12 + e.depth * 20 + "px" } : {})
            }, [
              _(d(e.row.label) + " ", 1),
              N(o(qe), null, {
                popper: f(() => [
                  i("div", Mr, d(e.row.infoText), 1)
                ]),
                default: f(() => [
                  e.row.infoText ? (t(), s(o(z), {
                    key: 0,
                    name: "information",
                    width: "16",
                    height: "16"
                  })) : $("", !0)
                ]),
                _: 1
              })
            ], 4),
            i("div", {
              class: w(["flex-1 truncate", e.row.itemClasses])
            }, [
              m(n.$slots, e.row.key, { value: e.value }, () => [
                _(d(e.value), 1)
              ])
            ], 2)
          ], 64)),
          c[0] || (c[0] = i("div", { class: "w-9" }, null, -1))
        ], 2),
        (O = e.row.children) != null && O.length ? (t(), a("div", {
          key: 0,
          ref_key: "childrenWrapper",
          ref: g,
          class: "transition-all overflow-hidden duration-500",
          style: S({ maxHeight: u.value })
        }, [
          (t(!0), a(y, null, L(e.row.children, (l, x) => (t(), s(o(Br), {
            key: x,
            row: l,
            important: l.important,
            "is-alternative": e.isAlternative,
            "is-loading": e.isLoading,
            headers: e.headers,
            value: e.value[l.key],
            depth: e.depth + 1
          }, H({ _: 2 }, [
            L(n.$slots, (b, p) => ({
              name: p,
              fn: f((h) => [
                m(n.$slots, p, D({ ref_for: !0 }, h))
              ])
            }))
          ]), 1032, ["row", "important", "is-alternative", "is-loading", "headers", "value", "depth"]))), 128))
        ], 4)) : $("", !0)
      ], 64);
    };
  }
}), Yr = { class: "flex bg-oc-gray-50 border-b border-oc-text-200 h-[34px]" }, Ur = /* @__PURE__ */ I({
  __name: "OcExpandingHeaderRow",
  props: {
    headers: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    return (r, u) => (t(), a("div", Yr, [
      u[0] || (u[0] = i("div", { class: "w-9" }, null, -1)),
      (t(!0), a(y, null, L(e.headers, (g) => (t(), a("div", {
        key: g.key,
        class: w(["py-3 px-4 flex-1 uppercase text-xs text-oc-text-400 font-medium", g.class])
      }, d(g.label), 3))), 128)),
      u[1] || (u[1] = i("div", { class: "w-9" }, null, -1))
    ]));
  }
}), Xr = { class: "flex flex-col border rounded w-full border-oc-gray-200 overflow-hidden" }, wn = /* @__PURE__ */ I({
  __name: "OcExpadingTable",
  props: {
    total: {
      type: Number,
      default: 0
    },
    headers: {
      type: Array,
      required: !0
    },
    fields: {
      type: Object,
      required: !0
    },
    isAlternative: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    loadingRows: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const r = e, u = E(() => Object.fromEntries(r.headers.map((g) => [g.key, ""])));
    return (g, T) => (t(), a("div", Xr, [
      e.isAlternative ? (t(), a(y, { key: 0 }, [
        N(Ur, { headers: e.headers }, null, 8, ["headers"]),
        e.isLoading && !e.fields.length ? (t(!0), a(y, { key: 0 }, L(e.loadingRows, (B) => (t(), s(J, {
          key: B,
          "is-loading": "",
          "is-alternative": e.isAlternative,
          row: u.value,
          headers: e.headers
        }, null, 8, ["is-alternative", "row", "headers"]))), 128)) : (t(!0), a(y, { key: 1 }, L(e.fields, (B, A) => (t(), s(J, {
          key: A,
          row: B,
          headers: e.headers,
          "is-loading": e.isLoading,
          "is-alternative": e.isAlternative,
          important: B.important
        }, H({ _: 2 }, [
          L(g.$slots, (n, c) => ({
            name: c,
            fn: f((C) => [
              m(g.$slots, c, D({ ref_for: !0 }, C))
            ])
          }))
        ]), 1032, ["row", "headers", "is-loading", "is-alternative", "important"]))), 128))
      ], 64)) : (t(!0), a(y, { key: 1 }, L(e.headers, (B, A) => (t(), s(J, {
        key: A,
        row: B,
        headers: e.headers,
        "is-loading": e.isLoading,
        "is-alternative": e.isAlternative,
        value: e.fields[B.key],
        important: B.important
      }, H({ _: 2 }, [
        L(g.$slots, (n, c) => ({
          name: c,
          fn: f((C) => [
            m(g.$slots, c, D({ ref_for: !0 }, C))
          ])
        }))
      ]), 1032, ["row", "headers", "is-loading", "is-alternative", "value", "important"]))), 128)),
      m(g.$slots, "total", {}, () => [
        N(J, {
          "is-total": "",
          headers: e.headers,
          row: { label: "Total" },
          value: e.total
        }, null, 8, ["headers", "value"])
      ])
    ]));
  }
});
export {
  cn as _,
  wn as a,
  pn as b,
  fn as c,
  yn as d,
  hn as e,
  J as f,
  Ur as g
};
