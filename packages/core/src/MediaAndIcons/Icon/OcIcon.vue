<template>
  <svg
    ref="iconRef"
    :width="`${props.width}px`"
    :height="`${props.height}px`"
    :viewBox="`0 0 ${props.width} ${props.height}`"
    xmlns="http://www.w3.org/2000/svg"
  ></svg>
</template>

<script setup>
import { ref, watch, onMounted, nextTick, onUnmounted } from 'vue'

const props = defineProps({
  /** Base URL path where SVG icon files are served from. */
  path: {
    type: String,
    default: '/icons/orchidui'
  },
  /** Icon file name (without `.svg` extension). Fetched from `{path}/{name}.svg`. */
  name: {
    type: String,
    required: true
  },
  /** Width of the rendered SVG in pixels. */
  width: {
    type: [String, Number],
    default: '24'
  },
  /** Height of the rendered SVG in pixels. */
  height: {
    type: [String, Number],
    default: '24'
  },
  /** Fill value applied to the SVG root. Use "none" for stroke-based icons. */
  fill: {
    type: String,
    default: 'currentColor'
  }
})

const iconRef = ref(null)
const uid = Math.random().toString(36).slice(2, 8)
let abortController = null

// Only allow safe CSS color values to prevent attribute injection via fill prop.
const sanitizeFill = (fill) => {
  if (/^[a-zA-Z0-9#(),.\s%_-]+$/.test(fill)) return fill
  return 'currentColor'
}

// Only allow icon names with safe filesystem characters to prevent path traversal.
const sanitizeName = (name) => name.replace(/[^a-zA-Z0-9_/-]/g, '')

// Scope all id="x" and url(#x) references with a per-instance prefix so that
// icons sharing generic clip-path IDs (e.g. id="a") don't collide when multiple
// icons are rendered in the same document.
const scopeIds = (html) => {
  const ids = new Set()
  const idRe = /\bid="([^"]+)"/g
  let m
  while ((m = idRe.exec(html)) !== null) {
    ids.add(m[1])
  }
  let result = html
  for (const id of ids) {
    const safe = `oc-${props.name}-${uid}-${id}`
    result = result.replaceAll(`id="${id}"`, `id="${safe}"`)
    result = result.replaceAll(`url(#${id})`, `url(#${safe})`)
    result = result.replaceAll(`href="#${id}"`, `href="#${safe}"`)
  }
  return result
}

const setIconRef = (text, isNew = true) => {
  const safeFill = sanitizeFill(props.fill)

  if (isNew) {
    const iconDom = document.createElement('div')
    iconDom.innerHTML = text
    if (iconDom.querySelector('svg')) {
      iconDom.querySelector('svg').removeAttribute('id')
      iconDom.querySelector('svg').removeAttribute('width')
      iconDom.querySelector('svg').removeAttribute('height')
      // Always cache with currentColor; fill is applied at inject time so each
      // instance can use a different fill without invalidating the shared cache.
      iconDom.querySelector('svg').setAttribute('fill', 'currentColor')

      if (window.ORCHID_ICONS) {
        window.ORCHID_ICONS[props.name] = iconDom.innerHTML
      } else {
        window.ORCHID_ICONS = {
          [props.name]: iconDom.innerHTML
        }
      }

      if (iconRef.value) {
        iconRef.value.innerHTML = scopeIds(
          iconDom.innerHTML.replace(/(<svg\b[^>]*)\bfill="[^"]*"/, `$1fill="${safeFill}"`)
        )
      }
    }
    iconDom.remove()
  } else if (iconRef.value) {
    iconRef.value.innerHTML = scopeIds(
      text.replace(/(<svg\b[^>]*)\bfill="[^"]*"/, `$1fill="${safeFill}"`)
    )
  }
}

const renderIcon = () => {
  const safeName = sanitizeName(props.name)
  if (!safeName) return

  if (window.ORCHID_ICONS && window.ORCHID_ICONS[safeName]) {
    setIconRef(window.ORCHID_ICONS[safeName], false)
    return
  }

  // Abort any in-flight fetch for a previous name to prevent stale renders.
  if (abortController) abortController.abort()
  abortController = new AbortController()

  fetch(`${props.path}/${safeName}.svg`, { signal: abortController.signal })
    .then((r) => (r.status === 200 ? r.text() : ''))
    .then((text) => {
      if (text && text.includes('<svg') && iconRef.value) {
        setIconRef(text, true)
      }
    })
    .catch((err) => {
      if (err.name !== 'AbortError') {
        console.error(`Icon ${safeName} not found`)
      }
    })
}

onMounted(async () => {
  await nextTick()
  if (iconRef.value) {
    renderIcon()
  }
})

onUnmounted(() => {
  if (abortController) abortController.abort()
})

watch(
  () => props.name,
  () => {
    if (iconRef.value) {
      renderIcon()
    }
  }
)

watch(
  () => props.fill,
  () => {
    if (iconRef.value) {
      renderIcon()
    }
  }
)
</script>
