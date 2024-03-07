import { defineAsyncComponent, createApp, ref, computed } from "vue";
import { useTheme } from "./storefront.js";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { MotionPlugin } from "@vueuse/motion";

import "vue3-carousel/dist/carousel.css";

const mountEl = document.querySelector("#app");
const props = { ...mountEl.dataset };
const components = computed(() => JSON.parse(props.components));
const storefront = computed(() => JSON.parse(props.storefront));
const pathDefault = ref("/default/");
const path = ref("/" + props.theme + "/");

const {
  state,
  action,
  business,
  general,
  styles,
  topBanner,
  header,
  banner,
  footer,
  sections,
  setState,
  setProductState,
  cartProducts,
  init,
} = useTheme();

init(storefront.value, components.value, props.theme, props.page);

const app = createApp({
  setup() {
    return {
      state,
      topBanner,
      header,
      banner,
      footer,
      sections,
    };
  },
  template: `
  <div class="p-6 border-b">
    Preview Dummy Data
    <select v-model="state.page">
      <option value="home">Home</option>
      <option value="search">Search</option>
      <option value="product">Product</option>
    </select>
    {{state.page }}
  </div>
  <s-top-banner v-if="topBanner.active" :data-sid="topBanner.key" data-stitle="Top Banner" :s="{...topBanner, ...state.sections.TopBanner}" />
  <s-headers :data-sid="header.key" data-stitle="Header" :s="{...header, ...state.sections.Header}" />
  <template v-if="state.page === 'home'">
    <s-banner v-if="banner.active" :data-sid="banner.key" data-stitle="Banner" :s="{...banner, ...state.sections.Banner}" />
    <template v-for="item in sections" >
        <s-products v-if="item.section === 'Products'" :data-sid="item.key" :data-stitle="item.title" :s="{...item, ...state.sections[item.key]}"/>
    </template>
  </template>
  <template v-if="state.page === 'search'">
      <s-search-filter />
      <s-search-products />
  </template>
  <s-footer :data-sid="footer.key" data-stitle="Footer" :s="{...footer, ...state.sections.Footer}" />`,
});

components.value.forEach((comp, index) => {
  const newComponent = defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      let pathName = path.value;
      if (comp.theme === "default") {
        pathName = pathDefault.value;
      }
      if (props.mode === "development") {
        pathName = "/";
      }
      if (comp.path) {
        pathName = pathName + comp.path + "/";
      }
      fetch(pathName + comp.name + ".html")
        .then((r) => r.text())
        .then((template) => {
          console.log(comp.name, comp.props)
          const SComponent = {
            props: {
              ...comp.props,
              s: Object
            },
            setup() {
              return {
                state,
                action,
                business,
                general,
                styles,
                topBanner,
                banner,
                footer,
                sections,
                setState,
                setProductState,
                cartProducts,
              };
            },
            template: template,
          };
          resolve(SComponent);
        })
        .catch(() => {
          reject("component not found");
        });
    });
  });
  app.component(comp.name, newComponent);

  if (index + 1 === components.value.length) {
    app.component("SCarousel", Carousel);
    app.component("SSlide", Slide);
    app.component("SSlidePagination", Pagination);
    app.component("SSlideNavigation", Navigation);

    app.use(MotionPlugin);

    app.mount("#app");
  }
});
