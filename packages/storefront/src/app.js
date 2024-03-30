import { createApp, computed } from "vue";
import { useStorefront } from "./storefront.js";
import { MotionPlugin } from "@vueuse/motion";
import storefront from "./settings.json";

const mountEl = document.querySelector("#app");
const props = { ...mountEl.dataset };
const components = computed(() => JSON.parse(props.components));

const {
  business,
  general,
  state,
  action,
  initialState,
} = useStorefront();

initialState(storefront);

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
  return `${template}`
}
const createAppLayout = () => {
  // group : header, section[router-view], footer
  let layout = ``
  components.value.filter(c => c.g === 'header').forEach((comp) => {
    layout += `<${comp.id} />`
  })

  // layout += `<router-view />`

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
  const newComponent = {
    props: {
      class: {},
      s: {} 
    },
    setup() {
      return {
        business: business.value,
        general: general.value,
        state: state.value,
        action: action.value
      };
    },
    template: createTemplate(comp),
  };
  app.component(comp.id, newComponent);
  if (index + 1 === components.value.length) {
    app.use(MotionPlugin);
    app.mount("#app");
  }
});
