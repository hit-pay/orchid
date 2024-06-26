<template>
  <div
    ref="pickerTemplateRef"
    class="ck-cp-container"
    :cp-theme="theme"
    :class="disabled ? 'ck-cp-disabled ' : ''"
  >
    <div
      v-if="variant == 'gradient'"
      class="flex justify-end border-b h-[46px] relative mt-[-5px] mb-5"
    >
      <ColorType
        class="mr-auto"
        :variant="variant"
        :mode="mode"
        :model-value="modelValue"
        :iconClasses="iconClasses"
        :gradientType="gradientType"
        @onChangeMode="onChangeMode"
      />
    </div>

    <div v-if="mode == 'gradient' && variant == 'gradient'" class="grid items-center mb-5">
      <GradientBar
        :gradientType="gradientType"
        @onAddColor="addColor"
        @onMouseDown="handleGradientItemOnMouseDown"
        @onDeleteColor="deleteColor"
      />
      <GradientSettings
        v-model:percentageY="gradientAngle.percentageY"
        v-model:angle="gradientAngle.angle"
        v-model:percentageX="gradientAngle.percentageX"
        :inputType="inputType"
        :mode="mode"
        :gradientType="gradientType"
        @onInput="setGradientBarColor"
      />
    </div>
    <div v-else>
      <div v-if="presetColors">
        <div class="text-oc-text-400 text-sm my-3 font-medium">Choose color</div>
        <div class="ck-cp-local-color-conatiner">
          <div
            v-for="color in presetColors"
            :key="`color-${color}`"
            class="ck-cp-color-item !w-[32px] !h-[32px]"
            :style="`background:${color}`"
            @click="handleColorItemOnClick(color)"
          ></div>
        </div>
      </div>
    </div>
    <PickerWrap @onMouseDown="handlePickerStartOnMouseDown" />

    <div class="flex items-center gap-2">
      <PickerHue
        :class="isEyeDropperUsing ? 'max-w-[90%]' : ''"
        v-model="hue"
        @onInput="setHue(false)"
        @onChange="handleHueChange"
      />

      <button
        v-if="isEyeDropperUsing"
        id="cp-btn-eyedropper"
        type="button"
        class="cp-btn"
        style="padding: 7px"
        @click="handleOnClickEyeDropper"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            d="M21.35 1.825l-6.344 6.35-0.588-0.588c-0.781-0.781-2.050-0.781-2.831 0s-0.781 2.050 0 2.831l10 10c0.781 0.781 2.050 0.781 2.831 0s0.781-2.050 0-2.831l-0.587-0.587 6.344-6.35c2.438-2.438 2.438-6.388 0-8.819s-6.387-2.438-8.819 0zM3.462 20.206c-0.938 0.938-1.462 2.212-1.462 3.538v2.65l-1.663 2.494c-0.531 0.794-0.425 1.85 0.25 2.525s1.731 0.781 2.525 0.25l2.494-1.663h2.65c1.325 0 2.6-0.525 3.537-1.462l7.544-7.544-2.831-2.831-7.544 7.544c-0.188 0.188-0.444 0.294-0.706 0.294h-2.256v-2.256c0-0.262 0.106-0.519 0.294-0.706l7.544-7.544-2.831-2.831-7.544 7.544z"
          ></path>
        </svg>
      </button>
    </div>

    <SliderOpacity v-if="showAlpha" v-model="opacity" @onInput="setOpacity($event.target.value)" />

    <div v-show="false" id="ck-cp-target-background"></div>

    <div class="flex gap-3">
      <SelectColorFormat :model-value="inputType" @update:model-value="handleChangeInputType" />
      <div class="w-full flex gap-3" v-if="isReady && showInputSet">
        <InputHex v-if="inputType == 'HEX'" v-model="hexVal" @update:model-value="applyHex" />
        <InputRgbHsl
          v-if="inputType == 'RGB'"
          :rgb-value="colorList.find((item) => item.select == true)"
          @update-rgb-value="handleRGBAInput"
        />
        <InputRgbHsl
          v-if="inputType == 'HSL'"
          input-type="HSL"
          :hsl-value="HSL"
          @update-hsl-value="handleHSLInput"
        />
        <InputOpacity v-if="showAlpha" v-model="opacity" @update:model-value="setOpacity($event)" />
      </div>
    </div>
    <div class="text-oc-text-400 text-sm my-3 font-medium font-inter">Last used</div>
    <div v-if="localColorList.length > 0 && showColorList" class="ck-cp-local-color-conatiner">
      <div
        v-for="color in localColorListFiltered"
        :key="`color-${color}`"
        class="ck-cp-color-item !w-[32px] !h-[32px]"
        :style="`background:${color}`"
        @click="handleColorItemOnClick(color)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, provide, watch, nextTick, computed } from 'vue'

import InputHex from './input/InputHex.vue'
import InputRgbHsl from './input/InputRgbHsl.vue'
import InputOpacity from './input/InputOpacity.vue'
import SelectColorFormat from './input/SelectColorFormat.vue'
import SliderOpacity from './input/SliderOpacity.vue'
import GradientBar from './input/SliderGradient.vue'
import PickerHue from './input/SliderHue.vue'

import GradientSettings from './GradientSettings.vue'
import PickerWrap from './PickerWrap.vue'

import ColorType from './ColorType.vue'

import {
  hex8ToRgba,
  hexToRgb,
  hsl2Hex,
  hslToRgb,
  parseRgb,
  parseRgba,
  rgb2Hex,
  rgbToHsl,
  rgbToHue,
  rgbaToHex8
} from './converters'

