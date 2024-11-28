import { _ as m } from "./OcComplexCalendar-CRlgm2-F.js";
import { ref as s, openBlock as d, createBlock as c, unref as t, withCtx as l, createVNode as r } from "vue";
import n from "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { z as f } from "./OcBaseInput-B-eZowCe-M_QvuaZV.js";
import { d as p } from "./OcInputOption-rY2kKCL8-Ce2jETq4.js";
import { o as b } from "./OcDropdownItem-CzffqBjG-CMBrNq8k.js";
import { c as V } from "./customParseFormat-CoBtXnqJ.js";
const j = {
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
  setup(e) {
    n.extend(V);
    const i = s(!1);
    return (u, o) => (d(), c(t(f), {
      label: e.label,
      hint: e.hint,
      "error-message": e.errorMessage,
      "is-required": e.isRequired,
      "tooltip-options": e.tooltipOptions,
      "label-icon": e.labelIcon,
      "tooltip-text": e.tooltipText
    }, {
      default: l(() => [
        r(t(b), {
          modelValue: i.value,
          "onUpdate:modelValue": o[1] || (o[1] = (a) => i.value = a),
          position: "bottom",
          class: "w-full"
        }, {
          menu: l(() => [
            r(t(m), {
              "model-value": e.modelValue,
              shortcuts: e.shortcuts,
              "cancel-button-props": e.cancelButtonProps,
              "submit-button-props": e.submitButtonProps,
              "calendar-props": e.calendarProps,
              "count-calendars": e.countCalendars,
              "with-footer": e.withFooter,
              "onUpdate:modelValue": o[0] || (o[0] = (a) => u.$emit("update:modelValue", a))
            }, null, 8, ["model-value", "shortcuts", "cancel-button-props", "submit-button-props", "calendar-props", "count-calendars", "with-footer"])
          ]),
          default: l(() => [
            r(t(p), {
              "model-value": `${t(n)(e.modelValue.start).format(e.formatDate)} - ${t(n)(
                e.modelValue.end
              ).format(e.formatDate)}`,
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
  m as ComplexCalendar,
  j as ComplexDatePicker
};
