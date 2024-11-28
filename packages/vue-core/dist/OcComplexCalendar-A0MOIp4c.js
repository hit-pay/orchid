import { ref as x, openBlock as o, createElementBlock as n, createElementVNode as b, Fragment as p, renderList as V, normalizeClass as v, unref as a, toDisplayString as k, createCommentVNode as u, createVNode as m, mergeProps as d } from "vue";
import { DatePicker as C } from "v-calendar";
import r from "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "vue-draggable-next";
import "@popperjs/core";
import { q as f } from "./OcButton-CgGNGzWP-CIpgruq1.js";
const h = { class: "flex flex-col p-6 gap-y-7 w-fit shadow-normal rounded" }, M = { class: "flex gap-x-7" }, w = {
  key: 0,
  class: "flex flex-col py-2 gap-y-4"
}, B = ["onClick"], P = {
  key: 0,
  class: "flex justify-end gap-x-3"
}, q = {
  __name: "OcComplexCalendar",
  props: {
    shortcuts: Array,
    cancelButtonProps: Object,
    submitButtonProps: Object,
    modelValue: {
      type: Object,
      default: () => ({
        start: /* @__PURE__ */ new Date(),
        end: /* @__PURE__ */ new Date()
      })
    },
    countCalendars: {
      type: Number,
      default: 2
    },
    withFooter: {
      type: Boolean,
      default: !0
    },
    isRange: {
      type: Boolean,
      default: !0
    },
    minDate: {
      type: [String, Date, Number]
    },
    maxDate: {
      type: [String, Date, Number]
    }
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { emit: D }) {
    const y = D, i = x(), g = (l) => {
      y("update:modelValue", l), i.value.calendarRef.focusDate(r(l.start).toDate());
    };
    return (l, s) => {
      var c;
      return o(), n("div", h, [
        b("div", M, [
          (c = e.shortcuts) != null && c.length ? (o(), n("div", w, [
            (o(!0), n(p, null, V(e.shortcuts, (t) => (o(), n("div", {
              key: t,
              class: v([
                "rounded text-center px-4 font-medium py-2 cursor-pointer",
                a(r)(t.value.start).format("YY-MM-DD") === a(r)(e.modelValue.start).format("YY-MM-DD") && a(r)(t.value.end).format("YY-MM-DD") === a(r)(e.modelValue.end).format("YY-MM-DD") && e.modelValue.end && e.modelValue.start ? "bg-oc-primary-50" : "hover:bg-oc-accent-1-50"
              ]),
              onClick: (Y) => g(t.value)
            }, k(t.label), 11, B))), 128))
          ])) : u("", !0),
          m(a(C), d({
            ref_key: "datePicker",
            ref: i,
            "model-value": e.modelValue,
            "model-modifiers": {
              range: e.isRange
            },
            class: {
              "oc-complex-calendar__calendar--single": !e.isRange || e.countCalendars == 1
            },
            locale: "en",
            color: "primary",
            borderless: "",
            columns: e.countCalendars
          }, l.$attrs, {
            "min-date": e.minDate,
            "max-date": e.maxDate,
            "onUpdate:modelValue": s[0] || (s[0] = (t) => l.$emit("update:modelValue", t))
          }), null, 16, ["model-value", "model-modifiers", "class", "columns", "min-date", "max-date"])
        ]),
        e.withFooter ? (o(), n("div", P, [
          m(a(f), d({
            class: "min-w-[72px]",
            label: "Clear",
            variant: "secondary"
          }, e.cancelButtonProps), null, 16),
          m(a(f), d({
            class: "min-w-[72px]",
            label: "Done"
          }, e.submitButtonProps), null, 16)
        ])) : u("", !0)
      ]);
    };
  }
};
export {
  q as _
};