const props = defineProps({
  modelValue: {
    default: '',
    type: String
  },
  type: { default: 'HEX8', type: String },
  inputType: { default: 'HEX', type: String },
  theme: { default: 'light', type: String },
  showColorList: { default: true, type: Boolean },
  showEyeDrop: { default: true, type: Boolean },
  showAlpha: { default: true, type: Boolean },
  showInputMenu: { default: true, type: Boolean },
  showInputSet: { default: true, type: Boolean },
  disabled: { default: false, type: Boolean },
  iconClasses: {
    default: () => {
      return {
        linear: '',
        radial: '',
        ruler: '',
        eyeDroper: '',
        inputMenu: '',
        save: '',
        delete: ''
      }
    },
    type: Object
  },
  presetColors: Array,
  variant: {
    type: String,
    default: 'solid'
  },
  lastUsedColors: Array
})

const mode = ref(props.variant == 'gradient' ? 'gradient' : 'solid')

const pickerTemplateRef = ref(null)

const emits = defineEmits(['update:modelValue', 'last-used-pick'])
const emittedValue = ref(props.modelValue)
const emitUpdateModelValue = (value) => {
  emittedValue.value = value
  if (isReady.value) {
    emits('update:modelValue', value)
  }
}

const colorList = ref([
  { id: 1, r: 68, g: 71, b: 119, a: 100, percent: 0, hue: 0, select: true },
  { id: 2, r: 0, g: 0, b: 255, a: 100, percent: 100, hue: 0, select: false }
])

const localColorList = ref(props.lastUsedColors)

watch(
  () => props.lastUsedColors,
  () => {
    localColorList.value = props.lastUsedColors
  },
  {
    deep: true
  }
)

const localColorListFiltered = computed(() => {
  if (props.variant !== 'gradient') {
    return localColorList.value.filter((c) => !c.includes('linear') && !c.includes('radial'))
  }
  return localColorList.value
})

const isEyeDropperUsing = ref(false)
const gradientType = ref('linear')
const gradientAngle = reactive({
  angle: 90,
  percentageX: 50,
  percentageY: 50
})

const hexVal = ref('')
const inputType = ref(props.inputType)
const isReady = ref(false)
const opacitySlider = ref()
const gradientBar = ref()
const canvas = ref()
const pickerWrap = ref()
const pickerPointer = ref()

const HSL = reactive({
  h: 0,
  s: 0,
  l: 0
})

provide('gradientBar', gradientBar)
provide('canvas', canvas)
provide('pickerWrap', pickerWrap)
provide('pickerPointer', pickerPointer)
provide('opacitySlider', opacitySlider)

let divX = 0
let divY = 0
let offsetX = 0
let offsetY = 0
let BottomPoint = 0
let RightPoint = 0

const handlePickerStartOnMouseDown = (event) => {
  if (!pickerWrap.value || !pickerPointer.value) return

  BottomPoint = pickerWrap.value.offsetHeight - pickerPointer.value.offsetHeight
  RightPoint = pickerWrap.value.offsetWidth - pickerPointer.value.offsetWidth

  offsetX = event.clientX - event.target.getBoundingClientRect().left
  offsetY = event.clientY - event.target.getBoundingClientRect().top

  divX = offsetX - pickerPointer.value.offsetWidth / 2
  divY = offsetY - pickerPointer.value.offsetHeight / 2

  pickerPointer.value.style.left = `${divX}px`
  pickerPointer.value.style.top = `${divY}px`

  updatePickerPosition(false)
  onChangeSetToHexValue()

  window.addEventListener('mousemove', handlePickerOnMouseMove)
  window.addEventListener('mouseup', handlePickerOnMouseUp)
}

const handlePickerOnMouseMove = (event) => {
  event.preventDefault()
  const client = pickerWrap.value.getBoundingClientRect()

  const newX = event.clientX - client.left - pickerPointer.value.offsetWidth / 2
  const newY = event.clientY - client.top - pickerPointer.value.offsetHeight / 2

  if (newX >= 0 && newX <= RightPoint) {
    divX = newX
    pickerPointer.value.style.left = `${newX}px`
  } else if (0 > newX) {
    divX = 0
    pickerPointer.value.style.left = `${0}px`
  } else if (newX > RightPoint) {
    divX = RightPoint
    pickerPointer.value.style.left = `${RightPoint}px`
  }

  if (newY >= 0 && newY <= BottomPoint) {
    divY = newY
    pickerPointer.value.style.top = `${newY}px`
  } else if (0 > newY) {
    divY = 0
    pickerPointer.value.style.top = `${0}px`
  } else if (newY > BottomPoint) {
    divY = BottomPoint
    pickerPointer.value.style.top = `${BottomPoint}px`
  }
  updatePickerPosition(false)
  onChangeSetToHexValue()
}

const handlePickerOnMouseUp = () => {
  window.removeEventListener('mousemove', handlePickerOnMouseMove)
  window.removeEventListener('mouseup', handlePickerOnMouseUp)
}

const updatePickerPosition = (isNotUpdate) => {
  if (!isNotUpdate) {
    let SL = calculateSL()
    const val = hslToRgb(hue.value, SL.s, SL.l)
    if (val) {
      if (isReady.value) {
        let colorItem = colorList.value.find((item) => item.select == true)
        if (colorItem) {
          colorItem.r = val.r
          colorItem.g = val.g
          colorItem.b = val.b
        }
      }
      setSliderOpacityColor()
      setGradientBarColor()
    }
  }
}

// HUE FONKSİYONLARI
const hue = ref(0)

const setHue = async (isUpdate) => {
  const { rgb } = hsl2Hex(hue.value, 100, 50)
  redrawTheCanvas(rgb)
  setTimeout(() => {
    updatePickerPosition(isUpdate)
    onChangeSetToHexValue()
  }, 0)
}

