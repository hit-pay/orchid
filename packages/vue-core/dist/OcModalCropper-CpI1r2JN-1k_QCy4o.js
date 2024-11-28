import { ref as t, openBlock as c, createBlock as g, unref as u, withCtx as v, createVNode as f } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { A as d } from "./OcModalPage-DifmiJPr-D_uClC-E-C1KuKJ5Y.js";
import O from "./OcCropper-FDBNFr4g-thhdyR7Y.js";
import "vue-advanced-cropper";
const B = {
  __name: "OcModalCropper",
  props: {
    inputOptions: Array,
    inputOptionValues: Object,
    img: String,
    maxSize: [String, Number]
  },
  emits: ["changeImage", "close", "update:input-options"],
  setup(o, { emit: r }) {
    const m = o, i = r;
    t(), t();
    const l = {
      onClick: () => i("close")
    }, p = t(), n = t(m.link), s = t({
      label: "Save",
      onClick: () => {
        n.value && i("update:input-options", n.value), p.value ? i("changeImage", p.value) : i("close");
      }
    });
    return (b, e) => (c(), g(u(d), {
      title: "Edit Image",
      "is-close-icon": "",
      "cancel-button-props": l,
      "confirm-button-props": s.value
    }, {
      default: v(() => [
        f(u(O), {
          "input-options": o.inputOptions,
          "input-option-values": o.inputOptionValues,
          img: o.img,
          "max-size": o.maxSize,
          onChangeImage: e[0] || (e[0] = (a) => p.value = a),
          "onUpdate:inputOptions": e[1] || (e[1] = (a) => n.value = a)
        }, null, 8, ["input-options", "input-option-values", "img", "max-size"])
      ]),
      _: 1
    }, 8, ["confirm-button-props"]));
  }
};
export {
  B as default
};
