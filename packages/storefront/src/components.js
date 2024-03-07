// TODO : MOVE to JSON props data in production

const common = [
  {
    name: "s-btn",
    // theme: "default", add this props if using default theme components
    props: {
      label: "",
    },
  },
  {
    name: "s-logo",
    props: {
      url: '',
      name: '',
      showName: true
    },
  },
  // ICONS
  {
    name: "s-dropdown-icon",
    props: {
      open: false,
    },
  },
  {
    name: "s-menu-icon",
    props: {
      open: false,
    },
  },
  {
    name: "s-navigation-menus",
  },
  {
    name: "s-search-icon",
  },
  {
    name: "s-search-popup",
  },
  {
    name: "s-cart-icon",
  },
  {
    name: "s-category-filter",
  },
  {
    name: "s-product-card",
    props: {
      product: {},
    },
  },
  {
    name: "s-search-filter",
    path: "sections",
    props:{
      meta: {}
    }
  },
];

const sections = [
  {
    name: "s-top-banner",
    path: "sections",
    section: "TopBanner",
    state: {
      show: true
    }
  },
  {
    name: "s-headers",
    path: "sections",
    section: "Header",
    state: {
      showMenu: [],
      showMobileMenu: false
    }
  },
  {
    name: "s-banner",
    path: "sections",
    section: "Banner",
    state: {
      currentSlide: 1
    }
  },
  {
    name: "s-products",
    path: "sections",
    section: "Products",
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
    section: "FooterContent",
    path: "sections",
  },
  // coming soon feature customize search page sections
  {
    name: "s-search-products",
    path: "sections",
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
