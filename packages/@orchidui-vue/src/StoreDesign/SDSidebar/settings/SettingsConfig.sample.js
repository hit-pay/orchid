import {
  TOP_BANNER_FORM,
  HEADER_FORM,
  BANNER_FORM,
} from "./sections/Headers.sample";
import { PRODUCT_FORM } from "./sections/Sections.sample";
import { FOOTER_CONTENT_FORM } from "./sections/Footers.sample";
import { STYLES_FORM } from "./sections/Styles.sample";
const settings = [
  {
    group: "styles",
    key: "Styles",
    section: "Styles",
    title: "Styles",
    isDisable: true,
    form: STYLES_FORM,
  },
  {
    group: "header",
    key: "TopBanner",
    section: "TopBanner",
    title: "Top Banner",
    icon: "top-banner",
    isDisable: true,
    form: TOP_BANNER_FORM,
  },
  {
    group: "header",
    key: "Header",
    section: "Header",
    title: "Header",
    icon: "header",
    isDisable: true,
    form: HEADER_FORM,
  },
  {
    group: "header",
    key: "Banner",
    section: "Banner",
    title: "Banner",
    icon: "banner",
    isDisable: true,
    form: BANNER_FORM,
  },
  {
    group: "sections",
    key: "Products",
    section: "Products",
    title: "Products",
    icon: "tag",
    preview: "/images/section.png",
    form: PRODUCT_FORM,
    default: {
      product_form: "all_product",
      variant: "grid",
    },
  },
  {
    group: "footer",
    key: "FooterContent",
    section: "FooterContent",
    title: "Footer Content",
    icon: "footer",
    isDisable: true,
    form: FOOTER_CONTENT_FORM,
  },
  {
    group: "footer",
    key: "PoweredBy",
    section: "PoweredBy",
    title: "Powered By",
    icon: "powered",
    isDisable: true,
  },
];

export { settings };
