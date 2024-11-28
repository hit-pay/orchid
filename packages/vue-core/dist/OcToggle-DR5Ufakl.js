import { computed as s, openBlock as n, createElementBlock as i, createElementVNode as l, normalizeClass as t, toDisplayString as b, createCommentVNode as f } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const g = { class: "inline-flex items-center gap-3 h-fit" }, h = ["value", "checked"], p = `absolute top-0 left-0 bg-oc-primary-100 rounded-full cursor-pointer transition-all duration-300
 before:transition-all before:duration-300 before:absolute before:rounded-full before:bg-oc-bg-light`, x = {
  __name: "OcToggle",
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: "default"
    },
    label: String
  },
  emits: {
    "update:modelValue": []
  },
  setup(e, { emit: c }) {
    const r = e, d = c, o = () => d("update:modelValue", !r.modelValue), a = s(() => ({
      default: "w-[42px] h-7",
      small: "w-[26px] h-[15px]"
    })), u = s(() => ({
      default: "before:w-6 before:h-6 before:top-1 before:left-1",
      small: " before:w-4 before:h-4 before:top-[1.5px] before:left-[1.5px]"
    }));
    return (v, k) => (n(), i("div", g, [
      l("label", {
        class: t(["toggle-switch relative inline-block", [a.value[e.size], e.size, e.disabled ? "pointer-events-none opacity-60" : ""]])
      }, [
        l("input", {
          class: t(["toggle-input hidden", {
            "is-checked": e.modelValue
          }]),
          value: e.modelValue,
          checked: e.modelValue,
          type: "checkbox",
          onChange: o
        }, null, 42, h),
        l("span", {
          class: t(["toggle-label", [p, a.value[e.size], u.value[e.size]]])
        }, null, 2)
      ], 2),
      e.label ? (n(), i("div", {
        key: 0,
        class: "text-sm cursor-pointer",
        onClick: o
      }, b(e.label), 1)) : f("", !0)
    ]));
  }
}, C = /* @__PURE__ */ m(x, [["__scopeId", "data-v-0c0b0d12"]]);
export {
  C as O
};
