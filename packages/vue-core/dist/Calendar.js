import { _ as u } from "./OcComplexCalendar-B4m87ayS.js";
import { ref as s, openBlock as d, createBlock as c, unref as e, withCtx as l, createVNode as r } from "vue";
import n from "dayjs";
import { c as p, _ as f, D as b } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as D } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
/* empty css                                                                  */
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const M = {
  __name: "OcComplexDatePicker",
  props: {
    shortcuts: Array,
    cancelButtonProps: Object,
    submitButtonProps: Object,
    /**
     * Props to pass to the calendar component from https://vcalendar.io/
     */
    calendarProps: Object,
    modelValue: {
      type: Object,
      default: () => ({
        start: /* @__PURE__ */ new Date(),
        end: /* @__PURE__ */ new Date()
      })
    },
    formatDate: {
      type: String,
      default: "DD/MM/YYYY"
    },
    countCalendars: {
      type: Number,
      default: 2
    },
    withFooter: {
      type: Boolean,
      default: !0
    },
    label: String,
    hint: String,
    isRequired: Boolean,
    errorMessage: String,
    labelIcon: String,
    tooltipText: String,
    tooltipOptions: Object
  },
  emits: {
    "update:modelValue": []
  },
  setup(t) {
    n.extend(p);
    const i = s(!1);
    return (m, o) => (d(), c(e(f), {
      label: t.label,
      hint: t.hint,
      "error-message": t.errorMessage,
      "is-required": t.isRequired,
      "tooltip-options": t.tooltipOptions,
      "label-icon": t.labelIcon,
      "tooltip-text": t.tooltipText
    }, {
      default: l(() => [
        r(e(b), {
          modelValue: i.value,
          "onUpdate:modelValue": o[1] || (o[1] = (a) => i.value = a),
          position: "bottom",
          class: "w-full"
        }, {
          menu: l(() => [
            r(e(u), {
              "model-value": t.modelValue,
              shortcuts: t.shortcuts,
              "cancel-button-props": t.cancelButtonProps,
              "submit-button-props": t.submitButtonProps,
              "calendar-props": t.calendarProps,
              "count-calendars": t.countCalendars,
              "with-footer": t.withFooter,
              "onUpdate:modelValue": o[0] || (o[0] = (a) => m.$emit("update:modelValue", a))
            }, null, 8, ["model-value", "shortcuts", "cancel-button-props", "submit-button-props", "calendar-props", "count-calendars", "with-footer"])
          ]),
          default: l(() => [
            r(e(D), {
              "model-value": `${e(n)(t.modelValue.start).format(t.formatDate)} - ${e(n)(
                t.modelValue.end
              ).format(t.formatDate)}`,
              icon: "calendar",
              readonly: ""
            }, null, 8, ["model-value"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["label", "hint", "error-message", "is-required", "tooltip-options", "label-icon", "tooltip-text"]));
  }
};
export {
  u as ComplexCalendar,
  M as ComplexDatePicker
};
