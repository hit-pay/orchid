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

  {
    type: "SectionItem",
    props: {
      title: "Colors",
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

const HEADER_FORM = [
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
    hasSubmenu: true,
    submenuLevel: '2',
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
