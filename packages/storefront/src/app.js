import { createApp } from "vue";
import App from "@/App.vue";
import "@/scss/tailwind.scss";
import { defineAsyncComponent } from "vue";
import { components  } from './components'


const convertToVueTemplate = (string) => {
  const result = string.replaceAll("{#", "{{").replaceAll("#}", "}}");
  return result;
};

const path = "/components/"
const action = {
  addToCart: () => {
    console.log('add to cart')
  }
}

const createVueApp = () => {
  const app = createApp(App);
  components.forEach((comp) => {
    const newComponent = defineAsyncComponent(() => {
      return new Promise((resolve, reject) => {
        fetch(path+comp.name+".html")
          .then((r) => r.text())
          .then((template) => {
            const SProductCard = {
              props: comp.props,
              setup() {
                return {
                  action
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
    app.component(comp.name, newComponent);
  })
  app.mount("#app");
};


createVueApp();
