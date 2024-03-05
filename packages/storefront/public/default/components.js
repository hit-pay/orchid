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
    name: "s-banner-promotion",
    theme: "default",
    props: {
      text: String,
      isClosable: Boolean,
    },
  },
  {
    name: "s-headers",
    theme: "default",
  },
  {
    name: "s-products",
    theme: "default",
  },
];

const components = [...common, ...sections];
export { components as c };
