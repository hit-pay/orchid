import { createApp , ref} from "vue";
import App from "@/App.vue";
import Editor from "@/Editor.vue";
import "@/scss/tailwind.scss";
import { defineAsyncComponent } from 'vue'
const Templates = ref([])
const convertToVueTemplate = (string) => {
  return string.replaceAll("{", "{{").replaceAll(
    "}",
    "}}"
  );
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
  app.component("SBtnPrimary", BtnPrimaryComponents);
  const ProductCardComponent = defineAsyncComponent(() => {
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
  })
  app.component("SProductCard", ProductCardComponent);
  app.mount("#app");

  myVueApp = app
}

const updateTemplate = (name, value) => {
  Templates.value[name] =  value
  myVueApp.unmount()
  myVueApp = null
  createVueApp()
}

createVueApp()

const editor = createApp(Editor)
editor.mount("#editor")

// export func

export { Templates, updateTemplate }