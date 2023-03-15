import './TaskBar.css'
import HelpModal from '../HelpModal/HelpModal'
import exportAsImage from '../../utilities/export-as-image'
import { Modal } from 'react-responsive-modal'
import { useState } from 'react'
import * as sandboxesServices from '../../utilities/sandboxes-services'
import * as curvesServices from '../../utilities/curves-service'

export default function TaskBar({
  setOpenSignIn,
  user,
  openClearPrompt,
  setOpenClearPrompt,
  deleteStyle,
  setDeleteStyle,
  selectedCurve,
  setSelectedCurve,
  sandbox,
  setSandbox,
  exportRef,
}) {
  const [openDeletePrompt, setOpenDeletePrompt] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)
  const [openFirstSave, setOpenFirstSave] = useState(false)

  function nameSandbox(event) {
    event.preventDefault()
    const sandboxName = event.target.value
    const namedSandbox = { ...sandbox }
    namedSandbox.name = sandboxName
    setSandbox(namedSandbox)
  }

  async function splitCurve() {
    const startPointX = sandbox.curves[selectedCurve].startPoint.x
    const startPointY = sandbox.curves[selectedCurve].startPoint.y
    const endPointX = sandbox.curves[selectedCurve].endPoint.x
    const endPointY = sandbox.curves[selectedCurve].endPoint.y
    const splitPoint = {
      x: (startPointX + endPointX) / 2,
      y: (startPointY + endPointY) / 2,
      solid: true,
    }
    const splitCurve1 = {
      startPoint: sandbox.curves[selectedCurve].startPoint,
      endPoint: splitPoint,
      control1: {
        x: (splitPoint.x + startPointX) / 3,
        y: (splitPoint.y + startPointY) / 3,
        solid: false,
      },
      control2: {
        x: ((splitPoint.x + startPointX) * 2) / 3,
        y: ((splitPoint.y + startPointY) * 2) / 3,
        solid: false,
      },
    }
    const splitCurve2 = {
      startPoint: splitPoint,
      endPoint: sandbox.curves[selectedCurve].endPoint,
      control1: {
        x: (splitPoint.x + endPointX) / 3,
        y: (splitPoint.y + endPointY) / 3,
        solid: false,
      },
      control2: {
        x: ((splitPoint.x + endPointX) * 2) / 3,
        y: ((splitPoint.y + endPointY) * 2) / 3,
        solid: false,
      },
    }
    const newSandbox = { ...sandbox }
    newSandbox.curves.splice(selectedCurve, 1, splitCurve1, splitCurve2)
    setSandbox(newSandbox)
  }

  async function handleSave(event) {
    event.preventDefault()
    setOpenFirstSave(true)
    const thumbnail = await exportAsImage(exportRef.current)
    const savedSandbox = await sandboxesServices.createNewSandbox({
      ...sandbox,
      dataURL: thumbnail,
    })
    setSandbox(savedSandbox)
    setOpenFirstSave(false)
    // sets the state of the sandbox from false to true upon first save of the sandbox
    // this is what determines if "updateSandbox" should run rather than "createNewSandbox"
  }

  async function handleUpdate() {
    const thumbnail = await exportAsImage(exportRef.current)
    const updatedSandbox = {
      ...sandbox,
      dataURL: thumbnail,
    }
    await sandboxesServices.updateSandbox(updatedSandbox)
    setSandbox(updatedSandbox)
  }

  async function handleDeleteCurve() {
    const newCurves = await curvesServices.deleteSelectedCurve(
      sandbox.curves,
      selectedCurve
    )
    const newSandbox = { ...sandbox, curves: newCurves }
    setSandbox(newSandbox)
    setSelectedCurve(null)
    setDeleteStyle(false)
  }

  async function handleClear() {
    const newSandbox = await curvesServices.clearAllCurves(sandbox)
    setSandbox(newSandbox)
    setOpenClearPrompt(false)
  }

  async function handleDeleteSandbox() {
    await sandboxesServices.deleteSandbox(sandbox)
    setOpenDeletePrompt(false)
  }

  return (
    <div className="TaskBar">
      {/* <button className="TaskButton" onClick={testSandbox}>
        testing testing
      </button> */}
      <div className="TaskBarTitle">
        <h5>Taskbar:</h5>
      </div>
      <button
        style={{ backgroundColor: '#fffcb3' }}
        className="TaskButton"
        onClick={() => setOpenHelp(true)}
      >
        Help
      </button>
      <button
        className="TaskButton"
        disabled={deleteStyle ? false : true}
        style={{
          backgroundColor: deleteStyle ? '#FFD494' : '',
          color: deleteStyle ? 'black' : 'black',
        }}
        onClick={handleDeleteCurve}
      >
        Delete Selected Curve
      </button>
      <button
        disabled={deleteStyle ? false : true}
        style={{
          backgroundColor: deleteStyle ? '#FFD494' : '',
          color: deleteStyle ? 'black' : 'black',
        }}
        className="TaskButton"
        onClick={splitCurve}
      >
        Split Curve
      </button>
      <button className="TaskButton" onClick={() => setOpenClearPrompt(true)}>
        Clear Workspace
      </button>
      <button
        className="TaskButton"
        onClick={() =>
          !user
            ? setOpenSignIn(true)
            : sandbox.name === '' || user._id !== sandbox.owner._id
            ? setOpenFirstSave(true)
            : handleUpdate()
        }
      >
        Save Sandbox
      </button>
      <button
        className="TaskButton"
        style={{ backgroundColor: 'lightcoral', color: 'white' }}
        onClick={() => setOpenDeletePrompt(true)}
      >
        Delete Sandbox
      </button>
      <Modal
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
        open={openHelp}
        onClose={() => setOpenHelp(false)}
        center
      >
        <HelpModal />
      </Modal>
      <Modal
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
        open={openFirstSave}
        onClose={() => setOpenFirstSave(false)}
        center
      >
        <form className="SandboxSaveForm" onSubmit={handleSave}>
          <h2>
            <u>Name your sandbox to save</u>:
          </h2>
          <label>Enter Sandbox Name Here</label>
          <input
            className="AuthInput"
            placeholder="Sandbox Name"
            onChange={nameSandbox}
          />
          <button className="AuthButton" type="submit">
            Save
          </button>
          <div>
            <p style={{marginBottom: '1em'}}>
              Once you save your sandbox, you'll be able to access it from the
              "My Sandboxes" page.
            </p>
            <p>
              Additionally, your newly created sandbox will be added to the community page!
            </p>
            <p>
              Lerpr users will be able to interact with your sandbox, even make a
              copy, <i>but not directly overwrite your original version.</i>
            </p>
          </div>
        </form>
      </Modal>
      <Modal
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
        open={openClearPrompt}
        onClose={() => setOpenClearPrompt(false)}
        center
      >
        <div className="ClearSandbox">
          <h1>
            <u>Clear Workspace</u>
          </h1>
          <h3>Are you sure you want to clear your Workspace?</h3>
          <p>
            Clearing your workspace will delete any modified curves you may have
            added to your existing sandbox.
          </p>
          <a>
            <i>
              (your current sandbox will not be deleted by clearing your
              workspace)
            </i>
          </a>
          <div className="ButtonRow">
            <button
              className="AuthButton"
              onClick={() => setOpenClearPrompt(false)}
            >
              No
            </button>
            <button className="AuthButton" onClick={handleClear}>
              Yes
            </button>
          </div>
        </div>
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
        <div className="ClearSandbox">
          <h1>
            <u>Delete Sandbox</u>
          </h1>
          <h4>Are you sure you want to delete your Sandbox?</h4>
          <h3>
            <b>THIS CANNOT BE UNDONE!</b>
          </h3>
          <div className="ButtonRow">
            <button
              className="AuthButton"
              onClick={() => setOpenDeletePrompt(false)}
            >
              No
            </button>
            <button className="AuthButton" onClick={handleDeleteSandbox}>
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
