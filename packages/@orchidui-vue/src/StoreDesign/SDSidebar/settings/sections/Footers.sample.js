const ASSETS_URL = "/templates/default/images/";

const FOOTER_CONTENT_FORM = [
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
  {
    type: "SectionItem",
    props: {
      title: "Footer Logo",
      description: "Recommended size 640x640 pixels"
    },
  },
  {
    type: "Images",
    name: "footer_logo",
    props: {
      maxImages: 1,
    },
  },
  {
    type: "SectionItem",
    props: {
      title: "Content"
    },
  },
  {
    type: "TextArea",
    name: "content"
  },
  // {
  //   name: "PaymentLogo",
  //   type: "Children",
  //   icon: "bank-card",
  //   label: "Payment Method Logo",
  //   children: [
  //     {
  //       type: "SectionItem",
  //       props: {
  //         title: "Choose payment method",
  //       },
  //     },
  //     {
  //       general: true,
  //       name: "payment_method_logos",
  //       type: "Select",
  //       props: {
  //         multiple: true,
  //         placeholder: "Select payment method",
  //         options: [
  //           {
  //             label: "Atome",
  //             value: "atome",
  //           },
  //           {
  //             label: "Shopeback",
  //             value: "shopeback",
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  {
    name: "FooterLink1",
    type: "Children",
    icon: "align-top",
    label: "Footer Link 1",
    children: [
      {
        type: "SectionItem",
        props: {
          title: "Title",
        },
      },
      {
        type: "Input",
        name: "footer_link_1_title",
        props: {
          placeholder: "Company",
        },
      },
      {
        type: "SectionItem",
        props: {
          title: "Menus",
        },
      },
      {
        general: true,
        name: "footer_link_1_menus",
        type: "Menus",
        noMenuIcon: ASSETS_URL + "no-menu-footer.png",
      },
    ],
  },
  {
    name: "FooterLink2",
    type: "Children",
    icon: "align-top",
    label: "Footer Link 2",
    children: [
      {
        type: "SectionItem",
        props: {
          title: "Title",
        },
      },
      {
        type: "Input",
        name: "footer_link_2_title",
        props: {
          placeholder: "Company",
        },
      },
      {
        type: "SectionItem",
        props: {
          title: "Menus",
        },
      },
      {
        general: true,
        name: "footer_link_2_menus",
        type: "Menus",
        noMenuIcon: ASSETS_URL + "no-menu-footer.png",
      },
    ],
  },
  {
    name: "SocialMedia",
    type: "Children",
    icon: "facebook",
    label: "Social Media",
    children: [
      {
        type: "SectionItem",
        props: {
          title: "Title",
        },
      },
      {
        type: "Input",
        name: "footer_social_title",
        props: {
          placeholder: "Follow Us",
        },
      },
      {
        type: "SectionItem",
        props: {
          title: "Menus",
        },
      },
      {
        general: true,
        name: "footer_social_menus",
        type: "Menus",
        variant: "social",
        noMenuIcon: ASSETS_URL + "no-menu-footer.png",
      },
    ],
  }
];

export { FOOTER_CONTENT_FORM };
