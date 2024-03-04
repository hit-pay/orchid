const common = [
  {
    name: "s-btn",
    props: {
      label: String,
    },
  },
  {
    name: "s-logo",
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
      product: Object,
    },
  },
];

const sections = [
  {
    name: "s-banner-promotion",
    props: {
      text: String,
      isClosable: Boolean,
    },
  },
  {
    name: "s-headers",
  },
  {
    name: "s-products",
  },
];

const components = [...common, ...sections];
export { components };
