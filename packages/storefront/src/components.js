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
];

const sections = [
  {
    name: "s-top-banner",
    path: "sections",
    theme: "default",
  },
  {
    name: "s-headers",
    path: "sections",
    theme: "default",
  },
  {
    name: "s-banner",
    path: "sections",
  },
  {
    name: "s-products",
    path: "sections",
    action: "getProducts"
  },
  {
    name: "s-footer",
    path: "sections",
  },
  // search page sections
  {
    name: "s-search-filter",
    path: "sections",
  },
  {
    name: "s-search-products",
    path: "sections",
  },
];

const components = [...common, ...sections];
export { components as c };
