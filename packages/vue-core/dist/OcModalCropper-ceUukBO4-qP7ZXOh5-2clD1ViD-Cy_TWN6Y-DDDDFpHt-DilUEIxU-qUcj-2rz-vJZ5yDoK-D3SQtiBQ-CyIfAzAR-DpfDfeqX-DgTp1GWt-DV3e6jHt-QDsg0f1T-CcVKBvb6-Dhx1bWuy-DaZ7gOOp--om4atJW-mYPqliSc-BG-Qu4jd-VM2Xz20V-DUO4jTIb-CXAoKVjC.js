import { ref as e, openBlock as c, createBlock as g, unref as u, withCtx as v, createVNode as f } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { D as d } from "./OcModal-4ROIR1vr-JJFn5rii-B24pX5Kj-CDdhzxja-DS0beOkh-BKTJgCPS-Bk6-3EW7-LWPhHpHK-BZHX6Fhu-BYLdNq2L-BYWcq2X--Bo0AYCUw-gg5zQpa0-Cc45RBaG-gKDMmcEw-D6Mj4vm4-BqTSXC2D-B6DaY-fi-DC7fMaRH-DAWWN046-jj9WHOlg-BBdYt12m-ezYsygxS-DVggj38O.js";
import b from "./OcCropper-CmYSwZTR-CBRIr5ua-D8MzPe6E-DCXljtgQ-Bm3gi2wr-JE4fkSiL-BWxK46Q_-DoT_YN-E-DtP4kCr8-B7x8P42F-CXrP3-3b-C5porYl4-Cjc90Rum-BQgizFZ_-Cfd8nqG0-Dto-uwSh-5hnKBNva-C90ODea7-CtK0ERbR-RtZYmSlH-CVAcsZQ_-MGFLfPrV-Bgh5lq8A.js";
import "vue-advanced-cropper";
const N = {
  __name: "OcModalCropper",
  props: {
    inputOptions: Array,
    inputOptionValues: Object,
    img: String,
    maxSize: [String, Number]
  },
  emits: ["changeImage", "close", "update:input-options"],
  setup(t, { emit: r }) {
    const m = t, o = r;
    e(), e();
    const l = {
      onClick: () => o("close")
    }, n = e(), p = e(m.link), s = e({
      label: "Save",
      onClick: () => {
        p.value && o("update:input-options", p.value), n.value ? o("changeImage", n.value) : o("close");
      }
    });
    return (O, i) => (c(), g(u(d), {
      title: "Edit Image",
      "is-close-icon": "",
      "cancel-button-props": l,
      "confirm-button-props": s.value
    }, {
      default: v(() => [
        f(u(b), {
          "input-options": t.inputOptions,
          "input-option-values": t.inputOptionValues,
          img: t.img,
          "max-size": t.maxSize,
          onChangeImage: i[0] || (i[0] = (a) => n.value = a),
          "onUpdate:inputOptions": i[1] || (i[1] = (a) => p.value = a)
        }, null, 8, ["input-options", "input-option-values", "img", "max-size"])
      ]),
      _: 1
    }, 8, ["confirm-button-props"]));
  }
};
export {
  N as default
};
