import { ref as o, openBlock as c, createBlock as f, unref as u, withCtx as g, createVNode as v } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { J as d } from "./OcModalPage-DXBxFH5r-BzMbZ6wJ.js";
import x from "./OcCropper-dmUsZD15.js";
const P = {
  __name: "OcModalCropper",
  props: {
    inputOptions: Array,
    inputOptionValues: Object,
    img: String,
    maxSize: [String, Number]
  },
  emits: ["changeImage", "close", "update:input-options"],
  setup(t, { emit: m }) {
    const l = t, i = m;
    o(), o();
    const r = {
      onClick: () => i("close")
    }, e = o(), p = o(l.link), s = o({
      label: "Save",
      onClick: () => {
        p.value && i("update:input-options", p.value), e.value ? i("changeImage", e.value) : i("close");
      }
    });
    return (O, n) => (c(), f(u(d), {
      title: "Edit Image",
      "is-close-icon": "",
      "cancel-button-props": r,
      "confirm-button-props": s.value
    }, {
      default: g(() => [
        v(u(x), {
          "input-options": t.inputOptions,
          "input-option-values": t.inputOptionValues,
          img: t.img,
          "max-size": t.maxSize,
          onChangeImage: n[0] || (n[0] = (a) => e.value = a),
          "onUpdate:inputOptions": n[1] || (n[1] = (a) => p.value = a)
        }, null, 8, ["input-options", "input-option-values", "img", "max-size"])
      ]),
      _: 1
    }, 8, ["confirm-button-props"]));
  }
};
export {
  P as default
};
