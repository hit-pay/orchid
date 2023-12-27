const ASSETS_URL = "/templates/default/images/";

const PRODUCT_FORM = [
  // {
  //   type: "SectionItem",
  //   props: {
  //     title: "Select Variant",
  //   },
  // },
  // {
  //   name: "variant",
  //   type: "SelectOptions",
  //   props: {
  //     options: [
  //       {
  //         preview: "/images/request-form.svg",
  //         value: "carousel",
  //         label: "Carousel",
  //       },
  //       {
  //         preview: "/images/request-form.svg",
  //         value: "grid",
  //         label: "Grid",
  //       },
  //     ],
  //   },
  // },
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
        // {
        //   value: "category",
        //   label: "Product Category",
        // },
        // {
        //   value: "pick_products",
        //   label: "Pick Products",
        // },
      ],
    },
  },
  {
    type: "SectionItem",
    props: {
      title: "Columns",
    },
  },
  {
    name: "product_column",
    type: "SelectOptions",
    props: {
      options: [
        {
          preview: ASSETS_URL + "product-column-4-grid.png",
          label: "4 columns",
          value: "4,3,2",
        },
        {
          preview: ASSETS_URL + "product-column-3-grid.png",
          label: "3 columns",
          value: "3,2,1",
        },
        {
          preview: ASSETS_URL + "product-column-2-grid.png",
          label: "2 columns",
          value: "2,2,1",
        },
      ],
    },
  },

  {
    type: "SectionItem",
    props: {
      title: "Product image shape",
    },
  },
  {
    general: true,
    name: "product_ratio",
    type: "SelectOptions",
    props: {
      variant: "list2",
      options: [
        {
          preview: ASSETS_URL + "product-ratio-square.png",
          label: "Square",
          value: "1,1",
          description: "Useful if most of your product visuals are equally tall and wide"
        },
        {
          preview: ASSETS_URL + "product-ratio-landscape.png",
          label: "Landscape",
          value: "6,4",
          description: "Useful if most of your product visuals are wider than taller"
        },
        {
          preview: ASSETS_URL + "product-ratio-portrait.png",
          label: "Portrait",
          value: "4,6",
          description: "Useful if most of your product visuals are wider than taller"
        },
      ],
    },
  },
  {
    name: "show_category_filter",
    type: "SectionItem",
    props: {
      isToggle: true,
      title: "Show category filter",
    },
  },
  {
    type: "SectionItem",
    props: {
      title: "Content",
    },
  },
  {
    name: "title",
    type: "Input",
  },
];

export { PRODUCT_FORM };
