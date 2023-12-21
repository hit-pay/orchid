const SidebarConfig = [
  // 3 -> 4 level level
  {
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
    type: "styles",
    name: "styles",
    label: "Styles",
  },
  // 3 -> 4 level level
  {
    type: "list",
    name: "link_in_bio",
    label: "Link In Bio",
    children: [
      {
        name: "icon_links",
        label: "Icon Links",
      },
      {
        name: "button_links",
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
    type: "page",
    name: "page",
    label: "Pages",
    onClick: () => console.log("do somthing"),
  },
];

export { SidebarConfig };
