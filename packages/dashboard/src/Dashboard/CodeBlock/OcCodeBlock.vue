<script setup>
// shiki/core instead of the full 'shiki' entry: the full entry statically
// registers lazy imports for every language and theme (~290 chunks), which
// consumers' bundlers then process and ship
import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'
import { onMounted, ref } from 'vue'
import customTheme from './customTheme'
import jsonLang from 'shiki/dist/langs/json.mjs'

const props = defineProps({
  jsonObject: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    default: 'json'
  }
})

const json = ref()

onMounted(async () => {
  const highlighter = await createHighlighterCore({
    themes: [customTheme],
    langs: [jsonLang],
    engine: createJavaScriptRegexEngine()
  })

  json.value = highlighter.codeToHtml(props.jsonObject || '', {
    theme: 'Custom Theme',
    lang: props.lang
  })
})
</script>

<template>
  <div class="p-5 rounded bg-oc-gray-900 code-block" v-html="json" />
</template>
<style lang="scss">
.code-block {
  * code,
  * pre {
    font-family: 'Fira Code', monospace;
    font-size: 12px;
  }
}
</style>
