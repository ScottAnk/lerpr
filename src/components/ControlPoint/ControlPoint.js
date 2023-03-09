import './ControlPoint.css'

import Coordinate from '../Coordinate/Coordinate'

export default function ControlPoint({ curve, number, setCurve }) {
  return (
    <li className="ControlPointContainer">
      <span className="CurveLabel">curve {number}</span>
      <span className="XLabel">X</span>
      <span className="YLabel">Y</span>
      {/* : list of x.y coordinates */}
      {curve.map((point, index) => (
        <Coordinate key={index} point={point} />
      ))}
    </li>
  )
}
