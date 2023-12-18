const TOP_BANNER_FORM = [
  {
    name: "closable",
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

const HEADER_SETTINGS = {
  TopBanner: TOP_BANNER_FORM,
};

export { HEADER_SETTINGS };