const calculateSL = () => {
  let obj = { s: 0, l: 0 }

  let rightLine = pickerWrap.value.offsetWidth - pickerPointer.value.offsetWidth
  let bottomLine = pickerWrap.value.offsetHeight - pickerPointer.value.offsetHeight
  let x = parseInt(pickerPointer.value.style.left)
  let y = parseInt(pickerPointer.value.style.top)

  let hsv_value = 1 - y / bottomLine
  let hsv_saturation = x / rightLine

  obj.l = (hsv_value / 2) * (2 - hsv_saturation)
  obj.s = (hsv_value * hsv_saturation) / (1 - Math.abs(2 * obj.l - 1))

  if (Number.isNaN(obj.s)) {
    obj.s = obj.l
  }

  obj.l = obj.l > 1 ? 1 : obj.l
  obj.s = obj.s > 1 ? 1 : obj.s
  return obj
}

const findColorCoordinates = () => {
  const targetColor = colorList.value.find((item) => item.select == true)

  if (targetColor) {
    const { l, s } = rgbToHsl(targetColor.r, targetColor.g, targetColor.b)
    let lightness = l
    let saturation = s

    if (Number.isNaN(saturation)) {
      saturation = lightness
    }

    let coordinates = { x: 0, y: 0 }
    let rightLine = pickerWrap.value.offsetWidth - pickerPointer.value.offsetWidth
    let bottomLine = pickerWrap.value.offsetHeight - pickerPointer.value.offsetHeight

    const [posx_inv, posy_inv] =
      2 * lightness - 1 < 0
        ? [
            (rightLine * 2 * saturation) / (1 + saturation),
            bottomLine * (1 - lightness * (1 + saturation))
          ]
        : [
            (-rightLine * 2 * (lightness - 1) * saturation) /
              (lightness + saturation - lightness * saturation),
            bottomLine * (lightness - 1) * (saturation - 1)
          ]

    coordinates.x = posx_inv
    coordinates.y = posy_inv
    return coordinates
  } else {
    return null
  }
}

const handleHueChange = () => {
  const selectedItem = colorList.value.find((item) => item.select == true)

  if (selectedItem) {
    selectedItem.hue = hue.value
  }
}

// Opacity Bar Funcs

const opacity = ref(100)
const setOpacity = (value) => {
  if (props.showAlpha) {
    const selectedItem = colorList.value.find((item) => item.select == true)

    if (selectedItem) {
      selectedItem.a = parseInt(value)
      setGradientBarColor()
    }
  }
}
// Gradient Bar Funcs
const setToLeftGradientBarItem = (val) => {
  const handleClient = pickerTemplateRef.value
    ?.querySelector('.gradient-handle-content')
    ?.getBoundingClientRect() // Elementin varlığını kontrol etmek için "?." kullanımı

  if (val === 0) {
    return '0px'
  } else if (val === 100 && handleClient) {
    const gw = gradientBar.value?.offsetWidth || 0 // Değerin null olma durumunu ele almak için "?." kullanımı
    return `${gw - (handleClient.width || 0)}px`
  } else {
    const gw = (gradientBar.value?.offsetWidth || 0) * (val / 100)
    return `${gw - (handleClient?.width || 0) / 2}px`
  }
}

let gradientMouseBar = null
let selectedGradientItem = null

const handleGradientItemOnMouseDown = (event) => {
  const target = event.target
  const offsetParent = target.offsetParent
  if (offsetParent?.id?.includes('clr-gb-')) {
    const id = offsetParent.id.replace('clr-gb-', '')
    selectedGradientItem = offsetParent
    const selectedItem = colorList.value.find((item) => item.select == true)

    if (selectedItem && selectedItem.id != id) {
      const selectedHandle = pickerTemplateRef.value?.querySelector('.gradient-handle.select')
      selectedHandle?.classList.remove('select')
      offsetParent.classList.add('select')

      const selectedItemIndex = colorList.value.findIndex((item) => item.select == true)

      for (let i = 0; i < colorList.value.length; i++) {
        const item = colorList.value[i]
        if (item.id == id) {
          if (selectedItemIndex != -1) {
            colorList.value[selectedItemIndex].select = false
          }
          colorList.value[i].select = true
          opacity.value = item.a
          setToChangeVariebles(item.r, item.g, item.b, item.hue, true)
          setSliderOpacityColor()
          onChangeSetToHexValue()
          break
        }
      }
    }
    window.addEventListener('mousemove', handleGradientMouseMove)
    window.addEventListener('mouseup', handleGradientItemOnMouseUp)
  }
}

const handleGradientItemOnMouseUp = () => {
  window.removeEventListener('mousemove', handleGradientMouseMove)
  window.removeEventListener('mouseup', handleGradientItemOnMouseDown)
}

const handleGradientMouseMove = (e) => {
  e.preventDefault()

  const handleClient = pickerTemplateRef.value
    ?.querySelector('.gradient-handle-content')
    ?.getBoundingClientRect()
  const client = gradientMouseBar?.getBoundingClientRect()
  const lastRightPoint = client.width - handleClient?.width
  let newX = e.clientX - (client.left || 0) - (handleClient?.width || 0) / 2

  if (newX < 0) {
    newX = 0
  } else if (newX > lastRightPoint) {
    newX = lastRightPoint
  }

  if (selectedGradientItem) {
    selectedGradientItem.style.left = `${newX}px`

    const percent = parseFloat(((newX / (client?.width - handleClient?.width)) * 100).toFixed(0))

    const selectedItem = colorList.value.find(
      (item) => item.id == selectedGradientItem?.id.replace('clr-gb-', '')
    )

    if (selectedItem) {
      selectedItem.percent = percent
    }

    setGradientBarColor()
  }
}

