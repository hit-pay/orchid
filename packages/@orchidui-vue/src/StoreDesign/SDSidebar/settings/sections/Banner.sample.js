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
    type: "SectionItem",
    props: {
      title: "Upload Images",
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
      title: "Responsive Banners",
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

export { BANNER_FORM };
