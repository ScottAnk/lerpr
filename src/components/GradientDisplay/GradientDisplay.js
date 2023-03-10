import { sample100points } from '../../utilities/curve-service'

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

  // sample points along the curve
  let curveSamples = sample100points(curves[0])

  // convert curve's (x,y) coordinates into stops on the gradient
  let gradientStops = ''
  for (let point of curveSamples) {
    console.log('point: ', point)
    const gradientProgess = Math.floor(
      ((point.x - curves[0].startPoint.x) /
        (curves[0].endPoint.x - curves[0].startPoint.x)) *
        100
    )
    const normalizedCurveHeight =
      (point.y - curves[0].startPoint.y) /
      (curves[0].endPoint.y - curves[0].startPoint.y)
    const r = Math.floor(normalizedCurveHeight * gamut.r + colorStart.r)
    const g = Math.floor(normalizedCurveHeight * gamut.g + colorStart.g)
    const b = Math.floor(normalizedCurveHeight * gamut.b + colorStart.b)
    gradientStops += `, rgb(${r},${g},${b}) ${gradientProgess}%`
  }
  const gradientString = `linear-gradient(90deg${gradientStops})`
  const gradientStyle = {
    height: '100px',
    width: '400px',
    background: gradientString,
  }

  return <div style={gradientStyle}></div>
}
