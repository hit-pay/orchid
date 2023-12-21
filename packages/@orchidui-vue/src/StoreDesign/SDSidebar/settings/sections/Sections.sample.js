const PRODUCT_FORM = [
    {
      name: "title",
      type: "Input",
    },
    {
      type: "SectionItem",
      props: {
        title: "Select Product From",
      },
    },
    {
      name: "variant",
      type: "SelectOptions",
      props: {
        options: [
          {
            preview: "/images/request-form.svg",
            value: "carousel",
            label: "Carousel",
          },
          {
            preview: "/images/request-form.svg",
            value: "grid",
            label: "Grid",
          },
        ],
      },
    },
    {
      type: "SectionItem",
      props: {
        title: "Select Product From",
      },
    },
    {
      name: "product_from",
      type: "Select",
      props: {
        placeholder: "Select Product from",
        options: [
          {
            value: "all",
            label: "All Products",
          },
          {
            value: "feature",
            label: "Feature Product",
          },
          {
            value: "category",
            label: "Product Category",
          },
          {
            value: "pick_products",
            label: "Pick Products",
          },
        ],
      },
    },
  ];
  
  export { PRODUCT_FORM };
  