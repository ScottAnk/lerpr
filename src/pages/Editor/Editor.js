import React, { useState } from 'react'

import Sandbox from '../../components/Sandbox/Sandbox'
import ControlPanel from '../../components/ControlPanel/ControlPanel'
import GradientDisplay from '../../components/GradientDisplay/GradientDisplay'

export default function Resources() {
  const [user, setUser] = useState()
  // TODO this needs to be initialized to an empty array in deployment
  const linkedPoint = { x: 400, y: 200, solid: true }
  const [curves, setCurves] = useState([
    {
      startPoint: { x: 100, y: 100, solid: true },
      endPoint: linkedPoint,
      control1: { x: 200, y: 500, solid: false },
      control2: { x: 300, y: 100, solid: false },
    },
    {
      startPoint: linkedPoint,
      endPoint: { x: 600, y: 600, solid: true },
      control1: { x: 100, y: 600, solid: false },
      control2: { x: 600, y: 400, solid: false },
    },
  ])

  return (
    <main className="Editor">
      <>
        <h1>Sandbox</h1>
        <Sandbox curves={curves} />
        <ControlPanel curves={curves} setCurves={setCurves} />
        <GradientDisplay curves={curves} />
      </>
    </main>
  )
}
