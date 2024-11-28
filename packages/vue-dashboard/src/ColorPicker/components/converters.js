const parseRgb = (rgbString) => {
  // rgb() değerini kontrol etmek için bir regex deseni kullanabiliriz
  const rgbRegex = /^rgb\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*)\)$/i

  // rgb() değerinin doğruluğunu kontrol edelim
  if (!rgbRegex.test(rgbString)) {
    return null
  }

  // rgb() değerinden R, G ve B bileşenlerini ayıklayalım
  const result = rgbRegex.exec(rgbString)
  if (!result) {
    return null
  }
  const red = parseInt(result[1].trim(), 10)
  const green = parseInt(result[2].trim(), 10)
  const blue = parseInt(result[3].trim(), 10)

  // Parçalanan değerleri nesne olarak döndürelim
  return {
    r: red,
    g: green,
    b: blue
  }
}

const parseRgba = (rgbaString) => {
  // rgba() değerini kontrol etmek için bir regex deseni kullanabiliriz
  const rgbaRegex = /^rgba?\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*),(\s*[\d.]+\s*)\)$/i

  // rgba() değerinin doğruluğunu kontrol edelim
  if (!rgbaRegex.test(rgbaString)) {
    return null
  }

  // rgba() değerinden R, G, B ve A bileşenlerini ayıklayalım
  const result = rgbaRegex.exec(rgbaString)
  if (!result) {
    return null
  }
  const red = parseInt(result[1].trim(), 10)
  const green = parseInt(result[2].trim(), 10)
  const blue = parseInt(result[3].trim(), 10)
  const alpha = parseFloat(result[4].trim())

  // Parçalanan değerleri nesne olarak döndürelim
  return {
    r: red,
    g: green,
    b: blue,
    a: alpha
  }
}

const hex8ToRgba = (hex8) => {
  // HEX8 değerini kontrol etmek için bir regex deseni kullanabiliriz
  const hex8Regex = /^#?([a-f\d]{8})$/i

  // HEX8 değerinin doğruluğunu kontrol edelim
  if (!hex8Regex.test(hex8)) {
    return null
  }

  // HEX8 değerinden R, G, B ve A bileşenlerini ayıklayalım
  const result = hex8Regex.exec(hex8)
  if (!result) {
    return null
  }
  const colorHex = result[1]
  const alphaHex = colorHex.substring(6, 8)

  const red = parseInt(colorHex.substring(0, 2), 16)
  const green = parseInt(colorHex.substring(2, 4), 16)
  const blue = parseInt(colorHex.substring(4, 6), 16)
  const alpha = parseInt(alphaHex, 16) / 255 // HEX8'deki alpha değerini 0-1 aralığına dönüştürme

  // RGBA değerini döndürelim
  return { r: red, g: green, b: blue, a: alpha }
}

