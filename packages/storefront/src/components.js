
const sections = [
  {
    id: "s-x1",
    n: "promotion",
    css: {
      all: {
        "x1": "color:blue"
      }
    },
    code: [
      {
        id: "x1",
        tp: "text",
        val: "Promotion Banners"
      }
    ]
  },
  {
    id: "s-x2",
    n: "Header",
    g: 'header',
    css: {
      all: {
        "x2": "color:red",
        "x3": "color:red",
        "x4": "color:red"
      }
    },
    code: [
      {
        id: "x2",
        tp: "el",
        val: "s-x1"
      },
      {
        id: "x3",
        tp: "img",
        val: "https://assets-global.website-files.com/64624bb008de2f11dbf1f3a1/6465f9263eb94044a3743277_HitPay_Blue-min.svg"
      },
      {
        id: "x4",
        tp: "text",
        val: "Header Title"
      }
    ]
  }
];

const components = [...sections];

export { components as c };
