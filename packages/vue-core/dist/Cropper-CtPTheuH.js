import { defineAsyncComponent as q, ref as z, onMounted as pe, watch as ye, openBlock as m, createElementBlock as y, computed as Y, createBlock as F, unref as A, withCtx as X, createElementVNode as C, normalizeClass as b, createCommentVNode as x, toDisplayString as U, renderSlot as T, createTextVNode as be, normalizeProps as ke, mergeProps as Se, createVNode as oe, withModifiers as we, withDirectives as xe, Transition as _e, vShow as De, Teleport as Oe, normalizeStyle as Me, Fragment as ur, renderList as fr } from "vue";
import ee from "dayjs";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import { createPopper as Ye } from "@popperjs/core";
const wr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
};
q(() => import("./OcLineChart-D0z2Bctc-BuAH-wZq-BjB-2UeV-C1c4Rqu_-Dk2WcEDe-DA1MkJkv-CAZRdOaU-bGAxwr72-DpfRppcj-DI6KUfLU-B3YoITTo-CuYJe0aO-PTEb0ARZ-D1Z9daMT-D8qe4I11-DuRYa4Tx-BctExbX8-DceJ03Uu-COAG6AdF-C9PislHB-CSN0pEiK-CX-HWIdZ-9-WPWxXP-CIITiz7f.js"));
q(() => import("./OcPieChart-Nfalnu3g-DVLzSA0y-BruL1fVX-CXhm3T6B-G7Srd_Lp-DRaib-q7-B68_X37X-CbFAVZsR-zAn39g78-bM_4bi4P-DkW0Bk40-B8ZszLxm-BvLDo1Lk-Btmr8k37-lsklD7xS-BhdRMwVI-CS-sMuPc-COAUiXmX-Bw02qqvC-DEFHtlI7-C1HeVgxe-CIXVzXI8-BNnyQUgK-CxdsLIsn.js"));
q(() => import("./OcBarChart-B44tLq7l-CsW2e_HJ-C7lrqekI-DnD68uLd-LAJLcb6d-_fsne0HV-exHjK1Ih-DlktopAB-B7jypgX4-B1lHt1NC--uXnbHQF-dwdpwWfT-FG990gOc-B8pYaLDY-DFqI73Dz-Cqf_FsBN-BtXxhDTK-BqOusRcz-BdYqo4HB-9dhxZDea-DbBJTRaG-Lqbq_3Ud-CWCxcpbR-DUVyD7US.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-BnH-hbuu-6oOGXcF--DxBUuGcn-6nNmYnFh-DY1nWhAk-DSFY-XVy-C32AFymJ-CRJt_Wmb-BEtn0p-2-D-Z5rvOo-WShcmG1e-CvkkPIff-DYGH8jcE-fI1bRrJk-wauFkPaq-CKf2DCI1-CDmUzovb-BlV-A-dq-dMFCoZgq-a6q5wnLu-Dkgh65pC-DqPCfG5s-BL6oWkdr.js"));
var xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vi = typeof global == "object" && global && global.Object === Object && global, Ci = typeof self == "object" && self && self.Object === Object && self, zi = Vi || Ci || Function("return this")(), Ke = zi.Symbol;
Ke && Ke.toStringTag;
Ke && Ke.toStringTag;
const ji = ["width", "height", "viewBox"], Ae = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, ji));
  }
};
q(() => import("./OcModalCropper-DI2c75uE-B2gKET0s-BrqGOpcn-BA7k90xB-BDxloh2h-DYM8nPeZ-DvtSVeif-DTwnokbn-CbyW_c0i-D52IVlMB-D7seZRX_-DjOylXTy-BrEwQijW-IB1HaOhO-Cr8ZKUP2-D0BjS6j0-BbmAWDWZ-Bq1E2Kuh-DHg4p1Br-BGodGxbY-Bnrr8Jgq-DAqPpzrc-DaxZffr--Bd8K6Oyh.js"));
q(() => import("./OcCropper-CosaNdTf-DC4QVqTg-BfA-IuYG-BXB-J76i-Cdi44VXO-B32QEYmH-B3qZBV9u-CHMvllHt-DN5F0eF4-DnCFLg3T-Df-uLEzX-Cw0Ux5pJ-C6CEDQEy-Cmda1W7P-rwEYL1v8-D2TWGxeR-CpRIty4j-CPLD7tG6-mm3_-EoU-CnBFoxfz-CdKuPyCO-B0p6lDvl-uHMUfpsH-D6Uco5tg.js"));
const Zi = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Ni = { class: "flex w-[inherit]" }, Sr = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Ni, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Pi = { class: "flex flex-col gap-y-2 w-full" }, Hi = { class: "flex gap-x-1 items-center" }, Fi = {
  key: 0,
  class: "text-oc-error"
}, Ri = {
  key: 0,
  class: "px-3 py-2"
}, qi = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Ui = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Mr = {
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
    return (r, t) => (m(), y("div", Pi, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Hi, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Fi, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Yr), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Ri, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Ae), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", qi, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Ui, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Ji = ["disabled"], Qi = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Xi = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Ae), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Ae), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Qi, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ae), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Ji),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Ae), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, A0 = /* @__PURE__ */ wr(Xi, [["__scopeId", "data-v-91955efd"]]), Ki = ["value", "checked", "disabled"], B0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(Mr), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Ae), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Ki),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
};
var kr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(xt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(kr);
var Wi = kr.exports;
const Gi = /* @__PURE__ */ wt(Wi);
var _r = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(xt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(_r);
var ea = _r.exports;
const ta = /* @__PURE__ */ wt(ea);
var Dr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(xt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(Dr);
var ra = Dr.exports;
const oa = /* @__PURE__ */ wt(ra);
var Or = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(xt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, c = function(g) {
      return function(a) {
        this[g] = +a;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var d = a.match(/([+-]|\d\d)/g), u = 60 * d[1] + (+d[2] || 0);
        return u === 0 ? 0 : d[0] === "+" ? -u : u;
      }(g);
    }], f = function(g) {
      var a = l[g];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, M = function(g, a) {
      var d, u = l.meridiem;
      if (u) {
        for (var v = 1; v <= 24; v += 1)
          if (g.indexOf(u(v, 0, a)) > -1) {
            d = v > 12;
            break;
          }
      } else
        d = g === (a ? "pm" : "PM");
      return d;
    }, w = { A: [o, function(g) {
      this.afternoon = M(g, !1);
    }], a: [o, function(g) {
      this.afternoon = M(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [i, c("seconds")], ss: [i, c("seconds")], m: [i, c("minutes")], mm: [i, c("minutes")], H: [i, c("hours")], h: [i, c("hours")], HH: [i, c("hours")], hh: [i, c("hours")], D: [i, c("day")], DD: [s, c("day")], Do: [o, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [i, c("month")], MM: [s, c("month")], MMM: [o, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [o, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function R(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, Z, B) {
        var S = B && B.toUpperCase();
        return Z || d[B] || t[B] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, V, j) {
          return V || j.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var Z = {}, B = 0, S = 0; B < v; B += 1) {
          var k = u[B];
          if (typeof k == "string")
            S += k.length;
          else {
            var V = k.regex, j = k.parser, H = L.slice(S), Q = V.exec(H)[0];
            j.call(Z, Q), L = L.replace(Q, "");
          }
        }
        return function(P) {
          var $ = P.afternoon;
          if ($ !== void 0) {
            var J = P.hours;
            $ ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(Z), Z;
      };
    }
    return function(g, a, d) {
      d.p.customParseFormat = !0, g && g.parseTwoDigitYear && (h = g.parseTwoDigitYear);
      var u = a.prototype, v = u.parse;
      u.parse = function(O) {
        var I = O.date, N = O.utc, E = O.args;
        this.$u = N;
        var _ = E[1];
        if (typeof _ == "string") {
          var L = E[2] === !0, Z = E[3] === !0, B = L || Z, S = E[2];
          Z && (S = E[2]), l = this.$locale(), !L && S && (l = d.Ls[S]), this.$d = function(H, Q, P) {
            try {
              if (["x", "X"].indexOf(Q) > -1)
                return new Date((Q === "X" ? 1e3 : 1) * H);
              var $ = R(Q)(H), J = $.year, D = $.month, ce = $.day, re = $.hours, ve = $.minutes, ge = $.seconds, ie = $.milliseconds, le = $.zone, G = /* @__PURE__ */ new Date(), se = ce || (J || D ? 1 : G.getDate()), de = J || G.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : G.getMonth());
              var ae = re || 0, ne = ve || 0, K = ge || 0, W = ie || 0;
              return le ? new Date(Date.UTC(de, te, se, ae, ne, K, W + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, se, ae, ne, K, W)) : new Date(de, te, se, ae, ne, K, W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), B && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, V = 1; V <= k; V += 1) {
            E[1] = _[V - 1];
            var j = d.apply(this, E);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            V === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(Or);
var ia = Or.exports;
const aa = /* @__PURE__ */ wt(ia);
ee.extend(Gi);
ee.extend(ta);
ee.extend(oa);
ee.extend(aa);
const na = { class: "oc-tooltip-wrapper" }, sa = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, la = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", na, [
      oe(A(Sr), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", sa))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Zi), h]
    ]);
  }
}, Yr = /* @__PURE__ */ wr(la, [["__scopeId", "data-v-8a7abb6f"]]);
q(() => import("./OcLineChart-D0z2Bctc-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32-GYKXzT7L-BI8rW5hT-Bx2Fn_IQ-C19FiVnw-Bvh0o8Yg.js"));
q(() => import("./OcPieChart-Dm0zQrck-atZIjjxj-BITkIWKN-_Uua7FNm-dqKvRKLb-CCwB2cMK-DVy5V07I-e8W4aRMf-BWwkZXqN-CMR9F--g-CbECHlc2-BhKKCk1I-MaC_krbe-Cy25gGcq-CpFOil5D-ChH3yUAZ-D1vmVU6M-BYVgXP_2-BuNfYfVC-DeOxbTPS-KH-cQUfv-RUs0SP2W-CV3TN_J8.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy-CzkBGmG1-CC29yuXu-LY2dEQCD-8rrTFU4Y-CdD1q9xl.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3-BEunsKcE-De4sFGLW-DeC2TEn3-C3gcpRbE-CHrpDonI.js"));
var St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ar = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(St, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, c = function(g) {
      return function(a) {
        this[g] = +a;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var d = a.match(/([+-]|\d\d)/g), u = 60 * d[1] + (+d[2] || 0);
        return u === 0 ? 0 : d[0] === "+" ? -u : u;
      }(g);
    }], f = function(g) {
      var a = l[g];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, M = function(g, a) {
      var d, u = l.meridiem;
      if (u) {
        for (var v = 1; v <= 24; v += 1)
          if (g.indexOf(u(v, 0, a)) > -1) {
            d = v > 12;
            break;
          }
      } else
        d = g === (a ? "pm" : "PM");
      return d;
    }, w = { A: [o, function(g) {
      this.afternoon = M(g, !1);
    }], a: [o, function(g) {
      this.afternoon = M(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [i, c("seconds")], ss: [i, c("seconds")], m: [i, c("minutes")], mm: [i, c("minutes")], H: [i, c("hours")], h: [i, c("hours")], HH: [i, c("hours")], hh: [i, c("hours")], D: [i, c("day")], DD: [s, c("day")], Do: [o, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [i, c("month")], MM: [s, c("month")], MMM: [o, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [o, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function R(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, Z, B) {
        var S = B && B.toUpperCase();
        return Z || d[B] || t[B] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, V, j) {
          return V || j.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var Z = {}, B = 0, S = 0; B < v; B += 1) {
          var k = u[B];
          if (typeof k == "string")
            S += k.length;
          else {
            var V = k.regex, j = k.parser, H = L.slice(S), Q = V.exec(H)[0];
            j.call(Z, Q), L = L.replace(Q, "");
          }
        }
        return function(P) {
          var $ = P.afternoon;
          if ($ !== void 0) {
            var J = P.hours;
            $ ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(Z), Z;
      };
    }
    return function(g, a, d) {
      d.p.customParseFormat = !0, g && g.parseTwoDigitYear && (h = g.parseTwoDigitYear);
      var u = a.prototype, v = u.parse;
      u.parse = function(O) {
        var I = O.date, N = O.utc, E = O.args;
        this.$u = N;
        var _ = E[1];
        if (typeof _ == "string") {
          var L = E[2] === !0, Z = E[3] === !0, B = L || Z, S = E[2];
          Z && (S = E[2]), l = this.$locale(), !L && S && (l = d.Ls[S]), this.$d = function(H, Q, P) {
            try {
              if (["x", "X"].indexOf(Q) > -1)
                return new Date((Q === "X" ? 1e3 : 1) * H);
              var $ = R(Q)(H), J = $.year, D = $.month, ce = $.day, re = $.hours, ve = $.minutes, ge = $.seconds, ie = $.milliseconds, le = $.zone, G = /* @__PURE__ */ new Date(), se = ce || (J || D ? 1 : G.getDate()), de = J || G.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : G.getMonth());
              var ae = re || 0, ne = ve || 0, K = ge || 0, W = ie || 0;
              return le ? new Date(Date.UTC(de, te, se, ae, ne, K, W + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, se, ae, ne, K, W)) : new Date(de, te, se, ae, ne, K, W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), B && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, V = 1; V <= k; V += 1) {
            E[1] = _[V - 1];
            var j = d.apply(this, E);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            V === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(Ar);
var da = Ar.exports;
const ca = /* @__PURE__ */ Mt(da);
var pa = typeof global == "object" && global && global.Object === Object && global, ua = typeof self == "object" && self && self.Object === Object && self, fa = pa || ua || Function("return this")(), We = fa.Symbol;
We && We.toStringTag;
We && We.toStringTag;
var Br = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(St, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Br);
var ha = Br.exports;
const ma = /* @__PURE__ */ Mt(ha);
var Lr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(St, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(Lr);
var va = Lr.exports;
const ga = /* @__PURE__ */ Mt(va);
var $r = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(St, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})($r);
var ya = $r.exports;
const ba = /* @__PURE__ */ Mt(ya);
ee.extend(ma);
ee.extend(ga);
ee.extend(ba);
ee.extend(ca);
q(() => import("./OcModalCropper-ceUukBO4-qP7ZXOh5-2clD1ViD-Cy_TWN6Y-DDDDFpHt-DilUEIxU-qUcj-2rz-vJZ5yDoK-D3SQtiBQ-CyIfAzAR-DpfDfeqX-DgTp1GWt-DV3e6jHt-QDsg0f1T-CcVKBvb6-Dhx1bWuy-DaZ7gOOp--om4atJW-mYPqliSc-BG-Qu4jd-VM2Xz20V-DUO4jTIb-CXAoKVjC.js"));
q(() => import("./OcCropper-CmYSwZTR-CBRIr5ua-D8MzPe6E-DCXljtgQ-Bm3gi2wr-JE4fkSiL-BWxK46Q_-DoT_YN-E-DtP4kCr8-B7x8P42F-CXrP3-3b-C5porYl4-Cjc90Rum-BQgizFZ_-Cfd8nqG0-Dto-uwSh-5hnKBNva-C90ODea7-CtK0ERbR-RtZYmSlH-CVAcsZQ_-MGFLfPrV-Bgh5lq8A.js"));
const Tr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, xa = ["value", "checked", "disabled"], L0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(Mr), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Ae), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, xa),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, wa = ["width", "height", "viewBox"], Be = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, wa));
  }
}, Sa = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Ma = ["disabled"], ka = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, _a = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Ae), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Ae), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", ka, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ae), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Ma),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Ae), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, $0 = /* @__PURE__ */ Tr(_a, [["__scopeId", "data-v-91955efd"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32-GYKXzT7L-BI8rW5hT-Bx2Fn_IQ-C19FiVnw.js"));
q(() => import("./OcPieChart-C95F3Uen-Bd8uYHVF-C66Yf5qC-GcCurat5-LjfBt62h--648JpMW-D3mCdrUI-DhzCSRoM-C6J-r5ZL-C8V_p6H4-Cf5CBSF9-B45J-bcA-CrHdWawI-Bl2U4ks--CWp3peSv-5UZ9VduI-CWc_E8Xc-DDt1knyc-DGUZmxM9-DxrdY8Ea-CywUbOSe-QHVRc8GU.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy-CzkBGmG1-CC29yuXu-LY2dEQCD-8rrTFU4Y.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3-BEunsKcE-De4sFGLW-DeC2TEn3-C3gcpRbE.js"));
var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Er = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(kt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, c = function(g) {
      return function(a) {
        this[g] = +a;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var d = a.match(/([+-]|\d\d)/g), u = 60 * d[1] + (+d[2] || 0);
        return u === 0 ? 0 : d[0] === "+" ? -u : u;
      }(g);
    }], f = function(g) {
      var a = l[g];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, M = function(g, a) {
      var d, u = l.meridiem;
      if (u) {
        for (var v = 1; v <= 24; v += 1)
          if (g.indexOf(u(v, 0, a)) > -1) {
            d = v > 12;
            break;
          }
      } else
        d = g === (a ? "pm" : "PM");
      return d;
    }, w = { A: [o, function(g) {
      this.afternoon = M(g, !1);
    }], a: [o, function(g) {
      this.afternoon = M(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [i, c("seconds")], ss: [i, c("seconds")], m: [i, c("minutes")], mm: [i, c("minutes")], H: [i, c("hours")], h: [i, c("hours")], HH: [i, c("hours")], hh: [i, c("hours")], D: [i, c("day")], DD: [s, c("day")], Do: [o, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [i, c("month")], MM: [s, c("month")], MMM: [o, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [o, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function R(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, Z, B) {
        var S = B && B.toUpperCase();
        return Z || d[B] || t[B] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, V, j) {
          return V || j.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var Z = {}, B = 0, S = 0; B < v; B += 1) {
          var k = u[B];
          if (typeof k == "string")
            S += k.length;
          else {
            var V = k.regex, j = k.parser, H = L.slice(S), Q = V.exec(H)[0];
            j.call(Z, Q), L = L.replace(Q, "");
          }
        }
        return function(P) {
          var $ = P.afternoon;
          if ($ !== void 0) {
            var J = P.hours;
            $ ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(Z), Z;
      };
    }
    return function(g, a, d) {
      d.p.customParseFormat = !0, g && g.parseTwoDigitYear && (h = g.parseTwoDigitYear);
      var u = a.prototype, v = u.parse;
      u.parse = function(O) {
        var I = O.date, N = O.utc, E = O.args;
        this.$u = N;
        var _ = E[1];
        if (typeof _ == "string") {
          var L = E[2] === !0, Z = E[3] === !0, B = L || Z, S = E[2];
          Z && (S = E[2]), l = this.$locale(), !L && S && (l = d.Ls[S]), this.$d = function(H, Q, P) {
            try {
              if (["x", "X"].indexOf(Q) > -1)
                return new Date((Q === "X" ? 1e3 : 1) * H);
              var $ = R(Q)(H), J = $.year, D = $.month, ce = $.day, re = $.hours, ve = $.minutes, ge = $.seconds, ie = $.milliseconds, le = $.zone, G = /* @__PURE__ */ new Date(), se = ce || (J || D ? 1 : G.getDate()), de = J || G.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : G.getMonth());
              var ae = re || 0, ne = ve || 0, K = ge || 0, W = ie || 0;
              return le ? new Date(Date.UTC(de, te, se, ae, ne, K, W + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, se, ae, ne, K, W)) : new Date(de, te, se, ae, ne, K, W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), B && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, V = 1; V <= k; V += 1) {
            E[1] = _[V - 1];
            var j = d.apply(this, E);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            V === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(Er);
var Da = Er.exports;
const Oa = /* @__PURE__ */ _t(Da);
var Ya = typeof global == "object" && global && global.Object === Object && global, Aa = typeof self == "object" && self && self.Object === Object && self, Ba = Ya || Aa || Function("return this")(), Ge = Ba.Symbol;
Ge && Ge.toStringTag;
Ge && Ge.toStringTag;
var Ir = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(kt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Ir);
var La = Ir.exports;
const $a = /* @__PURE__ */ _t(La);
var Vr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(kt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(Vr);
var Ta = Vr.exports;
const Ea = /* @__PURE__ */ _t(Ta);
var Cr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(kt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(Cr);
var Ia = Cr.exports;
const Va = /* @__PURE__ */ _t(Ia);
ee.extend($a);
ee.extend(Ea);
ee.extend(Va);
ee.extend(Oa);
q(() => import("./OcModalCropper-B5KL0vpF-Brxg1PYC-DCK9Hega-8szMv1nU-BW-vkcua-D4Cf6vtJ-DK1Iua-6-SljZvc8R-CS9IqnS3-BGuEAaGH-Be33dkmf-DeBan-F8--VyYY2l1-D5_RRHUd-DxBczXkH-BXLLlgIE-jucB13K2-C5yn0L2H-CNr_Pykr-CslXKlqE-BbZfQH9h-t4pERLtY.js"));
q(() => import("./OcCropper-CJWKehPX-CVJYQPgM-CBlQHFsw-CyNrQJq5-BML2I2vd-CI2QhHqF-kGNtFAot-Cj7UiiDu-C7g_PB95-D6sjba-R-BMFDzzRm-D309QOyt-CVMKrUUd-nzVPaFSo-CxfYxnr--D10kmiz_-l6LjrQxL-BZz5Th3N-ec3d0qG8-CXR66sD9-DFJMONFk-DB_sFKZ9.js"));
const zr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Ca = { class: "flex flex-col gap-y-2 w-full" }, za = { class: "flex gap-x-1 items-center" }, ja = {
  key: 0,
  class: "text-oc-error"
}, Za = {
  key: 0,
  class: "px-3 py-2"
}, Na = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Pa = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Ha = {
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
    return (r, t) => (m(), y("div", Ca, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", za, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", ja, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Yr), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Za, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Ae), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Na, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Pa, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Fa = ["value", "checked", "disabled"], T0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(Ha), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Be), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Fa),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Ra = ["width", "height", "viewBox"], Le = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Ra));
  }
}, qa = { class: "flex w-[inherit]" }, Ua = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", qa, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Ja = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Qa = ["disabled"], Xa = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Ka = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Be), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Be), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Xa, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Be), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Qa),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Be), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, E0 = /* @__PURE__ */ zr(Ka, [["__scopeId", "data-v-91955efd"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32-GYKXzT7L-BI8rW5hT-Bx2Fn_IQ.js"));
q(() => import("./OcPieChart-Cixt4v9n-B33N4teU-BTBOUhuQ-BHZqBbTD-CuY7B2HZ-BVchILJ_-DrWOWLv7-aTBydQId-B709E9nl-Dyb-BVvg-CrY6emwW-E6D58J2n-5jonitX2-ANVUvPv9-Cfhk5HFF-Cm15KVLj-CrJRHqb6-CGMDBudG-BYGAxJok-gNJS6d-8-DRGSMRyg.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy-CzkBGmG1-CC29yuXu-LY2dEQCD.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3-BEunsKcE-De4sFGLW-DeC2TEn3.js"));
var Dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ot(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Dt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, c = function(g) {
      return function(a) {
        this[g] = +a;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var d = a.match(/([+-]|\d\d)/g), u = 60 * d[1] + (+d[2] || 0);
        return u === 0 ? 0 : d[0] === "+" ? -u : u;
      }(g);
    }], f = function(g) {
      var a = l[g];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, M = function(g, a) {
      var d, u = l.meridiem;
      if (u) {
        for (var v = 1; v <= 24; v += 1)
          if (g.indexOf(u(v, 0, a)) > -1) {
            d = v > 12;
            break;
          }
      } else
        d = g === (a ? "pm" : "PM");
      return d;
    }, w = { A: [o, function(g) {
      this.afternoon = M(g, !1);
    }], a: [o, function(g) {
      this.afternoon = M(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [i, c("seconds")], ss: [i, c("seconds")], m: [i, c("minutes")], mm: [i, c("minutes")], H: [i, c("hours")], h: [i, c("hours")], HH: [i, c("hours")], hh: [i, c("hours")], D: [i, c("day")], DD: [s, c("day")], Do: [o, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [i, c("month")], MM: [s, c("month")], MMM: [o, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [o, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function R(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, Z, B) {
        var S = B && B.toUpperCase();
        return Z || d[B] || t[B] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, V, j) {
          return V || j.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var Z = {}, B = 0, S = 0; B < v; B += 1) {
          var k = u[B];
          if (typeof k == "string")
            S += k.length;
          else {
            var V = k.regex, j = k.parser, H = L.slice(S), Q = V.exec(H)[0];
            j.call(Z, Q), L = L.replace(Q, "");
          }
        }
        return function(P) {
          var $ = P.afternoon;
          if ($ !== void 0) {
            var J = P.hours;
            $ ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(Z), Z;
      };
    }
    return function(g, a, d) {
      d.p.customParseFormat = !0, g && g.parseTwoDigitYear && (h = g.parseTwoDigitYear);
      var u = a.prototype, v = u.parse;
      u.parse = function(O) {
        var I = O.date, N = O.utc, E = O.args;
        this.$u = N;
        var _ = E[1];
        if (typeof _ == "string") {
          var L = E[2] === !0, Z = E[3] === !0, B = L || Z, S = E[2];
          Z && (S = E[2]), l = this.$locale(), !L && S && (l = d.Ls[S]), this.$d = function(H, Q, P) {
            try {
              if (["x", "X"].indexOf(Q) > -1)
                return new Date((Q === "X" ? 1e3 : 1) * H);
              var $ = R(Q)(H), J = $.year, D = $.month, ce = $.day, re = $.hours, ve = $.minutes, ge = $.seconds, ie = $.milliseconds, le = $.zone, G = /* @__PURE__ */ new Date(), se = ce || (J || D ? 1 : G.getDate()), de = J || G.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : G.getMonth());
              var ae = re || 0, ne = ve || 0, K = ge || 0, W = ie || 0;
              return le ? new Date(Date.UTC(de, te, se, ae, ne, K, W + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, se, ae, ne, K, W)) : new Date(de, te, se, ae, ne, K, W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), B && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, V = 1; V <= k; V += 1) {
            E[1] = _[V - 1];
            var j = d.apply(this, E);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            V === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(jr);
var Wa = jr.exports;
const Ga = /* @__PURE__ */ Ot(Wa);
var en = typeof global == "object" && global && global.Object === Object && global, tn = typeof self == "object" && self && self.Object === Object && self, rn = en || tn || Function("return this")(), et = rn.Symbol;
et && et.toStringTag;
et && et.toStringTag;
var Zr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Dt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Zr);
var on = Zr.exports;
const an = /* @__PURE__ */ Ot(on);
var Nr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Dt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(Nr);
var nn = Nr.exports;
const sn = /* @__PURE__ */ Ot(nn);
var Pr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Dt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(Pr);
var ln = Pr.exports;
const dn = /* @__PURE__ */ Ot(ln);
ee.extend(an);
ee.extend(sn);
ee.extend(dn);
ee.extend(Ga);
q(() => import("./OcModalCropper-7li22H04-BBaBCUmU-BplVuqft-CvPMh-Yg-Bd9m2bPV-DcqM3jlS-DcF-luhY-t4uPIxHX-I1PKnL07-0wTBwKoK-CLHtuEjd-BWUlvRV4-DYmTLlVP-B9-ieDoH-4alq3MqJ-Clz5mMXc-48TLTSFP-Dh5ZP1de-Wth2dFJD-C2nk2Dcg-BUH94uHj.js"));
q(() => import("./OcCropper-DGKAODRX-DXXcDdr6-BoTBE00s-Bxqcs8tz-ZANfthLX-DVfZD7CP-CE2yDtd9-D5ec510n-C-LhM995-C37DnJia--42PvbSx-BYIySsBw-DAU535pT-CQfZhFuR-XtVucyCH-vkXuadbC-CKTviL6N-BpzXrr2O-CxNLcWN_-D2s69fQk-BR_Wh7vL.js"));
const Hr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, cn = { class: "oc-tooltip-wrapper" }, pn = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, un = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", cn, [
      oe(A(Sr), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", pn))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Sa), h]
    ]);
  }
}, fn = /* @__PURE__ */ Tr(un, [["__scopeId", "data-v-8a7abb6f"]]), hn = { class: "flex flex-col gap-y-2 w-full" }, mn = { class: "flex gap-x-1 items-center" }, vn = {
  key: 0,
  class: "text-oc-error"
}, gn = {
  key: 0,
  class: "px-3 py-2"
}, yn = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, bn = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, xn = {
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
    return (r, t) => (m(), y("div", hn, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", mn, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", vn, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(fn), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", gn, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Be), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", yn, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", bn, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, wn = ["value", "checked", "disabled"], I0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(xn), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Le), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, wn),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Sn = ["width", "height", "viewBox"], $e = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Sn));
  }
}, Mn = { class: "flex w-[inherit]" }, kn = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Mn, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, _n = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Dn = ["disabled"], On = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Yn = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Le), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Le), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", On, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Le), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Dn),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Le), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, V0 = /* @__PURE__ */ Hr(Yn, [["__scopeId", "data-v-91955efd"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32-GYKXzT7L-BI8rW5hT.js"));
q(() => import("./OcPieChart-B5x_Z0MZ-BA1Hi2k9-CEosGo6q-9Gw-AHR--UeOqz4-H-Bgn2Wq-N-DL7oNVLG-Cm4lII5T-BUOgTe9v-DDc1Nx8W-BkwAZXC_-Cg9Llsi1-BRy4hjwe-Ddw709N0-1P4rswjS-3C4KXiwD-CIfZvxk7-Cs9Jxbkj-C7c_Tiec-CYKkQnmF.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy-CzkBGmG1-CC29yuXu.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3-BEunsKcE-De4sFGLW.js"));
var Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function At(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Yt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, c = function(g) {
      return function(a) {
        this[g] = +a;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var d = a.match(/([+-]|\d\d)/g), u = 60 * d[1] + (+d[2] || 0);
        return u === 0 ? 0 : d[0] === "+" ? -u : u;
      }(g);
    }], f = function(g) {
      var a = l[g];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, M = function(g, a) {
      var d, u = l.meridiem;
      if (u) {
        for (var v = 1; v <= 24; v += 1)
          if (g.indexOf(u(v, 0, a)) > -1) {
            d = v > 12;
            break;
          }
      } else
        d = g === (a ? "pm" : "PM");
      return d;
    }, w = { A: [o, function(g) {
      this.afternoon = M(g, !1);
    }], a: [o, function(g) {
      this.afternoon = M(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [i, c("seconds")], ss: [i, c("seconds")], m: [i, c("minutes")], mm: [i, c("minutes")], H: [i, c("hours")], h: [i, c("hours")], HH: [i, c("hours")], hh: [i, c("hours")], D: [i, c("day")], DD: [s, c("day")], Do: [o, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [i, c("month")], MM: [s, c("month")], MMM: [o, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [o, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function R(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, Z, B) {
        var S = B && B.toUpperCase();
        return Z || d[B] || t[B] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, V, j) {
          return V || j.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var Z = {}, B = 0, S = 0; B < v; B += 1) {
          var k = u[B];
          if (typeof k == "string")
            S += k.length;
          else {
            var V = k.regex, j = k.parser, H = L.slice(S), Q = V.exec(H)[0];
            j.call(Z, Q), L = L.replace(Q, "");
          }
        }
        return function(P) {
          var $ = P.afternoon;
          if ($ !== void 0) {
            var J = P.hours;
            $ ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(Z), Z;
      };
    }
    return function(g, a, d) {
      d.p.customParseFormat = !0, g && g.parseTwoDigitYear && (h = g.parseTwoDigitYear);
      var u = a.prototype, v = u.parse;
      u.parse = function(O) {
        var I = O.date, N = O.utc, E = O.args;
        this.$u = N;
        var _ = E[1];
        if (typeof _ == "string") {
          var L = E[2] === !0, Z = E[3] === !0, B = L || Z, S = E[2];
          Z && (S = E[2]), l = this.$locale(), !L && S && (l = d.Ls[S]), this.$d = function(H, Q, P) {
            try {
              if (["x", "X"].indexOf(Q) > -1)
                return new Date((Q === "X" ? 1e3 : 1) * H);
              var $ = R(Q)(H), J = $.year, D = $.month, ce = $.day, re = $.hours, ve = $.minutes, ge = $.seconds, ie = $.milliseconds, le = $.zone, G = /* @__PURE__ */ new Date(), se = ce || (J || D ? 1 : G.getDate()), de = J || G.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : G.getMonth());
              var ae = re || 0, ne = ve || 0, K = ge || 0, W = ie || 0;
              return le ? new Date(Date.UTC(de, te, se, ae, ne, K, W + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, se, ae, ne, K, W)) : new Date(de, te, se, ae, ne, K, W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), B && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, V = 1; V <= k; V += 1) {
            E[1] = _[V - 1];
            var j = d.apply(this, E);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            V === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(Fr);
var An = Fr.exports;
const Bn = /* @__PURE__ */ At(An);
var Ln = typeof global == "object" && global && global.Object === Object && global, $n = typeof self == "object" && self && self.Object === Object && self, Tn = Ln || $n || Function("return this")(), tt = Tn.Symbol;
tt && tt.toStringTag;
tt && tt.toStringTag;
var Rr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Yt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Rr);
var En = Rr.exports;
const In = /* @__PURE__ */ At(En);
var qr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Yt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(qr);
var Vn = qr.exports;
const Cn = /* @__PURE__ */ At(Vn);
var Ur = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Yt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(Ur);
var zn = Ur.exports;
const jn = /* @__PURE__ */ At(zn);
ee.extend(In);
ee.extend(Cn);
ee.extend(jn);
ee.extend(Bn);
q(() => import("./OcModalCropper-Cs32_kCS-zTZOIVfQ-BbLrlOR5-BJCqdKEX-BBxgcNhn-Ddss04fx-C3Fotj8Y-PyvmYPCm-DPxily3h-vZnwLcP--BZwjOHfL-RO_18hVo-BFFc8z_0-BsKO7vY2-DSjFtF3s-BaolTxMS-CNd0NWxP-BTgHznZt-EPReVwiK-BHDQeQpP.js"));
q(() => import("./OcCropper-CB0iNuxW-pntkmt16-B7tXHSbc-Dxk0Ho07-BvzDMZxO-KWHlUskk-UzxWqvvq-CPn1QuR2-D1_YBmck-BF0Rlghq-D12Gaftr-DTEzXClc-B6E7l25c-B2IurA2z-Ofe4O7Df-D_3EMTbA-njhqtqol-C-YEbaon-CWVAQNch-TfNbWaTd.js"));
const Jr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Zn = { class: "oc-tooltip-wrapper" }, Nn = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Pn = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Zn, [
      oe(A(Ua), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Nn))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Ja), h]
    ]);
  }
}, Hn = /* @__PURE__ */ zr(Pn, [["__scopeId", "data-v-8a7abb6f"]]), Fn = { class: "flex flex-col gap-y-2 w-full" }, Rn = { class: "flex gap-x-1 items-center" }, qn = {
  key: 0,
  class: "text-oc-error"
}, Un = {
  key: 0,
  class: "px-3 py-2"
}, Jn = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Qn = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Xn = {
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
    return (r, t) => (m(), y("div", Fn, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Rn, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", qn, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Hn), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Un, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Le), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Jn, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Qn, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Kn = ["value", "checked", "disabled"], C0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(Xn), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A($e), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Kn),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Wn = ["width", "height", "viewBox"], Te = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Wn));
  }
}, Gn = { class: "flex w-[inherit]" }, es = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Gn, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, ts = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, rs = ["disabled"], os = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, is = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A($e), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A($e), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", os, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A($e), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, rs),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A($e), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, z0 = /* @__PURE__ */ Jr(is, [["__scopeId", "data-v-91955efd"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32-GYKXzT7L.js"));
q(() => import("./OcPieChart-D-deT7Ow-DbaDqmnr-DoRDfk6a-DwKBqnLh-DZ6qQ_HR-DHF5HSIy-Bpq1yuNn-B3SdGb7G-lOTMreA_-D-_IDf4N-Z1iQ-DJu-XPjwQepD-BQ4TfHWh-DyfZ41ga-Drr-pBJh-D5VHFzsD-CPCWpmkm-XQDYAKaU-CcJ3HQlD.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy-CzkBGmG1.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3-BEunsKcE.js"));
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Bt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, c = function(g) {
      return function(a) {
        this[g] = +a;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var d = a.match(/([+-]|\d\d)/g), u = 60 * d[1] + (+d[2] || 0);
        return u === 0 ? 0 : d[0] === "+" ? -u : u;
      }(g);
    }], f = function(g) {
      var a = l[g];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, M = function(g, a) {
      var d, u = l.meridiem;
      if (u) {
        for (var v = 1; v <= 24; v += 1)
          if (g.indexOf(u(v, 0, a)) > -1) {
            d = v > 12;
            break;
          }
      } else
        d = g === (a ? "pm" : "PM");
      return d;
    }, w = { A: [o, function(g) {
      this.afternoon = M(g, !1);
    }], a: [o, function(g) {
      this.afternoon = M(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [i, c("seconds")], ss: [i, c("seconds")], m: [i, c("minutes")], mm: [i, c("minutes")], H: [i, c("hours")], h: [i, c("hours")], HH: [i, c("hours")], hh: [i, c("hours")], D: [i, c("day")], DD: [s, c("day")], Do: [o, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [i, c("month")], MM: [s, c("month")], MMM: [o, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [o, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function R(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, Z, B) {
        var S = B && B.toUpperCase();
        return Z || d[B] || t[B] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, V, j) {
          return V || j.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var Z = {}, B = 0, S = 0; B < v; B += 1) {
          var k = u[B];
          if (typeof k == "string")
            S += k.length;
          else {
            var V = k.regex, j = k.parser, H = L.slice(S), Q = V.exec(H)[0];
            j.call(Z, Q), L = L.replace(Q, "");
          }
        }
        return function(P) {
          var $ = P.afternoon;
          if ($ !== void 0) {
            var J = P.hours;
            $ ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(Z), Z;
      };
    }
    return function(g, a, d) {
      d.p.customParseFormat = !0, g && g.parseTwoDigitYear && (h = g.parseTwoDigitYear);
      var u = a.prototype, v = u.parse;
      u.parse = function(O) {
        var I = O.date, N = O.utc, E = O.args;
        this.$u = N;
        var _ = E[1];
        if (typeof _ == "string") {
          var L = E[2] === !0, Z = E[3] === !0, B = L || Z, S = E[2];
          Z && (S = E[2]), l = this.$locale(), !L && S && (l = d.Ls[S]), this.$d = function(H, Q, P) {
            try {
              if (["x", "X"].indexOf(Q) > -1)
                return new Date((Q === "X" ? 1e3 : 1) * H);
              var $ = R(Q)(H), J = $.year, D = $.month, ce = $.day, re = $.hours, ve = $.minutes, ge = $.seconds, ie = $.milliseconds, le = $.zone, G = /* @__PURE__ */ new Date(), se = ce || (J || D ? 1 : G.getDate()), de = J || G.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : G.getMonth());
              var ae = re || 0, ne = ve || 0, K = ge || 0, W = ie || 0;
              return le ? new Date(Date.UTC(de, te, se, ae, ne, K, W + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, se, ae, ne, K, W)) : new Date(de, te, se, ae, ne, K, W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), B && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, V = 1; V <= k; V += 1) {
            E[1] = _[V - 1];
            var j = d.apply(this, E);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            V === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(Qr);
var as = Qr.exports;
const ns = /* @__PURE__ */ Lt(as);
var ss = typeof global == "object" && global && global.Object === Object && global, ls = typeof self == "object" && self && self.Object === Object && self, ds = ss || ls || Function("return this")(), rt = ds.Symbol;
rt && rt.toStringTag;
rt && rt.toStringTag;
var Xr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Bt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Xr);
var cs = Xr.exports;
const ps = /* @__PURE__ */ Lt(cs);
var Kr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Bt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(Kr);
var us = Kr.exports;
const fs = /* @__PURE__ */ Lt(us);
var Wr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Bt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(Wr);
var hs = Wr.exports;
const ms = /* @__PURE__ */ Lt(hs);
ee.extend(ps);
ee.extend(fs);
ee.extend(ms);
ee.extend(ns);
q(() => import("./OcModalCropper-n9-tmwgf-D3ujYrqE-C2erHj01-DquKVFtd-Ub3nGdmM-yZFYdxEl-hKQVceoz-PH45LpJh-IIQMNG0k-OET2vEYG-CjoyoMPF-Clu4ZJx4-CnmUNYZ3-FalM0ylx-DOjiff5e-B1LzzoXX-CypI4ZtS-CSUr5jD8-BwyVAXw0.js"));
q(() => import("./OcCropper-D1JueFyt-BDFHC1xI-BNNDTiZA-BUoitfMo-DMrJMf6e-TTemOGKb-B-DxEll_-C57M4En1-CkonPC7V-D0iE9ex_-DEoc6su0-Be8zkFSq-BIn70Tvq-DmaVSDWA-dhsWdgza-CiM1iLzZ-BI0iOmGX-JWIeE1qF-BHw48P-4.js"));
const Gr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, vs = { class: "oc-tooltip-wrapper" }, gs = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, ys = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", vs, [
      oe(A(kn), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", gs))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(_n), h]
    ]);
  }
}, bs = /* @__PURE__ */ Hr(ys, [["__scopeId", "data-v-8a7abb6f"]]), xs = { class: "flex flex-col gap-y-2 w-full" }, ws = { class: "flex gap-x-1 items-center" }, Ss = {
  key: 0,
  class: "text-oc-error"
}, Ms = {
  key: 0,
  class: "px-3 py-2"
}, ks = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, _s = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Ds = {
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
    return (r, t) => (m(), y("div", xs, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", ws, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Ss, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(bs), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Ms, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A($e), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", ks, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", _s, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Os = ["value", "checked", "disabled"], j0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(Ds), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Te), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Os),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Ys = ["width", "height", "viewBox"], Ee = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Ys));
  }
}, As = { class: "flex w-[inherit]" }, Bs = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", As, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Ls = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, $s = ["disabled"], Ts = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Es = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Te), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Te), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Ts, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Te), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, $s),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Te), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, Z0 = /* @__PURE__ */ Gr(Es, [["__scopeId", "data-v-91955efd"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32.js"));
q(() => import("./OcPieChart-B7MmYAVH-JeZH6s6D-COIEHNA7-DiQcbFcx-B9l6lPjW-CK6NKiBq-CK_QTQJb-CaC-BoQg-DM38LD3N-DcvuTT1F-C3sruWei-CMOJyG2i-DyaVH4FF-BnHauV8K-CdB5657P-CH-vwDm3-Ccxzv3_k-DCNe1BxJ.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3.js"));
var $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var eo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })($t, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, c = function(g) {
      return function(a) {
        this[g] = +a;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var d = a.match(/([+-]|\d\d)/g), u = 60 * d[1] + (+d[2] || 0);
        return u === 0 ? 0 : d[0] === "+" ? -u : u;
      }(g);
    }], f = function(g) {
      var a = l[g];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, M = function(g, a) {
      var d, u = l.meridiem;
      if (u) {
        for (var v = 1; v <= 24; v += 1)
          if (g.indexOf(u(v, 0, a)) > -1) {
            d = v > 12;
            break;
          }
      } else
        d = g === (a ? "pm" : "PM");
      return d;
    }, w = { A: [o, function(g) {
      this.afternoon = M(g, !1);
    }], a: [o, function(g) {
      this.afternoon = M(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [i, c("seconds")], ss: [i, c("seconds")], m: [i, c("minutes")], mm: [i, c("minutes")], H: [i, c("hours")], h: [i, c("hours")], HH: [i, c("hours")], hh: [i, c("hours")], D: [i, c("day")], DD: [s, c("day")], Do: [o, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [i, c("month")], MM: [s, c("month")], MMM: [o, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [o, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function R(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, Z, B) {
        var S = B && B.toUpperCase();
        return Z || d[B] || t[B] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, V, j) {
          return V || j.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var Z = {}, B = 0, S = 0; B < v; B += 1) {
          var k = u[B];
          if (typeof k == "string")
            S += k.length;
          else {
            var V = k.regex, j = k.parser, H = L.slice(S), Q = V.exec(H)[0];
            j.call(Z, Q), L = L.replace(Q, "");
          }
        }
        return function(P) {
          var $ = P.afternoon;
          if ($ !== void 0) {
            var J = P.hours;
            $ ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(Z), Z;
      };
    }
    return function(g, a, d) {
      d.p.customParseFormat = !0, g && g.parseTwoDigitYear && (h = g.parseTwoDigitYear);
      var u = a.prototype, v = u.parse;
      u.parse = function(O) {
        var I = O.date, N = O.utc, E = O.args;
        this.$u = N;
        var _ = E[1];
        if (typeof _ == "string") {
          var L = E[2] === !0, Z = E[3] === !0, B = L || Z, S = E[2];
          Z && (S = E[2]), l = this.$locale(), !L && S && (l = d.Ls[S]), this.$d = function(H, Q, P) {
            try {
              if (["x", "X"].indexOf(Q) > -1)
                return new Date((Q === "X" ? 1e3 : 1) * H);
              var $ = R(Q)(H), J = $.year, D = $.month, ce = $.day, re = $.hours, ve = $.minutes, ge = $.seconds, ie = $.milliseconds, le = $.zone, G = /* @__PURE__ */ new Date(), se = ce || (J || D ? 1 : G.getDate()), de = J || G.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : G.getMonth());
              var ae = re || 0, ne = ve || 0, K = ge || 0, W = ie || 0;
              return le ? new Date(Date.UTC(de, te, se, ae, ne, K, W + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, se, ae, ne, K, W)) : new Date(de, te, se, ae, ne, K, W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), B && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, V = 1; V <= k; V += 1) {
            E[1] = _[V - 1];
            var j = d.apply(this, E);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            V === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(eo);
var Is = eo.exports;
const Vs = /* @__PURE__ */ Tt(Is);
var Cs = typeof global == "object" && global && global.Object === Object && global, zs = typeof self == "object" && self && self.Object === Object && self, js = Cs || zs || Function("return this")(), ot = js.Symbol;
ot && ot.toStringTag;
ot && ot.toStringTag;
var to = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })($t, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(to);
var Zs = to.exports;
const Ns = /* @__PURE__ */ Tt(Zs);
var ro = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })($t, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(ro);
var Ps = ro.exports;
const Hs = /* @__PURE__ */ Tt(Ps);
var oo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })($t, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(oo);
var Fs = oo.exports;
const Rs = /* @__PURE__ */ Tt(Fs);
ee.extend(Ns);
ee.extend(Hs);
ee.extend(Rs);
ee.extend(Vs);
q(() => import("./OcModalCropper-CLrXw5Tb-DFvvjeHl-CHSsF11u-B5TyLO3k-BMhTN67Q-Tg26ONi--Cf__-Ovm-Bjlw9isS-i6jKxhSL-DYxMMcZ--Ct2CxI9_-Ipw0V4sr-DaBQ9Rnm-DxvMPKCp-BXjz7NNz-CgQDP0f8-CP5CHl2l-CG3shhD2.js"));
q(() => import("./OcCropper-HtV3GHVH-IwgFQ1CJ-D80qacsQ-DQjmyf7D-CI6NHkW8-CRQ1jo-Q-hI_5gGoV-Dt2Z8Cin-B2iiVnGm-CJTV3cbH-CunvMmfR-BbkmdEjY-DMVKjIY8-D_U_04Uy-DG9mrJ3W-CyV3KO-8-CcCjiTC7-CdlIGK7G.js"));
const io = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, qs = { class: "oc-tooltip-wrapper" }, Us = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Js = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", qs, [
      oe(A(es), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Us))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(ts), h]
    ]);
  }
}, Qs = /* @__PURE__ */ Jr(Js, [["__scopeId", "data-v-8a7abb6f"]]), Xs = { class: "flex flex-col gap-y-2 w-full" }, Ks = { class: "flex gap-x-1 items-center" }, Ws = {
  key: 0,
  class: "text-oc-error"
}, Gs = {
  key: 0,
  class: "px-3 py-2"
}, el = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, tl = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, rl = {
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
    return (r, t) => (m(), y("div", Xs, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Ks, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Ws, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Qs), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Gs, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Te), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", el, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", tl, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, ol = ["value", "checked", "disabled"], N0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(rl), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Ee), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, ol),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, il = ["width", "height", "viewBox"], Ie = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, il));
  }
}, al = { class: "flex w-[inherit]" }, nl = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", al, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, sl = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, ll = ["disabled"], dl = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, cl = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Ee), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Ee), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", dl, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ee), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, ll),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Ee), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, P0 = /* @__PURE__ */ io(cl, [["__scopeId", "data-v-91955efd"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw.js"));
q(() => import("./OcPieChart-DCDDjMLd-DR-Ru-eQ-3DfQNUo0-JGkIqI7v-BUX-xsCV-DUQLMZ1d-Ce5GPyys-tvucVVc4-DkZ-uEPx-DjF7Uoam-CxVSrCf0-DXByY9RF-DQjWm91s-CBAa7rht-BlWkw1OO-Decg-PAi-BCedPJnt.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu.js"));
var Et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function It(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ao = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Et, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, c = function(g) {
      return function(a) {
        this[g] = +a;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var d = a.match(/([+-]|\d\d)/g), u = 60 * d[1] + (+d[2] || 0);
        return u === 0 ? 0 : d[0] === "+" ? -u : u;
      }(g);
    }], f = function(g) {
      var a = l[g];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, M = function(g, a) {
      var d, u = l.meridiem;
      if (u) {
        for (var v = 1; v <= 24; v += 1)
          if (g.indexOf(u(v, 0, a)) > -1) {
            d = v > 12;
            break;
          }
      } else
        d = g === (a ? "pm" : "PM");
      return d;
    }, w = { A: [o, function(g) {
      this.afternoon = M(g, !1);
    }], a: [o, function(g) {
      this.afternoon = M(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [i, c("seconds")], ss: [i, c("seconds")], m: [i, c("minutes")], mm: [i, c("minutes")], H: [i, c("hours")], h: [i, c("hours")], HH: [i, c("hours")], hh: [i, c("hours")], D: [i, c("day")], DD: [s, c("day")], Do: [o, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [i, c("month")], MM: [s, c("month")], MMM: [o, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [o, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function R(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, Z, B) {
        var S = B && B.toUpperCase();
        return Z || d[B] || t[B] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, V, j) {
          return V || j.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var Z = {}, B = 0, S = 0; B < v; B += 1) {
          var k = u[B];
          if (typeof k == "string")
            S += k.length;
          else {
            var V = k.regex, j = k.parser, H = L.slice(S), Q = V.exec(H)[0];
            j.call(Z, Q), L = L.replace(Q, "");
          }
        }
        return function(P) {
          var $ = P.afternoon;
          if ($ !== void 0) {
            var J = P.hours;
            $ ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(Z), Z;
      };
    }
    return function(g, a, d) {
      d.p.customParseFormat = !0, g && g.parseTwoDigitYear && (h = g.parseTwoDigitYear);
      var u = a.prototype, v = u.parse;
      u.parse = function(O) {
        var I = O.date, N = O.utc, E = O.args;
        this.$u = N;
        var _ = E[1];
        if (typeof _ == "string") {
          var L = E[2] === !0, Z = E[3] === !0, B = L || Z, S = E[2];
          Z && (S = E[2]), l = this.$locale(), !L && S && (l = d.Ls[S]), this.$d = function(H, Q, P) {
            try {
              if (["x", "X"].indexOf(Q) > -1)
                return new Date((Q === "X" ? 1e3 : 1) * H);
              var $ = R(Q)(H), J = $.year, D = $.month, ce = $.day, re = $.hours, ve = $.minutes, ge = $.seconds, ie = $.milliseconds, le = $.zone, G = /* @__PURE__ */ new Date(), se = ce || (J || D ? 1 : G.getDate()), de = J || G.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : G.getMonth());
              var ae = re || 0, ne = ve || 0, K = ge || 0, W = ie || 0;
              return le ? new Date(Date.UTC(de, te, se, ae, ne, K, W + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, se, ae, ne, K, W)) : new Date(de, te, se, ae, ne, K, W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), B && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, V = 1; V <= k; V += 1) {
            E[1] = _[V - 1];
            var j = d.apply(this, E);
            if (j.isValid()) {
              this.$d = j.$d, this.$L = j.$L, this.init();
              break;
            }
            V === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(ao);
var pl = ao.exports;
const ul = /* @__PURE__ */ It(pl);
var fl = typeof global == "object" && global && global.Object === Object && global, hl = typeof self == "object" && self && self.Object === Object && self, ml = fl || hl || Function("return this")(), it = ml.Symbol;
it && it.toStringTag;
it && it.toStringTag;
var no = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Et, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(no);
var vl = no.exports;
const gl = /* @__PURE__ */ It(vl);
var so = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Et, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(so);
var yl = so.exports;
const bl = /* @__PURE__ */ It(yl);
var lo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Et, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(lo);
var xl = lo.exports;
const wl = /* @__PURE__ */ It(xl);
ee.extend(gl);
ee.extend(bl);
ee.extend(wl);
ee.extend(ul);
q(() => import("./OcModalCropper-B5cHH0zb-Ds12MNwe-BYYRMXb5-4e_grzhn-ChR8v1zw-cqNdY5mN-BDuuwgiK-BSYE0PPY-8koJoR-N-BWImmyM0-DRKwj7K3-CD2t1pFs-BpS06_16-CYKzfqFn-2zi1p6Ql-DObd_zOO-CDJ9JNJZ.js"));
q(() => import("./OcCropper-DjC-Mp11-B579jrkE-BP1j1qsL-BHkN3W4z-Q2Pa6Rgy-DggHmvg1-DRza7RYe-xhWxS_jx-DUUV0uV7-DiQSLAOA-BPXml3v4-PLLeh6_0-h2QPLo0m-xop093D2-CbaqhIcl-BfQYWYqA-D_inM_xc.js"));
const co = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Sl = { class: "oc-tooltip-wrapper" }, Ml = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, kl = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Sl, [
      oe(A(Bs), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Ml))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Ls), h]
    ]);
  }
}, _l = /* @__PURE__ */ Gr(kl, [["__scopeId", "data-v-8a7abb6f"]]), Dl = { class: "flex flex-col gap-y-2 w-full" }, Ol = { class: "flex gap-x-1 items-center" }, Yl = {
  key: 0,
  class: "text-oc-error"
}, Al = {
  key: 0,
  class: "px-3 py-2"
}, Bl = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Ll = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, $l = {
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
    return (r, t) => (m(), y("div", Dl, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Ol, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Yl, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(_l), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Al, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Ee), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Bl, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Ll, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Tl = ["value", "checked", "disabled"], H0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A($l), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Ie), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Tl),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, El = ["width", "height", "viewBox"], Ve = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, El));
  }
}, Il = { class: "flex w-[inherit]" }, Vl = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Il, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Cl = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, zl = ["disabled"], jl = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Zl = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Ie), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Ie), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", jl, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ie), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, zl),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Ie), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, F0 = /* @__PURE__ */ co(Zl, [["__scopeId", "data-v-91955efd"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da.js"));
q(() => import("./OcPieChart-Cfg3stlo-74gwWkc2-BgCbOHOQ-BJXh9FTs-DOxBb6Vi-DDEo79mM-DXbbscwM-Cx0ebULb-DBwqWwUK-CYP4Uy0K-BHyv8_A9-CnBbJDHu-Df2TLwHn-DhFNw4O7-DycxE6V7-DiAUc49a.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD.js"));
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ct(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var po = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Vt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(po);
var Nl = po.exports;
const Pl = /* @__PURE__ */ Ct(Nl);
var Hl = typeof global == "object" && global && global.Object === Object && global, Fl = typeof self == "object" && self && self.Object === Object && self, Rl = Hl || Fl || Function("return this")(), at = Rl.Symbol;
at && at.toStringTag;
at && at.toStringTag;
var uo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Vt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(uo);
var ql = uo.exports;
const Ul = /* @__PURE__ */ Ct(ql);
var fo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Vt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(fo);
var Jl = fo.exports;
const Ql = /* @__PURE__ */ Ct(Jl);
var ho = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Vt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(ho);
var Xl = ho.exports;
const Kl = /* @__PURE__ */ Ct(Xl);
ee.extend(Ul);
ee.extend(Ql);
ee.extend(Kl);
ee.extend(Pl);
q(() => import("./OcModalCropper-E9U75p1G-2py2mKPg-Cq1jSXnx-C7CGoMch-CiomUxtw-DcwwGq3X-BDBojZX1-Ce-bhAAr-MB6y9pbm-CThdB4vP-M_FrOKKh-BzBwrp3x-D4XscwHn-B8Vx_YbE-C0vd3QAH-Cau1tHUT.js"));
q(() => import("./OcCropper-D_z5XBWS-BTTkwvLr-1Qgh9jBb-DcwT-abl-C_3B2I1F-DGdL-SHN-gHYcVr_b-DvFMb5tW-C1dALhjE-B5mVHsVo-CC-rAj6n-DDIDswMc-BfEzS5ka-B_uSe3EG-C011tz9n-B339msxf.js"));
const mo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Wl = { class: "oc-tooltip-wrapper" }, Gl = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, ed = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Wl, [
      oe(A(nl), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Gl))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(sl), h]
    ]);
  }
}, td = /* @__PURE__ */ io(ed, [["__scopeId", "data-v-8a7abb6f"]]), rd = { class: "flex flex-col gap-y-2 w-full" }, od = { class: "flex gap-x-1 items-center" }, id = {
  key: 0,
  class: "text-oc-error"
}, ad = {
  key: 0,
  class: "px-3 py-2"
}, nd = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, sd = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, ld = {
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
    return (r, t) => (m(), y("div", rd, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", od, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", id, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(td), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", ad, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Ie), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", nd, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", sd, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, dd = ["value", "checked", "disabled"], R0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(ld), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Ve), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, dd),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, cd = ["width", "height", "viewBox"], Ce = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, cd));
  }
}, pd = { class: "flex w-[inherit]" }, ud = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", pd, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, fd = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, hd = ["disabled"], md = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, vd = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Ve), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Ve), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", md, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ve), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, hd),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Ve), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, q0 = /* @__PURE__ */ mo(vd, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u.js"));
q(() => import("./OcPieChart-BW1xYEey-DC4J602F-BvhnV_zT-CR5RStQl-OtrmvL_I-BObmTBy6-DXU6TtSL-C8OIOvmG-CrGZP0ON-DUwMZ04j-Bc_0ehij-eu3a_uyV-Bmav-7g4-Due6wrBz-BKEVZrS4.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U.js"));
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(zt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(vo);
var gd = vo.exports;
const yd = /* @__PURE__ */ jt(gd);
var bd = typeof global == "object" && global && global.Object === Object && global, xd = typeof self == "object" && self && self.Object === Object && self, wd = bd || xd || Function("return this")(), nt = wd.Symbol;
nt && nt.toStringTag;
nt && nt.toStringTag;
var go = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(zt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(go);
var Sd = go.exports;
const Md = /* @__PURE__ */ jt(Sd);
var yo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(zt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(yo);
var kd = yo.exports;
const _d = /* @__PURE__ */ jt(kd);
var bo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(zt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(bo);
var Dd = bo.exports;
const Od = /* @__PURE__ */ jt(Dd);
ee.extend(Md);
ee.extend(_d);
ee.extend(Od);
ee.extend(yd);
q(() => import("./OcModalCropper-iM0Vw0LE-C4Za9vik-D96wC1mE-DJC3c0cs-DzW1SF1I-reX0QTmT-Co3AjuBB-DhbkJcYk-DIWsnMfI-B8FpM_9N-CBj_z_bk-BQ840aZ3-D6r_LR54-BwEH-GXw-BA5JQ3iw.js"));
q(() => import("./OcCropper-DPrOl1N7-fgjyY1ph-Cmdf9QRA-Qle94W6X-Zu_tOVNS-xdh4wefD-DXFc2PQA-Ck1A3m4a-BBHSGLdK-f6gXCp75-Bf4xhEfD-sntfX45R-SG7rOCp1-7_I1sCkW-Dmu989nZ.js"));
const xo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Yd = { class: "oc-tooltip-wrapper" }, Ad = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Bd = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Yd, [
      oe(A(Vl), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Ad))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Cl), h]
    ]);
  }
}, Ld = /* @__PURE__ */ co(Bd, [["__scopeId", "data-v-8a7abb6f"]]), $d = { class: "flex flex-col gap-y-2 w-full" }, Td = { class: "flex gap-x-1 items-center" }, Ed = {
  key: 0,
  class: "text-oc-error"
}, Id = {
  key: 0,
  class: "px-3 py-2"
}, Vd = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Cd = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, zd = {
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
    return (r, t) => (m(), y("div", $d, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Td, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Ed, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Ld), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Id, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Ve), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Vd, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Cd, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, jd = ["value", "checked", "disabled"], U0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(zd), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Ce), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, jd),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Zd = ["width", "height", "viewBox"], ze = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Zd));
  }
}, Nd = { class: "flex w-[inherit]" }, Pd = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Nd, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Hd = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Fd = ["disabled"], Rd = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, qd = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Ce), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Ce), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Rd, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ce), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Fd),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Ce), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, J0 = /* @__PURE__ */ xo(qd, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE.js"));
q(() => import("./OcPieChart-C95Eg7jd-DeSNSwDN-BVJdR6RL-BNwPdTLr-DUeVmrTW-BCU4JF8Y-C8Dmd6-v-BSsrrQZ1-CJjZtMxl-DD0-AEM--CxLP-Fo_-C5QzNBdL-DoW36n_B-Df8anTN_.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp.js"));
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Zt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(wo);
var Ud = wo.exports;
const Jd = /* @__PURE__ */ Nt(Ud);
var Qd = typeof global == "object" && global && global.Object === Object && global, Xd = typeof self == "object" && self && self.Object === Object && self, Kd = Qd || Xd || Function("return this")(), st = Kd.Symbol;
st && st.toStringTag;
st && st.toStringTag;
var So = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Zt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(So);
var Wd = So.exports;
const Gd = /* @__PURE__ */ Nt(Wd);
var Mo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Zt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(Mo);
var ec = Mo.exports;
const tc = /* @__PURE__ */ Nt(ec);
var ko = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Zt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(ko);
var rc = ko.exports;
const oc = /* @__PURE__ */ Nt(rc);
ee.extend(Gd);
ee.extend(tc);
ee.extend(oc);
ee.extend(Jd);
q(() => import("./OcModalCropper-DYctK_L7-DM9MsIH_-DmZyTkhi-C1cY6Gqz-DKI57SUI-BxHhEsbZ-DSmwUDCk-D6Aw7OdG-BD7hYzug-BGN1kuje-DuH2Ytbb-BbpPkPRK-BcNIDPfR-DZEnA52P.js"));
q(() => import("./OcCropper-D8Btn88G-CTVBqkrS-DkvNTYf4-COxWGSMz-B1lV_qJ_-BrCyw9fT-Cg8XnIhk-BPFvaM3c-CoStdFZz-DiSLJNUv-C2MB1kN2-D-ssfID2-BU6Wowxw-6qkRqPO0.js"));
const _o = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, ic = { class: "oc-tooltip-wrapper" }, ac = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, nc = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", ic, [
      oe(A(ud), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", ac))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(fd), h]
    ]);
  }
}, sc = /* @__PURE__ */ mo(nc, [["__scopeId", "data-v-9f861dd7"]]), lc = { class: "flex flex-col gap-y-2 w-full" }, dc = { class: "flex gap-x-1 items-center" }, cc = {
  key: 0,
  class: "text-oc-error"
}, pc = {
  key: 0,
  class: "px-3 py-2"
}, uc = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, fc = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, hc = {
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
    return (r, t) => (m(), y("div", lc, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", dc, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", cc, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(sc), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", pc, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Ce), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", uc, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", fc, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, mc = ["value", "checked", "disabled"], Q0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(hc), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(ze), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, mc),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, vc = ["width", "height", "viewBox"], je = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, vc));
  }
}, gc = { class: "flex w-[inherit]" }, yc = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", gc, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, bc = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, xc = ["disabled"], wc = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Sc = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(ze), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(ze), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", wc, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(ze), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, xc),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(ze), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, X0 = /* @__PURE__ */ _o(Sc, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV.js"));
q(() => import("./OcPieChart-E3ZrCuuC-Ce16rvc9-DflYpSsE-CFVNWqIj-FUdLHVeX-8ia6NVUj-Beb2bqgH-BAcYBflR-BBcIORx3-D-l1XpMv-D5aJOZYm-CC5wlaqm-BVe6gLUr.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_.js"));
var Pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ht(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Do = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Do);
var Mc = Do.exports;
const kc = /* @__PURE__ */ Ht(Mc);
var _c = typeof global == "object" && global && global.Object === Object && global, Dc = typeof self == "object" && self && self.Object === Object && self, Oc = _c || Dc || Function("return this")(), lt = Oc.Symbol;
lt && lt.toStringTag;
lt && lt.toStringTag;
var Oo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Oo);
var Yc = Oo.exports;
const Ac = /* @__PURE__ */ Ht(Yc);
var Yo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(Yo);
var Bc = Yo.exports;
const Lc = /* @__PURE__ */ Ht(Bc);
var Ao = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(Ao);
var $c = Ao.exports;
const Tc = /* @__PURE__ */ Ht($c);
ee.extend(Ac);
ee.extend(Lc);
ee.extend(Tc);
ee.extend(kc);
q(() => import("./OcModalCropper-D8cQd_Dn-lt2yfidJ-DFqNZ9XC-CPJTW5si-gjnqueny-wMmlTzPT-DUPjnhYG-DukM7j_9-DlZMyqAk-IisqZcvx-DHlShrMj-IBu0KtvL-BMvvp9W6.js"));
q(() => import("./OcCropper-Bs5JAUi0-DxFxUOt1-BokG2qWs-C46rMqqt-DdGz-2aq-DIyZa8Jz-DE9LIHUM-D0fMdXW6-DRzkB4lB-Cd_M8osK-DGKG0rDB-BRv6JzNC-cWZiVXS5.js"));
const Bo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Ec = { class: "oc-tooltip-wrapper" }, Ic = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Vc = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Ec, [
      oe(A(Pd), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Ic))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Hd), h]
    ]);
  }
}, Cc = /* @__PURE__ */ xo(Vc, [["__scopeId", "data-v-9f861dd7"]]), zc = { class: "flex flex-col gap-y-2 w-full" }, jc = { class: "flex gap-x-1 items-center" }, Zc = {
  key: 0,
  class: "text-oc-error"
}, Nc = {
  key: 0,
  class: "px-3 py-2"
}, Pc = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Hc = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Fc = {
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
    return (r, t) => (m(), y("div", zc, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", jc, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Zc, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Cc), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Nc, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(ze), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Pc, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Hc, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Rc = ["value", "checked", "disabled"], K0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(Fc), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(je), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Rc),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, qc = ["width", "height", "viewBox"], Ze = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, qc));
  }
}, Uc = { class: "flex w-[inherit]" }, Jc = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Uc, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Qc = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Xc = ["disabled"], Kc = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Wc = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(je), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(je), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Kc, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(je), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Xc),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(je), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, W0 = /* @__PURE__ */ Bo(Wc, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt.js"));
q(() => import("./OcPieChart-DwxMm8Yr-DFNufQaR-CJ6YwQ-1-C56uHgo9-fhQisT2n-DCfXVL4j-Bf9uACaN-DWyjrU-L-Dt2crliF-CRdz3YBR-XWURc5TM-D8UJJ2dh.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb.js"));
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ft, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Lo);
var Gc = Lo.exports;
const ep = /* @__PURE__ */ Rt(Gc);
var tp = typeof global == "object" && global && global.Object === Object && global, rp = typeof self == "object" && self && self.Object === Object && self, op = tp || rp || Function("return this")(), dt = op.Symbol;
dt && dt.toStringTag;
dt && dt.toStringTag;
var $o = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ft, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})($o);
var ip = $o.exports;
const ap = /* @__PURE__ */ Rt(ip);
var To = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ft, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(To);
var np = To.exports;
const sp = /* @__PURE__ */ Rt(np);
var Eo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ft, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(Eo);
var lp = Eo.exports;
const dp = /* @__PURE__ */ Rt(lp);
ee.extend(ap);
ee.extend(sp);
ee.extend(dp);
ee.extend(ep);
q(() => import("./OcModalCropper-DLnfz6gq-CeRixNeK-CHBAD5hw-DzG__9gf-DZtbaf1f-f5KW2hKv-C4NV0Zqa-CXaJ64wf-BkTDtM65-Boznks8Z-DeTN9-6o-CGNp7euw.js"));
q(() => import("./OcCropper-S4lR2tNS-CpBKNWQF-CtXeQmJa-Bk4uqneH-Bc_Rtpll-l8PtGtvu-pcg6jcmZ-CK564aTW-D_DQbp2q-dcu3fD_z-BAt4DCX1-BRNcJS7k.js"));
const Io = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, cp = { class: "oc-tooltip-wrapper" }, pp = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, up = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", cp, [
      oe(A(yc), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", pp))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(bc), h]
    ]);
  }
}, fp = /* @__PURE__ */ _o(up, [["__scopeId", "data-v-9f861dd7"]]), hp = { class: "flex flex-col gap-y-2 w-full" }, mp = { class: "flex gap-x-1 items-center" }, vp = {
  key: 0,
  class: "text-oc-error"
}, gp = {
  key: 0,
  class: "px-3 py-2"
}, yp = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, bp = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, xp = {
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
    return (r, t) => (m(), y("div", hp, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", mp, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", vp, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(fp), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", gp, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(je), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", yp, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", bp, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, wp = ["value", "checked", "disabled"], G0 = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(xp), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Ze), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, wp),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Sp = ["width", "height", "viewBox"], Ne = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Sp));
  }
}, Mp = { class: "flex w-[inherit]" }, kp = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Mp, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, _p = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Dp = ["disabled"], Op = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Yp = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Ze), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Ze), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Op, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ze), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Dp),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Ze), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, eg = /* @__PURE__ */ Io(Yp, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv.js"));
q(() => import("./OcPieChart-BTrlRpBZ-CGDCOXJw-ngm8DcpN-B8LzrMEQ-a8DADtPK-BRh6Z0FN-CYsWu8cX-CKP3Gx4i-DsQ2HQxh-BtTK_Z8p-BtpCFCEd.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa.js"));
var qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ut(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(qt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Vo);
var Ap = Vo.exports;
const Bp = /* @__PURE__ */ Ut(Ap);
var Lp = typeof global == "object" && global && global.Object === Object && global, $p = typeof self == "object" && self && self.Object === Object && self, Tp = Lp || $p || Function("return this")(), ct = Tp.Symbol;
ct && ct.toStringTag;
ct && ct.toStringTag;
var Co = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(qt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Co);
var Ep = Co.exports;
const Ip = /* @__PURE__ */ Ut(Ep);
var zo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(qt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(zo);
var Vp = zo.exports;
const Cp = /* @__PURE__ */ Ut(Vp);
var jo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(qt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(jo);
var zp = jo.exports;
const jp = /* @__PURE__ */ Ut(zp);
ee.extend(Ip);
ee.extend(Cp);
ee.extend(jp);
ee.extend(Bp);
q(() => import("./OcModalCropper-CXdagMz2-C8mj_WEj-ClzAWaId-77sVmk3V-HyyX0a9m-C2OlkRhy-DXM7Sa1s-CHU6Bp6o-DFHJchFN-D6g-ruoR-C6C8it3D.js"));
q(() => import("./OcCropper-T1btTRZR-LrIxcAft-DbdHq0yv-PNHDpf_X-DZI1OYlY-C0KReuHp-Bh-5kkI5-CeuBO77M-CjqwL5oB-DEeZcTyc-BBTzza0Z.js"));
const Zo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Zp = { class: "oc-tooltip-wrapper" }, Np = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Pp = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Zp, [
      oe(A(Jc), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Np))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Qc), h]
    ]);
  }
}, Hp = /* @__PURE__ */ Bo(Pp, [["__scopeId", "data-v-9f861dd7"]]), Fp = { class: "flex flex-col gap-y-2 w-full" }, Rp = { class: "flex gap-x-1 items-center" }, qp = {
  key: 0,
  class: "text-oc-error"
}, Up = {
  key: 0,
  class: "px-3 py-2"
}, Jp = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Qp = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Xp = {
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
    return (r, t) => (m(), y("div", Fp, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Rp, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", qp, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Hp), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Up, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Ze), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Jp, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Qp, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Kp = ["value", "checked", "disabled"], tg = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(Xp), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Ne), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Kp),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Wp = ["width", "height", "viewBox"], Pe = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Wp));
  }
}, Gp = { class: "flex w-[inherit]" }, eu = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Gp, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, tu = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, ru = ["disabled"], ou = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, iu = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Ne), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Ne), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", ou, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ne), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, ru),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Ne), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, rg = /* @__PURE__ */ Zo(iu, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23.js"));
q(() => import("./OcPieChart-Cn5HOMn_-DnvDGMxs-D8Iv0Vrg-BCoePuC9-tbFIhA2O-DQI5sYve-BSTyF_hf-BBYcNtUp-wZ6m7fcx-2zx54tju.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx.js"));
var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var No = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Jt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(No);
var au = No.exports;
const nu = /* @__PURE__ */ Qt(au);
var su = typeof global == "object" && global && global.Object === Object && global, lu = typeof self == "object" && self && self.Object === Object && self, du = su || lu || Function("return this")(), pt = du.Symbol;
pt && pt.toStringTag;
pt && pt.toStringTag;
var Po = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Jt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Po);
var cu = Po.exports;
const pu = /* @__PURE__ */ Qt(cu);
var Ho = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Jt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(Ho);
var uu = Ho.exports;
const fu = /* @__PURE__ */ Qt(uu);
var Fo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Jt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(Fo);
var hu = Fo.exports;
const mu = /* @__PURE__ */ Qt(hu);
ee.extend(pu);
ee.extend(fu);
ee.extend(mu);
ee.extend(nu);
q(() => import("./OcModalCropper-DoGQ3-RB-Pa620SpY-D61hL5Cc-CRIvVYdu-gRmjqKhh-Cp5TmnT8-DbW4zqkK-BoFJhF0L-B4MSYB2K-T-C3D1Q3.js"));
q(() => import("./OcCropper-DhS0GKUG-CdXEbW8C-BvRSkuT6-BXahjrdc-Bl3pdl7x-CTE3cGyv-C6o3JafI-Ctg9Vvra-CI4evSf7-BjdkE5np.js"));
const Ro = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, vu = { class: "oc-tooltip-wrapper" }, gu = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, yu = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", vu, [
      oe(A(kp), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", gu))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(_p), h]
    ]);
  }
}, bu = /* @__PURE__ */ Io(yu, [["__scopeId", "data-v-9f861dd7"]]), xu = { class: "flex flex-col gap-y-2 w-full" }, wu = { class: "flex gap-x-1 items-center" }, Su = {
  key: 0,
  class: "text-oc-error"
}, Mu = {
  key: 0,
  class: "px-3 py-2"
}, ku = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, _u = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Du = {
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
    return (r, t) => (m(), y("div", xu, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", wu, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Su, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(bu), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Mu, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Ne), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", ku, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", _u, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Ou = ["value", "checked", "disabled"], og = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(Du), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Pe), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Ou),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Yu = ["width", "height", "viewBox"], He = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Yu));
  }
}, Au = { class: "flex w-[inherit]" }, Bu = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Au, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Lu = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, $u = ["disabled"], Tu = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Eu = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Pe), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Pe), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Tu, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Pe), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, $u),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Pe), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, ig = /* @__PURE__ */ Ro(Eu, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9.js"));
q(() => import("./OcPieChart-DSw_RxSV-m8cd4yXz-De64BrVe-gotVMi5M-IgbWG2kc-OQ_4HdEm-BaHxTwvc-Bb6HS6so-C3MdAeas.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9.js"));
var Xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Xt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(qo);
var Iu = qo.exports;
const Vu = /* @__PURE__ */ Kt(Iu);
var Cu = typeof global == "object" && global && global.Object === Object && global, zu = typeof self == "object" && self && self.Object === Object && self, ju = Cu || zu || Function("return this")(), ut = ju.Symbol;
ut && ut.toStringTag;
ut && ut.toStringTag;
var Uo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Xt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Uo);
var Zu = Uo.exports;
const Nu = /* @__PURE__ */ Kt(Zu);
var Jo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Xt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(Jo);
var Pu = Jo.exports;
const Hu = /* @__PURE__ */ Kt(Pu);
var Qo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Xt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(Qo);
var Fu = Qo.exports;
const Ru = /* @__PURE__ */ Kt(Fu);
ee.extend(Nu);
ee.extend(Hu);
ee.extend(Ru);
ee.extend(Vu);
q(() => import("./OcModalCropper-7uiXqhDc-B9KNR5jl-CjPkzIcW-CVkdmh7Z-C7Ou0sVI-D11zBorg-1VpBrWBM-2jeP5rDw-vlvGCq0H.js"));
q(() => import("./OcCropper-DAAE0_SD-of6b5i46-7OT5yMl--Cw44SkrI-C9w1fNjw-CroYrnA2-C700--T5-C_Xp6V0e-SaGYUmZ0.js"));
const Xo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, qu = { class: "oc-tooltip-wrapper" }, Uu = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Ju = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", qu, [
      oe(A(eu), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Uu))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(tu), h]
    ]);
  }
}, Qu = /* @__PURE__ */ Zo(Ju, [["__scopeId", "data-v-9f861dd7"]]), Xu = { class: "flex flex-col gap-y-2 w-full" }, Ku = { class: "flex gap-x-1 items-center" }, Wu = {
  key: 0,
  class: "text-oc-error"
}, Gu = {
  key: 0,
  class: "px-3 py-2"
}, ef = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, tf = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, rf = {
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
    return (r, t) => (m(), y("div", Xu, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Ku, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Wu, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Qu), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Gu, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Pe), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", ef, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", tf, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, of = ["value", "checked", "disabled"], ag = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(rf), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(He), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, of),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, af = ["width", "height", "viewBox"], Fe = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, af));
  }
}, nf = { class: "flex w-[inherit]" }, sf = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", nf, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, lf = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, df = ["disabled"], cf = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, pf = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(He), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(He), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", cf, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(He), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, df),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(He), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, ng = /* @__PURE__ */ Xo(pf, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q.js"));
q(() => import("./OcPieChart-BCY8rYQQ-Cn8YTO0H-DG8tbfHi-68af31PP-6SLifbI4-Bxgq1d2z-BdkDAH3j-44BREHf6.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U.js"));
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ko = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Wt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Ko);
var uf = Ko.exports;
const ff = /* @__PURE__ */ Gt(uf);
var hf = typeof global == "object" && global && global.Object === Object && global, mf = typeof self == "object" && self && self.Object === Object && self, vf = hf || mf || Function("return this")(), ft = vf.Symbol;
ft && ft.toStringTag;
ft && ft.toStringTag;
var Wo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Wt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Wo);
var gf = Wo.exports;
const yf = /* @__PURE__ */ Gt(gf);
var Go = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Wt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(Go);
var bf = Go.exports;
const xf = /* @__PURE__ */ Gt(bf);
var ei = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Wt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(ei);
var wf = ei.exports;
const Sf = /* @__PURE__ */ Gt(wf);
ee.extend(yf);
ee.extend(xf);
ee.extend(Sf);
ee.extend(ff);
q(() => import("./OcModalCropper-C8FsBU1o-Ccbo2qu3-ConHjYB8-D1okmQ6_-Cic1_Ids-t087YibI-CeLqvQU1-BE8RbfxO.js"));
q(() => import("./OcCropper-Dx2KtQps-DjDtQfkX-DEQbF3L8-BnooWAzs-lqRmDy4p-BpICYPFO-DkYKMpnY-31_SF3YK.js"));
const ti = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Mf = { class: "oc-tooltip-wrapper" }, kf = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, _f = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Mf, [
      oe(A(Bu), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", kf))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Lu), h]
    ]);
  }
}, Df = /* @__PURE__ */ Ro(_f, [["__scopeId", "data-v-9f861dd7"]]), Of = { class: "flex flex-col gap-y-2 w-full" }, Yf = { class: "flex gap-x-1 items-center" }, Af = {
  key: 0,
  class: "text-oc-error"
}, Bf = {
  key: 0,
  class: "px-3 py-2"
}, Lf = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, $f = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Tf = {
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
    return (r, t) => (m(), y("div", Of, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Yf, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Af, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Df), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Bf, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(He), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Lf, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", $f, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Ef = ["value", "checked", "disabled"], sg = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(Tf), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Fe), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Ef),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, If = ["width", "height", "viewBox"], Re = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, If));
  }
}, Vf = { class: "flex w-[inherit]" }, Cf = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Vf, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, zf = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, jf = ["disabled"], Zf = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Nf = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Fe), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Fe), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Zf, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Fe), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, jf),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Fe), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, lg = /* @__PURE__ */ ti(Nf, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66.js"));
q(() => import("./OcPieChart-C2PufLkk-CW9rvTUk-H3snUjbB-CbwBHsOQ-CQ_rBnG7-D45c_6mK-BoQnQ3Eh.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz.js"));
var er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ri = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(er, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(ri);
var Pf = ri.exports;
const Hf = /* @__PURE__ */ tr(Pf);
var Ff = typeof global == "object" && global && global.Object === Object && global, Rf = typeof self == "object" && self && self.Object === Object && self, qf = Ff || Rf || Function("return this")(), ht = qf.Symbol;
ht && ht.toStringTag;
ht && ht.toStringTag;
var oi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(er, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(oi);
var Uf = oi.exports;
const Jf = /* @__PURE__ */ tr(Uf);
var ii = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(er, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(ii);
var Qf = ii.exports;
const Xf = /* @__PURE__ */ tr(Qf);
var ai = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(er, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(ai);
var Kf = ai.exports;
const Wf = /* @__PURE__ */ tr(Kf);
ee.extend(Jf);
ee.extend(Xf);
ee.extend(Wf);
ee.extend(Hf);
q(() => import("./OcModalCropper-BUa9T1sv-C3T5Vsh0-DRRKPbhn-DmcJ7nK9-BrHSA2n7-uTUaSiBj-CRx4F46u.js"));
q(() => import("./OcCropper-CLY4AFYI-BhawQFjh-BDPRj2v5-CNSoSG6g-BXBfyDq2-C74v4z40-DaPE3Xl2.js"));
const ni = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Gf = { class: "oc-tooltip-wrapper" }, eh = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, th = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Gf, [
      oe(A(sf), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", eh))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(lf), h]
    ]);
  }
}, rh = /* @__PURE__ */ Xo(th, [["__scopeId", "data-v-9f861dd7"]]), oh = { class: "flex flex-col gap-y-2 w-full" }, ih = { class: "flex gap-x-1 items-center" }, ah = {
  key: 0,
  class: "text-oc-error"
}, nh = {
  key: 0,
  class: "px-3 py-2"
}, sh = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, lh = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, dh = {
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
    return (r, t) => (m(), y("div", oh, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", ih, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", ah, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(rh), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", nh, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Fe), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", sh, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", lh, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, ch = ["value", "checked", "disabled"], dg = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(dh), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Re), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, ch),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, ph = ["width", "height", "viewBox"], qe = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, ph));
  }
}, uh = { class: "flex w-[inherit]" }, fh = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", uh, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, hh = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, mh = ["disabled"], vh = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, gh = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Re), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Re), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", vh, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Re), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, mh),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Re), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, cg = /* @__PURE__ */ ni(gh, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH.js"));
q(() => import("./OcPieChart-IA8ga9nR-CLfeRK8a-B5e13LBa-C3elykiQ-CptNmXjA-dsb-JVIo.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ.js"));
var rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function or(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var si = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(rr, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(si);
var yh = si.exports;
const bh = /* @__PURE__ */ or(yh);
var xh = typeof global == "object" && global && global.Object === Object && global, wh = typeof self == "object" && self && self.Object === Object && self, Sh = xh || wh || Function("return this")(), mt = Sh.Symbol;
mt && mt.toStringTag;
mt && mt.toStringTag;
var li = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(rr, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(li);
var Mh = li.exports;
const kh = /* @__PURE__ */ or(Mh);
var di = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(rr, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(di);
var _h = di.exports;
const Dh = /* @__PURE__ */ or(_h);
var ci = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(rr, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(ci);
var Oh = ci.exports;
const Yh = /* @__PURE__ */ or(Oh);
ee.extend(kh);
ee.extend(Dh);
ee.extend(Yh);
ee.extend(bh);
q(() => import("./OcModalCropper-gYk1VFvZ-BPrXYDhz-DxX2fDmY-BbJp5PgD-BhtxHCug-BWZmrslw.js"));
q(() => import("./OcCropper-CXm2InUO-D4PCff75-DxvhZaXC-3DRis-Gz-ByTrbO5r-BOKmOET2.js"));
const pi = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Ah = { class: "oc-tooltip-wrapper" }, Bh = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Lh = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Ah, [
      oe(A(Cf), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Bh))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(zf), h]
    ]);
  }
}, $h = /* @__PURE__ */ ti(Lh, [["__scopeId", "data-v-9f861dd7"]]), Th = { class: "flex flex-col gap-y-2 w-full" }, Eh = { class: "flex gap-x-1 items-center" }, Ih = {
  key: 0,
  class: "text-oc-error"
}, Vh = {
  key: 0,
  class: "px-3 py-2"
}, Ch = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, zh = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, jh = {
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
    return (r, t) => (m(), y("div", Th, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Eh, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Ih, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A($h), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Vh, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Re), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Ch, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", zh, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Zh = ["value", "checked", "disabled"], pg = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(jh), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(qe), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Zh),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Nh = ["width", "height", "viewBox"], Ue = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Nh));
  }
}, Ph = { class: "flex w-[inherit]" }, Hh = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Ph, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Fh = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Rh = ["disabled"], qh = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Uh = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(qe), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(qe), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", qh, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(qe), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Rh),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(qe), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, ug = /* @__PURE__ */ pi(Uh, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB.js"));
q(() => import("./OcPieChart-D4iou2zi-oKfUQZrn-GINO717I-BAWFY7ys-CtoCuU_x.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD.js"));
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ar(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ui = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ir, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(ui);
var Jh = ui.exports;
const Qh = /* @__PURE__ */ ar(Jh);
var Xh = typeof global == "object" && global && global.Object === Object && global, Kh = typeof self == "object" && self && self.Object === Object && self, Wh = Xh || Kh || Function("return this")(), vt = Wh.Symbol;
vt && vt.toStringTag;
vt && vt.toStringTag;
var fi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ir, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(fi);
var Gh = fi.exports;
const em = /* @__PURE__ */ ar(Gh);
var hi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ir, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(hi);
var tm = hi.exports;
const rm = /* @__PURE__ */ ar(tm);
var mi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ir, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(mi);
var om = mi.exports;
const im = /* @__PURE__ */ ar(om);
ee.extend(em);
ee.extend(rm);
ee.extend(im);
ee.extend(Qh);
q(() => import("./OcModalCropper-BG3M3x7r-DRbx8AN6-4ALxQAm6-I72C3wxr-DEstLWU9.js"));
q(() => import("./OcCropper-BwAN2WxQ-D8Wfl1hL-DWcqT0e8-D0UI1fU1-CuIFES8_.js"));
const vi = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, am = { class: "oc-tooltip-wrapper" }, nm = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, sm = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", am, [
      oe(A(fh), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", nm))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(hh), h]
    ]);
  }
}, lm = /* @__PURE__ */ ni(sm, [["__scopeId", "data-v-9f861dd7"]]), dm = { class: "flex flex-col gap-y-2 w-full" }, cm = { class: "flex gap-x-1 items-center" }, pm = {
  key: 0,
  class: "text-oc-error"
}, um = {
  key: 0,
  class: "px-3 py-2"
}, fm = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, hm = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, mm = {
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
    return (r, t) => (m(), y("div", dm, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", cm, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", pm, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(lm), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", um, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(qe), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", fm, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", hm, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, vm = ["value", "checked", "disabled"], fg = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(mm), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Ue), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, vm),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, gm = ["width", "height", "viewBox"], Je = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, gm));
  }
}, ym = { class: "flex w-[inherit]" }, bm = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", ym, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, xm = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, wm = ["disabled"], Sm = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Mm = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Ue), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Ue), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Sm, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ue), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, wm),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Ue), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, hg = /* @__PURE__ */ vi(Mm, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_.js"));
q(() => import("./OcPieChart-CRGphZQU-D5BXeVjJ-WwfU2XiS-BTnIzxGm.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv-.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ.js"));
var nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(nr, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(gi);
var km = gi.exports;
const _m = /* @__PURE__ */ sr(km);
var Dm = typeof global == "object" && global && global.Object === Object && global, Om = typeof self == "object" && self && self.Object === Object && self, Ym = Dm || Om || Function("return this")(), gt = Ym.Symbol;
gt && gt.toStringTag;
gt && gt.toStringTag;
var yi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(nr, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(yi);
var Am = yi.exports;
const Bm = /* @__PURE__ */ sr(Am);
var bi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(nr, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(bi);
var Lm = bi.exports;
const $m = /* @__PURE__ */ sr(Lm);
var xi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(nr, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(xi);
var Tm = xi.exports;
const Em = /* @__PURE__ */ sr(Tm);
ee.extend(Bm);
ee.extend($m);
ee.extend(Em);
ee.extend(_m);
q(() => import("./OcModalCropper-DMlgtrS8-CRrTWm2o-B36F0gwx-4syAsD5M.js"));
q(() => import("./OcCropper-CXXMELsx-DN7Y-xqL-DMDaAHYo-BxQJd22r.js"));
const Im = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Vm = { class: "oc-tooltip-wrapper" }, Cm = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, zm = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Vm, [
      oe(A(Hh), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Cm))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Fh), h]
    ]);
  }
}, jm = /* @__PURE__ */ pi(zm, [["__scopeId", "data-v-9f861dd7"]]), Zm = { class: "flex flex-col gap-y-2 w-full" }, Nm = { class: "flex gap-x-1 items-center" }, Pm = {
  key: 0,
  class: "text-oc-error"
}, Hm = {
  key: 0,
  class: "px-3 py-2"
}, Fm = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Rm = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, qm = {
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
    return (r, t) => (m(), y("div", Zm, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Nm, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Pm, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(jm), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Hm, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Ue), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Fm, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Rm, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Um = ["value", "checked", "disabled"], mg = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(qm), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Je), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, Um),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Jm = ["width", "height", "viewBox"], Qe = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Jm));
  }
}, Qm = { class: "flex w-[inherit]" }, vg = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Qm, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, gg = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Xm = ["disabled"], Km = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Wm = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Je), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Je), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Km, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Je), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Xm),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Je), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, yg = /* @__PURE__ */ Im(Wm, [["__scopeId", "data-v-4356d06c"]]);
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M.js"));
q(() => import("./OcPieChart-DpVnBeHC-ClYBU1hy-CvxhZaTx.js"));
q(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR.js"));
q(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k.js"));
var lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(lr, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z")
          return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1)
          if (a.indexOf(v(O, 0, d)) > -1) {
            u = O > 12;
            break;
          }
      } else
        u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string")
            k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array)
          for (var V = L.length, j = 1; j <= V; j += 1) {
            _[1] = L[j - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            j === V && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(wi);
var Gm = wi.exports;
const ev = /* @__PURE__ */ dr(Gm);
var tv = typeof global == "object" && global && global.Object === Object && global, rv = typeof self == "object" && self && self.Object === Object && self, ov = tv || rv || Function("return this")(), yt = ov.Symbol;
yt && yt.toStringTag;
yt && yt.toStringTag;
var Si = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(lr, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Si);
var iv = Si.exports;
const av = /* @__PURE__ */ dr(iv);
var Mi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(lr, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})(Mi);
var nv = Mi.exports;
const sv = /* @__PURE__ */ dr(nv);
var ki = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(lr, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(ki);
var lv = ki.exports;
const dv = /* @__PURE__ */ dr(lv);
ee.extend(av);
ee.extend(sv);
ee.extend(dv);
ee.extend(ev);
q(() => import("./OcModalCropper-CpI1r2JN-1k_QCy4o-Dfodqp-Y.js"));
q(() => import("./OcCropper-FDBNFr4g-thhdyR7Y-Bstp8jm-.js"));
const _i = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, cv = { class: "oc-tooltip-wrapper" }, pv = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, uv = {
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
    const r = e, t = z(!1), n = z(), s = z(), i = z(), o = () => {
      t.value = !0, i.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, o);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, o);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : o());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", cv, [
      oe(A(bm), {
        ref_key: "popper",
        ref: i,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: X(() => [
          oe(_e, { name: e.transitionName }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                T(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", pv))
              ], 2), [
                [De, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: X(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            T(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(xm), h]
    ]);
  }
}, fv = /* @__PURE__ */ vi(uv, [["__scopeId", "data-v-9f861dd7"]]), hv = { class: "flex flex-col gap-y-2 w-full" }, mv = { class: "flex gap-x-1 items-center" }, vv = {
  key: 0,
  class: "text-oc-error"
}, gv = {
  key: 0,
  class: "px-3 py-2"
}, yv = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, bv = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, xv = {
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
    return (r, t) => (m(), y("div", hv, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", mv, [
          be(U(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", vv, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(fv), ke(Se({ key: 0 }, e.tooltipOptions)), {
          popper: X(() => [
            T(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", gv, U(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: X(() => [
            oe(A(Je), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      T(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", yv, [
        T(r.$slots, "hint", {}, () => [
          be(U(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", bv, U(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, wv = ["value", "checked", "disabled"], Sv = {
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
  setup(e, { emit: r }) {
    const t = e, n = r, s = Y(() => [
      t.modelValue ? t.isDisabled ? "border-oc-primary-100 bg-oc-primary-100" : "border-oc-primary bg-oc-primary" : t.errorMessage ? "border-oc-error" : t.isDisabled ? "bg-oc-primary-50 border-oc-primary-200" : "border-oc-accent-1-200",
      t.errorMessage && t.modelValue && !t.isDisabled ? "!bg-oc-error" : "",
      t.errorMessage && !t.isDisabled ? "!border-oc-error" : "",
      t.isPartial ? t.isDisabled ? "!border-oc-primary-200 !bg-oc-primary-50" : "!border-oc-primary !bg-oc-primary-100" : ""
    ]), i = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (o, l) => (m(), F(A(xv), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: X(() => [
        C("label", {
          class: b(["flex items-center gap-x-3 cursor-pointer", {
            "!border-oc-error": e.errorMessage && e.isButtonVariant,
            "border-gray-200 border py-5 px-6 rounded cursor-pointer transition-all duration-300 !gap-x-4": e.isButtonVariant,
            "border-oc-primary-500": e.modelValue
          }])
        }, [
          C("div", {
            class: b(["w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm transition-all duration-300", s.value])
          }, [
            e.isPartial || e.modelValue ? (m(), F(A(Qe), {
              key: 0,
              class: b([
                "w-4 h-4",
                e.isPartial ? e.isDisabled ? "text-oc-primary-200" : "text-oc-primary" : "text-oc-text-100"
              ]),
              name: e.isPartial ? "minus" : "check-2"
            }, null, 8, ["class", "name"])) : x("", !0)
          ], 2),
          e.label ? (m(), y("span", {
            key: 0,
            class: b({ "text-sm": !e.isButtonVariant })
          }, U(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: i
          }, null, 40, wv),
          T(o.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Mv = ["width", "height", "viewBox"], gr = {
  __name: "OcIcon",
  props: {
    path: {
      type: String,
      default: "/icons/orchidui"
    },
    name: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    }
  },
  setup(e) {
    const r = e, t = z(null), n = (i) => {
      const o = document.createElement("div");
      o.innerHTML = i, o.querySelector("svg") && (o.querySelector("svg").removeAttribute("width"), o.querySelector("svg").removeAttribute("height"), t.value.innerHTML = o.innerHTML), o.remove();
    }, s = () => {
      let i = "";
      window.oc_icons && (i = JSON.parse(window.oc_icons).find((o) => o.name === r.name)), i ? t.value && n(i.svg) : fetch(`${r.path}/${r.name}.svg`).then((o) => o.status === 200 ? o.text() : "").then((o) => {
        if (o && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: o
              }
            ]);
          }
          n(o);
        }
      });
    };
    return pe(() => {
      s();
    }), ye(
      () => r.name,
      () => {
        s();
      }
    ), (i, o) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Mv));
  }
}, kv = { class: "flex w-[inherit]" }, _v = {
  __name: "OcPopper",
  props: {
    placement: {
      type: String,
      required: !0
    },
    /**
     * Options passed to the `popper` from `https://popper.js.org/docs/v2/modifiers/`
     */
    popperOptions: {
      type: Object
    },
    popperStyle: {
      type: Object
    },
    skidding: {
      type: Number,
      default: 0
    },
    distance: {
      type: [String, Number],
      default: 5
    },
    isFlipEnabled: {
      type: Boolean,
      default: !0
    },
    popperClass: {
      type: [String, Array, Object],
      default: ""
    },
    isAttachToBody: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = z(), n = z(), s = z(), i = e, o = () => ({
      placement: i.placement,
      modifiers: [
        {
          name: "flip",
          enabled: i.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [i.skidding, i.distance]
          }
        }
      ],
      ...i.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, o()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [i.popperOptions, i.placement, i.distance, i.skidding],
      () => {
        s.value.setOptions(o()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", kv, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        T(h.$slots, "default")
      ], 512),
      (m(), F(Oe, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Me(e.popperStyle)
        }, [
          T(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Dv = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Ov = ["disabled"], Yv = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Av = {
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
    const r = e, t = z(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), i = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), o = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && i.value[r.variant]
    ), h = Y(() => ({
      primary: r.isTransparent ? "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary" : "border border-oc-primary oc-btn-primary text-oc-text-100 dark:text-oc-text-500",
      secondary: r.isTransparent ? "text-oc-text-400 hover:text-oc-text-300 active:text-oc-text-400" : "border border-oc-gray text-oc-text-400 dark:text-oc-text-100 oc-btn-secondary",
      destructive: r.isTransparent ? "text-oc-error hover:text-oc-error-300 active:text-oc-error" : "border border-oc-error oc-btn-error text-oc-text-100 dark:text-oc-text-500"
    })), c = Y(() => ({
      default: r.isTransparent ? "py-3" : n.value ? "p-3" : "px-4 py-3",
      small: (r.isTransparent ? "" : n.value ? "w-8 p-3" : "p-3") + " h-8 text-sm",
      big: (r.isTransparent ? "py-3 " : n.value ? "py-3 px-4" : "py-3 px-[14px]") + " text-lg h-[44px]"
    })), p = Y(() => r.isRoundedFull ? "rounded-full" : "rounded"), f = Y(() => ({
      default: "18",
      small: "16",
      big: "20"
    }));
    return (M, w) => (m(), y("div", {
      class: b(["flex overflow-hidden", [l.value, p.value, e.isDisabled || e.isLoading ? "pointer-events-none" : ""]])
    }, [
      C("button", {
        class: b(["oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center", [
          h.value[e.variant],
          c.value[e.size],
          e.isActive ? "active" : "",
          e.isAdditionalArea ? "rounded-l-[inherit]" : "rounded-[inherit]"
        ]]),
        disabled: e.isDisabled || e.isLoading,
        onMousedown: w[0] || (w[0] = (R) => t.value = !0),
        onMouseup: w[1] || (w[1] = (R) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (R) => t.value = !1)
      }, [
        e.isLoading ? (m(), F(A(Qe), {
          key: 0,
          width: f.value[e.size],
          height: f.value[e.size],
          class: "animate-spin",
          name: "loading-2"
        }, null, 8, ["width", "height"])) : x("", !0),
        e.leftIcon && !e.isLoading ? (m(), F(A(Qe), {
          key: 1,
          width: f.value[e.size],
          class: b(e.iconClass),
          height: f.value[e.size],
          name: e.leftIcon
        }, null, 8, ["width", "class", "height", "name"])) : x("", !0),
        e.label ? (m(), y("span", Yv, U(e.label), 1)) : T(M.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Qe), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Ov),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((R) => M.$emit("addition-click"), ["stop"]))
      }, [
        T(M.$slots, "additional-content", {}, () => [
          oe(A(Qe), {
            name: e.additionalAreaIcon,
            class: b(o.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, hr = /* @__PURE__ */ _i(Av, [["__scopeId", "data-v-4356d06c"]]), Bv = {
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
  setup(e, { expose: r, emit: t }) {
    const n = t, s = e, i = z(), o = z(), l = async (f) => {
      f != null && f.target && (s.isDisabled || (setTimeout(() => {
        var M, w;
        return (w = (M = i.value) == null ? void 0 : M.popperInstance) == null ? void 0 : w.update();
      }, 0), n("update:modelValue", !s.modelValue)));
    }, h = (f) => {
      s.isAttachToBody && !s.preventClickOutside && i.value.checkElementIsInsidePopper(f.target) || s.modelValue && !s.preventClickOutside && n("update:modelValue", !1);
    }, c = z(), p = z(0);
    return ye(() => s.modelValue, async () => {
      const f = window.innerHeight || document.documentElement.clientHeight, M = c.value.getBoundingClientRect().top, w = f - c.value.getBoundingClientRect().bottom, R = Math.max(M, w), g = R - (2 + (R === M ? 2.5 : 0)) * 16;
      p.value = g > 0 ? g : 0, i.value.popperInstance.update();
    }), r({
      dropdownScroll: o,
      toggleDropdown: l,
      popper: i
    }), (f, M) => xe((m(), y("span", {
      ref_key: "parentElement",
      ref: c,
      class: "flex w-[inherit]"
    }, [
      oe(A(_v), {
        ref_key: "popper",
        ref: i,
        placement: e.placement,
        distance: e.distance,
        "popper-class": e.popperClass,
        skidding: e.skidding,
        "popper-style": e.popperStyle,
        "popper-options": e.popperOptions,
        "is-attach-to-body": e.isAttachToBody
      }, {
        popper: X(() => [
          oe(_e, { name: "fade" }, {
            default: X(() => [
              xe(C("div", {
                ref_key: "dropdownScroll",
                ref: o,
                class: b([e.menuClasses, "rounded bg-oc-bg-light shadow min-w-[162px] overflow-y-auto"]),
                style: Me({
                  maxHeight: (e.maxMenuHeight || p.value) - 68 + "px"
                }),
                onScroll: M[0] || (M[0] = (w) => f.$emit("scroll", w))
              }, [
                T(f.$slots, "menu", { isPopoverOpen: e.modelValue }, void 0, !0)
              ], 38), [
                [De, e.modelValue]
              ])
            ]),
            _: 3
          })
        ]),
        default: X(() => [
          C("div", {
            class: "w-[inherit] flex",
            onClick: l
          }, [
            T(f.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["placement", "distance", "popper-class", "skidding", "popper-style", "popper-options", "is-attach-to-body"])
    ])), [
      [A(Dv), h]
    ]);
  }
}, Lv = /* @__PURE__ */ _i(Bv, [["__scopeId", "data-v-28f7b7ed"]]), $v = { class: "flex items-center gap-x-3 p-3" }, Tv = { class: "md:text-base text-sm" }, Ev = {
  key: 0,
  class: "p-3 text-sm text-oc-text-300"
}, bg = {
  __name: "OcDropdownItem",
  props: {
    variant: {
      type: String,
      default: "default"
    },
    icon: String,
    iconClasses: String,
    text: String,
    subText: String,
    pointed: Boolean,
    iconProps: Object
  },
  setup(e) {
    const r = Y(() => ({
      default: "text-oc-text",
      destructive: "text-oc-error"
    }));
    return (t, n) => (m(), y("div", {
      class: b(["flex flex-col cursor-pointer rounded-sm hover:bg-oc-accent-1-50", r.value[e.variant]])
    }, [
      C("div", $v, [
        e.icon ? (m(), F(A(Qe), Se({
          key: 0,
          class: "w-5 h-5",
          name: e.icon
        }, e.iconProps, { class: e.iconClasses }), null, 16, ["name", "class"])) : x("", !0),
        C("span", Tv, U(e.text), 1),
        e.pointed ? T(t.$slots, "badge", { key: 1 }, () => [
          n[0] || (n[0] = C("div", { class: "w-[6px] aspect-square rounded-full bg-oc-error" }, null, -1))
        ]) : x("", !0)
      ]),
      e.subText ? (m(), y("div", Ev, [
        C("span", null, U(e.subText), 1)
      ])) : x("", !0)
    ], 2));
  }
};
q(() => import("./OcLineChart-5etKydFR-BvvYvRDM.js"));
q(() => import("./OcPieChart-CZQMvsNk-D5EXDGzB.js"));
q(() => import("./OcBarChart-DtUGrxIP-DmdXQgi-.js"));
q(() => import("./OcBarRaceChart-DAFrLa52-DgcsgvMb.js"));
var cr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Di = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(cr, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
      return (a = +a) + (a > 68 ? 1900 : 2e3);
    }, p = function(a) {
      return function(d) {
        this[a] = +d;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(a) {
      (this.zone || (this.zone = {})).offset = function(d) {
        if (!d || d === "Z") return 0;
        var u = d.match(/([+-]|\d\d)/g), v = 60 * u[1] + (+u[2] || 0);
        return v === 0 ? 0 : u[0] === "+" ? -v : v;
      }(a);
    }], M = function(a) {
      var d = h[a];
      return d && (d.indexOf ? d : d.s.concat(d.f));
    }, w = function(a, d) {
      var u, v = h.meridiem;
      if (v) {
        for (var O = 1; O <= 24; O += 1) if (a.indexOf(v(O, 0, d)) > -1) {
          u = O > 12;
          break;
        }
      } else u = a === (d ? "pm" : "PM");
      return u;
    }, R = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [i, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [o, p("seconds")], ss: [o, p("seconds")], m: [o, p("minutes")], mm: [o, p("minutes")], H: [o, p("hours")], h: [o, p("hours")], HH: [o, p("hours")], hh: [o, p("hours")], D: [o, p("day")], DD: [i, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d) for (var v = 1; v <= 31; v += 1) d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [o, p("week")], ww: [i, p("week")], M: [o, p("month")], MM: [i, p("month")], MMM: [l, function(a) {
      var d = M("months"), u = (M("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1) throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = M("months").indexOf(a) + 1;
      if (d < 1) throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Z, B, S) {
        var k = S && S.toUpperCase();
        return B || u[S] || t[S] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(V, j, H) {
          return j || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = R[N], _ = E && E[0], L = E && E[1];
        v[I] = L ? { regex: _, parser: L } : N.replace(/^\[|\]$/g, "");
      }
      return function(Z) {
        for (var B = {}, S = 0, k = 0; S < O; S += 1) {
          var V = v[S];
          if (typeof V == "string") k += V.length;
          else {
            var j = V.regex, H = V.parser, Q = Z.slice(k), P = j.exec(Q)[0];
            H.call(B, P), Z = Z.replace(P, "");
          }
        }
        return function($) {
          var J = $.afternoon;
          if (J !== void 0) {
            var D = $.hours;
            J ? D < 12 && ($.hours += 12) : D === 12 && ($.hours = 0), delete $.afternoon;
          }
        }(B), B;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var L = _[1];
        if (typeof L == "string") {
          var Z = _[2] === !0, B = _[3] === !0, S = Z || B, k = _[2];
          B && (k = _[2]), h = this.$locale(), !Z && k && (h = u.Ls[k]), this.$d = function(Q, P, $, J) {
            try {
              if (["x", "X"].indexOf(P) > -1) return new Date((P === "X" ? 1e3 : 1) * Q);
              var D = g(P)(Q), ce = D.year, re = D.month, ve = D.day, ge = D.hours, ie = D.minutes, le = D.seconds, G = D.milliseconds, se = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ae = ve || (ce || re ? 1 : te.getDate()), ne = ce || te.getFullYear(), K = 0;
              ce && !re || (K = re > 0 ? re - 1 : te.getMonth());
              var W, ue = ge || 0, fe = ie || 0, he = le || 0, me = G || 0;
              return se ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me + 60 * se.offset * 1e3)) : $ ? new Date(Date.UTC(ne, K, ae, ue, fe, he, me)) : (W = new Date(ne, K, ae, ue, fe, he, me), de && (W = J(W).week(de).toDate()), W);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, L, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), S && N != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (L instanceof Array) for (var V = L.length, j = 1; j <= V; j += 1) {
          _[1] = L[j - 1];
          var H = u.apply(this, _);
          if (H.isValid()) {
            this.$d = H.$d, this.$L = H.$L, this.init();
            break;
          }
          j === V && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else O.call(this, I);
      };
    };
  });
})(Di);
var Iv = Di.exports;
const Oi = /* @__PURE__ */ pr(Iv);
var Vv = typeof global == "object" && global && global.Object === Object && global, Cv = typeof self == "object" && self && self.Object === Object && self, Yi = Vv || Cv || Function("return this")(), bt = Yi.Symbol, Ai = Object.prototype, zv = Ai.hasOwnProperty, jv = Ai.toString, Xe = bt ? bt.toStringTag : void 0;
function Zv(e) {
  var r = zv.call(e, Xe), t = e[Xe];
  try {
    e[Xe] = void 0;
    var n = !0;
  } catch {
  }
  var s = jv.call(e);
  return n && (r ? e[Xe] = t : delete e[Xe]), s;
}
var Nv = Object.prototype, Pv = Nv.toString;
function Hv(e) {
  return Pv.call(e);
}
var Fv = "[object Null]", Rv = "[object Undefined]", yr = bt ? bt.toStringTag : void 0;
function qv(e) {
  return e == null ? e === void 0 ? Rv : Fv : yr && yr in Object(e) ? Zv(e) : Hv(e);
}
function Uv(e) {
  return e != null && typeof e == "object";
}
function vr(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Jv = "[object Symbol]";
function Qv(e) {
  return typeof e == "symbol" || Uv(e) && qv(e) == Jv;
}
var Xv = /\s/;
function Kv(e) {
  for (var r = e.length; r-- && Xv.test(e.charAt(r)); )
    ;
  return r;
}
var Wv = /^\s+/;
function Gv(e) {
  return e && e.slice(0, Kv(e) + 1).replace(Wv, "");
}
var br = NaN, e0 = /^[-+]0x[0-9a-f]+$/i, t0 = /^0b[01]+$/i, r0 = /^0o[0-7]+$/i, o0 = parseInt;
function xr(e) {
  if (typeof e == "number")
    return e;
  if (Qv(e))
    return br;
  if (vr(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vr(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Gv(e);
  var t = t0.test(e);
  return t || r0.test(e) ? o0(e.slice(2), t ? 2 : 8) : e0.test(e) ? br : +e;
}
var mr = function() {
  return Yi.Date.now();
}, i0 = "Expected a function", a0 = Math.max, n0 = Math.min;
function s0(e, r, t) {
  var n, s, i, o, l, h, c = 0, p = !1, f = !1, M = !0;
  if (typeof e != "function")
    throw new TypeError(i0);
  r = xr(r) || 0, vr(t) && (p = !!t.leading, f = "maxWait" in t, i = f ? a0(xr(t.maxWait) || 0, r) : i, M = "trailing" in t ? !!t.trailing : M);
  function w(N) {
    var E = n, _ = s;
    return n = s = void 0, c = N, o = e.apply(_, E), o;
  }
  function R(N) {
    return c = N, l = setTimeout(d, r), p ? w(N) : o;
  }
  function g(N) {
    var E = N - h, _ = N - c, L = r - E;
    return f ? n0(L, i - _) : L;
  }
  function a(N) {
    var E = N - h, _ = N - c;
    return h === void 0 || E >= r || E < 0 || f && _ >= i;
  }
  function d() {
    var N = mr();
    if (a(N))
      return u(N);
    l = setTimeout(d, g(N));
  }
  function u(N) {
    return l = void 0, M && n ? w(N) : (n = s = void 0, o);
  }
  function v() {
    l !== void 0 && clearTimeout(l), c = 0, n = h = s = l = void 0;
  }
  function O() {
    return l === void 0 ? o : u(mr());
  }
  function I() {
    var N = mr(), E = a(N);
    if (n = arguments, s = this, h = N, E) {
      if (l === void 0)
        return R(h);
      if (f)
        return clearTimeout(l), l = setTimeout(d, r), w(h);
    }
    return l === void 0 && (l = setTimeout(d, r)), o;
  }
  return I.cancel = v, I.flush = O, I;
}
var Bi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(cr, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(i, o, l, h) {
        var c = s(i), p = s(o), f = (h = h || "()")[0] === "(", M = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (M ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (M ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Bi);
var l0 = Bi.exports;
const Li = /* @__PURE__ */ pr(l0);
var $i = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(cr, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, i) {
        return this.isSame(s, i) || this.isBefore(s, i);
      };
    };
  });
})($i);
var d0 = $i.exports;
const Ti = /* @__PURE__ */ pr(d0);
var Ei = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(cr, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, i) {
        return this.isSame(s, i) || this.isAfter(s, i);
      };
    };
  });
})(Ei);
var c0 = Ei.exports;
const Ii = /* @__PURE__ */ pr(c0), p0 = { class: "flex items-center justify-between" }, u0 = { class: "flex flex-col gap-2 p-3" }, f0 = { class: "flex justify-between items-center" }, h0 = { key: 0 }, m0 = { key: 1 }, v0 = {
  key: 0,
  class: "grid grid-cols-3 gap-3"
}, g0 = ["onClick"], y0 = {
  key: 1,
  class: "grid grid-cols-3 gap-3"
}, b0 = ["onClick"], x0 = ["onClick", "onMouseover"], w0 = { key: 0 }, S0 = { class: "flex gap-x-3 justify-end" }, xg = {
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
      validator: (e) => Array.isArray(e) ? ee(e[0]).isSameOrBefore(ee(e[1])) : !0
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
  setup(e, { emit: r }) {
    ee.extend(Li), ee.extend(Ti), ee.extend(Ii), ee.extend(Oi);
    const t = e, n = r, s = z(), i = z(), o = z(), l = z(), h = z(), c = z(), p = z(), f = z(!1), M = z(!1), w = z(!1), R = z(!1), g = Y(() => t.type === "range"), a = Y(() => {
      const ie = s.value.endOf("month").date();
      return Array.from({ length: ie }, (le, G) => G + 1);
    }), d = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], u = Y(() => s.value.format("MMMM YYYY")), v = Y(
      () => w.value ? c.value.format("YYYY") : s.value.format("YYYY")
    ), O = Y(() => s.value.format("MMM")), I = Y(() => {
      const ie = i.value, le = o.value ?? p.value, G = [ie, le];
      return le && ie != null && ie.isAfter(le) && G.reverse(), {
        from: G[0],
        to: G[1]
      };
    }), N = Y(
      () => Object.values(I.value).filter(Boolean).length > 1
    ), E = Y(() => s.value.month()), _ = Y(
      () => {
        var ie;
        return E.value === ((ie = i.value) == null ? void 0 : ie.month());
      }
    ), L = Y(
      () => {
        var ie;
        return E.value === ((ie = o.value) == null ? void 0 : ie.month());
      }
    ), Z = () => {
      p.value = null, s.value = s.value.subtract(1, "month"), i.value && (l.value = _.value ? i.value.date() : null, h.value = L.value ? o.value.date() : null);
    }, B = () => {
      p.value = null, s.value = s.value.add(1, "month"), l.value = _.value ? i.value.date() : null, h.value = L.value ? o.value.date() : null;
    }, S = (ie) => {
      p.value = null, s.value = s.value.set("month", ie), R.value = !1;
    }, k = (ie) => {
      p.value = null, s.value = s.value.set("year", ie), w.value = !1;
    }, V = () => {
      p.value = null, w.value ? c.value = c.value.subtract(11, "year") : s.value = s.value.subtract(1, "year");
    }, j = () => {
      p.value = null, w.value ? c.value = c.value.add(11, "year") : s.value = s.value.add(1, "year");
    }, H = () => {
      w.value = !1, R.value = !R.value;
    }, Q = (ie) => {
      const le = s.value.date(ie);
      return Object.values(I.value).filter(Boolean).find((G) => G.isSame(le));
    }, P = (ie) => g.value ? N.value ? s.value.date(ie).isBetween(
      I.value.from,
      I.value.to,
      null,
      "[]"
    ) : !1 : l.value && h.value && l.value <= ie && h.value >= ie, $ = (ie) => {
      const le = s.value.date(ie);
      return t.disabledDate(le.toDate()) || t.minDate && le.isBefore(ee(t.minDate), "day") || t.maxDate && le.isAfter(ee(t.maxDate), "day");
    }, J = () => {
      g.value && ($(i.value.toDate()) || $(o.value.toDate())) || (M.value = !1, n(
        "update:modelValue",
        g.value ? [I.value.from, I.value.to].map((ie) => ie.toDate()) : i.value.toDate()
      ));
    }, D = (ie) => {
      n("update:isIndefinite", ie);
    }, ce = (ie, le = !0) => {
      if (!g.value) {
        let se = ee(u.value, "MMMM YYYY").date(ie);
        l.value = ie, i.value = se, h.value = null, o.value = null, J();
        return;
      }
      let G = ie && s.value.date(ie);
      if (!M.value) {
        l.value = ie, i.value = G, h.value = void 0, o.value = void 0, M.value = !0;
        return;
      }
      o.value = G, h.value = ie, le && J();
    }, re = s0((ie) => {
      M.value && ce(ie, !1);
    }, 50), ve = () => {
      var ie, le, G;
      const se = g.value ? (ie = t.modelValue) == null ? void 0 : ie[0] : t.modelValue;
      s.value = ee(se), c.value = ee(se), i.value = se && s.value, l.value = se && i.value.date(), !(!g.value || !se) && (o.value = ee((le = t.modelValue) == null ? void 0 : le[1]), h.value = ((G = o.value) == null ? void 0 : G.month()) === s.value.month() ? o.value.date() : void 0);
    }, ge = (ie) => {
      const le = ie + 11, G = [];
      for (; ie <= le; )
        G.push(ie++);
      return G;
    };
    return ve(), (ie, le) => (m(), y("div", {
      class: b(["p-6 w-fit rounded flex flex-col gap-y-7", e.position === "floating" ? "shadow-normal bg-white" : ""])
    }, [
      C("div", p0, [
        oe(A(Lv), {
          modelValue: R.value,
          "onUpdate:modelValue": le[1] || (le[1] = (G) => R.value = G),
          distance: 10,
          position: "bottom",
          "is-popover": "",
          trigger: "click",
          "popper-options": { strategy: "fixed" }
        }, {
          menu: X(() => [
            C("div", u0, [
              C("div", f0, [
                oe(A(hr), {
                  "left-icon": "chevron-left",
                  "is-transparent": "",
                  onClick: V
                }),
                C("div", {
                  class: "cursor-pointer hover:opacity-50 transition",
                  onClick: le[0] || (le[0] = (G) => w.value = !w.value)
                }, [
                  w.value ? (m(), y("div", h0, U(v.value - 11) + " - " + U(v.value), 1)) : (m(), y("div", m0, U(v.value), 1))
                ]),
                oe(A(hr), {
                  "left-icon": "chevron-right",
                  "is-transparent": "",
                  onClick: j
                })
              ]),
              w.value ? (m(), y("div", v0, [
                (m(!0), y(ur, null, fr(ge(v.value - 11), (G) => (m(), y("div", {
                  key: G,
                  class: b(["px-4 py-2 hover:border-oc-gray-200 border-2 border-transparent transition text-center rounded cursor-pointer", {
                    "!border-oc-primary bg-oc-primary text-white": s.value.year() === G
                  }]),
                  onClick: (se) => k(G)
                }, U(G), 11, g0))), 128))
              ])) : (m(), y("div", y0, [
                (m(), y(ur, null, fr(d, (G, se) => C("div", {
                  key: G,
                  class: b(["px-4 py-2 hover:border-oc-gray-200 border-2 border-transparent transition text-center rounded cursor-pointer", {
                    "!border-oc-primary bg-oc-primary text-white": O.value === G
                  }]),
                  onClick: (de) => S(se)
                }, U(G), 11, b0)), 64))
              ]))
            ])
          ]),
          default: X(() => [
            C("span", {
              class: b([[f.value ? "pointer-events-none opacity-[.35]" : ""], "cursor-pointer hover:opacity-50 transition"]),
              onClick: we(H, ["stop"])
            }, U(u.value), 3)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        C("div", {
          class: b(["flex gap-x-3", [f.value ? "pointer-events-none opacity-[.35]" : ""]])
        }, [
          oe(A(gr), {
            name: "chevron-down",
            class: "rotate-90 cursor-pointer",
            onClick: Z
          }),
          oe(A(gr), {
            name: "chevron-down",
            class: "-rotate-90 cursor-pointer",
            onClick: B
          })
        ], 2)
      ]),
      C("div", {
        class: "grid grid-cols-7 w-fit gap-3",
        onMouseout: le[2] || (le[2] = (G) => A(re)(void 0))
      }, [
        (m(!0), y(ur, null, fr(a.value, (G) => {
          var se;
          return m(), y("div", {
            key: G,
            class: b(["w-9 rounded-full flex cursor-pointer items-center relative justify-center h-9", [
              Q(G) ? "bg-oc-primary text-white" : "hover:bg-oc-primary-50-tr",
              $(G) ? "pointer-events-none opacity-[.35]" : "",
              g.value ? {
                ...P(G) && {
                  "before:bg-oc-primary-50-tr before:px-3 before:w-[calc(100%+0.5rem)] before:h-full before:absolute": !0,
                  "before:rounded-l-full before:left-0 before:!w-[calc(100%+0.25rem)]": I.value.from.isSame(s.value.date(G)),
                  "before:rounded-r-full before:right-0 before:!w-[calc(100%+0.25rem)]": (se = I.value.to) == null ? void 0 : se.isSame(s.value.date(G))
                },
                "before:bg-transparent": l.value !== null && l.value === h.value
              } : ""
            ]]),
            onClick: (de) => ce(G),
            onMouseover: (de) => A(re)(G)
          }, U(G), 43, x0);
        }), 128))
      ], 32),
      T(ie.$slots, "bottom", {}, () => [
        e.isIndefinite ? (m(), y("span", w0, [
          oe(A(Sv), {
            modelValue: f.value,
            "onUpdate:modelValue": [
              le[3] || (le[3] = (G) => f.value = G),
              D
            ],
            label: e.inDefiniteLabel
          }, null, 8, ["modelValue", "label"])
        ])) : x("", !0)
      ]),
      C("div", S0, [
        oe(A(hr), {
          label: "Reset",
          class: "w-[72px]",
          "is-disabled": f.value,
          onClick: le[4] || (le[4] = (G) => n("reset-calendar"))
        }, null, 8, ["is-disabled"])
      ])
    ], 2));
  }
};
ee.extend(Li);
ee.extend(Ti);
ee.extend(Ii);
ee.extend(Oi);
q(() => import("./OcModalCropper-BUfsRezg-CBI5huNS.js"));
q(() => import("./OcCropper-dmUsZD15-CwCDUnjF.js"));
export {
  Te as $,
  Ae as A,
  $e as B,
  rl as C,
  Ve as D,
  Hn as E,
  A0 as F,
  z0 as G,
  F0 as H,
  Ie as I,
  T0 as J,
  V0 as K,
  Le as L,
  Ld as M,
  gg as N,
  H0 as O,
  sc as P,
  I0 as Q,
  $0 as R,
  $l as S,
  Dv as T,
  L0 as U,
  Ce as V,
  C0 as W,
  E0 as X,
  q0 as Y,
  B0 as Z,
  R0 as _,
  hr as a,
  pi as a$,
  ld as a0,
  Cc as a1,
  ze as a2,
  J0 as a3,
  U0 as a4,
  zd as a5,
  fp as a6,
  je as a7,
  X0 as a8,
  Q0 as a9,
  $h as aA,
  Re as aB,
  lg as aC,
  sg as aD,
  Tf as aE,
  lm as aF,
  qe as aG,
  cg as aH,
  dg as aI,
  dh as aJ,
  jm as aK,
  Ue as aL,
  ug as aM,
  pg as aN,
  jh as aO,
  fv as aP,
  Je as aQ,
  hg as aR,
  fg as aS,
  mm as aT,
  Sv as aU,
  qm as aV,
  xg as aW,
  mg as aX,
  Lv as aY,
  bg as aZ,
  vi as a_,
  hc as aa,
  Hp as ab,
  Ze as ac,
  W0 as ad,
  K0 as ae,
  Fc as af,
  bu as ag,
  Ne as ah,
  eg as ai,
  G0 as aj,
  xp as ak,
  Qu as al,
  Pe as am,
  rg as an,
  tg as ao,
  Xp as ap,
  Df as aq,
  He as ar,
  ig as as,
  og as at,
  Du as au,
  rh as av,
  Fe as aw,
  ng as ax,
  ag as ay,
  rf as az,
  Mr as b,
  ni as b0,
  ti as b1,
  Xo as b2,
  Ro as b3,
  Zo as b4,
  Io as b5,
  Bo as b6,
  _o as b7,
  xo as b8,
  mo as b9,
  co as ba,
  io as bb,
  Gr as bc,
  Jr as bd,
  Hr as be,
  zr as bf,
  Tr as bg,
  wr as bh,
  yg as c,
  Be as d,
  Ha as e,
  Qe as f,
  bs as g,
  Qs as h,
  Xn as i,
  _l as j,
  Yr as k,
  Ee as l,
  gr as m,
  j0 as n,
  fn as o,
  xn as p,
  vg as q,
  _i as r,
  Ds as s,
  Z0 as t,
  td as u,
  Im as v,
  P0 as w,
  _v as x,
  N0 as y,
  xv as z
};
