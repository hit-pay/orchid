import { ref as i, onMounted as u, onBeforeUnmount as v, watch as s, markRaw as l } from "vue";
import * as p from "echarts";
const m = (o, a) => {
  const e = i(), n = () => {
    o.value && (e.value = l(p.init(o.value)), e.value.setOption(a.value));
  }, t = () => {
    e.value && e.value.dispose(), n();
  };
  return u(() => {
    n(), window.addEventListener("resize", t);
  }), v(() => {
    e.value && e.value.dispose(), window.removeEventListener("resize", t);
  }), s(
    () => a.value,
    (r) => {
      e.value.setOption(r);
    },
    { deep: !0 }
  ), {
    chart: e
  };
};
export {
  m as p
};
