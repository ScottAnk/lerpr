import ControlPoint from '../ControlPoint/ControlPoint'
export default function ControlPanel({ curves, setCurves }) {
  // this component expects a curves prop of this format:
  // const curves = [
  //   [
  //     { x: 100, y: 100, solid: true },
  //     { x: 200, y: 500, solid: false },
  //     { x: 300, y: 100, solid: false },
  //     { x: 400, y: 200, solid: true },
  //   ],
  //   [
  //     { x: 400, y: 200, solid: true },
  //     { x: 100, y: 600, solid: false },
  //     { x: 600, y: 400, solid: false },
  //     { x: 600, y: 600, solid: true },
  //   ],
  // ]

  function modifyCurve(curveIndex, modifiedCurve) {
    const newCurves = [...curves]
    newCurves[curveIndex] = modifiedCurve
    setCurves(newCurves)
  }

  return (
    <div>
      <h3>Control Panel</h3>
      <ul>
        {curves.map((curve, index) => (
          <ControlPoint
            key={index}
            curve={curve}
            curveIndex={index}
            modifyCurve={modifyCurve}
          />
        ))}
      </ul>
    </div>
  )
}
