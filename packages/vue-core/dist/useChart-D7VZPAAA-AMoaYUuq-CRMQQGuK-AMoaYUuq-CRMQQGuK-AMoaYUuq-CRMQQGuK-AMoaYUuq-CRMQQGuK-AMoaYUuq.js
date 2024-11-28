import { ref as i, onMounted as u, onBeforeUnmount as v, watch as s, markRaw as l } from "vue";
import * as d from "echarts";
const p = (t, n) => {
  const e = i(), o = () => {
    t.value && (e.value = l(d.init(t.value)), e.value.setOption(n.value));
  }, a = () => {
    e.value && e.value.dispose(), o();
  };
  return u(() => {
    o(), window.addEventListener("resize", a);
  }), v(() => {
    e.value && e.value.dispose(), window.removeEventListener("resize", a);
  }), s(
    () => n.value,
    (r) => {
      e.value.setOption(r);
    },
    { deep: !0 }
  ), {
    chart: e
  };
};
export {
  p as m
};
