import { computed as S, ref as m, watch as v, onMounted as U, openBlock as _, createElementBlock as y, normalizeClass as F, normalizeStyle as K, Fragment as V, renderList as x, createBlock as A, resolveDynamicComponent as D, mergeProps as N, renderSlot as P, createCommentVNode as G } from "vue";
import "dayjs";
import { a as q } from "./OcComplexCalendar.vue_vue_type_style_index_0_lang-2_su-FOw.js";
/* empty css                                                                    */
import "./Charts/LineChart/OcLineChart.js";
import "./Charts/PieChart/OcPieChart.js";
import "./Charts/BarChart/OcBarChart.js";
import "./Charts/BarRaceChart/OcBarRaceChart.js";
import { _ as z } from "./OcCardInput-DLuuUI-P.js";
import { _ as L } from "./OcCheckboxesGroup-BmeqIgq2.js";
import { _ as R } from "./OcInput-BhmeVr1A.js";
import { _ as H } from "./OcPhoneInput-Bs-RJUdy.js";
import { _ as J } from "./OcRadioGroup-B7tHlPSE.js";
import { _ as Q } from "./OcRangeInput-DA4p4YsI.js";
import { _ as W } from "./OcOption-B8-9zkBz.js";
import { T as X } from "./OcToggle-C0wTjM_Y.js";
import { _ as Y } from "./OcLinkInput-CY6CaF9Z.js";
import { _ as Z } from "./OcTextArea-DKOIQqxN.js";
import { _ as ee } from "./DatePicker-BNoxbYyw.js";
import { _ as ae } from "./OcTimePicker-BLoNIoHI.js";
import { S as te } from "./OcSlider-Bsi-ckbP.js";
import { _ as se } from "./OcSectionItem-BzO4Btf-.js";
import { _ as ne } from "./OcSelectOptions-eUVZoa1E.js";
import "./Cropper.js";
import "vue-draggable-next";
import { _ as ie } from "./OcNumberInput.vue_vue_type_script_setup_true_lang-B8slDtuV.js";
import "@popperjs/core";
const Te = {
  __name: "OcFormBuilder",
  props: {
    id: {
      type: String,
      required: !0
    },
    jsonForm: {
      type: Array
    },
    /**
     * Grid needs to be defined in the following format:
     * `{`
     *   `[Responsive size (xs, sm, md, lg, xl, xxl)]: {`
     *     `area: [Grid area definition (names of areas in order)],`
     *     `rows: [Count and size of rows i.e: 'auto' | '100%' | ...],`
     *     `columns: [Count and size of columns i.e: '33% 33% 33%'],`
     *   `}`
     * `}`
     */
    grid: {
      type: Object,
      default: null
    },
    class: String,
    errors: {
      type: Object
    },
    values: {
      type: Object,
      required: !0
    },
    previewMode: String
    // only for store design
  },
  emits: ["onUpdate"],
  setup(p, { emit: E }) {
    const s = p, M = E, h = (e, t) => {
      M("onUpdate", e, t);
    }, f = {
      CardInput: z,
      CheckboxesGroup: L,
      Input: R,
      NumberInput: ie,
      LinkInput: Y,
      Select: W,
      TextArea: Z,
      Toggle: X,
      RadioGroup: J,
      TimePicker: ae,
      DatePicker: ee,
      Checkbox: q,
      Slider: te,
      RangeInput: Q,
      PhoneInput: H,
      SectionItem: se,
      SelectOptions: ne
    }, g = (e) => f[e] ? f[e] : null, O = S(() => {
      const e = (a) => a.split(`
`).map((i) => i.trim()).filter(Boolean).map((i) => `"${i}"`).join(" "), t = {};
      return Object.entries(s.grid).forEach(([a, i]) => {
        Object.entries(i).forEach(([r, l]) => {
          t[`--grid-${a}-${r}`] = r === "area" ? e(l) : l;
        });
      }), t;
    }), w = (e) => typeof e == "object" ? e[0].key : e, T = (e) => `grid-area: ${w(e)}`, b = S(() => s.class), n = m({}), c = m({}), u = m({}), o = (e) => typeof e == "object" ? e[0].key : e, d = (e) => {
      s.jsonForm.forEach((t) => {
        var a;
        if (typeof t.name == "object") {
          let i = null;
          t.name.forEach((r) => {
            e[r.key] && (i ? i.push(e[r.key]) : i = [e[r.key]]);
          }), n.value[o(t.name)] = i, $(t);
        } else
          (a = t.props) != null && a.parentKey ? (n.value[t.props.parentKey] = e[t.props.parentKey] ?? {}, n.value[t.props.parentKey][t.name] = e[t.props.parentKey][t.name] ?? "") : n.value[t.name] = e[t.name] ?? "", $(t);
      });
    }, j = () => {
      s.jsonForm.forEach((e) => {
        if (typeof e.name == "object") {
          let t = [];
          e.name.forEach((a) => {
            s.errors[a.key] && t.push(s.errors[a.key]);
          }), c.value[o(e.name)] = t.join(",");
        } else
          c.value[e.name] = s.errors[e.name] ?? "";
      });
    }, $ = (e) => {
      if (e.show_if || e.show_if_preview) {
        let t = e.class ? e.class : "";
        e.show_if ? e.show_if_value !== void 0 ? e.show_if_value !== n.value[e.show_if] && (t = t + " hidden") : e.show_if_not !== void 0 ? e.show_if_not === n.value[e.show_if] && (t = t + " hidden") : e.show_if_min !== void 0 && (isNaN(parseInt(n.value[e.show_if])) ? 1 : parseInt(n.value[e.show_if])) < parseInt(e.show_if_min) && (t = t + " hidden") : e.show_if_preview && (e.show_if_preview_only !== void 0 ? e.show_if_preview_only !== s.previewMode && (t = t + " hidden") : e.show_if_preview_not !== void 0 && e.show_if_preview_not === s.previewMode && (t = t + " hidden")), typeof e.name == "object" ? u.value[o(e.name)] = t : u.value[e.name] = t;
      } else
        u.value[e.name] = e.class ? e.class : "";
    };
    return v(
      () => s.values,
      (e) => {
        d(e);
      },
      {
        deep: !0
      }
    ), v(
      () => s.errors,
      (e) => {
        j();
      },
      {
        deep: !0
      }
    ), v(
      () => s.previewMode,
      () => {
        d(s.values);
      }
    ), U(() => {
      d(s.values), j(s.errors);
    }), (e, t) => Object.values(n.value).length > 0 ? (_(), y("div", {
      key: 0,
      class: F(p.grid ? `responsive-smart-form-grid ${b.value}` : b.value),
      style: K(p.grid ? O.value : "")
    }, [
      (_(!0), y(V, null, x(p.jsonForm, (a) => {
        var i, r, l, k, C, I;
        return _(), y("div", {
          key: w(a.name),
          style: K(p.grid ? T(a.name) : ""),
          class: F([
            a.type !== "Children" ? u.value[typeof a.name == "object" ? o(a.name) : a.name] : "",
            a.class
          ])
        }, [
          g(a.type) ? (_(), A(D(g(a.type)), N({
            key: 0,
            ref_for: !0
          }, a.props, {
            "model-value": (i = a.props) != null && i.parentKey ? (l = (r = n.value) == null ? void 0 : r[a.props.parentKey]) == null ? void 0 : l[a.name] : n.value[typeof a.name == "object" ? o(a.name) : a.name],
            "error-message": c.value[typeof a.name == "object" ? o(a.name) : a.name],
            "onUpdate:modelValue": (B) => h(a, B)
          }), null, 16, ["model-value", "error-message", "onUpdate:modelValue"])) : P(e.$slots, a.type, {
            key: 1,
            formId: p.id,
            form: a,
            value: (k = a.props) != null && k.parentKey ? (I = (C = n.value) == null ? void 0 : C[a.props.parentKey]) == null ? void 0 : I[a.name] : n.value[typeof a.name == "object" ? o(a.name) : a.name],
            error: c.value[typeof a.name == "object" ? o(a.name) : a.name],
            onUpdate: h
          })
        ], 6);
      }), 128))
    ], 6)) : G("", !0);
  }
};
export {
  Te as _
};
