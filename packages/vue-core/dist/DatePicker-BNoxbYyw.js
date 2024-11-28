import { ref as b, computed as S, openBlock as f, createBlock as p, unref as c, withCtx as V, renderSlot as R, createCommentVNode as k, createElementVNode as i, createElementBlock as F, Fragment as A, createVNode as x, toDisplayString as E, normalizeClass as M, withKeys as B, withModifiers as U } from "vue";
import d from "dayjs";
import { c as j, D as K, b as O, _ as P } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as $ } from "./OcIcon-CJgBICxh.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as T } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
/* empty css                                                                  */
import { _ as L } from "./OcComplexCalendar-B4m87ayS.js";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const z = { class: "flex flex-col gap-y-2 w-full" }, G = { class: "flex w-full" }, H = {
  key: 0,
  class: "text-sm text-oc-error flex items-center"
}, J = {
  key: 1,
  class: "flex flex-wrap cursor-pointer"
}, Q = { class: "flex items-center gap-x-3" }, W = ["value"], X = { class: "flex items-center gap-x-3" }, Z = ["value"], ge = {
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
  setup(e, { emit: Y }) {
    d.extend(j);
    const s = Y, t = e, m = b(!1), w = b(!1), y = b(!1), r = b([]), v = S(() => t.type === "range"), o = S(() => v.value ? t.modelValue && t.modelValue[0] ? [
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
    }, q = (a) => {
      const l = d(a);
      return ((u) => u.get("month") === d().get("month"))(l);
    }, N = (a) => {
      w.value = a, s("update:modelValue", a ? "Indefinite" : null);
    }, I = (a, l) => {
      var u;
      const n = d(a, t.dateFormat, !0);
      r.value[l] = n.format(t.dateFormat), r.value[l ? 0 : 1] = ((u = t.modelValue) == null ? void 0 : u[l ? 0 : 1]) || d().format(t.dateFormat);
    }, g = () => {
      if (r.value.length) {
        if (y.value = !1, r.value.some((a) => !d(a, t.dateFormat).isValid())) {
          y.value = !0, r.value = [];
          return;
        }
        t.maxDate && (r.value = r.value.map(
          (a) => d(a, t.dateFormat).isSameOrBefore(d(t.maxDate)) ? a : d(t.maxDate).format(t.dateFormat)
        )), s("update:modelValue", r.value), r.value = [];
      }
    };
    return (a, l) => (f(), p(c(K), {
      modelValue: m.value,
      "onUpdate:modelValue": l[3] || (l[3] = (n) => m.value = n),
      "is-disabled": e.disabled,
      placement: "bottom-start",
      distance: 10,
      class: "w-full"
    }, {
      menu: V(({ isPopoverOpen: n }) => [
        R(a.$slots, "menu", {
          isPopoverOpen: n,
          updateCalendar: h,
          resetCalendar: D
        }, () => {
          var u, C;
          return [
            v.value ? (f(), p(L, {
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
            }, null, 8, ["model-value", "shortcuts", "count-calendars", "min-date", "max-date", "masks"])) : !e.disabled && n ? (f(), p(c(O), {
              key: 1,
              "model-value": o.value ? o.value.toDate() : /* @__PURE__ */ new Date(),
              "disabled-date": w.value ? q : e.disabledDate,
              "max-date": e.maxDate,
              "min-date": e.minDate,
              "is-indefinite": e.isIndefinite,
              position: "inline",
              type: e.type,
              "onUpdate:modelValue": h,
              "onUpdate:isIndefinite": N,
              onResetCalendar: D
            }, null, 8, ["model-value", "disabled-date", "max-date", "min-date", "is-indefinite", "type"])) : k("", !0)
          ];
        })
      ]),
      default: V(() => [
        i("div", z, [
          !e.isSplitInput || !v.value ? (f(), F(A, { key: 0 }, [
            i("div", G, [
              x(c(T), {
                "model-value": v.value ? e.modelValue && e.modelValue[0] ? `${o.value[0].format(e.dateFormat)} - ${o.value[1].format(e.dateFormat)}` : "" : e.modelValue === "Indefinite" ? "Indefinite" : e.modelValue ? o.value.format(e.dateFormat) : "",
                icon: "calendar",
                label: e.label,
                hint: e.hint,
                "is-required": e.isRequired,
                disabled: e.disabled,
                placeholder: e.placeholder
              }, null, 8, ["model-value", "label", "hint", "is-required", "disabled", "placeholder"])
            ]),
            e.errorMessage ? (f(), F("div", H, E(e.errorMessage), 1)) : k("", !0)
          ], 64)) : (f(), F("div", J, [
            x(c(P), {
              "error-message": y.value ? `Invalid Date. Try this format (${e.dateFormat})` : e.errorMessage,
              hint: e.hint,
              "is-required": e.isRequired,
              label: e.label
            }, {
              default: V(() => [
                i("div", {
                  class: M(["rounded justify-between border flex items-center gap-3 h-[36px] px-3", [
                    e.errorMessage || y.value ? "border-oc-error shadow-oc-error" : "border-oc-gray-200 shadow-oc-gray-200",
                    e.disabled ? "pointer-events-none bg-oc-bg-dark" : "bg-white",
                    {
                      "shadow-[0_0_0_2px]": m.value && !e.disabled
                    }
                  ]]),
                  onClick: l[2] || (l[2] = (n) => m.value ? n.stopPropagation : null)
                }, [
                  i("div", Q, [
                    x(c($), {
                      name: "calendar",
                      class: "text-oc-text-400"
                    }),
                    i("input", {
                      placeholder: "Start date",
                      value: o.value[0] ? o.value[0].format(e.dateFormat) : "",
                      class: "text-center bg-transparent outline-0 w-full placeholder:text-oc-text-300",
                      onInput: l[0] || (l[0] = (n) => I(n.target.value, 0)),
                      onKeydown: B(g, ["enter"]),
                      onBlur: g
                    }, null, 40, W)
                  ]),
                  l[4] || (l[4] = i("span", { class: "text-oc-text-400" }, "To", -1)),
                  i("div", X, [
                    i("input", {
                      placeholder: "End date",
                      value: o.value[1] ? o.value[1].format(e.dateFormat) : "",
                      class: "text-center bg-transparent outline-0 w-full placeholder:text-oc-text-300",
                      onInput: l[1] || (l[1] = (n) => I(n.target.value, 1)),
                      onKeydown: B(g, ["enter"]),
                      onBlur: g
                    }, null, 40, Z),
                    x(c($), {
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
  ge as _
};
