import { createApp , ref} from "vue";
import App from "@/App.vue";
import "@/scss/tailwind.scss";

const mountEl = document.querySelector("#app");
const props = { ...mountEl.dataset };
const components = JSON.parse(props.components)
const convertToVueTemplate = (string) => {
  return string.replaceAll("{", "{{").replaceAll(
    "}",
    "}}"
  );
}
const BtnPrimaryTemplate = convertToVueTemplate(components['SBtnPrimary'])
const ProductCardTemplate = convertToVueTemplate(components['SProductCard'])
const app = createApp(App);

// DEMO rendering components


// setup all props, methods. emit
const SBtnPrimary = {
    props: {
      label: String,
    },
    template: BtnPrimaryTemplate,
}
const SProductCard =  {
    props: {
      state: Object,
    },
    setup() {
      const product = ref({
        id: 1,
        name: "item 1",
        price: 100,
        image: "https://via.placeholder.com/150",
        has_variations: true,
        variations_count: 4,
      });
      return {
        product,
        addToCart: () => {
          console.log("add to cart");
        },
      };
    },
    template: ProductCardTemplate,
}


// register components
app.component("SProductCard",SProductCard);
app.component("SBtnPrimary", SBtnPrimary);
app.mount("#app");
