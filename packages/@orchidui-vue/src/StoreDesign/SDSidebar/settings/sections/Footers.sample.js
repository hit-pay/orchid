const FOOTER_CONTENT_FORM = [
  {
    name: "PaymentLogo",
    type: "Children",
    icon: "bank-card",
    label: "Payment Method Logo",
    children: [
      {
        type: "SectionItem",
        props: {
          title: "Choose payment method",
        },
      },
      {
        general: true,
        name: "payment_method_logos",
        type: "Select",
        props: {
          multiple: true,
          placeholder: "Select payment method",
          options: [
            {
              label: "Atome",
              value: "atome",
            },
            {
              label: "Shopeback",
              value: "shopeback",
            },
          ],
        },
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
        noMenuIcon: "/images/no-menu-header.png",
      },
    ],
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

export { FOOTER_CONTENT_FORM };
