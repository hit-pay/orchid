import m from "dayjs";
import { c as P, g as q } from "../../_commonjsHelpers-DaMA6jEr.js";
import { c as ne } from "../../customParseFormat-CoBtXnqJ.js";
import { ref as D, computed as C, openBlock as M, createElementBlock as k, normalizeClass as V, createElementVNode as w, createVNode as O, unref as Y, withCtx as Q, toDisplayString as E, Fragment as R, renderList as W, withModifiers as Se, renderSlot as De, createCommentVNode as Me } from "vue";
import "../../Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as Z } from "../../OcIcon-CJgBICxh-Cknfoj_m.js";
import { q as J } from "../../OcButton-CgGNGzWP-CIpgruq1.js";
import { E as ke } from "../../OcCheckbox-CC-HWseg-DP_ygEai.js";
import { o as Ce } from "../../OcDropdownItem-lmVCX47e-KIMNJ0NG.js";
import { i as Be, b as we, a as G, r as Ye } from "../../isObject-DQpnfMRp.js";
var Ae = "[object Symbol]";
function Ie(e) {
  return typeof e == "symbol" || Be(e) && we(e) == Ae;
}
var Oe = /\s/;
function Ee(e) {
  for (var u = e.length; u-- && Oe.test(e.charAt(u)); )
    ;
  return u;
}
var _e = /^\s+/;
function Te(e) {
  return e && e.slice(0, Ee(e) + 1).replace(_e, "");
}
var ee = NaN, Ve = /^[-+]0x[0-9a-f]+$/i, $e = /^0b[01]+$/i, je = /^0o[0-7]+$/i, Ne = parseInt;
function te(e) {
  if (typeof e == "number")
    return e;
  if (Ie(e))
    return ee;
  if (G(e)) {
    var u = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = G(u) ? u + "" : u;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Te(e);
  var l = $e.test(e);
  return l || je.test(e) ? Ne(e.slice(2), l ? 2 : 8) : Ve.test(e) ? ee : +e;
}
var U = function() {
  return Ye.Date.now();
}, Le = "Expected a function", Fe = Math.max, Re = Math.min;
function We(e, u, l) {
  var s, n, i, f, a, c, v = 0, p = !1, h = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(Le);
  u = te(u) || 0, G(l) && (p = !!l.leading, h = "maxWait" in l, i = h ? Fe(te(l.maxWait) || 0, u) : i, y = "trailing" in l ? !!l.trailing : y);
  function b(d) {
    var S = s, A = n;
    return s = n = void 0, v = d, f = e.apply(A, S), f;
  }
  function I(d) {
    return v = d, a = setTimeout(_, u), p ? b(d) : f;
  }
  function B(d) {
    var S = d - c, A = d - v, j = u - S;
    return h ? Re(j, i - A) : j;
  }
  function N(d) {
    var S = d - c, A = d - v;
    return c === void 0 || S >= u || S < 0 || h && A >= i;
  }
  function _() {
    var d = U();
    if (N(d))
      return $(d);
    a = setTimeout(_, B(d));
  }
  function $(d) {
    return a = void 0, y && s ? b(d) : (s = n = void 0, f);
  }
  function T() {
    a !== void 0 && clearTimeout(a), v = 0, s = c = n = a = void 0;
  }
  function L() {
    return a === void 0 ? f : $(U());
  }
  function g() {
    var d = U(), S = N(d);
    if (s = arguments, n = this, c = d, S) {
      if (a === void 0)
        return I(c);
      if (h)
        return clearTimeout(a), a = setTimeout(_, u), b(c);
    }
    return a === void 0 && (a = setTimeout(_, u)), f;
  }
  return g.cancel = T, g.flush = L, g;
}
var re = { exports: {} };
(function(e, u) {
  (function(l, s) {
    e.exports = s();
  })(P, function() {
    return function(l, s, n) {
      s.prototype.isBetween = function(i, f, a, c) {
        var v = n(i), p = n(f), h = (c = c || "()")[0] === "(", y = c[1] === ")";
        return (h ? this.isAfter(v, a) : !this.isBefore(v, a)) && (y ? this.isBefore(p, a) : !this.isAfter(p, a)) || (h ? this.isBefore(v, a) : !this.isAfter(v, a)) && (y ? this.isAfter(p, a) : !this.isBefore(p, a));
      };
    };
  });
})(re);
var Je = re.exports;
const ae = /* @__PURE__ */ q(Je);
var oe = { exports: {} };
(function(e, u) {
  (function(l, s) {
    e.exports = s();
  })(P, function() {
    return function(l, s) {
      s.prototype.isSameOrBefore = function(n, i) {
        return this.isSame(n, i) || this.isBefore(n, i);
      };
    };
  });
})(oe);
var Ue = oe.exports;
const le = /* @__PURE__ */ q(Ue);
var ie = { exports: {} };
(function(e, u) {
  (function(l, s) {
    e.exports = s();
  })(P, function() {
    return function(l, s) {
      s.prototype.isSameOrAfter = function(n, i) {
        return this.isSame(n, i) || this.isAfter(n, i);
      };
    };
  });
})(ie);
var Ge = ie.exports;
const se = /* @__PURE__ */ q(Ge), Pe = { class: "flex items-center justify-between" }, qe = { class: "flex flex-col gap-2 p-3" }, ze = { class: "flex justify-between items-center" }, He = { key: 0 }, Xe = { key: 1 }, Ke = {
  key: 0,
  class: "grid grid-cols-3 gap-3"
}, Qe = ["onClick"], Ze = {
  key: 1,
  class: "grid grid-cols-3 gap-3"
}, et = ["onClick"], tt = ["onClick", "onMouseover"], nt = { key: 0 }, rt = { class: "flex gap-x-3 justify-end" }, gt = {
  __name: "OcCalendar",
  props: {
    type: {
      type: String,
      default: "default"
    },
    minDate: {
      type: [String, Date, Number],
      default: null
    },
    maxDate: {
      type: [String, Date, Number],
      default: null
    },
    position: {
      type: String,
      default: "floating"
    },
    modelValue: {
      type: [String, Date, Number, Array],
      default: null,
      validator: (e) => Array.isArray(e) ? m(e[0]).isSameOrBefore(m(e[1])) : !0
    },
    disabledDate: {
      type: Function,
      default: () => !1
    },
    isIndefinite: {
      type: Boolean,
      default: !1
    },
    inDefiniteLabel: {
      type: String,
      default: "Indefinite"
    }
  },
  emits: ["update:modelValue", "reset-calendar", "update:isIndefinite"],
  setup(e, { emit: u }) {
    m.extend(ae), m.extend(le), m.extend(se), m.extend(ne);
    const l = e, s = u, n = D(), i = D(), f = D(), a = D(), c = D(), v = D(), p = D(), h = D(!1), y = D(!1), b = D(!1), I = D(!1), B = C(() => l.type === "range"), N = C(() => {
      const o = n.value.endOf("month").date();
      return Array.from({ length: o }, (r, x) => x + 1);
    }), _ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], $ = C(() => n.value.format("MMMM YYYY")), T = C(
      () => b.value ? v.value.format("YYYY") : n.value.format("YYYY")
    ), L = C(() => n.value.format("MMM")), g = C(() => {
      const t = i.value, o = f.value ?? p.value, r = [t, o];
      return o && (t != null && t.isAfter(o)) && r.reverse(), {
        from: r[0],
        to: r[1]
      };
    }), d = C(
      () => Object.values(g.value).filter(Boolean).length > 1
    ), S = C(() => n.value.month()), A = C(
      () => {
        var t;
        return S.value === ((t = i.value) == null ? void 0 : t.month());
      }
    ), j = C(
      () => {
        var t;
        return S.value === ((t = f.value) == null ? void 0 : t.month());
      }
    ), ue = () => {
      p.value = null, n.value = n.value.subtract(1, "month"), i.value && (a.value = A.value ? i.value.date() : null, c.value = j.value ? f.value.date() : null);
    }, ce = () => {
      p.value = null, n.value = n.value.add(1, "month"), a.value = A.value ? i.value.date() : null, c.value = j.value ? f.value.date() : null;
    }, de = (t) => {
      p.value = null, n.value = n.value.set("month", t), I.value = !1;
    }, fe = (t) => {
      p.value = null, n.value = n.value.set("year", t), b.value = !1;
    }, ve = () => {
      p.value = null, b.value ? v.value = v.value.subtract(11, "year") : n.value = n.value.subtract(1, "year");
    }, me = () => {
      p.value = null, b.value ? v.value = v.value.add(11, "year") : n.value = n.value.add(1, "year");
    }, pe = () => {
      b.value = !1, I.value = !I.value;
    }, he = (t) => {
      const o = n.value.date(t);
      return Object.values(g.value).filter(Boolean).find((r) => r.isSame(o));
    }, be = (t) => B.value ? d.value ? n.value.date(t).isBetween(
      g.value.from,
      g.value.to,
      null,
      "[]"
    ) : !1 : a.value && c.value && a.value <= t && c.value >= t, F = (t) => {
      const o = n.value.date(t);
      return l.disabledDate(o.toDate()) || l.minDate && o.isBefore(m(l.minDate), "day") || l.maxDate && o.isAfter(m(l.maxDate), "day");
    }, z = () => {
      B.value && (F(i.value.toDate()) || F(f.value.toDate())) || (y.value = !1, s(
        "update:modelValue",
        B.value ? [g.value.from, g.value.to].map((t) => t.toDate()) : i.value.toDate()
      ));
    }, ge = (t) => {
      s("update:isIndefinite", t);
    }, H = (t, o = !0) => {
      if (!B.value) {
        let x = m($.value, "MMMM YYYY").date(t);
        a.value = t, i.value = x, c.value = null, f.value = null, z();
        return;
      }
      let r = t && n.value.date(t);
      if (!y.value) {
        a.value = t, i.value = r, c.value = void 0, f.value = void 0, y.value = !0;
        return;
      }
      f.value = r, c.value = t, o && z();
    }, X = We((t) => {
      y.value && H(t, !1);
    }, 50), xe = () => {
      var o, r, x;
      const t = B.value ? (o = l.modelValue) == null ? void 0 : o[0] : l.modelValue;
      n.value = m(t), v.value = m(t), i.value = t && n.value, a.value = t && i.value.date(), !(!B.value || !t) && (f.value = m((r = l.modelValue) == null ? void 0 : r[1]), c.value = ((x = f.value) == null ? void 0 : x.month()) === n.value.month() ? f.value.date() : void 0);
    }, ye = (t) => {
      const o = t + 11, r = [];
      for (; t <= o; )
        r.push(t++);
      return r;
    };
    return xe(), (t, o) => (M(), k("div", {
      class: V(["p-6 w-fit rounded flex flex-col gap-y-7", e.position === "floating" ? "shadow-normal bg-white" : ""])
    }, [
      w("div", Pe, [
        O(Y(Ce), {
          modelValue: I.value,
          "onUpdate:modelValue": o[1] || (o[1] = (r) => I.value = r),
          distance: 10,
          position: "bottom",
          "is-popover": "",
          trigger: "click",
          "popper-options": { strategy: "fixed" }
        }, {
          menu: Q(() => [
            w("div", qe, [
              w("div", ze, [
                O(Y(J), {
                  "left-icon": "chevron-left",
                  "is-transparent": "",
                  onClick: ve
                }),
                w("div", {
                  class: "cursor-pointer hover:opacity-50 transition",
                  onClick: o[0] || (o[0] = (r) => b.value = !b.value)
                }, [
                  b.value ? (M(), k("div", He, E(T.value - 11) + " - " + E(T.value), 1)) : (M(), k("div", Xe, E(T.value), 1))
                ]),
                O(Y(J), {
                  "left-icon": "chevron-right",
                  "is-transparent": "",
                  onClick: me
                })
              ]),
              b.value ? (M(), k("div", Ke, [
                (M(!0), k(R, null, W(ye(T.value - 11), (r) => (M(), k("div", {
                  key: r,
                  class: V(["px-4 py-2 hover:border-oc-gray-200 border-2 border-transparent transition text-center rounded cursor-pointer", {
                    "!border-oc-primary bg-oc-primary text-white": n.value.year() === r
                  }]),
                  onClick: (x) => fe(r)
                }, E(r), 11, Qe))), 128))
              ])) : (M(), k("div", Ze, [
                (M(), k(R, null, W(_, (r, x) => w("div", {
                  key: r,
                  class: V(["px-4 py-2 hover:border-oc-gray-200 border-2 border-transparent transition text-center rounded cursor-pointer", {
                    "!border-oc-primary bg-oc-primary text-white": L.value === r
                  }]),
                  onClick: (K) => de(x)
                }, E(r), 11, et)), 64))
              ]))
            ])
          ]),
          default: Q(() => [
            w("span", {
              class: V([[h.value ? "pointer-events-none opacity-[.35]" : ""], "cursor-pointer hover:opacity-50 transition"]),
              onClick: Se(pe, ["stop"])
            }, E($.value), 3)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        w("div", {
          class: V(["flex gap-x-3", [h.value ? "pointer-events-none opacity-[.35]" : ""]])
        }, [
          O(Y(Z), {
            name: "chevron-down",
            class: "rotate-90 cursor-pointer",
            onClick: ue
          }),
          O(Y(Z), {
            name: "chevron-down",
            class: "-rotate-90 cursor-pointer",
            onClick: ce
          })
        ], 2)
      ]),
      w("div", {
        class: "grid grid-cols-7 w-fit gap-3",
        onMouseout: o[2] || (o[2] = (r) => Y(X)(void 0))
      }, [
        (M(!0), k(R, null, W(N.value, (r) => {
          var x;
          return M(), k("div", {
            key: r,
            class: V(["w-9 rounded-full flex cursor-pointer items-center relative justify-center h-9", [
              he(r) ? "bg-oc-primary text-white" : "hover:bg-oc-primary-50-tr",
              F(r) ? "pointer-events-none opacity-[.35]" : "",
              B.value ? {
                ...be(r) && {
                  "before:bg-oc-primary-50-tr before:px-3 before:w-[calc(100%+0.5rem)] before:h-full before:absolute": !0,
                  "before:rounded-l-full before:left-0 before:!w-[calc(100%+0.25rem)]": g.value.from.isSame(n.value.date(r)),
                  "before:rounded-r-full before:right-0 before:!w-[calc(100%+0.25rem)]": (x = g.value.to) == null ? void 0 : x.isSame(n.value.date(r))
                },
                "before:bg-transparent": a.value !== null && a.value === c.value
              } : ""
            ]]),
            onClick: (K) => H(r),
            onMouseover: (K) => Y(X)(r)
          }, E(r), 43, tt);
        }), 128))
      ], 32),
      De(t.$slots, "bottom", {}, () => [
        e.isIndefinite ? (M(), k("span", nt, [
          O(Y(ke), {
            modelValue: h.value,
            "onUpdate:modelValue": [
              o[3] || (o[3] = (r) => h.value = r),
              ge
            ],
            label: e.inDefiniteLabel
          }, null, 8, ["modelValue", "label"])
        ])) : Me("", !0)
      ]),
      w("div", rt, [
        O(Y(J), {
          label: "Reset",
          class: "w-[72px]",
          "is-disabled": h.value,
          onClick: o[4] || (o[4] = (r) => s("reset-calendar"))
        }, null, 8, ["is-disabled"])
      ])
    ], 2));
  }
};
m.extend(ae);
m.extend(le);
m.extend(se);
m.extend(ne);
export {
  gt as Calendar
};
