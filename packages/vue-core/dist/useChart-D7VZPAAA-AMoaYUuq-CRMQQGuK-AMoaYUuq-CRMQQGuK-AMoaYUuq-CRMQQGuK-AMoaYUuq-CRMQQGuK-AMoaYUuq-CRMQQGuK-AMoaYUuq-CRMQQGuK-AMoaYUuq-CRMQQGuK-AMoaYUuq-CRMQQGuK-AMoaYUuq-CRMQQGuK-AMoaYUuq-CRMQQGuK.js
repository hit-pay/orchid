import { ref as i, onMounted as u, onBeforeUnmount as v, watch as s, markRaw as l } from "vue";
import * as p from "echarts";
const m = (o, a) => {
  const e = i(), t = () => {
    o.value && (e.value = l(p.init(o.value)), e.value.setOption(a.value));
  }, n = () => {
    e.value && e.value.dispose(), t();
  };
  return u(() => {
    t(), window.addEventListener("resize", n);
  }), v(() => {
    e.value && e.value.dispose(), window.removeEventListener("resize", n);
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
