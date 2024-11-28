import { computed as s, openBlock as c, createBlock as m, unref as d, withCtx as i, renderSlot as p } from "vue";
import { VueDraggableNext as g } from "vue-draggable-next";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
const V = {
  __name: "OcDraggable",
  props: {
    modelValue: Array
  },
  emits: {
    "update:modelValue": [],
    detectMove: null
  },
  setup(a, { emit: l }) {
    const r = a, o = l, t = s(() => r.modelValue), n = (e) => {
      o("update:modelValue", t.value, e);
    }, u = (e) => {
      o("detectMove", e);
    };
    return (e, v) => (c(), m(d(g), {
      handle: ".drag-el",
      list: t.value,
      animation: 500,
      move: u,
      onChange: n
    }, {
      default: i(() => [
        p(e.$slots, "default", { list: t.value })
      ]),
      _: 3
    }, 8, ["list"]));
  }
};
export {
  V as _
};
