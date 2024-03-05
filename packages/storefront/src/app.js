import { defineAsyncComponent, createApp, ref, computed } from "vue";
import { useStorefront } from "./storefront.js";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { MotionPlugin } from "@vueuse/motion";

import VueApp from "@/App.vue";
import storefront from "./storefront-default-settings.json";
import products from "./products-home.json";

import "vue3-carousel/dist/carousel.css";

const mountEl = document.querySelector("#app");
const props = { ...mountEl.dataset };
const components = computed(() => JSON.parse(props.components));
const pathDefault = ref("/default/");
const path = ref(props.theme);

const {
  business,
  sections,
  general,
  state,
  action,
  initialState,
  setSectionState,
} = useStorefront();

initialState(storefront);

setTimeout(() => {
  // TODO :  create trigger from template
  setSectionState("product_list_1", "product", products);
}, 1000);

const app = createApp(VueApp);
components.value.forEach((comp, index) => {
  const newComponent = defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      let pathName = path.value;
      if (comp.theme === "default") {
        pathName = pathDefault.value;
      }
      fetch(pathName + comp.name + ".html")
        .then((r) => r.text())
        .then((template) => {
          const SComponent = {
            props: comp.props,
            setup() {
              return {
                business: business.value,
                general: general.value,
                sections: sections.value,
                state: state.value,
                action: action.value,
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
