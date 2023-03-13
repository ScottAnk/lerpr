import './App.css'
import React, { useState } from 'react'
import Resources from '../Resources/Resources'
import Community from '../Community/Community'
import Editor from '../Editor/Editor'
import Header from '../../components/Header/Header'
import Team from '../Team/Team'
import MySandboxes from '../MySandboxes/MySandboxes'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [openSignIn, setOpenSignIn] = useState(false)

  const linkedPoint = { x: 300, y: 300, solid: true }
  const linkedPoint2 = { x: 600, y: 0, solid: true }
  const defaultSandbox = {
    name: '',
    colorStart: { r: 198, g: 153, b: 128 },
    colorEnd: { r: 162, g: 181, b: 221 },
    curves: [
      {
        startPoint: { x: 0, y: 600, solid: true },
        endPoint: { x: 900, y: 0, solid: true },
        control1: { x: 300, y: 400, solid: false },
        control2: { x: 600, y: 200, solid: false },
      }
    ],
  }

  const [sandbox, setSandbox] = useState({
    name: '',
    colorStart: { r: 198, g: 153, b: 128 },
    colorEnd: { r: 162, g: 181, b: 221 },
    curves: [
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
    ],
  })

  return (
    <main className="App">
      <Header
        user={user}
        setUser={setUser}
        openSignIn={openSignIn}
        setOpenSignIn={setOpenSignIn}
        defaultSandbox={defaultSandbox}
        setSandbox={setSandbox}
      />

      <Routes>
        <Route path="/resources" element={<Resources />} />
        <Route
          path="/community"
          element={<Community sandbox={sandbox} setSandbox={setSandbox} />}
        />
        <Route
          path="/mysandboxes"
          element={<MySandboxes sandbox={sandbox} setSandbox={setSandbox} />}
        />
        <Route
          path="/editor"
          element={
            <Editor
              sandbox={sandbox}
              setSandbox={setSandbox}
              setUser={setUser}
              user={user}
              openSignIn={openSignIn}
              setOpenSignIn={setOpenSignIn}
            />
          }
        />
        <Route path="/team" element={<Team />} />
        <Route path="/*" element={<Navigate to="/editor" />} />
      </Routes>
    </main>
  )
}
