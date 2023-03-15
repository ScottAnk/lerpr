import './ControlPanel.css'

import ControlPoint from '../ControlPoint/ControlPoint'
export default function ControlPanel({
  sandbox,
  setSandbox,
  deleteStyle,
  setDeleteStyle,
  selectedCurve,
  setSelectedCurve,
}) {
  function modifyCurve(curveIndex, modifiedCurve) {
    const newCurves = [...sandbox.curves]
    newCurves[curveIndex] = modifiedCurve
    setSandbox({ ...sandbox, curves: newCurves })
  }

  return (
    <div className="ControlPage">
        <h3>
          <u>Control Panel</u>
        </h3>
      <div className="ControlPanelContainer">
        <div className="ControlPanel">
            <ul>
              {sandbox.curves.map((curve, index) => (
                <ControlPoint
                  key={index}
                  curve={curve}
                  curveIndex={index}
                  modifyCurve={modifyCurve}
                  deleteStyle={deleteStyle}
                  setDeleteStyle={setDeleteStyle}
                  selectedCurve={selectedCurve}
                  setSelectedCurve={setSelectedCurve}
                />
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}
