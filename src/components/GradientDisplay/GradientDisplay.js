import { sample100points } from '../../utilities/curves-service'
import './GradientDisplayContainer.css'

export default function GradientDisplay({
  curves,
  colorStart,
  colorStop,
  setColorStart,
  setColorStop,
}) {
  // TODO later these colors will come from the sandbox properties
  // const colorStart = { r: 0, g: 212, b: 255 }
  // const colorStop = { r: 255, g: 0, b: 0 }

  function hexToRGB(hexCode) {
    console.log('hextorgb input: ', hexCode)
    const red = '0x' + hexCode.slice(1, 3)
    const green = '0x' + hexCode.slice(3, 5)
    const blue = '0x' + hexCode.slice(5, 7)

    console.log('hextorgb return: ', {
      r: Number(red),
      g: Number(green),
      b: Number(blue),
    })
    return { r: Number(red), g: Number(green), b: Number(blue) }
  }

  function RGBToHex(rgb) {
    console.log('RGBtoHex input: ', rgb)
    let hexCode = '#'
    hexCode += rgb.r.toString(16).padStart(2, '0')
    hexCode += rgb.g.toString(16).padStart(2, '0')
    hexCode += rgb.b.toString(16).padStart(2, '0')
    console.log('RGBToHex return: ', hexCode)
    return hexCode
  }
  // calculate the range of the gradient colors
  const gamut = {
    r: colorStop.r - colorStart.r,
    g: colorStop.g - colorStart.g,
    b: colorStop.b - colorStart.b,
  }

  // sample points along the curves
  let curveSamples = sample100points(curves[0])
  for (let i = 1; i < curves.length; i++) {
    curveSamples = curveSamples.concat(sample100points(curves[i]))
  }

  // convert curves's (x,y) coordinates into stops on the gradient
  let gradientStops = ''
  for (let point of curveSamples) {
    // CSS gradient stop points needs a % value to position the stop point on the object's dimensions
    const gradientProgess = Math.floor(
      ((point.x - curves[0].startPoint.x) /
        (curves[curves.length - 1].endPoint.x - curves[0].startPoint.x)) *
        100
    )
    const normalizedSamplePoint =
      (point.y - curves[0].startPoint.y) /
      (curves[curves.length - 1].endPoint.y - curves[0].startPoint.y)
    const r = Math.floor(normalizedSamplePoint * gamut.r + colorStart.r)
    const g = Math.floor(normalizedSamplePoint * gamut.g + colorStart.g)
    const b = Math.floor(normalizedSamplePoint * gamut.b + colorStart.b)
    gradientStops += `, rgb(${r},${g},${b}) ${gradientProgess}%`
  }
  const gradientString = `linear-gradient(90deg${gradientStops})`
  const gradientStyle = {
    height: '100px',
    width: '100%',
    boxSizing: 'border-box',
    background: gradientString,
    border: '5px solid #7E5A3D',
    borderRadius: '10px'
  }

  return (
    <div className="GradientDisplayContainer">
      <h3><u>Gradient Display</u></h3>
      <div className="ColorPickerContainer">
        {/* CODE REVIEW: should I be using arrow functions here? */}
        <span className="ColorPickerLabel">
          <label htmlFor="colorStart">start</label>
          <input
            name="colorStart"
            id="colorStart"
            type="color"
            value={RGBToHex(colorStart)}
            onChange={function (event) {
              setColorStart(hexToRGB(event.target.value))
            }}
          />
        </span>
        <span className="ColorPickerLabel">
          <label htmlFor="colorStop">stop</label>
          <input
            name="colorStop"
            id="colorStop"
            type="color"
            value={RGBToHex(colorStop)}
            onChange={function (event) {
              setColorStop(hexToRGB(event.target.value))
            }}
          />
        </span>
      </div>
      <div style={gradientStyle}></div>
    </div>
  )
}