const addColor = (e) => {
  const client = gradientMouseBar?.getBoundingClientRect()
  const percent = Math.round(((e.clientX - (client?.left || 0)) / (client?.width || 1)) * 100)

  const selectIndex = colorList.value.findIndex((item) => item.select == true)

  const selectItem = colorList.value[selectIndex]

  const item = {
    id: Date.now(),
    r: selectItem.r,
    g: selectItem.g,
    b: selectItem.b,
    a: selectItem.a,
    percent: percent,
    hue: selectItem.hue,
    select: true
  }

  colorList.value[selectIndex].select = false
  const selectedHandle = pickerTemplateRef.value?.querySelector('.gradient-handle.select')
  selectedHandle?.classList.remove('select')

  colorList.value = [...colorList.value, item]

  createGradientItem(item)
  selectedGradientItem = pickerTemplateRef.value?.querySelector(`#clr-gb-${item.id}`)
  setGradientBarColor()
}

// Extra Funcs

const isColorInStrip = (selectedColor) => {
  if (selectedColor.r == 0 && selectedColor.g == 0 && selectedColor.b == 0) {
    return true
  } else if (selectedColor.r == 255 && selectedColor.g == 255 && selectedColor.b == 255) {
    return true
  } else {
    const ctx = canvas.value.getContext('2d', { willReadFrequently: true })
    const width = canvas.value.width
    const height = canvas.value.height
    const imageData = ctx.getImageData(0, 0, width, height).data

    // Seçilen renk bileşenlerini al
    const selectedR = selectedColor.r
    const selectedG = selectedColor.g
    const selectedB = selectedColor.b

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4 // Her piksel 4 bileşenli (RGBA)
        const r = imageData[i]
        const g = imageData[i + 1]
        const b = imageData[i + 2]

        // Seçilen renkle piksel renklerini karşılaştır
        if (r === selectedR && g === selectedG && b === selectedB) {
          return true // Eşleşme bulundu, renk color-strip içinde
        }
      }
    }

    return false // Eşleşme bulunamadı, renk color-strip dışında
  }
}

const setToChangeVariebles = (r, g, b, hueVal, isNotUpdate) => {
  setTimeout(() => {
    if (!isColorInStrip({ r, g, b })) {
      let coord = findColorCoordinates()
      if (coord) {
        pickerPointer.value.style.left = `${coord.x}px`
        pickerPointer.value.style.top = `${coord.y}px`
      }
      hue.value = hueVal
      setHue(isNotUpdate)
    } else {
      let coord = findColorCoordinates()
      if (coord) {
        pickerPointer.value.style.left = `${coord.x}px`
        pickerPointer.value.style.top = `${coord.y}px`
      }
    }
  }, 0)
}

const setFirstEmptyValue = () => {
  colorList.value.forEach((item) => createGradientItem(item))

  firstSetHue()
  const clr = colorList.value[0]
  hue.value = clr.hue
  setHue(true)

  let coord = findColorCoordinates()
  if (coord) {
    pickerPointer.value.style.left = `${coord.x}px`
    pickerPointer.value.style.top = `${coord.y}px`
  }
  setSliderOpacityColor()
  setGradientBarColor()
}

// SET ITEMS COLORS FUNCS

const createGradientItem = (item) => {
  if (mode.value == 'gradient') {
    let el = document.createElement('div')
    el.id = `clr-gb-${item.id}`
    el.classList.add('gradient-handle')
    el.style.left = setToLeftGradientBarItem(item.percent)

    let elChild = document.createElement('div')
    elChild.classList.add('gradient-handle-content')
    if (item.select == true) {
      el.classList.add('select')
    }

    el.appendChild(elChild)
    if (gradientMouseBar) {
      gradientMouseBar.appendChild(el)
    }
  }
}

const redrawTheCanvas = (rgb) => {
  const context = canvas.value.getContext('2d', { willReadFrequently: true })
  const endX = canvas.value.width
  const endY = canvas.value.height

  context.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
  context.fillRect(0, 0, endX, endY)

  let grdWhite = context.createLinearGradient(0, 0, endX - 12, 0)
  grdWhite.addColorStop(0, 'rgb(255,255,255)')
  grdWhite.addColorStop(1, 'rgba(255,255,255,0)')
  context.fillStyle = grdWhite
  context.fillRect(0, 0, endX, endY)

  let grdBlack = context.createLinearGradient(0, 0, 0, endY)
  grdBlack.addColorStop(0, 'rgba(0,0,0,0)')
  grdBlack.addColorStop(1, 'rgb(0,0,0)')
  context.fillStyle = grdBlack
  context.fillRect(0, 0, endX, endY)
}

const setSliderOpacityColor = () => {
  if (props.showAlpha) {
    let colorItem = colorList.value.find((item) => item.select == true)
    if (colorItem) {
      opacitySlider.value.style.background = ` linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, rgba(${colorItem.r}, ${colorItem.g}, ${colorItem.b}, 100) 97%)`
    }
  }
}

