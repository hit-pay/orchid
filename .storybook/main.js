import { createRequire } from "node:module";
import { dirname, join } from "node:path";
/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import { mergeConfig } from 'vite'

const require = createRequire(import.meta.url);

const config = {
  stories: [
    '../stories/**/*.mdx',
    '../packages/dashboard/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/core/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs")
  ],

  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {}
  },

  core: {},

  async viteFinal(baseConfig, { configType }) {
    let basePath = '/'

    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
      basePath = '/storybook/'
    }

    return mergeConfig(baseConfig, {
      base: basePath
    })
  }
}
export default config

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
