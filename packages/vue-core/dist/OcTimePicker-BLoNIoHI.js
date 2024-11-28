import { defineAsyncComponent as v, ref as m, watch as y, openBlock as u, createBlock as p, unref as a, withCtx as s, createCommentVNode as S, createVNode as D } from "vue";
import c from "dayjs";
import { D as h } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as T } from "./OcInput-BhmeVr1A.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const $ = {
  __name: "OcTimePicker",
  props: {
    modelValue: [String, Date],
    label: String,
    hint: String,
    icon: {
      type: String,
      default: "time"
    },
    preFill: String,
    placeholder: String,
    errorMessage: String,
    isRequired: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    labelIcon: {
      type: String,
      default: ""
    },
    tooltipText: {
      type: String,
      default: ""
    },
    tooltipOptions: {
      type: Object,
      default: () => ({})
    }
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { emit: f }) {
    const b = f, V = v(
      () => import("./OcTimePopup-C80e3YYc.js")
    ), n = m(), r = m(!1), d = e, i = m(d.modelValue), g = () => {
      b("update:modelValue", i.value), setTimeout(() => {
        var t;
        return (t = n.value) == null ? void 0 : t.updateActiveTime();
      }, 300);
    };
    return y(
      () => d.modelValue,
      (t) => {
        i.value = t != "" ? t : c().toDate();
      },
      { immediate: !0 }
    ), (t, l) => (u(), p(a(h), {
      modelValue: r.value,
      "onUpdate:modelValue": [
        l[2] || (l[2] = (o) => r.value = o),
        g
      ],
      "menu-classes": "min-w-fit",
      distance: 10,
      "is-disabled": e.isDisabled
    }, {
      menu: s(() => [
        r.value ? (u(), p(a(V), {
          key: 0,
          ref_key: "popup",
          ref: n,
          modelValue: i.value,
          "onUpdate:modelValue": [
            l[0] || (l[0] = (o) => i.value = o),
            l[1] || (l[1] = (o) => t.$emit("update:modelValue", o))
          ]
        }, null, 8, ["modelValue"])) : S("", !0)
      ]),
      default: s(() => [
        D(a(T), {
          icon: e.icon,
          "error-message": e.errorMessage,
          label: e.label,
          hint: e.hint,
          "pre-fill": e.preFill,
          placeholder: e.placeholder,
          "model-value": a(c)(i.value).format("hh:mm A"),
          "is-required": e.isRequired,
          "label-icon": e.labelIcon,
          "tooltip-text": e.tooltipText,
          "tooltip-options": e.tooltipOptions,
          "is-readonly": !0,
          disabled: e.isDisabled
        }, null, 8, ["icon", "error-message", "label", "hint", "pre-fill", "placeholder", "model-value", "is-required", "label-icon", "tooltip-text", "tooltip-options", "disabled"])
      ]),
      _: 1
    }, 8, ["modelValue", "is-disabled"]));
  }
};
export {
  $ as _
};
