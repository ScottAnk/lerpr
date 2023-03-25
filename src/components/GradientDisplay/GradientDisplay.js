import { sample100points } from '../../utilities/curves-service'
import {
  hexToRGB,
  RGBToHex,
  samplesToCSS,
} from '../../utilities/colors-service'

import './GradientDisplayContainer.css'

export default function GradientDisplay({ sandbox, setSandbox }) {
  const curves = sandbox.curves
  const colorStart = sandbox.colorStart
  const colorEnd = sandbox.colorEnd

  // sample points along the curves
  let curveSamples = sample100points(curves[0])

  for (let i = 1; i < curves.length; i++) {
    curveSamples = curveSamples.concat(sample100points(curves[i]))
  }

  // convert curves's (x,y) coordinates into stops on the gradient
  const gradientString = samplesToCSS(curveSamples, colorStart, colorEnd)

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
      <div className="ColorToolsContainer">
        <div className="ColorPickerContainer">
          <span className="ColorPickerLabel">
            <label htmlFor="colorStart">start</label>
            <input
              className="ColorInput"
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
              className="ColorInput"
              name="colorEnd"
              id="colorEnd"
              type="color"
              value={RGBToHex(colorEnd)}
              onChange={handleColorChange}
            />
          </span>
        </div>
        <div
          className="GradientBar"
          style={{ background: gradientString }}
        ></div>
      </div>
    </div>
  )
}
