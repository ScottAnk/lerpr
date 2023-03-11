import { sample100points } from '../../utilities/curve-service'
import './GradientDisplayContainer.css'

export default function GradientDisplay({ curves }) {
  // TODO later these colors will come from the sandbox properties
  const colorStart = { r: 0, g: 212, b: 255 }
  const colorStop = { r: 255, g: 0, b: 0 }

  // calculate the range of the gradient colors
  const gamut = {
    r: colorStop.r - colorStart.r,
    g: colorStop.g - colorStart.g,
    b: colorStop.b - colorStart.b,
  }

  // sample points along the curves
  console.log('processing first curve')
  let curveSamples = sample100points(curves[0])
  for (let i = 1; i < curves.length; i++) {
    console.log(`processing curve ${i}`)
    console.log(curves[i])
    curveSamples = curveSamples.concat(sample100points(curves[i]))
  }
  console.log(
    `drawing gradient. processed ${curveSamples.length} curve samples`
  )

  // convert curves's (x,y) coordinates into stops on the gradient
  let gradientStops = ''
  for (let point of curveSamples) {
    console.log('point: ', point)
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
    width: '400px',
    background: gradientString,
  }

  return (
    <div className="GradientDisplayContainer">
      <h3>Gradient Display</h3>
      <div style={gradientStyle}></div>
    </div>
  )
}
