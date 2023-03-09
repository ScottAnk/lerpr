import { useEffect } from 'react'

export default function Sandbox({ curves }) {
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
      for (let point of curve) {
        console.log(point)
        pen.drawCircle(point.x, point.y, 5, point.solid)
      }

      // draw the bezier curve
      pen.beginPath()
      pen.moveTo(curve[0].x, curve[0].y)
      pen.bezierCurveTo(
        curve[1].x,
        curve[1].y,
        curve[2].x,
        curve[2].y,
        curve[3].x,
        curve[3].y
      )
      pen.stroke()
    }

    // mark all the points on the canvas
  }, [curves])

  return (
    <canvas
      id="sandbox"
      width="900"
      height="600"
      style={{ border: 'solid 1px black' }}
    ></canvas>
  )
}
