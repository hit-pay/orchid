import {
  defineAsyncComponent,
  createApp,
  ref,
  computed,
  reactive,
} from "vue";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { MotionPlugin } from "@vueuse/motion";
import "vue3-carousel/dist/carousel.css";

const mountEl = document.querySelector("#app");
const props = { ...mountEl.dataset };

const storefront = computed(() => JSON.parse(props.storefrontData));
const appLayout = computed(() => props.appLayout);
const components = computed(() => JSON.parse(props.components));

const path = ref(props.themeAssets + "/components/");

const state = reactive({
  route: {},
  business: {},
  store_design: {
      general: {},
      sections: [],
  },
  page: "home",
  sections: {},
  product: {},
});

const action = {
  setState(section, key, value) {
      state.sections[section][key] = value;
  },
  addToCart: () => {
      console.log("add to cart");
  },
  viewPage: (path) => {
      console.log("View page path :", path);
  },
  getProducts: () => {
      //
  },
  updateStoreDesign(data) {
      state.store_design = data;
  },
  init: (storefront, componentSettings) => {
      let defaultState = {};

      storefront.store_design.sections.forEach((s) => {
          if (s.group !== "styles" && s.group !== "link_in_bio") {
              const comp = componentSettings?.find(
                  (c) => c.section === s.section,
              );
              if (comp && comp.state) {
                  defaultState[s.key] = comp.state;
              } else {
                  defaultState[s.key] = {};
              }
          }
      });

      state.business = storefront.business;
      state.store_design = storefront.store_design;
      state.sections = defaultState;
  },
};

action.init(storefront.value, components.value);

const business = computed(() => state.business);

const general = computed(() => state.store_design.general);

const styles = computed(() =>
  state.store_design.sections.find((s) => s.section === "Styles"),
);
const topBanner = computed(() =>
  state.store_design.sections.find((s) => s.section === "TopBanner"),
);
const header = computed(() =>
  state.store_design.sections.find((s) => s.section === "Header"),
);
const banner = computed(() =>
  state.store_design.sections.find((s) => s.section === "Banner"),
);
const footer = computed(() =>
  state.store_design.sections.find((s) => s.section === "FooterContent"),
);
const sections = computed(() =>
  state.store_design.sections.filter((s) => s.group === "sections"),
);

const app = createApp({
  setup() {

      const isHomePage = true;
      const isLinkInBio = false;

      return {
          business,
          state,
          general,
          styles,
          action,
          // used in layout
          topBanner,
          header,
          footer,
          // multiple route logic
          isHomePage,
          isLinkInBio,
      };
  },
  template: appLayout.value,
});

components.value.forEach((comp, index) => {
  const newComponent = defineAsyncComponent(() => {
      return new Promise((resolve, reject) => {
          let pathName = path.value;
          if (comp.path) {
              pathName = pathName + comp.path + "/";
          }
          fetch(pathName + comp.name + ".html")
              .then((r) => r.text())
              .then((template) => {
                  const SComponent = {
                      props: {
                          ...comp.props,
                          s: Object,
                      },
                      setup() {
                          return {
                              business,
                              state,
                              general,
                              styles,
                              action,
                              // used in homepage
                              banner,
                              sections,
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
