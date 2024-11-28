import { computed as n, openBlock as o, createBlock as u, unref as m, withCtx as S, createElementVNode as y, normalizeClass as v, createCommentVNode as C, createElementBlock as A, Fragment as h, renderList as k } from "vue";
import "dayjs";
import { _ as x, a as g } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import "libphonenumber-js";
/* empty css                                                                  */
import "v-calendar";
/* empty css                                                                  */
import "./Cropper.js";
import "vue-draggable-next";
import "@popperjs/core";
const J = {
  __name: "OcCheckboxesGroup",
  props: {
    alignment: {
      type: String,
      default: "vertical"
    },
    checkboxes: Array,
    modelValue: {
      type: [Array, String]
    },
    label: String,
    errorMessage: String,
    hint: String,
    isDisabled: Boolean,
    isSelectAll: Boolean,
    isButtonVariant: Boolean,
    isBlock: Boolean
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { emit: V }) {
    const t = e, r = V, b = n(() => ({
      horizontal: "gap-x-5 flex-wrap",
      vertical: "flex-col gap-y-3"
    })), s = (a) => {
      var l;
      return (l = t.modelValue) == null ? void 0 : l.includes(a);
    }, f = (a) => {
      r(
        "update:modelValue",
        s(a) ? t.modelValue.filter((l) => l !== a) : [...t.modelValue, a]
      );
    }, d = n(
      () => {
        var a;
        return (a = t.checkboxes) == null ? void 0 : a.every((l) => s(l == null ? void 0 : l.value));
      }
    ), c = n(() => {
      var a;
      return (a = t.checkboxes) == null ? void 0 : a.map((l) => l == null ? void 0 : l.value);
    }), p = () => {
      d.value ? r("update:modelValue", []) : r("update:modelValue", c.value);
    };
    return (a, l) => (o(), u(m(x), {
      label: e.label,
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: S(() => [
        y("div", {
          class: v(["flex", b.value[e.alignment]])
        }, [
          e.isSelectAll ? (o(), u(m(g), {
            key: 0,
            label: "Select all",
            "is-disabled": e.isDisabled,
            value: c.value,
            "model-value": d.value,
            "is-button-variant": e.isButtonVariant,
            "onUpdate:modelValue": p
          }, null, 8, ["is-disabled", "value", "model-value", "is-button-variant"])) : C("", !0),
          (o(!0), A(h, null, k(e.checkboxes, (i, B) => (o(), u(m(g), {
            key: B,
            label: i.label,
            value: i.value,
            "is-error": !!e.errorMessage,
            "is-disabled": e.isDisabled,
            class: v({ "!w-fit": !e.isBlock }),
            "model-value": s(i.value),
            "is-button-variant": e.isButtonVariant,
            "onUpdate:modelValue": (w) => f(i.value)
          }, null, 8, ["label", "value", "is-error", "is-disabled", "class", "model-value", "is-button-variant", "onUpdate:modelValue"]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "error-message", "hint"]));
  }
};
export {
  J as _
};
