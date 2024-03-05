import { createApp } from "vue";
import VueApp from "@/App.vue";
import "@/scss/tailwind.scss";
import { defineAsyncComponent, ref } from "vue";
import { components } from "./components";
import storefront from "./storefront.json"
import products from "./products-home.json"
import { useStorefront } from "./index";
const convertToVueTemplate = (string) => {
  const result = string.replaceAll("{#", "{{").replaceAll("#}", "}}").replace('<script type="module" src="/@vite/client"></script>','');
  return result;
};
const path = "/components/";


const { state, action, initialState } = useStorefront()

initialState(storefront)

setTimeout(() => {
  action.setSectionState("product_list_1", "product", products)
}, 1000)

const app = createApp(VueApp);
components.forEach((comp, index) => {
  const newComponent = defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      fetch(path + comp.name + ".html")
        .then((r) => r.text())
        .then((template) => {
          const SProductCard = {
            props: comp.props,
            setup() {
              return {
                state: state.value,
                action: action.value,
              };
            },
            template: convertToVueTemplate(template),
          };
          resolve(SProductCard);
        })
        .catch(() => {
          reject("component not found");
        });
    });
  });
  app.component(comp.name, newComponent);
  if(index+1 === components.length){
    app.mount("#app");
  }
});
