
const components = [
  {
    id: "s-1",
    n: "Header",
    g: 'header',
    c: [
      {
        id: "s-2",
        n: "promotion",
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
    ],
    css: {
      all: {
        s: {
          "c-3": "color:blue",
        },
        h: {
          "c-3": "color:red",
        },
      },
      769: {
        s: {
          "c-3": "color:yellow",
        },
        h: {
          "c-3": "color:green",
        },
      },
    },
    code: [
      {
        id: "c-1",
        tp: "el",
        val: "s-2"
      },
      {
        id: "c-2",
        tp: "img",
        val: "https://assets-global.website-files.com/64624bb008de2f11dbf1f3a1/6465f9263eb94044a3743277_HitPay_Blue-min.svg"
      },
      {
        id: "c-3",
        tp: "h1",
        val: "Header Title"
      }
    ]
  }
];

export { components as c };
