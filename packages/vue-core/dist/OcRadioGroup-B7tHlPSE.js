import { computed as d, openBlock as a, createBlock as i, unref as l, withCtx as p, createElementVNode as g, normalizeClass as r, createElementBlock as b, Fragment as f, renderList as h } from "vue";
import "dayjs";
import { _ as v } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
import { _ as B } from "./OcRadio-wv1RWUkq.js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const D = {
  __name: "OcRadioGroup",
  props: {
    alignment: {
      type: String,
      default: "vertical"
    },
    radio: Array,
    label: String,
    wrapperClass: String,
    groupName: String,
    errorMessage: String,
    hint: String,
    modelValue: String,
    isButtonVariant: Boolean,
    isButtonVariantWithRadio: Boolean,
    isBlock: Boolean
  },
  emits: {
    "update:modelValue": []
  },
  setup(t, { emit: n }) {
    const s = n, m = d(() => ({
      horizontal: "gap-x-5 flex-wrap",
      vertical: "flex-col gap-y-3"
    })), u = (o) => {
      s("update:modelValue", o);
    };
    return (o, x) => (a(), i(l(v), {
      label: t.label,
      "error-message": t.errorMessage,
      hint: t.hint
    }, {
      default: p(() => [
        g("div", {
          class: r(["flex", [m.value[t.alignment], t.wrapperClass]])
        }, [
          (a(!0), b(f, null, h(t.radio, (e, c) => (a(), i(l(B), {
            id: e.value,
            key: c,
            class: r({ "!w-fit": !t.isBlock }),
            "model-value": e.value,
            label: e.label,
            icon: e.icon,
            "is-error": !!t.errorMessage,
            checked: e.value === t.modelValue,
            "is-disabled": !!e.isDisabled,
            "group-name": t.groupName,
            "tooltip-text": e.tooltipText,
            "label-icon": e.labelIcon,
            "tooltip-options": e.tooltipOptions,
            "is-button-variant": t.isButtonVariant,
            "is-button-variant-with-radio": t.isButtonVariantWithRadio,
            "onUpdate:modelValue": u
          }, null, 8, ["id", "class", "model-value", "label", "icon", "is-error", "checked", "is-disabled", "group-name", "tooltip-text", "label-icon", "tooltip-options", "is-button-variant", "is-button-variant-with-radio"]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "error-message", "hint"]));
  }
};
export {
  D as _
};
