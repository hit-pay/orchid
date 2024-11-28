import { ref as t, openBlock as c, createBlock as g, unref as u, withCtx as v, createVNode as f } from "vue";
import "dayjs";
import "./Cropper-CtPTheuH.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import { D as d } from "./OcModal-4ROIR1vr-JJFn5rii-B24pX5Kj-CDdhzxja-DS0beOkh-BKTJgCPS-Bk6-3EW7-LWPhHpHK-BZHX6Fhu-BYLdNq2L-BYWcq2X--Bo0AYCUw-gg5zQpa0-Cc45RBaG-gKDMmcEw-D6Mj4vm4-BqTSXC2D-B6DaY-fi-DC7fMaRH-DAWWN046-jj9WHOlg-BBdYt12m-ezYsygxS-DVggj38O.js";
import "@popperjs/core";
import O from "./OcCropper-CosaNdTf-DC4QVqTg-BfA-IuYG-BXB-J76i-Cdi44VXO-B32QEYmH-B3qZBV9u-CHMvllHt-DN5F0eF4-DnCFLg3T-Df-uLEzX-Cw0Ux5pJ-C6CEDQEy-Cmda1W7P-rwEYL1v8-D2TWGxeR-CpRIty4j-CPLD7tG6-mm3_-EoU-CnBFoxfz-CdKuPyCO-B0p6lDvl-uHMUfpsH-D6Uco5tg.js";
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
  setup(o, { emit: r }) {
    const m = o, i = r;
    t(), t();
    const l = {
      onClick: () => i("close")
    }, n = t(), p = t(m.link), s = t({
      label: "Save",
      onClick: () => {
        p.value && i("update:input-options", p.value), n.value ? i("changeImage", n.value) : i("close");
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
          onChangeImage: e[0] || (e[0] = (a) => n.value = a),
          "onUpdate:inputOptions": e[1] || (e[1] = (a) => p.value = a)
        }, null, 8, ["input-options", "input-option-values", "img", "max-size"])
      ]),
      _: 1
    }, 8, ["confirm-button-props"]));
  }
};
export {
  N as default
};
