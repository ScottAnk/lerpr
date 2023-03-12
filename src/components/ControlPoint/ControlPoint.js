import './ControlPoint.css'

import Coordinate from '../Coordinate/Coordinate'

export default function ControlPoint({ curve, curveIndex, modifyCurve, deleteClass, setDeleteClass }) {
  function modifyCoordinate(coordinateIndex, newCoordinate) {
    const newCurve = { ...curve }
    newCurve[coordinateIndex] = newCoordinate
    modifyCurve(curveIndex, newCurve)
  }

  function selectCurve() {
    setDeleteClass(!deleteClass)
  }

  return (
    <li className="ControlPointContainer">
      <span className="CurveLabel" 
      onClick={selectCurve}
      style={{cursor: "grab"}}
      >curve {curveIndex}</span>
      <span className="XLabel">X</span>
      <span className="YLabel">Y</span>
      {/* list out x.y coordinates */}
      {/* {curve.map((point, index) => ( */}
      <Coordinate
        key={0}
        point={curve.startPoint}
        coordinateIndex={'startPoint'}
        modifyCoordinate={modifyCoordinate}
      />
      <Coordinate
        key={1}
        point={curve.control1}
        coordinateIndex={'control1'}
        modifyCoordinate={modifyCoordinate}
      />
      <Coordinate
        key={2}
        point={curve.control2}
        coordinateIndex={'control2'}
        modifyCoordinate={modifyCoordinate}
      />
      <Coordinate
        key={3}
        point={curve.endPoint}
        coordinateIndex={'endPoint'}
        modifyCoordinate={modifyCoordinate}
      />
    </li>
  )
}
