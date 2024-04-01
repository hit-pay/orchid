
const components = [
  {
    id: "s-1",
    name: "Header",
    group: 'header',
    code: [
      {
        id: "sc-2",
        tp: "comp",
        val: "sc-2"
      },
      {
        id: "c-2",
        tp: "img",
        val: "https://assets-global.website-files.com/64624bb008de2f11dbf1f3a1/6465f9263eb94044a3743277_HitPay_Blue-min.svg"
      },
      {
        id: "c-3",
        tp: "div",
        val: "Header Title"
      },
      {
        id: "sc-3",
        tp: "comp",
        val: "sc-3"
      }
    ],
    css: {
      all: {
        s: {
          "s-1": "height:500px;width:100%",
          "c-3": "color:blue;height:100px",
        },
        h: {
          "c-3": "color:red",
        },
      },
      769: {
        s: {
          "c-3": "color:yellow;",
        },
        h: {
          "c-3": "color:green",
        },
      },
    }
  },
  {
    id: "sc-2",
    name: "promotion",
    css: {
      all: {
        s: {
          'c-4': `
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 11px 56px;
            gap: 8px;
            isolation: isolate;
            width: 100%;
            height: 48px;
            background: #111111;
            flex: none;
            order: 0;
            flex-grow: 0;
            z-index: 6;
            color:white
          `
        }
      }
    },
    code: [
      {
        id: "c-4",
        tp: "text",
        val: "Banner Promotion"
      }
    ]
  },
  {
    id: "sc-3",
    name: "navigation",
    code: [
      {
        id: "c-6",
        tp: "comp",
        val: "menu",
        each: "navigations_menus"
      }
    ]
  },
  {
    id: "sc-4",
    name: "menu",
    code: [
      {
        id: "c-7",
        tp: "text",
        val: "Menu"
      }
    ]
  },
]

export { components as c };
