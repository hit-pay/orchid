const ASSETS_URL = "/templates/default/images/";

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
    name: "BannerTitle",
    type: "SectionItem",
    props: {
      title: "Upload Images",
      description: "Recommended size 1440x400 pixels",
    },
  },
  {
    general: true,
    type: "Banners",
    name: "banners",
  },
  {
    general: true,
    type: "SectionItem",
    name: "responsive_banner_size",
    props: {
      isToggle: true,
      title: "Responsive Banners",
      description:
        "Banner images for mobile device, Recommended size 400x400 pixels",
    },
  },
  {
    general: true,
    type: "Banners",
    name: "banners_mobile",
    show_if: "responsive_banner_size",
    show_if_value: true,
  },
  {
    general: true,
    name: "BannerSizeTitle",
    type: "SectionItem",
    props: {
      title: "Banner Size",
    },
  },
  {
    general: true,
    name: "banner_size",
    type: "SelectOptions",
    props: {
      variant: "list2",
      options: [
        {
          preview: ASSETS_URL + "banner-size-small.png",
          label: "Small",
          value: "4,1",
          description: "Smallest height, fit to screen width",
        },
        {
          preview: ASSETS_URL + "banner-size-medium.png",
          label: "Medium",
          value: "3,1",
          description: "Smallest height, fit to screen width",
        },
        {
          preview: ASSETS_URL + "banner-size-large.png",
          label: "Large",
          value: "2,1",
          description: "Bigger height, fit to screen width",
        },
        {
          preview: ASSETS_URL + "banner-size-auto.png",
          label: "Adapt",
          value: "auto",
          description: "Following original image size",
        },
      ],
    },
  },
  {
    general: true,
    type: "SectionItem",
    name: "BannerSizeTitle",
    show_if: "responsive_banner_size",
    show_if_value: true,
    props: {
      title: "Banner Size Mobile",
    },
  },
  {
    general: true,
    name: "banner_size_mobile",
    type: "SelectOptions",
    show_if: "responsive_banner_size",
    show_if_value: true,
    props: {
      variant: "list2",
      options: [
        {
          preview: ASSETS_URL + "banner-size-small.png",
          label: "Small",
          value: "3,1",
          description: "Smallest height, fit to screen width",
        },
        {
          preview: ASSETS_URL + "banner-size-medium.png",
          label: "Medium",
          value: "2,1",
          description: "Smallest height, fit to screen width",
        },
        {
          preview: ASSETS_URL + "banner-size-large.png",
          label: "Large",
          value: "1,1",
          description: "Bigger height, fit to screen width",
        },
        {
          preview: ASSETS_URL + "banner-size-auto.png",
          label: "Adapt",
          value: "auto",
          description: "Following original image size",
        },
      ],
    },
  },
];

export { TOP_BANNER_FORM, HEADER_FORM, BANNER_FORM };