const setGradientBarColor = () => {
  if (mode.value == 'gradient') {
    colorList.value.sort((a, b) => {
      return a.percent - b.percent
    })

    let barBackground = 'linear-gradient(90deg, '
    let gradientBarBackgroundImage

    if (gradientType.value == 'linear') {
      gradientBarBackgroundImage = `linear-gradient(${gradientAngle.angle}deg, `
      for (let i = 0; i < colorList.value.length; i++) {
        const { r, g, b, a, percent } = colorList.value[i]

        if (colorList.value.length - 1 == i) {
          barBackground = barBackground + `rgba(${r},${g},${b},${a / 100}) ${percent}%)`
          gradientBarBackgroundImage =
            gradientBarBackgroundImage + `rgba(${r},${g},${b},${a / 100}) ${percent}%)`
        } else {
          barBackground = barBackground + `rgba(${r},${g},${b},${a / 100}) ${percent}%, `
          gradientBarBackgroundImage =
            gradientBarBackgroundImage + `rgba(${r},${g},${b},${a / 100}) ${percent}%, `
        }
      }
    } else {
      gradientBarBackgroundImage = `radial-gradient(circle at ${gradientAngle.percentageX}% ${gradientAngle.percentageY}%, `
      for (let i = 0; i < colorList.value.length; i++) {
        const { r, g, b, a, percent } = colorList.value[i]

        if (colorList.value.length - 1 == i) {
          barBackground = barBackground + `rgba(${r},${g},${b},${a / 100}) ${percent}%)`
          gradientBarBackgroundImage =
            gradientBarBackgroundImage + `rgba(${r},${g},${b},${a / 100}) ${percent}%)`
        } else {
          barBackground = barBackground + `rgba(${r},${g},${b},${a / 100}) ${percent}%, `
          gradientBarBackgroundImage =
            gradientBarBackgroundImage + `rgba(${r},${g},${b},${a / 100}) ${percent}%, `
        }
      }
    }

    gradientBar.value.style.backgroundImage = barBackground

    let target = pickerTemplateRef.value?.querySelector('#ck-cp-target-background')
    if (target) {
      target.style.backgroundImage = gradientBarBackgroundImage
      if (isReady.value) {
        emitUpdateModelValue(target.style.backgroundImage)
      }
    }
  } else {
    const { r, g, b, a } = colorList.value[0]
    let val = ''

    switch (props.type) {
      case 'HEX8':
        val = rgbaToHex8(r, g, b, a / 100)
        break
      case 'RGBA':
        val = `rgba(${r},${g},${b},${a / 100})`
        break
      case 'RGB':
        val = `rgb(${r},${g},${b})`
        break
      case 'HEX':
        val = rgb2Hex(r, g, b)
        break
      default:
        break
    }
    emitUpdateModelValue(val)
  }
}

const firstSetHue = () => {
  colorList.value.forEach((clr) => {
    clr.hue = rgbToHue(clr.r, clr.g, clr.b)
  })
}

// Menu Func
const setBackgroundType = (event) => {
  gradientType.value = event

  setGradientBarColor()
}

const deleteColor = () => {
  if (colorList.value.length > 2) {
    const index = colorList.value.findIndex((item) => item.select == true)

    if (index !== -1) {
      const deleteItemID = colorList.value[index].id
      colorList.value.splice(index, 1)
      const deleteElement = pickerTemplateRef.value?.querySelector(`#clr-gb-${deleteItemID}`)
      deleteElement?.remove()

      const item = colorList.value[0]
      if (item) {
        item.select = true
        selectedGradientItem = pickerTemplateRef.value?.querySelector(`#clr-gb-${item.id}`)
        selectedGradientItem?.classList.add('select')
        setToChangeVariebles(item.r, item.g, item.b, item.hue, false)
        onChangeSetToHexValue()
        setGradientBarColor()
      }
    }
  }
}

const handleOnClickEyeDropper = () => {
  const el = pickerTemplateRef.value?.querySelector('#cp-btn-eyedropper')
  el?.classList.add('active')

  // @ts-ignore
  const eyeDropper = new EyeDropper()

  eyeDropper
    .open()
    // @ts-ignore
    .then((result) => {
      const { sRGBHex } = result

      const selectedItem = colorList.value.find((item) => item.select == true)
      const val = hexToRgb(sRGBHex)

      if (val) {
        const hueVal = rgbToHue(val.r, val.g, val.b)

        if (selectedItem) {
          selectedItem.hue = hueVal
          selectedItem.r = val.r
          selectedItem.g = val.g
          selectedItem.b = val.b
        }

        if (!isColorInStrip(val)) {
          hue.value = hueVal
          const { rgb } = hsl2Hex(hueVal, 100, 50)
          redrawTheCanvas(rgb)
          const coord = findColorCoordinates()
          if (coord) {
            pickerPointer.value.style.left = `${coord.x}px`
            pickerPointer.value.style.top = `${coord.y}px`
          }
        } else {
          const coord = findColorCoordinates()
          if (coord) {
            pickerPointer.value.style.left = `${coord.x}px`
            pickerPointer.value.style.top = `${coord.y}px`
          }
        }

        onChangeSetToHexValue()
        setSliderOpacityColor()
        setGradientBarColor()

        el?.classList.remove('active')
      }
    })
    .catch(() => {
      el?.classList.remove('active')
    })
}

const handleRGBAInput = (data) => {
  const { value, type } = data
  if (type != 'a') {
    const selectItem = colorList.value.find((item) => item.select == true)
    if (selectItem) {
      selectItem.r = parseInt(value.r)
      selectItem.g = parseInt(value.g)
      selectItem.b = parseInt(value.b)

      const hueVal = rgbToHue(selectItem.r, selectItem.g, selectItem.b)
      selectItem.hue = hueVal
      setToChangeVariebles(selectItem.r, selectItem.g, selectItem.b, selectItem.hue, true)
      setGradientBarColor()
      setSliderOpacityColor()
    }
  } else {
    opacity.value = value
    setGradientBarColor()
    setSliderOpacityColor()
  }
}

