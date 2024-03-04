import { createApp, ref } from "vue";
import App from "@/App.vue";
import "@/scss/tailwind.scss";
import { defineAsyncComponent } from "vue";
const convertToVueTemplate = (string) => {
  const result = string.replaceAll("{#", "{{").replaceAll("#}", "}}");
  return result;
};
const createVueApp = () => {
  const app = createApp(App);
  const BtnPrimaryComponents = defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      fetch("/btn-primary.html")
        .then((r) => r.text())
        .then((template) => {
          const SBtnPrimary = {
            props: {
              label: String,
            },
            template: convertToVueTemplate(template),
          };
          resolve(SBtnPrimary);
        })
        .catch(() => {
          reject("component not found");
        });
    });
  });

  const ProductCardComponent = defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      fetch("/product-card.html")
        .then((r) => r.text())
        .then((template) => {
          const SProductCard = {
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
            template: convertToVueTemplate(template),
          };
          resolve(SProductCard);
        })
        .catch(() => {
          reject("component not found");
        });
    });
  });
  app.component("SBtnPrimary", BtnPrimaryComponents);
  app.component("SProductCard", ProductCardComponent);
  app.mount("#app");
};

createVueApp();
