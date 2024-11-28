import { ref as i, onMounted as s, onBeforeUnmount as u, watch as v, markRaw as l } from "vue";
import * as d from "echarts";
const p = (t, r) => {
  const e = i(), a = () => {
    t.value && (e.value = l(d.init(t.value)), e.value.setOption(r.value));
  }, n = () => {
    e.value && e.value.dispose(), a();
  };
  return s(() => {
    a(), window.addEventListener("resize", n);
  }), u(() => {
    e.value && e.value.dispose(), window.removeEventListener("resize", n);
  }), v(
    () => r.value,
    (o) => {
      e.value.setOption(o);
    },
    { deep: !0 }
  ), {
    chart: e
  };
};
export {
  p as useChart
};