const handleHSLInput = (value) => {
  HSL.h = value.h
  HSL.s = value.s
  HSL.l = value.l
  const selectColor = colorList.value.find((color) => color.select == true)
  if (selectColor && !Number.isNaN(HSL.h) && !Number.isNaN(HSL.s) && !Number.isNaN(HSL.l)) {
    const { r, g, b } = hslToRgb(HSL.h, HSL.s / 100, HSL.l / 100)

    selectColor.hue = HSL.h
    selectColor.r = r
    selectColor.g = g
    selectColor.b = b
    setToChangeVariebles(selectColor.r, selectColor.g, selectColor.b, selectColor.hue, true)
    setGradientBarColor()
    setSliderOpacityColor()
  }
}

const applyHex = () => {
  if (hexVal.value) {
    const rgb = hexToRgb(hexVal.value)

    if (rgb) {
      const hueVal = rgbToHue(rgb.r, rgb.g, rgb.b)
      const selectItem = colorList.value.find((item) => item.select == true)
      if (selectItem) {
        selectItem.r = rgb.r
        selectItem.g = rgb.g
        selectItem.b = rgb.b
        selectItem.hue = hueVal

        setToChangeVariebles(rgb.r, rgb.g, rgb.b, selectItem.hue, true)
        setGradientBarColor()
        setSliderOpacityColor()
        handleChangeInputType(inputType.value)
      }
    }
  }
}

const onChangeSetToHexValue = () => {
  const item = colorList.value.find((item) => item.select == true)
  if (item) {
    hexVal.value = rgb2Hex(item.r, item.g, item.b).toUpperCase()
  }
  handleChangeInputType(inputType.value)
}

const handleColorItemOnClick = (color) => {
  emits('last-used-pick', color)
}

/* @ts-ignore */
if (window.EyeDropper) {
  isEyeDropperUsing.value = true
}

const parseVModelString = (value = '') => {
  if (mode.value == 'gradient') {
    let type = value.includes('linear') ? 'linear' : 'radial'
    let newColorList = []

    gradientType.value = type
    if (type == 'linear') {
      let regexPattern = /^linear-gradient\((.*)\)$/
      let matches = value.replace(';', '').trim().match(regexPattern)
      let parsValueRGX = /,\s*(?![^()]*\))/

      if (matches) {
        let valueList = matches[1].split(parsValueRGX)

        for (let i = 0; i < valueList.length; i++) {
          const element = valueList[i]

          let colorObj = {
            id: i,
            r: 0,
            g: 0,
            b: 0,
            a: 100,
            percent: 100,
            hue: 0,
            select: false
          }

          if (element.includes('deg')) {
            gradientAngle.angle = parseInt(element.replace('deg', ''))
          } else if (element.includes('rgba')) {
            let colorVal = element
              .trim()
              .replace(/rgba|\(|\)|%/g, '')
              .replace(/,/g, ' ')
              .split(' ')

            colorVal = colorVal.filter((x) => x.trim() !== '')

            colorObj.r = parseInt(colorVal[0])
            colorObj.g = parseInt(colorVal[1])
            colorObj.b = parseInt(colorVal[2])
            colorObj.a = parseFloat(colorVal[3]) * 100
            colorObj.percent = parseInt(colorVal[4])

            newColorList.push(colorObj)
          } else if (element.includes('rgb')) {
            let colorVal = element
              .trim()
              .replace(/rgb|\(|\)|%/g, '')
              .replace(/,/g, ' ')
              .split(' ')

            colorVal = colorVal.filter((x) => x.trim() !== '')

            colorObj.r = parseInt(colorVal[0])
            colorObj.g = parseInt(colorVal[1])
            colorObj.b = parseInt(colorVal[2])
            colorObj.percent = parseInt(colorVal[3])

            newColorList.push(colorObj)
          }
        }
      }
    } else {
      let regexPattern = /^radial-gradient\((.*)\)$/
      let matches = value.replace(';', '').trim().match(regexPattern)
      let parsValueRGX = /,\s*(?![^()]*\))/

      if (matches) {
        let valueList = matches[1].split(parsValueRGX)

        for (let i = 0; i < valueList.length; i++) {
          const element = valueList[i]

          let colorObj = {
            id: i,
            r: 0,
            g: 0,
            b: 0,
            a: 100,
            percent: 100,
            hue: 0,
            select: false
          }
          if (element.includes('circle at')) {
            let angleXY = element
              .replace('circle at ', '')
              .replace(' ', '')
              .replace(/%/g, ' ')
              .trim()
              .split(' ')
            gradientAngle.percentageX = parseInt(angleXY[0])
            gradientAngle.percentageY = parseInt(angleXY[1])
          } else if (element.includes('rgba')) {
            let colorVal = element
              .replace(/rgba|\(|\)|%/g, '')
              .replace(/,/g, ' ')
              .split(' ')

            colorVal = colorVal.filter((x) => x.trim() !== '')

            colorObj.r = parseInt(colorVal[0])
            colorObj.g = parseInt(colorVal[1])
            colorObj.b = parseInt(colorVal[2])
            colorObj.a = parseFloat(colorVal[3]) * 100
            colorObj.percent = parseInt(colorVal[4])

            newColorList.push(colorObj)
          } else if (element.includes('rgb')) {
            let colorVal = element
              .replace(/rgb|\(|\)|%/g, '')
              .replace(/,/g, ' ')
              .split(' ')

            colorVal = colorVal.filter((x) => x.trim() !== '')

            colorObj.r = parseInt(colorVal[0])
            colorObj.g = parseInt(colorVal[1])
            colorObj.b = parseInt(colorVal[2])
            colorObj.percent = parseInt(colorVal[3])

            newColorList.push(colorObj)
          }
        }
      }
    }

    if (newColorList.length > 1) {
      colorList.value = newColorList
      colorList.value[0].select = true
      opacity.value = colorList.value[0].a
    }
  } else {
    if (value) {
      let color = {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      }
      if (value.includes('#')) {
        if (value.length >= 8) {
          // Color Code HEX8
          color = hex8ToRgba(value)
        } else {
          // Color Code HEX
          let _v = hexToRgb(value)
          if (_v) {
            color.a = 1
            color.r = _v.r
            color.g = _v.g
            color.b = _v.b
          } else {
            color = null
          }
        }
      } else if (value.includes('rgb')) {
        if (value.includes('rgba')) {
          // Color Code RGBA
          color = parseRgba(value)
        } else {
          // Color Code RGB
          let result = parseRgb(value)

          if (result) {
            color.a = 1
            color.r = result.r
            color.g = result.g
            color.b = result.b
          } else {
            color = null
          }
        }
      }

      if (color) {
        colorList.value[0].r = color.r
        colorList.value[0].b = color.b
        colorList.value[0].g = color.g
        colorList.value[0].a = parseInt((color.a * 100).toFixed(0))
        opacity.value = colorList.value[0].a
        colorList.value[0].hue = 0
      }
    }
  }
}

