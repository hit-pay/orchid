import { createApp , ref} from "vue";
import App from "@/App.vue";
import AppEditor from "@/Editor.vue";
import "@/scss/tailwind.scss";
import { defineAsyncComponent } from 'vue'
const Templates = ref([])
const convertToVueTemplate = (string) => {
  const result = string.replaceAll("{#", "{{").replaceAll(
    "#}",
    "}}"
  );
  return result
}

let myVueApp = null;

const createVueApp = () => {
  const app = createApp(App);
  const BtnPrimaryComponents = defineAsyncComponent(() => { 
    if(Templates.value['SBtnPrimary']){
      return new Promise((resolve) => {
        resolve({
            props: {
              label: String,
            },
            template: convertToVueTemplate(Templates.value['SBtnPrimary'])
        })
      })
    }else{
      return new Promise((resolve, reject) => {
        fetch('/btn-primary.html')
        .then((r) => r.text())
        .then(template => {
            Templates.value['SBtnPrimary'] =  template
            const SBtnPrimary = {
                props: {
                  label: String,
                },
                template: convertToVueTemplate(template)
            }
          resolve(SBtnPrimary)
        }).catch(() => {
          reject('component not found')
        })
      })
    }
})

  const ProductCardComponent = defineAsyncComponent(() => {
    if(Templates.value['SProductCard']){
      return new Promise((resolve) => {
        resolve({
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
          template: convertToVueTemplate(Templates.value['SProductCard']),
        })
      })
    }else{
      return new Promise((resolve, reject) => {
        fetch('/product-card.html')
        .then((r) => r.text())
        .then(template => {
          Templates.value['SProductCard'] =  template
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
            template: convertToVueTemplate(template),
          }
          resolve(SProductCard)
        }).catch(() => {
          reject('component not found')
        })
      })
    }
  })

  app.component("SBtnPrimary", BtnPrimaryComponents);
  app.component("SProductCard", ProductCardComponent);

  app.mount("#app");
  myVueApp = app

  app.config.errorHandler = (err, instance, info) => {
    console.log(err, instance, info)
    myVueApp.unmount()
  }
}

const updateTemplate = (name, value) => {
  Templates.value[name] =  value
  reRenderVueApp()
}

const reRenderVueApp = () => {
  if(myVueApp){
    myVueApp.unmount()
  }
  document.getElementById('app').innerHTML = ""
  myVueApp = null
  createVueApp()
}

createVueApp()

const editor = createApp(AppEditor)
editor.mount("#editor")

export { Templates, updateTemplate, reRenderVueApp }