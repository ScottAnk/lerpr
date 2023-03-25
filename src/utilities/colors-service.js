//import Color class from ac-colors
const Color = window.Color

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
export function samplesToCSS(curveSamples, colorStart, colorEnd) {
  const acColorStart = new Color({
    color: [colorStart.r, colorStart.g, colorStart.b],
    type: 'rgb',
    //TODO remove this, it's just to make test output readable
    precision: 1,
  })
  const acColorEnd = new Color({
    color: [colorEnd.r, colorEnd.g, colorEnd.b],
    type: 'rgb',
    //TODO remove this, it's just to make test output readable
    precision: 1,
  })
  console.log('colorStart', acColorStart.lchuvString)
  console.log('colorEnd', acColorEnd.lchuvString)

  const lchStart = acColorStart.lchuv
  const lchEnd = acColorEnd.lchuv
  // calculate the range of the gradient colors
  const gamut = {
    l: lchEnd[0] - lchStart[0],
    c: lchEnd[1] - lchStart[1],
    h: lchEnd[2] - lchStart[2],
    start: lchStart,
  }
  //two special cases (may condense to one)
  //  1. start and end hue are so far apart that the shortest path is to go in reverse and wrap around
  //  2. same as case 1 but start hue is greater, so it's going forward to wrap around

  if (gamut.h > 180) {
    gamut.h = gamut.h - 360
    gamut.wrap = true
  } else if (gamut.h < -180) {
    gamut.h = 360 + gamut.h
    gamut.wrap = true
  }

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
    const l = normalizedSamplePoint * gamut.l + gamut.start[0]
    const c = normalizedSamplePoint * gamut.c + gamut.start[1]
    let h = normalizedSamplePoint * gamut.h + gamut.start[2]
    if (h < 0) {
      h = h + 360
    } else if (h > 360) {
      h = h - 360
    }

    const samplePointColor = new Color({ color: [l, c, h], type: 'lchuv' })
    const [r, g, b] = samplePointColor.rgb
    gradientStops += `, rgb(${r},${g},${b}) ${gradientProgess}%`
  }
  const gradientString = `linear-gradient(90deg${gradientStops})`
  return gradientString
}
