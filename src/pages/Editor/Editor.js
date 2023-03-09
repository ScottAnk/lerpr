import React, { useState } from 'react'

import Sandbox from '../../components/Sandbox/Sandbox'
import ControlPanel from '../../components/ControlPanel/ControlPanel'

export default function Resources() {
  const [user, setUser] = useState()
  // TODO this needs to be initialized to an empty array in deployment
  const [curves, setCurves] = useState([
    [
      { x: 100, y: 100, solid: true },
      { x: 200, y: 500, solid: false },
      { x: 300, y: 100, solid: false },
      { x: 400, y: 200, solid: true },
    ],
    [
      { x: 400, y: 200, solid: true },
      { x: 100, y: 600, solid: false },
      { x: 600, y: 400, solid: false },
      { x: 600, y: 600, solid: true },
    ],
  ])

  return (
    <main className="Editor">
      <>
        <h1>Sandbox</h1>
        <Sandbox curves={curves} />
        <ControlPanel curves={curves} setCurves={setCurves} />
      </>
    </main>
  )
}