const handleChangeInputType = (event) => {
  const selectColor = colorList.value.find((color) => color.select == true)

  if (selectColor) {
    switch (event) {
      case 'RGB':
        break
      case 'HSL': {
        const { h, s, l } = rgbToHsl(selectColor.r, selectColor.g, selectColor.b)
        HSL.h = Math.round(h)
        HSL.s = Math.round(s * 100)
        HSL.l = Math.round(l * 100)
        break
      }
    }
    inputType.value = event
  }
}

const applyValue = (value) => {
  if (!value) {
    setFirstEmptyValue()
  } else {
    parseVModelString(value)
    setFirstEmptyValue()
  }
}

watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    if (newValue !== oldValue && newValue !== emittedValue.value) {
      colorList.value.forEach((item) => {
        const deleteElement = gradientMouseBar?.querySelector(`#clr-gb-${item.id}`)
        deleteElement?.remove()
      })
      applyValue(newValue)
    }
  }
)

const onChangeMode = (value) => {
  colorList.value.forEach((item) => {
    const deleteElement = gradientMouseBar?.querySelector(`#clr-gb-${item.id}`)
    deleteElement?.remove()
  })
  if (value !== 'solid') {
    mode.value = 'gradient'
    setTimeout(() => {
      gradientMouseBar = pickerTemplateRef.value?.querySelector('.gradient-bar')
      setBackgroundType(value)
      setFirstEmptyValue()
    }, 200)
  } else if (value === 'solid') {
    mode.value = 'solid'

    colorList.value = colorList.value.map((c) => {
      c.select = false
      return c
    })
    colorList.value[0].select = true

    setTimeout(() => {
      applyValue(props.modelValue)
    }, 200)
  }
}

onMounted(() => {
  // check is gradient or solid
  mode.value =
    props.modelValue.includes('linear') || props.modelValue.includes('radial')
      ? 'gradient'
      : 'solid'

  if (mode.value == 'gradient') {
    gradientMouseBar = pickerTemplateRef.value?.querySelector('.gradient-bar')
  }
  applyValue(props.modelValue)
  handleChangeInputType(inputType.value)
  nextTick(() => {
    isReady.value = true
  })
})
</script>

<style lang="scss">
:root {
  --cp-container-bg: #fff;
  --cp-ps-color: #707070;
  --cp-act-color: #5983fc;
  --cp-range-border: #f7f7f7;
  --cp-input-menu-bg: #f5f5f5;
  --cp-border-color: #e5e5e5;
  --cp-range-shadow: #4c86f3;
  --cp-label-color: #787878;
  --cp-container-shadow: rgba(88, 88, 88, 0.507);
  --cp-font-color: #141414;
  --cp-button-color: #f5f5f5;
}

.ck-cp-container {
  left: 0;
  background-color: var(--cp-container-bg);
  border-radius: 1rem;
  padding: 10px;
  width: 311px;
  height: auto;
}

.ck-cp-container[cp-theme='dark'] {
  --cp-container-bg: #212529;
  --cp-input-menu-bg: #242629;
  --cp-border-color: #43474b;
  --cp-label-color: #787878;
  --cp-container-shadow: #2b262696;
  --cp-font-color: #e7e7e7;
  --cp-button-color: #1a1d20;
}

