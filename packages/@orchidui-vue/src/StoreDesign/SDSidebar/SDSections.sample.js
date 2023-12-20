import {
  TOP_BANNER_FORM,
  HEADER_FORM,
  BANNER_FORM,
} from "./settings/SDHeaders.sample";
import { PRODUCT_FORM } from "./settings/SDSections.sample";

const SDSectionSample = [
  {
    group: "header",
    key: "TopBanner",
    section: "TopBanner",
    title: "Top Banner",
    icon: "circle",
    isDisable: true,
    form: TOP_BANNER_FORM,
  },
  {
    group: "header",
    key: "Header",
    section: "Header",
    title: "Header",
    icon: "circle",
    isDisable: true,
    form: HEADER_FORM,
  },
  {
    group: "header",
    key: "Banner",
    section: "Banner",
    title: "Banner",
    icon: "circle",
    isDisable: true,
    form: BANNER_FORM,
  },
  {
    group: "footer",
    key: "FooterContent",
    section: "FooterContent",
    title: "Footer Content",
    icon: "circle",
    isDisable: true,
    form: [],
  },
  {
    group: "footer",
    key: "PoweredBy",
    section: "PoweredBy",
    title: "Powered By",
    icon: "circle",
    isDisable: true,
  },
  {
    group: "sections",
    key: "Products",
    section: "Products",
    title: "Products",
    icon: "circle",
    preview: "/images/section.png",
    form: PRODUCT_FORM,
    default: {
        product_form: "all_product",
        variant: "grid",
    }
  },
  {
    group: "sections",
    key: "MediaAndText",
    section: "MediaAndText",
    title: "Media and Text",
    icon: "circle",
    preview: "/images/section.png",
    form: PRODUCT_FORM,
    default: {
        variant: "full",
    }
  },
];

export { SDSectionSample };
