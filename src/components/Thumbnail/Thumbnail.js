import './Thumbnail.css'
import { Link, useLocation } from 'react-router-dom'

export default function Thumbnail({ sandboxInstance, setSandbox }) {
  let location = useLocation()

  function handleLink() {
    setSandbox(sandboxInstance)
  }

  // reformatting json date to month-day-year
  const date = sandboxInstance.createdAt
  const newDay = date.substring(8, 10)
  const newMonth = date.substring(5, 7)
  const newYear = date.substring(0, 4)

  const reformattedDate = `${newMonth}/${newDay}/${newYear}`

  return (
    <>
      <Link to="/editor" onClick={() => handleLink()}>
        <div className="thumbnail-card">
          <img
            src={sandboxInstance.dataURL}
            className="thumbnail"
            alt="thumbnail"
          ></img>
          <h4>
            <u>'{sandboxInstance.name}'</u>
          </h4>
          {location.pathname === '/mysandboxes' ? null : (
            <div>
              <h5>By {sandboxInstance.owner.name}</h5>
              <p style={{marginTop: '0.5em', fontSize: '16px'}}>
                <b>Last Updated:</b> {reformattedDate}
              </p>
            </div>
          )}
        </div>
      </Link>
    </>
  )
}
