import { defineAsyncComponent, createApp, computed } from "vue";
import { useStorefront } from "./storefront.js";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { MotionPlugin } from "@vueuse/motion";

import storefront from "./storefront-default-settings.json";
import products from "./products-home.json";

import "vue3-carousel/dist/carousel.css";

const mountEl = document.querySelector("#app");
const props = { ...mountEl.dataset };
const components = computed(() => JSON.parse(props.components));

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

const createTemplate = (comp) => {
  let template = ``
  comp.code.forEach((el) => {
    if(el.tp == 'el'){
      template += `<${el.val} class="${el.id}" />`
    }else if(el.tp == 'img'){
      template += `<img class="${el.id}" src="${el.val}" />`
    }else{
      template += `<div class="${el.id}">${el.val}</div>`
    }
  })
  return `<div class="${comp.id}">${template}</div>`
}


const createAppLayout = () => {
  // group : header, section[router-view], footer
  let layout = ``
  components.value.filter(c => c.g === 'header').forEach((comp) => {
    layout += `<${comp.id} />`
  })
  layout += `<router-view />`

  // if homepage
  // components.value.filter(c => c.g === 'sections').forEach((comp) => {
  //   layout += `<${comp.id} />`
  // })

  // components.value.filter(c => c.g === 'product-page').forEach((comp) => {
  //   layout += `<${comp.id} />`
  // })

  // components.value.filter(c => c.g === 'bio-page').forEach((comp) => {
  //   layout += `<${comp.id} />`
  // })

  // components.value.filter(c => c.g === 'cart-page').forEach((comp) => {
  //   layout += `<${comp.id} />`
  // })
  
  components.value.filter(c => c.g === 'footer').forEach((comp) => {
    layout += `<${comp.id} />`
  })
  return layout
}

const app = createApp({
  template: createAppLayout()
});
components.value.forEach((comp, index) => {
  const newComponent = defineAsyncComponent(() => {
    return new Promise((resolve) => {
      const SComponent = {
        props: {
          s: {} // custom state
        },
        setup() {
          return {
            business: business.value,
            general: general.value,
            sections: sections.value,
            state: state.value,
            action: action.value,
          };
        },
        template: createTemplate(comp),
      };
      resolve(SComponent);
    });
  });
  app.component(comp.id, newComponent);

  if (index + 1 === components.value.length) {
    app.component("SCarousel", Carousel);
    app.component("SSlide", Slide);
    app.component("SSlidePagination", Pagination);
    app.component("SSlideNavigation", Navigation);

    app.use(MotionPlugin);

    app.mount("#app");
  }
});
