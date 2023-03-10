import './ControlPoint.css'

import Coordinate from '../Coordinate/Coordinate'

export default function ControlPoint({ curve, curveIndex, modifyCurve }) {
  function modifyCoordinate(coordinateIndex, newCoordinate) {
    const newCurve = [...curve]
    newCurve[coordinateIndex] = newCoordinate
    modifyCurve(curveIndex, newCurve)
  }

  return (
    <li className="ControlPointContainer">
      <span className="CurveLabel">curve {curveIndex}</span>
      <span className="XLabel">X</span>
      <span className="YLabel">Y</span>
      {/* list out x.y coordinates */}
      {curve.map((point, index) => (
        <Coordinate
          key={index}
          point={point}
          coordinateIndex={index}
          modifyCoordinate={modifyCoordinate}
        />
      ))}
    </li>
  )
}
