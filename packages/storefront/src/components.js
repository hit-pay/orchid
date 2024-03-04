const common = [
  {
    name: "s-btn",
    props: {
      label: String,
    },
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
];

const components = [...common, ...sections];
export { components };
