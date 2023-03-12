import './Editor.css'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import React, { useState, useRef } from 'react'
import Sandbox from '../../components/Sandbox/Sandbox'
import ControlPanel from '../../components/ControlPanel/ControlPanel'
import GradientDisplay from '../../components/GradientDisplay/GradientDisplay'
import TaskBar from '../../components/TaskBar/TaskBar'
import AuthPage from '../AuthPage/AuthPage'

export default function Editor({ setUser, user, openSignIn, setOpenSignIn }) {
  const exportRef = useRef()
  const [open, setOpen] = useState(false)
  const [openClearPrompt, setOpenClearPrompt] = useState(false)
  const [sandbox, setSandbox] = useState({ name: 'yourSandBox' })
  // TODO this needs to be initialized to an empty array in deployment
  const linkedPoint = { x: 300, y: 300, solid: true }
  const linkedPoint2 = { x: 600, y: 0, solid: true }
  const [curves, setCurves] = useState([
    {
      startPoint: { x: 0, y: 600, solid: true },
      endPoint: linkedPoint,
      control1: { x: 100, y: 500, solid: false },
      control2: { x: 200, y: 100, solid: false },
    },
    {
      startPoint: linkedPoint,
      endPoint: linkedPoint2,
      control1: { x: 400, y: 100, solid: false },
      control2: { x: 500, y: 500, solid: false },
    },
    {
      startPoint: linkedPoint2,
      endPoint: { x: 900, y: 0, solid: true },
      control1: { x: 700, y: 100, solid: false },
      control2: { x: 800, y: 500, solid: false },
    },
  ])

  return (
    <>
      <main className="Editor">
        <h1>Sandbox</h1>

        <div className="MainEditorContainer">
          <Sandbox curves={curves} exportRef={exportRef}/>
          <div className="InnerEditorContainer">
            <ControlPanel curves={curves} setCurves={setCurves} />
            <GradientDisplay curves={curves} />
          </div>
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
          sandbox={sandbox}
          setSandbox={setSandbox}
          exportRef={exportRef}
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
