const common = [
  {
    name: "s-btn",
    theme: "default",
    props: {
      label: String,
    },
  },
  {
    name: "s-logo",
    theme: "default",
  },
  {
    name: "s-navigation-menus",
    theme: "default",
  },
  {
    name: "s-search-icon",
    theme: "default",
  },
  {
    name: "s-search-popup",
    theme: "default",
  },
  {
    name: "s-cart-icon",
    theme: "default",
  },
  {
    name: "s-category-filter",
    theme: "default",
  },
  {
    name: "s-product-card",
    props: {
      product: Object,
    },
  },
  {
    name: "s-search-filter",
    path: "sections",
    theme: "default",
    props:{
      meta: Object
    }
  },
];

const sections = [
  {
    name: "s-top-banner",
    path: "sections",
    theme: "default",
    state: {
      show: true
    }
  },
  {
    name: "s-headers",
    path: "sections",
    theme: "default",
    state: {
      showMenu: [],
      showMobileMenu: false
    }
  },
  {
    name: "s-banner",
    path: "sections",
    state: {
      currentSlide: 1
    }
  },
  {
    name: "s-products",
    path: "sections",
    state: {
      meta: {
        page: '',
        category_id: ''
      },
      products: []
    }
  },
  {
    name: "s-footer",
    path: "sections",
  },
  // search page sections
  {
    name: "s-search-products",
    path: "sections",
    theme: "default",
    state: {
      meta: {
        page: '',
        per_page: '',
        category_ids: '',
        sort_by: '',
        price_from: '',
        price_to: ''
      },
      products: []
    }
  },
];

const components = [...common, ...sections];
export { components as c };
