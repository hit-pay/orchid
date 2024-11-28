/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import { mergeConfig } from 'vite'

const config = {
  stories: [
    '../stories/**/*.mdx',
    '../packages/dashboard/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/vue/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
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
