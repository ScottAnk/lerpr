import './Sandbox.css'
import { useEffect } from 'react'

export default function Sandbox({ curves }) {
  // TODO express point coordinates as fractions of dynamic canvase dimentions

  // this component expects a curves prop of this format:
  // const curves = [
  //   [
  //     { x: 100, y: 100, solid: true },
  //     { x: 200, y: 500, solid: false },
  //     { x: 300, y: 100, solid: false },
  //     { x: 400, y: 200, solid: true },
  //   ],
  //   [
  //     { x: 400, y: 200, solid: true },
  //     { x: 100, y: 600, solid: false },
  //     { x: 600, y: 400, solid: false },
  //     { x: 600, y: 600, solid: true },
  //   ],
  // ]

  useEffect(() => {
    console.log('use effect')
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

    for (let i = 0; i < curves.length; i++) {
      // loop over each curve in cuves
      const curve = curves[i]
      console.log(curve)

      // draw circles at each anchor and control point
      for (let point in curve) {
        console.log(point)
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
  }, [curves])

  return (
    <canvas className="Sandbox" id="sandbox" width="900" height="600"></canvas>
  )
}