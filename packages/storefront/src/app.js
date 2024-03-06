import { defineAsyncComponent, createApp, ref, computed } from "vue";
import { useTheme } from "./storefront.js";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { MotionPlugin } from "@vueuse/motion";

import VueApp from "@/App.vue";

import "vue3-carousel/dist/carousel.css";

const mountEl = document.querySelector("#app");
const props = { ...mountEl.dataset };
const components = computed(() => JSON.parse(props.components));
const pathDefault = ref("/default/");
const path = ref("/"+props.theme+"/");

const {
  state,
  action,
  business,
  general,
  styles,
  topBanner,
  banner,
  footer,
  sections,
  setState,
  setSectionState,
  setProductState,
  cartProducts,
} = useTheme();

const app = createApp(VueApp);

components.value.forEach((comp, index) => {
  const newComponent = defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      let pathName = path.value;
      if (comp.theme === "default") {
        pathName = pathDefault.value;
      }
      if(comp.path){
        pathName = pathName+comp.path+"/"
      }
      fetch(pathName + comp.name + ".html")
        .then((r) => r.text())
        .then((template) => {
          const SComponent = {
            props: comp.props,
            setup() {
              return {
                state,
                action,
                business,
                general,
                styles,
                topBanner,
                banner,
                footer,
                sections,
                setState,
                setSectionState,
                setProductState,
                cartProducts
              };
            },
            template: template,
          };
          resolve(SComponent);
        })
        .catch(() => {
          reject("component not found");
        });
    });
  });
  app.component(comp.name, newComponent);

  if (index + 1 === components.value.length) {
    app.component("SCarousel", Carousel);
    app.component("SSlide", Slide);
    app.component("SSlidePagination", Pagination);
    app.component("SSlideNavigation", Navigation);

    app.use(MotionPlugin);

    app.mount("#app");

  }
});
