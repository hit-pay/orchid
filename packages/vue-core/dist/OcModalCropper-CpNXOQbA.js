import { ref as o, openBlock as c, createBlock as f, unref as r, withCtx as g, createVNode as v } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
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
import { _ as d } from "./OcModal-BKjHuV_w.js";
import "@popperjs/core";
import x from "./OcCropper-CQPsRIbQ.js";
const L = {
  __name: "OcModalCropper",
  props: {
    inputOptions: Array,
    inputOptionValues: Object,
    img: String,
    maxSize: [String, Number]
  },
  emits: ["changeImage", "close", "update:input-options"],
  setup(t, { emit: a }) {
    const u = t, i = a;
    o(), o();
    const s = {
      onClick: () => i("close")
    }, e = o(), p = o(u.link), l = o({
      label: "Save",
      onClick: () => {
        p.value && i("update:input-options", p.value), e.value ? i("changeImage", e.value) : i("close");
      }
    });
    return (O, n) => (c(), f(r(d), {
      title: "Edit Image",
      "is-close-icon": "",
      "cancel-button-props": s,
      "confirm-button-props": l.value
    }, {
      default: g(() => [
        v(r(x), {
          "input-options": t.inputOptions,
          "input-option-values": t.inputOptionValues,
          img: t.img,
          "max-size": t.maxSize,
          onChangeImage: n[0] || (n[0] = (m) => e.value = m),
          "onUpdate:inputOptions": n[1] || (n[1] = (m) => p.value = m)
        }, null, 8, ["input-options", "input-option-values", "img", "max-size"])
      ]),
      _: 1
    }, 8, ["confirm-button-props"]));
  }
};
export {
  L as default
};
