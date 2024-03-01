import { createApp , ref} from "vue";
import App from "@/App.vue";
import "@/scss/tailwind.scss";

// html only in orchid theme builder : will get html data from props laravel blade
import { BtnPrimary, ProductCard } from "./ui.js";

const app = createApp(App);

// s-btn-primary
const BtnPrimaryTemplate = BtnPrimary.replaceAll("{", "{{").replaceAll(
  "}",
  "}}"
);

// s-product-card
const ProductCardTemplate = ProductCard.replaceAll("{", "{{").replaceAll(
  "}",
  "}}"
);

const SBtnPrimary = {
    props: {
      label: String,
    },
    template: BtnPrimaryTemplate,
}

app.component("SBtnPrimary", SBtnPrimary);

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
app.component("SProductCard",SProductCard);


app.mount("#app");
