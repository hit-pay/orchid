<script setup>
import ExampleBlock from './ExampleBlock.vue'

const props = defineProps({
  meta: { type: Object, required: true },
  examples: { type: Array, default: () => [] }
})

function renderMd(md) {
  if (!md) return ''
  return md
    // fenced code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
      `<pre class="bg-oc-gray-100 rounded-lg p-4 overflow-x-auto text-xs my-4 font-mono leading-relaxed">${escHtml(code.trim())}</pre>`
    )
    // inline code
    .replace(/`([^`\n]+)`/g, (_, c) =>
      `<code class="bg-oc-gray-100 text-oc-text px-1 py-0.5 rounded text-[0.8em] font-mono">${escHtml(c)}</code>`
    )
    // bold
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    // tables — pass through as-is in a scrollable wrapper
    .replace(/((?:\|.*\|\n?)+)/g, (table) =>
      `<div class="overflow-x-auto my-4"><table class="text-sm border-collapse w-full">${renderTable(table)}</table></div>`
    )
    // h2
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold text-oc-text mt-8 mb-3 pb-2 border-b border-oc-gray-200">$1</h2>')
    // h3
    .replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold text-oc-text mt-6 mb-2">$1</h3>')
    // hr
    .replace(/^---$/gm, '<hr class="border-oc-gray-200 my-6" />')
    // paragraphs: split on double newlines
    .split(/\n{2,}/)
    .map(p => p.startsWith('<') ? p : `<p class="text-oc-text-400 leading-relaxed">${p}</p>`)
    .join('\n')
}

function renderTable(rawTable) {
  const rows = rawTable.trim().split('\n')
  let html = ''
  rows.forEach((row, i) => {
    const cells = row.split('|').filter((_, ci) => ci > 0 && ci < row.split('|').length - 1)
    if (cells.every(c => /^[-: ]+$/.test(c))) return // separator row
    const tag = i === 0 ? 'th' : 'td'
    const cls = i === 0
      ? 'px-3 py-2 text-left text-xs font-semibold text-oc-text-300 uppercase tracking-wider bg-oc-gray-50 border border-oc-gray-200'
      : 'px-3 py-2 text-sm text-oc-text-400 border border-oc-gray-200 align-top'
    html += `<tr>${cells.map(c => `<${tag} class="${cls}">${c.trim()}</${tag}>`).join('')}</tr>`
  })
  return html
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-8 py-10">
    <div class="mb-10">
      <span class="text-xs font-mono font-medium text-oc-accent-1 bg-oc-accent-1-50 px-2 py-0.5 rounded">
        {{ meta.package }}
      </span>
      <h1 class="text-3xl font-bold text-oc-text mt-3 mb-4">{{ meta.title }}</h1>
      <div
        v-if="meta.description"
        class="text-sm leading-relaxed [&_code]:font-mono"
        v-html="renderMd(meta.description)"
      />
    </div>

    <div v-for="example in examples" :key="example.id" class="mb-16">
      <ExampleBlock :example="example" />
    </div>
  </div>
</template>
