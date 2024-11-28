import { computed as a, openBlock as c, createElementBlock as l, createVNode as n, unref as o, createCommentVNode as i, createElementVNode as d } from "vue";
import "dayjs";
import "./Cropper-Qy54pgCV.js";
import "libphonenumber-js";
import "v-calendar";
import "vue-draggable-next";
import "@popperjs/core";
import { D as s } from "./OcListDetail-DBbUVTMc-DlZnvkGy.js";
const y = { class: "bg-oc-bg-dark flex flex-col gap-3 p-4 rounded" }, b = { key: 0 }, j = {
  __name: "OcTransferSummary",
  props: {
    transfer: {
      type: Object,
      required: !0
    },
    hasFxData: Boolean
  },
  setup(t) {
    const r = t, f = a(() => {
      var e;
      return (e = r.transfer.source_currency) == null ? void 0 : e.toUpperCase();
    }), m = a(() => {
      var e;
      return (e = r.transfer.payment_currency) == null ? void 0 : e.toUpperCase();
    }), p = a(() => {
      var e;
      return (e = r.transfer.fee_currency) == null ? void 0 : e.toUpperCase();
    }), u = a(() => {
      var e;
      return (e = r.transfer.transfer_method) == null ? void 0 : e.toUpperCase();
    });
    return (e, h) => (c(), l("div", y, [
      t.hasFxData ? (c(), l("div", b, [
        n(o(s), {
          class: "justify-between font-medium [&>span]:text-base",
          label: "FX Rate",
          content: `${f.value} 1 = ${m.value} ${t.transfer.exchange_rate}`,
          variant: "big",
          "show-copy-tooltip": !1
        }, null, 8, ["content"])
      ])) : i("", !0),
      n(o(s), {
        class: "justify-between font-medium [&>span]:text-base",
        label: "Fee",
        content: `${p.value} ${t.transfer.fee}`,
        variant: "big",
        "show-copy-tooltip": !1
      }, null, 8, ["content"]),
      d("div", null, [
        n(o(s), {
          class: "justify-between font-medium [&>span]:text-base",
          label: "Transfer type",
          content: `${u.value}`,
          variant: "big",
          "show-copy-tooltip": !1
        }, null, 8, ["content"])
      ])
    ]));
  }
};
export {
  j as _
};
