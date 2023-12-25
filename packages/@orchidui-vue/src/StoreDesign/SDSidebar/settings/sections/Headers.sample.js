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
    submenuLevel: "2",
    noMenuIcon: "/images/no-menu-header.png",
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
      title: "Upload Images",
      description: "Recommended size 1440x400 pixels",
    },
  },
  {
    general: true,
    type: "Banners",
    name: "banners"
  },
  {
    general: true,
    type: "SectionItem",
    name: 'responsive_banner_size',
    props: {
      isToggle: true,
      title: "Responsive Banner Size",
      description: "Banner for mobile device, Recommended size 400x400 pixels"
    },
  },
  {
    general: true,
    type: "Banners",
    name: "banners_mobile",
    show_if: 'responsive_banner_size',
    show_if_value: true
  },
  {
    general: true,
    type: "SectionItem",
    props: {
      title: "Banner Size",
    },
  },
  {
    general: true,
    type: "SectionItem",
    props: {
      title: "Banner Size Mobile",
    },
  },
];

export { TOP_BANNER_FORM, HEADER_FORM, BANNER_FORM };
