
const sections = [
  {
    id: "s-1",
    n: "Header",
    g: 'header',
    c: [
      {
        id: "s-2",
        n: "promotion",
        code: [
          {
            id: "c-4",
            tp: "text",
            val: "Promotion"
          },
          {
            id: "c-5",
            tp: "text",
            val: "Big Sale"
          }
        ]
      },
    ],
    css: {
      d: {
        all: {
          "c-2": "color:green",
          "c-3": "color:blue"
        },
        s769: {
          "c-2": "color:green",
          "c-3": "color:blue"
        },
        s480: {
          "c-2": "color:green",
          "c-3": "color:blue"
        }
      },
     hover: {
      an: 'fade',
      all: {
        "c-2": "color:green",
        "c-3": "color:blue"
      }
     }
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
        tp: "text",
        val: "Header Title"
      }
    ]
  }
];

const components = [...sections];

export { components as c };
