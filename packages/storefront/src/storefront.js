import { ref, computed } from "vue";
export function useTheme() {
  const business = ref({});
  const store_design = ref({
    general: {},
    sections: [],
  });

  const state = ref({
    page: "home",
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
  });

  const general = computed(() => store_design.value.general);
  const styles = computed(() =>
    store_design.value.sections.find((s) => s.section === "Styles"),
  );
  const topBanner = computed(() =>
    store_design.value.sections.find((s) => s.section === "TopBanner"),
  );
  const header = computed(() =>
    store_design.value.sections.find((s) => s.section === "Header"),
  );
  const banner = computed(() =>
    store_design.value.sections.find((s) => s.section === "Banner"),
  );
  const footer = computed(() =>
    store_design.value.sections.find((s) => s.section === "FooterContent"),
  );
  const sections = computed(() =>
    store_design.value.sections.filter((s) => s.group === "sections"),
  );

  const init = (storefront, componentSettings, theme, page) => {
    let defaultState = {};
    storefront.store_design.sections.forEach((s) => {
      if (s.group !== "styles" && s.group !== "link_in_bio") {
        const comp = componentSettings.find(c => c.section === s.section)
        if(comp && comp.state){
          defaultState[s.key] = comp.state;
        }else{
          defaultState[s.key] = {};
        }
       
      }
    });
    state.value.sections = defaultState;
    business.value = storefront.business;
    store_design.value = storefront.store_design;

    state.value.theme = theme;
    state.value.page = page;

    console.log(state.value)
  };

  const setState = (name, key, value) => {
    // by default for sections
    state.value.sections[name][key] = value;

    console.log('setState :', name, key, value)
  };
  
  const setProductState = (product) => {
    state.value.product = product;
  };

  const action = ref({
    addToCart: () => {
      console.log("add to cart");
    },
    viewPage: (path) => {
      console.log("View page path :", path);
    },
    getProducts: () => {
      // setSectionState()
    },
    searchProducts: () => {
      // api set state.search.products
    },
  });

  const cartProducts = computed(() => {
    return {
      total: 0,
      last_added: 0,
    };
  });

  return {
    init,
    state,
    action,
    business,
    general,
    styles,
    topBanner,
    header,
    banner,
    footer,
    sections,
    setState,
    setProductState,
    cartProducts,
  };
}
