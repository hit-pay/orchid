import { ref, onBeforeUnmount, onMounted } from "vue";

export const useWindowWidth = () => {
  const isMobile = ref(window.innerWidth < 768);
  const onResize = () => (isMobile.value = window.innerWidth < 768);
  onMounted(() => window.addEventListener("resize", onResize));
  onBeforeUnmount(() => window.removeEventListener("resize", onResize));
  return {
    isMobile,
  };
};
