const StoreDesign = {
  general: {
    top_banner_closable: true,
    top_banner_content: "",
    navigation_menus: [
      {
        id: "123",
        title: "Menu",
        type: 'page',
        link: "https://orchidui.vercel.app",
        children: [
          {
            id: "123",
            title: "Menu",
            type: 'page',
            link: "https://orchidui.vercel.app",
            children: [
              {
                id: "123",
                title: "Menu",
                type: 'page',
                link: "https://orchidui.vercel.app",
              },
            ]
          },
        ]
      },
    ],
    banners: [],
    footer_company_logo: "",
    footer_content: "",
    footer_link_1_title: "",
    footer_link_1_menus: [],
    footer_link_2_title: "",
    footer_link_2_menus: [],
    footer_social_title: "",
    footer_social_menus: [],
    link_in_bio_enabled: false,
    link_in_bio_icon_links: [],
    link_in_bio_button_links: [],
  },
  sections: [
    {
      group: "styles",
      key: "Styles",
      section: "Styles",
      preset: "default",
      primary_color: "#002771",
      primary_text_color: "#03102F",
      background_color: "#FFFFFF",
      text_color: "#03102F",
      font_body: "Inter",
      folor_title: "Inter",
      box_rounded: "4",
      box_shadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
      active: true,
    },
    {
      group: "header",
      key: "TopBanner",
      section: "TopBanner",
      background_color: "#FFFFFF",
      text_color: "#03102F",
      active: true,
    },
    {
      group: "header",
      key: "Header",
      section: "Header",
      aligment: "right",
      background_color: "#002771",
      text_color: "#03102F",
      active: true,
    },
    {
      group: "header",
      key: "Banner",
      section: "Banner",
      variant: "MediaOnly",
      width: "full",
      image_width: "half",
      aligment: "text_right",
      banner_title: "",
      description: "",
      button_text: "",
      button_link: "",
      active: true,
    },
    {
      group: "footer",
      key: "FooterContent",
      section: "FooterContent",
      payment_method_logos: [],
      active: true,
    },
    {
      group: "sections",
      key: "product_list_1",
      section: "Products",
      title: "Feature Product",
      active: true,
    },
    {
      group: "sections",
      key: "product_list_2",
      section: "Products",
      title: "All Products",
      active: true,
    }
  ],
};

export { StoreDesign };
