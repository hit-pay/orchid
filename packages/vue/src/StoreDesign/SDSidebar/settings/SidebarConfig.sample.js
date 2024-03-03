const sidebar = [
  // 3 -> 4 level level
  {
    icon: "layout",
    type: "list",
    name: "home",
    label: "Home Settings",
    children: [
      {
        name: "header",
        label: "Header",
      },
      {
        name: "sections",
        label: "Sections",
      },
      {
        name: "footer",
        label: "Footer",
      },
    ],
  },
  // 2 level
  {
    icon: "pallete",
    type: "styles",
    name: "styles",
    label: "Styles",
  },
  // 3 -> 4 level level
  {
    icon: "link-in-bio",
    type: "sections",
    name: "link_in_bio",
    label: "Link In Bio",
    children: [
      {
        name: "IconLinks",
        label: "Icon Links",
      },
      {
        name: "ButtonLinks",
        label: "Button Links",
      },
      {
        label: "Copy URL",
        icon: "link",
        onClick: () => console.log("do somthing"),
      },
    ],
  },
  // 1 level
  {
    icon: "document",
    type: "page",
    name: "page",
    label: "Pages",
    onClick: () => console.log("do somthing"),
  },
];

export { sidebar };
