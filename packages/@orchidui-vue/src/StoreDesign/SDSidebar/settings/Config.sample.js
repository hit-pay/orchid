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
        {
          section: "Styles",
          changes: {
            preset: "default",
            background_color: "#FFFFFF",
            text_color: "#03102F",
            primary_color: "#002771",
            primary_text_color: "#03102F",
            font_body: "Inter",
            font_title: "Inter",
            card_rounded: "4",
            card_shadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
          },
        },
        {
          section: "FooterContent",
          changes: {
            text_color: "#FFFFFF",
            backhround_color: "#03102F",
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
            background_color: "#FFFFFF",
            text_color: "#03102F",
            primary_color: "#002771",
            primary_text_color: "#03102F",
            font_body: "Inter",
            font_title: "Inter",
            card_rounded: "4",
            card_shadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
          },
        },
        {
          section: "FooterContent",
          changes: {
            text_color: "#FFFFFF",
            backhround_color: "#03102F",
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
            background_color: "#FFFFFF",
            text_color: "#03102F",
            primary_color: "#002771",
            primary_text_color: "#03102F",
            font_body: "Inter",
            font_title: "Inter",
            card_rounded: "4",
            card_shadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
          },
        },
        {
          section: "FooterContent",
          changes: {
            text_color: "#FFFFFF",
            backhround_color: "#03102F",
          },
        },
      ],
    },
  ],
};
export { Config };
