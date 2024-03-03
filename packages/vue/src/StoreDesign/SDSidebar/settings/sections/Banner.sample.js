const ASSETS_URL = "/templates/default/images/";

const BANNER_FORM = [
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
          preview: ASSETS_URL + "banner-type-media-only.png",
          value: "MediaOnly",
          label: "Media Only",
        },
        {
          preview: ASSETS_URL + "banner-type-media-and-text.png",
          value: "MediaAndText",
          label: "Media & Text",
        },
      ],
    },
  },
  {
    name: "width",
    type: "SelectOptions",
    props: {
      options: [
        {
          preview: ASSETS_URL + "banner-full-width.png",
          value: "full",
          label: "Full Width",
        },
        {
          preview: ASSETS_URL + "banner-boxed.png",
          value: "boxed",
          label: "Boxed",
        },
      ],
    },
  },
  {
    type: "SectionItem",
    props: {
      title: "Banner Images",
      description: "Recommended size 1440x400 pixels",
    },
  },
  {
    general: true,
    type: "Images",
    name: "banners",
    props: {
      maxImages: 8,
    },
  },
  {
    general: true,
    type: "SectionItem",
    name: "responsive_banner_size",
    props: {
      isToggle: true,
      title: "Responsive Banner",
      description:
        "Banner images for mobile device, Recommended size 400x400 pixels",
    },
  },
  {
    general: true,
    type: "Images",
    name: "banners_mobile",
    show_if: "responsive_banner_size",
    show_if_value: true,
    props: {
      maxImages: 8,
    },
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
    name: "tab_banner",
    type: "Tabs",
    show_if: "responsive_banner_size",
    show_if_value: true,
    props: {
      tabs: [
        {
          label: "Desktop",
          value: "",
        },
        {
          label: "Mobile",
          value: "mobile",
        },
      ],
    },
  },
  {
    general: true,
    name: "banner_size",
    type: "SelectOptions",
    show_if: "tab_banner",
    show_if_value: "",
    props: {
      variant: "list2",
      options: [
        {
          preview: ASSETS_URL + "banner-size-small.png",
          label: "Small",
          value: [4, 1],
          description: "Smallest height, fit to screen width , ratio (4:1)",
        },
        {
          preview: ASSETS_URL + "banner-size-medium.png",
          label: "Medium",
          value: [3, 1],
          description: "Smallest height, fit to screen width , ratio (3:1)",
        },
        {
          preview: ASSETS_URL + "banner-size-large.png",
          label: "Large",
          value: [2, 1],
          description: "Bigger height, fit to screen width , ratio (2:1)",
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
    name: "banner_size_mobile",
    type: "SelectOptions",
    show_if: "tab_banner",
    show_if_value: "mobile",
    props: {
      variant: "list2",
      options: [
        {
          preview: ASSETS_URL + "banner-size-small.png",
          label: "Small",
          value: [3, 1],
          description: "Smallest height, fit to screen width , ratio (3:1)",
        },
        {
          preview: ASSETS_URL + "banner-size-medium.png",
          label: "Medium",
          value: [2, 1],
          description: "Smallest height, fit to screen width , ratio (2:1)",
        },
        {
          preview: ASSETS_URL + "banner-size-large.png",
          label: "Large",
          value: [1, 1],
          description: "Bigger height, fit to screen width , ratio (1:1)",
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
    name: "MediaAndTextSettings",
    type: "Children",
    label: "Text Settings",
    show_if: "variant",
    show_if_value: "MediaAndText",
    children: [
      {
        type: "SectionItem",
        props: {
          title: "Image Width",
        },
      },
      {
        name: "variant_width",
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
        show_if: "variant_width",
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
        show_if: "variant_width",
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
          title: "Content",
        },
      },
      {
        name: "banner_title",
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
              label: "Background",
            },
            key: "color_bg",
          },
          {
            props: {
              label: "Heading ",
            },
            key: "color_text",
          },
          {
            props: {
              label: "Text",
            },
            key: "color_text",
          },
        ],
        type: "Colors",
      },
    ],
  },
];

export { BANNER_FORM };
