import './TaskBar.css'
// import 'react-responsive-modal/styles.css'

import exportAsImage from '../../utilities/export-as-image'
import { Modal } from 'react-responsive-modal'
import { useState } from 'react'
import * as sandboxesServices from '../../utilities/sandboxes-services'
import * as curvesServices from '../../utilities/curves-service'
import instructions from '../../assets/ControlPanelInstructions.png'

export default function TaskBar({
  setOpenSignIn,
  user,
  openClearPrompt,
  setOpenClearPrompt,
  deleteClass,
  curves,
  setCurves,
  sandbox,
  setSandbox,
  makeThumbnail,
  exportRef,
}) {
  const [openDeletePrompt, setOpenDeletePrompt] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)

  async function handleSave() {
    if (!user) setOpenSignIn(true)
    if (user) {
      const savedSandbox = await sandboxesServices.saveFirstSandbox(
        sandbox,
        curves
      )
      //  const savedCurves = savedSandbox.curves
      //  setCurves(savedCurves)
      setSandbox(savedSandbox)
    }
  }

  async function handleThumbnail() {
    // scott helped with this
    const thumbnail = await exportAsImage(exportRef.current)
    setSandbox({ ...sandbox, dataURL: thumbnail })
  }

  async function handleDeleteCurve() {
    console.log('wow')
  }

  async function handleClear() {
    const newSandbox = await curvesServices.clearAllCurves(sandbox)
    setSandbox(newSandbox)
    setCurves(newSandbox.sandbox.curves)
    setOpenClearPrompt(false)
  }

  async function handleDelete() {
    await sandboxesServices.deleteSandbox(sandbox)
  }

  async function testSandbox() {
    console.log(sandbox)
  }

  return (
    <div className="TaskBar">
      <button onClick={testSandbox}>testing testing</button>
      <button onClick={handleThumbnail}>make thumbnail</button>
      <button
        style={{
          backgroundColor: deleteClass ? 'yellow' : '',
        }}
        onClick={handleDeleteCurve}
        value={curves}
      >
        Delete Selected Curve
      </button>
      <button onClick={() => setOpenClearPrompt(true)}>Clear Sandbox</button>
      <button onClick={handleSave}>Save Sandbox</button>
      <button onClick={() => setOpenHelp(true)}>Help</button>
      <Modal
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
        open={openHelp}
        onClose = {() => setOpenHelp(false)}
        center
      >
        <h1>Understanding the Sandbox</h1>
        <h3>The Components</h3>
        <ul>
          <li>
            The Sandbox: Located on the left hand side of the screen, the
            sandbox will render and display any curves and coordinates that are
            input into the control panel.
          </li>
          <li>
            The Control Panel: Located on the upper right hand side, the control
            panel allows users to input sets of coorindinates that will then
            generate on the sandbox. When using the control panel, the first set
            of inputs just left of the 'X' and 'Y' coordinates will generate the
            beginning and end point of the curve, with the second pair of
            coordinates generating the control points of the curve.
          </li>
          <li>
            The Gradient: Located on the right hand side, under the control
            panel, the gradient panel allows the user to alter that color
            gradient of their curves in the sandbox.
          </li>
        </ul>
        <h3>Using the Sandbox</h3>
        <p>
          When using the sandbox, users will be able to create coordinates for
          their points via the control panel. The first column of coordinates
          will generate the start point for the curve. The right-most and final
          column generates the end point for the curve. When both of these
          coordinates have an input, the sandbox will generate a curve between
          these two points.
        </p>
        <p>
          The middle two columns generate the control points for the curve. The
          control points serve as the anchor points that can be edited to alter
          that curvature of any given curves.
        </p>
        <img src = {instructions}></img>
      </Modal>
      <button onClick={() => setOpenDeletePrompt(true)}>Delete Sandbox</button>
      <Modal
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
        open={openClearPrompt}
        onClose={() => setOpenClearPrompt(false)}
        center
      >
        <h3>Are you sure you want to clear your Sandbox?</h3>
        <button onClick={() => setOpenClearPrompt(false)}>No</button>
        <button onClick={handleClear}>Yes</button>
      </Modal>
      <Modal
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
        open={openDeletePrompt}
        onClose={() => setOpenDeletePrompt(false)}
        center
      >
        <h3>Are you sure you want to delete your Sandbox?</h3>
        <h3>
          <b>this cannot be undone!</b>
        </h3>
        <button onClick={() => setOpenDeletePrompt(false)}>No</button>
        <button onClick={handleDelete}>Yes</button>
      </Modal>
    </div>
  )
}
