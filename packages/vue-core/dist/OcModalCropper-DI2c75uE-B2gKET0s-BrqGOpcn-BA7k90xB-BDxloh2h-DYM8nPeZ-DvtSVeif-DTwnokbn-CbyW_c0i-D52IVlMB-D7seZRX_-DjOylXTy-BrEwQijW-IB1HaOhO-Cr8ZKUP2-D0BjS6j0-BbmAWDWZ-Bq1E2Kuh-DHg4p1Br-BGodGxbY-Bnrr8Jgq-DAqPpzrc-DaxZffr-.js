import { ref as i, openBlock as c, createBlock as g, unref as u, withCtx as v, createVNode as f } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import { Y as d } from "./OcModal-4ROIR1vr-JJFn5rii-B24pX5Kj-CDdhzxja-DS0beOkh-BKTJgCPS-Bk6-3EW7-LWPhHpHK-BZHX6Fhu-BYLdNq2L-BYWcq2X--Bo0AYCUw-gg5zQpa0-Cc45RBaG-gKDMmcEw-D6Mj4vm4-BqTSXC2D-B6DaY-fi-DC7fMaRH-DAWWN046-jj9WHOlg-BBdYt12m-ezYsygxS.js";
import "@popperjs/core";
import b from "./OcCropper-CosaNdTf-DC4QVqTg-BfA-IuYG-BXB-J76i-Cdi44VXO-B32QEYmH-B3qZBV9u-CHMvllHt-DN5F0eF4-DnCFLg3T-Df-uLEzX-Cw0Ux5pJ-C6CEDQEy-Cmda1W7P-rwEYL1v8-D2TWGxeR-CpRIty4j-CPLD7tG6-mm3_-EoU-CnBFoxfz-CdKuPyCO-B0p6lDvl-uHMUfpsH.js";
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
  setup(t, { emit: r }) {
    const m = t, o = r;
    i(), i();
    const l = {
      onClick: () => o("close")
    }, p = i(), n = i(m.link), s = i({
      label: "Save",
      onClick: () => {
        n.value && o("update:input-options", n.value), p.value ? o("changeImage", p.value) : o("close");
      }
    });
    return (O, e) => (c(), g(u(d), {
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