const rgbaToHex8 = (r, g, b, a) => {
  function componentToHex(c) {
    const hex = c.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  const red = componentToHex(Math.round(r))
  const green = componentToHex(Math.round(g))
  const blue = componentToHex(Math.round(b))
  const alpha = componentToHex(Math.round(a * 255))

  return `#${red}${green}${blue}${alpha}`
}

const hexToRgb = (hex) => {
  try {
    let val = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i, // @ts-ignore
        (m, r, g, b) => '#' + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      ?.map((x) => parseInt(x, 16))

    let r = val?.[0]
    let g = val?.[1]
    let b = val?.[2]

    if (
      Number.isNaN(r) ||
      Number.isNaN(g) ||
      Number.isNaN(b) ||
      r === undefined ||
      g === undefined ||
      b === undefined
    ) {
      return null
    } else {
      return {
        r: r,
        g: g,
        b: b
      }
    }
  } catch (error) {
    return null
  }
}

const rgbToHue = (r, g, b) => {
  r = r / 255
  g = g / 255
  b = b / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let hue

  if (max === r) {
    hue = (g - b) / (max - min)
  } else if (max === g) {
    hue = 2 + (b - r) / (max - min)
  } else {
    hue = 4 + (r - g) / (max - min)
  }

  hue *= 60

  if (hue < 0) {
    hue += 360
  }

  if (Number.isNaN(hue)) hue = 0
  return hue
}

const hsl2Rgb = (h, s, l) => {
  s = s / 100
  l = l / 100
  let c,
    x,
    m,
    rgb = []
  c = (1 - Math.abs(2 * l - 1)) * s
  x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  m = l - c / 2

  if (h >= 0 && h < 60) rgb = [c, x, 0]
  if (h >= 60 && h < 120) rgb = [x, c, 0]
  if (h >= 120 && h < 180) rgb = [0, c, x]
  if (h >= 180 && h < 240) rgb = [0, x, c]
  if (h >= 240 && h < 300) rgb = [x, 0, c]
  if (h >= 300 && h <= 360) rgb = [c, 0, x]

  return rgb.map((v) => Math.round(255 * (v + m)))
}

const rgb2Hex = (r, g, b) => {
  let rgb = b | (g << 8) | (r << 16)
  return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

const hsl2Hex = (h, s, l) => {
  let rgb = hsl2Rgb(h, s, l)
  return { rgb, hexA: rgb2Hex(rgb[0], rgb[1], rgb[2]) }
}

const rgbToHsl = (r, g, b) => {
  let min,
    max,
    i,
    l,
    s,
    maxcolor,
    h = 0,
    rgb = []
  rgb[0] = r / 255
  rgb[1] = g / 255
  rgb[2] = b / 255
  min = rgb[0]
  max = rgb[0]
  maxcolor = 0
  for (i = 0; i < rgb.length - 1; i++) {
    if (rgb[i + 1] <= min) {
      min = rgb[i + 1]
    }
    if (rgb[i + 1] >= max) {
      max = rgb[i + 1]
      maxcolor = i + 1
    }
  }
  if (maxcolor === 0) {
    h = (rgb[1] - rgb[2]) / (max - min)
  }
  if (maxcolor === 1) {
    h = 2 + (rgb[2] - rgb[0]) / (max - min)
  }
  if (maxcolor === 2) {
    h = 4 + (rgb[0] - rgb[1]) / (max - min)
  }

  if (isNaN(h)) {
    h = 0
  }
  h = h * 60
  if (h < 0) {
    h = h + 360
  }
  l = (min + max) / 2
  if (min === max) {
    s = 0
  } else {
    if (l < 0.5) {
      s = (max - min) / (max + min)
    } else {
      s = (max - min) / (2 - max - min)
    }
  }
  // eslint-disable-next-line no-self-assign
  s = s
  return { h: h, s: s, l: l }
}
const hslToRgb = (h, s, l) => {
  // Hue değerini 0 ile 360 arasına dönüştürün (istenirse 0 ile 1 arasında olabilir)
  h = (h % 360) / 360

  // Doygunluk ve Parlaklık değerlerini 0 ile 1 arasına sınırlayın
  s = Math.min(1, Math.max(0, s))
  l = Math.min(1, Math.max(0, l))

  // RGB değerlerini hesaplayın
  let r, g, b
  if (s === 0) {
    r = g = b = l
  } else {
    const hueToRgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hueToRgb(p, q, h + 1 / 3)
    g = hueToRgb(p, q, h)
    b = hueToRgb(p, q, h - 1 / 3)
  }

  // RGB değerlerini 0 ile 255 arasına dönüştürün

  r = Math.round(r * 255)
  g = Math.round(g * 255)
  b = Math.round(b * 255)

  return { r, g, b }
}

export {
  hex8ToRgba,
  hexToRgb,
  hsl2Hex,
  hsl2Rgb,
  hslToRgb,
  parseRgb,
  parseRgba,
  rgb2Hex,
  rgbToHsl,
  rgbToHue,
  rgbaToHex8
}
