/**change CSS color code (#123012) into RGB object ({r:12, g:30, b:12}) */
export function hexToRGB(hexCode) {
  const red = '0x' + hexCode.slice(1, 3)
  const green = '0x' + hexCode.slice(3, 5)
  const blue = '0x' + hexCode.slice(5, 7)

  return { r: Number(red), g: Number(green), b: Number(blue) }
}

/**change RGB object ({r:12, g:30, b:12}) into CSS color code (#123012) */
export function RGBToHex(rgb) {
  let hexCode = '#'
  hexCode += rgb.r.toString(16).padStart(2, '0')
  hexCode += rgb.g.toString(16).padStart(2, '0')
  hexCode += rgb.b.toString(16).padStart(2, '0')
  return hexCode
}

/** Create CSS gradient string based on gamut and curve samples*/
export function samplesToCSS(curveSamples, gamut) {
  let gradientStops = ''
  for (let point of curveSamples) {
    // CSS gradient stop points needs a % value to position the stop point on the object's dimensions
    const gradientProgess = Math.floor(
      ((point.x - curveSamples[0].x) /
        (curveSamples[curveSamples.length - 1].x - curveSamples[0].x)) *
        100
    )
    const normalizedSamplePoint =
      (point.y - curveSamples[0].y) /
      (curveSamples[curveSamples.length - 1].y - curveSamples[0].y)
    const r = Math.floor(normalizedSamplePoint * gamut.r + gamut.start.r)
    const g = Math.floor(normalizedSamplePoint * gamut.g + gamut.start.g)
    const b = Math.floor(normalizedSamplePoint * gamut.b + gamut.start.b)
    gradientStops += `, rgb(${r},${g},${b}) ${gradientProgess}%`
  }
  const gradientString = `linear-gradient(90deg${gradientStops})`
  return gradientString
}
