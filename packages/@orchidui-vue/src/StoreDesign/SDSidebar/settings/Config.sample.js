const ASSETS_URL = "/templates/default/images/";

import { sidebar } from "./SidebarConfig.sample";
import { settings } from "./SettingsConfig.sample";

const Config = {
  sidebar: sidebar, // sidebar menus
  settings: settings, // form
  presetCustomPreview: ASSETS_URL + "preset-custom.png",
  preset: [
    {
      value: "default",
      label: "Default",
      preview: ASSETS_URL + "preset-1.png",
      sections: [
        // Reset Section Data
        {
          section: "Styles",
          changes: {
            preset: "default",
            section: "Styles",
            font_heading: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap",
            ],
            font_body: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter&display=swap",
            ],
            color_bg: "#FFFFFF",
            color_text: "#03102F",
            color_primary: "#002771",
            color_primary_text: "#FFFFFF",
            color_shadow: "rgba(0, 0, 0, 0.12)",
            card_color_bg: "#FFFFFF",
            card_color_text: "#03102F",
            button_rounded: "4",
            card_rounded: "4",
          },
        },
        {
          section: "TopBanner",
          changes: {
            color_bg: "#002771",
            color_text: "#FFFFFF",
          },
        },
        {
          section: "Header",
          changes: {
            color_bg: "#FFFFFF",
            color_text: "#03102F",
          },
        },
        {
          section: "Banner",
          changes: {
            color_bg: "#FFFFFF",
            color_heading: "#03102F",
            color_text: "#03102F",
          },
        },
        {
          section: "Products",
          changes: {
            color_bg: "#FFFFFF",
            color_heading: "#03102F",
            color_text: "#03102F",
          },
        },
        {
          section: "FooterContent",
          changes: {
            color_bg: "#FFFFFF",
            color_text: "#03102F",
          },
        },
      ],
    },
    {
      value: "wood",
      label: "Wood",
      preview: ASSETS_URL + "preset-2.png",
      sections: [
        {
          section: "Styles",
          changes: {
            preset: "wood",
            section: "Styles",
            font_heading: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap",
            ],
            font_body: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter&display=swap",
            ],
            color_bg: "#221F1C",
            color_text: "#B4ABA4",
            color_primary: "#C38934",
            color_primary_text: "#DCCCBB",
            color_shadow: "rgba(0, 0, 0, 0.12)",
            card_color_bg: "#302D29",
            card_color_text: "#B4ABA4",
            button_rounded: "4",
            card_rounded: "4",
          },
        },
        {
          section: "TopBanner",
          changes: {
            color_bg: "#39322B",
            color_text: "#B4ABA4",
          },
        },
        {
          section: "Header",
          changes: {
            color_bg: "#221F1C",
            color_text: "#B4ABA4",
          },
        },
        {
          section: "Banner",
          changes: {
            color_bg: "#221F1C",
            color_heading: "#B4ABA4",
            color_text: "#B4ABA4",
          },
        },
        {
          section: "Products",
          changes: {
            color_bg: "#221F1C",
            color_heading: "#B4ABA4",
            color_text: "#B4ABA4",
          },
        },
        {
          section: "FooterContent",
          changes: {
            color_bg: "#221F1C",
            color_text: "#B4ABA4",
          },
        },
      ],
    },
    {
      value: "flower",
      label: "Flower",
      preview: ASSETS_URL + "preset-3.png",
      sections: [
        {
          section: "Styles",
          changes: {
            preset: "flower",
            section: "Styles",
            font_heading: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap",
            ],
            font_body: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter&display=swap",
            ],
            color_bg: "#F0E9F1",
            color_text: "#3C0848",
            color_primary: "#D51F5C",
            color_primary_text: "#F0E9F1",
            color_shadow: "rgba(0, 0, 0, 0.12)",
            card_color_bg: "#FFFFFF",
            card_color_text: "#3C0848",
            button_rounded: "4",
            card_rounded: "4",
          },
        },
        {
          section: "TopBanner",
          changes: {
            color_bg: "#3C0848",
            color_text: "#FFFFFF",
          },
        },
        {
          section: "Header",
          changes: {
            color_bg: "#F0E9F1",
            color_text: "#3C0848",
          },
        },
        {
          section: "Banner",
          changes: {
            color_bg: "#F0E9F1",
            color_heading: "#3C0848",
            color_text: "#3C0848",
          },
        },
        {
          section: "Products",
          changes: {
            color_bg: "#F0E9F1",
            color_heading: "#3C0848",
            color_text: "#3C0848",
          },
        },
        {
          section: "FooterContent",
          changes: {
            color_bg: "#F0E9F1",
            color_text: "#3C0848",
          },
        },
      ],
    },
  ],
};
export { Config };
