import './Editor.css'
import 'react-responsive-modal/styles.css'

import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import Sandbox from '../../components/Sandbox/Sandbox'
import ControlPanel from '../../components/ControlPanel/ControlPanel'
import TaskBar from '../../components/TaskBar/TaskBar'
import AuthPage from '../AuthPage/AuthPage'

export default function Editor({ setUser, user }) {
  const [open, setOpen] = useState(false)
  const [openSignIn, setOpenSignIn] = useState(false)
  const [openClearPrompt, setOpenClearPrompt] = useState(false)
  // TODO this needs to be initialized to an empty array in deployment
  const linkedPoint = { x: 400, y: 200, solid: true }
  const [curves, setCurves] = useState([
    [
      { x: 100, y: 100, solid: true },
      { x: 200, y: 500, solid: false },
      { x: 300, y: 100, solid: false },
      linkedPoint,
    ],
    [
      linkedPoint,
      { x: 100, y: 600, solid: false },
      { x: 600, y: 400, solid: false },
      { x: 600, y: 600, solid: true },
    ],
  ])

  return (
    <>
      <main className="Editor">
        <h1>Sandbox</h1>
        <div className="MainEditorContainer">
          <Sandbox curves={curves} />
          <ControlPanel curves={curves} setCurves={setCurves} />
          {/* GradientPanel */}
        </div>
      </main>
      <div className="FooterEditorContainer">
        <TaskBar
          curves={curves}
          setCurves={setCurves}
          setOpenSignIn={setOpenSignIn}
          user={user}
          openClearPrompt={openClearPrompt}
          setOpenClearPrompt={setOpenClearPrompt}
          open={openClearPrompt}
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
            <AuthPage setUser={setUser} setOpenSignIn={setOpenSignIn} />
          </Modal>
        </div>
      </div>
    </>
  )
}
