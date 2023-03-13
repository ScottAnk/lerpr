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
    console.log(sandboxName)
    const namedSandbox = { ...sandbox }
    namedSandbox.name = sandboxName
    setSandbox(namedSandbox)
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
    console.log(sandbox.name)
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

  async function testSandbox() {
    console.log(sandbox)
    console.log(sandbox.name)
  }

  return (
    <div className="TaskBar">
      <button onClick={testSandbox}>testing testing</button>

      <button
        disabled={deleteStyle ? false : true}
        style={{
          backgroundColor: deleteStyle ? '#FFD494' : '',
        }}
        onClick={handleDeleteCurve}
      >
        Delete Selected Curve
      </button>
      <button onClick={() => setOpenClearPrompt(true)}>Clear Sandbox</button>
      <button
        onClick={() =>
          !user
            ? setOpenSignIn(true)
            : sandbox.name == ''
            ? setOpenFirstSave(true)
            : handleUpdate()
        }
      >
        Save Sandbox
      </button>
      <button onClick={() => setOpenHelp(true)}>Help</button>
      <button onClick={() => setOpenDeletePrompt(true)}>Delete Sandbox</button>
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
          <h2>Name your sandbox to save:</h2>
          <label>Enter Sandbox Name Here</label>
          <input onChange={nameSandbox} />
          <button type="submit">Save Sandbox</button>
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
        <button onClick={handleDeleteSandbox}>Yes</button>
      </Modal>
    </div>
  )
}
