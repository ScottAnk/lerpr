import instructions from '../../assets/ControlPanelInstructions.png'
import './HelpModal.css'

export default function HelpModal() {
  return (
    <>
      <h2 style={{margin: '0.5em 0em'}}>Understanding the Sandbox</h2>
      <div className="HelpContainer">
        <h4 className="HelpSubHeader">The Components</h4>
        <ul>
          <li className="HelpListItem">
            <b style={{fontSize: '20px'}}>Sandbox:</b> Located on the left hand side of the screen, the
            sandbox will render and display any curves and coordinates that are
            input into the control panel.
          </li>
          <li className="HelpListItem">
            <b style={{fontSize: '20px'}}>Control Panel:</b> Located on the upper right hand side, the
            control panel allows users to input sets of coorindinates that will
            then generate on the sandbox. When using the control panel, the
            first set of inputs just left of the 'X' and 'Y' coordinates will
            generate the beginning and end point of the curve, with the second
            pair of coordinates generating the control points of the curve.
          </li>
          <li className="HelpListItem">
            <b style={{fontSize: '20px'}}>Gradient:</b> Located on the right hand side, under the control
            panel, the gradient panel allows the user to alter that color
            gradient of their curves in the sandbox.
          </li>
        </ul>
        <h4 className="HelpSubHeader">Using the Sandbox</h4>
        <ul style={{marginBottom: '2em'}}>
          <li>
            When using the sandbox, users will be able to create coordinates for
            their points via the control panel. The first column of coordinates
            will generate the start point for the curve. The right-most and
            final column generates the end point for the curve.<br/>When both of
            these coordinates have an input, the sandbox will generate a curve
            between these two points.
          </li>
          <li>
            The middle two columns generate the control points for the curve.
            The control points serve as the anchor points that can be edited to
            alter that curvature of any given curves.
          </li>
        </ul>
        <img className="img" alt="Control Panel Instructions" src={instructions}></img>
      </div>
    </>
  )
}
