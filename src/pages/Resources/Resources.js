// import Team from '../Team/Team'
import { useNavigate } from 'react-router-dom'
import './Resources.css'

import lerpr from '../../assets/lerpr.png'
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
            <h2>
              <u>Why Lerpr?</u>
            </h2>
            <div className="lerpr-info">
              <p>
                Lerpr is short for Linear Interpolation which is used for the
                creation of Bézier curves using linear polynomials.
                Interpolation helps estimate the value between two points.
              </p>
            </div>
            <div className="curve-info">
              <h2>
                <u>What is a Bézier Curve?</u>
              </h2>
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
          <div className="links-container">
            <h2>
              <u>Curves In Action</u>
            </h2>
            <div className="links">
              <h4>"The Continuity of Splines"</h4>
              <p>by Freya Holmér</p>
              <iframe
                width="450"
                height="275"
                src="https://www.youtube.com/embed/jvPPXbo87ds"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              {/* <a href="https://www.youtube.com/watch?v=jvPPXbo87ds&t=255s">
                The Continuity of Splines
              </a> */}
            </div>
          </div>
          <div className="pierre-container">
            <div className="pierre-info">
              <h2 style={{ marginBottom: '1.25em' }}>
                <u>Who was Pierre Bézier?</u>
              </h2>
              <img className="pierre" alt="Pierre Bézier" src={pierre}></img>
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
        </div>
        <footer className="Footer">
          <div className="Sources">
            <h4 style={{ textAlign: 'center' }}>Sources</h4>
            <ul className="SourcesList">
              <li>
                <a
                  className="ResourceLinks"
                  href="https://www.toppr.com/guides/maths-formulas/linear-interpolation-formula/"
                >
                  Linear Interpolation
                </a>
              </li>
              <li>
                <a
                  className="ResourceLinks"
                  href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve"
                >
                  Bézier Curves
                </a>
              </li>
              <li>
                <a
                  className="ResourceLinks"
                  href="https://en.wikipedia.org/wiki/Pierre_B%C3%A9zier"
                >
                  Pierre Bézier
                </a>
              </li>
            </ul>
          </div>

          <div className="TeamDiv">
            <p className="TeamLink" onClick={handleNavigateTeam}>
              Meet the Team
            </p>
            <img className="lerp-coin" alt="Lerpr Logo" src={lerpr}></img>
          </div>
        </footer>
      </>
    </main>
  )
}
