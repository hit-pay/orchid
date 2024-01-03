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
        
      ],
    },
    {
      value: "wood",
      label: "Wood",
      preview: ASSETS_URL + "preset-2.png",
      sections: [
        
      ],
    },
    {
      value: "flower",
      label: "Flower",
      preview: ASSETS_URL + "preset-3.png",
      sections: [
        
      ],
    },
  ],
};
export { Config };
