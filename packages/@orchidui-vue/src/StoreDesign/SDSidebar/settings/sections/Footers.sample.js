

const FOOTER_CONTENT_FORM = [
  {
    name: "menu_enabled",
    type: "SectionItem",
    props: {
      title: "Footer Menu",
      isToggle: true,
    },
  },
  {
    general: true,
    name: "footer_social_menus",
    type: "Menus",
    variant: "social",
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


export { FOOTER_CONTENT_FORM };
