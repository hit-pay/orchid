import { computed as s, openBlock as o, createBlock as u, unref as m, withCtx as y, createElementVNode as C, normalizeClass as v, createCommentVNode as p, createElementBlock as A, Fragment as h, renderList as k } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { z as x } from "./OcBaseInput-B-eZowCe-M_QvuaZV.js";
import { E as g } from "./OcCheckbox-CPEV7kEq-UN7b0C93.js";
const O = {
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
    const t = e, n = V, b = s(() => ({
      horizontal: "gap-x-5 flex-wrap",
      vertical: "flex-col gap-y-3"
    })), r = (a) => {
      var l;
      return (l = t.modelValue) == null ? void 0 : l.includes(a);
    }, f = (a) => {
      n(
        "update:modelValue",
        r(a) ? t.modelValue.filter((l) => l !== a) : [...t.modelValue, a]
      );
    }, d = s(
      () => {
        var a;
        return (a = t.checkboxes) == null ? void 0 : a.every((l) => r(l == null ? void 0 : l.value));
      }
    ), c = s(() => {
      var a;
      return (a = t.checkboxes) == null ? void 0 : a.map((l) => l == null ? void 0 : l.value);
    }), B = () => {
      d.value ? n("update:modelValue", []) : n("update:modelValue", c.value);
    };
    return (a, l) => (o(), u(m(x), {
      label: e.label,
      "error-message": e.errorMessage,
      hint: e.hint
    }, {
      default: y(() => [
        C("div", {
          class: v(["flex", b.value[e.alignment]])
        }, [
          e.isSelectAll ? (o(), u(m(g), {
            key: 0,
            label: "Select all",
            "is-disabled": e.isDisabled,
            value: c.value,
            "model-value": d.value,
            "is-button-variant": e.isButtonVariant,
            "onUpdate:modelValue": B
          }, null, 8, ["is-disabled", "value", "model-value", "is-button-variant"])) : p("", !0),
          (o(!0), A(h, null, k(e.checkboxes, (i, S) => (o(), u(m(g), {
            key: S,
            label: i.label,
            value: i.value,
            "is-error": !!e.errorMessage,
            "is-disabled": e.isDisabled,
            class: v({ "!w-fit": !e.isBlock }),
            "model-value": r(i.value),
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
  O as _
};
