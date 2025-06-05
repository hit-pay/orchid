module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier', 'plugin:storybook/recommended'],
  rules: {
    'vue/require-default-prop': ['off']
  }
}
