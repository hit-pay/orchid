import { openBlock as y, createElementBlock as k, normalizeClass as Y, createElementVNode as A, createTextVNode as $e, toDisplayString as H, createCommentVNode as j, createBlock as re, unref as M, normalizeProps as Fe, mergeProps as Re, withCtx as Z, renderSlot as U, createVNode as F, ref as B, computed as C, withModifiers as Oe, Fragment as xe, renderList as we, watch as We, withDirectives as le, Transition as Ye, normalizeStyle as Ze, vShow as Te, onMounted as Ue } from "vue";
import E from "dayjs";
import { _ as Me } from "./_plugin-vue_export-helper-CHgC5LLL.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
/* empty css                                                                  */
import { c as ue, g as ce, i as Je, b as Xe, a as De, r as qe } from "./isObject-DJSDUCEw.js";
import { _ } from "./OcIcon-CJgBICxh.js";
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
import { clickOutside as Ae } from "./directives/clickOutside.js";
import { _ as Ee } from "./OcPopper-C11OgQAj.js";
const Ge = { class: "flex flex-col gap-y-2 w-full" }, Qe = { class: "flex gap-x-1 items-center" }, Ke = {
  key: 0,
  class: "text-oc-error"
}, _e = {
  key: 0,
  class: "px-3 py-2"
}, et = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, tt = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, nt = {
  __name: "OcBaseInput",
  props: {
    label: String,
    hint: String,
    errorMessage: String,
    isRequired: Boolean,
    labelIcon: String,
    tooltipText: String,
    tooltipOptions: Object,
    labelClass: String
  },
  setup(e) {
    return (a, n) => (y(), k("div", Ge, [
      e.label ? (y(), k("label", {
        key: 0,
        class: Y(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        A("span", Qe, [
          $e(H(e.label) + " ", 1),
          e.isRequired ? (y(), k("span", Ke, "*")) : j("", !0)
        ]),
        e.labelIcon ? (y(), re(M(Rt), Fe(Re({ key: 0 }, e.tooltipOptions)), {
          popper: Z(() => [
            U(a.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (y(), k("div", _e, H(e.tooltipText), 1)) : j("", !0)
            ])
          ]),
          default: Z(() => [
            F(M(_), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : j("", !0)
      ], 2)) : j("", !0),
      U(a.$slots, "default"),
      (e.hint || a.$slots.hint) && !e.errorMessage ? (y(), k("div", et, [
        U(a.$slots, "hint", {}, () => [
          $e(H(e.hint), 1)
        ])
      ])) : j("", !0),
      e.errorMessage ? (y(), k("div", tt, H(e.errorMessage), 1)) : j("", !0)
    ]));
  }
}, at = ["disabled"], rt = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, ot = {
  __name: "OcButton",
  props: {
    label: String,
    isDisabled: Boolean,
    isLoading: Boolean,
    leftIcon: String,
    iconClass: [Array, String],
    additionalAreaIcon: String,
    isAdditionalArea: Boolean,
    rightIcon: String,
    isActive: Boolean,
    isTransparent: Boolean,
    isRoundedFull: Boolean,
    variant: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "default"
    }
  },
  emits: ["addition-click"],
  setup(e) {
    const a = e, n = B(!1), d = C(() => (a.leftIcon || a.rightIcon) && !a.label), t = C(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), s = C(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), l = C(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), o = C(
      () => !n.value && !a.isTransparent && !a.isDisabled && !a.isLoading && !a.isActive && s.value[a.variant]
    ), m = C(() => ({
      primary: a.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: a.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: a.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), h = C(() => ({
      default: a.isTransparent ? "py-3" : d.value ? "p-3" : "px-4 py-3",
      small: (a.isTransparent ? "" : d.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (a.isTransparent ? "py-3 " : d.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), c = C(() => a.isRoundedFull ? "rounded-full" : "rounded"), p = C(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (b, v) => (y(), k("div", {
      class: Y(["flex overflow-hidden", [o.value, c.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      A("button", {
        class: Y(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          m.value[e.variant],
          h.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: v[0] || (v[0] = ($) => n.value = !0),
        onMouseup: v[1] || (v[1] = ($) => n.value = !1),
        onMouseleave: v[2] || (v[2] = ($) => n.value = !1)
      }, [
        e.isLoading ? (y(), re(M(_), {
          key: 0,
          width: p.value[e.size],
          height: p.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : j("", !0),
        e.leftIcon && !e.isLoading ? (y(), re(M(_), {
          key: 1,
          width: p.value[e.size],
          class: Y(e.iconClass),
          height: p.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : j("", !0),
        e.label ? (y(), k("span", rt, H(e.label), 1)) : U(b.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (y(), re(M(_), {
          key: 4,
          width: p.value[e.size],
          height: p.value[e.size],
          name: e.rightIcon,
          class: Y(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : j("", !0)
      ], 42, at),
      e.isAdditionalArea && !e.isTransparent ? (y(), k("div", {
        key: 0,
        class: Y(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [t.value[e.size], e.variant]]),
        onClick: v[3] || (v[3] = Oe(($) => b.$emit("addition-click"), ["stop"]))
      }, [
        U(b.$slots, "additional-content", {}, () => [
          F(M(_), {
            name: e.additionalAreaIcon,
            class: Y(l.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : j("", !0)
    ], 2));
  }
}, Se = /* @__PURE__ */ Me(ot, [["__scopeId", "data-v-af49bb32"]]), it = ["value", "checked", "disabled"], st = {
  __name: "OcCheckbox",
  props: {
    modelValue: Boolean,
    isPartial: Boolean,
    isDisabled: Boolean,
    label: String,
    topLabel: String,
    hint: String,
    errorMessage: String,
    isButtonVariant: Boolean
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { emit: a }) {
    const n = e, d = a, t = C(() => [
      n.modelValue ? n.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : n.errorMessage ? "border-oc-error" : n.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      n.errorMessage && n.modelValue && !n.isDisabled ? "!bg-oc-error" : "",
      n.errorMessage && !n.isDisabled ? "!border-oc-error" : "",
      n.isPartial ? n.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), s = () => d("update:modelValue", n.isDisabled ? "" : !n.modelValue);
    return (l, o) => (y(), re(M(nt), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Z(() => [
        A("label", {
          class: Y(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          A("div", {
            class: Y(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", t.value])
          }, [
            e.isPartial || e.modelValue ? (y(), re(M(_), {
              key: 0,
              class: Y([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : j("", !0)
          ], 2),
          e.label ? (y(), k("span", {
            key: 0,
            class: Y({ "text-sm": !e.isButtonVariant })
          }, H(e.label), 3)) : j("", !0),
          A("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: s
          }, null, 40, it),
          U(l.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
};
var Ie = { exports: {} };
(function(e, a) {
  (function(n, d) {
    e.exports = d();
  })(ue, function() {
    return function(n, d, t) {
      d.prototype.isBetween = function(s, l, o, m) {
        var h = t(s), c = t(l), p = (m = m || "()")[0] === "(", b = m[1] === ")";
        return (p ? this.isAfter(h, o) : !this.isBefore(h, o)) && (b ? this.isBefore(c, o) : !this.isAfter(c, o)) || (p ? this.isBefore(h, o) : !this.isAfter(h, o)) && (b ? this.isAfter(c, o) : !this.isBefore(c, o));
      };
    };
  });
})(Ie);
var lt = Ie.exports;
const Ve = /* @__PURE__ */ ce(lt);
var Le = { exports: {} };
(function(e, a) {
  (function(n, d) {
    e.exports = d();
  })(ue, function() {
    return function(n, d) {
      d.prototype.isSameOrBefore = function(t, s) {
        return this.isSame(t, s) || this.isBefore(t, s);
      };
    };
  });
})(Le);
var ut = Le.exports;
const ze = /* @__PURE__ */ ce(ut);
var je = { exports: {} };
(function(e, a) {
  (function(n, d) {
    e.exports = d();
  })(ue, function() {
    return function(n, d) {
      d.prototype.isSameOrAfter = function(t, s) {
        return this.isSame(t, s) || this.isAfter(t, s);
      };
    };
  });
})(je);
var ct = je.exports;
const Ne = /* @__PURE__ */ ce(ct);
var Pe = { exports: {} };
(function(e, a) {
  (function(n, d) {
    e.exports = d();
  })(ue, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, d = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, t = /\d/, s = /\d\d/, l = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, m = {}, h = function(i) {
      return (i = +i) + (i > 68 ? 1900 : 2e3);
    }, c = function(i) {
      return function(f) {
        this[i] = +f;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(i) {
      (this.zone || (this.zone = {})).offset = function(f) {
        if (!f || f === "Z") return 0;
        var x = f.match(/([+-]|\d\d)/g), w = 60 * x[1] + (+x[2] || 0);
        return w === 0 ? 0 : x[0] === "+" ? -w : w;
      }(i);
    }], b = function(i) {
      var f = m[i];
      return f && (f.indexOf ? f : f.s.concat(f.f));
    }, v = function(i, f) {
      var x, w = m.meridiem;
      if (w) {
        for (var N = 1; N <= 24; N += 1) if (i.indexOf(w(N, 0, f)) > -1) {
          x = N > 12;
          break;
        }
      } else x = i === (f ? "pm" : "PM");
      return x;
    }, $ = { A: [o, function(i) {
      this.afternoon = v(i, !1);
    }], a: [o, function(i) {
      this.afternoon = v(i, !0);
    }], Q: [t, function(i) {
      this.month = 3 * (i - 1) + 1;
    }], S: [t, function(i) {
      this.milliseconds = 100 * +i;
    }], SS: [s, function(i) {
      this.milliseconds = 10 * +i;
    }], SSS: [/\d{3}/, function(i) {
      this.milliseconds = +i;
    }], s: [l, c("seconds")], ss: [l, c("seconds")], m: [l, c("minutes")], mm: [l, c("minutes")], H: [l, c("hours")], h: [l, c("hours")], HH: [l, c("hours")], hh: [l, c("hours")], D: [l, c("day")], DD: [s, c("day")], Do: [o, function(i) {
      var f = m.ordinal, x = i.match(/\d+/);
      if (this.day = x[0], f) for (var w = 1; w <= 31; w += 1) f(w).replace(/\[|\]/g, "") === i && (this.day = w);
    }], w: [l, c("week")], ww: [s, c("week")], M: [l, c("month")], MM: [s, c("month")], MMM: [o, function(i) {
      var f = b("months"), x = (b("monthsShort") || f.map(function(w) {
        return w.slice(0, 3);
      })).indexOf(i) + 1;
      if (x < 1) throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [o, function(i) {
      var f = b("months").indexOf(i) + 1;
      if (f < 1) throw new Error();
      this.month = f % 12 || f;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(i) {
      this.year = h(i);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function L(i) {
      var f, x;
      f = i, x = m && m.formats;
      for (var w = (i = f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(G, J, R) {
        var P = R && R.toUpperCase();
        return J || x[R] || n[R] || x[P].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(X, q, Q) {
          return q || Q.slice(1);
        });
      })).match(d), N = w.length, D = 0; D < N; D += 1) {
        var S = w[D], O = $[S], T = O && O[0], I = O && O[1];
        w[D] = I ? { regex: T, parser: I } : S.replace(/^\[|\]$/g, "");
      }
      return function(G) {
        for (var J = {}, R = 0, P = 0; R < N; R += 1) {
          var X = w[R];
          if (typeof X == "string") P += X.length;
          else {
            var q = X.regex, Q = X.parser, ne = G.slice(P), K = q.exec(ne)[0];
            Q.call(J, K), G = G.replace(K, "");
          }
        }
        return function(W) {
          var ee = W.afternoon;
          if (ee !== void 0) {
            var z = W.hours;
            ee ? z < 12 && (W.hours += 12) : z === 12 && (W.hours = 0), delete W.afternoon;
          }
        }(J), J;
      };
    }
    return function(i, f, x) {
      x.p.customParseFormat = !0, i && i.parseTwoDigitYear && (h = i.parseTwoDigitYear);
      var w = f.prototype, N = w.parse;
      w.parse = function(D) {
        var S = D.date, O = D.utc, T = D.args;
        this.$u = O;
        var I = T[1];
        if (typeof I == "string") {
          var G = T[2] === !0, J = T[3] === !0, R = G || J, P = T[2];
          J && (P = T[2]), m = this.$locale(), !G && P && (m = x.Ls[P]), this.$d = function(ne, K, W, ee) {
            try {
              if (["x", "X"].indexOf(K) > -1) return new Date((K === "X" ? 1e3 : 1) * ne);
              var z = L(K)(ne), ae = z.year, te = z.month, de = z.day, fe = z.hours, r = z.minutes, g = z.seconds, u = z.milliseconds, V = z.zone, oe = z.week, me = /* @__PURE__ */ new Date(), ve = de || (ae || te ? 1 : me.getDate()), pe = ae || me.getFullYear(), ie = 0;
              ae && !te || (ie = te > 0 ? te - 1 : me.getMonth());
              var se, he = fe || 0, ge = r || 0, be = g || 0, ye = u || 0;
              return V ? new Date(Date.UTC(pe, ie, ve, he, ge, be, ye + 60 * V.offset * 1e3)) : W ? new Date(Date.UTC(pe, ie, ve, he, ge, be, ye)) : (se = new Date(pe, ie, ve, he, ge, be, ye), oe && (se = ee(se).week(oe).toDate()), se);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, I, O, x), this.init(), P && P !== !0 && (this.$L = this.locale(P).$L), R && S != this.format(I) && (this.$d = /* @__PURE__ */ new Date("")), m = {};
        } else if (I instanceof Array) for (var X = I.length, q = 1; q <= X; q += 1) {
          T[1] = I[q - 1];
          var Q = x.apply(this, T);
          if (Q.isValid()) {
            this.$d = Q.$d, this.$L = Q.$L, this.init();
            break;
          }
          q === X && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else N.call(this, D);
      };
    };
  });
})(Pe);
var dt = Pe.exports;
const He = /* @__PURE__ */ ce(dt);
var ft = "[object Symbol]";
function mt(e) {
  return typeof e == "symbol" || Je(e) && Xe(e) == ft;
}
var vt = /\s/;
function pt(e) {
  for (var a = e.length; a-- && vt.test(e.charAt(a)); )
    ;
  return a;
}
var ht = /^\s+/;
function gt(e) {
  return e && e.slice(0, pt(e) + 1).replace(ht, "");
}
var Be = NaN, bt = /^[-+]0x[0-9a-f]+$/i, yt = /^0b[01]+$/i, xt = /^0o[0-7]+$/i, wt = parseInt;
function Ce(e) {
  if (typeof e == "number")
    return e;
  if (mt(e))
    return Be;
  if (De(e)) {
    var a = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = De(a) ? a + "" : a;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = gt(e);
  var n = yt.test(e);
  return n || xt.test(e) ? wt(e.slice(2), n ? 2 : 8) : bt.test(e) ? Be : +e;
}
var ke = function() {
  return qe.Date.now();
}, St = "Expected a function", kt = Math.max, Dt = Math.min;
function Mt(e, a, n) {
  var d, t, s, l, o, m, h = 0, c = !1, p = !1, b = !0;
  if (typeof e != "function")
    throw new TypeError(St);
  a = Ce(a) || 0, De(n) && (c = !!n.leading, p = "maxWait" in n, s = p ? kt(Ce(n.maxWait) || 0, a) : s, b = "trailing" in n ? !!n.trailing : b);
  function v(S) {
    var O = d, T = t;
    return d = t = void 0, h = S, l = e.apply(T, O), l;
  }
  function $(S) {
    return h = S, o = setTimeout(f, a), c ? v(S) : l;
  }
  function L(S) {
    var O = S - m, T = S - h, I = a - O;
    return p ? Dt(I, s - T) : I;
  }
  function i(S) {
    var O = S - m, T = S - h;
    return m === void 0 || O >= a || O < 0 || p && T >= s;
  }
  function f() {
    var S = ke();
    if (i(S))
      return x(S);
    o = setTimeout(f, L(S));
  }
  function x(S) {
    return o = void 0, b && d ? v(S) : (d = t = void 0, l);
  }
  function w() {
    o !== void 0 && clearTimeout(o), h = 0, d = m = t = o = void 0;
  }
  function N() {
    return o === void 0 ? l : x(ke());
  }
  function D() {
    var S = ke(), O = i(S);
    if (d = arguments, t = this, m = S, O) {
      if (o === void 0)
        return $(m);
      if (p)
        return clearTimeout(o), o = setTimeout(f, a), v(m);
    }
    return o === void 0 && (o = setTimeout(f, a)), l;
  }
  return D.cancel = w, D.flush = N, D;
}
const $t = { class: "flex items-center justify-between" }, Bt = { class: "flex flex-col gap-2 p-3" }, Ct = { class: "flex justify-between items-center" }, Ot = { key: 0 }, Yt = { key: 1 }, Tt = {
  key: 0,
  class: "grid grid-cols-3 gap-3"
}, At = ["onClick"], Et = {
  key: 1,
  class: "grid grid-cols-3 gap-3"
}, It = ["onClick"], Vt = ["onClick", "onMouseover"], Lt = { key: 0 }, zt = { class: "flex gap-x-3 justify-end" }, dn = {
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
      validator: (e) => Array.isArray(e) ? E(e[0]).isSameOrBefore(E(e[1])) : !0
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
  setup(e, { emit: a }) {
    E.extend(Ve), E.extend(ze), E.extend(Ne), E.extend(He);
    const n = e, d = a, t = B(), s = B(), l = B(), o = B(), m = B(), h = B(), c = B(), p = B(!1), b = B(!1), v = B(!1), $ = B(!1), L = C(() => n.type === "range"), i = C(() => {
      const g = t.value.endOf("month").date();
      return Array.from({ length: g }, (u, V) => V + 1);
    }), f = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], x = C(() => t.value.format("MMMM YYYY")), w = C(
      () => v.value ? h.value.format("YYYY") : t.value.format("YYYY")
    ), N = C(() => t.value.format("MMM")), D = C(() => {
      const r = s.value, g = l.value ?? c.value, u = [r, g];
      return g && (r != null && r.isAfter(g)) && u.reverse(), {
        from: u[0],
        to: u[1]
      };
    }), S = C(
      () => Object.values(D.value).filter(Boolean).length > 1
    ), O = C(() => t.value.month()), T = C(
      () => {
        var r;
        return O.value === ((r = s.value) == null ? void 0 : r.month());
      }
    ), I = C(
      () => {
        var r;
        return O.value === ((r = l.value) == null ? void 0 : r.month());
      }
    ), G = () => {
      c.value = null, t.value = t.value.subtract(1, "month"), s.value && (o.value = T.value ? s.value.date() : null, m.value = I.value ? l.value.date() : null);
    }, J = () => {
      c.value = null, t.value = t.value.add(1, "month"), o.value = T.value ? s.value.date() : null, m.value = I.value ? l.value.date() : null;
    }, R = (r) => {
      c.value = null, t.value = t.value.set("month", r), $.value = !1;
    }, P = (r) => {
      c.value = null, t.value = t.value.set("year", r), v.value = !1;
    }, X = () => {
      c.value = null, v.value ? h.value = h.value.subtract(11, "year") : t.value = t.value.subtract(1, "year");
    }, q = () => {
      c.value = null, v.value ? h.value = h.value.add(11, "year") : t.value = t.value.add(1, "year");
    }, Q = () => {
      v.value = !1, $.value = !$.value;
    }, ne = (r) => {
      const g = t.value.date(r);
      return Object.values(D.value).filter(Boolean).find((u) => u.isSame(g));
    }, K = (r) => L.value ? S.value ? t.value.date(r).isBetween(
      D.value.from,
      D.value.to,
      null,
      "[]"
    ) : !1 : o.value && m.value && o.value <= r && m.value >= r, W = (r) => {
      const g = t.value.date(r);
      return n.disabledDate(g.toDate()) || n.minDate && g.isBefore(E(n.minDate), "day") || n.maxDate && g.isAfter(E(n.maxDate), "day");
    }, ee = () => {
      L.value && (W(s.value.toDate()) || W(l.value.toDate())) || (b.value = !1, d(
        "update:modelValue",
        L.value ? [D.value.from, D.value.to].map((r) => r.toDate()) : s.value.toDate()
      ));
    }, z = (r) => {
      d("update:isIndefinite", r);
    }, ae = (r, g = !0) => {
      if (!L.value) {
        let V = E(x.value, "MMMM YYYY").date(r);
        o.value = r, s.value = V, m.value = null, l.value = null, ee();
        return;
      }
      let u = r && t.value.date(r);
      if (!b.value) {
        o.value = r, s.value = u, m.value = void 0, l.value = void 0, b.value = !0;
        return;
      }
      l.value = u, m.value = r, g && ee();
    }, te = Mt((r) => {
      b.value && ae(r, !1);
    }, 50), de = () => {
      var g, u, V;
      const r = L.value ? (g = n.modelValue) == null ? void 0 : g[0] : n.modelValue;
      t.value = E(r), h.value = E(r), s.value = r && t.value, o.value = r && s.value.date(), !(!L.value || !r) && (l.value = E((u = n.modelValue) == null ? void 0 : u[1]), m.value = ((V = l.value) == null ? void 0 : V.month()) === t.value.month() ? l.value.date() : void 0);
    }, fe = (r) => {
      const g = r + 11, u = [];
      for (; r <= g; )
        u.push(r++);
      return u;
    };
    return de(), (r, g) => (y(), k("div", {
      class: Y(["p-6 w-fit rounded flex flex-col gap-y-7", e.position === "floating" ? "shadow-normal bg-white" : ""])
    }, [
      A("div", $t, [
        F(M(Nt), {
          modelValue: $.value,
          "onUpdate:modelValue": g[1] || (g[1] = (u) => $.value = u),
          distance: 10,
          position: "bottom",
          "is-popover": "",
          trigger: "click",
          "popper-options": { strategy: "fixed" }
        }, {
          menu: Z(() => [
            A("div", Bt, [
              A("div", Ct, [
                F(M(Se), {
                  "left-icon": "chevron-left",
                  "is-transparent": "",
                  onClick: X
                }),
                A("div", {
                  class: "cursor-pointer hover:opacity-50 transition",
                  onClick: g[0] || (g[0] = (u) => v.value = !v.value)
                }, [
                  v.value ? (y(), k("div", Ot, H(w.value - 11) + " - " + H(w.value), 1)) : (y(), k("div", Yt, H(w.value), 1))
                ]),
                F(M(Se), {
                  "left-icon": "chevron-right",
                  "is-transparent": "",
                  onClick: q
                })
              ]),
              v.value ? (y(), k("div", Tt, [
                (y(!0), k(xe, null, we(fe(w.value - 11), (u) => (y(), k("div", {
                  key: u,
                  class: Y(["px-4 py-2 hover:border-oc-gray-200 border-2 border-transparent transition text-center rounded cursor-pointer", {
                    "!border-oc-primary bg-oc-primary text-white": t.value.year() === u
                  }]),
                  onClick: (V) => P(u)
                }, H(u), 11, At))), 128))
              ])) : (y(), k("div", Et, [
                (y(), k(xe, null, we(f, (u, V) => A("div", {
                  key: u,
                  class: Y(["px-4 py-2 hover:border-oc-gray-200 border-2 border-transparent transition text-center rounded cursor-pointer", {
                    "!border-oc-primary bg-oc-primary text-white": N.value === u
                  }]),
                  onClick: (oe) => R(V)
                }, H(u), 11, It)), 64))
              ]))
            ])
          ]),
          default: Z(() => [
            A("span", {
              class: Y([[p.value ? "pointer-events-none opacity-[.35]" : ""], "cursor-pointer hover:opacity-50 transition"]),
              onClick: Oe(Q, ["stop"])
            }, H(x.value), 3)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        A("div", {
          class: Y(["flex gap-x-3", [p.value ? "pointer-events-none opacity-[.35]" : ""]])
        }, [
          F(M(_), {
            name: "chevron-down",
            class: "rotate-90 cursor-pointer",
            onClick: G
          }),
          F(M(_), {
            name: "chevron-down",
            class: "-rotate-90 cursor-pointer",
            onClick: J
          })
        ], 2)
      ]),
      A("div", {
        class: "grid grid-cols-7 w-fit gap-3",
        onMouseout: g[2] || (g[2] = (u) => M(te)(void 0))
      }, [
        (y(!0), k(xe, null, we(i.value, (u) => {
          var V;
          return y(), k("div", {
            key: u,
            class: Y(["w-9 rounded-full flex cursor-pointer items-center relative justify-center h-9", [
              ne(u) ? "bg-oc-primary text-white" : "hover:bg-oc-primary-50-tr",
              W(u) ? "pointer-events-none opacity-[.35]" : "",
              L.value ? {
                ...K(u) && {
                  "before:bg-oc-primary-50-tr before:px-3 before:w-[calc(100%+0.5rem)] before:h-full before:absolute": !0,
                  "before:rounded-l-full before:left-0 before:!w-[calc(100%+0.25rem)]": D.value.from.isSame(t.value.date(u)),
                  "before:rounded-r-full before:right-0 before:!w-[calc(100%+0.25rem)]": (V = D.value.to) == null ? void 0 : V.isSame(t.value.date(u))
                },
                "before:bg-transparent": o.value !== null && o.value === m.value
              } : ""
            ]]),
            onClick: (oe) => ae(u),
            onMouseover: (oe) => M(te)(u)
          }, H(u), 43, Vt);
        }), 128))
      ], 32),
      U(r.$slots, "bottom", {}, () => [
        e.isIndefinite ? (y(), k("span", Lt, [
          F(M(st), {
            modelValue: p.value,
            "onUpdate:modelValue": [
              g[3] || (g[3] = (u) => p.value = u),
              z
            ],
            label: e.inDefiniteLabel
          }, null, 8, ["modelValue", "label"])
        ])) : j("", !0)
      ]),
      A("div", zt, [
        F(M(Se), {
          label: "Reset",
          class: "w-[72px]",
          "is-disabled": p.value,
          onClick: g[4] || (g[4] = (u) => d("reset-calendar"))
        }, null, 8, ["is-disabled"])
      ])
    ], 2));
  }
};
E.extend(Ve);
E.extend(ze);
E.extend(Ne);
E.extend(He);
const jt = {
  __name: "OcDropdown",
  props: {
    distance: {
      type: Number,
      default: 4
    },
    skidding: {
      type: Number,
      default: 0
    },
    isDisabled: Boolean,
    menuClasses: String,
    placement: {
      type: String,
      default: "bottom-start"
    },
    popperOptions: {
      type: Object,
      default: () => ({
        strategy: "fixed"
      })
    },
    maxMenuHeight: Number,
    popperStyle: Object,
    popperClass: [String, Array, Object],
    modelValue: Boolean,
    preventClickOutside: Boolean,
    isAttachToBody: Boolean
  },
  emits: {
    "update:modelValue": [],
    scroll: []
  },
  setup(e, { expose: a, emit: n }) {
    const d = n, t = e, s = B(), l = B(), o = async (b) => {
      b != null && b.target && (t.isDisabled || (setTimeout(() => {
        var v, $;
        return ($ = (v = s.value) == null ? void 0 : v.popperInstance) == null ? void 0 : $.update();
      }, 0), d("update:modelValue", !t.modelValue)));
    }, m = (b) => {
      t.isAttachToBody && !t.preventClickOutside && s.value.checkElementIsInsidePopper(b.target) || t.modelValue && !t.preventClickOutside && d("update:modelValue", !1);
    }, h = B(), c = B(0);
    return We(() => t.modelValue, async () => {
      const b = window.innerHeight || document.documentElement.clientHeight, v = h.value.getBoundingClientRect().top, $ = b - h.value.getBoundingClientRect().bottom, L = Math.max(v, $), f = L - (2 + (L === v ? 2.5 : 0)) * 16;
      c.value = f > 0 ? f : 0, s.value.popperInstance.update();
    }), a({
      dropdownScroll: l,
      toggleDropdown: o,
      popper: s
    }), (b, v) => le((y(), k("span", {
      ref_key: "parentElement",
      ref: h,
      class: "flex w-[inherit]"
    }, [
      F(M(Ee), {
        ref_key: "popper",
        ref: s,
        placement: e.placement,
        distance: e.distance,
        "popper-class": e.popperClass,
        skidding: e.skidding,
        "popper-style": e.popperStyle,
        "popper-options": e.popperOptions,
        "is-attach-to-body": e.isAttachToBody
      }, {
        popper: Z(() => [
          F(Ye, { name: "fade" }, {
            default: Z(() => [
              le(A("div", {
                ref_key: "dropdownScroll",
                ref: l,
                class: Y([e.menuClasses, "rounded bg-oc-bg-light shadow min-w-[162px] overflow-y-auto"]),
                style: Ze({
                  maxHeight: (e.maxMenuHeight || c.value) - 68 + "px"
                }),
                onScroll: v[0] || (v[0] = ($) => b.$emit("scroll", $))
              }, [
                U(b.$slots, "menu", { isPopoverOpen: e.modelValue }, void 0, !0)
              ], 38), [
                [Te, e.modelValue]
              ])
            ]),
            _: 3
          })
        ]),
        default: Z(() => [
          A("div", {
            class: "w-[inherit] flex",
            onClick: o
          }, [
            U(b.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["placement", "distance", "popper-class", "skidding", "popper-style", "popper-options", "is-attach-to-body"])
    ])), [
      [M(Ae), m]
    ]);
  }
}, Nt = /* @__PURE__ */ Me(jt, [["__scopeId", "data-v-28a0af68"]]), Pt = { class: "oc-tooltip-wrapper" }, Ht = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Ft = {
  __name: "OcTooltip",
  props: {
    popperClass: {
      type: String,
      default: "bg-oc-bg-light"
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    skidding: {
      type: Number,
      default: 0
    },
    transitionName: {
      type: String,
      default: "fade"
    },
    hideAfter: Number,
    popperOptions: Object,
    trigger: {
      type: String,
      default: "hover",
      validator: (e) => ["hover", "click"].includes(e)
    },
    position: {
      type: String,
      default: "bottom",
      validator: (e) => [
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-start",
        "bottom",
        "bottom-end",
        "left-start",
        "left",
        "left-end"
      ].includes(e)
    },
    arrowHidden: {
      type: Boolean,
      default: !1
    },
    isPopover: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const a = e, n = B(!1), d = B(), t = B(), s = B(), l = () => {
      n.value = !0, s.value.popperInstance.update(), a.hideAfter && setTimeout(() => o(), a.hideAfter);
    }, o = () => n.value = !1;
    Ue(() => {
      if (a.trigger === "hover") {
        const h = ["mouseenter", "focus"], c = ["mouseleave", "blur"];
        h.forEach((p) => {
          d.value.addEventListener(p, l);
        }), c.forEach((p) => {
          d.value.addEventListener(p, o);
        }), a.isPopover && (h.forEach((p) => {
          t.value.addEventListener(p, l);
        }), c.forEach((p) => {
          t.value.addEventListener(p, o);
        }));
      } else
        d.value.addEventListener("click", () => n.value ? o() : l());
    });
    const m = () => {
      n.value && o();
    };
    return (h, c) => le((y(), k("span", Pt, [
      F(M(Ee), {
        ref_key: "popper",
        ref: s,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Z(() => [
          F(Ye, { name: e.transitionName }, {
            default: Z(() => [
              le(A("div", {
                ref_key: "popperBodyEl",
                ref: t,
                class: Y(["oc-tooltip", e.popperClass])
              }, [
                U(h.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? j("", !0) : (y(), k("div", Ht))
              ], 2), [
                [Te, n.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Z(() => [
          A("div", {
            ref_key: "triggerEl",
            ref: d,
            class: "w-[inherit] relative"
          }, [
            U(h.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [M(Ae), m]
    ]);
  }
}, Rt = /* @__PURE__ */ Me(Ft, [["__scopeId", "data-v-a902efc5"]]);
export {
  Se as B,
  Nt as D,
  Rt as T,
  nt as _,
  st as a,
  dn as b,
  He as c
};
