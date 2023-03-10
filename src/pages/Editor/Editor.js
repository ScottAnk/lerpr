import React, { useState } from 'react'

import Sandbox from '../../components/Sandbox/Sandbox'
import ControlPanel from '../../components/ControlPanel/ControlPanel'
import GradientDisplay from '../../components/GradientDisplay/GradientDisplay'

export default function Resources() {
  const [user, setUser] = useState()
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
