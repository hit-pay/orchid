import { ref, computed } from "vue";
export function useStorefront() {
  const business = ref({});
  const store_design = ref({});

  const state = ref({
    sections: {},
    product: {},
    search: {
      meta: {
        keyword: "",
        categories: [],
        page: 1,
        per_page: 10,
      },
      products: {},
    },
    cart: {},
  });

  const general = computed(() => store_design.value.general);

  const initialState = (storefront) => {
    let defaultState = {};
    storefront.store_design.sections.forEach((s) => {
      if (s.group === "sections") {
        defaultState[s.key] = {};
      }
    });
    state.value.sections = defaultState;
    business.value = storefront.business;
    store_design.value = storefront.store_design;
  };

  const setState = (name, key, value) => {
    state.value.sections[name][key] = value;
  };

  const action = ref({
    addToCart: () => {
      console.log("add to cart");
      // view cart popup
    },
    viewPage: (path) => {
      console.log("View page path :", path);
      // move to another page
    }
  });

  return {
    initialState,
    state,
    action,
    business,
    general,
    setState
  };
}