.ck-cp-container * {
  outline: none;
  font-family: Inter, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.ck-cp-controller-bar {
  // height: 35px;
  // background-color: #f1f1f1;
  margin-top: 0.5rem;
  border-radius: 0.475rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.ck-cp-menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cp-btn {
  border: 0;
  height: 28px !important;
  width: 28px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 0.475rem;
  background-color: var(--cp-button-color);
}

.cp-btn * {
  pointer-events: none;
}

.cp-btn svg path {
  fill: var(--cp-ps-color);
}

.cp-btn.active svg path {
  fill: var(--cp-act-color);
}

.cp-btn.active {
  opacity: 1;
  background-color: var(--cp-container-bg);
  border: 1px solid var(--cp-border-color);
}

.cp-picker-wrap {
  width: 100%;
  height: 238px;
  position: relative;
  overflow: hidden;
}

.picker-saturation {
  cursor: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.colour-area-point-circle {
  pointer-events: none;
  cursor: pointer;
  position: absolute;
  width: 12px;
  height: 12px;
  box-shadow:
    0 0 0 1.5px var(--cp-container-bg),
    inset 0 0 1px 1px var(--cp-font-color),
    0 0 1px 2px var(--cp-font-color);
  border-radius: 50%;
}

.colour-area-mask {
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: inset rgba(0, 0, 0, 0.075) 0 0 0 1px;
}

.colour-area {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}

.picker-hue {
  width: 100%;
  height: 14px;
  margin: 1rem 0;
}

.picker-hue-range-slider {
  margin: 0;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  appearance: none;
  height: 100%;
  width: 100%;
  display: block;
  outline: none;
  transition: color 0.05s linear;
  background: linear-gradient(
    to right,
    #ff0000 0%,
    #ffff00 17%,
    #00ff00 33%,
    #00ffff 50%,
    #0000ff 67%,
    #ff00ff 83%,
    #ff0000 100%
  );

  &:focus {
    outline: none;
  }

  &:active,
  &:hover:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  &::-moz-range-track {
    appearance: none;
    opacity: 0;
    outline: none;
  }

  &::-ms-track {
    outline: none;
    appearance: none;
    opacity: 0;
  }

  &::-webkit-slider-thumb {
    box-shadow: 0px -0px 6px 0px var(--cp-range-shadow);
    border: 0.3em solid var(--cp-range-border);
    background-color: var(--cp-act-color);
    height: 24px;
    width: 24px;
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab;
  }

  &::-moz-range-thumb {
    box-shadow: 0px -0px 6px 0px var(--cp-range-shadow);
    border: 0.3em solid var(--cp-range-border);
    background-color: var(--cp-act-color);
    height: 24px;
    width: 24px;
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab;
  }
}

.picker-opacity-slider {
  top: 0px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 14px;
}

.opacity__slider {
  padding-inline-end: 0.65px;
  border-radius: 10px;
  z-index: 10;
  appearance: none;
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  display: block;
  outline: none;
  transition: color 0.05s linear;
  margin: 0;

  &:focus {
    outline: none;
  }

  &:active,
  &:hover:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  &::-moz-range-track {
    appearance: none;
    opacity: 0;
    outline: none;
  }

  &::-ms-track {
    outline: none;
    appearance: none;
    opacity: 0;
  }

  &::-webkit-slider-thumb {
    box-shadow: 0px -0px 6px 0px var(--cp-range-shadow);
    border: 0.3em solid var(--cp-range-border);
    background-color: var(--cp-act-color);
    height: 24px;
    width: 24px;
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab;
  }

  &::-moz-range-thumb {
    box-shadow: 0px -0px 6px 0px var(--cp-range-shadow);
    border: 0.3em solid var(--cp-act-color);
    background-color: var(--cp-act-color);
    height: 24px;
    width: 24px;
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab;
  }
}

.gradient-bar {
  width: 100%;
  position: relative;
  box-sizing: border-box;
}

.gradient-container {
  width: 100%;
  height: 14px;
  border-radius: 10px;
}

.gradient-handle {
  position: absolute;
  z-index: 1;
  top: -5px;
  outline: none;
}

.gradient-handle .gradient-handle-content {
  cursor: ew-resize;
  box-shadow: 0px -0px 6px 0px var(--cp-range-shadow);
  background-color: var(--cp-range-border);
  border-radius: 50%;
  height: 24px;
  width: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.3em solid var(--cp-act-color);
}

.gradient-handle.select .gradient-handle-content {
  background-color: var(--cp-act-color);
  border: 0.3em solid var(--cp-range-border);
}

.gradient-handle.select {
  z-index: 2;
}

.opacity-bar {
  position: relative;
  height: 20px;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 4px;
}

.opacity-bar-background {
  position: absolute;
  background:
    linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.18) 25%,
        transparent 25%,
        transparent 75%,
        rgba(0, 0, 0, 0.18) 75%,
        rgba(0, 0, 0, 0.18) 0px
      )
      0px 0px / 14px 14px repeat padding-box border-box,
    linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.18) 25%,
        transparent 25%,
        transparent 75%,
        rgba(0, 0, 0, 0.18) 75%,
        rgba(0, 0, 0, 0.18) 0px
      )
      7px 7px / 14px 14px repeat padding-box border-box,
    white;
  transform-origin: 0px 0px 0px;
  box-shadow: none;
  text-shadow: none;
  transition: none 0s ease 0s;
  transform: scaleX(1) scaleY(1) scaleZ(1);
  border-radius: 10px;
  width: 100%;
  height: 14px;
  z-index: 0;
}

.ck-cp-input-container {
  width: 100%;
  display: flex;
  gap: 8px;
  margin-top: 0.85rem;
  margin-bottom: 12px;
}

.ck-cp-input-container input {
  background-color: var(--cp-container-bg);
  border: 1px solid var(--cp-border-color);
  color: var(--cp-font-color);
  border-radius: 5px;
}

.ck-cp-input-container input:focus-visible {
  border: 1px solid var(--cp-act-color);
}

.ck-cp-input-container input[type='number']::-webkit-inner-spin-button,
.ck-cp-input-container input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  display: none;
  margin: 0;
}

.ck-cp-input-container .ck-cp-input-content:not(.color-hex) {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 34px;
  height: 30px;
}

.ck-cp-input-container .color-hex {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.ck-cp-input-container .ck-cp-input-content .ck-cp-input-label {
  position: absolute;
  background-color: var(--cp-container-bg);
  font-size: 10px;
  top: -6px;
  left: -6px;
  font-weight: 500;
  color: var(--cp-label-color);
  padding: 0 4px;
  z-index: 1;
  // border-radius: 50%;
}

.ck-cp-local-color-conatiner {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-bottom: 12px;
}

.ck-cp-local-color-conatiner .ck-cp-color-item {
  cursor: pointer;
  width: 23px;
  height: 23px;
  // border: 1px solid var(--cp-border-color);
  border-radius: 5px;
}

.ck-cp-disabled * {
  pointer-events: none !important;
  opacity: 0.75;
}
</style>
