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
    children: []
  },
  // 3 -> 4 level level
  {
    icon: "link-in-bio",
    type: "list",
    name: "link_in_bio",
    label: "Link In Bio",
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
