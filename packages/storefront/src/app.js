import { createApp } from "vue";
import VueApp from "@/App.vue";
import "@/scss/tailwind.scss";
import { defineAsyncComponent, ref } from "vue";
import { components } from "./components";
import storefront from "./storefront.json"
import products from "./products-home.json"
const convertToVueTemplate = (string) => {
  const result = string.replaceAll("{#", "{{").replaceAll("#}", "}}").replace('<script type="module" src="/@vite/client"></script>','');
  return result;
};
const path = "/components/";
let homeState = {}

storefront.store_design.sections.forEach((s) => {
  if(s.group === 'sections'){
    homeState[s.key] = {
      products: [],
      meta: {}
    }
  }
})

const state = ref({
  business: storefront.business,
  design: storefront.store_design,
  home: homeState,
  product: {},
  search: {
    meta: {
      keyword: '',
      categories: [],
      page: 1,
      per_page: 10
    },
    products: products
  }
});

const action = ref({
  addToCart: () => {
    console.log("add to cart");
  },
  viewPage: (path) => {
    console.log("View page path :", path)
  },
  getProducts: (section, from, category, ids) => {
    console.log(section, from, category, ids)
    // 1. featured
    // 2. all products
    // 3. category
    // 5. pick products ids
    // api set state.home['seactionName'].products
    // api set state.home['seactionName'].meta
  },
  searchProducts: () => {
      // api set state.search.products
  }
});

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
