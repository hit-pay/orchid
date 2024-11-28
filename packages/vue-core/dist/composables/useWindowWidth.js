import { ref as o, onMounted as i, onBeforeUnmount as t } from "vue";
const d = () => {
  const e = o(window.innerWidth < 768), n = () => e.value = window.innerWidth < 768;
  return i(() => window.addEventListener("resize", n)), t(() => window.removeEventListener("resize", n)), {
    isMobile: e
  };
};
export {
  d as useWindowWidth
};
