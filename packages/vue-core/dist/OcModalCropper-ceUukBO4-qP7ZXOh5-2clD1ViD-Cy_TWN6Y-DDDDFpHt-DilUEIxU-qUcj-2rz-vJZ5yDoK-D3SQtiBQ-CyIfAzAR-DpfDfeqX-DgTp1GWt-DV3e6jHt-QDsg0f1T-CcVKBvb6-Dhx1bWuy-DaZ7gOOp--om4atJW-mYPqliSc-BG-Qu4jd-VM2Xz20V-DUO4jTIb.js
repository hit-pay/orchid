import { ref as t, openBlock as c, createBlock as g, unref as u, withCtx as v, createVNode as f } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { Y as d } from "./OcModal-4ROIR1vr-JJFn5rii-B24pX5Kj-CDdhzxja-DS0beOkh-BKTJgCPS-Bk6-3EW7-LWPhHpHK-BZHX6Fhu-BYLdNq2L-BYWcq2X--Bo0AYCUw-gg5zQpa0-Cc45RBaG-gKDMmcEw-D6Mj4vm4-BqTSXC2D-B6DaY-fi-DC7fMaRH-DAWWN046-jj9WHOlg-BBdYt12m-ezYsygxS.js";
import O from "./OcCropper-CmYSwZTR-CBRIr5ua-D8MzPe6E-DCXljtgQ-Bm3gi2wr-JE4fkSiL-BWxK46Q_-DoT_YN-E-DtP4kCr8-B7x8P42F-CXrP3-3b-C5porYl4-Cjc90Rum-BQgizFZ_-Cfd8nqG0-Dto-uwSh-5hnKBNva-C90ODea7-CtK0ERbR-RtZYmSlH-CVAcsZQ_-MGFLfPrV.js";
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
    const m = o, e = r;
    t(), t();
    const l = {
      onClick: () => e("close")
    }, n = t(), p = t(m.link), s = t({
      label: "Save",
      onClick: () => {
        p.value && e("update:input-options", p.value), n.value ? e("changeImage", n.value) : e("close");
      }
    });
    return (b, i) => (c(), g(u(d), {
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
          onChangeImage: i[0] || (i[0] = (a) => n.value = a),
          "onUpdate:inputOptions": i[1] || (i[1] = (a) => p.value = a)
        }, null, 8, ["input-options", "input-option-values", "img", "max-size"])
      ]),
      _: 1
    }, 8, ["confirm-button-props"]));
  }
};
export {
  B as default
};
