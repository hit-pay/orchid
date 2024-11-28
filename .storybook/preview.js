/** @type { import('@storybook/vue3').Preview } */

import '../src/scss/main.scss'

import { setup } from '@storybook/vue3'

setup((app) => {
  app.config.globalProperties.window = window
  window.oc_icons = JSON.stringify([
    {
      name: '',
      svg: ''
    }
  ])
})

const preview = {
  parameters: {
    backgrounds: {
      disable: true,
      default: '',
      values: []
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (story) => ({
      mounted() {
        let params = new URL(location.href)
        let storybookGlobalsThemes = params.searchParams.get('globals')
        if (storybookGlobalsThemes?.includes('theme:dark')) {
          document.querySelector('body').setAttribute('class', 'dark')
        } else {
          document.querySelector('body').setAttribute('class', 'light')
        }
      },
      components: { story },
      template: '<story />'
    })
  ]
}

export default preview

export const globalTypes = {
  theme: {
    defaultValue: 'light',
    toolbar: {
      // The label to show for this toolbar item
      title: 'Theme',
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Change title based on selected value
      dynamicTitle: true
    }
  }
}
