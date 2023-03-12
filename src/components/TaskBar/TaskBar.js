import './TaskBar.css'

import exportAsImage from '../../utilities/export-as-image'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import * as sandboxesServices from '../../utilities/sandboxes-services'

export default function TaskBar({
  setOpenSignIn,
  user,
  openClearPrompt,
  setOpenClearPrompt,
  curves,
  setCurves,
  sandbox,
  setSandbox,
  makeThumbnail,
  exportRef
}) {
  async function handleSave() {
    if (!user) setOpenSignIn(true)
    if (user) {
      await sandboxesServices.saveFirstSandbox(sandbox, curves)
    }
  }

  async function handleThumbnail() {
    const thumbnail = await exportAsImage(exportRef.current)
    setSandbox({...sandbox, dataURL: thumbnail })
  }

  function handleClear() {
    alert('Yeet')
  }

  return (
    <div className="TaskBar">
      <button onClick={handleThumbnail}>make thumbnail</button>
      <button onClick={() => setOpenClearPrompt(true)}>Clear</button>
      <button>New Sandbox</button>
      <button onClick={handleSave}>Save</button>
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
    </div>
  )
}
