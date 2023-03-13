import './Sandbox.css'
import { useEffect } from 'react'

export default function Sandbox({ sandbox, exportRef }) {
  // TODO express point coordinates as fractions of dynamic canvase dimentions

  useEffect(() => {
    const board = document.querySelector('#sandbox')
    const pen = board.getContext('2d')

    pen.clearRect(0, 0, board.width, board.height)

    // add utility function to pen for drawing marker circles
    pen.drawCircle = function (x, y, r, solid = false) {
      this.beginPath()
      this.arc(x, y, r, 0, 360)
      this.stroke()
      if (solid) {
        this.fill()
      }
    }

    for (let i = 0; i < sandbox.curves.length; i++) {
      // loop over each curve in cuves
      const curve = sandbox.curves[i]

      // draw circles at each anchor and control point
      for (let point in curve) {
        pen.drawCircle(curve[point].x, curve[point].y, 5, curve[point].solid)
      }

      // draw the bezier curve
      pen.beginPath()
      pen.moveTo(curve.startPoint.x, curve.startPoint.y)
      pen.bezierCurveTo(
        curve.control1.x,
        curve.control1.y,
        curve.control2.x,
        curve.control2.y,
        curve.endPoint.x,
        curve.endPoint.y
      )
      pen.stroke()
    }

    // mark all the points on the canvas
  }, [sandbox])

  return (
    <canvas
      className="Sandbox"
      id="sandbox"
      width="900px"
      height="600px"
      ref={exportRef}
    ></canvas>
  )
}
