import { ref as t, openBlock as c, createBlock as g, unref as u, withCtx as v, createVNode as f } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { A as d } from "./OcModalPage-DXBxFH5r-BzMbZ6wJ-BpH2S3gg.js";
import O from "./OcCropper-dmUsZD15-CwCDUnjF.js";
const A = {
  __name: "OcModalCropper",
  props: {
    inputOptions: Array,
    inputOptionValues: Object,
    img: String,
    maxSize: [String, Number]
  },
  emits: ["changeImage", "close", "update:input-options"],
  setup(o, { emit: r }) {
    const l = o, e = r;
    t(), t();
    const m = {
      onClick: () => e("close")
    }, p = t(), n = t(l.link), s = t({
      label: "Save",
      onClick: () => {
        n.value && e("update:input-options", n.value), p.value ? e("changeImage", p.value) : e("close");
      }
    });
    return (b, i) => (c(), g(u(d), {
      title: "Edit Image",
      "is-close-icon": "",
      "cancel-button-props": m,
      "confirm-button-props": s.value
    }, {
      default: v(() => [
        f(u(O), {
          "input-options": o.inputOptions,
          "input-option-values": o.inputOptionValues,
          img: o.img,
          "max-size": o.maxSize,
          onChangeImage: i[0] || (i[0] = (a) => p.value = a),
          "onUpdate:inputOptions": i[1] || (i[1] = (a) => n.value = a)
        }, null, 8, ["input-options", "input-option-values", "img", "max-size"])
      ]),
      _: 1
    }, 8, ["confirm-button-props"]));
  }
};
export {
  A as default
};
