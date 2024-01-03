const ASSETS_URL = "/templates/default/images/";

const PRODUCT_FORM = [
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
      title: "Select Product Category",
    },
  },
  {
    show_if: "product_from",
    show_if_value: "category",
    name: "product_category",
    type: "Select",
    options: "categories",
    props: {
      placeholder: "Select Product Category",
      options: [
        {
          value: "",
          label: "Loading...",
        },
      ],
    },
  },

  {
    type: "SectionItem",
    props: {
      title: "Type",
    },
  },

  {
    name: "variant",
    type: "SelectOptions",
    props: {
      options: [
        {
          preview: ASSETS_URL + "product-type-carousel.png",
          value: "carousel",
          label: "Carousel",
        },
        {
          preview: ASSETS_URL + "product-type-grid.png",
          value: "grid",
          label: "Grid",
        },
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
    show_if: "variant",
    show_if_value: "grid",
    name: "column_grid",
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
    show_if: "variant",
    show_if_value: "carousel",
    name: "column_carousel",
    type: "SelectOptions",
    props: {
      options: [
        {
          preview: ASSETS_URL + "product-column-4-carousel.png",
          label: "4 columns",
          value: "4,3,2",
        },
        {
          preview: ASSETS_URL + "product-column-3-carousel.png",
          label: "3 columns",
          value: "3,2,1",
        },
        {
          preview: ASSETS_URL + "product-column-2-carousel.png",
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
          description:
            "Useful if most of your product visuals are equally tall and wide",
        },
        {
          preview: ASSETS_URL + "product-ratio-landscape.png",
          label: "Landscape",
          value: "6,4",
          description:
            "Useful if most of your product visuals are wider than taller",
        },
        {
          preview: ASSETS_URL + "product-ratio-portrait.png",
          label: "Portrait",
          value: "4,6",
          description:
            "Useful if most of your product visuals are wider than taller",
        },
      ],
    },
  },
  // only for default theme
  {
    name: "show_category_filter",
    type: "SectionItem",
    props: {
      isToggle: true,
      title: "Show category filter",
    },
  },
  {
    show_if: "variant",
    show_if_value: "carousel",
    name: "is_limit_products",
    type: "SectionItem",
    props: {
      isToggle: true,
      title: "How many products do you want to show?",
    },
  },
  {
    show_if: "is_limit_products",
    show_if_value: true,
    name: "limit_products",
    type: "Input",
    props: {
      placeholder: "6",
    },
  },
  {
    show_if: "variant",
    show_if_value: "grid",
    type: "SectionItem",
    name: "view_all_button",
    props: {
      isToggle: true,
      title: "View all Button",
    },
  },
  {
    name: "title",
    type: "Input",
    props: {
      label: "Title",
    },
  },
  {
    name: "description",
    type: "TextArea",
    props: {
      label: "Description",
    },
  },
];

const TEXT_AND_IMAGE_FORM = [
  {
    type: "SectionItem",
    props: {
      title: "Image Width",
    },
  },
  {
    name: "variant",
    type: "SelectOptions",
    props: {
      options: [
        {
          preview: ASSETS_URL + "s-image-width-half.png",
          value: "half",
          label: "Half Width",
        },
        {
          preview: ASSETS_URL + "s-image-width-full.png",
          value: "full",
          label: "Full Width",
        },
      ],
    },
  },
  {
    type: "SectionItem",
    props: {
      title: "alignment",
    },
  },
  {
    show_if: "variant",
    show_if_value: "half",
    name: "alignment_half",
    type: "SelectOptions",
    props: {
      options: [
        {
          preview: ASSETS_URL + "s-image-text-left-half.png",
          value: "left",
          label: "Text Left",
        },
        {
          preview: ASSETS_URL + "s-image-text-right-half.png",
          value: "right",
          label: "Text right",
        },
      ],
    },
  },
  {
    show_if: "variant",
    show_if_value: "full",
    name: "alignment_full",
    type: "SelectOptions",
    props: {
      options: [
        {
          preview: ASSETS_URL + "s-image-text-left-full.png",
          value: "left",
          label: "Text Left",
        },
        {
          preview: ASSETS_URL + "s-image-text-center-full.png",
          value: "center",
          label: "Text center",
        },
        {
          preview: ASSETS_URL + "s-image-text-right-full.png",
          value: "right",
          label: "Text right",
        },
      ],
    },
  },
  {
    type: "SectionItem",
    props: {
      title: "Upload Images",
      description: "Recommended size 1440x400 pixels",
    },
  },
  {
    type: "Images",
    name: "images",
    props: {
      maxImages: 1,
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
    props: {
      label: "Title",
    },
  },
  {
    name: "description",
    type: "TextArea",
    props: {
      label: "Description",
    },
  },
  {
    name: "button_text",
    type: "Input",
    props: {
      label: "Button text",
    },
  },
  {
    name: "button_link",
    type: "Input",
    props: {
      label: "Button Link",
    },
  },
];
export { PRODUCT_FORM, TEXT_AND_IMAGE_FORM };
