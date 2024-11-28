import { computed as K, ref as y, watch as h, onMounted as U, openBlock as d, createElementBlock as _, normalizeClass as O, normalizeStyle as E, Fragment as $, renderList as A, createBlock as D, resolveDynamicComponent as G, mergeProps as N, renderSlot as V, createCommentVNode as R } from "vue";
import { CardInput as L, CheckboxesGroup as q, Input as z, NumberInput as f, LinkInput as H, Select as J, TextArea as Q, Toggle as W, RadioGroup as X, TimePicker as Y, DatePicker as Z, Checkbox as ee, Slider as te, RangeInput as ne, PhoneInput as ae, SectionItem as se, SelectOptions as ie } from "@orchidui/vue-core";
const pe = {
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
  setup(p, { emit: M }) {
    const a = p, T = M, g = (e, n) => {
      T("onUpdate", e, n);
    }, w = {
      CardInput: L,
      CheckboxesGroup: q,
      Input: z,
      NumberInput: f,
      LinkInput: H,
      Select: J,
      TextArea: Q,
      Toggle: W,
      RadioGroup: X,
      TimePicker: Y,
      DatePicker: Z,
      Checkbox: ee,
      Slider: te,
      RangeInput: ne,
      PhoneInput: ae,
      SectionItem: se,
      SelectOptions: ie
    }, b = (e) => w[e] ? w[e] : null, x = K(() => {
      const e = (t) => t.split(`
`).map((i) => i.trim()).filter(Boolean).map((i) => `"${i}"`).join(" "), n = {};
      return Object.entries(a.grid).forEach(([t, i]) => {
        Object.entries(i).forEach(([l, o]) => {
          n[`--grid-${t}-${l}`] = l === "area" ? e(o) : o;
        });
      }), n;
    }), k = (e) => typeof e == "object" ? e[0].key : e, P = (e) => `grid-area: ${k(e)}`, j = K(() => a.class), s = y({}), u = y({}), c = y({}), r = (e) => typeof e == "object" ? e[0].key : e, v = (e) => {
      a.jsonForm.forEach((n) => {
        var t;
        if (typeof n.name == "object") {
          let i = null;
          n.name.forEach((l) => {
            e[l.key] && (i ? i.push(e[l.key]) : i = [e[l.key]]);
          }), s.value[r(n.name)] = i, C(n);
        } else
          (t = n.props) != null && t.parentKey ? (s.value[n.props.parentKey] = e[n.props.parentKey] ?? {}, s.value[n.props.parentKey][n.name] = e[n.props.parentKey][n.name] ?? "") : s.value[n.name] = e[n.name] ?? "", C(n);
      });
    }, I = () => {
      a.jsonForm.forEach((e) => {
        if (typeof e.name == "object") {
          let n = [];
          e.name.forEach((t) => {
            a.errors[t.key] && n.push(a.errors[t.key]);
          }), u.value[r(e.name)] = n.join(",");
        } else
          u.value[e.name] = a.errors[e.name] ?? "";
      });
    }, C = (e) => {
      if (e.show_if || e.show_if_preview) {
        let n = e.class ? e.class : "";
        e.show_if ? e.show_if_value !== void 0 ? e.show_if_value !== s.value[e.show_if] && (n = n + " hidden") : e.show_if_not !== void 0 ? e.show_if_not === s.value[e.show_if] && (n = n + " hidden") : e.show_if_min !== void 0 && (isNaN(parseInt(s.value[e.show_if])) ? 1 : parseInt(s.value[e.show_if])) < parseInt(e.show_if_min) && (n = n + " hidden") : e.show_if_preview && (e.show_if_preview_only !== void 0 ? e.show_if_preview_only !== a.previewMode && (n = n + " hidden") : e.show_if_preview_not !== void 0 && e.show_if_preview_not === a.previewMode && (n = n + " hidden")), typeof e.name == "object" ? c.value[r(e.name)] = n : c.value[e.name] = n;
      } else
        c.value[e.name] = e.class ? e.class : "";
    };
    return h(
      () => a.values,
      (e) => {
        v(e);
      },
      {
        deep: !0
      }
    ), h(
      () => a.errors,
      (e) => {
        I();
      },
      {
        deep: !0
      }
    ), h(
      () => a.previewMode,
      () => {
        v(a.values);
      }
    ), U(() => {
      v(a.values), I(a.errors);
    }), (e, n) => Object.values(s.value).length > 0 ? (d(), _("div", {
      key: 0,
      class: O(p.grid ? `responsive-smart-form-grid ${j.value}` : j.value),
      style: E(p.grid ? x.value : "")
    }, [
      (d(!0), _($, null, A(p.jsonForm, (t) => {
        var i, l, o, S, m, F;
        return d(), _("div", {
          key: k(t.name),
          style: E(p.grid ? P(t.name) : ""),
          class: O([
            t.type !== "Children" ? c.value[typeof t.name == "object" ? r(t.name) : t.name] : "",
            t.class
          ])
        }, [
          b(t.type) ? (d(), D(G(b(t.type)), N({
            key: 0,
            ref_for: !0
          }, t.props, {
            "model-value": (i = t.props) != null && i.parentKey ? (o = (l = s.value) == null ? void 0 : l[t.props.parentKey]) == null ? void 0 : o[t.name] : s.value[typeof t.name == "object" ? r(t.name) : t.name],
            "error-message": u.value[typeof t.name == "object" ? r(t.name) : t.name],
            "onUpdate:modelValue": (B) => g(t, B)
          }), null, 16, ["model-value", "error-message", "onUpdate:modelValue"])) : V(e.$slots, t.type, {
            key: 1,
            formId: p.id,
            form: t,
            value: (S = t.props) != null && S.parentKey ? (F = (m = s.value) == null ? void 0 : m[t.props.parentKey]) == null ? void 0 : F[t.name] : s.value[typeof t.name == "object" ? r(t.name) : t.name],
            error: u.value[typeof t.name == "object" ? r(t.name) : t.name],
            onUpdate: g
          })
        ], 6);
      }), 128))
    ], 6)) : R("", !0);
  }
};
export {
  pe as _
};
