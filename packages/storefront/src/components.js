const components = [
    {
      "name": "s-btn-primary",
      "props": {
        label: String,
      },
    },
    {
      "name": "s-product-card",
      "props": {
        state: Object,
        product: {
          type: Object,
          default: () => ({
            id: 1,
            name: "item 1",
            price: 100,
            image: "https://via.placeholder.com/150",
            has_variations: true,
            variations_count: 4,
          })
        }
      }
    }
  ]

  export { components }