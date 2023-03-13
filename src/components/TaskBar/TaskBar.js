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
  curves,
  setCurves,
  selectedCurve,
  setSelectedCurve,
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
      const savedSandbox = await sandboxesServices.saveFirstSandbox(sandbox)
      setSandbox(savedSandbox)
    }
  }

  async function handleDeleteCurve() {
    const newCurves = await curvesServices.deleteSelectedCurve(
      curves,
      selectedCurve
    )
    // need to make a new deep copy of newCurves bc React UseEffect logic does not recognize
    // newCurves as a new value
    setCurves([...newCurves])
    const newSandbox = { ...sandbox, curves: newCurves }
    setSandbox(newSandbox)
    setSelectedCurve(null)
    setDeleteStyle(false)
  }

  async function handleClear() {
    const newSandbox = await curvesServices.clearAllCurves(sandbox)
    setSandbox(newSandbox)
    setCurves(newSandbox.curves)
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
      <button disabled={deleteStyle ? false : true}
        style={{
          backgroundColor: deleteStyle ? '#FFD494' : '',
        }}
        onClick={handleDeleteCurve}
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
        onClose={() => setOpenHelp(false)}
        center
      >
        <HelpModal />
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
