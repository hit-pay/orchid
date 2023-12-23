// const ASSETS_URL = "/templates/default/images/";

const TOP_BANNER_FORM = [
  {
    general: true,
    name: "top_banner_closable",
    type: "SectionItem",
    props: {
      title: "Closable",
      isToggle: true,
    },
  },
  {
    type: "SectionItem",
    props: {
      title: "Content",
    },
  },
  {
    general: true,
    name: "top_banner_content",
    type: "TextArea",
  },
];

const HEADER_FORM = [
  //  only for juizzy
  // {
  //   type: "SectionItem",
  //   props: {
  //     title: "Alignment",
  //   },
  // },
  // {
  //   name: "alignment",
  //   type: "SelectOptions",
  //   props: {
  //     options: [
  //       {
  //         preview: `${ASSETS_URL}header-alignment-right.png`,
  //         label: "Right",
  //         value: "right",
  //       },
  //       {
  //         preview: `${ASSETS_URL}header-alignment-left.png`,
  //         label: "Left",
  //         value: "left",
  //       },
  //       {
  //         preview: `${ASSETS_URL}header-alignment-center.png`,
  //         label: "Center",
  //         value: "center",
  //       },
  //     ],
  //   },
  // },
  {
    name: "menu_enabled",
    type: "SectionItem",
    props: {
      title: "Navigation Menu",
      isToggle: true,
    },
  },
  {
    general: true,
    name: "navigation_menus",
    type: "Menus",
    variant: "default",
    noMenuIcon: '/images/no-menu-header.png',
  },
  {
    type: "SectionItem",
    props: {
      title: "Choose colors",
    },
  },
  {
    name: [
      {
        props: {
          label: "Background Color",
        },
        key: "background_color",
      },
      {
        props: {
          label: "Text Color",
        },
        key: "text_color",
      },
    ],
    type: "Colors",
  },
];

const BANNER_FORM = [
  {
    type: "SectionItem",
    props: {
      title: "Type",
    },
  },
  {
    type: "SectionItem",
    props: {
      title: "Upload Images",
      descriptions: "Recommended size 1440x400 pixels",
    },
  },
];

export { TOP_BANNER_FORM, HEADER_FORM, BANNER_FORM };
