import { sample100points } from '../../utilities/curves-service'
import './GradientDisplayContainer.css'

export default function GradientDisplay({ sandbox, setSandbox }) {
  console.log('------drawing gradient. sandbox: -------------')
  console.log(sandbox)
  const curves = sandbox.curves
  const colorStart = sandbox.colorStart
  const colorEnd = sandbox.colorEnd

  // change CSS color code (#123012) into RGB object ({r:12, g:30, b:12})
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

  // change RGB object ({r:12, g:30, b:12}) into CSS color code (#123012)
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
    r: colorEnd.r - colorStart.r,
    g: colorEnd.g - colorStart.g,
    b: colorEnd.b - colorStart.b,
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
    borderRadius: '10px',
  }

  // update sandbox state when color picker values are changed
  function handleColorChange(event) {
    const newSandbox = {
      ...sandbox,
      [event.target.name]: hexToRGB(event.target.value),
    }
    setSandbox(newSandbox)
  }

  return (
    <div className="GradientDisplayContainer">
      <h3>
        <u>Gradient Display</u>
      </h3>
      <div className="ColorPickerContainer">
        {/* CODE REVIEW: should I be using arrow functions here? */}
        <span className="ColorPickerLabel">
          <label htmlFor="colorStart">start</label>
          <input
            name="colorStart"
            id="colorStart"
            type="color"
            value={RGBToHex(colorStart)}
            onChange={handleColorChange}
          />
        </span>
        <span className="ColorPickerLabel">
          <label htmlFor="colorEnd">stop</label>
          <input
            name="colorEnd"
            id="colorEnd"
            type="color"
            value={RGBToHex(colorEnd)}
            onChange={handleColorChange}
          />
        </span>
      </div>
      <div style={gradientStyle}></div>
    </div>
  )
}
