import { ref as x, computed as S, openBlock as f, createBlock as V, unref as c, withCtx as p, renderSlot as $, createCommentVNode as k, createElementVNode as i, createElementBlock as F, Fragment as A, createVNode as b, toDisplayString as E, normalizeClass as M, withKeys as B, withModifiers as U } from "vue";
import d from "dayjs";
import { aW as K } from "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { g as Y } from "./OcIcon-CJgBICxh-Cknfoj_m.js";
import { z as O } from "./OcBaseInput-B-eZowCe-M_QvuaZV.js";
import { d as P } from "./OcInputOption-rY2kKCL8-Ce2jETq4.js";
import { o as T } from "./OcDropdownItem-CzffqBjG-CMBrNq8k.js";
import { c as j } from "./customParseFormat-CoBtXnqJ.js";
import { _ as z } from "./OcComplexCalendar-CRlgm2-F.js";
const L = { class: "flex flex-col gap-y-2 w-full" }, W = { class: "flex w-full" }, G = {
  key: 0,
  class: "text-sm text-oc-error flex items-center"
}, H = {
  key: 1,
  class: "flex flex-wrap cursor-pointer"
}, J = { class: "flex items-center gap-x-3" }, Q = ["value"], X = { class: "flex items-center gap-x-3" }, Z = ["value"], fe = {
  __name: "DatePicker",
  props: {
    modelValue: {
      type: [String, Date, Number, Array]
    },
    type: {
      type: String,
      default: "default",
      validator: (e) => ["default", "range"].includes(e)
    },
    disabledDate: {
      type: Function,
      default: () => !1
    },
    minDate: {
      type: [String, Date, Number],
      default: null
    },
    maxDate: {
      type: [String, Date, Number],
      default: null
    },
    dateFormat: {
      type: String,
      default: "YYYY-MM-DD"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    errorMessage: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "YYYY-MM-DD"
    },
    isSplitInput: {
      type: Boolean,
      default: !0
    },
    minLabel: {
      type: String,
      default: "From"
    },
    maxLabel: {
      type: String,
      default: "To"
    },
    isRequired: {
      type: Boolean,
      default: !1
    },
    isIndefinite: {
      type: Boolean,
      default: !1
    },
    disabledRange: {
      type: Object,
      default: () => ({
        start: null,
        end: null
      })
    },
    countCalendars: {
      type: Number,
      default: 2
    },
    shortcuts: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "resetCalendar", "error"],
  setup(e, { emit: q }) {
    d.extend(j);
    const s = q, t = e, m = x(!1), I = x(!1), g = x(!1), r = x([]), v = S(() => t.type === "range"), o = S(() => v.value ? t.modelValue && t.modelValue[0] ? [
      d(t.modelValue[0], t.dateFormat),
      d(t.modelValue[1], t.dateFormat)
    ] : ["", ""] : t.modelValue ? d(t.modelValue, t.dateFormat) : ""), h = (a) => {
      t.type === "range" ? s(
        "update:modelValue",
        a ? [
          d(a.start).format(t.dateFormat),
          d(a.end).format(t.dateFormat)
        ] : []
      ) : s("update:modelValue", d(a).format(t.dateFormat)), m.value = !1;
    }, D = () => {
      s("resetCalendar"), s("update:modelValue", v.value ? [] : null), m.value = !1;
    }, N = (a) => {
      const l = d(a);
      return ((u) => u.get("month") === d().get("month"))(l);
    }, R = (a) => {
      I.value = a, s("update:modelValue", a ? "Indefinite" : null);
    }, w = (a, l) => {
      var u;
      const n = d(a, t.dateFormat, !0);
      r.value[l] = n.format(t.dateFormat), r.value[l ? 0 : 1] = ((u = t.modelValue) == null ? void 0 : u[l ? 0 : 1]) || d().format(t.dateFormat);
    }, y = () => {
      if (r.value.length) {
        if (g.value = !1, r.value.some((a) => !d(a, t.dateFormat).isValid())) {
          g.value = !0, r.value = [];
          return;
        }
        t.maxDate && (r.value = r.value.map(
          (a) => d(a, t.dateFormat).isSameOrBefore(d(t.maxDate)) ? a : d(t.maxDate).format(t.dateFormat)
        )), s("update:modelValue", r.value), r.value = [];
      }
    };
    return (a, l) => (f(), V(c(T), {
      modelValue: m.value,
      "onUpdate:modelValue": l[3] || (l[3] = (n) => m.value = n),
      "is-disabled": e.disabled,
      placement: "bottom-start",
      distance: 10,
      class: "w-full"
    }, {
      menu: p(({ isPopoverOpen: n }) => [
        $(a.$slots, "menu", {
          isPopoverOpen: n,
          updateCalendar: h,
          resetCalendar: D
        }, () => {
          var u, C;
          return [
            v.value ? (f(), V(z, {
              key: 0,
              "model-value": {
                start: (u = e.modelValue) == null ? void 0 : u[0],
                end: (C = e.modelValue) == null ? void 0 : C[1]
              },
              shortcuts: e.shortcuts,
              "count-calendars": e.countCalendars,
              "is-range": "",
              "with-footer": !1,
              "min-date": e.minDate,
              "max-date": e.maxDate,
              masks: { modelValue: e.dateFormat },
              "onUpdate:modelValue": h
            }, null, 8, ["model-value", "shortcuts", "count-calendars", "min-date", "max-date", "masks"])) : !e.disabled && n ? (f(), V(c(K), {
              key: 1,
              "model-value": o.value ? o.value.toDate() : /* @__PURE__ */ new Date(),
              "disabled-date": I.value ? N : e.disabledDate,
              "max-date": e.maxDate,
              "min-date": e.minDate,
              "is-indefinite": e.isIndefinite,
              position: "inline",
              type: e.type,
              "onUpdate:modelValue": h,
              "onUpdate:isIndefinite": R,
              onResetCalendar: D
            }, null, 8, ["model-value", "disabled-date", "max-date", "min-date", "is-indefinite", "type"])) : k("", !0)
          ];
        })
      ]),
      default: p(() => [
        i("div", L, [
          !e.isSplitInput || !v.value ? (f(), F(A, { key: 0 }, [
            i("div", W, [
              b(c(P), {
                "model-value": v.value ? e.modelValue && e.modelValue[0] ? `${o.value[0].format(e.dateFormat)} - ${o.value[1].format(e.dateFormat)}` : "" : e.modelValue === "Indefinite" ? "Indefinite" : e.modelValue ? o.value.format(e.dateFormat) : "",
                icon: "calendar",
                label: e.label,
                hint: e.hint,
                "is-required": e.isRequired,
                disabled: e.disabled,
                placeholder: e.placeholder
              }, null, 8, ["model-value", "label", "hint", "is-required", "disabled", "placeholder"])
            ]),
            e.errorMessage ? (f(), F("div", G, E(e.errorMessage), 1)) : k("", !0)
          ], 64)) : (f(), F("div", H, [
            b(c(O), {
              "error-message": g.value ? `Invalid Date. Try this format (${e.dateFormat})` : e.errorMessage,
              hint: e.hint,
              "is-required": e.isRequired,
              label: e.label
            }, {
              default: p(() => [
                i("div", {
                  class: M(["rounded justify-between border flex items-center gap-3 h-[36px] px-3", [
                    e.errorMessage || g.value ? "border-oc-error shadow-oc-error" : "border-oc-gray-200 shadow-oc-gray-200",
                    e.disabled ? "pointer-events-none bg-oc-bg-dark" : "bg-white",
                    {
                      "shadow-[0_0_0_2px]": m.value && !e.disabled
                    }
                  ]]),
                  onClick: l[2] || (l[2] = (n) => m.value ? n.stopPropagation : null)
                }, [
                  i("div", J, [
                    b(c(Y), {
                      name: "calendar",
                      class: "text-oc-text-400"
                    }),
                    i("input", {
                      placeholder: "Start date",
                      value: o.value[0] ? o.value[0].format(e.dateFormat) : "",
                      class: "text-center bg-transparent outline-0 w-full placeholder:text-oc-text-300",
                      onInput: l[0] || (l[0] = (n) => w(n.target.value, 0)),
                      onKeydown: B(y, ["enter"]),
                      onBlur: y
                    }, null, 40, Q)
                  ]),
                  l[4] || (l[4] = i("span", { class: "text-oc-text-400" }, "To", -1)),
                  i("div", X, [
                    i("input", {
                      placeholder: "End date",
                      value: o.value[1] ? o.value[1].format(e.dateFormat) : "",
                      class: "text-center bg-transparent outline-0 w-full placeholder:text-oc-text-300",
                      onInput: l[1] || (l[1] = (n) => w(n.target.value, 1)),
                      onKeydown: B(y, ["enter"]),
                      onBlur: y
                    }, null, 40, Z),
                    b(c(Y), {
                      class: M([o.value.every(Boolean) ? "opacity-100" : "opacity-0", "text-oc-text-400"]),
                      width: "16",
                      height: "16",
                      name: "filled-x-circle",
                      onClick: U(D, ["stop"])
                    }, null, 8, ["class"])
                  ])
                ], 2)
              ]),
              _: 1
            }, 8, ["error-message", "hint", "is-required", "label"])
          ]))
        ])
      ]),
      _: 3
    }, 8, ["modelValue", "is-disabled"]));
  }
};
export {
  fe as _
};
