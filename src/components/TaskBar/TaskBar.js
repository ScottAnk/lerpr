import './TaskBar.css'

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
}) {
  async function handleSave() {
    if (!user) setOpenSignIn(true)
    if (user) {
      await sandboxesServices.saveFirstSandbox(sandbox, curves)
    }
  }

  function handleClear() {
    alert('Yeet')
  }

  return (
    <div className="TaskBar">
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
