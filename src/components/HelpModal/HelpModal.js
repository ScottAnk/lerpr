import instructions from '../../assets/ControlPanelInstructions.png'
import './HelpModal.css'

export default function HelpModal() {
  return (
    <>
      <h1><u>Understanding the Sandbox</u></h1>
      <div className="HelpContainer">
        <h3 className="HelpSubHeader">The Components</h3>
        <ul>
          <li>
            <b>Sandbox:</b> Located on the left hand side of the screen, the
            sandbox will render and display any curves and coordinates that are
            input into the control panel.
          </li>
          <li>
            <b>Control Panel:</b> Located on the upper right hand side, the
            control panel allows users to input sets of coorindinates that will
            then generate on the sandbox. When using the control panel, the
            first set of inputs just left of the 'X' and 'Y' coordinates will
            generate the beginning and end point of the curve, with the second
            pair of coordinates generating the control points of the curve.
          </li>
          <li>
            <b>Gradient:</b> Located on the right hand side, under the control
            panel, the gradient panel allows the user to alter that color
            gradient of their curves in the sandbox.
          </li>
        </ul>
        <h3 className="HelpSubHeader">Using the Sandbox</h3>
        <ul>
          <li>
            When using the sandbox, users will be able to create coordinates for
            their points via the control panel. The first column of coordinates
            will generate the start point for the curve. The right-most and
            final column generates the end point for the curve. When both of
            these coordinates have an input, the sandbox will generate a curve
            between these two points.
          </li>
          <li>
            The middle two columns generate the control points for the curve.
            The control points serve as the anchor points that can be edited to
            alter that curvature of any given curves.
          </li>
        </ul>
        <img className="img" style={{marginTop: "30px"}} src={instructions}></img>
      </div>
    </>
  )
}
