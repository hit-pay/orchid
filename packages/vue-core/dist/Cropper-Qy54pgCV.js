import { defineAsyncComponent as U, ref as V, onMounted as pe, watch as ye, openBlock as m, createElementBlock as y, computed as Y, createBlock as F, unref as A, withCtx as Q, createElementVNode as C, normalizeClass as b, createCommentVNode as x, toDisplayString as R, renderSlot as $, createTextVNode as be, normalizeProps as ke, mergeProps as Me, createVNode as ie, withModifiers as we, withDirectives as xe, Transition as _e, vShow as Oe, Teleport as De, normalizeStyle as Se, Fragment as lr, renderList as dr } from "vue";
import ee from "dayjs";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import { createPopper as Ye } from "@popperjs/core";
const gr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
};
U(() => import("./OcLineChart-D0z2Bctc-BuAH-wZq-BjB-2UeV-C1c4Rqu_-Dk2WcEDe-DA1MkJkv-CAZRdOaU-bGAxwr72-DpfRppcj-DI6KUfLU-B3YoITTo-CuYJe0aO-PTEb0ARZ-D1Z9daMT-D8qe4I11-DuRYa4Tx-BctExbX8-DceJ03Uu-COAG6AdF-C9PislHB-CSN0pEiK-CX-HWIdZ-9-WPWxXP.js"));
U(() => import("./OcPieChart-Nfalnu3g-DVLzSA0y-BruL1fVX-CXhm3T6B-G7Srd_Lp-DRaib-q7-B68_X37X-CbFAVZsR-zAn39g78-bM_4bi4P-DkW0Bk40-B8ZszLxm-BvLDo1Lk-Btmr8k37-lsklD7xS-BhdRMwVI-CS-sMuPc-COAUiXmX-Bw02qqvC-DEFHtlI7-C1HeVgxe-CIXVzXI8-BNnyQUgK.js"));
U(() => import("./OcBarChart-B44tLq7l-CsW2e_HJ-C7lrqekI-DnD68uLd-LAJLcb6d-_fsne0HV-exHjK1Ih-DlktopAB-B7jypgX4-B1lHt1NC--uXnbHQF-dwdpwWfT-FG990gOc-B8pYaLDY-DFqI73Dz-Cqf_FsBN-BtXxhDTK-BqOusRcz-BdYqo4HB-9dhxZDea-DbBJTRaG-Lqbq_3Ud-CWCxcpbR.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-BnH-hbuu-6oOGXcF--DxBUuGcn-6nNmYnFh-DY1nWhAk-DSFY-XVy-C32AFymJ-CRJt_Wmb-BEtn0p-2-D-Z5rvOo-WShcmG1e-CvkkPIff-DYGH8jcE-fI1bRrJk-wauFkPaq-CKf2DCI1-CDmUzovb-BlV-A-dq-dMFCoZgq-a6q5wnLu-Dkgh65pC-DqPCfG5s.js"));
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Di = typeof global == "object" && global && global.Object === Object && global, Yi = typeof self == "object" && self && self.Object === Object && self, Ai = Di || Yi || Function("return this")(), Qe = Ai.Symbol;
Qe && Qe.toStringTag;
Qe && Qe.toStringTag;
const Ti = ["width", "height", "viewBox"], Ae = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Ti));
  }
};
U(() => import("./OcModalCropper-DI2c75uE-B2gKET0s-BrqGOpcn-BA7k90xB-BDxloh2h-DYM8nPeZ-DvtSVeif-DTwnokbn-CbyW_c0i-D52IVlMB-D7seZRX_-DjOylXTy-BrEwQijW-IB1HaOhO-Cr8ZKUP2-D0BjS6j0-BbmAWDWZ-Bq1E2Kuh-DHg4p1Br-BGodGxbY-Bnrr8Jgq-DAqPpzrc-DaxZffr-.js"));
U(() => import("./OcCropper-CosaNdTf-DC4QVqTg-BfA-IuYG-BXB-J76i-Cdi44VXO-B32QEYmH-B3qZBV9u-CHMvllHt-DN5F0eF4-DnCFLg3T-Df-uLEzX-Cw0Ux5pJ-C6CEDQEy-Cmda1W7P-rwEYL1v8-D2TWGxeR-CpRIty4j-CPLD7tG6-mm3_-EoU-CnBFoxfz-CdKuPyCO-B0p6lDvl-uHMUfpsH.js"));
const Li = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Bi = { class: "flex w-[inherit]" }, yr = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Bi, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, $i = { class: "flex flex-col gap-y-2 w-full" }, Ei = { class: "flex gap-x-1 items-center" }, Ii = {
  key: 0,
  class: "text-oc-error"
}, ji = {
  key: 0,
  class: "px-3 py-2"
}, Ci = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Vi = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, br = {
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
    return (r, t) => (m(), y("div", $i, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Ei, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Ii, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(kr), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", ji, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Ae), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Ci, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Vi, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, zi = ["disabled"], qi = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Ni = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", qi, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ae), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, zi),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Ae), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, Fv = /* @__PURE__ */ gr(Ni, [["__scopeId", "data-v-91955efd"]]), Pi = ["value", "checked", "disabled"], Zv = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(br), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, Pi),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
};
var xr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(yt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(xr);
var Hi = xr.exports;
const Fi = /* @__PURE__ */ bt(Hi);
var wr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(yt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(wr);
var Zi = wr.exports;
const Ui = /* @__PURE__ */ bt(Zi);
var Mr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(yt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(Mr);
var Ri = Mr.exports;
const Ji = /* @__PURE__ */ bt(Ri);
var Sr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(yt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, o = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
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
    }, S = function(g, a) {
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
    }, w = { A: [i, function(g) {
      this.afternoon = S(g, !1);
    }], a: [i, function(g) {
      this.afternoon = S(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [s, c("day")], Do: [i, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [o, c("month")], MM: [s, c("month")], MMM: [i, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [i, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function Z(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, q, T) {
        var M = T && T.toUpperCase();
        return q || d[T] || t[T] || d[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, j, z) {
          return j || z.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var q = {}, T = 0, M = 0; T < v; T += 1) {
          var k = u[T];
          if (typeof k == "string")
            M += k.length;
          else {
            var j = k.regex, z = k.parser, H = B.slice(M), X = j.exec(H)[0];
            z.call(q, X), B = B.replace(X, "");
          }
        }
        return function(P) {
          var L = P.afternoon;
          if (L !== void 0) {
            var J = P.hours;
            L ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(q), q;
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
          var B = E[2] === !0, q = E[3] === !0, T = B || q, M = E[2];
          q && (M = E[2]), l = this.$locale(), !B && M && (l = d.Ls[M]), this.$d = function(H, X, P) {
            try {
              if (["x", "X"].indexOf(X) > -1)
                return new Date((X === "X" ? 1e3 : 1) * H);
              var L = Z(X)(H), J = L.year, D = L.month, ce = L.day, oe = L.hours, ve = L.minutes, ge = L.seconds, re = L.milliseconds, le = L.zone, K = /* @__PURE__ */ new Date(), ae = ce || (J || D ? 1 : K.getDate()), de = J || K.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : K.getMonth());
              var ne = oe || 0, se = ve || 0, W = ge || 0, G = re || 0;
              return le ? new Date(Date.UTC(de, te, ae, ne, se, W, G + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, ae, ne, se, W, G)) : new Date(de, te, ae, ne, se, W, G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), T && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, j = 1; j <= k; j += 1) {
            E[1] = _[j - 1];
            var z = d.apply(this, E);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            j === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(Sr);
var Xi = Sr.exports;
const Qi = /* @__PURE__ */ bt(Xi);
ee.extend(Fi);
ee.extend(Ui);
ee.extend(Ji);
ee.extend(Qi);
const Ki = { class: "oc-tooltip-wrapper" }, Wi = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Gi = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Ki, [
      ie(A(yr), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Wi))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Li), h]
    ]);
  }
}, kr = /* @__PURE__ */ gr(Gi, [["__scopeId", "data-v-8a7abb6f"]]);
U(() => import("./OcLineChart-D0z2Bctc-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32-GYKXzT7L-BI8rW5hT-Bx2Fn_IQ-C19FiVnw.js"));
U(() => import("./OcPieChart-Dm0zQrck-atZIjjxj-BITkIWKN-_Uua7FNm-dqKvRKLb-CCwB2cMK-DVy5V07I-e8W4aRMf-BWwkZXqN-CMR9F--g-CbECHlc2-BhKKCk1I-MaC_krbe-Cy25gGcq-CpFOil5D-ChH3yUAZ-D1vmVU6M-BYVgXP_2-BuNfYfVC-DeOxbTPS-KH-cQUfv-RUs0SP2W.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy-CzkBGmG1-CC29yuXu-LY2dEQCD-8rrTFU4Y.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3-BEunsKcE-De4sFGLW-DeC2TEn3-C3gcpRbE.js"));
var xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _r = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(xt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, o = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
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
    }, S = function(g, a) {
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
    }, w = { A: [i, function(g) {
      this.afternoon = S(g, !1);
    }], a: [i, function(g) {
      this.afternoon = S(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [s, c("day")], Do: [i, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [o, c("month")], MM: [s, c("month")], MMM: [i, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [i, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function Z(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, q, T) {
        var M = T && T.toUpperCase();
        return q || d[T] || t[T] || d[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, j, z) {
          return j || z.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var q = {}, T = 0, M = 0; T < v; T += 1) {
          var k = u[T];
          if (typeof k == "string")
            M += k.length;
          else {
            var j = k.regex, z = k.parser, H = B.slice(M), X = j.exec(H)[0];
            z.call(q, X), B = B.replace(X, "");
          }
        }
        return function(P) {
          var L = P.afternoon;
          if (L !== void 0) {
            var J = P.hours;
            L ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(q), q;
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
          var B = E[2] === !0, q = E[3] === !0, T = B || q, M = E[2];
          q && (M = E[2]), l = this.$locale(), !B && M && (l = d.Ls[M]), this.$d = function(H, X, P) {
            try {
              if (["x", "X"].indexOf(X) > -1)
                return new Date((X === "X" ? 1e3 : 1) * H);
              var L = Z(X)(H), J = L.year, D = L.month, ce = L.day, oe = L.hours, ve = L.minutes, ge = L.seconds, re = L.milliseconds, le = L.zone, K = /* @__PURE__ */ new Date(), ae = ce || (J || D ? 1 : K.getDate()), de = J || K.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : K.getMonth());
              var ne = oe || 0, se = ve || 0, W = ge || 0, G = re || 0;
              return le ? new Date(Date.UTC(de, te, ae, ne, se, W, G + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, ae, ne, se, W, G)) : new Date(de, te, ae, ne, se, W, G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), T && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, j = 1; j <= k; j += 1) {
            E[1] = _[j - 1];
            var z = d.apply(this, E);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            j === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(_r);
var ea = _r.exports;
const ta = /* @__PURE__ */ wt(ea);
var ra = typeof global == "object" && global && global.Object === Object && global, oa = typeof self == "object" && self && self.Object === Object && self, ia = ra || oa || Function("return this")(), Ke = ia.Symbol;
Ke && Ke.toStringTag;
Ke && Ke.toStringTag;
var Or = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(xt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Or);
var aa = Or.exports;
const na = /* @__PURE__ */ wt(aa);
var Dr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(xt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Dr);
var sa = Dr.exports;
const la = /* @__PURE__ */ wt(sa);
var Yr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(xt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(Yr);
var da = Yr.exports;
const ca = /* @__PURE__ */ wt(da);
ee.extend(na);
ee.extend(la);
ee.extend(ca);
ee.extend(ta);
U(() => import("./OcModalCropper-ceUukBO4-qP7ZXOh5-2clD1ViD-Cy_TWN6Y-DDDDFpHt-DilUEIxU-qUcj-2rz-vJZ5yDoK-D3SQtiBQ-CyIfAzAR-DpfDfeqX-DgTp1GWt-DV3e6jHt-QDsg0f1T-CcVKBvb6-Dhx1bWuy-DaZ7gOOp--om4atJW-mYPqliSc-BG-Qu4jd-VM2Xz20V-DUO4jTIb.js"));
U(() => import("./OcCropper-CmYSwZTR-CBRIr5ua-D8MzPe6E-DCXljtgQ-Bm3gi2wr-JE4fkSiL-BWxK46Q_-DoT_YN-E-DtP4kCr8-B7x8P42F-CXrP3-3b-C5porYl4-Cjc90Rum-BQgizFZ_-Cfd8nqG0-Dto-uwSh-5hnKBNva-C90ODea7-CtK0ERbR-RtZYmSlH-CVAcsZQ_-MGFLfPrV.js"));
const Ar = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, pa = ["value", "checked", "disabled"], Uv = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(br), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, pa),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, ua = ["width", "height", "viewBox"], Te = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, ua));
  }
}, fa = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, ha = ["disabled"], ma = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, va = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", ma, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ae), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, ha),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Ae), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, Rv = /* @__PURE__ */ Ar(va, [["__scopeId", "data-v-91955efd"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32-GYKXzT7L-BI8rW5hT-Bx2Fn_IQ.js"));
U(() => import("./OcPieChart-C95F3Uen-Bd8uYHVF-C66Yf5qC-GcCurat5-LjfBt62h--648JpMW-D3mCdrUI-DhzCSRoM-C6J-r5ZL-C8V_p6H4-Cf5CBSF9-B45J-bcA-CrHdWawI-Bl2U4ks--CWp3peSv-5UZ9VduI-CWc_E8Xc-DDt1knyc-DGUZmxM9-DxrdY8Ea-CywUbOSe.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy-CzkBGmG1-CC29yuXu-LY2dEQCD.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3-BEunsKcE-De4sFGLW-DeC2TEn3.js"));
var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function St(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Mt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, o = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
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
    }, S = function(g, a) {
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
    }, w = { A: [i, function(g) {
      this.afternoon = S(g, !1);
    }], a: [i, function(g) {
      this.afternoon = S(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [s, c("day")], Do: [i, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [o, c("month")], MM: [s, c("month")], MMM: [i, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [i, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function Z(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, q, T) {
        var M = T && T.toUpperCase();
        return q || d[T] || t[T] || d[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, j, z) {
          return j || z.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var q = {}, T = 0, M = 0; T < v; T += 1) {
          var k = u[T];
          if (typeof k == "string")
            M += k.length;
          else {
            var j = k.regex, z = k.parser, H = B.slice(M), X = j.exec(H)[0];
            z.call(q, X), B = B.replace(X, "");
          }
        }
        return function(P) {
          var L = P.afternoon;
          if (L !== void 0) {
            var J = P.hours;
            L ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(q), q;
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
          var B = E[2] === !0, q = E[3] === !0, T = B || q, M = E[2];
          q && (M = E[2]), l = this.$locale(), !B && M && (l = d.Ls[M]), this.$d = function(H, X, P) {
            try {
              if (["x", "X"].indexOf(X) > -1)
                return new Date((X === "X" ? 1e3 : 1) * H);
              var L = Z(X)(H), J = L.year, D = L.month, ce = L.day, oe = L.hours, ve = L.minutes, ge = L.seconds, re = L.milliseconds, le = L.zone, K = /* @__PURE__ */ new Date(), ae = ce || (J || D ? 1 : K.getDate()), de = J || K.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : K.getMonth());
              var ne = oe || 0, se = ve || 0, W = ge || 0, G = re || 0;
              return le ? new Date(Date.UTC(de, te, ae, ne, se, W, G + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, ae, ne, se, W, G)) : new Date(de, te, ae, ne, se, W, G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), T && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, j = 1; j <= k; j += 1) {
            E[1] = _[j - 1];
            var z = d.apply(this, E);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            j === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(Tr);
var ga = Tr.exports;
const ya = /* @__PURE__ */ St(ga);
var ba = typeof global == "object" && global && global.Object === Object && global, xa = typeof self == "object" && self && self.Object === Object && self, wa = ba || xa || Function("return this")(), We = wa.Symbol;
We && We.toStringTag;
We && We.toStringTag;
var Lr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Mt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Lr);
var Ma = Lr.exports;
const Sa = /* @__PURE__ */ St(Ma);
var Br = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Mt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Br);
var ka = Br.exports;
const _a = /* @__PURE__ */ St(ka);
var $r = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Mt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})($r);
var Oa = $r.exports;
const Da = /* @__PURE__ */ St(Oa);
ee.extend(Sa);
ee.extend(_a);
ee.extend(Da);
ee.extend(ya);
U(() => import("./OcModalCropper-B5KL0vpF-Brxg1PYC-DCK9Hega-8szMv1nU-BW-vkcua-D4Cf6vtJ-DK1Iua-6-SljZvc8R-CS9IqnS3-BGuEAaGH-Be33dkmf-DeBan-F8--VyYY2l1-D5_RRHUd-DxBczXkH-BXLLlgIE-jucB13K2-C5yn0L2H-CNr_Pykr-CslXKlqE-BbZfQH9h.js"));
U(() => import("./OcCropper-CJWKehPX-CVJYQPgM-CBlQHFsw-CyNrQJq5-BML2I2vd-CI2QhHqF-kGNtFAot-Cj7UiiDu-C7g_PB95-D6sjba-R-BMFDzzRm-D309QOyt-CVMKrUUd-nzVPaFSo-CxfYxnr--D10kmiz_-l6LjrQxL-BZz5Th3N-ec3d0qG8-CXR66sD9-DFJMONFk.js"));
const Er = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Ya = { class: "flex flex-col gap-y-2 w-full" }, Aa = { class: "flex gap-x-1 items-center" }, Ta = {
  key: 0,
  class: "text-oc-error"
}, La = {
  key: 0,
  class: "px-3 py-2"
}, Ba = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, $a = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Ea = {
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
    return (r, t) => (m(), y("div", Ya, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Aa, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Ta, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(kr), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", La, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Ae), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Ba, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", $a, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Ia = ["value", "checked", "disabled"], Jv = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Ea), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, Ia),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, ja = ["width", "height", "viewBox"], Le = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, ja));
  }
}, Ca = { class: "flex w-[inherit]" }, Va = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Ca, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, za = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, qa = ["disabled"], Na = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Pa = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", Na, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Te), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, qa),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Te), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, Xv = /* @__PURE__ */ Er(Pa, [["__scopeId", "data-v-91955efd"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32-GYKXzT7L-BI8rW5hT.js"));
U(() => import("./OcPieChart-Cixt4v9n-B33N4teU-BTBOUhuQ-BHZqBbTD-CuY7B2HZ-BVchILJ_-DrWOWLv7-aTBydQId-B709E9nl-Dyb-BVvg-CrY6emwW-E6D58J2n-5jonitX2-ANVUvPv9-Cfhk5HFF-Cm15KVLj-CrJRHqb6-CGMDBudG-BYGAxJok-gNJS6d-8.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy-CzkBGmG1-CC29yuXu.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3-BEunsKcE-De4sFGLW.js"));
var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ir = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(kt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, o = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
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
    }, S = function(g, a) {
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
    }, w = { A: [i, function(g) {
      this.afternoon = S(g, !1);
    }], a: [i, function(g) {
      this.afternoon = S(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [s, c("day")], Do: [i, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [o, c("month")], MM: [s, c("month")], MMM: [i, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [i, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function Z(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, q, T) {
        var M = T && T.toUpperCase();
        return q || d[T] || t[T] || d[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, j, z) {
          return j || z.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var q = {}, T = 0, M = 0; T < v; T += 1) {
          var k = u[T];
          if (typeof k == "string")
            M += k.length;
          else {
            var j = k.regex, z = k.parser, H = B.slice(M), X = j.exec(H)[0];
            z.call(q, X), B = B.replace(X, "");
          }
        }
        return function(P) {
          var L = P.afternoon;
          if (L !== void 0) {
            var J = P.hours;
            L ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(q), q;
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
          var B = E[2] === !0, q = E[3] === !0, T = B || q, M = E[2];
          q && (M = E[2]), l = this.$locale(), !B && M && (l = d.Ls[M]), this.$d = function(H, X, P) {
            try {
              if (["x", "X"].indexOf(X) > -1)
                return new Date((X === "X" ? 1e3 : 1) * H);
              var L = Z(X)(H), J = L.year, D = L.month, ce = L.day, oe = L.hours, ve = L.minutes, ge = L.seconds, re = L.milliseconds, le = L.zone, K = /* @__PURE__ */ new Date(), ae = ce || (J || D ? 1 : K.getDate()), de = J || K.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : K.getMonth());
              var ne = oe || 0, se = ve || 0, W = ge || 0, G = re || 0;
              return le ? new Date(Date.UTC(de, te, ae, ne, se, W, G + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, ae, ne, se, W, G)) : new Date(de, te, ae, ne, se, W, G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), T && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, j = 1; j <= k; j += 1) {
            E[1] = _[j - 1];
            var z = d.apply(this, E);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            j === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(Ir);
var Ha = Ir.exports;
const Fa = /* @__PURE__ */ _t(Ha);
var Za = typeof global == "object" && global && global.Object === Object && global, Ua = typeof self == "object" && self && self.Object === Object && self, Ra = Za || Ua || Function("return this")(), Ge = Ra.Symbol;
Ge && Ge.toStringTag;
Ge && Ge.toStringTag;
var jr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(kt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(jr);
var Ja = jr.exports;
const Xa = /* @__PURE__ */ _t(Ja);
var Cr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(kt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Cr);
var Qa = Cr.exports;
const Ka = /* @__PURE__ */ _t(Qa);
var Vr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(kt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(Vr);
var Wa = Vr.exports;
const Ga = /* @__PURE__ */ _t(Wa);
ee.extend(Xa);
ee.extend(Ka);
ee.extend(Ga);
ee.extend(Fa);
U(() => import("./OcModalCropper-7li22H04-BBaBCUmU-BplVuqft-CvPMh-Yg-Bd9m2bPV-DcqM3jlS-DcF-luhY-t4uPIxHX-I1PKnL07-0wTBwKoK-CLHtuEjd-BWUlvRV4-DYmTLlVP-B9-ieDoH-4alq3MqJ-Clz5mMXc-48TLTSFP-Dh5ZP1de-Wth2dFJD-C2nk2Dcg.js"));
U(() => import("./OcCropper-DGKAODRX-DXXcDdr6-BoTBE00s-Bxqcs8tz-ZANfthLX-DVfZD7CP-CE2yDtd9-D5ec510n-C-LhM995-C37DnJia--42PvbSx-BYIySsBw-DAU535pT-CQfZhFuR-XtVucyCH-vkXuadbC-CKTviL6N-BpzXrr2O-CxNLcWN_-D2s69fQk.js"));
const zr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, en = { class: "oc-tooltip-wrapper" }, tn = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, rn = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", en, [
      ie(A(yr), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", tn))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(fa), h]
    ]);
  }
}, on = /* @__PURE__ */ Ar(rn, [["__scopeId", "data-v-8a7abb6f"]]), an = { class: "flex flex-col gap-y-2 w-full" }, nn = { class: "flex gap-x-1 items-center" }, sn = {
  key: 0,
  class: "text-oc-error"
}, ln = {
  key: 0,
  class: "px-3 py-2"
}, dn = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, cn = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, pn = {
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
    return (r, t) => (m(), y("div", an, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", nn, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", sn, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(on), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", ln, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Te), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", dn, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", cn, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, un = ["value", "checked", "disabled"], Qv = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(pn), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, un),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, fn = ["width", "height", "viewBox"], Be = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, fn));
  }
}, hn = { class: "flex w-[inherit]" }, mn = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", hn, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, vn = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, gn = ["disabled"], yn = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, bn = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", yn, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Le), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, gn),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Le), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, Kv = /* @__PURE__ */ zr(bn, [["__scopeId", "data-v-91955efd"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32-GYKXzT7L.js"));
U(() => import("./OcPieChart-B5x_Z0MZ-BA1Hi2k9-CEosGo6q-9Gw-AHR--UeOqz4-H-Bgn2Wq-N-DL7oNVLG-Cm4lII5T-BUOgTe9v-DDc1Nx8W-BkwAZXC_-Cg9Llsi1-BRy4hjwe-Ddw709N0-1P4rswjS-3C4KXiwD-CIfZvxk7-Cs9Jxbkj-C7c_Tiec.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy-CzkBGmG1.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3-BEunsKcE.js"));
var Ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ot, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, o = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
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
    }, S = function(g, a) {
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
    }, w = { A: [i, function(g) {
      this.afternoon = S(g, !1);
    }], a: [i, function(g) {
      this.afternoon = S(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [s, c("day")], Do: [i, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [o, c("month")], MM: [s, c("month")], MMM: [i, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [i, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function Z(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, q, T) {
        var M = T && T.toUpperCase();
        return q || d[T] || t[T] || d[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, j, z) {
          return j || z.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var q = {}, T = 0, M = 0; T < v; T += 1) {
          var k = u[T];
          if (typeof k == "string")
            M += k.length;
          else {
            var j = k.regex, z = k.parser, H = B.slice(M), X = j.exec(H)[0];
            z.call(q, X), B = B.replace(X, "");
          }
        }
        return function(P) {
          var L = P.afternoon;
          if (L !== void 0) {
            var J = P.hours;
            L ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(q), q;
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
          var B = E[2] === !0, q = E[3] === !0, T = B || q, M = E[2];
          q && (M = E[2]), l = this.$locale(), !B && M && (l = d.Ls[M]), this.$d = function(H, X, P) {
            try {
              if (["x", "X"].indexOf(X) > -1)
                return new Date((X === "X" ? 1e3 : 1) * H);
              var L = Z(X)(H), J = L.year, D = L.month, ce = L.day, oe = L.hours, ve = L.minutes, ge = L.seconds, re = L.milliseconds, le = L.zone, K = /* @__PURE__ */ new Date(), ae = ce || (J || D ? 1 : K.getDate()), de = J || K.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : K.getMonth());
              var ne = oe || 0, se = ve || 0, W = ge || 0, G = re || 0;
              return le ? new Date(Date.UTC(de, te, ae, ne, se, W, G + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, ae, ne, se, W, G)) : new Date(de, te, ae, ne, se, W, G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), T && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, j = 1; j <= k; j += 1) {
            E[1] = _[j - 1];
            var z = d.apply(this, E);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            j === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(qr);
var xn = qr.exports;
const wn = /* @__PURE__ */ Dt(xn);
var Mn = typeof global == "object" && global && global.Object === Object && global, Sn = typeof self == "object" && self && self.Object === Object && self, kn = Mn || Sn || Function("return this")(), et = kn.Symbol;
et && et.toStringTag;
et && et.toStringTag;
var Nr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ot, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Nr);
var _n = Nr.exports;
const On = /* @__PURE__ */ Dt(_n);
var Pr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ot, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Pr);
var Dn = Pr.exports;
const Yn = /* @__PURE__ */ Dt(Dn);
var Hr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ot, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(Hr);
var An = Hr.exports;
const Tn = /* @__PURE__ */ Dt(An);
ee.extend(On);
ee.extend(Yn);
ee.extend(Tn);
ee.extend(wn);
U(() => import("./OcModalCropper-Cs32_kCS-zTZOIVfQ-BbLrlOR5-BJCqdKEX-BBxgcNhn-Ddss04fx-C3Fotj8Y-PyvmYPCm-DPxily3h-vZnwLcP--BZwjOHfL-RO_18hVo-BFFc8z_0-BsKO7vY2-DSjFtF3s-BaolTxMS-CNd0NWxP-BTgHznZt-EPReVwiK.js"));
U(() => import("./OcCropper-CB0iNuxW-pntkmt16-B7tXHSbc-Dxk0Ho07-BvzDMZxO-KWHlUskk-UzxWqvvq-CPn1QuR2-D1_YBmck-BF0Rlghq-D12Gaftr-DTEzXClc-B6E7l25c-B2IurA2z-Ofe4O7Df-D_3EMTbA-njhqtqol-C-YEbaon-CWVAQNch.js"));
const Fr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Ln = { class: "oc-tooltip-wrapper" }, Bn = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, $n = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Ln, [
      ie(A(Va), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Bn))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(za), h]
    ]);
  }
}, En = /* @__PURE__ */ Er($n, [["__scopeId", "data-v-8a7abb6f"]]), In = { class: "flex flex-col gap-y-2 w-full" }, jn = { class: "flex gap-x-1 items-center" }, Cn = {
  key: 0,
  class: "text-oc-error"
}, Vn = {
  key: 0,
  class: "px-3 py-2"
}, zn = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, qn = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Nn = {
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
    return (r, t) => (m(), y("div", In, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", jn, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Cn, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(En), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Vn, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Le), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", zn, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", qn, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Pn = ["value", "checked", "disabled"], Wv = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Nn), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, Pn),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Hn = ["width", "height", "viewBox"], $e = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Hn));
  }
}, Fn = { class: "flex w-[inherit]" }, Zn = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Fn, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Un = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Rn = ["disabled"], Jn = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Xn = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", Jn, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Be), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Rn),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Be), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, Gv = /* @__PURE__ */ Fr(Xn, [["__scopeId", "data-v-91955efd"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw-xnId6B32.js"));
U(() => import("./OcPieChart-D-deT7Ow-DbaDqmnr-DoRDfk6a-DwKBqnLh-DZ6qQ_HR-DHF5HSIy-Bpq1yuNn-B3SdGb7G-lOTMreA_-D-_IDf4N-Z1iQ-DJu-XPjwQepD-BQ4TfHWh-DyfZ41ga-Drr-pBJh-D5VHFzsD-CPCWpmkm-XQDYAKaU.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR-CdtfdCQy.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu-BSOT5Et3.js"));
var Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function At(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Yt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, o = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
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
    }, S = function(g, a) {
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
    }, w = { A: [i, function(g) {
      this.afternoon = S(g, !1);
    }], a: [i, function(g) {
      this.afternoon = S(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [s, c("day")], Do: [i, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [o, c("month")], MM: [s, c("month")], MMM: [i, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [i, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function Z(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, q, T) {
        var M = T && T.toUpperCase();
        return q || d[T] || t[T] || d[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, j, z) {
          return j || z.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var q = {}, T = 0, M = 0; T < v; T += 1) {
          var k = u[T];
          if (typeof k == "string")
            M += k.length;
          else {
            var j = k.regex, z = k.parser, H = B.slice(M), X = j.exec(H)[0];
            z.call(q, X), B = B.replace(X, "");
          }
        }
        return function(P) {
          var L = P.afternoon;
          if (L !== void 0) {
            var J = P.hours;
            L ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(q), q;
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
          var B = E[2] === !0, q = E[3] === !0, T = B || q, M = E[2];
          q && (M = E[2]), l = this.$locale(), !B && M && (l = d.Ls[M]), this.$d = function(H, X, P) {
            try {
              if (["x", "X"].indexOf(X) > -1)
                return new Date((X === "X" ? 1e3 : 1) * H);
              var L = Z(X)(H), J = L.year, D = L.month, ce = L.day, oe = L.hours, ve = L.minutes, ge = L.seconds, re = L.milliseconds, le = L.zone, K = /* @__PURE__ */ new Date(), ae = ce || (J || D ? 1 : K.getDate()), de = J || K.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : K.getMonth());
              var ne = oe || 0, se = ve || 0, W = ge || 0, G = re || 0;
              return le ? new Date(Date.UTC(de, te, ae, ne, se, W, G + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, ae, ne, se, W, G)) : new Date(de, te, ae, ne, se, W, G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), T && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, j = 1; j <= k; j += 1) {
            E[1] = _[j - 1];
            var z = d.apply(this, E);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            j === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(Zr);
var Qn = Zr.exports;
const Kn = /* @__PURE__ */ At(Qn);
var Wn = typeof global == "object" && global && global.Object === Object && global, Gn = typeof self == "object" && self && self.Object === Object && self, es = Wn || Gn || Function("return this")(), tt = es.Symbol;
tt && tt.toStringTag;
tt && tt.toStringTag;
var Ur = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Yt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Ur);
var ts = Ur.exports;
const rs = /* @__PURE__ */ At(ts);
var Rr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Yt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Rr);
var os = Rr.exports;
const is = /* @__PURE__ */ At(os);
var Jr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Yt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(Jr);
var as = Jr.exports;
const ns = /* @__PURE__ */ At(as);
ee.extend(rs);
ee.extend(is);
ee.extend(ns);
ee.extend(Kn);
U(() => import("./OcModalCropper-n9-tmwgf-D3ujYrqE-C2erHj01-DquKVFtd-Ub3nGdmM-yZFYdxEl-hKQVceoz-PH45LpJh-IIQMNG0k-OET2vEYG-CjoyoMPF-Clu4ZJx4-CnmUNYZ3-FalM0ylx-DOjiff5e-B1LzzoXX-CypI4ZtS-CSUr5jD8.js"));
U(() => import("./OcCropper-D1JueFyt-BDFHC1xI-BNNDTiZA-BUoitfMo-DMrJMf6e-TTemOGKb-B-DxEll_-C57M4En1-CkonPC7V-D0iE9ex_-DEoc6su0-Be8zkFSq-BIn70Tvq-DmaVSDWA-dhsWdgza-CiM1iLzZ-BI0iOmGX-JWIeE1qF.js"));
const Xr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, ss = { class: "oc-tooltip-wrapper" }, ls = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, ds = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", ss, [
      ie(A(mn), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", ls))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(vn), h]
    ]);
  }
}, cs = /* @__PURE__ */ zr(ds, [["__scopeId", "data-v-8a7abb6f"]]), ps = { class: "flex flex-col gap-y-2 w-full" }, us = { class: "flex gap-x-1 items-center" }, fs = {
  key: 0,
  class: "text-oc-error"
}, hs = {
  key: 0,
  class: "px-3 py-2"
}, ms = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, vs = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, gs = {
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
    return (r, t) => (m(), y("div", ps, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", us, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", fs, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(cs), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", hs, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Be), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", ms, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", vs, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, ys = ["value", "checked", "disabled"], e0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(gs), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, ys),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, bs = ["width", "height", "viewBox"], Ee = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, bs));
  }
}, xs = { class: "flex w-[inherit]" }, ws = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", xs, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Ms = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Ss = ["disabled"], ks = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, _s = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", ks, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A($e), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Ss),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A($e), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, t0 = /* @__PURE__ */ Xr(_s, [["__scopeId", "data-v-91955efd"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da-DC1jKlpw.js"));
U(() => import("./OcPieChart-B7MmYAVH-JeZH6s6D-COIEHNA7-DiQcbFcx-B9l6lPjW-CK6NKiBq-CK_QTQJb-CaC-BoQg-DM38LD3N-DcvuTT1F-C3sruWei-CMOJyG2i-DyaVH4FF-BnHauV8K-CdB5657P-CH-vwDm3-Ccxzv3_k.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3-Ub6jwbFR.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD-BbOM7tHu.js"));
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Tt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, o = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
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
    }, S = function(g, a) {
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
    }, w = { A: [i, function(g) {
      this.afternoon = S(g, !1);
    }], a: [i, function(g) {
      this.afternoon = S(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [s, c("day")], Do: [i, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [o, c("month")], MM: [s, c("month")], MMM: [i, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [i, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function Z(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, q, T) {
        var M = T && T.toUpperCase();
        return q || d[T] || t[T] || d[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, j, z) {
          return j || z.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var q = {}, T = 0, M = 0; T < v; T += 1) {
          var k = u[T];
          if (typeof k == "string")
            M += k.length;
          else {
            var j = k.regex, z = k.parser, H = B.slice(M), X = j.exec(H)[0];
            z.call(q, X), B = B.replace(X, "");
          }
        }
        return function(P) {
          var L = P.afternoon;
          if (L !== void 0) {
            var J = P.hours;
            L ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(q), q;
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
          var B = E[2] === !0, q = E[3] === !0, T = B || q, M = E[2];
          q && (M = E[2]), l = this.$locale(), !B && M && (l = d.Ls[M]), this.$d = function(H, X, P) {
            try {
              if (["x", "X"].indexOf(X) > -1)
                return new Date((X === "X" ? 1e3 : 1) * H);
              var L = Z(X)(H), J = L.year, D = L.month, ce = L.day, oe = L.hours, ve = L.minutes, ge = L.seconds, re = L.milliseconds, le = L.zone, K = /* @__PURE__ */ new Date(), ae = ce || (J || D ? 1 : K.getDate()), de = J || K.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : K.getMonth());
              var ne = oe || 0, se = ve || 0, W = ge || 0, G = re || 0;
              return le ? new Date(Date.UTC(de, te, ae, ne, se, W, G + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, ae, ne, se, W, G)) : new Date(de, te, ae, ne, se, W, G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), T && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, j = 1; j <= k; j += 1) {
            E[1] = _[j - 1];
            var z = d.apply(this, E);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            j === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(Qr);
var Os = Qr.exports;
const Ds = /* @__PURE__ */ Lt(Os);
var Ys = typeof global == "object" && global && global.Object === Object && global, As = typeof self == "object" && self && self.Object === Object && self, Ts = Ys || As || Function("return this")(), rt = Ts.Symbol;
rt && rt.toStringTag;
rt && rt.toStringTag;
var Kr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Tt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Kr);
var Ls = Kr.exports;
const Bs = /* @__PURE__ */ Lt(Ls);
var Wr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Tt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Wr);
var $s = Wr.exports;
const Es = /* @__PURE__ */ Lt($s);
var Gr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Tt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(Gr);
var Is = Gr.exports;
const js = /* @__PURE__ */ Lt(Is);
ee.extend(Bs);
ee.extend(Es);
ee.extend(js);
ee.extend(Ds);
U(() => import("./OcModalCropper-CLrXw5Tb-DFvvjeHl-CHSsF11u-B5TyLO3k-BMhTN67Q-Tg26ONi--Cf__-Ovm-Bjlw9isS-i6jKxhSL-DYxMMcZ--Ct2CxI9_-Ipw0V4sr-DaBQ9Rnm-DxvMPKCp-BXjz7NNz-CgQDP0f8-CP5CHl2l.js"));
U(() => import("./OcCropper-HtV3GHVH-IwgFQ1CJ-D80qacsQ-DQjmyf7D-CI6NHkW8-CRQ1jo-Q-hI_5gGoV-Dt2Z8Cin-B2iiVnGm-CJTV3cbH-CunvMmfR-BbkmdEjY-DMVKjIY8-D_U_04Uy-DG9mrJ3W-CyV3KO-8-CcCjiTC7.js"));
const eo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Cs = { class: "oc-tooltip-wrapper" }, Vs = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, zs = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Cs, [
      ie(A(Zn), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Vs))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Un), h]
    ]);
  }
}, qs = /* @__PURE__ */ Fr(zs, [["__scopeId", "data-v-8a7abb6f"]]), Ns = { class: "flex flex-col gap-y-2 w-full" }, Ps = { class: "flex gap-x-1 items-center" }, Hs = {
  key: 0,
  class: "text-oc-error"
}, Fs = {
  key: 0,
  class: "px-3 py-2"
}, Zs = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Us = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Rs = {
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
    return (r, t) => (m(), y("div", Ns, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Ps, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Hs, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(qs), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Fs, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A($e), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Zs, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Us, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Js = ["value", "checked", "disabled"], r0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Rs), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, Js),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Xs = ["width", "height", "viewBox"], Ie = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Xs));
  }
}, Qs = { class: "flex w-[inherit]" }, Ks = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Qs, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Ws = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Gs = ["disabled"], el = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, tl = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", el, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ee), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Gs),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Ee), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, o0 = /* @__PURE__ */ eo(tl, [["__scopeId", "data-v-91955efd"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u-5zwWC5Da.js"));
U(() => import("./OcPieChart-DCDDjMLd-DR-Ru-eQ-3DfQNUo0-JGkIqI7v-BUX-xsCV-DUQLMZ1d-Ce5GPyys-tvucVVc4-DkZ-uEPx-DjF7Uoam-CxVSrCf0-DXByY9RF-DQjWm91s-CBAa7rht-BlWkw1OO-Decg-PAi.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ-CNU05yT3.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U-COR7phSD.js"));
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var to = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Bt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, o = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, l = {}, h = function(g) {
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
    }, S = function(g, a) {
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
    }, w = { A: [i, function(g) {
      this.afternoon = S(g, !1);
    }], a: [i, function(g) {
      this.afternoon = S(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [s, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [s, c("day")], Do: [i, function(g) {
      var a = l.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], a)
        for (var u = 1; u <= 31; u += 1)
          a(u).replace(/\[|\]/g, "") === g && (this.day = u);
    }], M: [o, c("month")], MM: [s, c("month")], MMM: [i, function(g) {
      var a = f("months"), d = (f("monthsShort") || a.map(function(u) {
        return u.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [i, function(g) {
      var a = f("months").indexOf(g) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(g) {
      this.year = h(g);
    }], YYYY: [/\d{4}/, c("year")], Z: p, ZZ: p };
    function Z(g) {
      var a, d;
      a = g, d = l && l.formats;
      for (var u = (g = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, q, T) {
        var M = T && T.toUpperCase();
        return q || d[T] || t[T] || d[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, j, z) {
          return j || z.slice(1);
        });
      })).match(n), v = u.length, O = 0; O < v; O += 1) {
        var I = u[O], N = w[I], E = N && N[0], _ = N && N[1];
        u[O] = _ ? { regex: E, parser: _ } : I.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var q = {}, T = 0, M = 0; T < v; T += 1) {
          var k = u[T];
          if (typeof k == "string")
            M += k.length;
          else {
            var j = k.regex, z = k.parser, H = B.slice(M), X = j.exec(H)[0];
            z.call(q, X), B = B.replace(X, "");
          }
        }
        return function(P) {
          var L = P.afternoon;
          if (L !== void 0) {
            var J = P.hours;
            L ? J < 12 && (P.hours += 12) : J === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(q), q;
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
          var B = E[2] === !0, q = E[3] === !0, T = B || q, M = E[2];
          q && (M = E[2]), l = this.$locale(), !B && M && (l = d.Ls[M]), this.$d = function(H, X, P) {
            try {
              if (["x", "X"].indexOf(X) > -1)
                return new Date((X === "X" ? 1e3 : 1) * H);
              var L = Z(X)(H), J = L.year, D = L.month, ce = L.day, oe = L.hours, ve = L.minutes, ge = L.seconds, re = L.milliseconds, le = L.zone, K = /* @__PURE__ */ new Date(), ae = ce || (J || D ? 1 : K.getDate()), de = J || K.getFullYear(), te = 0;
              J && !D || (te = D > 0 ? D - 1 : K.getMonth());
              var ne = oe || 0, se = ve || 0, W = ge || 0, G = re || 0;
              return le ? new Date(Date.UTC(de, te, ae, ne, se, W, G + 60 * le.offset * 1e3)) : P ? new Date(Date.UTC(de, te, ae, ne, se, W, G)) : new Date(de, te, ae, ne, se, W, G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(I, _, N), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), T && I != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (_ instanceof Array)
          for (var k = _.length, j = 1; j <= k; j += 1) {
            E[1] = _[j - 1];
            var z = d.apply(this, E);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            j === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          v.call(this, O);
      };
    };
  });
})(to);
var rl = to.exports;
const ol = /* @__PURE__ */ $t(rl);
var il = typeof global == "object" && global && global.Object === Object && global, al = typeof self == "object" && self && self.Object === Object && self, nl = il || al || Function("return this")(), ot = nl.Symbol;
ot && ot.toStringTag;
ot && ot.toStringTag;
var ro = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Bt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(ro);
var sl = ro.exports;
const ll = /* @__PURE__ */ $t(sl);
var oo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Bt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(oo);
var dl = oo.exports;
const cl = /* @__PURE__ */ $t(dl);
var io = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Bt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(io);
var pl = io.exports;
const ul = /* @__PURE__ */ $t(pl);
ee.extend(ll);
ee.extend(cl);
ee.extend(ul);
ee.extend(ol);
U(() => import("./OcModalCropper-B5cHH0zb-Ds12MNwe-BYYRMXb5-4e_grzhn-ChR8v1zw-cqNdY5mN-BDuuwgiK-BSYE0PPY-8koJoR-N-BWImmyM0-DRKwj7K3-CD2t1pFs-BpS06_16-CYKzfqFn-2zi1p6Ql-DObd_zOO.js"));
U(() => import("./OcCropper-DjC-Mp11-B579jrkE-BP1j1qsL-BHkN3W4z-Q2Pa6Rgy-DggHmvg1-DRza7RYe-xhWxS_jx-DUUV0uV7-DiQSLAOA-BPXml3v4-PLLeh6_0-h2QPLo0m-xop093D2-CbaqhIcl-BfQYWYqA.js"));
const ao = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, fl = { class: "oc-tooltip-wrapper" }, hl = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, ml = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", fl, [
      ie(A(ws), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", hl))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Ms), h]
    ]);
  }
}, vl = /* @__PURE__ */ Xr(ml, [["__scopeId", "data-v-8a7abb6f"]]), gl = { class: "flex flex-col gap-y-2 w-full" }, yl = { class: "flex gap-x-1 items-center" }, bl = {
  key: 0,
  class: "text-oc-error"
}, xl = {
  key: 0,
  class: "px-3 py-2"
}, wl = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Ml = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Sl = {
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
    return (r, t) => (m(), y("div", gl, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", yl, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", bl, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(vl), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", xl, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Ee), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", wl, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Ml, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, kl = ["value", "checked", "disabled"], i0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Sl), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, kl),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, _l = ["width", "height", "viewBox"], je = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, _l));
  }
}, Ol = { class: "flex w-[inherit]" }, Dl = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Ol, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Yl = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Al = ["disabled"], Tl = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Ll = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", Tl, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ie), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Al),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Ie), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, a0 = /* @__PURE__ */ ao(Ll, [["__scopeId", "data-v-91955efd"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE-BvzkdS-u.js"));
U(() => import("./OcPieChart-Cfg3stlo-74gwWkc2-BgCbOHOQ-BJXh9FTs-DOxBb6Vi-DDEo79mM-DXbbscwM-Cx0ebULb-DBwqWwUK-CYP4Uy0K-BHyv8_A9-CnBbJDHu-Df2TLwHn-DhFNw4O7-DycxE6V7.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk-B9Q0f2GJ.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp-BBQZw04U.js"));
var Et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function It(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var no = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Et, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(no);
var Bl = no.exports;
const $l = /* @__PURE__ */ It(Bl);
var El = typeof global == "object" && global && global.Object === Object && global, Il = typeof self == "object" && self && self.Object === Object && self, jl = El || Il || Function("return this")(), it = jl.Symbol;
it && it.toStringTag;
it && it.toStringTag;
var so = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Et, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(so);
var Cl = so.exports;
const Vl = /* @__PURE__ */ It(Cl);
var lo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Et, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(lo);
var zl = lo.exports;
const ql = /* @__PURE__ */ It(zl);
var co = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Et, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(co);
var Nl = co.exports;
const Pl = /* @__PURE__ */ It(Nl);
ee.extend(Vl);
ee.extend(ql);
ee.extend(Pl);
ee.extend($l);
U(() => import("./OcModalCropper-E9U75p1G-2py2mKPg-Cq1jSXnx-C7CGoMch-CiomUxtw-DcwwGq3X-BDBojZX1-Ce-bhAAr-MB6y9pbm-CThdB4vP-M_FrOKKh-BzBwrp3x-D4XscwHn-B8Vx_YbE-C0vd3QAH.js"));
U(() => import("./OcCropper-D_z5XBWS-BTTkwvLr-1Qgh9jBb-DcwT-abl-C_3B2I1F-DGdL-SHN-gHYcVr_b-DvFMb5tW-C1dALhjE-B5mVHsVo-CC-rAj6n-DDIDswMc-BfEzS5ka-B_uSe3EG-C011tz9n.js"));
const po = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Hl = { class: "oc-tooltip-wrapper" }, Fl = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Zl = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Hl, [
      ie(A(Ks), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Fl))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Ws), h]
    ]);
  }
}, Ul = /* @__PURE__ */ eo(Zl, [["__scopeId", "data-v-8a7abb6f"]]), Rl = { class: "flex flex-col gap-y-2 w-full" }, Jl = { class: "flex gap-x-1 items-center" }, Xl = {
  key: 0,
  class: "text-oc-error"
}, Ql = {
  key: 0,
  class: "px-3 py-2"
}, Kl = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Wl = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Gl = {
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
    return (r, t) => (m(), y("div", Rl, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Jl, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Xl, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Ul), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Ql, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Ie), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Kl, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Wl, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, ed = ["value", "checked", "disabled"], n0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Gl), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, ed),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, td = ["width", "height", "viewBox"], Ce = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, td));
  }
}, rd = { class: "flex w-[inherit]" }, od = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", rd, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, id = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, ad = ["disabled"], nd = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, sd = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", nd, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(je), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, ad),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(je), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, s0 = /* @__PURE__ */ po(sd, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV-CzzJhDgE.js"));
U(() => import("./OcPieChart-BW1xYEey-DC4J602F-BvhnV_zT-CR5RStQl-OtrmvL_I-BObmTBy6-DXU6TtSL-C8OIOvmG-CrGZP0ON-DUwMZ04j-Bc_0ehij-eu3a_uyV-Bmav-7g4-Due6wrBz.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S-BYUI4GVk.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_-Bseh5lNp.js"));
var jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ct(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var uo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(jt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(uo);
var ld = uo.exports;
const dd = /* @__PURE__ */ Ct(ld);
var cd = typeof global == "object" && global && global.Object === Object && global, pd = typeof self == "object" && self && self.Object === Object && self, ud = cd || pd || Function("return this")(), at = ud.Symbol;
at && at.toStringTag;
at && at.toStringTag;
var fo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(jt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(fo);
var fd = fo.exports;
const hd = /* @__PURE__ */ Ct(fd);
var ho = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(jt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(ho);
var md = ho.exports;
const vd = /* @__PURE__ */ Ct(md);
var mo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(jt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(mo);
var gd = mo.exports;
const yd = /* @__PURE__ */ Ct(gd);
ee.extend(hd);
ee.extend(vd);
ee.extend(yd);
ee.extend(dd);
U(() => import("./OcModalCropper-iM0Vw0LE-C4Za9vik-D96wC1mE-DJC3c0cs-DzW1SF1I-reX0QTmT-Co3AjuBB-DhbkJcYk-DIWsnMfI-B8FpM_9N-CBj_z_bk-BQ840aZ3-D6r_LR54-BwEH-GXw.js"));
U(() => import("./OcCropper-DPrOl1N7-fgjyY1ph-Cmdf9QRA-Qle94W6X-Zu_tOVNS-xdh4wefD-DXFc2PQA-Ck1A3m4a-BBHSGLdK-f6gXCp75-Bf4xhEfD-sntfX45R-SG7rOCp1-7_I1sCkW.js"));
const vo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, bd = { class: "oc-tooltip-wrapper" }, xd = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, wd = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", bd, [
      ie(A(Dl), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", xd))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Yl), h]
    ]);
  }
}, Md = /* @__PURE__ */ ao(wd, [["__scopeId", "data-v-8a7abb6f"]]), Sd = { class: "flex flex-col gap-y-2 w-full" }, kd = { class: "flex gap-x-1 items-center" }, _d = {
  key: 0,
  class: "text-oc-error"
}, Od = {
  key: 0,
  class: "px-3 py-2"
}, Dd = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Yd = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Ad = {
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
    return (r, t) => (m(), y("div", Sd, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", kd, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", _d, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Md), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Od, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(je), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Dd, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Yd, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Td = ["value", "checked", "disabled"], l0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Ad), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, Td),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Ld = ["width", "height", "viewBox"], Ve = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Ld));
  }
}, Bd = { class: "flex w-[inherit]" }, $d = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Bd, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Ed = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Id = ["disabled"], jd = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Cd = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", jd, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ce), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Id),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Ce), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, d0 = /* @__PURE__ */ vo(Cd, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt-CI60VWMV.js"));
U(() => import("./OcPieChart-C95Eg7jd-DeSNSwDN-BVJdR6RL-BNwPdTLr-DUeVmrTW-BCU4JF8Y-C8Dmd6-v-BSsrrQZ1-CJjZtMxl-DD0-AEM--CxLP-Fo_-C5QzNBdL-DoW36n_B.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB-DgCxzU9S.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb-D0mKGdK_.js"));
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var go = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Vt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(go);
var Vd = go.exports;
const zd = /* @__PURE__ */ zt(Vd);
var qd = typeof global == "object" && global && global.Object === Object && global, Nd = typeof self == "object" && self && self.Object === Object && self, Pd = qd || Nd || Function("return this")(), nt = Pd.Symbol;
nt && nt.toStringTag;
nt && nt.toStringTag;
var yo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Vt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(yo);
var Hd = yo.exports;
const Fd = /* @__PURE__ */ zt(Hd);
var bo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Vt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(bo);
var Zd = bo.exports;
const Ud = /* @__PURE__ */ zt(Zd);
var xo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Vt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(xo);
var Rd = xo.exports;
const Jd = /* @__PURE__ */ zt(Rd);
ee.extend(Fd);
ee.extend(Ud);
ee.extend(Jd);
ee.extend(zd);
U(() => import("./OcModalCropper-DYctK_L7-DM9MsIH_-DmZyTkhi-C1cY6Gqz-DKI57SUI-BxHhEsbZ-DSmwUDCk-D6Aw7OdG-BD7hYzug-BGN1kuje-DuH2Ytbb-BbpPkPRK-BcNIDPfR.js"));
U(() => import("./OcCropper-D8Btn88G-CTVBqkrS-DkvNTYf4-COxWGSMz-B1lV_qJ_-BrCyw9fT-Cg8XnIhk-BPFvaM3c-CoStdFZz-DiSLJNUv-C2MB1kN2-D-ssfID2-BU6Wowxw.js"));
const wo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Xd = { class: "oc-tooltip-wrapper" }, Qd = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Kd = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Xd, [
      ie(A(od), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Qd))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(id), h]
    ]);
  }
}, Wd = /* @__PURE__ */ po(Kd, [["__scopeId", "data-v-9f861dd7"]]), Gd = { class: "flex flex-col gap-y-2 w-full" }, ec = { class: "flex gap-x-1 items-center" }, tc = {
  key: 0,
  class: "text-oc-error"
}, rc = {
  key: 0,
  class: "px-3 py-2"
}, oc = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, ic = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, ac = {
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
    return (r, t) => (m(), y("div", Gd, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", ec, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", tc, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Wd), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", rc, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Ce), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", oc, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", ic, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, nc = ["value", "checked", "disabled"], c0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(ac), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, nc),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, sc = ["width", "height", "viewBox"], ze = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, sc));
  }
}, lc = { class: "flex w-[inherit]" }, dc = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", lc, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, cc = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, pc = ["disabled"], uc = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, fc = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", uc, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ve), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, pc),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Ve), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, p0 = /* @__PURE__ */ wo(fc, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv-CHABLbEt.js"));
U(() => import("./OcPieChart-E3ZrCuuC-Ce16rvc9-DflYpSsE-CFVNWqIj-FUdLHVeX-8ia6NVUj-Beb2bqgH-BAcYBflR-BBcIORx3-D-l1XpMv-D5aJOZYm-CC5wlaqm.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN-Cd2KlevB.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa-D2CgQZPb.js"));
var qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(qt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Mo);
var hc = Mo.exports;
const mc = /* @__PURE__ */ Nt(hc);
var vc = typeof global == "object" && global && global.Object === Object && global, gc = typeof self == "object" && self && self.Object === Object && self, yc = vc || gc || Function("return this")(), st = yc.Symbol;
st && st.toStringTag;
st && st.toStringTag;
var So = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(qt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(So);
var bc = So.exports;
const xc = /* @__PURE__ */ Nt(bc);
var ko = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(qt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(ko);
var wc = ko.exports;
const Mc = /* @__PURE__ */ Nt(wc);
var _o = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(qt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(_o);
var Sc = _o.exports;
const kc = /* @__PURE__ */ Nt(Sc);
ee.extend(xc);
ee.extend(Mc);
ee.extend(kc);
ee.extend(mc);
U(() => import("./OcModalCropper-D8cQd_Dn-lt2yfidJ-DFqNZ9XC-CPJTW5si-gjnqueny-wMmlTzPT-DUPjnhYG-DukM7j_9-DlZMyqAk-IisqZcvx-DHlShrMj-IBu0KtvL.js"));
U(() => import("./OcCropper-Bs5JAUi0-DxFxUOt1-BokG2qWs-C46rMqqt-DdGz-2aq-DIyZa8Jz-DE9LIHUM-D0fMdXW6-DRzkB4lB-Cd_M8osK-DGKG0rDB-BRv6JzNC.js"));
const Oo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, _c = { class: "oc-tooltip-wrapper" }, Oc = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Dc = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", _c, [
      ie(A($d), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Oc))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Ed), h]
    ]);
  }
}, Yc = /* @__PURE__ */ vo(Dc, [["__scopeId", "data-v-9f861dd7"]]), Ac = { class: "flex flex-col gap-y-2 w-full" }, Tc = { class: "flex gap-x-1 items-center" }, Lc = {
  key: 0,
  class: "text-oc-error"
}, Bc = {
  key: 0,
  class: "px-3 py-2"
}, $c = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Ec = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Ic = {
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
    return (r, t) => (m(), y("div", Ac, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Tc, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Lc, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Yc), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Bc, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Ve), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", $c, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Ec, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, jc = ["value", "checked", "disabled"], u0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Ic), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, jc),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Cc = ["width", "height", "viewBox"], qe = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Cc));
  }
}, Vc = { class: "flex w-[inherit]" }, zc = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Vc, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, qc = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Nc = ["disabled"], Pc = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Hc = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", Pc, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(ze), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Nc),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(ze), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, f0 = /* @__PURE__ */ Oo(Hc, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23-BPISxQFv.js"));
U(() => import("./OcPieChart-DwxMm8Yr-DFNufQaR-CJ6YwQ-1-C56uHgo9-fhQisT2n-DCfXVL4j-Bf9uACaN-DWyjrU-L-Dt2crliF-CRdz3YBR-XWURc5TM.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN-ddJc33sN.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx-E1ZM6sMa.js"));
var Pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ht(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Do = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Do);
var Fc = Do.exports;
const Zc = /* @__PURE__ */ Ht(Fc);
var Uc = typeof global == "object" && global && global.Object === Object && global, Rc = typeof self == "object" && self && self.Object === Object && self, Jc = Uc || Rc || Function("return this")(), lt = Jc.Symbol;
lt && lt.toStringTag;
lt && lt.toStringTag;
var Yo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Yo);
var Xc = Yo.exports;
const Qc = /* @__PURE__ */ Ht(Xc);
var Ao = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Ao);
var Kc = Ao.exports;
const Wc = /* @__PURE__ */ Ht(Kc);
var To = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Pt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(To);
var Gc = To.exports;
const ep = /* @__PURE__ */ Ht(Gc);
ee.extend(Qc);
ee.extend(Wc);
ee.extend(ep);
ee.extend(Zc);
U(() => import("./OcModalCropper-DLnfz6gq-CeRixNeK-CHBAD5hw-DzG__9gf-DZtbaf1f-f5KW2hKv-C4NV0Zqa-CXaJ64wf-BkTDtM65-Boznks8Z-DeTN9-6o.js"));
U(() => import("./OcCropper-S4lR2tNS-CpBKNWQF-CtXeQmJa-Bk4uqneH-Bc_Rtpll-l8PtGtvu-pcg6jcmZ-CK564aTW-D_DQbp2q-dcu3fD_z-BAt4DCX1.js"));
const Lo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, tp = { class: "oc-tooltip-wrapper" }, rp = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, op = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", tp, [
      ie(A(dc), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", rp))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(cc), h]
    ]);
  }
}, ip = /* @__PURE__ */ wo(op, [["__scopeId", "data-v-9f861dd7"]]), ap = { class: "flex flex-col gap-y-2 w-full" }, np = { class: "flex gap-x-1 items-center" }, sp = {
  key: 0,
  class: "text-oc-error"
}, lp = {
  key: 0,
  class: "px-3 py-2"
}, dp = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, cp = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, pp = {
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
    return (r, t) => (m(), y("div", ap, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", np, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", sp, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(ip), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", lp, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(ze), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", dp, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", cp, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, up = ["value", "checked", "disabled"], h0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(pp), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, up),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, fp = ["width", "height", "viewBox"], Ne = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, fp));
  }
}, hp = { class: "flex w-[inherit]" }, mp = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", hp, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, vp = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, gp = ["disabled"], yp = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, bp = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", yp, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(qe), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, gp),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(qe), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, m0 = /* @__PURE__ */ Lo(bp, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9-Tg5SNd23.js"));
U(() => import("./OcPieChart-BTrlRpBZ-CGDCOXJw-ngm8DcpN-B8LzrMEQ-a8DADtPK-BRh6Z0FN-CYsWu8cX-CKP3Gx4i-DsQ2HQxh-BtTK_Z8p.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm-2Bf-zHFN.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9-lo8uGrjx.js"));
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ft, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Bo);
var xp = Bo.exports;
const wp = /* @__PURE__ */ Zt(xp);
var Mp = typeof global == "object" && global && global.Object === Object && global, Sp = typeof self == "object" && self && self.Object === Object && self, kp = Mp || Sp || Function("return this")(), dt = kp.Symbol;
dt && dt.toStringTag;
dt && dt.toStringTag;
var $o = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ft, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})($o);
var _p = $o.exports;
const Op = /* @__PURE__ */ Zt(_p);
var Eo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ft, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Eo);
var Dp = Eo.exports;
const Yp = /* @__PURE__ */ Zt(Dp);
var Io = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ft, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(Io);
var Ap = Io.exports;
const Tp = /* @__PURE__ */ Zt(Ap);
ee.extend(Op);
ee.extend(Yp);
ee.extend(Tp);
ee.extend(wp);
U(() => import("./OcModalCropper-CXdagMz2-C8mj_WEj-ClzAWaId-77sVmk3V-HyyX0a9m-C2OlkRhy-DXM7Sa1s-CHU6Bp6o-DFHJchFN-D6g-ruoR.js"));
U(() => import("./OcCropper-T1btTRZR-LrIxcAft-DbdHq0yv-PNHDpf_X-DZI1OYlY-C0KReuHp-Bh-5kkI5-CeuBO77M-CjqwL5oB-DEeZcTyc.js"));
const jo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Lp = { class: "oc-tooltip-wrapper" }, Bp = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, $p = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Lp, [
      ie(A(zc), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Bp))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(qc), h]
    ]);
  }
}, Ep = /* @__PURE__ */ Oo($p, [["__scopeId", "data-v-9f861dd7"]]), Ip = { class: "flex flex-col gap-y-2 w-full" }, jp = { class: "flex gap-x-1 items-center" }, Cp = {
  key: 0,
  class: "text-oc-error"
}, Vp = {
  key: 0,
  class: "px-3 py-2"
}, zp = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, qp = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Np = {
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
    return (r, t) => (m(), y("div", Ip, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", jp, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Cp, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Ep), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Vp, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(qe), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", zp, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", qp, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Pp = ["value", "checked", "disabled"], v0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Np), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, Pp),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Hp = ["width", "height", "viewBox"], Pe = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Hp));
  }
}, Fp = { class: "flex w-[inherit]" }, Zp = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Fp, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Up = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Rp = ["disabled"], Jp = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Xp = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", Jp, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ne), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Rp),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Ne), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, g0 = /* @__PURE__ */ jo(Xp, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q-D7uGkWx9.js"));
U(() => import("./OcPieChart-Cn5HOMn_-DnvDGMxs-D8Iv0Vrg-BCoePuC9-tbFIhA2O-DQI5sYve-BSTyF_hf-BBYcNtUp-wZ6m7fcx.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX-D9WBBEFm.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U-CRJGhkk9.js"));
var Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Co = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ut, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Co);
var Qp = Co.exports;
const Kp = /* @__PURE__ */ Rt(Qp);
var Wp = typeof global == "object" && global && global.Object === Object && global, Gp = typeof self == "object" && self && self.Object === Object && self, eu = Wp || Gp || Function("return this")(), ct = eu.Symbol;
ct && ct.toStringTag;
ct && ct.toStringTag;
var Vo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ut, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Vo);
var tu = Vo.exports;
const ru = /* @__PURE__ */ Rt(tu);
var zo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ut, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(zo);
var ou = zo.exports;
const iu = /* @__PURE__ */ Rt(ou);
var qo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Ut, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(qo);
var au = qo.exports;
const nu = /* @__PURE__ */ Rt(au);
ee.extend(ru);
ee.extend(iu);
ee.extend(nu);
ee.extend(Kp);
U(() => import("./OcModalCropper-DoGQ3-RB-Pa620SpY-D61hL5Cc-CRIvVYdu-gRmjqKhh-Cp5TmnT8-DbW4zqkK-BoFJhF0L-B4MSYB2K.js"));
U(() => import("./OcCropper-DhS0GKUG-CdXEbW8C-BvRSkuT6-BXahjrdc-Bl3pdl7x-CTE3cGyv-C6o3JafI-Ctg9Vvra-CI4evSf7.js"));
const No = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, su = { class: "oc-tooltip-wrapper" }, lu = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, du = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", su, [
      ie(A(mp), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", lu))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(vp), h]
    ]);
  }
}, cu = /* @__PURE__ */ Lo(du, [["__scopeId", "data-v-9f861dd7"]]), pu = { class: "flex flex-col gap-y-2 w-full" }, uu = { class: "flex gap-x-1 items-center" }, fu = {
  key: 0,
  class: "text-oc-error"
}, hu = {
  key: 0,
  class: "px-3 py-2"
}, mu = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, vu = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, gu = {
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
    return (r, t) => (m(), y("div", pu, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", uu, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", fu, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(cu), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", hu, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Ne), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", mu, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", vu, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, yu = ["value", "checked", "disabled"], y0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(gu), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, yu),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, bu = ["width", "height", "viewBox"], He = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, bu));
  }
}, xu = { class: "flex w-[inherit]" }, wu = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", xu, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Mu = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Su = ["disabled"], ku = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, _u = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", ku, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Pe), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Su),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Pe), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, b0 = /* @__PURE__ */ No(_u, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66-BQ5WLg3q.js"));
U(() => import("./OcPieChart-DSw_RxSV-m8cd4yXz-De64BrVe-gotVMi5M-IgbWG2kc-OQ_4HdEm-BaHxTwvc-Bb6HS6so.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF-BOJhMTWX.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz-BCnDuF0U.js"));
var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Po = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Jt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Po);
var Ou = Po.exports;
const Du = /* @__PURE__ */ Xt(Ou);
var Yu = typeof global == "object" && global && global.Object === Object && global, Au = typeof self == "object" && self && self.Object === Object && self, Tu = Yu || Au || Function("return this")(), pt = Tu.Symbol;
pt && pt.toStringTag;
pt && pt.toStringTag;
var Ho = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Jt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Ho);
var Lu = Ho.exports;
const Bu = /* @__PURE__ */ Xt(Lu);
var Fo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Jt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Fo);
var $u = Fo.exports;
const Eu = /* @__PURE__ */ Xt($u);
var Zo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Jt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(Zo);
var Iu = Zo.exports;
const ju = /* @__PURE__ */ Xt(Iu);
ee.extend(Bu);
ee.extend(Eu);
ee.extend(ju);
ee.extend(Du);
U(() => import("./OcModalCropper-7uiXqhDc-B9KNR5jl-CjPkzIcW-CVkdmh7Z-C7Ou0sVI-D11zBorg-1VpBrWBM-2jeP5rDw.js"));
U(() => import("./OcCropper-DAAE0_SD-of6b5i46-7OT5yMl--Cw44SkrI-C9w1fNjw-CroYrnA2-C700--T5-C_Xp6V0e.js"));
const Uo = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Cu = { class: "oc-tooltip-wrapper" }, Vu = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, zu = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Cu, [
      ie(A(Zp), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Vu))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Up), h]
    ]);
  }
}, qu = /* @__PURE__ */ jo(zu, [["__scopeId", "data-v-9f861dd7"]]), Nu = { class: "flex flex-col gap-y-2 w-full" }, Pu = { class: "flex gap-x-1 items-center" }, Hu = {
  key: 0,
  class: "text-oc-error"
}, Fu = {
  key: 0,
  class: "px-3 py-2"
}, Zu = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Uu = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Ru = {
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
    return (r, t) => (m(), y("div", Nu, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Pu, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Hu, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(qu), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Fu, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Pe), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Zu, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Uu, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Ju = ["value", "checked", "disabled"], x0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Ru), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, Ju),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Xu = ["width", "height", "viewBox"], Fe = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Xu));
  }
}, Qu = { class: "flex w-[inherit]" }, Ku = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Qu, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Wu = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Gu = ["disabled"], ef = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, tf = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", ef, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(He), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Gu),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(He), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, w0 = /* @__PURE__ */ Uo(tf, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH-UkoSkb66.js"));
U(() => import("./OcPieChart-BCY8rYQQ-Cn8YTO0H-DG8tbfHi-68af31PP-6SLifbI4-Bxgq1d2z-BdkDAH3j.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr-CptkPADF.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ-D8YpiYyz.js"));
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ro = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Qt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Ro);
var rf = Ro.exports;
const of = /* @__PURE__ */ Kt(rf);
var af = typeof global == "object" && global && global.Object === Object && global, nf = typeof self == "object" && self && self.Object === Object && self, sf = af || nf || Function("return this")(), ut = sf.Symbol;
ut && ut.toStringTag;
ut && ut.toStringTag;
var Jo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Qt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Jo);
var lf = Jo.exports;
const df = /* @__PURE__ */ Kt(lf);
var Xo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Qt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Xo);
var cf = Xo.exports;
const pf = /* @__PURE__ */ Kt(cf);
var Qo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Qt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(Qo);
var uf = Qo.exports;
const ff = /* @__PURE__ */ Kt(uf);
ee.extend(df);
ee.extend(pf);
ee.extend(ff);
ee.extend(of);
U(() => import("./OcModalCropper-C8FsBU1o-Ccbo2qu3-ConHjYB8-D1okmQ6_-Cic1_Ids-t087YibI-CeLqvQU1.js"));
U(() => import("./OcCropper-Dx2KtQps-DjDtQfkX-DEQbF3L8-BnooWAzs-lqRmDy4p-BpICYPFO-DkYKMpnY.js"));
const Ko = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, hf = { class: "oc-tooltip-wrapper" }, mf = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, vf = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", hf, [
      ie(A(wu), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", mf))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Mu), h]
    ]);
  }
}, gf = /* @__PURE__ */ No(vf, [["__scopeId", "data-v-9f861dd7"]]), yf = { class: "flex flex-col gap-y-2 w-full" }, bf = { class: "flex gap-x-1 items-center" }, xf = {
  key: 0,
  class: "text-oc-error"
}, wf = {
  key: 0,
  class: "px-3 py-2"
}, Mf = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Sf = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, kf = {
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
    return (r, t) => (m(), y("div", yf, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", bf, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", xf, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(gf), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", wf, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(He), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Mf, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Sf, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, _f = ["value", "checked", "disabled"], M0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(kf), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, _f),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Of = ["width", "height", "viewBox"], Ze = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Of));
  }
}, Df = { class: "flex w-[inherit]" }, Yf = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", Df, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Af = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Tf = ["disabled"], Lf = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Bf = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", Lf, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Fe), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Tf),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Fe), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, S0 = /* @__PURE__ */ Ko(Bf, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB-BKHnLfhH.js"));
U(() => import("./OcPieChart-C2PufLkk-CW9rvTUk-H3snUjbB-CbwBHsOQ-CQ_rBnG7-D45c_6mK.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2-B3VwxmYr.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD-DpTNEVfJ.js"));
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wo = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Wt, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(Wo);
var $f = Wo.exports;
const Ef = /* @__PURE__ */ Gt($f);
var If = typeof global == "object" && global && global.Object === Object && global, jf = typeof self == "object" && self && self.Object === Object && self, Cf = If || jf || Function("return this")(), ft = Cf.Symbol;
ft && ft.toStringTag;
ft && ft.toStringTag;
var Go = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Wt, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(Go);
var Vf = Go.exports;
const zf = /* @__PURE__ */ Gt(Vf);
var ei = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Wt, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(ei);
var qf = ei.exports;
const Nf = /* @__PURE__ */ Gt(qf);
var ti = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Wt, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(ti);
var Pf = ti.exports;
const Hf = /* @__PURE__ */ Gt(Pf);
ee.extend(zf);
ee.extend(Nf);
ee.extend(Hf);
ee.extend(Ef);
U(() => import("./OcModalCropper-BUa9T1sv-C3T5Vsh0-DRRKPbhn-DmcJ7nK9-BrHSA2n7-uTUaSiBj.js"));
U(() => import("./OcCropper-CLY4AFYI-BhawQFjh-BDPRj2v5-CNSoSG6g-BXBfyDq2-C74v4z40.js"));
const ri = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Ff = { class: "oc-tooltip-wrapper" }, Zf = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Uf = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Ff, [
      ie(A(Ku), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Zf))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Wu), h]
    ]);
  }
}, Rf = /* @__PURE__ */ Uo(Uf, [["__scopeId", "data-v-9f861dd7"]]), Jf = { class: "flex flex-col gap-y-2 w-full" }, Xf = { class: "flex gap-x-1 items-center" }, Qf = {
  key: 0,
  class: "text-oc-error"
}, Kf = {
  key: 0,
  class: "px-3 py-2"
}, Wf = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Gf = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, eh = {
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
    return (r, t) => (m(), y("div", Jf, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Xf, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Qf, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Rf), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Kf, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Fe), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Wf, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Gf, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, th = ["value", "checked", "disabled"], k0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(eh), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, th),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, rh = ["width", "height", "viewBox"], Ue = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, rh));
  }
}, oh = { class: "flex w-[inherit]" }, ih = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", oh, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, ah = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, nh = ["disabled"], sh = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, lh = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", sh, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ze), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, nh),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Ze), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, _0 = /* @__PURE__ */ ri(lh, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_-BOvtAUGB.js"));
U(() => import("./OcPieChart-IA8ga9nR-CLfeRK8a-B5e13LBa-C3elykiQ-CptNmXjA.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv--DVx8DZZ2.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ-Bps_29UD.js"));
var er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(er, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(oi);
var dh = oi.exports;
const ch = /* @__PURE__ */ tr(dh);
var ph = typeof global == "object" && global && global.Object === Object && global, uh = typeof self == "object" && self && self.Object === Object && self, fh = ph || uh || Function("return this")(), ht = fh.Symbol;
ht && ht.toStringTag;
ht && ht.toStringTag;
var ii = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(er, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(ii);
var hh = ii.exports;
const mh = /* @__PURE__ */ tr(hh);
var ai = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(er, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(ai);
var vh = ai.exports;
const gh = /* @__PURE__ */ tr(vh);
var ni = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(er, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(ni);
var yh = ni.exports;
const bh = /* @__PURE__ */ tr(yh);
ee.extend(mh);
ee.extend(gh);
ee.extend(bh);
ee.extend(ch);
U(() => import("./OcModalCropper-gYk1VFvZ-BPrXYDhz-DxX2fDmY-BbJp5PgD-BhtxHCug.js"));
U(() => import("./OcCropper-CXm2InUO-D4PCff75-DxvhZaXC-3DRis-Gz-ByTrbO5r.js"));
const si = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, xh = { class: "oc-tooltip-wrapper" }, wh = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Mh = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", xh, [
      ie(A(Yf), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", wh))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Af), h]
    ]);
  }
}, Sh = /* @__PURE__ */ Ko(Mh, [["__scopeId", "data-v-9f861dd7"]]), kh = { class: "flex flex-col gap-y-2 w-full" }, _h = { class: "flex gap-x-1 items-center" }, Oh = {
  key: 0,
  class: "text-oc-error"
}, Dh = {
  key: 0,
  class: "px-3 py-2"
}, Yh = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Ah = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Th = {
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
    return (r, t) => (m(), y("div", kh, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", _h, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Oh, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Sh), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Dh, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Ze), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", Yh, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Ah, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, Lh = ["value", "checked", "disabled"], O0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Th), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, Lh),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Bh = ["width", "height", "viewBox"], Re = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Bh));
  }
}, $h = { class: "flex w-[inherit]" }, Eh = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", $h, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Ih = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, jh = ["disabled"], Ch = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Vh = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", Ch, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Ue), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, jh),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Ue), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, D0 = /* @__PURE__ */ si(Vh, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M-DoZHmuj_.js"));
U(() => import("./OcPieChart-D4iou2zi-oKfUQZrn-GINO717I-BAWFY7ys.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR-DRL6rGv-.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k-DEW_GWVZ.js"));
var rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function or(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var li = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(rr, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(li);
var zh = li.exports;
const qh = /* @__PURE__ */ or(zh);
var Nh = typeof global == "object" && global && global.Object === Object && global, Ph = typeof self == "object" && self && self.Object === Object && self, Hh = Nh || Ph || Function("return this")(), mt = Hh.Symbol;
mt && mt.toStringTag;
mt && mt.toStringTag;
var di = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(rr, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(di);
var Fh = di.exports;
const Zh = /* @__PURE__ */ or(Fh);
var ci = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(rr, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(ci);
var Uh = ci.exports;
const Rh = /* @__PURE__ */ or(Uh);
var pi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(rr, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(pi);
var Jh = pi.exports;
const Xh = /* @__PURE__ */ or(Jh);
ee.extend(Zh);
ee.extend(Rh);
ee.extend(Xh);
ee.extend(qh);
U(() => import("./OcModalCropper-BG3M3x7r-DRbx8AN6-4ALxQAm6-I72C3wxr.js"));
U(() => import("./OcCropper-BwAN2WxQ-D8Wfl1hL-DWcqT0e8-D0UI1fU1.js"));
const Qh = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, Kh = { class: "oc-tooltip-wrapper" }, Wh = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Gh = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", Kh, [
      ie(A(ih), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Wh))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(ah), h]
    ]);
  }
}, em = /* @__PURE__ */ ri(Gh, [["__scopeId", "data-v-9f861dd7"]]), tm = { class: "flex flex-col gap-y-2 w-full" }, rm = { class: "flex gap-x-1 items-center" }, om = {
  key: 0,
  class: "text-oc-error"
}, im = {
  key: 0,
  class: "px-3 py-2"
}, am = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, nm = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, sm = {
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
    return (r, t) => (m(), y("div", tm, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", rm, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", om, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(em), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", im, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Ue), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", am, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", nm, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, lm = ["value", "checked", "disabled"], Y0 = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(sm), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, lm),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, dm = ["width", "height", "viewBox"], Je = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, dm));
  }
}, cm = { class: "flex w-[inherit]" }, A0 = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", cm, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, T0 = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, pm = ["disabled"], um = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, fm = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", um, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Re), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, pm),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Re), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, L0 = /* @__PURE__ */ Qh(fm, [["__scopeId", "data-v-4356d06c"]]);
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM-C8yVZK9M.js"));
U(() => import("./OcPieChart-CRGphZQU-D5BXeVjJ-WwfU2XiS.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7-D6pHaWAR.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k-BuhBvF5k.js"));
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ar(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ui = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ir, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(ui);
var hm = ui.exports;
const mm = /* @__PURE__ */ ar(hm);
var vm = typeof global == "object" && global && global.Object === Object && global, gm = typeof self == "object" && self && self.Object === Object && self, ym = vm || gm || Function("return this")(), vt = ym.Symbol;
vt && vt.toStringTag;
vt && vt.toStringTag;
var fi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ir, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(fi);
var bm = fi.exports;
const xm = /* @__PURE__ */ ar(bm);
var hi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ir, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(hi);
var wm = hi.exports;
const Mm = /* @__PURE__ */ ar(wm);
var mi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ir, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(mi);
var Sm = mi.exports;
const km = /* @__PURE__ */ ar(Sm);
ee.extend(xm);
ee.extend(Mm);
ee.extend(km);
ee.extend(mm);
U(() => import("./OcModalCropper-DMlgtrS8-CRrTWm2o-B36F0gwx.js"));
U(() => import("./OcCropper-CXXMELsx-DN7Y-xqL-DMDaAHYo.js"));
const vi = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of r)
    t[n] = s;
  return t;
}, _m = { class: "oc-tooltip-wrapper" }, Om = {
  key: 0,
  class: "oc-arrow",
  "data-popper-arrow": ""
}, Dm = {
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
    const r = e, t = V(!1), n = V(), s = V(), o = V(), i = () => {
      t.value = !0, o.value.popperInstance.update(), r.hideAfter && setTimeout(() => l(), r.hideAfter);
    }, l = () => t.value = !1;
    pe(() => {
      if (r.trigger === "hover") {
        const c = ["mouseenter", "focus"], p = ["mouseleave", "blur"];
        c.forEach((f) => {
          n.value.addEventListener(f, i);
        }), p.forEach((f) => {
          n.value.addEventListener(f, l);
        }), r.isPopover && (c.forEach((f) => {
          s.value.addEventListener(f, i);
        }), p.forEach((f) => {
          s.value.addEventListener(f, l);
        }));
      } else
        n.value.addEventListener("click", () => t.value ? l() : i());
    });
    const h = () => {
      t.value && l();
    };
    return (c, p) => xe((m(), y("span", _m, [
      ie(A(Eh), {
        ref_key: "popper",
        ref: o,
        placement: e.position,
        skidding: e.skidding,
        distance: e.distance,
        "popper-options": e.popperOptions,
        class: "!z-[1010]"
      }, {
        popper: Q(() => [
          ie(_e, { name: e.transitionName }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "popperBodyEl",
                ref: s,
                class: b(["oc-tooltip", e.popperClass])
              }, [
                $(c.$slots, "popper", {}, void 0, !0),
                e.arrowHidden ? x("", !0) : (m(), y("div", Om))
              ], 2), [
                [Oe, t.value]
              ])
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        default: Q(() => [
          C("div", {
            ref_key: "triggerEl",
            ref: n,
            class: "w-[inherit] relative"
          }, [
            $(c.$slots, "default", {}, void 0, !0)
          ], 512)
        ]),
        _: 3
      }, 8, ["placement", "skidding", "distance", "popper-options"])
    ])), [
      [A(Ih), h]
    ]);
  }
}, Ym = /* @__PURE__ */ si(Dm, [["__scopeId", "data-v-9f861dd7"]]), Am = { class: "flex flex-col gap-y-2 w-full" }, Tm = { class: "flex gap-x-1 items-center" }, Lm = {
  key: 0,
  class: "text-oc-error"
}, Bm = {
  key: 0,
  class: "px-3 py-2"
}, $m = {
  key: 1,
  class: "text-sm flex items-center text-oc-text-400"
}, Em = {
  key: 2,
  class: "text-sm text-oc-error flex items-center"
}, Im = {
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
    return (r, t) => (m(), y("div", Am, [
      e.label ? (m(), y("label", {
        key: 0,
        class: b(["text-sm flex items-center gap-x-3 font-medium text-oc-text-400", e.labelClass])
      }, [
        C("span", Tm, [
          be(R(e.label) + " ", 1),
          e.isRequired ? (m(), y("span", Lm, "*")) : x("", !0)
        ]),
        e.labelIcon ? (m(), F(A(Ym), ke(Me({ key: 0 }, e.tooltipOptions)), {
          popper: Q(() => [
            $(r.$slots, "tooltipText", {}, () => [
              e.tooltipText ? (m(), y("div", Bm, R(e.tooltipText), 1)) : x("", !0)
            ])
          ]),
          default: Q(() => [
            ie(A(Re), {
              width: "16",
              height: "16",
              name: e.labelIcon
            }, null, 8, ["name"])
          ]),
          _: 3
        }, 16)) : x("", !0)
      ], 2)) : x("", !0),
      $(r.$slots, "default"),
      (e.hint || r.$slots.hint) && !e.errorMessage ? (m(), y("div", $m, [
        $(r.$slots, "hint", {}, () => [
          be(R(e.hint), 1)
        ])
      ])) : x("", !0),
      e.errorMessage ? (m(), y("div", Em, R(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, jm = ["value", "checked", "disabled"], Cm = {
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
    ]), o = () => n("update:modelValue", t.isDisabled ? "" : !t.modelValue);
    return (i, l) => (m(), F(A(Im), {
      class: "w-fit",
      label: e.topLabel,
      hint: e.hint,
      "error-message": e.errorMessage
    }, {
      default: Q(() => [
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
          }, R(e.label), 3)) : x("", !0),
          C("input", {
            value: e.modelValue,
            type: "checkbox",
            checked: e.modelValue,
            class: "h-0 w-0 hidden",
            disabled: e.isDisabled,
            onChange: o
          }, null, 40, jm),
          $(i.$slots, "after")
        ], 2)
      ]),
      _: 3
    }, 8, ["label", "hint", "error-message"]));
  }
}, Vm = ["width", "height", "viewBox"], fr = {
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
    const r = e, t = V(null), n = (o) => {
      const i = document.createElement("div");
      i.innerHTML = o, i.querySelector("svg") && (i.querySelector("svg").removeAttribute("width"), i.querySelector("svg").removeAttribute("height"), t.value.innerHTML = i.innerHTML), i.remove();
    }, s = () => {
      let o = "";
      window.oc_icons && (o = JSON.parse(window.oc_icons).find((i) => i.name === r.name)), o ? t.value && n(o.svg) : fetch(`${r.path}/${r.name}.svg`).then((i) => i.status === 200 ? i.text() : "").then((i) => {
        if (i && t.value) {
          if (window.oc_icons) {
            let l = JSON.parse(window.oc_icons);
            window.oc_icons = JSON.stringify([
              ...l,
              {
                name: r.name,
                svg: i
              }
            ]);
          }
          n(i);
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
    ), (o, i) => (m(), y("svg", {
      ref_key: "iconRef",
      ref: t,
      width: `${r.width}px`,
      height: `${r.height}px`,
      viewBox: `0 0 ${r.width} ${r.height}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, null, 8, Vm));
  }
}, zm = { class: "flex w-[inherit]" }, qm = {
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
    const t = V(), n = V(), s = V(), o = e, i = () => ({
      placement: o.placement,
      modifiers: [
        {
          name: "flip",
          enabled: o.isFlipEnabled
        },
        {
          name: "offset",
          options: {
            offset: [o.skidding, o.distance]
          }
        }
      ],
      ...o.popperOptions || []
    }), l = (h) => {
      var c;
      return h && ((c = n.value) == null ? void 0 : c.contains(h));
    };
    return pe(() => {
      s.value = Ye(t.value, n.value, i()), setTimeout(() => s.value.update(), 50);
    }), ye(
      () => [o.popperOptions, o.placement, o.distance, o.skidding],
      () => {
        s.value.setOptions(i()), s.value.update();
      },
      { deep: !0 }
    ), r({
      popperInstance: s,
      checkElementIsInsidePopper: l
    }), (h, c) => (m(), y("div", zm, [
      C("div", {
        ref_key: "reference",
        ref: t,
        class: "w-[inherit] flex"
      }, [
        $(h.$slots, "default")
      ], 512),
      (m(), F(De, {
        to: "body",
        disabled: !e.isAttachToBody
      }, [
        C("div", {
          ref_key: "popper",
          ref: n,
          class: b([e.popperClass, "z-[1005]"]),
          style: Se(e.popperStyle)
        }, [
          $(h.$slots, "popper")
        ], 6)
      ], 8, ["disabled"]))
    ]));
  }
}, Nm = {
  beforeMount(e, r) {
    e.clickOutsideEvent = function(t) {
      document.contains(t.target) && !(e === t.target || e.contains(t.target)) && r.value(t);
    }, document.addEventListener("click", e.clickOutsideEvent);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent);
  }
}, Pm = ["disabled"], Hm = {
  key: 2,
  class: "overflow-hidden text-ellipsis"
}, Fm = {
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
    const r = e, t = V(!1), n = Y(() => (r.leftIcon || r.rightIcon) && !r.label), s = Y(() => ({
      default: "w-10",
      small: "w-9 h-8",
      big: "w-[48px]"
    })), o = Y(() => ({
      primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)] bg-[var(--oc-primary-500)]",
      secondary: " shadow-[0_1.5px_0_0] shadow-[#E5E5E5] bg-[#E5E5E5]",
      destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)] bg-[var(--oc-error-500)]"
    })), i = Y(() => ({
      default: "w-[18px] h-[18px]",
      small: "w-5 h-5",
      big: "w-6 h-6"
    })), l = Y(
      () => !t.value && !r.isTransparent && !r.isDisabled && !r.isLoading && !r.isActive && o.value[r.variant]
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
    return (S, w) => (m(), y("div", {
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
        onMousedown: w[0] || (w[0] = (Z) => t.value = !0),
        onMouseup: w[1] || (w[1] = (Z) => t.value = !1),
        onMouseleave: w[2] || (w[2] = (Z) => t.value = !1)
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
        e.label ? (m(), y("span", Hm, R(e.label), 1)) : $(S.$slots, "default", { key: 3 }, void 0, !0),
        e.rightIcon ? (m(), F(A(Je), {
          key: 4,
          width: f.value[e.size],
          height: f.value[e.size],
          name: e.rightIcon,
          class: b(e.iconClass)
        }, null, 8, ["width", "height", "name", "class"])) : x("", !0)
      ], 42, Pm),
      e.isAdditionalArea && !e.isTransparent ? (m(), y("div", {
        key: 0,
        class: b(["border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]", [s.value[e.size], e.variant]]),
        onClick: w[3] || (w[3] = we((Z) => S.$emit("addition-click"), ["stop"]))
      }, [
        $(S.$slots, "additional-content", {}, () => [
          ie(A(Je), {
            name: e.additionalAreaIcon,
            class: b(i.value[e.size])
          }, null, 8, ["name", "class"])
        ], !0)
      ], 2)) : x("", !0)
    ], 2));
  }
}, cr = /* @__PURE__ */ vi(Fm, [["__scopeId", "data-v-4356d06c"]]), Zm = {
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
    const n = t, s = e, o = V(), i = V(), l = async (f) => {
      f != null && f.target && (s.isDisabled || (setTimeout(() => {
        var S, w;
        return (w = (S = o.value) == null ? void 0 : S.popperInstance) == null ? void 0 : w.update();
      }, 0), n("update:modelValue", !s.modelValue)));
    }, h = (f) => {
      s.isAttachToBody && !s.preventClickOutside && o.value.checkElementIsInsidePopper(f.target) || s.modelValue && !s.preventClickOutside && n("update:modelValue", !1);
    }, c = V(), p = V(0);
    return ye(() => s.modelValue, async () => {
      const f = window.innerHeight || document.documentElement.clientHeight, S = c.value.getBoundingClientRect().top, w = f - c.value.getBoundingClientRect().bottom, Z = Math.max(S, w), g = Z - (2 + (Z === S ? 2.5 : 0)) * 16;
      p.value = g > 0 ? g : 0, o.value.popperInstance.update();
    }), r({
      dropdownScroll: i,
      toggleDropdown: l,
      popper: o
    }), (f, S) => xe((m(), y("span", {
      ref_key: "parentElement",
      ref: c,
      class: "flex w-[inherit]"
    }, [
      ie(A(qm), {
        ref_key: "popper",
        ref: o,
        placement: e.placement,
        distance: e.distance,
        "popper-class": e.popperClass,
        skidding: e.skidding,
        "popper-style": e.popperStyle,
        "popper-options": e.popperOptions,
        "is-attach-to-body": e.isAttachToBody
      }, {
        popper: Q(() => [
          ie(_e, { name: "fade" }, {
            default: Q(() => [
              xe(C("div", {
                ref_key: "dropdownScroll",
                ref: i,
                class: b([e.menuClasses, "rounded bg-oc-bg-light shadow min-w-[162px] overflow-y-auto"]),
                style: Se({
                  maxHeight: (e.maxMenuHeight || p.value) - 68 + "px"
                }),
                onScroll: S[0] || (S[0] = (w) => f.$emit("scroll", w))
              }, [
                $(f.$slots, "menu", { isPopoverOpen: e.modelValue }, void 0, !0)
              ], 38), [
                [Oe, e.modelValue]
              ])
            ]),
            _: 3
          })
        ]),
        default: Q(() => [
          C("div", {
            class: "w-[inherit] flex",
            onClick: l
          }, [
            $(f.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["placement", "distance", "popper-class", "skidding", "popper-style", "popper-options", "is-attach-to-body"])
    ])), [
      [A(Nm), h]
    ]);
  }
}, Um = /* @__PURE__ */ vi(Zm, [["__scopeId", "data-v-28f7b7ed"]]), Rm = { class: "flex items-center gap-x-3 p-3" }, Jm = { class: "md:text-base text-sm" }, Xm = {
  key: 0,
  class: "p-3 text-sm text-oc-text-300"
}, B0 = {
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
      C("div", Rm, [
        e.icon ? (m(), F(A(Je), Me({
          key: 0,
          class: "w-5 h-5",
          name: e.icon
        }, e.iconProps, { class: e.iconClasses }), null, 16, ["name", "class"])) : x("", !0),
        C("span", Jm, R(e.text), 1),
        e.pointed ? $(t.$slots, "badge", { key: 1 }, () => [
          n[0] || (n[0] = C("div", { class: "w-[6px] aspect-square rounded-full bg-oc-error" }, null, -1))
        ]) : x("", !0)
      ]),
      e.subText ? (m(), y("div", Xm, [
        C("span", null, R(e.subText), 1)
      ])) : x("", !0)
    ], 2));
  }
};
U(() => import("./OcLineChart-5etKydFR-BvvYvRDM.js"));
U(() => import("./OcPieChart-DpVnBeHC-ClYBU1hy.js"));
U(() => import("./OcBarChart-B44tLq7l-DEAHizy7.js"));
U(() => import("./OcBarRaceChart-UxTmWasE-B82CYO7k.js"));
var nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(nr, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, h = {}, c = function(a) {
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
    }], S = function(a) {
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
    }, Z = { A: [l, function(a) {
      this.afternoon = w(a, !1);
    }], a: [l, function(a) {
      this.afternoon = w(a, !0);
    }], Q: [s, function(a) {
      this.month = 3 * (a - 1) + 1;
    }], S: [s, function(a) {
      this.milliseconds = 100 * +a;
    }], SS: [o, function(a) {
      this.milliseconds = 10 * +a;
    }], SSS: [/\d{3}/, function(a) {
      this.milliseconds = +a;
    }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [o, p("day")], Do: [l, function(a) {
      var d = h.ordinal, u = a.match(/\d+/);
      if (this.day = u[0], d)
        for (var v = 1; v <= 31; v += 1)
          d(v).replace(/\[|\]/g, "") === a && (this.day = v);
    }], w: [i, p("week")], ww: [o, p("week")], M: [i, p("month")], MM: [o, p("month")], MMM: [l, function(a) {
      var d = S("months"), u = (S("monthsShort") || d.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(a) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [l, function(a) {
      var d = S("months").indexOf(a) + 1;
      if (d < 1)
        throw new Error();
      this.month = d % 12 || d;
    }], Y: [/[+-]?\d+/, p("year")], YY: [o, function(a) {
      this.year = c(a);
    }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
    function g(a) {
      var d, u;
      d = a, u = h && h.formats;
      for (var v = (a = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(q, T, M) {
        var k = M && M.toUpperCase();
        return T || u[M] || t[M] || u[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, z, H) {
          return z || H.slice(1);
        });
      })).match(n), O = v.length, I = 0; I < O; I += 1) {
        var N = v[I], E = Z[N], _ = E && E[0], B = E && E[1];
        v[I] = B ? { regex: _, parser: B } : N.replace(/^\[|\]$/g, "");
      }
      return function(q) {
        for (var T = {}, M = 0, k = 0; M < O; M += 1) {
          var j = v[M];
          if (typeof j == "string")
            k += j.length;
          else {
            var z = j.regex, H = j.parser, X = q.slice(k), P = z.exec(X)[0];
            H.call(T, P), q = q.replace(P, "");
          }
        }
        return function(L) {
          var J = L.afternoon;
          if (J !== void 0) {
            var D = L.hours;
            J ? D < 12 && (L.hours += 12) : D === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(T), T;
      };
    }
    return function(a, d, u) {
      u.p.customParseFormat = !0, a && a.parseTwoDigitYear && (c = a.parseTwoDigitYear);
      var v = d.prototype, O = v.parse;
      v.parse = function(I) {
        var N = I.date, E = I.utc, _ = I.args;
        this.$u = E;
        var B = _[1];
        if (typeof B == "string") {
          var q = _[2] === !0, T = _[3] === !0, M = q || T, k = _[2];
          T && (k = _[2]), h = this.$locale(), !q && k && (h = u.Ls[k]), this.$d = function(X, P, L, J) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * X);
              var D = g(P)(X), ce = D.year, oe = D.month, ve = D.day, ge = D.hours, re = D.minutes, le = D.seconds, K = D.milliseconds, ae = D.zone, de = D.week, te = /* @__PURE__ */ new Date(), ne = ve || (ce || oe ? 1 : te.getDate()), se = ce || te.getFullYear(), W = 0;
              ce && !oe || (W = oe > 0 ? oe - 1 : te.getMonth());
              var G, ue = ge || 0, fe = re || 0, he = le || 0, me = K || 0;
              return ae ? new Date(Date.UTC(se, W, ne, ue, fe, he, me + 60 * ae.offset * 1e3)) : L ? new Date(Date.UTC(se, W, ne, ue, fe, he, me)) : (G = new Date(se, W, ne, ue, fe, he, me), de && (G = J(G).week(de).toDate()), G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(N, B, E, u), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), M && N != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
        } else if (B instanceof Array)
          for (var j = B.length, z = 1; z <= j; z += 1) {
            _[1] = B[z - 1];
            var H = u.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            z === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, I);
      };
    };
  });
})(gi);
var Qm = gi.exports;
const yi = /* @__PURE__ */ sr(Qm);
var Km = typeof global == "object" && global && global.Object === Object && global, Wm = typeof self == "object" && self && self.Object === Object && self, bi = Km || Wm || Function("return this")(), gt = bi.Symbol, xi = Object.prototype, Gm = xi.hasOwnProperty, ev = xi.toString, Xe = gt ? gt.toStringTag : void 0;
function tv(e) {
  var r = Gm.call(e, Xe), t = e[Xe];
  try {
    e[Xe] = void 0;
    var n = !0;
  } catch {
  }
  var s = ev.call(e);
  return n && (r ? e[Xe] = t : delete e[Xe]), s;
}
var rv = Object.prototype, ov = rv.toString;
function iv(e) {
  return ov.call(e);
}
var av = "[object Null]", nv = "[object Undefined]", hr = gt ? gt.toStringTag : void 0;
function sv(e) {
  return e == null ? e === void 0 ? nv : av : hr && hr in Object(e) ? tv(e) : iv(e);
}
function lv(e) {
  return e != null && typeof e == "object";
}
function ur(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var dv = "[object Symbol]";
function cv(e) {
  return typeof e == "symbol" || lv(e) && sv(e) == dv;
}
var pv = /\s/;
function uv(e) {
  for (var r = e.length; r-- && pv.test(e.charAt(r)); )
    ;
  return r;
}
var fv = /^\s+/;
function hv(e) {
  return e && e.slice(0, uv(e) + 1).replace(fv, "");
}
var mr = NaN, mv = /^[-+]0x[0-9a-f]+$/i, vv = /^0b[01]+$/i, gv = /^0o[0-7]+$/i, yv = parseInt;
function vr(e) {
  if (typeof e == "number")
    return e;
  if (cv(e))
    return mr;
  if (ur(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ur(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = hv(e);
  var t = vv.test(e);
  return t || gv.test(e) ? yv(e.slice(2), t ? 2 : 8) : mv.test(e) ? mr : +e;
}
var pr = function() {
  return bi.Date.now();
}, bv = "Expected a function", xv = Math.max, wv = Math.min;
function Mv(e, r, t) {
  var n, s, o, i, l, h, c = 0, p = !1, f = !1, S = !0;
  if (typeof e != "function")
    throw new TypeError(bv);
  r = vr(r) || 0, ur(t) && (p = !!t.leading, f = "maxWait" in t, o = f ? xv(vr(t.maxWait) || 0, r) : o, S = "trailing" in t ? !!t.trailing : S);
  function w(N) {
    var E = n, _ = s;
    return n = s = void 0, c = N, i = e.apply(_, E), i;
  }
  function Z(N) {
    return c = N, l = setTimeout(d, r), p ? w(N) : i;
  }
  function g(N) {
    var E = N - h, _ = N - c, B = r - E;
    return f ? wv(B, o - _) : B;
  }
  function a(N) {
    var E = N - h, _ = N - c;
    return h === void 0 || E >= r || E < 0 || f && _ >= o;
  }
  function d() {
    var N = pr();
    if (a(N))
      return u(N);
    l = setTimeout(d, g(N));
  }
  function u(N) {
    return l = void 0, S && n ? w(N) : (n = s = void 0, i);
  }
  function v() {
    l !== void 0 && clearTimeout(l), c = 0, n = h = s = l = void 0;
  }
  function O() {
    return l === void 0 ? i : u(pr());
  }
  function I() {
    var N = pr(), E = a(N);
    if (n = arguments, s = this, h = N, E) {
      if (l === void 0)
        return Z(h);
      if (f)
        return clearTimeout(l), l = setTimeout(d, r), w(h);
    }
    return l === void 0 && (l = setTimeout(d, r)), i;
  }
  return I.cancel = v, I.flush = O, I;
}
var wi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(nr, function() {
    return function(t, n, s) {
      n.prototype.isBetween = function(o, i, l, h) {
        var c = s(o), p = s(i), f = (h = h || "()")[0] === "(", S = h[1] === ")";
        return (f ? this.isAfter(c, l) : !this.isBefore(c, l)) && (S ? this.isBefore(p, l) : !this.isAfter(p, l)) || (f ? this.isBefore(c, l) : !this.isAfter(c, l)) && (S ? this.isAfter(p, l) : !this.isBefore(p, l));
      };
    };
  });
})(wi);
var Sv = wi.exports;
const Mi = /* @__PURE__ */ sr(Sv);
var Si = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(nr, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Si);
var kv = Si.exports;
const ki = /* @__PURE__ */ sr(kv);
var _i = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(nr, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(_i);
var _v = _i.exports;
const Oi = /* @__PURE__ */ sr(_v), Ov = { class: "flex items-center justify-between" }, Dv = { class: "flex flex-col gap-2 p-3" }, Yv = { class: "flex justify-between items-center" }, Av = { key: 0 }, Tv = { key: 1 }, Lv = {
  key: 0,
  class: "grid grid-cols-3 gap-3"
}, Bv = ["onClick"], $v = {
  key: 1,
  class: "grid grid-cols-3 gap-3"
}, Ev = ["onClick"], Iv = ["onClick", "onMouseover"], jv = { key: 0 }, Cv = { class: "flex gap-x-3 justify-end" }, $0 = {
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
    ee.extend(Mi), ee.extend(ki), ee.extend(Oi), ee.extend(yi);
    const t = e, n = r, s = V(), o = V(), i = V(), l = V(), h = V(), c = V(), p = V(), f = V(!1), S = V(!1), w = V(!1), Z = V(!1), g = Y(() => t.type === "range"), a = Y(() => {
      const re = s.value.endOf("month").date();
      return Array.from({ length: re }, (le, K) => K + 1);
    }), d = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], u = Y(() => s.value.format("MMMM YYYY")), v = Y(
      () => w.value ? c.value.format("YYYY") : s.value.format("YYYY")
    ), O = Y(() => s.value.format("MMM")), I = Y(() => {
      const re = o.value, le = i.value ?? p.value, K = [re, le];
      return le && re != null && re.isAfter(le) && K.reverse(), {
        from: K[0],
        to: K[1]
      };
    }), N = Y(
      () => Object.values(I.value).filter(Boolean).length > 1
    ), E = Y(() => s.value.month()), _ = Y(
      () => {
        var re;
        return E.value === ((re = o.value) == null ? void 0 : re.month());
      }
    ), B = Y(
      () => {
        var re;
        return E.value === ((re = i.value) == null ? void 0 : re.month());
      }
    ), q = () => {
      p.value = null, s.value = s.value.subtract(1, "month"), o.value && (l.value = _.value ? o.value.date() : null, h.value = B.value ? i.value.date() : null);
    }, T = () => {
      p.value = null, s.value = s.value.add(1, "month"), l.value = _.value ? o.value.date() : null, h.value = B.value ? i.value.date() : null;
    }, M = (re) => {
      p.value = null, s.value = s.value.set("month", re), Z.value = !1;
    }, k = (re) => {
      p.value = null, s.value = s.value.set("year", re), w.value = !1;
    }, j = () => {
      p.value = null, w.value ? c.value = c.value.subtract(11, "year") : s.value = s.value.subtract(1, "year");
    }, z = () => {
      p.value = null, w.value ? c.value = c.value.add(11, "year") : s.value = s.value.add(1, "year");
    }, H = () => {
      w.value = !1, Z.value = !Z.value;
    }, X = (re) => {
      const le = s.value.date(re);
      return Object.values(I.value).filter(Boolean).find((K) => K.isSame(le));
    }, P = (re) => g.value ? N.value ? s.value.date(re).isBetween(
      I.value.from,
      I.value.to,
      null,
      "[]"
    ) : !1 : l.value && h.value && l.value <= re && h.value >= re, L = (re) => {
      const le = s.value.date(re);
      return t.disabledDate(le.toDate()) || t.minDate && le.isBefore(ee(t.minDate), "day") || t.maxDate && le.isAfter(ee(t.maxDate), "day");
    }, J = () => {
      g.value && (L(o.value.toDate()) || L(i.value.toDate())) || (S.value = !1, n(
        "update:modelValue",
        g.value ? [I.value.from, I.value.to].map((re) => re.toDate()) : o.value.toDate()
      ));
    }, D = (re) => {
      n("update:isIndefinite", re);
    }, ce = (re, le = !0) => {
      if (!g.value) {
        let ae = ee(u.value, "MMMM YYYY").date(re);
        l.value = re, o.value = ae, h.value = null, i.value = null, J();
        return;
      }
      let K = re && s.value.date(re);
      if (!S.value) {
        l.value = re, o.value = K, h.value = void 0, i.value = void 0, S.value = !0;
        return;
      }
      i.value = K, h.value = re, le && J();
    }, oe = Mv((re) => {
      S.value && ce(re, !1);
    }, 50), ve = () => {
      var re, le, K;
      const ae = g.value ? (re = t.modelValue) == null ? void 0 : re[0] : t.modelValue;
      s.value = ee(ae), c.value = ee(ae), o.value = ae && s.value, l.value = ae && o.value.date(), !(!g.value || !ae) && (i.value = ee((le = t.modelValue) == null ? void 0 : le[1]), h.value = ((K = i.value) == null ? void 0 : K.month()) === s.value.month() ? i.value.date() : void 0);
    }, ge = (re) => {
      const le = re + 11, K = [];
      for (; re <= le; )
        K.push(re++);
      return K;
    };
    return ve(), (re, le) => (m(), y("div", {
      class: b(["p-6 w-fit rounded flex flex-col gap-y-7", e.position === "floating" ? "shadow-normal bg-white" : ""])
    }, [
      C("div", Ov, [
        ie(A(Um), {
          modelValue: Z.value,
          "onUpdate:modelValue": le[1] || (le[1] = (K) => Z.value = K),
          distance: 10,
          position: "bottom",
          "is-popover": "",
          trigger: "click",
          "popper-options": { strategy: "fixed" }
        }, {
          menu: Q(() => [
            C("div", Dv, [
              C("div", Yv, [
                ie(A(cr), {
                  "left-icon": "chevron-left",
                  "is-transparent": "",
                  onClick: j
                }),
                C("div", {
                  class: "cursor-pointer hover:opacity-50 transition",
                  onClick: le[0] || (le[0] = (K) => w.value = !w.value)
                }, [
                  w.value ? (m(), y("div", Av, R(v.value - 11) + " - " + R(v.value), 1)) : (m(), y("div", Tv, R(v.value), 1))
                ]),
                ie(A(cr), {
                  "left-icon": "chevron-right",
                  "is-transparent": "",
                  onClick: z
                })
              ]),
              w.value ? (m(), y("div", Lv, [
                (m(!0), y(lr, null, dr(ge(v.value - 11), (K) => (m(), y("div", {
                  key: K,
                  class: b(["px-4 py-2 hover:border-oc-gray-200 border-2 border-transparent transition text-center rounded cursor-pointer", {
                    "!border-oc-primary bg-oc-primary text-white": s.value.year() === K
                  }]),
                  onClick: (ae) => k(K)
                }, R(K), 11, Bv))), 128))
              ])) : (m(), y("div", $v, [
                (m(), y(lr, null, dr(d, (K, ae) => C("div", {
                  key: K,
                  class: b(["px-4 py-2 hover:border-oc-gray-200 border-2 border-transparent transition text-center rounded cursor-pointer", {
                    "!border-oc-primary bg-oc-primary text-white": O.value === K
                  }]),
                  onClick: (de) => M(ae)
                }, R(K), 11, Ev)), 64))
              ]))
            ])
          ]),
          default: Q(() => [
            C("span", {
              class: b([[f.value ? "pointer-events-none opacity-[.35]" : ""], "cursor-pointer hover:opacity-50 transition"]),
              onClick: we(H, ["stop"])
            }, R(u.value), 3)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        C("div", {
          class: b(["flex gap-x-3", [f.value ? "pointer-events-none opacity-[.35]" : ""]])
        }, [
          ie(A(fr), {
            name: "chevron-down",
            class: "rotate-90 cursor-pointer",
            onClick: q
          }),
          ie(A(fr), {
            name: "chevron-down",
            class: "-rotate-90 cursor-pointer",
            onClick: T
          })
        ], 2)
      ]),
      C("div", {
        class: "grid grid-cols-7 w-fit gap-3",
        onMouseout: le[2] || (le[2] = (K) => A(oe)(void 0))
      }, [
        (m(!0), y(lr, null, dr(a.value, (K) => {
          var ae;
          return m(), y("div", {
            key: K,
            class: b(["w-9 rounded-full flex cursor-pointer items-center relative justify-center h-9", [
              X(K) ? "bg-oc-primary text-white" : "hover:bg-oc-primary-50-tr",
              L(K) ? "pointer-events-none opacity-[.35]" : "",
              g.value ? {
                ...P(K) && {
                  "before:bg-oc-primary-50-tr before:px-3 before:w-[calc(100%+0.5rem)] before:h-full before:absolute": !0,
                  "before:rounded-l-full before:left-0 before:!w-[calc(100%+0.25rem)]": I.value.from.isSame(s.value.date(K)),
                  "before:rounded-r-full before:right-0 before:!w-[calc(100%+0.25rem)]": (ae = I.value.to) == null ? void 0 : ae.isSame(s.value.date(K))
                },
                "before:bg-transparent": l.value !== null && l.value === h.value
              } : ""
            ]]),
            onClick: (de) => ce(K),
            onMouseover: (de) => A(oe)(K)
          }, R(K), 43, Iv);
        }), 128))
      ], 32),
      $(re.$slots, "bottom", {}, () => [
        e.isIndefinite ? (m(), y("span", jv, [
          ie(A(Cm), {
            modelValue: f.value,
            "onUpdate:modelValue": [
              le[3] || (le[3] = (K) => f.value = K),
              D
            ],
            label: e.inDefiniteLabel
          }, null, 8, ["modelValue", "label"])
        ])) : x("", !0)
      ]),
      C("div", Cv, [
        ie(A(cr), {
          label: "Reset",
          class: "w-[72px]",
          "is-disabled": f.value,
          onClick: le[4] || (le[4] = (K) => n("reset-calendar"))
        }, null, 8, ["is-disabled"])
      ])
    ], 2));
  }
};
ee.extend(Mi);
ee.extend(ki);
ee.extend(Oi);
ee.extend(yi);
U(() => import("./OcModalCropper-CpI1r2JN-1k_QCy4o.js"));
U(() => import("./OcCropper-FDBNFr4g-thhdyR7Y.js"));
export {
  Le as $,
  Be as A,
  Ae as B,
  Wv as C,
  Nn as D,
  vl as E,
  Ee as F,
  t0 as G,
  e0 as H,
  gs as I,
  on as J,
  Ul as K,
  Ie as L,
  o0 as M,
  r0 as N,
  Rs as O,
  Md as P,
  je as Q,
  a0 as R,
  i0 as S,
  Nm as T,
  Sl as U,
  Wd as V,
  Ce as W,
  s0 as X,
  $e as Y,
  n0 as Z,
  En as _,
  T0 as a,
  Lo as a$,
  Gl as a0,
  Yc as a1,
  Ve as a2,
  d0 as a3,
  l0 as a4,
  Ad as a5,
  ip as a6,
  ze as a7,
  p0 as a8,
  c0 as a9,
  Sh as aA,
  Ze as aB,
  S0 as aC,
  M0 as aD,
  kf as aE,
  em as aF,
  Ue as aG,
  _0 as aH,
  k0 as aI,
  eh as aJ,
  Ym as aK,
  Re as aL,
  D0 as aM,
  O0 as aN,
  Th as aO,
  Cm as aP,
  sm as aQ,
  $0 as aR,
  Y0 as aS,
  Um as aT,
  B0 as aU,
  si as aV,
  ri as aW,
  Ko as aX,
  Uo as aY,
  No as aZ,
  jo as a_,
  ac as aa,
  Ep as ab,
  qe as ac,
  f0 as ad,
  u0 as ae,
  Ic as af,
  cu as ag,
  Ne as ah,
  m0 as ai,
  h0 as aj,
  pp as ak,
  qu as al,
  Pe as am,
  g0 as an,
  v0 as ao,
  Np as ap,
  gf as aq,
  He as ar,
  b0 as as,
  y0 as at,
  gu as au,
  Rf as av,
  Fe as aw,
  w0 as ax,
  x0 as ay,
  Ru as az,
  kr as b,
  Oo as b0,
  wo as b1,
  vo as b2,
  po as b3,
  ao as b4,
  eo as b5,
  Xr as b6,
  Fr as b7,
  zr as b8,
  Er as b9,
  Ar as ba,
  gr as bb,
  Fv as c,
  Je as d,
  Zv as e,
  br as f,
  Te as g,
  Uv as h,
  Xv as i,
  Jv as j,
  Ea as k,
  Rv as l,
  fr as m,
  L0 as n,
  cs as o,
  Qv as p,
  cr as q,
  vi as r,
  Qh as s,
  A0 as t,
  Kv as u,
  pn as v,
  qs as w,
  qm as x,
  Gv as y,
  Im as z
};
