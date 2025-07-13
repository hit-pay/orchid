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
import { ref, watch, onMounted } from 'vue'
const props = defineProps({
  path: {
    type: String,
    default: '/icons/orchidui'
  },
  name: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    default: '24'
  },
  height: {
    type: [String, Number],
    default: '24'
  }
})
const iconRef = ref(null)

const setIconRef = (text, isNew = true) => {
  if (isNew) {
    const iconDom = document.createElement('div')
    iconDom.innerHTML = text
    if (iconDom.querySelector('svg')) {
      iconDom.querySelector('svg').removeAttribute('width')
      iconDom.querySelector('svg').removeAttribute('height')
      iconDom.querySelector('svg').setAttribute('fill', 'currentColor')
      iconRef.value.innerHTML = iconDom.innerHTML

      if (window.ORCHID_ICONS) {
        window.ORCHID_ICONS[props.name] = iconDom.innerHTML
      } else {
        window.ORCHID_ICONS = {
          [props.name]: iconDom.innerHTML
        }
      }
    }
    iconDom.remove()
  } else {
    iconRef.value.innerHTML = text
  }
}

const renderIcon = () => {
  if (window.oc_icons) {
    window.oc_icons = null // clear old icons
  }
  if (window.ORCHID_ICONS && window.ORCHID_ICONS[props.name]) {
    setIconRef(window.ORCHID_ICONS[props.name], false)
  } else {
    fetch(`${props.path}/${props.name}.svg`)
      .then((r) => (r.status === 200 ? r.text() : ''))
      .then((text) => {
        if (text && iconRef.value) {
          setIconRef(text, true)
        }
      })
      .catch(() => {
        console.error(`Icon ${props.name} not found`)
      })
  }
}

onMounted(() => {
  renderIcon()
})

watch(
  () => props.name,
  () => {
    renderIcon()
  }
)
</script>
