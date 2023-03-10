// import Team from '../Team/Team'
import { useNavigate } from 'react-router-dom'
import './Resources.css'

export default function Resources() {
  const navigate = useNavigate()

  function handleNavigateTeam() {
    navigate('/team')
  }

  return (
    <main className="Resources">
      <>
        <h1>Resources</h1>
        {/* link for team page */}
        <div className="grid-container">
          <div className="bezier-container">
            What is a Bézier Curve?
            <div className="curve-info">
              <p>
                A Bézier curve is a parametric curve used in computer graphics
                and related fields. A set of discrete "control points" defines a
                smooth, continuous curve by means of a formula. Usually the
                curve is intended to approximate a real-world shape that
                otherwise has no mathematical representation or whose
                representation is unknown or too complicated. The Bézier curve
                is named after French engineer Pierre Bézier (1910–1999), who
                used it in the 1960s for designing curves for the bodywork of
                Renault cars. Other uses include the design of computer fonts
                and animation.
              </p>
            </div>
          </div>
          <div className="pierre-container">
            Who was Pierre Bézier?
            <div className="pierre-info">
              <p>
                Pierre Étienne Bézier was a French engineer and one of the
                founders of the fields of solid, geometric and physical
                modelling as well as in the field of representing curves,
                especially in computer-aided design and manufacturing systems.
                As an engineer at Renault, he became a leader in the
                transformation of design and manufacturing, through mathematics
                and computing tools, into computer-aided design and
                three-dimensional modeling.
              </p>
            </div>
          </div>
          <div className="links-container">
            Want to learn more?
            <div className='links'>
              <a href='https://www.youtube.com/watch?v=jvPPXbo87ds&t=255s'>
                The Continuity of Splines
              </a>
            </div>
          </div>
        </div>
        <footer>
          <p onClick={handleNavigateTeam}>Team</p>
        </footer>
      </>
    </main>
  )
}
