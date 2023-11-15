import { computed } from "vue";

export const useWindowWidth = () => {
  const isMobile = computed(() => window.innerWidth < 768);

  return {
    isMobile,
  };
};
