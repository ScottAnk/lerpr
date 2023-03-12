import './TaskBar.css'
// import 'react-responsive-modal/styles.css'

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
  deleteClass,
  curves,
  setCurves,
  sandbox,
  setSandbox,
  makeThumbnail,
  exportRef,
}) {
  const [openDeletePrompt, setOpenDeletePrompt] = useState(false)

  async function handleThumbnail() {
      // scott helped with this
      const thumbnail = await exportAsImage(exportRef.current)
      setSandbox({...sandbox, dataURL: thumbnail })
    }

  async function handleSave() {
    if (!user) setOpenSignIn(true)
    if (user) {
      const thumbnail = await exportAsImage(exportRef.current)
      setSandbox({...sandbox, dataURL: thumbnail })
      const savedSandbox = await sandboxesServices.saveFirstSandbox(sandbox, curves)
    //  const savedCurves = savedSandbox.curves
    //  setCurves(savedCurves)
     setSandbox(savedSandbox)
    }
  }


  
  
  async function handleDeleteCurve() {
    console.log('wow')
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
