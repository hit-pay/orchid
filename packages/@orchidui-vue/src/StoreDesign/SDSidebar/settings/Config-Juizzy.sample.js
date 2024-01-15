const ASSETS_URL = "/templates/default/images/";

import { sidebar } from "./SidebarConfig.sample";
import { settings } from "./SettingsConfig-Juizzy.sample";

const Config = {
  sidebar: sidebar, // sidebar menus
  settings: settings, // form
  presetCustomPreview: ASSETS_URL + "preset-custom.png",
  preset: [
    {
      value: "default",
      label: "Default",
      preview: "/templates/juizzy/images/preset-1.png",
      sections: [
        {
          section: "Styles",
          changes: {
            preset: "default",
            section: "Styles",
            font_heading: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
            ],
            font_body: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter&display=swap"
            ],
            color_bg: "#FFFFFF",
            color_text: "#111111",
            color_primary: "#FE7E21",
            color_primary_text: "#FFFFFF",
            color_shadow: "rgba(0, 0, 0, 0.12)",
            card_color_bg: "#FFFFFF",
            card_color_text: "#111111",
            button_rounded: "4",
            card_rounded: "4"
          }
        },
        {
          section: "TopBanner",
          changes: {
            primary: "#FE7E21",
            primary_text: "#FFFFFF"
          }
        },
        {
          section: "Header",
          changes: {
            color_bg: "#FFFFFF",
            color_text: "#111111"
          }
        },
        {
          section: "Banner",
          changes: {
            color_bg: "#FFFFFF",
            color_heading: "#111111",
            color_text: "#111111"
          }
        },
        {
          section: "Products",
          changes: {
            color_bg: "#FFFFFF",
            color_heading: "#111111",
            color_text: "#111111"
          }
        },
        {
          section: "FooterContent",
          changes: {
            color_bg: "#111111",
            color_text: "#FFFFFF"
          }
        }
      ]
    },
    {
      value: "dark",
      label: "Dark",
      preview: "/templates/juizzy/images/preset-2.png",
      sections: [
        {
          section: "Styles",
          changes: {
            preset: "dark",
            section: "Styles",
            font_heading: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
            ],
            font_body: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter&display=swap"
            ],
            color_bg: "#252525",
            color_text: "#F9F9F9",
            color_primary: "#C38934",
            color_primary_text: "#F9F9F9",
            color_shadow: "rgba(0, 0, 0, 0.12)",
            card_color_bg: "#252525",
            card_color_text: "#F9F9F9",
            button_rounded: "4",
            card_rounded: "4"
          }
        },
        {
          section: "TopBanner",
          changes: {
            color_bg: "#111111",
            color_text: "#FFFFFF"
          }
        },
        {
          section: "Header",
          changes: {
            color_bg: "#252525",
            color_text: "#F9F9F9"
          }
        },
        {
          section: "Banner",
          changes: {
            color_bg: "#252525",
            color_heading: "#F9F9F9",
            color_text: "#F9F9F9"
          }
        },
        {
          section: "Products",
          changes: {
            color_bg: "#252525",
            color_heading: "#F9F9F9",
            color_text: "#F9F9F9"
          }
        },
        {
          section: "FooterContent",
          changes: {
            color_bg: "#111111",
            color_text: "#FFFFFF"
          }
        }
      ]
    },
    {
      value: "grape",
      label: "Grape",
      preview: "/templates/juizzy/images/preset-3.png",
      sections: [
        {
          section: "Styles",
          changes: {
            preset: "grape",
            section: "Styles",
            font_heading: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
            ],
            font_body: [
              "'Inter', sans-serif",
              "https://fonts.googleapis.com/css2?family=Inter&display=swap"
            ],
            color_bg: "#F1F6F5",
            color_text: "#130832",
            color_primary: "#5219F2",
            color_primary_text: "#FFFFFF",
            color_shadow: "rgba(0, 0, 0, 0.12)",
            card_color_bg: "#FFFFFF",
            card_color_text: "#3C0848",
            button_rounded: "4",
            card_rounded: "4"
          }
        },
        {
          section: "TopBanner",
          changes: {
            color_bg: "#3D0781",
            color_text: "#FFFFFF"
          }
        },
        {
          section: "Header",
          changes: {
            color_bg: "#F1F6F5",
            color_text: "#130832"
          }
        },
        {
          section: "Banner",
          changes: {
            color_bg: "#F1F6F5",
            color_text: "#130832"
          }
        },
        {
          section: "Products",
          changes: {
            color_bg: "#F1F6F5",
            color_text: "#130832",
            category_color_bg: "#5219F2",
            category_color_text: "#FFFFFF"
          }
        },
        {
          section: "FooterContent",
          changes: {
            color_bg: "#3D0781",
            color_text: "#FFFFFF"
          }
        }
      ]
    }
  ]
};
export { Config };
