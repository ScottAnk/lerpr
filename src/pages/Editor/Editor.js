import './Editor.css'
import { Modal } from 'react-responsive-modal'
import React, { useState, useRef } from 'react'
import Sandbox from '../../components/Sandbox/Sandbox'
import ControlPanel from '../../components/ControlPanel/ControlPanel'
import GradientDisplay from '../../components/GradientDisplay/GradientDisplay'
import TaskBar from '../../components/TaskBar/TaskBar'
import AuthPage from '../AuthPage/AuthPage'

export default function Editor({
  setUser,
  user,
  openSignIn,
  setOpenSignIn,
  sandbox,
  setSandbox,
}) {
  const exportRef = useRef()
  const [open, setOpen] = useState(false)
  const [openClearPrompt, setOpenClearPrompt] = useState(false)

  // selecting specific curves
  const [selectedCurve, setSelectedCurve] = useState()
  const [deleteStyle, setDeleteStyle] = useState(false)

  return (
    <>
      <main className="Editor">
        <h1>{sandbox.name == '' ? 'New Sandbox' : `${sandbox.name}`}</h1>

        <div className="MainEditorContainer">
          <div className="WorkspaceContainer">
            <Sandbox sandbox={sandbox} exportRef={exportRef} />
            <div className="TaskbarContainer">
              <TaskBar
                setOpenSignIn={setOpenSignIn}
                user={user}
                openClearPrompt={openClearPrompt}
                setOpenClearPrompt={setOpenClearPrompt}
                open={openClearPrompt}
                sandbox={sandbox}
                setSandbox={setSandbox}
                exportRef={exportRef}
                deleteStyle={deleteStyle}
                setDeleteStyle={setDeleteStyle}
                selectedCurve={selectedCurve}
                setSelectedCurve={setSelectedCurve}
              />

              <div>
                <Modal
                  classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                  }}
                  open={openSignIn}
                  onClose={() => setOpenSignIn(false)}
                  center
                >
                  <AuthPage setUser={setUser} openSignIn={openSignIn} setOpenSignIn={setOpenSignIn} />
                </Modal>
              </div>
            </div>
          </div>
          <div className="InnerEditorContainer">
            <ControlPanel
              sandbox={sandbox}
              setSandbox={setSandbox}
              deleteStyle={deleteStyle}
              setDeleteStyle={setDeleteStyle}
              selectedCurve={selectedCurve}
              setSelectedCurve={setSelectedCurve}
            />
            <GradientDisplay sandbox={sandbox} setSandbox={setSandbox} />
          </div>
        </div>
      </main>
    </>
  )
}
