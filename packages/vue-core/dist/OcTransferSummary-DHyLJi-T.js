import { computed as o, openBlock as c, createElementBlock as m, createVNode as a, unref as n, createCommentVNode as u, createElementVNode as d } from "vue";
import "dayjs";
import "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
import { _ as s } from "./OcListDetail-SWiuyAPu.js";
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
import "@popperjs/core";
const y = { class: "bg-oc-bg-dark flex flex-col gap-3 p-4 rounded" }, b = { key: 0 }, E = {
  __name: "OcTransferSummary",
  props: {
    transfer: {
      type: Object,
      required: !0
    },
    hasFxData: Boolean
  },
  setup(t) {
    const r = t, p = o(() => {
      var e;
      return (e = r.transfer.source_currency) == null ? void 0 : e.toUpperCase();
    }), i = o(() => {
      var e;
      return (e = r.transfer.payment_currency) == null ? void 0 : e.toUpperCase();
    }), l = o(() => {
      var e;
      return (e = r.transfer.fee_currency) == null ? void 0 : e.toUpperCase();
    }), f = o(() => {
      var e;
      return (e = r.transfer.transfer_method) == null ? void 0 : e.toUpperCase();
    });
    return (e, _) => (c(), m("div", y, [
      t.hasFxData ? (c(), m("div", b, [
        a(n(s), {
          class: "justify-between font-medium [&>span]:text-base",
          label: "FX Rate",
          content: `${p.value} 1 = ${i.value} ${t.transfer.exchange_rate}`,
          variant: "big",
          "show-copy-tooltip": !1
        }, null, 8, ["content"])
      ])) : u("", !0),
      a(n(s), {
        class: "justify-between font-medium [&>span]:text-base",
        label: "Fee",
        content: `${l.value} ${t.transfer.fee}`,
        variant: "big",
        "show-copy-tooltip": !1
      }, null, 8, ["content"]),
      d("div", null, [
        a(n(s), {
          class: "justify-between font-medium [&>span]:text-base",
          label: "Transfer type",
          content: `${f.value}`,
          variant: "big",
          "show-copy-tooltip": !1
        }, null, 8, ["content"])
      ])
    ]));
  }
};
export {
  E as _
};
