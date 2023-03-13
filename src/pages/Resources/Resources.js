// import Team from '../Team/Team'
import { useNavigate } from 'react-router-dom'
import './Resources.css'

import pierre from '../../assets/pierre.jpeg'

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
        <div className="flex-container">
          <div className="bezier-container">
            <h4>What is a Bézier Curve?</h4>
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
            <h4>Who was Pierre Bézier?</h4>
            <img className="right pierre" src={pierre}></img>
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
            <h3>Want to learn more?</h3>
            <div className="links">
              <h2>The Continuity of Splines</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jvPPXbo87ds"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              {/* <a href="https://www.youtube.com/watch?v=jvPPXbo87ds&t=255s">
                The Continuity of Splines
              </a> */}
            </div>
          </div>
        </div>
        <footer>
          <p className="TeamLink" onClick={handleNavigateTeam}>
            Meet the Team
          </p>
        </footer>
      </>
    </main>
  )
}
