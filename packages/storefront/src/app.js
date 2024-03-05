import { defineAsyncComponent, createApp, ref } from "vue";
import { components } from "./components.js";
import { useStorefront } from "./storefront.js"

import VueApp from "@/App.vue";
import storefront from "./storefront-default-settings.json"
import products from "./products-home.json"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { MotionPlugin } from '@vueuse/motion'

const convertToVueTemplate = (string) => {
  const result = string
  // .replace('<script type="module" src="/@vite/client"></script>','');
  return result;
};

const path = ref("/default/")

const { business, sections, general, state, action, initialState, setSectionState } = useStorefront()

initialState(storefront)

setTimeout(() => {
  setSectionState("product_list_1", "product", products)
}, 1000)

const app = createApp(VueApp);
components.forEach((comp, index) => {
  const newComponent = defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      fetch(path.value + comp.name + ".html")
        .then((r) => r.text())
        .then((template) => {
          console.log(general.value)
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
            template: convertToVueTemplate(template),
          };
          resolve(SComponent);
        })
        .catch(() => {
          reject("component not found");
        });
    });
  });
  app.component(comp.name, newComponent);
  
  if(index+1 === components.length){
    app.component("SCarousel", Carousel)
    app.component("SSlide", Slide)
    app.component("SSlidePagination", Pagination)
    app.component("SSlideNavigation", Navigation)

    app.use(MotionPlugin)
    
    app.mount("#app");
  }
});
