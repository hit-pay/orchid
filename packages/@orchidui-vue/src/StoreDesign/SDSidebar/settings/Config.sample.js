const ASSETS_URL = "/templates/default/images/";


import { sidebar } from "./SidebarConfig.sample";
import { settings } from "./SettingsConfig.sample";

const Config = {
    sidebar: sidebar, // sidebar menus
    settings: settings, // form
    preset: [
      {
        value: "default",
        label: "Default",
        preview: ASSETS_URL+'preset-1.png',
        sections: [
            {
              key: "Styles",
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
              }
            },
            {
                key: "Footer",
                changes: {
                  text_color: "#FFFFFF",
                  backhround_color: "#03102F"
                }
            }
        ]
    },
    {
      value: "a",
      label: "Default",
      preview: ASSETS_URL+'preset-1.png',
      sections: [
          {
            key: "Styles",
            changes: {
              preset: "a",
              background_color: "#FFFFFF",
              text_color: "#03102F",
              primary_color: "#002771",
              primary_text_color: "#03102F",
              font_body: "Inter",
              font_title: "Inter",
              card_rounded: "4",
              card_shadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
            }
          },
          {
              key: "Footer",
              changes: {
                text_color: "#FFFFFF",
                backhround_color: "#03102F"
              }
          }
      ]
  },
  {
    value: "b",
    label: "Default",
    preview: ASSETS_URL+'preset-1.png',
    sections: [
        {
          key: "Styles",
          changes: {
            preset: "b",
            background_color: "#FFFFFF",
            text_color: "#03102F",
            primary_color: "#002771",
            primary_text_color: "#03102F",
            font_body: "Inter",
            font_title: "Inter",
            card_rounded: "4",
            card_shadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
          }
        },
        {
            key: "Footer",
            changes: {
              text_color: "#FFFFFF",
              backhround_color: "#03102F"
            }
        }
    ]
}
  ],
}
export {   Config };
